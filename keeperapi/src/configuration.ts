import {KeeperEnvironment} from "./endpoint";
import {Authentication} from './proto';
import TwoFactorExpiration = Authentication.TwoFactorExpiration;
import TwoFactorPushType = Authentication.TwoFactorPushType;
import TwoFactorChannelType = Authentication.TwoFactorChannelType;

export type KeeperHost = KeeperEnvironment | string

export interface ClientConfiguration {
    authUI?: AuthUI
    authUI3?: AuthUI3
    clientVersion?: string
    deviceConfig?: DeviceConfig // v15+ device config
    deviceToken?: Uint8Array // pre - v15 device token
    host: KeeperHost
    onCommandFailure?: (error: KeeperError) => void,
    onDeviceConfig?: (deviceConfig: DeviceConfig, host: KeeperHost) => void // event to store device config
    onDeviceToken?: (deviceToken: Uint8Array) => void  // event to store device token
    onRegionChanged?: (newRegion: string) => void,
    onDeviceVerified?: (isDeviceVerified: boolean) => void
    sessionStorage?: SessionStorage
    useSessionResumption?: boolean
}
export interface ClientConfigurationInternal extends ClientConfiguration {
    deviceConfig: DeviceConfig // v15+ device config
}

export type KeeperError = {
    additional_info?: string
    error?: string
    location?: string
    message?: string
    path?: string
    result_code?: string
    key_id?: number
}

export interface DeviceConfig {
    deviceName: string | null
    deviceToken: Uint8Array | null
    privateKey: Uint8Array | null
    publicKey: Uint8Array | null
    transmissionKeyId: number | null
}

export interface SessionStorage {
    lastUsername: string;
    getCloneCode(username: string): Uint8Array | null;
    saveCloneCode(username: string, cloneCode: Uint8Array): void;
}

export interface VendorConfiguration {
    host: KeeperHost;
    vendorId: string;
    privateKey: string;
}

export interface TransmissionKey {
    key: Uint8Array
    publicKeyId: number
    encryptedKey: Uint8Array
}

export interface AuthUI {
    getTwoFactorCode(errorMessage?: string): Promise<string>;
    displayDialog(): Promise<boolean>;
}

export interface AuthUI3 {
    waitForDeviceApproval(channels: DeviceApprovalChannel[], isCloud: boolean): Promise<boolean>
    waitForTwoFactorCode(channels: TwoFactorChannelData[], cancel: Promise<void>): Promise<boolean>
    getPassword?(): Promise<string>
    getSSOToken?(redirectUrl: string): Promise<Uint8Array>
    redirectCallback?(url: string): void
}

export type TwoFactorInput = {
    twoFactorCode: string
    desiredExpiration: TwoFactorExpiration
}

export enum DeviceVerificationMethods {
    Email,
    KeeperPush,
    TFA,
    AdminApproval,
}

export type DeviceApprovalChannel = {
    channel: DeviceVerificationMethods
    sendApprovalRequest: () => Promise<void>
    validateCode?: (code: string) => Promise<void>
    setExpiration?: (expiration: TwoFactorExpiration) => void
}

export type TwoFactorChannelData = {
    availablePushes?: TwoFactorPushType[],
    channel: Authentication.ITwoFactorChannelInfo
    sendPush?: (type: TwoFactorPushType) => void
    sendCode: (code: string) => void
    setExpiration: (expiration: TwoFactorExpiration) => void
}

export type LoginError = {
    error: string;
    message: string;
}
