import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SyncEnums_DeviceFormFactor, SyncEnums_DeviceType, SyncEnums_OsType } from "./sync_enums_pb";
import type { BraveSpecificFields } from "./brave_device_info_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file device_info_specifics.proto.
 */
export declare const file_device_info_specifics: GenFile;
/**
 * Information about a device that is running a sync-enabled Chrome browser.  We
 * are mapping the per-client cache guid to more specific information about the
 * device.
 *
 * @generated from message sync_pb.DeviceInfoSpecifics
 */
export type DeviceInfoSpecifics = Message<"sync_pb.DeviceInfoSpecifics"> & {
    /**
     * The cache_guid created to identify a sync client on this device.
     *
     * @generated from field: optional string cache_guid = 1;
     */
    cacheGuid: string;
    /**
     * A non-unique but human readable name to describe this client.
     *
     * @generated from field: optional string client_name = 2;
     */
    clientName: string;
    /**
     * The platform of the device.
     * Deprecated in M110, but still populated for backwards compatibility.
     * Replaced by os_type + device_form_factor.
     *
     * @generated from field: optional sync_pb.SyncEnums.DeviceType device_type = 3 [deprecated = true];
     * @deprecated
     */
    deviceType: SyncEnums_DeviceType;
    /**
     * The UserAgent used when contacting the Chrome Sync server.
     * Only present when talking to the HTTP server.
     *
     * @generated from field: optional string sync_user_agent = 4;
     */
    syncUserAgent: string;
    /**
     * The Chrome instance's version.  Updated (if necessary) on every startup.
     * DEPRECATED in M92. Still populated for backward compatibility.
     *
     * @generated from field: optional string chrome_version = 5 [deprecated = true];
     * @deprecated
     */
    chromeVersion: string;
    /**
     * Last time when pre-sync data on the device was saved. The device can be
     * restored to state back to this time. In millisecond since UNIX epoch.
     * DEPRECATED in M50.
     *
     * @generated from field: optional int64 deprecated_backup_timestamp = 6 [deprecated = true];
     * @deprecated
     */
    deprecatedBackupTimestamp: bigint;
    /**
     * Device_id that is stable until user signs out. This device_id is used for
     * annotating login scoped refresh token. Present only for Chrome Clients.
     *
     * @generated from field: optional string signin_scoped_device_id = 7;
     */
    signinScopedDeviceId: string;
    /**
     * This field is updated to be the current time periodically, and is also set
     * to the current time whenever another field changes. By examining the
     * difference between this field and the current time, it should be possible
     * to reason about the inactivity of any device that was syncing at one time.
     *
     * @generated from field: optional int64 last_updated_timestamp = 8;
     */
    lastUpdatedTimestamp: bigint;
    /**
     * Device info fields that are specific to a feature. This is information that
     * can not be derived from the other fields in the proto and are not general
     * enough to be used by another feature.
     *
     * @generated from field: optional sync_pb.FeatureSpecificFields feature_fields = 9;
     */
    featureFields?: FeatureSpecificFields;
    /**
     * Device specific information for Sharing feature.
     *
     * @generated from field: optional sync_pb.SharingSpecificFields sharing_fields = 10;
     */
    sharingFields?: SharingSpecificFields;
    /**
     * Model of device.
     *
     * @generated from field: optional string model = 11;
     */
    model: string;
    /**
     * Name of device manufacturer.
     *
     * @generated from field: optional string manufacturer = 12;
     */
    manufacturer: string;
    /**
     * The interval in minutes with which |last_updated_timestamp| is updated to
     * the sync servers if online and while sync is actively running (e.g.
     * excludes backgrounded apps on Android). Introduced in M81. The legacy
     * default was 1 day.
     *
     * @generated from field: optional int32 pulse_interval_in_minutes = 13;
     */
    pulseIntervalInMinutes: number;
    /**
     * Device specific information for Sync invalidations.
     *
     * @generated from field: optional sync_pb.InvalidationSpecificFields invalidation_fields = 14;
     */
    invalidationFields?: InvalidationSpecificFields;
    /**
     * Information for contacting this device in order to perform security key
     * operations.
     *
     * @generated from field: optional sync_pb.PhoneAsASecurityKeySpecificFields paask_fields = 15;
     */
    paaskFields?: PhoneAsASecurityKeySpecificFields;
    /**
     * Unique hardware identifier string which details the HW combination of
     * a ChromeOS device. This field will be empty on other OS devices.
     *
     * @generated from field: optional string full_hardware_class = 16;
     */
    fullHardwareClass: string;
    /**
     * Version information to pin-point which client implementation this is.
     *
     * @generated from oneof sync_pb.DeviceInfoSpecifics.client_version_info
     */
    clientVersionInfo: {
        /**
         * @generated from field: sync_pb.ChromeVersionInfo chrome_version_info = 17;
         */
        value: ChromeVersionInfo;
        case: "chromeVersionInfo";
    } | {
        /**
         * @generated from field: sync_pb.GooglePlayServicesVersionInfo google_play_services_version_info = 18;
         */
        value: GooglePlayServicesVersionInfo;
        case: "googlePlayServicesVersionInfo";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * The OS type the device.
     *
     * @generated from field: optional sync_pb.SyncEnums.OsType os_type = 19;
     */
    osType: SyncEnums_OsType;
    /**
     * The form factor of the device.
     *
     * @generated from field: optional sync_pb.SyncEnums.DeviceFormFactor device_form_factor = 20;
     */
    deviceFormFactor: SyncEnums_DeviceFormFactor;
    /**
     * @generated from field: optional sync_pb.BraveSpecificFields brave_fields = 1000;
     */
    braveFields?: BraveSpecificFields;
};
/**
 * Describes the message sync_pb.DeviceInfoSpecifics.
 * Use `create(DeviceInfoSpecificsSchema)` to create a new message.
 */
export declare const DeviceInfoSpecificsSchema: GenMessage<DeviceInfoSpecifics>;
/**
 * Feature specific information about the device that is running a sync-enabled
 * Chrome browser. Adding to this proto is discouraged and should only be added
 * when the information can not be derived more generally.
 *
 * @generated from message sync_pb.FeatureSpecificFields
 */
export type FeatureSpecificFields = Message<"sync_pb.FeatureSpecificFields"> & {
    /**
     * Tracks whether the SendTabToSelf feature is enabled on the device. For this
     * to be true, two things must be true: (1) The receiving side of the feature
     * must be enabled on the device (2) The user has enabled sync for this
     * feature
     *
     * @generated from field: optional bool send_tab_to_self_receiving_enabled = 1;
     */
    sendTabToSelfReceivingEnabled: boolean;
};
/**
 * Describes the message sync_pb.FeatureSpecificFields.
 * Use `create(FeatureSpecificFieldsSchema)` to create a new message.
 */
export declare const FeatureSpecificFieldsSchema: GenMessage<FeatureSpecificFields>;
/**
 * Device specific information for Sharing feature. Used to send end-to-end
 * encrypted message through FCM to other devices.
 *
 * @generated from message sync_pb.SharingSpecificFields
 */
export type SharingSpecificFields = Message<"sync_pb.SharingSpecificFields"> & {
    /**
     * FCM registration token of device subscribed using VAPID key.
     * TODO(crbug.com/1012226): Deprecate when VAPID migration is over.
     *
     * @generated from field: optional string vapid_fcm_token = 1;
     */
    vapidFcmToken: string;
    /**
     * Public key for message encryption [RFC8291] using VAPID key.
     * TODO(crbug.com/1012226): Deprecate when VAPID migration is over.
     *
     * @generated from field: optional bytes vapid_p256dh = 2;
     */
    vapidP256dh: Uint8Array;
    /**
     * Auth secret for message encryption [RFC8291] using VAPID key.
     * TODO(crbug.com/1012226): Deprecate when VAPID migration is over.
     *
     * @generated from field: optional bytes vapid_auth_secret = 3;
     */
    vapidAuthSecret: Uint8Array;
    /**
     * A list of enabled Sharing features.
     *
     * @generated from field: repeated sync_pb.SharingSpecificFields.EnabledFeatures enabled_features = 4;
     */
    enabledFeatures: SharingSpecificFields_EnabledFeatures[];
    /**
     * Deprecated. Use sender_id_fcm_token_v2 for new clients.
     *
     * @generated from field: optional string sender_id_fcm_token_deprecated = 5 [deprecated = true];
     * @deprecated
     */
    senderIdFcmTokenDeprecated: string;
    /**
     * Deprecated. Use sender_id_p256dh_v2 for new clients.
     *
     * @generated from field: optional bytes sender_id_p256dh_deprecated = 6 [deprecated = true];
     * @deprecated
     */
    senderIdP256dhDeprecated: Uint8Array;
    /**
     * Deprecated. Use sender_id_auth_secret_v2 for new clients.
     *
     * @generated from field: optional bytes sender_id_auth_secret_deprecated = 7 [deprecated = true];
     * @deprecated
     */
    senderIdAuthSecretDeprecated: Uint8Array;
    /**
     * FCM registration token of device subscribed using Sharing sender ID.
     *
     * @generated from field: optional string sender_id_fcm_token_v2 = 8;
     */
    senderIdFcmTokenV2: string;
    /**
     * Public key for message encryption [RFC8291] using Sharing sender ID.
     *
     * @generated from field: optional bytes sender_id_p256dh_v2 = 9;
     */
    senderIdP256dhV2: Uint8Array;
    /**
     * Auth secret for message encryption [RFC8291] using Sharing sender ID.
     *
     * @generated from field: optional bytes sender_id_auth_secret_v2 = 10;
     */
    senderIdAuthSecretV2: Uint8Array;
};
/**
 * Describes the message sync_pb.SharingSpecificFields.
 * Use `create(SharingSpecificFieldsSchema)` to create a new message.
 */
export declare const SharingSpecificFieldsSchema: GenMessage<SharingSpecificFields>;
/**
 * Enum defining available Sharing features.
 *
 * @generated from enum sync_pb.SharingSpecificFields.EnabledFeatures
 */
export declare enum SharingSpecificFields_EnabledFeatures {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Supports Click to Call only via VAPID.
     *
     * @generated from enum value: CLICK_TO_CALL_VAPID = 1;
     */
    CLICK_TO_CALL_VAPID = 1,
    /**
     * Supports Shared Clipboard only via VAPID.
     *
     * @generated from enum value: SHARED_CLIPBOARD_VAPID = 2;
     */
    SHARED_CLIPBOARD_VAPID = 2,
    /**
     * @generated from enum value: SMS_FETCHER = 3;
     */
    SMS_FETCHER = 3,
    /**
     * @generated from enum value: REMOTE_COPY = 4;
     */
    REMOTE_COPY = 4,
    /**
     * @generated from enum value: DISCOVERY = 6;
     */
    DISCOVERY = 6,
    /**
     * Suppots Click to Call via both VAPID and sender ID.
     *
     * @generated from enum value: CLICK_TO_CALL_V2 = 7;
     */
    CLICK_TO_CALL_V2 = 7,
    /**
     * Suppots Shared Clipboard via both VAPID and sender ID.
     *
     * @generated from enum value: SHARED_CLIPBOARD_V2 = 8;
     */
    SHARED_CLIPBOARD_V2 = 8,
    /**
     * Supports optimization guide push notification.
     *
     * @generated from enum value: OPTIMIZATION_GUIDE_PUSH_NOTIFICATION = 9;
     */
    OPTIMIZATION_GUIDE_PUSH_NOTIFICATION = 9
}
/**
 * Describes the enum sync_pb.SharingSpecificFields.EnabledFeatures.
 */
export declare const SharingSpecificFields_EnabledFeaturesSchema: GenEnum<SharingSpecificFields_EnabledFeatures>;
/**
 * Device specific information telling how to send invalidations to this device.
 *
 * @generated from message sync_pb.InvalidationSpecificFields
 */
export type InvalidationSpecificFields = Message<"sync_pb.InvalidationSpecificFields"> & {
    /**
     * FCM registration token of device (using Sync sender ID).
     *
     * @generated from field: optional string instance_id_token = 1;
     */
    instanceIdToken: string;
    /**
     * This device wants to receive only invalidations which are related to these
     * types. The legitimate values of this field correspond to the protobuf field
     * numbers of all EntitySpecifics fields supported by the server (see
     * components/sync/protocol/sync.proto).
     *
     * @generated from field: repeated int32 interested_data_type_ids = 2;
     */
    interestedDataTypeIds: number[];
};
/**
 * Describes the message sync_pb.InvalidationSpecificFields.
 * Use `create(InvalidationSpecificFieldsSchema)` to create a new message.
 */
export declare const InvalidationSpecificFieldsSchema: GenMessage<InvalidationSpecificFields>;
/**
 * @generated from message sync_pb.PhoneAsASecurityKeySpecificFields
 */
export type PhoneAsASecurityKeySpecificFields = Message<"sync_pb.PhoneAsASecurityKeySpecificFields"> & {
    /**
     * The encoded tunnel server in the same format as in the BLE advert. See
     * device::cablev2::tunnelserver::DecodeDomain. (Actually a uint16 but
     * proto doesn't have that as a type.)
     *
     * @generated from field: optional uint32 tunnel_server_domain = 1;
     */
    tunnelServerDomain: number;
    /**
     * An FCM token that can be presented to the tunnel server to contact this
     * device.
     *
     * @generated from field: optional bytes contact_id = 2;
     */
    contactId: Uint8Array;
    /**
     * A shared secret key, used to enable communication across devices via
     * unauthenticated channels. Knowledge of this secret acts as proof that the
     * remote end is authorized to talk to the device publishing this secret.
     *
     * @generated from field: optional bytes secret = 3;
     */
    secret: Uint8Array;
    /**
     * An id that identifies |secret|. This, and |secret|, will be rotated and
     * the ID allows this device to know which |secret| the counterparty is
     * using.
     *
     * @generated from field: optional fixed32 id = 4;
     */
    id: number;
    /**
     * A P-256, X9.62-encoded public key for this device. Specific to the Chrome
     * instance.
     *
     * @generated from field: optional bytes peer_public_key_x962 = 5;
     */
    peerPublicKeyX962: Uint8Array;
    /**
     * The credential ID for use when signing into accounts.google.com. This
     * credential ID isn't published as a WebauthnCredentialSpecifics, unlike
     * other passkeys, because it's auto-generated.
     *
     * @generated from field: optional bytes google_credential_id = 6;
     */
    googleCredentialId: Uint8Array;
};
/**
 * Describes the message sync_pb.PhoneAsASecurityKeySpecificFields.
 * Use `create(PhoneAsASecurityKeySpecificFieldsSchema)` to create a new message.
 */
export declare const PhoneAsASecurityKeySpecificFieldsSchema: GenMessage<PhoneAsASecurityKeySpecificFields>;
/**
 * @generated from message sync_pb.ChromeVersionInfo
 */
export type ChromeVersionInfo = Message<"sync_pb.ChromeVersionInfo"> & {
    /**
     * Version number as per https://www.chromium.org/developers/version-numbers.
     *
     * @generated from field: optional string version_number = 1;
     */
    versionNumber: string;
};
/**
 * Describes the message sync_pb.ChromeVersionInfo.
 * Use `create(ChromeVersionInfoSchema)` to create a new message.
 */
export declare const ChromeVersionInfoSchema: GenMessage<ChromeVersionInfo>;
/**
 * @generated from message sync_pb.GooglePlayServicesVersionInfo
 */
export type GooglePlayServicesVersionInfo = Message<"sync_pb.GooglePlayServicesVersionInfo"> & {
    /**
     * @generated from field: optional string apk_version_name = 1;
     */
    apkVersionName: string;
};
/**
 * Describes the message sync_pb.GooglePlayServicesVersionInfo.
 * Use `create(GooglePlayServicesVersionInfoSchema)` to create a new message.
 */
export declare const GooglePlayServicesVersionInfoSchema: GenMessage<GooglePlayServicesVersionInfo>;
//# sourceMappingURL=device_info_specifics_pb.d.ts.map