// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol for communication between sync client and server.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_client_commands } from "./client_commands_pb";
import { file_client_debug_info } from "./client_debug_info_pb";
import { file_data_type_progress_marker } from "./data_type_progress_marker_pb";
import { file_get_updates_caller_info } from "./get_updates_caller_info_pb";
import { file_password_sharing_invitation_specifics } from "./password_sharing_invitation_specifics_pb";
import { file_sync_entity } from "./sync_entity_pb";
import { file_sync_enums } from "./sync_enums_pb";
import { file_sharing_message_specifics } from "./sharing_message_specifics_pb";
/**
 * Describes the file sync.proto.
 */
export const file_sync = /*@__PURE__*/ fileDesc("CgpzeW5jLnByb3RvEgdzeW5jX3BiIl0KGkNocm9taXVtRXh0ZW5zaW9uc0FjdGl2aXR5EhQKDGV4dGVuc2lvbl9pZBgBIAEoCRIpCiFib29rbWFya193cml0ZXNfc2luY2VfbGFzdF9jb21taXQYAiABKA0iyQIKEkNsaWVudENvbmZpZ1BhcmFtcxIYChBlbmFibGVkX3R5cGVfaWRzGAEgAygFEiEKFXRhYnNfZGF0YXR5cGVfZW5hYmxlZBgCIAEoCEICGAESGwoTY29va2llX2phcl9taXNtYXRjaBgDIAEoCBIVCg1zaW5nbGVfY2xpZW50GAQgASgIEicKH2RldmljZXNfZmNtX3JlZ2lzdHJhdGlvbl90b2tlbnMYBSADKAkSMworc2luZ2xlX2NsaWVudF93aXRoX3N0YW5kYWxvbmVfaW52YWxpZGF0aW9ucxgGIAEoCBI2Ci5mY21fcmVnaXN0cmF0aW9uX3Rva2Vuc19mb3JfaW50ZXJlc3RlZF9jbGllbnRzGAcgAygJEiwKJHNpbmdsZV9jbGllbnRfd2l0aF9vbGRfaW52YWxpZGF0aW9ucxgIIAEoCCKDAgoNQ29tbWl0TWVzc2FnZRIkCgdlbnRyaWVzGAEgAygLMhMuc3luY19wYi5TeW5jRW50aXR5EhIKCmNhY2hlX2d1aWQYAiABKAkSQAoTZXh0ZW5zaW9uc19hY3Rpdml0eRgDIAMoCzIjLnN5bmNfcGIuQ2hyb21pdW1FeHRlbnNpb25zQWN0aXZpdHkSMgoNY29uZmlnX3BhcmFtcxgEIAEoCzIbLnN5bmNfcGIuQ2xpZW50Q29uZmlnUGFyYW1zEjEKD2NsaWVudF9jb250ZXh0cxgFIAMoCzIYLnN5bmNfcGIuRGF0YVR5cGVDb250ZXh0Eg8KB3BhZGRpbmcYBiABKAki1QMKEUdldFVwZGF0ZXNNZXNzYWdlEjIKC2NhbGxlcl9pbmZvGAIgASgLMh0uc3luY19wYi5HZXRVcGRhdGVzQ2FsbGVySW5mbxIbCg1mZXRjaF9mb2xkZXJzGAMgASgIOgR0cnVlEj0KFGZyb21fcHJvZ3Jlc3NfbWFya2VyGAYgAygLMh8uc3luY19wYi5EYXRhVHlwZVByb2dyZXNzTWFya2VyEhgKCXN0cmVhbWluZxgHIAEoCDoFZmFsc2USIgoTbmVlZF9lbmNyeXB0aW9uX2tleRgIIAEoCDoFZmFsc2USPwoSZ2V0X3VwZGF0ZXNfb3JpZ2luGAkgASgOMiMuc3luY19wYi5TeW5jRW51bXMuR2V0VXBkYXRlc09yaWdpbhIXCghpc19yZXRyeRgKIAEoCDoFZmFsc2USMQoPY2xpZW50X2NvbnRleHRzGAsgAygLMhguc3luY19wYi5EYXRhVHlwZUNvbnRleHRKBAgBEAJKBAgEEAVKBAgFEAZKBgjoBxDpB1IOZnJvbV90aW1lc3RhbXBSD3JlcXVlc3RlZF90eXBlc1IKYmF0Y2hfc2l6ZVIeY3JlYXRlX21vYmlsZV9ib29rbWFya3NfZm9sZGVyIhgKFkNsZWFyU2VydmVyRGF0YU1lc3NhZ2UiGQoXQ2xlYXJTZXJ2ZXJEYXRhUmVzcG9uc2UiHwoHQ2hpcEJhZxIUCgxzZXJ2ZXJfY2hpcHMYASABKAwiWAoMQ2xpZW50U3RhdHVzEicKG2hpZXJhcmNoeV9jb25mbGljdF9kZXRlY3RlZBgBIAEoCEICGAESHwoXaXNfc3luY19mZWF0dXJlX2VuYWJsZWQYAiABKAgigQUKFUNsaWVudFRvU2VydmVyTWVzc2FnZRINCgVzaGFyZRgBIAIoCRIcChBwcm90b2NvbF92ZXJzaW9uGAIgASgFOgI5ORJBChBtZXNzYWdlX2NvbnRlbnRzGAMgAigOMicuc3luY19wYi5DbGllbnRUb1NlcnZlck1lc3NhZ2UuQ29udGVudHMSJgoGY29tbWl0GAQgASgLMhYuc3luY19wYi5Db21taXRNZXNzYWdlEi8KC2dldF91cGRhdGVzGAUgASgLMhouc3luY19wYi5HZXRVcGRhdGVzTWVzc2FnZRIWCg5zdG9yZV9iaXJ0aGRheRgHIAEoCRImCgpkZWJ1Z19pbmZvGAogASgLMhIuc3luY19wYi5EZWJ1Z0luZm8SJgoMYmFnX29mX2NoaXBzGAsgASgLMhAuc3luY19wYi5DaGlwQmFnEg8KB2FwaV9rZXkYDCABKAkSLAoNY2xpZW50X3N0YXR1cxgNIAEoCzIVLnN5bmNfcGIuQ2xpZW50U3RhdHVzEiEKFWludmFsaWRhdG9yX2NsaWVudF9pZBgOIAEoCUICGAESOgoRY2xlYXJfc2VydmVyX2RhdGEYDyABKAsyHy5zeW5jX3BiLkNsZWFyU2VydmVyRGF0YU1lc3NhZ2UiYgoIQ29udGVudHMSCgoGQ09NTUlUEAESDwoLR0VUX1VQREFURVMQAhIQCgxERVBSRUNBVEVEXzMQAxIQCgxERVBSRUNBVEVEXzQQBBIVChFDTEVBUl9TRVJWRVJfREFUQRAFSgQIBhAHSgQICBAJSgQICRAKUgxhdXRoZW50aWNhdGVSFXN5bmNfcHJvYmxlbV9kZXRlY3RlZCKXBQoOQ29tbWl0UmVzcG9uc2USPAoNZW50cnlyZXNwb25zZRgBIAMoCjIlLnN5bmNfcGIuQ29tbWl0UmVzcG9uc2UuRW50cnlSZXNwb25zZRrWAwoNRW50cnlSZXNwb25zZRI7Cg1yZXNwb25zZV90eXBlGAIgAigOMiQuc3luY19wYi5Db21taXRSZXNwb25zZS5SZXNwb25zZVR5cGUSEQoJaWRfc3RyaW5nGAMgASgJEg8KB3ZlcnNpb24YBiABKAMSFQoNZXJyb3JfbWVzc2FnZRgJIAEoCRIRCgVtdGltZRgKIAEoA0ICGAESXAoXZGF0YXR5cGVfc3BlY2lmaWNfZXJyb3IYCyABKAsyOy5zeW5jX3BiLkNvbW1pdFJlc3BvbnNlLkVudHJ5UmVzcG9uc2UuRGF0YXR5cGVTcGVjaWZpY0Vycm9yGtsBChVEYXRhdHlwZVNwZWNpZmljRXJyb3ISQwoVc2hhcmluZ19tZXNzYWdlX2Vycm9yGAEgASgLMiIuc3luY19wYi5TaGFyaW5nTWVzc2FnZUNvbW1pdEVycm9ySAASawoqb3V0Z29pbmdfcGFzc3dvcmRfc2hhcmluZ19pbnZpdGF0aW9uX2Vycm9yGAIgASgLMjUuc3luY19wYi5PdXRnb2luZ1Bhc3N3b3JkU2hhcmluZ0ludml0YXRpb25Db21taXRFcnJvckgAQhAKDmRhdGF0eXBlX2Vycm9yIm4KDFJlc3BvbnNlVHlwZRILCgdTVUNDRVNTEAESDAoIQ09ORkxJQ1QQAhIJCgVSRVRSWRADEhMKD0lOVkFMSURfTUVTU0FHRRAEEg4KCk9WRVJfUVVPVEEQBRITCg9UUkFOU0lFTlRfRVJST1IQBiKOAgoSR2V0VXBkYXRlc1Jlc3BvbnNlEiQKB2VudHJpZXMYASADKAsyEy5zeW5jX3BiLlN5bmNFbnRpdHkSGQoRY2hhbmdlc19yZW1haW5pbmcYBCABKAMSPAoTbmV3X3Byb2dyZXNzX21hcmtlchgFIAMoCzIfLnN5bmNfcGIuRGF0YVR5cGVQcm9ncmVzc01hcmtlchIXCg9lbmNyeXB0aW9uX2tleXMYBiADKAwSMwoRY29udGV4dF9tdXRhdGlvbnMYByADKAsyGC5zeW5jX3BiLkRhdGFUeXBlQ29udGV4dEoECAIQA0oECAMQBFINbmV3X3RpbWVzdGFtcFIQbmV3ZXN0X3RpbWVzdGFtcCLoBQoWQ2xpZW50VG9TZXJ2ZXJSZXNwb25zZRInCgZjb21taXQYASABKAsyFy5zeW5jX3BiLkNvbW1pdFJlc3BvbnNlEjAKC2dldF91cGRhdGVzGAIgASgLMhsuc3luY19wYi5HZXRVcGRhdGVzUmVzcG9uc2USOQoKZXJyb3JfY29kZRgEIAEoDjIcLnN5bmNfcGIuU3luY0VudW1zLkVycm9yVHlwZToHVU5LTk9XThIVCg1lcnJvcl9tZXNzYWdlGAUgASgJEhYKDnN0b3JlX2JpcnRoZGF5GAYgASgJEi4KDmNsaWVudF9jb21tYW5kGAcgASgLMhYuc3luY19wYi5DbGllbnRDb21tYW5kEh0KFW1pZ3JhdGVkX2RhdGFfdHlwZV9pZBgMIAMoBRI0CgVlcnJvchgNIAEoCzIlLnN5bmNfcGIuQ2xpZW50VG9TZXJ2ZXJSZXNwb25zZS5FcnJvchIqChBuZXdfYmFnX29mX2NoaXBzGA4gASgLMhAuc3luY19wYi5DaGlwQmFnEjsKEWNsZWFyX3NlcnZlcl9kYXRhGA8gASgLMiAuc3luY19wYi5DbGVhclNlcnZlckRhdGFSZXNwb25zZRrAAQoFRXJyb3ISOQoKZXJyb3JfdHlwZRgBIAEoDjIcLnN5bmNfcGIuU3luY0VudW1zLkVycm9yVHlwZToHVU5LTk9XThIZChFlcnJvcl9kZXNjcmlwdGlvbhgCIAEoCRI5CgZhY3Rpb24YBCABKA4yGS5zeW5jX3BiLlN5bmNFbnVtcy5BY3Rpb246DlVOS05PV05fQUNUSU9OEhsKE2Vycm9yX2RhdGFfdHlwZV9pZHMYBSADKAVKBAgDEARSA3VybEoECAMQBEoECAgQCUoECAkQCkoECAoQC0oECAsQDFIMYXV0aGVudGljYXRlUg5wcm9maWxpbmdfZGF0YVIPc3RyZWFtX21ldGFkYXRhUgtzdHJlYW1fZGF0YSJBCgxFdmVudFJlcXVlc3QSMQoNc3luY19kaXNhYmxlZBgBIAEoCzIaLnN5bmNfcGIuU3luY0Rpc2FibGVkRXZlbnQiDwoNRXZlbnRSZXNwb25zZSI/ChFTeW5jRGlzYWJsZWRFdmVudBISCgpjYWNoZV9ndWlkGAEgASgJEhYKDnN0b3JlX2JpcnRoZGF5GAIgASgJQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_client_commands, file_client_debug_info, file_data_type_progress_marker, file_get_updates_caller_info, file_password_sharing_invitation_specifics, file_sync_entity, file_sync_enums, file_sharing_message_specifics]);
/**
 * Describes the message sync_pb.ChromiumExtensionsActivity.
 * Use `create(ChromiumExtensionsActivitySchema)` to create a new message.
 */
export const ChromiumExtensionsActivitySchema = /*@__PURE__*/ messageDesc(file_sync, 0);
/**
 * Describes the message sync_pb.ClientConfigParams.
 * Use `create(ClientConfigParamsSchema)` to create a new message.
 */
export const ClientConfigParamsSchema = /*@__PURE__*/ messageDesc(file_sync, 1);
/**
 * Describes the message sync_pb.CommitMessage.
 * Use `create(CommitMessageSchema)` to create a new message.
 */
export const CommitMessageSchema = /*@__PURE__*/ messageDesc(file_sync, 2);
/**
 * Describes the message sync_pb.GetUpdatesMessage.
 * Use `create(GetUpdatesMessageSchema)` to create a new message.
 */
export const GetUpdatesMessageSchema = /*@__PURE__*/ messageDesc(file_sync, 3);
/**
 * Describes the message sync_pb.ClearServerDataMessage.
 * Use `create(ClearServerDataMessageSchema)` to create a new message.
 */
export const ClearServerDataMessageSchema = /*@__PURE__*/ messageDesc(file_sync, 4);
/**
 * Describes the message sync_pb.ClearServerDataResponse.
 * Use `create(ClearServerDataResponseSchema)` to create a new message.
 */
export const ClearServerDataResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 5);
/**
 * Describes the message sync_pb.ChipBag.
 * Use `create(ChipBagSchema)` to create a new message.
 */
