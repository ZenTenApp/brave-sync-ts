import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file data_type_progress_marker.proto.
 */
export declare const file_data_type_progress_marker: GenFile;
/**
 * @generated from message sync_pb.DataTypeProgressMarker
 */
export type DataTypeProgressMarker = Message<"sync_pb.DataTypeProgressMarker"> & {
    /**
     * An integer identifying the data type whose progress is tracked by this
     * marker.  The legitimate values of this field correspond to the protobuf
     * field numbers of all EntitySpecifics fields supported by the server.
     * These values are externally declared in per-datatype .proto files.
     *
     * @generated from field: optional int32 data_type_id = 1;
     */
    dataTypeId: number;
    /**
     * An opaque-to-the-client sequence of bytes that the server may interpret
     * as an indicator of the client's knowledge state.  If this is empty or
     * omitted by the client, it indicates that the client is initiating a
     * a first-time sync of this datatype.  Otherwise, clients must supply a
     * value previously returned by the server in an earlier GetUpdatesResponse.
     * These values are not comparable or generable on the client.
     *
     * The opaque semantics of this field are to afford server implementations
     * some flexibility in implementing progress tracking.  For instance,
     * a server implementation built on top of a distributed storage service --
     * or multiple heterogenous such services -- might need to supply a vector
     * of totally ordered monotonic update timestamps, rather than a single
     * monotonically increasing value.  Other optimizations may also be
     * possible if the server is allowed to embed arbitrary information in
     * the progress token.
     *
     * Server implementations should keep the size of these tokens relatively
     * small, on the order of tens of bytes, and they should remain small
     * regardless of the number of items synchronized.  (A possible bad server
     * implementation would be for progress_token to contain a list of all the
     * items ever sent to the client.  Servers shouldn't do this.)
     *
     * @generated from field: optional bytes token = 2;
     */
    token: Uint8Array;
    /**
     * This field will be included only in GetUpdates with origin GU_TRIGGER.
     *
     * @generated from field: optional sync_pb.GetUpdateTriggers get_update_triggers = 5;
     */
    getUpdateTriggers?: GetUpdateTriggers;
    /**
     * The garbage collection directive for this data type.  The client should
     * purge items locally based on this directive.  Since this directive is
     * designed to be sent from server only, the client should persist it locally
     * as needed and avoid sending it to the server.
     *
     * @generated from field: optional sync_pb.GarbageCollectionDirective gc_directive = 6;
     */
    gcDirective?: GarbageCollectionDirective;
};
/**
 * Describes the message sync_pb.DataTypeProgressMarker.
 * Use `create(DataTypeProgressMarkerSchema)` to create a new message.
 */
export declare const DataTypeProgressMarkerSchema: GenMessage<DataTypeProgressMarker>;
/**
 * A single datatype's sync context. Allows the datatype to pass along
 * datatype specific information with its own server backend.
 *
 * @generated from message sync_pb.DataTypeContext
 */
export type DataTypeContext = Message<"sync_pb.DataTypeContext"> & {
    /**
     * The type this context is associated with.
     *
     * @generated from field: optional int32 data_type_id = 1;
     */
    dataTypeId: number;
    /**
     * The context for the datatype.
     *
     * @generated from field: optional bytes context = 2;
     */
    context: Uint8Array;
    /**
     * The version of the context.
     *
     * @generated from field: optional int64 version = 3;
     */
    version: bigint;
};
/**
 * Describes the message sync_pb.DataTypeContext.
 * Use `create(DataTypeContextSchema)` to create a new message.
 */
export declare const DataTypeContextSchema: GenMessage<DataTypeContext>;
/**
 * @generated from message sync_pb.GarbageCollectionDirective
 */
export type GarbageCollectionDirective = Message<"sync_pb.GarbageCollectionDirective"> & {
    /**
     * Deprecated in M124. This field is unused because it would be hard to use
     * `active_collaboration_ids`. The client should rely on the presence of the
     * corresponding fields instead.
     *
     * @generated from field: optional sync_pb.GarbageCollectionDirective.Type type = 1 [default = UNKNOWN, deprecated = true];
     * @deprecated
     */
    type: GarbageCollectionDirective_Type;
    /**
     * This field specifies the watermark for the versions which should get
     * garbage collected.  The client should purge all sync entities when
     * receiving any value of this.  This is a change from previous behavior,
     * where the client would only be required to purge items older than the
     * specified watermark.
     * TODO(crbug.com/877951): Rename this to make clear that whenever it's set,
     * the client will delete ALL data, regardless of its value.
     *
     * @generated from field: optional int64 version_watermark = 2;
     */
    versionWatermark: bigint;
    /**
     * @generated from field: optional sync_pb.GarbageCollectionDirective.CollaborationGarbageCollection collaboration_gc = 5;
     */
    collaborationGc?: GarbageCollectionDirective_CollaborationGarbageCollection;
};
/**
 * Describes the message sync_pb.GarbageCollectionDirective.
 * Use `create(GarbageCollectionDirectiveSchema)` to create a new message.
 */
export declare const GarbageCollectionDirectiveSchema: GenMessage<GarbageCollectionDirective>;
/**
 * This field contains a list of active collaboration IDs which are available
 * to the user. The client should stop tracking any shared sync entities with
 * collaborations which are not in the list. Note that if the list is empty,
 * an empty `collaboration_gc` is expected to be provided by the server.
 * Introduced in M124.
 *
 * @generated from message sync_pb.GarbageCollectionDirective.CollaborationGarbageCollection
 */
