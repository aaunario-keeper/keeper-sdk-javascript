import {KeeperCommand, KeeperHttpResponse} from './commands'
import {KeeperError} from './configuration'
import {Authentication, Push, SsoCloud} from './proto'
import {platform} from './platform'
import {
    generateTransmissionKey,
    getKeeperUrl,
    isTwoFactorResultCode,
    normal64,
    normal64Bytes,
    webSafe64FromBytes
} from './utils'
import {
    deviceMessage,
    preLoginMessage,
    registerDeviceMessage,
    registerDeviceInRegionMessage,
    RestMessage,
    ssoCloudRequestMessage,
    updateDeviceMessage
} from './restMessages'
import {ClientConfigurationInternal, TransmissionKey} from './configuration';
import ApiRequestPayload = Authentication.ApiRequestPayload;
import ApiRequest = Authentication.ApiRequest;
import IDeviceResponse = Authentication.IDeviceResponse;
import IPreLoginResponse = Authentication.IPreLoginResponse;
import WssClientResponse = Push.WssClientResponse;
import WssConnectionRequest = Push.WssConnectionRequest;

export class KeeperEndpoint {
    private transmissionKey: TransmissionKey
    public deviceToken: Uint8Array
    public clientVersion

    constructor(private options: ClientConfigurationInternal) {
        if (options.deviceToken) {
            this.deviceToken = options.deviceToken
            this.updateTransmissionKey(1)
        } else {
            this.updateTransmissionKey(options.deviceConfig.transmissionKeyId || 1)
        }
    }

    private getUrl(forPath: string): string {
        return getKeeperUrl(this.options.host, forPath)
    }

    async getDeviceToken(): Promise<IDeviceResponse> {
        return this.executeRest(deviceMessage({
            clientVersion: this.clientVersion,
            deviceName: 'JS Keeper API'
        }))
    }

    async getPreLogin(username: string): Promise<IPreLoginResponse> {

        if (!this.deviceToken) {
            console.log('Obtaining device token...')
            let deviceResponse = await this.getDeviceToken()
            this.deviceToken = deviceResponse.encryptedDeviceToken
            if (this.options.onDeviceToken) {
                this.options.onDeviceToken(this.deviceToken)
            }
        }

        while (true) {
            try {
                return await this.executeRest(preLoginMessage({
                    authRequest: {
                        clientVersion: this.clientVersion,
                        username: username,
                        encryptedDeviceToken: this.deviceToken
                    },
                    loginType: Authentication.LoginType.NORMAL
                }))
            }
            catch (e) {
                if (!(e instanceof Error))
                    throw(e)
                let errorObj = JSON.parse(e.message)
                if (errorObj.error === 'region_redirect') {
                    this.options.host = errorObj.region_host
                    console.log(`Redirecting to ${this.options.host}`)
                } else {
                    throw(e)
                }
            }
        }
    }

    async registerDevice() {
        // Case 1 new device, no edt no keys - call registration with pub key
        // Case 2 existing device on 14, edt but no keys - call device update
        // Case 3 existing device on 15+, has edt and keys - skip registration

        const deviceConfig = this.options.deviceConfig

        if (deviceConfig.deviceToken && deviceConfig.privateKey && deviceConfig.publicKey) {  // Case 1
            return
        }

        const ecdh = await platform.generateECKeyPair()
        deviceConfig.publicKey = ecdh.publicKey
        deviceConfig.privateKey = ecdh.privateKey
        if (deviceConfig.deviceToken) {
            const devUpdMsg = updateDeviceMessage({
                encryptedDeviceToken: deviceConfig.deviceToken,
                clientVersion: this.options.clientVersion,
                deviceName: deviceConfig.deviceName,
                devicePublicKey: deviceConfig.publicKey,
            })
            await this.executeRest(devUpdMsg)
        } else {
            const devRegMsg = registerDeviceMessage({
                clientVersion: this.options.clientVersion,
                deviceName: deviceConfig.deviceName,
                devicePublicKey: deviceConfig.publicKey,
            })
            const devRegResp = await this.executeRest(devRegMsg)
            console.log(devRegResp)
            deviceConfig.deviceToken = devRegResp.encryptedDeviceToken || null
        }
        if (this.options.onDeviceConfig) {
            this.options.onDeviceConfig(deviceConfig, this.options.host);
        }
    }

