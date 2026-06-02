import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EncryptedData } from "./encryption_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file nigori_specifics.proto.
 */
export declare const file_nigori_specifics: GenFile;
/**
 * @generated from message sync_pb.NigoriKey
 */
export type NigoriKey = Message<"sync_pb.NigoriKey"> & {
    /**
     * Note that M78 and before rely on the name being populated, at least for
     * the main encrypted keybag within NigoriSpecifics.
     *
     * @generated from field: optional string deprecated_name = 1 [deprecated = true];
     * @deprecated
     */
    deprecatedName: string;
    /**
     * @generated from field: optional bytes deprecated_user_key = 2 [deprecated = true];
     * @deprecated
     */
    deprecatedUserKey: Uint8Array;
    /**
     * @generated from field: optional bytes encryption_key = 3;
     */
    encryptionKey: Uint8Array;
    /**
     * @generated from field: optional bytes mac_key = 4;
     */
    macKey: Uint8Array;
};
/**
 * Describes the message sync_pb.NigoriKey.
 * Use `create(NigoriKeySchema)` to create a new message.
 */
export declare const NigoriKeySchema: GenMessage<NigoriKey>;
/**
 * @generated from message sync_pb.CrossUserSharingPrivateKey
 */
export type CrossUserSharingPrivateKey = Message<"sync_pb.CrossUserSharingPrivateKey"> & {
    /**
     * The key version, used for key rotation.
     *
     * @generated from field: optional int32 version = 1;
     */
    version: number;
    /**
     * Private key on Curve25519 (32 bytes).
     *
     * @generated from field: optional bytes x25519_private_key = 2;
     */
    x25519PrivateKey: Uint8Array;
};
/**
 * Describes the message sync_pb.CrossUserSharingPrivateKey.
 * Use `create(CrossUserSharingPrivateKeySchema)` to create a new message.
 */
export declare const CrossUserSharingPrivateKeySchema: GenMessage<CrossUserSharingPrivateKey>;
/**
 * @generated from message sync_pb.CrossUserSharingPublicKey
 */
export type CrossUserSharingPublicKey = Message<"sync_pb.CrossUserSharingPublicKey"> & {
    /**
     * The key version, used for key rotation and consensus.
     *
     * @generated from field: optional int32 version = 1;
     */
    version: number;
    /**
     * Public key on Curve25519 (32 bytes).
     *
     * @generated from field: optional bytes x25519_public_key = 2;
     */
    x25519PublicKey: Uint8Array;
};
/**
 * Describes the message sync_pb.CrossUserSharingPublicKey.
 * Use `create(CrossUserSharingPublicKeySchema)` to create a new message.
 */
export declare const CrossUserSharingPublicKeySchema: GenMessage<CrossUserSharingPublicKey>;
/**
 * @generated from message sync_pb.EncryptionKeys
 */
export type EncryptionKeys = Message<"sync_pb.EncryptionKeys"> & {
    /**
     * Used for encrypting data in the user's account.
     *
     * @generated from field: repeated sync_pb.NigoriKey key = 2;
     */
    key: NigoriKey[];
    /**
     * Used for encrypting/authenticating using Public-private cryptography
     * primarily across user accounts, e.g. sharing invitations.
     *
     * @generated from field: repeated sync_pb.CrossUserSharingPrivateKey cross_user_sharing_private_key = 3;
     */
    crossUserSharingPrivateKey: CrossUserSharingPrivateKey[];
};
/**
 * Describes the message sync_pb.EncryptionKeys.
 * Use `create(EncryptionKeysSchema)` to create a new message.
 */
export declare const EncryptionKeysSchema: GenMessage<EncryptionKeys>;
/**
 * Deprecated: use EncryptionKeys instead.
 *
 * @generated from message sync_pb.NigoriKeyBag
 * @deprecated
 */
export type NigoriKeyBag = Message<"sync_pb.NigoriKeyBag"> & {
    /**
     * Used for encrypting data in the user's account.
     *
     * @generated from field: repeated sync_pb.NigoriKey key = 2;
     */
    key: NigoriKey[];
};
/**
 * Describes the message sync_pb.NigoriKeyBag.
 * Use `create(NigoriKeyBagSchema)` to create a new message.
 * @deprecated
 */
