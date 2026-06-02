// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Various user consent types used when reporting consent.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file user_consent_types.proto.
 */
export const file_user_consent_types = /*@__PURE__*/ fileDesc("Chh1c2VyX2NvbnNlbnRfdHlwZXMucHJvdG8SB3N5bmNfcGIiugsKEFVzZXJDb25zZW50VHlwZXMajwEKGkFyY0JhY2t1cEFuZFJlc3RvcmVDb25zZW50EhsKE2Rlc2NyaXB0aW9uX2dyZF9pZHMYASADKAUSGwoTY29uZmlybWF0aW9uX2dyZF9pZBgCIAEoBRI3CgZzdGF0dXMYAyABKA4yJy5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQ29uc2VudFN0YXR1cxqUAQofQXJjR29vZ2xlTG9jYXRpb25TZXJ2aWNlQ29uc2VudBIbChNkZXNjcmlwdGlvbl9ncmRfaWRzGAEgAygFEhsKE2NvbmZpcm1hdGlvbl9ncmRfaWQYAiABKAUSNwoGc3RhdHVzGAMgASgOMicuc3luY19wYi5Vc2VyQ29uc2VudFR5cGVzLkNvbnNlbnRTdGF0dXMa6AIKHEFyY1BsYXlUZXJtc09mU2VydmljZUNvbnNlbnQSKQohcGxheV90ZXJtc19vZl9zZXJ2aWNlX3RleHRfbGVuZ3RoGAEgASgFEiIKGnBsYXlfdGVybXNfb2Zfc2VydmljZV9oYXNoGAIgASgMEhsKE2Rlc2NyaXB0aW9uX2dyZF9pZHMYBSADKAUSGwoTY29uZmlybWF0aW9uX2dyZF9pZBgDIAEoBRI3CgZzdGF0dXMYBCABKA4yJy5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQ29uc2VudFN0YXR1cxJYCgxjb25zZW50X2Zsb3cYBiABKA4yQi5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQXJjUGxheVRlcm1zT2ZTZXJ2aWNlQ29uc2VudC5Db25zZW50RmxvdyIsCgtDb25zZW50RmxvdxIJCgVTRVRVUBABEhIKDlNFVFRJTkdfQ0hBTkdFEAIagAEKC1N5bmNDb25zZW50EhsKE2Rlc2NyaXB0aW9uX2dyZF9pZHMYASADKAUSGwoTY29uZmlybWF0aW9uX2dyZF9pZBgCIAEoBRI3CgZzdGF0dXMYAyABKA4yJy5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQ29uc2VudFN0YXR1cxqDAQoOVW5pZmllZENvbnNlbnQSGwoTZGVzY3JpcHRpb25fZ3JkX2lkcxgBIAMoBRIbChNjb25maXJtYXRpb25fZ3JkX2lkGAIgASgFEjcKBnN0YXR1cxgDIAEoDjInLnN5bmNfcGIuVXNlckNvbnNlbnRUeXBlcy5Db25zZW50U3RhdHVzGq4CCh9Bc3Npc3RhbnRBY3Rpdml0eUNvbnRyb2xDb25zZW50EhQKDHVpX2F1ZGl0X2tleRgBIAEoDBI3CgZzdGF0dXMYAiABKA4yJy5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQ29uc2VudFN0YXR1cxJbCgxzZXR0aW5nX3R5cGUYAyABKA4yRS5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQXNzaXN0YW50QWN0aXZpdHlDb250cm9sQ29uc2VudC5TZXR0aW5nVHlwZSJfCgtTZXR0aW5nVHlwZRIcChhTRVRUSU5HX1RZUEVfVU5TUEVDSUZJRUQQABIHCgNBTEwQARIYChRXRUJfQU5EX0FQUF9BQ1RJVklUWRACEg8KC0RFVklDRV9BUFBTEAMajAEKF0FjY291bnRQYXNzd29yZHNDb25zZW50EhsKE2Rlc2NyaXB0aW9uX2dyZF9pZHMYASADKAUSGwoTY29uZmlybWF0aW9uX2dyZF9pZBgCIAEoBRI3CgZzdGF0dXMYAyABKA4yJy5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQ29uc2VudFN0YXR1cyJJCg1Db25zZW50U3RhdHVzEh4KGkNPTlNFTlRfU1RBVFVTX1VOU1BFQ0lGSUVEEAASDQoJTk9UX0dJVkVOEAESCQoFR0lWRU4QAkI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.UserConsentTypes.
 * Use `create(UserConsentTypesSchema)` to create a new message.
 */
export const UserConsentTypesSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0);
/**
 * Describes the message sync_pb.UserConsentTypes.ArcBackupAndRestoreConsent.
 * Use `create(UserConsentTypes_ArcBackupAndRestoreConsentSchema)` to create a new message.
 */
export const UserConsentTypes_ArcBackupAndRestoreConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 0);
/**
 * Describes the message sync_pb.UserConsentTypes.ArcGoogleLocationServiceConsent.
 * Use `create(UserConsentTypes_ArcGoogleLocationServiceConsentSchema)` to create a new message.
 */
export const UserConsentTypes_ArcGoogleLocationServiceConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 1);
/**
 * Describes the message sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.
 * Use `create(UserConsentTypes_ArcPlayTermsOfServiceConsentSchema)` to create a new message.
 */
export const UserConsentTypes_ArcPlayTermsOfServiceConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 2);
/**
 * Enum describing different user flow during which the ARC Play Terms of
 * service consent can be recorded.
 *
 * @generated from enum sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.ConsentFlow
 */
