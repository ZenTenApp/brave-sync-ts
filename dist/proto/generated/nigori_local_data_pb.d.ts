import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EncryptedData } from "./encryption_pb";
import type { EntityMetadata } from "./entity_metadata_pb";
import type { ModelTypeState } from "./model_type_state_pb";
import type { CrossUserSharingPrivateKey, CrossUserSharingPublicKey, NigoriKey, NigoriSpecifics_KeyDerivationMethod, NigoriSpecifics_PassphraseType, NigoriSpecifics_TrustedVaultDebugInfo } from "./nigori_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file nigori_local_data.proto.
 */
export declare const file_nigori_local_data: GenFile;
/**
 * @generated from message sync_pb.CrossUserSharingKeys
 */
export type CrossUserSharingKeys = Message<"sync_pb.CrossUserSharingKeys"> & {
    /**
     * Asymmetric private-keys used for cross user sharing.
     *
     * @generated from field: repeated sync_pb.CrossUserSharingPrivateKey private_key = 1;
     */
    privateKey: CrossUserSharingPrivateKey[];
};
/**
 * Describes the message sync_pb.CrossUserSharingKeys.
 * Use `create(CrossUserSharingKeysSchema)` to create a new message.
 */
export declare const CrossUserSharingKeysSchema: GenMessage<CrossUserSharingKeys>;
/**
 * @generated from message sync_pb.LocalNigoriKeyBag
 */
export type LocalNigoriKeyBag = Message<"sync_pb.LocalNigoriKeyBag"> & {
    /**
     * Used for encrypting within the sync account boundary.
     *
     * @generated from field: repeated sync_pb.NigoriKey key = 2;
     */
    key: NigoriKey[];
};
/**
 * Describes the message sync_pb.LocalNigoriKeyBag.
 * Use `create(LocalNigoriKeyBagSchema)` to create a new message.
 */
export declare const LocalNigoriKeyBagSchema: GenMessage<LocalNigoriKeyBag>;
/**
 * @generated from message sync_pb.CryptographerData
 */
export type CryptographerData = Message<"sync_pb.CryptographerData"> & {
    /**
     * Contains all known Nigori keys.
     *
     * @generated from field: optional sync_pb.LocalNigoriKeyBag key_bag = 1;
     */
    keyBag?: LocalNigoriKeyBag;
    /**
     * Default key is the key, that should be used for encryption. Can be empty
     * in case we have pending keys (waiting for explicit passphrase, or client
     * didn't received keystore keys).
     *
     * @generated from field: optional string default_key_name = 2;
     */
    defaultKeyName: string;
    /**
     * Contains cross user sharing related keys.
     *
     * @generated from field: optional sync_pb.CrossUserSharingKeys cross_user_sharing_keys = 3;
     */
    crossUserSharingKeys?: CrossUserSharingKeys;
};
/**
 * Describes the message sync_pb.CryptographerData.
 * Use `create(CryptographerDataSchema)` to create a new message.
 */
export declare const CryptographerDataSchema: GenMessage<CryptographerData>;
/**
 * @generated from message sync_pb.CustomPassphraseKeyDerivationParams
 */
export type CustomPassphraseKeyDerivationParams = Message<"sync_pb.CustomPassphraseKeyDerivationParams"> & {
    /**
     * Method used for deriving keys from custom passphrase.
     *
     * @generated from field: optional sync_pb.NigoriSpecifics.KeyDerivationMethod custom_passphrase_key_derivation_method = 1;
     */
    customPassphraseKeyDerivationMethod: NigoriSpecifics_KeyDerivationMethod;
    /**
     * Salt used for the derivation of the key from the custom passphrase. Should
     * be set iff custom_passphrase_key_derivation_method == SCRYPT_8192_8_11.
     *
     * @generated from field: optional string custom_passphrase_key_derivation_salt = 2;
     */
    customPassphraseKeyDerivationSalt: string;
};
/**
 * Describes the message sync_pb.CustomPassphraseKeyDerivationParams.
 * Use `create(CustomPassphraseKeyDerivationParamsSchema)` to create a new message.
 */
export declare const CustomPassphraseKeyDerivationParamsSchema: GenMessage<CustomPassphraseKeyDerivationParams>;
/**
 * @generated from message sync_pb.NigoriModel
 */
