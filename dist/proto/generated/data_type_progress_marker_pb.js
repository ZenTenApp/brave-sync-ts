// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file data_type_progress_marker.proto.
 */
export const file_data_type_progress_marker = /*@__PURE__*/ fileDesc("Ch9kYXRhX3R5cGVfcHJvZ3Jlc3NfbWFya2VyLnByb3RvEgdzeW5jX3BiIu8BChZEYXRhVHlwZVByb2dyZXNzTWFya2VyEhQKDGRhdGFfdHlwZV9pZBgBIAEoBRINCgV0b2tlbhgCIAEoDBI3ChNnZXRfdXBkYXRlX3RyaWdnZXJzGAUgASgLMhouc3luY19wYi5HZXRVcGRhdGVUcmlnZ2VycxI5CgxnY19kaXJlY3RpdmUYBiABKAsyIy5zeW5jX3BiLkdhcmJhZ2VDb2xsZWN0aW9uRGlyZWN0aXZlSgQIAxAESgQIBBAFUh10aW1lc3RhbXBfdG9rZW5fZm9yX21pZ3JhdGlvblIRbm90aWZpY2F0aW9uX2hpbnQiSQoPRGF0YVR5cGVDb250ZXh0EhQKDGRhdGFfdHlwZV9pZBgBIAEoBRIPCgdjb250ZXh0GAIgASgMEg8KB3ZlcnNpb24YAyABKAMixwMKGkdhcmJhZ2VDb2xsZWN0aW9uRGlyZWN0aXZlEkMKBHR5cGUYASABKA4yKC5zeW5jX3BiLkdhcmJhZ2VDb2xsZWN0aW9uRGlyZWN0aXZlLlR5cGU6B1VOS05PV05CAhgBEhkKEXZlcnNpb25fd2F0ZXJtYXJrGAIgASgDElwKEGNvbGxhYm9yYXRpb25fZ2MYBSABKAsyQi5zeW5jX3BiLkdhcmJhZ2VDb2xsZWN0aW9uRGlyZWN0aXZlLkNvbGxhYm9yYXRpb25HYXJiYWdlQ29sbGVjdGlvbhpCCh5Db2xsYWJvcmF0aW9uR2FyYmFnZUNvbGxlY3Rpb24SIAoYYWN0aXZlX2NvbGxhYm9yYXRpb25faWRzGAEgAygJIm8KBFR5cGUSCwoHVU5LTk9XThAAEhUKEVZFUlNJT05fV0FURVJNQVJLEAESIAoYREVQUkVDQVRFRF9BR0VfV0FURVJNQVJLEAIaAggBEiEKGURFUFJFQ0FURURfTUFYX0lURU1fQ09VTlQQAxoCCAFKBAgDEARKBAgEEAVSFWFnZV93YXRlcm1hcmtfaW5fZGF5c1ITbWF4X251bWJlcl9vZl9pdGVtcyKiAgoRR2V0VXBkYXRlVHJpZ2dlcnMSGQoRbm90aWZpY2F0aW9uX2hpbnQYASADKAkSHAoUY2xpZW50X2Ryb3BwZWRfaGludHMYAiABKAgSIQoZaW52YWxpZGF0aW9uc19vdXRfb2Zfc3luYxgDIAEoCBIhChlsb2NhbF9tb2RpZmljYXRpb25fbnVkZ2VzGAQgASgDEh8KF2RhdGF0eXBlX3JlZnJlc2hfbnVkZ2VzGAUgASgDEhwKFHNlcnZlcl9kcm9wcGVkX2hpbnRzGAYgASgIEiAKGGluaXRpYWxfc3luY19pbl9wcm9ncmVzcxgHIAEoCBItCiVzeW5jX2Zvcl9yZXNvbHZlX2NvbmZsaWN0X2luX3Byb2dyZXNzGAggASgIQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI");
/**
 * Describes the message sync_pb.DataTypeProgressMarker.
 * Use `create(DataTypeProgressMarkerSchema)` to create a new message.
 */
export const DataTypeProgressMarkerSchema = /*@__PURE__*/ messageDesc(file_data_type_progress_marker, 0);
/**
 * Describes the message sync_pb.DataTypeContext.
 * Use `create(DataTypeContextSchema)` to create a new message.
 */
export const DataTypeContextSchema = /*@__PURE__*/ messageDesc(file_data_type_progress_marker, 1);
/**
 * Describes the message sync_pb.GarbageCollectionDirective.
 * Use `create(GarbageCollectionDirectiveSchema)` to create a new message.
 */
export const GarbageCollectionDirectiveSchema = /*@__PURE__*/ messageDesc(file_data_type_progress_marker, 2);
/**
 * Describes the message sync_pb.GarbageCollectionDirective.CollaborationGarbageCollection.
 * Use `create(GarbageCollectionDirective_CollaborationGarbageCollectionSchema)` to create a new message.
 */
export const GarbageCollectionDirective_CollaborationGarbageCollectionSchema = /*@__PURE__*/ messageDesc(file_data_type_progress_marker, 2, 0);
/**
 * @generated from enum sync_pb.GarbageCollectionDirective.Type
 */
export var GarbageCollectionDirective_Type;
(function (GarbageCollectionDirective_Type) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    GarbageCollectionDirective_Type[GarbageCollectionDirective_Type["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: VERSION_WATERMARK = 1;
     */
    GarbageCollectionDirective_Type[GarbageCollectionDirective_Type["VERSION_WATERMARK"] = 1] = "VERSION_WATERMARK";
    /**
     * @generated from enum value: DEPRECATED_AGE_WATERMARK = 2 [deprecated = true];
     * @deprecated
     */
    GarbageCollectionDirective_Type[GarbageCollectionDirective_Type["DEPRECATED_AGE_WATERMARK"] = 2] = "DEPRECATED_AGE_WATERMARK";
    /**
     * @generated from enum value: DEPRECATED_MAX_ITEM_COUNT = 3 [deprecated = true];
     * @deprecated
     */
    GarbageCollectionDirective_Type[GarbageCollectionDirective_Type["DEPRECATED_MAX_ITEM_COUNT"] = 3] = "DEPRECATED_MAX_ITEM_COUNT";
})(GarbageCollectionDirective_Type || (GarbageCollectionDirective_Type = {}));
/**
 * Describes the enum sync_pb.GarbageCollectionDirective.Type.
 */
export const GarbageCollectionDirective_TypeSchema = /*@__PURE__*/ enumDesc(file_data_type_progress_marker, 2, 0);
/**
 * Describes the message sync_pb.GetUpdateTriggers.
 * Use `create(GetUpdateTriggersSchema)` to create a new message.
 */
export const GetUpdateTriggersSchema = /*@__PURE__*/ messageDesc(file_data_type_progress_marker, 3);
//# sourceMappingURL=data_type_progress_marker_pb.js.map