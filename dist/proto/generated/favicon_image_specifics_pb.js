// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// DEPRECATED: This data type is no longer synced.
// TODO(crbug.com/978775): Remove once the file is no longer used by the server.
// Sync protocol datatype extension for the favicon image specifics.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file favicon_image_specifics.proto.
 */
export const file_favicon_image_specifics = /*@__PURE__*/ fileDesc("Ch1mYXZpY29uX2ltYWdlX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiI9CgtGYXZpY29uRGF0YRIPCgdmYXZpY29uGAEgASgMEg0KBXdpZHRoGAIgASgFEg4KBmhlaWdodBgDIAEoBSLxAQoVRmF2aWNvbkltYWdlU3BlY2lmaWNzEhMKC2Zhdmljb25fdXJsGAEgASgJEikKC2Zhdmljb25fd2ViGAIgASgLMhQuc3luY19wYi5GYXZpY29uRGF0YRIsCg5mYXZpY29uX3dlYl8zMhgDIAEoCzIULnN5bmNfcGIuRmF2aWNvbkRhdGESLgoQZmF2aWNvbl90b3VjaF82NBgEIAEoCzIULnN5bmNfcGIuRmF2aWNvbkRhdGESOgocZmF2aWNvbl90b3VjaF9wcmVjb21wb3NlZF82NBgFIAEoCzIULnN5bmNfcGIuRmF2aWNvbkRhdGFCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.FaviconData.
 * Use `create(FaviconDataSchema)` to create a new message.
 */
export const FaviconDataSchema = /*@__PURE__*/ messageDesc(file_favicon_image_specifics, 0);
/**
 * Describes the message sync_pb.FaviconImageSpecifics.
 * Use `create(FaviconImageSpecificsSchema)` to create a new message.
 */
export const FaviconImageSpecificsSchema = /*@__PURE__*/ messageDesc(file_favicon_image_specifics, 1);
//# sourceMappingURL=favicon_image_specifics_pb.js.map