import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ModelTypeState } from "./model_type_state_pb";
import type { EntityMetadata } from "./entity_metadata_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file bookmark_model_metadata.proto.
 */
export declare const file_bookmark_model_metadata: GenFile;
/**
 * Corresponds to a single bookmark id/metadata pair.
 *
 * @generated from message sync_pb.BookmarkMetadata
 */
export type BookmarkMetadata = Message<"sync_pb.BookmarkMetadata"> & {
    /**
     * Bookmark local id.
     *
     * @generated from field: optional int64 id = 1;
     */
    id: bigint;
    /**
     * Bookmarks sync metadata.
     *
     * @generated from field: optional sync_pb.EntityMetadata metadata = 2;
     */
    metadata?: EntityMetadata;
};
/**
 * Describes the message sync_pb.BookmarkMetadata.
 * Use `create(BookmarkMetadataSchema)` to create a new message.
 */
export declare const BookmarkMetadataSchema: GenMessage<BookmarkMetadata>;
/**
 * Sync proto to carry the sync metadata for the bookmarks model. It is used for
 * persisting and loading sync metadata from disk.
 *
 * @generated from message sync_pb.BookmarkModelMetadata
 */
export type BookmarkModelMetadata = Message<"sync_pb.BookmarkModelMetadata"> & {
    /**
     * Bookmark global metadata.
     *
     * @generated from field: optional sync_pb.ModelTypeState model_type_state = 1;
     */
    modelTypeState?: ModelTypeState;
    /**
     * A set of all bookmarks metadata.
     *
     * @generated from field: repeated sync_pb.BookmarkMetadata bookmarks_metadata = 2;
     */
    bookmarksMetadata: BookmarkMetadata[];
    /**
     * Indicates whether the reupload of bookmarks has been triggered such that
     * they include fields like |type|, |unique_position| and |parent_guid|, which
     * means that their sequence number has been increased (independently of
     * whether the commit has succeeded or even started).
     * TODO(crbug.com/1232951): remove this code when most of bookmarks are
     * reuploaded.
     *
     * @generated from field: optional bool bookmarks_hierarchy_fields_reuploaded = 6;
     */
    bookmarksHierarchyFieldsReuploaded: boolean;
    /**
     * Number of remote updates that were ignored because the parent folder could
     * not be determined since sync (bookmark sync) started (since initial sync,
     * including initial sync itself). Note that this excludes updates
     * representing changes (moves) to existing/tracked bookmarks (i.e. the parent
     * folder used to be known, but the new one specified in the update isn't).
     *
     * Only a minority of users should have a non-zero value, due to a) corrupt
     * data, reasons unknown; or b) permanent folders that were unsupported at the
     * time the update was received (either for the permanent folder itself or for
     * descendants). The absence of this field should be interpreted as 'unknown',
     * which roughly means the counter wasn't supported by the browser -M77 or
     * below- at the time sync was enabled (it also means, it will remain
     * 'unknown' until initial sync is exercised, e.g. sync disabled and
     * reenabled).
     *
     * @generated from field: optional int64 num_ignored_updates_due_to_missing_parent = 7;
     */
    numIgnoredUpdatesDueToMissingParent: bigint;
    /**
     * See field above. Among such ignored updates, this field tracks which was
     * the highest server version. This may be useful -in the future- to get a
     * sense of "time" (or, since versions are opaque to the client, at least a
     * notion of ordering with respect to other updates). The absence of this
     * field should be interpreted as 'unknown' and does not distinguish the
     * case between a) no updates ignored; and b) field wasn't supported at the
     * time the last update was ignored. To distinguish between these two, the
     * field above can be used.
     *
     * @generated from field: optional int64 max_version_among_ignored_updates_due_to_missing_parent = 8;
     */
    maxVersionAmongIgnoredUpdatesDueToMissingParent: bigint;
    /**
     * Indicates whether the count of remote updates during the latest initial
     * merge exceeded the bookmark limit. This field is mutually exclusive to all
     * the other fields and is managed completely by the processor.
     *
     * @generated from field: optional bool last_initial_merge_remote_updates_exceeded_limit = 9;
     */
    lastInitialMergeRemoteUpdatesExceededLimit: boolean;
};
/**
 * Describes the message sync_pb.BookmarkModelMetadata.
 * Use `create(BookmarkModelMetadataSchema)` to create a new message.
 */
export declare const BookmarkModelMetadataSchema: GenMessage<BookmarkModelMetadata>;
//# sourceMappingURL=bookmark_model_metadata_pb.d.ts.map