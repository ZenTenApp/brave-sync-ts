// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for sessions.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_sync_enums } from "./sync_enums_pb";
/**
 * Describes the file session_specifics.proto.
 */
export const file_session_specifics = /*@__PURE__*/ fileDesc("ChdzZXNzaW9uX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiKKAQoQU2Vzc2lvblNwZWNpZmljcxITCgtzZXNzaW9uX3RhZxgBIAEoCRImCgZoZWFkZXIYAiABKAsyFi5zeW5jX3BiLlNlc3Npb25IZWFkZXISIAoDdGFiGAMgASgLMhMuc3luY19wYi5TZXNzaW9uVGFiEhcKC3RhYl9ub2RlX2lkGAQgASgFOgItMSLFAQoNU2Vzc2lvbkhlYWRlchImCgZ3aW5kb3cYAiADKAsyFi5zeW5jX3BiLlNlc3Npb25XaW5kb3cSEwoLY2xpZW50X25hbWUYAyABKAkSPwoSZGV2aWNlX2Zvcm1fZmFjdG9yGAUgASgOMiMuc3luY19wYi5TeW5jRW51bXMuRGV2aWNlRm9ybUZhY3RvchI2CgtkZXZpY2VfdHlwZRgEIAEoDjIdLnN5bmNfcGIuU3luY0VudW1zLkRldmljZVR5cGVCAhgBIpIBCg1TZXNzaW9uV2luZG93EhEKCXdpbmRvd19pZBgBIAEoBRIeChJzZWxlY3RlZF90YWJfaW5kZXgYAiABKAU6Ai0xEkEKDGJyb3dzZXJfdHlwZRgDIAEoDjIeLnN5bmNfcGIuU3luY0VudW1zLkJyb3dzZXJUeXBlOgtUWVBFX1RBQkJFRBILCgN0YWIYBCADKAUi4QMKClNlc3Npb25UYWISEgoGdGFiX2lkGAEgASgFOgItMRIRCgl3aW5kb3dfaWQYAiABKAUSHAoQdGFiX3Zpc3VhbF9pbmRleBgDIAEoBToCLTESJAoYY3VycmVudF9uYXZpZ2F0aW9uX2luZGV4GAQgASgFOgItMRIVCgZwaW5uZWQYBSABKAg6BWZhbHNlEhgKEGV4dGVuc2lvbl9hcHBfaWQYBiABKAkSKgoKbmF2aWdhdGlvbhgHIAMoCzIWLnN5bmNfcGIuVGFiTmF2aWdhdGlvbhI0Cgxicm93c2VyX3R5cGUYDSABKA4yHi5zeW5jX3BiLlN5bmNFbnVtcy5Ccm93c2VyVHlwZRIqCiJsYXN0X2FjdGl2ZV90aW1lX3VuaXhfZXBvY2hfbWlsbGlzGA4gASgDEhMKB2Zhdmljb24YCCABKAxCAhgBEjkKDGZhdmljb25fdHlwZRgJIAEoDjIfLnN5bmNfcGIuU2Vzc2lvblRhYi5GYXZpY29uVHlwZUICGAESGgoOZmF2aWNvbl9zb3VyY2UYCyABKAlCAhgBEhgKDHZhcmlhdGlvbl9pZBgMIAMoBEICGAEiIwoLRmF2aWNvblR5cGUSFAoQVFlQRV9XRUJfRkFWSUNPThABIs0ICg1UYWJOYXZpZ2F0aW9uEhMKC3ZpcnR1YWxfdXJsGAIgASgJEhAKCHJlZmVycmVyGAMgASgJEg0KBXRpdGxlGAQgASgJEkAKD3BhZ2VfdHJhbnNpdGlvbhgGIAEoDjIhLnN5bmNfcGIuU3luY0VudW1zLlBhZ2VUcmFuc2l0aW9uOgRMSU5LEkQKDXJlZGlyZWN0X3R5cGUYByABKA4yLS5zeW5jX3BiLlN5bmNFbnVtcy5QYWdlVHJhbnNpdGlvblJlZGlyZWN0VHlwZRIRCgl1bmlxdWVfaWQYCCABKAUSFgoOdGltZXN0YW1wX21zZWMYCSABKAMSHwoXbmF2aWdhdGlvbl9mb3J3YXJkX2JhY2sYCiABKAgSIwobbmF2aWdhdGlvbl9mcm9tX2FkZHJlc3NfYmFyGAsgASgIEhwKFG5hdmlnYXRpb25faG9tZV9wYWdlGAwgASgIEhEKCWdsb2JhbF9pZBgPIAEoAxITCgtmYXZpY29uX3VybBgRIAEoCRIYChBodHRwX3N0YXR1c19jb2RlGBQgASgFEiIKF2NvcnJlY3RfcmVmZXJyZXJfcG9saWN5GBkgASgFOgExEjgKDnBhc3N3b3JkX3N0YXRlGBogASgOMiAuc3luY19wYi5TeW5jRW51bXMuUGFzc3dvcmRTdGF0ZRIiChZuYXZpZ2F0aW9uX2NoYWluX3N0YXJ0GA0gASgIQgIYARIgChRuYXZpZ2F0aW9uX2NoYWluX2VuZBgOIAEoCEICGAESGAoMc2VhcmNoX3Rlcm1zGBAgASgJQgIYARJNCg1ibG9ja2VkX3N0YXRlGBIgASgOMiMuc3luY19wYi5UYWJOYXZpZ2F0aW9uLkJsb2NrZWRTdGF0ZToNU1RBVEVfQUxMT1dFREICGAESJAoYb2Jzb2xldGVfcmVmZXJyZXJfcG9saWN5GBUgASgFQgIYARIXCgtpc19yZXN0b3JlZBgWIAEoCEICGAESPAoTbmF2aWdhdGlvbl9yZWRpcmVjdBgXIAMoCzIbLnN5bmNfcGIuTmF2aWdhdGlvblJlZGlyZWN0QgIYARIoChxsYXN0X25hdmlnYXRpb25fcmVkaXJlY3RfdXJsGBggASgJQgIYARITCgd0YXNrX2lkGBsgASgDQgIYARIcChBhbmNlc3Rvcl90YXNrX2lkGBwgAygDQgIYARI8ChNyZXBsYWNlZF9uYXZpZ2F0aW9uGB0gASgLMhsuc3luY19wYi5SZXBsYWNlZE5hdmlnYXRpb25CAhgBEhkKDXBhZ2VfbGFuZ3VhZ2UYHiABKAlCAhgBIjQKDEJsb2NrZWRTdGF0ZRIRCg1TVEFURV9BTExPV0VEEAESEQoNU1RBVEVfQkxPQ0tFRBACSgQIARACSgQIBRAGSgQIExAUUgVpbmRleFIFc3RhdGVSF2NvbnRlbnRfcGFja19jYXRlZ29yaWVzIiEKEk5hdmlnYXRpb25SZWRpcmVjdBILCgN1cmwYASABKAkikQEKElJlcGxhY2VkTmF2aWdhdGlvbhIbChNmaXJzdF9jb21taXR0ZWRfdXJsGAEgASgJEhwKFGZpcnN0X3RpbWVzdGFtcF9tc2VjGAIgASgDEkAKFWZpcnN0X3BhZ2VfdHJhbnNpdGlvbhgDIAEoDjIhLnN5bmNfcGIuU3luY0VudW1zLlBhZ2VUcmFuc2l0aW9uQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_sync_enums]);
/**
 * Describes the message sync_pb.SessionSpecifics.
 * Use `create(SessionSpecificsSchema)` to create a new message.
 */
export const SessionSpecificsSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 0);
/**
 * Describes the message sync_pb.SessionHeader.
 * Use `create(SessionHeaderSchema)` to create a new message.
 */
