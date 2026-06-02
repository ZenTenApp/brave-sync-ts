import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file collaboration_group_specifics.proto.
 */
export declare const file_collaboration_group_specifics: GenFile;
/**
 * Special sync datatype to notify client about People Group changes.
 *
 * @generated from message sync_pb.CollaborationGroupSpecifics
 */
export type CollaborationGroupSpecifics = Message<"sync_pb.CollaborationGroupSpecifics"> & {
    /**
     * Unique identifier for a collaboration group, also known as `group_id` or
     * `group_name`.
     *
     * @generated from field: optional string collaboration_id = 1;
     */
    collaborationId: string;
    /**
     * Indicates staleness of the collaboration group, used to determine whether
     * client should refresh cached group. Server-side derived from group
     * `consistency_token`.
     *
     * @generated from field: optional int64 last_updated_timestamp_millis_since_unix_epoch = 2;
     */
    lastUpdatedTimestampMillisSinceUnixEpoch: bigint;
};
/**
 * Describes the message sync_pb.CollaborationGroupSpecifics.
 * Use `create(CollaborationGroupSpecificsSchema)` to create a new message.
 */
export declare const CollaborationGroupSpecificsSchema: GenMessage<CollaborationGroupSpecifics>;
//# sourceMappingURL=collaboration_group_specifics_pb.d.ts.map