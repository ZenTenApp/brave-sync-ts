import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file segmentation_specifics.proto.
 */
export declare const file_segmentation_specifics: GenFile;
/**
 * Sync data proto for storing segmentation data. Keyed by the combination of
 * cache_guid (a Sync client id) and segmentation key.
 *
 * The segmentation platform is a platform that uses intelligence and machine
 * learning to guide developers for building purpose-built user experience for
 * specific segments of users. See go/chrome-segmentation for more details.
 *
 * @generated from message sync_pb.SegmentationSpecifics
 */
export type SegmentationSpecifics = Message<"sync_pb.SegmentationSpecifics"> & {
    /**
     * The key used to identify the type of segmentation associated with a
     * feature, e.g. 'user_engagement'.
     *
     * @generated from field: optional string segmentation_key = 1;
     */
    segmentationKey: string;
    /**
     * @generated from field: optional sync_pb.SegmentationSpecifics.SegmentSelectionResult segment_selection_result = 2;
     */
    segmentSelectionResult?: SegmentationSpecifics_SegmentSelectionResult;
    /**
     * @generated from field: optional sync_pb.SegmentationSpecifics.DeviceMetadata device_metadata = 3;
     */
    deviceMetadata?: SegmentationSpecifics_DeviceMetadata;
    /**
     * One or more model execution data associated with each segment for the
     * segmentation key.
     *
     * @generated from field: repeated sync_pb.SegmentationSpecifics.ModelExecutionData model_execution_data = 4;
     */
    modelExecutionData: SegmentationSpecifics_ModelExecutionData[];
};
/**
 * Describes the message sync_pb.SegmentationSpecifics.
 * Use `create(SegmentationSpecificsSchema)` to create a new message.
 */
export declare const SegmentationSpecificsSchema: GenMessage<SegmentationSpecifics>;
/**
 * The selected segment by the segmentation scheme.
 *
 * @generated from message sync_pb.SegmentationSpecifics.SegmentSelectionResult
 */
export type SegmentationSpecifics_SegmentSelectionResult = Message<"sync_pb.SegmentationSpecifics.SegmentSelectionResult"> & {
    /**
     * The string ID that refers to the segment the user was assigned to, e.g.,
     * 'highly_engaged_user'.
     *
     * @generated from field: optional string selected_segment = 1;
     */
    selectedSegment: string;
    /**
     * Expiry time of selection result. Represents time from windows epoch in
     * seconds. Expired results are ignored by clients.
     *
     * @generated from field: optional int64 expiry_time_windows_epoch_seconds = 2;
     */
    expiryTimeWindowsEpochSeconds: bigint;
    /**
     * Time when the segmentation data is updated. Used to weigh results by
     * recency. Represents time from windows epoch in seconds.
     *
     * @generated from field: optional int64 last_updated_time_windows_epoch_seconds = 3;
     */
    lastUpdatedTimeWindowsEpochSeconds: bigint;
};
/**
 * Describes the message sync_pb.SegmentationSpecifics.SegmentSelectionResult.
 * Use `create(SegmentationSpecifics_SegmentSelectionResultSchema)` to create a new message.
 */
export declare const SegmentationSpecifics_SegmentSelectionResultSchema: GenMessage<SegmentationSpecifics_SegmentSelectionResult>;
/**
 * Metadata about the client device as used by the segmentation platform.
 *
 * @generated from message sync_pb.SegmentationSpecifics.DeviceMetadata
 */
export type SegmentationSpecifics_DeviceMetadata = Message<"sync_pb.SegmentationSpecifics.DeviceMetadata"> & {
    /**
     * The cache_guid created to identify a sync client on this device.
     * Reuses the same Sync guid.
     *
     * @generated from field: optional string cache_guid = 1;
     */
    cacheGuid: string;
    /**
     * The OS platform of the device.
     *
     * @generated from field: optional sync_pb.SegmentationSpecifics.DeviceMetadata.PlatformType platform_type = 2;
     */
    platformType: SegmentationSpecifics_DeviceMetadata_PlatformType;
};
/**
 * Describes the message sync_pb.SegmentationSpecifics.DeviceMetadata.
 * Use `create(SegmentationSpecifics_DeviceMetadataSchema)` to create a new message.
 */
export declare const SegmentationSpecifics_DeviceMetadataSchema: GenMessage<SegmentationSpecifics_DeviceMetadata>;
/**
 * @generated from enum sync_pb.SegmentationSpecifics.DeviceMetadata.PlatformType
 */
