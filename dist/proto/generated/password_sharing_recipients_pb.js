// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_password_sharing_invitation_specifics } from "./password_sharing_invitation_specifics_pb";
/**
 * Describes the file password_sharing_recipients.proto.
 */
export const file_password_sharing_recipients = /*@__PURE__*/ fileDesc("CiFwYXNzd29yZF9zaGFyaW5nX3JlY2lwaWVudHMucHJvdG8SB3N5bmNfcGIiIgogUGFzc3dvcmRTaGFyaW5nUmVjaXBpZW50c1JlcXVlc3Qi+gEKIVBhc3N3b3JkU2hhcmluZ1JlY2lwaWVudHNSZXNwb25zZRJaCgZyZXN1bHQYASABKA4ySi5zeW5jX3BiLlBhc3N3b3JkU2hhcmluZ1JlY2lwaWVudHNSZXNwb25zZS5QYXNzd29yZFNoYXJpbmdSZWNpcGllbnRzUmVzdWx0EiUKCnJlY2lwaWVudHMYAiADKAsyES5zeW5jX3BiLlVzZXJJbmZvIlIKH1Bhc3N3b3JkU2hhcmluZ1JlY2lwaWVudHNSZXN1bHQSCwoHVU5LTk9XThAAEgsKB1NVQ0NFU1MQARIVChFOT1RfRkFNSUxZX01FTUJFUhACQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_password_sharing_invitation_specifics]);
/**
 * Describes the message sync_pb.PasswordSharingRecipientsRequest.
 * Use `create(PasswordSharingRecipientsRequestSchema)` to create a new message.
 */
export const PasswordSharingRecipientsRequestSchema = /*@__PURE__*/ messageDesc(file_password_sharing_recipients, 0);
/**
 * Describes the message sync_pb.PasswordSharingRecipientsResponse.
 * Use `create(PasswordSharingRecipientsResponseSchema)` to create a new message.
 */
export const PasswordSharingRecipientsResponseSchema = /*@__PURE__*/ messageDesc(file_password_sharing_recipients, 1);
/**
 * @generated from enum sync_pb.PasswordSharingRecipientsResponse.PasswordSharingRecipientsResult
 */
export var PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult;
(function (PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult[PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * The user is a member of a family and the request succeeded.
     *
     * @generated from enum value: SUCCESS = 1;
     */
    PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult[PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult["SUCCESS"] = 1] = "SUCCESS";
    /**
     * Not a family member, used to distinguish from a family with
     * only one member.
     *
     * @generated from enum value: NOT_FAMILY_MEMBER = 2;
     */
    PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult[PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult["NOT_FAMILY_MEMBER"] = 2] = "NOT_FAMILY_MEMBER";
})(PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult || (PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult = {}));
/**
 * Describes the enum sync_pb.PasswordSharingRecipientsResponse.PasswordSharingRecipientsResult.
 */
export const PasswordSharingRecipientsResponse_PasswordSharingRecipientsResultSchema = /*@__PURE__*/ enumDesc(file_password_sharing_recipients, 1, 0);
//# sourceMappingURL=password_sharing_recipients_pb.js.map