export type GarbageCollectionDirective_CollaborationGarbageCollection = Message<"sync_pb.GarbageCollectionDirective.CollaborationGarbageCollection"> & {
    /**
     * @generated from field: repeated string active_collaboration_ids = 1;
     */
    activeCollaborationIds: string[];
};
/**
 * Describes the message sync_pb.GarbageCollectionDirective.CollaborationGarbageCollection.
 * Use `create(GarbageCollectionDirective_CollaborationGarbageCollectionSchema)` to create a new message.
 */
export declare const GarbageCollectionDirective_CollaborationGarbageCollectionSchema: GenMessage<GarbageCollectionDirective_CollaborationGarbageCollection>;
/**
 * @generated from enum sync_pb.GarbageCollectionDirective.Type
 */
export declare enum GarbageCollectionDirective_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: VERSION_WATERMARK = 1;
     */
    VERSION_WATERMARK = 1,
    /**
     * @generated from enum value: DEPRECATED_AGE_WATERMARK = 2 [deprecated = true];
     * @deprecated
     */
    DEPRECATED_AGE_WATERMARK = 2,
    /**
     * @generated from enum value: DEPRECATED_MAX_ITEM_COUNT = 3 [deprecated = true];
     * @deprecated
     */
    DEPRECATED_MAX_ITEM_COUNT = 3
}
/**
 * Describes the enum sync_pb.GarbageCollectionDirective.Type.
 */
export declare const GarbageCollectionDirective_TypeSchema: GenEnum<GarbageCollectionDirective_Type>;
/**
 * This message communicates additional per-type information related to
 * requests with origin GU_TRIGGER.  This message is not relevant when any
 * other origin value is used.
 * Introduced in M29.
 *
 * @generated from message sync_pb.GetUpdateTriggers
 */
export type GetUpdateTriggers = Message<"sync_pb.GetUpdateTriggers"> & {
    /**
     * An opaque-to-the-client string of bytes, received through a notification,
     * that the server may interpret as a hint about the location of the latest
     * version of the data for this type.
     * Introduced in M29.
     *
     * @generated from field: repeated string notification_hint = 1;
     */
    notificationHint: string[];
    /**
     * This flag is set if the client was forced to drop hints because the number
     * of queued hints exceeded its limit.  The oldest hints will be discarded
     * first.  Introduced in M29.
     *
     * @generated from field: optional bool client_dropped_hints = 2;
     */
    clientDroppedHints: boolean;
    /**
     * This flag is set when the client suspects that its list of invalidation
     * hints may be incomplete.  This may be the case if:
     * - The client is syncing for the first time.
     * - The client has just restarted and it was unable to keep track of
     *   invalidations that were received prior to the restart.
     * - The client's connection to the invalidation server is currently or
     *   was recently broken.
     *
     * It's difficult to provide more details here.  This is implemented by
     * setting the flag to false whenever anything that might adversely affect
     * notifications happens (eg. a crash, restart on a platform that doesn't
     * support invalidation ack-tracking, transient invalidation error) and is
     * unset only after we've experienced one successful sync cycle while
     * notifications were enabled.
     *
     * This flag was introduced in M29.
     *
     * @generated from field: optional bool invalidations_out_of_sync = 3;
     */
    invalidationsOutOfSync: boolean;
    /**
     * This counts the number of times the syncer has been asked to commit
     * changes for this type since the last successful sync cycle.  The number of
     * nudges may not be related to the actual number of items modified.  It
     * often correlates with the number of user actions, but that's not always
     * the case.
     * Introduced in M29.
     *
     * @generated from field: optional int64 local_modification_nudges = 4;
     */
    localModificationNudges: bigint;
    /**
     * This counts the number of times the syncer has been explicitly asked to
     * fetch updates for this type since the last successful sync cycle.  These
     * explicit refresh requests should be relatively rare on most platforms, and
     * associated with user actions.  For example, at the time of this writing
     * the most common (only?) source of refresh requests is when a user opens
     * the new tab page on a platform that does not support sessions
     * invalidations.
     * Introduced in M29.
     *
     * @generated from field: optional int64 datatype_refresh_nudges = 5;
     */
    datatypeRefreshNudges: bigint;
    /**
     * This flag is set if the invalidation server reports that it may have
     * dropped some invalidations at some point.  Introduced in M33.
     *
     * @generated from field: optional bool server_dropped_hints = 6;
     */
    serverDroppedHints: boolean;
    /**
     * This flag is set if this GetUpdate request is due at least in part due
     * to the fact that this type has not finished initial sync yet, and the
     * client would like to initialize itself with the server data.
     *
     * Only some types support performing an initial sync as part of a normal
     * GetUpdate request.  Many types must be in configure mode when fetching
     * initial sync data.
     *
     * Introduced in M38.
     *
     * @generated from field: optional bool initial_sync_in_progress = 7;
     */
    initialSyncInProgress: boolean;
    /**
     * This flag is set if this GetUpdate request is due to client receiving
     * conflict response from server, so client needs to sync and then resolve
     * conflict locally, and then commit again.
     *
     * Introduced in M42.
     *
     * @generated from field: optional bool sync_for_resolve_conflict_in_progress = 8;
     */
    syncForResolveConflictInProgress: boolean;
};
/**
 * Describes the message sync_pb.GetUpdateTriggers.
 * Use `create(GetUpdateTriggersSchema)` to create a new message.
 */
export declare const GetUpdateTriggersSchema: GenMessage<GetUpdateTriggers>;
//# sourceMappingURL=data_type_progress_marker_pb.d.ts.map