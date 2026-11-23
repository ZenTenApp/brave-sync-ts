// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol for debug info clients can send to the sync server.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_get_updates_caller_info } from "./get_updates_caller_info_pb";
import { file_sync_enums } from "./sync_enums_pb";
/**
 * Describes the file client_debug_info.proto.
 */
export const file_client_debug_info = /*@__PURE__*/ fileDesc("ChdjbGllbnRfZGVidWdfaW5mby5wcm90bxIHc3luY19wYiI4CghUeXBlSGludBIUCgxkYXRhX3R5cGVfaWQYASABKAUSFgoOaGFzX3ZhbGlkX2hpbnQYAiABKAgizgMKG1N5bmNDeWNsZUNvbXBsZXRlZEV2ZW50SW5mbxIkChhudW1fZW5jcnlwdGlvbl9jb25mbGljdHMYBCABKAVCAhgBEiMKF251bV9oaWVyYXJjaHlfY29uZmxpY3RzGAUgASgFQgIYARIcChRudW1fc2ltcGxlX2NvbmZsaWN0cxgGIAEoBRIcChRudW1fc2VydmVyX2NvbmZsaWN0cxgHIAEoBRIeChZudW1fdXBkYXRlc19kb3dubG9hZGVkGAggASgFEiwKIG51bV9yZWZsZWN0ZWRfdXBkYXRlc19kb3dubG9hZGVkGAkgASgFQgIYARIyCgtjYWxsZXJfaW5mbxgKIAEoCzIdLnN5bmNfcGIuR2V0VXBkYXRlc0NhbGxlckluZm8SPwoSZ2V0X3VwZGF0ZXNfb3JpZ2luGAwgASgOMiMuc3luY19wYi5TeW5jRW51bXMuR2V0VXBkYXRlc09yaWdpbkoECAEQAkoECAIQA0oECAMQBEoECAsQDFIMc3luY2VyX3N0dWNrUhZudW1fYmxvY2tpbmdfY29uZmxpY3RzUhpudW1fbm9uX2Jsb2NraW5nX2NvbmZsaWN0c1ILc291cmNlX2luZm8iiAIKDkRlYnVnRXZlbnRJbmZvEkMKD3NpbmdsZXRvbl9ldmVudBgBIAEoDjIqLnN5bmNfcGIuU3luY0VudW1zLlNpbmdsZXRvbkRlYnVnRXZlbnRUeXBlEk0KH3N5bmNfY3ljbGVfY29tcGxldGVkX2V2ZW50X2luZm8YAiABKAsyJC5zeW5jX3BiLlN5bmNDeWNsZUNvbXBsZXRlZEV2ZW50SW5mbxIYChBudWRnaW5nX2RhdGF0eXBlGAMgASgFEiYKHmRhdGF0eXBlc19ub3RpZmllZF9mcm9tX3NlcnZlchgEIAMoBUoECAUQBlIaZGF0YXR5cGVfYXNzb2NpYXRpb25fc3RhdHMikQEKCURlYnVnSW5mbxInCgZldmVudHMYASADKAsyFy5zeW5jX3BiLkRlYnVnRXZlbnRJbmZvEhsKE2NyeXB0b2dyYXBoZXJfcmVhZHkYAiABKAgSJgoeY3J5cHRvZ3JhcGhlcl9oYXNfcGVuZGluZ19rZXlzGAMgASgIEhYKDmV2ZW50c19kcm9wcGVkGAQgASgIQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_get_updates_caller_info, file_sync_enums]);
/**
 * Describes the message sync_pb.TypeHint.
 * Use `create(TypeHintSchema)` to create a new message.
 */
export const TypeHintSchema = /*@__PURE__*/ messageDesc(file_client_debug_info, 0);
/**
 * Describes the message sync_pb.SyncCycleCompletedEventInfo.
 * Use `create(SyncCycleCompletedEventInfoSchema)` to create a new message.
 */
export const SyncCycleCompletedEventInfoSchema = /*@__PURE__*/ messageDesc(file_client_debug_info, 1);
/**
 * Describes the message sync_pb.DebugEventInfo.
 * Use `create(DebugEventInfoSchema)` to create a new message.
 */
export const DebugEventInfoSchema = /*@__PURE__*/ messageDesc(file_client_debug_info, 2);
/**
 * Describes the message sync_pb.DebugInfo.
 * Use `create(DebugInfoSchema)` to create a new message.
 */
export const DebugInfoSchema = /*@__PURE__*/ messageDesc(file_client_debug_info, 3);
//# sourceMappingURL=client_debug_info_pb.js.map