// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for segmentations.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file segmentation_specifics.proto.
 */
export const file_segmentation_specifics = /*@__PURE__*/ fileDesc("ChxzZWdtZW50YXRpb25fc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIqsIChVTZWdtZW50YXRpb25TcGVjaWZpY3MSGAoQc2VnbWVudGF0aW9uX2tleRgBIAEoCRJXChhzZWdtZW50X3NlbGVjdGlvbl9yZXN1bHQYAiABKAsyNS5zeW5jX3BiLlNlZ21lbnRhdGlvblNwZWNpZmljcy5TZWdtZW50U2VsZWN0aW9uUmVzdWx0EkYKD2RldmljZV9tZXRhZGF0YRgDIAEoCzItLnN5bmNfcGIuU2VnbWVudGF0aW9uU3BlY2lmaWNzLkRldmljZU1ldGFkYXRhEk8KFG1vZGVsX2V4ZWN1dGlvbl9kYXRhGAQgAygLMjEuc3luY19wYi5TZWdtZW50YXRpb25TcGVjaWZpY3MuTW9kZWxFeGVjdXRpb25EYXRhGo4BChZTZWdtZW50U2VsZWN0aW9uUmVzdWx0EhgKEHNlbGVjdGVkX3NlZ21lbnQYASABKAkSKQohZXhwaXJ5X3RpbWVfd2luZG93c19lcG9jaF9zZWNvbmRzGAIgASgDEi8KJ2xhc3RfdXBkYXRlZF90aW1lX3dpbmRvd3NfZXBvY2hfc2Vjb25kcxgDIAEoAxrEAgoORGV2aWNlTWV0YWRhdGESEgoKY2FjaGVfZ3VpZBgBIAEoCRJRCg1wbGF0Zm9ybV90eXBlGAIgASgOMjouc3luY19wYi5TZWdtZW50YXRpb25TcGVjaWZpY3MuRGV2aWNlTWV0YWRhdGEuUGxhdGZvcm1UeXBlIsoBCgxQbGF0Zm9ybVR5cGUSHQoZUExBVEZPUk1fVFlQRV9VTlNQRUNJRklFRBAAEhQKEFBMQVRGT1JNX1dJTkRPV1MQARIQCgxQTEFURk9STV9NQUMQAhISCg5QTEFURk9STV9MSU5VWBADEhkKFVBMQVRGT1JNX0NIUk9NRU9TX0FTSBAEEhQKEFBMQVRGT1JNX0FORFJPSUQQBRIQCgxQTEFURk9STV9JT1MQBhIcChhQTEFURk9STV9DSFJPTUVPU19MQUNST1MQBxqtAgoSTW9kZWxFeGVjdXRpb25EYXRhEhAKCG1vZGVsX2lkGAEgASgJElQKDW1vZGVsX291dHB1dHMYAiADKAsyPS5zeW5jX3BiLlNlZ21lbnRhdGlvblNwZWNpZmljcy5Nb2RlbEV4ZWN1dGlvbkRhdGEuTW9kZWxPdXRwdXQSLAokZXhlY3V0aW9uX3RpbWVfd2luZG93c19lcG9jaF9zZWNvbmRzGAMgASgDEi8KJ3Njb3JlX2V4cGlyeV90aW1lX3dpbmRvd3NfZXBvY2hfc2Vjb25kcxgEIAEoAxIVCg1tb2RlbF92ZXJzaW9uGAUgASgFGjkKC01vZGVsT3V0cHV0Eg0KBWxhYmVsGAEgASgJEg0KBXNjb3JlGAIgASgCEgwKBHJhbmsYAyABKAVCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.SegmentationSpecifics.
 * Use `create(SegmentationSpecificsSchema)` to create a new message.
 */
export const SegmentationSpecificsSchema = /*@__PURE__*/ messageDesc(file_segmentation_specifics, 0);
/**
 * Describes the message sync_pb.SegmentationSpecifics.SegmentSelectionResult.
 * Use `create(SegmentationSpecifics_SegmentSelectionResultSchema)` to create a new message.
 */
export const SegmentationSpecifics_SegmentSelectionResultSchema = /*@__PURE__*/ messageDesc(file_segmentation_specifics, 0, 0);
/**
 * Describes the message sync_pb.SegmentationSpecifics.DeviceMetadata.
 * Use `create(SegmentationSpecifics_DeviceMetadataSchema)` to create a new message.
 */
export const SegmentationSpecifics_DeviceMetadataSchema = /*@__PURE__*/ messageDesc(file_segmentation_specifics, 0, 1);
/**
 * @generated from enum sync_pb.SegmentationSpecifics.DeviceMetadata.PlatformType
 */
export var SegmentationSpecifics_DeviceMetadata_PlatformType;
(function (SegmentationSpecifics_DeviceMetadata_PlatformType) {
    /**
     * @generated from enum value: PLATFORM_TYPE_UNSPECIFIED = 0;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_TYPE_UNSPECIFIED"] = 0] = "PLATFORM_TYPE_UNSPECIFIED";
    /**
     * @generated from enum value: PLATFORM_WINDOWS = 1;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_WINDOWS"] = 1] = "PLATFORM_WINDOWS";
    /**
     * @generated from enum value: PLATFORM_MAC = 2;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_MAC"] = 2] = "PLATFORM_MAC";
    /**
     * @generated from enum value: PLATFORM_LINUX = 3;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_LINUX"] = 3] = "PLATFORM_LINUX";
    /**
     * @generated from enum value: PLATFORM_CHROMEOS_ASH = 4;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_CHROMEOS_ASH"] = 4] = "PLATFORM_CHROMEOS_ASH";
    /**
     * @generated from enum value: PLATFORM_ANDROID = 5;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_ANDROID"] = 5] = "PLATFORM_ANDROID";
    /**
     * @generated from enum value: PLATFORM_IOS = 6;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_IOS"] = 6] = "PLATFORM_IOS";
    /**
     * @generated from enum value: PLATFORM_CHROMEOS_LACROS = 7;
     */
    SegmentationSpecifics_DeviceMetadata_PlatformType[SegmentationSpecifics_DeviceMetadata_PlatformType["PLATFORM_CHROMEOS_LACROS"] = 7] = "PLATFORM_CHROMEOS_LACROS";
})(SegmentationSpecifics_DeviceMetadata_PlatformType || (SegmentationSpecifics_DeviceMetadata_PlatformType = {}));
/**
 * Describes the enum sync_pb.SegmentationSpecifics.DeviceMetadata.PlatformType.
 */
export const SegmentationSpecifics_DeviceMetadata_PlatformTypeSchema = /*@__PURE__*/ enumDesc(file_segmentation_specifics, 0, 1, 0);
/**
 * Describes the message sync_pb.SegmentationSpecifics.ModelExecutionData.
 * Use `create(SegmentationSpecifics_ModelExecutionDataSchema)` to create a new message.
 */
export const SegmentationSpecifics_ModelExecutionDataSchema = /*@__PURE__*/ messageDesc(file_segmentation_specifics, 0, 2);
/**
 * Describes the message sync_pb.SegmentationSpecifics.ModelExecutionData.ModelOutput.
 * Use `create(SegmentationSpecifics_ModelExecutionData_ModelOutputSchema)` to create a new message.
 */
export const SegmentationSpecifics_ModelExecutionData_ModelOutputSchema = /*@__PURE__*/ messageDesc(file_segmentation_specifics, 0, 2, 0);
//# sourceMappingURL=segmentation_specifics_pb.js.map