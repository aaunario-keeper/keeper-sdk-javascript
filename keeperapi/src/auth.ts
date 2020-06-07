import {ClientConfiguration, LoginError} from "./configuration";
import {KeeperEndpoint, prepareApiRequest} from "./endpoint";
import {platform} from "./platform";
import {
    AuthorizedCommand,
    KeeperCommand,
    LoginCommand,
    LoginResponse,
    LoginResponseResultCode
} from "./commands";
import {
    isTwoFactorResultCode,
    normal64,
    webSafe64,
    decryptFromStorage,
    webSafe64FromBytes,
    generateUidBytes, generateTransmissionKey
} from "./utils";
import {
    RestMessage,
    startLoginMessage, twoFactorSendOTPMessage,
    twoFactorValidateMessage,
    validateAuthHashMessage
} from './restMessages'
import * as WebSocket from 'faye-websocket'
import {Authentication, Push} from './proto';
import {ssoSamlMessage} from './restMessages'
import WssConnectionRequest = Push.WssConnectionRequest;
import IStartLoginRequest = Authentication.IStartLoginRequest;

function unifyLoginError(e: any): LoginError {
    if (e instanceof Error) {
        try {
            return JSON.parse(e.message);
        } catch (jsonError) {
            return {
                error: "unknown",
                message: e.message
            }
        }
    } else {
        return {
            error: e.result_code,
            message: e.result_code
        }
    }
}

type SocketMessage = {
    event: 'received_totp'
    type: 'dna'
    passcode: string
}

type SocketResponseData = {
    event: 'received_totp'
}

export class SocketListener {
    private socket;

    constructor(url: string) {
        console.log('Connecting to ' + url)
        this.socket = new WebSocket.Client(url)
        this.socket.on('close', e => {
            console.log('socket closed')
        })
        this.socket.on('error', e => {
            console.log('socket error: ' + e)
        })
    }

    async getPushMessage(): Promise<string> {
        console.log('Awaiting web socket')
        return new Promise<string>((resolve) => {
            this.socket.on('message', (e) => {
                resolve(e.data)
            })
        })
    }

    disconnect() {
        this.socket.close();
        this.socket = null
    }
}

export class Auth {
    private endpoint: KeeperEndpoint;
    private _sessionToken: string;
    dataKey: Uint8Array;
    privateKey: Uint8Array;
    private _username: string;
    private managedCompanyId?: number;
    private socket: SocketListener;