export declare const NigoriKeyBagSchema: GenMessage<NigoriKeyBag>;
/**
 * Properties of nigori sync object.
 *
 * @generated from message sync_pb.NigoriSpecifics
 */
export type NigoriSpecifics = Message<"sync_pb.NigoriSpecifics"> & {
    /**
     * Encrypted proto of type EncryptionKeys.
     *
     * @generated from field: optional sync_pb.EncryptedData encryption_keybag = 1;
     */
    encryptionKeybag?: EncryptedData;
    /**
     * Once keystore migration is performed, we have to freeze the keybag so that
     * older clients (that don't support keystore encryption) do not attempt to
     * update the keybag.
     * Previously |using_explicit_passphrase|.
     *
     * @generated from field: optional bool keybag_is_frozen = 2;
     */
    keybagIsFrozen: boolean;
    /**
     * Booleans corresponding to whether a datatype should be encrypted.
     * Passwords and Wi-Fi configurations are always encrypted, so we don't need
     * a field here.  History delete directives need to be consumable by the
     * server, and thus can't be encrypted.
     * USS clients don't read these values, datatypes are either always encrypted,
     * never encrypted or encrypted when |encrypt_everything| set to true.
     * TODO(crbug.com/1360022): complete deprecation of encrypt_* fields (replace
     * fields with reserved) once <M82 clients aren't supported.
     *
     * @generated from field: optional bool encrypt_bookmarks = 13 [deprecated = true];
     * @deprecated
     */
    encryptBookmarks: boolean;
    /**
     * @generated from field: optional bool encrypt_preferences = 14 [deprecated = true];
     * @deprecated
     */
    encryptPreferences: boolean;
    /**
     * @generated from field: optional bool encrypt_autofill_profile = 15 [deprecated = true];
     * @deprecated
     */
    encryptAutofillProfile: boolean;
    /**
     * @generated from field: optional bool encrypt_autofill = 16 [deprecated = true];
     * @deprecated
     */
    encryptAutofill: boolean;
    /**
     * @generated from field: optional bool encrypt_themes = 17 [deprecated = true];
     * @deprecated
     */
    encryptThemes: boolean;
    /**
     * @generated from field: optional bool encrypt_typed_urls = 18 [deprecated = true];
     * @deprecated
     */
    encryptTypedUrls: boolean;
    /**
     * @generated from field: optional bool encrypt_extensions = 19 [deprecated = true];
     * @deprecated
     */
    encryptExtensions: boolean;
    /**
     * @generated from field: optional bool encrypt_sessions = 20 [deprecated = true];
     * @deprecated
     */
    encryptSessions: boolean;
    /**
     * @generated from field: optional bool encrypt_apps = 21 [deprecated = true];
     * @deprecated
     */
    encryptApps: boolean;
    /**
     * @generated from field: optional bool encrypt_search_engines = 22 [deprecated = true];
     * @deprecated
     */
    encryptSearchEngines: boolean;
    /**
     * If true, all current and future datatypes will be encrypted.
     *
     * @generated from field: optional bool encrypt_everything = 24;
     */
    encryptEverything: boolean;
    /**
     * @generated from field: optional bool encrypt_extension_settings = 25 [deprecated = true];
     * @deprecated
     */
    encryptExtensionSettings: boolean;
    /**
     * @generated from field: optional bool encrypt_app_notifications = 26 [deprecated = true];
     * @deprecated
     */
    encryptAppNotifications: boolean;
    /**
     * @generated from field: optional bool encrypt_app_settings = 27 [deprecated = true];
     * @deprecated
     */
    encryptAppSettings: boolean;
    /**
     * Enable syncing favicons as part of tab sync.
     *
     * @generated from field: optional bool sync_tab_favicons = 29;
     */
    syncTabFavicons: boolean;
    /**
     * An |int| field is used instead of enum PassphraseType so we can better
     * handle unknown values coming from later versions. Prior to M77, this was an
     * enum so old clients will assume IMPLICIT_PASSPHRASE for values greater than
     * 4.
     *
     * @generated from field: optional int32 passphrase_type = 30 [default = 1];
     */
    passphraseType: number;
    /**
     * The keystore decryptor token blob. Encrypted with the keystore key, and
     * contains the encryption key used to decrypt |encryption_keybag|.
     * Only set if passphrase_state == KEYSTORE_PASSPHRASE.
     *
     * @generated from field: optional sync_pb.EncryptedData keystore_decryptor_token = 31;
     */
    keystoreDecryptorToken?: EncryptedData;
    /**
     * The time (in milliseconds since Unix epoch) at which the keystore migration
     * was performed.
     *
     * @generated from field: optional int64 keystore_migration_time = 32;
     */
    keystoreMigrationTime: bigint;
    /**
     * The time (in milliseconds since Unix epoch) at which a custom passphrase
     * was set. Note: this field may not be set if the custom passphrase was
     * applied before this field was introduced.
     *
     * @generated from field: optional int64 custom_passphrase_time = 33;
     */
    customPassphraseTime: bigint;
    /**
     * Boolean corresponding to whether custom spelling dictionary should be
     * encrypted.
     *
     * @generated from field: optional bool encrypt_dictionary = 34;
     */
    encryptDictionary: boolean;
    /**
     * Boolean corresponding to whether app list items should be encrypted.
     *
     * @generated from field: optional bool encrypt_app_list = 38 [deprecated = true];
     * @deprecated
     */
    encryptAppList: boolean;
    /**
     * Boolean corresponding to whether usage count and last use date of Wallet
     * data should be encrypted.
     *
     * @generated from field: optional bool encrypt_autofill_wallet_metadata = 39 [deprecated = true];
     * @deprecated
     */
    encryptAutofillWalletMetadata: boolean;
    /**
     * Boolean indicating whether this node was originally missing a
     * |keystore_migration_time| field value, and was fixed on the server by
     * giving the field a value.
     * THIS FIELD SHOULD ONLY BE SET BY THE SERVER.
     *
     * @generated from field: optional bool server_only_was_missing_keystore_migration_time = 40;
     */
    serverOnlyWasMissingKeystoreMigrationTime: boolean;
    /**
     * Boolean corresponding to whether arc pakcage items should be encrypted.
     *
     * @generated from field: optional bool encrypt_arc_package = 41 [deprecated = true];
     * @deprecated
     */
    encryptArcPackage: boolean;
    /**
     * Boolean corresponding to whether printer items should be encrypted.
     *
     * @generated from field: optional bool encrypt_printers = 42 [deprecated = true];
     * @deprecated
     */
    encryptPrinters: boolean;
    /**
     * Boolean corresponding to whether reading list items should be encrypted.
     *
     * @generated from field: optional bool encrypt_reading_list = 43 [deprecated = true];
     * @deprecated
     */
    encryptReadingList: boolean;
    /**
     * ID of the method used to derive the encryption key from a custom
     * passphrase. Should be set only when |passphrase_type| is CUSTOM_PASSPHRASE
     * and only based on CustomPassphraseKeyDerivationMethod. This field has been
     * added in M70. All previous versions just ignore it, attempt to use
     * PBKDF2_HMAC_SHA1_1003 and, thus, reject any passphrase if a different
     * method has been used. The default corresponds to UNSPECIFIED. An |int|
     * field is used so we can detect unknown values coming from later versions.
     *
     * @generated from field: optional int32 custom_passphrase_key_derivation_method = 45 [default = 0];
     */
    customPassphraseKeyDerivationMethod: number;
    /**
     * Base64-encoded salt used for the derivation of the key from the custom
     * passphrase. Valid only if custom_passphrase_key_derivation_method ==
     * SCRYPT_8192_8_11, ignored in other cases.
     *
     * @generated from field: optional string custom_passphrase_key_derivation_salt = 46;
     */
    customPassphraseKeyDerivationSalt: string;
    /**
     * Boolean corresponding to whether send tab should be encrypted.
     *
     * @generated from field: optional bool encrypt_send_tab_to_self = 47 [deprecated = true];
     * @deprecated
     */
    encryptSendTabToSelf: boolean;
    /**
     * Boolean corresponding to whether Web Apps data should be encrypted.
     *
     * @generated from field: optional bool encrypt_web_apps = 48 [deprecated = true];
     * @deprecated
     */
    encryptWebApps: boolean;
    /**
     * Boolean corresponding to whether OS preferences should be encrypted.
     *
     * @generated from field: optional bool encrypt_os_preferences = 49 [deprecated = true];
     * @deprecated
     */
    encryptOsPreferences: boolean;
    /**
     * @generated from field: optional sync_pb.NigoriSpecifics.TrustedVaultDebugInfo trusted_vault_debug_info = 50;
     */
    trustedVaultDebugInfo?: NigoriSpecifics_TrustedVaultDebugInfo;
    /**
     * Current cross user sharing Public-key to expose in server registry
     * for sharing offers outside account boundary.
     *
     * @generated from field: optional sync_pb.CrossUserSharingPublicKey cross_user_sharing_public_key = 53;
     */
    crossUserSharingPublicKey?: CrossUserSharingPublicKey;
};
/**
 * Describes the message sync_pb.NigoriSpecifics.
 * Use `create(NigoriSpecificsSchema)` to create a new message.
 */
