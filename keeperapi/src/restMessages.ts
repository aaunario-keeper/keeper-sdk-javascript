import {Writer} from 'protobufjs'
import {Authentication, Enterprise} from './proto'

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
            return encoder.encode(data).finish()
        },
        fromBytes(data: Uint8Array): TOut {
            return decoder.decode(data)
        }
    }
}

export const deviceMessage = (data: Authentication.IDeviceRequest): RestMessage<Authentication.IDeviceRequest, Authentication.IDeviceResponse> =>
    createMessage(data, 'authentication/get_device_token', Authentication.DeviceRequest, Authentication.DeviceResponse)

export const preLoginMessage = (data: Authentication.IPreLoginRequest): RestMessage<Authentication.IPreLoginRequest, Authentication.IPreLoginResponse> =>
    createMessage(data, 'authentication/pre_login', Authentication.PreLoginRequest, Authentication.PreLoginResponse)

export const securityReportMessage = (data: Authentication.ISecurityReportRequest): RestMessage<Authentication.ISecurityReportRequest, Authentication.ISecurityReportResponse> =>
    createMessage(data, 'enterprise/get_security_report_data', Authentication.SecurityReportRequest, Authentication.SecurityReportResponse)

export const enterpriseNodeToManagedCompanyMessage = (data: Enterprise.INodeToManagedCompanyRequest): RestMessage<Enterprise.INodeToManagedCompanyRequest, {}> =>
    createMessage(data, 'enterprise/get_security_report_data', Enterprise.NodeToManagedCompanyRequest, null)

export const recordTypesGetMessage = (data: Authentication.IRecordTypesRequest): RestMessage<Authentication.IRecordTypesRequest, Authentication.IRecordTypesResponse> =>
    createMessage(data, 'vault/get_record_types', Authentication.RecordTypesRequest, Authentication.RecordTypesResponse)

export const recordTypeAddMessage = (data: Authentication.IRecordType): RestMessage<Authentication.IRecordType, Authentication.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_add', Authentication.RecordType, Authentication.RecordTypeModifyResponse)

export const recordTypeUpdateMessage = (data: Authentication.IRecordType): RestMessage<Authentication.IRecordType, Authentication.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_update', Authentication.RecordType, Authentication.RecordTypeModifyResponse)

export const recordTypeDeleteMessage = (data: Authentication.IRecordType): RestMessage<Authentication.IRecordType, Authentication.IRecordTypeModifyResponse> =>
    createMessage(data, 'vault/record_type_delete', Authentication.RecordType, Authentication.RecordTypeModifyResponse)

export const recordsAddMessage = (data: Authentication.IRecordsUpdateRequest): RestMessage<Authentication.IRecordsUpdateRequest, Authentication.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_add', Authentication.RecordsUpdateRequest, Authentication.RecordsModifyResponse)

export const recordsUpdateMessage = (data: Authentication.IRecordsUpdateRequest): RestMessage<Authentication.IRecordsUpdateRequest, Authentication.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_update', Authentication.RecordsUpdateRequest, Authentication.RecordsModifyResponse)

export const recordsRemoveMessage = (data: Authentication.IRecordsRemoveRequest): RestMessage<Authentication.IRecordsRemoveRequest, Authentication.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_remove', Authentication.RecordsRemoveRequest, Authentication.RecordsModifyResponse)

export const recordsDeleteMessage = (data: Authentication.IRecordsRemoveRequest): RestMessage<Authentication.IRecordsRemoveRequest, Authentication.IRecordsModifyResponse> =>
    createMessage(data, 'vault/records_delete', Authentication.RecordsRemoveRequest, Authentication.RecordsModifyResponse)
