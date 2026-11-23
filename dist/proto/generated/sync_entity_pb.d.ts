import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EntitySpecifics } from "./entity_specifics_pb";
import type { UniquePosition } from "./unique_position_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file sync_entity.proto.
 */
export declare const file_sync_entity: GenFile;
/**
 * @generated from message sync_pb.SyncEntity
 */
export type SyncEntity = Message<"sync_pb.SyncEntity"> & {
    /**
     * This item's identifier.  In a commit of a new item, this will be a
     * client-generated ID.  If the commit succeeds, the server will generate
     * a globally unique ID and return it to the committing client in the
     * CommitResponse.EntryResponse.  In the context of a GetUpdatesResponse,
     * |id_string| is always the server generated ID.  The original
     * client-generated ID is preserved in the |originator_client_id| field.
     * Present in both GetUpdatesResponse and CommitMessage.
     * Prior to M123, this field was empty for commit-only types.
     *
     * @generated from field: optional string id_string = 1;
     */
    idString: string;
    /**
     * An id referencing this item's parent in the hierarchy.  In a
     * CommitMessage, it is accepted for this to be a client-generated temporary
     * ID if there was a new created item with that ID appearing earlier
     * in the message.  In all other situations, it is a server ID.
     * Present in both GetUpdatesResponse and CommitMessage.
     *
     * Starting with M99, this field is optional and used for legacy bookmarks
     * only:
     * 1. When processing GetUpdatesResponse, it is unused for modern data created
     *    or reuploaded by M94 or above, which populates the parent's GUID in
     *    BookmarkSpecifics (which is sufficient).
     * 2. When issuing CommitMessage, the field is populated for compatibility
     *    with clients before M99.
     *
     * @generated from field: optional string parent_id_string = 2;
     */
    parentIdString: string;
    /**
     * The version of this item -- a monotonically increasing value that is
     * maintained by for each item.  If zero in a CommitMessage, the server
     * will interpret this entity as a newly-created item and generate a
     * new server ID and an initial version number.  If nonzero in a
     * CommitMessage, this item is treated as an update to an existing item, and
     * the server will use |id_string| to locate the item.  Then, if the item's
     * current version on the server does not match |version|, the commit will
     * fail for that item.  The server will not update it, and will return
     * a result code of CONFLICT.  In a GetUpdatesResponse, |version| is
     * always positive and indentifies the revision of the item data being sent
     * to the client.
     * Present in both GetUpdatesResponse and CommitMessage.
     * WARNING: This field used to be required before M60. Any client before this
     * will fail to deserialize if this field is missing.
     *
     * @generated from field: optional int64 version = 4;
     */
    version: bigint;
    /**
     * Last modification time, in milliseconds since Unix epoch.
     * Present in both GetUpdatesResponse and CommitMessage.
     *
     * @generated from field: optional int64 mtime = 5;
     */
    mtime: bigint;
    /**
     * Creation time, in milliseconds since Unix epoch.
     * Present in both GetUpdatesResponse and CommitMessage.
     *
     * @generated from field: optional int64 ctime = 6;
     */
    ctime: bigint;
    /**
     * The name of this item.
     * Historical note:
     *   Since November 2010, this value is no different from non_unique_name.
     *   Before then, server implementations would maintain a unique-within-parent
     *   value separate from its base, "non-unique" value.  Clients had not
     *   depended on the uniqueness of the property since November 2009; it was
     *   removed from Chromium by http://codereview.chromium.org/371029 .
     * Present in both GetUpdatesResponse and CommitMessage.
     * WARNING: This field used to be required before M60. Any client before this
     * will fail to deserialize if this field is missing.
     *
     * @generated from field: optional string name = 7;
     */
    name: string;
    /**
     * The name of this item.  Same as |name|.
     * |non_unique_name| should take precedence over the |name| value if both
     * are supplied.  For efficiency, clients and servers should avoid setting
     * this redundant value.
     * Present in both GetUpdatesResponse and CommitMessage.
     *
     * @generated from field: optional string non_unique_name = 8;
     */
    nonUniqueName: string;
    /**
     * If present, this tag identifies this item as being a uniquely
     * instanced item.  The server ensures that there is never more
     * than one entity in a user's store with the same tag value.
     * This value is used to identify and find e.g. the "Bookmark Bar" folder
     * without relying on a particular ID or name.
     *
     * This variant of the tag is created by the server, so clients can't create
     * an item with a tag using this field.
     *
     * Use client_tag_hash if you want to create one from the client.
     *
     * An item can't have both a client_tag_hash and
     * a server_defined_unique_tag.
     *
     * Present only in GetUpdatesResponse.
     *
     * @generated from field: optional string server_defined_unique_tag = 10;
     */
    serverDefinedUniqueTag: string;
    /**
     * Ancient fields, predecessors for |unique_position|, deprecated with M26 and
     * still supported to deal with old incoming data. See field |unique_position|
     * for details as well as the data-upgrading implementation in
     * GetUniquePositionFromSyncEntity().
     *
     * @generated from field: optional int64 position_in_parent = 15 [deprecated = true];
     * @deprecated
     */
    positionInParent: bigint;
    /**
     * @generated from field: optional string insert_after_item_id = 16 [deprecated = true];
     * @deprecated
     */
    insertAfterItemId: string;
    /**
     * If true, indicates that this item has been (or should be) deleted.
     * Present in both GetUpdatesResponse and CommitMessage.
     *
     * @generated from field: optional bool deleted = 18 [default = false];
     */
    deleted: boolean;
    /**
     * A unique ID that identifies the the sync client who initially committed
     * this entity.  This value corresponds to |cache_guid| in CommitMessage.
     * This field, along with |originator_client_item_id|, can be used to
     * reunite the original with its official committed version in the case
     * where a client does not receive or process the commit response for
     * some reason.
     *
     * Present only in GetUpdatesResponse.
     *
     * This field is also used in determining the unique identifier used in
     * bookmarks' unique_position field.
     *
     * @generated from field: optional string originator_cache_guid = 19;
     */
    originatorCacheGuid: string;
    /**
     * Item ID as generated by the client that initially created this entity. Used
     * exclusively for bookmarks (other datatypes use client_tag_hash).
     * There are three generation of bookmarks that have populated this field
     * differently, depending on which version of the browser created the
     * bookmark:
     * 1. For bookmarks created before M44 (2015), the field got populated with an
     *    ID that is locally unique, but not globally unique (usually a negative
     *    number).
     * 2. For bookmarks created between M45 and M51, both inclusive, the field got
     *    populated with a globally unique GUID in uppercase form.
     * 3. For bookmarks created with M52 or above, the field gets populated with
     *    a globally unique GUID in lowercase form.
     *
     * Present only in GetUpdatesResponse.
     *
     * @generated from field: optional string originator_client_item_id = 20;
     */
    originatorClientItemId: string;
    /**
     * Extensible container for datatype-specific data.
     * This became available in version 23 of the protocol.
     *
     * @generated from field: optional sync_pb.EntitySpecifics specifics = 21;
     */
    specifics?: EntitySpecifics;
    /**
     * Indicate whether this is a folder or not. Available in version 23+.
     *
     * @generated from field: optional bool folder = 22 [default = false];
     */
    folder: boolean;
    /**
     * A client defined unique hash for this entity.
     * Analogous to server_defined_unique_tag, but allows the client to determine
     * an immutable attribute of the entity in hashed form that makes it unique
     * per user (i.e. at most one entity may exist per client tag hash).
     *
     * This value must be of the form base64(SHA1(client_tag)) where the
     * client_tag is a value derived from the contents of an entity in a
     * type-specific way. Since the hashed contents of the client_tag are exposed
     * to the server via this field, take care when defining it that there is
     * enough entropy to mask any secrets that the server shouldn't learn.
     *
     * The difference between server_defined_unique_tag and
     * client_tag_hash is the creator of the entity. Server defined
     * tags are entities created by the server at account creation,
     * while client defined tags are entities created by the client at any time.
     *
     * During GetUpdates, a sync entity update will come back with ONE of:
     * a) Originator item and cache id - for bookmarks created using old versions
     *    of the browser (latest M93, before https://crrev.com/c/2945119).
     * b) Server tag - If server committed the item as unique
     * c) Client tag - If client committed the item as unique
     *
     * May be present in CommitMessages for the initial creation of an entity.
     * If present in Commit updates for the entity, it will be ignored.
     *
     * May be returned in GetUpdatesMessage and sent up in CommitMessage.
     *
     * @generated from field: optional string client_tag_hash = 23;
     */
    clientTagHash: string;
    /**
     * Introduced in M26, represents ordering among entities, in practice used for
     * bookmarks only. Clients should not assume it is always populated in
     * GetUpdatesMessage due to the following caveats:
     * 1. Tombstones and permanent folders do not populate it (ordering is
     *    irrelevant).
     * 2. It may remain unset by future versions of the client, as long as the
     *    field with the same name is populated inside BookmarkSpecifics. M94 and
     *    above populate both for backward compatibility reasons, but when support
     *    for M93 is retired, modern clients at the time may stop populating this
     *    field.
     * 3. Very old data (last committed by M25 or below, before the field was
     *    introduced) does not include this field, and in that case the legacy
     *    fields |position_in_parent| or |insert_after_item_id| must be honored
     *    instead.
     *
     * May be returned in GetUpdatesMessage and sent up in CommitMessage.
     *
     * @generated from field: optional sync_pb.UniquePosition unique_position = 25;
     */
    uniquePosition?: UniquePosition;
    /**
     * @generated from field: optional sync_pb.SyncEntity.CollaborationMetadata collaboration = 27;
     */
    collaboration?: SyncEntity_CollaborationMetadata;
};
/**
 * Describes the message sync_pb.SyncEntity.
 * Use `create(SyncEntitySchema)` to create a new message.
 */
export declare const SyncEntitySchema: GenMessage<SyncEntity>;
/**
 * Metadata used for shared data types. Must not be present for regular data
 * types.
 * Introduced in M124.
 *
 * @generated from message sync_pb.SyncEntity.CollaborationMetadata
 */
export type SyncEntity_CollaborationMetadata = Message<"sync_pb.SyncEntity.CollaborationMetadata"> & {
    /**
     * Collaboration ID which the current entity belongs to.
     *
     * @generated from field: optional string collaboration_id = 1;
     */
    collaborationId: string;
};
/**
 * Describes the message sync_pb.SyncEntity.CollaborationMetadata.
 * Use `create(SyncEntity_CollaborationMetadataSchema)` to create a new message.
 */
export declare const SyncEntity_CollaborationMetadataSchema: GenMessage<SyncEntity_CollaborationMetadata>;
//# sourceMappingURL=sync_entity_pb.d.ts.map