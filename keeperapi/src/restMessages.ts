import {Writer} from 'protobufjs'
import {AccountSummary, Authentication, Enterprise, Records} from './proto'

export interface RestMessage<TIn, TOut> {
    path: string
    toBytes(): Uint8Array
    fromBytes(data: Uint8Array): TOut
}

type encoderClass<T> = {
    encode: (message: T, writer?: Writer) => Writer;
}

type decoderClass<T> = {
    decode: (reader: Uint8Array, length?: number) => T;
}

function createMessage<TIn, TOut>(data: TIn, path: string, encoder: encoderClass<TIn>, decoder: decoderClass<TOut>): RestMessage<TIn, TOut> {
    return {
        path: path,
        toBytes(): Uint8Array {
            return encoder ? encoder.encode(data).finish() : null
        },
        fromBytes(data: Uint8Array): TOut {
            return decoder.decode(data)
        }
    }
}

// new login

export const registerDeviceMessage = (data: Authentication.IDeviceRegistrationRequest): RestMessage<Authentication.IDeviceRegistrationRequest, Authentication.IDevice> =>
    createMessage(data, 'authentication/register_device', Authentication.DeviceRegistrationRequest, Authentication.Device)

export const updateDeviceMessage = (data: Authentication.IDeviceUpdateRequest): RestMessage<Authentication.IDeviceUpdateRequest, {}> =>
    createMessage(data, 'authentication/update_device', Authentication.DeviceUpdateRequest, null)

export const requestDeviceVerificationMessage = (data: Authentication.IDeviceVerificationRequest): RestMessage<Authentication.IDeviceVerificationRequest, {}> =>
    createMessage(data, 'authentication/request_device_verification', Authentication.DeviceVerificationRequest, null)

export const registerUserMessage = (data: Authentication.IRegisterUserRequest): RestMessage<Authentication.IRegisterUserRequest, Authentication.UserDeviceStatus> =>
    createMessage(data, 'authentication/register_user', Authentication.RegisterUserRequest, Authentication.UserDeviceStatus)

export const preLoginV3Message = (data: Authentication.IPreLoginV3Request): RestMessage<Authentication.IPreLoginV3Request, Authentication.IPreLoginV3Response> =>
    createMessage(data, 'authentication/pre_login_v3', Authentication.PreLoginV3Request, Authentication.PreLoginV3Response)

export const loginV3Message = (data: Authentication.ILoginRequest): RestMessage<Authentication.ILoginRequest, Authentication.ILoginResponse> =>
    createMessage(data, 'authentication/login_v3', Authentication.LoginRequest, Authentication.LoginResponse)

// end new login

export const deviceMessage = (data: Authentication.IDeviceRequest): RestMessage<Authentication.IDeviceRequest, Authentication.IDeviceResponse> =>
    createMessage(data, 'authentication/get_device_token', Authentication.DeviceRequest, Authentication.DeviceResponse)

export const preLoginMessage = (data: Authentication.IPreLoginRequest): RestMessage<Authentication.IPreLoginRequest, Authentication.IPreLoginResponse> =>
    createMessage(data, 'authentication/pre_login', Authentication.PreLoginRequest, Authentication.PreLoginResponse)

export const securityReportMessage = (data: Authentication.ISecurityReportRequest): RestMessage<Authentication.ISecurityReportRequest, Authentication.ISecurityReportResponse> =>
    createMessage(data, 'enterprise/get_security_report_data', Authentication.SecurityReportRequest, Authentication.SecurityReportResponse)

export const enterpriseNodeToManagedCompanyMessage = (data: Enterprise.INodeToManagedCompanyRequest): RestMessage<Enterprise.INodeToManagedCompanyRequest, {}> =>
    createMessage(data, 'enterprise/node_to_managed_company', Enterprise.NodeToManagedCompanyRequest, null)

export const recordTypesGetMessage = (data: Records.IRecordTypesRequest): RestMessage<Records.IRecordTypesRequest, Records.IRecordTypesResponse> =>
    createMessage(data, 'vault/get_record_types', Records.RecordTypesRequest, Records.RecordTypesResponse)

export const recordTypeAddMessage = (data: Records.IRecordType): RestMessage<Records.IRecordType, Records.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_add', Records.RecordType, Records.RecordTypeModifyResponse)

export const recordTypeUpdateMessage = (data: Records.IRecordType): RestMessage<Records.IRecordType, Records.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_update', Records.RecordType, Records.RecordTypeModifyResponse)

export const recordTypeDeleteMessage = (data: Records.IRecordType): RestMessage<Records.IRecordType, Records.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_delete', Records.RecordType, Records.RecordTypeModifyResponse)

export const recordsAddMessage = (data: Records.IRecordsAddRequest): RestMessage<Records.IRecordsAddRequest, Records.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_add', Records.RecordsAddRequest, Records.RecordsModifyResponse)

export const recordsUpdateMessage = (data: Records.IRecordsUpdateRequest): RestMessage<Records.IRecordsUpdateRequest, Records.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_update', Records.RecordsUpdateRequest, Records.RecordsModifyResponse)

export const fileDownloadMessage = (data: Records.IFilesGetRequest): RestMessage<Records.IFilesGetRequest, Records.IFilesGetResponse> =>
    createMessage(data, 'vault/files_download', Records.FilesGetRequest, Records.FilesGetResponse)

export const fileAddMessage = (data: Records.IFilesAddRequest): RestMessage<Records.IFilesAddRequest, Records.IFilesAddResponse> =>
    createMessage(data, 'vault/files_add', Records.FilesAddRequest, Records.FilesAddResponse)

export const accountSummaryMessage = (data: AccountSummary.IAccountSummaryRequest): RestMessage<AccountSummary.IAccountSummaryRequest, AccountSummary.IAccountSummaryElements> =>
    createMessage(data, 'login/account_summary', AccountSummary.AccountSummaryRequest, AccountSummary.AccountSummaryElements)
