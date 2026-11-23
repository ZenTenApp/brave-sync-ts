import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ExperimentsSpecifics } from "./experiments_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file experiment_status.proto.
 */
export declare const file_experiment_status: GenFile;
/**
 * This request allows an unauthenticated client to check the status of the
 * experiments which do not require user authentication.  The status of an
 * experiment for a specific client can be determined based on the user agent
 * string and/or the client id sent in the HTTPS POST request.
 *
 * @generated from message sync_pb.ExperimentStatusRequest
 */
export type ExperimentStatusRequest = Message<"sync_pb.ExperimentStatusRequest"> & {
    /**
     * Enumerates the experiments for which the status should be returned.  An
     * experiment name must be the same as one of the field names specified in
     * ExperimentsSpecifics.  See sync/protocol/experiments_specifics.proto.
     *
     * @generated from field: repeated string experiment_name = 1;
     */
    experimentName: string[];
};
/**
 * Describes the message sync_pb.ExperimentStatusRequest.
 * Use `create(ExperimentStatusRequestSchema)` to create a new message.
 */
export declare const ExperimentStatusRequestSchema: GenMessage<ExperimentStatusRequest>;
/**
 * Response to an experiment status request.
 *
 * @generated from message sync_pb.ExperimentStatusResponse
 */
export type ExperimentStatusResponse = Message<"sync_pb.ExperimentStatusResponse"> & {
    /**
     * Minimal time to wait before issuing another request.
     *
     * @generated from field: optional int32 poll_interval_seconds = 1 [default = 3600];
     */
    pollIntervalSeconds: number;
    /**
     * The experiments that the client has asked for, with each experiment
     * containing exactly one experiment flag.  The client can inspect the
     * embedded flag to obtain the experiment status.  Note that the number of
     * experiments should be less than or equal to the number of experiment_name
     * sent in the request since it is possible that there is no experiment
     * matching an experiment_name.
     *
     * @generated from field: repeated sync_pb.ExperimentsSpecifics experiment = 2;
     */
    experiment: ExperimentsSpecifics[];
};
/**
 * Describes the message sync_pb.ExperimentStatusResponse.
 * Use `create(ExperimentStatusResponseSchema)` to create a new message.
 */
export declare const ExperimentStatusResponseSchema: GenMessage<ExperimentStatusResponse>;
//# sourceMappingURL=experiment_status_pb.d.ts.map