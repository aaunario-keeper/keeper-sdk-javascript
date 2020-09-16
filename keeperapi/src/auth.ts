import {
    ClientConfiguration,
    ClientConfigurationInternal,
    DeviceApprovalChannel,
    DeviceVerificationMethods,
    LoginError,
    TransmissionKey,
    TwoFactorChannelData
} from './configuration'
import {KeeperEndpoint} from "./endpoint";
import {platform} from "./platform";
import {AuthorizedCommand, KeeperCommand, LoginCommand, LoginResponse, LoginResponseResultCode} from "./commands";
import {
    decryptFromStorage,
    generateTransmissionKey,
    generateUidBytes,
    isTwoFactorResultCode,
    normal64,
    webSafe64,
    webSafe64FromBytes
} from "./utils";
import {
    requestDeviceVerificationMessage,
    RestMessage,
    ssoSamlMessage,
    startLoginMessage,
    twoFactorSend2FAPushMessage,
    twoFactorValidateMessage,
    validateAuthHashMessage,
    validateDeviceVerificationCodeMessage
} from './restMessages'
import {Authentication, SsoCloud} from './proto';
import {browserPlatform} from "./browser/platform";
import IStartLoginRequest = Authentication.IStartLoginRequest;
import ITwoFactorSendPushRequest = Authentication.ITwoFactorSendPushRequest;
import SsoCloudRequest = SsoCloud.SsoCloudRequest;
import TwoFactorExpiration = Authentication.TwoFactorExpiration;
import SsoCloudResponse = SsoCloud.SsoCloudResponse;
import TwoFactorPushType = Authentication.TwoFactorPushType;
import TwoFactorChannelType = Authentication.TwoFactorChannelType;

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
    event: 'received_totp',
    encryptedLoginToken: string
}

export type SocketProxy = {
    close: () => void
    onClose: (callback: () => void) => void
    onError: (callback: (e: Event | Error) => void) => void
    onMessage: (callback: (e: MessageEvent) => void) => void
    send: (message: any) => void
}

export class SocketListener {
    private socket: SocketProxy | null;
    // Listeners that receive all messages
    private messageListeners: Array<(data: any) => void>
    // Listeners that receive a single message
    private singleMessageListeners: Array<{
        resolve: (data: any) => void,
        reject: (errorMessage: string) => void
    }>

    constructor(url: string) {
        console.log('Connecting to ' + url)

        this.messageListeners = []
        this.singleMessageListeners = []
        this.socket = platform.createWebsocket(url)

        this.socket.onClose(() => {
            console.log('socket closed')
        })
        this.socket.onError((e: Event | Error) => {
            console.log('socket error: ' + e)
        })
        this.socket.onMessage(e => {
            this.handleMessage(e)
        })
    }

    registerLogin(sessionToken: string) {
        if (!this.socket) throw new Error('Socket not available')
        this.socket.send(sessionToken)
    }

    onClose(callback: () => void): void {
        if (!this.socket) throw new Error('Socket not available')
        this.socket.onClose(callback)
    }

    onError(callback: () => void): void {
        if (!this.socket) throw new Error('Socket not available')
        this.socket.onError(callback)
    }

    private handleMessage(msgEvent: MessageEvent): void {
        for (let callback of this.messageListeners) {
            callback(msgEvent.data)
        }

        for (let {resolve} of this.singleMessageListeners) {
            resolve(msgEvent.data)
        }
        this.singleMessageListeners.length = 0
    }

    onPushMessage(callback: (data: any) => void): void {
        this.messageListeners.push(callback)
    }

    async getPushMessage(): Promise<any> {
        console.log('Awaiting web socket message...')

        return new Promise<any>((resolve, reject) => {
            this.singleMessageListeners.push({resolve, reject})
        })
    }

    disconnect() {
        this.socket?.close();
        this.socket = null
        this.messageListeners.length = 0

        for (let {reject} of this.singleMessageListeners) {
            reject('Socket disconnected')
        }
        this.singleMessageListeners.length = 0
    }
}

export type LoginPayload = {
    username: string,
    password?: string,
    useAlternate?: boolean
}

export enum UserType {
    normal = "normal",
    onsiteSso = "onsite_sso",
    cloudSso = "cloud_sso"
}

