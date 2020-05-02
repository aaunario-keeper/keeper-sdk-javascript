import * as $protobuf from "protobufjs";
/** Namespace Authentication. */
export namespace Authentication {

    /** SupportedLanguage enum. */
    enum SupportedLanguage {
        ENGLISH = 0,
        ARABIC = 1,
        BRITISH = 2,
        CHINESE = 3,
        CHINESE_HONG_KONG = 4,
        CHINESE_TAIWAN = 5,
        DUTCH = 6,
        FRENCH = 7,
        GERMAN = 8,
        GREEK = 9,
        HEBREW = 10,
        ITALIAN = 11,
        JAPANESE = 12,
        KOREAN = 13,
        POLISH = 14,
        PORTUGUESE = 15,
        PORTUGUESE_BRAZIL = 16,
        ROMANIAN = 17,
        RUSSIAN = 18,
        SLOVAK = 19,
        SPANISH = 20
    }

    /** LoginType enum. */
    enum LoginType {
        NORMAL = 0,
        SSO = 1,
        BIO = 2,
        ALTERNATE = 3,
        OFFLINE = 4
    }

    /** DeviceStatus enum. */
    enum DeviceStatus {
        DEVICE_NEEDS_APPROVAL = 0,
        DEVICE_OK = 1,
        DEVICE_DISABLED = 2,
        DEVICE_LOCKED = 3
    }

    /** LicenseStatus enum. */
    enum LicenseStatus {
        OTHER = 0,
        ACTIVE = 1,
        EXPIRED = 2,
        DISABLED = 3
    }

    /** AccountType enum. */
    enum AccountType {
        CONSUMER = 0,
        FAMILY = 1,
        ENTERPRISE = 2
    }

    /** SessionTokenType enum. */
    enum SessionTokenType {
        NO_RESTRICTION = 0,
        ACCOUNT_RECOVERY = 1,
        SHARE_ACCOUNT = 2,
        PURCHASE = 3,
        RESTRICT = 4,
        ACCEPT_INVITE = 5
    }

    /** Version enum. */
    enum Version {
        invalid_version = 0,
        default_version = 1,
        second_version = 2
    }

    /** MasterPasswordReentryActionType enum. */
    enum MasterPasswordReentryActionType {
        UNMASK = 0,
        COPY = 1
    }

    /** Properties of an ApiRequest. */
    interface IApiRequest {

        /** ApiRequest encryptedTransmissionKey */
        encryptedTransmissionKey?: (Uint8Array|null);

        /** ApiRequest publicKeyId */
        publicKeyId?: (number|null);

        /** ApiRequest locale */
        locale?: (string|null);

        /** ApiRequest encryptedPayload */
        encryptedPayload?: (Uint8Array|null);

        /** ApiRequest encryptionType */
        encryptionType?: (number|null);

        /** ApiRequest recaptcha */
        recaptcha?: (string|null);
    }

    /** Represents an ApiRequest. */
    class ApiRequest implements IApiRequest {

        /**
         * Constructs a new ApiRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IApiRequest);

        /** ApiRequest encryptedTransmissionKey. */
        public encryptedTransmissionKey: Uint8Array;

        /** ApiRequest publicKeyId. */
        public publicKeyId: number;

        /** ApiRequest locale. */
        public locale: string;

        /** ApiRequest encryptedPayload. */
        public encryptedPayload: Uint8Array;

        /** ApiRequest encryptionType. */
        public encryptionType: number;

        /** ApiRequest recaptcha. */
        public recaptcha: string;

        /**
         * Creates a new ApiRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiRequest instance
         */
        public static create(properties?: Authentication.IApiRequest): Authentication.ApiRequest;

        /**
         * Encodes the specified ApiRequest message. Does not implicitly {@link Authentication.ApiRequest.verify|verify} messages.
         * @param message ApiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiRequest message, length delimited. Does not implicitly {@link Authentication.ApiRequest.verify|verify} messages.
         * @param message ApiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ApiRequest;

        /**
         * Decodes an ApiRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ApiRequest;

        /**
         * Verifies an ApiRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ApiRequest;

        /**
         * Creates a plain object from an ApiRequest message. Also converts values to other types if specified.
         * @param message ApiRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApiRequestPayload. */
    interface IApiRequestPayload {

        /** ApiRequestPayload payload */
        payload?: (Uint8Array|null);

        /** ApiRequestPayload encryptedSessionToken */
        encryptedSessionToken?: (Uint8Array|null);

        /** ApiRequestPayload timeToken */
        timeToken?: (Uint8Array|null);

        /** ApiRequestPayload apiVersion */
        apiVersion?: (number|null);
    }

    /** Represents an ApiRequestPayload. */
    class ApiRequestPayload implements IApiRequestPayload {

        /**
         * Constructs a new ApiRequestPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IApiRequestPayload);

        /** ApiRequestPayload payload. */
        public payload: Uint8Array;

        /** ApiRequestPayload encryptedSessionToken. */
        public encryptedSessionToken: Uint8Array;

        /** ApiRequestPayload timeToken. */
        public timeToken: Uint8Array;

        /** ApiRequestPayload apiVersion. */
        public apiVersion: number;

        /**
         * Creates a new ApiRequestPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiRequestPayload instance
         */
        public static create(properties?: Authentication.IApiRequestPayload): Authentication.ApiRequestPayload;

        /**
         * Encodes the specified ApiRequestPayload message. Does not implicitly {@link Authentication.ApiRequestPayload.verify|verify} messages.
         * @param message ApiRequestPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IApiRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiRequestPayload message, length delimited. Does not implicitly {@link Authentication.ApiRequestPayload.verify|verify} messages.
         * @param message ApiRequestPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IApiRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiRequestPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiRequestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ApiRequestPayload;

        /**
         * Decodes an ApiRequestPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiRequestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ApiRequestPayload;

        /**
         * Verifies an ApiRequestPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiRequestPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiRequestPayload
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ApiRequestPayload;

        /**
         * Creates a plain object from an ApiRequestPayload message. Also converts values to other types if specified.
         * @param message ApiRequestPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ApiRequestPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiRequestPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Transform. */
    interface ITransform {

        /** Transform key */
        key?: (Uint8Array|null);

        /** Transform encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents a Transform. */
    class Transform implements ITransform {

        /**
         * Constructs a new Transform.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ITransform);

        /** Transform key. */
        public key: Uint8Array;

        /** Transform encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new Transform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transform instance
         */
        public static create(properties?: Authentication.ITransform): Authentication.Transform;

        /**
         * Encodes the specified Transform message. Does not implicitly {@link Authentication.Transform.verify|verify} messages.
         * @param message Transform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transform message, length delimited. Does not implicitly {@link Authentication.Transform.verify|verify} messages.
         * @param message Transform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.Transform;

        /**
         * Decodes a Transform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.Transform;

        /**
         * Verifies a Transform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transform
         */
        public static fromObject(object: { [k: string]: any }): Authentication.Transform;

        /**
         * Creates a plain object from a Transform message. Also converts values to other types if specified.
         * @param message Transform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.Transform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceRequest. */
    interface IDeviceRequest {

        /** DeviceRequest clientVersion */
        clientVersion?: (string|null);

        /** DeviceRequest deviceName */
        deviceName?: (string|null);
    }

    /** Represents a DeviceRequest. */
    class DeviceRequest implements IDeviceRequest {

        /**
         * Constructs a new DeviceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceRequest);

        /** DeviceRequest clientVersion. */
        public clientVersion: string;

        /** DeviceRequest deviceName. */
        public deviceName: string;

        /**
         * Creates a new DeviceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceRequest instance
         */
        public static create(properties?: Authentication.IDeviceRequest): Authentication.DeviceRequest;

        /**
         * Encodes the specified DeviceRequest message. Does not implicitly {@link Authentication.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceRequest message, length delimited. Does not implicitly {@link Authentication.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceRequest;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceRequest;

        /**
         * Verifies a DeviceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceRequest;

        /**
         * Creates a plain object from a DeviceRequest message. Also converts values to other types if specified.
         * @param message DeviceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthRequest. */
    interface IAuthRequest {

        /** AuthRequest clientVersion */
        clientVersion?: (string|null);

        /** AuthRequest username */
        username?: (string|null);

        /** AuthRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents an AuthRequest. */
    class AuthRequest implements IAuthRequest {

        /**
         * Constructs a new AuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IAuthRequest);

        /** AuthRequest clientVersion. */
        public clientVersion: string;

        /** AuthRequest username. */
        public username: string;

        /** AuthRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthRequest instance
         */
        public static create(properties?: Authentication.IAuthRequest): Authentication.AuthRequest;

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link Authentication.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link Authentication.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.AuthRequest;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.AuthRequest;

        /**
         * Verifies an AuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.AuthRequest;

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @param message AuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.AuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewUserMinimumParams. */
    interface INewUserMinimumParams {

        /** NewUserMinimumParams minimumIterations */
        minimumIterations?: (number|null);

        /** NewUserMinimumParams passwordMatchRegex */
        passwordMatchRegex?: (string[]|null);

        /** NewUserMinimumParams passwordMatchDescription */
        passwordMatchDescription?: (string[]|null);
    }

    /** Represents a NewUserMinimumParams. */
    class NewUserMinimumParams implements INewUserMinimumParams {

        /**
         * Constructs a new NewUserMinimumParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.INewUserMinimumParams);

        /** NewUserMinimumParams minimumIterations. */
        public minimumIterations: number;

        /** NewUserMinimumParams passwordMatchRegex. */
        public passwordMatchRegex: string[];

        /** NewUserMinimumParams passwordMatchDescription. */
        public passwordMatchDescription: string[];

        /**
         * Creates a new NewUserMinimumParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewUserMinimumParams instance
         */
        public static create(properties?: Authentication.INewUserMinimumParams): Authentication.NewUserMinimumParams;

        /**
         * Encodes the specified NewUserMinimumParams message. Does not implicitly {@link Authentication.NewUserMinimumParams.verify|verify} messages.
         * @param message NewUserMinimumParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.INewUserMinimumParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewUserMinimumParams message, length delimited. Does not implicitly {@link Authentication.NewUserMinimumParams.verify|verify} messages.
         * @param message NewUserMinimumParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.INewUserMinimumParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewUserMinimumParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewUserMinimumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.NewUserMinimumParams;

        /**
         * Decodes a NewUserMinimumParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewUserMinimumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.NewUserMinimumParams;

        /**
         * Verifies a NewUserMinimumParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewUserMinimumParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewUserMinimumParams
         */
        public static fromObject(object: { [k: string]: any }): Authentication.NewUserMinimumParams;

        /**
         * Creates a plain object from a NewUserMinimumParams message. Also converts values to other types if specified.
         * @param message NewUserMinimumParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.NewUserMinimumParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewUserMinimumParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreLoginRequest. */
    interface IPreLoginRequest {

        /** PreLoginRequest authRequest */
        authRequest?: (Authentication.IAuthRequest|null);

        /** PreLoginRequest loginType */
        loginType?: (Authentication.LoginType|null);

        /** PreLoginRequest twoFactorToken */
        twoFactorToken?: (Uint8Array|null);
    }

    /** Represents a PreLoginRequest. */
    class PreLoginRequest implements IPreLoginRequest {

        /**
         * Constructs a new PreLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IPreLoginRequest);

        /** PreLoginRequest authRequest. */
        public authRequest?: (Authentication.IAuthRequest|null);

        /** PreLoginRequest loginType. */
        public loginType: Authentication.LoginType;

        /** PreLoginRequest twoFactorToken. */
        public twoFactorToken: Uint8Array;

        /**
         * Creates a new PreLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreLoginRequest instance
         */
        public static create(properties?: Authentication.IPreLoginRequest): Authentication.PreLoginRequest;

        /**
         * Encodes the specified PreLoginRequest message. Does not implicitly {@link Authentication.PreLoginRequest.verify|verify} messages.
         * @param message PreLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IPreLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreLoginRequest message, length delimited. Does not implicitly {@link Authentication.PreLoginRequest.verify|verify} messages.
         * @param message PreLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IPreLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.PreLoginRequest;

        /**
         * Decodes a PreLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.PreLoginRequest;

        /**
         * Verifies a PreLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.PreLoginRequest;

        /**
         * Creates a plain object from a PreLoginRequest message. Also converts values to other types if specified.
         * @param message PreLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.PreLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest authRequest */
        authRequest?: (Authentication.IAuthRequest|null);

        /** LoginRequest loginType */
        loginType?: (Authentication.LoginType|null);

        /** LoginRequest authenticationHashPrime */
        authenticationHashPrime?: (Uint8Array|null);

        /** LoginRequest timestampForAuth */
        timestampForAuth?: (number|Long|null);

        /** LoginRequest authResponse */
        authResponse?: (Uint8Array|null);

        /** LoginRequest mcEnterpriseId */
        mcEnterpriseId?: (number|null);

        /** LoginRequest pushToken */
        pushToken?: (string|null);

        /** LoginRequest platform */
        platform?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ILoginRequest);

        /** LoginRequest authRequest. */
        public authRequest?: (Authentication.IAuthRequest|null);

        /** LoginRequest loginType. */
        public loginType: Authentication.LoginType;

        /** LoginRequest authenticationHashPrime. */
        public authenticationHashPrime: Uint8Array;

        /** LoginRequest timestampForAuth. */
        public timestampForAuth: (number|Long);

        /** LoginRequest authResponse. */
        public authResponse: Uint8Array;

        /** LoginRequest mcEnterpriseId. */
        public mcEnterpriseId: number;

        /** LoginRequest pushToken. */
        public pushToken: string;

        /** LoginRequest platform. */
        public platform: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: Authentication.ILoginRequest): Authentication.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link Authentication.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link Authentication.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegistrationRequest. */
    interface IRegistrationRequest {

        /** RegistrationRequest authRequest */
        authRequest?: (Authentication.IAuthRequest|null);

        /** RegistrationRequest userAuthRequest */
        userAuthRequest?: (Authentication.IUserAuthRequest|null);

        /** RegistrationRequest encryptedClientKey */
        encryptedClientKey?: (Uint8Array|null);

        /** RegistrationRequest encryptedPrivateKey */
        encryptedPrivateKey?: (Uint8Array|null);

        /** RegistrationRequest publicKey */
        publicKey?: (Uint8Array|null);

        /** RegistrationRequest verificationCode */
        verificationCode?: (string|null);

        /** RegistrationRequest deprecatedAuthHashHash */
        deprecatedAuthHashHash?: (Uint8Array|null);

        /** RegistrationRequest deprecatedEncryptedClientKey */
        deprecatedEncryptedClientKey?: (Uint8Array|null);

        /** RegistrationRequest deprecatedEncryptedPrivateKey */
        deprecatedEncryptedPrivateKey?: (Uint8Array|null);

        /** RegistrationRequest deprecatedEncryptionParams */
        deprecatedEncryptionParams?: (Uint8Array|null);
    }

    /** Represents a RegistrationRequest. */
    class RegistrationRequest implements IRegistrationRequest {

        /**
         * Constructs a new RegistrationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IRegistrationRequest);

        /** RegistrationRequest authRequest. */
        public authRequest?: (Authentication.IAuthRequest|null);

        /** RegistrationRequest userAuthRequest. */
        public userAuthRequest?: (Authentication.IUserAuthRequest|null);

        /** RegistrationRequest encryptedClientKey. */
        public encryptedClientKey: Uint8Array;

        /** RegistrationRequest encryptedPrivateKey. */
        public encryptedPrivateKey: Uint8Array;

        /** RegistrationRequest publicKey. */
        public publicKey: Uint8Array;

        /** RegistrationRequest verificationCode. */
        public verificationCode: string;

        /** RegistrationRequest deprecatedAuthHashHash. */
        public deprecatedAuthHashHash: Uint8Array;

        /** RegistrationRequest deprecatedEncryptedClientKey. */
        public deprecatedEncryptedClientKey: Uint8Array;

        /** RegistrationRequest deprecatedEncryptedPrivateKey. */
        public deprecatedEncryptedPrivateKey: Uint8Array;

        /** RegistrationRequest deprecatedEncryptionParams. */
        public deprecatedEncryptionParams: Uint8Array;

        /**
         * Creates a new RegistrationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegistrationRequest instance
         */
        public static create(properties?: Authentication.IRegistrationRequest): Authentication.RegistrationRequest;

        /**
         * Encodes the specified RegistrationRequest message. Does not implicitly {@link Authentication.RegistrationRequest.verify|verify} messages.
         * @param message RegistrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link Authentication.RegistrationRequest.verify|verify} messages.
         * @param message RegistrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.RegistrationRequest;

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.RegistrationRequest;

        /**
         * Verifies a RegistrationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegistrationRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.RegistrationRequest;

        /**
         * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
         * @param message RegistrationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.RegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegistrationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceResponse. */
    interface IDeviceResponse {

        /** DeviceResponse encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** DeviceResponse status */
        status?: (Authentication.DeviceStatus|null);
    }

    /** Represents a DeviceResponse. */
    class DeviceResponse implements IDeviceResponse {

        /**
         * Constructs a new DeviceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceResponse);

        /** DeviceResponse encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** DeviceResponse status. */
        public status: Authentication.DeviceStatus;

        /**
         * Creates a new DeviceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceResponse instance
         */
        public static create(properties?: Authentication.IDeviceResponse): Authentication.DeviceResponse;

        /**
         * Encodes the specified DeviceResponse message. Does not implicitly {@link Authentication.DeviceResponse.verify|verify} messages.
         * @param message DeviceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceResponse message, length delimited. Does not implicitly {@link Authentication.DeviceResponse.verify|verify} messages.
         * @param message DeviceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceResponse;

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceResponse;

        /**
         * Verifies a DeviceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceResponse;

        /**
         * Creates a plain object from a DeviceResponse message. Also converts values to other types if specified.
         * @param message DeviceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Salt. */
    interface ISalt {

        /** Salt iterations */
        iterations?: (number|null);

        /** Salt salt */
        salt?: (Uint8Array|null);

        /** Salt algorithm */
        algorithm?: (number|null);

        /** Salt uid */
        uid?: (Uint8Array|null);

        /** Salt name */
        name?: (string|null);
    }

    /** Represents a Salt. */
    class Salt implements ISalt {

        /**
         * Constructs a new Salt.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISalt);

        /** Salt iterations. */
        public iterations: number;

        /** Salt salt. */
        public salt: Uint8Array;

        /** Salt algorithm. */
        public algorithm: number;

        /** Salt uid. */
        public uid: Uint8Array;

        /** Salt name. */
        public name: string;

        /**
         * Creates a new Salt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Salt instance
         */
        public static create(properties?: Authentication.ISalt): Authentication.Salt;

        /**
         * Encodes the specified Salt message. Does not implicitly {@link Authentication.Salt.verify|verify} messages.
         * @param message Salt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISalt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Salt message, length delimited. Does not implicitly {@link Authentication.Salt.verify|verify} messages.
         * @param message Salt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISalt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Salt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Salt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.Salt;

        /**
         * Decodes a Salt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Salt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.Salt;

        /**
         * Verifies a Salt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Salt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Salt
         */
        public static fromObject(object: { [k: string]: any }): Authentication.Salt;

        /**
         * Creates a plain object from a Salt message. Also converts values to other types if specified.
         * @param message Salt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.Salt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Salt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TwoFactorChannel. */
    interface ITwoFactorChannel {

        /** TwoFactorChannel type */
        type?: (number|null);
    }

    /** Represents a TwoFactorChannel. */
    class TwoFactorChannel implements ITwoFactorChannel {

        /**
         * Constructs a new TwoFactorChannel.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ITwoFactorChannel);

        /** TwoFactorChannel type. */
        public type: number;

        /**
         * Creates a new TwoFactorChannel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TwoFactorChannel instance
         */
        public static create(properties?: Authentication.ITwoFactorChannel): Authentication.TwoFactorChannel;

        /**
         * Encodes the specified TwoFactorChannel message. Does not implicitly {@link Authentication.TwoFactorChannel.verify|verify} messages.
         * @param message TwoFactorChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ITwoFactorChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TwoFactorChannel message, length delimited. Does not implicitly {@link Authentication.TwoFactorChannel.verify|verify} messages.
         * @param message TwoFactorChannel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ITwoFactorChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TwoFactorChannel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TwoFactorChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.TwoFactorChannel;

        /**
         * Decodes a TwoFactorChannel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TwoFactorChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.TwoFactorChannel;

        /**
         * Verifies a TwoFactorChannel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TwoFactorChannel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TwoFactorChannel
         */
        public static fromObject(object: { [k: string]: any }): Authentication.TwoFactorChannel;

        /**
         * Creates a plain object from a TwoFactorChannel message. Also converts values to other types if specified.
         * @param message TwoFactorChannel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.TwoFactorChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TwoFactorChannel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoUserInfo. */
    interface ISsoUserInfo {

        /** SsoUserInfo companyName */
        companyName?: (string|null);

        /** SsoUserInfo samlRequest */
        samlRequest?: (string|null);

        /** SsoUserInfo samlRequestType */
        samlRequestType?: (string|null);

        /** SsoUserInfo ssoDomainName */
        ssoDomainName?: (string|null);

        /** SsoUserInfo url */
        url?: (string|null);
    }

    /** Represents a SsoUserInfo. */
    class SsoUserInfo implements ISsoUserInfo {

        /**
         * Constructs a new SsoUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISsoUserInfo);

        /** SsoUserInfo companyName. */
        public companyName: string;

        /** SsoUserInfo samlRequest. */
        public samlRequest: string;

        /** SsoUserInfo samlRequestType. */
        public samlRequestType: string;

        /** SsoUserInfo ssoDomainName. */
        public ssoDomainName: string;

        /** SsoUserInfo url. */
        public url: string;

        /**
         * Creates a new SsoUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoUserInfo instance
         */
        public static create(properties?: Authentication.ISsoUserInfo): Authentication.SsoUserInfo;

        /**
         * Encodes the specified SsoUserInfo message. Does not implicitly {@link Authentication.SsoUserInfo.verify|verify} messages.
         * @param message SsoUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISsoUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoUserInfo message, length delimited. Does not implicitly {@link Authentication.SsoUserInfo.verify|verify} messages.
         * @param message SsoUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISsoUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SsoUserInfo;

        /**
         * Decodes a SsoUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SsoUserInfo;

        /**
         * Verifies a SsoUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoUserInfo
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SsoUserInfo;

        /**
         * Creates a plain object from a SsoUserInfo message. Also converts values to other types if specified.
         * @param message SsoUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SsoUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreLoginResponse. */
    interface IPreLoginResponse {

        /** PreLoginResponse deviceStatus */
        deviceStatus?: (Authentication.DeviceStatus|null);

        /** PreLoginResponse salt */
        salt?: (Authentication.ISalt[]|null);

        /** PreLoginResponse OBSOLETE_FIELD */
        OBSOLETE_FIELD?: (Authentication.ITwoFactorChannel[]|null);

        /** PreLoginResponse ssoUserInfo */
        ssoUserInfo?: (Authentication.ISsoUserInfo|null);
    }

    /** Represents a PreLoginResponse. */
    class PreLoginResponse implements IPreLoginResponse {

        /**
         * Constructs a new PreLoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IPreLoginResponse);

        /** PreLoginResponse deviceStatus. */
        public deviceStatus: Authentication.DeviceStatus;

        /** PreLoginResponse salt. */
        public salt: Authentication.ISalt[];

        /** PreLoginResponse OBSOLETE_FIELD. */
        public OBSOLETE_FIELD: Authentication.ITwoFactorChannel[];

        /** PreLoginResponse ssoUserInfo. */
        public ssoUserInfo?: (Authentication.ISsoUserInfo|null);

        /**
         * Creates a new PreLoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreLoginResponse instance
         */
        public static create(properties?: Authentication.IPreLoginResponse): Authentication.PreLoginResponse;

        /**
         * Encodes the specified PreLoginResponse message. Does not implicitly {@link Authentication.PreLoginResponse.verify|verify} messages.
         * @param message PreLoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IPreLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreLoginResponse message, length delimited. Does not implicitly {@link Authentication.PreLoginResponse.verify|verify} messages.
         * @param message PreLoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IPreLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreLoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreLoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.PreLoginResponse;

        /**
         * Decodes a PreLoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreLoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.PreLoginResponse;

        /**
         * Verifies a PreLoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreLoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreLoginResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.PreLoginResponse;

        /**
         * Creates a plain object from a PreLoginResponse message. Also converts values to other types if specified.
         * @param message PreLoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.PreLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreLoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse encryrptedSessionToken */
        encryrptedSessionToken?: (Uint8Array|null);

        /** LoginResponse vault */
        vault?: (Authentication.ILicense|null);

        /** LoginResponse chat */
        chat?: (Authentication.ILicense|null);

        /** LoginResponse storage */
        storage?: (Authentication.ILicense|null);

        /** LoginResponse breachWatch */
        breachWatch?: (Authentication.ILicense|null);

        /** LoginResponse accountType */
        accountType?: (Authentication.AccountType|null);

        /** LoginResponse encryptedDAT */
        encryptedDAT?: (Uint8Array|null);

        /** LoginResponse encryptedPAT */
        encryptedPAT?: (Uint8Array|null);

        /** LoginResponse encryptedEAT */
        encryptedEAT?: (Uint8Array|null);

        /** LoginResponse encryptedDataKey */
        encryptedDataKey?: (Uint8Array|null);

        /** LoginResponse sessionTokenType */
        sessionTokenType?: (Authentication.SessionTokenType[]|null);

        /** LoginResponse additionalMessage */
        additionalMessage?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ILoginResponse);

        /** LoginResponse encryrptedSessionToken. */
        public encryrptedSessionToken: Uint8Array;

        /** LoginResponse vault. */
        public vault?: (Authentication.ILicense|null);

        /** LoginResponse chat. */
        public chat?: (Authentication.ILicense|null);

        /** LoginResponse storage. */
        public storage?: (Authentication.ILicense|null);

        /** LoginResponse breachWatch. */
        public breachWatch?: (Authentication.ILicense|null);

        /** LoginResponse accountType. */
        public accountType: Authentication.AccountType;

        /** LoginResponse encryptedDAT. */
        public encryptedDAT: Uint8Array;

        /** LoginResponse encryptedPAT. */
        public encryptedPAT: Uint8Array;

        /** LoginResponse encryptedEAT. */
        public encryptedEAT: Uint8Array;

        /** LoginResponse encryptedDataKey. */
        public encryptedDataKey: Uint8Array;

        /** LoginResponse sessionTokenType. */
        public sessionTokenType: Authentication.SessionTokenType[];

        /** LoginResponse additionalMessage. */
        public additionalMessage: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: Authentication.ILoginResponse): Authentication.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link Authentication.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link Authentication.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a License. */
    interface ILicense {

        /** License created */
        created?: (number|Long|null);

        /** License expiration */
        expiration?: (number|Long|null);

        /** License licenseStatus */
        licenseStatus?: (Authentication.LicenseStatus|null);

        /** License paid */
        paid?: (boolean|null);

        /** License message */
        message?: (string|null);
    }

    /** Represents a License. */
    class License implements ILicense {

        /**
         * Constructs a new License.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ILicense);

        /** License created. */
        public created: (number|Long);

        /** License expiration. */
        public expiration: (number|Long);

        /** License licenseStatus. */
        public licenseStatus: Authentication.LicenseStatus;

        /** License paid. */
        public paid: boolean;

        /** License message. */
        public message: string;

        /**
         * Creates a new License instance using the specified properties.
         * @param [properties] Properties to set
         * @returns License instance
         */
        public static create(properties?: Authentication.ILicense): Authentication.License;

        /**
         * Encodes the specified License message. Does not implicitly {@link Authentication.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified License message, length delimited. Does not implicitly {@link Authentication.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a License message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.License;

        /**
         * Decodes a License message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.License;

        /**
         * Verifies a License message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a License message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns License
         */
        public static fromObject(object: { [k: string]: any }): Authentication.License;

        /**
         * Creates a plain object from a License message. Also converts values to other types if specified.
         * @param message License
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.License, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this License to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** LicenseType enum. */
    enum LicenseType {
        VAULT = 0,
        CHAT = 1,
        STORAGE = 2,
        BREACHWATCH = 3
    }

    /** Properties of an OwnerlessRecord. */
    interface IOwnerlessRecord {

        /** OwnerlessRecord recordUid */
        recordUid?: (Uint8Array|null);

        /** OwnerlessRecord recordKey */
        recordKey?: (Uint8Array|null);

        /** OwnerlessRecord status */
        status?: (number|null);
    }

    /** Represents an OwnerlessRecord. */
    class OwnerlessRecord implements IOwnerlessRecord {

        /**
         * Constructs a new OwnerlessRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IOwnerlessRecord);

        /** OwnerlessRecord recordUid. */
        public recordUid: Uint8Array;

        /** OwnerlessRecord recordKey. */
        public recordKey: Uint8Array;

        /** OwnerlessRecord status. */
        public status: number;

        /**
         * Creates a new OwnerlessRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OwnerlessRecord instance
         */
        public static create(properties?: Authentication.IOwnerlessRecord): Authentication.OwnerlessRecord;

        /**
         * Encodes the specified OwnerlessRecord message. Does not implicitly {@link Authentication.OwnerlessRecord.verify|verify} messages.
         * @param message OwnerlessRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IOwnerlessRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OwnerlessRecord message, length delimited. Does not implicitly {@link Authentication.OwnerlessRecord.verify|verify} messages.
         * @param message OwnerlessRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IOwnerlessRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OwnerlessRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OwnerlessRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.OwnerlessRecord;

        /**
         * Decodes an OwnerlessRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OwnerlessRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.OwnerlessRecord;

        /**
         * Verifies an OwnerlessRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OwnerlessRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OwnerlessRecord
         */
        public static fromObject(object: { [k: string]: any }): Authentication.OwnerlessRecord;

        /**
         * Creates a plain object from an OwnerlessRecord message. Also converts values to other types if specified.
         * @param message OwnerlessRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.OwnerlessRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OwnerlessRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OwnerlessRecords. */
    interface IOwnerlessRecords {

        /** OwnerlessRecords ownerlessRecord */
        ownerlessRecord?: (Authentication.IOwnerlessRecord[]|null);
    }

    /** Represents an OwnerlessRecords. */
    class OwnerlessRecords implements IOwnerlessRecords {

        /**
         * Constructs a new OwnerlessRecords.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IOwnerlessRecords);

        /** OwnerlessRecords ownerlessRecord. */
        public ownerlessRecord: Authentication.IOwnerlessRecord[];

        /**
         * Creates a new OwnerlessRecords instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OwnerlessRecords instance
         */
        public static create(properties?: Authentication.IOwnerlessRecords): Authentication.OwnerlessRecords;

        /**
         * Encodes the specified OwnerlessRecords message. Does not implicitly {@link Authentication.OwnerlessRecords.verify|verify} messages.
         * @param message OwnerlessRecords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IOwnerlessRecords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OwnerlessRecords message, length delimited. Does not implicitly {@link Authentication.OwnerlessRecords.verify|verify} messages.
         * @param message OwnerlessRecords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IOwnerlessRecords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OwnerlessRecords message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OwnerlessRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.OwnerlessRecords;

        /**
         * Decodes an OwnerlessRecords message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OwnerlessRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.OwnerlessRecords;

        /**
         * Verifies an OwnerlessRecords message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OwnerlessRecords message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OwnerlessRecords
         */
        public static fromObject(object: { [k: string]: any }): Authentication.OwnerlessRecords;

        /**
         * Creates a plain object from an OwnerlessRecords message. Also converts values to other types if specified.
         * @param message OwnerlessRecords
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.OwnerlessRecords, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OwnerlessRecords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAuthRequest. */
    interface IUserAuthRequest {

        /** UserAuthRequest uid */
        uid?: (Uint8Array|null);

        /** UserAuthRequest salt */
        salt?: (Uint8Array|null);

        /** UserAuthRequest iterations */
        iterations?: (number|null);

        /** UserAuthRequest encryptedClientKey */
        encryptedClientKey?: (Uint8Array|null);

        /** UserAuthRequest authHash */
        authHash?: (Uint8Array|null);

        /** UserAuthRequest encryptedDataKey */
        encryptedDataKey?: (Uint8Array|null);

        /** UserAuthRequest loginType */
        loginType?: (Authentication.LoginType|null);

        /** UserAuthRequest name */
        name?: (string|null);

        /** UserAuthRequest algorithm */
        algorithm?: (number|null);
    }

    /** Represents a UserAuthRequest. */
    class UserAuthRequest implements IUserAuthRequest {

        /**
         * Constructs a new UserAuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IUserAuthRequest);

        /** UserAuthRequest uid. */
        public uid: Uint8Array;

        /** UserAuthRequest salt. */
        public salt: Uint8Array;

        /** UserAuthRequest iterations. */
        public iterations: number;

        /** UserAuthRequest encryptedClientKey. */
        public encryptedClientKey: Uint8Array;

        /** UserAuthRequest authHash. */
        public authHash: Uint8Array;

        /** UserAuthRequest encryptedDataKey. */
        public encryptedDataKey: Uint8Array;

        /** UserAuthRequest loginType. */
        public loginType: Authentication.LoginType;

        /** UserAuthRequest name. */
        public name: string;

        /** UserAuthRequest algorithm. */
        public algorithm: number;

        /**
         * Creates a new UserAuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAuthRequest instance
         */
        public static create(properties?: Authentication.IUserAuthRequest): Authentication.UserAuthRequest;

        /**
         * Encodes the specified UserAuthRequest message. Does not implicitly {@link Authentication.UserAuthRequest.verify|verify} messages.
         * @param message UserAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IUserAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAuthRequest message, length delimited. Does not implicitly {@link Authentication.UserAuthRequest.verify|verify} messages.
         * @param message UserAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IUserAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.UserAuthRequest;

        /**
         * Decodes a UserAuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.UserAuthRequest;

        /**
         * Verifies a UserAuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAuthRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.UserAuthRequest;

        /**
         * Creates a plain object from a UserAuthRequest message. Also converts values to other types if specified.
         * @param message UserAuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.UserAuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UidRequest. */
    interface IUidRequest {

        /** UidRequest uid */
        uid?: (Uint8Array[]|null);
    }

    /** Represents an UidRequest. */
    class UidRequest implements IUidRequest {

        /**
         * Constructs a new UidRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IUidRequest);

        /** UidRequest uid. */
        public uid: Uint8Array[];

        /**
         * Creates a new UidRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UidRequest instance
         */
        public static create(properties?: Authentication.IUidRequest): Authentication.UidRequest;

        /**
         * Encodes the specified UidRequest message. Does not implicitly {@link Authentication.UidRequest.verify|verify} messages.
         * @param message UidRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IUidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UidRequest message, length delimited. Does not implicitly {@link Authentication.UidRequest.verify|verify} messages.
         * @param message UidRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IUidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UidRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UidRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.UidRequest;

        /**
         * Decodes an UidRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UidRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.UidRequest;

        /**
         * Verifies an UidRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UidRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UidRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.UidRequest;

        /**
         * Creates a plain object from an UidRequest message. Also converts values to other types if specified.
         * @param message UidRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.UidRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UidRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceUpdateRequest. */
    interface IDeviceUpdateRequest {

        /** DeviceUpdateRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** DeviceUpdateRequest clientVersion */
        clientVersion?: (string|null);

        /** DeviceUpdateRequest deviceName */
        deviceName?: (string|null);

        /** DeviceUpdateRequest deviceStatus */
        deviceStatus?: (Authentication.DeviceStatus|null);
    }

    /** Represents a DeviceUpdateRequest. */
    class DeviceUpdateRequest implements IDeviceUpdateRequest {

        /**
         * Constructs a new DeviceUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceUpdateRequest);

        /** DeviceUpdateRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** DeviceUpdateRequest clientVersion. */
        public clientVersion: string;

        /** DeviceUpdateRequest deviceName. */
        public deviceName: string;

        /** DeviceUpdateRequest deviceStatus. */
        public deviceStatus: Authentication.DeviceStatus;

        /**
         * Creates a new DeviceUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceUpdateRequest instance
         */
        public static create(properties?: Authentication.IDeviceUpdateRequest): Authentication.DeviceUpdateRequest;

        /**
         * Encodes the specified DeviceUpdateRequest message. Does not implicitly {@link Authentication.DeviceUpdateRequest.verify|verify} messages.
         * @param message DeviceUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceUpdateRequest message, length delimited. Does not implicitly {@link Authentication.DeviceUpdateRequest.verify|verify} messages.
         * @param message DeviceUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceUpdateRequest;

        /**
         * Decodes a DeviceUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceUpdateRequest;

        /**
         * Verifies a DeviceUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceUpdateRequest;

        /**
         * Creates a plain object from a DeviceUpdateRequest message. Also converts values to other types if specified.
         * @param message DeviceUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConvertUserToV3Request. */
    interface IConvertUserToV3Request {

        /** ConvertUserToV3Request authRequest */
        authRequest?: (Authentication.IAuthRequest|null);

        /** ConvertUserToV3Request userAuthRequest */
        userAuthRequest?: (Authentication.IUserAuthRequest|null);

        /** ConvertUserToV3Request encryptedClientKey */
        encryptedClientKey?: (Uint8Array|null);

        /** ConvertUserToV3Request encryptedPrivateKey */
        encryptedPrivateKey?: (Uint8Array|null);

        /** ConvertUserToV3Request publicKey */
        publicKey?: (Uint8Array|null);
    }

    /** Represents a ConvertUserToV3Request. */
    class ConvertUserToV3Request implements IConvertUserToV3Request {

        /**
         * Constructs a new ConvertUserToV3Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IConvertUserToV3Request);

        /** ConvertUserToV3Request authRequest. */
        public authRequest?: (Authentication.IAuthRequest|null);

        /** ConvertUserToV3Request userAuthRequest. */
        public userAuthRequest?: (Authentication.IUserAuthRequest|null);

        /** ConvertUserToV3Request encryptedClientKey. */
        public encryptedClientKey: Uint8Array;

        /** ConvertUserToV3Request encryptedPrivateKey. */
        public encryptedPrivateKey: Uint8Array;

        /** ConvertUserToV3Request publicKey. */
        public publicKey: Uint8Array;

        /**
         * Creates a new ConvertUserToV3Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConvertUserToV3Request instance
         */
        public static create(properties?: Authentication.IConvertUserToV3Request): Authentication.ConvertUserToV3Request;

        /**
         * Encodes the specified ConvertUserToV3Request message. Does not implicitly {@link Authentication.ConvertUserToV3Request.verify|verify} messages.
         * @param message ConvertUserToV3Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IConvertUserToV3Request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConvertUserToV3Request message, length delimited. Does not implicitly {@link Authentication.ConvertUserToV3Request.verify|verify} messages.
         * @param message ConvertUserToV3Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IConvertUserToV3Request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConvertUserToV3Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConvertUserToV3Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ConvertUserToV3Request;

        /**
         * Decodes a ConvertUserToV3Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConvertUserToV3Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ConvertUserToV3Request;

        /**
         * Verifies a ConvertUserToV3Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConvertUserToV3Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConvertUserToV3Request
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ConvertUserToV3Request;

        /**
         * Creates a plain object from a ConvertUserToV3Request message. Also converts values to other types if specified.
         * @param message ConvertUserToV3Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ConvertUserToV3Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConvertUserToV3Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RevisionResponse. */
    interface IRevisionResponse {

        /** RevisionResponse revision */
        revision?: (number|Long|null);
    }

    /** Represents a RevisionResponse. */
    class RevisionResponse implements IRevisionResponse {

        /**
         * Constructs a new RevisionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IRevisionResponse);

        /** RevisionResponse revision. */
        public revision: (number|Long);

        /**
         * Creates a new RevisionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevisionResponse instance
         */
        public static create(properties?: Authentication.IRevisionResponse): Authentication.RevisionResponse;

        /**
         * Encodes the specified RevisionResponse message. Does not implicitly {@link Authentication.RevisionResponse.verify|verify} messages.
         * @param message RevisionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IRevisionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RevisionResponse message, length delimited. Does not implicitly {@link Authentication.RevisionResponse.verify|verify} messages.
         * @param message RevisionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IRevisionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevisionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevisionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.RevisionResponse;

        /**
         * Decodes a RevisionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RevisionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.RevisionResponse;

        /**
         * Verifies a RevisionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RevisionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RevisionResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.RevisionResponse;

        /**
         * Creates a plain object from a RevisionResponse message. Also converts values to other types if specified.
         * @param message RevisionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.RevisionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RevisionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeEmailRequest. */
    interface IChangeEmailRequest {

        /** ChangeEmailRequest newEmail */
        newEmail?: (string|null);
    }

    /** Represents a ChangeEmailRequest. */
    class ChangeEmailRequest implements IChangeEmailRequest {

        /**
         * Constructs a new ChangeEmailRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeEmailRequest);

        /** ChangeEmailRequest newEmail. */
        public newEmail: string;

        /**
         * Creates a new ChangeEmailRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeEmailRequest instance
         */
        public static create(properties?: Authentication.IChangeEmailRequest): Authentication.ChangeEmailRequest;

        /**
         * Encodes the specified ChangeEmailRequest message. Does not implicitly {@link Authentication.ChangeEmailRequest.verify|verify} messages.
         * @param message ChangeEmailRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeEmailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeEmailRequest message, length delimited. Does not implicitly {@link Authentication.ChangeEmailRequest.verify|verify} messages.
         * @param message ChangeEmailRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeEmailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeEmailRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeEmailRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeEmailRequest;

        /**
         * Decodes a ChangeEmailRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeEmailRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeEmailRequest;

        /**
         * Verifies a ChangeEmailRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeEmailRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeEmailRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeEmailRequest;

        /**
         * Creates a plain object from a ChangeEmailRequest message. Also converts values to other types if specified.
         * @param message ChangeEmailRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeEmailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeEmailRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeEmailResponse. */
    interface IChangeEmailResponse {

        /** ChangeEmailResponse encryptedChangeEmailToken */
        encryptedChangeEmailToken?: (Uint8Array|null);
    }

    /** Represents a ChangeEmailResponse. */
    class ChangeEmailResponse implements IChangeEmailResponse {

        /**
         * Constructs a new ChangeEmailResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeEmailResponse);

        /** ChangeEmailResponse encryptedChangeEmailToken. */
        public encryptedChangeEmailToken: Uint8Array;

        /**
         * Creates a new ChangeEmailResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeEmailResponse instance
         */
        public static create(properties?: Authentication.IChangeEmailResponse): Authentication.ChangeEmailResponse;

        /**
         * Encodes the specified ChangeEmailResponse message. Does not implicitly {@link Authentication.ChangeEmailResponse.verify|verify} messages.
         * @param message ChangeEmailResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeEmailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeEmailResponse message, length delimited. Does not implicitly {@link Authentication.ChangeEmailResponse.verify|verify} messages.
         * @param message ChangeEmailResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeEmailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeEmailResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeEmailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeEmailResponse;

        /**
         * Decodes a ChangeEmailResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeEmailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeEmailResponse;

        /**
         * Verifies a ChangeEmailResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeEmailResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeEmailResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeEmailResponse;

        /**
         * Creates a plain object from a ChangeEmailResponse message. Also converts values to other types if specified.
         * @param message ChangeEmailResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeEmailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeEmailResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmailVerificationLinkResponse. */
    interface IEmailVerificationLinkResponse {

        /** EmailVerificationLinkResponse emailVerified */
        emailVerified?: (boolean|null);
    }

    /** Represents an EmailVerificationLinkResponse. */
    class EmailVerificationLinkResponse implements IEmailVerificationLinkResponse {

        /**
         * Constructs a new EmailVerificationLinkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IEmailVerificationLinkResponse);

        /** EmailVerificationLinkResponse emailVerified. */
        public emailVerified: boolean;

        /**
         * Creates a new EmailVerificationLinkResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmailVerificationLinkResponse instance
         */
        public static create(properties?: Authentication.IEmailVerificationLinkResponse): Authentication.EmailVerificationLinkResponse;

        /**
         * Encodes the specified EmailVerificationLinkResponse message. Does not implicitly {@link Authentication.EmailVerificationLinkResponse.verify|verify} messages.
         * @param message EmailVerificationLinkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IEmailVerificationLinkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmailVerificationLinkResponse message, length delimited. Does not implicitly {@link Authentication.EmailVerificationLinkResponse.verify|verify} messages.
         * @param message EmailVerificationLinkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IEmailVerificationLinkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmailVerificationLinkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmailVerificationLinkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.EmailVerificationLinkResponse;

        /**
         * Decodes an EmailVerificationLinkResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmailVerificationLinkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.EmailVerificationLinkResponse;

        /**
         * Verifies an EmailVerificationLinkResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmailVerificationLinkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmailVerificationLinkResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.EmailVerificationLinkResponse;

        /**
         * Creates a plain object from an EmailVerificationLinkResponse message. Also converts values to other types if specified.
         * @param message EmailVerificationLinkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.EmailVerificationLinkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmailVerificationLinkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityData. */
    interface ISecurityData {

        /** SecurityData uid */
        uid?: (Uint8Array|null);

        /** SecurityData data */
        data?: (Uint8Array|null);
    }

    /** Represents a SecurityData. */
    class SecurityData implements ISecurityData {

        /**
         * Constructs a new SecurityData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityData);

        /** SecurityData uid. */
        public uid: Uint8Array;

        /** SecurityData data. */
        public data: Uint8Array;

        /**
         * Creates a new SecurityData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityData instance
         */
        public static create(properties?: Authentication.ISecurityData): Authentication.SecurityData;

        /**
         * Encodes the specified SecurityData message. Does not implicitly {@link Authentication.SecurityData.verify|verify} messages.
         * @param message SecurityData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityData message, length delimited. Does not implicitly {@link Authentication.SecurityData.verify|verify} messages.
         * @param message SecurityData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityData;

        /**
         * Decodes a SecurityData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityData;

        /**
         * Verifies a SecurityData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityData
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityData;

        /**
         * Creates a plain object from a SecurityData message. Also converts values to other types if specified.
         * @param message SecurityData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityDataRequest. */
    interface ISecurityDataRequest {

        /** SecurityDataRequest recordSecurityData */
        recordSecurityData?: (Authentication.ISecurityData[]|null);

        /** SecurityDataRequest masterPasswordSecurityData */
        masterPasswordSecurityData?: (Authentication.ISecurityData[]|null);
    }

    /** Represents a SecurityDataRequest. */
    class SecurityDataRequest implements ISecurityDataRequest {

        /**
         * Constructs a new SecurityDataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityDataRequest);

        /** SecurityDataRequest recordSecurityData. */
        public recordSecurityData: Authentication.ISecurityData[];

        /** SecurityDataRequest masterPasswordSecurityData. */
        public masterPasswordSecurityData: Authentication.ISecurityData[];

        /**
         * Creates a new SecurityDataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityDataRequest instance
         */
        public static create(properties?: Authentication.ISecurityDataRequest): Authentication.SecurityDataRequest;

        /**
         * Encodes the specified SecurityDataRequest message. Does not implicitly {@link Authentication.SecurityDataRequest.verify|verify} messages.
         * @param message SecurityDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityDataRequest message, length delimited. Does not implicitly {@link Authentication.SecurityDataRequest.verify|verify} messages.
         * @param message SecurityDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityDataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityDataRequest;

        /**
         * Decodes a SecurityDataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityDataRequest;

        /**
         * Verifies a SecurityDataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityDataRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityDataRequest;

        /**
         * Creates a plain object from a SecurityDataRequest message. Also converts values to other types if specified.
         * @param message SecurityDataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityDataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityReportIncrementalData. */
    interface ISecurityReportIncrementalData {

        /** SecurityReportIncrementalData enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** SecurityReportIncrementalData currentSecurityData */
        currentSecurityData?: (Uint8Array|null);

        /** SecurityReportIncrementalData currentSecurityDataRevision */
        currentSecurityDataRevision?: (number|Long|null);

        /** SecurityReportIncrementalData oldSecurityData */
        oldSecurityData?: (Uint8Array|null);

        /** SecurityReportIncrementalData oldSecurityDataRevision */
        oldSecurityDataRevision?: (number|Long|null);
    }

    /** Represents a SecurityReportIncrementalData. */
    class SecurityReportIncrementalData implements ISecurityReportIncrementalData {

        /**
         * Constructs a new SecurityReportIncrementalData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityReportIncrementalData);

        /** SecurityReportIncrementalData enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** SecurityReportIncrementalData currentSecurityData. */
        public currentSecurityData: Uint8Array;

        /** SecurityReportIncrementalData currentSecurityDataRevision. */
        public currentSecurityDataRevision: (number|Long);

        /** SecurityReportIncrementalData oldSecurityData. */
        public oldSecurityData: Uint8Array;

        /** SecurityReportIncrementalData oldSecurityDataRevision. */
        public oldSecurityDataRevision: (number|Long);

        /**
         * Creates a new SecurityReportIncrementalData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityReportIncrementalData instance
         */
        public static create(properties?: Authentication.ISecurityReportIncrementalData): Authentication.SecurityReportIncrementalData;

        /**
         * Encodes the specified SecurityReportIncrementalData message. Does not implicitly {@link Authentication.SecurityReportIncrementalData.verify|verify} messages.
         * @param message SecurityReportIncrementalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityReportIncrementalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityReportIncrementalData message, length delimited. Does not implicitly {@link Authentication.SecurityReportIncrementalData.verify|verify} messages.
         * @param message SecurityReportIncrementalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityReportIncrementalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityReportIncrementalData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityReportIncrementalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityReportIncrementalData;

        /**
         * Decodes a SecurityReportIncrementalData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityReportIncrementalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityReportIncrementalData;

        /**
         * Verifies a SecurityReportIncrementalData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityReportIncrementalData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityReportIncrementalData
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityReportIncrementalData;

        /**
         * Creates a plain object from a SecurityReportIncrementalData message. Also converts values to other types if specified.
         * @param message SecurityReportIncrementalData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityReportIncrementalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityReportIncrementalData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityReport. */
    interface ISecurityReport {

        /** SecurityReport enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** SecurityReport encryptedReportData */
        encryptedReportData?: (Uint8Array|null);

        /** SecurityReport revision */
        revision?: (number|Long|null);

        /** SecurityReport twoFactor */
        twoFactor?: (string|null);

        /** SecurityReport lastLogin */
        lastLogin?: (number|Long|null);

        /** SecurityReport numberOfReusedPassword */
        numberOfReusedPassword?: (number|null);

        /** SecurityReport securityReportIncrementalData */
        securityReportIncrementalData?: (Authentication.ISecurityReportIncrementalData[]|null);
    }

    /** Represents a SecurityReport. */
    class SecurityReport implements ISecurityReport {

        /**
         * Constructs a new SecurityReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityReport);

        /** SecurityReport enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** SecurityReport encryptedReportData. */
        public encryptedReportData: Uint8Array;

        /** SecurityReport revision. */
        public revision: (number|Long);

        /** SecurityReport twoFactor. */
        public twoFactor: string;

        /** SecurityReport lastLogin. */
        public lastLogin: (number|Long);

        /** SecurityReport numberOfReusedPassword. */
        public numberOfReusedPassword: number;

        /** SecurityReport securityReportIncrementalData. */
        public securityReportIncrementalData: Authentication.ISecurityReportIncrementalData[];

        /**
         * Creates a new SecurityReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityReport instance
         */
        public static create(properties?: Authentication.ISecurityReport): Authentication.SecurityReport;

        /**
         * Encodes the specified SecurityReport message. Does not implicitly {@link Authentication.SecurityReport.verify|verify} messages.
         * @param message SecurityReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityReport message, length delimited. Does not implicitly {@link Authentication.SecurityReport.verify|verify} messages.
         * @param message SecurityReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityReport;

        /**
         * Decodes a SecurityReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityReport;

        /**
         * Verifies a SecurityReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityReport
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityReport;

        /**
         * Creates a plain object from a SecurityReport message. Also converts values to other types if specified.
         * @param message SecurityReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityReportSaveRequest. */
    interface ISecurityReportSaveRequest {

        /** SecurityReportSaveRequest securityReport */
        securityReport?: (Authentication.ISecurityReport[]|null);
    }

    /** Represents a SecurityReportSaveRequest. */
    class SecurityReportSaveRequest implements ISecurityReportSaveRequest {

        /**
         * Constructs a new SecurityReportSaveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityReportSaveRequest);

        /** SecurityReportSaveRequest securityReport. */
        public securityReport: Authentication.ISecurityReport[];

        /**
         * Creates a new SecurityReportSaveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityReportSaveRequest instance
         */
        public static create(properties?: Authentication.ISecurityReportSaveRequest): Authentication.SecurityReportSaveRequest;

        /**
         * Encodes the specified SecurityReportSaveRequest message. Does not implicitly {@link Authentication.SecurityReportSaveRequest.verify|verify} messages.
         * @param message SecurityReportSaveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityReportSaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityReportSaveRequest message, length delimited. Does not implicitly {@link Authentication.SecurityReportSaveRequest.verify|verify} messages.
         * @param message SecurityReportSaveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityReportSaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityReportSaveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityReportSaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityReportSaveRequest;

        /**
         * Decodes a SecurityReportSaveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityReportSaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityReportSaveRequest;

        /**
         * Verifies a SecurityReportSaveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityReportSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityReportSaveRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityReportSaveRequest;

        /**
         * Creates a plain object from a SecurityReportSaveRequest message. Also converts values to other types if specified.
         * @param message SecurityReportSaveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityReportSaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityReportSaveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityReportRequest. */
    interface ISecurityReportRequest {

        /** SecurityReportRequest fromPage */
        fromPage?: (number|Long|null);
    }

    /** Represents a SecurityReportRequest. */
    class SecurityReportRequest implements ISecurityReportRequest {

        /**
         * Constructs a new SecurityReportRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityReportRequest);

        /** SecurityReportRequest fromPage. */
        public fromPage: (number|Long);

        /**
         * Creates a new SecurityReportRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityReportRequest instance
         */
        public static create(properties?: Authentication.ISecurityReportRequest): Authentication.SecurityReportRequest;

        /**
         * Encodes the specified SecurityReportRequest message. Does not implicitly {@link Authentication.SecurityReportRequest.verify|verify} messages.
         * @param message SecurityReportRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityReportRequest message, length delimited. Does not implicitly {@link Authentication.SecurityReportRequest.verify|verify} messages.
         * @param message SecurityReportRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityReportRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityReportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityReportRequest;

        /**
         * Decodes a SecurityReportRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityReportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityReportRequest;

        /**
         * Verifies a SecurityReportRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityReportRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityReportRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityReportRequest;

        /**
         * Creates a plain object from a SecurityReportRequest message. Also converts values to other types if specified.
         * @param message SecurityReportRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityReportRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityReportResponse. */
    interface ISecurityReportResponse {

        /** SecurityReportResponse enterprisePrivateKey */
        enterprisePrivateKey?: (Uint8Array|null);

        /** SecurityReportResponse securityReport */
        securityReport?: (Authentication.ISecurityReport[]|null);

        /** SecurityReportResponse asOfRevision */
        asOfRevision?: (number|Long|null);

        /** SecurityReportResponse fromPage */
        fromPage?: (number|Long|null);

        /** SecurityReportResponse toPage */
        toPage?: (number|Long|null);

        /** SecurityReportResponse complete */
        complete?: (boolean|null);
    }

    /** Represents a SecurityReportResponse. */
    class SecurityReportResponse implements ISecurityReportResponse {

        /**
         * Constructs a new SecurityReportResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISecurityReportResponse);

        /** SecurityReportResponse enterprisePrivateKey. */
        public enterprisePrivateKey: Uint8Array;

        /** SecurityReportResponse securityReport. */
        public securityReport: Authentication.ISecurityReport[];

        /** SecurityReportResponse asOfRevision. */
        public asOfRevision: (number|Long);

        /** SecurityReportResponse fromPage. */
        public fromPage: (number|Long);

        /** SecurityReportResponse toPage. */
        public toPage: (number|Long);

        /** SecurityReportResponse complete. */
        public complete: boolean;

        /**
         * Creates a new SecurityReportResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityReportResponse instance
         */
        public static create(properties?: Authentication.ISecurityReportResponse): Authentication.SecurityReportResponse;

        /**
         * Encodes the specified SecurityReportResponse message. Does not implicitly {@link Authentication.SecurityReportResponse.verify|verify} messages.
         * @param message SecurityReportResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISecurityReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityReportResponse message, length delimited. Does not implicitly {@link Authentication.SecurityReportResponse.verify|verify} messages.
         * @param message SecurityReportResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISecurityReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityReportResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SecurityReportResponse;

        /**
         * Decodes a SecurityReportResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SecurityReportResponse;

        /**
         * Verifies a SecurityReportResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityReportResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityReportResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SecurityReportResponse;

        /**
         * Creates a plain object from a SecurityReportResponse message. Also converts values to other types if specified.
         * @param message SecurityReportResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SecurityReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityReportResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReusedPasswordsRequest. */
    interface IReusedPasswordsRequest {

        /** ReusedPasswordsRequest count */
        count?: (number|null);
    }

    /** Represents a ReusedPasswordsRequest. */
    class ReusedPasswordsRequest implements IReusedPasswordsRequest {

        /**
         * Constructs a new ReusedPasswordsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IReusedPasswordsRequest);

        /** ReusedPasswordsRequest count. */
        public count: number;

        /**
         * Creates a new ReusedPasswordsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReusedPasswordsRequest instance
         */
        public static create(properties?: Authentication.IReusedPasswordsRequest): Authentication.ReusedPasswordsRequest;

        /**
         * Encodes the specified ReusedPasswordsRequest message. Does not implicitly {@link Authentication.ReusedPasswordsRequest.verify|verify} messages.
         * @param message ReusedPasswordsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IReusedPasswordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReusedPasswordsRequest message, length delimited. Does not implicitly {@link Authentication.ReusedPasswordsRequest.verify|verify} messages.
         * @param message ReusedPasswordsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IReusedPasswordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReusedPasswordsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReusedPasswordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ReusedPasswordsRequest;

        /**
         * Decodes a ReusedPasswordsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReusedPasswordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ReusedPasswordsRequest;

        /**
         * Verifies a ReusedPasswordsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReusedPasswordsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReusedPasswordsRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ReusedPasswordsRequest;

        /**
         * Creates a plain object from a ReusedPasswordsRequest message. Also converts values to other types if specified.
         * @param message ReusedPasswordsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ReusedPasswordsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReusedPasswordsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SummaryConsoleReport. */
    interface ISummaryConsoleReport {

        /** SummaryConsoleReport reportType */
        reportType?: (number|null);

        /** SummaryConsoleReport reportData */
        reportData?: (Uint8Array|null);
    }

    /** Represents a SummaryConsoleReport. */
    class SummaryConsoleReport implements ISummaryConsoleReport {

        /**
         * Constructs a new SummaryConsoleReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISummaryConsoleReport);

        /** SummaryConsoleReport reportType. */
        public reportType: number;

        /** SummaryConsoleReport reportData. */
        public reportData: Uint8Array;

        /**
         * Creates a new SummaryConsoleReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SummaryConsoleReport instance
         */
        public static create(properties?: Authentication.ISummaryConsoleReport): Authentication.SummaryConsoleReport;

        /**
         * Encodes the specified SummaryConsoleReport message. Does not implicitly {@link Authentication.SummaryConsoleReport.verify|verify} messages.
         * @param message SummaryConsoleReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISummaryConsoleReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SummaryConsoleReport message, length delimited. Does not implicitly {@link Authentication.SummaryConsoleReport.verify|verify} messages.
         * @param message SummaryConsoleReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISummaryConsoleReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SummaryConsoleReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SummaryConsoleReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SummaryConsoleReport;

        /**
         * Decodes a SummaryConsoleReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SummaryConsoleReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SummaryConsoleReport;

        /**
         * Verifies a SummaryConsoleReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SummaryConsoleReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SummaryConsoleReport
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SummaryConsoleReport;

        /**
         * Creates a plain object from a SummaryConsoleReport message. Also converts values to other types if specified.
         * @param message SummaryConsoleReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SummaryConsoleReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SummaryConsoleReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ObjectTypes enum. */
    enum ObjectTypes {
        RECORD = 0,
        SHARED_FOLDER_USER = 1,
        SHARED_FOLDER_TEAM = 2,
        USER_FOLDER = 3,
        TEAM_USER = 4
    }

    /** Properties of a ChangeToKeyTypeOne. */
    interface IChangeToKeyTypeOne {

        /** ChangeToKeyTypeOne objectType */
        objectType?: (Authentication.ObjectTypes|null);

        /** ChangeToKeyTypeOne primaryUid */
        primaryUid?: (Uint8Array|null);

        /** ChangeToKeyTypeOne secondaryUid */
        secondaryUid?: (Uint8Array|null);

        /** ChangeToKeyTypeOne key */
        key?: (Uint8Array|null);
    }

    /** Represents a ChangeToKeyTypeOne. */
    class ChangeToKeyTypeOne implements IChangeToKeyTypeOne {

        /**
         * Constructs a new ChangeToKeyTypeOne.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeToKeyTypeOne);

        /** ChangeToKeyTypeOne objectType. */
        public objectType: Authentication.ObjectTypes;

        /** ChangeToKeyTypeOne primaryUid. */
        public primaryUid: Uint8Array;

        /** ChangeToKeyTypeOne secondaryUid. */
        public secondaryUid: Uint8Array;

        /** ChangeToKeyTypeOne key. */
        public key: Uint8Array;

        /**
         * Creates a new ChangeToKeyTypeOne instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeToKeyTypeOne instance
         */
        public static create(properties?: Authentication.IChangeToKeyTypeOne): Authentication.ChangeToKeyTypeOne;

        /**
         * Encodes the specified ChangeToKeyTypeOne message. Does not implicitly {@link Authentication.ChangeToKeyTypeOne.verify|verify} messages.
         * @param message ChangeToKeyTypeOne message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeToKeyTypeOne, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeToKeyTypeOne message, length delimited. Does not implicitly {@link Authentication.ChangeToKeyTypeOne.verify|verify} messages.
         * @param message ChangeToKeyTypeOne message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeToKeyTypeOne, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeToKeyTypeOne message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeToKeyTypeOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeToKeyTypeOne;

        /**
         * Decodes a ChangeToKeyTypeOne message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeToKeyTypeOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeToKeyTypeOne;

        /**
         * Verifies a ChangeToKeyTypeOne message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeToKeyTypeOne message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeToKeyTypeOne
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeToKeyTypeOne;

        /**
         * Creates a plain object from a ChangeToKeyTypeOne message. Also converts values to other types if specified.
         * @param message ChangeToKeyTypeOne
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeToKeyTypeOne, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeToKeyTypeOne to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeToKeyTypeOneRequest. */
    interface IChangeToKeyTypeOneRequest {

        /** ChangeToKeyTypeOneRequest changeToKeyTypeOne */
        changeToKeyTypeOne?: (Authentication.IChangeToKeyTypeOne[]|null);
    }

    /** Represents a ChangeToKeyTypeOneRequest. */
    class ChangeToKeyTypeOneRequest implements IChangeToKeyTypeOneRequest {

        /**
         * Constructs a new ChangeToKeyTypeOneRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeToKeyTypeOneRequest);

        /** ChangeToKeyTypeOneRequest changeToKeyTypeOne. */
        public changeToKeyTypeOne: Authentication.IChangeToKeyTypeOne[];

        /**
         * Creates a new ChangeToKeyTypeOneRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeToKeyTypeOneRequest instance
         */
        public static create(properties?: Authentication.IChangeToKeyTypeOneRequest): Authentication.ChangeToKeyTypeOneRequest;

        /**
         * Encodes the specified ChangeToKeyTypeOneRequest message. Does not implicitly {@link Authentication.ChangeToKeyTypeOneRequest.verify|verify} messages.
         * @param message ChangeToKeyTypeOneRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeToKeyTypeOneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeToKeyTypeOneRequest message, length delimited. Does not implicitly {@link Authentication.ChangeToKeyTypeOneRequest.verify|verify} messages.
         * @param message ChangeToKeyTypeOneRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeToKeyTypeOneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeToKeyTypeOneRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeToKeyTypeOneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeToKeyTypeOneRequest;

        /**
         * Decodes a ChangeToKeyTypeOneRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeToKeyTypeOneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeToKeyTypeOneRequest;

        /**
         * Verifies a ChangeToKeyTypeOneRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeToKeyTypeOneRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeToKeyTypeOneRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeToKeyTypeOneRequest;

        /**
         * Creates a plain object from a ChangeToKeyTypeOneRequest message. Also converts values to other types if specified.
         * @param message ChangeToKeyTypeOneRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeToKeyTypeOneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeToKeyTypeOneRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeToKeyTypeOneStatus. */
    interface IChangeToKeyTypeOneStatus {

        /** ChangeToKeyTypeOneStatus uid */
        uid?: (Uint8Array|null);

        /** ChangeToKeyTypeOneStatus type */
        type?: (string|null);

        /** ChangeToKeyTypeOneStatus status */
        status?: (string|null);

        /** ChangeToKeyTypeOneStatus reason */
        reason?: (string|null);
    }

    /** Represents a ChangeToKeyTypeOneStatus. */
    class ChangeToKeyTypeOneStatus implements IChangeToKeyTypeOneStatus {

        /**
         * Constructs a new ChangeToKeyTypeOneStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeToKeyTypeOneStatus);

        /** ChangeToKeyTypeOneStatus uid. */
        public uid: Uint8Array;

        /** ChangeToKeyTypeOneStatus type. */
        public type: string;

        /** ChangeToKeyTypeOneStatus status. */
        public status: string;

        /** ChangeToKeyTypeOneStatus reason. */
        public reason: string;

        /**
         * Creates a new ChangeToKeyTypeOneStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeToKeyTypeOneStatus instance
         */
        public static create(properties?: Authentication.IChangeToKeyTypeOneStatus): Authentication.ChangeToKeyTypeOneStatus;

        /**
         * Encodes the specified ChangeToKeyTypeOneStatus message. Does not implicitly {@link Authentication.ChangeToKeyTypeOneStatus.verify|verify} messages.
         * @param message ChangeToKeyTypeOneStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeToKeyTypeOneStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeToKeyTypeOneStatus message, length delimited. Does not implicitly {@link Authentication.ChangeToKeyTypeOneStatus.verify|verify} messages.
         * @param message ChangeToKeyTypeOneStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeToKeyTypeOneStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeToKeyTypeOneStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeToKeyTypeOneStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeToKeyTypeOneStatus;

        /**
         * Decodes a ChangeToKeyTypeOneStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeToKeyTypeOneStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeToKeyTypeOneStatus;

        /**
         * Verifies a ChangeToKeyTypeOneStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeToKeyTypeOneStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeToKeyTypeOneStatus
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeToKeyTypeOneStatus;

        /**
         * Creates a plain object from a ChangeToKeyTypeOneStatus message. Also converts values to other types if specified.
         * @param message ChangeToKeyTypeOneStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeToKeyTypeOneStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeToKeyTypeOneStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeToKeyTypeOneResponse. */
    interface IChangeToKeyTypeOneResponse {

        /** ChangeToKeyTypeOneResponse changeToKeyTypeOneStatus */
        changeToKeyTypeOneStatus?: (Authentication.IChangeToKeyTypeOneStatus[]|null);
    }

    /** Represents a ChangeToKeyTypeOneResponse. */
    class ChangeToKeyTypeOneResponse implements IChangeToKeyTypeOneResponse {

        /**
         * Constructs a new ChangeToKeyTypeOneResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IChangeToKeyTypeOneResponse);

        /** ChangeToKeyTypeOneResponse changeToKeyTypeOneStatus. */
        public changeToKeyTypeOneStatus: Authentication.IChangeToKeyTypeOneStatus[];

        /**
         * Creates a new ChangeToKeyTypeOneResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeToKeyTypeOneResponse instance
         */
        public static create(properties?: Authentication.IChangeToKeyTypeOneResponse): Authentication.ChangeToKeyTypeOneResponse;

        /**
         * Encodes the specified ChangeToKeyTypeOneResponse message. Does not implicitly {@link Authentication.ChangeToKeyTypeOneResponse.verify|verify} messages.
         * @param message ChangeToKeyTypeOneResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IChangeToKeyTypeOneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeToKeyTypeOneResponse message, length delimited. Does not implicitly {@link Authentication.ChangeToKeyTypeOneResponse.verify|verify} messages.
         * @param message ChangeToKeyTypeOneResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IChangeToKeyTypeOneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeToKeyTypeOneResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeToKeyTypeOneResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ChangeToKeyTypeOneResponse;

        /**
         * Decodes a ChangeToKeyTypeOneResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeToKeyTypeOneResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ChangeToKeyTypeOneResponse;

        /**
         * Verifies a ChangeToKeyTypeOneResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeToKeyTypeOneResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeToKeyTypeOneResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ChangeToKeyTypeOneResponse;

        /**
         * Creates a plain object from a ChangeToKeyTypeOneResponse message. Also converts values to other types if specified.
         * @param message ChangeToKeyTypeOneResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ChangeToKeyTypeOneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeToKeyTypeOneResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetKey. */
    interface ISetKey {

        /** SetKey id */
        id?: (number|Long|null);

        /** SetKey key */
        key?: (Uint8Array|null);
    }

    /** Represents a SetKey. */
    class SetKey implements ISetKey {

        /**
         * Constructs a new SetKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISetKey);

        /** SetKey id. */
        public id: (number|Long);

        /** SetKey key. */
        public key: Uint8Array;

        /**
         * Creates a new SetKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetKey instance
         */
        public static create(properties?: Authentication.ISetKey): Authentication.SetKey;

        /**
         * Encodes the specified SetKey message. Does not implicitly {@link Authentication.SetKey.verify|verify} messages.
         * @param message SetKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISetKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetKey message, length delimited. Does not implicitly {@link Authentication.SetKey.verify|verify} messages.
         * @param message SetKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISetKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SetKey;

        /**
         * Decodes a SetKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SetKey;

        /**
         * Verifies a SetKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetKey
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SetKey;

        /**
         * Creates a plain object from a SetKey message. Also converts values to other types if specified.
         * @param message SetKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SetKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetKeyRequest. */
    interface ISetKeyRequest {

        /** SetKeyRequest keys */
        keys?: (Authentication.ISetKey[]|null);
    }

    /** Represents a SetKeyRequest. */
    class SetKeyRequest implements ISetKeyRequest {

        /**
         * Constructs a new SetKeyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.ISetKeyRequest);

        /** SetKeyRequest keys. */
        public keys: Authentication.ISetKey[];

        /**
         * Creates a new SetKeyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetKeyRequest instance
         */
        public static create(properties?: Authentication.ISetKeyRequest): Authentication.SetKeyRequest;

        /**
         * Encodes the specified SetKeyRequest message. Does not implicitly {@link Authentication.SetKeyRequest.verify|verify} messages.
         * @param message SetKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.ISetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetKeyRequest message, length delimited. Does not implicitly {@link Authentication.SetKeyRequest.verify|verify} messages.
         * @param message SetKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.ISetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetKeyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.SetKeyRequest;

        /**
         * Decodes a SetKeyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.SetKeyRequest;

        /**
         * Verifies a SetKeyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetKeyRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.SetKeyRequest;

        /**
         * Creates a plain object from a SetKeyRequest message. Also converts values to other types if specified.
         * @param message SetKeyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.SetKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetKeyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthenticateViaEmail. */
    interface IAuthenticateViaEmail {

        /** AuthenticateViaEmail email */
        email?: (string|null);

        /** AuthenticateViaEmail resend */
        resend?: (boolean|null);

        /** AuthenticateViaEmail locale */
        locale?: (string|null);
    }

    /** Represents an AuthenticateViaEmail. */
    class AuthenticateViaEmail implements IAuthenticateViaEmail {

        /**
         * Constructs a new AuthenticateViaEmail.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IAuthenticateViaEmail);

        /** AuthenticateViaEmail email. */
        public email: string;

        /** AuthenticateViaEmail resend. */
        public resend: boolean;

        /** AuthenticateViaEmail locale. */
        public locale: string;

        /**
         * Creates a new AuthenticateViaEmail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticateViaEmail instance
         */
        public static create(properties?: Authentication.IAuthenticateViaEmail): Authentication.AuthenticateViaEmail;

        /**
         * Encodes the specified AuthenticateViaEmail message. Does not implicitly {@link Authentication.AuthenticateViaEmail.verify|verify} messages.
         * @param message AuthenticateViaEmail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IAuthenticateViaEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticateViaEmail message, length delimited. Does not implicitly {@link Authentication.AuthenticateViaEmail.verify|verify} messages.
         * @param message AuthenticateViaEmail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IAuthenticateViaEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticateViaEmail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthenticateViaEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.AuthenticateViaEmail;

        /**
         * Decodes an AuthenticateViaEmail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthenticateViaEmail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.AuthenticateViaEmail;

        /**
         * Verifies an AuthenticateViaEmail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticateViaEmail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticateViaEmail
         */
        public static fromObject(object: { [k: string]: any }): Authentication.AuthenticateViaEmail;

        /**
         * Creates a plain object from an AuthenticateViaEmail message. Also converts values to other types if specified.
         * @param message AuthenticateViaEmail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.AuthenticateViaEmail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticateViaEmail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterUserRequest. */
    interface IRegisterUserRequest {

        /** RegisterUserRequest username */
        username?: (string|null);

        /** RegisterUserRequest version */
        version?: (Authentication.Version|null);

        /** RegisterUserRequest authVerifier */
        authVerifier?: (Uint8Array|null);

        /** RegisterUserRequest encryptionParams */
        encryptionParams?: (Uint8Array|null);

        /** RegisterUserRequest publicKey */
        publicKey?: (Uint8Array|null);

        /** RegisterUserRequest encryptedPrivateKey */
        encryptedPrivateKey?: (Uint8Array|null);

        /** RegisterUserRequest installReferrer */
        installReferrer?: (string|null);

        /** RegisterUserRequest clientKey */
        clientKey?: (Uint8Array|null);

        /** RegisterUserRequest deviceUid */
        deviceUid?: (string|null);

        /** RegisterUserRequest mccMNC */
        mccMNC?: (number|null);

        /** RegisterUserRequest mfg */
        mfg?: (string|null);

        /** RegisterUserRequest model */
        model?: (string|null);

        /** RegisterUserRequest brand */
        brand?: (string|null);

        /** RegisterUserRequest product */
        product?: (string|null);

        /** RegisterUserRequest pushToken */
        pushToken?: (string|null);

        /** RegisterUserRequest device */
        device?: (string|null);

        /** RegisterUserRequest carrier */
        carrier?: (string|null);

        /** RegisterUserRequest skipGroupAccept */
        skipGroupAccept?: (boolean|null);

        /** RegisterUserRequest clientVersion */
        clientVersion?: (string|null);

        /** RegisterUserRequest fromSP */
        fromSP?: (boolean|null);

        /** RegisterUserRequest verificationCode */
        verificationCode?: (string|null);

        /** RegisterUserRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents a RegisterUserRequest. */
    class RegisterUserRequest implements IRegisterUserRequest {

        /**
         * Constructs a new RegisterUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IRegisterUserRequest);

        /** RegisterUserRequest username. */
        public username: string;

        /** RegisterUserRequest version. */
        public version: Authentication.Version;

        /** RegisterUserRequest authVerifier. */
        public authVerifier: Uint8Array;

        /** RegisterUserRequest encryptionParams. */
        public encryptionParams: Uint8Array;

        /** RegisterUserRequest publicKey. */
        public publicKey: Uint8Array;

        /** RegisterUserRequest encryptedPrivateKey. */
        public encryptedPrivateKey: Uint8Array;

        /** RegisterUserRequest installReferrer. */
        public installReferrer: string;

        /** RegisterUserRequest clientKey. */
        public clientKey: Uint8Array;

        /** RegisterUserRequest deviceUid. */
        public deviceUid: string;

        /** RegisterUserRequest mccMNC. */
        public mccMNC: number;

        /** RegisterUserRequest mfg. */
        public mfg: string;

        /** RegisterUserRequest model. */
        public model: string;

        /** RegisterUserRequest brand. */
        public brand: string;

        /** RegisterUserRequest product. */
        public product: string;

        /** RegisterUserRequest pushToken. */
        public pushToken: string;

        /** RegisterUserRequest device. */
        public device: string;

        /** RegisterUserRequest carrier. */
        public carrier: string;

        /** RegisterUserRequest skipGroupAccept. */
        public skipGroupAccept: boolean;

        /** RegisterUserRequest clientVersion. */
        public clientVersion: string;

        /** RegisterUserRequest fromSP. */
        public fromSP: boolean;

        /** RegisterUserRequest verificationCode. */
        public verificationCode: string;

        /** RegisterUserRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new RegisterUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterUserRequest instance
         */
        public static create(properties?: Authentication.IRegisterUserRequest): Authentication.RegisterUserRequest;

        /**
         * Encodes the specified RegisterUserRequest message. Does not implicitly {@link Authentication.RegisterUserRequest.verify|verify} messages.
         * @param message RegisterUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IRegisterUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link Authentication.RegisterUserRequest.verify|verify} messages.
         * @param message RegisterUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IRegisterUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.RegisterUserRequest;

        /**
         * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.RegisterUserRequest;

        /**
         * Verifies a RegisterUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterUserRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.RegisterUserRequest;

        /**
         * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
         * @param message RegisterUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.RegisterUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeEnforcementAddOrUpdateRequest. */
    interface INodeEnforcementAddOrUpdateRequest {

        /** NodeEnforcementAddOrUpdateRequest nodeId */
        nodeId?: (number|Long|null);

        /** NodeEnforcementAddOrUpdateRequest enforcement */
        enforcement?: (string|null);

        /** NodeEnforcementAddOrUpdateRequest value */
        value?: (string|null);
    }

    /** Represents a NodeEnforcementAddOrUpdateRequest. */
    class NodeEnforcementAddOrUpdateRequest implements INodeEnforcementAddOrUpdateRequest {

        /**
         * Constructs a new NodeEnforcementAddOrUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.INodeEnforcementAddOrUpdateRequest);

        /** NodeEnforcementAddOrUpdateRequest nodeId. */
        public nodeId: (number|Long);

        /** NodeEnforcementAddOrUpdateRequest enforcement. */
        public enforcement: string;

        /** NodeEnforcementAddOrUpdateRequest value. */
        public value: string;

        /**
         * Creates a new NodeEnforcementAddOrUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeEnforcementAddOrUpdateRequest instance
         */
        public static create(properties?: Authentication.INodeEnforcementAddOrUpdateRequest): Authentication.NodeEnforcementAddOrUpdateRequest;

        /**
         * Encodes the specified NodeEnforcementAddOrUpdateRequest message. Does not implicitly {@link Authentication.NodeEnforcementAddOrUpdateRequest.verify|verify} messages.
         * @param message NodeEnforcementAddOrUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.INodeEnforcementAddOrUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeEnforcementAddOrUpdateRequest message, length delimited. Does not implicitly {@link Authentication.NodeEnforcementAddOrUpdateRequest.verify|verify} messages.
         * @param message NodeEnforcementAddOrUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.INodeEnforcementAddOrUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeEnforcementAddOrUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeEnforcementAddOrUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.NodeEnforcementAddOrUpdateRequest;

        /**
         * Decodes a NodeEnforcementAddOrUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeEnforcementAddOrUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.NodeEnforcementAddOrUpdateRequest;

        /**
         * Verifies a NodeEnforcementAddOrUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeEnforcementAddOrUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeEnforcementAddOrUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.NodeEnforcementAddOrUpdateRequest;

        /**
         * Creates a plain object from a NodeEnforcementAddOrUpdateRequest message. Also converts values to other types if specified.
         * @param message NodeEnforcementAddOrUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.NodeEnforcementAddOrUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeEnforcementAddOrUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeEnforcementRemoveRequest. */
    interface INodeEnforcementRemoveRequest {

        /** NodeEnforcementRemoveRequest nodeId */
        nodeId?: (number|Long|null);

        /** NodeEnforcementRemoveRequest enforcement */
        enforcement?: (string|null);
    }

    /** Represents a NodeEnforcementRemoveRequest. */
    class NodeEnforcementRemoveRequest implements INodeEnforcementRemoveRequest {

        /**
         * Constructs a new NodeEnforcementRemoveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.INodeEnforcementRemoveRequest);

        /** NodeEnforcementRemoveRequest nodeId. */
        public nodeId: (number|Long);

        /** NodeEnforcementRemoveRequest enforcement. */
        public enforcement: string;

        /**
         * Creates a new NodeEnforcementRemoveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeEnforcementRemoveRequest instance
         */
        public static create(properties?: Authentication.INodeEnforcementRemoveRequest): Authentication.NodeEnforcementRemoveRequest;

        /**
         * Encodes the specified NodeEnforcementRemoveRequest message. Does not implicitly {@link Authentication.NodeEnforcementRemoveRequest.verify|verify} messages.
         * @param message NodeEnforcementRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.INodeEnforcementRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeEnforcementRemoveRequest message, length delimited. Does not implicitly {@link Authentication.NodeEnforcementRemoveRequest.verify|verify} messages.
         * @param message NodeEnforcementRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.INodeEnforcementRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeEnforcementRemoveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeEnforcementRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.NodeEnforcementRemoveRequest;

        /**
         * Decodes a NodeEnforcementRemoveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeEnforcementRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.NodeEnforcementRemoveRequest;

        /**
         * Verifies a NodeEnforcementRemoveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeEnforcementRemoveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeEnforcementRemoveRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.NodeEnforcementRemoveRequest;

        /**
         * Creates a plain object from a NodeEnforcementRemoveRequest message. Also converts values to other types if specified.
         * @param message NodeEnforcementRemoveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.NodeEnforcementRemoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeEnforcementRemoveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserNames. */
    interface IUserNames {

        /** UserNames username */
        username?: (string[]|null);
    }

    /** Represents a UserNames. */
    class UserNames implements IUserNames {

        /**
         * Constructs a new UserNames.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IUserNames);

        /** UserNames username. */
        public username: string[];

        /**
         * Creates a new UserNames instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserNames instance
         */
        public static create(properties?: Authentication.IUserNames): Authentication.UserNames;

        /**
         * Encodes the specified UserNames message. Does not implicitly {@link Authentication.UserNames.verify|verify} messages.
         * @param message UserNames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IUserNames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserNames message, length delimited. Does not implicitly {@link Authentication.UserNames.verify|verify} messages.
         * @param message UserNames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IUserNames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserNames message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.UserNames;

        /**
         * Decodes a UserNames message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.UserNames;

        /**
         * Verifies a UserNames message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserNames message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserNames
         */
        public static fromObject(object: { [k: string]: any }): Authentication.UserNames;

        /**
         * Creates a plain object from a UserNames message. Also converts values to other types if specified.
         * @param message UserNames
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.UserNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserNames to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApiRequestByKey. */
    interface IApiRequestByKey {

        /** ApiRequestByKey keyId */
        keyId?: (number|null);

        /** ApiRequestByKey payload */
        payload?: (Uint8Array|null);

        /** ApiRequestByKey username */
        username?: (string|null);

        /** ApiRequestByKey locale */
        locale?: (string|null);

        /** ApiRequestByKey supportedLanguage */
        supportedLanguage?: (Authentication.SupportedLanguage|null);
    }

    /** Represents an ApiRequestByKey. */
    class ApiRequestByKey implements IApiRequestByKey {

        /**
         * Constructs a new ApiRequestByKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IApiRequestByKey);

        /** ApiRequestByKey keyId. */
        public keyId: number;

        /** ApiRequestByKey payload. */
        public payload: Uint8Array;

        /** ApiRequestByKey username. */
        public username: string;

        /** ApiRequestByKey locale. */
        public locale: string;

        /** ApiRequestByKey supportedLanguage. */
        public supportedLanguage: Authentication.SupportedLanguage;

        /**
         * Creates a new ApiRequestByKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiRequestByKey instance
         */
        public static create(properties?: Authentication.IApiRequestByKey): Authentication.ApiRequestByKey;

        /**
         * Encodes the specified ApiRequestByKey message. Does not implicitly {@link Authentication.ApiRequestByKey.verify|verify} messages.
         * @param message ApiRequestByKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IApiRequestByKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiRequestByKey message, length delimited. Does not implicitly {@link Authentication.ApiRequestByKey.verify|verify} messages.
         * @param message ApiRequestByKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IApiRequestByKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiRequestByKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiRequestByKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ApiRequestByKey;

        /**
         * Decodes an ApiRequestByKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiRequestByKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ApiRequestByKey;

        /**
         * Verifies an ApiRequestByKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiRequestByKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiRequestByKey
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ApiRequestByKey;

        /**
         * Creates a plain object from an ApiRequestByKey message. Also converts values to other types if specified.
         * @param message ApiRequestByKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ApiRequestByKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiRequestByKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MemcacheRequest. */
    interface IMemcacheRequest {

        /** MemcacheRequest key */
        key?: (string|null);
    }

    /** Represents a MemcacheRequest. */
    class MemcacheRequest implements IMemcacheRequest {

        /**
         * Constructs a new MemcacheRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IMemcacheRequest);

        /** MemcacheRequest key. */
        public key: string;

        /**
         * Creates a new MemcacheRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MemcacheRequest instance
         */
        public static create(properties?: Authentication.IMemcacheRequest): Authentication.MemcacheRequest;

        /**
         * Encodes the specified MemcacheRequest message. Does not implicitly {@link Authentication.MemcacheRequest.verify|verify} messages.
         * @param message MemcacheRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IMemcacheRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MemcacheRequest message, length delimited. Does not implicitly {@link Authentication.MemcacheRequest.verify|verify} messages.
         * @param message MemcacheRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IMemcacheRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MemcacheRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MemcacheRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.MemcacheRequest;

        /**
         * Decodes a MemcacheRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MemcacheRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.MemcacheRequest;

        /**
         * Verifies a MemcacheRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MemcacheRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MemcacheRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.MemcacheRequest;

        /**
         * Creates a plain object from a MemcacheRequest message. Also converts values to other types if specified.
         * @param message MemcacheRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.MemcacheRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MemcacheRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MemcacheResponse. */
    interface IMemcacheResponse {

        /** MemcacheResponse key */
        key?: (string|null);

        /** MemcacheResponse value */
        value?: (string|null);
    }

    /** Represents a MemcacheResponse. */
    class MemcacheResponse implements IMemcacheResponse {

        /**
         * Constructs a new MemcacheResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IMemcacheResponse);

        /** MemcacheResponse key. */
        public key: string;

        /** MemcacheResponse value. */
        public value: string;

        /**
         * Creates a new MemcacheResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MemcacheResponse instance
         */
        public static create(properties?: Authentication.IMemcacheResponse): Authentication.MemcacheResponse;

        /**
         * Encodes the specified MemcacheResponse message. Does not implicitly {@link Authentication.MemcacheResponse.verify|verify} messages.
         * @param message MemcacheResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IMemcacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MemcacheResponse message, length delimited. Does not implicitly {@link Authentication.MemcacheResponse.verify|verify} messages.
         * @param message MemcacheResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IMemcacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MemcacheResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MemcacheResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.MemcacheResponse;

        /**
         * Decodes a MemcacheResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MemcacheResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.MemcacheResponse;

        /**
         * Verifies a MemcacheResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MemcacheResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MemcacheResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.MemcacheResponse;

        /**
         * Creates a plain object from a MemcacheResponse message. Also converts values to other types if specified.
         * @param message MemcacheResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.MemcacheResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MemcacheResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MasterPasswordReentryRequest. */
    interface IMasterPasswordReentryRequest {

        /** MasterPasswordReentryRequest pbkdf2Password */
        pbkdf2Password?: (string|null);

        /** MasterPasswordReentryRequest action */
        action?: (Authentication.MasterPasswordReentryActionType|null);
    }

    /** Represents a MasterPasswordReentryRequest. */
    class MasterPasswordReentryRequest implements IMasterPasswordReentryRequest {

        /**
         * Constructs a new MasterPasswordReentryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IMasterPasswordReentryRequest);

        /** MasterPasswordReentryRequest pbkdf2Password. */
        public pbkdf2Password: string;

        /** MasterPasswordReentryRequest action. */
        public action: Authentication.MasterPasswordReentryActionType;

        /**
         * Creates a new MasterPasswordReentryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MasterPasswordReentryRequest instance
         */
        public static create(properties?: Authentication.IMasterPasswordReentryRequest): Authentication.MasterPasswordReentryRequest;

        /**
         * Encodes the specified MasterPasswordReentryRequest message. Does not implicitly {@link Authentication.MasterPasswordReentryRequest.verify|verify} messages.
         * @param message MasterPasswordReentryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IMasterPasswordReentryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MasterPasswordReentryRequest message, length delimited. Does not implicitly {@link Authentication.MasterPasswordReentryRequest.verify|verify} messages.
         * @param message MasterPasswordReentryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IMasterPasswordReentryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MasterPasswordReentryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MasterPasswordReentryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.MasterPasswordReentryRequest;

        /**
         * Decodes a MasterPasswordReentryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MasterPasswordReentryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.MasterPasswordReentryRequest;

        /**
         * Verifies a MasterPasswordReentryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MasterPasswordReentryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MasterPasswordReentryRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.MasterPasswordReentryRequest;

        /**
         * Creates a plain object from a MasterPasswordReentryRequest message. Also converts values to other types if specified.
         * @param message MasterPasswordReentryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.MasterPasswordReentryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MasterPasswordReentryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceVerificationRequest. */
    interface IDeviceVerificationRequest {

        /** DeviceVerificationRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** DeviceVerificationRequest username */
        username?: (string|null);

        /** DeviceVerificationRequest clientVersion */
        clientVersion?: (string|null);

        /** DeviceVerificationRequest deviceName */
        deviceName?: (string|null);

        /** DeviceVerificationRequest devicePublicKey */
        devicePublicKey?: (Uint8Array|null);

        /** DeviceVerificationRequest verificationChannel */
        verificationChannel?: (string|null);
    }

    /** Represents a DeviceVerificationRequest. */
    class DeviceVerificationRequest implements IDeviceVerificationRequest {

        /**
         * Constructs a new DeviceVerificationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceVerificationRequest);

        /** DeviceVerificationRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** DeviceVerificationRequest username. */
        public username: string;

        /** DeviceVerificationRequest clientVersion. */
        public clientVersion: string;

        /** DeviceVerificationRequest deviceName. */
        public deviceName: string;

        /** DeviceVerificationRequest devicePublicKey. */
        public devicePublicKey: Uint8Array;

        /** DeviceVerificationRequest verificationChannel. */
        public verificationChannel: string;

        /**
         * Creates a new DeviceVerificationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceVerificationRequest instance
         */
        public static create(properties?: Authentication.IDeviceVerificationRequest): Authentication.DeviceVerificationRequest;

        /**
         * Encodes the specified DeviceVerificationRequest message. Does not implicitly {@link Authentication.DeviceVerificationRequest.verify|verify} messages.
         * @param message DeviceVerificationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceVerificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceVerificationRequest message, length delimited. Does not implicitly {@link Authentication.DeviceVerificationRequest.verify|verify} messages.
         * @param message DeviceVerificationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceVerificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceVerificationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceVerificationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceVerificationRequest;

        /**
         * Decodes a DeviceVerificationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceVerificationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceVerificationRequest;

        /**
         * Verifies a DeviceVerificationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceVerificationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceVerificationRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceVerificationRequest;

        /**
         * Creates a plain object from a DeviceVerificationRequest message. Also converts values to other types if specified.
         * @param message DeviceVerificationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceVerificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceVerificationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceApprovalRequest. */
    interface IDeviceApprovalRequest {

        /** DeviceApprovalRequest email */
        email?: (string|null);

        /** DeviceApprovalRequest twoFactorChannel */
        twoFactorChannel?: (string|null);

        /** DeviceApprovalRequest clientVersion */
        clientVersion?: (string|null);

        /** DeviceApprovalRequest locale */
        locale?: (string|null);

        /** DeviceApprovalRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** DeviceApprovalRequest totpCode */
        totpCode?: (string|null);

        /** DeviceApprovalRequest deviceIp */
        deviceIp?: (string|null);

        /** DeviceApprovalRequest deviceTokenExpireDays */
        deviceTokenExpireDays?: (string|null);
    }

    /** Represents a DeviceApprovalRequest. */
    class DeviceApprovalRequest implements IDeviceApprovalRequest {

        /**
         * Constructs a new DeviceApprovalRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceApprovalRequest);

        /** DeviceApprovalRequest email. */
        public email: string;

        /** DeviceApprovalRequest twoFactorChannel. */
        public twoFactorChannel: string;

        /** DeviceApprovalRequest clientVersion. */
        public clientVersion: string;

        /** DeviceApprovalRequest locale. */
        public locale: string;

        /** DeviceApprovalRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** DeviceApprovalRequest totpCode. */
        public totpCode: string;

        /** DeviceApprovalRequest deviceIp. */
        public deviceIp: string;

        /** DeviceApprovalRequest deviceTokenExpireDays. */
        public deviceTokenExpireDays: string;

        /**
         * Creates a new DeviceApprovalRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceApprovalRequest instance
         */
        public static create(properties?: Authentication.IDeviceApprovalRequest): Authentication.DeviceApprovalRequest;

        /**
         * Encodes the specified DeviceApprovalRequest message. Does not implicitly {@link Authentication.DeviceApprovalRequest.verify|verify} messages.
         * @param message DeviceApprovalRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceApprovalRequest message, length delimited. Does not implicitly {@link Authentication.DeviceApprovalRequest.verify|verify} messages.
         * @param message DeviceApprovalRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceApprovalRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceApprovalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceApprovalRequest;

        /**
         * Decodes a DeviceApprovalRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceApprovalRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceApprovalRequest;

        /**
         * Verifies a DeviceApprovalRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceApprovalRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceApprovalRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceApprovalRequest;

        /**
         * Creates a plain object from a DeviceApprovalRequest message. Also converts values to other types if specified.
         * @param message DeviceApprovalRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceApprovalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceApprovalRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceApprovalResponse. */
    interface IDeviceApprovalResponse {

        /** DeviceApprovalResponse encryptedTwoFactorToken */
        encryptedTwoFactorToken?: (Uint8Array|null);
    }

    /** Represents a DeviceApprovalResponse. */
    class DeviceApprovalResponse implements IDeviceApprovalResponse {

        /**
         * Constructs a new DeviceApprovalResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDeviceApprovalResponse);

        /** DeviceApprovalResponse encryptedTwoFactorToken. */
        public encryptedTwoFactorToken: Uint8Array;

        /**
         * Creates a new DeviceApprovalResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceApprovalResponse instance
         */
        public static create(properties?: Authentication.IDeviceApprovalResponse): Authentication.DeviceApprovalResponse;

        /**
         * Encodes the specified DeviceApprovalResponse message. Does not implicitly {@link Authentication.DeviceApprovalResponse.verify|verify} messages.
         * @param message DeviceApprovalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDeviceApprovalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceApprovalResponse message, length delimited. Does not implicitly {@link Authentication.DeviceApprovalResponse.verify|verify} messages.
         * @param message DeviceApprovalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDeviceApprovalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceApprovalResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceApprovalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.DeviceApprovalResponse;

        /**
         * Decodes a DeviceApprovalResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceApprovalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.DeviceApprovalResponse;

        /**
         * Verifies a DeviceApprovalResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceApprovalResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceApprovalResponse
         */
        public static fromObject(object: { [k: string]: any }): Authentication.DeviceApprovalResponse;

        /**
         * Creates a plain object from a DeviceApprovalResponse message. Also converts values to other types if specified.
         * @param message DeviceApprovalResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.DeviceApprovalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceApprovalResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseUserAliasRequest. */
    interface IEnterpriseUserAliasRequest {

        /** EnterpriseUserAliasRequest enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** EnterpriseUserAliasRequest alias */
        alias?: (string|null);
    }

    /** Represents an EnterpriseUserAliasRequest. */
    class EnterpriseUserAliasRequest implements IEnterpriseUserAliasRequest {

        /**
         * Constructs a new EnterpriseUserAliasRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IEnterpriseUserAliasRequest);

        /** EnterpriseUserAliasRequest enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** EnterpriseUserAliasRequest alias. */
        public alias: string;

        /**
         * Creates a new EnterpriseUserAliasRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterpriseUserAliasRequest instance
         */
        public static create(properties?: Authentication.IEnterpriseUserAliasRequest): Authentication.EnterpriseUserAliasRequest;

        /**
         * Encodes the specified EnterpriseUserAliasRequest message. Does not implicitly {@link Authentication.EnterpriseUserAliasRequest.verify|verify} messages.
         * @param message EnterpriseUserAliasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IEnterpriseUserAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterpriseUserAliasRequest message, length delimited. Does not implicitly {@link Authentication.EnterpriseUserAliasRequest.verify|verify} messages.
         * @param message EnterpriseUserAliasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IEnterpriseUserAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterpriseUserAliasRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterpriseUserAliasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.EnterpriseUserAliasRequest;

        /**
         * Decodes an EnterpriseUserAliasRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterpriseUserAliasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.EnterpriseUserAliasRequest;

        /**
         * Verifies an EnterpriseUserAliasRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterpriseUserAliasRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseUserAliasRequest
         */
        public static fromObject(object: { [k: string]: any }): Authentication.EnterpriseUserAliasRequest;

        /**
         * Creates a plain object from an EnterpriseUserAliasRequest message. Also converts values to other types if specified.
         * @param message EnterpriseUserAliasRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.EnterpriseUserAliasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseUserAliasRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Device. */
    interface IDevice {

        /** Device encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents a Device. */
    class Device implements IDevice {

        /**
         * Constructs a new Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDevice);

        /** Device encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Device instance
         */
        public static create(properties?: Authentication.IDevice): Authentication.Device;

        /**
         * Encodes the specified Device message. Does not implicitly {@link Authentication.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link Authentication.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.Device;

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.Device;

        /**
         * Verifies a Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Device
         */
        public static fromObject(object: { [k: string]: any }): Authentication.Device;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param message Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Device to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserDeviceStatus. */
    interface IUserDeviceStatus {

        /** UserDeviceStatus username */
        username?: (string|null);

        /** UserDeviceStatus encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** UserDeviceStatus accountUid */
        accountUid?: (Uint8Array|null);

        /** UserDeviceStatus regionName */
        regionName?: (string|null);

        /** UserDeviceStatus deviceStatus */
        deviceStatus?: (Authentication.DeviceStatus|null);
    }

    /** Represents a UserDeviceStatus. */
    class UserDeviceStatus implements IUserDeviceStatus {

        /**
         * Constructs a new UserDeviceStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IUserDeviceStatus);

        /** UserDeviceStatus username. */
        public username: string;

        /** UserDeviceStatus encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** UserDeviceStatus accountUid. */
        public accountUid: Uint8Array;

        /** UserDeviceStatus regionName. */
        public regionName: string;

        /** UserDeviceStatus deviceStatus. */
        public deviceStatus: Authentication.DeviceStatus;

        /**
         * Creates a new UserDeviceStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserDeviceStatus instance
         */
        public static create(properties?: Authentication.IUserDeviceStatus): Authentication.UserDeviceStatus;

        /**
         * Encodes the specified UserDeviceStatus message. Does not implicitly {@link Authentication.UserDeviceStatus.verify|verify} messages.
         * @param message UserDeviceStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IUserDeviceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDeviceStatus message, length delimited. Does not implicitly {@link Authentication.UserDeviceStatus.verify|verify} messages.
         * @param message UserDeviceStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IUserDeviceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDeviceStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserDeviceStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.UserDeviceStatus;

        /**
         * Decodes a UserDeviceStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserDeviceStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.UserDeviceStatus;

        /**
         * Verifies a UserDeviceStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDeviceStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDeviceStatus
         */
        public static fromObject(object: { [k: string]: any }): Authentication.UserDeviceStatus;

        /**
         * Creates a plain object from a UserDeviceStatus message. Also converts values to other types if specified.
         * @param message UserDeviceStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.UserDeviceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDeviceStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAccount. */
    interface IUserAccount {

        /** UserAccount username */
        username?: (string|null);

        /** UserAccount accountUid */
        accountUid?: (Uint8Array|null);

        /** UserAccount regionName */
        regionName?: (string|null);
    }

    /** Represents a UserAccount. */
    class UserAccount implements IUserAccount {

        /**
         * Constructs a new UserAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IUserAccount);

        /** UserAccount username. */
        public username: string;

        /** UserAccount accountUid. */
        public accountUid: Uint8Array;

        /** UserAccount regionName. */
        public regionName: string;

        /**
         * Creates a new UserAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAccount instance
         */
        public static create(properties?: Authentication.IUserAccount): Authentication.UserAccount;

        /**
         * Encodes the specified UserAccount message. Does not implicitly {@link Authentication.UserAccount.verify|verify} messages.
         * @param message UserAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IUserAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAccount message, length delimited. Does not implicitly {@link Authentication.UserAccount.verify|verify} messages.
         * @param message UserAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IUserAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.UserAccount;

        /**
         * Decodes a UserAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.UserAccount;

        /**
         * Verifies a UserAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAccount
         */
        public static fromObject(object: { [k: string]: any }): Authentication.UserAccount;

        /**
         * Creates a plain object from a UserAccount message. Also converts values to other types if specified.
         * @param message UserAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.UserAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApproveDevice. */
    interface IApproveDevice {

        /** ApproveDevice encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** ApproveDevice accountUid */
        accountUid?: (Uint8Array|null);
    }

    /** Represents an ApproveDevice. */
    class ApproveDevice implements IApproveDevice {

        /**
         * Constructs a new ApproveDevice.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IApproveDevice);

        /** ApproveDevice encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** ApproveDevice accountUid. */
        public accountUid: Uint8Array;

        /**
         * Creates a new ApproveDevice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApproveDevice instance
         */
        public static create(properties?: Authentication.IApproveDevice): Authentication.ApproveDevice;

        /**
         * Encodes the specified ApproveDevice message. Does not implicitly {@link Authentication.ApproveDevice.verify|verify} messages.
         * @param message ApproveDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IApproveDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApproveDevice message, length delimited. Does not implicitly {@link Authentication.ApproveDevice.verify|verify} messages.
         * @param message ApproveDevice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IApproveDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApproveDevice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApproveDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.ApproveDevice;

        /**
         * Decodes an ApproveDevice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApproveDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.ApproveDevice;

        /**
         * Verifies an ApproveDevice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApproveDevice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApproveDevice
         */
        public static fromObject(object: { [k: string]: any }): Authentication.ApproveDevice;

        /**
         * Creates a plain object from an ApproveDevice message. Also converts values to other types if specified.
         * @param message ApproveDevice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.ApproveDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApproveDevice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Domain. */
    interface IDomain {

        /** Domain domainId */
        domainId?: (number|Long|null);

        /** Domain domain */
        domain?: (string|null);

        /** Domain regionName */
        regionName?: (string|null);

        /** Domain autoRedirect */
        autoRedirect?: (boolean|null);
    }

    /** Represents a Domain. */
    class Domain implements IDomain {

        /**
         * Constructs a new Domain.
         * @param [properties] Properties to set
         */
        constructor(properties?: Authentication.IDomain);

        /** Domain domainId. */
        public domainId: (number|Long);

        /** Domain domain. */
        public domain: string;

        /** Domain regionName. */
        public regionName: string;

        /** Domain autoRedirect. */
        public autoRedirect: boolean;

        /**
         * Creates a new Domain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Domain instance
         */
        public static create(properties?: Authentication.IDomain): Authentication.Domain;

        /**
         * Encodes the specified Domain message. Does not implicitly {@link Authentication.Domain.verify|verify} messages.
         * @param message Domain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Authentication.IDomain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Domain message, length delimited. Does not implicitly {@link Authentication.Domain.verify|verify} messages.
         * @param message Domain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Authentication.IDomain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Domain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Domain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authentication.Domain;

        /**
         * Decodes a Domain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Domain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authentication.Domain;

        /**
         * Verifies a Domain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Domain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Domain
         */
        public static fromObject(object: { [k: string]: any }): Authentication.Domain;

        /**
         * Creates a plain object from a Domain message. Also converts values to other types if specified.
         * @param message Domain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Authentication.Domain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Domain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace AccountSummary. */
export namespace AccountSummary {

    /** Properties of an AccountSummaryRequest. */
    interface IAccountSummaryRequest {

        /** AccountSummaryRequest summaryVersion */
        summaryVersion?: (number|null);
    }

    /** Represents an AccountSummaryRequest. */
    class AccountSummaryRequest implements IAccountSummaryRequest {

        /**
         * Constructs a new AccountSummaryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IAccountSummaryRequest);

        /** AccountSummaryRequest summaryVersion. */
        public summaryVersion: number;

        /**
         * Creates a new AccountSummaryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountSummaryRequest instance
         */
        public static create(properties?: AccountSummary.IAccountSummaryRequest): AccountSummary.AccountSummaryRequest;

        /**
         * Encodes the specified AccountSummaryRequest message. Does not implicitly {@link AccountSummary.AccountSummaryRequest.verify|verify} messages.
         * @param message AccountSummaryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IAccountSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountSummaryRequest message, length delimited. Does not implicitly {@link AccountSummary.AccountSummaryRequest.verify|verify} messages.
         * @param message AccountSummaryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IAccountSummaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountSummaryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSummaryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.AccountSummaryRequest;

        /**
         * Decodes an AccountSummaryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountSummaryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.AccountSummaryRequest;

        /**
         * Verifies an AccountSummaryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountSummaryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSummaryRequest
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.AccountSummaryRequest;

        /**
         * Creates a plain object from an AccountSummaryRequest message. Also converts values to other types if specified.
         * @param message AccountSummaryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.AccountSummaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSummaryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountSummaryElements. */
    interface IAccountSummaryElements {

        /** AccountSummaryElements clientKey */
        clientKey?: (string|null);

        /** AccountSummaryElements settings */
        settings?: (AccountSummary.ISettings|null);

        /** AccountSummaryElements keysInfo */
        keysInfo?: (AccountSummary.IKeysInfo|null);

        /** AccountSummaryElements syncLogs */
        syncLogs?: (AccountSummary.ISyncLog[]|null);

        /** AccountSummaryElements isEnterpriseAdmin */
        isEnterpriseAdmin?: (boolean|null);

        /** AccountSummaryElements license */
        license?: (AccountSummary.ILicense|null);

        /** AccountSummaryElements group */
        group?: (AccountSummary.IGroup|null);

        /** AccountSummaryElements Enforcements */
        Enforcements?: (AccountSummary.IKeyValue[]|null);

        /** AccountSummaryElements Images */
        Images?: (AccountSummary.IKeyValue[]|null);

        /** AccountSummaryElements personalLicense */
        personalLicense?: (AccountSummary.ILicense|null);

        /** AccountSummaryElements fixSharedFolderRecords */
        fixSharedFolderRecords?: (boolean|null);

        /** AccountSummaryElements usernames */
        usernames?: (string[]|null);
    }

    /** Represents an AccountSummaryElements. */
    class AccountSummaryElements implements IAccountSummaryElements {

        /**
         * Constructs a new AccountSummaryElements.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IAccountSummaryElements);

        /** AccountSummaryElements clientKey. */
        public clientKey: string;

        /** AccountSummaryElements settings. */
        public settings?: (AccountSummary.ISettings|null);

        /** AccountSummaryElements keysInfo. */
        public keysInfo?: (AccountSummary.IKeysInfo|null);

        /** AccountSummaryElements syncLogs. */
        public syncLogs: AccountSummary.ISyncLog[];

        /** AccountSummaryElements isEnterpriseAdmin. */
        public isEnterpriseAdmin: boolean;

        /** AccountSummaryElements license. */
        public license?: (AccountSummary.ILicense|null);

        /** AccountSummaryElements group. */
        public group?: (AccountSummary.IGroup|null);

        /** AccountSummaryElements Enforcements. */
        public Enforcements: AccountSummary.IKeyValue[];

        /** AccountSummaryElements Images. */
        public Images: AccountSummary.IKeyValue[];

        /** AccountSummaryElements personalLicense. */
        public personalLicense?: (AccountSummary.ILicense|null);

        /** AccountSummaryElements fixSharedFolderRecords. */
        public fixSharedFolderRecords: boolean;

        /** AccountSummaryElements usernames. */
        public usernames: string[];

        /**
         * Creates a new AccountSummaryElements instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountSummaryElements instance
         */
        public static create(properties?: AccountSummary.IAccountSummaryElements): AccountSummary.AccountSummaryElements;

        /**
         * Encodes the specified AccountSummaryElements message. Does not implicitly {@link AccountSummary.AccountSummaryElements.verify|verify} messages.
         * @param message AccountSummaryElements message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IAccountSummaryElements, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountSummaryElements message, length delimited. Does not implicitly {@link AccountSummary.AccountSummaryElements.verify|verify} messages.
         * @param message AccountSummaryElements message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IAccountSummaryElements, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountSummaryElements message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSummaryElements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.AccountSummaryElements;

        /**
         * Decodes an AccountSummaryElements message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountSummaryElements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.AccountSummaryElements;

        /**
         * Verifies an AccountSummaryElements message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountSummaryElements message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSummaryElements
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.AccountSummaryElements;

        /**
         * Creates a plain object from an AccountSummaryElements message. Also converts values to other types if specified.
         * @param message AccountSummaryElements
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.AccountSummaryElements, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSummaryElements to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeysInfo. */
    interface IKeysInfo {

        /** KeysInfo encryptionParams */
        encryptionParams?: (string|null);

        /** KeysInfo encryptedDataKey */
        encryptedDataKey?: (string|null);

        /** KeysInfo dataKeyBackupDate */
        dataKeyBackupDate?: (number|null);

        /** KeysInfo userAuthUid */
        userAuthUid?: (string|null);

        /** KeysInfo encryptedPrivateKey */
        encryptedPrivateKey?: (string|null);
    }

    /** Represents a KeysInfo. */
    class KeysInfo implements IKeysInfo {

        /**
         * Constructs a new KeysInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IKeysInfo);

        /** KeysInfo encryptionParams. */
        public encryptionParams: string;

        /** KeysInfo encryptedDataKey. */
        public encryptedDataKey: string;

        /** KeysInfo dataKeyBackupDate. */
        public dataKeyBackupDate: number;

        /** KeysInfo userAuthUid. */
        public userAuthUid: string;

        /** KeysInfo encryptedPrivateKey. */
        public encryptedPrivateKey: string;

        /**
         * Creates a new KeysInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeysInfo instance
         */
        public static create(properties?: AccountSummary.IKeysInfo): AccountSummary.KeysInfo;

        /**
         * Encodes the specified KeysInfo message. Does not implicitly {@link AccountSummary.KeysInfo.verify|verify} messages.
         * @param message KeysInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IKeysInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeysInfo message, length delimited. Does not implicitly {@link AccountSummary.KeysInfo.verify|verify} messages.
         * @param message KeysInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IKeysInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeysInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeysInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.KeysInfo;

        /**
         * Decodes a KeysInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeysInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.KeysInfo;

        /**
         * Verifies a KeysInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeysInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeysInfo
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.KeysInfo;

        /**
         * Creates a plain object from a KeysInfo message. Also converts values to other types if specified.
         * @param message KeysInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.KeysInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeysInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncLog. */
    interface ISyncLog {

        /** SyncLog countryName */
        countryName?: (string|null);

        /** SyncLog secondsAgo */
        secondsAgo?: (number|Long|null);

        /** SyncLog deviceName */
        deviceName?: (string|null);

        /** SyncLog countryCode */
        countryCode?: (string|null);

        /** SyncLog deviceUID */
        deviceUID?: (string|null);

        /** SyncLog ipAddress */
        ipAddress?: (string|null);
    }

    /** Represents a SyncLog. */
    class SyncLog implements ISyncLog {

        /**
         * Constructs a new SyncLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.ISyncLog);

        /** SyncLog countryName. */
        public countryName: string;

        /** SyncLog secondsAgo. */
        public secondsAgo: (number|Long);

        /** SyncLog deviceName. */
        public deviceName: string;

        /** SyncLog countryCode. */
        public countryCode: string;

        /** SyncLog deviceUID. */
        public deviceUID: string;

        /** SyncLog ipAddress. */
        public ipAddress: string;

        /**
         * Creates a new SyncLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncLog instance
         */
        public static create(properties?: AccountSummary.ISyncLog): AccountSummary.SyncLog;

        /**
         * Encodes the specified SyncLog message. Does not implicitly {@link AccountSummary.SyncLog.verify|verify} messages.
         * @param message SyncLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.ISyncLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncLog message, length delimited. Does not implicitly {@link AccountSummary.SyncLog.verify|verify} messages.
         * @param message SyncLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.ISyncLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.SyncLog;

        /**
         * Decodes a SyncLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.SyncLog;

        /**
         * Verifies a SyncLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncLog
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.SyncLog;

        /**
         * Creates a plain object from a SyncLog message. Also converts values to other types if specified.
         * @param message SyncLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.SyncLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a License. */
    interface ILicense {

        /** License subscriptionCode */
        subscriptionCode?: (string|null);

        /** License productTypeId */
        productTypeId?: (number|null);

        /** License productTypeName */
        productTypeName?: (string|null);

        /** License expirationDate */
        expirationDate?: (string|null);

        /** License secondsUnitExpiration */
        secondsUnitExpiration?: (number|Long|null);

        /** License maxDevices */
        maxDevices?: (number|null);

        /** License filePlanType */
        filePlanType?: (number|null);

        /** License bytesUsed */
        bytesUsed?: (number|Long|null);

        /** License bytesTotal */
        bytesTotal?: (number|Long|null);

        /** License secondsUntilStorageExpiration */
        secondsUntilStorageExpiration?: (number|Long|null);

        /** License storageExpirationDate */
        storageExpirationDate?: (string|null);

        /** License hasAutoRenewableAppstoreSubscription */
        hasAutoRenewableAppstoreSubscription?: (boolean|null);

        /** License accountType */
        accountType?: (number|null);

        /** License uploadsRemaining */
        uploadsRemaining?: (number|null);

        /** License enterpriseId */
        enterpriseId?: (number|null);

        /** License chatEnabled */
        chatEnabled?: (boolean|null);

        /** License auditAndReportingEnabled */
        auditAndReportingEnabled?: (boolean|null);

        /** License breachWatchFeatureDisable */
        breachWatchFeatureDisable?: (boolean|null);

        /** License accountUid */
        accountUid?: (string|null);

        /** License allowPersonalLicense */
        allowPersonalLicense?: (boolean|null);

        /** License licensedBy */
        licensedBy?: (string|null);

        /** License email */
        email?: (string|null);

        /** License breachWatchEnabled */
        breachWatchEnabled?: (boolean|null);

        /** License breachWatchScanned */
        breachWatchScanned?: (boolean|null);

        /** License breachWatchExpiration */
        breachWatchExpiration?: (number|Long|null);

        /** License breachWatchDateCreated */
        breachWatchDateCreated?: (number|Long|null);

        /** License error */
        error?: (string|null);
    }

    /** Represents a License. */
    class License implements ILicense {

        /**
         * Constructs a new License.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.ILicense);

        /** License subscriptionCode. */
        public subscriptionCode: string;

        /** License productTypeId. */
        public productTypeId: number;

        /** License productTypeName. */
        public productTypeName: string;

        /** License expirationDate. */
        public expirationDate: string;

        /** License secondsUnitExpiration. */
        public secondsUnitExpiration: (number|Long);

        /** License maxDevices. */
        public maxDevices: number;

        /** License filePlanType. */
        public filePlanType: number;

        /** License bytesUsed. */
        public bytesUsed: (number|Long);

        /** License bytesTotal. */
        public bytesTotal: (number|Long);

        /** License secondsUntilStorageExpiration. */
        public secondsUntilStorageExpiration: (number|Long);

        /** License storageExpirationDate. */
        public storageExpirationDate: string;

        /** License hasAutoRenewableAppstoreSubscription. */
        public hasAutoRenewableAppstoreSubscription: boolean;

        /** License accountType. */
        public accountType: number;

        /** License uploadsRemaining. */
        public uploadsRemaining: number;

        /** License enterpriseId. */
        public enterpriseId: number;

        /** License chatEnabled. */
        public chatEnabled: boolean;

        /** License auditAndReportingEnabled. */
        public auditAndReportingEnabled: boolean;

        /** License breachWatchFeatureDisable. */
        public breachWatchFeatureDisable: boolean;

        /** License accountUid. */
        public accountUid: string;

        /** License allowPersonalLicense. */
        public allowPersonalLicense: boolean;

        /** License licensedBy. */
        public licensedBy: string;

        /** License email. */
        public email: string;

        /** License breachWatchEnabled. */
        public breachWatchEnabled: boolean;

        /** License breachWatchScanned. */
        public breachWatchScanned: boolean;

        /** License breachWatchExpiration. */
        public breachWatchExpiration: (number|Long);

        /** License breachWatchDateCreated. */
        public breachWatchDateCreated: (number|Long);

        /** License error. */
        public error: string;

        /**
         * Creates a new License instance using the specified properties.
         * @param [properties] Properties to set
         * @returns License instance
         */
        public static create(properties?: AccountSummary.ILicense): AccountSummary.License;

        /**
         * Encodes the specified License message. Does not implicitly {@link AccountSummary.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified License message, length delimited. Does not implicitly {@link AccountSummary.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a License message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.License;

        /**
         * Decodes a License message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.License;

        /**
         * Verifies a License message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a License message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns License
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.License;

        /**
         * Creates a plain object from a License message. Also converts values to other types if specified.
         * @param message License
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.License, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this License to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddOn. */
    interface IAddOn {

        /** AddOn licenseKeyId */
        licenseKeyId?: (number|null);

        /** AddOn name */
        name?: (string|null);

        /** AddOn expirationDate */
        expirationDate?: (number|Long|null);

        /** AddOn createdDate */
        createdDate?: (number|Long|null);

        /** AddOn isTrial */
        isTrial?: (boolean|null);

        /** AddOn enabled */
        enabled?: (boolean|null);

        /** AddOn scanned */
        scanned?: (boolean|null);

        /** AddOn featureDisable */
        featureDisable?: (boolean|null);
    }

    /** Represents an AddOn. */
    class AddOn implements IAddOn {

        /**
         * Constructs a new AddOn.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IAddOn);

        /** AddOn licenseKeyId. */
        public licenseKeyId: number;

        /** AddOn name. */
        public name: string;

        /** AddOn expirationDate. */
        public expirationDate: (number|Long);

        /** AddOn createdDate. */
        public createdDate: (number|Long);

        /** AddOn isTrial. */
        public isTrial: boolean;

        /** AddOn enabled. */
        public enabled: boolean;

        /** AddOn scanned. */
        public scanned: boolean;

        /** AddOn featureDisable. */
        public featureDisable: boolean;

        /**
         * Creates a new AddOn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddOn instance
         */
        public static create(properties?: AccountSummary.IAddOn): AccountSummary.AddOn;

        /**
         * Encodes the specified AddOn message. Does not implicitly {@link AccountSummary.AddOn.verify|verify} messages.
         * @param message AddOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IAddOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddOn message, length delimited. Does not implicitly {@link AccountSummary.AddOn.verify|verify} messages.
         * @param message AddOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IAddOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddOn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.AddOn;

        /**
         * Decodes an AddOn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.AddOn;

        /**
         * Verifies an AddOn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddOn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddOn
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.AddOn;

        /**
         * Creates a plain object from an AddOn message. Also converts values to other types if specified.
         * @param message AddOn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.AddOn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddOn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Settings. */
    interface ISettings {

        /** Settings audit */
        audit?: (boolean|null);

        /** Settings mustPerfromAccountShareBy */
        mustPerfromAccountShareBy?: (number|Long|null);

        /** Settings shareAccountTo */
        shareAccountTo?: (AccountSummary.IMissingAccountShareKey[]|null);

        /** Settings rules */
        rules?: (AccountSummary.IPasswordRule[]|null);

        /** Settings passwordRulesIntro */
        passwordRulesIntro?: (string|null);

        /** Settings autoBackupDays */
        autoBackupDays?: (number|null);

        /** Settings theme */
        theme?: (string|null);

        /** Settings channel */
        channel?: (string|null);

        /** Settings channelValue */
        channelValue?: (string|null);

        /** Settings rsaConfigured */
        rsaConfigured?: (boolean|null);

        /** Settings emailVarified */
        emailVarified?: (boolean|null);

        /** Settings masterPasswordLastModified */
        masterPasswordLastModified?: (number|null);

        /** Settings accountFolderKey */
        accountFolderKey?: (string|null);

        /** Settings securityKeys */
        securityKeys?: (AccountSummary.ISecurityKey[]|null);

        /** ????? */
        keyValues?: (AccountSummary.IKeyValue[]|null);

        /** Settings ssoUser */
        ssoUser?: (boolean|null);

        /** Settings onlineAccessOnly */
        onlineAccessOnly?: (boolean|null);

        /** Settings masterPasswordExpiry */
        masterPasswordExpiry?: (number|null);

        /** Settings twoFactorRequired */
        twoFactorRequired?: (boolean|null);

        /** Settings disallowExport */
        disallowExport?: (boolean|null);

        /** Settings restrictFiles */
        restrictFiles?: (boolean|null);

        /** Settings restrictAllSharing */
        restrictAllSharing?: (boolean|null);

        /** Settings restrictSharing */
        restrictSharing?: (boolean|null);

        /** Settings restrictSharingIncomingAll */
        restrictSharingIncomingAll?: (boolean|null);

        /** Settings restrictSharingIncomingEnterprise */
        restrictSharingIncomingEnterprise?: (boolean|null);
    }

    /** Represents a Settings. */
    class Settings implements ISettings {

        /**
         * Constructs a new Settings.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.ISettings);

        /** Settings audit. */
        public audit: boolean;

        /** Settings mustPerfromAccountShareBy. */
        public mustPerfromAccountShareBy: (number|Long);

        /** Settings shareAccountTo. */
        public shareAccountTo: AccountSummary.IMissingAccountShareKey[];

        /** Settings rules. */
        public rules: AccountSummary.IPasswordRule[];

        /** Settings passwordRulesIntro. */
        public passwordRulesIntro: string;

        /** Settings autoBackupDays. */
        public autoBackupDays: number;

        /** Settings theme. */
        public theme: string;

        /** Settings channel. */
        public channel: string;

        /** Settings channelValue. */
        public channelValue: string;

        /** Settings rsaConfigured. */
        public rsaConfigured: boolean;

        /** Settings emailVarified. */
        public emailVarified: boolean;

        /** Settings masterPasswordLastModified. */
        public masterPasswordLastModified: number;

        /** Settings accountFolderKey. */
        public accountFolderKey: string;

        /** Settings securityKeys. */
        public securityKeys: AccountSummary.ISecurityKey[];

        /** ????? */
        public keyValues: AccountSummary.IKeyValue[];

        /** Settings ssoUser. */
        public ssoUser: boolean;

        /** Settings onlineAccessOnly. */
        public onlineAccessOnly: boolean;

        /** Settings masterPasswordExpiry. */
        public masterPasswordExpiry: number;

        /** Settings twoFactorRequired. */
        public twoFactorRequired: boolean;

        /** Settings disallowExport. */
        public disallowExport: boolean;

        /** Settings restrictFiles. */
        public restrictFiles: boolean;

        /** Settings restrictAllSharing. */
        public restrictAllSharing: boolean;

        /** Settings restrictSharing. */
        public restrictSharing: boolean;

        /** Settings restrictSharingIncomingAll. */
        public restrictSharingIncomingAll: boolean;

        /** Settings restrictSharingIncomingEnterprise. */
        public restrictSharingIncomingEnterprise: boolean;

        /**
         * Creates a new Settings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settings instance
         */
        public static create(properties?: AccountSummary.ISettings): AccountSummary.Settings;

        /**
         * Encodes the specified Settings message. Does not implicitly {@link AccountSummary.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link AccountSummary.Settings.verify|verify} messages.
         * @param message Settings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.Settings;

        /**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.Settings;

        /**
         * Verifies a Settings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settings
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.Settings;

        /**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @param message Settings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyValue. */
    interface IKeyValue {

        /** KeyValue key */
        key?: (string|null);

        /** KeyValue value */
        value?: (string|null);
    }

    /** Represents a KeyValue. */
    class KeyValue implements IKeyValue {

        /**
         * Constructs a new KeyValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IKeyValue);

        /** KeyValue key. */
        public key: string;

        /** KeyValue value. */
        public value: string;

        /**
         * Creates a new KeyValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyValue instance
         */
        public static create(properties?: AccountSummary.IKeyValue): AccountSummary.KeyValue;

        /**
         * Encodes the specified KeyValue message. Does not implicitly {@link AccountSummary.KeyValue.verify|verify} messages.
         * @param message KeyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link AccountSummary.KeyValue.verify|verify} messages.
         * @param message KeyValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.KeyValue;

        /**
         * Decodes a KeyValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.KeyValue;

        /**
         * Verifies a KeyValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyValue
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.KeyValue;

        /**
         * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
         * @param message KeyValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MissingAccountShareKey. */
    interface IMissingAccountShareKey {

        /** MissingAccountShareKey roleId */
        roleId?: (number|Long|null);

        /** MissingAccountShareKey publicKey */
        publicKey?: (string|null);
    }

    /** Represents a MissingAccountShareKey. */
    class MissingAccountShareKey implements IMissingAccountShareKey {

        /**
         * Constructs a new MissingAccountShareKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IMissingAccountShareKey);

        /** MissingAccountShareKey roleId. */
        public roleId: (number|Long);

        /** MissingAccountShareKey publicKey. */
        public publicKey: string;

        /**
         * Creates a new MissingAccountShareKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissingAccountShareKey instance
         */
        public static create(properties?: AccountSummary.IMissingAccountShareKey): AccountSummary.MissingAccountShareKey;

        /**
         * Encodes the specified MissingAccountShareKey message. Does not implicitly {@link AccountSummary.MissingAccountShareKey.verify|verify} messages.
         * @param message MissingAccountShareKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IMissingAccountShareKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MissingAccountShareKey message, length delimited. Does not implicitly {@link AccountSummary.MissingAccountShareKey.verify|verify} messages.
         * @param message MissingAccountShareKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IMissingAccountShareKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissingAccountShareKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissingAccountShareKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.MissingAccountShareKey;

        /**
         * Decodes a MissingAccountShareKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MissingAccountShareKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.MissingAccountShareKey;

        /**
         * Verifies a MissingAccountShareKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MissingAccountShareKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MissingAccountShareKey
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.MissingAccountShareKey;

        /**
         * Creates a plain object from a MissingAccountShareKey message. Also converts values to other types if specified.
         * @param message MissingAccountShareKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.MissingAccountShareKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MissingAccountShareKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PasswordRule. */
    interface IPasswordRule {

        /** PasswordRule ruleType */
        ruleType?: (string|null);

        /** PasswordRule pattern */
        pattern?: (string|null);

        /** PasswordRule match */
        match?: (boolean|null);

        /** PasswordRule minimum */
        minimum?: (number|null);

        /** PasswordRule description */
        description?: (string|null);

        /** PasswordRule value */
        value?: (string|null);
    }

    /** Represents a PasswordRule. */
    class PasswordRule implements IPasswordRule {

        /**
         * Constructs a new PasswordRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IPasswordRule);

        /** PasswordRule ruleType. */
        public ruleType: string;

        /** PasswordRule pattern. */
        public pattern: string;

        /** PasswordRule match. */
        public match: boolean;

        /** PasswordRule minimum. */
        public minimum: number;

        /** PasswordRule description. */
        public description: string;

        /** PasswordRule value. */
        public value: string;

        /**
         * Creates a new PasswordRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PasswordRule instance
         */
        public static create(properties?: AccountSummary.IPasswordRule): AccountSummary.PasswordRule;

        /**
         * Encodes the specified PasswordRule message. Does not implicitly {@link AccountSummary.PasswordRule.verify|verify} messages.
         * @param message PasswordRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IPasswordRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PasswordRule message, length delimited. Does not implicitly {@link AccountSummary.PasswordRule.verify|verify} messages.
         * @param message PasswordRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IPasswordRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PasswordRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PasswordRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.PasswordRule;

        /**
         * Decodes a PasswordRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PasswordRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.PasswordRule;

        /**
         * Verifies a PasswordRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PasswordRule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PasswordRule
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.PasswordRule;

        /**
         * Creates a plain object from a PasswordRule message. Also converts values to other types if specified.
         * @param message PasswordRule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.PasswordRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PasswordRule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityKey. */
    interface ISecurityKey {

        /** SecurityKey deviceId */
        deviceId?: (number|Long|null);

        /** SecurityKey deviceName */
        deviceName?: (string|null);

        /** SecurityKey dateAdded */
        dateAdded?: (number|Long|null);

        /** SecurityKey isValid */
        isValid?: (boolean|null);

        /** SecurityKey deviceRegistration */
        deviceRegistration?: (AccountSummary.IDeviceRegistration|null);
    }

    /** Represents a SecurityKey. */
    class SecurityKey implements ISecurityKey {

        /**
         * Constructs a new SecurityKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.ISecurityKey);

        /** SecurityKey deviceId. */
        public deviceId: (number|Long);

        /** SecurityKey deviceName. */
        public deviceName: string;

        /** SecurityKey dateAdded. */
        public dateAdded: (number|Long);

        /** SecurityKey isValid. */
        public isValid: boolean;

        /** SecurityKey deviceRegistration. */
        public deviceRegistration?: (AccountSummary.IDeviceRegistration|null);

        /**
         * Creates a new SecurityKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityKey instance
         */
        public static create(properties?: AccountSummary.ISecurityKey): AccountSummary.SecurityKey;

        /**
         * Encodes the specified SecurityKey message. Does not implicitly {@link AccountSummary.SecurityKey.verify|verify} messages.
         * @param message SecurityKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.ISecurityKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityKey message, length delimited. Does not implicitly {@link AccountSummary.SecurityKey.verify|verify} messages.
         * @param message SecurityKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.ISecurityKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.SecurityKey;

        /**
         * Decodes a SecurityKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.SecurityKey;

        /**
         * Verifies a SecurityKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityKey
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.SecurityKey;

        /**
         * Creates a plain object from a SecurityKey message. Also converts values to other types if specified.
         * @param message SecurityKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.SecurityKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceRegistration. */
    interface IDeviceRegistration {

        /** DeviceRegistration keyHandle */
        keyHandle?: (string|null);

        /** DeviceRegistration publicKey */
        publicKey?: (string|null);

        /** DeviceRegistration attestationCert */
        attestationCert?: (string|null);

        /** DeviceRegistration counter */
        counter?: (number|Long|null);

        /** DeviceRegistration compromised */
        compromised?: (boolean|null);
    }

    /** Represents a DeviceRegistration. */
    class DeviceRegistration implements IDeviceRegistration {

        /**
         * Constructs a new DeviceRegistration.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IDeviceRegistration);

        /** DeviceRegistration keyHandle. */
        public keyHandle: string;

        /** DeviceRegistration publicKey. */
        public publicKey: string;

        /** DeviceRegistration attestationCert. */
        public attestationCert: string;

        /** DeviceRegistration counter. */
        public counter: (number|Long);

        /** DeviceRegistration compromised. */
        public compromised: boolean;

        /**
         * Creates a new DeviceRegistration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceRegistration instance
         */
        public static create(properties?: AccountSummary.IDeviceRegistration): AccountSummary.DeviceRegistration;

        /**
         * Encodes the specified DeviceRegistration message. Does not implicitly {@link AccountSummary.DeviceRegistration.verify|verify} messages.
         * @param message DeviceRegistration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IDeviceRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceRegistration message, length delimited. Does not implicitly {@link AccountSummary.DeviceRegistration.verify|verify} messages.
         * @param message DeviceRegistration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IDeviceRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceRegistration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.DeviceRegistration;

        /**
         * Decodes a DeviceRegistration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.DeviceRegistration;

        /**
         * Verifies a DeviceRegistration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceRegistration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceRegistration
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.DeviceRegistration;

        /**
         * Creates a plain object from a DeviceRegistration message. Also converts values to other types if specified.
         * @param message DeviceRegistration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.DeviceRegistration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceRegistration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Group. */
    interface IGroup {

        /** Group admin */
        admin?: (boolean|null);

        /** Group groupVerificationCode */
        groupVerificationCode?: (string|null);

        /** ? */
        groupSettings?: (AccountSummary.IKeyValue[]|null);

        /** Group administrator */
        administrator?: (AccountSummary.IAdministrator|null);

        /** Group error */
        error?: (string|null);

        /** Group twoFactorRequired */
        twoFactorRequired?: (boolean|null);

        /** Group restrictSharing */
        restrictSharing?: (boolean|null);

        /** Group restrictAllSharing */
        restrictAllSharing?: (boolean|null);

        /** Group autoBackupDays */
        autoBackupDays?: (number|null);

        /** Group adminAccountSharing */
        adminAccountSharing?: (boolean|null);
    }

    /** Represents a Group. */
    class Group implements IGroup {

        /**
         * Constructs a new Group.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IGroup);

        /** Group admin. */
        public admin: boolean;

        /** Group groupVerificationCode. */
        public groupVerificationCode: string;

        /** ? */
        public groupSettings: AccountSummary.IKeyValue[];

        /** Group administrator. */
        public administrator?: (AccountSummary.IAdministrator|null);

        /** Group error. */
        public error: string;

        /** Group twoFactorRequired. */
        public twoFactorRequired: boolean;

        /** Group restrictSharing. */
        public restrictSharing: boolean;

        /** Group restrictAllSharing. */
        public restrictAllSharing: boolean;

        /** Group autoBackupDays. */
        public autoBackupDays: number;

        /** Group adminAccountSharing. */
        public adminAccountSharing: boolean;

        /**
         * Creates a new Group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Group instance
         */
        public static create(properties?: AccountSummary.IGroup): AccountSummary.Group;

        /**
         * Encodes the specified Group message. Does not implicitly {@link AccountSummary.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link AccountSummary.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.Group;

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.Group;

        /**
         * Verifies a Group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Group
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.Group;

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @param message Group
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Group to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Administrator. */
    interface IAdministrator {

        /** Administrator firstName */
        firstName?: (string|null);

        /** Administrator lastName */
        lastName?: (string|null);

        /** Administrator email */
        email?: (string|null);

        /** Administrator currentNumberOfUsers */
        currentNumberOfUsers?: (number|null);

        /** Administrator numberOfUsers */
        numberOfUsers?: (number|null);

        /** Administrator numberOfDevices */
        numberOfDevices?: (number|null);

        /** Administrator subscriptionCode */
        subscriptionCode?: (string|null);

        /** Administrator expirationDate */
        expirationDate?: (string|null);

        /** Administrator purchaseDate */
        purchaseDate?: (string|null);

        /** Administrator total */
        total?: (string|null);
    }

    /** Represents an Administrator. */
    class Administrator implements IAdministrator {

        /**
         * Constructs a new Administrator.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountSummary.IAdministrator);

        /** Administrator firstName. */
        public firstName: string;

        /** Administrator lastName. */
        public lastName: string;

        /** Administrator email. */
        public email: string;

        /** Administrator currentNumberOfUsers. */
        public currentNumberOfUsers: number;

        /** Administrator numberOfUsers. */
        public numberOfUsers: number;

        /** Administrator numberOfDevices. */
        public numberOfDevices: number;

        /** Administrator subscriptionCode. */
        public subscriptionCode: string;

        /** Administrator expirationDate. */
        public expirationDate: string;

        /** Administrator purchaseDate. */
        public purchaseDate: string;

        /** Administrator total. */
        public total: string;

        /**
         * Creates a new Administrator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Administrator instance
         */
        public static create(properties?: AccountSummary.IAdministrator): AccountSummary.Administrator;

        /**
         * Encodes the specified Administrator message. Does not implicitly {@link AccountSummary.Administrator.verify|verify} messages.
         * @param message Administrator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountSummary.IAdministrator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Administrator message, length delimited. Does not implicitly {@link AccountSummary.Administrator.verify|verify} messages.
         * @param message Administrator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountSummary.IAdministrator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Administrator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Administrator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountSummary.Administrator;

        /**
         * Decodes an Administrator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Administrator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountSummary.Administrator;

        /**
         * Verifies an Administrator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Administrator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Administrator
         */
        public static fromObject(object: { [k: string]: any }): AccountSummary.Administrator;

        /**
         * Creates a plain object from an Administrator message. Also converts values to other types if specified.
         * @param message Administrator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountSummary.Administrator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Administrator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace BITokenValidation. */
export namespace BITokenValidation {

    /** SupportedLanguage enum. */
    enum SupportedLanguage {
        ENGLISH = 0,
        ARABIC = 1,
        BRITISH = 2,
        CHINESE = 3,
        CHINESE_HONG_KONG = 4,
        CHINESE_TAIWAN = 5,
        DUTCH = 6,
        FRENCH = 7,
        GERMAN = 8,
        GREEK = 9,
        HEBREW = 10,
        ITALIAN = 11,
        JAPANESE = 12,
        KOREAN = 13,
        POLISH = 14,
        PORTUGUESE = 15,
        PORTUGUESE_BRAZIL = 16,
        ROMANIAN = 17,
        RUSSIAN = 18,
        SLOVAK = 19,
        SPANISH = 20
    }

    /** SessionTokenType enum. */
    enum SessionTokenType {
        NO_RESTRICTION = 0,
        ACCOUNT_RECOVERY = 1,
        SHARE_ACCOUNT = 2,
        PURCHASE = 3
    }

    /** LoginType enum. */
    enum LoginType {
        NORMAL = 0,
        SSO = 1,
        BIO = 2,
        ALTERNATE = 3,
        OFFLINE = 4
    }

    /** Properties of a BIApiRequest. */
    interface IBIApiRequest {

        /** BIApiRequest encryptedTransmissionKey */
        encryptedTransmissionKey?: (Uint8Array|null);

        /** BIApiRequest publicKeyId */
        publicKeyId?: (number|null);

        /** BIApiRequest locale */
        locale?: (string|null);

        /** BIApiRequest encryptedPayload */
        encryptedPayload?: (Uint8Array|null);

        /** BIApiRequest email */
        email?: (string|null);

        /** BIApiRequest clientVersion */
        clientVersion?: (string|null);

        /** BIApiRequest sessionToken */
        sessionToken?: (string|null);
    }

    /** Represents a BIApiRequest. */
    class BIApiRequest implements IBIApiRequest {

        /**
         * Constructs a new BIApiRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IBIApiRequest);

        /** BIApiRequest encryptedTransmissionKey. */
        public encryptedTransmissionKey: Uint8Array;

        /** BIApiRequest publicKeyId. */
        public publicKeyId: number;

        /** BIApiRequest locale. */
        public locale: string;

        /** BIApiRequest encryptedPayload. */
        public encryptedPayload: Uint8Array;

        /** BIApiRequest email. */
        public email: string;

        /** BIApiRequest clientVersion. */
        public clientVersion: string;

        /** BIApiRequest sessionToken. */
        public sessionToken: string;

        /**
         * Creates a new BIApiRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BIApiRequest instance
         */
        public static create(properties?: BITokenValidation.IBIApiRequest): BITokenValidation.BIApiRequest;

        /**
         * Encodes the specified BIApiRequest message. Does not implicitly {@link BITokenValidation.BIApiRequest.verify|verify} messages.
         * @param message BIApiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IBIApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BIApiRequest message, length delimited. Does not implicitly {@link BITokenValidation.BIApiRequest.verify|verify} messages.
         * @param message BIApiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IBIApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BIApiRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BIApiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.BIApiRequest;

        /**
         * Decodes a BIApiRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BIApiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.BIApiRequest;

        /**
         * Verifies a BIApiRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BIApiRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BIApiRequest
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.BIApiRequest;

        /**
         * Creates a plain object from a BIApiRequest message. Also converts values to other types if specified.
         * @param message BIApiRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.BIApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BIApiRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BIApiRequestPayload. */
    interface IBIApiRequestPayload {

        /** BIApiRequestPayload payload */
        payload?: (Uint8Array|null);

        /** BIApiRequestPayload encryptedSessionToken */
        encryptedSessionToken?: (Uint8Array|null);

        /** BIApiRequestPayload timeToken */
        timeToken?: (Uint8Array|null);

        /** BIApiRequestPayload apiVersion */
        apiVersion?: (number|null);
    }

    /** Represents a BIApiRequestPayload. */
    class BIApiRequestPayload implements IBIApiRequestPayload {

        /**
         * Constructs a new BIApiRequestPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IBIApiRequestPayload);

        /** BIApiRequestPayload payload. */
        public payload: Uint8Array;

        /** BIApiRequestPayload encryptedSessionToken. */
        public encryptedSessionToken: Uint8Array;

        /** BIApiRequestPayload timeToken. */
        public timeToken: Uint8Array;

        /** BIApiRequestPayload apiVersion. */
        public apiVersion: number;

        /**
         * Creates a new BIApiRequestPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BIApiRequestPayload instance
         */
        public static create(properties?: BITokenValidation.IBIApiRequestPayload): BITokenValidation.BIApiRequestPayload;

        /**
         * Encodes the specified BIApiRequestPayload message. Does not implicitly {@link BITokenValidation.BIApiRequestPayload.verify|verify} messages.
         * @param message BIApiRequestPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IBIApiRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BIApiRequestPayload message, length delimited. Does not implicitly {@link BITokenValidation.BIApiRequestPayload.verify|verify} messages.
         * @param message BIApiRequestPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IBIApiRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BIApiRequestPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BIApiRequestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.BIApiRequestPayload;

        /**
         * Decodes a BIApiRequestPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BIApiRequestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.BIApiRequestPayload;

        /**
         * Verifies a BIApiRequestPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BIApiRequestPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BIApiRequestPayload
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.BIApiRequestPayload;

        /**
         * Creates a plain object from a BIApiRequestPayload message. Also converts values to other types if specified.
         * @param message BIApiRequestPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.BIApiRequestPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BIApiRequestPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Transform. */
    interface ITransform {

        /** Transform key */
        key?: (Uint8Array|null);

        /** Transform encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents a Transform. */
    class Transform implements ITransform {

        /**
         * Constructs a new Transform.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.ITransform);

        /** Transform key. */
        public key: Uint8Array;

        /** Transform encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new Transform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transform instance
         */
        public static create(properties?: BITokenValidation.ITransform): BITokenValidation.Transform;

        /**
         * Encodes the specified Transform message. Does not implicitly {@link BITokenValidation.Transform.verify|verify} messages.
         * @param message Transform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transform message, length delimited. Does not implicitly {@link BITokenValidation.Transform.verify|verify} messages.
         * @param message Transform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.ITransform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.Transform;

        /**
         * Decodes a Transform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.Transform;

        /**
         * Verifies a Transform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transform
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.Transform;

        /**
         * Creates a plain object from a Transform message. Also converts values to other types if specified.
         * @param message Transform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.Transform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceRequest. */
    interface IDeviceRequest {

        /** DeviceRequest clientVersion */
        clientVersion?: (string|null);

        /** DeviceRequest deviceName */
        deviceName?: (string|null);
    }

    /** Represents a DeviceRequest. */
    class DeviceRequest implements IDeviceRequest {

        /**
         * Constructs a new DeviceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IDeviceRequest);

        /** DeviceRequest clientVersion. */
        public clientVersion: string;

        /** DeviceRequest deviceName. */
        public deviceName: string;

        /**
         * Creates a new DeviceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceRequest instance
         */
        public static create(properties?: BITokenValidation.IDeviceRequest): BITokenValidation.DeviceRequest;

        /**
         * Encodes the specified DeviceRequest message. Does not implicitly {@link BITokenValidation.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceRequest message, length delimited. Does not implicitly {@link BITokenValidation.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.DeviceRequest;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.DeviceRequest;

        /**
         * Verifies a DeviceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceRequest
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.DeviceRequest;

        /**
         * Creates a plain object from a DeviceRequest message. Also converts values to other types if specified.
         * @param message DeviceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.DeviceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthRequest. */
    interface IAuthRequest {

        /** AuthRequest clientVersion */
        clientVersion?: (string|null);

        /** AuthRequest username */
        username?: (string|null);

        /** AuthRequest encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);
    }

    /** Represents an AuthRequest. */
    class AuthRequest implements IAuthRequest {

        /**
         * Constructs a new AuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IAuthRequest);

        /** AuthRequest clientVersion. */
        public clientVersion: string;

        /** AuthRequest username. */
        public username: string;

        /** AuthRequest encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthRequest instance
         */
        public static create(properties?: BITokenValidation.IAuthRequest): BITokenValidation.AuthRequest;

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link BITokenValidation.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link BITokenValidation.AuthRequest.verify|verify} messages.
         * @param message AuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.AuthRequest;

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.AuthRequest;

        /**
         * Verifies an AuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthRequest
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.AuthRequest;

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @param message AuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.AuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Salt. */
    interface ISalt {

        /** Salt iterations */
        iterations?: (number|null);

        /** Salt salt */
        salt?: (Uint8Array|null);

        /** Salt algorithm */
        algorithm?: (number|null);

        /** Salt uid */
        uid?: (Uint8Array|null);

        /** Salt name */
        name?: (string|null);
    }

    /** Represents a Salt. */
    class Salt implements ISalt {

        /**
         * Constructs a new Salt.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.ISalt);

        /** Salt iterations. */
        public iterations: number;

        /** Salt salt. */
        public salt: Uint8Array;

        /** Salt algorithm. */
        public algorithm: number;

        /** Salt uid. */
        public uid: Uint8Array;

        /** Salt name. */
        public name: string;

        /**
         * Creates a new Salt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Salt instance
         */
        public static create(properties?: BITokenValidation.ISalt): BITokenValidation.Salt;

        /**
         * Encodes the specified Salt message. Does not implicitly {@link BITokenValidation.Salt.verify|verify} messages.
         * @param message Salt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.ISalt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Salt message, length delimited. Does not implicitly {@link BITokenValidation.Salt.verify|verify} messages.
         * @param message Salt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.ISalt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Salt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Salt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.Salt;

        /**
         * Decodes a Salt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Salt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.Salt;

        /**
         * Verifies a Salt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Salt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Salt
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.Salt;

        /**
         * Creates a plain object from a Salt message. Also converts values to other types if specified.
         * @param message Salt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.Salt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Salt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAuthRequest. */
    interface IUserAuthRequest {

        /** UserAuthRequest uid */
        uid?: (Uint8Array|null);

        /** UserAuthRequest salt */
        salt?: (Uint8Array|null);

        /** UserAuthRequest iterations */
        iterations?: (number|null);

        /** UserAuthRequest encryptedClientKey */
        encryptedClientKey?: (Uint8Array|null);

        /** UserAuthRequest authHash */
        authHash?: (Uint8Array|null);

        /** UserAuthRequest encryptedDataKey */
        encryptedDataKey?: (Uint8Array|null);

        /** UserAuthRequest loginType */
        loginType?: (BITokenValidation.LoginType|null);

        /** UserAuthRequest name */
        name?: (string|null);

        /** UserAuthRequest algorithm */
        algorithm?: (number|null);
    }

    /** Represents a UserAuthRequest. */
    class UserAuthRequest implements IUserAuthRequest {

        /**
         * Constructs a new UserAuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IUserAuthRequest);

        /** UserAuthRequest uid. */
        public uid: Uint8Array;

        /** UserAuthRequest salt. */
        public salt: Uint8Array;

        /** UserAuthRequest iterations. */
        public iterations: number;

        /** UserAuthRequest encryptedClientKey. */
        public encryptedClientKey: Uint8Array;

        /** UserAuthRequest authHash. */
        public authHash: Uint8Array;

        /** UserAuthRequest encryptedDataKey. */
        public encryptedDataKey: Uint8Array;

        /** UserAuthRequest loginType. */
        public loginType: BITokenValidation.LoginType;

        /** UserAuthRequest name. */
        public name: string;

        /** UserAuthRequest algorithm. */
        public algorithm: number;

        /**
         * Creates a new UserAuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAuthRequest instance
         */
        public static create(properties?: BITokenValidation.IUserAuthRequest): BITokenValidation.UserAuthRequest;

        /**
         * Encodes the specified UserAuthRequest message. Does not implicitly {@link BITokenValidation.UserAuthRequest.verify|verify} messages.
         * @param message UserAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IUserAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAuthRequest message, length delimited. Does not implicitly {@link BITokenValidation.UserAuthRequest.verify|verify} messages.
         * @param message UserAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IUserAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.UserAuthRequest;

        /**
         * Decodes a UserAuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.UserAuthRequest;

        /**
         * Verifies a UserAuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAuthRequest
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.UserAuthRequest;

        /**
         * Creates a plain object from a UserAuthRequest message. Also converts values to other types if specified.
         * @param message UserAuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.UserAuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BIApiDecryptedRequest. */
    interface IBIApiDecryptedRequest {

        /** BIApiDecryptedRequest decryptedTransmissionKey */
        decryptedTransmissionKey?: (Uint8Array|null);

        /** BIApiDecryptedRequest bIApiRequestPayload */
        bIApiRequestPayload?: (BITokenValidation.IBIApiRequestPayload|null);

        /** BIApiDecryptedRequest supportedLanguage */
        supportedLanguage?: (BITokenValidation.SupportedLanguage|null);
    }

    /** Represents a BIApiDecryptedRequest. */
    class BIApiDecryptedRequest implements IBIApiDecryptedRequest {

        /**
         * Constructs a new BIApiDecryptedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IBIApiDecryptedRequest);

        /** BIApiDecryptedRequest decryptedTransmissionKey. */
        public decryptedTransmissionKey: Uint8Array;

        /** BIApiDecryptedRequest bIApiRequestPayload. */
        public bIApiRequestPayload?: (BITokenValidation.IBIApiRequestPayload|null);

        /** BIApiDecryptedRequest supportedLanguage. */
        public supportedLanguage: BITokenValidation.SupportedLanguage;

        /**
         * Creates a new BIApiDecryptedRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BIApiDecryptedRequest instance
         */
        public static create(properties?: BITokenValidation.IBIApiDecryptedRequest): BITokenValidation.BIApiDecryptedRequest;

        /**
         * Encodes the specified BIApiDecryptedRequest message. Does not implicitly {@link BITokenValidation.BIApiDecryptedRequest.verify|verify} messages.
         * @param message BIApiDecryptedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IBIApiDecryptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BIApiDecryptedRequest message, length delimited. Does not implicitly {@link BITokenValidation.BIApiDecryptedRequest.verify|verify} messages.
         * @param message BIApiDecryptedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IBIApiDecryptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BIApiDecryptedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BIApiDecryptedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.BIApiDecryptedRequest;

        /**
         * Decodes a BIApiDecryptedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BIApiDecryptedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.BIApiDecryptedRequest;

        /**
         * Verifies a BIApiDecryptedRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BIApiDecryptedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BIApiDecryptedRequest
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.BIApiDecryptedRequest;

        /**
         * Creates a plain object from a BIApiDecryptedRequest message. Also converts values to other types if specified.
         * @param message BIApiDecryptedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.BIApiDecryptedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BIApiDecryptedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionToken. */
    interface ISessionToken {

        /** SessionToken created */
        created?: (number|Long|null);

        /** SessionToken expiration */
        expiration?: (number|Long|null);

        /** SessionToken ip */
        ip?: (string|null);

        /** SessionToken sessionUid */
        sessionUid?: (Uint8Array|null);

        /** SessionToken deviceToken */
        deviceToken?: (BITokenValidation.IDeviceToken|null);

        /** SessionToken fromUserId */
        fromUserId?: (number|null);

        /** SessionToken forUserId */
        forUserId?: (number|null);

        /** SessionToken enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** SessionToken clientVersionId */
        clientVersionId?: (number|null);

        /** SessionToken sessionTokenType */
        sessionTokenType?: (BITokenValidation.SessionTokenType|null);
    }

    /** Represents a SessionToken. */
    class SessionToken implements ISessionToken {

        /**
         * Constructs a new SessionToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.ISessionToken);

        /** SessionToken created. */
        public created: (number|Long);

        /** SessionToken expiration. */
        public expiration: (number|Long);

        /** SessionToken ip. */
        public ip: string;

        /** SessionToken sessionUid. */
        public sessionUid: Uint8Array;

        /** SessionToken deviceToken. */
        public deviceToken?: (BITokenValidation.IDeviceToken|null);

        /** SessionToken fromUserId. */
        public fromUserId: number;

        /** SessionToken forUserId. */
        public forUserId: number;

        /** SessionToken enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** SessionToken clientVersionId. */
        public clientVersionId: number;

        /** SessionToken sessionTokenType. */
        public sessionTokenType: BITokenValidation.SessionTokenType;

        /**
         * Creates a new SessionToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionToken instance
         */
        public static create(properties?: BITokenValidation.ISessionToken): BITokenValidation.SessionToken;

        /**
         * Encodes the specified SessionToken message. Does not implicitly {@link BITokenValidation.SessionToken.verify|verify} messages.
         * @param message SessionToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.ISessionToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionToken message, length delimited. Does not implicitly {@link BITokenValidation.SessionToken.verify|verify} messages.
         * @param message SessionToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.ISessionToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.SessionToken;

        /**
         * Decodes a SessionToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.SessionToken;

        /**
         * Verifies a SessionToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionToken
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.SessionToken;

        /**
         * Creates a plain object from a SessionToken message. Also converts values to other types if specified.
         * @param message SessionToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.SessionToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceToken. */
    interface IDeviceToken {

        /** DeviceToken deviceId */
        deviceId?: (number|Long|null);

        /** DeviceToken region */
        region?: (number|null);
    }

    /** Represents a DeviceToken. */
    class DeviceToken implements IDeviceToken {

        /**
         * Constructs a new DeviceToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: BITokenValidation.IDeviceToken);

        /** DeviceToken deviceId. */
        public deviceId: (number|Long);

        /** DeviceToken region. */
        public region: number;

        /**
         * Creates a new DeviceToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceToken instance
         */
        public static create(properties?: BITokenValidation.IDeviceToken): BITokenValidation.DeviceToken;

        /**
         * Encodes the specified DeviceToken message. Does not implicitly {@link BITokenValidation.DeviceToken.verify|verify} messages.
         * @param message DeviceToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BITokenValidation.IDeviceToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceToken message, length delimited. Does not implicitly {@link BITokenValidation.DeviceToken.verify|verify} messages.
         * @param message DeviceToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BITokenValidation.IDeviceToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BITokenValidation.DeviceToken;

        /**
         * Decodes a DeviceToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BITokenValidation.DeviceToken;

        /**
         * Verifies a DeviceToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceToken
         */
        public static fromObject(object: { [k: string]: any }): BITokenValidation.DeviceToken;

        /**
         * Creates a plain object from a DeviceToken message. Also converts values to other types if specified.
         * @param message DeviceToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BITokenValidation.DeviceToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace BreachWatch. */
export namespace BreachWatch {

    /** BreachWatchInfoType enum. */
    enum BreachWatchInfoType {
        RECORD = 0,
        ALTERNATE_PASSWORD = 1
    }

    /** Properties of a BreachWatchRecordRequest. */
    interface IBreachWatchRecordRequest {

        /** BreachWatchRecordRequest recordUid */
        recordUid?: (Uint8Array|null);

        /** BreachWatchRecordRequest encryptedData */
        encryptedData?: (Uint8Array|null);

        /** BreachWatchRecordRequest breachWatchInfoType */
        breachWatchInfoType?: (BreachWatch.BreachWatchInfoType|null);

        /** BreachWatchRecordRequest updateUserWhoScanned */
        updateUserWhoScanned?: (boolean|null);
    }

    /** Represents a BreachWatchRecordRequest. */
    class BreachWatchRecordRequest implements IBreachWatchRecordRequest {

        /**
         * Constructs a new BreachWatchRecordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchRecordRequest);

        /** BreachWatchRecordRequest recordUid. */
        public recordUid: Uint8Array;

        /** BreachWatchRecordRequest encryptedData. */
        public encryptedData: Uint8Array;

        /** BreachWatchRecordRequest breachWatchInfoType. */
        public breachWatchInfoType: BreachWatch.BreachWatchInfoType;

        /** BreachWatchRecordRequest updateUserWhoScanned. */
        public updateUserWhoScanned: boolean;

        /**
         * Creates a new BreachWatchRecordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchRecordRequest instance
         */
        public static create(properties?: BreachWatch.IBreachWatchRecordRequest): BreachWatch.BreachWatchRecordRequest;

        /**
         * Encodes the specified BreachWatchRecordRequest message. Does not implicitly {@link BreachWatch.BreachWatchRecordRequest.verify|verify} messages.
         * @param message BreachWatchRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchRecordRequest message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchRecordRequest.verify|verify} messages.
         * @param message BreachWatchRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchRecordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchRecordRequest;

        /**
         * Decodes a BreachWatchRecordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchRecordRequest;

        /**
         * Verifies a BreachWatchRecordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchRecordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchRecordRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchRecordRequest;

        /**
         * Creates a plain object from a BreachWatchRecordRequest message. Also converts values to other types if specified.
         * @param message BreachWatchRecordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchRecordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchUpdateRequest. */
    interface IBreachWatchUpdateRequest {

        /** BreachWatchUpdateRequest breachWatchRecordRequest */
        breachWatchRecordRequest?: (BreachWatch.IBreachWatchRecordRequest[]|null);

        /** BreachWatchUpdateRequest encryptedData */
        encryptedData?: (Uint8Array|null);
    }

    /** Represents a BreachWatchUpdateRequest. */
    class BreachWatchUpdateRequest implements IBreachWatchUpdateRequest {

        /**
         * Constructs a new BreachWatchUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchUpdateRequest);

        /** BreachWatchUpdateRequest breachWatchRecordRequest. */
        public breachWatchRecordRequest: BreachWatch.IBreachWatchRecordRequest[];

        /** BreachWatchUpdateRequest encryptedData. */
        public encryptedData: Uint8Array;

        /**
         * Creates a new BreachWatchUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchUpdateRequest instance
         */
        public static create(properties?: BreachWatch.IBreachWatchUpdateRequest): BreachWatch.BreachWatchUpdateRequest;

        /**
         * Encodes the specified BreachWatchUpdateRequest message. Does not implicitly {@link BreachWatch.BreachWatchUpdateRequest.verify|verify} messages.
         * @param message BreachWatchUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchUpdateRequest message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchUpdateRequest.verify|verify} messages.
         * @param message BreachWatchUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchUpdateRequest;

        /**
         * Decodes a BreachWatchUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchUpdateRequest;

        /**
         * Verifies a BreachWatchUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchUpdateRequest;

        /**
         * Creates a plain object from a BreachWatchUpdateRequest message. Also converts values to other types if specified.
         * @param message BreachWatchUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchRecordStatus. */
    interface IBreachWatchRecordStatus {

        /** BreachWatchRecordStatus recordUid */
        recordUid?: (Uint8Array|null);

        /** BreachWatchRecordStatus status */
        status?: (string|null);

        /** BreachWatchRecordStatus reason */
        reason?: (string|null);
    }

    /** Represents a BreachWatchRecordStatus. */
    class BreachWatchRecordStatus implements IBreachWatchRecordStatus {

        /**
         * Constructs a new BreachWatchRecordStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchRecordStatus);

        /** BreachWatchRecordStatus recordUid. */
        public recordUid: Uint8Array;

        /** BreachWatchRecordStatus status. */
        public status: string;

        /** BreachWatchRecordStatus reason. */
        public reason: string;

        /**
         * Creates a new BreachWatchRecordStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchRecordStatus instance
         */
        public static create(properties?: BreachWatch.IBreachWatchRecordStatus): BreachWatch.BreachWatchRecordStatus;

        /**
         * Encodes the specified BreachWatchRecordStatus message. Does not implicitly {@link BreachWatch.BreachWatchRecordStatus.verify|verify} messages.
         * @param message BreachWatchRecordStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchRecordStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchRecordStatus message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchRecordStatus.verify|verify} messages.
         * @param message BreachWatchRecordStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchRecordStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchRecordStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchRecordStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchRecordStatus;

        /**
         * Decodes a BreachWatchRecordStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchRecordStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchRecordStatus;

        /**
         * Verifies a BreachWatchRecordStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchRecordStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchRecordStatus
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchRecordStatus;

        /**
         * Creates a plain object from a BreachWatchRecordStatus message. Also converts values to other types if specified.
         * @param message BreachWatchRecordStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchRecordStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchRecordStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchUpdateResponse. */
    interface IBreachWatchUpdateResponse {

        /** BreachWatchUpdateResponse breachWatchRecordStatus */
        breachWatchRecordStatus?: (BreachWatch.IBreachWatchRecordStatus[]|null);
    }

    /** Represents a BreachWatchUpdateResponse. */
    class BreachWatchUpdateResponse implements IBreachWatchUpdateResponse {

        /**
         * Constructs a new BreachWatchUpdateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchUpdateResponse);

        /** BreachWatchUpdateResponse breachWatchRecordStatus. */
        public breachWatchRecordStatus: BreachWatch.IBreachWatchRecordStatus[];

        /**
         * Creates a new BreachWatchUpdateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchUpdateResponse instance
         */
        public static create(properties?: BreachWatch.IBreachWatchUpdateResponse): BreachWatch.BreachWatchUpdateResponse;

        /**
         * Encodes the specified BreachWatchUpdateResponse message. Does not implicitly {@link BreachWatch.BreachWatchUpdateResponse.verify|verify} messages.
         * @param message BreachWatchUpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchUpdateResponse message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchUpdateResponse.verify|verify} messages.
         * @param message BreachWatchUpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchUpdateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchUpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchUpdateResponse;

        /**
         * Decodes a BreachWatchUpdateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchUpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchUpdateResponse;

        /**
         * Verifies a BreachWatchUpdateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchUpdateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchUpdateResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchUpdateResponse;

        /**
         * Creates a plain object from a BreachWatchUpdateResponse message. Also converts values to other types if specified.
         * @param message BreachWatchUpdateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchUpdateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchTokenRequest. */
    interface IBreachWatchTokenRequest {

        /** BreachWatchTokenRequest breachWatchToken */
        breachWatchToken?: (Uint8Array|null);
    }

    /** Represents a BreachWatchTokenRequest. */
    class BreachWatchTokenRequest implements IBreachWatchTokenRequest {

        /**
         * Constructs a new BreachWatchTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchTokenRequest);

        /** BreachWatchTokenRequest breachWatchToken. */
        public breachWatchToken: Uint8Array;

        /**
         * Creates a new BreachWatchTokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchTokenRequest instance
         */
        public static create(properties?: BreachWatch.IBreachWatchTokenRequest): BreachWatch.BreachWatchTokenRequest;

        /**
         * Encodes the specified BreachWatchTokenRequest message. Does not implicitly {@link BreachWatch.BreachWatchTokenRequest.verify|verify} messages.
         * @param message BreachWatchTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchTokenRequest message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchTokenRequest.verify|verify} messages.
         * @param message BreachWatchTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchTokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchTokenRequest;

        /**
         * Decodes a BreachWatchTokenRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchTokenRequest;

        /**
         * Verifies a BreachWatchTokenRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchTokenRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchTokenRequest;

        /**
         * Creates a plain object from a BreachWatchTokenRequest message. Also converts values to other types if specified.
         * @param message BreachWatchTokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchTokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchTokenResponse. */
    interface IBreachWatchTokenResponse {

        /** BreachWatchTokenResponse breachWatchToken */
        breachWatchToken?: (Uint8Array|null);

        /** BreachWatchTokenResponse clientEncrypted */
        clientEncrypted?: (boolean|null);
    }

    /** Represents a BreachWatchTokenResponse. */
    class BreachWatchTokenResponse implements IBreachWatchTokenResponse {

        /**
         * Constructs a new BreachWatchTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchTokenResponse);

        /** BreachWatchTokenResponse breachWatchToken. */
        public breachWatchToken: Uint8Array;

        /** BreachWatchTokenResponse clientEncrypted. */
        public clientEncrypted: boolean;

        /**
         * Creates a new BreachWatchTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchTokenResponse instance
         */
        public static create(properties?: BreachWatch.IBreachWatchTokenResponse): BreachWatch.BreachWatchTokenResponse;

        /**
         * Encodes the specified BreachWatchTokenResponse message. Does not implicitly {@link BreachWatch.BreachWatchTokenResponse.verify|verify} messages.
         * @param message BreachWatchTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchTokenResponse message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchTokenResponse.verify|verify} messages.
         * @param message BreachWatchTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchTokenResponse;

        /**
         * Decodes a BreachWatchTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchTokenResponse;

        /**
         * Verifies a BreachWatchTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchTokenResponse;

        /**
         * Creates a plain object from a BreachWatchTokenResponse message. Also converts values to other types if specified.
         * @param message BreachWatchTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnonymizedTokenResponse. */
    interface IAnonymizedTokenResponse {

        /** AnonymizedTokenResponse domainToken */
        domainToken?: (Uint8Array|null);

        /** AnonymizedTokenResponse emailToken */
        emailToken?: (Uint8Array|null);

        /** AnonymizedTokenResponse passwordToken */
        passwordToken?: (Uint8Array|null);
    }

    /** Represents an AnonymizedTokenResponse. */
    class AnonymizedTokenResponse implements IAnonymizedTokenResponse {

        /**
         * Constructs a new AnonymizedTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IAnonymizedTokenResponse);

        /** AnonymizedTokenResponse domainToken. */
        public domainToken: Uint8Array;

        /** AnonymizedTokenResponse emailToken. */
        public emailToken: Uint8Array;

        /** AnonymizedTokenResponse passwordToken. */
        public passwordToken: Uint8Array;

        /**
         * Creates a new AnonymizedTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnonymizedTokenResponse instance
         */
        public static create(properties?: BreachWatch.IAnonymizedTokenResponse): BreachWatch.AnonymizedTokenResponse;

        /**
         * Encodes the specified AnonymizedTokenResponse message. Does not implicitly {@link BreachWatch.AnonymizedTokenResponse.verify|verify} messages.
         * @param message AnonymizedTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IAnonymizedTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnonymizedTokenResponse message, length delimited. Does not implicitly {@link BreachWatch.AnonymizedTokenResponse.verify|verify} messages.
         * @param message AnonymizedTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IAnonymizedTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnonymizedTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnonymizedTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.AnonymizedTokenResponse;

        /**
         * Decodes an AnonymizedTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnonymizedTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.AnonymizedTokenResponse;

        /**
         * Verifies an AnonymizedTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnonymizedTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnonymizedTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.AnonymizedTokenResponse;

        /**
         * Creates a plain object from an AnonymizedTokenResponse message. Also converts values to other types if specified.
         * @param message AnonymizedTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.AnonymizedTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnonymizedTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HashCheck. */
    interface IHashCheck {

        /** HashCheck hash1 */
        hash1?: (Uint8Array|null);

        /** HashCheck euid */
        euid?: (Uint8Array|null);
    }

    /** Represents a HashCheck. */
    class HashCheck implements IHashCheck {

        /**
         * Constructs a new HashCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IHashCheck);

        /** HashCheck hash1. */
        public hash1: Uint8Array;

        /** HashCheck euid. */
        public euid: Uint8Array;

        /**
         * Creates a new HashCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HashCheck instance
         */
        public static create(properties?: BreachWatch.IHashCheck): BreachWatch.HashCheck;

        /**
         * Encodes the specified HashCheck message. Does not implicitly {@link BreachWatch.HashCheck.verify|verify} messages.
         * @param message HashCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IHashCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HashCheck message, length delimited. Does not implicitly {@link BreachWatch.HashCheck.verify|verify} messages.
         * @param message HashCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IHashCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HashCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HashCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.HashCheck;

        /**
         * Decodes a HashCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HashCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.HashCheck;

        /**
         * Verifies a HashCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HashCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HashCheck
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.HashCheck;

        /**
         * Creates a plain object from a HashCheck message. Also converts values to other types if specified.
         * @param message HashCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.HashCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HashCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchStatusRequest. */
    interface IBreachWatchStatusRequest {

        /** BreachWatchStatusRequest anonymizedToken */
        anonymizedToken?: (Uint8Array|null);

        /** BreachWatchStatusRequest hashCheck */
        hashCheck?: (BreachWatch.IHashCheck[]|null);

        /** BreachWatchStatusRequest removedEuid */
        removedEuid?: (Uint8Array[]|null);
    }

    /** Represents a BreachWatchStatusRequest. */
    class BreachWatchStatusRequest implements IBreachWatchStatusRequest {

        /**
         * Constructs a new BreachWatchStatusRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchStatusRequest);

        /** BreachWatchStatusRequest anonymizedToken. */
        public anonymizedToken: Uint8Array;

        /** BreachWatchStatusRequest hashCheck. */
        public hashCheck: BreachWatch.IHashCheck[];

        /** BreachWatchStatusRequest removedEuid. */
        public removedEuid: Uint8Array[];

        /**
         * Creates a new BreachWatchStatusRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchStatusRequest instance
         */
        public static create(properties?: BreachWatch.IBreachWatchStatusRequest): BreachWatch.BreachWatchStatusRequest;

        /**
         * Encodes the specified BreachWatchStatusRequest message. Does not implicitly {@link BreachWatch.BreachWatchStatusRequest.verify|verify} messages.
         * @param message BreachWatchStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchStatusRequest message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchStatusRequest.verify|verify} messages.
         * @param message BreachWatchStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchStatusRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchStatusRequest;

        /**
         * Decodes a BreachWatchStatusRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchStatusRequest;

        /**
         * Verifies a BreachWatchStatusRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchStatusRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchStatusRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchStatusRequest;

        /**
         * Creates a plain object from a BreachWatchStatusRequest message. Also converts values to other types if specified.
         * @param message BreachWatchStatusRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchStatusRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HashStatus. */
    interface IHashStatus {

        /** HashStatus hash1 */
        hash1?: (Uint8Array|null);

        /** HashStatus euid */
        euid?: (Uint8Array|null);

        /** HashStatus breachDetected */
        breachDetected?: (boolean|null);
    }

    /** Represents a HashStatus. */
    class HashStatus implements IHashStatus {

        /**
         * Constructs a new HashStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IHashStatus);

        /** HashStatus hash1. */
        public hash1: Uint8Array;

        /** HashStatus euid. */
        public euid: Uint8Array;

        /** HashStatus breachDetected. */
        public breachDetected: boolean;

        /**
         * Creates a new HashStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HashStatus instance
         */
        public static create(properties?: BreachWatch.IHashStatus): BreachWatch.HashStatus;

        /**
         * Encodes the specified HashStatus message. Does not implicitly {@link BreachWatch.HashStatus.verify|verify} messages.
         * @param message HashStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IHashStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HashStatus message, length delimited. Does not implicitly {@link BreachWatch.HashStatus.verify|verify} messages.
         * @param message HashStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IHashStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HashStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HashStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.HashStatus;

        /**
         * Decodes a HashStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HashStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.HashStatus;

        /**
         * Verifies a HashStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HashStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HashStatus
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.HashStatus;

        /**
         * Creates a plain object from a HashStatus message. Also converts values to other types if specified.
         * @param message HashStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.HashStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HashStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchStatusResponse. */
    interface IBreachWatchStatusResponse {

        /** BreachWatchStatusResponse hashStatus */
        hashStatus?: (BreachWatch.IHashStatus[]|null);
    }

    /** Represents a BreachWatchStatusResponse. */
    class BreachWatchStatusResponse implements IBreachWatchStatusResponse {

        /**
         * Constructs a new BreachWatchStatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachWatchStatusResponse);

        /** BreachWatchStatusResponse hashStatus. */
        public hashStatus: BreachWatch.IHashStatus[];

        /**
         * Creates a new BreachWatchStatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchStatusResponse instance
         */
        public static create(properties?: BreachWatch.IBreachWatchStatusResponse): BreachWatch.BreachWatchStatusResponse;

        /**
         * Encodes the specified BreachWatchStatusResponse message. Does not implicitly {@link BreachWatch.BreachWatchStatusResponse.verify|verify} messages.
         * @param message BreachWatchStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachWatchStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchStatusResponse message, length delimited. Does not implicitly {@link BreachWatch.BreachWatchStatusResponse.verify|verify} messages.
         * @param message BreachWatchStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachWatchStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchStatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachWatchStatusResponse;

        /**
         * Decodes a BreachWatchStatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachWatchStatusResponse;

        /**
         * Verifies a BreachWatchStatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchStatusResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachWatchStatusResponse;

        /**
         * Creates a plain object from a BreachWatchStatusResponse message. Also converts values to other types if specified.
         * @param message BreachWatchStatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachWatchStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchStatusResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterprisePublicKeyResponse. */
    interface IEnterprisePublicKeyResponse {

        /** EnterprisePublicKeyResponse enterprisePublicKey */
        enterprisePublicKey?: (Uint8Array|null);
    }

    /** Represents an EnterprisePublicKeyResponse. */
    class EnterprisePublicKeyResponse implements IEnterprisePublicKeyResponse {

        /**
         * Constructs a new EnterprisePublicKeyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IEnterprisePublicKeyResponse);

        /** EnterprisePublicKeyResponse enterprisePublicKey. */
        public enterprisePublicKey: Uint8Array;

        /**
         * Creates a new EnterprisePublicKeyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterprisePublicKeyResponse instance
         */
        public static create(properties?: BreachWatch.IEnterprisePublicKeyResponse): BreachWatch.EnterprisePublicKeyResponse;

        /**
         * Encodes the specified EnterprisePublicKeyResponse message. Does not implicitly {@link BreachWatch.EnterprisePublicKeyResponse.verify|verify} messages.
         * @param message EnterprisePublicKeyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IEnterprisePublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterprisePublicKeyResponse message, length delimited. Does not implicitly {@link BreachWatch.EnterprisePublicKeyResponse.verify|verify} messages.
         * @param message EnterprisePublicKeyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IEnterprisePublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterprisePublicKeyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterprisePublicKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.EnterprisePublicKeyResponse;

        /**
         * Decodes an EnterprisePublicKeyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterprisePublicKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.EnterprisePublicKeyResponse;

        /**
         * Verifies an EnterprisePublicKeyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterprisePublicKeyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterprisePublicKeyResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.EnterprisePublicKeyResponse;

        /**
         * Creates a plain object from an EnterprisePublicKeyResponse message. Also converts values to other types if specified.
         * @param message EnterprisePublicKeyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.EnterprisePublicKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterprisePublicKeyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FreeScanRequest. */
    interface IFreeScanRequest {

        /** FreeScanRequest hashedEmail */
        hashedEmail?: (Uint8Array|null);
    }

    /** Represents a FreeScanRequest. */
    class FreeScanRequest implements IFreeScanRequest {

        /**
         * Constructs a new FreeScanRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IFreeScanRequest);

        /** FreeScanRequest hashedEmail. */
        public hashedEmail: Uint8Array;

        /**
         * Creates a new FreeScanRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FreeScanRequest instance
         */
        public static create(properties?: BreachWatch.IFreeScanRequest): BreachWatch.FreeScanRequest;

        /**
         * Encodes the specified FreeScanRequest message. Does not implicitly {@link BreachWatch.FreeScanRequest.verify|verify} messages.
         * @param message FreeScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IFreeScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FreeScanRequest message, length delimited. Does not implicitly {@link BreachWatch.FreeScanRequest.verify|verify} messages.
         * @param message FreeScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IFreeScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FreeScanRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FreeScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.FreeScanRequest;

        /**
         * Decodes a FreeScanRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FreeScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.FreeScanRequest;

        /**
         * Verifies a FreeScanRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FreeScanRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FreeScanRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.FreeScanRequest;

        /**
         * Creates a plain object from a FreeScanRequest message. Also converts values to other types if specified.
         * @param message FreeScanRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.FreeScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FreeScanRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FreeScanResponse. */
    interface IFreeScanResponse {

        /** FreeScanResponse emailBreaches */
        emailBreaches?: (number|null);

        /** FreeScanResponse passwordBreaches */
        passwordBreaches?: (number|null);
    }

    /** Represents a FreeScanResponse. */
    class FreeScanResponse implements IFreeScanResponse {

        /**
         * Constructs a new FreeScanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IFreeScanResponse);

        /** FreeScanResponse emailBreaches. */
        public emailBreaches: number;

        /** FreeScanResponse passwordBreaches. */
        public passwordBreaches: number;

        /**
         * Creates a new FreeScanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FreeScanResponse instance
         */
        public static create(properties?: BreachWatch.IFreeScanResponse): BreachWatch.FreeScanResponse;

        /**
         * Encodes the specified FreeScanResponse message. Does not implicitly {@link BreachWatch.FreeScanResponse.verify|verify} messages.
         * @param message FreeScanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IFreeScanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FreeScanResponse message, length delimited. Does not implicitly {@link BreachWatch.FreeScanResponse.verify|verify} messages.
         * @param message FreeScanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IFreeScanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FreeScanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FreeScanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.FreeScanResponse;

        /**
         * Decodes a FreeScanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FreeScanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.FreeScanResponse;

        /**
         * Verifies a FreeScanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FreeScanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FreeScanResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.FreeScanResponse;

        /**
         * Creates a plain object from a FreeScanResponse message. Also converts values to other types if specified.
         * @param message FreeScanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.FreeScanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FreeScanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaidUserRequest. */
    interface IPaidUserRequest {

        /** PaidUserRequest email */
        email?: (string|null);
    }

    /** Represents a PaidUserRequest. */
    class PaidUserRequest implements IPaidUserRequest {

        /**
         * Constructs a new PaidUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IPaidUserRequest);

        /** PaidUserRequest email. */
        public email: string;

        /**
         * Creates a new PaidUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaidUserRequest instance
         */
        public static create(properties?: BreachWatch.IPaidUserRequest): BreachWatch.PaidUserRequest;

        /**
         * Encodes the specified PaidUserRequest message. Does not implicitly {@link BreachWatch.PaidUserRequest.verify|verify} messages.
         * @param message PaidUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IPaidUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaidUserRequest message, length delimited. Does not implicitly {@link BreachWatch.PaidUserRequest.verify|verify} messages.
         * @param message PaidUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IPaidUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaidUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaidUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.PaidUserRequest;

        /**
         * Decodes a PaidUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaidUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.PaidUserRequest;

        /**
         * Verifies a PaidUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaidUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaidUserRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.PaidUserRequest;

        /**
         * Creates a plain object from a PaidUserRequest message. Also converts values to other types if specified.
         * @param message PaidUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.PaidUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaidUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaidUserResponse. */
    interface IPaidUserResponse {

        /** PaidUserResponse paidUser */
        paidUser?: (boolean|null);
    }

    /** Represents a PaidUserResponse. */
    class PaidUserResponse implements IPaidUserResponse {

        /**
         * Constructs a new PaidUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IPaidUserResponse);

        /** PaidUserResponse paidUser. */
        public paidUser: boolean;

        /**
         * Creates a new PaidUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaidUserResponse instance
         */
        public static create(properties?: BreachWatch.IPaidUserResponse): BreachWatch.PaidUserResponse;

        /**
         * Encodes the specified PaidUserResponse message. Does not implicitly {@link BreachWatch.PaidUserResponse.verify|verify} messages.
         * @param message PaidUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IPaidUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaidUserResponse message, length delimited. Does not implicitly {@link BreachWatch.PaidUserResponse.verify|verify} messages.
         * @param message PaidUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IPaidUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaidUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaidUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.PaidUserResponse;

        /**
         * Decodes a PaidUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaidUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.PaidUserResponse;

        /**
         * Verifies a PaidUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaidUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaidUserResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.PaidUserResponse;

        /**
         * Creates a plain object from a PaidUserResponse message. Also converts values to other types if specified.
         * @param message PaidUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.PaidUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaidUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DetailedScanRequest. */
    interface IDetailedScanRequest {

        /** DetailedScanRequest email */
        email?: (string|null);
    }

    /** Represents a DetailedScanRequest. */
    class DetailedScanRequest implements IDetailedScanRequest {

        /**
         * Constructs a new DetailedScanRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IDetailedScanRequest);

        /** DetailedScanRequest email. */
        public email: string;

        /**
         * Creates a new DetailedScanRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DetailedScanRequest instance
         */
        public static create(properties?: BreachWatch.IDetailedScanRequest): BreachWatch.DetailedScanRequest;

        /**
         * Encodes the specified DetailedScanRequest message. Does not implicitly {@link BreachWatch.DetailedScanRequest.verify|verify} messages.
         * @param message DetailedScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IDetailedScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DetailedScanRequest message, length delimited. Does not implicitly {@link BreachWatch.DetailedScanRequest.verify|verify} messages.
         * @param message DetailedScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IDetailedScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetailedScanRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DetailedScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.DetailedScanRequest;

        /**
         * Decodes a DetailedScanRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DetailedScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.DetailedScanRequest;

        /**
         * Verifies a DetailedScanRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DetailedScanRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DetailedScanRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.DetailedScanRequest;

        /**
         * Creates a plain object from a DetailedScanRequest message. Also converts values to other types if specified.
         * @param message DetailedScanRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.DetailedScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DetailedScanRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseOneTimeTokenRequest. */
    interface IUseOneTimeTokenRequest {

        /** UseOneTimeTokenRequest token */
        token?: (Uint8Array|null);
    }

    /** Represents a UseOneTimeTokenRequest. */
    class UseOneTimeTokenRequest implements IUseOneTimeTokenRequest {

        /**
         * Constructs a new UseOneTimeTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IUseOneTimeTokenRequest);

        /** UseOneTimeTokenRequest token. */
        public token: Uint8Array;

        /**
         * Creates a new UseOneTimeTokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseOneTimeTokenRequest instance
         */
        public static create(properties?: BreachWatch.IUseOneTimeTokenRequest): BreachWatch.UseOneTimeTokenRequest;

        /**
         * Encodes the specified UseOneTimeTokenRequest message. Does not implicitly {@link BreachWatch.UseOneTimeTokenRequest.verify|verify} messages.
         * @param message UseOneTimeTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IUseOneTimeTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UseOneTimeTokenRequest message, length delimited. Does not implicitly {@link BreachWatch.UseOneTimeTokenRequest.verify|verify} messages.
         * @param message UseOneTimeTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IUseOneTimeTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseOneTimeTokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseOneTimeTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.UseOneTimeTokenRequest;

        /**
         * Decodes a UseOneTimeTokenRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseOneTimeTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.UseOneTimeTokenRequest;

        /**
         * Verifies a UseOneTimeTokenRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseOneTimeTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseOneTimeTokenRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.UseOneTimeTokenRequest;

        /**
         * Creates a plain object from a UseOneTimeTokenRequest message. Also converts values to other types if specified.
         * @param message UseOneTimeTokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.UseOneTimeTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseOneTimeTokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachEvent. */
    interface IBreachEvent {

        /** BreachEvent site */
        site?: (string|null);

        /** BreachEvent email */
        email?: (string|null);

        /** BreachEvent passwordInBreach */
        passwordInBreach?: (boolean|null);

        /** BreachEvent date */
        date?: (string|null);

        /** BreachEvent description */
        description?: (string|null);
    }

    /** Represents a BreachEvent. */
    class BreachEvent implements IBreachEvent {

        /**
         * Constructs a new BreachEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IBreachEvent);

        /** BreachEvent site. */
        public site: string;

        /** BreachEvent email. */
        public email: string;

        /** BreachEvent passwordInBreach. */
        public passwordInBreach: boolean;

        /** BreachEvent date. */
        public date: string;

        /** BreachEvent description. */
        public description: string;

        /**
         * Creates a new BreachEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachEvent instance
         */
        public static create(properties?: BreachWatch.IBreachEvent): BreachWatch.BreachEvent;

        /**
         * Encodes the specified BreachEvent message. Does not implicitly {@link BreachWatch.BreachEvent.verify|verify} messages.
         * @param message BreachEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IBreachEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachEvent message, length delimited. Does not implicitly {@link BreachWatch.BreachEvent.verify|verify} messages.
         * @param message BreachEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IBreachEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.BreachEvent;

        /**
         * Decodes a BreachEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.BreachEvent;

        /**
         * Verifies a BreachEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachEvent
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.BreachEvent;

        /**
         * Creates a plain object from a BreachEvent message. Also converts values to other types if specified.
         * @param message BreachEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.BreachEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseOneTimeTokenResponse. */
    interface IUseOneTimeTokenResponse {

        /** UseOneTimeTokenResponse emailBreaches */
        emailBreaches?: (number|null);

        /** UseOneTimeTokenResponse passwordBreaches */
        passwordBreaches?: (number|null);

        /** UseOneTimeTokenResponse breachEvents */
        breachEvents?: (BreachWatch.IBreachEvent[]|null);

        /** UseOneTimeTokenResponse email */
        email?: (string|null);
    }

    /** Represents a UseOneTimeTokenResponse. */
    class UseOneTimeTokenResponse implements IUseOneTimeTokenResponse {

        /**
         * Constructs a new UseOneTimeTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IUseOneTimeTokenResponse);

        /** UseOneTimeTokenResponse emailBreaches. */
        public emailBreaches: number;

        /** UseOneTimeTokenResponse passwordBreaches. */
        public passwordBreaches: number;

        /** UseOneTimeTokenResponse breachEvents. */
        public breachEvents: BreachWatch.IBreachEvent[];

        /** UseOneTimeTokenResponse email. */
        public email: string;

        /**
         * Creates a new UseOneTimeTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseOneTimeTokenResponse instance
         */
        public static create(properties?: BreachWatch.IUseOneTimeTokenResponse): BreachWatch.UseOneTimeTokenResponse;

        /**
         * Encodes the specified UseOneTimeTokenResponse message. Does not implicitly {@link BreachWatch.UseOneTimeTokenResponse.verify|verify} messages.
         * @param message UseOneTimeTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IUseOneTimeTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UseOneTimeTokenResponse message, length delimited. Does not implicitly {@link BreachWatch.UseOneTimeTokenResponse.verify|verify} messages.
         * @param message UseOneTimeTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IUseOneTimeTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseOneTimeTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseOneTimeTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.UseOneTimeTokenResponse;

        /**
         * Decodes a UseOneTimeTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseOneTimeTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.UseOneTimeTokenResponse;

        /**
         * Verifies a UseOneTimeTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseOneTimeTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseOneTimeTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.UseOneTimeTokenResponse;

        /**
         * Creates a plain object from a UseOneTimeTokenResponse message. Also converts values to other types if specified.
         * @param message UseOneTimeTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.UseOneTimeTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseOneTimeTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OneTimeUseToken. */
    interface IOneTimeUseToken {

        /** OneTimeUseToken email */
        email?: (string|null);

        /** OneTimeUseToken pad */
        pad?: (string|null);
    }

    /** Represents an OneTimeUseToken. */
    class OneTimeUseToken implements IOneTimeUseToken {

        /**
         * Constructs a new OneTimeUseToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IOneTimeUseToken);

        /** OneTimeUseToken email. */
        public email: string;

        /** OneTimeUseToken pad. */
        public pad: string;

        /**
         * Creates a new OneTimeUseToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OneTimeUseToken instance
         */
        public static create(properties?: BreachWatch.IOneTimeUseToken): BreachWatch.OneTimeUseToken;

        /**
         * Encodes the specified OneTimeUseToken message. Does not implicitly {@link BreachWatch.OneTimeUseToken.verify|verify} messages.
         * @param message OneTimeUseToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IOneTimeUseToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OneTimeUseToken message, length delimited. Does not implicitly {@link BreachWatch.OneTimeUseToken.verify|verify} messages.
         * @param message OneTimeUseToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IOneTimeUseToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OneTimeUseToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OneTimeUseToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.OneTimeUseToken;

        /**
         * Decodes an OneTimeUseToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OneTimeUseToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.OneTimeUseToken;

        /**
         * Verifies an OneTimeUseToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OneTimeUseToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OneTimeUseToken
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.OneTimeUseToken;

        /**
         * Creates a plain object from an OneTimeUseToken message. Also converts values to other types if specified.
         * @param message OneTimeUseToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.OneTimeUseToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OneTimeUseToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FreePasswordScanRequest. */
    interface IFreePasswordScanRequest {

        /** FreePasswordScanRequest hashedPassword */
        hashedPassword?: (Uint8Array|null);
    }

    /** Represents a FreePasswordScanRequest. */
    class FreePasswordScanRequest implements IFreePasswordScanRequest {

        /**
         * Constructs a new FreePasswordScanRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IFreePasswordScanRequest);

        /** FreePasswordScanRequest hashedPassword. */
        public hashedPassword: Uint8Array;

        /**
         * Creates a new FreePasswordScanRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FreePasswordScanRequest instance
         */
        public static create(properties?: BreachWatch.IFreePasswordScanRequest): BreachWatch.FreePasswordScanRequest;

        /**
         * Encodes the specified FreePasswordScanRequest message. Does not implicitly {@link BreachWatch.FreePasswordScanRequest.verify|verify} messages.
         * @param message FreePasswordScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IFreePasswordScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FreePasswordScanRequest message, length delimited. Does not implicitly {@link BreachWatch.FreePasswordScanRequest.verify|verify} messages.
         * @param message FreePasswordScanRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IFreePasswordScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FreePasswordScanRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FreePasswordScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.FreePasswordScanRequest;

        /**
         * Decodes a FreePasswordScanRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FreePasswordScanRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.FreePasswordScanRequest;

        /**
         * Verifies a FreePasswordScanRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FreePasswordScanRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FreePasswordScanRequest
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.FreePasswordScanRequest;

        /**
         * Creates a plain object from a FreePasswordScanRequest message. Also converts values to other types if specified.
         * @param message FreePasswordScanRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.FreePasswordScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FreePasswordScanRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FreePasswordScanResponse. */
    interface IFreePasswordScanResponse {

        /** FreePasswordScanResponse passwordBreaches */
        passwordBreaches?: (number|Long|null);
    }

    /** Represents a FreePasswordScanResponse. */
    class FreePasswordScanResponse implements IFreePasswordScanResponse {

        /**
         * Constructs a new FreePasswordScanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: BreachWatch.IFreePasswordScanResponse);

        /** FreePasswordScanResponse passwordBreaches. */
        public passwordBreaches: (number|Long);

        /**
         * Creates a new FreePasswordScanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FreePasswordScanResponse instance
         */
        public static create(properties?: BreachWatch.IFreePasswordScanResponse): BreachWatch.FreePasswordScanResponse;

        /**
         * Encodes the specified FreePasswordScanResponse message. Does not implicitly {@link BreachWatch.FreePasswordScanResponse.verify|verify} messages.
         * @param message FreePasswordScanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BreachWatch.IFreePasswordScanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FreePasswordScanResponse message, length delimited. Does not implicitly {@link BreachWatch.FreePasswordScanResponse.verify|verify} messages.
         * @param message FreePasswordScanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BreachWatch.IFreePasswordScanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FreePasswordScanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FreePasswordScanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BreachWatch.FreePasswordScanResponse;

        /**
         * Decodes a FreePasswordScanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FreePasswordScanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BreachWatch.FreePasswordScanResponse;

        /**
         * Verifies a FreePasswordScanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FreePasswordScanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FreePasswordScanResponse
         */
        public static fromObject(object: { [k: string]: any }): BreachWatch.FreePasswordScanResponse;

        /**
         * Creates a plain object from a FreePasswordScanResponse message. Also converts values to other types if specified.
         * @param message FreePasswordScanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BreachWatch.FreePasswordScanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FreePasswordScanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Tokens. */
export namespace Tokens {

    /** Properties of a BreachWatchUpdateRequest. */
    interface IBreachWatchUpdateRequest {

        /** BreachWatchUpdateRequest breachWatchRecordRequest */
        breachWatchRecordRequest?: (Tokens.IBreachWatchRecordRequest[]|null);

        /** BreachWatchUpdateRequest encryptedData */
        encryptedData?: (Uint8Array|null);
    }

    /** Represents a BreachWatchUpdateRequest. */
    class BreachWatchUpdateRequest implements IBreachWatchUpdateRequest {

        /**
         * Constructs a new BreachWatchUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IBreachWatchUpdateRequest);

        /** BreachWatchUpdateRequest breachWatchRecordRequest. */
        public breachWatchRecordRequest: Tokens.IBreachWatchRecordRequest[];

        /** BreachWatchUpdateRequest encryptedData. */
        public encryptedData: Uint8Array;

        /**
         * Creates a new BreachWatchUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchUpdateRequest instance
         */
        public static create(properties?: Tokens.IBreachWatchUpdateRequest): Tokens.BreachWatchUpdateRequest;

        /**
         * Encodes the specified BreachWatchUpdateRequest message. Does not implicitly {@link Tokens.BreachWatchUpdateRequest.verify|verify} messages.
         * @param message BreachWatchUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IBreachWatchUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchUpdateRequest message, length delimited. Does not implicitly {@link Tokens.BreachWatchUpdateRequest.verify|verify} messages.
         * @param message BreachWatchUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IBreachWatchUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.BreachWatchUpdateRequest;

        /**
         * Decodes a BreachWatchUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.BreachWatchUpdateRequest;

        /**
         * Verifies a BreachWatchUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): Tokens.BreachWatchUpdateRequest;

        /**
         * Creates a plain object from a BreachWatchUpdateRequest message. Also converts values to other types if specified.
         * @param message BreachWatchUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.BreachWatchUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchRecordRequest. */
    interface IBreachWatchRecordRequest {

        /** BreachWatchRecordRequest recordUid */
        recordUid?: (Uint8Array|null);

        /** BreachWatchRecordRequest encryptedData */
        encryptedData?: (Uint8Array|null);

        /** BreachWatchRecordRequest breachWatchInfoType */
        breachWatchInfoType?: (Tokens.BreachWatchInfoType|null);

        /** BreachWatchRecordRequest updateUserWhoScanned */
        updateUserWhoScanned?: (boolean|null);
    }

    /** Represents a BreachWatchRecordRequest. */
    class BreachWatchRecordRequest implements IBreachWatchRecordRequest {

        /**
         * Constructs a new BreachWatchRecordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IBreachWatchRecordRequest);

        /** BreachWatchRecordRequest recordUid. */
        public recordUid: Uint8Array;

        /** BreachWatchRecordRequest encryptedData. */
        public encryptedData: Uint8Array;

        /** BreachWatchRecordRequest breachWatchInfoType. */
        public breachWatchInfoType: Tokens.BreachWatchInfoType;

        /** BreachWatchRecordRequest updateUserWhoScanned. */
        public updateUserWhoScanned: boolean;

        /**
         * Creates a new BreachWatchRecordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchRecordRequest instance
         */
        public static create(properties?: Tokens.IBreachWatchRecordRequest): Tokens.BreachWatchRecordRequest;

        /**
         * Encodes the specified BreachWatchRecordRequest message. Does not implicitly {@link Tokens.BreachWatchRecordRequest.verify|verify} messages.
         * @param message BreachWatchRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IBreachWatchRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchRecordRequest message, length delimited. Does not implicitly {@link Tokens.BreachWatchRecordRequest.verify|verify} messages.
         * @param message BreachWatchRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IBreachWatchRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchRecordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.BreachWatchRecordRequest;

        /**
         * Decodes a BreachWatchRecordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.BreachWatchRecordRequest;

        /**
         * Verifies a BreachWatchRecordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchRecordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchRecordRequest
         */
        public static fromObject(object: { [k: string]: any }): Tokens.BreachWatchRecordRequest;

        /**
         * Creates a plain object from a BreachWatchRecordRequest message. Also converts values to other types if specified.
         * @param message BreachWatchRecordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.BreachWatchRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchRecordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BreachWatchInfoType enum. */
    enum BreachWatchInfoType {
        RECORD = 0,
        ALTERNATE_PASSWORD = 1
    }

    /** Properties of a BreachWatchData. */
    interface IBreachWatchData {

        /** BreachWatchData passwords */
        passwords?: (Tokens.IBWPassword[]|null);

        /** BreachWatchData emails */
        emails?: (Tokens.IBWPassword[]|null);

        /** BreachWatchData domains */
        domains?: (Tokens.IBWPassword[]|null);
    }

    /** Represents a BreachWatchData. */
    class BreachWatchData implements IBreachWatchData {

        /**
         * Constructs a new BreachWatchData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IBreachWatchData);

        /** BreachWatchData passwords. */
        public passwords: Tokens.IBWPassword[];

        /** BreachWatchData emails. */
        public emails: Tokens.IBWPassword[];

        /** BreachWatchData domains. */
        public domains: Tokens.IBWPassword[];

        /**
         * Creates a new BreachWatchData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchData instance
         */
        public static create(properties?: Tokens.IBreachWatchData): Tokens.BreachWatchData;

        /**
         * Encodes the specified BreachWatchData message. Does not implicitly {@link Tokens.BreachWatchData.verify|verify} messages.
         * @param message BreachWatchData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IBreachWatchData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchData message, length delimited. Does not implicitly {@link Tokens.BreachWatchData.verify|verify} messages.
         * @param message BreachWatchData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IBreachWatchData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.BreachWatchData;

        /**
         * Decodes a BreachWatchData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.BreachWatchData;

        /**
         * Verifies a BreachWatchData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchData
         */
        public static fromObject(object: { [k: string]: any }): Tokens.BreachWatchData;

        /**
         * Creates a plain object from a BreachWatchData message. Also converts values to other types if specified.
         * @param message BreachWatchData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.BreachWatchData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BWPassword. */
    interface IBWPassword {

        /** BWPassword value */
        value?: (string|null);

        /** BWPassword resolved */
        resolved?: (number|Long|null);

        /** BWPassword status */
        status?: (Tokens.BWStatus|null);

        /** BWPassword euid */
        euid?: (Uint8Array|null);
    }

    /** Represents a BWPassword. */
    class BWPassword implements IBWPassword {

        /**
         * Constructs a new BWPassword.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IBWPassword);

        /** BWPassword value. */
        public value: string;

        /** BWPassword resolved. */
        public resolved: (number|Long);

        /** BWPassword status. */
        public status: Tokens.BWStatus;

        /** BWPassword euid. */
        public euid: Uint8Array;

        /**
         * Creates a new BWPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BWPassword instance
         */
        public static create(properties?: Tokens.IBWPassword): Tokens.BWPassword;

        /**
         * Encodes the specified BWPassword message. Does not implicitly {@link Tokens.BWPassword.verify|verify} messages.
         * @param message BWPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IBWPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BWPassword message, length delimited. Does not implicitly {@link Tokens.BWPassword.verify|verify} messages.
         * @param message BWPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IBWPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BWPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BWPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.BWPassword;

        /**
         * Decodes a BWPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BWPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.BWPassword;

        /**
         * Verifies a BWPassword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BWPassword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BWPassword
         */
        public static fromObject(object: { [k: string]: any }): Tokens.BWPassword;

        /**
         * Creates a plain object from a BWPassword message. Also converts values to other types if specified.
         * @param message BWPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.BWPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BWPassword to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BWStatus enum. */
    enum BWStatus {
        GOOD = 0,
        CHANGED = 1,
        WEAK = 2,
        BREACHED = 3,
        IGNORE = 4
    }

    /** Properties of a DeviceToken. */
    interface IDeviceToken {

        /** DeviceToken deviceId */
        deviceId?: (number|Long|null);

        /** DeviceToken region */
        region?: (number|null);
    }

    /** Represents a DeviceToken. */
    class DeviceToken implements IDeviceToken {

        /**
         * Constructs a new DeviceToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IDeviceToken);

        /** DeviceToken deviceId. */
        public deviceId: (number|Long);

        /** DeviceToken region. */
        public region: number;

        /**
         * Creates a new DeviceToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceToken instance
         */
        public static create(properties?: Tokens.IDeviceToken): Tokens.DeviceToken;

        /**
         * Encodes the specified DeviceToken message. Does not implicitly {@link Tokens.DeviceToken.verify|verify} messages.
         * @param message DeviceToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IDeviceToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceToken message, length delimited. Does not implicitly {@link Tokens.DeviceToken.verify|verify} messages.
         * @param message DeviceToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IDeviceToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.DeviceToken;

        /**
         * Decodes a DeviceToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.DeviceToken;

        /**
         * Verifies a DeviceToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.DeviceToken;

        /**
         * Creates a plain object from a DeviceToken message. Also converts values to other types if specified.
         * @param message DeviceToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.DeviceToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceApprovalToken. */
    interface IDeviceApprovalToken {

        /** DeviceApprovalToken creation */
        creation?: (number|Long|null);

        /** DeviceApprovalToken expiration */
        expiration?: (number|Long|null);

        /** DeviceApprovalToken deviceToken */
        deviceToken?: (Tokens.IDeviceToken|null);

        /** DeviceApprovalToken locale */
        locale?: (string|null);
    }

    /** Represents a DeviceApprovalToken. */
    class DeviceApprovalToken implements IDeviceApprovalToken {

        /**
         * Constructs a new DeviceApprovalToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IDeviceApprovalToken);

        /** DeviceApprovalToken creation. */
        public creation: (number|Long);

        /** DeviceApprovalToken expiration. */
        public expiration: (number|Long);

        /** DeviceApprovalToken deviceToken. */
        public deviceToken?: (Tokens.IDeviceToken|null);

        /** DeviceApprovalToken locale. */
        public locale: string;

        /**
         * Creates a new DeviceApprovalToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceApprovalToken instance
         */
        public static create(properties?: Tokens.IDeviceApprovalToken): Tokens.DeviceApprovalToken;

        /**
         * Encodes the specified DeviceApprovalToken message. Does not implicitly {@link Tokens.DeviceApprovalToken.verify|verify} messages.
         * @param message DeviceApprovalToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IDeviceApprovalToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceApprovalToken message, length delimited. Does not implicitly {@link Tokens.DeviceApprovalToken.verify|verify} messages.
         * @param message DeviceApprovalToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IDeviceApprovalToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceApprovalToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceApprovalToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.DeviceApprovalToken;

        /**
         * Decodes a DeviceApprovalToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceApprovalToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.DeviceApprovalToken;

        /**
         * Verifies a DeviceApprovalToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceApprovalToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceApprovalToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.DeviceApprovalToken;

        /**
         * Creates a plain object from a DeviceApprovalToken message. Also converts values to other types if specified.
         * @param message DeviceApprovalToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.DeviceApprovalToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceApprovalToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TwoFactorToken. */
    interface ITwoFactorToken {

        /** TwoFactorToken creation */
        creation?: (number|Long|null);

        /** TwoFactorToken expiration */
        expiration?: (number|Long|null);

        /** TwoFactorToken deviceToken */
        deviceToken?: (Tokens.IDeviceToken|null);

        /** TwoFactorToken deviceIp */
        deviceIp?: (string|null);
    }

    /** Represents a TwoFactorToken. */
    class TwoFactorToken implements ITwoFactorToken {

        /**
         * Constructs a new TwoFactorToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.ITwoFactorToken);

        /** TwoFactorToken creation. */
        public creation: (number|Long);

        /** TwoFactorToken expiration. */
        public expiration: (number|Long);

        /** TwoFactorToken deviceToken. */
        public deviceToken?: (Tokens.IDeviceToken|null);

        /** TwoFactorToken deviceIp. */
        public deviceIp: string;

        /**
         * Creates a new TwoFactorToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TwoFactorToken instance
         */
        public static create(properties?: Tokens.ITwoFactorToken): Tokens.TwoFactorToken;

        /**
         * Encodes the specified TwoFactorToken message. Does not implicitly {@link Tokens.TwoFactorToken.verify|verify} messages.
         * @param message TwoFactorToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.ITwoFactorToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TwoFactorToken message, length delimited. Does not implicitly {@link Tokens.TwoFactorToken.verify|verify} messages.
         * @param message TwoFactorToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.ITwoFactorToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TwoFactorToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TwoFactorToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.TwoFactorToken;

        /**
         * Decodes a TwoFactorToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TwoFactorToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.TwoFactorToken;

        /**
         * Verifies a TwoFactorToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TwoFactorToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TwoFactorToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.TwoFactorToken;

        /**
         * Creates a plain object from a TwoFactorToken message. Also converts values to other types if specified.
         * @param message TwoFactorToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.TwoFactorToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TwoFactorToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BreachWatchToken. */
    interface IBreachWatchToken {

        /** BreachWatchToken userId */
        userId?: (number|null);

        /** BreachWatchToken domainUid */
        domainUid?: (Uint8Array|null);

        /** BreachWatchToken emailUid */
        emailUid?: (Uint8Array|null);

        /** BreachWatchToken passwordUid */
        passwordUid?: (Uint8Array|null);
    }

    /** Represents a BreachWatchToken. */
    class BreachWatchToken implements IBreachWatchToken {

        /**
         * Constructs a new BreachWatchToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IBreachWatchToken);

        /** BreachWatchToken userId. */
        public userId: number;

        /** BreachWatchToken domainUid. */
        public domainUid: Uint8Array;

        /** BreachWatchToken emailUid. */
        public emailUid: Uint8Array;

        /** BreachWatchToken passwordUid. */
        public passwordUid: Uint8Array;

        /**
         * Creates a new BreachWatchToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BreachWatchToken instance
         */
        public static create(properties?: Tokens.IBreachWatchToken): Tokens.BreachWatchToken;

        /**
         * Encodes the specified BreachWatchToken message. Does not implicitly {@link Tokens.BreachWatchToken.verify|verify} messages.
         * @param message BreachWatchToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IBreachWatchToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BreachWatchToken message, length delimited. Does not implicitly {@link Tokens.BreachWatchToken.verify|verify} messages.
         * @param message BreachWatchToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IBreachWatchToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BreachWatchToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BreachWatchToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.BreachWatchToken;

        /**
         * Decodes a BreachWatchToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BreachWatchToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.BreachWatchToken;

        /**
         * Verifies a BreachWatchToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BreachWatchToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BreachWatchToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.BreachWatchToken;

        /**
         * Creates a plain object from a BreachWatchToken message. Also converts values to other types if specified.
         * @param message BreachWatchToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.BreachWatchToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BreachWatchToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AnonymizedTokenType enum. */
    enum AnonymizedTokenType {
        DAT = 0,
        EAT = 1,
        PAT = 2
    }

    /** Properties of an AnonymizedToken. */
    interface IAnonymizedToken {

        /** AnonymizedToken created */
        created?: (number|Long|null);

        /** AnonymizedToken expiration */
        expiration?: (number|Long|null);

        /** AnonymizedToken uid */
        uid?: (Uint8Array|null);

        /** AnonymizedToken anonymizedTokenType */
        anonymizedTokenType?: (Tokens.AnonymizedTokenType|null);
    }

    /** Represents an AnonymizedToken. */
    class AnonymizedToken implements IAnonymizedToken {

        /**
         * Constructs a new AnonymizedToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IAnonymizedToken);

        /** AnonymizedToken created. */
        public created: (number|Long);

        /** AnonymizedToken expiration. */
        public expiration: (number|Long);

        /** AnonymizedToken uid. */
        public uid: Uint8Array;

        /** AnonymizedToken anonymizedTokenType. */
        public anonymizedTokenType: Tokens.AnonymizedTokenType;

        /**
         * Creates a new AnonymizedToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnonymizedToken instance
         */
        public static create(properties?: Tokens.IAnonymizedToken): Tokens.AnonymizedToken;

        /**
         * Encodes the specified AnonymizedToken message. Does not implicitly {@link Tokens.AnonymizedToken.verify|verify} messages.
         * @param message AnonymizedToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IAnonymizedToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnonymizedToken message, length delimited. Does not implicitly {@link Tokens.AnonymizedToken.verify|verify} messages.
         * @param message AnonymizedToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IAnonymizedToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnonymizedToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnonymizedToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.AnonymizedToken;

        /**
         * Decodes an AnonymizedToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnonymizedToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.AnonymizedToken;

        /**
         * Verifies an AnonymizedToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnonymizedToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnonymizedToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.AnonymizedToken;

        /**
         * Creates a plain object from an AnonymizedToken message. Also converts values to other types if specified.
         * @param message AnonymizedToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.AnonymizedToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnonymizedToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LicenseToken. */
    interface ILicenseToken {

        /** LicenseToken expiration */
        expiration?: (number|Long|null);

        /** LicenseToken licenseStatus */
        licenseStatus?: (Authentication.LicenseStatus|null);
    }

    /** Represents a LicenseToken. */
    class LicenseToken implements ILicenseToken {

        /**
         * Constructs a new LicenseToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.ILicenseToken);

        /** LicenseToken expiration. */
        public expiration: (number|Long);

        /** LicenseToken licenseStatus. */
        public licenseStatus: Authentication.LicenseStatus;

        /**
         * Creates a new LicenseToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LicenseToken instance
         */
        public static create(properties?: Tokens.ILicenseToken): Tokens.LicenseToken;

        /**
         * Encodes the specified LicenseToken message. Does not implicitly {@link Tokens.LicenseToken.verify|verify} messages.
         * @param message LicenseToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.ILicenseToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LicenseToken message, length delimited. Does not implicitly {@link Tokens.LicenseToken.verify|verify} messages.
         * @param message LicenseToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.ILicenseToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LicenseToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LicenseToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.LicenseToken;

        /**
         * Decodes a LicenseToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LicenseToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.LicenseToken;

        /**
         * Verifies a LicenseToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LicenseToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LicenseToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.LicenseToken;

        /**
         * Creates a plain object from a LicenseToken message. Also converts values to other types if specified.
         * @param message LicenseToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.LicenseToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LicenseToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AccessType enum. */
    enum AccessType {
        VAULT_RW = 0,
        VAULT_RO = 1,
        ADMIN = 2
    }

    /** Properties of a SessionToken. */
    interface ISessionToken {

        /** SessionToken created */
        created?: (number|Long|null);

        /** SessionToken expiration */
        expiration?: (number|Long|null);

        /** SessionToken dontUseIp */
        dontUseIp?: (string|null);

        /** SessionToken sessionUid */
        sessionUid?: (Uint8Array|null);

        /** SessionToken dontUseDeviceToken */
        dontUseDeviceToken?: (Tokens.IDeviceToken|null);

        /** SessionToken fromUserId */
        fromUserId?: (number|null);

        /** SessionToken forUserId */
        forUserId?: (number|null);

        /** SessionToken enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** SessionToken dontUseVault */
        dontUseVault?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseChat */
        dontUseChat?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseStorage */
        dontUseStorage?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseBreachWatch */
        dontUseBreachWatch?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseAccountType */
        dontUseAccountType?: (Authentication.AccountType|null);

        /** SessionToken clientVersionId */
        clientVersionId?: (number|null);

        /** SessionToken sessionTokenType */
        sessionTokenType?: (Authentication.SessionTokenType|null);

        /** SessionToken mcEnterpriseId */
        mcEnterpriseId?: (number|null);

        /** SessionToken dontUseOfflineDisallowed */
        dontUseOfflineDisallowed?: (boolean|null);

        /** SessionToken encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** SessionToken userLicenseStatus */
        userLicenseStatus?: (Tokens.IUserLicenseStatus[]|null);
    }

    /** Represents a SessionToken. */
    class SessionToken implements ISessionToken {

        /**
         * Constructs a new SessionToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.ISessionToken);

        /** SessionToken created. */
        public created: (number|Long);

        /** SessionToken expiration. */
        public expiration: (number|Long);

        /** SessionToken dontUseIp. */
        public dontUseIp: string;

        /** SessionToken sessionUid. */
        public sessionUid: Uint8Array;

        /** SessionToken dontUseDeviceToken. */
        public dontUseDeviceToken?: (Tokens.IDeviceToken|null);

        /** SessionToken fromUserId. */
        public fromUserId: number;

        /** SessionToken forUserId. */
        public forUserId: number;

        /** SessionToken enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** SessionToken dontUseVault. */
        public dontUseVault?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseChat. */
        public dontUseChat?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseStorage. */
        public dontUseStorage?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseBreachWatch. */
        public dontUseBreachWatch?: (Tokens.ILicenseToken|null);

        /** SessionToken dontUseAccountType. */
        public dontUseAccountType: Authentication.AccountType;

        /** SessionToken clientVersionId. */
        public clientVersionId: number;

        /** SessionToken sessionTokenType. */
        public sessionTokenType: Authentication.SessionTokenType;

        /** SessionToken mcEnterpriseId. */
        public mcEnterpriseId: number;

        /** SessionToken dontUseOfflineDisallowed. */
        public dontUseOfflineDisallowed: boolean;

        /** SessionToken encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** SessionToken userLicenseStatus. */
        public userLicenseStatus: Tokens.IUserLicenseStatus[];

        /**
         * Creates a new SessionToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionToken instance
         */
        public static create(properties?: Tokens.ISessionToken): Tokens.SessionToken;

        /**
         * Encodes the specified SessionToken message. Does not implicitly {@link Tokens.SessionToken.verify|verify} messages.
         * @param message SessionToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.ISessionToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionToken message, length delimited. Does not implicitly {@link Tokens.SessionToken.verify|verify} messages.
         * @param message SessionToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.ISessionToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.SessionToken;

        /**
         * Decodes a SessionToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.SessionToken;

        /**
         * Verifies a SessionToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.SessionToken;

        /**
         * Creates a plain object from a SessionToken message. Also converts values to other types if specified.
         * @param message SessionToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.SessionToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLicenseStatus. */
    interface IUserLicenseStatus {

        /** UserLicenseStatus licenseType */
        licenseType?: (Authentication.LicenseType|null);

        /** UserLicenseStatus expiration */
        expiration?: (number|Long|null);
    }

    /** Represents a UserLicenseStatus. */
    class UserLicenseStatus implements IUserLicenseStatus {

        /**
         * Constructs a new UserLicenseStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IUserLicenseStatus);

        /** UserLicenseStatus licenseType. */
        public licenseType: Authentication.LicenseType;

        /** UserLicenseStatus expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new UserLicenseStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLicenseStatus instance
         */
        public static create(properties?: Tokens.IUserLicenseStatus): Tokens.UserLicenseStatus;

        /**
         * Encodes the specified UserLicenseStatus message. Does not implicitly {@link Tokens.UserLicenseStatus.verify|verify} messages.
         * @param message UserLicenseStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IUserLicenseStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLicenseStatus message, length delimited. Does not implicitly {@link Tokens.UserLicenseStatus.verify|verify} messages.
         * @param message UserLicenseStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IUserLicenseStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLicenseStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLicenseStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.UserLicenseStatus;

        /**
         * Decodes a UserLicenseStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLicenseStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.UserLicenseStatus;

        /**
         * Verifies a UserLicenseStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLicenseStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLicenseStatus
         */
        public static fromObject(object: { [k: string]: any }): Tokens.UserLicenseStatus;

        /**
         * Creates a plain object from a UserLicenseStatus message. Also converts values to other types if specified.
         * @param message UserLicenseStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.UserLicenseStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLicenseStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckOutTokenResponse. */
    interface ICheckOutTokenResponse {

        /** CheckOutTokenResponse checkOutToken */
        checkOutToken?: (string|null);
    }

    /** Represents a CheckOutTokenResponse. */
    class CheckOutTokenResponse implements ICheckOutTokenResponse {

        /**
         * Constructs a new CheckOutTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.ICheckOutTokenResponse);

        /** CheckOutTokenResponse checkOutToken. */
        public checkOutToken: string;

        /**
         * Creates a new CheckOutTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckOutTokenResponse instance
         */
        public static create(properties?: Tokens.ICheckOutTokenResponse): Tokens.CheckOutTokenResponse;

        /**
         * Encodes the specified CheckOutTokenResponse message. Does not implicitly {@link Tokens.CheckOutTokenResponse.verify|verify} messages.
         * @param message CheckOutTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.ICheckOutTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckOutTokenResponse message, length delimited. Does not implicitly {@link Tokens.CheckOutTokenResponse.verify|verify} messages.
         * @param message CheckOutTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.ICheckOutTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckOutTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckOutTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.CheckOutTokenResponse;

        /**
         * Decodes a CheckOutTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckOutTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.CheckOutTokenResponse;

        /**
         * Verifies a CheckOutTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckOutTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckOutTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): Tokens.CheckOutTokenResponse;

        /**
         * Creates a plain object from a CheckOutTokenResponse message. Also converts values to other types if specified.
         * @param message CheckOutTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.CheckOutTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckOutTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ImporterToken. */
    interface IImporterToken {

        /** ImporterToken importId */
        importId?: (number|null);

        /** ImporterToken userId */
        userId?: (number|null);

        /** ImporterToken region */
        region?: (string|null);
    }

    /** Represents an ImporterToken. */
    class ImporterToken implements IImporterToken {

        /**
         * Constructs a new ImporterToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IImporterToken);

        /** ImporterToken importId. */
        public importId: number;

        /** ImporterToken userId. */
        public userId: number;

        /** ImporterToken region. */
        public region: string;

        /**
         * Creates a new ImporterToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImporterToken instance
         */
        public static create(properties?: Tokens.IImporterToken): Tokens.ImporterToken;

        /**
         * Encodes the specified ImporterToken message. Does not implicitly {@link Tokens.ImporterToken.verify|verify} messages.
         * @param message ImporterToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IImporterToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImporterToken message, length delimited. Does not implicitly {@link Tokens.ImporterToken.verify|verify} messages.
         * @param message ImporterToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IImporterToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImporterToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImporterToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.ImporterToken;

        /**
         * Decodes an ImporterToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImporterToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.ImporterToken;

        /**
         * Verifies an ImporterToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImporterToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImporterToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.ImporterToken;

        /**
         * Creates a plain object from an ImporterToken message. Also converts values to other types if specified.
         * @param message ImporterToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.ImporterToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImporterToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApiDecryptedRequest. */
    interface IApiDecryptedRequest {

        /** ApiDecryptedRequest decryptedTransmissionKey */
        decryptedTransmissionKey?: (Uint8Array|null);

        /** ApiDecryptedRequest apiRequestPayload */
        apiRequestPayload?: (Authentication.IApiRequestPayload|null);

        /** ApiDecryptedRequest supportedLanguage */
        supportedLanguage?: (Authentication.SupportedLanguage|null);

        /** ApiDecryptedRequest recaptcha */
        recaptcha?: (string|null);

        /** ApiDecryptedRequest userAgent */
        userAgent?: (string|null);
    }

    /** Represents an ApiDecryptedRequest. */
    class ApiDecryptedRequest implements IApiDecryptedRequest {

        /**
         * Constructs a new ApiDecryptedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IApiDecryptedRequest);

        /** ApiDecryptedRequest decryptedTransmissionKey. */
        public decryptedTransmissionKey: Uint8Array;

        /** ApiDecryptedRequest apiRequestPayload. */
        public apiRequestPayload?: (Authentication.IApiRequestPayload|null);

        /** ApiDecryptedRequest supportedLanguage. */
        public supportedLanguage: Authentication.SupportedLanguage;

        /** ApiDecryptedRequest recaptcha. */
        public recaptcha: string;

        /** ApiDecryptedRequest userAgent. */
        public userAgent: string;

        /**
         * Creates a new ApiDecryptedRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiDecryptedRequest instance
         */
        public static create(properties?: Tokens.IApiDecryptedRequest): Tokens.ApiDecryptedRequest;

        /**
         * Encodes the specified ApiDecryptedRequest message. Does not implicitly {@link Tokens.ApiDecryptedRequest.verify|verify} messages.
         * @param message ApiDecryptedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IApiDecryptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiDecryptedRequest message, length delimited. Does not implicitly {@link Tokens.ApiDecryptedRequest.verify|verify} messages.
         * @param message ApiDecryptedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IApiDecryptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiDecryptedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiDecryptedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.ApiDecryptedRequest;

        /**
         * Decodes an ApiDecryptedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiDecryptedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.ApiDecryptedRequest;

        /**
         * Verifies an ApiDecryptedRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiDecryptedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiDecryptedRequest
         */
        public static fromObject(object: { [k: string]: any }): Tokens.ApiDecryptedRequest;

        /**
         * Creates a plain object from an ApiDecryptedRequest message. Also converts values to other types if specified.
         * @param message ApiDecryptedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.ApiDecryptedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiDecryptedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeEmailToken. */
    interface IChangeEmailToken {

        /** ChangeEmailToken userId */
        userId?: (number|null);

        /** ChangeEmailToken newEmail */
        newEmail?: (string|null);

        /** ChangeEmailToken locale */
        locale?: (string|null);

        /** ChangeEmailToken enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** ChangeEmailToken expiration */
        expiration?: (number|Long|null);
    }

    /** Represents a ChangeEmailToken. */
    class ChangeEmailToken implements IChangeEmailToken {

        /**
         * Constructs a new ChangeEmailToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IChangeEmailToken);

        /** ChangeEmailToken userId. */
        public userId: number;

        /** ChangeEmailToken newEmail. */
        public newEmail: string;

        /** ChangeEmailToken locale. */
        public locale: string;

        /** ChangeEmailToken enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** ChangeEmailToken expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new ChangeEmailToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeEmailToken instance
         */
        public static create(properties?: Tokens.IChangeEmailToken): Tokens.ChangeEmailToken;

        /**
         * Encodes the specified ChangeEmailToken message. Does not implicitly {@link Tokens.ChangeEmailToken.verify|verify} messages.
         * @param message ChangeEmailToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IChangeEmailToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeEmailToken message, length delimited. Does not implicitly {@link Tokens.ChangeEmailToken.verify|verify} messages.
         * @param message ChangeEmailToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IChangeEmailToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeEmailToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeEmailToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.ChangeEmailToken;

        /**
         * Decodes a ChangeEmailToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeEmailToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.ChangeEmailToken;

        /**
         * Verifies a ChangeEmailToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeEmailToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeEmailToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.ChangeEmailToken;

        /**
         * Creates a plain object from a ChangeEmailToken message. Also converts values to other types if specified.
         * @param message ChangeEmailToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.ChangeEmailToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeEmailToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmailVerificationToken. */
    interface IEmailVerificationToken {

        /** EmailVerificationToken userId */
        userId?: (number|null);

        /** EmailVerificationToken email */
        email?: (string|null);

        /** EmailVerificationToken locale */
        locale?: (string|null);

        /** EmailVerificationToken enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** EmailVerificationToken expiration */
        expiration?: (number|Long|null);
    }

    /** Represents an EmailVerificationToken. */
    class EmailVerificationToken implements IEmailVerificationToken {

        /**
         * Constructs a new EmailVerificationToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IEmailVerificationToken);

        /** EmailVerificationToken userId. */
        public userId: number;

        /** EmailVerificationToken email. */
        public email: string;

        /** EmailVerificationToken locale. */
        public locale: string;

        /** EmailVerificationToken enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** EmailVerificationToken expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new EmailVerificationToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmailVerificationToken instance
         */
        public static create(properties?: Tokens.IEmailVerificationToken): Tokens.EmailVerificationToken;

        /**
         * Encodes the specified EmailVerificationToken message. Does not implicitly {@link Tokens.EmailVerificationToken.verify|verify} messages.
         * @param message EmailVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IEmailVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmailVerificationToken message, length delimited. Does not implicitly {@link Tokens.EmailVerificationToken.verify|verify} messages.
         * @param message EmailVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IEmailVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmailVerificationToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmailVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.EmailVerificationToken;

        /**
         * Decodes an EmailVerificationToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmailVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.EmailVerificationToken;

        /**
         * Verifies an EmailVerificationToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmailVerificationToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmailVerificationToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.EmailVerificationToken;

        /**
         * Creates a plain object from an EmailVerificationToken message. Also converts values to other types if specified.
         * @param message EmailVerificationToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.EmailVerificationToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmailVerificationToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IpAddressVerificationToken. */
    interface IIpAddressVerificationToken {

        /** IpAddressVerificationToken userId */
        userId?: (number|null);

        /** IpAddressVerificationToken email */
        email?: (string|null);

        /** IpAddressVerificationToken ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);

        /** IpAddressVerificationToken ipAddress */
        ipAddress?: (string|null);

        /** IpAddressVerificationToken locale */
        locale?: (string|null);

        /** IpAddressVerificationToken expiration */
        expiration?: (number|Long|null);

        /** IpAddressVerificationToken enterpriseId */
        enterpriseId?: (number|null);
    }

    /** Represents an IpAddressVerificationToken. */
    class IpAddressVerificationToken implements IIpAddressVerificationToken {

        /**
         * Constructs a new IpAddressVerificationToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IIpAddressVerificationToken);

        /** IpAddressVerificationToken userId. */
        public userId: number;

        /** IpAddressVerificationToken email. */
        public email: string;

        /** IpAddressVerificationToken ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /** IpAddressVerificationToken ipAddress. */
        public ipAddress: string;

        /** IpAddressVerificationToken locale. */
        public locale: string;

        /** IpAddressVerificationToken expiration. */
        public expiration: (number|Long);

        /** IpAddressVerificationToken enterpriseId. */
        public enterpriseId: number;

        /**
         * Creates a new IpAddressVerificationToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IpAddressVerificationToken instance
         */
        public static create(properties?: Tokens.IIpAddressVerificationToken): Tokens.IpAddressVerificationToken;

        /**
         * Encodes the specified IpAddressVerificationToken message. Does not implicitly {@link Tokens.IpAddressVerificationToken.verify|verify} messages.
         * @param message IpAddressVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IIpAddressVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IpAddressVerificationToken message, length delimited. Does not implicitly {@link Tokens.IpAddressVerificationToken.verify|verify} messages.
         * @param message IpAddressVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IIpAddressVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IpAddressVerificationToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IpAddressVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.IpAddressVerificationToken;

        /**
         * Decodes an IpAddressVerificationToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IpAddressVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.IpAddressVerificationToken;

        /**
         * Verifies an IpAddressVerificationToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IpAddressVerificationToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IpAddressVerificationToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.IpAddressVerificationToken;

        /**
         * Creates a plain object from an IpAddressVerificationToken message. Also converts values to other types if specified.
         * @param message IpAddressVerificationToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.IpAddressVerificationToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IpAddressVerificationToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterprisePersonalAccountToken. */
    interface IEnterprisePersonalAccountToken {

        /** EnterprisePersonalAccountToken enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** EnterprisePersonalAccountToken email */
        email?: (string|null);

        /** EnterprisePersonalAccountToken locale */
        locale?: (string|null);

        /** EnterprisePersonalAccountToken duration */
        duration?: (number|Long|null);

        /** EnterprisePersonalAccountToken referralName */
        referralName?: (string|null);

        /** EnterprisePersonalAccountToken expiration */
        expiration?: (number|Long|null);
    }

    /** Represents an EnterprisePersonalAccountToken. */
    class EnterprisePersonalAccountToken implements IEnterprisePersonalAccountToken {

        /**
         * Constructs a new EnterprisePersonalAccountToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IEnterprisePersonalAccountToken);

        /** EnterprisePersonalAccountToken enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** EnterprisePersonalAccountToken email. */
        public email: string;

        /** EnterprisePersonalAccountToken locale. */
        public locale: string;

        /** EnterprisePersonalAccountToken duration. */
        public duration: (number|Long);

        /** EnterprisePersonalAccountToken referralName. */
        public referralName: string;

        /** EnterprisePersonalAccountToken expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new EnterprisePersonalAccountToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterprisePersonalAccountToken instance
         */
        public static create(properties?: Tokens.IEnterprisePersonalAccountToken): Tokens.EnterprisePersonalAccountToken;

        /**
         * Encodes the specified EnterprisePersonalAccountToken message. Does not implicitly {@link Tokens.EnterprisePersonalAccountToken.verify|verify} messages.
         * @param message EnterprisePersonalAccountToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IEnterprisePersonalAccountToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterprisePersonalAccountToken message, length delimited. Does not implicitly {@link Tokens.EnterprisePersonalAccountToken.verify|verify} messages.
         * @param message EnterprisePersonalAccountToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IEnterprisePersonalAccountToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterprisePersonalAccountToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterprisePersonalAccountToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.EnterprisePersonalAccountToken;

        /**
         * Decodes an EnterprisePersonalAccountToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterprisePersonalAccountToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.EnterprisePersonalAccountToken;

        /**
         * Verifies an EnterprisePersonalAccountToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterprisePersonalAccountToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterprisePersonalAccountToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.EnterprisePersonalAccountToken;

        /**
         * Creates a plain object from an EnterprisePersonalAccountToken message. Also converts values to other types if specified.
         * @param message EnterprisePersonalAccountToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.EnterprisePersonalAccountToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterprisePersonalAccountToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UsernameVerificationToken. */
    interface IUsernameVerificationToken {

        /** UsernameVerificationToken username */
        username?: (string|null);

        /** UsernameVerificationToken accountUid */
        accountUid?: (Uint8Array|null);

        /** UsernameVerificationToken locale */
        locale?: (string|null);

        /** UsernameVerificationToken expiration */
        expiration?: (number|Long|null);
    }

    /** Represents a UsernameVerificationToken. */
    class UsernameVerificationToken implements IUsernameVerificationToken {

        /**
         * Constructs a new UsernameVerificationToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IUsernameVerificationToken);

        /** UsernameVerificationToken username. */
        public username: string;

        /** UsernameVerificationToken accountUid. */
        public accountUid: Uint8Array;

        /** UsernameVerificationToken locale. */
        public locale: string;

        /** UsernameVerificationToken expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new UsernameVerificationToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsernameVerificationToken instance
         */
        public static create(properties?: Tokens.IUsernameVerificationToken): Tokens.UsernameVerificationToken;

        /**
         * Encodes the specified UsernameVerificationToken message. Does not implicitly {@link Tokens.UsernameVerificationToken.verify|verify} messages.
         * @param message UsernameVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IUsernameVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UsernameVerificationToken message, length delimited. Does not implicitly {@link Tokens.UsernameVerificationToken.verify|verify} messages.
         * @param message UsernameVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IUsernameVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UsernameVerificationToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UsernameVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.UsernameVerificationToken;

        /**
         * Decodes a UsernameVerificationToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UsernameVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.UsernameVerificationToken;

        /**
         * Verifies a UsernameVerificationToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsernameVerificationToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsernameVerificationToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.UsernameVerificationToken;

        /**
         * Creates a plain object from a UsernameVerificationToken message. Also converts values to other types if specified.
         * @param message UsernameVerificationToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.UsernameVerificationToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsernameVerificationToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceVerificationToken. */
    interface IDeviceVerificationToken {

        /** DeviceVerificationToken encryptedDeviceToken */
        encryptedDeviceToken?: (Uint8Array|null);

        /** DeviceVerificationToken username */
        username?: (string|null);

        /** DeviceVerificationToken accountUid */
        accountUid?: (Uint8Array|null);

        /** DeviceVerificationToken deviceName */
        deviceName?: (string|null);

        /** DeviceVerificationToken devicePublicKey */
        devicePublicKey?: (Uint8Array|null);

        /** DeviceVerificationToken clientVersion */
        clientVersion?: (string|null);

        /** DeviceVerificationToken locale */
        locale?: (string|null);

        /** DeviceVerificationToken expiration */
        expiration?: (number|Long|null);
    }

    /** Represents a DeviceVerificationToken. */
    class DeviceVerificationToken implements IDeviceVerificationToken {

        /**
         * Constructs a new DeviceVerificationToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IDeviceVerificationToken);

        /** DeviceVerificationToken encryptedDeviceToken. */
        public encryptedDeviceToken: Uint8Array;

        /** DeviceVerificationToken username. */
        public username: string;

        /** DeviceVerificationToken accountUid. */
        public accountUid: Uint8Array;

        /** DeviceVerificationToken deviceName. */
        public deviceName: string;

        /** DeviceVerificationToken devicePublicKey. */
        public devicePublicKey: Uint8Array;

        /** DeviceVerificationToken clientVersion. */
        public clientVersion: string;

        /** DeviceVerificationToken locale. */
        public locale: string;

        /** DeviceVerificationToken expiration. */
        public expiration: (number|Long);

        /**
         * Creates a new DeviceVerificationToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceVerificationToken instance
         */
        public static create(properties?: Tokens.IDeviceVerificationToken): Tokens.DeviceVerificationToken;

        /**
         * Encodes the specified DeviceVerificationToken message. Does not implicitly {@link Tokens.DeviceVerificationToken.verify|verify} messages.
         * @param message DeviceVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IDeviceVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceVerificationToken message, length delimited. Does not implicitly {@link Tokens.DeviceVerificationToken.verify|verify} messages.
         * @param message DeviceVerificationToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IDeviceVerificationToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceVerificationToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.DeviceVerificationToken;

        /**
         * Decodes a DeviceVerificationToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceVerificationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.DeviceVerificationToken;

        /**
         * Verifies a DeviceVerificationToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceVerificationToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceVerificationToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.DeviceVerificationToken;

        /**
         * Creates a plain object from a DeviceVerificationToken message. Also converts values to other types if specified.
         * @param message DeviceVerificationToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.DeviceVerificationToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceVerificationToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ProcessTokenType enum. */
    enum ProcessTokenType {
        CHANGE_EMAIL = 0,
        EMAIL_VERIFICATION = 1,
        IP_ADDRESS_VERIFICATION = 2,
        USERNAME_VERIFICATION = 3,
        DEVICE_VERIFICATION = 4
    }

    /** Properties of a ProcessToken. */
    interface IProcessToken {

        /** ProcessToken processTokenType */
        processTokenType?: (Tokens.ProcessTokenType|null);

        /** ProcessToken payload */
        payload?: (Uint8Array|null);

        /** ProcessToken expiration */
        expiration?: (number|Long|null);

        /** ProcessToken supportedLanguage */
        supportedLanguage?: (Authentication.SupportedLanguage|null);
    }

    /** Represents a ProcessToken. */
    class ProcessToken implements IProcessToken {

        /**
         * Constructs a new ProcessToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: Tokens.IProcessToken);

        /** ProcessToken processTokenType. */
        public processTokenType: Tokens.ProcessTokenType;

        /** ProcessToken payload. */
        public payload: Uint8Array;

        /** ProcessToken expiration. */
        public expiration: (number|Long);

        /** ProcessToken supportedLanguage. */
        public supportedLanguage: Authentication.SupportedLanguage;

        /**
         * Creates a new ProcessToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessToken instance
         */
        public static create(properties?: Tokens.IProcessToken): Tokens.ProcessToken;

        /**
         * Encodes the specified ProcessToken message. Does not implicitly {@link Tokens.ProcessToken.verify|verify} messages.
         * @param message ProcessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Tokens.IProcessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessToken message, length delimited. Does not implicitly {@link Tokens.ProcessToken.verify|verify} messages.
         * @param message ProcessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Tokens.IProcessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tokens.ProcessToken;

        /**
         * Decodes a ProcessToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tokens.ProcessToken;

        /**
         * Verifies a ProcessToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessToken
         */
        public static fromObject(object: { [k: string]: any }): Tokens.ProcessToken;

        /**
         * Creates a plain object from a ProcessToken message. Also converts values to other types if specified.
         * @param message ProcessToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Tokens.ProcessToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Enterprise. */
export namespace Enterprise {

    /** Properties of an EnterpriseKeyPairRequest. */
    interface IEnterpriseKeyPairRequest {

        /** EnterpriseKeyPairRequest enterprisePublicKey */
        enterprisePublicKey?: (Uint8Array|null);

        /** EnterpriseKeyPairRequest encryptedEnterprisePrivateKey */
        encryptedEnterprisePrivateKey?: (Uint8Array|null);
    }

    /** Represents an EnterpriseKeyPairRequest. */
    class EnterpriseKeyPairRequest implements IEnterpriseKeyPairRequest {

        /**
         * Constructs a new EnterpriseKeyPairRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IEnterpriseKeyPairRequest);

        /** EnterpriseKeyPairRequest enterprisePublicKey. */
        public enterprisePublicKey: Uint8Array;

        /** EnterpriseKeyPairRequest encryptedEnterprisePrivateKey. */
        public encryptedEnterprisePrivateKey: Uint8Array;

        /**
         * Creates a new EnterpriseKeyPairRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterpriseKeyPairRequest instance
         */
        public static create(properties?: Enterprise.IEnterpriseKeyPairRequest): Enterprise.EnterpriseKeyPairRequest;

        /**
         * Encodes the specified EnterpriseKeyPairRequest message. Does not implicitly {@link Enterprise.EnterpriseKeyPairRequest.verify|verify} messages.
         * @param message EnterpriseKeyPairRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IEnterpriseKeyPairRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterpriseKeyPairRequest message, length delimited. Does not implicitly {@link Enterprise.EnterpriseKeyPairRequest.verify|verify} messages.
         * @param message EnterpriseKeyPairRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IEnterpriseKeyPairRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterpriseKeyPairRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterpriseKeyPairRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.EnterpriseKeyPairRequest;

        /**
         * Decodes an EnterpriseKeyPairRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterpriseKeyPairRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.EnterpriseKeyPairRequest;

        /**
         * Verifies an EnterpriseKeyPairRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterpriseKeyPairRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseKeyPairRequest
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.EnterpriseKeyPairRequest;

        /**
         * Creates a plain object from an EnterpriseKeyPairRequest message. Also converts values to other types if specified.
         * @param message EnterpriseKeyPairRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.EnterpriseKeyPairRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseKeyPairRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTeamMemberRequest. */
    interface IGetTeamMemberRequest {

        /** GetTeamMemberRequest teamUid */
        teamUid?: (Uint8Array|null);
    }

    /** Represents a GetTeamMemberRequest. */
    class GetTeamMemberRequest implements IGetTeamMemberRequest {

        /**
         * Constructs a new GetTeamMemberRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IGetTeamMemberRequest);

        /** GetTeamMemberRequest teamUid. */
        public teamUid: Uint8Array;

        /**
         * Creates a new GetTeamMemberRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTeamMemberRequest instance
         */
        public static create(properties?: Enterprise.IGetTeamMemberRequest): Enterprise.GetTeamMemberRequest;

        /**
         * Encodes the specified GetTeamMemberRequest message. Does not implicitly {@link Enterprise.GetTeamMemberRequest.verify|verify} messages.
         * @param message GetTeamMemberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IGetTeamMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTeamMemberRequest message, length delimited. Does not implicitly {@link Enterprise.GetTeamMemberRequest.verify|verify} messages.
         * @param message GetTeamMemberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IGetTeamMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTeamMemberRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTeamMemberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.GetTeamMemberRequest;

        /**
         * Decodes a GetTeamMemberRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTeamMemberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.GetTeamMemberRequest;

        /**
         * Verifies a GetTeamMemberRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTeamMemberRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTeamMemberRequest
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.GetTeamMemberRequest;

        /**
         * Creates a plain object from a GetTeamMemberRequest message. Also converts values to other types if specified.
         * @param message GetTeamMemberRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.GetTeamMemberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTeamMemberRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseUser. */
    interface IEnterpriseUser {

        /** EnterpriseUser enterpriseUserId */
        enterpriseUserId?: (number|Long|null);

        /** EnterpriseUser email */
        email?: (string|null);

        /** EnterpriseUser enterpriseUsername */
        enterpriseUsername?: (string|null);
    }

    /** Represents an EnterpriseUser. */
    class EnterpriseUser implements IEnterpriseUser {

        /**
         * Constructs a new EnterpriseUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IEnterpriseUser);

        /** EnterpriseUser enterpriseUserId. */
        public enterpriseUserId: (number|Long);

        /** EnterpriseUser email. */
        public email: string;

        /** EnterpriseUser enterpriseUsername. */
        public enterpriseUsername: string;

        /**
         * Creates a new EnterpriseUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterpriseUser instance
         */
        public static create(properties?: Enterprise.IEnterpriseUser): Enterprise.EnterpriseUser;

        /**
         * Encodes the specified EnterpriseUser message. Does not implicitly {@link Enterprise.EnterpriseUser.verify|verify} messages.
         * @param message EnterpriseUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IEnterpriseUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterpriseUser message, length delimited. Does not implicitly {@link Enterprise.EnterpriseUser.verify|verify} messages.
         * @param message EnterpriseUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IEnterpriseUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterpriseUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterpriseUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.EnterpriseUser;

        /**
         * Decodes an EnterpriseUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterpriseUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.EnterpriseUser;

        /**
         * Verifies an EnterpriseUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterpriseUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseUser
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.EnterpriseUser;

        /**
         * Creates a plain object from an EnterpriseUser message. Also converts values to other types if specified.
         * @param message EnterpriseUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.EnterpriseUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTeamMemberResponse. */
    interface IGetTeamMemberResponse {

        /** GetTeamMemberResponse enterpriseUser */
        enterpriseUser?: (Enterprise.IEnterpriseUser[]|null);
    }

    /** Represents a GetTeamMemberResponse. */
    class GetTeamMemberResponse implements IGetTeamMemberResponse {

        /**
         * Constructs a new GetTeamMemberResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IGetTeamMemberResponse);

        /** GetTeamMemberResponse enterpriseUser. */
        public enterpriseUser: Enterprise.IEnterpriseUser[];

        /**
         * Creates a new GetTeamMemberResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTeamMemberResponse instance
         */
        public static create(properties?: Enterprise.IGetTeamMemberResponse): Enterprise.GetTeamMemberResponse;

        /**
         * Encodes the specified GetTeamMemberResponse message. Does not implicitly {@link Enterprise.GetTeamMemberResponse.verify|verify} messages.
         * @param message GetTeamMemberResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IGetTeamMemberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTeamMemberResponse message, length delimited. Does not implicitly {@link Enterprise.GetTeamMemberResponse.verify|verify} messages.
         * @param message GetTeamMemberResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IGetTeamMemberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTeamMemberResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTeamMemberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.GetTeamMemberResponse;

        /**
         * Decodes a GetTeamMemberResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTeamMemberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.GetTeamMemberResponse;

        /**
         * Verifies a GetTeamMemberResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTeamMemberResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTeamMemberResponse
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.GetTeamMemberResponse;

        /**
         * Creates a plain object from a GetTeamMemberResponse message. Also converts values to other types if specified.
         * @param message GetTeamMemberResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.GetTeamMemberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTeamMemberResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseUserIds. */
    interface IEnterpriseUserIds {

        /** EnterpriseUserIds enterpriseUserId */
        enterpriseUserId?: ((number|Long)[]|null);
    }

    /** Represents an EnterpriseUserIds. */
    class EnterpriseUserIds implements IEnterpriseUserIds {

        /**
         * Constructs a new EnterpriseUserIds.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IEnterpriseUserIds);

        /** EnterpriseUserIds enterpriseUserId. */
        public enterpriseUserId: (number|Long)[];

        /**
         * Creates a new EnterpriseUserIds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterpriseUserIds instance
         */
        public static create(properties?: Enterprise.IEnterpriseUserIds): Enterprise.EnterpriseUserIds;

        /**
         * Encodes the specified EnterpriseUserIds message. Does not implicitly {@link Enterprise.EnterpriseUserIds.verify|verify} messages.
         * @param message EnterpriseUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IEnterpriseUserIds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterpriseUserIds message, length delimited. Does not implicitly {@link Enterprise.EnterpriseUserIds.verify|verify} messages.
         * @param message EnterpriseUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IEnterpriseUserIds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterpriseUserIds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterpriseUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.EnterpriseUserIds;

        /**
         * Decodes an EnterpriseUserIds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterpriseUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.EnterpriseUserIds;

        /**
         * Verifies an EnterpriseUserIds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterpriseUserIds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseUserIds
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.EnterpriseUserIds;

        /**
         * Creates a plain object from an EnterpriseUserIds message. Also converts values to other types if specified.
         * @param message EnterpriseUserIds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.EnterpriseUserIds, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseUserIds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterprisePersonalAccount. */
    interface IEnterprisePersonalAccount {

        /** EnterprisePersonalAccount email */
        email?: (string|null);

        /** EnterprisePersonalAccount OBSOLETE_FIELD */
        OBSOLETE_FIELD?: (Uint8Array|null);
    }

    /** Represents an EnterprisePersonalAccount. */
    class EnterprisePersonalAccount implements IEnterprisePersonalAccount {

        /**
         * Constructs a new EnterprisePersonalAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IEnterprisePersonalAccount);

        /** EnterprisePersonalAccount email. */
        public email: string;

        /** EnterprisePersonalAccount OBSOLETE_FIELD. */
        public OBSOLETE_FIELD: Uint8Array;

        /**
         * Creates a new EnterprisePersonalAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterprisePersonalAccount instance
         */
        public static create(properties?: Enterprise.IEnterprisePersonalAccount): Enterprise.EnterprisePersonalAccount;

        /**
         * Encodes the specified EnterprisePersonalAccount message. Does not implicitly {@link Enterprise.EnterprisePersonalAccount.verify|verify} messages.
         * @param message EnterprisePersonalAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IEnterprisePersonalAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterprisePersonalAccount message, length delimited. Does not implicitly {@link Enterprise.EnterprisePersonalAccount.verify|verify} messages.
         * @param message EnterprisePersonalAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IEnterprisePersonalAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterprisePersonalAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterprisePersonalAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.EnterprisePersonalAccount;

        /**
         * Decodes an EnterprisePersonalAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterprisePersonalAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.EnterprisePersonalAccount;

        /**
         * Verifies an EnterprisePersonalAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterprisePersonalAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterprisePersonalAccount
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.EnterprisePersonalAccount;

        /**
         * Creates a plain object from an EnterprisePersonalAccount message. Also converts values to other types if specified.
         * @param message EnterprisePersonalAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.EnterprisePersonalAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterprisePersonalAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncryptedTeamKeyRequest. */
    interface IEncryptedTeamKeyRequest {

        /** EncryptedTeamKeyRequest teamUid */
        teamUid?: (Uint8Array|null);

        /** EncryptedTeamKeyRequest encryptedTeamKey */
        encryptedTeamKey?: (Uint8Array|null);
    }

    /** Represents an EncryptedTeamKeyRequest. */
    class EncryptedTeamKeyRequest implements IEncryptedTeamKeyRequest {

        /**
         * Constructs a new EncryptedTeamKeyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IEncryptedTeamKeyRequest);

        /** EncryptedTeamKeyRequest teamUid. */
        public teamUid: Uint8Array;

        /** EncryptedTeamKeyRequest encryptedTeamKey. */
        public encryptedTeamKey: Uint8Array;

        /**
         * Creates a new EncryptedTeamKeyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedTeamKeyRequest instance
         */
        public static create(properties?: Enterprise.IEncryptedTeamKeyRequest): Enterprise.EncryptedTeamKeyRequest;

        /**
         * Encodes the specified EncryptedTeamKeyRequest message. Does not implicitly {@link Enterprise.EncryptedTeamKeyRequest.verify|verify} messages.
         * @param message EncryptedTeamKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IEncryptedTeamKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedTeamKeyRequest message, length delimited. Does not implicitly {@link Enterprise.EncryptedTeamKeyRequest.verify|verify} messages.
         * @param message EncryptedTeamKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IEncryptedTeamKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedTeamKeyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedTeamKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.EncryptedTeamKeyRequest;

        /**
         * Decodes an EncryptedTeamKeyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedTeamKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.EncryptedTeamKeyRequest;

        /**
         * Verifies an EncryptedTeamKeyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedTeamKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedTeamKeyRequest
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.EncryptedTeamKeyRequest;

        /**
         * Creates a plain object from an EncryptedTeamKeyRequest message. Also converts values to other types if specified.
         * @param message EncryptedTeamKeyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.EncryptedTeamKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedTeamKeyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReEncryptedData. */
    interface IReEncryptedData {

        /** ReEncryptedData id */
        id?: (number|Long|null);

        /** ReEncryptedData data */
        data?: (string|null);
    }

    /** Represents a ReEncryptedData. */
    class ReEncryptedData implements IReEncryptedData {

        /**
         * Constructs a new ReEncryptedData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IReEncryptedData);

        /** ReEncryptedData id. */
        public id: (number|Long);

        /** ReEncryptedData data. */
        public data: string;

        /**
         * Creates a new ReEncryptedData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReEncryptedData instance
         */
        public static create(properties?: Enterprise.IReEncryptedData): Enterprise.ReEncryptedData;

        /**
         * Encodes the specified ReEncryptedData message. Does not implicitly {@link Enterprise.ReEncryptedData.verify|verify} messages.
         * @param message ReEncryptedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IReEncryptedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReEncryptedData message, length delimited. Does not implicitly {@link Enterprise.ReEncryptedData.verify|verify} messages.
         * @param message ReEncryptedData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IReEncryptedData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReEncryptedData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReEncryptedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.ReEncryptedData;

        /**
         * Decodes a ReEncryptedData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReEncryptedData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.ReEncryptedData;

        /**
         * Verifies a ReEncryptedData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReEncryptedData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReEncryptedData
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.ReEncryptedData;

        /**
         * Creates a plain object from a ReEncryptedData message. Also converts values to other types if specified.
         * @param message ReEncryptedData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.ReEncryptedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReEncryptedData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReEncryptedRoleKey. */
    interface IReEncryptedRoleKey {

        /** ReEncryptedRoleKey roleId */
        roleId?: (number|Long|null);

        /** ReEncryptedRoleKey encryptedRoleKey */
        encryptedRoleKey?: (Uint8Array|null);
    }

    /** Represents a ReEncryptedRoleKey. */
    class ReEncryptedRoleKey implements IReEncryptedRoleKey {

        /**
         * Constructs a new ReEncryptedRoleKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IReEncryptedRoleKey);

        /** ReEncryptedRoleKey roleId. */
        public roleId: (number|Long);

        /** ReEncryptedRoleKey encryptedRoleKey. */
        public encryptedRoleKey: Uint8Array;

        /**
         * Creates a new ReEncryptedRoleKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReEncryptedRoleKey instance
         */
        public static create(properties?: Enterprise.IReEncryptedRoleKey): Enterprise.ReEncryptedRoleKey;

        /**
         * Encodes the specified ReEncryptedRoleKey message. Does not implicitly {@link Enterprise.ReEncryptedRoleKey.verify|verify} messages.
         * @param message ReEncryptedRoleKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IReEncryptedRoleKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReEncryptedRoleKey message, length delimited. Does not implicitly {@link Enterprise.ReEncryptedRoleKey.verify|verify} messages.
         * @param message ReEncryptedRoleKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IReEncryptedRoleKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReEncryptedRoleKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReEncryptedRoleKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.ReEncryptedRoleKey;

        /**
         * Decodes a ReEncryptedRoleKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReEncryptedRoleKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.ReEncryptedRoleKey;

        /**
         * Verifies a ReEncryptedRoleKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReEncryptedRoleKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReEncryptedRoleKey
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.ReEncryptedRoleKey;

        /**
         * Creates a plain object from a ReEncryptedRoleKey message. Also converts values to other types if specified.
         * @param message ReEncryptedRoleKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.ReEncryptedRoleKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReEncryptedRoleKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeToManagedCompanyRequest. */
    interface INodeToManagedCompanyRequest {

        /** NodeToManagedCompanyRequest companyId */
        companyId?: (number|null);

        /** NodeToManagedCompanyRequest nodes */
        nodes?: (Enterprise.IReEncryptedData[]|null);

        /** NodeToManagedCompanyRequest roles */
        roles?: (Enterprise.IReEncryptedData[]|null);

        /** NodeToManagedCompanyRequest users */
        users?: (Enterprise.IReEncryptedData[]|null);

        /** NodeToManagedCompanyRequest roleKeys */
        roleKeys?: (Enterprise.IReEncryptedRoleKey[]|null);
    }

    /** Represents a NodeToManagedCompanyRequest. */
    class NodeToManagedCompanyRequest implements INodeToManagedCompanyRequest {

        /**
         * Constructs a new NodeToManagedCompanyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.INodeToManagedCompanyRequest);

        /** NodeToManagedCompanyRequest companyId. */
        public companyId: number;

        /** NodeToManagedCompanyRequest nodes. */
        public nodes: Enterprise.IReEncryptedData[];

        /** NodeToManagedCompanyRequest roles. */
        public roles: Enterprise.IReEncryptedData[];

        /** NodeToManagedCompanyRequest users. */
        public users: Enterprise.IReEncryptedData[];

        /** NodeToManagedCompanyRequest roleKeys. */
        public roleKeys: Enterprise.IReEncryptedRoleKey[];

        /**
         * Creates a new NodeToManagedCompanyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeToManagedCompanyRequest instance
         */
        public static create(properties?: Enterprise.INodeToManagedCompanyRequest): Enterprise.NodeToManagedCompanyRequest;

        /**
         * Encodes the specified NodeToManagedCompanyRequest message. Does not implicitly {@link Enterprise.NodeToManagedCompanyRequest.verify|verify} messages.
         * @param message NodeToManagedCompanyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.INodeToManagedCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeToManagedCompanyRequest message, length delimited. Does not implicitly {@link Enterprise.NodeToManagedCompanyRequest.verify|verify} messages.
         * @param message NodeToManagedCompanyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.INodeToManagedCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeToManagedCompanyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeToManagedCompanyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.NodeToManagedCompanyRequest;

        /**
         * Decodes a NodeToManagedCompanyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeToManagedCompanyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.NodeToManagedCompanyRequest;

        /**
         * Verifies a NodeToManagedCompanyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeToManagedCompanyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeToManagedCompanyRequest
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.NodeToManagedCompanyRequest;

        /**
         * Creates a plain object from a NodeToManagedCompanyRequest message. Also converts values to other types if specified.
         * @param message NodeToManagedCompanyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.NodeToManagedCompanyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeToManagedCompanyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoleTeam. */
    interface IRoleTeam {

        /** RoleTeam roleId */
        roleId?: (number|Long|null);

        /** RoleTeam teamUid */
        teamUid?: (Uint8Array|null);
    }

    /** Represents a RoleTeam. */
    class RoleTeam implements IRoleTeam {

        /**
         * Constructs a new RoleTeam.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IRoleTeam);

        /** RoleTeam roleId. */
        public roleId: (number|Long);

        /** RoleTeam teamUid. */
        public teamUid: Uint8Array;

        /**
         * Creates a new RoleTeam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleTeam instance
         */
        public static create(properties?: Enterprise.IRoleTeam): Enterprise.RoleTeam;

        /**
         * Encodes the specified RoleTeam message. Does not implicitly {@link Enterprise.RoleTeam.verify|verify} messages.
         * @param message RoleTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IRoleTeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleTeam message, length delimited. Does not implicitly {@link Enterprise.RoleTeam.verify|verify} messages.
         * @param message RoleTeam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IRoleTeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleTeam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.RoleTeam;

        /**
         * Decodes a RoleTeam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.RoleTeam;

        /**
         * Verifies a RoleTeam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleTeam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleTeam
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.RoleTeam;

        /**
         * Creates a plain object from a RoleTeam message. Also converts values to other types if specified.
         * @param message RoleTeam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.RoleTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleTeam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoleTeams. */
    interface IRoleTeams {

        /** RoleTeams roleTeam */
        roleTeam?: (Enterprise.IRoleTeam[]|null);
    }

    /** Represents a RoleTeams. */
    class RoleTeams implements IRoleTeams {

        /**
         * Constructs a new RoleTeams.
         * @param [properties] Properties to set
         */
        constructor(properties?: Enterprise.IRoleTeams);

        /** RoleTeams roleTeam. */
        public roleTeam: Enterprise.IRoleTeam[];

        /**
         * Creates a new RoleTeams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleTeams instance
         */
        public static create(properties?: Enterprise.IRoleTeams): Enterprise.RoleTeams;

        /**
         * Encodes the specified RoleTeams message. Does not implicitly {@link Enterprise.RoleTeams.verify|verify} messages.
         * @param message RoleTeams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Enterprise.IRoleTeams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleTeams message, length delimited. Does not implicitly {@link Enterprise.RoleTeams.verify|verify} messages.
         * @param message RoleTeams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Enterprise.IRoleTeams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleTeams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleTeams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Enterprise.RoleTeams;

        /**
         * Decodes a RoleTeams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleTeams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Enterprise.RoleTeams;

        /**
         * Verifies a RoleTeams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleTeams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleTeams
         */
        public static fromObject(object: { [k: string]: any }): Enterprise.RoleTeams;

        /**
         * Creates a plain object from a RoleTeams message. Also converts values to other types if specified.
         * @param message RoleTeams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Enterprise.RoleTeams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleTeams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ExternalService. */
export namespace ExternalService {

    /** Properties of a SaveSettingsRequest. */
    interface ISaveSettingsRequest {

        /** SaveSettingsRequest enterpriseId */
        enterpriseId?: (number|null);

        /** SaveSettingsRequest certificate */
        certificate?: (Uint8Array|null);

        /** SaveSettingsRequest password */
        password?: (string|null);

        /** SaveSettingsRequest directoryUrl */
        directoryUrl?: (string|null);
    }

    /** Represents a SaveSettingsRequest. */
    class SaveSettingsRequest implements ISaveSettingsRequest {

        /**
         * Constructs a new SaveSettingsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExternalService.ISaveSettingsRequest);

        /** SaveSettingsRequest enterpriseId. */
        public enterpriseId: number;

        /** SaveSettingsRequest certificate. */
        public certificate: Uint8Array;

        /** SaveSettingsRequest password. */
        public password: string;

        /** SaveSettingsRequest directoryUrl. */
        public directoryUrl: string;

        /**
         * Creates a new SaveSettingsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveSettingsRequest instance
         */
        public static create(properties?: ExternalService.ISaveSettingsRequest): ExternalService.SaveSettingsRequest;

        /**
         * Encodes the specified SaveSettingsRequest message. Does not implicitly {@link ExternalService.SaveSettingsRequest.verify|verify} messages.
         * @param message SaveSettingsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExternalService.ISaveSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveSettingsRequest message, length delimited. Does not implicitly {@link ExternalService.SaveSettingsRequest.verify|verify} messages.
         * @param message SaveSettingsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExternalService.ISaveSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveSettingsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveSettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalService.SaveSettingsRequest;

        /**
         * Decodes a SaveSettingsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveSettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalService.SaveSettingsRequest;

        /**
         * Verifies a SaveSettingsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveSettingsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveSettingsRequest
         */
        public static fromObject(object: { [k: string]: any }): ExternalService.SaveSettingsRequest;

        /**
         * Creates a plain object from a SaveSettingsRequest message. Also converts values to other types if specified.
         * @param message SaveSettingsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ExternalService.SaveSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveSettingsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUsersRequest. */
    interface IGetUsersRequest {

        /** GetUsersRequest field */
        field?: (string|null);

        /** GetUsersRequest value */
        value?: (string|null);
    }

    /** Represents a GetUsersRequest. */
    class GetUsersRequest implements IGetUsersRequest {

        /**
         * Constructs a new GetUsersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExternalService.IGetUsersRequest);

        /** GetUsersRequest field. */
        public field: string;

        /** GetUsersRequest value. */
        public value: string;

        /**
         * Creates a new GetUsersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersRequest instance
         */
        public static create(properties?: ExternalService.IGetUsersRequest): ExternalService.GetUsersRequest;

        /**
         * Encodes the specified GetUsersRequest message. Does not implicitly {@link ExternalService.GetUsersRequest.verify|verify} messages.
         * @param message GetUsersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExternalService.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link ExternalService.GetUsersRequest.verify|verify} messages.
         * @param message GetUsersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExternalService.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalService.GetUsersRequest;

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalService.GetUsersRequest;

        /**
         * Verifies a GetUsersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersRequest
         */
        public static fromObject(object: { [k: string]: any }): ExternalService.GetUsersRequest;

        /**
         * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
         * @param message GetUsersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ExternalService.GetUsersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** UserStatus enum. */
    enum UserStatus {
        NEW = 0,
        INVITED = 1,
        ACTIVE = 2,
        TAKEN = 3
    }

    /** LockStatus enum. */
    enum LockStatus {
        UNLOCKED = 0,
        LOCKED = 1,
        DISABLED = 2
    }

    /** Properties of a User. */
    interface IUser {

        /** User email */
        email?: (string|null);

        /** User name */
        name?: (string|null);

        /** User status */
        status?: (ExternalService.UserStatus|null);

        /** User lockStatus */
        lockStatus?: (ExternalService.LockStatus|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExternalService.IUser);

        /** User email. */
        public email: string;

        /** User name. */
        public name: string;

        /** User status. */
        public status: ExternalService.UserStatus;

        /** User lockStatus. */
        public lockStatus: ExternalService.LockStatus;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: ExternalService.IUser): ExternalService.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link ExternalService.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExternalService.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link ExternalService.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExternalService.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalService.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalService.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): ExternalService.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ExternalService.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUsersResponse. */
    interface IGetUsersResponse {

        /** GetUsersResponse users */
        users?: (ExternalService.IUser[]|null);
    }

    /** Represents a GetUsersResponse. */
    class GetUsersResponse implements IGetUsersResponse {

        /**
         * Constructs a new GetUsersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExternalService.IGetUsersResponse);

        /** GetUsersResponse users. */
        public users: ExternalService.IUser[];

        /**
         * Creates a new GetUsersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersResponse instance
         */
        public static create(properties?: ExternalService.IGetUsersResponse): ExternalService.GetUsersResponse;

        /**
         * Encodes the specified GetUsersResponse message. Does not implicitly {@link ExternalService.GetUsersResponse.verify|verify} messages.
         * @param message GetUsersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExternalService.IGetUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersResponse message, length delimited. Does not implicitly {@link ExternalService.GetUsersResponse.verify|verify} messages.
         * @param message GetUsersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExternalService.IGetUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalService.GetUsersResponse;

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalService.GetUsersResponse;

        /**
         * Verifies a GetUsersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersResponse
         */
        public static fromObject(object: { [k: string]: any }): ExternalService.GetUsersResponse;

        /**
         * Creates a plain object from a GetUsersResponse message. Also converts values to other types if specified.
         * @param message GetUsersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ExternalService.GetUsersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Folder. */
export namespace Folder {

    /** RecordType enum. */
    enum RecordType {
        password = 0
    }

    /** FolderType enum. */
    enum FolderType {
        default_folder = 0,
        user_folder = 1,
        shared_folder = 2,
        shared_folder_folder = 3
    }

    /** EncryptedKeyType enum. */
    enum EncryptedKeyType {
        no_key = 0,
        encrypted_by_data_key = 1,
        encrypted_by_public_key = 2
    }

    /** Properties of an EncryptedDataKey. */
    interface IEncryptedDataKey {

        /** EncryptedDataKey encryptedKey */
        encryptedKey?: (Uint8Array|null);

        /** EncryptedDataKey encryptedKeyType */
        encryptedKeyType?: (Folder.EncryptedKeyType|null);
    }

    /** Represents an EncryptedDataKey. */
    class EncryptedDataKey implements IEncryptedDataKey {

        /**
         * Constructs a new EncryptedDataKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IEncryptedDataKey);

        /** EncryptedDataKey encryptedKey. */
        public encryptedKey: Uint8Array;

        /** EncryptedDataKey encryptedKeyType. */
        public encryptedKeyType: Folder.EncryptedKeyType;

        /**
         * Creates a new EncryptedDataKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedDataKey instance
         */
        public static create(properties?: Folder.IEncryptedDataKey): Folder.EncryptedDataKey;

        /**
         * Encodes the specified EncryptedDataKey message. Does not implicitly {@link Folder.EncryptedDataKey.verify|verify} messages.
         * @param message EncryptedDataKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IEncryptedDataKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedDataKey message, length delimited. Does not implicitly {@link Folder.EncryptedDataKey.verify|verify} messages.
         * @param message EncryptedDataKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IEncryptedDataKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedDataKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedDataKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.EncryptedDataKey;

        /**
         * Decodes an EncryptedDataKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedDataKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.EncryptedDataKey;

        /**
         * Verifies an EncryptedDataKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedDataKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedDataKey
         */
        public static fromObject(object: { [k: string]: any }): Folder.EncryptedDataKey;

        /**
         * Creates a plain object from an EncryptedDataKey message. Also converts values to other types if specified.
         * @param message EncryptedDataKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.EncryptedDataKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedDataKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderRecordData. */
    interface ISharedFolderRecordData {

        /** SharedFolderRecordData folderUid */
        folderUid?: (Uint8Array|null);

        /** SharedFolderRecordData recordUid */
        recordUid?: (Uint8Array|null);

        /** SharedFolderRecordData userId */
        userId?: (number|null);

        /** SharedFolderRecordData encryptedDataKey */
        encryptedDataKey?: (Folder.IEncryptedDataKey[]|null);
    }

    /** Represents a SharedFolderRecordData. */
    class SharedFolderRecordData implements ISharedFolderRecordData {

        /**
         * Constructs a new SharedFolderRecordData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderRecordData);

        /** SharedFolderRecordData folderUid. */
        public folderUid: Uint8Array;

        /** SharedFolderRecordData recordUid. */
        public recordUid: Uint8Array;

        /** SharedFolderRecordData userId. */
        public userId: number;

        /** SharedFolderRecordData encryptedDataKey. */
        public encryptedDataKey: Folder.IEncryptedDataKey[];

        /**
         * Creates a new SharedFolderRecordData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderRecordData instance
         */
        public static create(properties?: Folder.ISharedFolderRecordData): Folder.SharedFolderRecordData;

        /**
         * Encodes the specified SharedFolderRecordData message. Does not implicitly {@link Folder.SharedFolderRecordData.verify|verify} messages.
         * @param message SharedFolderRecordData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderRecordData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderRecordData message, length delimited. Does not implicitly {@link Folder.SharedFolderRecordData.verify|verify} messages.
         * @param message SharedFolderRecordData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderRecordData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderRecordData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderRecordData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderRecordData;

        /**
         * Decodes a SharedFolderRecordData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderRecordData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderRecordData;

        /**
         * Verifies a SharedFolderRecordData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderRecordData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderRecordData
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderRecordData;

        /**
         * Creates a plain object from a SharedFolderRecordData message. Also converts values to other types if specified.
         * @param message SharedFolderRecordData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderRecordData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderRecordData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderRecordDataList. */
    interface ISharedFolderRecordDataList {

        /** SharedFolderRecordDataList sharedFolderRecordData */
        sharedFolderRecordData?: (Folder.ISharedFolderRecordData[]|null);
    }

    /** Represents a SharedFolderRecordDataList. */
    class SharedFolderRecordDataList implements ISharedFolderRecordDataList {

        /**
         * Constructs a new SharedFolderRecordDataList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderRecordDataList);

        /** SharedFolderRecordDataList sharedFolderRecordData. */
        public sharedFolderRecordData: Folder.ISharedFolderRecordData[];

        /**
         * Creates a new SharedFolderRecordDataList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderRecordDataList instance
         */
        public static create(properties?: Folder.ISharedFolderRecordDataList): Folder.SharedFolderRecordDataList;

        /**
         * Encodes the specified SharedFolderRecordDataList message. Does not implicitly {@link Folder.SharedFolderRecordDataList.verify|verify} messages.
         * @param message SharedFolderRecordDataList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderRecordDataList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderRecordDataList message, length delimited. Does not implicitly {@link Folder.SharedFolderRecordDataList.verify|verify} messages.
         * @param message SharedFolderRecordDataList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderRecordDataList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderRecordDataList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderRecordDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderRecordDataList;

        /**
         * Decodes a SharedFolderRecordDataList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderRecordDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderRecordDataList;

        /**
         * Verifies a SharedFolderRecordDataList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderRecordDataList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderRecordDataList
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderRecordDataList;

        /**
         * Creates a plain object from a SharedFolderRecordDataList message. Also converts values to other types if specified.
         * @param message SharedFolderRecordDataList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderRecordDataList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderRecordDataList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderRecordFix. */
    interface ISharedFolderRecordFix {

        /** SharedFolderRecordFix folderUid */
        folderUid?: (Uint8Array|null);

        /** SharedFolderRecordFix recordUid */
        recordUid?: (Uint8Array|null);

        /** SharedFolderRecordFix encryptedRecordFolderKey */
        encryptedRecordFolderKey?: (Uint8Array|null);
    }

    /** Represents a SharedFolderRecordFix. */
    class SharedFolderRecordFix implements ISharedFolderRecordFix {

        /**
         * Constructs a new SharedFolderRecordFix.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderRecordFix);

        /** SharedFolderRecordFix folderUid. */
        public folderUid: Uint8Array;

        /** SharedFolderRecordFix recordUid. */
        public recordUid: Uint8Array;

        /** SharedFolderRecordFix encryptedRecordFolderKey. */
        public encryptedRecordFolderKey: Uint8Array;

        /**
         * Creates a new SharedFolderRecordFix instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderRecordFix instance
         */
        public static create(properties?: Folder.ISharedFolderRecordFix): Folder.SharedFolderRecordFix;

        /**
         * Encodes the specified SharedFolderRecordFix message. Does not implicitly {@link Folder.SharedFolderRecordFix.verify|verify} messages.
         * @param message SharedFolderRecordFix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderRecordFix, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderRecordFix message, length delimited. Does not implicitly {@link Folder.SharedFolderRecordFix.verify|verify} messages.
         * @param message SharedFolderRecordFix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderRecordFix, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderRecordFix message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderRecordFix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderRecordFix;

        /**
         * Decodes a SharedFolderRecordFix message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderRecordFix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderRecordFix;

        /**
         * Verifies a SharedFolderRecordFix message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderRecordFix message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderRecordFix
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderRecordFix;

        /**
         * Creates a plain object from a SharedFolderRecordFix message. Also converts values to other types if specified.
         * @param message SharedFolderRecordFix
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderRecordFix, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderRecordFix to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderRecordFixList. */
    interface ISharedFolderRecordFixList {

        /** SharedFolderRecordFixList sharedFolderRecordFix */
        sharedFolderRecordFix?: (Folder.ISharedFolderRecordFix[]|null);
    }

    /** Represents a SharedFolderRecordFixList. */
    class SharedFolderRecordFixList implements ISharedFolderRecordFixList {

        /**
         * Constructs a new SharedFolderRecordFixList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderRecordFixList);

        /** SharedFolderRecordFixList sharedFolderRecordFix. */
        public sharedFolderRecordFix: Folder.ISharedFolderRecordFix[];

        /**
         * Creates a new SharedFolderRecordFixList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderRecordFixList instance
         */
        public static create(properties?: Folder.ISharedFolderRecordFixList): Folder.SharedFolderRecordFixList;

        /**
         * Encodes the specified SharedFolderRecordFixList message. Does not implicitly {@link Folder.SharedFolderRecordFixList.verify|verify} messages.
         * @param message SharedFolderRecordFixList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderRecordFixList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderRecordFixList message, length delimited. Does not implicitly {@link Folder.SharedFolderRecordFixList.verify|verify} messages.
         * @param message SharedFolderRecordFixList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderRecordFixList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderRecordFixList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderRecordFixList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderRecordFixList;

        /**
         * Decodes a SharedFolderRecordFixList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderRecordFixList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderRecordFixList;

        /**
         * Verifies a SharedFolderRecordFixList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderRecordFixList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderRecordFixList
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderRecordFixList;

        /**
         * Creates a plain object from a SharedFolderRecordFixList message. Also converts values to other types if specified.
         * @param message SharedFolderRecordFixList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderRecordFixList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderRecordFixList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordRequest. */
    interface IRecordRequest {

        /** RecordRequest recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordRequest recordType */
        recordType?: (Folder.RecordType|null);

        /** RecordRequest recordData */
        recordData?: (Uint8Array|null);

        /** RecordRequest encryptedRecordKey */
        encryptedRecordKey?: (Uint8Array|null);

        /** RecordRequest folderType */
        folderType?: (Folder.FolderType|null);

        /** RecordRequest howLongAgo */
        howLongAgo?: (number|Long|null);

        /** RecordRequest folderUid */
        folderUid?: (Uint8Array|null);

        /** RecordRequest encryptedRecordFolderKey */
        encryptedRecordFolderKey?: (Uint8Array|null);

        /** RecordRequest extra */
        extra?: (Uint8Array|null);

        /** RecordRequest nonSharedData */
        nonSharedData?: (Uint8Array|null);

        /** RecordRequest fileIds */
        fileIds?: ((number|Long)[]|null);
    }

    /** Represents a RecordRequest. */
    class RecordRequest implements IRecordRequest {

        /**
         * Constructs a new RecordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IRecordRequest);

        /** RecordRequest recordUid. */
        public recordUid: Uint8Array;

        /** RecordRequest recordType. */
        public recordType: Folder.RecordType;

        /** RecordRequest recordData. */
        public recordData: Uint8Array;

        /** RecordRequest encryptedRecordKey. */
        public encryptedRecordKey: Uint8Array;

        /** RecordRequest folderType. */
        public folderType: Folder.FolderType;

        /** RecordRequest howLongAgo. */
        public howLongAgo: (number|Long);

        /** RecordRequest folderUid. */
        public folderUid: Uint8Array;

        /** RecordRequest encryptedRecordFolderKey. */
        public encryptedRecordFolderKey: Uint8Array;

        /** RecordRequest extra. */
        public extra: Uint8Array;

        /** RecordRequest nonSharedData. */
        public nonSharedData: Uint8Array;

        /** RecordRequest fileIds. */
        public fileIds: (number|Long)[];

        /**
         * Creates a new RecordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordRequest instance
         */
        public static create(properties?: Folder.IRecordRequest): Folder.RecordRequest;

        /**
         * Encodes the specified RecordRequest message. Does not implicitly {@link Folder.RecordRequest.verify|verify} messages.
         * @param message RecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordRequest message, length delimited. Does not implicitly {@link Folder.RecordRequest.verify|verify} messages.
         * @param message RecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.RecordRequest;

        /**
         * Decodes a RecordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.RecordRequest;

        /**
         * Verifies a RecordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordRequest
         */
        public static fromObject(object: { [k: string]: any }): Folder.RecordRequest;

        /**
         * Creates a plain object from a RecordRequest message. Also converts values to other types if specified.
         * @param message RecordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.RecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordResponse. */
    interface IRecordResponse {

        /** RecordResponse recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordResponse revision */
        revision?: (number|Long|null);

        /** RecordResponse status */
        status?: (string|null);
    }

    /** Represents a RecordResponse. */
    class RecordResponse implements IRecordResponse {

        /**
         * Constructs a new RecordResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IRecordResponse);

        /** RecordResponse recordUid. */
        public recordUid: Uint8Array;

        /** RecordResponse revision. */
        public revision: (number|Long);

        /** RecordResponse status. */
        public status: string;

        /**
         * Creates a new RecordResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordResponse instance
         */
        public static create(properties?: Folder.IRecordResponse): Folder.RecordResponse;

        /**
         * Encodes the specified RecordResponse message. Does not implicitly {@link Folder.RecordResponse.verify|verify} messages.
         * @param message RecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordResponse message, length delimited. Does not implicitly {@link Folder.RecordResponse.verify|verify} messages.
         * @param message RecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.RecordResponse;

        /**
         * Decodes a RecordResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.RecordResponse;

        /**
         * Verifies a RecordResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordResponse
         */
        public static fromObject(object: { [k: string]: any }): Folder.RecordResponse;

        /**
         * Creates a plain object from a RecordResponse message. Also converts values to other types if specified.
         * @param message RecordResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.RecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderFields. */
    interface ISharedFolderFields {

        /** SharedFolderFields encryptedFolderName */
        encryptedFolderName?: (Uint8Array|null);

        /** SharedFolderFields manageUsers */
        manageUsers?: (boolean|null);

        /** SharedFolderFields manageRecords */
        manageRecords?: (boolean|null);

        /** SharedFolderFields canEdit */
        canEdit?: (boolean|null);

        /** SharedFolderFields canShare */
        canShare?: (boolean|null);
    }

    /** Represents a SharedFolderFields. */
    class SharedFolderFields implements ISharedFolderFields {

        /**
         * Constructs a new SharedFolderFields.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderFields);

        /** SharedFolderFields encryptedFolderName. */
        public encryptedFolderName: Uint8Array;

        /** SharedFolderFields manageUsers. */
        public manageUsers: boolean;

        /** SharedFolderFields manageRecords. */
        public manageRecords: boolean;

        /** SharedFolderFields canEdit. */
        public canEdit: boolean;

        /** SharedFolderFields canShare. */
        public canShare: boolean;

        /**
         * Creates a new SharedFolderFields instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderFields instance
         */
        public static create(properties?: Folder.ISharedFolderFields): Folder.SharedFolderFields;

        /**
         * Encodes the specified SharedFolderFields message. Does not implicitly {@link Folder.SharedFolderFields.verify|verify} messages.
         * @param message SharedFolderFields message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderFields, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderFields message, length delimited. Does not implicitly {@link Folder.SharedFolderFields.verify|verify} messages.
         * @param message SharedFolderFields message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderFields, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderFields message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderFields
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderFields;

        /**
         * Decodes a SharedFolderFields message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderFields
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderFields;

        /**
         * Verifies a SharedFolderFields message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderFields message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderFields
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderFields;

        /**
         * Creates a plain object from a SharedFolderFields message. Also converts values to other types if specified.
         * @param message SharedFolderFields
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderFields, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderFields to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SharedFolderFolderFields. */
    interface ISharedFolderFolderFields {

        /** SharedFolderFolderFields sharedFolderUid */
        sharedFolderUid?: (Uint8Array|null);
    }

    /** Represents a SharedFolderFolderFields. */
    class SharedFolderFolderFields implements ISharedFolderFolderFields {

        /**
         * Constructs a new SharedFolderFolderFields.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.ISharedFolderFolderFields);

        /** SharedFolderFolderFields sharedFolderUid. */
        public sharedFolderUid: Uint8Array;

        /**
         * Creates a new SharedFolderFolderFields instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedFolderFolderFields instance
         */
        public static create(properties?: Folder.ISharedFolderFolderFields): Folder.SharedFolderFolderFields;

        /**
         * Encodes the specified SharedFolderFolderFields message. Does not implicitly {@link Folder.SharedFolderFolderFields.verify|verify} messages.
         * @param message SharedFolderFolderFields message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.ISharedFolderFolderFields, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedFolderFolderFields message, length delimited. Does not implicitly {@link Folder.SharedFolderFolderFields.verify|verify} messages.
         * @param message SharedFolderFolderFields message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.ISharedFolderFolderFields, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFolderFolderFields message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedFolderFolderFields
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.SharedFolderFolderFields;

        /**
         * Decodes a SharedFolderFolderFields message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedFolderFolderFields
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.SharedFolderFolderFields;

        /**
         * Verifies a SharedFolderFolderFields message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedFolderFolderFields message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedFolderFolderFields
         */
        public static fromObject(object: { [k: string]: any }): Folder.SharedFolderFolderFields;

        /**
         * Creates a plain object from a SharedFolderFolderFields message. Also converts values to other types if specified.
         * @param message SharedFolderFolderFields
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.SharedFolderFolderFields, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedFolderFolderFields to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FolderRequest. */
    interface IFolderRequest {

        /** FolderRequest folderUid */
        folderUid?: (Uint8Array|null);

        /** FolderRequest folderType */
        folderType?: (Folder.FolderType|null);

        /** FolderRequest parentFolderUid */
        parentFolderUid?: (Uint8Array|null);

        /** FolderRequest folderData */
        folderData?: (Uint8Array|null);

        /** FolderRequest encryptedFolderKey */
        encryptedFolderKey?: (Uint8Array|null);

        /** FolderRequest sharedFolderFields */
        sharedFolderFields?: (Folder.ISharedFolderFields|null);

        /** FolderRequest sharedFolderFolderFields */
        sharedFolderFolderFields?: (Folder.ISharedFolderFolderFields|null);
    }

    /** Represents a FolderRequest. */
    class FolderRequest implements IFolderRequest {

        /**
         * Constructs a new FolderRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IFolderRequest);

        /** FolderRequest folderUid. */
        public folderUid: Uint8Array;

        /** FolderRequest folderType. */
        public folderType: Folder.FolderType;

        /** FolderRequest parentFolderUid. */
        public parentFolderUid: Uint8Array;

        /** FolderRequest folderData. */
        public folderData: Uint8Array;

        /** FolderRequest encryptedFolderKey. */
        public encryptedFolderKey: Uint8Array;

        /** FolderRequest sharedFolderFields. */
        public sharedFolderFields?: (Folder.ISharedFolderFields|null);

        /** FolderRequest sharedFolderFolderFields. */
        public sharedFolderFolderFields?: (Folder.ISharedFolderFolderFields|null);

        /**
         * Creates a new FolderRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FolderRequest instance
         */
        public static create(properties?: Folder.IFolderRequest): Folder.FolderRequest;

        /**
         * Encodes the specified FolderRequest message. Does not implicitly {@link Folder.FolderRequest.verify|verify} messages.
         * @param message FolderRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IFolderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FolderRequest message, length delimited. Does not implicitly {@link Folder.FolderRequest.verify|verify} messages.
         * @param message FolderRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IFolderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FolderRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FolderRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.FolderRequest;

        /**
         * Decodes a FolderRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FolderRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.FolderRequest;

        /**
         * Verifies a FolderRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FolderRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FolderRequest
         */
        public static fromObject(object: { [k: string]: any }): Folder.FolderRequest;

        /**
         * Creates a plain object from a FolderRequest message. Also converts values to other types if specified.
         * @param message FolderRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.FolderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FolderRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FolderResponse. */
    interface IFolderResponse {

        /** FolderResponse folderUid */
        folderUid?: (Uint8Array|null);

        /** FolderResponse revision */
        revision?: (number|Long|null);

        /** FolderResponse status */
        status?: (string|null);
    }

    /** Represents a FolderResponse. */
    class FolderResponse implements IFolderResponse {

        /**
         * Constructs a new FolderResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IFolderResponse);

        /** FolderResponse folderUid. */
        public folderUid: Uint8Array;

        /** FolderResponse revision. */
        public revision: (number|Long);

        /** FolderResponse status. */
        public status: string;

        /**
         * Creates a new FolderResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FolderResponse instance
         */
        public static create(properties?: Folder.IFolderResponse): Folder.FolderResponse;

        /**
         * Encodes the specified FolderResponse message. Does not implicitly {@link Folder.FolderResponse.verify|verify} messages.
         * @param message FolderResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IFolderResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FolderResponse message, length delimited. Does not implicitly {@link Folder.FolderResponse.verify|verify} messages.
         * @param message FolderResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IFolderResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FolderResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FolderResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.FolderResponse;

        /**
         * Decodes a FolderResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FolderResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.FolderResponse;

        /**
         * Verifies a FolderResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FolderResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FolderResponse
         */
        public static fromObject(object: { [k: string]: any }): Folder.FolderResponse;

        /**
         * Creates a plain object from a FolderResponse message. Also converts values to other types if specified.
         * @param message FolderResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.FolderResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FolderResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ImportFolderRecordRequest. */
    interface IImportFolderRecordRequest {

        /** ImportFolderRecordRequest folderRequest */
        folderRequest?: (Folder.IFolderRequest[]|null);

        /** ImportFolderRecordRequest recordRequest */
        recordRequest?: (Folder.IRecordRequest[]|null);
    }

    /** Represents an ImportFolderRecordRequest. */
    class ImportFolderRecordRequest implements IImportFolderRecordRequest {

        /**
         * Constructs a new ImportFolderRecordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IImportFolderRecordRequest);

        /** ImportFolderRecordRequest folderRequest. */
        public folderRequest: Folder.IFolderRequest[];

        /** ImportFolderRecordRequest recordRequest. */
        public recordRequest: Folder.IRecordRequest[];

        /**
         * Creates a new ImportFolderRecordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImportFolderRecordRequest instance
         */
        public static create(properties?: Folder.IImportFolderRecordRequest): Folder.ImportFolderRecordRequest;

        /**
         * Encodes the specified ImportFolderRecordRequest message. Does not implicitly {@link Folder.ImportFolderRecordRequest.verify|verify} messages.
         * @param message ImportFolderRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IImportFolderRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportFolderRecordRequest message, length delimited. Does not implicitly {@link Folder.ImportFolderRecordRequest.verify|verify} messages.
         * @param message ImportFolderRecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IImportFolderRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportFolderRecordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImportFolderRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.ImportFolderRecordRequest;

        /**
         * Decodes an ImportFolderRecordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImportFolderRecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.ImportFolderRecordRequest;

        /**
         * Verifies an ImportFolderRecordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImportFolderRecordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImportFolderRecordRequest
         */
        public static fromObject(object: { [k: string]: any }): Folder.ImportFolderRecordRequest;

        /**
         * Creates a plain object from an ImportFolderRecordRequest message. Also converts values to other types if specified.
         * @param message ImportFolderRecordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.ImportFolderRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportFolderRecordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ImportFolderRecordResponse. */
    interface IImportFolderRecordResponse {

        /** ImportFolderRecordResponse folderResponse */
        folderResponse?: (Folder.IFolderResponse[]|null);

        /** ImportFolderRecordResponse recordResponse */
        recordResponse?: (Folder.IRecordResponse[]|null);
    }

    /** Represents an ImportFolderRecordResponse. */
    class ImportFolderRecordResponse implements IImportFolderRecordResponse {

        /**
         * Constructs a new ImportFolderRecordResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Folder.IImportFolderRecordResponse);

        /** ImportFolderRecordResponse folderResponse. */
        public folderResponse: Folder.IFolderResponse[];

        /** ImportFolderRecordResponse recordResponse. */
        public recordResponse: Folder.IRecordResponse[];

        /**
         * Creates a new ImportFolderRecordResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImportFolderRecordResponse instance
         */
        public static create(properties?: Folder.IImportFolderRecordResponse): Folder.ImportFolderRecordResponse;

        /**
         * Encodes the specified ImportFolderRecordResponse message. Does not implicitly {@link Folder.ImportFolderRecordResponse.verify|verify} messages.
         * @param message ImportFolderRecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Folder.IImportFolderRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImportFolderRecordResponse message, length delimited. Does not implicitly {@link Folder.ImportFolderRecordResponse.verify|verify} messages.
         * @param message ImportFolderRecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Folder.IImportFolderRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImportFolderRecordResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImportFolderRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Folder.ImportFolderRecordResponse;

        /**
         * Decodes an ImportFolderRecordResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImportFolderRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Folder.ImportFolderRecordResponse;

        /**
         * Verifies an ImportFolderRecordResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImportFolderRecordResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImportFolderRecordResponse
         */
        public static fromObject(object: { [k: string]: any }): Folder.ImportFolderRecordResponse;

        /**
         * Creates a plain object from an ImportFolderRecordResponse message. Also converts values to other types if specified.
         * @param message ImportFolderRecordResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Folder.ImportFolderRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImportFolderRecordResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Records. */
export namespace Records {

    /** RecordTypeScope enum. */
    enum RecordTypeScope {
        RT_STANDARD = 0,
        RT_USER = 1,
        RT_ENTERPRISE = 2
    }

    /** Properties of a RecordType. */
    interface IRecordType {

        /** RecordType recordTypeId */
        recordTypeId?: (number|null);

        /** RecordType content */
        content?: (string|null);

        /** RecordType scope */
        scope?: (Records.RecordTypeScope|null);
    }

    /** Represents a RecordType. */
    class RecordType implements IRecordType {

        /**
         * Constructs a new RecordType.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordType);

        /** RecordType recordTypeId. */
        public recordTypeId: number;

        /** RecordType content. */
        public content: string;

        /** RecordType scope. */
        public scope: Records.RecordTypeScope;

        /**
         * Creates a new RecordType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordType instance
         */
        public static create(properties?: Records.IRecordType): Records.RecordType;

        /**
         * Encodes the specified RecordType message. Does not implicitly {@link Records.RecordType.verify|verify} messages.
         * @param message RecordType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordType message, length delimited. Does not implicitly {@link Records.RecordType.verify|verify} messages.
         * @param message RecordType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordType;

        /**
         * Decodes a RecordType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordType;

        /**
         * Verifies a RecordType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordType
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordType;

        /**
         * Creates a plain object from a RecordType message. Also converts values to other types if specified.
         * @param message RecordType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordTypesRequest. */
    interface IRecordTypesRequest {

        /** RecordTypesRequest standard */
        standard?: (boolean|null);

        /** RecordTypesRequest user */
        user?: (boolean|null);

        /** RecordTypesRequest enterprise */
        enterprise?: (boolean|null);
    }

    /** Represents a RecordTypesRequest. */
    class RecordTypesRequest implements IRecordTypesRequest {

        /**
         * Constructs a new RecordTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordTypesRequest);

        /** RecordTypesRequest standard. */
        public standard: boolean;

        /** RecordTypesRequest user. */
        public user: boolean;

        /** RecordTypesRequest enterprise. */
        public enterprise: boolean;

        /**
         * Creates a new RecordTypesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordTypesRequest instance
         */
        public static create(properties?: Records.IRecordTypesRequest): Records.RecordTypesRequest;

        /**
         * Encodes the specified RecordTypesRequest message. Does not implicitly {@link Records.RecordTypesRequest.verify|verify} messages.
         * @param message RecordTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordTypesRequest message, length delimited. Does not implicitly {@link Records.RecordTypesRequest.verify|verify} messages.
         * @param message RecordTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordTypesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordTypesRequest;

        /**
         * Decodes a RecordTypesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordTypesRequest;

        /**
         * Verifies a RecordTypesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordTypesRequest;

        /**
         * Creates a plain object from a RecordTypesRequest message. Also converts values to other types if specified.
         * @param message RecordTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordTypesResponse. */
    interface IRecordTypesResponse {

        /** RecordTypesResponse recordTypes */
        recordTypes?: (Records.IRecordType[]|null);

        /** RecordTypesResponse standardCounter */
        standardCounter?: (number|null);

        /** RecordTypesResponse userCounter */
        userCounter?: (number|null);

        /** RecordTypesResponse enterpriseCounter */
        enterpriseCounter?: (number|null);
    }

    /** Represents a RecordTypesResponse. */
    class RecordTypesResponse implements IRecordTypesResponse {

        /**
         * Constructs a new RecordTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordTypesResponse);

        /** RecordTypesResponse recordTypes. */
        public recordTypes: Records.IRecordType[];

        /** RecordTypesResponse standardCounter. */
        public standardCounter: number;

        /** RecordTypesResponse userCounter. */
        public userCounter: number;

        /** RecordTypesResponse enterpriseCounter. */
        public enterpriseCounter: number;

        /**
         * Creates a new RecordTypesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordTypesResponse instance
         */
        public static create(properties?: Records.IRecordTypesResponse): Records.RecordTypesResponse;

        /**
         * Encodes the specified RecordTypesResponse message. Does not implicitly {@link Records.RecordTypesResponse.verify|verify} messages.
         * @param message RecordTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordTypesResponse message, length delimited. Does not implicitly {@link Records.RecordTypesResponse.verify|verify} messages.
         * @param message RecordTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordTypesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordTypesResponse;

        /**
         * Decodes a RecordTypesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordTypesResponse;

        /**
         * Verifies a RecordTypesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordTypesResponse;

        /**
         * Creates a plain object from a RecordTypesResponse message. Also converts values to other types if specified.
         * @param message RecordTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordTypeModifyResponse. */
    interface IRecordTypeModifyResponse {

        /** RecordTypeModifyResponse recordTypeId */
        recordTypeId?: (number|null);

        /** RecordTypeModifyResponse counter */
        counter?: (number|null);
    }

    /** Represents a RecordTypeModifyResponse. */
    class RecordTypeModifyResponse implements IRecordTypeModifyResponse {

        /**
         * Constructs a new RecordTypeModifyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordTypeModifyResponse);

        /** RecordTypeModifyResponse recordTypeId. */
        public recordTypeId: number;

        /** RecordTypeModifyResponse counter. */
        public counter: number;

        /**
         * Creates a new RecordTypeModifyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordTypeModifyResponse instance
         */
        public static create(properties?: Records.IRecordTypeModifyResponse): Records.RecordTypeModifyResponse;

        /**
         * Encodes the specified RecordTypeModifyResponse message. Does not implicitly {@link Records.RecordTypeModifyResponse.verify|verify} messages.
         * @param message RecordTypeModifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordTypeModifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordTypeModifyResponse message, length delimited. Does not implicitly {@link Records.RecordTypeModifyResponse.verify|verify} messages.
         * @param message RecordTypeModifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordTypeModifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordTypeModifyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordTypeModifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordTypeModifyResponse;

        /**
         * Decodes a RecordTypeModifyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordTypeModifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordTypeModifyResponse;

        /**
         * Verifies a RecordTypeModifyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordTypeModifyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordTypeModifyResponse
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordTypeModifyResponse;

        /**
         * Creates a plain object from a RecordTypeModifyResponse message. Also converts values to other types if specified.
         * @param message RecordTypeModifyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordTypeModifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordTypeModifyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RecordFolderType enum. */
    enum RecordFolderType {
        user_folder = 0,
        shared_folder = 1,
        shared_folder_folder = 2
    }

    /** Properties of a RecordLink. */
    interface IRecordLink {

        /** RecordLink recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordLink recordKey */
        recordKey?: (Uint8Array|null);
    }

    /** Represents a RecordLink. */
    class RecordLink implements IRecordLink {

        /**
         * Constructs a new RecordLink.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordLink);

        /** RecordLink recordUid. */
        public recordUid: Uint8Array;

        /** RecordLink recordKey. */
        public recordKey: Uint8Array;

        /**
         * Creates a new RecordLink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordLink instance
         */
        public static create(properties?: Records.IRecordLink): Records.RecordLink;

        /**
         * Encodes the specified RecordLink message. Does not implicitly {@link Records.RecordLink.verify|verify} messages.
         * @param message RecordLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordLink message, length delimited. Does not implicitly {@link Records.RecordLink.verify|verify} messages.
         * @param message RecordLink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordLink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordLink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordLink;

        /**
         * Decodes a RecordLink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordLink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordLink;

        /**
         * Verifies a RecordLink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordLink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordLink
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordLink;

        /**
         * Creates a plain object from a RecordLink message. Also converts values to other types if specified.
         * @param message RecordLink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordLink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordAdd. */
    interface IRecordAdd {

        /** RecordAdd recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordAdd recordKey */
        recordKey?: (Uint8Array|null);

        /** RecordAdd clientModifiedTime */
        clientModifiedTime?: (number|Long|null);

        /** RecordAdd data */
        data?: (Uint8Array|null);

        /** RecordAdd nonSharedData */
        nonSharedData?: (Uint8Array|null);

        /** RecordAdd folderType */
        folderType?: (Records.RecordFolderType|null);

        /** RecordAdd folderUid */
        folderUid?: (Uint8Array|null);

        /** RecordAdd folderKey */
        folderKey?: (Uint8Array|null);

        /** RecordAdd recordLinks */
        recordLinks?: (Records.IRecordLink[]|null);
    }

    /** Represents a RecordAdd. */
    class RecordAdd implements IRecordAdd {

        /**
         * Constructs a new RecordAdd.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordAdd);

        /** RecordAdd recordUid. */
        public recordUid: Uint8Array;

        /** RecordAdd recordKey. */
        public recordKey: Uint8Array;

        /** RecordAdd clientModifiedTime. */
        public clientModifiedTime: (number|Long);

        /** RecordAdd data. */
        public data: Uint8Array;

        /** RecordAdd nonSharedData. */
        public nonSharedData: Uint8Array;

        /** RecordAdd folderType. */
        public folderType: Records.RecordFolderType;

        /** RecordAdd folderUid. */
        public folderUid: Uint8Array;

        /** RecordAdd folderKey. */
        public folderKey: Uint8Array;

        /** RecordAdd recordLinks. */
        public recordLinks: Records.IRecordLink[];

        /**
         * Creates a new RecordAdd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordAdd instance
         */
        public static create(properties?: Records.IRecordAdd): Records.RecordAdd;

        /**
         * Encodes the specified RecordAdd message. Does not implicitly {@link Records.RecordAdd.verify|verify} messages.
         * @param message RecordAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordAdd message, length delimited. Does not implicitly {@link Records.RecordAdd.verify|verify} messages.
         * @param message RecordAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordAdd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordAdd;

        /**
         * Decodes a RecordAdd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordAdd;

        /**
         * Verifies a RecordAdd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordAdd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordAdd
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordAdd;

        /**
         * Creates a plain object from a RecordAdd message. Also converts values to other types if specified.
         * @param message RecordAdd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordAdd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordsAddRequest. */
    interface IRecordsAddRequest {

        /** RecordsAddRequest records */
        records?: (Records.IRecordAdd[]|null);

        /** RecordsAddRequest clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a RecordsAddRequest. */
    class RecordsAddRequest implements IRecordsAddRequest {

        /**
         * Constructs a new RecordsAddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordsAddRequest);

        /** RecordsAddRequest records. */
        public records: Records.IRecordAdd[];

        /** RecordsAddRequest clientTime. */
        public clientTime: (number|Long);

        /**
         * Creates a new RecordsAddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordsAddRequest instance
         */
        public static create(properties?: Records.IRecordsAddRequest): Records.RecordsAddRequest;

        /**
         * Encodes the specified RecordsAddRequest message. Does not implicitly {@link Records.RecordsAddRequest.verify|verify} messages.
         * @param message RecordsAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordsAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordsAddRequest message, length delimited. Does not implicitly {@link Records.RecordsAddRequest.verify|verify} messages.
         * @param message RecordsAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordsAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordsAddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordsAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordsAddRequest;

        /**
         * Decodes a RecordsAddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordsAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordsAddRequest;

        /**
         * Verifies a RecordsAddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordsAddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordsAddRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordsAddRequest;

        /**
         * Creates a plain object from a RecordsAddRequest message. Also converts values to other types if specified.
         * @param message RecordsAddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordsAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordsAddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordUpdate. */
    interface IRecordUpdate {

        /** RecordUpdate recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordUpdate clientModifiedTime */
        clientModifiedTime?: (number|Long|null);

        /** RecordUpdate revision */
        revision?: (number|Long|null);

        /** RecordUpdate data */
        data?: (Uint8Array|null);

        /** RecordUpdate nonSharedData */
        nonSharedData?: (Uint8Array|null);

        /** RecordUpdate recordLinks */
        recordLinks?: (Records.IRecordLink[]|null);
    }

    /** Represents a RecordUpdate. */
    class RecordUpdate implements IRecordUpdate {

        /**
         * Constructs a new RecordUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordUpdate);

        /** RecordUpdate recordUid. */
        public recordUid: Uint8Array;

        /** RecordUpdate clientModifiedTime. */
        public clientModifiedTime: (number|Long);

        /** RecordUpdate revision. */
        public revision: (number|Long);

        /** RecordUpdate data. */
        public data: Uint8Array;

        /** RecordUpdate nonSharedData. */
        public nonSharedData: Uint8Array;

        /** RecordUpdate recordLinks. */
        public recordLinks: Records.IRecordLink[];

        /**
         * Creates a new RecordUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordUpdate instance
         */
        public static create(properties?: Records.IRecordUpdate): Records.RecordUpdate;

        /**
         * Encodes the specified RecordUpdate message. Does not implicitly {@link Records.RecordUpdate.verify|verify} messages.
         * @param message RecordUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordUpdate message, length delimited. Does not implicitly {@link Records.RecordUpdate.verify|verify} messages.
         * @param message RecordUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordUpdate;

        /**
         * Decodes a RecordUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordUpdate;

        /**
         * Verifies a RecordUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordUpdate
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordUpdate;

        /**
         * Creates a plain object from a RecordUpdate message. Also converts values to other types if specified.
         * @param message RecordUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordsUpdateRequest. */
    interface IRecordsUpdateRequest {

        /** RecordsUpdateRequest records */
        records?: (Records.IRecordUpdate[]|null);

        /** RecordsUpdateRequest clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a RecordsUpdateRequest. */
    class RecordsUpdateRequest implements IRecordsUpdateRequest {

        /**
         * Constructs a new RecordsUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordsUpdateRequest);

        /** RecordsUpdateRequest records. */
        public records: Records.IRecordUpdate[];

        /** RecordsUpdateRequest clientTime. */
        public clientTime: (number|Long);

        /**
         * Creates a new RecordsUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordsUpdateRequest instance
         */
        public static create(properties?: Records.IRecordsUpdateRequest): Records.RecordsUpdateRequest;

        /**
         * Encodes the specified RecordsUpdateRequest message. Does not implicitly {@link Records.RecordsUpdateRequest.verify|verify} messages.
         * @param message RecordsUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordsUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordsUpdateRequest message, length delimited. Does not implicitly {@link Records.RecordsUpdateRequest.verify|verify} messages.
         * @param message RecordsUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordsUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordsUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordsUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordsUpdateRequest;

        /**
         * Decodes a RecordsUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordsUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordsUpdateRequest;

        /**
         * Verifies a RecordsUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordsUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordsUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordsUpdateRequest;

        /**
         * Creates a plain object from a RecordsUpdateRequest message. Also converts values to other types if specified.
         * @param message RecordsUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordsUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordsUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordsRemoveRequest. */
    interface IRecordsRemoveRequest {

        /** RecordsRemoveRequest records */
        records?: (Uint8Array[]|null);
    }

    /** Represents a RecordsRemoveRequest. */
    class RecordsRemoveRequest implements IRecordsRemoveRequest {

        /**
         * Constructs a new RecordsRemoveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordsRemoveRequest);

        /** RecordsRemoveRequest records. */
        public records: Uint8Array[];

        /**
         * Creates a new RecordsRemoveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordsRemoveRequest instance
         */
        public static create(properties?: Records.IRecordsRemoveRequest): Records.RecordsRemoveRequest;

        /**
         * Encodes the specified RecordsRemoveRequest message. Does not implicitly {@link Records.RecordsRemoveRequest.verify|verify} messages.
         * @param message RecordsRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordsRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordsRemoveRequest message, length delimited. Does not implicitly {@link Records.RecordsRemoveRequest.verify|verify} messages.
         * @param message RecordsRemoveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordsRemoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordsRemoveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordsRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordsRemoveRequest;

        /**
         * Decodes a RecordsRemoveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordsRemoveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordsRemoveRequest;

        /**
         * Verifies a RecordsRemoveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordsRemoveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordsRemoveRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordsRemoveRequest;

        /**
         * Creates a plain object from a RecordsRemoveRequest message. Also converts values to other types if specified.
         * @param message RecordsRemoveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordsRemoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordsRemoveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RecordModifyResult enum. */
    enum RecordModifyResult {
        RS_SUCCESS = 0,
        RS_OUT_OF_SYNC = 1,
        RS_ACCESS_DENIED = 2,
        RS_SHARE_DENIED = 3,
        RS_RECORD_EXISTS = 4
    }

    /** Properties of a RecordModifyStatus. */
    interface IRecordModifyStatus {

        /** RecordModifyStatus recordUid */
        recordUid?: (Uint8Array|null);

        /** RecordModifyStatus status */
        status?: (Records.RecordModifyResult|null);
    }

    /** Represents a RecordModifyStatus. */
    class RecordModifyStatus implements IRecordModifyStatus {

        /**
         * Constructs a new RecordModifyStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordModifyStatus);

        /** RecordModifyStatus recordUid. */
        public recordUid: Uint8Array;

        /** RecordModifyStatus status. */
        public status: Records.RecordModifyResult;

        /**
         * Creates a new RecordModifyStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordModifyStatus instance
         */
        public static create(properties?: Records.IRecordModifyStatus): Records.RecordModifyStatus;

        /**
         * Encodes the specified RecordModifyStatus message. Does not implicitly {@link Records.RecordModifyStatus.verify|verify} messages.
         * @param message RecordModifyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordModifyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordModifyStatus message, length delimited. Does not implicitly {@link Records.RecordModifyStatus.verify|verify} messages.
         * @param message RecordModifyStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordModifyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordModifyStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordModifyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordModifyStatus;

        /**
         * Decodes a RecordModifyStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordModifyStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordModifyStatus;

        /**
         * Verifies a RecordModifyStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordModifyStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordModifyStatus
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordModifyStatus;

        /**
         * Creates a plain object from a RecordModifyStatus message. Also converts values to other types if specified.
         * @param message RecordModifyStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordModifyStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordModifyStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecordsModifyResponse. */
    interface IRecordsModifyResponse {

        /** RecordsModifyResponse records */
        records?: (Records.IRecordModifyStatus[]|null);

        /** RecordsModifyResponse revision */
        revision?: (number|Long|null);
    }

    /** Represents a RecordsModifyResponse. */
    class RecordsModifyResponse implements IRecordsModifyResponse {

        /**
         * Constructs a new RecordsModifyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IRecordsModifyResponse);

        /** RecordsModifyResponse records. */
        public records: Records.IRecordModifyStatus[];

        /** RecordsModifyResponse revision. */
        public revision: (number|Long);

        /**
         * Creates a new RecordsModifyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordsModifyResponse instance
         */
        public static create(properties?: Records.IRecordsModifyResponse): Records.RecordsModifyResponse;

        /**
         * Encodes the specified RecordsModifyResponse message. Does not implicitly {@link Records.RecordsModifyResponse.verify|verify} messages.
         * @param message RecordsModifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IRecordsModifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordsModifyResponse message, length delimited. Does not implicitly {@link Records.RecordsModifyResponse.verify|verify} messages.
         * @param message RecordsModifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IRecordsModifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordsModifyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordsModifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.RecordsModifyResponse;

        /**
         * Decodes a RecordsModifyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordsModifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.RecordsModifyResponse;

        /**
         * Verifies a RecordsModifyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordsModifyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordsModifyResponse
         */
        public static fromObject(object: { [k: string]: any }): Records.RecordsModifyResponse;

        /**
         * Creates a plain object from a RecordsModifyResponse message. Also converts values to other types if specified.
         * @param message RecordsModifyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.RecordsModifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordsModifyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a File. */
    interface IFile {

        /** File recordUid */
        recordUid?: (Uint8Array|null);

        /** File recordKey */
        recordKey?: (Uint8Array|null);

        /** File data */
        data?: (Uint8Array|null);

        /** File fileSize */
        fileSize?: (number|Long|null);

        /** File thumbSize */
        thumbSize?: (number|null);
    }

    /** Represents a File. */
    class File implements IFile {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFile);

        /** File recordUid. */
        public recordUid: Uint8Array;

        /** File recordKey. */
        public recordKey: Uint8Array;

        /** File data. */
        public data: Uint8Array;

        /** File fileSize. */
        public fileSize: (number|Long);

        /** File thumbSize. */
        public thumbSize: number;

        /**
         * Creates a new File instance using the specified properties.
         * @param [properties] Properties to set
         * @returns File instance
         */
        public static create(properties?: Records.IFile): Records.File;

        /**
         * Encodes the specified File message. Does not implicitly {@link Records.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link Records.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.File;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.File;

        /**
         * Verifies a File message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a File message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns File
         */
        public static fromObject(object: { [k: string]: any }): Records.File;

        /**
         * Creates a plain object from a File message. Also converts values to other types if specified.
         * @param message File
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this File to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilesAddRequest. */
    interface IFilesAddRequest {

        /** FilesAddRequest files */
        files?: (Records.IFile[]|null);

        /** FilesAddRequest clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a FilesAddRequest. */
    class FilesAddRequest implements IFilesAddRequest {

        /**
         * Constructs a new FilesAddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFilesAddRequest);

        /** FilesAddRequest files. */
        public files: Records.IFile[];

        /** FilesAddRequest clientTime. */
        public clientTime: (number|Long);

        /**
         * Creates a new FilesAddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilesAddRequest instance
         */
        public static create(properties?: Records.IFilesAddRequest): Records.FilesAddRequest;

        /**
         * Encodes the specified FilesAddRequest message. Does not implicitly {@link Records.FilesAddRequest.verify|verify} messages.
         * @param message FilesAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFilesAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilesAddRequest message, length delimited. Does not implicitly {@link Records.FilesAddRequest.verify|verify} messages.
         * @param message FilesAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFilesAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilesAddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilesAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FilesAddRequest;

        /**
         * Decodes a FilesAddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilesAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FilesAddRequest;

        /**
         * Verifies a FilesAddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilesAddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilesAddRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.FilesAddRequest;

        /**
         * Creates a plain object from a FilesAddRequest message. Also converts values to other types if specified.
         * @param message FilesAddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FilesAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilesAddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** FileAddResult enum. */
    enum FileAddResult {
        FA_SUCCESS = 0,
        FA_ERROR = 1
    }

    /** Properties of a FileAddStatus. */
    interface IFileAddStatus {

        /** FileAddStatus recordUid */
        recordUid?: (Uint8Array|null);

        /** FileAddStatus status */
        status?: (Records.FileAddResult|null);

        /** FileAddStatus url */
        url?: (string|null);

        /** FileAddStatus parameters */
        parameters?: (string|null);

        /** FileAddStatus thumbnailParameters */
        thumbnailParameters?: (string|null);

        /** FileAddStatus successStatusCode */
        successStatusCode?: (number|null);
    }

    /** Represents a FileAddStatus. */
    class FileAddStatus implements IFileAddStatus {

        /**
         * Constructs a new FileAddStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFileAddStatus);

        /** FileAddStatus recordUid. */
        public recordUid: Uint8Array;

        /** FileAddStatus status. */
        public status: Records.FileAddResult;

        /** FileAddStatus url. */
        public url: string;

        /** FileAddStatus parameters. */
        public parameters: string;

        /** FileAddStatus thumbnailParameters. */
        public thumbnailParameters: string;

        /** FileAddStatus successStatusCode. */
        public successStatusCode: number;

        /**
         * Creates a new FileAddStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAddStatus instance
         */
        public static create(properties?: Records.IFileAddStatus): Records.FileAddStatus;

        /**
         * Encodes the specified FileAddStatus message. Does not implicitly {@link Records.FileAddStatus.verify|verify} messages.
         * @param message FileAddStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFileAddStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAddStatus message, length delimited. Does not implicitly {@link Records.FileAddStatus.verify|verify} messages.
         * @param message FileAddStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFileAddStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAddStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAddStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FileAddStatus;

        /**
         * Decodes a FileAddStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAddStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FileAddStatus;

        /**
         * Verifies a FileAddStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAddStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAddStatus
         */
        public static fromObject(object: { [k: string]: any }): Records.FileAddStatus;

        /**
         * Creates a plain object from a FileAddStatus message. Also converts values to other types if specified.
         * @param message FileAddStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FileAddStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAddStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilesAddResponse. */
    interface IFilesAddResponse {

        /** FilesAddResponse files */
        files?: (Records.IFileAddStatus[]|null);
    }

    /** Represents a FilesAddResponse. */
    class FilesAddResponse implements IFilesAddResponse {

        /**
         * Constructs a new FilesAddResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFilesAddResponse);

        /** FilesAddResponse files. */
        public files: Records.IFileAddStatus[];

        /**
         * Creates a new FilesAddResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilesAddResponse instance
         */
        public static create(properties?: Records.IFilesAddResponse): Records.FilesAddResponse;

        /**
         * Encodes the specified FilesAddResponse message. Does not implicitly {@link Records.FilesAddResponse.verify|verify} messages.
         * @param message FilesAddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFilesAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilesAddResponse message, length delimited. Does not implicitly {@link Records.FilesAddResponse.verify|verify} messages.
         * @param message FilesAddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFilesAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilesAddResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilesAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FilesAddResponse;

        /**
         * Decodes a FilesAddResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilesAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FilesAddResponse;

        /**
         * Verifies a FilesAddResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilesAddResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilesAddResponse
         */
        public static fromObject(object: { [k: string]: any }): Records.FilesAddResponse;

        /**
         * Creates a plain object from a FilesAddResponse message. Also converts values to other types if specified.
         * @param message FilesAddResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FilesAddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilesAddResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilesGetRequest. */
    interface IFilesGetRequest {

        /** FilesGetRequest recordUids */
        recordUids?: (Uint8Array[]|null);

        /** FilesGetRequest forThumbnails */
        forThumbnails?: (boolean|null);

        /** FilesGetRequest emergencyAccessAccountOwner */
        emergencyAccessAccountOwner?: (string|null);
    }

    /** Represents a FilesGetRequest. */
    class FilesGetRequest implements IFilesGetRequest {

        /**
         * Constructs a new FilesGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFilesGetRequest);

        /** FilesGetRequest recordUids. */
        public recordUids: Uint8Array[];

        /** FilesGetRequest forThumbnails. */
        public forThumbnails: boolean;

        /** FilesGetRequest emergencyAccessAccountOwner. */
        public emergencyAccessAccountOwner: string;

        /**
         * Creates a new FilesGetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilesGetRequest instance
         */
        public static create(properties?: Records.IFilesGetRequest): Records.FilesGetRequest;

        /**
         * Encodes the specified FilesGetRequest message. Does not implicitly {@link Records.FilesGetRequest.verify|verify} messages.
         * @param message FilesGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFilesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilesGetRequest message, length delimited. Does not implicitly {@link Records.FilesGetRequest.verify|verify} messages.
         * @param message FilesGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFilesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilesGetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilesGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FilesGetRequest;

        /**
         * Decodes a FilesGetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilesGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FilesGetRequest;

        /**
         * Verifies a FilesGetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilesGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilesGetRequest
         */
        public static fromObject(object: { [k: string]: any }): Records.FilesGetRequest;

        /**
         * Creates a plain object from a FilesGetRequest message. Also converts values to other types if specified.
         * @param message FilesGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FilesGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilesGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** FileGetResult enum. */
    enum FileGetResult {
        FG_SUCCESS = 0,
        FG_ERROR = 1,
        FG_ACCESS_DENIED = 2
    }

    /** Properties of a FileGetStatus. */
    interface IFileGetStatus {

        /** FileGetStatus recordUid */
        recordUid?: (Uint8Array|null);

        /** FileGetStatus status */
        status?: (Records.FileGetResult|null);

        /** FileGetStatus url */
        url?: (string|null);

        /** FileGetStatus successStatusCode */
        successStatusCode?: (number|null);
    }

    /** Represents a FileGetStatus. */
    class FileGetStatus implements IFileGetStatus {

        /**
         * Constructs a new FileGetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFileGetStatus);

        /** FileGetStatus recordUid. */
        public recordUid: Uint8Array;

        /** FileGetStatus status. */
        public status: Records.FileGetResult;

        /** FileGetStatus url. */
        public url: string;

        /** FileGetStatus successStatusCode. */
        public successStatusCode: number;

        /**
         * Creates a new FileGetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileGetStatus instance
         */
        public static create(properties?: Records.IFileGetStatus): Records.FileGetStatus;

        /**
         * Encodes the specified FileGetStatus message. Does not implicitly {@link Records.FileGetStatus.verify|verify} messages.
         * @param message FileGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFileGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileGetStatus message, length delimited. Does not implicitly {@link Records.FileGetStatus.verify|verify} messages.
         * @param message FileGetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFileGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileGetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FileGetStatus;

        /**
         * Decodes a FileGetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileGetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FileGetStatus;

        /**
         * Verifies a FileGetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileGetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileGetStatus
         */
        public static fromObject(object: { [k: string]: any }): Records.FileGetStatus;

        /**
         * Creates a plain object from a FileGetStatus message. Also converts values to other types if specified.
         * @param message FileGetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FileGetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileGetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilesGetResponse. */
    interface IFilesGetResponse {

        /** FilesGetResponse files */
        files?: (Records.IFileGetStatus[]|null);
    }

    /** Represents a FilesGetResponse. */
    class FilesGetResponse implements IFilesGetResponse {

        /**
         * Constructs a new FilesGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Records.IFilesGetResponse);

        /** FilesGetResponse files. */
        public files: Records.IFileGetStatus[];

        /**
         * Creates a new FilesGetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilesGetResponse instance
         */
        public static create(properties?: Records.IFilesGetResponse): Records.FilesGetResponse;

        /**
         * Encodes the specified FilesGetResponse message. Does not implicitly {@link Records.FilesGetResponse.verify|verify} messages.
         * @param message FilesGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Records.IFilesGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilesGetResponse message, length delimited. Does not implicitly {@link Records.FilesGetResponse.verify|verify} messages.
         * @param message FilesGetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Records.IFilesGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilesGetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilesGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Records.FilesGetResponse;

        /**
         * Decodes a FilesGetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilesGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Records.FilesGetResponse;

        /**
         * Verifies a FilesGetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilesGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilesGetResponse
         */
        public static fromObject(object: { [k: string]: any }): Records.FilesGetResponse;

        /**
         * Creates a plain object from a FilesGetResponse message. Also converts values to other types if specified.
         * @param message FilesGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Records.FilesGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilesGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ServiceLogger. */
export namespace ServiceLogger {

    /** Properties of an IdRange. */
    interface IIdRange {

        /** IdRange startingId */
        startingId?: (number|Long|null);

        /** IdRange endingId */
        endingId?: (number|Long|null);
    }

    /** Specifies the first and last IDs of a range of IDs so that a Request can ask for information about a range of IDs. */
    class IdRange implements IIdRange {

        /**
         * Constructs a new IdRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IIdRange);

        /** IdRange startingId. */
        public startingId: (number|Long);

        /** IdRange endingId. */
        public endingId: (number|Long);

        /**
         * Creates a new IdRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdRange instance
         */
        public static create(properties?: ServiceLogger.IIdRange): ServiceLogger.IdRange;

        /**
         * Encodes the specified IdRange message. Does not implicitly {@link ServiceLogger.IdRange.verify|verify} messages.
         * @param message IdRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IIdRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdRange message, length delimited. Does not implicitly {@link ServiceLogger.IdRange.verify|verify} messages.
         * @param message IdRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IIdRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.IdRange;

        /**
         * Decodes an IdRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.IdRange;

        /**
         * Verifies an IdRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdRange
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.IdRange;

        /**
         * Creates a plain object from an IdRange message. Also converts values to other types if specified.
         * @param message IdRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.IdRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceInfoSpecifier. */
    interface IServiceInfoSpecifier {

        /** ServiceInfoSpecifier all */
        all?: (boolean|null);

        /** ServiceInfoSpecifier serviceInfoId */
        serviceInfoId?: (number|Long|null);

        /** ServiceInfoSpecifier name */
        name?: (string|null);
    }

    /** Used in ServiceInfoRequest */
    class ServiceInfoSpecifier implements IServiceInfoSpecifier {

        /**
         * Constructs a new ServiceInfoSpecifier.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceInfoSpecifier);

        /** ServiceInfoSpecifier all. */
        public all: boolean;

        /** ServiceInfoSpecifier serviceInfoId. */
        public serviceInfoId: (number|Long);

        /** ServiceInfoSpecifier name. */
        public name: string;

        /**
         * Creates a new ServiceInfoSpecifier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceInfoSpecifier instance
         */
        public static create(properties?: ServiceLogger.IServiceInfoSpecifier): ServiceLogger.ServiceInfoSpecifier;

        /**
         * Encodes the specified ServiceInfoSpecifier message. Does not implicitly {@link ServiceLogger.ServiceInfoSpecifier.verify|verify} messages.
         * @param message ServiceInfoSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceInfoSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceInfoSpecifier message, length delimited. Does not implicitly {@link ServiceLogger.ServiceInfoSpecifier.verify|verify} messages.
         * @param message ServiceInfoSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceInfoSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceInfoSpecifier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceInfoSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceInfoSpecifier;

        /**
         * Decodes a ServiceInfoSpecifier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceInfoSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceInfoSpecifier;

        /**
         * Verifies a ServiceInfoSpecifier message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceInfoSpecifier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceInfoSpecifier
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceInfoSpecifier;

        /**
         * Creates a plain object from a ServiceInfoSpecifier message. Also converts values to other types if specified.
         * @param message ServiceInfoSpecifier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceInfoSpecifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceInfoSpecifier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceInfoRequest. */
    interface IServiceInfoRequest {

        /** ServiceInfoRequest serviceInfoSpecifier */
        serviceInfoSpecifier?: (ServiceLogger.IServiceInfoSpecifier[]|null);
    }

    /** Request information about one or more services by ID or name, or retrieve all. */
    class ServiceInfoRequest implements IServiceInfoRequest {

        /**
         * Constructs a new ServiceInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceInfoRequest);

        /** ServiceInfoRequest serviceInfoSpecifier. */
        public serviceInfoSpecifier: ServiceLogger.IServiceInfoSpecifier[];

        /**
         * Creates a new ServiceInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceInfoRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceInfoRequest): ServiceLogger.ServiceInfoRequest;

        /**
         * Encodes the specified ServiceInfoRequest message. Does not implicitly {@link ServiceLogger.ServiceInfoRequest.verify|verify} messages.
         * @param message ServiceInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceInfoRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceInfoRequest.verify|verify} messages.
         * @param message ServiceInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceInfoRequest;

        /**
         * Decodes a ServiceInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceInfoRequest;

        /**
         * Verifies a ServiceInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceInfoRequest;

        /**
         * Creates a plain object from a ServiceInfoRequest message. Also converts values to other types if specified.
         * @param message ServiceInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceInfoRecord. */
    interface IServiceInfoRecord {

        /** ServiceInfoRecord serviceInfoId */
        serviceInfoId?: (number|Long|null);

        /** ServiceInfoRecord name */
        name?: (string|null);

        /** ServiceInfoRecord deleteAfter */
        deleteAfter?: (number|null);

        /** ServiceInfoRecord deleteAfterTimeUnits */
        deleteAfterTimeUnits?: (string|null);

        /** ServiceInfoRecord isShortTermLogging */
        isShortTermLogging?: (boolean|null);
    }

    /** Used in ServiceInfoResponse */
    class ServiceInfoRecord implements IServiceInfoRecord {

        /**
         * Constructs a new ServiceInfoRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceInfoRecord);

        /** ServiceInfoRecord serviceInfoId. */
        public serviceInfoId: (number|Long);

        /** ServiceInfoRecord name. */
        public name: string;

        /** ServiceInfoRecord deleteAfter. */
        public deleteAfter: number;

        /** ServiceInfoRecord deleteAfterTimeUnits. */
        public deleteAfterTimeUnits: string;

        /** ServiceInfoRecord isShortTermLogging. */
        public isShortTermLogging: boolean;

        /**
         * Creates a new ServiceInfoRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceInfoRecord instance
         */
        public static create(properties?: ServiceLogger.IServiceInfoRecord): ServiceLogger.ServiceInfoRecord;

        /**
         * Encodes the specified ServiceInfoRecord message. Does not implicitly {@link ServiceLogger.ServiceInfoRecord.verify|verify} messages.
         * @param message ServiceInfoRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceInfoRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceInfoRecord message, length delimited. Does not implicitly {@link ServiceLogger.ServiceInfoRecord.verify|verify} messages.
         * @param message ServiceInfoRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceInfoRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceInfoRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceInfoRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceInfoRecord;

        /**
         * Decodes a ServiceInfoRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceInfoRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceInfoRecord;

        /**
         * Verifies a ServiceInfoRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceInfoRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceInfoRecord
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceInfoRecord;

        /**
         * Creates a plain object from a ServiceInfoRecord message. Also converts values to other types if specified.
         * @param message ServiceInfoRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceInfoRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceInfoRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceInfoResponse. */
    interface IServiceInfoResponse {

        /** ServiceInfoResponse serviceInfoRecord */
        serviceInfoRecord?: (ServiceLogger.IServiceInfoRecord[]|null);
    }

    /** Returns information about Services */
    class ServiceInfoResponse implements IServiceInfoResponse {

        /**
         * Constructs a new ServiceInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceInfoResponse);

        /** ServiceInfoResponse serviceInfoRecord. */
        public serviceInfoRecord: ServiceLogger.IServiceInfoRecord[];

        /**
         * Creates a new ServiceInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceInfoResponse instance
         */
        public static create(properties?: ServiceLogger.IServiceInfoResponse): ServiceLogger.ServiceInfoResponse;

        /**
         * Encodes the specified ServiceInfoResponse message. Does not implicitly {@link ServiceLogger.ServiceInfoResponse.verify|verify} messages.
         * @param message ServiceInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceInfoResponse message, length delimited. Does not implicitly {@link ServiceLogger.ServiceInfoResponse.verify|verify} messages.
         * @param message ServiceInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceInfoResponse;

        /**
         * Decodes a ServiceInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceInfoResponse;

        /**
         * Verifies a ServiceInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceInfoResponse;

        /**
         * Creates a plain object from a ServiceInfoResponse message. Also converts values to other types if specified.
         * @param message ServiceInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceInfoUpdateRequest. */
    interface IServiceInfoUpdateRequest {

        /** ServiceInfoUpdateRequest serviceInfoRecord */
        serviceInfoRecord?: (ServiceLogger.IServiceInfoRecord[]|null);
    }

    /** Update one or more ServiceInfo records by their IDs */
    class ServiceInfoUpdateRequest implements IServiceInfoUpdateRequest {

        /**
         * Constructs a new ServiceInfoUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceInfoUpdateRequest);

        /** ServiceInfoUpdateRequest serviceInfoRecord. */
        public serviceInfoRecord: ServiceLogger.IServiceInfoRecord[];

        /**
         * Creates a new ServiceInfoUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceInfoUpdateRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceInfoUpdateRequest): ServiceLogger.ServiceInfoUpdateRequest;

        /**
         * Encodes the specified ServiceInfoUpdateRequest message. Does not implicitly {@link ServiceLogger.ServiceInfoUpdateRequest.verify|verify} messages.
         * @param message ServiceInfoUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceInfoUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceInfoUpdateRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceInfoUpdateRequest.verify|verify} messages.
         * @param message ServiceInfoUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceInfoUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceInfoUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceInfoUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceInfoUpdateRequest;

        /**
         * Decodes a ServiceInfoUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceInfoUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceInfoUpdateRequest;

        /**
         * Verifies a ServiceInfoUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceInfoUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceInfoUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceInfoUpdateRequest;

        /**
         * Creates a plain object from a ServiceInfoUpdateRequest message. Also converts values to other types if specified.
         * @param message ServiceInfoUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceInfoUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceInfoUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceRuleSpecifier. */
    interface IServiceRuleSpecifier {

        /** ServiceRuleSpecifier all */
        all?: (boolean|null);

        /** ServiceRuleSpecifier serviceRuleId */
        serviceRuleId?: (number|Long|null);

        /** ServiceRuleSpecifier serviceInfoId */
        serviceInfoId?: (number|Long|null);

        /** ServiceRuleSpecifier resourceIdRange */
        resourceIdRange?: (ServiceLogger.IIdRange[]|null);
    }

    /** Represents a ServiceRuleSpecifier. */
    class ServiceRuleSpecifier implements IServiceRuleSpecifier {

        /**
         * Constructs a new ServiceRuleSpecifier.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceRuleSpecifier);

        /** ServiceRuleSpecifier all. */
        public all: boolean;

        /** ServiceRuleSpecifier serviceRuleId. */
        public serviceRuleId: (number|Long);

        /** ServiceRuleSpecifier serviceInfoId. */
        public serviceInfoId: (number|Long);

        /** ServiceRuleSpecifier resourceIdRange. */
        public resourceIdRange: ServiceLogger.IIdRange[];

        /**
         * Creates a new ServiceRuleSpecifier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceRuleSpecifier instance
         */
        public static create(properties?: ServiceLogger.IServiceRuleSpecifier): ServiceLogger.ServiceRuleSpecifier;

        /**
         * Encodes the specified ServiceRuleSpecifier message. Does not implicitly {@link ServiceLogger.ServiceRuleSpecifier.verify|verify} messages.
         * @param message ServiceRuleSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceRuleSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceRuleSpecifier message, length delimited. Does not implicitly {@link ServiceLogger.ServiceRuleSpecifier.verify|verify} messages.
         * @param message ServiceRuleSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceRuleSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceRuleSpecifier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceRuleSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceRuleSpecifier;

        /**
         * Decodes a ServiceRuleSpecifier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceRuleSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceRuleSpecifier;

        /**
         * Verifies a ServiceRuleSpecifier message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceRuleSpecifier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceRuleSpecifier
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceRuleSpecifier;

        /**
         * Creates a plain object from a ServiceRuleSpecifier message. Also converts values to other types if specified.
         * @param message ServiceRuleSpecifier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceRuleSpecifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceRuleSpecifier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceRuleRequest. */
    interface IServiceRuleRequest {

        /** ServiceRuleRequest serviceRuleSpecifier */
        serviceRuleSpecifier?: (ServiceLogger.IServiceRuleSpecifier[]|null);
    }

    /** Represents a ServiceRuleRequest. */
    class ServiceRuleRequest implements IServiceRuleRequest {

        /**
         * Constructs a new ServiceRuleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceRuleRequest);

        /** ServiceRuleRequest serviceRuleSpecifier. */
        public serviceRuleSpecifier: ServiceLogger.IServiceRuleSpecifier[];

        /**
         * Creates a new ServiceRuleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceRuleRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceRuleRequest): ServiceLogger.ServiceRuleRequest;

        /**
         * Encodes the specified ServiceRuleRequest message. Does not implicitly {@link ServiceLogger.ServiceRuleRequest.verify|verify} messages.
         * @param message ServiceRuleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceRuleRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceRuleRequest.verify|verify} messages.
         * @param message ServiceRuleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceRuleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceRuleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceRuleRequest;

        /**
         * Decodes a ServiceRuleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceRuleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceRuleRequest;

        /**
         * Verifies a ServiceRuleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceRuleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceRuleRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceRuleRequest;

        /**
         * Creates a plain object from a ServiceRuleRequest message. Also converts values to other types if specified.
         * @param message ServiceRuleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceRuleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceRuleRecord. */
    interface IServiceRuleRecord {

        /** ServiceRuleRecord serviceRuleId */
        serviceRuleId?: (number|Long|null);

        /** ServiceRuleRecord serviceInfoId */
        serviceInfoId?: (number|Long|null);

        /** ServiceRuleRecord resourceId */
        resourceId?: (number|Long|null);

        /** ServiceRuleRecord isLoggingEnabled */
        isLoggingEnabled?: (boolean|null);

        /** ServiceRuleRecord logLevel */
        logLevel?: (string|null);

        /** ServiceRuleRecord ruleStart */
        ruleStart?: (string|null);

        /** ServiceRuleRecord ruleEnd */
        ruleEnd?: (string|null);

        /** ServiceRuleRecord dateModified */
        dateModified?: (string|null);
    }

    /** Represents a ServiceRuleRecord. */
    class ServiceRuleRecord implements IServiceRuleRecord {

        /**
         * Constructs a new ServiceRuleRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceRuleRecord);

        /** ServiceRuleRecord serviceRuleId. */
        public serviceRuleId: (number|Long);

        /** ServiceRuleRecord serviceInfoId. */
        public serviceInfoId: (number|Long);

        /** ServiceRuleRecord resourceId. */
        public resourceId: (number|Long);

        /** ServiceRuleRecord isLoggingEnabled. */
        public isLoggingEnabled: boolean;

        /** ServiceRuleRecord logLevel. */
        public logLevel: string;

        /** ServiceRuleRecord ruleStart. */
        public ruleStart: string;

        /** ServiceRuleRecord ruleEnd. */
        public ruleEnd: string;

        /** ServiceRuleRecord dateModified. */
        public dateModified: string;

        /**
         * Creates a new ServiceRuleRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceRuleRecord instance
         */
        public static create(properties?: ServiceLogger.IServiceRuleRecord): ServiceLogger.ServiceRuleRecord;

        /**
         * Encodes the specified ServiceRuleRecord message. Does not implicitly {@link ServiceLogger.ServiceRuleRecord.verify|verify} messages.
         * @param message ServiceRuleRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceRuleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceRuleRecord message, length delimited. Does not implicitly {@link ServiceLogger.ServiceRuleRecord.verify|verify} messages.
         * @param message ServiceRuleRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceRuleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceRuleRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceRuleRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceRuleRecord;

        /**
         * Decodes a ServiceRuleRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceRuleRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceRuleRecord;

        /**
         * Verifies a ServiceRuleRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceRuleRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceRuleRecord
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceRuleRecord;

        /**
         * Creates a plain object from a ServiceRuleRecord message. Also converts values to other types if specified.
         * @param message ServiceRuleRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceRuleRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceRuleRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceRuleResponse. */
    interface IServiceRuleResponse {

        /** ServiceRuleResponse serviceRule */
        serviceRule?: (ServiceLogger.IServiceRuleRecord[]|null);
    }

    /** Represents a ServiceRuleResponse. */
    class ServiceRuleResponse implements IServiceRuleResponse {

        /**
         * Constructs a new ServiceRuleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceRuleResponse);

        /** ServiceRuleResponse serviceRule. */
        public serviceRule: ServiceLogger.IServiceRuleRecord[];

        /**
         * Creates a new ServiceRuleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceRuleResponse instance
         */
        public static create(properties?: ServiceLogger.IServiceRuleResponse): ServiceLogger.ServiceRuleResponse;

        /**
         * Encodes the specified ServiceRuleResponse message. Does not implicitly {@link ServiceLogger.ServiceRuleResponse.verify|verify} messages.
         * @param message ServiceRuleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceRuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceRuleResponse message, length delimited. Does not implicitly {@link ServiceLogger.ServiceRuleResponse.verify|verify} messages.
         * @param message ServiceRuleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceRuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceRuleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceRuleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceRuleResponse;

        /**
         * Decodes a ServiceRuleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceRuleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceRuleResponse;

        /**
         * Verifies a ServiceRuleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceRuleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceRuleResponse
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceRuleResponse;

        /**
         * Creates a plain object from a ServiceRuleResponse message. Also converts values to other types if specified.
         * @param message ServiceRuleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceRuleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceRuleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceRuleUpdateRequest. */
    interface IServiceRuleUpdateRequest {

        /** ServiceRuleUpdateRequest serviceRuleRecord */
        serviceRuleRecord?: (ServiceLogger.IServiceRuleRecord[]|null);
    }

    /** Update one or more ServiceRule records by their IDs */
    class ServiceRuleUpdateRequest implements IServiceRuleUpdateRequest {

        /**
         * Constructs a new ServiceRuleUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceRuleUpdateRequest);

        /** ServiceRuleUpdateRequest serviceRuleRecord. */
        public serviceRuleRecord: ServiceLogger.IServiceRuleRecord[];

        /**
         * Creates a new ServiceRuleUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceRuleUpdateRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceRuleUpdateRequest): ServiceLogger.ServiceRuleUpdateRequest;

        /**
         * Encodes the specified ServiceRuleUpdateRequest message. Does not implicitly {@link ServiceLogger.ServiceRuleUpdateRequest.verify|verify} messages.
         * @param message ServiceRuleUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceRuleUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceRuleUpdateRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceRuleUpdateRequest.verify|verify} messages.
         * @param message ServiceRuleUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceRuleUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceRuleUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceRuleUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceRuleUpdateRequest;

        /**
         * Decodes a ServiceRuleUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceRuleUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceRuleUpdateRequest;

        /**
         * Verifies a ServiceRuleUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceRuleUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceRuleUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceRuleUpdateRequest;

        /**
         * Creates a plain object from a ServiceRuleUpdateRequest message. Also converts values to other types if specified.
         * @param message ServiceRuleUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceRuleUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceRuleUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogSpecifier. */
    interface IServiceLogSpecifier {

        /** ServiceLogSpecifier all */
        all?: (boolean|null);

        /** ServiceLogSpecifier serviceLogId */
        serviceLogId?: (number|Long|null);

        /** ServiceLogSpecifier serviceIdRange */
        serviceIdRange?: (ServiceLogger.IIdRange[]|null);

        /** ServiceLogSpecifier resourceIdRange */
        resourceIdRange?: (ServiceLogger.IIdRange[]|null);

        /** ServiceLogSpecifier startDateTime */
        startDateTime?: (string|null);

        /** ServiceLogSpecifier endDateTime */
        endDateTime?: (string|null);
    }

    /** Represents a ServiceLogSpecifier. */
    class ServiceLogSpecifier implements IServiceLogSpecifier {

        /**
         * Constructs a new ServiceLogSpecifier.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogSpecifier);

        /** ServiceLogSpecifier all. */
        public all: boolean;

        /** ServiceLogSpecifier serviceLogId. */
        public serviceLogId: (number|Long);

        /** ServiceLogSpecifier serviceIdRange. */
        public serviceIdRange: ServiceLogger.IIdRange[];

        /** ServiceLogSpecifier resourceIdRange. */
        public resourceIdRange: ServiceLogger.IIdRange[];

        /** ServiceLogSpecifier startDateTime. */
        public startDateTime: string;

        /** ServiceLogSpecifier endDateTime. */
        public endDateTime: string;

        /**
         * Creates a new ServiceLogSpecifier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogSpecifier instance
         */
        public static create(properties?: ServiceLogger.IServiceLogSpecifier): ServiceLogger.ServiceLogSpecifier;

        /**
         * Encodes the specified ServiceLogSpecifier message. Does not implicitly {@link ServiceLogger.ServiceLogSpecifier.verify|verify} messages.
         * @param message ServiceLogSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogSpecifier message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogSpecifier.verify|verify} messages.
         * @param message ServiceLogSpecifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogSpecifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogSpecifier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogSpecifier;

        /**
         * Decodes a ServiceLogSpecifier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogSpecifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogSpecifier;

        /**
         * Verifies a ServiceLogSpecifier message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogSpecifier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogSpecifier
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogSpecifier;

        /**
         * Creates a plain object from a ServiceLogSpecifier message. Also converts values to other types if specified.
         * @param message ServiceLogSpecifier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogSpecifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogSpecifier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogGetRequest. */
    interface IServiceLogGetRequest {

        /** ServiceLogGetRequest serviceLogSpecifier */
        serviceLogSpecifier?: (ServiceLogger.IServiceLogSpecifier[]|null);
    }

    /** Represents a ServiceLogGetRequest. */
    class ServiceLogGetRequest implements IServiceLogGetRequest {

        /**
         * Constructs a new ServiceLogGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogGetRequest);

        /** ServiceLogGetRequest serviceLogSpecifier. */
        public serviceLogSpecifier: ServiceLogger.IServiceLogSpecifier[];

        /**
         * Creates a new ServiceLogGetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogGetRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceLogGetRequest): ServiceLogger.ServiceLogGetRequest;

        /**
         * Encodes the specified ServiceLogGetRequest message. Does not implicitly {@link ServiceLogger.ServiceLogGetRequest.verify|verify} messages.
         * @param message ServiceLogGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogGetRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogGetRequest.verify|verify} messages.
         * @param message ServiceLogGetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogGetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogGetRequest;

        /**
         * Decodes a ServiceLogGetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogGetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogGetRequest;

        /**
         * Verifies a ServiceLogGetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogGetRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogGetRequest;

        /**
         * Creates a plain object from a ServiceLogGetRequest message. Also converts values to other types if specified.
         * @param message ServiceLogGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogRecord. */
    interface IServiceLogRecord {

        /** ServiceLogRecord serviceLogId */
        serviceLogId?: (number|Long|null);

        /** ServiceLogRecord serviceInfoId */
        serviceInfoId?: (number|Long|null);

        /** ServiceLogRecord resourceId */
        resourceId?: (number|Long|null);

        /** ServiceLogRecord logger */
        logger?: (string|null);

        /** ServiceLogRecord logLevel */
        logLevel?: (string|null);

        /** ServiceLogRecord message */
        message?: (string|null);

        /** ServiceLogRecord exception */
        exception?: (string|null);

        /** ServiceLogRecord dateCreated */
        dateCreated?: (string|null);
    }

    /** Represents a ServiceLogRecord. */
    class ServiceLogRecord implements IServiceLogRecord {

        /**
         * Constructs a new ServiceLogRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogRecord);

        /** ServiceLogRecord serviceLogId. */
        public serviceLogId: (number|Long);

        /** ServiceLogRecord serviceInfoId. */
        public serviceInfoId: (number|Long);

        /** ServiceLogRecord resourceId. */
        public resourceId: (number|Long);

        /** ServiceLogRecord logger. */
        public logger: string;

        /** ServiceLogRecord logLevel. */
        public logLevel: string;

        /** ServiceLogRecord message. */
        public message: string;

        /** ServiceLogRecord exception. */
        public exception: string;

        /** ServiceLogRecord dateCreated. */
        public dateCreated: string;

        /**
         * Creates a new ServiceLogRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogRecord instance
         */
        public static create(properties?: ServiceLogger.IServiceLogRecord): ServiceLogger.ServiceLogRecord;

        /**
         * Encodes the specified ServiceLogRecord message. Does not implicitly {@link ServiceLogger.ServiceLogRecord.verify|verify} messages.
         * @param message ServiceLogRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogRecord message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogRecord.verify|verify} messages.
         * @param message ServiceLogRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogRecord;

        /**
         * Decodes a ServiceLogRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogRecord;

        /**
         * Verifies a ServiceLogRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogRecord
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogRecord;

        /**
         * Creates a plain object from a ServiceLogRecord message. Also converts values to other types if specified.
         * @param message ServiceLogRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogAddRequest. */
    interface IServiceLogAddRequest {

        /** ServiceLogAddRequest entry */
        entry?: (ServiceLogger.IServiceLogRecord[]|null);
    }

    /** Represents a ServiceLogAddRequest. */
    class ServiceLogAddRequest implements IServiceLogAddRequest {

        /**
         * Constructs a new ServiceLogAddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogAddRequest);

        /** ServiceLogAddRequest entry. */
        public entry: ServiceLogger.IServiceLogRecord[];

        /**
         * Creates a new ServiceLogAddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogAddRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceLogAddRequest): ServiceLogger.ServiceLogAddRequest;

        /**
         * Encodes the specified ServiceLogAddRequest message. Does not implicitly {@link ServiceLogger.ServiceLogAddRequest.verify|verify} messages.
         * @param message ServiceLogAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogAddRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogAddRequest.verify|verify} messages.
         * @param message ServiceLogAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogAddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogAddRequest;

        /**
         * Decodes a ServiceLogAddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogAddRequest;

        /**
         * Verifies a ServiceLogAddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogAddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogAddRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogAddRequest;

        /**
         * Creates a plain object from a ServiceLogAddRequest message. Also converts values to other types if specified.
         * @param message ServiceLogAddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogAddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogResponse. */
    interface IServiceLogResponse {

        /** ServiceLogResponse entry */
        entry?: (ServiceLogger.IServiceLogRecord[]|null);
    }

    /** Represents a ServiceLogResponse. */
    class ServiceLogResponse implements IServiceLogResponse {

        /**
         * Constructs a new ServiceLogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogResponse);

        /** ServiceLogResponse entry. */
        public entry: ServiceLogger.IServiceLogRecord[];

        /**
         * Creates a new ServiceLogResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogResponse instance
         */
        public static create(properties?: ServiceLogger.IServiceLogResponse): ServiceLogger.ServiceLogResponse;

        /**
         * Encodes the specified ServiceLogResponse message. Does not implicitly {@link ServiceLogger.ServiceLogResponse.verify|verify} messages.
         * @param message ServiceLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogResponse message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogResponse.verify|verify} messages.
         * @param message ServiceLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogResponse;

        /**
         * Decodes a ServiceLogResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogResponse;

        /**
         * Verifies a ServiceLogResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogResponse
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogResponse;

        /**
         * Creates a plain object from a ServiceLogResponse message. Also converts values to other types if specified.
         * @param message ServiceLogResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogClearRequest. */
    interface IServiceLogClearRequest {

        /** ServiceLogClearRequest useDefaults */
        useDefaults?: (boolean|null);

        /** ServiceLogClearRequest serviceTypeId */
        serviceTypeId?: (number|Long|null);

        /** ServiceLogClearRequest daysOld */
        daysOld?: (number|null);

        /** ServiceLogClearRequest hoursOld */
        hoursOld?: (number|null);

        /** ServiceLogClearRequest resourceIdRange */
        resourceIdRange?: (ServiceLogger.IIdRange[]|null);
    }

    /** This is a request to clear the SSO Service Provider log */
    class ServiceLogClearRequest implements IServiceLogClearRequest {

        /**
         * Constructs a new ServiceLogClearRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogClearRequest);

        /** ServiceLogClearRequest useDefaults. */
        public useDefaults: boolean;

        /** ServiceLogClearRequest serviceTypeId. */
        public serviceTypeId: (number|Long);

        /** ServiceLogClearRequest daysOld. */
        public daysOld: number;

        /** ServiceLogClearRequest hoursOld. */
        public hoursOld: number;

        /** ServiceLogClearRequest resourceIdRange. */
        public resourceIdRange: ServiceLogger.IIdRange[];

        /**
         * Creates a new ServiceLogClearRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogClearRequest instance
         */
        public static create(properties?: ServiceLogger.IServiceLogClearRequest): ServiceLogger.ServiceLogClearRequest;

        /**
         * Encodes the specified ServiceLogClearRequest message. Does not implicitly {@link ServiceLogger.ServiceLogClearRequest.verify|verify} messages.
         * @param message ServiceLogClearRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogClearRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogClearRequest message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogClearRequest.verify|verify} messages.
         * @param message ServiceLogClearRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogClearRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogClearRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogClearRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogClearRequest;

        /**
         * Decodes a ServiceLogClearRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogClearRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogClearRequest;

        /**
         * Verifies a ServiceLogClearRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogClearRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogClearRequest
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogClearRequest;

        /**
         * Creates a plain object from a ServiceLogClearRequest message. Also converts values to other types if specified.
         * @param message ServiceLogClearRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogClearRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogClearRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceLogClearResponse. */
    interface IServiceLogClearResponse {

        /** ServiceLogClearResponse serviceTypeId */
        serviceTypeId?: (number|Long|null);

        /** ServiceLogClearResponse serviceName */
        serviceName?: (string|null);

        /** ServiceLogClearResponse resourceIdRange */
        resourceIdRange?: (ServiceLogger.IIdRange[]|null);

        /** ServiceLogClearResponse numDeleted */
        numDeleted?: (number|null);

        /** ServiceLogClearResponse numRemaining */
        numRemaining?: (number|null);
    }

    /** This is the response from the sso_log_clear command */
    class ServiceLogClearResponse implements IServiceLogClearResponse {

        /**
         * Constructs a new ServiceLogClearResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServiceLogger.IServiceLogClearResponse);

        /** ServiceLogClearResponse serviceTypeId. */
        public serviceTypeId: (number|Long);

        /** ServiceLogClearResponse serviceName. */
        public serviceName: string;

        /** ServiceLogClearResponse resourceIdRange. */
        public resourceIdRange: ServiceLogger.IIdRange[];

        /** ServiceLogClearResponse numDeleted. */
        public numDeleted: number;

        /** ServiceLogClearResponse numRemaining. */
        public numRemaining: number;

        /**
         * Creates a new ServiceLogClearResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceLogClearResponse instance
         */
        public static create(properties?: ServiceLogger.IServiceLogClearResponse): ServiceLogger.ServiceLogClearResponse;

        /**
         * Encodes the specified ServiceLogClearResponse message. Does not implicitly {@link ServiceLogger.ServiceLogClearResponse.verify|verify} messages.
         * @param message ServiceLogClearResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServiceLogger.IServiceLogClearResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceLogClearResponse message, length delimited. Does not implicitly {@link ServiceLogger.ServiceLogClearResponse.verify|verify} messages.
         * @param message ServiceLogClearResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServiceLogger.IServiceLogClearResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceLogClearResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceLogClearResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceLogger.ServiceLogClearResponse;

        /**
         * Decodes a ServiceLogClearResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceLogClearResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceLogger.ServiceLogClearResponse;

        /**
         * Verifies a ServiceLogClearResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceLogClearResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceLogClearResponse
         */
        public static fromObject(object: { [k: string]: any }): ServiceLogger.ServiceLogClearResponse;

        /**
         * Creates a plain object from a ServiceLogClearResponse message. Also converts values to other types if specified.
         * @param message ServiceLogClearResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServiceLogger.ServiceLogClearResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceLogClearResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace SsoCloud. */
export namespace SsoCloud {

    /** Authentication protocols we support. */
    enum AuthProtocolType {
        SAML2 = 0
    }

    /** Datatypes of SsoCloudSettings */
    enum DataType {
        ANY = 0,
        BOOLEAN = 1,
        INTEGER = 2,
        STRING = 3,
        BYTES = 4,
        URL = 5,
        com_keepersecurity_proto_SsoCloud_DataType = 6,
        com_keepersecurity_proto_SsoCloud_AuthProtocolType = 7,
        com_keepersecurity_proto_SsoCloud_SsoIdpType = 8
    }

    /** This is how the client can change a Configuration setting */
    enum SsoCloudSettingOperationType {
        SET = 0,
        GET = 1,
        DELETE = 2,
        RESET_TO_DEFAULT = 3
    }

    /** SsoIdpType enum. */
    enum SsoIdpType {
        XX_UNUSED = 0,
        GENERIC = 1,
        F5 = 2,
        GOOGLE = 3,
        OKTA = 4,
        ADFS = 5,
        AZURE = 6,
        ONELOGIN = 7
    }

    /** Properties of a SsoCloudSettingValue. */
    interface ISsoCloudSettingValue {

        /** SsoCloudSettingValue settingId */
        settingId?: (string|null);

        /** SsoCloudSettingValue label */
        label?: (string|null);

        /** SsoCloudSettingValue value */
        value?: (string|null);

        /** SsoCloudSettingValue valueType */
        valueType?: (SsoCloud.DataType|null);

        /** SsoCloudSettingValue ssoRevision */
        ssoRevision?: (number|null);

        /** SsoCloudSettingValue lastModified */
        lastModified?: (string|null);

        /** SsoCloudSettingValue isFromFile */
        isFromFile?: (boolean|null);

        /** SsoCloudSettingValue isEditable */
        isEditable?: (boolean|null);

        /** SsoCloudSettingValue isRequired */
        isRequired?: (boolean|null);
    }

    /** This is the value of a Configuration setting */
    class SsoCloudSettingValue implements ISsoCloudSettingValue {

        /**
         * Constructs a new SsoCloudSettingValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSettingValue);

        /** SsoCloudSettingValue settingId. */
        public settingId: string;

        /** SsoCloudSettingValue label. */
        public label: string;

        /** SsoCloudSettingValue value. */
        public value: string;

        /** SsoCloudSettingValue valueType. */
        public valueType: SsoCloud.DataType;

        /** SsoCloudSettingValue ssoRevision. */
        public ssoRevision: number;

        /** SsoCloudSettingValue lastModified. */
        public lastModified: string;

        /** SsoCloudSettingValue isFromFile. */
        public isFromFile: boolean;

        /** SsoCloudSettingValue isEditable. */
        public isEditable: boolean;

        /** SsoCloudSettingValue isRequired. */
        public isRequired: boolean;

        /**
         * Creates a new SsoCloudSettingValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSettingValue instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSettingValue): SsoCloud.SsoCloudSettingValue;

        /**
         * Encodes the specified SsoCloudSettingValue message. Does not implicitly {@link SsoCloud.SsoCloudSettingValue.verify|verify} messages.
         * @param message SsoCloudSettingValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSettingValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSettingValue message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSettingValue.verify|verify} messages.
         * @param message SsoCloudSettingValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSettingValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSettingValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSettingValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSettingValue;

        /**
         * Decodes a SsoCloudSettingValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSettingValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSettingValue;

        /**
         * Verifies a SsoCloudSettingValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSettingValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSettingValue
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSettingValue;

        /**
         * Creates a plain object from a SsoCloudSettingValue message. Also converts values to other types if specified.
         * @param message SsoCloudSettingValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSettingValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSettingValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSettingAction. */
    interface ISsoCloudSettingAction {

        /** SsoCloudSettingAction settingId */
        settingId?: (string|null);

        /** SsoCloudSettingAction operation */
        operation?: (SsoCloud.SsoCloudSettingOperationType|null);

        /** SsoCloudSettingAction value */
        value?: (string|null);

        /** SsoCloudSettingAction ssoRevision */
        ssoRevision?: (number|null);
    }

    /** This performs an edit operation on a Configuration setting */
    class SsoCloudSettingAction implements ISsoCloudSettingAction {

        /**
         * Constructs a new SsoCloudSettingAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSettingAction);

        /** SsoCloudSettingAction settingId. */
        public settingId: string;

        /** SsoCloudSettingAction operation. */
        public operation: SsoCloud.SsoCloudSettingOperationType;

        /** SsoCloudSettingAction value. */
        public value: string;

        /** SsoCloudSettingAction ssoRevision. */
        public ssoRevision: number;

        /**
         * Creates a new SsoCloudSettingAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSettingAction instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSettingAction): SsoCloud.SsoCloudSettingAction;

        /**
         * Encodes the specified SsoCloudSettingAction message. Does not implicitly {@link SsoCloud.SsoCloudSettingAction.verify|verify} messages.
         * @param message SsoCloudSettingAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSettingAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSettingAction message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSettingAction.verify|verify} messages.
         * @param message SsoCloudSettingAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSettingAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSettingAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSettingAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSettingAction;

        /**
         * Decodes a SsoCloudSettingAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSettingAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSettingAction;

        /**
         * Verifies a SsoCloudSettingAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSettingAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSettingAction
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSettingAction;

        /**
         * Creates a plain object from a SsoCloudSettingAction message. Also converts values to other types if specified.
         * @param message SsoCloudSettingAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSettingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSettingAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudConfigurationRequest. */
    interface ISsoCloudConfigurationRequest {

        /** SsoCloudConfigurationRequest ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);

        /** SsoCloudConfigurationRequest ssoSpConfigurationId */
        ssoSpConfigurationId?: (number|Long|null);

        /** SsoCloudConfigurationRequest name */
        name?: (string|null);

        /** SsoCloudConfigurationRequest ssoAuthProtocolType */
        ssoAuthProtocolType?: (SsoCloud.AuthProtocolType|null);

        /** SsoCloudConfigurationRequest ssoCloudSettingAction */
        ssoCloudSettingAction?: (SsoCloud.ISsoCloudSettingAction[]|null);
    }

    /** Requesting the value of or a change to an SSO Configuration */
    class SsoCloudConfigurationRequest implements ISsoCloudConfigurationRequest {

        /**
         * Constructs a new SsoCloudConfigurationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudConfigurationRequest);

        /** SsoCloudConfigurationRequest ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /** SsoCloudConfigurationRequest ssoSpConfigurationId. */
        public ssoSpConfigurationId: (number|Long);

        /** SsoCloudConfigurationRequest name. */
        public name: string;

        /** SsoCloudConfigurationRequest ssoAuthProtocolType. */
        public ssoAuthProtocolType: SsoCloud.AuthProtocolType;

        /** SsoCloudConfigurationRequest ssoCloudSettingAction. */
        public ssoCloudSettingAction: SsoCloud.ISsoCloudSettingAction[];

        /**
         * Creates a new SsoCloudConfigurationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudConfigurationRequest instance
         */
        public static create(properties?: SsoCloud.ISsoCloudConfigurationRequest): SsoCloud.SsoCloudConfigurationRequest;

        /**
         * Encodes the specified SsoCloudConfigurationRequest message. Does not implicitly {@link SsoCloud.SsoCloudConfigurationRequest.verify|verify} messages.
         * @param message SsoCloudConfigurationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudConfigurationRequest message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudConfigurationRequest.verify|verify} messages.
         * @param message SsoCloudConfigurationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudConfigurationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudConfigurationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudConfigurationRequest;

        /**
         * Decodes a SsoCloudConfigurationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudConfigurationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudConfigurationRequest;

        /**
         * Verifies a SsoCloudConfigurationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudConfigurationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudConfigurationRequest
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudConfigurationRequest;

        /**
         * Creates a plain object from a SsoCloudConfigurationRequest message. Also converts values to other types if specified.
         * @param message SsoCloudConfigurationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudConfigurationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudConfigurationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudConfigurationResponse. */
    interface ISsoCloudConfigurationResponse {

        /** SsoCloudConfigurationResponse ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);

        /** SsoCloudConfigurationResponse ssoSpConfigurationId */
        ssoSpConfigurationId?: (number|Long|null);

        /** SsoCloudConfigurationResponse enterpriseId */
        enterpriseId?: (number|Long|null);

        /** SsoCloudConfigurationResponse name */
        name?: (string|null);

        /** SsoCloudConfigurationResponse protocol */
        protocol?: (string|null);

        /** SsoCloudConfigurationResponse lastModified */
        lastModified?: (string|null);

        /** SsoCloudConfigurationResponse ssoCloudSettingValue */
        ssoCloudSettingValue?: (SsoCloud.ISsoCloudSettingValue[]|null);
    }

    /** This is the response to an SsoConfigurationRequest */
    class SsoCloudConfigurationResponse implements ISsoCloudConfigurationResponse {

        /**
         * Constructs a new SsoCloudConfigurationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudConfigurationResponse);

        /** SsoCloudConfigurationResponse ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /** SsoCloudConfigurationResponse ssoSpConfigurationId. */
        public ssoSpConfigurationId: (number|Long);

        /** SsoCloudConfigurationResponse enterpriseId. */
        public enterpriseId: (number|Long);

        /** SsoCloudConfigurationResponse name. */
        public name: string;

        /** SsoCloudConfigurationResponse protocol. */
        public protocol: string;

        /** SsoCloudConfigurationResponse lastModified. */
        public lastModified: string;

        /** SsoCloudConfigurationResponse ssoCloudSettingValue. */
        public ssoCloudSettingValue: SsoCloud.ISsoCloudSettingValue[];

        /**
         * Creates a new SsoCloudConfigurationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudConfigurationResponse instance
         */
        public static create(properties?: SsoCloud.ISsoCloudConfigurationResponse): SsoCloud.SsoCloudConfigurationResponse;

        /**
         * Encodes the specified SsoCloudConfigurationResponse message. Does not implicitly {@link SsoCloud.SsoCloudConfigurationResponse.verify|verify} messages.
         * @param message SsoCloudConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudConfigurationResponse message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudConfigurationResponse.verify|verify} messages.
         * @param message SsoCloudConfigurationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudConfigurationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudConfigurationResponse;

        /**
         * Decodes a SsoCloudConfigurationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudConfigurationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudConfigurationResponse;

        /**
         * Verifies a SsoCloudConfigurationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudConfigurationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudConfigurationResponse
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudConfigurationResponse;

        /**
         * Creates a plain object from a SsoCloudConfigurationResponse message. Also converts values to other types if specified.
         * @param message SsoCloudConfigurationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudConfigurationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoIdpTypeRequest. */
    interface ISsoIdpTypeRequest {

        /** SsoIdpTypeRequest ssoIdpTypeId */
        ssoIdpTypeId?: (number|null);

        /** SsoIdpTypeRequest tag */
        tag?: (string|null);

        /** SsoIdpTypeRequest label */
        label?: (string|null);
    }

    /** This is a request to the IdpType API. */
    class SsoIdpTypeRequest implements ISsoIdpTypeRequest {

        /**
         * Constructs a new SsoIdpTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoIdpTypeRequest);

        /** SsoIdpTypeRequest ssoIdpTypeId. */
        public ssoIdpTypeId: number;

        /** SsoIdpTypeRequest tag. */
        public tag: string;

        /** SsoIdpTypeRequest label. */
        public label: string;

        /**
         * Creates a new SsoIdpTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoIdpTypeRequest instance
         */
        public static create(properties?: SsoCloud.ISsoIdpTypeRequest): SsoCloud.SsoIdpTypeRequest;

        /**
         * Encodes the specified SsoIdpTypeRequest message. Does not implicitly {@link SsoCloud.SsoIdpTypeRequest.verify|verify} messages.
         * @param message SsoIdpTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoIdpTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoIdpTypeRequest message, length delimited. Does not implicitly {@link SsoCloud.SsoIdpTypeRequest.verify|verify} messages.
         * @param message SsoIdpTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoIdpTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoIdpTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoIdpTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoIdpTypeRequest;

        /**
         * Decodes a SsoIdpTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoIdpTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoIdpTypeRequest;

        /**
         * Verifies a SsoIdpTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoIdpTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoIdpTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoIdpTypeRequest;

        /**
         * Creates a plain object from a SsoIdpTypeRequest message. Also converts values to other types if specified.
         * @param message SsoIdpTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoIdpTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoIdpTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoIdpTypeResponse. */
    interface ISsoIdpTypeResponse {

        /** SsoIdpTypeResponse ssoIdpTypeId */
        ssoIdpTypeId?: (number|null);

        /** SsoIdpTypeResponse tag */
        tag?: (number|null);

        /** SsoIdpTypeResponse label */
        label?: (number|null);
    }

    /** This is a response from the IdpType API calls. */
    class SsoIdpTypeResponse implements ISsoIdpTypeResponse {

        /**
         * Constructs a new SsoIdpTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoIdpTypeResponse);

        /** SsoIdpTypeResponse ssoIdpTypeId. */
        public ssoIdpTypeId: number;

        /** SsoIdpTypeResponse tag. */
        public tag: number;

        /** SsoIdpTypeResponse label. */
        public label: number;

        /**
         * Creates a new SsoIdpTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoIdpTypeResponse instance
         */
        public static create(properties?: SsoCloud.ISsoIdpTypeResponse): SsoCloud.SsoIdpTypeResponse;

        /**
         * Encodes the specified SsoIdpTypeResponse message. Does not implicitly {@link SsoCloud.SsoIdpTypeResponse.verify|verify} messages.
         * @param message SsoIdpTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoIdpTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoIdpTypeResponse message, length delimited. Does not implicitly {@link SsoCloud.SsoIdpTypeResponse.verify|verify} messages.
         * @param message SsoIdpTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoIdpTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoIdpTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoIdpTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoIdpTypeResponse;

        /**
         * Decodes a SsoIdpTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoIdpTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoIdpTypeResponse;

        /**
         * Verifies a SsoIdpTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoIdpTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoIdpTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoIdpTypeResponse;

        /**
         * Creates a plain object from a SsoIdpTypeResponse message. Also converts values to other types if specified.
         * @param message SsoIdpTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoIdpTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoIdpTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSAMLLogRequest. */
    interface ISsoCloudSAMLLogRequest {

        /** SsoCloudSAMLLogRequest ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);
    }

    /** This is the request for the SAML logs of a service provider */
    class SsoCloudSAMLLogRequest implements ISsoCloudSAMLLogRequest {

        /**
         * Constructs a new SsoCloudSAMLLogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSAMLLogRequest);

        /** SsoCloudSAMLLogRequest ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /**
         * Creates a new SsoCloudSAMLLogRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSAMLLogRequest instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSAMLLogRequest): SsoCloud.SsoCloudSAMLLogRequest;

        /**
         * Encodes the specified SsoCloudSAMLLogRequest message. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogRequest.verify|verify} messages.
         * @param message SsoCloudSAMLLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSAMLLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSAMLLogRequest message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogRequest.verify|verify} messages.
         * @param message SsoCloudSAMLLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSAMLLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSAMLLogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSAMLLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSAMLLogRequest;

        /**
         * Decodes a SsoCloudSAMLLogRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSAMLLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSAMLLogRequest;

        /**
         * Verifies a SsoCloudSAMLLogRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSAMLLogRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSAMLLogRequest
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSAMLLogRequest;

        /**
         * Creates a plain object from a SsoCloudSAMLLogRequest message. Also converts values to other types if specified.
         * @param message SsoCloudSAMLLogRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSAMLLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSAMLLogRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSAMLLogEntry. */
    interface ISsoCloudSAMLLogEntry {

        /** SsoCloudSAMLLogEntry serverTime */
        serverTime?: (string|null);

        /** SsoCloudSAMLLogEntry direction */
        direction?: (string|null);

        /** SsoCloudSAMLLogEntry messageType */
        messageType?: (string|null);

        /** SsoCloudSAMLLogEntry messageIssued */
        messageIssued?: (string|null);

        /** SsoCloudSAMLLogEntry fromEntityId */
        fromEntityId?: (string|null);

        /** SsoCloudSAMLLogEntry samlStatus */
        samlStatus?: (string|null);

        /** SsoCloudSAMLLogEntry relayState */
        relayState?: (string|null);

        /** SsoCloudSAMLLogEntry samlContent */
        samlContent?: (string|null);

        /** SsoCloudSAMLLogEntry isSigned */
        isSigned?: (boolean|null);

        /** SsoCloudSAMLLogEntry isOK */
        isOK?: (boolean|null);
    }

    /** This represents one SAML message in the log. */
    class SsoCloudSAMLLogEntry implements ISsoCloudSAMLLogEntry {

        /**
         * Constructs a new SsoCloudSAMLLogEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSAMLLogEntry);

        /** SsoCloudSAMLLogEntry serverTime. */
        public serverTime: string;

        /** SsoCloudSAMLLogEntry direction. */
        public direction: string;

        /** SsoCloudSAMLLogEntry messageType. */
        public messageType: string;

        /** SsoCloudSAMLLogEntry messageIssued. */
        public messageIssued: string;

        /** SsoCloudSAMLLogEntry fromEntityId. */
        public fromEntityId: string;

        /** SsoCloudSAMLLogEntry samlStatus. */
        public samlStatus: string;

        /** SsoCloudSAMLLogEntry relayState. */
        public relayState: string;

        /** SsoCloudSAMLLogEntry samlContent. */
        public samlContent: string;

        /** SsoCloudSAMLLogEntry isSigned. */
        public isSigned: boolean;

        /** SsoCloudSAMLLogEntry isOK. */
        public isOK: boolean;

        /**
         * Creates a new SsoCloudSAMLLogEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSAMLLogEntry instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSAMLLogEntry): SsoCloud.SsoCloudSAMLLogEntry;

        /**
         * Encodes the specified SsoCloudSAMLLogEntry message. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogEntry.verify|verify} messages.
         * @param message SsoCloudSAMLLogEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSAMLLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSAMLLogEntry message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogEntry.verify|verify} messages.
         * @param message SsoCloudSAMLLogEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSAMLLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSAMLLogEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSAMLLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSAMLLogEntry;

        /**
         * Decodes a SsoCloudSAMLLogEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSAMLLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSAMLLogEntry;

        /**
         * Verifies a SsoCloudSAMLLogEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSAMLLogEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSAMLLogEntry
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSAMLLogEntry;

        /**
         * Creates a plain object from a SsoCloudSAMLLogEntry message. Also converts values to other types if specified.
         * @param message SsoCloudSAMLLogEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSAMLLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSAMLLogEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSAMLLogResponse. */
    interface ISsoCloudSAMLLogResponse {

        /** SsoCloudSAMLLogResponse ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);

        /** SsoCloudSAMLLogResponse entry */
        entry?: (SsoCloud.ISsoCloudSAMLLogEntry[]|null);
    }

    /** This represents an array of SAML responses from the log. */
    class SsoCloudSAMLLogResponse implements ISsoCloudSAMLLogResponse {

        /**
         * Constructs a new SsoCloudSAMLLogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSAMLLogResponse);

        /** SsoCloudSAMLLogResponse ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /** SsoCloudSAMLLogResponse entry. */
        public entry: SsoCloud.ISsoCloudSAMLLogEntry[];

        /**
         * Creates a new SsoCloudSAMLLogResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSAMLLogResponse instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSAMLLogResponse): SsoCloud.SsoCloudSAMLLogResponse;

        /**
         * Encodes the specified SsoCloudSAMLLogResponse message. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogResponse.verify|verify} messages.
         * @param message SsoCloudSAMLLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSAMLLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSAMLLogResponse message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogResponse.verify|verify} messages.
         * @param message SsoCloudSAMLLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSAMLLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSAMLLogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSAMLLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSAMLLogResponse;

        /**
         * Decodes a SsoCloudSAMLLogResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSAMLLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSAMLLogResponse;

        /**
         * Verifies a SsoCloudSAMLLogResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSAMLLogResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSAMLLogResponse
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSAMLLogResponse;

        /**
         * Creates a plain object from a SsoCloudSAMLLogResponse message. Also converts values to other types if specified.
         * @param message SsoCloudSAMLLogResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSAMLLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSAMLLogResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSAMLLogClearRequest. */
    interface ISsoCloudSAMLLogClearRequest {

        /** SsoCloudSAMLLogClearRequest ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);
    }

    /** This is a request to clear the SSO SAML log for a specific Service Provider */
    class SsoCloudSAMLLogClearRequest implements ISsoCloudSAMLLogClearRequest {

        /**
         * Constructs a new SsoCloudSAMLLogClearRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSAMLLogClearRequest);

        /** SsoCloudSAMLLogClearRequest ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /**
         * Creates a new SsoCloudSAMLLogClearRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSAMLLogClearRequest instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSAMLLogClearRequest): SsoCloud.SsoCloudSAMLLogClearRequest;

        /**
         * Encodes the specified SsoCloudSAMLLogClearRequest message. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogClearRequest.verify|verify} messages.
         * @param message SsoCloudSAMLLogClearRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSAMLLogClearRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSAMLLogClearRequest message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogClearRequest.verify|verify} messages.
         * @param message SsoCloudSAMLLogClearRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSAMLLogClearRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSAMLLogClearRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSAMLLogClearRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSAMLLogClearRequest;

        /**
         * Decodes a SsoCloudSAMLLogClearRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSAMLLogClearRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSAMLLogClearRequest;

        /**
         * Verifies a SsoCloudSAMLLogClearRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSAMLLogClearRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSAMLLogClearRequest
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSAMLLogClearRequest;

        /**
         * Creates a plain object from a SsoCloudSAMLLogClearRequest message. Also converts values to other types if specified.
         * @param message SsoCloudSAMLLogClearRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSAMLLogClearRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSAMLLogClearRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudSAMLLogClearResponse. */
    interface ISsoCloudSAMLLogClearResponse {

        /** SsoCloudSAMLLogClearResponse ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);
    }

    /** This is the response from the sso_log_saml_clear command */
    class SsoCloudSAMLLogClearResponse implements ISsoCloudSAMLLogClearResponse {

        /**
         * Constructs a new SsoCloudSAMLLogClearResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudSAMLLogClearResponse);

        /** SsoCloudSAMLLogClearResponse ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /**
         * Creates a new SsoCloudSAMLLogClearResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudSAMLLogClearResponse instance
         */
        public static create(properties?: SsoCloud.ISsoCloudSAMLLogClearResponse): SsoCloud.SsoCloudSAMLLogClearResponse;

        /**
         * Encodes the specified SsoCloudSAMLLogClearResponse message. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogClearResponse.verify|verify} messages.
         * @param message SsoCloudSAMLLogClearResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudSAMLLogClearResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudSAMLLogClearResponse message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudSAMLLogClearResponse.verify|verify} messages.
         * @param message SsoCloudSAMLLogClearResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudSAMLLogClearResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudSAMLLogClearResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudSAMLLogClearResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudSAMLLogClearResponse;

        /**
         * Decodes a SsoCloudSAMLLogClearResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudSAMLLogClearResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudSAMLLogClearResponse;

        /**
         * Verifies a SsoCloudSAMLLogClearResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudSAMLLogClearResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudSAMLLogClearResponse
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudSAMLLogClearResponse;

        /**
         * Creates a plain object from a SsoCloudSAMLLogClearResponse message. Also converts values to other types if specified.
         * @param message SsoCloudSAMLLogClearResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudSAMLLogClearResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudSAMLLogClearResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SsoCloudServiceProviderUpdateRequest. */
    interface ISsoCloudServiceProviderUpdateRequest {

        /** SsoCloudServiceProviderUpdateRequest ssoServiceProviderId */
        ssoServiceProviderId?: (number|Long|null);

        /** SsoCloudServiceProviderUpdateRequest ssoSpConfigurationId */
        ssoSpConfigurationId?: (number|Long|null);
    }

    /**
     * This is a request to set the SSO Configuration for an SSO Service Provider, by ID.
     * The response is an instance of SsoCloudConfigurationRequest.
     */
    class SsoCloudServiceProviderUpdateRequest implements ISsoCloudServiceProviderUpdateRequest {

        /**
         * Constructs a new SsoCloudServiceProviderUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: SsoCloud.ISsoCloudServiceProviderUpdateRequest);

        /** SsoCloudServiceProviderUpdateRequest ssoServiceProviderId. */
        public ssoServiceProviderId: (number|Long);

        /** SsoCloudServiceProviderUpdateRequest ssoSpConfigurationId. */
        public ssoSpConfigurationId: (number|Long);

        /**
         * Creates a new SsoCloudServiceProviderUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SsoCloudServiceProviderUpdateRequest instance
         */
        public static create(properties?: SsoCloud.ISsoCloudServiceProviderUpdateRequest): SsoCloud.SsoCloudServiceProviderUpdateRequest;

        /**
         * Encodes the specified SsoCloudServiceProviderUpdateRequest message. Does not implicitly {@link SsoCloud.SsoCloudServiceProviderUpdateRequest.verify|verify} messages.
         * @param message SsoCloudServiceProviderUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SsoCloud.ISsoCloudServiceProviderUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SsoCloudServiceProviderUpdateRequest message, length delimited. Does not implicitly {@link SsoCloud.SsoCloudServiceProviderUpdateRequest.verify|verify} messages.
         * @param message SsoCloudServiceProviderUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SsoCloud.ISsoCloudServiceProviderUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SsoCloudServiceProviderUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SsoCloudServiceProviderUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SsoCloud.SsoCloudServiceProviderUpdateRequest;

        /**
         * Decodes a SsoCloudServiceProviderUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SsoCloudServiceProviderUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SsoCloud.SsoCloudServiceProviderUpdateRequest;

        /**
         * Verifies a SsoCloudServiceProviderUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SsoCloudServiceProviderUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SsoCloudServiceProviderUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): SsoCloud.SsoCloudServiceProviderUpdateRequest;

        /**
         * Creates a plain object from a SsoCloudServiceProviderUpdateRequest message. Also converts values to other types if specified.
         * @param message SsoCloudServiceProviderUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SsoCloud.SsoCloudServiceProviderUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SsoCloudServiceProviderUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Upsell. */
export namespace Upsell {

    /** Properties of an UpsellRequest. */
    interface IUpsellRequest {

        /** UpsellRequest email */
        email?: (string|null);

        /** UpsellRequest locale */
        locale?: (string|null);

        /** UpsellRequest clientVersion */
        clientVersion?: (string|null);

        /** UpsellRequest sessionToken */
        sessionToken?: (string|null);
    }

    /** Represents an UpsellRequest. */
    class UpsellRequest implements IUpsellRequest {

        /**
         * Constructs a new UpsellRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: Upsell.IUpsellRequest);

        /** UpsellRequest email. */
        public email: string;

        /** UpsellRequest locale. */
        public locale: string;

        /** UpsellRequest clientVersion. */
        public clientVersion: string;

        /** UpsellRequest sessionToken. */
        public sessionToken: string;

        /**
         * Creates a new UpsellRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpsellRequest instance
         */
        public static create(properties?: Upsell.IUpsellRequest): Upsell.UpsellRequest;

        /**
         * Encodes the specified UpsellRequest message. Does not implicitly {@link Upsell.UpsellRequest.verify|verify} messages.
         * @param message UpsellRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Upsell.IUpsellRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpsellRequest message, length delimited. Does not implicitly {@link Upsell.UpsellRequest.verify|verify} messages.
         * @param message UpsellRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Upsell.IUpsellRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpsellRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpsellRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Upsell.UpsellRequest;

        /**
         * Decodes an UpsellRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpsellRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Upsell.UpsellRequest;

        /**
         * Verifies an UpsellRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpsellRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpsellRequest
         */
        public static fromObject(object: { [k: string]: any }): Upsell.UpsellRequest;

        /**
         * Creates a plain object from an UpsellRequest message. Also converts values to other types if specified.
         * @param message UpsellRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Upsell.UpsellRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpsellRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpsellResponse. */
    interface IUpsellResponse {

        /** UpsellResponse UpsellBanner */
        UpsellBanner?: (Upsell.IUpsellBanner[]|null);
    }

    /** Represents an UpsellResponse. */
    class UpsellResponse implements IUpsellResponse {

        /**
         * Constructs a new UpsellResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Upsell.IUpsellResponse);

        /** UpsellResponse UpsellBanner. */
        public UpsellBanner: Upsell.IUpsellBanner[];

        /**
         * Creates a new UpsellResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpsellResponse instance
         */
        public static create(properties?: Upsell.IUpsellResponse): Upsell.UpsellResponse;

        /**
         * Encodes the specified UpsellResponse message. Does not implicitly {@link Upsell.UpsellResponse.verify|verify} messages.
         * @param message UpsellResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Upsell.IUpsellResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpsellResponse message, length delimited. Does not implicitly {@link Upsell.UpsellResponse.verify|verify} messages.
         * @param message UpsellResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Upsell.IUpsellResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpsellResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpsellResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Upsell.UpsellResponse;

        /**
         * Decodes an UpsellResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpsellResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Upsell.UpsellResponse;

        /**
         * Verifies an UpsellResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpsellResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpsellResponse
         */
        public static fromObject(object: { [k: string]: any }): Upsell.UpsellResponse;

        /**
         * Creates a plain object from an UpsellResponse message. Also converts values to other types if specified.
         * @param message UpsellResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Upsell.UpsellResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpsellResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpsellBanner. */
    interface IUpsellBanner {

        /** UpsellBanner bannerId */
        bannerId?: (number|null);

        /** UpsellBanner bannerOkAction */
        bannerOkAction?: (string|null);

        /** UpsellBanner bannerOkButton */
        bannerOkButton?: (string|null);

        /** UpsellBanner bannerCancelAction */
        bannerCancelAction?: (string|null);

        /** UpsellBanner bannerCancelButton */
        bannerCancelButton?: (string|null);

        /** UpsellBanner bannerMessage */
        bannerMessage?: (string|null);

        /** UpsellBanner locale */
        locale?: (string|null);
    }

    /** Represents an UpsellBanner. */
    class UpsellBanner implements IUpsellBanner {

        /**
         * Constructs a new UpsellBanner.
         * @param [properties] Properties to set
         */
        constructor(properties?: Upsell.IUpsellBanner);

        /** UpsellBanner bannerId. */
        public bannerId: number;

        /** UpsellBanner bannerOkAction. */
        public bannerOkAction: string;

        /** UpsellBanner bannerOkButton. */
        public bannerOkButton: string;

        /** UpsellBanner bannerCancelAction. */
        public bannerCancelAction: string;

        /** UpsellBanner bannerCancelButton. */
        public bannerCancelButton: string;

        /** UpsellBanner bannerMessage. */
        public bannerMessage: string;

        /** UpsellBanner locale. */
        public locale: string;

        /**
         * Creates a new UpsellBanner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpsellBanner instance
         */
        public static create(properties?: Upsell.IUpsellBanner): Upsell.UpsellBanner;

        /**
         * Encodes the specified UpsellBanner message. Does not implicitly {@link Upsell.UpsellBanner.verify|verify} messages.
         * @param message UpsellBanner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Upsell.IUpsellBanner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpsellBanner message, length delimited. Does not implicitly {@link Upsell.UpsellBanner.verify|verify} messages.
         * @param message UpsellBanner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Upsell.IUpsellBanner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpsellBanner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpsellBanner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Upsell.UpsellBanner;

        /**
         * Decodes an UpsellBanner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpsellBanner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Upsell.UpsellBanner;

        /**
         * Verifies an UpsellBanner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpsellBanner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpsellBanner
         */
        public static fromObject(object: { [k: string]: any }): Upsell.UpsellBanner;

        /**
         * Creates a plain object from an UpsellBanner message. Also converts values to other types if specified.
         * @param message UpsellBanner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Upsell.UpsellBanner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpsellBanner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ClientType enum. */
    enum ClientType {
        DEFAULT_CLIENT_TYPE = 0,
        ALL = 1,
        ANDROID = 2,
        IOS = 3,
        MICROSOFT = 4,
        WEBAPP = 5
    }

    /** ClientVersion enum. */
    enum ClientVersion {
        DEFAULT_VERSION = 0,
        SUPPORTS_ALL = 1,
        BASEVERSION = 14,
        ABOVERANGE = 15
    }
}
