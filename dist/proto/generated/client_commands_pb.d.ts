import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file client_commands.proto.
 */
export declare const file_client_commands: GenFile;
/**
 * @generated from message sync_pb.CustomNudgeDelay
 */
export type CustomNudgeDelay = Message<"sync_pb.CustomNudgeDelay"> & {
    /**
     * Datatype id.
     *
     * @generated from field: optional int32 datatype_id = 1;
     */
    datatypeId: number;
    /**
     * Delay in milliseconds.
     *
     * @generated from field: optional int32 delay_ms = 2;
     */
    delayMs: number;
};
/**
 * Describes the message sync_pb.CustomNudgeDelay.
 * Use `create(CustomNudgeDelaySchema)` to create a new message.
 */
export declare const CustomNudgeDelaySchema: GenMessage<CustomNudgeDelay>;
/**
 * @generated from message sync_pb.ClientCommand
 */
export type ClientCommand = Message<"sync_pb.ClientCommand"> & {
    /**
     * Time to wait before sending any requests to the server.
     *
     * in seconds
     *
     * @generated from field: optional int32 set_sync_poll_interval = 1;
     */
    setSyncPollInterval: number;
    /**
     * This has been deprecated since M75.
     *
     * @generated from field: optional int32 set_sync_long_poll_interval = 2 [deprecated = true];
     * @deprecated
     */
    setSyncLongPollInterval: number;
    /**
     * @generated from field: optional int32 max_commit_batch_size = 3;
     */
    maxCommitBatchSize: number;
    /**
     * Number of seconds to delay before the throttled client should retry.
     *
     * @generated from field: optional int32 throttle_delay_seconds = 5;
     */
    throttleDelaySeconds: number;
    /**
     * This has been deprecated since M109.
     *
     * @generated from field: optional int32 client_invalidation_hint_buffer_size = 6 [deprecated = true];
     * @deprecated
     */
    clientInvalidationHintBufferSize: number;
    /**
     * Time to wait before issuing a retry GU.
     *
     * @generated from field: optional int32 gu_retry_delay_seconds = 7;
     */
    guRetryDelaySeconds: number;
    /**
     * A dictionary of custom nudge delays.
     *
     * @generated from field: repeated sync_pb.CustomNudgeDelay custom_nudge_delays = 8;
     */
    customNudgeDelays: CustomNudgeDelay[];
    /**
     * Configuration for commit quota of extension-related data types.
     * The maximum count of tokens (=initial at browser startup) and the
     * interval for refilling one more token if not at maximum.
     *
     * @generated from field: optional int32 extension_types_max_tokens = 9;
     */
    extensionTypesMaxTokens: number;
    /**
     * @generated from field: optional int32 extension_types_refill_interval_seconds = 10;
     */
    extensionTypesRefillIntervalSeconds: number;
    /**
     * Extended nudge delay for data types with depleted quota.
     *
     * @generated from field: optional int32 extension_types_depleted_quota_nudge_delay_seconds = 11;
     */
    extensionTypesDepletedQuotaNudgeDelaySeconds: number;
};
/**
 * Describes the message sync_pb.ClientCommand.
 * Use `create(ClientCommandSchema)` to create a new message.
 */
export declare const ClientCommandSchema: GenMessage<ClientCommand>;
//# sourceMappingURL=client_commands_pb.d.ts.map