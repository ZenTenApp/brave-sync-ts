import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file history_delete_directive_specifics.proto.
 */
export declare const file_history_delete_directive_specifics: GenFile;
/**
 * Properties of history delete directive sync objects.
 *
 * @generated from message sync_pb.HistoryDeleteDirectiveSpecifics
 */
export type HistoryDeleteDirectiveSpecifics = Message<"sync_pb.HistoryDeleteDirectiveSpecifics"> & {
    /**
     * Exactly one of the fields below must be filled in.  Otherwise, this
     * delete directive must be ignored.
     *
     * @generated from field: optional sync_pb.GlobalIdDirective global_id_directive = 1;
     */
    globalIdDirective?: GlobalIdDirective;
    /**
     * @generated from field: optional sync_pb.TimeRangeDirective time_range_directive = 2;
     */
    timeRangeDirective?: TimeRangeDirective;
    /**
     * @generated from field: optional sync_pb.UrlDirective url_directive = 3;
     */
    urlDirective?: UrlDirective;
};
/**
 * Describes the message sync_pb.HistoryDeleteDirectiveSpecifics.
 * Use `create(HistoryDeleteDirectiveSpecificsSchema)` to create a new message.
 */
export declare const HistoryDeleteDirectiveSpecificsSchema: GenMessage<HistoryDeleteDirectiveSpecifics>;
/**
 * @generated from message sync_pb.GlobalIdDirective
 */
export type GlobalIdDirective = Message<"sync_pb.GlobalIdDirective"> & {
    /**
     * The global IDs of the navigations to delete.
     *
     * @generated from field: repeated int64 global_id = 1;
     */
    globalId: bigint[];
    /**
     * Time range for searching for navigations to delete. Client should delete
     * all navigations to a URL between [start_time_usec, end_time_usec]
     * if one of them matches a |global_id|.
     *
     * @generated from field: optional int64 start_time_usec = 2;
     */
    startTimeUsec: bigint;
    /**
     * @generated from field: optional int64 end_time_usec = 3;
     */
    endTimeUsec: bigint;
};
/**
 * Describes the message sync_pb.GlobalIdDirective.
 * Use `create(GlobalIdDirectiveSchema)` to create a new message.
 */
export declare const GlobalIdDirectiveSchema: GenMessage<GlobalIdDirective>;
/**
 * Both fields below must be filled in.  Otherwise, this delete directive
 * must be ignored.
 *
 * @generated from message sync_pb.TimeRangeDirective
 */
export type TimeRangeDirective = Message<"sync_pb.TimeRangeDirective"> & {
    /**
     * The time on or after which entries must be deleted.
     *
     * @generated from field: optional int64 start_time_usec = 1;
     */
    startTimeUsec: bigint;
    /**
     * The time on or before which entries must be deleted.
     *
     * @generated from field: optional int64 end_time_usec = 2;
     */
    endTimeUsec: bigint;
    /**
     * Optional field to filter the entries with the matching app ID.
     * This field is set only by Android which has app-specific history feature
     * that allows users to generate/delete history entries from Custom Tabs on
     * app, not from BrApp.
     *
     * @generated from field: optional string app_id = 3;
     */
    appId: string;
};
/**
 * Describes the message sync_pb.TimeRangeDirective.
 * Use `create(TimeRangeDirectiveSchema)` to create a new message.
 */
export declare const TimeRangeDirectiveSchema: GenMessage<TimeRangeDirective>;
/**
 * Both fields below must be filled in.  Otherwise, this delete directive
 * must be ignored.
 *
 * @generated from message sync_pb.UrlDirective
 */
export type UrlDirective = Message<"sync_pb.UrlDirective"> & {
    /**
     * The URL that should be removed from history.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * The time on or before which entries must be deleted.
     * In microseconds since the Unix epoch.
     *
     * @generated from field: optional int64 end_time_usec = 2;
     */
    endTimeUsec: bigint;
    /**
     * Optional field to filter the entries with the matching app ID.
     * This field is set only by Android which has app-specific history feature
     * that allows users to generate/delete history entries from Custom Tabs on
     * app, not from BrApp.
     *
     * @generated from field: optional string app_id = 3;
     */
    appId: string;
};
/**
 * Describes the message sync_pb.UrlDirective.
 * Use `create(UrlDirectiveSchema)` to create a new message.
 */
export declare const UrlDirectiveSchema: GenMessage<UrlDirective>;
//# sourceMappingURL=history_delete_directive_specifics_pb.d.ts.map