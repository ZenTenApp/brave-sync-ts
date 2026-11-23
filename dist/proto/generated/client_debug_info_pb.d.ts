import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { GetUpdatesCallerInfo } from "./get_updates_caller_info_pb";
import type { SyncEnums_GetUpdatesOrigin, SyncEnums_SingletonDebugEventType } from "./sync_enums_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file client_debug_info.proto.
 */
export declare const file_client_debug_info: GenFile;
/**
 * Per-type hint information.
 *
 * @generated from message sync_pb.TypeHint
 */
export type TypeHint = Message<"sync_pb.TypeHint"> & {
    /**
     * The data type this hint applied to.
     *
     * @generated from field: optional int32 data_type_id = 1;
     */
    dataTypeId: number;
    /**
     * Whether or not a valid hint is provided.
     *
     * @generated from field: optional bool has_valid_hint = 2;
     */
    hasValidHint: boolean;
};
/**
 * Describes the message sync_pb.TypeHint.
 * Use `create(TypeHintSchema)` to create a new message.
 */
export declare const TypeHintSchema: GenMessage<TypeHint>;
/**
 * The additional info here is from the StatusController. They get sent when
 * the event SYNC_CYCLE_COMPLETED  is sent.
 *
 * @generated from message sync_pb.SyncCycleCompletedEventInfo
 */
export type SyncCycleCompletedEventInfo = Message<"sync_pb.SyncCycleCompletedEventInfo"> & {
    /**
     * These new conflict counters replace the ones above.
     * TODO(crbug.com/1315573): Deprecated in M103.
     *
     * @generated from field: optional int32 num_encryption_conflicts = 4 [deprecated = true];
     * @deprecated
     */
    numEncryptionConflicts: number;
    /**
     * @generated from field: optional int32 num_hierarchy_conflicts = 5 [deprecated = true];
     * @deprecated
     */
    numHierarchyConflicts: number;
    /**
     * No longer sent since M24.
     *
     * @generated from field: optional int32 num_simple_conflicts = 6;
     */
    numSimpleConflicts: number;
    /**
     * @generated from field: optional int32 num_server_conflicts = 7;
     */
    numServerConflicts: number;
    /**
     * Counts to track the effective usefulness of our GetUpdate requests.
     *
     * @generated from field: optional int32 num_updates_downloaded = 8;
     */
    numUpdatesDownloaded: number;
    /**
     * TODO(crbug.com/1315573): Deprecated in M103.
     *
     * @generated from field: optional int32 num_reflected_updates_downloaded = 9 [deprecated = true];
     * @deprecated
     */
    numReflectedUpdatesDownloaded: number;
    /**
     * |caller_info| was mostly replaced by |get_updates_origin|; now it only
     * contains the |notifications_enabled| flag.
     *
     * @generated from field: optional sync_pb.GetUpdatesCallerInfo caller_info = 10;
     */
    callerInfo?: GetUpdatesCallerInfo;
    /**
     * @generated from field: optional sync_pb.SyncEnums.GetUpdatesOrigin get_updates_origin = 12;
     */
    getUpdatesOrigin: SyncEnums_GetUpdatesOrigin;
};
/**
 * Describes the message sync_pb.SyncCycleCompletedEventInfo.
 * Use `create(SyncCycleCompletedEventInfoSchema)` to create a new message.
 */
export declare const SyncCycleCompletedEventInfoSchema: GenMessage<SyncCycleCompletedEventInfo>;
/**
 * @generated from message sync_pb.DebugEventInfo
 */
export type DebugEventInfo = Message<"sync_pb.DebugEventInfo"> & {
    /**
     * Each of the following fields correspond to different kinds of events. as
     * a result, only one is set during any single DebugEventInfo.
     * A singleton event. See enum definition.
     *
     * @generated from field: optional sync_pb.SyncEnums.SingletonDebugEventType singleton_event = 1;
     */
    singletonEvent: SyncEnums_SingletonDebugEventType;
    /**
     * A sync cycle completed.
     *
     * @generated from field: optional sync_pb.SyncCycleCompletedEventInfo sync_cycle_completed_event_info = 2;
     */
    syncCycleCompletedEventInfo?: SyncCycleCompletedEventInfo;
    /**
     * A datatype triggered a nudge.
     *
     * @generated from field: optional int32 nudging_datatype = 3;
     */
    nudgingDatatype: number;
    /**
     * A notification triggered a nudge.
     *
     * @generated from field: repeated int32 datatypes_notified_from_server = 4;
     */
    datatypesNotifiedFromServer: number[];
};
/**
 * Describes the message sync_pb.DebugEventInfo.
 * Use `create(DebugEventInfoSchema)` to create a new message.
 */
export declare const DebugEventInfoSchema: GenMessage<DebugEventInfo>;
/**
 * @generated from message sync_pb.DebugInfo
 */
export type DebugInfo = Message<"sync_pb.DebugInfo"> & {
    /**
     * @generated from field: repeated sync_pb.DebugEventInfo events = 1;
     */
    events: DebugEventInfo[];
    /**
     * Whether cryptographer is ready to encrypt and decrypt data.
     *
     * @generated from field: optional bool cryptographer_ready = 2;
     */
    cryptographerReady: boolean;
    /**
     * Cryptographer has pending keys which indicates the correct passphrase
     * has not been provided yet.
     *
     * @generated from field: optional bool cryptographer_has_pending_keys = 3;
     */
    cryptographerHasPendingKeys: boolean;
    /**
     * Indicates client has dropped some events to save bandwidth.
     *
     * @generated from field: optional bool events_dropped = 4;
     */
    eventsDropped: boolean;
};
/**
 * Describes the message sync_pb.DebugInfo.
 * Use `create(DebugInfoSchema)` to create a new message.
 */
export declare const DebugInfoSchema: GenMessage<DebugInfo>;
//# sourceMappingURL=client_debug_info_pb.d.ts.map