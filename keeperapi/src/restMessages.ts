import {Writer} from 'protobufjs'
import {AccountSummary, Authentication, BreachWatch, Enterprise, Records, ServiceLogger, SsoCloud} from './proto'

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

export const registerDeviceInRegionMessage = (data: Authentication.IRegisterDeviceInRegionRequest): RestMessage<Authentication.IRegisterDeviceInRegionRequest, {}> =>
    createMessage(data, 'authentication/register_device_in_region', Authentication.RegisterDeviceInRegionRequest, null)

export const updateDeviceMessage = (data: Authentication.IDeviceUpdateRequest): RestMessage<Authentication.IDeviceUpdateRequest, {}> =>
    createMessage(data, 'authentication/update_device', Authentication.DeviceUpdateRequest, null)

export const requestDeviceVerificationMessage = (data: Authentication.IDeviceVerificationRequest): RestMessage<Authentication.IDeviceVerificationRequest, {}> =>
    createMessage(data, 'authentication/request_device_verification', Authentication.DeviceVerificationRequest, null)

export const requestCreateUserMessage = (data: Authentication.ICreateUserRequest, isSso: boolean): RestMessage<Authentication.ICreateUserRequest, {}> =>
    createMessage(data, isSso ? 'authentication/create_user_sso' : 'authentication/request_create_user', Authentication.CreateUserRequest, null)

export const startLoginMessage = (data: Authentication.IStartLoginRequest): RestMessage<Authentication.IStartLoginRequest, Authentication.ILoginResponse> =>
    createMessage(data, 'authentication/start_login', Authentication.StartLoginRequest, Authentication.LoginResponse)

export const validateAuthHashMessage = (data: Authentication.IValidateAuthHashRequest): RestMessage<Authentication.IValidateAuthHashRequest, Authentication.ILoginResponse> =>
    createMessage(data, 'authentication/validate_auth_hash', Authentication.ValidateAuthHashRequest, Authentication.LoginResponse)

export const twoFactorValidateMessage = (data: Authentication.ITwoFactorValidateRequest): RestMessage<Authentication.ITwoFactorValidateRequest, Authentication.ITwoFactorValidateResponse> =>
    createMessage(data, 'authentication/2fa_validate', Authentication.TwoFactorValidateRequest, Authentication.TwoFactorValidateResponse)

export const twoFactorSend2FAPushMessage = (data: Authentication.ITwoFactorSendPushRequest): RestMessage<Authentication.ITwoFactorSendPushRequest, {}> =>
    createMessage(data, 'authentication/2fa_send_push', Authentication.TwoFactorSendPushRequest, null)

export const approveDeviceMessage = (data: Authentication.IApproveDeviceRequest): RestMessage<Authentication.IApproveDeviceRequest, {}> =>
    createMessage(data, 'authentication/approve_device', Authentication.ApproveDeviceRequest, null)

export const approveDeviceInstantMessage = (data: Authentication.IApproveDeviceRequest): RestMessage<Authentication.IApproveDeviceRequest, {}> =>
    createMessage(data, 'authentication/approve_device_instant', Authentication.ApproveDeviceRequest, null)

export const validateDeviceVerificationCodeMessage = (data: Authentication.IValidateDeviceVerificationCodeRequest): RestMessage<Authentication.IValidateDeviceVerificationCodeRequest, {}> =>
    createMessage(data, 'authentication/validate_device_verification_code', Authentication.ValidateDeviceVerificationCodeRequest, null)

export const validateCreateUserVerificationCodeMessage = (data: Authentication.IValidateCreateUserVerificationCodeRequest): RestMessage<Authentication.IValidateCreateUserVerificationCodeRequest, {}> =>
    createMessage(data, 'authentication/validate_create_user_verification_code', Authentication.ValidateCreateUserVerificationCodeRequest, null)

export const approveUserDevicesMessage = (data: Enterprise.IApproveUserDevicesRequest): RestMessage<Enterprise.IApproveUserDevicesRequest, Enterprise.IApproveUserDevicesResponse> =>
    createMessage(data, 'enterprise/approve_user_devices', Enterprise.ApproveUserDevicesRequest, Enterprise.ApproveUserDevicesResponse)

