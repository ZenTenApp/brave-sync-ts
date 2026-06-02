// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for user consents.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_user_consent_types } from "./user_consent_types_pb";
/**
 * Describes the file user_consent_specifics.proto.
 */
export const file_user_consent_specifics = /*@__PURE__*/ fileDesc("Chx1c2VyX2NvbnNlbnRfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIpEJChRVc2VyQ29uc2VudFNwZWNpZmljcxIOCgZsb2NhbGUYBCABKAkSIAoYY2xpZW50X2NvbnNlbnRfdGltZV91c2VjGAwgASgDEj0KDHN5bmNfY29uc2VudBgHIAEoCzIlLnN5bmNfcGIuVXNlckNvbnNlbnRUeXBlcy5TeW5jQ29uc2VudEgAEl4KHmFyY19iYWNrdXBfYW5kX3Jlc3RvcmVfY29uc2VudBgIIAEoCzI0LnN5bmNfcGIuVXNlckNvbnNlbnRUeXBlcy5BcmNCYWNrdXBBbmRSZXN0b3JlQ29uc2VudEgAEmEKHGFyY19sb2NhdGlvbl9zZXJ2aWNlX2NvbnNlbnQYCSABKAsyOS5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQXJjR29vZ2xlTG9jYXRpb25TZXJ2aWNlQ29uc2VudEgAEmMKIWFyY19wbGF5X3Rlcm1zX29mX3NlcnZpY2VfY29uc2VudBgKIAEoCzI2LnN5bmNfcGIuVXNlckNvbnNlbnRUeXBlcy5BcmNQbGF5VGVybXNPZlNlcnZpY2VDb25zZW50SAASRwoPdW5pZmllZF9jb25zZW50GA0gASgLMiguc3luY19wYi5Vc2VyQ29uc2VudFR5cGVzLlVuaWZpZWRDb25zZW50QgIYAUgAEmcKImFzc2lzdGFudF9hY3Rpdml0eV9jb250cm9sX2NvbnNlbnQYDiABKAsyOS5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQXNzaXN0YW50QWN0aXZpdHlDb250cm9sQ29uc2VudEgAElYKGWFjY291bnRfcGFzc3dvcmRzX2NvbnNlbnQYDyABKAsyMS5zeW5jX3BiLlVzZXJDb25zZW50VHlwZXMuQWNjb3VudFBhc3N3b3Jkc0NvbnNlbnRIABISCgphY2NvdW50X2lkGAYgASgJEjoKB2ZlYXR1cmUYASABKA4yJS5zeW5jX3BiLlVzZXJDb25zZW50U3BlY2lmaWNzLkZlYXR1cmVCAhgBEh8KE2Rlc2NyaXB0aW9uX2dyZF9pZHMYAiADKAVCAhgBEh8KE2NvbmZpcm1hdGlvbl9ncmRfaWQYAyABKAVCAhgBEjsKBnN0YXR1cxgFIAEoDjInLnN5bmNfcGIuVXNlckNvbnNlbnRUeXBlcy5Db25zZW50U3RhdHVzQgIYASK0AQoHRmVhdHVyZRIXChNGRUFUVVJFX1VOU1BFQ0lGSUVEEAASDwoLQ0hST01FX1NZTkMQARIOCgpQTEFZX1NUT1JFEAISFgoSQkFDS1VQX0FORF9SRVNUT1JFEAMSGwoXR09PR0xFX0xPQ0FUSU9OX1NFUlZJQ0UQBBIaChZDSFJPTUVfVU5JRklFRF9DT05TRU5UEAUSHgoaQVNTSVNUQU5UX0FDVElWSVRZX0NPTlRST0wQBkIJCgdjb25zZW50SgQICxAMSgQIEBARUh1hcmNfbWV0cmljc19hbmRfdXNhZ2VfY29uc2VudFIaYXV0b2ZpbGxfYXNzaXN0YW50X2NvbnNlbnRCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg", [file_user_consent_types]);
/**
 * Describes the message sync_pb.UserConsentSpecifics.
 * Use `create(UserConsentSpecificsSchema)` to create a new message.
 */
export const UserConsentSpecificsSchema = /*@__PURE__*/ messageDesc(file_user_consent_specifics, 0);
/**
 * Which feature does the consent apply to?
 *
 * @generated from enum sync_pb.UserConsentSpecifics.Feature
 */
export var UserConsentSpecifics_Feature;
(function (UserConsentSpecifics_Feature) {
    /**
     * @generated from enum value: FEATURE_UNSPECIFIED = 0;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["FEATURE_UNSPECIFIED"] = 0] = "FEATURE_UNSPECIFIED";
    /**
     * @generated from enum value: CHROME_SYNC = 1;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["CHROME_SYNC"] = 1] = "CHROME_SYNC";
    /**
     * @generated from enum value: PLAY_STORE = 2;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["PLAY_STORE"] = 2] = "PLAY_STORE";
    /**
     * @generated from enum value: BACKUP_AND_RESTORE = 3;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["BACKUP_AND_RESTORE"] = 3] = "BACKUP_AND_RESTORE";
    /**
     * @generated from enum value: GOOGLE_LOCATION_SERVICE = 4;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["GOOGLE_LOCATION_SERVICE"] = 4] = "GOOGLE_LOCATION_SERVICE";
    /**
     * @generated from enum value: CHROME_UNIFIED_CONSENT = 5;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["CHROME_UNIFIED_CONSENT"] = 5] = "CHROME_UNIFIED_CONSENT";
    /**
     * TODO(markusheintz): ASSISTANT_ACTIVITY_CONTROL was only added for
     * compatibility with the Feature enum in UserEventSpecifics.UserConsent.
     * Delete this value once the value is deleted from the other proto.
     *
     * @generated from enum value: ASSISTANT_ACTIVITY_CONTROL = 6;
     */
    UserConsentSpecifics_Feature[UserConsentSpecifics_Feature["ASSISTANT_ACTIVITY_CONTROL"] = 6] = "ASSISTANT_ACTIVITY_CONTROL";
})(UserConsentSpecifics_Feature || (UserConsentSpecifics_Feature = {}));
/**
 * Describes the enum sync_pb.UserConsentSpecifics.Feature.
 */
export const UserConsentSpecifics_FeatureSchema = /*@__PURE__*/ enumDesc(file_user_consent_specifics, 0, 0);
//# sourceMappingURL=user_consent_specifics_pb.js.map