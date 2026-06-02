import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { DataTypeContext, DataTypeProgressMarker } from "./data_type_progress_marker_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file model_type_state.proto.
 */
export declare const file_model_type_state: GenFile;
/**
 * Sync proto to store data type global metadata in model type storage.
 *
 * @generated from message sync_pb.ModelTypeState
 */
export type ModelTypeState = Message<"sync_pb.ModelTypeState"> & {
    /**
     * The latest progress markers received from the server.
     *
     * @generated from field: optional sync_pb.DataTypeProgressMarker progress_marker = 1;
     */
    progressMarker?: DataTypeProgressMarker;
    /**
     * A data type context.  Sent to the server in every commit or update
     * request.  May be updated by either responses from the server or requests
     * made on the model thread.  The interpretation of this value may be
     * data-type specific.  Many data types ignore it.
     *
     * @generated from field: optional sync_pb.DataTypeContext type_context = 2;
     */
    typeContext?: DataTypeContext;
    /**
     * This value is set if this type's data should be encrypted on the server.
     * If this key changes, the client will need to re-commit all of its local
     * data to the server using the new encryption key.
     *
     * @generated from field: optional string encryption_key_name = 3;
     */
    encryptionKeyName: string;
    /**
     * Deprecated in M113 and replaced by `initial_sync_state`.
     * As of M115, this is not populated anymore, but existing values are still
     * migrated to `initial_sync_state`.
     * TODO(crbug.com/1423338): Fully remove this field after a migration period.
     *
     * @generated from field: optional bool initial_sync_done_deprecated = 4 [deprecated = true];
     * @deprecated
     */
    initialSyncDoneDeprecated: boolean;
    /**
     * Indicates the status of "initial sync", i.e. whether the first download
     * cycle and initial merge are complete.
     *
     * @generated from field: optional sync_pb.ModelTypeState.InitialSyncState initial_sync_state = 9;
     */
    initialSyncState: ModelTypeState_InitialSyncState;
    /**
     * A GUID that identifies the committing sync client. It's persisted within
     * the sync metadata and should be used to check the integrity of the
     * metadata. Mismatches with the guid of the running client indicates invalid
     * persisted sync metadata, because cache_guid is reset when sync is disabled,
     * and disabling sync is supposed to clear sync metadata.
     *
     * @generated from field: optional string cache_guid = 5;
     */
    cacheGuid: string;
    /**
     * Syncing account ID, representing the user.
     *
     * @generated from field: optional string authenticated_account_id = 6;
     */
    authenticatedAccountId: string;
    /**
     * The latest unprocessed invalidations received from the server.
     * All incoming invalidations are stored in this message and persist until
     * they are used in GetUpdate() message.
     *
     * @generated from field: repeated sync_pb.ModelTypeState.Invalidation invalidations = 7;
     */
    invalidations: ModelTypeState_Invalidation[];
    /**
     * This is relevant for the passwords datatype. This indicates that the
     * initial sync flow (downling all passwords from the server) has been run at
     * least once after the password notes features is enabled. It is used to
     * enforce redownload of passwords upon upgrading the browser to a version
     * that supports password notes if necessary. It is false by default and set
     * to true upon downloading passwords to make sure this download is executed
     * only once.
     *
     * @generated from field: optional bool notes_enabled_before_initial_sync_for_passwords = 8;
     */
    notesEnabledBeforeInitialSyncForPasswords: boolean;
};
/**
 * Describes the message sync_pb.ModelTypeState.
 * Use `create(ModelTypeStateSchema)` to create a new message.
 */
export declare const ModelTypeStateSchema: GenMessage<ModelTypeState>;
/**
 * @generated from message sync_pb.ModelTypeState.Invalidation
 */
export type ModelTypeState_Invalidation = Message<"sync_pb.ModelTypeState.Invalidation"> & {
    /**
     * Opaque field, which has to be provided as part of resulting GetUpdates
     * back to the server.
     *
     * @generated from field: optional bytes hint = 1;
     */
    hint: Uint8Array;
    /**
     * Version of invalidation, used to order incoming invalidations.
     *
     * @generated from field: optional int64 version = 2;
     */
    version: bigint;
};
/**
 * Describes the message sync_pb.ModelTypeState.Invalidation.
 * Use `create(ModelTypeState_InvalidationSchema)` to create a new message.
 */
export declare const ModelTypeState_InvalidationSchema: GenMessage<ModelTypeState_Invalidation>;
/**
 * @generated from enum sync_pb.ModelTypeState.InitialSyncState
 */
export declare enum ModelTypeState_InitialSyncState {
    /**
     * Default value, typically used when there is no metadata (e.g. because
     * Sync is disabled).
     *
     * @generated from enum value: INITIAL_SYNC_STATE_UNSPECIFIED = 0;
     */
    INITIAL_SYNC_STATE_UNSPECIFIED = 0,
    /**
     * Indicates that syncing has started and some, but not all updates from the
     * initial download/sync have been delivered. This is only used for data
     * types in ApplyUpdatesImmediatelyTypes().
     *
     * @generated from enum value: INITIAL_SYNC_PARTIALLY_DONE = 2;
     */
    INITIAL_SYNC_PARTIALLY_DONE = 2,
    /**
     * Indicates that the initial sync (download + merge) has been completed.
     *
     * @generated from enum value: INITIAL_SYNC_DONE = 3;
     */
    INITIAL_SYNC_DONE = 3,
    /**
     * Indicates that no initial sync is necessary, used for CommitOnlyTypes().
     *
     * @generated from enum value: INITIAL_SYNC_UNNECESSARY = 4;
     */
    INITIAL_SYNC_UNNECESSARY = 4
}
/**
 * Describes the enum sync_pb.ModelTypeState.InitialSyncState.
 */
export declare const ModelTypeState_InitialSyncStateSchema: GenEnum<ModelTypeState_InitialSyncState>;
//# sourceMappingURL=model_type_state_pb.d.ts.map