import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file user_consent_types.proto.
 */
export declare const file_user_consent_types: GenFile;
/**
 * @generated from message sync_pb.UserConsentTypes
 */
export type UserConsentTypes = Message<"sync_pb.UserConsentTypes"> & {};
/**
 * Describes the message sync_pb.UserConsentTypes.
 * Use `create(UserConsentTypesSchema)` to create a new message.
 */
export declare const UserConsentTypesSchema: GenMessage<UserConsentTypes>;
/**
 * The user consent for the ARC Backup And Restore feature. The consent
 * status is determined by the corresponding setting on the ARC setup dialog.
 *
 * @generated from message sync_pb.UserConsentTypes.ArcBackupAndRestoreConsent
 */
export type UserConsentTypes_ArcBackupAndRestoreConsent = Message<"sync_pb.UserConsentTypes.ArcBackupAndRestoreConsent"> & {
    /**
     * Ids of the strings of the setting text presented to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 1;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked when consenting.
     *
     * @generated from field: optional int32 confirmation_grd_id = 2;
     */
    confirmationGrdId: number;
    /**
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 3;
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentTypes.ArcBackupAndRestoreConsent.
 * Use `create(UserConsentTypes_ArcBackupAndRestoreConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_ArcBackupAndRestoreConsentSchema: GenMessage<UserConsentTypes_ArcBackupAndRestoreConsent>;
/**
 * The user consent for the Google Location Service. The consent status is
 * determined by the corresponding setting on the ARC setup dialog.
 *
 * @generated from message sync_pb.UserConsentTypes.ArcGoogleLocationServiceConsent
 */
export type UserConsentTypes_ArcGoogleLocationServiceConsent = Message<"sync_pb.UserConsentTypes.ArcGoogleLocationServiceConsent"> & {
    /**
     * Ids of the strings of the setting text presented to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 1;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked when consenting.
     *
     * @generated from field: optional int32 confirmation_grd_id = 2;
     */
    confirmationGrdId: number;
    /**
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 3;
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentTypes.ArcGoogleLocationServiceConsent.
 * Use `create(UserConsentTypes_ArcGoogleLocationServiceConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_ArcGoogleLocationServiceConsentSchema: GenMessage<UserConsentTypes_ArcGoogleLocationServiceConsent>;
/**
 * The user consent for the Play terms of service is determined by the user
 * action on the ARC setup dialog that presents the Play Terms of Service.
 *
 * @generated from message sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent
 */
export type UserConsentTypes_ArcPlayTermsOfServiceConsent = Message<"sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent"> & {
    /**
     * The length of the UTF-8 encoded string of the Play Terms of Service
     * text. The length is given in number of bytes.
     *
     * @generated from field: optional int32 play_terms_of_service_text_length = 1;
     */
    playTermsOfServiceTextLength: number;
    /**
     * The SHA1 hash of UTF-8 encoded string of the Play Terms of Service
     * displayed to the user.
     *
     * @generated from field: optional bytes play_terms_of_service_hash = 2;
     */
    playTermsOfServiceHash: Uint8Array;
    /**
     * GRD Ids of the strings on the consent UI that was shown to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 5;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked when consenting.
     *
     * @generated from field: optional int32 confirmation_grd_id = 3;
     */
    confirmationGrdId: number;
    /**
     * The status of the Play Terms of Service consent. This specifies whether
     * the consent was given or not given/revoked.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 4;
     */
    status: UserConsentTypes_ConsentStatus;
    /**
     * The user flow during which the consent was recorded. This is necessary in
     * order to create the correct UI context and Event for the backend.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.ConsentFlow consent_flow = 6;
     */
    consentFlow: UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow;
};
/**
 * Describes the message sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.
 * Use `create(UserConsentTypes_ArcPlayTermsOfServiceConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_ArcPlayTermsOfServiceConsentSchema: GenMessage<UserConsentTypes_ArcPlayTermsOfServiceConsent>;
/**
 * Enum describing different user flow during which the ARC Play Terms of
 * service consent can be recorded.
 *
 * @generated from enum sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.ConsentFlow
 */
export declare enum UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow {
    /**
     * The ARC setup flow on a CROS device.
     *
     * @generated from enum value: SETUP = 1;
     */
    SETUP = 1,
    /**
     * The user flow for changing the ARC setting on a CROS device.
     *
     * @generated from enum value: SETTING_CHANGE = 2;
     */
    SETTING_CHANGE = 2
}
/**
 * Describes the enum sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.ConsentFlow.
 */
export declare const UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlowSchema: GenEnum<UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow>;
/**
 * The User Consent for Chrome Sync is determined by the user action on the
 * corresponding Sync Consent dialog.
 *
 * @generated from message sync_pb.UserConsentTypes.SyncConsent
 */
export type UserConsentTypes_SyncConsent = Message<"sync_pb.UserConsentTypes.SyncConsent"> & {
    /**
     * Ids of the strings of the sync consent text presented to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 1;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked in order to confirm
     * and close the sync consent dialog.
     *
     * @generated from field: optional int32 confirmation_grd_id = 2;
     */
    confirmationGrdId: number;
    /**
     * The status of the sync consent. This specifies whether the consent was
     * given or not given/revoked.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 3;
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentTypes.SyncConsent.
 * Use `create(UserConsentTypes_SyncConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_SyncConsentSchema: GenMessage<UserConsentTypes_SyncConsent>;
/**
 * The unified User Consent for Chrome is determined by the user action on the
 * corresponding Chrome Consent dialog.
 *
 * @generated from message sync_pb.UserConsentTypes.UnifiedConsent
 */
export type UserConsentTypes_UnifiedConsent = Message<"sync_pb.UserConsentTypes.UnifiedConsent"> & {
    /**
     * Ids of the strings of the unified Chrome consent text presented to the
     * user.
     *
     * @generated from field: repeated int32 description_grd_ids = 1;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked in order to confirm
     * and close the unified Chrome consent dialog.
     *
     * @generated from field: optional int32 confirmation_grd_id = 2;
     */
    confirmationGrdId: number;
    /**
     * The status of the unified Chrome consent. This specifies whether the
     * consent was given or not given/revoked.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 3;
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentTypes.UnifiedConsent.
 * Use `create(UserConsentTypes_UnifiedConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_UnifiedConsentSchema: GenMessage<UserConsentTypes_UnifiedConsent>;
/**
 * The User Consent for Assistant activity control is determined by the user
 * action on the Assistant opt-in flow.
 *
 * @generated from message sync_pb.UserConsentTypes.AssistantActivityControlConsent
 */
export type UserConsentTypes_AssistantActivityControlConsent = Message<"sync_pb.UserConsentTypes.AssistantActivityControlConsent"> & {
    /**
     * An opaque token to for ui auditing, which strengthens the audit trail.
     *
     * @generated from field: optional bytes ui_audit_key = 1;
     */
    uiAuditKey: Uint8Array;
    /**
     * The status of the Assistant activity control consent. This specifies
     * whether the consent was given or not given.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 2;
     */
    status: UserConsentTypes_ConsentStatus;
    /**
     * The activity control setting which the consent was given or not given to.
     * Clients before M93 did not set this field. Such consents should be
     * treated as applying to ALL.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.AssistantActivityControlConsent.SettingType setting_type = 3;
     */
    settingType: UserConsentTypes_AssistantActivityControlConsent_SettingType;
};
/**
 * Describes the message sync_pb.UserConsentTypes.AssistantActivityControlConsent.
 * Use `create(UserConsentTypes_AssistantActivityControlConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_AssistantActivityControlConsentSchema: GenMessage<UserConsentTypes_AssistantActivityControlConsent>;
/**
 * Enum denoting different Assistant activity control setting type.
 *
 * @generated from enum sync_pb.UserConsentTypes.AssistantActivityControlConsent.SettingType
 */
export declare enum UserConsentTypes_AssistantActivityControlConsent_SettingType {
    /**
     * Legacy clients (< M93) did not set a SettingType; for those,
     * UNSPECIFIED should be interpreted as ALL. Newer clients should always
     * set it explicitly.
     *
     * @generated from enum value: SETTING_TYPE_UNSPECIFIED = 0;
     */
    SETTING_TYPE_UNSPECIFIED = 0,
    /**
     * All Settings.
     *
     * @generated from enum value: ALL = 1;
     */
    ALL = 1,
    /**
     * @generated from enum value: WEB_AND_APP_ACTIVITY = 2;
     */
    WEB_AND_APP_ACTIVITY = 2,
    /**
     * @generated from enum value: DEVICE_APPS = 3;
     */
    DEVICE_APPS = 3
}
/**
 * Describes the enum sync_pb.UserConsentTypes.AssistantActivityControlConsent.SettingType.
 */
export declare const UserConsentTypes_AssistantActivityControlConsent_SettingTypeSchema: GenEnum<UserConsentTypes_AssistantActivityControlConsent_SettingType>;
/**
 * The User Consent for downloading and using passwords stored in the user's
 * Google Account. Determined during the opt-in flow for the feature.
 *
 * @generated from message sync_pb.UserConsentTypes.AccountPasswordsConsent
 */
export type UserConsentTypes_AccountPasswordsConsent = Message<"sync_pb.UserConsentTypes.AccountPasswordsConsent"> & {
    /**
     * Ids of the strings of the consent text presented to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 1;
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked in order to confirm
     * the consent dialog.
     *
     * @generated from field: optional int32 confirmation_grd_id = 2;
     */
    confirmationGrdId: number;
    /**
     * The status of the consent. This specifies whether the consent was given
     * or not given/revoked.
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 3;
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentTypes.AccountPasswordsConsent.
 * Use `create(UserConsentTypes_AccountPasswordsConsentSchema)` to create a new message.
 */
export declare const UserConsentTypes_AccountPasswordsConsentSchema: GenMessage<UserConsentTypes_AccountPasswordsConsent>;
/**
 * The status of a particular User Consent. The status describes the state
 * of the consent as it is: given, not_given.
 *
 * @generated from enum sync_pb.UserConsentTypes.ConsentStatus
 */
export declare enum UserConsentTypes_ConsentStatus {
    /**
     * The status is unspecified e.g. because the user was not asked to
     * consent yet or an error happened or the decision was delayed.
     *
     * @generated from enum value: CONSENT_STATUS_UNSPECIFIED = 0;
     */
    CONSENT_STATUS_UNSPECIFIED = 0,
    /**
     * The consent is not given. This means the user either revoked the
     * consent or did not grant it in the first place.
     *
     * @generated from enum value: NOT_GIVEN = 1;
     */
    NOT_GIVEN = 1,
    /**
     * The consent is given. This means the user did grant the consent.
     *
     * @generated from enum value: GIVEN = 2;
     */
    GIVEN = 2
}
/**
 * Describes the enum sync_pb.UserConsentTypes.ConsentStatus.
 */
export declare const UserConsentTypes_ConsentStatusSchema: GenEnum<UserConsentTypes_ConsentStatus>;
//# sourceMappingURL=user_consent_types_pb.d.ts.map