export declare enum SegmentationSpecifics_DeviceMetadata_PlatformType {
    /**
     * @generated from enum value: PLATFORM_TYPE_UNSPECIFIED = 0;
     */
    PLATFORM_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: PLATFORM_WINDOWS = 1;
     */
    PLATFORM_WINDOWS = 1,
    /**
     * @generated from enum value: PLATFORM_MAC = 2;
     */
    PLATFORM_MAC = 2,
    /**
     * @generated from enum value: PLATFORM_LINUX = 3;
     */
    PLATFORM_LINUX = 3,
    /**
     * @generated from enum value: PLATFORM_CHROMEOS_ASH = 4;
     */
    PLATFORM_CHROMEOS_ASH = 4,
    /**
     * @generated from enum value: PLATFORM_ANDROID = 5;
     */
    PLATFORM_ANDROID = 5,
    /**
     * @generated from enum value: PLATFORM_IOS = 6;
     */
    PLATFORM_IOS = 6,
    /**
     * @generated from enum value: PLATFORM_CHROMEOS_LACROS = 7;
     */
    PLATFORM_CHROMEOS_LACROS = 7
}
/**
 * Describes the enum sync_pb.SegmentationSpecifics.DeviceMetadata.PlatformType.
 */
export declare const SegmentationSpecifics_DeviceMetadata_PlatformTypeSchema: GenEnum<SegmentationSpecifics_DeviceMetadata_PlatformType>;
/**
 * Model execution data including segment scores and related metadata, e.g.,
 * model version.
 *
 * @generated from message sync_pb.SegmentationSpecifics.ModelExecutionData
 */
export type SegmentationSpecifics_ModelExecutionData = Message<"sync_pb.SegmentationSpecifics.ModelExecutionData"> & {
    /**
     * A string ID that identifies a model.
     *
     * @generated from field: optional string model_id = 1;
     */
    modelId: string;
    /**
     * A model may output one or multiple scores, one score for each segment
     * label.
     *
     * @generated from field: repeated sync_pb.SegmentationSpecifics.ModelExecutionData.ModelOutput model_outputs = 2;
     */
    modelOutputs: SegmentationSpecifics_ModelExecutionData_ModelOutput[];
    /**
     * Timestamp when the ML model was executed.
     * Represents time from windows epoch in seconds.
     *
     * @generated from field: optional int64 execution_time_windows_epoch_seconds = 3;
     */
    executionTimeWindowsEpochSeconds: bigint;
    /**
     * Expiry timestamp for the model scores.
     * Represents time from windows epoch in seconds.
     *
     * @generated from field: optional int64 score_expiry_time_windows_epoch_seconds = 4;
     */
    scoreExpiryTimeWindowsEpochSeconds: bigint;
    /**
     * The version of the ML model that was run.
     *
     * @generated from field: optional int32 model_version = 5;
     */
    modelVersion: number;
};
/**
 * Describes the message sync_pb.SegmentationSpecifics.ModelExecutionData.
 * Use `create(SegmentationSpecifics_ModelExecutionDataSchema)` to create a new message.
 */
export declare const SegmentationSpecifics_ModelExecutionDataSchema: GenMessage<SegmentationSpecifics_ModelExecutionData>;
/**
 * Output of model.
 *
 * @generated from message sync_pb.SegmentationSpecifics.ModelExecutionData.ModelOutput
 */
export type SegmentationSpecifics_ModelExecutionData_ModelOutput = Message<"sync_pb.SegmentationSpecifics.ModelExecutionData.ModelOutput"> & {
    /**
     * When outputting multiple scores from a single model, this is the
     * segment label for each output.
     *
     * @generated from field: optional string label = 1;
     */
    label: string;
    /**
     * Raw segment scores provided by the ML model or the heuristic model.
     * The score is derived based on a combination of UMA histograms,
     * user actions or UKM and URLs visited. The score can be treated as a
     * probability of the user liking a feature, like feed, or NTP.
     *
     * @generated from field: optional float score = 2;
     */
    score: number;
    /**
     * A rank defined by the segmentation scheme.
     *
     * @generated from field: optional int32 rank = 3;
     */
    rank: number;
};
/**
 * Describes the message sync_pb.SegmentationSpecifics.ModelExecutionData.ModelOutput.
 * Use `create(SegmentationSpecifics_ModelExecutionData_ModelOutputSchema)` to create a new message.
 */
export declare const SegmentationSpecifics_ModelExecutionData_ModelOutputSchema: GenMessage<SegmentationSpecifics_ModelExecutionData_ModelOutput>;
//# sourceMappingURL=segmentation_specifics_pb.d.ts.map