// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file note_entity.proto.
 */
export const file_note_entity = /*@__PURE__*/ fileDesc("ChFub3RlX2VudGl0eS5wcm90bxIHc3luY19wYiLHAQoKTm90ZUVudGl0eRISCgpwbGFpbl90ZXh0GAEgASgJEhEKCXJpY2hfdGV4dBgCIAEoCRIzCgt0YXJnZXRfdHlwZRgDIAEoDjIeLnN5bmNfcGIuTm90ZUVudGl0eS5UYXJnZXRUeXBlEhwKFGN1cnJlbnRfbm90ZV92ZXJzaW9uGAQgASgFIj8KClRhcmdldFR5cGUSGwoXVEFSR0VUX1RZUEVfVU5TUEVDSUZJRUQQABIUChBUQVJHRVRfVFlQRV9QQUdFEAFCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.NoteEntity.
 * Use `create(NoteEntitySchema)` to create a new message.
 */
export const NoteEntitySchema = /*@__PURE__*/ messageDesc(file_note_entity, 0);
/**
 * @generated from enum sync_pb.NoteEntity.TargetType
 */
export var NoteEntity_TargetType;
(function (NoteEntity_TargetType) {
    /**
     * @generated from enum value: TARGET_TYPE_UNSPECIFIED = 0;
     */
    NoteEntity_TargetType[NoteEntity_TargetType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Page target type makes the note global to the page. It does not associate
     * with any user selection.
     *
     * @generated from enum value: TARGET_TYPE_PAGE = 1;
     */
    NoteEntity_TargetType[NoteEntity_TargetType["PAGE"] = 1] = "PAGE";
})(NoteEntity_TargetType || (NoteEntity_TargetType = {}));
/**
 * Describes the enum sync_pb.NoteEntity.TargetType.
 */
export const NoteEntity_TargetTypeSchema = /*@__PURE__*/ enumDesc(file_note_entity, 0, 0);
//# sourceMappingURL=note_entity_pb.js.map