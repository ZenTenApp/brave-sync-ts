// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for password data.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_encryption } from "./encryption_pb";
/**
 * Describes the file password_specifics.proto.
 */
export const file_password_specifics = /*@__PURE__*/ fileDesc("ChhwYXNzd29yZF9zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIitgMKDlBhc3N3b3JkSXNzdWVzEkQKFWxlYWtlZF9wYXNzd29yZF9pc3N1ZRgBIAEoCzIlLnN5bmNfcGIuUGFzc3dvcmRJc3N1ZXMuUGFzc3dvcmRJc3N1ZRJEChVyZXVzZWRfcGFzc3dvcmRfaXNzdWUYAiABKAsyJS5zeW5jX3BiLlBhc3N3b3JkSXNzdWVzLlBhc3N3b3JkSXNzdWUSQgoTd2Vha19wYXNzd29yZF9pc3N1ZRgDIAEoCzIlLnN5bmNfcGIuUGFzc3dvcmRJc3N1ZXMuUGFzc3dvcmRJc3N1ZRJFChZwaGlzaGVkX3Bhc3N3b3JkX2lzc3VlGAQgASgLMiUuc3luY19wYi5QYXNzd29yZElzc3Vlcy5QYXNzd29yZElzc3VlGowBCg1QYXNzd29yZElzc3VlEjEKKWRhdGVfZmlyc3RfZGV0ZWN0aW9uX3dpbmRvd3NfZXBvY2hfbWljcm9zGAEgASgEEhAKCGlzX211dGVkGAIgASgIEjYKLnRyaWdnZXJfbm90aWZpY2F0aW9uX2Zyb21fYmFja2VuZF9vbl9kZXRlY3Rpb24YAyABKAgi+QcKFVBhc3N3b3JkU3BlY2lmaWNzRGF0YRIOCgZzY2hlbWUYASABKAUSFAoMc2lnbm9uX3JlYWxtGAIgASgJEg4KBm9yaWdpbhgDIAEoCRIOCgZhY3Rpb24YBCABKAkSGAoQdXNlcm5hbWVfZWxlbWVudBgFIAEoCRIWCg51c2VybmFtZV92YWx1ZRgGIAEoCRIYChBwYXNzd29yZF9lbGVtZW50GAcgASgJEhYKDnBhc3N3b3JkX3ZhbHVlGAggASgJEhUKCXNzbF92YWxpZBgJIAEoCEICGAESFQoJcHJlZmVycmVkGAogASgIQgIYARIUCgxkYXRlX2NyZWF0ZWQYCyABKAMSEwoLYmxhY2tsaXN0ZWQYDCABKAgSDAoEdHlwZRgNIAEoBRISCgp0aW1lc191c2VkGA4gASgFEhQKDGRpc3BsYXlfbmFtZRgPIAEoCRISCgphdmF0YXJfdXJsGBAgASgJEhYKDmZlZGVyYXRpb25fdXJsGBEgASgJEhYKDmRhdGVfbGFzdF91c2VkGBIgASgDEjAKD3Bhc3N3b3JkX2lzc3VlcxgTIAEoCzIXLnN5bmNfcGIuUGFzc3dvcmRJc3N1ZXMSMworZGF0ZV9wYXNzd29yZF9tb2RpZmllZF93aW5kb3dzX2Vwb2NoX21pY3JvcxgUIAEoAxIzCgVub3RlcxgWIAEoCzIkLnN5bmNfcGIuUGFzc3dvcmRTcGVjaWZpY3NEYXRhLk5vdGVzEhQKDHNlbmRlcl9lbWFpbBgXIAEoCRITCgtzZW5kZXJfbmFtZRgYIAEoCRIqCiJkYXRlX3JlY2VpdmVkX3dpbmRvd3NfZXBvY2hfbWljcm9zGBkgASgDEiYKHnNoYXJpbmdfbm90aWZpY2F0aW9uX2Rpc3BsYXllZBgaIAEoCBIgChhzZW5kZXJfcHJvZmlsZV9pbWFnZV91cmwYGyABKAkauAEKBU5vdGVzEjcKBG5vdGUYASADKAsyKS5zeW5jX3BiLlBhc3N3b3JkU3BlY2lmaWNzRGF0YS5Ob3Rlcy5Ob3RlGnYKBE5vdGUSGwoTdW5pcXVlX2Rpc3BsYXlfbmFtZRgBIAEoCRINCgV2YWx1ZRgCIAEoCRIpCiFkYXRlX2NyZWF0ZWRfd2luZG93c19lcG9jaF9taWNyb3MYAyABKAMSFwoPaGlkZV9ieV9kZWZhdWx0GAQgASgIImMKBlNjaGVtZRIPCgtTQ0hFTUVfSFRNTBAAEhAKDFNDSEVNRV9CQVNJQxABEhEKDVNDSEVNRV9ESUdFU1QQAhIQCgxTQ0hFTUVfT1RIRVIQAxIRCg1VU0VSTkFNRV9PTkxZEARKBAgVEBYiqgEKGVBhc3N3b3JkU3BlY2lmaWNzTWV0YWRhdGESCwoDdXJsGAEgASgJEhMKC2JsYWNrbGlzdGVkGAIgASgIEisKI2RhdGVfbGFzdF91c2VkX3dpbmRvd3NfZXBvY2hfbWljcm9zGAMgASgDEjAKD3Bhc3N3b3JkX2lzc3VlcxgEIAEoCzIXLnN5bmNfcGIuUGFzc3dvcmRJc3N1ZXMSDAoEdHlwZRgNIAEoBSKCAgoRUGFzc3dvcmRTcGVjaWZpY3MSKQoJZW5jcnlwdGVkGAEgASgLMhYuc3luY19wYi5FbmNyeXB0ZWREYXRhEkIKGmNsaWVudF9vbmx5X2VuY3J5cHRlZF9kYXRhGAIgASgLMh4uc3luY19wYi5QYXNzd29yZFNwZWNpZmljc0RhdGESQAoUdW5lbmNyeXB0ZWRfbWV0YWRhdGEYAyABKAsyIi5zeW5jX3BiLlBhc3N3b3JkU3BlY2lmaWNzTWV0YWRhdGESNgoWZW5jcnlwdGVkX25vdGVzX2JhY2t1cBgFIAEoCzIWLnN5bmNfcGIuRW5jcnlwdGVkRGF0YUoECAQQBUI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_encryption]);
/**
 * Describes the message sync_pb.PasswordIssues.
 * Use `create(PasswordIssuesSchema)` to create a new message.
 */
export const PasswordIssuesSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 0);
/**
 * Describes the message sync_pb.PasswordIssues.PasswordIssue.
 * Use `create(PasswordIssues_PasswordIssueSchema)` to create a new message.
 */