export class Auth {
    ssoLogoutUrl: string = ''
    userType: UserType = UserType.normal
    ssoSessionId: string = ''
    dataKey: Uint8Array;
    privateKey: Uint8Array;
    private _accountUid: Uint8Array;
    private _sessionToken: string = '';
    private _username: string = '';
    private endpoint: KeeperEndpoint;
    private managedCompanyId?: number;
    private messageSessionUid: Uint8Array;
    options: ClientConfigurationInternal;
    private socket: SocketListener | undefined;

    constructor(options: ClientConfiguration) {
        if (options.deviceConfig && options.deviceToken) {
            throw new Error('Both loginV2 and loginV3 token strategies supplied')
        }

        // De-reference user provided config if requested
        if (options.cloneConfig) {
            this.options = {
                ...options,
                ...options.deviceConfig && {deviceConfig: {...options.deviceConfig}},
                ...options.authUI && {authUI: {...options.authUI}},
                ...options.authUI3 && {authUI3: {...options.authUI3}},
            }
        } else {
            this.options = {
                ...options,
                deviceConfig: {...options.deviceConfig}
            }
        }

        if (!this.options.deviceConfig) {
            this.options.deviceConfig = {
                deviceName: null,
                deviceToken: null,
                privateKey: null,
                publicKey: null,
                transmissionKeyId: null,
            }
        }

        if (!this.options.sessionStorage) {
            this.options.sessionStorage = {
                lastUsername: null,
                getCloneCode: () => null,
                saveCloneCode: () => {}
            }
        }

        this.endpoint = new KeeperEndpoint(this.options);
        this.endpoint.clientVersion = options.clientVersion || "c14.0.0";
        this.messageSessionUid = generateUidBytes()
    }

    get _endpoint(): KeeperEndpoint {
        return this.endpoint;
    }

    get accountUid(): Uint8Array {
        return this._accountUid;
    }

    get clientVersion(): string {
        return this.endpoint.clientVersion;
    }

    get sessionToken(): string {
        return this._sessionToken;
    }

    get username(): string {
        return this._username;
    }