export const ChipBagSchema = /*@__PURE__*/ messageDesc(file_sync, 6);
/**
 * Describes the message sync_pb.ClientStatus.
 * Use `create(ClientStatusSchema)` to create a new message.
 */
export const ClientStatusSchema = /*@__PURE__*/ messageDesc(file_sync, 7);
/**
 * Describes the message sync_pb.ClientToServerMessage.
 * Use `create(ClientToServerMessageSchema)` to create a new message.
 */
export const ClientToServerMessageSchema = /*@__PURE__*/ messageDesc(file_sync, 8);
/**
 * @generated from enum sync_pb.ClientToServerMessage.Contents
 */
export var ClientToServerMessage_Contents;
(function (ClientToServerMessage_Contents) {
    /**
     * @generated from enum value: COMMIT = 1;
     */
    ClientToServerMessage_Contents[ClientToServerMessage_Contents["COMMIT"] = 1] = "COMMIT";
    /**
     * @generated from enum value: GET_UPDATES = 2;
     */
    ClientToServerMessage_Contents[ClientToServerMessage_Contents["GET_UPDATES"] = 2] = "GET_UPDATES";
    /**
     * @generated from enum value: DEPRECATED_3 = 3;
     */
    ClientToServerMessage_Contents[ClientToServerMessage_Contents["DEPRECATED_3"] = 3] = "DEPRECATED_3";
    /**
     * @generated from enum value: DEPRECATED_4 = 4;
     */
    ClientToServerMessage_Contents[ClientToServerMessage_Contents["DEPRECATED_4"] = 4] = "DEPRECATED_4";
    /**
     * @generated from enum value: CLEAR_SERVER_DATA = 5;
     */
    ClientToServerMessage_Contents[ClientToServerMessage_Contents["CLEAR_SERVER_DATA"] = 5] = "CLEAR_SERVER_DATA";
})(ClientToServerMessage_Contents || (ClientToServerMessage_Contents = {}));
/**
 * Describes the enum sync_pb.ClientToServerMessage.Contents.
 */