export const registerEncryptedDataKeyForDeviceMessage = (data: Authentication.IRegisterDeviceDataKeyRequest): RestMessage<Authentication.IRegisterDeviceDataKeyRequest, {}> =>
    createMessage(data, 'authentication/register_encrypted_data_key_for_device', Authentication.RegisterDeviceDataKeyRequest, null)

export const setUserSettingMessage = (data: Authentication.IUserSettingRequest): RestMessage<Authentication.IUserSettingRequest, {}> =>
    createMessage(data, 'setting/set_user_setting', Authentication.UserSettingRequest, null)

export const requestDeviceAdminApprovalMessage = (data: Authentication.IDeviceVerificationRequest): RestMessage<Authentication.IDeviceVerificationRequest, {}> =>
    createMessage(data, 'authentication/request_device_admin_approval', Authentication.DeviceVerificationRequest, null)

export const validateMasterPasswordMessage = (data: Authentication.IMasterPasswordReentryRequest): RestMessage<Authentication.IMasterPasswordReentryRequest, {}> =>
    createMessage(data, 'authentication/validate_master_password', Authentication.MasterPasswordReentryRequest, null)

export const startLoginMessageFromSessionToken = (data: Authentication.IStartLoginRequest): RestMessage<Authentication.IStartLoginRequest, Authentication.ILoginResponse> =>
    createMessage(data, 'authentication/login_from_existing_session_token', Authentication.StartLoginRequest, Authentication.LoginResponse)

export const keepAliveMessage = (): RestMessage< {}, {}> => createMessage({}, 'keep_alive', null, null)

export const logoutV3Message = (): RestMessage<{}, {}> => createMessage({}, 'vault/logout_v3', null, null)

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

export const sendSessionMessage = (data: Authentication.ISendSessionMessageRequest): RestMessage<Authentication.ISendSessionMessageRequest, {}> =>
    createMessage(data, '/pushserver/send_session_message', Authentication.SendSessionMessageRequest, null)

export const setEncryptedTeamKeyMessage = (data: Enterprise.IEncryptedTeamKeyRequest): RestMessage<Enterprise.IEncryptedTeamKeyRequest, {}> =>
    createMessage(data, '/enterprise/set_encrypted_team_key', Enterprise.EncryptedTeamKeyRequest, null)

/* -- SERVICE LOGGER -- */

export const serviceLoggerGetMessage = (data: ServiceLogger.IServiceLogGetRequest): RestMessage<ServiceLogger.IServiceLogGetRequest, ServiceLogger.IServiceLogResponse> =>
    createMessage(data, 'logger/get', ServiceLogger.ServiceLogGetRequest, ServiceLogger.ServiceLogResponse);


/* -- Cloud SSO Connect -- */

export const ssoSamlMessage = (endpoint: string): RestMessage<null, null> =>
    createMessage(null, 'sso/saml/' + endpoint, null, null);

export const ssoConfigMessage = (endpoint: string): RestMessage<null, null> =>
    createMessage(null, 'sso/config/' + endpoint, null, null);

export const ssoLoginMessageWithUrl = (url): RestMessage<null, null> =>
    createMessage(null, url, null, null);

export const ssoLogoutMessage = (serviceProviderId, data): RestMessage<null, null> =>
    createMessage(null, 'sso/saml/logout/' + serviceProviderId, null, null);

export const ssoGetMetadataMessage = (serviceProviderId): RestMessage<null, null> =>
    createMessage(null, 'sso/saml/metadata/' + serviceProviderId, null, null);

export const ssoUploadIdpMetadataMessage = (data: SsoCloud.ISsoCloudIdpMetadataRequest): RestMessage<SsoCloud.ISsoCloudIdpMetadataRequest, SsoCloud.ISsoCloudConfigurationValidationResponse> =>
    createMessage(data, 'sso/config/sso_cloud_upload_idp_metadata', SsoCloud.SsoCloudIdpMetadataRequest, SsoCloud.SsoCloudConfigurationValidationResponse);

