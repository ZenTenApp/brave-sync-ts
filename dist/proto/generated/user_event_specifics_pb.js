// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for user events.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_gaia_password_reuse } from "./gaia_password_reuse_pb";
/**
 * Describes the file user_event_specifics.proto.
 */
export const file_user_event_specifics = /*@__PURE__*/ fileDesc("Chp1c2VyX2V2ZW50X3NwZWNpZmljcy5wcm90bxIHc3luY19wYiLACwoSVXNlckV2ZW50U3BlY2lmaWNzEhcKD2V2ZW50X3RpbWVfdXNlYxgBIAEoAxIVCg1uYXZpZ2F0aW9uX2lkGAIgASgDEhIKCnNlc3Npb25faWQYAyABKAYSNgoKdGVzdF9ldmVudBgIIAEoCzIgLnN5bmNfcGIuVXNlckV2ZW50U3BlY2lmaWNzLlRlc3RIABJVChhsYW5ndWFnZV9kZXRlY3Rpb25fZXZlbnQYCiABKAsyLS5zeW5jX3BiLlVzZXJFdmVudFNwZWNpZmljcy5MYW5ndWFnZURldGVjdGlvbkICGAFIABJIChF0cmFuc2xhdGlvbl9ldmVudBgLIAEoCzInLnN5bmNfcGIuVXNlckV2ZW50U3BlY2lmaWNzLlRyYW5zbGF0aW9uQgIYAUgAEj8KGWdhaWFfcGFzc3dvcmRfcmV1c2VfZXZlbnQYaCABKAsyGi5zeW5jX3BiLkdhaWFQYXNzd29yZFJldXNlSAASWAocZ2FpYV9wYXNzd29yZF9jYXB0dXJlZF9ldmVudBgPIAEoCzIwLnN5bmNfcGIuVXNlckV2ZW50U3BlY2lmaWNzLkdhaWFQYXNzd29yZENhcHR1cmVkSAASTAoWZmxvY19pZF9jb21wdXRlZF9ldmVudBgQIAEoCzIqLnN5bmNfcGIuVXNlckV2ZW50U3BlY2lmaWNzLkZsb2NJZENvbXB1dGVkSAAaBgoEVGVzdBrCAQoRTGFuZ3VhZ2VEZXRlY3Rpb24SUgoSZGV0ZWN0ZWRfbGFuZ3VhZ2VzGAEgAygLMjYuc3luY19wYi5Vc2VyRXZlbnRTcGVjaWZpY3MuTGFuZ3VhZ2VEZXRlY3Rpb24uTGFuZ3VhZ2USHQoVYWRvcHRlZF9sYW5ndWFnZV9jb2RlGAIgASgJGjYKCExhbmd1YWdlEhUKDWxhbmd1YWdlX2NvZGUYASABKAkSEwoLaXNfcmVsaWFibGUYAiABKAg6AhgBGt8CCgtUcmFuc2xhdGlvbhIaChJmcm9tX2xhbmd1YWdlX2NvZGUYASABKAkSGAoQdG9fbGFuZ3VhZ2VfY29kZRgCIAEoCRJICgtpbnRlcmFjdGlvbhgDIAEoDjIzLnN5bmNfcGIuVXNlckV2ZW50U3BlY2lmaWNzLlRyYW5zbGF0aW9uLkludGVyYWN0aW9uIssBCgtJbnRlcmFjdGlvbhILCgdVTktOT1dOEAASCgoGQUNDRVBUEAESCwoHREVDTElORRACEgsKB0lHTk9SRUQQAxINCglESVNNSVNTRUQQBBIKCgZNQU5VQUwQBRIYChRUUkFOU0xBVElPTl9SRVZFUlRFRBAGEhwKGEFVVE9fVFJBTlNMQVRJT05fQllfUFJFRhAHEhwKGEFVVE9fVFJBTlNMQVRJT05fQllfTElOSxAIEhgKFElOSVRJQUxJWkFUSU9OX0VSUk9SEAk6AhgBGrgBChRHYWlhUGFzc3dvcmRDYXB0dXJlZBJUCg1ldmVudF90cmlnZ2VyGAEgASgOMj0uc3luY19wYi5Vc2VyRXZlbnRTcGVjaWZpY3MuR2FpYVBhc3N3b3JkQ2FwdHVyZWQuRXZlbnRUcmlnZ2VyIkoKDEV2ZW50VHJpZ2dlchIPCgtVTlNQRUNJRklFRBAAEhIKDlVTRVJfTE9HR0VEX0lOEAESFQoRRVhQSVJFRF8yOERfVElNRVIQAhqDAQoORmxvY0lkQ29tcHV0ZWQSDwoHZmxvY19pZBgCIAEoBCJLCgxFdmVudFRyaWdnZXISDwoLVU5TUEVDSUZJRUQQABIHCgNORVcQARINCglSRUZSRVNIRUQQAhISCg5ISVNUT1JZX0RFTEVURRADSgQIARACUg1ldmVudF90cmlnZ2VyQgcKBWV2ZW50SgQICRAKSgQIDBANUhFmaWVsZF90cmlhbF9ldmVudFIMdXNlcl9jb25zZW50QjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_gaia_password_reuse]);
/**
 * Describes the message sync_pb.UserEventSpecifics.
 * Use `create(UserEventSpecificsSchema)` to create a new message.
 */
export const UserEventSpecificsSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0);
/**
 * Describes the message sync_pb.UserEventSpecifics.Test.
 * Use `create(UserEventSpecifics_TestSchema)` to create a new message.
 */
