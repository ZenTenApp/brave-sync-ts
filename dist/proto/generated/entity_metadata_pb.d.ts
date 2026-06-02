import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EntitySpecifics } from "./entity_specifics_pb";
import type { UniquePosition } from "./unique_position_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file entity_metadata.proto.
 */
export declare const file_entity_metadata: GenFile;
/**
 * Sync proto to store entity metadata in model type storage.
 *
 * @generated from message sync_pb.EntityMetadata
 */
export type EntityMetadata = Message<"sync_pb.EntityMetadata"> & {
    /**
     * A hash based on the client tag and model type.
     * Used for various map lookups. Should always be available.
     * Sent to the server as SyncEntity::client_tag_hash.
     *
     * @generated from field: optional string client_tag_hash = 1;
     */
    clientTagHash: string;
    /**
     * The entity's server-assigned ID.
     *
     * Prior to the item's first commit, we leave this value as an empty string.
     * The initial ID for a newly created item has to meet certain uniqueness
     * requirements, and we handle those on the sync thread.
     *
     * @generated from field: optional string server_id = 2;
     */
    serverId: string;
    /**
     * Whether or not the entity is deleted.
     *
     * @generated from field: optional bool is_deleted = 3;
     */
    isDeleted: boolean;
    /**
     * A version number used to track in-progress commits. Each local change
     * increments this number.
     *
     * @generated from field: optional int64 sequence_number = 4;
     */
    sequenceNumber: bigint;
    /**
     * The sequence number of the last item known to be successfully committed.
     *
     * @generated from field: optional int64 acked_sequence_number = 5;
     */
    ackedSequenceNumber: bigint;
    /**
     * The server version on which this item is based.
     *
     * If there are no local changes, this is the version of the entity as we see
     * it here.
     *
     * If there are local changes, this is the version of the entity on which
     * those changes are based.
     *
     * @generated from field: optional int64 server_version = 6 [default = -1];
     */
    serverVersion: bigint;
    /**
     * Entity creation and modification timestamps. Assigned by the client and
     * synced by the server, though the server usually doesn't bother to inspect
     * their values. They are encoded as milliseconds since the Unix epoch.
     *
     * @generated from field: optional int64 creation_time = 7;
     */
    creationTime: bigint;
    /**
     * @generated from field: optional int64 modification_time = 8;
     */
    modificationTime: bigint;
    /**
     * A hash of the current entity specifics value. Used to detect whether
     * entity's specifics value has changed without having to keep specifics in
     * memory.
     *
     * @generated from field: optional string specifics_hash = 9;
     */
    specificsHash: string;
    /**
     * A hash of the last specifics known by both the client and server. Used to
     * detect when local commits and remote updates are just for encryption. This
     * value will be the empty string only in the following cases: the entity is
     * in sync with the server, has never been synced, or is deleted.
     *
     * @generated from field: optional string base_specifics_hash = 10;
     */
    baseSpecificsHash: string;
    /**
     * Used for positioning entities among their siblings. Relevant only for data
     * types that support positions (e.g bookmarks). Refer to its definition in
     * unique_position.proto for more information about its internal
     * representation.
     *
     * @generated from field: optional sync_pb.UniquePosition unique_position = 11;
     */
    uniquePosition?: UniquePosition;
    /**
     * Used only for bookmarks. It's analogous to |specifics_hash| but it
     * exclusively hashes the content of the favicon image, as represented in
     * proto field BookmarkSpecifics.favicon, using base::PersistentHash().
     *
     * @generated from field: optional fixed32 bookmark_favicon_hash = 12;
     */
    bookmarkFaviconHash: number;
    /**
     * Last specifics known by both the client and server. Used during commits to
     * the server in order to prevent data loss caused by older clients dealing
     * with unknown proto fields (fields that were introduced later). Datatypes
     * (ModelTypeSyncBridge) may implement logic to trim down (or fully clear)
     * this proto prior to caching, to avoid the memory and I/O overhead of
     * dealing with an extra copy of the data. Introduced in M101.
     *
     * @generated from field: optional sync_pb.EntitySpecifics possibly_trimmed_base_specifics = 13;
     */
    possiblyTrimmedBaseSpecifics?: EntitySpecifics;
    /**
     * If the entity is deleted, this field will record the chromium version
     * (e.g. 117.0.5875.1) that originated the deletion. Introduced in M117.
     *
     * @generated from field: optional string deleted_by_version = 14;
     */
    deletedByVersion: string;
    /**
     * @generated from field: optional sync_pb.EntityMetadata.CollaborationMetadata collaboration = 15;
     */
    collaboration?: EntityMetadata_CollaborationMetadata;
};
/**
 * Describes the message sync_pb.EntityMetadata.
 * Use `create(EntityMetadataSchema)` to create a new message.
 */
export declare const EntityMetadataSchema: GenMessage<EntityMetadata>;
/**
 * Metadata used for shared data types. Must not be present for regular data
 * types.
 * Introduced in M124.
 *
 * @generated from message sync_pb.EntityMetadata.CollaborationMetadata
 */
export type EntityMetadata_CollaborationMetadata = Message<"sync_pb.EntityMetadata.CollaborationMetadata"> & {
    /**
     * Collaboration ID which the current entity belongs to.
     *
     * @generated from field: optional string collaboration_id = 1;
     */
    collaborationId: string;
};
/**
 * Describes the message sync_pb.EntityMetadata.CollaborationMetadata.
 * Use `create(EntityMetadata_CollaborationMetadataSchema)` to create a new message.
 */
export declare const EntityMetadata_CollaborationMetadataSchema: GenMessage<EntityMetadata_CollaborationMetadata>;
//# sourceMappingURL=entity_metadata_pb.d.ts.map