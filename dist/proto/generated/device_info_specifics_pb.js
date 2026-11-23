// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for nigori keys.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_sync_enums } from "./sync_enums_pb";
import { file_brave_device_info_specifics } from "./brave_device_info_specifics_pb";
/**
 * Describes the file device_info_specifics.proto.
 */
export const file_device_info_specifics = /*@__PURE__*/ fileDesc("ChtkZXZpY2VfaW5mb19zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIitwcKE0RldmljZUluZm9TcGVjaWZpY3MSEgoKY2FjaGVfZ3VpZBgBIAEoCRITCgtjbGllbnRfbmFtZRgCIAEoCRI2CgtkZXZpY2VfdHlwZRgDIAEoDjIdLnN5bmNfcGIuU3luY0VudW1zLkRldmljZVR5cGVCAhgBEhcKD3N5bmNfdXNlcl9hZ2VudBgEIAEoCRIaCg5jaHJvbWVfdmVyc2lvbhgFIAEoCUICGAESJwobZGVwcmVjYXRlZF9iYWNrdXBfdGltZXN0YW1wGAYgASgDQgIYARIfChdzaWduaW5fc2NvcGVkX2RldmljZV9pZBgHIAEoCRIeChZsYXN0X3VwZGF0ZWRfdGltZXN0YW1wGAggASgDEjYKDmZlYXR1cmVfZmllbGRzGAkgASgLMh4uc3luY19wYi5GZWF0dXJlU3BlY2lmaWNGaWVsZHMSNgoOc2hhcmluZ19maWVsZHMYCiABKAsyHi5zeW5jX3BiLlNoYXJpbmdTcGVjaWZpY0ZpZWxkcxINCgVtb2RlbBgLIAEoCRIUCgxtYW51ZmFjdHVyZXIYDCABKAkSIQoZcHVsc2VfaW50ZXJ2YWxfaW5fbWludXRlcxgNIAEoBRJAChNpbnZhbGlkYXRpb25fZmllbGRzGA4gASgLMiMuc3luY19wYi5JbnZhbGlkYXRpb25TcGVjaWZpY0ZpZWxkcxJACgxwYWFza19maWVsZHMYDyABKAsyKi5zeW5jX3BiLlBob25lQXNBU2VjdXJpdHlLZXlTcGVjaWZpY0ZpZWxkcxIbChNmdWxsX2hhcmR3YXJlX2NsYXNzGBAgASgJEjkKE2Nocm9tZV92ZXJzaW9uX2luZm8YESABKAsyGi5zeW5jX3BiLkNocm9tZVZlcnNpb25JbmZvSAASUwohZ29vZ2xlX3BsYXlfc2VydmljZXNfdmVyc2lvbl9pbmZvGBIgASgLMiYuc3luY19wYi5Hb29nbGVQbGF5U2VydmljZXNWZXJzaW9uSW5mb0gAEioKB29zX3R5cGUYEyABKA4yGS5zeW5jX3BiLlN5bmNFbnVtcy5Pc1R5cGUSPwoSZGV2aWNlX2Zvcm1fZmFjdG9yGBQgASgOMiMuc3luY19wYi5TeW5jRW51bXMuRGV2aWNlRm9ybUZhY3RvchIzCgxicmF2ZV9maWVsZHMY6AcgASgLMhwuc3luY19wYi5CcmF2ZVNwZWNpZmljRmllbGRzQhUKE2NsaWVudF92ZXJzaW9uX2luZm8iQwoVRmVhdHVyZVNwZWNpZmljRmllbGRzEioKInNlbmRfdGFiX3RvX3NlbGZfcmVjZWl2aW5nX2VuYWJsZWQYASABKAgihAUKFVNoYXJpbmdTcGVjaWZpY0ZpZWxkcxIXCg92YXBpZF9mY21fdG9rZW4YASABKAkSFAoMdmFwaWRfcDI1NmRoGAIgASgMEhkKEXZhcGlkX2F1dGhfc2VjcmV0GAMgASgMEkgKEGVuYWJsZWRfZmVhdHVyZXMYBCADKA4yLi5zeW5jX3BiLlNoYXJpbmdTcGVjaWZpY0ZpZWxkcy5FbmFibGVkRmVhdHVyZXMSKgoec2VuZGVyX2lkX2ZjbV90b2tlbl9kZXByZWNhdGVkGAUgASgJQgIYARInChtzZW5kZXJfaWRfcDI1NmRoX2RlcHJlY2F0ZWQYBiABKAxCAhgBEiwKIHNlbmRlcl9pZF9hdXRoX3NlY3JldF9kZXByZWNhdGVkGAcgASgMQgIYARIeChZzZW5kZXJfaWRfZmNtX3Rva2VuX3YyGAggASgJEhsKE3NlbmRlcl9pZF9wMjU2ZGhfdjIYCSABKAwSIAoYc2VuZGVyX2lkX2F1dGhfc2VjcmV0X3YyGAogASgMIvQBCg9FbmFibGVkRmVhdHVyZXMSCwoHVU5LTk9XThAAEhcKE0NMSUNLX1RPX0NBTExfVkFQSUQQARIaChZTSEFSRURfQ0xJUEJPQVJEX1ZBUElEEAISDwoLU01TX0ZFVENIRVIQAxIPCgtSRU1PVEVfQ09QWRAEEg0KCURJU0NPVkVSWRAGEhQKEENMSUNLX1RPX0NBTExfVjIQBxIXChNTSEFSRURfQ0xJUEJPQVJEX1YyEAgSKAokT1BUSU1JWkFUSU9OX0dVSURFX1BVU0hfTk9USUZJQ0FUSU9OEAkiBAgFEAUqD1BFRVJfQ09OTkVDVElPTiJZChpJbnZhbGlkYXRpb25TcGVjaWZpY0ZpZWxkcxIZChFpbnN0YW5jZV9pZF90b2tlbhgBIAEoCRIgChhpbnRlcmVzdGVkX2RhdGFfdHlwZV9pZHMYAiADKAUirQEKIVBob25lQXNBU2VjdXJpdHlLZXlTcGVjaWZpY0ZpZWxkcxIcChR0dW5uZWxfc2VydmVyX2RvbWFpbhgBIAEoDRISCgpjb250YWN0X2lkGAIgASgMEg4KBnNlY3JldBgDIAEoDBIKCgJpZBgEIAEoBxIcChRwZWVyX3B1YmxpY19rZXlfeDk2MhgFIAEoDBIcChRnb29nbGVfY3JlZGVudGlhbF9pZBgGIAEoDCIrChFDaHJvbWVWZXJzaW9uSW5mbxIWCg52ZXJzaW9uX251bWJlchgBIAEoCSI5Ch1Hb29nbGVQbGF5U2VydmljZXNWZXJzaW9uSW5mbxIYChBhcGtfdmVyc2lvbl9uYW1lGAEgASgJQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_sync_enums, file_brave_device_info_specifics]);
/**
 * Describes the message sync_pb.DeviceInfoSpecifics.
 * Use `create(DeviceInfoSpecificsSchema)` to create a new message.
 */
export const DeviceInfoSpecificsSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 0);
/**
 * Describes the message sync_pb.FeatureSpecificFields.
 * Use `create(FeatureSpecificFieldsSchema)` to create a new message.
 */
export const FeatureSpecificFieldsSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 1);
/**
 * Describes the message sync_pb.SharingSpecificFields.
 * Use `create(SharingSpecificFieldsSchema)` to create a new message.
 */
export const SharingSpecificFieldsSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 2);
/**
 * Enum defining available Sharing features.
 *
 * @generated from enum sync_pb.SharingSpecificFields.EnabledFeatures
 */
export var SharingSpecificFields_EnabledFeatures;
(function (SharingSpecificFields_EnabledFeatures) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Supports Click to Call only via VAPID.
     *
     * @generated from enum value: CLICK_TO_CALL_VAPID = 1;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["CLICK_TO_CALL_VAPID"] = 1] = "CLICK_TO_CALL_VAPID";
    /**
     * Supports Shared Clipboard only via VAPID.
     *
     * @generated from enum value: SHARED_CLIPBOARD_VAPID = 2;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["SHARED_CLIPBOARD_VAPID"] = 2] = "SHARED_CLIPBOARD_VAPID";
    /**
     * @generated from enum value: SMS_FETCHER = 3;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["SMS_FETCHER"] = 3] = "SMS_FETCHER";
    /**
     * @generated from enum value: REMOTE_COPY = 4;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["REMOTE_COPY"] = 4] = "REMOTE_COPY";
    /**
     * @generated from enum value: DISCOVERY = 6;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["DISCOVERY"] = 6] = "DISCOVERY";
    /**
     * Suppots Click to Call via both VAPID and sender ID.
     *
     * @generated from enum value: CLICK_TO_CALL_V2 = 7;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["CLICK_TO_CALL_V2"] = 7] = "CLICK_TO_CALL_V2";
    /**
     * Suppots Shared Clipboard via both VAPID and sender ID.
     *
     * @generated from enum value: SHARED_CLIPBOARD_V2 = 8;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["SHARED_CLIPBOARD_V2"] = 8] = "SHARED_CLIPBOARD_V2";
    /**
     * Supports optimization guide push notification.
     *
     * @generated from enum value: OPTIMIZATION_GUIDE_PUSH_NOTIFICATION = 9;
     */
    SharingSpecificFields_EnabledFeatures[SharingSpecificFields_EnabledFeatures["OPTIMIZATION_GUIDE_PUSH_NOTIFICATION"] = 9] = "OPTIMIZATION_GUIDE_PUSH_NOTIFICATION";
})(SharingSpecificFields_EnabledFeatures || (SharingSpecificFields_EnabledFeatures = {}));
/**
 * Describes the enum sync_pb.SharingSpecificFields.EnabledFeatures.
 */
export const SharingSpecificFields_EnabledFeaturesSchema = /*@__PURE__*/ enumDesc(file_device_info_specifics, 2, 0);
/**
 * Describes the message sync_pb.InvalidationSpecificFields.
 * Use `create(InvalidationSpecificFieldsSchema)` to create a new message.
 */
export const InvalidationSpecificFieldsSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 3);
/**
 * Describes the message sync_pb.PhoneAsASecurityKeySpecificFields.
 * Use `create(PhoneAsASecurityKeySpecificFieldsSchema)` to create a new message.
 */
export const PhoneAsASecurityKeySpecificFieldsSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 4);
/**
 * Describes the message sync_pb.ChromeVersionInfo.
 * Use `create(ChromeVersionInfoSchema)` to create a new message.
 */
export const ChromeVersionInfoSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 5);
/**
 * Describes the message sync_pb.GooglePlayServicesVersionInfo.
 * Use `create(GooglePlayServicesVersionInfoSchema)` to create a new message.
 */
export const GooglePlayServicesVersionInfoSchema = /*@__PURE__*/ messageDesc(file_device_info_specifics, 6);
//# sourceMappingURL=device_info_specifics_pb.js.map