    constructor(private options: ClientConfiguration) {
        this.endpoint = new KeeperEndpoint(this.options);
        this.endpoint.clientVersion = options.clientVersion || "c14.0.0";
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect()
            delete this.socket
        }
    }

    async loginV3(username: string, password: string) {

        if (!this.options.deviceConfig.deviceToken) {
            await this.endpoint.registerDevice()
        }

        const messageSessionUid = generateUidBytes()

        if (!this.socket) {
            const connectionRequest = await this.endpoint.getPushConnectionRequest(messageSessionUid)
            this.socket = new SocketListener(`wss://push.services.local.keepersecurity.com/wss_open_connection/${connectionRequest}`)
            console.log("Socket connected")
        }

        let loginToken;

        while (true) {
            const startLoginRequest: IStartLoginRequest = {
                clientVersion: this.endpoint.clientVersion,
                encryptedDeviceToken: this.options.deviceConfig.deviceToken,
                messageSessionUid: messageSessionUid,
                loginType: Authentication.LoginType.NORMAL,
                forceNewLogin: true
            }
            if (loginToken) {
                startLoginRequest.encryptedLoginToken = loginToken
            } else {
                startLoginRequest.username = username
            }
            const startLoginResp = await this.executeRest(startLoginMessage(startLoginRequest))
            console.log(startLoginResp)
            switch (startLoginResp.loginState) {
                case Authentication.LoginState.device_needs_approval:
                    await this.endpoint.verifyDevice(username)
                    break
                case Authentication.LoginState.device_locked:
                    break
                case Authentication.LoginState.account_locked:
                    break
                case Authentication.LoginState.device_account_locked:
                    break
                case Authentication.LoginState.license_expired:
                    throw new Error('License expired')
                case Authentication.LoginState.region_redirect:
                    break
                case Authentication.LoginState.redirect_cloud_sso:
                    console.log("Starting SSO login");
                    await this.cloudSsoLogin(startLoginResp.ssoUserInfo.loginUrl);
                    return
                case Authentication.LoginState.redirect_onsite_sso:
                    break
                case Authentication.LoginState.user_already_logged_in:
                    break
                case Authentication.LoginState.requires_2fa:
                    if (!this.options.authUI3) {
                        throw new Error('Unhandled prompt for second factor')
                    }
                    let waitForPush = false;
                    loginToken = startLoginResp.twoFactorInfo.encryptedLoginToken
                    switch (startLoginResp.twoFactorInfo.userTwoFactorChannel) {
                        case 'two_factor_channel_sms':
                            break
                        case 'two_factor_channel_google':
                            break
                        case 'two_factor_channel_duo':
                            const sentOTPMsg = twoFactorSendOTPMessage({
                                encryptedLoginToken: startLoginResp.twoFactorInfo.encryptedLoginToken
                            })
                            await this.executeRest(sentOTPMsg)
                            waitForPush = true
                            break
                    }
                    if (waitForPush) {
                        const pushMessage = await this.socket.getPushMessage()
                        const wssClientResponse = await this.endpoint.decryptPushMessage(pushMessage)
                        const socketResponseData: SocketResponseData = JSON.parse(wssClientResponse.message)
                        console.log(socketResponseData)
                        break
                    } else {
                        const twoFactorInput = await this.options.authUI3.getTwoFactorCode()
                        const twoFactorCodeMsg = twoFactorValidateMessage({
                            encryptedLoginToken: startLoginResp.twoFactorInfo.encryptedLoginToken,
                            value: twoFactorInput.twoFactorCode,
                            expireIn: twoFactorInput.desiredExpiration
                        })
                        const twoFactorCodeResp = await this.executeRest(twoFactorCodeMsg)
                        console.log(twoFactorCodeResp)
                        await this.authHashLogin(twoFactorCodeResp.authHashInfo, username, password)
                        return
                    }
                case Authentication.LoginState.requires_authHash:
                    await this.authHashLogin(startLoginResp.authHashInfo, username, password)
                    return
            }
        }
    }

    async authHashLogin(authHashInfo: Authentication.IAuthHashInfo, username: string, password: string) {
        // TODO test for account transfer and account recovery
        const salt = authHashInfo.salt[0]
        const authHashKey = await platform.deriveKey(password, salt.salt, salt.iterations);
        let authHash = await platform.authVerifierAsBytes(authHashKey);

        const loginMsg = validateAuthHashMessage({
            authResponse: authHash,
            encryptedLoginToken: authHashInfo.encryptedLoginToken
        })
        const loginResp = await this.executeRest(loginMsg)
        console.log(loginResp)

        this.setLoginParameters(username, webSafe64FromBytes(loginResp.encryptedSessionToken))
    }

    async cloudSsoLogin(ssoLoginUrl: string) {

        try {
            console.log("\n*** cloudSsoLogin at " + ssoLoginUrl + " ***");

            // We have full URL but the library wants to recreate it so we let it.
            let pos = ssoLoginUrl.indexOf("login");
            ssoLoginUrl = ssoLoginUrl.substring(pos);

            // This should return HTML
            let ssoLoginResp = await this.executeRestToHTML(ssoSamlMessage(ssoLoginUrl));
            console.log("\n---------- HTML ---------------\n" + ssoLoginResp + "-----------------------------------\n");

        } catch (e) {
            console.log(e)
        }
    }

    async login(username: string, password: string) {
        try {
            let preLoginResponse = await this.endpoint.getPreLogin(username);
            let salt = preLoginResponse.salt[0];
            let authHashKey = await platform.deriveKey(password, salt.salt, salt.iterations);
            let authHash = await platform.authVerifierAsString(authHashKey);

            let loginCommand = new LoginCommand();
            loginCommand.command = "login";
            loginCommand.username = username;
            loginCommand.version = 2;
            loginCommand.auth_response = webSafe64(authHash);
            loginCommand.platform_device_token = webSafe64FromBytes(this.endpoint.deviceToken);
            loginCommand.include = ["keys"]; //["license","settings","group","sync_log","keys","enforcements","client_key","images","is_enterprise_admin","security_keys"]
            if (this.managedCompanyId) {
                loginCommand.enterprise_id = this.managedCompanyId
            }
            let loginResponse: LoginResponse;
            let socketListener: SocketListener;
            while (true) {
                loginResponse = await this.endpoint.executeV2Command<LoginResponse>(loginCommand);
                if (loginResponse.result_code === "auth_success")
                    break;
                console.log(loginResponse)
                if (isTwoFactorResultCode(loginResponse.result_code)) {
                    if (!!loginResponse.u2f_challenge) {
                        loginResponse.u2f_challenge = JSON.parse(loginResponse.u2f_challenge as string);
                    }
                    if (!this.options.authUI)
                        break;
                    let errorMessage = loginResponse.result_code === LoginResponseResultCode.InvalidTOTP
                        ? loginResponse.message
                        : undefined;
                    if (loginResponse.channel === 'two_factor_channel_duo' && loginResponse.url) {
                        loginCommand['2fa_mode'] = 'push'
                        socketListener = new SocketListener(loginResponse.url)
                    } else {
                        let token: string
                        if (socketListener) {
                            const pushMessage: SocketMessage = JSON.parse(await socketListener.getPushMessage())
                            socketListener.disconnect()
                            console.log(pushMessage)
                            token = pushMessage.passcode
                        } else {
                            token = await this.options.authUI.getTwoFactorCode(errorMessage)
                        }
                        if (!token)
                            break;
                        loginCommand["2fa_token"] = token;
                    }
                    loginCommand['2fa_type'] = 'one_time';
                    loginCommand["device_token_expire_days"] = 9999;
                }
            }
            this._sessionToken = loginResponse.session_token;
            this._username = username;
            this.dataKey = await decryptEncryptionParamsString(password, loginResponse.keys.encryption_params);
            if (loginResponse.keys.encrypted_private_key) {
                this.privateKey = decryptFromStorage(loginResponse.keys.encrypted_private_key, this.dataKey);
            }
        } catch (e) {
            throw unifyLoginError(e);
        }
    }

    async managedCompanyLogin(username: string, password: string, companyId: number) {
        this.managedCompanyId = companyId;
        await this.login(username, password);
    }

    async executeCommand<Command extends KeeperCommand>(command: Command): Promise<Command["response"]> {
        command.username = this._username;
        if (command instanceof AuthorizedCommand) {
            command.device_id = "JS Keeper API";
            command.session_token = this._sessionToken;
        }
        return this.endpoint.executeV2Command(command);
    }

    async executeRest<TIn, TOut>(message: RestMessage<TIn, TOut>): Promise<TOut> {
        return this.endpoint.executeRest(message, this._sessionToken);
    }

    async executeRestToHTML<TIn, TOut>(message: RestMessage<TIn, TOut>): Promise<string> {
        return this.endpoint.executeRestToHTML(message, this._sessionToken);
    }

    get sessionToken(): string {
        return this._sessionToken;
    }

    get username(): string {
        return this._username;
    }

    get clientVersion(): string {
        return this.endpoint.clientVersion;
    }

    async get(path: string) {
        return this.endpoint.get(path)
    }

    setLoginParameters(userName: string, sessionToken: string) {
        this._username = userName;
        this._sessionToken = sessionToken;
    }

    async registerDevice() {
        await this.endpoint.registerDevice()
    }

    async verifyDevice(username: string) {
        await this.endpoint.verifyDevice(username)
    }
}