export type NigoriModel = Message<"sync_pb.NigoriModel"> & {
    /**
     * Represents state of the cryptographer.
     *
     * @generated from field: optional sync_pb.CryptographerData cryptographer_data = 1;
     */
    cryptographerData?: CryptographerData;
    /**
     * Contains the name of the key, used for encryption of
     * NigoriSpecifics.keystore_decryptor_token, should always be the name of the
     * latest keystore key. Equals to cryptographer_data.default_key_name iff it
     * is Nigori in full keystore mode (not in backward compatible keystore
     * mode).
     *
     * @generated from field: optional string current_keystore_key_name = 2;
     */
    currentKeystoreKeyName: string;
    /**
     * Contains keybag in encrypted form, should be empty once we were able to
     * decrypt keybag from specifics.
     *
     * @generated from field: optional sync_pb.EncryptedData pending_keys = 3;
     */
    pendingKeys?: EncryptedData;
    /**
     * PassphraseType used for encryption. IMPLICIT_PASSPRHASE shouldn't be used
     * here.
     *
     * @generated from field: optional sync_pb.NigoriSpecifics.PassphraseType passphrase_type = 4 [default = UNKNOWN];
     */
    passphraseType: NigoriSpecifics_PassphraseType;
    /**
     * The time (in UNIX epoch milliseconds) at which the keystore migration was
     * performed.
     *
     * @generated from field: optional int64 keystore_migration_time = 5;
     */
    keystoreMigrationTime: bigint;
    /**
     * The time (in UNIX epoch milliseconds) at which a custom passphrase was
     * set.
     * Note: this field may not be set if the custom passphrase was applied before
     * corresponding field in NigoriSpecifics was introduced.
     *
     * @generated from field: optional int64 custom_passphrase_time = 6;
     */
    customPassphraseTime: bigint;
    /**
     * Params used for deriving keys from custom passphrase. Should be set iff
     * |passphrase_type| is CUSTOM_PASSPHRASE.
     *
     * @generated from field: optional sync_pb.CustomPassphraseKeyDerivationParams custom_passphrase_key_derivation_params = 7;
     */
    customPassphraseKeyDerivationParams?: CustomPassphraseKeyDerivationParams;
    /**
     * Indicates whether we need to encrypt all encryptable user types.
     *
     * @generated from field: optional bool encrypt_everything = 8;
     */
    encryptEverything: boolean;
    /**
     * The list of encrypted UserEncryptableTypes, represented by their specifics
     * field number.
     *
     * @generated from field: repeated int32 encrypted_types_specifics_field_number = 9;
     */
    encryptedTypesSpecificsFieldNumber: number[];
    /**
     * Keystore keys are used to decrypt keystore-based Nigori. Should be
     * persisted in order to not ask the keystore server for them during every
     * browser startup. Due to backward compatibility requirements keys are
     * always Base64 encoded.
     *
     * @generated from field: repeated string keystore_key = 10;
     */
    keystoreKey: string[];
    /**
     * Encryptor keystore decryptor token. Used for decryption of keystore Nigori
     * in case keystore keys arrived after NigoriSpecifics.
     *
     * @generated from field: optional sync_pb.EncryptedData pending_keystore_decryptor_token = 11;
     */
    pendingKeystoreDecryptorToken?: EncryptedData;
    /**
     * Contains the name of the latest available trusted vault key that was used
     * as the default encryption key. Resets when the client go out of pending
     * decryption state and transits to other passphrase types.
     *
     * @generated from field: optional string last_default_trusted_vault_key_name = 12;
     */
    lastDefaultTrustedVaultKeyName: string;
    /**
     * Some debug-only fields for passphrase type TRUSTED_VAULT_PASSPHRASE.
     *
     * @generated from field: optional sync_pb.NigoriSpecifics.TrustedVaultDebugInfo trusted_vault_debug_info = 13;
     */
    trustedVaultDebugInfo?: NigoriSpecifics_TrustedVaultDebugInfo;
    /**
     * Current Public-key.
     *
     * @generated from field: optional sync_pb.CrossUserSharingPublicKey cross_user_sharing_public_key = 14;
     */
    crossUserSharingPublicKey?: CrossUserSharingPublicKey;
};
/**
 * Describes the message sync_pb.NigoriModel.
 * Use `create(NigoriModelSchema)` to create a new message.
 */
export declare const NigoriModelSchema: GenMessage<NigoriModel>;
/**
 * Sync proto to store Nigori data in storage. Proto should be encrypted with
 * os_crypt before storing it somewhere, because it contains sensitive data (
 * nigori_model.cryptographer_data.key_bag and nigori_model.keystore_keys).
 *
 * @generated from message sync_pb.NigoriLocalData
 */
export type NigoriLocalData = Message<"sync_pb.NigoriLocalData"> & {
    /**
     * Global metadata.
     *
     * @generated from field: optional sync_pb.ModelTypeState model_type_state = 1;
     */
    modelTypeState?: ModelTypeState;
    /**
     * Metadata for Nigori entity.
     *
     * @generated from field: optional sync_pb.EntityMetadata entity_metadata = 2;
     */
    entityMetadata?: EntityMetadata;
    /**
     * Nigori model state.
     *
     * @generated from field: optional sync_pb.NigoriModel nigori_model = 3;
     */
    nigoriModel?: NigoriModel;
};
/**
 * Describes the message sync_pb.NigoriLocalData.
 * Use `create(NigoriLocalDataSchema)` to create a new message.
 */
export declare const NigoriLocalDataSchema: GenMessage<NigoriLocalData>;
//# sourceMappingURL=nigori_local_data_pb.d.ts.map