export const UserEventSpecifics_TestSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 0);
/**
 * Describes the message sync_pb.UserEventSpecifics.LanguageDetection.
 * Use `create(UserEventSpecifics_LanguageDetectionSchema)` to create a new message.
 * @deprecated
 */
export const UserEventSpecifics_LanguageDetectionSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 1);
/**
 * Describes the message sync_pb.UserEventSpecifics.LanguageDetection.Language.
 * Use `create(UserEventSpecifics_LanguageDetection_LanguageSchema)` to create a new message.
 * @deprecated
 */
export const UserEventSpecifics_LanguageDetection_LanguageSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 1, 0);
/**
 * Describes the message sync_pb.UserEventSpecifics.Translation.
 * Use `create(UserEventSpecifics_TranslationSchema)` to create a new message.
 * @deprecated
 */
export const UserEventSpecifics_TranslationSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 2);
/**
 * @generated from enum sync_pb.UserEventSpecifics.Translation.Interaction
 * @deprecated
 */
export var UserEventSpecifics_Translation_Interaction;
(function (UserEventSpecifics_Translation_Interaction) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: ACCEPT = 1;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["ACCEPT"] = 1] = "ACCEPT";
    /**
     * @generated from enum value: DECLINE = 2;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["DECLINE"] = 2] = "DECLINE";
    /**
     * This happens when user scroll or click outside the UI without
     * translation.
     *
     * @generated from enum value: IGNORED = 3;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["IGNORED"] = 3] = "IGNORED";
    /**
     * This happens when user choose to close the translation window without
     * translation.
     *
     * @generated from enum value: DISMISSED = 4;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["DISMISSED"] = 4] = "DISMISSED";
    /**
     * User manually entered either language.
     * In this case, from_language_code and to_language_code will be user
     * chosen values.
     *
     * @generated from enum value: MANUAL = 5;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["MANUAL"] = 5] = "MANUAL";
    /**
     * User choose to revert the translation, in this case, from_language_code
     * and to_language_code will be previous chosen values.
     *
     * @generated from enum value: TRANSLATION_REVERTED = 6;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["TRANSLATION_REVERTED"] = 6] = "TRANSLATION_REVERTED";
    /**
     * Automatically triggered translation.
     * User sets always translate in user settings.
     *
     * @generated from enum value: AUTO_TRANSLATION_BY_PREF = 7;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["AUTO_TRANSLATION_BY_PREF"] = 7] = "AUTO_TRANSLATION_BY_PREF";
    /**
     * User navigated through a click from a translated page.
     *
     * @generated from enum value: AUTO_TRANSLATION_BY_LINK = 8;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["AUTO_TRANSLATION_BY_LINK"] = 8] = "AUTO_TRANSLATION_BY_LINK";
    /**
     * Failed to initialize the translate script, this can happen for iOS due
     * to CSPs.
     *
     * @generated from enum value: INITIALIZATION_ERROR = 9;
     */
    UserEventSpecifics_Translation_Interaction[UserEventSpecifics_Translation_Interaction["INITIALIZATION_ERROR"] = 9] = "INITIALIZATION_ERROR";
})(UserEventSpecifics_Translation_Interaction || (UserEventSpecifics_Translation_Interaction = {}));
/**
 * Describes the enum sync_pb.UserEventSpecifics.Translation.Interaction.
 * @deprecated
 */