export const SessionHeaderSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 1);
/**
 * Describes the message sync_pb.SessionWindow.
 * Use `create(SessionWindowSchema)` to create a new message.
 */
export const SessionWindowSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 2);
/**
 * Describes the message sync_pb.SessionTab.
 * Use `create(SessionTabSchema)` to create a new message.
 */
export const SessionTabSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 3);
/**
 * The type of favicon. For now only normal web favicons are supported.
 *
 * @generated from enum sync_pb.SessionTab.FaviconType
 */
export var SessionTab_FaviconType;
(function (SessionTab_FaviconType) {
    /**
     * @generated from enum value: TYPE_WEB_FAVICON = 1;
     */
    SessionTab_FaviconType[SessionTab_FaviconType["TYPE_WEB_FAVICON"] = 1] = "TYPE_WEB_FAVICON";
})(SessionTab_FaviconType || (SessionTab_FaviconType = {}));
/**
 * Describes the enum sync_pb.SessionTab.FaviconType.
 */
export const SessionTab_FaviconTypeSchema = /*@__PURE__*/ enumDesc(file_session_specifics, 3, 0);
/**
 * Describes the message sync_pb.TabNavigation.
 * Use `create(TabNavigationSchema)` to create a new message.
 */
export const TabNavigationSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 4);
/**
 * @generated from enum sync_pb.TabNavigation.BlockedState
 */
export var TabNavigation_BlockedState;
(function (TabNavigation_BlockedState) {
    /**
     * @generated from enum value: STATE_ALLOWED = 1;
     */
    TabNavigation_BlockedState[TabNavigation_BlockedState["STATE_ALLOWED"] = 1] = "STATE_ALLOWED";
    /**
     * @generated from enum value: STATE_BLOCKED = 2;
     */
    TabNavigation_BlockedState[TabNavigation_BlockedState["STATE_BLOCKED"] = 2] = "STATE_BLOCKED";
})(TabNavigation_BlockedState || (TabNavigation_BlockedState = {}));
/**
 * Describes the enum sync_pb.TabNavigation.BlockedState.
 */
export const TabNavigation_BlockedStateSchema = /*@__PURE__*/ enumDesc(file_session_specifics, 4, 0);
/**
 * Describes the message sync_pb.NavigationRedirect.
 * Use `create(NavigationRedirectSchema)` to create a new message.
 */
export const NavigationRedirectSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 5);
/**
 * Describes the message sync_pb.ReplacedNavigation.
 * Use `create(ReplacedNavigationSchema)` to create a new message.
 */
export const ReplacedNavigationSchema = /*@__PURE__*/ messageDesc(file_session_specifics, 6);
//# sourceMappingURL=session_specifics_pb.js.map