// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file web_apk_specifics.proto.
 */
export const file_web_apk_specifics = /*@__PURE__*/ fileDesc("Chd3ZWJfYXBrX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiKmAQoOV2ViQXBrSWNvbkluZm8SEgoKc2l6ZV9pbl9weBgBIAEoBRILCgN1cmwYAiABKAkSMAoHcHVycG9zZRgDIAEoDjIfLnN5bmNfcGIuV2ViQXBrSWNvbkluZm8uUHVycG9zZSJBCgdQdXJwb3NlEg8KC1VOU1BFQ0lGSUVEEAASBwoDQU5ZEAESDAoITUFTS0FCTEUQAhIOCgpNT05PQ0hST01FEAMixQEKD1dlYkFwa1NwZWNpZmljcxITCgttYW5pZmVzdF9pZBgBIAEoCRIRCglzdGFydF91cmwYAiABKAkSDAoEbmFtZRgDIAEoCRITCgt0aGVtZV9jb2xvchgEIAEoDRINCgVzY29wZRgFIAEoCRIrCgppY29uX2luZm9zGAYgAygLMhcuc3luY19wYi5XZWJBcGtJY29uSW5mbxIrCiNsYXN0X3VzZWRfdGltZV93aW5kb3dzX2Vwb2NoX21pY3JvcxgHIAEoA0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.WebApkIconInfo.
 * Use `create(WebApkIconInfoSchema)` to create a new message.
 */
export const WebApkIconInfoSchema = /*@__PURE__*/ messageDesc(file_web_apk_specifics, 0);
/**
 * @generated from enum sync_pb.WebApkIconInfo.Purpose
 */
export var WebApkIconInfo_Purpose;
(function (WebApkIconInfo_Purpose) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    WebApkIconInfo_Purpose[WebApkIconInfo_Purpose["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Suitable for any purpose.
     *
     * @generated from enum value: ANY = 1;
     */
    WebApkIconInfo_Purpose[WebApkIconInfo_Purpose["ANY"] = 1] = "ANY";
    /**
     * Designed for masking.
     *
     * @generated from enum value: MASKABLE = 2;
     */
    WebApkIconInfo_Purpose[WebApkIconInfo_Purpose["MASKABLE"] = 2] = "MASKABLE";
    /**
     * Suitable for monochrome purposes.
     *
     * @generated from enum value: MONOCHROME = 3;
     */
    WebApkIconInfo_Purpose[WebApkIconInfo_Purpose["MONOCHROME"] = 3] = "MONOCHROME";
})(WebApkIconInfo_Purpose || (WebApkIconInfo_Purpose = {}));
/**
 * Describes the enum sync_pb.WebApkIconInfo.Purpose.
 */
export const WebApkIconInfo_PurposeSchema = /*@__PURE__*/ enumDesc(file_web_apk_specifics, 0, 0);
/**
 * Describes the message sync_pb.WebApkSpecifics.
 * Use `create(WebApkSpecificsSchema)` to create a new message.
 */
export const WebApkSpecificsSchema = /*@__PURE__*/ messageDesc(file_web_apk_specifics, 1);
//# sourceMappingURL=web_apk_specifics_pb.js.map