export const UserEventSpecifics_Translation_InteractionSchema = /*@__PURE__*/ enumDesc(file_user_event_specifics, 0, 2, 0);
/**
 * Describes the message sync_pb.UserEventSpecifics.GaiaPasswordCaptured.
 * Use `create(UserEventSpecifics_GaiaPasswordCapturedSchema)` to create a new message.
 */
export const UserEventSpecifics_GaiaPasswordCapturedSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 3);
/**
 * @generated from enum sync_pb.UserEventSpecifics.GaiaPasswordCaptured.EventTrigger
 */
export var UserEventSpecifics_GaiaPasswordCaptured_EventTrigger;
(function (UserEventSpecifics_GaiaPasswordCaptured_EventTrigger) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UserEventSpecifics_GaiaPasswordCaptured_EventTrigger[UserEventSpecifics_GaiaPasswordCaptured_EventTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Event added because user logged in.
     *
     * @generated from enum value: USER_LOGGED_IN = 1;
     */
    UserEventSpecifics_GaiaPasswordCaptured_EventTrigger[UserEventSpecifics_GaiaPasswordCaptured_EventTrigger["USER_LOGGED_IN"] = 1] = "USER_LOGGED_IN";
    /**
     * Event added because 28d timer fired.
     *
     * @generated from enum value: EXPIRED_28D_TIMER = 2;
     */
    UserEventSpecifics_GaiaPasswordCaptured_EventTrigger[UserEventSpecifics_GaiaPasswordCaptured_EventTrigger["EXPIRED_28D_TIMER"] = 2] = "EXPIRED_28D_TIMER";
})(UserEventSpecifics_GaiaPasswordCaptured_EventTrigger || (UserEventSpecifics_GaiaPasswordCaptured_EventTrigger = {}));
/**
 * Describes the enum sync_pb.UserEventSpecifics.GaiaPasswordCaptured.EventTrigger.
 */
export const UserEventSpecifics_GaiaPasswordCaptured_EventTriggerSchema = /*@__PURE__*/ enumDesc(file_user_event_specifics, 0, 3, 0);
/**
 * Describes the message sync_pb.UserEventSpecifics.FlocIdComputed.
 * Use `create(UserEventSpecifics_FlocIdComputedSchema)` to create a new message.
 */
export const UserEventSpecifics_FlocIdComputedSchema = /*@__PURE__*/ messageDesc(file_user_event_specifics, 0, 4);
/**
 * @generated from enum sync_pb.UserEventSpecifics.FlocIdComputed.EventTrigger
 */
export var UserEventSpecifics_FlocIdComputed_EventTrigger;
(function (UserEventSpecifics_FlocIdComputed_EventTrigger) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UserEventSpecifics_FlocIdComputed_EventTrigger[UserEventSpecifics_FlocIdComputed_EventTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Event added because the floc id is computed for the 1st floc session.
     *
     * @generated from enum value: NEW = 1;
     */
    UserEventSpecifics_FlocIdComputed_EventTrigger[UserEventSpecifics_FlocIdComputed_EventTrigger["NEW"] = 1] = "NEW";
    /**
     * Event added because the floc id is re-computed due to a long period of
     * time has passed since the last computation.
     *
     * @generated from enum value: REFRESHED = 2;
     */
    UserEventSpecifics_FlocIdComputed_EventTrigger[UserEventSpecifics_FlocIdComputed_EventTrigger["REFRESHED"] = 2] = "REFRESHED";
    /**
     * Event added because the floc id is re-computed due to history deletion.
     *
     * @generated from enum value: HISTORY_DELETE = 3;
     */
    UserEventSpecifics_FlocIdComputed_EventTrigger[UserEventSpecifics_FlocIdComputed_EventTrigger["HISTORY_DELETE"] = 3] = "HISTORY_DELETE";
})(UserEventSpecifics_FlocIdComputed_EventTrigger || (UserEventSpecifics_FlocIdComputed_EventTrigger = {}));
/**
 * Describes the enum sync_pb.UserEventSpecifics.FlocIdComputed.EventTrigger.
 */
export const UserEventSpecifics_FlocIdComputed_EventTriggerSchema = /*@__PURE__*/ enumDesc(file_user_event_specifics, 0, 4, 0);
//# sourceMappingURL=user_event_specifics_pb.js.map