export const ClientToServerMessage_ContentsSchema = /*@__PURE__*/ enumDesc(file_sync, 8, 0);
/**
 * Describes the message sync_pb.CommitResponse.
 * Use `create(CommitResponseSchema)` to create a new message.
 */
export const CommitResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 9);
/**
 * Describes the message sync_pb.CommitResponse.EntryResponse.
 * Use `create(CommitResponse_EntryResponseSchema)` to create a new message.
 */
export const CommitResponse_EntryResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 9, 0);
/**
 * Describes the message sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError.
 * Use `create(CommitResponse_EntryResponse_DatatypeSpecificErrorSchema)` to create a new message.
 */
export const CommitResponse_EntryResponse_DatatypeSpecificErrorSchema = /*@__PURE__*/ messageDesc(file_sync, 9, 0, 0);
/**
 * @generated from enum sync_pb.CommitResponse.ResponseType
 */
export var CommitResponse_ResponseType;
(function (CommitResponse_ResponseType) {
    /**
     * @generated from enum value: SUCCESS = 1;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["SUCCESS"] = 1] = "SUCCESS";
    /**
     * You're out of date; update and check your data
     *
     * @generated from enum value: CONFLICT = 2;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["CONFLICT"] = 2] = "CONFLICT";
    /**
     * TODO(ncarter): What's the difference between RETRY and TRANSIENT_ERROR?
     *
     * Someone has a conflicting, non-expired session open
     *
     * @generated from enum value: RETRY = 3;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["RETRY"] = 3] = "RETRY";
    /**
     * What the client sent was invalid, and trying again
     *
     * @generated from enum value: INVALID_MESSAGE = 4;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["INVALID_MESSAGE"] = 4] = "INVALID_MESSAGE";
    /**
     * won't help.
     *
     * This operation would put you, or you are, over quota
     *
     * @generated from enum value: OVER_QUOTA = 5;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["OVER_QUOTA"] = 5] = "OVER_QUOTA";
    /**
     * Something went wrong; try again in a bit
     *
     * @generated from enum value: TRANSIENT_ERROR = 6;
     */
    CommitResponse_ResponseType[CommitResponse_ResponseType["TRANSIENT_ERROR"] = 6] = "TRANSIENT_ERROR";
})(CommitResponse_ResponseType || (CommitResponse_ResponseType = {}));
/**
 * Describes the enum sync_pb.CommitResponse.ResponseType.
 */