    /**
     * Call this for REST calls expected to return HTML or a 303 redirect.
     */
    async executeRestToHTML<TIn, TOut>(message: RestMessage<TIn, TOut>, sessionToken?: string, formParams: any = {}, useGet: boolean = false): Promise<string> {
        // let request = await this.prepareRequest(message.toBytes(), sessionToken)
        let theUrl = message.path;
        if (!theUrl.startsWith("http")) {
            theUrl = this.getUrl(theUrl);
        }

        let response = null;
        if (useGet) {
            console.log("  using GET");
            theUrl = theUrl + "?" + String(new URLSearchParams(formParams));
            response = await platform.get(theUrl, {});
        } else {
            console.log("  using POST");
            formParams = formParams ? String(new URLSearchParams(formParams)) : "";
            response = await platform.post(
              theUrl,
              formParams,
              {"Content-Type": "application/x-www-form-urlencoded"}
            );
        }

        console.log("SSO response is", response.statusCode);

        const possibleRedirects = [200, 303]

        // Redirect?
        if (possibleRedirects.indexOf(response.statusCode) >= 0) {
            let redirectUrl = '';
            if (response.statusCode == 303) {
                redirectUrl = response.headers["location"];
            } else if (response.statusCode == 200) {
                redirectUrl = theUrl;
            }
            if (redirectUrl) {
                console.log("Redirecting to " + redirectUrl);
                if (this.options.authUI3 && this.options.authUI3.redirectCallback) {
                    this.options.authUI3.redirectCallback(redirectUrl)
                } else {
                    await platform.defaultRedirect(redirectUrl)
                }
            } else {
                console.log("Expected URL with 303 status, but didn't get one");
            }
        }

        if (response.statusCode === 404) {
            return new Promise(resolve => {
                resolve("404 NOT FOUND");
            });
        }

        // Any content?
        if (!response.data || response.data.length === 0 && response.statusCode === 200) {
            return "No content returned\n";
        }

        // Is it HTML?
        if (response.data[0] != "<".charCodeAt(0)) {
            console.log("non-HTML returned from rest call");
        }

        return new Promise(resolve => {
            resolve(platform.bytesToString(response.data));
        });
    }

    async executeRest<TIn, TOut>(message: RestMessage<TIn, TOut>, sessionToken?: string): Promise<TOut> {
        while (true) {
            let request = await this.prepareRequest(message.toBytes(), sessionToken)
            console.log("Calling REST URL:", this.getUrl(message.path));
            let response = await platform.post(this.getUrl(message.path), request)
            if (!response.data || response.data.length === 0 && response.statusCode === 200) {
                return
            }
            console.log("Response code:", response.statusCode);

            try {
                let decrypted = await platform.aesGcmDecrypt(response.data, this.transmissionKey.key)
                return message.fromBytes(decrypted)
            } catch {
                const errorMessage = platform.bytesToString(response.data.slice(0, 1000))
                try {
                    const errorObj: KeeperError = JSON.parse(errorMessage)
                    switch (errorObj.error) {
                        case 'key':
                            this.options.deviceConfig.transmissionKeyId = errorObj.key_id
                            if (this.options.onDeviceConfig) {
                                this.options.onDeviceConfig(this.options.deviceConfig, this.options.host);
                            }
                            this.updateTransmissionKey(errorObj.key_id)
                            continue
                        case 'region_redirect':
                            this.options.host = errorObj.region_host
                            if (this.options.onRegionChanged) {
                                this.options.onRegionChanged(this.options.host);
                            }
                            continue
                        case 'device_not_registered': {
                            if (this.options.deviceConfig.deviceToken) {
                                await this.executeRest(registerDeviceInRegionMessage({
                                    clientVersion: this.options.clientVersion,
                                    deviceName: this.options.deviceConfig.deviceName,
                                    devicePublicKey: this.options.deviceConfig.publicKey,
                                    encryptedDeviceToken: this.options.deviceConfig.deviceToken
                                }))
                                continue
                            }
                        }
                    }
                    if (this.options.onCommandFailure) {
                        this.options.onCommandFailure(errorObj)
                    }
                } catch { }
                throw(new Error(errorMessage))
            }
        }
    }

