// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Security Events used for recording security related events.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file gaia_password_reuse.proto.
 */
export const file_gaia_password_reuse = /*@__PURE__*/ fileDesc("ChlnYWlhX3Bhc3N3b3JkX3JldXNlLnByb3RvEgdzeW5jX3BiIpMLChFHYWlhUGFzc3dvcmRSZXVzZRJICg5yZXVzZV9kZXRlY3RlZBgBIAEoCzIwLnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZURldGVjdGVkEkQKDHJldXNlX2xvb2t1cBgCIAEoCzIuLnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZUxvb2t1cBJVChJkaWFsb2dfaW50ZXJhY3Rpb24YAyABKAsyOS5zeW5jX3BiLkdhaWFQYXNzd29yZFJldXNlLlBhc3N3b3JkUmV1c2VEaWFsb2dJbnRlcmFjdGlvbhqEAwoVUGFzc3dvcmRSZXVzZURldGVjdGVkElMKBnN0YXR1cxgBIAEoCzJDLnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZURldGVjdGVkLlNhZmVCcm93c2luZ1N0YXR1cxqVAgoSU2FmZUJyb3dzaW5nU3RhdHVzEg8KB2VuYWJsZWQYASABKAgSgwEKInNhZmVfYnJvd3NpbmdfcmVwb3J0aW5nX3BvcHVsYXRpb24YAiABKA4yVy5zeW5jX3BiLkdhaWFQYXNzd29yZFJldXNlLlBhc3N3b3JkUmV1c2VEZXRlY3RlZC5TYWZlQnJvd3NpbmdTdGF0dXMuUmVwb3J0aW5nUG9wdWxhdGlvbiJoChNSZXBvcnRpbmdQb3B1bGF0aW9uEiQKIFJFUE9SVElOR19QT1BVTEFUSU9OX1VOU1BFQ0lGSUVEEAASCAoETk9ORRABEhYKEkVYVEVOREVEX1JFUE9SVElORxACEgkKBVNDT1VUEAMa6AMKE1Bhc3N3b3JkUmV1c2VMb29rdXASUgoNbG9va3VwX3Jlc3VsdBgBIAEoDjI7LnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZUxvb2t1cC5Mb29rdXBSZXN1bHQSUQoHdmVyZGljdBgCIAEoDjJALnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZUxvb2t1cC5SZXB1dGF0aW9uVmVyZGljdBIVCg12ZXJkaWN0X3Rva2VuGAMgASgMIrgBCgxMb29rdXBSZXN1bHQSDwoLVU5TUEVDSUZJRUQQABIRCg1BTExPV0xJU1RfSElUEAESDQoJQ0FDSEVfSElUEAISEwoPUkVRVUVTVF9TVUNDRVNTEAMSEwoPUkVRVUVTVF9GQUlMVVJFEAQSEwoPVVJMX1VOU1VQUE9SVEVEEAUSHAoYRU5URVJQUklTRV9BTExPV0xJU1RfSElUEAYSGAoUVFVSTkVEX09GRl9CWV9QT0xJQ1kQByJYChFSZXB1dGF0aW9uVmVyZGljdBIXChNWRVJESUNUX1VOU1BFQ0lGSUVEEAASCAoEU0FGRRABEhIKDkxPV19SRVBVVEFUSU9OEAISDAoIUEhJU0hJTkcQAxqkAgoeUGFzc3dvcmRSZXVzZURpYWxvZ0ludGVyYWN0aW9uEmcKEmludGVyYWN0aW9uX3Jlc3VsdBgBIAEoDjJLLnN5bmNfcGIuR2FpYVBhc3N3b3JkUmV1c2UuUGFzc3dvcmRSZXVzZURpYWxvZ0ludGVyYWN0aW9uLkludGVyYWN0aW9uUmVzdWx0IpgBChFJbnRlcmFjdGlvblJlc3VsdBIPCgtVTlNQRUNJRklFRBAAEhgKFFdBUk5JTkdfQUNUSU9OX1RBS0VOEAESGgoWV0FSTklOR19BQ1RJT05fSUdOT1JFRBACEhYKEldBUk5JTkdfVUlfSUdOT1JFRBADEiQKIFdBUk5JTkdfQUNUSU9OX1RBS0VOX09OX1NFVFRJTkdTEARCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.GaiaPasswordReuse.
 * Use `create(GaiaPasswordReuseSchema)` to create a new message.
 */
export const GaiaPasswordReuseSchema = /*@__PURE__*/ messageDesc(file_gaia_password_reuse, 0);
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDetected.
 * Use `create(GaiaPasswordReuse_PasswordReuseDetectedSchema)` to create a new message.
 */
export const GaiaPasswordReuse_PasswordReuseDetectedSchema = /*@__PURE__*/ messageDesc(file_gaia_password_reuse, 0, 0);
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.
 * Use `create(GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatusSchema)` to create a new message.
 */
export const GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatusSchema = /*@__PURE__*/ messageDesc(file_gaia_password_reuse, 0, 0, 0);
/**
 * If SafeBrowsing is enabled, is the user opted-in to extended
 * reporting or Scout?
 *
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.ReportingPopulation
 */
export var GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation;
(function (GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation) {
    /**
     * @generated from enum value: REPORTING_POPULATION_UNSPECIFIED = 0;
     */
    GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation[GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation["REPORTING_POPULATION_UNSPECIFIED"] = 0] = "REPORTING_POPULATION_UNSPECIFIED";
    /**
     * @generated from enum value: NONE = 1;
     */
    GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation[GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation["NONE"] = 1] = "NONE";
    /**
     * @generated from enum value: EXTENDED_REPORTING = 2;
     */
    GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation[GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation["EXTENDED_REPORTING"] = 2] = "EXTENDED_REPORTING";
    /**
     * @generated from enum value: SCOUT = 3;
     */
    GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation[GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation["SCOUT"] = 3] = "SCOUT";
})(GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation || (GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation = {}));
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.ReportingPopulation.
 */
export const GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulationSchema = /*@__PURE__*/ enumDesc(file_gaia_password_reuse, 0, 0, 0, 0);
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseLookup.
 * Use `create(GaiaPasswordReuse_PasswordReuseLookupSchema)` to create a new message.
 */
export const GaiaPasswordReuse_PasswordReuseLookupSchema = /*@__PURE__*/ messageDesc(file_gaia_password_reuse, 0, 1);
/**
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.LookupResult
 */
export var GaiaPasswordReuse_PasswordReuseLookup_LookupResult;
(function (GaiaPasswordReuse_PasswordReuseLookup_LookupResult) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * URL did match the password reuse allowlist.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: ALLOWLIST_HIT = 1;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["ALLOWLIST_HIT"] = 1] = "ALLOWLIST_HIT";
    /**
     * The URL exists in the client’s cache.
     * No further action required related to this re-use event.
     * This event also logs the ReputationVerdict.
     *
     * @generated from enum value: CACHE_HIT = 2;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["CACHE_HIT"] = 2] = "CACHE_HIT";
    /**
     * A valid response received from the SafeBrowsing service.
     * This event also logs the ReputationVerdict.
     *
     * @generated from enum value: REQUEST_SUCCESS = 3;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["REQUEST_SUCCESS"] = 3] = "REQUEST_SUCCESS";
    /**
     * Unable to get a valid response from the SafeBrowsing service.
     *
     * @generated from enum value: REQUEST_FAILURE = 4;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["REQUEST_FAILURE"] = 4] = "REQUEST_FAILURE";
    /**
     * We won't be able to compute reputation for the URL e.g. local IP
     * address, localhost, not-yet-assigned by ICANN gTLD, etc.
     *
     * @generated from enum value: URL_UNSUPPORTED = 5;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["URL_UNSUPPORTED"] = 5] = "URL_UNSUPPORTED";
    /**
     * URL did match enterprise allowlist.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: ENTERPRISE_ALLOWLIST_HIT = 6;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["ENTERPRISE_ALLOWLIST_HIT"] = 6] = "ENTERPRISE_ALLOWLIST_HIT";
    /**
     * Password reuse lookup is turned off by enterprise policy.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: TURNED_OFF_BY_POLICY = 7;
     */
    GaiaPasswordReuse_PasswordReuseLookup_LookupResult[GaiaPasswordReuse_PasswordReuseLookup_LookupResult["TURNED_OFF_BY_POLICY"] = 7] = "TURNED_OFF_BY_POLICY";
})(GaiaPasswordReuse_PasswordReuseLookup_LookupResult || (GaiaPasswordReuse_PasswordReuseLookup_LookupResult = {}));
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.LookupResult.
 */