export declare const NigoriSpecificsSchema: GenMessage<NigoriSpecifics>;
/**
 * Information useful for auto-upgrade to trusted vault.
 *
 * @generated from message sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo
 */
export type NigoriSpecifics_AutoUpgradeDebugInfo = Message<"sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo"> & {
    /**
     * Current state of an account after it was processed by auto-upgrade.
     *
     * @generated from field: optional sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.AutoUpgradeState auto_upgrade_state = 1;
     */
    autoUpgradeState: NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState;
    /**
     * ID of eligibility group account belongs to. Only use IDs defined
     * within EligibilityGroup enum.
     *
     * @generated from field: optional int32 eligibility_group_id = 2;
     */
    eligibilityGroupId: number;
};
/**
 * Describes the message sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.
 * Use `create(NigoriSpecifics_AutoUpgradeDebugInfoSchema)` to create a new message.
 */
export declare const NigoriSpecifics_AutoUpgradeDebugInfoSchema: GenMessage<NigoriSpecifics_AutoUpgradeDebugInfo>;
/**
 * @generated from enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.AutoUpgradeState
 */
export declare enum NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState {
    /**
     * @generated from enum value: STATE_UNSPECIFIED = 0;
     */
    STATE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: AUTO_UPGRADED = 1;
     */
    AUTO_UPGRADED = 1,
    /**
     * @generated from enum value: CONTROL = 2;
     */
    CONTROL = 2,
    /**
     * @generated from enum value: VALIDATION = 3;
     */
    VALIDATION = 3
}
/**
 * Describes the enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.AutoUpgradeState.
 */