export var UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow;
(function (UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow) {
    /**
     * The ARC setup flow on a CROS device.
     *
     * @generated from enum value: SETUP = 1;
     */
    UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow[UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow["SETUP"] = 1] = "SETUP";
    /**
     * The user flow for changing the ARC setting on a CROS device.
     *
     * @generated from enum value: SETTING_CHANGE = 2;
     */
    UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow[UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow["SETTING_CHANGE"] = 2] = "SETTING_CHANGE";
})(UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow || (UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlow = {}));
/**
 * Describes the enum sync_pb.UserConsentTypes.ArcPlayTermsOfServiceConsent.ConsentFlow.
 */
export const UserConsentTypes_ArcPlayTermsOfServiceConsent_ConsentFlowSchema = /*@__PURE__*/ enumDesc(file_user_consent_types, 0, 2, 0);
/**
 * Describes the message sync_pb.UserConsentTypes.SyncConsent.
 * Use `create(UserConsentTypes_SyncConsentSchema)` to create a new message.
 */
export const UserConsentTypes_SyncConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 3);
/**
 * Describes the message sync_pb.UserConsentTypes.UnifiedConsent.
 * Use `create(UserConsentTypes_UnifiedConsentSchema)` to create a new message.
 */
export const UserConsentTypes_UnifiedConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 4);
/**
 * Describes the message sync_pb.UserConsentTypes.AssistantActivityControlConsent.
 * Use `create(UserConsentTypes_AssistantActivityControlConsentSchema)` to create a new message.
 */
export const UserConsentTypes_AssistantActivityControlConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 5);
/**
 * Enum denoting different Assistant activity control setting type.
 *
 * @generated from enum sync_pb.UserConsentTypes.AssistantActivityControlConsent.SettingType
 */
export var UserConsentTypes_AssistantActivityControlConsent_SettingType;
(function (UserConsentTypes_AssistantActivityControlConsent_SettingType) {
    /**
     * Legacy clients (< M93) did not set a SettingType; for those,
     * UNSPECIFIED should be interpreted as ALL. Newer clients should always
     * set it explicitly.
     *
     * @generated from enum value: SETTING_TYPE_UNSPECIFIED = 0;
     */
    UserConsentTypes_AssistantActivityControlConsent_SettingType[UserConsentTypes_AssistantActivityControlConsent_SettingType["SETTING_TYPE_UNSPECIFIED"] = 0] = "SETTING_TYPE_UNSPECIFIED";
    /**
     * All Settings.
     *
     * @generated from enum value: ALL = 1;
     */
    UserConsentTypes_AssistantActivityControlConsent_SettingType[UserConsentTypes_AssistantActivityControlConsent_SettingType["ALL"] = 1] = "ALL";
    /**
     * @generated from enum value: WEB_AND_APP_ACTIVITY = 2;
     */
    UserConsentTypes_AssistantActivityControlConsent_SettingType[UserConsentTypes_AssistantActivityControlConsent_SettingType["WEB_AND_APP_ACTIVITY"] = 2] = "WEB_AND_APP_ACTIVITY";
    /**
     * @generated from enum value: DEVICE_APPS = 3;
     */
    UserConsentTypes_AssistantActivityControlConsent_SettingType[UserConsentTypes_AssistantActivityControlConsent_SettingType["DEVICE_APPS"] = 3] = "DEVICE_APPS";
})(UserConsentTypes_AssistantActivityControlConsent_SettingType || (UserConsentTypes_AssistantActivityControlConsent_SettingType = {}));
/**
 * Describes the enum sync_pb.UserConsentTypes.AssistantActivityControlConsent.SettingType.
 */
export const UserConsentTypes_AssistantActivityControlConsent_SettingTypeSchema = /*@__PURE__*/ enumDesc(file_user_consent_types, 0, 5, 0);
/**
 * Describes the message sync_pb.UserConsentTypes.AccountPasswordsConsent.
 * Use `create(UserConsentTypes_AccountPasswordsConsentSchema)` to create a new message.
 */
export const UserConsentTypes_AccountPasswordsConsentSchema = /*@__PURE__*/ messageDesc(file_user_consent_types, 0, 6);
/**
 * The status of a particular User Consent. The status describes the state
 * of the consent as it is: given, not_given.
 *
 * @generated from enum sync_pb.UserConsentTypes.ConsentStatus
 */
export var UserConsentTypes_ConsentStatus;
(function (UserConsentTypes_ConsentStatus) {
    /**
     * The status is unspecified e.g. because the user was not asked to
     * consent yet or an error happened or the decision was delayed.
     *
     * @generated from enum value: CONSENT_STATUS_UNSPECIFIED = 0;
     */
    UserConsentTypes_ConsentStatus[UserConsentTypes_ConsentStatus["CONSENT_STATUS_UNSPECIFIED"] = 0] = "CONSENT_STATUS_UNSPECIFIED";
    /**
     * The consent is not given. This means the user either revoked the
     * consent or did not grant it in the first place.
     *
     * @generated from enum value: NOT_GIVEN = 1;
     */
    UserConsentTypes_ConsentStatus[UserConsentTypes_ConsentStatus["NOT_GIVEN"] = 1] = "NOT_GIVEN";
    /**
     * The consent is given. This means the user did grant the consent.
     *
     * @generated from enum value: GIVEN = 2;
     */
    UserConsentTypes_ConsentStatus[UserConsentTypes_ConsentStatus["GIVEN"] = 2] = "GIVEN";
})(UserConsentTypes_ConsentStatus || (UserConsentTypes_ConsentStatus = {}));
/**
 * Describes the enum sync_pb.UserConsentTypes.ConsentStatus.
 */
export const UserConsentTypes_ConsentStatusSchema = /*@__PURE__*/ enumDesc(file_user_consent_types, 0, 0);
//# sourceMappingURL=user_consent_types_pb.js.map