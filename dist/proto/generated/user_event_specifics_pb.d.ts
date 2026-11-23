import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { GaiaPasswordReuse } from "./gaia_password_reuse_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file user_event_specifics.proto.
 */
export declare const file_user_event_specifics: GenFile;
/**
 * @generated from message sync_pb.UserEventSpecifics
 */
export type UserEventSpecifics = Message<"sync_pb.UserEventSpecifics"> & {
    /**
     * Time of event, as measured by client in microseconds since Windows epoch.
     *
     * @generated from field: optional int64 event_time_usec = 1;
     */
    eventTimeUsec: bigint;
    /**
     * The |global_id| field of the associated navigation, if there is one.
     *
     * @generated from field: optional int64 navigation_id = 2;
     */
    navigationId: bigint;
    /**
     * On startup we generate a new random id to identify which FieldTrialEvents
     * other events belonged to.
     *
     * @generated from field: optional fixed64 session_id = 3;
     */
    sessionId: bigint;
    /**
     * @generated from oneof sync_pb.UserEventSpecifics.event
     */
    event: {
        /**
         * @generated from field: sync_pb.UserEventSpecifics.Test test_event = 8;
         */
        value: UserEventSpecifics_Test;
        case: "testEvent";
    } | {
        /**
         * @generated from field: sync_pb.UserEventSpecifics.LanguageDetection language_detection_event = 10 [deprecated = true];
         * @deprecated
         */
        value: UserEventSpecifics_LanguageDetection;
        case: "languageDetectionEvent";
    } | {
        /**
         * @generated from field: sync_pb.UserEventSpecifics.Translation translation_event = 11 [deprecated = true];
         * @deprecated
         */
        value: UserEventSpecifics_Translation;
        case: "translationEvent";
    } | {
        /**
         * Happens when a user types their Google account password on another site.
         *
         * @generated from field: sync_pb.GaiaPasswordReuse gaia_password_reuse_event = 104;
         */
        value: GaiaPasswordReuse;
        case: "gaiaPasswordReuseEvent";
    } | {
        /**
         * @generated from field: sync_pb.UserEventSpecifics.GaiaPasswordCaptured gaia_password_captured_event = 15;
         */
        value: UserEventSpecifics_GaiaPasswordCaptured;
        case: "gaiaPasswordCapturedEvent";
    } | {
        /**
         * @generated from field: sync_pb.UserEventSpecifics.FlocIdComputed floc_id_computed_event = 16;
         */
        value: UserEventSpecifics_FlocIdComputed;
        case: "flocIdComputedEvent";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.UserEventSpecifics.
 * Use `create(UserEventSpecificsSchema)` to create a new message.
 */
export declare const UserEventSpecificsSchema: GenMessage<UserEventSpecifics>;
/**
 * Used for testing and debugging EventLog system.
 *
 * @generated from message sync_pb.UserEventSpecifics.Test
 */
export type UserEventSpecifics_Test = Message<"sync_pb.UserEventSpecifics.Test"> & {};
/**
 * Describes the message sync_pb.UserEventSpecifics.Test.
 * Use `create(UserEventSpecifics_TestSchema)` to create a new message.
 */
export declare const UserEventSpecifics_TestSchema: GenMessage<UserEventSpecifics_Test>;
/**
 * Language detection output.
 *
 * @generated from message sync_pb.UserEventSpecifics.LanguageDetection
 * @deprecated
 */
export type UserEventSpecifics_LanguageDetection = Message<"sync_pb.UserEventSpecifics.LanguageDetection"> & {
    /**
     * Top n languages. Typically we just log the top language, but for page
     * that we're not confident about, we may log up to 3 top languages in
     * descending order.
     *
     * @generated from field: repeated sync_pb.UserEventSpecifics.LanguageDetection.Language detected_languages = 1;
     */
    detectedLanguages: UserEventSpecifics_LanguageDetection_Language[];
    /**
     * Adopted language code is the code of final determined language.
     * It will be stored only if it's different from the first detected
     * language.
     *
     * @generated from field: optional string adopted_language_code = 2;
     */
    adoptedLanguageCode: string;
};
/**
 * Describes the message sync_pb.UserEventSpecifics.LanguageDetection.
 * Use `create(UserEventSpecifics_LanguageDetectionSchema)` to create a new message.
 * @deprecated
 */
export declare const UserEventSpecifics_LanguageDetectionSchema: GenMessage<UserEventSpecifics_LanguageDetection>;
/**
 * @generated from message sync_pb.UserEventSpecifics.LanguageDetection.Language
 * @deprecated
 */
export type UserEventSpecifics_LanguageDetection_Language = Message<"sync_pb.UserEventSpecifics.LanguageDetection.Language"> & {
    /**
     * ISO 639 language code will be used.
     *
     * @generated from field: optional string language_code = 1;
     */
    languageCode: string;
    /**
     * Whether the detected language is reliable, note this is determined by
     * the CLD3.
     *
     * @generated from field: optional bool is_reliable = 2;
     */
    isReliable: boolean;
};
/**
 * Describes the message sync_pb.UserEventSpecifics.LanguageDetection.Language.
 * Use `create(UserEventSpecifics_LanguageDetection_LanguageSchema)` to create a new message.
 * @deprecated
 */
export declare const UserEventSpecifics_LanguageDetection_LanguageSchema: GenMessage<UserEventSpecifics_LanguageDetection_Language>;
/**
 * User translated a page or interacted with translate suggestion.
 *
 * @generated from message sync_pb.UserEventSpecifics.Translation
 * @deprecated
 */
export type UserEventSpecifics_Translation = Message<"sync_pb.UserEventSpecifics.Translation"> & {
    /**
     * Source language of the translation.
     *
     * @generated from field: optional string from_language_code = 1;
     */
    fromLanguageCode: string;
    /**
     * Target language of the translation.
     *
     * @generated from field: optional string to_language_code = 2;
     */
    toLanguageCode: string;
    /**
     * @generated from field: optional sync_pb.UserEventSpecifics.Translation.Interaction interaction = 3;
     */
    interaction: UserEventSpecifics_Translation_Interaction;
};
/**
 * Describes the message sync_pb.UserEventSpecifics.Translation.
 * Use `create(UserEventSpecifics_TranslationSchema)` to create a new message.
 * @deprecated
 */
export declare const UserEventSpecifics_TranslationSchema: GenMessage<UserEventSpecifics_Translation>;
/**
 * @generated from enum sync_pb.UserEventSpecifics.Translation.Interaction
 * @deprecated
 */
export declare enum UserEventSpecifics_Translation_Interaction {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: ACCEPT = 1;
     */
    ACCEPT = 1,
    /**
     * @generated from enum value: DECLINE = 2;
     */
    DECLINE = 2,
    /**
     * This happens when user scroll or click outside the UI without
     * translation.
     *
     * @generated from enum value: IGNORED = 3;
     */
    IGNORED = 3,
    /**
     * This happens when user choose to close the translation window without
     * translation.
     *
     * @generated from enum value: DISMISSED = 4;
     */
    DISMISSED = 4,
    /**
     * User manually entered either language.
     * In this case, from_language_code and to_language_code will be user
     * chosen values.
     *
     * @generated from enum value: MANUAL = 5;
     */
    MANUAL = 5,
    /**
     * User choose to revert the translation, in this case, from_language_code
     * and to_language_code will be previous chosen values.
     *
     * @generated from enum value: TRANSLATION_REVERTED = 6;
     */
    TRANSLATION_REVERTED = 6,
    /**
     * Automatically triggered translation.
     * User sets always translate in user settings.
     *
     * @generated from enum value: AUTO_TRANSLATION_BY_PREF = 7;
     */
    AUTO_TRANSLATION_BY_PREF = 7,
    /**
     * User navigated through a click from a translated page.
     *
     * @generated from enum value: AUTO_TRANSLATION_BY_LINK = 8;
     */
    AUTO_TRANSLATION_BY_LINK = 8,
    /**
     * Failed to initialize the translate script, this can happen for iOS due
     * to CSPs.
     *
     * @generated from enum value: INITIALIZATION_ERROR = 9;
     */
    INITIALIZATION_ERROR = 9
}
/**
 * Describes the enum sync_pb.UserEventSpecifics.Translation.Interaction.
 * @deprecated
 */
export declare const UserEventSpecifics_Translation_InteractionSchema: GenEnum<UserEventSpecifics_Translation_Interaction>;
/**
 * Logged when the user logs into Google, and at least once per 28d.
 *
 * @generated from message sync_pb.UserEventSpecifics.GaiaPasswordCaptured
 */
export type UserEventSpecifics_GaiaPasswordCaptured = Message<"sync_pb.UserEventSpecifics.GaiaPasswordCaptured"> & {
    /**
     * @generated from field: optional sync_pb.UserEventSpecifics.GaiaPasswordCaptured.EventTrigger event_trigger = 1;
     */
    eventTrigger: UserEventSpecifics_GaiaPasswordCaptured_EventTrigger;
};
/**
 * Describes the message sync_pb.UserEventSpecifics.GaiaPasswordCaptured.
 * Use `create(UserEventSpecifics_GaiaPasswordCapturedSchema)` to create a new message.
 */
export declare const UserEventSpecifics_GaiaPasswordCapturedSchema: GenMessage<UserEventSpecifics_GaiaPasswordCaptured>;
/**
 * @generated from enum sync_pb.UserEventSpecifics.GaiaPasswordCaptured.EventTrigger
 */
export declare enum UserEventSpecifics_GaiaPasswordCaptured_EventTrigger {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Event added because user logged in.
     *
     * @generated from enum value: USER_LOGGED_IN = 1;
     */
    USER_LOGGED_IN = 1,
    /**
     * Event added because 28d timer fired.
     *
     * @generated from enum value: EXPIRED_28D_TIMER = 2;
     */
    EXPIRED_28D_TIMER = 2
}
/**
 * Describes the enum sync_pb.UserEventSpecifics.GaiaPasswordCaptured.EventTrigger.
 */
export declare const UserEventSpecifics_GaiaPasswordCaptured_EventTriggerSchema: GenEnum<UserEventSpecifics_GaiaPasswordCaptured_EventTrigger>;
/**
 * @generated from message sync_pb.UserEventSpecifics.FlocIdComputed
 */
export type UserEventSpecifics_FlocIdComputed = Message<"sync_pb.UserEventSpecifics.FlocIdComputed"> & {
    /**
     * If not set, it means that the floc is disabled.
     *
     * @generated from field: optional uint64 floc_id = 2;
     */
    flocId: bigint;
};
/**
 * Describes the message sync_pb.UserEventSpecifics.FlocIdComputed.
 * Use `create(UserEventSpecifics_FlocIdComputedSchema)` to create a new message.
 */
export declare const UserEventSpecifics_FlocIdComputedSchema: GenMessage<UserEventSpecifics_FlocIdComputed>;
/**
 * @generated from enum sync_pb.UserEventSpecifics.FlocIdComputed.EventTrigger
 */
export declare enum UserEventSpecifics_FlocIdComputed_EventTrigger {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Event added because the floc id is computed for the 1st floc session.
     *
     * @generated from enum value: NEW = 1;
     */
    NEW = 1,
    /**
     * Event added because the floc id is re-computed due to a long period of
     * time has passed since the last computation.
     *
     * @generated from enum value: REFRESHED = 2;
     */
    REFRESHED = 2,
    /**
     * Event added because the floc id is re-computed due to history deletion.
     *
     * @generated from enum value: HISTORY_DELETE = 3;
     */
    HISTORY_DELETE = 3
}
/**
 * Describes the enum sync_pb.UserEventSpecifics.FlocIdComputed.EventTrigger.
 */
export declare const UserEventSpecifics_FlocIdComputed_EventTriggerSchema: GenEnum<UserEventSpecifics_FlocIdComputed_EventTrigger>;
//# sourceMappingURL=user_event_specifics_pb.d.ts.map