export const ssoCloudServiceProviderUpdateRequestMessage = (data: SsoCloud.ISsoCloudServiceProviderUpdateRequest): RestMessage<SsoCloud.ISsoCloudServiceProviderUpdateRequest, SsoCloud.ISsoCloudConfigurationResponse> =>
    createMessage(data, 'sso/config/sso_cloud_sp_configuration_set', SsoCloud.SsoCloudServiceProviderUpdateRequest, SsoCloud.SsoCloudConfigurationResponse);

export const ssoCloudConfigurationRequestMessage = (data: SsoCloud.ISsoCloudConfigurationRequest, url: string): RestMessage<SsoCloud.ISsoCloudConfigurationRequest, SsoCloud.ISsoCloudConfigurationResponse> =>
    createMessage(data, url, SsoCloud.SsoCloudConfigurationRequest, SsoCloud.SsoCloudConfigurationResponse);

export const ssoCloudLogRequestMessage = (data: SsoCloud.ISsoCloudLogRequest, url: string): RestMessage<SsoCloud.ISsoCloudLogRequest, ServiceLogger.IServiceLogResponse> =>
    createMessage(data, url, SsoCloud.SsoCloudLogRequest, ServiceLogger.ServiceLogResponse);

export const ssoCloudSAMLLogRequestMessage = (data: SsoCloud.ISsoCloudSAMLLogRequest, url: string): RestMessage<SsoCloud.ISsoCloudSAMLLogRequest, SsoCloud.ISsoCloudSAMLLogResponse> =>
    createMessage(data, url, SsoCloud.SsoCloudSAMLLogRequest, SsoCloud.SsoCloudSAMLLogResponse);

export const ssoCloudServiceProviderConfigurationListRequestMessage = (data: SsoCloud.ISsoCloudServiceProviderConfigurationListRequest): RestMessage<SsoCloud.ISsoCloudServiceProviderConfigurationListRequest, SsoCloud.ISsoCloudServiceProviderConfigurationListResponse> =>
    createMessage(data, 'sso/config/sso_cloud_sp_configuration_get', SsoCloud.SsoCloudServiceProviderConfigurationListRequest, SsoCloud.SsoCloudServiceProviderConfigurationListResponse);

export const ssoServiceProviderRequestMessage = (data: Authentication.ISsoServiceProviderRequest): RestMessage<Authentication.ISsoServiceProviderRequest, Authentication.ISsoServiceProviderResponse> =>
    createMessage(data, 'enterprise/get_sso_service_provider', Authentication.SsoServiceProviderRequest, Authentication.SsoServiceProviderResponse);

export const ssoCloudRequestMessage = (data: SsoCloud.ISsoCloudRequest): RestMessage<SsoCloud.ISsoCloudRequest, null> =>
    createMessage(data, null, SsoCloud.SsoCloudRequest, null);

export const ssoCloudValidationRequestMessage = (data: SsoCloud.ISsoCloudConfigurationValidationRequest, url:string): RestMessage<SsoCloud.ISsoCloudConfigurationValidationRequest, SsoCloud.ISsoCloudConfigurationValidationResponse> =>
    createMessage(data, url, SsoCloud.SsoCloudConfigurationValidationRequest, SsoCloud.SsoCloudConfigurationValidationResponse);

/* -- Account Summary --*/

export const asSetEnterpriseUserDataKeyMessage = (data: Enterprise.IEnterpriseUserDataKey): RestMessage<Enterprise.IEnterpriseUserDataKey, null> =>
    createMessage(data, 'enterprise/set_enterprise_user_data_key', Enterprise.EnterpriseUserDataKey, null);

export const getEnterprisePublicKeyMessage = (): RestMessage<null, BreachWatch.EnterprisePublicKeyResponse> =>
    createMessage(null, 'breachwatch/get_enterprise_public_key', null, BreachWatch.EnterprisePublicKeyResponse);