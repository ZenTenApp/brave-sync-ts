import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file experiments_specifics.proto.
 */
export declare const file_experiments_specifics: GenFile;
/**
 * A flag to enable support for keystore encryption.
 *
 * @generated from message sync_pb.KeystoreEncryptionFlags
 */
export type KeystoreEncryptionFlags = Message<"sync_pb.KeystoreEncryptionFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.KeystoreEncryptionFlags.
 * Use `create(KeystoreEncryptionFlagsSchema)` to create a new message.
 */
export declare const KeystoreEncryptionFlagsSchema: GenMessage<KeystoreEncryptionFlags>;
/**
 * Whether history delete directives are enabled.
 *
 * @generated from message sync_pb.HistoryDeleteDirectives
 */
export type HistoryDeleteDirectives = Message<"sync_pb.HistoryDeleteDirectives"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.HistoryDeleteDirectives.
 * Use `create(HistoryDeleteDirectivesSchema)` to create a new message.
 */
export declare const HistoryDeleteDirectivesSchema: GenMessage<HistoryDeleteDirectives>;
/**
 * Whether this client should cull (delete) expired autofill
 * entries when autofill sync is enabled.
 *
 * @generated from message sync_pb.AutofillCullingFlags
 */
export type AutofillCullingFlags = Message<"sync_pb.AutofillCullingFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.AutofillCullingFlags.
 * Use `create(AutofillCullingFlagsSchema)` to create a new message.
 */
export declare const AutofillCullingFlagsSchema: GenMessage<AutofillCullingFlags>;
/**
 * Whether the favicon sync datatypes are enabled, and what parameters
 * they should operate under.
 *
 * @generated from message sync_pb.FaviconSyncFlags
 */
export type FaviconSyncFlags = Message<"sync_pb.FaviconSyncFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
    /**
     * @generated from field: optional int32 favicon_sync_limit = 2 [default = 200];
     */
    faviconSyncLimit: number;
};
/**
 * Describes the message sync_pb.FaviconSyncFlags.
 * Use `create(FaviconSyncFlagsSchema)` to create a new message.
 */
export declare const FaviconSyncFlagsSchema: GenMessage<FaviconSyncFlags>;
/**
 * Flags for enabling the experimental no-precommit GU feature.
 *
 * @generated from message sync_pb.PreCommitUpdateAvoidanceFlags
 */
export type PreCommitUpdateAvoidanceFlags = Message<"sync_pb.PreCommitUpdateAvoidanceFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.PreCommitUpdateAvoidanceFlags.
 * Use `create(PreCommitUpdateAvoidanceFlagsSchema)` to create a new message.
 */
export declare const PreCommitUpdateAvoidanceFlagsSchema: GenMessage<PreCommitUpdateAvoidanceFlags>;
/**
 * Flags for enabling the GCM feature.
 *
 * @generated from message sync_pb.GcmChannelFlags
 */
export type GcmChannelFlags = Message<"sync_pb.GcmChannelFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.GcmChannelFlags.
 * Use `create(GcmChannelFlagsSchema)` to create a new message.
 */
export declare const GcmChannelFlagsSchema: GenMessage<GcmChannelFlags>;
/**
 * Flags for enabling the experimental enhanced bookmarks feature.
 *
 * @generated from message sync_pb.EnhancedBookmarksFlags
 */
export type EnhancedBookmarksFlags = Message<"sync_pb.EnhancedBookmarksFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
    /**
     * @generated from field: optional string extension_id = 2;
     */
    extensionId: string;
};
/**
 * Describes the message sync_pb.EnhancedBookmarksFlags.
 * Use `create(EnhancedBookmarksFlagsSchema)` to create a new message.
 */
export declare const EnhancedBookmarksFlagsSchema: GenMessage<EnhancedBookmarksFlags>;
/**
 * Flags for enabling GCM channel for invalidations.
 *
 * @generated from message sync_pb.GcmInvalidationsFlags
 */
export type GcmInvalidationsFlags = Message<"sync_pb.GcmInvalidationsFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.GcmInvalidationsFlags.
 * Use `create(GcmInvalidationsFlagsSchema)` to create a new message.
 */
export declare const GcmInvalidationsFlagsSchema: GenMessage<GcmInvalidationsFlags>;
/**
 * Flags for enabling wallet data syncing.
 *
 * @generated from message sync_pb.WalletSyncFlags
 */
export type WalletSyncFlags = Message<"sync_pb.WalletSyncFlags"> & {
    /**
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
};
/**
 * Describes the message sync_pb.WalletSyncFlags.
 * Use `create(WalletSyncFlagsSchema)` to create a new message.
 */
export declare const WalletSyncFlagsSchema: GenMessage<WalletSyncFlags>;
/**
 * Contains one flag or set of related flags.  Each node of the experiments type
 * will have a unique_client_tag identifying which flags it contains.  By
 * convention, the tag name should match the sub-message name.
 *
 * @generated from message sync_pb.ExperimentsSpecifics
 */
export type ExperimentsSpecifics = Message<"sync_pb.ExperimentsSpecifics"> & {
    /**
     * @generated from field: optional sync_pb.KeystoreEncryptionFlags keystore_encryption = 1;
     */
    keystoreEncryption?: KeystoreEncryptionFlags;
    /**
     * @generated from field: optional sync_pb.HistoryDeleteDirectives history_delete_directives = 2;
     */
    historyDeleteDirectives?: HistoryDeleteDirectives;
    /**
     * @generated from field: optional sync_pb.AutofillCullingFlags autofill_culling = 3;
     */
    autofillCulling?: AutofillCullingFlags;
    /**
     * @generated from field: optional sync_pb.FaviconSyncFlags favicon_sync = 4;
     */
    faviconSync?: FaviconSyncFlags;
    /**
     * @generated from field: optional sync_pb.PreCommitUpdateAvoidanceFlags pre_commit_update_avoidance = 5;
     */
    preCommitUpdateAvoidance?: PreCommitUpdateAvoidanceFlags;
    /**
     * @generated from field: optional sync_pb.GcmChannelFlags gcm_channel = 6;
     */
    gcmChannel?: GcmChannelFlags;
    /**
     * No longer used as of M43.
     *
     * @generated from field: optional sync_pb.EnhancedBookmarksFlags obsolete_enhanced_bookmarks = 7;
     */
    obsoleteEnhancedBookmarks?: EnhancedBookmarksFlags;
    /**
     * No longer used as of M72.
     *
     * @generated from field: optional sync_pb.GcmInvalidationsFlags gcm_invalidations = 8;
     */
    gcmInvalidations?: GcmInvalidationsFlags;
    /**
     * No longer used as of M51.
     *
     * @generated from field: optional sync_pb.WalletSyncFlags obsolete_wallet_sync = 9;
     */
    obsoleteWalletSync?: WalletSyncFlags;
};
/**
 * Describes the message sync_pb.ExperimentsSpecifics.
 * Use `create(ExperimentsSpecificsSchema)` to create a new message.
 */
export declare const ExperimentsSpecificsSchema: GenMessage<ExperimentsSpecifics>;
//# sourceMappingURL=experiments_specifics_pb.d.ts.map