export const GaiaPasswordReuse_PasswordReuseLookup_LookupResultSchema = /*@__PURE__*/ enumDesc(file_gaia_password_reuse, 0, 1, 0);
/**
 * The following two are only present for CACHE_HIT and REQUEST_SUCCESS.
 * The verdict received from the Reputation service. This is set only
 * if the user has SafeBrowsing enabled and we fetch the verdict from the
 * cache or by sending a verdict request.
 *
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.ReputationVerdict
 */
export var GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict;
(function (GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict) {
    /**
     * @generated from enum value: VERDICT_UNSPECIFIED = 0;
     */
    GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict[GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict["VERDICT_UNSPECIFIED"] = 0] = "VERDICT_UNSPECIFIED";
    /**
     * @generated from enum value: SAFE = 1;
     */
    GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict[GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict["SAFE"] = 1] = "SAFE";
    /**
     * @generated from enum value: LOW_REPUTATION = 2;
     */
    GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict[GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict["LOW_REPUTATION"] = 2] = "LOW_REPUTATION";
    /**
     * @generated from enum value: PHISHING = 3;
     */
    GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict[GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict["PHISHING"] = 3] = "PHISHING";
})(GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict || (GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict = {}));
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.ReputationVerdict.
 */
