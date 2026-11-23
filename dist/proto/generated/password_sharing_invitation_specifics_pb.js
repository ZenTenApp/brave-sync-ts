// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_nigori_specifics } from "./nigori_specifics_pb";
/**
 * Describes the file password_sharing_invitation_specifics.proto.
 */
export const file_password_sharing_invitation_specifics = /*@__PURE__*/ fileDesc("CitwYXNzd29yZF9zaGFyaW5nX2ludml0YXRpb25fc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIsoDCh1QYXNzd29yZFNoYXJpbmdJbnZpdGF0aW9uRGF0YRJVChNwYXNzd29yZF9ncm91cF9kYXRhGAIgASgLMjguc3luY19wYi5QYXNzd29yZFNoYXJpbmdJbnZpdGF0aW9uRGF0YS5QYXNzd29yZEdyb3VwRGF0YRquAQoYUGFzc3dvcmRHcm91cEVsZW1lbnREYXRhEg4KBnNjaGVtZRgCIAEoBRIUCgxzaWdub25fcmVhbG0YAyABKAkSDgoGb3JpZ2luGAQgASgJEhgKEHVzZXJuYW1lX2VsZW1lbnQYBSABKAkSGAoQcGFzc3dvcmRfZWxlbWVudBgHIAEoCRIUCgxkaXNwbGF5X25hbWUYCCABKAkSEgoKYXZhdGFyX3VybBgJIAEoCRqaAQoRUGFzc3dvcmRHcm91cERhdGESFgoOdXNlcm5hbWVfdmFsdWUYASABKAkSFgoOcGFzc3dvcmRfdmFsdWUYAiABKAkSVQoMZWxlbWVudF9kYXRhGAMgAygLMj8uc3luY19wYi5QYXNzd29yZFNoYXJpbmdJbnZpdGF0aW9uRGF0YS5QYXNzd29yZEdyb3VwRWxlbWVudERhdGFKBAgBEAIiUQoPVXNlckRpc3BsYXlJbmZvEg0KBWVtYWlsGAEgASgJEhQKDGRpc3BsYXlfbmFtZRgCIAEoCRIZChFwcm9maWxlX2ltYWdlX3VybBgDIAEoCSKbAQoIVXNlckluZm8SDwoHdXNlcl9pZBgBIAEoCRIzChF1c2VyX2Rpc3BsYXlfaW5mbxgCIAEoCzIYLnN5bmNfcGIuVXNlckRpc3BsYXlJbmZvEkkKHWNyb3NzX3VzZXJfc2hhcmluZ19wdWJsaWNfa2V5GAMgASgLMiIuc3luY19wYi5Dcm9zc1VzZXJTaGFyaW5nUHVibGljS2V5IokCCipJbmNvbWluZ1Bhc3N3b3JkU2hhcmluZ0ludml0YXRpb25TcGVjaWZpY3MSDAoEZ3VpZBgBIAEoCRImCgtzZW5kZXJfaW5mbxgCIAEoCzIRLnN5bmNfcGIuVXNlckluZm8SMgoqZW5jcnlwdGVkX3Bhc3N3b3JkX3NoYXJpbmdfaW52aXRhdGlvbl9kYXRhGAMgASgMEkwKHGNsaWVudF9vbmx5X3VuZW5jcnlwdGVkX2RhdGEYBCABKAsyJi5zeW5jX3BiLlBhc3N3b3JkU2hhcmluZ0ludml0YXRpb25EYXRhEh0KFXJlY2lwaWVudF9rZXlfdmVyc2lvbhgGIAEoDUoECAUQBiKYAgoqT3V0Z29pbmdQYXNzd29yZFNoYXJpbmdJbnZpdGF0aW9uU3BlY2lmaWNzEgwKBGd1aWQYASABKAkSGQoRcmVjaXBpZW50X3VzZXJfaWQYAiABKAkSMgoqZW5jcnlwdGVkX3Bhc3N3b3JkX3NoYXJpbmdfaW52aXRhdGlvbl9kYXRhGAMgASgMEkwKHGNsaWVudF9vbmx5X3VuZW5jcnlwdGVkX2RhdGEYBCABKAsyJi5zeW5jX3BiLlBhc3N3b3JkU2hhcmluZ0ludml0YXRpb25EYXRhEh0KFXJlY2lwaWVudF9rZXlfdmVyc2lvbhgGIAEoDRIaChJzZW5kZXJfa2V5X3ZlcnNpb24YByABKA1KBAgFEAYi1QEKLE91dGdvaW5nUGFzc3dvcmRTaGFyaW5nSW52aXRhdGlvbkNvbW1pdEVycm9yElMKCmVycm9yX2NvZGUYASABKA4yPy5zeW5jX3BiLk91dGdvaW5nUGFzc3dvcmRTaGFyaW5nSW52aXRhdGlvbkNvbW1pdEVycm9yLkVycm9yQ29kZSJQCglFcnJvckNvZGUSCwoHVU5LTk9XThAAEh8KG1BVQkxJQ19LRVlfVkVSU0lPTl9NSVNNQVRDSBABEhUKEU5PVF9GQU1JTFlfTUVNQkVSEAJCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg", [file_nigori_specifics]);
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.
 * Use `create(PasswordSharingInvitationDataSchema)` to create a new message.
 */
export const PasswordSharingInvitationDataSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 0);
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.PasswordGroupElementData.
 * Use `create(PasswordSharingInvitationData_PasswordGroupElementDataSchema)` to create a new message.
 */
export const PasswordSharingInvitationData_PasswordGroupElementDataSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 0, 0);
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.PasswordGroupData.
 * Use `create(PasswordSharingInvitationData_PasswordGroupDataSchema)` to create a new message.
 */
export const PasswordSharingInvitationData_PasswordGroupDataSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 0, 1);
/**
 * Describes the message sync_pb.UserDisplayInfo.
 * Use `create(UserDisplayInfoSchema)` to create a new message.
 */
export const UserDisplayInfoSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 1);
/**
 * Describes the message sync_pb.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export const UserInfoSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 2);
/**
 * Describes the message sync_pb.IncomingPasswordSharingInvitationSpecifics.
 * Use `create(IncomingPasswordSharingInvitationSpecificsSchema)` to create a new message.
 */
export const IncomingPasswordSharingInvitationSpecificsSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 3);
/**
 * Describes the message sync_pb.OutgoingPasswordSharingInvitationSpecifics.
 * Use `create(OutgoingPasswordSharingInvitationSpecificsSchema)` to create a new message.
 */
export const OutgoingPasswordSharingInvitationSpecificsSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 4);
/**
 * Describes the message sync_pb.OutgoingPasswordSharingInvitationCommitError.
 * Use `create(OutgoingPasswordSharingInvitationCommitErrorSchema)` to create a new message.
 */
export const OutgoingPasswordSharingInvitationCommitErrorSchema = /*@__PURE__*/ messageDesc(file_password_sharing_invitation_specifics, 5);
/**
 * This enum is used in histograms. Entries should not be renumbered and
 * numeric values should never be reused. Also remember to update in
 * tools/metrics/histograms/enums.xml.
 *
 * @generated from enum sync_pb.OutgoingPasswordSharingInvitationCommitError.ErrorCode
 */
export var OutgoingPasswordSharingInvitationCommitError_ErrorCode;
(function (OutgoingPasswordSharingInvitationCommitError_ErrorCode) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    OutgoingPasswordSharingInvitationCommitError_ErrorCode[OutgoingPasswordSharingInvitationCommitError_ErrorCode["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Sender's public key version is different on the server.
     *
     * @generated from enum value: PUBLIC_KEY_VERSION_MISMATCH = 1;
     */
    OutgoingPasswordSharingInvitationCommitError_ErrorCode[OutgoingPasswordSharingInvitationCommitError_ErrorCode["PUBLIC_KEY_VERSION_MISMATCH"] = 1] = "PUBLIC_KEY_VERSION_MISMATCH";
    /**
     * The sender and the recipient are not in the same family according to the
     * Google family service.
     *
     * @generated from enum value: NOT_FAMILY_MEMBER = 2;
     */
    OutgoingPasswordSharingInvitationCommitError_ErrorCode[OutgoingPasswordSharingInvitationCommitError_ErrorCode["NOT_FAMILY_MEMBER"] = 2] = "NOT_FAMILY_MEMBER";
})(OutgoingPasswordSharingInvitationCommitError_ErrorCode || (OutgoingPasswordSharingInvitationCommitError_ErrorCode = {}));
/**
 * Describes the enum sync_pb.OutgoingPasswordSharingInvitationCommitError.ErrorCode.
 */
export const OutgoingPasswordSharingInvitationCommitError_ErrorCodeSchema = /*@__PURE__*/ enumDesc(file_password_sharing_invitation_specifics, 5, 0);
//# sourceMappingURL=password_sharing_invitation_specifics_pb.js.map