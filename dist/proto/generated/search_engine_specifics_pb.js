// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for custom search engines.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file search_engine_specifics.proto.
 */
export const file_search_engine_specifics = /*@__PURE__*/ fileDesc("Ch1zZWFyY2hfZW5naW5lX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiLMBgoVU2VhcmNoRW5naW5lU3BlY2lmaWNzEhIKCnNob3J0X25hbWUYASABKAkSDwoHa2V5d29yZBgCIAEoCRITCgtmYXZpY29uX3VybBgDIAEoCRILCgN1cmwYBCABKAkSHAoUc2FmZV9mb3JfYXV0b3JlcGxhY2UYBSABKAgSFwoPb3JpZ2luYXRpbmdfdXJsGAYgASgJEhQKDGRhdGVfY3JlYXRlZBgHIAEoAxIXCg9pbnB1dF9lbmNvZGluZ3MYCCABKAkSKwofZGVwcmVjYXRlZF9zaG93X2luX2RlZmF1bHRfbGlzdBgJIAEoCEICGAESFwoPc3VnZ2VzdGlvbnNfdXJsGAogASgJEhYKDnByZXBvcHVsYXRlX2lkGAsgASgFEiAKFGF1dG9nZW5lcmF0ZV9rZXl3b3JkGAwgASgIQgIYARIXCgtpbnN0YW50X3VybBgPIAEoCUICGAESFQoNbGFzdF9tb2RpZmllZBgRIAEoAxIRCglzeW5jX2d1aWQYEiABKAkSFgoOYWx0ZXJuYXRlX3VybHMYEyADKAkSKAocc2VhcmNoX3Rlcm1zX3JlcGxhY2VtZW50X2tleRgUIAEoCUICGAESEQoJaW1hZ2VfdXJsGBUgASgJEh4KFnNlYXJjaF91cmxfcG9zdF9wYXJhbXMYFiABKAkSIwobc3VnZ2VzdGlvbnNfdXJsX3Bvc3RfcGFyYW1zGBcgASgJEiMKF2luc3RhbnRfdXJsX3Bvc3RfcGFyYW1zGBggASgJQgIYARIdChVpbWFnZV91cmxfcG9zdF9wYXJhbXMYGSABKAkSEwoLbmV3X3RhYl91cmwYGiABKAkSPgoJaXNfYWN0aXZlGBsgASgOMisuc3luY19wYi5TZWFyY2hFbmdpbmVTcGVjaWZpY3MuQWN0aXZlU3RhdHVzEhcKD3N0YXJ0ZXJfcGFja19pZBgcIAEoBSJeCgxBY3RpdmVTdGF0dXMSHQoZQUNUSVZFX1NUQVRVU19VTlNQRUNJRklFRBAAEhYKEkFDVElWRV9TVEFUVVNfVFJVRRABEhcKE0FDVElWRV9TVEFUVVNfRkFMU0UQAkoECA4QD1IRY3JlYXRlZF9ieV9wb2xpY3lCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.SearchEngineSpecifics.
 * Use `create(SearchEngineSpecificsSchema)` to create a new message.
 */
export const SearchEngineSpecificsSchema = /*@__PURE__*/ messageDesc(file_search_engine_specifics, 0);
/**
 * @generated from enum sync_pb.SearchEngineSpecifics.ActiveStatus
 */
export var SearchEngineSpecifics_ActiveStatus;
(function (SearchEngineSpecifics_ActiveStatus) {
    /**
     * The default state when a SE is auto-added. Unspecified SE are inactive.
     *
     * @generated from enum value: ACTIVE_STATUS_UNSPECIFIED = 0;
     */
    SearchEngineSpecifics_ActiveStatus[SearchEngineSpecifics_ActiveStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The SE is active and can be triggered via the omnibox.
     *
     * @generated from enum value: ACTIVE_STATUS_TRUE = 1;
     */
    SearchEngineSpecifics_ActiveStatus[SearchEngineSpecifics_ActiveStatus["TRUE"] = 1] = "TRUE";
    /**
     * The SE has been manually set to inactive by the user.
     *
     * @generated from enum value: ACTIVE_STATUS_FALSE = 2;
     */
    SearchEngineSpecifics_ActiveStatus[SearchEngineSpecifics_ActiveStatus["FALSE"] = 2] = "FALSE";
})(SearchEngineSpecifics_ActiveStatus || (SearchEngineSpecifics_ActiveStatus = {}));
/**
 * Describes the enum sync_pb.SearchEngineSpecifics.ActiveStatus.
 */
export const SearchEngineSpecifics_ActiveStatusSchema = /*@__PURE__*/ enumDesc(file_search_engine_specifics, 0, 0);
//# sourceMappingURL=search_engine_specifics_pb.js.map