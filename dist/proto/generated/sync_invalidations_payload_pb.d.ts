import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file sync_invalidations_payload.proto.
 */
export declare const file_sync_invalidations_payload: GenFile;
/**
 * The payload coming from the server for all invalidated data types.
 *
 * @generated from message sync_pb.SyncInvalidationsPayload
 */
export type SyncInvalidationsPayload = Message<"sync_pb.SyncInvalidationsPayload"> & {
    /**
     * This field contains information about each data type which needs to be
     * updated. Note that it may contain data types which current client is not
     * interested in.
     *
     * @generated from field: repeated sync_pb.SyncInvalidationsPayload.DataTypeInvalidation data_type_invalidations = 1;
     */
    dataTypeInvalidations: SyncInvalidationsPayload_DataTypeInvalidation[];
    /**
     * Opaque field, which has to be provided as part of resulting GetUpdates
     * back to the server.
     *
     * @generated from field: optional bytes hint = 2;
     */
    hint: Uint8Array;
    /**
     * Version of invalidation, used to order incoming invalidations.
     *
     * @generated from field: optional int64 version = 3;
     */
    version: bigint;
};
/**
 * Describes the message sync_pb.SyncInvalidationsPayload.
 * Use `create(SyncInvalidationsPayloadSchema)` to create a new message.
 */
export declare const SyncInvalidationsPayloadSchema: GenMessage<SyncInvalidationsPayload>;
/**
 * @generated from message sync_pb.SyncInvalidationsPayload.DataTypeInvalidation
 */
export type SyncInvalidationsPayload_DataTypeInvalidation = Message<"sync_pb.SyncInvalidationsPayload.DataTypeInvalidation"> & {
    /**
     * The legitimate values of this field correspond to the protobuf field
     * numbers of all EntitySpecifics fields supported by the server (see
     * components/sync/protocol/sync.proto).
     *
     * @generated from field: optional int32 data_type_id = 1;
     */
    dataTypeId: number;
};
/**
 * Describes the message sync_pb.SyncInvalidationsPayload.DataTypeInvalidation.
 * Use `create(SyncInvalidationsPayload_DataTypeInvalidationSchema)` to create a new message.
 */
export declare const SyncInvalidationsPayload_DataTypeInvalidationSchema: GenMessage<SyncInvalidationsPayload_DataTypeInvalidation>;
//# sourceMappingURL=sync_invalidations_payload_pb.d.ts.map