// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for nigori keys.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_encryption } from "./encryption_pb";
/**
 * Describes the file nigori_specifics.proto.
 */
export const file_nigori_specifics = /*@__PURE__*/ fileDesc("ChZuaWdvcmlfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiInIKCU5pZ29yaUtleRIbCg9kZXByZWNhdGVkX25hbWUYASABKAlCAhgBEh8KE2RlcHJlY2F0ZWRfdXNlcl9rZXkYAiABKAxCAhgBEhYKDmVuY3J5cHRpb25fa2V5GAMgASgMEg8KB21hY19rZXkYBCABKAwiSQoaQ3Jvc3NVc2VyU2hhcmluZ1ByaXZhdGVLZXkSDwoHdmVyc2lvbhgBIAEoBRIaChJ4MjU1MTlfcHJpdmF0ZV9rZXkYAiABKAwiRwoZQ3Jvc3NVc2VyU2hhcmluZ1B1YmxpY0tleRIPCgd2ZXJzaW9uGAEgASgFEhkKEXgyNTUxOV9wdWJsaWNfa2V5GAIgASgMIn4KDkVuY3J5cHRpb25LZXlzEh8KA2tleRgCIAMoCzISLnN5bmNfcGIuTmlnb3JpS2V5EksKHmNyb3NzX3VzZXJfc2hhcmluZ19wcml2YXRlX2tleRgDIAMoCzIjLnN5bmNfcGIuQ3Jvc3NVc2VyU2hhcmluZ1ByaXZhdGVLZXkiMwoMTmlnb3JpS2V5QmFnEh8KA2tleRgCIAMoCzISLnN5bmNfcGIuTmlnb3JpS2V5OgIYASL9FAoPTmlnb3JpU3BlY2lmaWNzEjEKEWVuY3J5cHRpb25fa2V5YmFnGAEgASgLMhYuc3luY19wYi5FbmNyeXB0ZWREYXRhEhgKEGtleWJhZ19pc19mcm96ZW4YAiABKAgSHQoRZW5jcnlwdF9ib29rbWFya3MYDSABKAhCAhgBEh8KE2VuY3J5cHRfcHJlZmVyZW5jZXMYDiABKAhCAhgBEiQKGGVuY3J5cHRfYXV0b2ZpbGxfcHJvZmlsZRgPIAEoCEICGAESHAoQZW5jcnlwdF9hdXRvZmlsbBgQIAEoCEICGAESGgoOZW5jcnlwdF90aGVtZXMYESABKAhCAhgBEh4KEmVuY3J5cHRfdHlwZWRfdXJscxgSIAEoCEICGAESHgoSZW5jcnlwdF9leHRlbnNpb25zGBMgASgIQgIYARIcChBlbmNyeXB0X3Nlc3Npb25zGBQgASgIQgIYARIYCgxlbmNyeXB0X2FwcHMYFSABKAhCAhgBEiIKFmVuY3J5cHRfc2VhcmNoX2VuZ2luZXMYFiABKAhCAhgBEhoKEmVuY3J5cHRfZXZlcnl0aGluZxgYIAEoCBImChplbmNyeXB0X2V4dGVuc2lvbl9zZXR0aW5ncxgZIAEoCEICGAESJQoZZW5jcnlwdF9hcHBfbm90aWZpY2F0aW9ucxgaIAEoCEICGAESIAoUZW5jcnlwdF9hcHBfc2V0dGluZ3MYGyABKAhCAhgBEhkKEXN5bmNfdGFiX2Zhdmljb25zGB0gASgIEhoKD3Bhc3NwaHJhc2VfdHlwZRgeIAEoBToBMRI4ChhrZXlzdG9yZV9kZWNyeXB0b3JfdG9rZW4YHyABKAsyFi5zeW5jX3BiLkVuY3J5cHRlZERhdGESHwoXa2V5c3RvcmVfbWlncmF0aW9uX3RpbWUYICABKAMSHgoWY3VzdG9tX3Bhc3NwaHJhc2VfdGltZRghIAEoAxIaChJlbmNyeXB0X2RpY3Rpb25hcnkYIiABKAgSHAoQZW5jcnlwdF9hcHBfbGlzdBgmIAEoCEICGAESLAogZW5jcnlwdF9hdXRvZmlsbF93YWxsZXRfbWV0YWRhdGEYJyABKAhCAhgBEjcKL3NlcnZlcl9vbmx5X3dhc19taXNzaW5nX2tleXN0b3JlX21pZ3JhdGlvbl90aW1lGCggASgIEh8KE2VuY3J5cHRfYXJjX3BhY2thZ2UYKSABKAhCAhgBEhwKEGVuY3J5cHRfcHJpbnRlcnMYKiABKAhCAhgBEiAKFGVuY3J5cHRfcmVhZGluZ19saXN0GCsgASgIQgIYARIyCidjdXN0b21fcGFzc3BocmFzZV9rZXlfZGVyaXZhdGlvbl9tZXRob2QYLSABKAU6ATASLQolY3VzdG9tX3Bhc3NwaHJhc2Vfa2V5X2Rlcml2YXRpb25fc2FsdBguIAEoCRIkChhlbmNyeXB0X3NlbmRfdGFiX3RvX3NlbGYYLyABKAhCAhgBEhwKEGVuY3J5cHRfd2ViX2FwcHMYMCABKAhCAhgBEiIKFmVuY3J5cHRfb3NfcHJlZmVyZW5jZXMYMSABKAhCAhgBElAKGHRydXN0ZWRfdmF1bHRfZGVidWdfaW5mbxgyIAEoCzIuLnN5bmNfcGIuTmlnb3JpU3BlY2lmaWNzLlRydXN0ZWRWYXVsdERlYnVnSW5mbxJJCh1jcm9zc191c2VyX3NoYXJpbmdfcHVibGljX2tleRg1IAEoCzIiLnN5bmNfcGIuQ3Jvc3NVc2VyU2hhcmluZ1B1YmxpY0tleRqoAgoUQXV0b1VwZ3JhZGVEZWJ1Z0luZm8SWgoSYXV0b191cGdyYWRlX3N0YXRlGAEgASgOMj4uc3luY19wYi5OaWdvcmlTcGVjaWZpY3MuQXV0b1VwZ3JhZGVEZWJ1Z0luZm8uQXV0b1VwZ3JhZGVTdGF0ZRIcChRlbGlnaWJpbGl0eV9ncm91cF9pZBgCIAEoBSJZChBBdXRvVXBncmFkZVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASEQoNQVVUT19VUEdSQURFRBABEgsKB0NPTlRST0wQAhIOCgpWQUxJREFUSU9OEAMiOwoQRWxpZ2liaWxpdHlHcm91cBIVChFHUk9VUF9VTlNQRUNJRklFRBAAEhAKDFRFU1RfR1JPVVBfMRABGtkBChVUcnVzdGVkVmF1bHREZWJ1Z0luZm8SFgoObWlncmF0aW9uX3RpbWUYASABKAMSEwoLa2V5X3ZlcnNpb24YAiABKAUSTgoXYXV0b191cGdyYWRlX2RlYnVnX2luZm8YAyABKAsyLS5zeW5jX3BiLk5pZ29yaVNwZWNpZmljcy5BdXRvVXBncmFkZURlYnVnSW5mbxJDCjthdXRvX3VwZ3JhZGVfZGVidWdfaW5mb19tb2RpZmljYXRpb25fdGltZV91bml4X2Vwb2NoX21pbGxpcxgEIAEoAyKkAQoOUGFzc3BocmFzZVR5cGUSCwoHVU5LTk9XThAAEhcKE0lNUExJQ0lUX1BBU1NQSFJBU0UQARIXChNLRVlTVE9SRV9QQVNTUEhSQVNFEAISHgoaRlJPWkVOX0lNUExJQ0lUX1BBU1NQSFJBU0UQAxIVChFDVVNUT01fUEFTU1BIUkFTRRAEEhwKGFRSVVNURURfVkFVTFRfUEFTU1BIUkFTRRAFIlcKE0tleURlcml2YXRpb25NZXRob2QSDwoLVU5TUEVDSUZJRUQQABIZChVQQktERjJfSE1BQ19TSEExXzEwMDMQARIUChBTQ1JZUFRfODE5Ml84XzExEAJKBAgDEARKBAgEEAVKBAgFEAZKBAgGEAdKBAgHEAhKBAgIEAlKBAgJEApKBAgKEAtKBAgLEAxKBAgMEA1KBAgXEBhKBAgcEB1KBAgjECRKBAgkECVKBAglECZKBAgsEC1KBAgzEDRKBAg0EDVSHGRlcHJlY2F0ZWRfZW5jcnlwdF9ib29rbWFya3NSHmRlcHJlY2F0ZWRfZW5jcnlwdF9wcmVmZXJlbmNlc1IjZGVwcmVjYXRlZF9lbmNyeXB0X2F1dG9maWxsX3Byb2ZpbGVSG2RlcHJlY2F0ZWRfZW5jcnlwdF9hdXRvZmlsbFIZZGVwcmVjYXRlZF9lbmNyeXB0X3RoZW1lc1IdZGVwcmVjYXRlZF9lbmNyeXB0X3R5cGVkX3VybHNSHWRlcHJlY2F0ZWRfZW5jcnlwdF9leHRlbnNpb25zUhtkZXByZWNhdGVkX2VuY3J5cHRfc2Vzc2lvbnNSF2RlcHJlY2F0ZWRfZW5jcnlwdF9hcHBzUiFkZXByZWNhdGVkX2VuY3J5cHRfc2VhcmNoX2VuZ2luZXNSCXN5bmNfdGFic1IdZGVwcmVjYXRlZF9kZXZpY2VfaW5mb3JtYXRpb25SEGVuY3J5cHRfYXJ0aWNsZXNSF2VuY3J5cHRfbW91bnRhaW5fc2hhcmVzUhZlbmNyeXB0X3dvcmtzcGFjZV9kZXNrUiZlbmNyeXB0X3ByaW50ZXJzX2F1dGhvcml6YXRpb25fc2VydmVyc0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_encryption]);
/**
 * Describes the message sync_pb.NigoriKey.
 * Use `create(NigoriKeySchema)` to create a new message.
 */
export const NigoriKeySchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 0);
/**
 * Describes the message sync_pb.CrossUserSharingPrivateKey.
 * Use `create(CrossUserSharingPrivateKeySchema)` to create a new message.
 */
export const CrossUserSharingPrivateKeySchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 1);
/**
 * Describes the message sync_pb.CrossUserSharingPublicKey.
 * Use `create(CrossUserSharingPublicKeySchema)` to create a new message.
 */
export const CrossUserSharingPublicKeySchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 2);
/**
 * Describes the message sync_pb.EncryptionKeys.
 * Use `create(EncryptionKeysSchema)` to create a new message.
 */
export const EncryptionKeysSchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 3);
/**
 * Describes the message sync_pb.NigoriKeyBag.
 * Use `create(NigoriKeyBagSchema)` to create a new message.
 * @deprecated
 */
export const NigoriKeyBagSchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 4);
/**
 * Describes the message sync_pb.NigoriSpecifics.
 * Use `create(NigoriSpecificsSchema)` to create a new message.
 */
export const NigoriSpecificsSchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 5);
/**
 * Describes the message sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.
 * Use `create(NigoriSpecifics_AutoUpgradeDebugInfoSchema)` to create a new message.
 */
export const NigoriSpecifics_AutoUpgradeDebugInfoSchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 5, 0);
/**
 * @generated from enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.AutoUpgradeState
 */
export var NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState;
(function (NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState) {
    /**
     * @generated from enum value: STATE_UNSPECIFIED = 0;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState[NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    /**
     * @generated from enum value: AUTO_UPGRADED = 1;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState[NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState["AUTO_UPGRADED"] = 1] = "AUTO_UPGRADED";
    /**
     * @generated from enum value: CONTROL = 2;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState[NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState["CONTROL"] = 2] = "CONTROL";
    /**
     * @generated from enum value: VALIDATION = 3;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState[NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState["VALIDATION"] = 3] = "VALIDATION";
})(NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState || (NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState = {}));
/**
 * Describes the enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.AutoUpgradeState.
 */
export const NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeStateSchema = /*@__PURE__*/ enumDesc(file_nigori_specifics, 5, 0, 0);
/**
 * Each eligibility group can be ramped in different stages (e.g. 1%,
 * 10%, 100%).
 * Every ramp stage is differentiated with its own entry in the enum.
 *
 * @generated from enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.EligibilityGroup
 */
export var NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup;
(function (NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup) {
    /**
     * @generated from enum value: GROUP_UNSPECIFIED = 0;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup[NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup["GROUP_UNSPECIFIED"] = 0] = "GROUP_UNSPECIFIED";
    /**
     * @generated from enum value: TEST_GROUP_1 = 1;
     */
    NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup[NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup["TEST_GROUP_1"] = 1] = "TEST_GROUP_1";
})(NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup || (NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup = {}));
/**
 * Describes the enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.EligibilityGroup.
 */
export const NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroupSchema = /*@__PURE__*/ enumDesc(file_nigori_specifics, 5, 0, 1);
/**
 * Describes the message sync_pb.NigoriSpecifics.TrustedVaultDebugInfo.
 * Use `create(NigoriSpecifics_TrustedVaultDebugInfoSchema)` to create a new message.
 */
export const NigoriSpecifics_TrustedVaultDebugInfoSchema = /*@__PURE__*/ messageDesc(file_nigori_specifics, 5, 1);
/**
 * The state of the passphrase required to decrypt |encryption_keybag|.
 *
 * @generated from enum sync_pb.NigoriSpecifics.PassphraseType
 */
export var NigoriSpecifics_PassphraseType;
(function (NigoriSpecifics_PassphraseType) {
    /**
     * Proto enums should begin with an 'unknown' value for switch statements,
     * unknown fields, etc.
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Gaia-based encryption passphrase. Legacy.
     *
     * @generated from enum value: IMPLICIT_PASSPHRASE = 1;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["IMPLICIT_PASSPHRASE"] = 1] = "IMPLICIT_PASSPHRASE";
    /**
     * Keystore key encryption passphrase. Uses |keystore_bootstrap| to
     * decrypt |encryption_keybag|.
     *
     * @generated from enum value: KEYSTORE_PASSPHRASE = 2;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["KEYSTORE_PASSPHRASE"] = 2] = "KEYSTORE_PASSPHRASE";
    /**
     * Previous Gaia-based passphrase frozen and treated as a custom passphrase.
     *
     * @generated from enum value: FROZEN_IMPLICIT_PASSPHRASE = 3;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["FROZEN_IMPLICIT_PASSPHRASE"] = 3] = "FROZEN_IMPLICIT_PASSPHRASE";
    /**
     * User provided custom passphrase.
     *
     * @generated from enum value: CUSTOM_PASSPHRASE = 4;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["CUSTOM_PASSPHRASE"] = 4] = "CUSTOM_PASSPHRASE";
    /**
     * Encryption key provided by a trusted vault.
     *
     * @generated from enum value: TRUSTED_VAULT_PASSPHRASE = 5;
     */
    NigoriSpecifics_PassphraseType[NigoriSpecifics_PassphraseType["TRUSTED_VAULT_PASSPHRASE"] = 5] = "TRUSTED_VAULT_PASSPHRASE";
})(NigoriSpecifics_PassphraseType || (NigoriSpecifics_PassphraseType = {}));
/**
 * Describes the enum sync_pb.NigoriSpecifics.PassphraseType.
 */
export const NigoriSpecifics_PassphraseTypeSchema = /*@__PURE__*/ enumDesc(file_nigori_specifics, 5, 0);
/**
 * @generated from enum sync_pb.NigoriSpecifics.KeyDerivationMethod
 */
export var NigoriSpecifics_KeyDerivationMethod;
(function (NigoriSpecifics_KeyDerivationMethod) {
    /**
     * This comes from a <= M69 client, who does not know about the field
     * (but implicitly uses PBKDF2_HMAC_SHA1_1003).
     *
     * @generated from enum value: UNSPECIFIED = 0;
     */
    NigoriSpecifics_KeyDerivationMethod[NigoriSpecifics_KeyDerivationMethod["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * PBKDF2-HMAC-SHA1 with 1003 iterations and constant hardcoded salt. Was
     * implicitly used in <= M69.
     *
     * @generated from enum value: PBKDF2_HMAC_SHA1_1003 = 1;
     */
    NigoriSpecifics_KeyDerivationMethod[NigoriSpecifics_KeyDerivationMethod["PBKDF2_HMAC_SHA1_1003"] = 1] = "PBKDF2_HMAC_SHA1_1003";
    /**
     * scrypt with N = 2^13, r = 8, p = 11 and random salt. Was added in M70.
     *
     * @generated from enum value: SCRYPT_8192_8_11 = 2;
     */
    NigoriSpecifics_KeyDerivationMethod[NigoriSpecifics_KeyDerivationMethod["SCRYPT_8192_8_11"] = 2] = "SCRYPT_8192_8_11";
})(NigoriSpecifics_KeyDerivationMethod || (NigoriSpecifics_KeyDerivationMethod = {}));
/**
 * Describes the enum sync_pb.NigoriSpecifics.KeyDerivationMethod.
 */
export const NigoriSpecifics_KeyDerivationMethodSchema = /*@__PURE__*/ enumDesc(file_nigori_specifics, 5, 1);
//# sourceMappingURL=nigori_specifics_pb.js.map