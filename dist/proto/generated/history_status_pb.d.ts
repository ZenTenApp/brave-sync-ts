import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file history_status.proto.
 */
export declare const file_history_status: GenFile;
/**
 * @generated from message sync_pb.HistoryStatusRequest
 */
export type HistoryStatusRequest = Message<"sync_pb.HistoryStatusRequest"> & {};
/**
 * Describes the message sync_pb.HistoryStatusRequest.
 * Use `create(HistoryStatusRequestSchema)` to create a new message.
 */
export declare const HistoryStatusRequestSchema: GenMessage<HistoryStatusRequest>;
/**
 * Response to a history status request.
 *
 * @generated from message sync_pb.HistoryStatusResponse
 */
export type HistoryStatusResponse = Message<"sync_pb.HistoryStatusResponse"> & {
    /**
     * Minimal time to wait before issuing another request.
     *
     * @generated from field: optional int32 min_poll_interval_seconds = 1 [default = 3600];
     */
    minPollIntervalSeconds: number;
    /**
     * Indicates whether the history corpuses have any derived data for a user.
     *
     * @generated from field: optional bool has_derived_data = 2;
     */
    hasDerivedData: boolean;
};
/**
 * Describes the message sync_pb.HistoryStatusResponse.
 * Use `create(HistoryStatusResponseSchema)` to create a new message.
 */
export declare const HistoryStatusResponseSchema: GenMessage<HistoryStatusResponse>;
//# sourceMappingURL=history_status_pb.d.ts.map