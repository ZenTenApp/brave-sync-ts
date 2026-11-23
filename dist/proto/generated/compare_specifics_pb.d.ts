import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file compare_specifics.proto.
 */
export declare const file_compare_specifics: GenFile;
/**
 * A Compare sync entity, containing sufficient data to enable all data
 * acquisition for rendering the Compare experience.
 *
 * @generated from message sync_pb.CompareSpecifics
 */
export type CompareSpecifics = Message<"sync_pb.CompareSpecifics"> & {
    /**
     * The primary key for local storage.
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid: string;
    /**
     * Tracks when this entity was created.
     *
     * @generated from field: optional int64 creation_time_unix_epoch_micros = 2;
     */
    creationTimeUnixEpochMicros: bigint;
    /**
     * Tracks when this entity was last modified.
     *
     * @generated from field: optional int64 update_time_unix_epoch_micros = 3;
     */
    updateTimeUnixEpochMicros: bigint;
    /**
     * The name of the comparison group.
     *
     * @generated from field: optional string name = 4;
     */
    name: string;
    /**
     * The list of product URLs that constitute this comparison group.
     *
     * @generated from field: repeated sync_pb.ComparisonData data = 5;
     */
    data: ComparisonData[];
};
/**
 * Describes the message sync_pb.CompareSpecifics.
 * Use `create(CompareSpecificsSchema)` to create a new message.
 */
export declare const CompareSpecificsSchema: GenMessage<CompareSpecifics>;
/**
 * @generated from message sync_pb.ComparisonData
 */
export type ComparisonData = Message<"sync_pb.ComparisonData"> & {
    /**
     * The URL of the item in the comparison.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
};
/**
 * Describes the message sync_pb.ComparisonData.
 * Use `create(ComparisonDataSchema)` to create a new message.
 */
export declare const ComparisonDataSchema: GenMessage<ComparisonData>;
//# sourceMappingURL=compare_specifics_pb.d.ts.map