export declare const NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeStateSchema: GenEnum<NigoriSpecifics_AutoUpgradeDebugInfo_AutoUpgradeState>;
/**
 * Each eligibility group can be ramped in different stages (e.g. 1%,
 * 10%, 100%).
 * Every ramp stage is differentiated with its own entry in the enum.
 *
 * @generated from enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.EligibilityGroup
 */
export declare enum NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup {
    /**
     * @generated from enum value: GROUP_UNSPECIFIED = 0;
     */
    GROUP_UNSPECIFIED = 0,
    /**
     * @generated from enum value: TEST_GROUP_1 = 1;
     */
    TEST_GROUP_1 = 1
}
/**
 * Describes the enum sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo.EligibilityGroup.
 */
export declare const NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroupSchema: GenEnum<NigoriSpecifics_AutoUpgradeDebugInfo_EligibilityGroup>;
/**
 * Some debug-only fields for passphrase type TRUSTED_VAULT_PASSPHRASE.
 *
 * @generated from message sync_pb.NigoriSpecifics.TrustedVaultDebugInfo
 */
export type NigoriSpecifics_TrustedVaultDebugInfo = Message<"sync_pb.NigoriSpecifics.TrustedVaultDebugInfo"> & {
    /**
     * The time (in milliseconds since Unix epoch) at which the trusted vault
     * migration was performed.
     *
     * @generated from field: optional int64 migration_time = 1;
     */
    migrationTime: bigint;
    /**
     * The version (aka key epoch) corresponding to the Nigori keybag.
     *
     * @generated from field: optional int32 key_version = 2;
     */
    keyVersion: number;
    /**
     * DebugInfo written by a process that auto-upgrades to trusted vault.
     *
     * @generated from field: optional sync_pb.NigoriSpecifics.AutoUpgradeDebugInfo auto_upgrade_debug_info = 3;
     */
    autoUpgradeDebugInfo?: NigoriSpecifics_AutoUpgradeDebugInfo;
    /**
     * The time (in milliseconds since Unix epoch) last update of the auto
     * upgrade debug info was made.
     *
     * @generated from field: optional int64 auto_upgrade_debug_info_modification_time_unix_epoch_millis = 4;
     */
    autoUpgradeDebugInfoModificationTimeUnixEpochMillis: bigint;
};
/**
 * Describes the message sync_pb.NigoriSpecifics.TrustedVaultDebugInfo.
 * Use `create(NigoriSpecifics_TrustedVaultDebugInfoSchema)` to create a new message.
 */