    async executeV2Command<T>(command: KeeperCommand): Promise<T> {
        command.client_version = this.clientVersion
        let requestBytes = await this.prepareRequest(command)
        let response = await platform.post(this.getUrl('vault/execute_v2_command'), requestBytes)
        let decrypted
        try {
            decrypted = await platform.aesGcmDecrypt(response.data, this.transmissionKey.key)
        } catch (e) {
            let error = platform.bytesToString(response.data)
            throw(`Unable to decrypt response: ${error}`)
        }
        let json = JSON.parse(platform.bytesToString(decrypted))
        if (json.result !== 'success' && !isTwoFactorResultCode(json.result_code)) {
            throw(json)
        }
        return json as T
    }

    async get(path: string): Promise<KeeperHttpResponse> {
        return platform.get(this.getUrl(path), {})
    }

    private updateTransmissionKey(keyNumber: number) {
        this.transmissionKey = generateTransmissionKey(keyNumber)
    }

    public async prepareRequest(payload: Uint8Array | KeeperCommand, sessionToken?: string): Promise<Uint8Array> {
        return prepareApiRequest(payload, this.transmissionKey, sessionToken)
    }

    async decryptPushMessage(pushMessageData: Uint8Array): Promise<WssClientResponse> {
        const decryptedPushMessage = await platform.aesGcmDecrypt(pushMessageData, this.transmissionKey.key)
        return WssClientResponse.decode(decryptedPushMessage)
    }

    async getPushConnectionRequest(messageSessionUid: Uint8Array) {
        return getPushConnectionRequest(messageSessionUid, this.options.deviceConfig.deviceToken, this.transmissionKey)
    }

    getTransmissionKey() : TransmissionKey {
        return this.transmissionKey;
    }

    public async prepareSsoPayload(messageSessionUid: Uint8Array): Promise<string> {
        const payload = ssoCloudRequestMessage({
            "embedded": true,
            "clientVersion": this.clientVersion,
            "dest": "vault",
            "forceLogin": false,
            "messageSessionUid": messageSessionUid
        }).toBytes()
        const request = await prepareApiRequest(payload, this.transmissionKey)
        return webSafe64FromBytes(request)
    }
}

export async function getPushConnectionRequest(messageSessionUid: Uint8Array, encryptedDeviceToken: Uint8Array, transmissionKey: TransmissionKey) {
    const connectionRequest = WssConnectionRequest.create({
        messageSessionUid: messageSessionUid,
        encryptedDeviceToken: encryptedDeviceToken,
        deviceTimeStamp: new Date().getTime()
    })
    const connectionRequestBytes = WssConnectionRequest.encode(connectionRequest).finish()
    const apiRequest = await prepareApiRequest(connectionRequestBytes, transmissionKey)
    return webSafe64FromBytes(apiRequest)
}

export async function prepareApiRequest(payload: Uint8Array | KeeperCommand, transmissionKey: TransmissionKey, sessionToken?: string): Promise<Uint8Array> {
    const requestPayload = ApiRequestPayload.create()
    if (payload) {
        requestPayload.payload = payload instanceof Uint8Array
            ? payload
            : Buffer.from(JSON.stringify(payload))
    }
    if (sessionToken) {
        requestPayload.encryptedSessionToken = normal64Bytes(sessionToken);
    }
    let requestPayloadBytes = ApiRequestPayload.encode(requestPayload).finish()
    let encryptedRequestPayload = await platform.aesGcmEncrypt(requestPayloadBytes, transmissionKey.key)
    let apiRequest = ApiRequest.create({
        encryptedTransmissionKey: transmissionKey.encryptedKey,
        encryptedPayload: encryptedRequestPayload,
        publicKeyId: transmissionKey.publicKeyId,
        locale: 'en_US'
    })
    return ApiRequest.encode(apiRequest).finish()
}

