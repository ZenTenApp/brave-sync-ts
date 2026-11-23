// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file web_app_specifics.proto.
 */
export const file_web_app_specifics = /*@__PURE__*/ fileDesc("Chd3ZWJfYXBwX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiKmAQoOV2ViQXBwSWNvbkluZm8SEgoKc2l6ZV9pbl9weBgBIAEoBRILCgN1cmwYAiABKAkSMAoHcHVycG9zZRgDIAEoDjIfLnN5bmNfcGIuV2ViQXBwSWNvbkluZm8uUHVycG9zZSJBCgdQdXJwb3NlEg8KC1VOU1BFQ0lGSUVEEAASBwoDQU5ZEAESDAoITUFTS0FCTEUQAhIOCgpNT05PQ0hST01FEAMi7AMKD1dlYkFwcFNwZWNpZmljcxIRCglzdGFydF91cmwYASABKAkSDAoEbmFtZRgCIAEoCRJLChl1c2VyX2Rpc3BsYXlfbW9kZV9kZWZhdWx0GAMgASgOMiguc3luY19wYi5XZWJBcHBTcGVjaWZpY3MuVXNlckRpc3BsYXlNb2RlEhMKC3RoZW1lX2NvbG9yGAQgASgNEg0KBXNjb3BlGAUgASgJEisKCmljb25faW5mb3MYBiADKAsyFy5zeW5jX3BiLldlYkFwcEljb25JbmZvEhkKEXVzZXJfcGFnZV9vcmRpbmFsGAcgASgJEhsKE3VzZXJfbGF1bmNoX29yZGluYWwYCCABKAkSHAoUcmVsYXRpdmVfbWFuaWZlc3RfaWQYCSABKAkSSAoWdXNlcl9kaXNwbGF5X21vZGVfY3JvcxgKIAEoDjIoLnN5bmNfcGIuV2ViQXBwU3BlY2lmaWNzLlVzZXJEaXNwbGF5TW9kZSJLCg9Vc2VyRGlzcGxheU1vZGUSDwoLVU5TUEVDSUZJRUQQABILCgdCUk9XU0VSEAESDgoKU1RBTkRBTE9ORRADEgoKBlRBQkJFRBAGUhp1c2VyX2Rpc3BsYXlfbW9kZV9ub25fY3Jvc1IRdXNlcl9kaXNwbGF5X21vZGVCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.WebAppIconInfo.
 * Use `create(WebAppIconInfoSchema)` to create a new message.
 */
export const WebAppIconInfoSchema = /*@__PURE__*/ messageDesc(file_web_app_specifics, 0);
/**
 * @generated from enum sync_pb.WebAppIconInfo.Purpose
 */
export var WebAppIconInfo_Purpose;
(function (WebAppIconInfo_Purpose) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    WebAppIconInfo_Purpose[WebAppIconInfo_Purpose["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Suitable for any purpose.
     *
     * @generated from enum value: ANY = 1;
     */
    WebAppIconInfo_Purpose[WebAppIconInfo_Purpose["ANY"] = 1] = "ANY";
    /**
     * Designed for masking.
     *
     * @generated from enum value: MASKABLE = 2;
     */
    WebAppIconInfo_Purpose[WebAppIconInfo_Purpose["MASKABLE"] = 2] = "MASKABLE";
    /**
     * Suitable for monochrome purposes.
     *
     * @generated from enum value: MONOCHROME = 3;
     */
    WebAppIconInfo_Purpose[WebAppIconInfo_Purpose["MONOCHROME"] = 3] = "MONOCHROME";
})(WebAppIconInfo_Purpose || (WebAppIconInfo_Purpose = {}));
/**
 * Describes the enum sync_pb.WebAppIconInfo.Purpose.
 */
export const WebAppIconInfo_PurposeSchema = /*@__PURE__*/ enumDesc(file_web_app_specifics, 0, 0);
/**
 * Describes the message sync_pb.WebAppSpecifics.
 * Use `create(WebAppSpecificsSchema)` to create a new message.
 */
export const WebAppSpecificsSchema = /*@__PURE__*/ messageDesc(file_web_app_specifics, 1);
/**
 * This enum should be a subset of the DisplayMode enum in
 * chrome/browser/web_applications/proto/web_app.proto and
 * third_party/blink/public/mojom/manifest/display_mode.mojom
 *
 * @generated from enum sync_pb.WebAppSpecifics.UserDisplayMode
 */
export var WebAppSpecifics_UserDisplayMode;
(function (WebAppSpecifics_UserDisplayMode) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    WebAppSpecifics_UserDisplayMode[WebAppSpecifics_UserDisplayMode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: BROWSER = 1;
     */
    WebAppSpecifics_UserDisplayMode[WebAppSpecifics_UserDisplayMode["BROWSER"] = 1] = "BROWSER";
    /**
     * MINIMAL_UI is never serialized.
     *
     * @generated from enum value: STANDALONE = 3;
     */
    WebAppSpecifics_UserDisplayMode[WebAppSpecifics_UserDisplayMode["STANDALONE"] = 3] = "STANDALONE";
    /**
     * FULLSCREEN is never serialized.
     * WINDOW_CONTROLS_OVERLAY is never serialized.
     *
     * BORDERLESS is never serialized.
     * PICTURE_IN_PICTURE is never serialized.
     *
     * @generated from enum value: TABBED = 6;
     */
    WebAppSpecifics_UserDisplayMode[WebAppSpecifics_UserDisplayMode["TABBED"] = 6] = "TABBED";
})(WebAppSpecifics_UserDisplayMode || (WebAppSpecifics_UserDisplayMode = {}));
/**
 * Describes the enum sync_pb.WebAppSpecifics.UserDisplayMode.
 */
export const WebAppSpecifics_UserDisplayModeSchema = /*@__PURE__*/ enumDesc(file_web_app_specifics, 1, 0);
//# sourceMappingURL=web_app_specifics_pb.js.map