export declare const NigoriSpecifics_TrustedVaultDebugInfoSchema: GenMessage<NigoriSpecifics_TrustedVaultDebugInfo>;
/**
 * The state of the passphrase required to decrypt |encryption_keybag|.
 *
 * @generated from enum sync_pb.NigoriSpecifics.PassphraseType
 */
export declare enum NigoriSpecifics_PassphraseType {
    /**
     * Proto enums should begin with an 'unknown' value for switch statements,
     * unknown fields, etc.
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Gaia-based encryption passphrase. Legacy.
     *
     * @generated from enum value: IMPLICIT_PASSPHRASE = 1;
     */
    IMPLICIT_PASSPHRASE = 1,
    /**
     * Keystore key encryption passphrase. Uses |keystore_bootstrap| to
     * decrypt |encryption_keybag|.
     *
     * @generated from enum value: KEYSTORE_PASSPHRASE = 2;
     */
    KEYSTORE_PASSPHRASE = 2,
    /**
     * Previous Gaia-based passphrase frozen and treated as a custom passphrase.
     *
     * @generated from enum value: FROZEN_IMPLICIT_PASSPHRASE = 3;
     */
    FROZEN_IMPLICIT_PASSPHRASE = 3,
    /**
     * User provided custom passphrase.
     *
     * @generated from enum value: CUSTOM_PASSPHRASE = 4;
     */
    CUSTOM_PASSPHRASE = 4,
    /**
     * Encryption key provided by a trusted vault.
     *
     * @generated from enum value: TRUSTED_VAULT_PASSPHRASE = 5;
     */
    TRUSTED_VAULT_PASSPHRASE = 5
}
/**
 * Describes the enum sync_pb.NigoriSpecifics.PassphraseType.
 */
export declare const NigoriSpecifics_PassphraseTypeSchema: GenEnum<NigoriSpecifics_PassphraseType>;
/**
 * @generated from enum sync_pb.NigoriSpecifics.KeyDerivationMethod
 */
export declare enum NigoriSpecifics_KeyDerivationMethod {
    /**
     * This comes from a <= M69 client, who does not know about the field
     * (but implicitly uses PBKDF2_HMAC_SHA1_1003).
     *
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PBKDF2-HMAC-SHA1 with 1003 iterations and constant hardcoded salt. Was
     * implicitly used in <= M69.
     *
     * @generated from enum value: PBKDF2_HMAC_SHA1_1003 = 1;
     */
    PBKDF2_HMAC_SHA1_1003 = 1,
    /**
     * scrypt with N = 2^13, r = 8, p = 11 and random salt. Was added in M70.
     *
     * @generated from enum value: SCRYPT_8192_8_11 = 2;
     */
    SCRYPT_8192_8_11 = 2
}
/**
 * Describes the enum sync_pb.NigoriSpecifics.KeyDerivationMethod.
 */
export declare const NigoriSpecifics_KeyDerivationMethodSchema: GenEnum<NigoriSpecifics_KeyDerivationMethod>;
//# sourceMappingURL=nigori_specifics_pb.d.ts.map