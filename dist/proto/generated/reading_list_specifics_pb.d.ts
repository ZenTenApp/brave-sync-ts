import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file reading_list_specifics.proto.
 */
export declare const file_reading_list_specifics: GenFile;
/**
 * Sync Reading list entry. This proto contains the fields synced for a reading
 * list entry. It must be kept synced with the reading_list.ReadingListLocal
 * protobuf.
 *
 * @generated from message sync_pb.ReadingListSpecifics
 */
export type ReadingListSpecifics = Message<"sync_pb.ReadingListSpecifics"> & {
    /**
     * entry_id and url must be equal.
     *
     * @generated from field: optional string entry_id = 1;
     */
    entryId: string;
    /**
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * @generated from field: optional string url = 3;
     */
    url: string;
    /**
     * @generated from field: optional int64 creation_time_us = 4;
     */
    creationTimeUs: bigint;
    /**
     * @generated from field: optional int64 update_time_us = 5;
     */
    updateTimeUs: bigint;
    /**
     * @generated from field: optional int64 first_read_time_us = 7;
     */
    firstReadTimeUs: bigint;
    /**
     * @generated from field: optional int64 update_title_time_us = 8;
     */
    updateTitleTimeUs: bigint;
    /**
     * @generated from field: optional int32 estimated_read_time_seconds = 9;
     */
    estimatedReadTimeSeconds: number;
    /**
     * If the field is not present, it defaults to UNSEEN.
     *
     * @generated from field: optional sync_pb.ReadingListSpecifics.ReadingListEntryStatus status = 6;
     */
    status: ReadingListSpecifics_ReadingListEntryStatus;
};
/**
 * Describes the message sync_pb.ReadingListSpecifics.
 * Use `create(ReadingListSpecificsSchema)` to create a new message.
 */
export declare const ReadingListSpecificsSchema: GenMessage<ReadingListSpecifics>;
/**
 * @generated from enum sync_pb.ReadingListSpecifics.ReadingListEntryStatus
 */
export declare enum ReadingListSpecifics_ReadingListEntryStatus {
    /**
     * @generated from enum value: UNREAD = 0;
     */
    UNREAD = 0,
    /**
     * @generated from enum value: READ = 1;
     */
    READ = 1,
    /**
     * @generated from enum value: UNSEEN = 2;
     */
    UNSEEN = 2
}
/**
 * Describes the enum sync_pb.ReadingListSpecifics.ReadingListEntryStatus.
 */
export declare const ReadingListSpecifics_ReadingListEntryStatusSchema: GenEnum<ReadingListSpecifics_ReadingListEntryStatus>;
//# sourceMappingURL=reading_list_specifics_pb.d.ts.map