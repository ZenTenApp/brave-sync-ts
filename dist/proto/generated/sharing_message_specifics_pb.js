// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for sharing message.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file sharing_message_specifics.proto.
 */
export const file_sharing_message_specifics = /*@__PURE__*/ fileDesc("Ch9zaGFyaW5nX21lc3NhZ2Vfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIv8CChdTaGFyaW5nTWVzc2FnZVNwZWNpZmljcxISCgptZXNzYWdlX2lkGAEgASgJElQKFWNoYW5uZWxfY29uZmlndXJhdGlvbhgCIAEoCzI1LnN5bmNfcGIuU2hhcmluZ01lc3NhZ2VTcGVjaWZpY3MuQ2hhbm5lbENvbmZpZ3VyYXRpb24SDwoHcGF5bG9hZBgDIAEoDBroAQoUQ2hhbm5lbENvbmZpZ3VyYXRpb24SXAoDZmNtGAEgASgLMk0uc3luY19wYi5TaGFyaW5nTWVzc2FnZVNwZWNpZmljcy5DaGFubmVsQ29uZmlndXJhdGlvbi5GQ01DaGFubmVsQ29uZmlndXJhdGlvbkgAEhAKBnNlcnZlchgCIAEoDEgAGkcKF0ZDTUNoYW5uZWxDb25maWd1cmF0aW9uEg0KBXRva2VuGAEgASgJEgsKA3R0bBgCIAEoBRIQCghwcmlvcml0eRgDIAEoBUIXChVjaGFubmVsX2NvbmZpZ3VyYXRpb24ikgMKGVNoYXJpbmdNZXNzYWdlQ29tbWl0RXJyb3ISQAoKZXJyb3JfY29kZRgBIAEoDjIsLnN5bmNfcGIuU2hhcmluZ01lc3NhZ2VDb21taXRFcnJvci5FcnJvckNvZGUisgIKCUVycm9yQ29kZRIICgROT05FEAASFAoQSU5WQUxJRF9BUkdVTUVOVBABEg0KCU5PVF9GT1VORBACEgwKCElOVEVSTkFMEAMSDwoLVU5BVkFJTEFCTEUQBBIWChJSRVNPVVJDRV9FWEhBVVNURUQQBRITCg9VTkFVVEhFTlRJQ0FURUQQBhIVChFQRVJNSVNTSU9OX0RFTklFRBAHEhMKD1NZTkNfVFVSTkVEX09GRhAIEhYKElNZTkNfTkVUV09SS19FUlJPUhAJEigKJERFUFJFQ0FURURfU1lOQ19TRVJWRVJfT1JfQVVUSF9FUlJPUhAKEhAKDFNZTkNfVElNRU9VVBALEhUKEVNZTkNfU0VSVkVSX0VSUk9SEAwSEwoPU1lOQ19BVVRIX0VSUk9SEA1CNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.SharingMessageSpecifics.
 * Use `create(SharingMessageSpecificsSchema)` to create a new message.
 */
export const SharingMessageSpecificsSchema = /*@__PURE__*/ messageDesc(file_sharing_message_specifics, 0);
/**
 * Describes the message sync_pb.SharingMessageSpecifics.ChannelConfiguration.
 * Use `create(SharingMessageSpecifics_ChannelConfigurationSchema)` to create a new message.
 */
export const SharingMessageSpecifics_ChannelConfigurationSchema = /*@__PURE__*/ messageDesc(file_sharing_message_specifics, 0, 0);
/**
 * Describes the message sync_pb.SharingMessageSpecifics.ChannelConfiguration.FCMChannelConfiguration.
 * Use `create(SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfigurationSchema)` to create a new message.
 */
export const SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfigurationSchema = /*@__PURE__*/ messageDesc(file_sharing_message_specifics, 0, 0, 0);
/**
 * Describes the message sync_pb.SharingMessageCommitError.
 * Use `create(SharingMessageCommitErrorSchema)` to create a new message.
 */
export const SharingMessageCommitErrorSchema = /*@__PURE__*/ messageDesc(file_sharing_message_specifics, 1);
/**
 * This enum is used in histograms. Entries should not be renumbered and
 * numeric values should never be reused. Also remember to update in
 * tools/metrics/histograms/enums.xml SyncSharingMessageCommitErrorCode enum.
 *
 * @generated from enum sync_pb.SharingMessageCommitError.ErrorCode
 */
export var SharingMessageCommitError_ErrorCode;
(function (SharingMessageCommitError_ErrorCode) {
    /**
     * @generated from enum value: NONE = 0;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["NONE"] = 0] = "NONE";
    /**
     * @generated from enum value: INVALID_ARGUMENT = 1;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["INVALID_ARGUMENT"] = 1] = "INVALID_ARGUMENT";
    /**
     * @generated from enum value: NOT_FOUND = 2;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["NOT_FOUND"] = 2] = "NOT_FOUND";
    /**
     * @generated from enum value: INTERNAL = 3;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["INTERNAL"] = 3] = "INTERNAL";
    /**
     * @generated from enum value: UNAVAILABLE = 4;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["UNAVAILABLE"] = 4] = "UNAVAILABLE";
    /**
     * @generated from enum value: RESOURCE_EXHAUSTED = 5;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["RESOURCE_EXHAUSTED"] = 5] = "RESOURCE_EXHAUSTED";
    /**
     * @generated from enum value: UNAUTHENTICATED = 6;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["UNAUTHENTICATED"] = 6] = "UNAUTHENTICATED";
    /**
     * @generated from enum value: PERMISSION_DENIED = 7;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    /**
     * Client-specific error codes.
     *
     * @generated from enum value: SYNC_TURNED_OFF = 8;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["SYNC_TURNED_OFF"] = 8] = "SYNC_TURNED_OFF";
    /**
     * @generated from enum value: SYNC_NETWORK_ERROR = 9;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["SYNC_NETWORK_ERROR"] = 9] = "SYNC_NETWORK_ERROR";
    /**
     * Deprecated UMA bucket, prior to splitting between SYNC_SERVER_ERROR and
     * SYNC_AUTH_ERROR.
     *
     * @generated from enum value: DEPRECATED_SYNC_SERVER_OR_AUTH_ERROR = 10;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["DEPRECATED_SYNC_SERVER_OR_AUTH_ERROR"] = 10] = "DEPRECATED_SYNC_SERVER_OR_AUTH_ERROR";
    /**
     * Message wasn't committed before timeout.
     *
     * @generated from enum value: SYNC_TIMEOUT = 11;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["SYNC_TIMEOUT"] = 11] = "SYNC_TIMEOUT";
    /**
     * Error code for server error or unparsable server response.
     *
     * @generated from enum value: SYNC_SERVER_ERROR = 12;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["SYNC_SERVER_ERROR"] = 12] = "SYNC_SERVER_ERROR";
    /**
     * Auth error when communicating with the server.
     *
     * @generated from enum value: SYNC_AUTH_ERROR = 13;
     */
    SharingMessageCommitError_ErrorCode[SharingMessageCommitError_ErrorCode["SYNC_AUTH_ERROR"] = 13] = "SYNC_AUTH_ERROR";
})(SharingMessageCommitError_ErrorCode || (SharingMessageCommitError_ErrorCode = {}));
/**
 * Describes the enum sync_pb.SharingMessageCommitError.ErrorCode.
 */
export const SharingMessageCommitError_ErrorCodeSchema = /*@__PURE__*/ enumDesc(file_sharing_message_specifics, 1, 0);
//# sourceMappingURL=sharing_message_specifics_pb.js.map