const iterationsToBytes = (iterations: number): Uint8Array => {
    const iterationBytes = new ArrayBuffer(4)
    new DataView(iterationBytes).setUint32(0, iterations)
    const bytes = new Uint8Array(iterationBytes)
    bytes[0] = 1 // version
    return bytes
};

export async function createAuthVerifier(password: string, iterations: number): Promise<Uint8Array> {
    const salt = platform.getRandomBytes(16);
    const authHashKey = await platform.deriveKey(password, salt, iterations);
    return Uint8Array.of(...iterationsToBytes(iterations), ...salt, ...authHashKey)
}

export async function createEncryptionParams(password: string, dataKey: Uint8Array, iterations: number): Promise<Uint8Array> {
    const salt = platform.getRandomBytes(16);
    const authHashKey = await platform.deriveKey(password, salt, iterations);
    const doubledDataKey = Uint8Array.of(...dataKey, ...dataKey)
    const encryptedDoubledKey = await platform.aesCbcEncrypt(doubledDataKey, authHashKey, false)
    return Uint8Array.of(...iterationsToBytes(iterations), ...salt, ...encryptedDoubledKey)
}

async function decryptEncryptionParamsString(password: string, encryptionParams: string): Promise<Uint8Array> {
    return decryptEncryptionParams(password, platform.base64ToBytes(normal64(encryptionParams)))
}

export async function decryptEncryptionParams(password: string, encryptionParams: Uint8Array): Promise<Uint8Array> {
    let corruptedEncryptionParametersMessage = "Corrupted encryption parameters";
    if (encryptionParams[0] !== 1)
        throw new Error(corruptedEncryptionParametersMessage);
    let iterations = (encryptionParams[1] << 16) + (encryptionParams[2] << 8) + encryptionParams[3];
    let saltBytes = encryptionParams.subarray(4, 20);
    let masterKey = await platform.deriveKey(password, saltBytes, iterations);
    let encryptedDoubledDataKey = encryptionParams.subarray(20);
    let doubledDataKey = await platform.aesCbcDecrypt(encryptedDoubledDataKey, masterKey, false);
    for (let i = 0; i < 32; i++) {
        if (doubledDataKey[i] !== doubledDataKey[i + 32]) {
            throw new Error(corruptedEncryptionParametersMessage);
        }
    }
    return doubledDataKey.slice(0, 32);
}