export const GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdictSchema = /*@__PURE__*/ enumDesc(file_gaia_password_reuse, 0, 1, 1);
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.
 * Use `create(GaiaPasswordReuse_PasswordReuseDialogInteractionSchema)` to create a new message.
 */
export const GaiaPasswordReuse_PasswordReuseDialogInteractionSchema = /*@__PURE__*/ messageDesc(file_gaia_password_reuse, 0, 2);
/**
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.InteractionResult
 */
export var GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult;
(function (GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult[GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The user took the action suggested by the warning prompt.
     *
     * @generated from enum value: WARNING_ACTION_TAKEN = 1;
     */
    GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult[GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult["WARNING_ACTION_TAKEN"] = 1] = "WARNING_ACTION_TAKEN";
    /**
     * The user clicked ignore in the warning prompt.
     *
     * @generated from enum value: WARNING_ACTION_IGNORED = 2;
     */
    GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult[GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult["WARNING_ACTION_IGNORED"] = 2] = "WARNING_ACTION_IGNORED";
    /**
     * The warning UI was ignored, i.e. not interacted with by the user.
     * This could happen if the user navigates away from the page.
     *
     * @generated from enum value: WARNING_UI_IGNORED = 3;
     */
    GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult[GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult["WARNING_UI_IGNORED"] = 3] = "WARNING_UI_IGNORED";
    /**
     * The user clicked "Change Password" on chrome://settings page.
     *
     * @generated from enum value: WARNING_ACTION_TAKEN_ON_SETTINGS = 4;
     */
    GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult[GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult["WARNING_ACTION_TAKEN_ON_SETTINGS"] = 4] = "WARNING_ACTION_TAKEN_ON_SETTINGS";
})(GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult || (GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult = {}));
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.InteractionResult.
 */
export const GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResultSchema = /*@__PURE__*/ enumDesc(file_gaia_password_reuse, 0, 2, 0);
//# sourceMappingURL=gaia_password_reuse_pb.js.map