export const CommitResponse_ResponseTypeSchema = /*@__PURE__*/ enumDesc(file_sync, 9, 0);
/**
 * Describes the message sync_pb.GetUpdatesResponse.
 * Use `create(GetUpdatesResponseSchema)` to create a new message.
 */
export const GetUpdatesResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 10);
/**
 * Describes the message sync_pb.ClientToServerResponse.
 * Use `create(ClientToServerResponseSchema)` to create a new message.
 */
export const ClientToServerResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 11);
/**
 * Describes the message sync_pb.ClientToServerResponse.Error.
 * Use `create(ClientToServerResponse_ErrorSchema)` to create a new message.
 */
export const ClientToServerResponse_ErrorSchema = /*@__PURE__*/ messageDesc(file_sync, 11, 0);
/**
 * Describes the message sync_pb.EventRequest.
 * Use `create(EventRequestSchema)` to create a new message.
 */
export const EventRequestSchema = /*@__PURE__*/ messageDesc(file_sync, 12);
/**
 * Describes the message sync_pb.EventResponse.
 * Use `create(EventResponseSchema)` to create a new message.
 */
export const EventResponseSchema = /*@__PURE__*/ messageDesc(file_sync, 13);
/**
 * Describes the message sync_pb.SyncDisabledEvent.
 * Use `create(SyncDisabledEventSchema)` to create a new message.
 */
export const SyncDisabledEventSchema = /*@__PURE__*/ messageDesc(file_sync, 14);
//# sourceMappingURL=sync_pb.js.map