export enum KeeperEnvironment {
    Prod = 'keepersecurity.com',
    QA = 'qa.keepersecurity.com',
    DEV = 'dev.keepersecurity.com',
    DEV2 = 'dev2.keepersecurity.com',
    LOCAL = 'local.keepersecurity.com',
    Prod_EU = 'keepersecurity.eu',
    QA_EU = 'qa.keepersecurity.eu',
    DEV_EU = 'dev.keepersecurity.eu',
}

interface KeeperKeys {
    der: string[],
    pem: string[]
}

let keys =
    {
        der: {
            key1: 'MIIBCgKCAQEA9Z/CZzxiNUz8+npqI4V10+zW3AL7+M4UQDdd/17759Xzm0MOEfHOOsOgZxxNK1DEsbyCTCE05fd3Hz1mn1uGjXvm5HnN2mL/3TOVxyLU6VwH9EDInnj4DNMFifs69il3KlviT3llRgPCcjF4xrF8d4SR0/N3eqS1f9CBJPNEKEH+am5Xb/FqAlOUoXkILF0UYxA/jNLoWBSq+1W58e4xDI0p0GuP0lN8f97HBtfB7ijbtF+VxIXtxRy+4jA49zK+CQrGmWqIm5DzZcBvUtVGZ3UXd6LeMXMJOifvuCneGC2T2uB6G2g5yD54+onmKIETyNX0LtpR1MsZmKLgru5ugwIDAQAB',
            key2: 'MIIBCgKCAQEAkOpym7xC3sSysw5DAidLoVF7JUgnvXejbieDWmEiD-DQOKxzfQqYHoFfeeix__bx3wMW3I8cAc8zwZ1JO8hyB2ON732JE2Zp301GAUMnAK_rBhQWmYKP_-uXSKeTJPiuaW9PVG0oRJ4MEdS-t1vIA4eDPhI1EexHaY3P2wHKoV8twcGvdWUZB5gxEpMbx5CuvEXptnXEJlxKou3TZu9uwJIo0pgqVLUgRpW1RSRipgutpUslBnQ72Bdbsry0KKVTlcPsudAnnWUtsMJNgmyQbESPm-aVv-GzdVUFvWKpKkAxDpNArPMf0xt8VL2frw2LDe5_n9IMFogUiSYt156_mQIDAQAB',
            key3: 'MIIBCgKCAQEAyvxCWbLvtMRmq57oFg3mY4DWfkb1dir7b29E8UcwcKDcCsGTqoIhubU2pO46TVUXmFgC4E-Zlxt-9F-YA-MY7i_5GrDvySwAy4nbDhRL6Z0kz-rqUirgm9WWsP9v-X_BwzARqq83HNBuzAjf3UHgYDsKmCCarVAzRplZdT3Q5rnNiYPYSHzwfUhKEAyXk71UdtleD-bsMAmwnuYHLhDHiT279An_Ta93c9MTqa_Tq2Eirl_NXn1RdtbNohmMXldAH-C8uIh3Sz8erS4hZFSdUG1WlDsKpyRouNPQ3diorbO88wEAgpHjXkOLj63d1fYJBFG0yfu73U80aEZehQkSawIDAQAB',
            key4: 'MIIBCgKCAQEA0TVoXLpgluaqw3P011zFPSIzWhUMBqXT-Ocjy8NKjJbdrbs53eRFKk1waeB3hNn5JEKNVSNbUIe-MjacB9P34iCfKtdnrdDB8JXx0nIbIPzLtcJC4HCYASpjX_TVXrU9BgeCE3NUtnIxjHDy8PCbJyAS_Pv299Q_wpLWnkkjq70ZJ2_fX-ObbQaZHwsWKbRZ_5sD6rLfxNACTGI_jo9-vVug6AdNq96J7nUdYV1cG-INQwJJKMcAbKQcLrml8CMPc2mmf0KQ5MbS_KSbLXHUF-81AsZVHfQRSuigOStQKxgSGL5osY4NrEcODbEXtkuDrKNMsZYhijKiUHBj9vvgKwIDAQAB',
            key5: 'MIIBCgKCAQEAueOWC26w-HlOLW7s88WeWkXpjxK4mkjqngIzwbjnsU9145R51HvsILvjXJNdAuueVDHj3OOtQjfUM6eMMLr-3kaPv68y4FNusvB49uKc5ETI0HtHmHFSn9qAZvC7dQHSpYqC2TeCus-xKeUciQ5AmSfwpNtwzM6Oh2TO45zAqSA-QBSk_uv9TJu0e1W1AlNmizQtHX6je-mvqZCVHkzGFSQWQ8DBL9dHjviI2mmWfL_egAVVhBgTFXRHg5OmJbbPoHj217Yh-kHYA8IWEAHylboH6CVBdrNL4Na0fracQVTm-nOWdM95dKk3fH-KJYk_SmwB47ndWACLLi5epLl9vwIDAQAB',
            key6: 'MIIBCgKCAQEA2PJRM7-4R97rHwY_zCkFA8B3llawb6gF7oAZCpxprl6KB5z2cqLAvUfEOBtnr7RIturX04p3ThnwaFnAR7ADVZWBGOYuAyaLzGHDI5mvs8D-NewG9vw8qRkTT7Mb8fuOHC6-_lTp9AF2OA2H4QYiT1vt43KbuD0Y2CCVrOTKzDMXG8msl_JvAKt4axY9RGUtBbv0NmpkBCjLZri5AaTMgjLdu8XBXCqoLx7qZL-Bwiv4njw-ZAI4jIszJTdGzMtoQ0zL7LBj_TDUBI4Qhf2bZTZlUSL3xeDWOKmd8Frksw3oKyJ17oCQK-EGau6EaJRGyasBXl8uOEWmYYgqOWirNwIDAQAB'
        },
        pem: {
            key1: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9Z/CZzxiNUz8+npqI4V1\n0+zW3AL7+M4UQDdd/17759Xzm0MOEfHOOsOgZxxNK1DEsbyCTCE05fd3Hz1mn1uG\njXvm5HnN2mL/3TOVxyLU6VwH9EDInnj4DNMFifs69il3KlviT3llRgPCcjF4xrF8\nd4SR0/N3eqS1f9CBJPNEKEH+am5Xb/FqAlOUoXkILF0UYxA/jNLoWBSq+1W58e4x\nDI0p0GuP0lN8f97HBtfB7ijbtF+VxIXtxRy+4jA49zK+CQrGmWqIm5DzZcBvUtVG\nZ3UXd6LeMXMJOifvuCneGC2T2uB6G2g5yD54+onmKIETyNX0LtpR1MsZmKLgru5u\ngwIDAQAB\n-----END PUBLIC KEY-----\n',
            key2: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkOpym7xC3sSysw5DAidL\noVF7JUgnvXejbieDWmEiD+DQOKxzfQqYHoFfeeix//bx3wMW3I8cAc8zwZ1JO8hy\nB2ON732JE2Zp301GAUMnAK/rBhQWmYKP/+uXSKeTJPiuaW9PVG0oRJ4MEdS+t1vI\nA4eDPhI1EexHaY3P2wHKoV8twcGvdWUZB5gxEpMbx5CuvEXptnXEJlxKou3TZu9u\nwJIo0pgqVLUgRpW1RSRipgutpUslBnQ72Bdbsry0KKVTlcPsudAnnWUtsMJNgmyQ\nbESPm+aVv+GzdVUFvWKpKkAxDpNArPMf0xt8VL2frw2LDe5/n9IMFogUiSYt156/\nmQIDAQAB\n-----END PUBLIC KEY-----\n',
            key3: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyvxCWbLvtMRmq57oFg3m\nY4DWfkb1dir7b29E8UcwcKDcCsGTqoIhubU2pO46TVUXmFgC4E+Zlxt+9F+YA+MY\n7i/5GrDvySwAy4nbDhRL6Z0kz+rqUirgm9WWsP9v+X/BwzARqq83HNBuzAjf3UHg\nYDsKmCCarVAzRplZdT3Q5rnNiYPYSHzwfUhKEAyXk71UdtleD+bsMAmwnuYHLhDH\niT279An/Ta93c9MTqa/Tq2Eirl/NXn1RdtbNohmMXldAH+C8uIh3Sz8erS4hZFSd\nUG1WlDsKpyRouNPQ3diorbO88wEAgpHjXkOLj63d1fYJBFG0yfu73U80aEZehQkS\nawIDAQAB\n-----END PUBLIC KEY-----\n',
            key4: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0TVoXLpgluaqw3P011zF\nPSIzWhUMBqXT+Ocjy8NKjJbdrbs53eRFKk1waeB3hNn5JEKNVSNbUIe+MjacB9P3\n4iCfKtdnrdDB8JXx0nIbIPzLtcJC4HCYASpjX/TVXrU9BgeCE3NUtnIxjHDy8PCb\nJyAS/Pv299Q/wpLWnkkjq70ZJ2/fX+ObbQaZHwsWKbRZ/5sD6rLfxNACTGI/jo9+\nvVug6AdNq96J7nUdYV1cG+INQwJJKMcAbKQcLrml8CMPc2mmf0KQ5MbS/KSbLXHU\nF+81AsZVHfQRSuigOStQKxgSGL5osY4NrEcODbEXtkuDrKNMsZYhijKiUHBj9vvg\nKwIDAQAB\n-----END PUBLIC KEY-----\n',
            key5: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAueOWC26w+HlOLW7s88We\nWkXpjxK4mkjqngIzwbjnsU9145R51HvsILvjXJNdAuueVDHj3OOtQjfUM6eMMLr+\n3kaPv68y4FNusvB49uKc5ETI0HtHmHFSn9qAZvC7dQHSpYqC2TeCus+xKeUciQ5A\nmSfwpNtwzM6Oh2TO45zAqSA+QBSk/uv9TJu0e1W1AlNmizQtHX6je+mvqZCVHkzG\nFSQWQ8DBL9dHjviI2mmWfL/egAVVhBgTFXRHg5OmJbbPoHj217Yh+kHYA8IWEAHy\nlboH6CVBdrNL4Na0fracQVTm+nOWdM95dKk3fH+KJYk/SmwB47ndWACLLi5epLl9\nvwIDAQAB\n-----END PUBLIC KEY-----\n',
            key6: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2PJRM7+4R97rHwY/zCkF\nA8B3llawb6gF7oAZCpxprl6KB5z2cqLAvUfEOBtnr7RIturX04p3ThnwaFnAR7AD\nVZWBGOYuAyaLzGHDI5mvs8D+NewG9vw8qRkTT7Mb8fuOHC6+/lTp9AF2OA2H4QYi\nT1vt43KbuD0Y2CCVrOTKzDMXG8msl/JvAKt4axY9RGUtBbv0NmpkBCjLZri5AaTM\ngjLdu8XBXCqoLx7qZL+Bwiv4njw+ZAI4jIszJTdGzMtoQ0zL7LBj/TDUBI4Qhf2b\nZTZlUSL3xeDWOKmd8Frksw3oKyJ17oCQK+EGau6EaJRGyasBXl8uOEWmYYgqOWir\nNwIDAQAB\n-----END PUBLIC KEY-----\n'
        }
    }

let _keeperKeys: KeeperKeys = {
    der: [], pem: []
}

for (let key in keys.der) {
    _keeperKeys.der.push(normal64(keys.der[key]))
}
for (let key in keys.pem) {
    _keeperKeys.pem.push(keys.pem[key])
}

export const keeperKeys: KeeperKeys = _keeperKeys