    getMessageSessionUid(): Uint8Array {
        return this.messageSessionUid;
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect()
            delete this.socket
        }
    }

    /**
     * useAlternate is to pass to the next function to use an alternate method, for testing a different path.
     */
    async loginV3({username, password = '', useAlternate = false}: LoginPayload) {
        this._username = username || this.options.sessionStorage.lastUsername

        if (!this.options.deviceConfig.deviceToken) {
            await this.endpoint.registerDevice()
        }

        if (!this.socket) {
            const connectionRequest = await this.endpoint.getPushConnectionRequest(this.messageSessionUid)
            this.socket = new SocketListener(`wss://push.services.${this.options.host}/wss_open_connection/${connectionRequest}`)
            console.log("Socket connected")
        }

        let loginToken: Uint8Array | null = null;
        let needUserName: boolean
        let previousLoginState = 0;

        while (true) {
            const startLoginRequest: IStartLoginRequest = {
                clientVersion: this.endpoint.clientVersion,
                encryptedDeviceToken: this.options.deviceConfig.deviceToken ?? null,
                messageSessionUid: this.messageSessionUid,
                loginType: Authentication.LoginType.NORMAL,
                cloneCode: this.options.sessionStorage.getCloneCode(this._username) || Uint8Array.of(0)
            }
            if (loginToken) {
                startLoginRequest.encryptedLoginToken = loginToken
            } else {
                if (needUserName || !this.options.useSessionResumption) {
                    startLoginRequest.username = this._username
                    needUserName = false
                }
            }
            const loginResponse = await this.executeRest(startLoginMessage(startLoginRequest))
            console.log(loginResponse)
            if (!loginResponse.loginState) {
                console.log("loginState is null");
                loginResponse.loginState = 99;
            }
            console.log("login state =", loginResponse.loginState);

            if (previousLoginState === 13) {
                return;  // hack to stop infinite loop
            }
            previousLoginState = loginResponse.loginState;

            switch (loginResponse.loginState) {
                case Authentication.LoginState.ACCOUNT_LOCKED:
                case Authentication.LoginState.DEVICE_ACCOUNT_LOCKED:
                case Authentication.LoginState.DEVICE_LOCKED:
                case Authentication.LoginState.INVALID_LOGINSTATE:
                case Authentication.LoginState.LOGGED_OUT:
                case Authentication.LoginState.UPGRADE:
                    break;
                case Authentication.LoginState.REQUIRES_USERNAME:
                    needUserName = true
                    break;
                case Authentication.LoginState.DEVICE_APPROVAL_REQUIRED:
                    if (!loginResponse.encryptedLoginToken) {
                        throw new Error('Login token missing from API response')
                    }
                    loginToken = await this.verifyDevice(username, loginResponse.encryptedLoginToken)
                    break;
                case Authentication.LoginState.LICENSE_EXPIRED:
                    throw new Error('License expired')
                case Authentication.LoginState.REGION_REDIRECT:
                    this.options.host = loginResponse.stateSpecificValue
                    if (this.options.onRegionChanged) {
                        this.options.onRegionChanged(loginResponse.stateSpecificValue)
                    }
                    break;
                case Authentication.LoginState.REDIRECT_CLOUD_SSO:
                    console.log("Cloud SSO Connect login");
                    if (!loginResponse.url) {
                        throw new Error('URL missing from API response')
                    }
                    let restReq = SsoCloudRequest.create({
                        "embedded": true,
                        "clientVersion": this._endpoint.clientVersion,
                        "dest": "vault",
                        "forceLogin": false,
                        "messageSessionUid": this.messageSessionUid
                    });

                    console.log("cloud sso url: " + loginResponse.url)

                    let requestPayload = await this._endpoint.prepareRequest(SsoCloudRequest.encode(restReq).finish());

                    let payload = webSafe64FromBytes(requestPayload);

                    if (browserPlatform != null) {
                        let cloudSsoLoginUrl = loginResponse.url + "?payload=" + payload;
                        this.options.authUI3.redirectCallback(cloudSsoLoginUrl);
                    } else {
                        await this.cloudSsoLogin2(loginResponse.url, payload, useAlternate);
                    }
                    // await this.cloudSsoLogin(loginResponse.url, this.messageSessionUid, useAlternate);
                    return;
                case Authentication.LoginState.REDIRECT_ONSITE_SSO:
                    console.log("SSO Connect login");
                    if (!loginResponse.url) {
                        throw new Error('URL missing from API response')
                    }
                    await this.cloudSsoLogin(loginResponse.url, this.messageSessionUid, useAlternate);
                    return;
                case Authentication.LoginState.REQUIRES_2FA:
                    loginToken = await this.handleTwoFactor(loginResponse)
                    break
                case Authentication.LoginState.REQUIRES_AUTH_HASH:
                    if (!password && this.options.authUI3?.getPassword) {
                        password = await this.options.authUI3.getPassword()
                    }
                    if (!password) {
                        throw new Error('User password required and not provided')
                    }
                    await this.authHashLogin(loginResponse, username, password)
                    return;
                case Authentication.LoginState.LOGGED_IN:
                    await this.loginSuccess(loginResponse, null)
                    console.log("Exiting on loginState = LOGGED_IN");
                    return;
            }
        }
    }

    verifyDevice(username: string, loginToken: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            if (!this.options.authUI3) {
                reject(new Error('No authUI3 provided. authUI3 required to verify devices'))
                return
            }

            let emailSent = false
            let tfaExpiration = TwoFactorExpiration.TWO_FA_EXP_IMMEDIATELY
            const deviceConfig = this.options.deviceConfig
            const channels: DeviceApprovalChannel[] = [
                {
                    channel: DeviceVerificationMethods.Email,
                    sendPush: async () => {
                        await this.executeRest(requestDeviceVerificationMessage({
                            username: username,
                            verificationChannel: emailSent ? 'email_resend' : 'email',
                            encryptedDeviceToken: deviceConfig.deviceToken,
                            clientVersion: this.endpoint.clientVersion,
                            messageSessionUid: this.messageSessionUid
                        }))
                        emailSent = true
                    },
                    sendCode: async (code) => {
                        await this.executeRest(validateDeviceVerificationCodeMessage({
                            verificationCode: code,
                            username: username
                        }))
                    }
                },
                {
                    channel: DeviceVerificationMethods.KeeperPush,
                    sendPush: async () => {
                        await this.executeRest(twoFactorSend2FAPushMessage({
                            encryptedLoginToken: loginToken,
                            pushType: TwoFactorPushType.TWO_FA_PUSH_KEEPER
                        }))
                    }
                },
                {
                    channel: DeviceVerificationMethods.TFA,
                    sendPush: async () => {
                        await this.executeRest(twoFactorSend2FAPushMessage({
                            encryptedLoginToken: loginToken,
                        }))
                    },
                    sendCode: async (code) => {
                        const twoFactorValidateMsg = twoFactorValidateMessage({
                            encryptedLoginToken: loginToken,
                            value: code,
                            expireIn: tfaExpiration
                        })
                        const twoFactorValidateResp = await this.executeRest(twoFactorValidateMsg)
                        if (twoFactorValidateResp.encryptedLoginToken) {
                            const wssRs: Record<string, any> = {
                                event: 'received_totp',
                                encryptedLoginToken: platform.bytesToBase64(twoFactorValidateResp.encryptedLoginToken)
                            }
                            processPushNotification(wssRs)
                        }
                    },
                    setExpiration: expiration => {
                        tfaExpiration = expiration
                    }
                }
            ];

            let done = false
            const resumeWithToken = (token: Uint8Array) => {
                done = true
                resolve(token)
            }
            const rejectWithError = (error: Error) => {
                done = true
                reject(error)
            }

            const processPushNotification = (wssRs: Record<string, any>) => {
                if (wssRs.event === 'received_totp') {
                    const token = wssRs.encryptedLoginToken ? platform.base64ToBytes(wssRs.encryptedLoginToken) : loginToken
                    resumeWithToken(token)
                } else if (wssRs.message === 'device_approved') {
                    if (wssRs.approved) {
                        resumeWithToken(loginToken)
                    } else {
                        rejectWithError(new Error('Rejected'))
                    }
                } else if (wssRs.command === 'device_verified') {
                    resumeWithToken(loginToken)
                }
            }

            // response from the client true - try again, false - cancel
            this.options.authUI3.waitForDeviceApproval(channels)
                .then((ok) => {
                    if (ok) {
                        resumeWithToken(loginToken)
                    } else {
                        rejectWithError(new Error('Canceled'))
                    }
                });

            // receive push notification
            (async () => {
                while (!done) {
                    const pushMessage = await this.socket.getPushMessage()
                    const wssClientResponse = await this.endpoint.decryptPushMessage(pushMessage)
                    if (!done) {
                        const wssRs = JSON.parse(wssClientResponse.message)
                        console.log(wssRs)
                        processPushNotification(wssRs)
                    }
                }
            })();
        })
    }

    private handleTwoFactor(loginResponse: Authentication.ILoginResponse): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            if (!loginResponse.channels) {
                reject(new Error('Channels not provided by API'))
                return
            }

            const loginToken = loginResponse.encryptedLoginToken

            let done = false
            const resumeWithToken = (token: Uint8Array) => {
                done = true
                resolve(token)
            }
            const rejectWithError = (error: Error) => {
                done = true
                reject(error)
            }

            let tfaExpiration = TwoFactorExpiration.TWO_FA_EXP_IMMEDIATELY
            const submitCode = async (channel: Authentication.TwoFactorChannelType, code: string) => {
                const channelInfo = loginResponse.channels.find(x => x.channelType === channel)
                const twoFactorValidateMsg = twoFactorValidateMessage({
                    channelUid: channelInfo ? channelInfo.channelUid : undefined,
                    encryptedLoginToken: loginToken,
                    value: code,
                    expireIn: tfaExpiration
                })
                const twoFactorValidateResp = await this.executeRest(twoFactorValidateMsg)
                if (twoFactorValidateResp.encryptedLoginToken) {
                    resumeWithToken(twoFactorValidateResp.encryptedLoginToken)
                }
            }

            let lastPushChannel = TwoFactorChannelType.TWO_FA_CT_NONE
            const submitPush = async (channel: TwoFactorChannelType, pushType: TwoFactorPushType) => {
                const sendPushRequest: ITwoFactorSendPushRequest = {
                    encryptedLoginToken: loginResponse.encryptedLoginToken,
                    pushType: pushType,
                    expireIn: tfaExpiration
                }
                await this.executeRest(twoFactorSend2FAPushMessage(sendPushRequest))
                lastPushChannel = channel
            }

            const channels: TwoFactorChannelData[] = loginResponse.channels
                .map((ch) => {
                    const channelData: TwoFactorChannelData = {
                        channel: ch.channelType,
                        name: ch.channelName || '',
                        setExpiration: (exp) => {
                            tfaExpiration = exp
                        },
                        sendCode: (code) => {
                            submitCode(ch.channelType, code)
                        }
                    }
                    switch (ch.channelType) {
                        case TwoFactorChannelType.TWO_FA_CT_U2F:
                        case TwoFactorChannelType.TWO_FA_CT_WEBAUTHN:
                            // add support for security key as push
                            break;
                        case TwoFactorChannelType.TWO_FA_CT_TOTP:
                        case TwoFactorChannelType.TWO_FA_CT_RSA:
                            break
                        case TwoFactorChannelType.TWO_FA_CT_SMS:
                            channelData.availablePushes = [TwoFactorPushType.TWO_FA_PUSH_SMS]
                            break
                        case TwoFactorChannelType.TWO_FA_CT_DNA:
                            channelData.availablePushes = [TwoFactorPushType.TWO_FA_PUSH_DNA]
                            break
                        case TwoFactorChannelType.TWO_FA_CT_KEEPER:
                            channelData.availablePushes = [TwoFactorPushType.TWO_FA_PUSH_KEEPER]
                            break;
                        case TwoFactorChannelType.TWO_FA_CT_DUO:
                            if (ch.capabilities) {
                                channelData.availablePushes = ch.capabilities
                                    .map(cap => {
                                        switch (cap) {
                                            case 'push':
                                                return TwoFactorPushType.TWO_FA_PUSH_DUO_PUSH
                                            case 'sms':
                                                return TwoFactorPushType.TWO_FA_PUSH_DUO_TEXT
                                            case 'phone':
                                                return TwoFactorPushType.TWO_FA_PUSH_DUO_CALL
                                            default:
                                                return undefined
                                        }
                                    }).filter(cap => !!cap).map(cap => cap!)
                            }
                            break
                    }
                    if (channelData.availablePushes) {
                        channelData.sendPush = (pushType: TwoFactorPushType) => {
                            submitPush(ch.channelType, pushType)
                        }
                    }
                    return channelData
                }).filter((chd: TwoFactorChannelData | undefined) => !!chd).map(chd => chd!)

            const processPushNotification = (wssRs: Record<string, any>) => {
                if (wssRs.event === 'received_totp') {
                    if (wssRs.encryptedLoginToken) {
                        const token = platform.base64ToBytes(wssRs.encryptedLoginToken)
                        resumeWithToken(token)
                    } else if (wssRs.passcode) {
                        (async () => {
                            await submitCode(lastPushChannel, wssRs.passcode)
                        })()
                    }
                }
            }

            this.options.authUI3.waitForTwoFactorCode(channels)
                .then(ok => {
                    if (ok) {
                        resumeWithToken(loginToken)
                    } else {
                        rejectWithError(new Error('Canceled'))
                    }
                });

            // receive push notification
            (async () => {
                while (!done) {
                    const pushMessage = await this.socket.getPushMessage()
                    const wssClientResponse = await this.endpoint.decryptPushMessage(pushMessage)
                    if (!done) {
                        const wssRs = JSON.parse(wssClientResponse.message)
                        console.log(wssRs)
                        processPushNotification(wssRs)
                    }
                }
            })();
        })
    }

    async authHashLogin(loginResponse: Authentication.ILoginResponse, username: string, password: string) {
        // TODO test for account transfer and account recovery
        if (!loginResponse.salt) {
            throw new Error('Salt missing from API response')
        }

        const salt = loginResponse.salt[0]
        if (!salt.salt || !salt.iterations) {
            throw new Error('Salt missing from API response')
        }

        const authHashKey = await platform.deriveKey(password, salt.salt, salt.iterations);
        let authHash = await platform.calcAuthVerifier(authHashKey);

        const loginMsg = validateAuthHashMessage({
            authResponse: authHash,
            encryptedLoginToken: loginResponse.encryptedLoginToken
        })
        const loginResp = await this.executeRest(loginMsg)
        console.log(loginResp)
        await this.loginSuccess(loginResp, password)
    }

    async loginSuccess(loginResponse: Authentication.ILoginResponse, password: string) {
        this.options.sessionStorage.saveCloneCode(this._username, loginResponse.cloneCode)
        if (!loginResponse.encryptedSessionToken || !loginResponse.encryptedDataKey || !loginResponse.accountUid) {
            return
        }

        this.setLoginParameters(webSafe64FromBytes(loginResponse.encryptedSessionToken), loginResponse.accountUid)
        switch (loginResponse.encryptedDataKeyType) {
            case Authentication.EncryptedDataKeyType.BY_DEVICE_PUBLIC_KEY:
                this.dataKey = await platform.privateDecryptEC(loginResponse.encryptedDataKey, this.options.deviceConfig.privateKey, this.options.deviceConfig.publicKey)
                break;
            case Authentication.EncryptedDataKeyType.BY_PASSWORD:
                this.dataKey = await decryptEncryptionParams(password, loginResponse.encryptedDataKey);
                break;
            case Authentication.EncryptedDataKeyType.NO_KEY:
            case Authentication.EncryptedDataKeyType.BY_ALTERNATE:
            case Authentication.EncryptedDataKeyType.BY_BIO:
                throw new Error(`Data Key type ${loginResponse.encryptedDataKeyType} decryption not implemented`)
        }
    }

    async cloudSsoLogin(ssoLoginUrl: string, messageSessionUid: Uint8Array, useGet: boolean = false): Promise<any> {
        let {privateKey, publicKey} = await platform.generateRSAKeyPair();
        let encodedPublicKey: string = webSafe64FromBytes(publicKey);

        console.log("public key length is " + encodedPublicKey.length);

        try {
            console.log("\n*** cloudSsoLogin at " + ssoLoginUrl + " ***");

            // We have full URL but the library wants to recreate it so we let it.
            let pos = ssoLoginUrl.indexOf("login");
            ssoLoginUrl = ssoLoginUrl.substring(pos);

            // This should return HTML
            let ssoLoginResp = await this.executeRestToHTML(ssoSamlMessage(ssoLoginUrl), this._sessionToken,
                {
                    "message_session_uid": webSafe64FromBytes(messageSessionUid),
                    "key": encodedPublicKey,
                    "device_id": 2141430350,  //"TarD2lczSTI4ZJx1bG0F8aAc0HrK5JoLpOqH53sRFg0=",
                }, useGet);

            console.log("\n---------- HTML ---------------\n" + ssoLoginResp + "-----------------------------------\n");
            return ssoLoginResp;

        } catch (e) {
            console.log(e)
        }
        return {};
    }

    /**
     * This is the more secure version of login that uses an encrypted protobuf.
     * July 2020
     */
    async cloudSsoLogin2(ssoLoginUrl: string, encodedPayload: string, useGet: boolean = false): Promise<any> {
        try {
            console.log("\n*** cloudSsoLogin2 at " + ssoLoginUrl + " ***");

            // We have full URL but the library wants to recreate it so we let it.
            let pos = ssoLoginUrl.indexOf("login");
            ssoLoginUrl = ssoLoginUrl.substring(pos);

            // This should return HTML
            let ssoLoginResp = await this.executeRestToHTML(ssoSamlMessage(ssoLoginUrl), this._sessionToken,
                {
                    "payload": encodedPayload
                }, useGet);

            console.log("\n---------- HTML ---------------\n" + ssoLoginResp + "-----------------------------------\n");
            return ssoLoginResp;

        } catch (e) {
            console.log(e)
        }
        return {};
    }

    async cloudSsoLogout(ssoLogoutUrl: string, messageSessionUid: Uint8Array, useGet: boolean = false): Promise<any> {
        let keyPair: any = await platform.generateRSAKeyPair2();
        let publicKey: Buffer = keyPair.exportKey('pkcs1-public-der');
        let encodedPublicKey: string = webSafe64FromBytes(publicKey);

        try {
            console.log("\n*** cloudSsoLogout at " + ssoLogoutUrl + " ***");

            // We have full URL but the library wants to recreate it so we let it.
            let pos = ssoLogoutUrl.indexOf("logout");
            ssoLogoutUrl = ssoLogoutUrl.substring(pos);

            // This should return HTML
            let ssoLogoutResp = await this.executeRestToHTML(ssoSamlMessage(ssoLogoutUrl), this._sessionToken,
                {
                    "message_session_uid": webSafe64FromBytes(messageSessionUid),
                    "key": encodedPublicKey
                }, useGet);

            console.log("\n---------- HTML ---------------\n" + ssoLogoutResp + "-----------------------------------\n");
            return ssoLogoutResp;

        } catch (e) {
            console.log(e)
        }
        return {};
    }

    /**
     * This is the more secure version of logout that uses an encrypted protobuf.
     * July 2020
     */
    async cloudSsoLogout2(ssoLogoutUrl: string, encodedPayload: string, useGet: boolean = false): Promise<any> {
        const encryptionKey: TransmissionKey = generateTransmissionKey(this.endpoint.getTransmissionKey().publicKeyId);
        const encodedEncryptionKey: string = webSafe64FromBytes(encryptionKey.encryptedKey);
        let keyPair: any = await platform.generateRSAKeyPair2();
        let publicKey: Buffer = keyPair.exportKey('pkcs1-public-der');
        let encodedPublicKey: string = webSafe64FromBytes(publicKey);

        console.log("encodedEncryptionKey = " + encodedEncryptionKey);

        try {
            console.log("\n*** cloudSsoLogout2 at " + ssoLogoutUrl + " ***");

            // We have full URL but the library wants to recreate it so we let it.
            let pos = ssoLogoutUrl.indexOf("logout");
            ssoLogoutUrl = ssoLogoutUrl.substring(pos);

            // This should return HTML
            let ssoLogoutResp = await this.executeRestToHTML(ssoSamlMessage(ssoLogoutUrl), this._sessionToken,
                {
                    "key": encodedEncryptionKey,
                    "payload": encodedPayload
                }, useGet);

            console.log("\n---------- HTML ---------------\n" + ssoLogoutResp + "-----------------------------------\n");
            return ssoLogoutResp;

        } catch (e) {
            console.log(e)
        }
        return {};
    }

    async login(username: string, password: string) {
        try {
            let preLoginResponse = await this.endpoint.getPreLogin(username);
            if (!preLoginResponse.salt) {
                throw new Error('Salt missing from API response')
            }

            let salt = preLoginResponse.salt[0];
            if (!salt.salt || !salt.iterations) {
                throw new Error('Salt missing from API response')
            }

            let authHashKey = await platform.deriveKey(password, salt.salt, salt.iterations);
            let authHash = platform.bytesToBase64(await platform.calcAuthVerifier(authHashKey));

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
            let socketListener: SocketListener | null = null;
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

    async decryptCloudSsoResponse(cloudResponseToken: string): Promise<SsoCloudResponse> {
        let tokenToBytes: Uint8Array
        try {
            tokenToBytes = platform.base64ToBytes(cloudResponseToken);
        } catch (e) {
            tokenToBytes = platform.base64ToBytes(normal64(cloudResponseToken));
        }
        const decryptedData = await platform.aesGcmDecrypt(tokenToBytes, this._endpoint.getTransmissionKey().key);
        return SsoCloudResponse.decode(decryptedData);
    }

    async executeCommand<Command extends KeeperCommand>(command: Command): Promise<Command["response"]> {
        if (!command.username) {
            command.username = this._username;
        }
        if (command instanceof AuthorizedCommand) {
            command.device_id = "JS Keeper API";
            command.session_token = this._sessionToken;
        }
        return this.endpoint.executeV2Command(command);
    }

    async executeRest<TIn, TOut>(message: RestMessage<TIn, TOut>): Promise<TOut> {
        return this.endpoint.executeRest(message, this._sessionToken);
    }

    async executeRestToHTML<TIn, TOut>(message: RestMessage<TIn, TOut>, sessionToken?: string, formParams?: any, useGet?: boolean): Promise<string> {
        return this.endpoint.executeRestToHTML(message, sessionToken, formParams, useGet);
    }

    async get(path: string) {
        return this.endpoint.get(path)
    }

    setLoginParameters(sessionToken: string, accountUid: Uint8Array) {
        this._sessionToken = sessionToken;
        this._accountUid = accountUid;
        if (!this.socket) {
            throw new Error('No socket available')
        }
        this.socket.registerLogin(this._sessionToken)
    }

    async registerDevice() {
        await this.endpoint.registerDevice()
    }

    onClose(callback: () => void): void {
        if (!this.socket) {
            throw new Error('No socket available')
        }
        this.socket.onClose(callback)
    }

    onError(callback: () => void): void {
        if (!this.socket) {
            throw new Error('No socket available')
        }
        this.socket.onError(callback)
    }

    onPushMessage(callback: (data: any) => void): void {
        if (!this.socket) {
            throw new Error('No socket available')
        }
        this.socket.onPushMessage(callback)
    }

    async getPushMessage(): Promise<any> {
        if (!this.socket) {
            throw new Error('No socket available')
        }
        const pushMessage = await this.socket.getPushMessage()
        const wssClientResponse = await this.endpoint.decryptPushMessage(pushMessage)
        console.log(wssClientResponse.message)
        return JSON.parse(wssClientResponse.message)
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
