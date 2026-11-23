// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file contact_info_specifics.proto.
 */
export const file_contact_info_specifics = /*@__PURE__*/ fileDesc("Chxjb250YWN0X2luZm9fc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiItgaChRDb250YWN0SW5mb1NwZWNpZmljcxIMCgRndWlkGAEgASgJEhEKCXVzZV9jb3VudBgDIAEoAxIjCht1c2VfZGF0ZV91bml4X2Vwb2NoX3NlY29uZHMYBCABKAMSKAogZGF0ZV9tb2RpZmllZF91bml4X2Vwb2NoX3NlY29uZHMYJSABKAMSFQoNbGFuZ3VhZ2VfY29kZRgmIAEoCRIVCg1wcm9maWxlX2xhYmVsGAUgASgJEhoKEmluaXRpYWxfY3JlYXRvcl9pZBgnIAEoBRIYChBsYXN0X21vZGlmaWVyX2lkGCggASgFEj0KCm5hbWVfZmlyc3QYByABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEj4KC25hbWVfbWlkZGxlGAggASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhI8CgluYW1lX2xhc3QYCSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkIKD25hbWVfbGFzdF9maXJzdBgKIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SSAoVbmFtZV9sYXN0X2Nvbmp1bmN0aW9uGAsgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJDChBuYW1lX2xhc3Rfc2Vjb25kGAwgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhI8CgluYW1lX2Z1bGwYDSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkAKDWVtYWlsX2FkZHJlc3MYDyABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEj8KDGNvbXBhbnlfbmFtZRgQIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SPwoMYWRkcmVzc19jaXR5GBEgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJACg1hZGRyZXNzX3N0YXRlGBIgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhI+CgthZGRyZXNzX3ppcBgTIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SQgoPYWRkcmVzc19jb3VudHJ5GBQgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJIChVhZGRyZXNzX2FkbWluX2xldmVsXzIYKyABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkkKFmFkZHJlc3Nfc3RyZWV0X2FkZHJlc3MYFSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkcKFGFkZHJlc3Nfc29ydGluZ19jb2RlGBYgASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJNChphZGRyZXNzX2RlcGVuZGVudF9sb2NhbGl0eRgXIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4STAoZYWRkcmVzc190aG9yb3VnaGZhcmVfbmFtZRgZIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4STgobYWRkcmVzc190aG9yb3VnaGZhcmVfbnVtYmVyGBogASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJKChdhZGRyZXNzX3N1YnByZW1pc2VfbmFtZRgeIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SPgoLYWRkcmVzc19hcHQYMiABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkIKD2FkZHJlc3NfYXB0X251bRgfIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SQwoQYWRkcmVzc19hcHRfdHlwZRgzIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SQAoNYWRkcmVzc19mbG9vchggIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SSgoXYWRkcmVzc19zdHJlZXRfbG9jYXRpb24YLCABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkMKEGFkZHJlc3NfbGFuZG1hcmsYKSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkMKEGFkZHJlc3Nfb3ZlcmZsb3cYLSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuEkoKF2FkZHJlc3NfYmV0d2Vlbl9zdHJlZXRzGCogASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJMChlhZGRyZXNzX2JldHdlZW5fc3RyZWV0c18xGC4gASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJMChlhZGRyZXNzX2JldHdlZW5fc3RyZWV0c18yGC8gASgLMikuc3luY19wYi5Db250YWN0SW5mb1NwZWNpZmljcy5TdHJpbmdUb2tlbhJWCiNhZGRyZXNzX2JldHdlZW5fc3RyZWV0c19vcl9sYW5kbWFyaxgwIAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SUAodYWRkcmVzc19vdmVyZmxvd19hbmRfbGFuZG1hcmsYMSABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuElcKJGFkZHJlc3Nfc3RyZWV0X2xvY2F0aW9uX2FuZF9sb2NhbGl0eRg0IAEoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuU3RyaW5nVG9rZW4SSgoXcGhvbmVfaG9tZV93aG9sZV9udW1iZXIYISABKAsyKS5zeW5jX3BiLkNvbnRhY3RJbmZvU3BlY2lmaWNzLlN0cmluZ1Rva2VuGi4KC09ic2VydmF0aW9uEgwKBHR5cGUYASABKA0SEQoJZm9ybV9oYXNoGAIgASgNGqYBCg1Ub2tlbk1ldGFkYXRhEkAKBnN0YXR1cxgBIAEoDjIwLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEj8KDG9ic2VydmF0aW9ucxgCIAMoCzIpLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuT2JzZXJ2YXRpb24SEgoKdmFsdWVfaGFzaBgDIAEoDRpbCgtTdHJpbmdUb2tlbhINCgV2YWx1ZRgBIAEoCRI9CghtZXRhZGF0YRgCIAEoCzIrLnN5bmNfcGIuQ29udGFjdEluZm9TcGVjaWZpY3MuVG9rZW5NZXRhZGF0YSKIAQoSVmVyaWZpY2F0aW9uU3RhdHVzEiMKH1ZFUklGSUNBVElPTl9TVEFUVVNfVU5TUEVDSUZJRUQQABIKCgZQQVJTRUQQARINCglGT1JNQVRURUQQAhIMCghPQlNFUlZFRBADEhEKDVVTRVJfVkVSSUZJRUQQBBIRCg1TRVJWRVJfUEFSU0VEEAVKBAgCEANKBAgOEA9KBAgYEBlKBAgbEBxKBAgcEB1KBAgdEB5KBAgiECNKBAgjECRKBAgkECVKBAgGEAdSBnNvdXJjZVIYbmFtZV9mdWxsX3dpdGhfaG9ub3JpZmljUhVhZGRyZXNzX2xhbmd1YWdlX2NvZGVSI2FkZHJlc3NfZGVwZW5kZW50X3Rob3JvdWdoZmFyZV9uYW1lUjRhZGRyZXNzX3Rob3JvdWdoZmFyZV9hbmRfZGVwZW5kZW50X3Rob3JvdWdoZmFyZV9uYW1lUhRhZGRyZXNzX3ByZW1pc2VfbmFtZVINYmlydGhkYXRlX2RheVIPYmlydGhkYXRlX21vbnRoUg5iaXJ0aGRhdGVfeWVhclIObmFtZV9ob25vcmlmaWNCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.ContactInfoSpecifics.
 * Use `create(ContactInfoSpecificsSchema)` to create a new message.
 */
export const ContactInfoSpecificsSchema = /*@__PURE__*/ messageDesc(file_contact_info_specifics, 0);
/**
 * Describes the message sync_pb.ContactInfoSpecifics.Observation.
 * Use `create(ContactInfoSpecifics_ObservationSchema)` to create a new message.
 */
export const ContactInfoSpecifics_ObservationSchema = /*@__PURE__*/ messageDesc(file_contact_info_specifics, 0, 0);
/**
 * Describes the message sync_pb.ContactInfoSpecifics.TokenMetadata.
 * Use `create(ContactInfoSpecifics_TokenMetadataSchema)` to create a new message.
 */
export const ContactInfoSpecifics_TokenMetadataSchema = /*@__PURE__*/ messageDesc(file_contact_info_specifics, 0, 1);
/**
 * Describes the message sync_pb.ContactInfoSpecifics.StringToken.
 * Use `create(ContactInfoSpecifics_StringTokenSchema)` to create a new message.
 */
export const ContactInfoSpecifics_StringTokenSchema = /*@__PURE__*/ messageDesc(file_contact_info_specifics, 0, 2);
/**
 * Represents the validation status of a stored value.
 *
 * @generated from enum sync_pb.ContactInfoSpecifics.VerificationStatus
 */
export var ContactInfoSpecifics_VerificationStatus;
(function (ContactInfoSpecifics_VerificationStatus) {
    /**
     * No verification status assigned.
     *
     * @generated from enum value: VERIFICATION_STATUS_UNSPECIFIED = 0;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["VERIFICATION_STATUS_UNSPECIFIED"] = 0] = "VERIFICATION_STATUS_UNSPECIFIED";
    /**
     * The value token was parsed from a parent token.
     * For example, the first name was derived by splitting a full name into
     * its components.
     *
     * @generated from enum value: PARSED = 1;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["PARSED"] = 1] = "PARSED";
    /**
     * Value was built from its subcomponents.
     * For example, the full name was built from the first, middle and last
     * name.
     *
     * @generated from enum value: FORMATTED = 2;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["FORMATTED"] = 2] = "FORMATTED";
    /**
     * The value was observed in a form transmission.
     * For example, the user filled a form that contained at NAME_FULL field.
     * The value of NAME_FULL will be stored as OBSERVED.
     *
     * @generated from enum value: OBSERVED = 3;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["OBSERVED"] = 3] = "OBSERVED";
    /**
     * The user used the settings UI to verify and store this token.
     * This is currently only applicable to the full name, since users cannot
     * edit individual components of their name.
     *
     * @generated from enum value: USER_VERIFIED = 4;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["USER_VERIFIED"] = 4] = "USER_VERIFIED";
    /**
     * The token was parsed remotely.
     *
     * @generated from enum value: SERVER_PARSED = 5;
     */
    ContactInfoSpecifics_VerificationStatus[ContactInfoSpecifics_VerificationStatus["SERVER_PARSED"] = 5] = "SERVER_PARSED";
})(ContactInfoSpecifics_VerificationStatus || (ContactInfoSpecifics_VerificationStatus = {}));
/**
 * Describes the enum sync_pb.ContactInfoSpecifics.VerificationStatus.
 */
export const ContactInfoSpecifics_VerificationStatusSchema = /*@__PURE__*/ enumDesc(file_contact_info_specifics, 0, 0);
//# sourceMappingURL=contact_info_specifics_pb.js.map