// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_note_entity } from "./note_entity_pb";
/**
 * Describes the file power_bookmark_specifics.proto.
 */
export const file_power_bookmark_specifics = /*@__PURE__*/ fileDesc("Ch5wb3dlcl9ib29rbWFya19zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIiQwoLUG93ZXJFbnRpdHkSKgoLbm90ZV9lbnRpdHkYAiABKAsyEy5zeW5jX3BiLk5vdGVFbnRpdHlIAEIICgZlbnRpdHkipwIKFlBvd2VyQm9va21hcmtTcGVjaWZpY3MSDAoEZ3VpZBgBIAEoCRILCgN1cmwYAiABKAkSPQoKcG93ZXJfdHlwZRgDIAEoDjIpLnN5bmNfcGIuUG93ZXJCb29rbWFya1NwZWNpZmljcy5Qb3dlclR5cGUSGgoSY3JlYXRpb25fdGltZV91c2VjGAQgASgDEhgKEHVwZGF0ZV90aW1lX3VzZWMYBSABKAMSKgoMcG93ZXJfZW50aXR5GGQgASgLMhQuc3luY19wYi5Qb3dlckVudGl0eSJRCglQb3dlclR5cGUSGgoWUE9XRVJfVFlQRV9VTlNQRUNJRklFRBAAEhMKD1BPV0VSX1RZUEVfTU9DSxABEhMKD1BPV0VSX1RZUEVfTk9URRACQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_note_entity]);
/**
 * Describes the message sync_pb.PowerEntity.
 * Use `create(PowerEntitySchema)` to create a new message.
 */
export const PowerEntitySchema = /*@__PURE__*/ messageDesc(file_power_bookmark_specifics, 0);
/**
 * Describes the message sync_pb.PowerBookmarkSpecifics.
 * Use `create(PowerBookmarkSpecificsSchema)` to create a new message.
 */
export const PowerBookmarkSpecificsSchema = /*@__PURE__*/ messageDesc(file_power_bookmark_specifics, 1);
/**
 * PowerType is persisted to disk and therefore shouldn't be reoderered or
 * changed.
 * Should keep the field numbers of PowerType in sync with the ones in
 * entity above.
 *
 * @generated from enum sync_pb.PowerBookmarkSpecifics.PowerType
 */
export var PowerBookmarkSpecifics_PowerType;
(function (PowerBookmarkSpecifics_PowerType) {
    /**
     * All powers should have type so this should be unused.
     *
     * @generated from enum value: POWER_TYPE_UNSPECIFIED = 0;
     */
    PowerBookmarkSpecifics_PowerType[PowerBookmarkSpecifics_PowerType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Used for testing.
     *
     * @generated from enum value: POWER_TYPE_MOCK = 1;
     */
    PowerBookmarkSpecifics_PowerType[PowerBookmarkSpecifics_PowerType["MOCK"] = 1] = "MOCK";
    /**
     * Used for notes.
     *
     * @generated from enum value: POWER_TYPE_NOTE = 2;
     */
    PowerBookmarkSpecifics_PowerType[PowerBookmarkSpecifics_PowerType["NOTE"] = 2] = "NOTE";
})(PowerBookmarkSpecifics_PowerType || (PowerBookmarkSpecifics_PowerType = {}));
/**
 * Describes the enum sync_pb.PowerBookmarkSpecifics.PowerType.
 */
export const PowerBookmarkSpecifics_PowerTypeSchema = /*@__PURE__*/ enumDesc(file_power_bookmark_specifics, 1, 0);
//# sourceMappingURL=power_bookmark_specifics_pb.js.map