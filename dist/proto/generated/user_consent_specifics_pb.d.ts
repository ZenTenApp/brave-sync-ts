import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { UserConsentTypes_AccountPasswordsConsent, UserConsentTypes_ArcBackupAndRestoreConsent, UserConsentTypes_ArcGoogleLocationServiceConsent, UserConsentTypes_ArcPlayTermsOfServiceConsent, UserConsentTypes_AssistantActivityControlConsent, UserConsentTypes_ConsentStatus, UserConsentTypes_SyncConsent, UserConsentTypes_UnifiedConsent } from "./user_consent_types_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file user_consent_specifics.proto.
 */
export declare const file_user_consent_specifics: GenFile;
/**
 * Next id: 17
 *
 * ===========================================================================
 * Fields common to all Chrome User Consents.
 * ===========================================================================
 *
 * @generated from message sync_pb.UserConsentSpecifics
 */
export type UserConsentSpecifics = Message<"sync_pb.UserConsentSpecifics"> & {
    /**
     * The UI language Chrome is using, represented as the IETF language tag
     * defined in BCP 47. The region subtag is not included when it adds no
     * distinguishing information to the language tag (e.g. both "en-US"
     * and "fr" are correct here).
     *
     * @generated from field: optional string locale = 4;
     */
    locale: string;
    /**
     * The local time on the client when the user consent was recorded. The time
     * as measured by client is given in microseconds since Windows epoch. This
     * is needed since user consent recording may happen when a client is
     * offline.
     *
     * @generated from field: optional int64 client_consent_time_usec = 12;
     */
    clientConsentTimeUsec: bigint;
    /**
     * @generated from oneof sync_pb.UserConsentSpecifics.consent
     */
    consent: {
        /**
         * @generated from field: sync_pb.UserConsentTypes.SyncConsent sync_consent = 7;
         */
        value: UserConsentTypes_SyncConsent;
        case: "syncConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.ArcBackupAndRestoreConsent arc_backup_and_restore_consent = 8;
         */
        value: UserConsentTypes_ArcBackupAndRestoreConsent;
        case: "arcBackupAndRestoreConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.ArcGoogleLocationServiceConsent arc_location_service_consent = 9;
         */
        value: UserConsentTypes_ArcGoogleLocationServiceConsent;
        case: "arcLocationServiceConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent arc_play_terms_of_service_consent = 10;
         */
        value: UserConsentTypes_ArcPlayTermsOfServiceConsent;
        case: "arcPlayTermsOfServiceConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.UnifiedConsent unified_consent = 13 [deprecated = true];
         * @deprecated
         */
        value: UserConsentTypes_UnifiedConsent;
        case: "unifiedConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.AssistantActivityControlConsent assistant_activity_control_consent = 14;
         */
        value: UserConsentTypes_AssistantActivityControlConsent;
        case: "assistantActivityControlConsent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentTypes.AccountPasswordsConsent account_passwords_consent = 15;
         */
        value: UserConsentTypes_AccountPasswordsConsent;
        case: "accountPasswordsConsent";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * The account ID of the user who gave the consent. This field is used
     * by UserEventService to distinguish consents from different users,
     * as UserConsent does not get deleted when a user signs out. However,
     * it should be cleared before being sent over the wire, as the UserEvent
     * is sent over an authenticated channel, so this information would be
     * redundant.
     *
     * For semantics and usage of the |account_id| in the signin codebase,
     * see IdentityManager::GetPrimaryAccountId() or CoreAccountId.
     *
     * @generated from field: optional string account_id = 6;
     */
    accountId: string;
    /**
     * @generated from field: optional sync_pb.UserConsentSpecifics.Feature feature = 1 [deprecated = true];
     * @deprecated
     */
    feature: UserConsentSpecifics_Feature;
    /**
     * Ids of the strings of the consent text presented to the user.
     *
     * @generated from field: repeated int32 description_grd_ids = 2 [deprecated = true];
     * @deprecated
     */
    descriptionGrdIds: number[];
    /**
     * Id of the string of the UI element the user clicked when consenting.
     *
     * @generated from field: optional int32 confirmation_grd_id = 3 [deprecated = true];
     * @deprecated
     */
    confirmationGrdId: number;
    /**
     * Was the consent for |feature| given or not given (denied/revoked)?
     *
     * @generated from field: optional sync_pb.UserConsentTypes.ConsentStatus status = 5 [deprecated = true];
     * @deprecated
     */
    status: UserConsentTypes_ConsentStatus;
};
/**
 * Describes the message sync_pb.UserConsentSpecifics.
 * Use `create(UserConsentSpecificsSchema)` to create a new message.
 */
export declare const UserConsentSpecificsSchema: GenMessage<UserConsentSpecifics>;
/**
 * Which feature does the consent apply to?
 *
 * @generated from enum sync_pb.UserConsentSpecifics.Feature
 */
export declare enum UserConsentSpecifics_Feature {
    /**
     * @generated from enum value: FEATURE_UNSPECIFIED = 0;
     */
    FEATURE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHROME_SYNC = 1;
     */
    CHROME_SYNC = 1,
    /**
     * @generated from enum value: PLAY_STORE = 2;
     */
    PLAY_STORE = 2,
    /**
     * @generated from enum value: BACKUP_AND_RESTORE = 3;
     */
    BACKUP_AND_RESTORE = 3,
    /**
     * @generated from enum value: GOOGLE_LOCATION_SERVICE = 4;
     */
    GOOGLE_LOCATION_SERVICE = 4,
    /**
     * @generated from enum value: CHROME_UNIFIED_CONSENT = 5;
     */
    CHROME_UNIFIED_CONSENT = 5,
    /**
     * TODO(markusheintz): ASSISTANT_ACTIVITY_CONTROL was only added for
     * compatibility with the Feature enum in UserEventSpecifics.UserConsent.
     * Delete this value once the value is deleted from the other proto.
     *
     * @generated from enum value: ASSISTANT_ACTIVITY_CONTROL = 6;
     */
    ASSISTANT_ACTIVITY_CONTROL = 6
}
/**
 * Describes the enum sync_pb.UserConsentSpecifics.Feature.
 */
export declare const UserConsentSpecifics_FeatureSchema: GenEnum<UserConsentSpecifics_Feature>;
//# sourceMappingURL=user_consent_specifics_pb.d.ts.map