export const PasswordIssues_PasswordIssueSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 0, 0);
/**
 * Describes the message sync_pb.PasswordSpecificsData.
 * Use `create(PasswordSpecificsDataSchema)` to create a new message.
 */
export const PasswordSpecificsDataSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 1);
/**
 * Describes the message sync_pb.PasswordSpecificsData.Notes.
 * Use `create(PasswordSpecificsData_NotesSchema)` to create a new message.
 */
export const PasswordSpecificsData_NotesSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 1, 0);
/**
 * Describes the message sync_pb.PasswordSpecificsData.Notes.Note.
 * Use `create(PasswordSpecificsData_Notes_NoteSchema)` to create a new message.
 */
export const PasswordSpecificsData_Notes_NoteSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 1, 0, 0);
/**
 * The different types of the saved credential.
 *
 * @generated from enum sync_pb.PasswordSpecificsData.Scheme
 */
export var PasswordSpecificsData_Scheme;
(function (PasswordSpecificsData_Scheme) {
    /**
     * SCHEME_HTML, the credential represents either a parsed HTML form, or an
     * android credential or a password saved through Credential Management API
     * (https://w3c.github.io/webappsec/specs/credentialmanagement/).
     *
     * @generated from enum value: SCHEME_HTML = 0;
     */
    PasswordSpecificsData_Scheme[PasswordSpecificsData_Scheme["SCHEME_HTML"] = 0] = "SCHEME_HTML";
    /**
     * SCHEME_BASIC, basic access http authentication.
     *
     * @generated from enum value: SCHEME_BASIC = 1;
     */
    PasswordSpecificsData_Scheme[PasswordSpecificsData_Scheme["SCHEME_BASIC"] = 1] = "SCHEME_BASIC";
    /**
     * SCHEME_DIGEST, digest access authentication.
     *
     * @generated from enum value: SCHEME_DIGEST = 2;
     */
    PasswordSpecificsData_Scheme[PasswordSpecificsData_Scheme["SCHEME_DIGEST"] = 2] = "SCHEME_DIGEST";
    /**
     * SCHEME_OTHER, another proxy access authentication.
     *
     * @generated from enum value: SCHEME_OTHER = 3;
     */
    PasswordSpecificsData_Scheme[PasswordSpecificsData_Scheme["SCHEME_OTHER"] = 3] = "SCHEME_OTHER";
    /**
     * USERNAME_ONLY, partial credentials saved on Android that contain only
     * username and miss the password.
     *
     * @generated from enum value: USERNAME_ONLY = 4;
     */
    PasswordSpecificsData_Scheme[PasswordSpecificsData_Scheme["USERNAME_ONLY"] = 4] = "USERNAME_ONLY";
})(PasswordSpecificsData_Scheme || (PasswordSpecificsData_Scheme = {}));
/**
 * Describes the enum sync_pb.PasswordSpecificsData.Scheme.
 */
export const PasswordSpecificsData_SchemeSchema = /*@__PURE__*/ enumDesc(file_password_specifics, 1, 0);
/**
 * Describes the message sync_pb.PasswordSpecificsMetadata.
 * Use `create(PasswordSpecificsMetadataSchema)` to create a new message.
 */
export const PasswordSpecificsMetadataSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 2);
/**
 * Describes the message sync_pb.PasswordSpecifics.
 * Use `create(PasswordSpecificsSchema)` to create a new message.
 */
export const PasswordSpecificsSchema = /*@__PURE__*/ messageDesc(file_password_specifics, 3);
//# sourceMappingURL=password_specifics_pb.js.map