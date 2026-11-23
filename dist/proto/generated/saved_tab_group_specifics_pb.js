// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file saved_tab_group_specifics.proto.
 */
export const file_saved_tab_group_specifics = /*@__PURE__*/ fileDesc("Ch9zYXZlZF90YWJfZ3JvdXBfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIs4DCg1TYXZlZFRhYkdyb3VwEhAKCHBvc2l0aW9uGAEgASgDEg0KBXRpdGxlGAIgASgJEjgKBWNvbG9yGAMgASgOMikuc3luY19wYi5TYXZlZFRhYkdyb3VwLlNhdmVkVGFiR3JvdXBDb2xvciLhAgoSU2F2ZWRUYWJHcm91cENvbG9yEiUKIVNBVkVEX1RBQl9HUk9VUF9DT0xPUl9VTlNQRUNJRklFRBAAEh4KGlNBVkVEX1RBQl9HUk9VUF9DT0xPUl9HUkVZEAESHgoaU0FWRURfVEFCX0dST1VQX0NPTE9SX0JMVUUQAhIdChlTQVZFRF9UQUJfR1JPVVBfQ09MT1JfUkVEEAMSIAocU0FWRURfVEFCX0dST1VQX0NPTE9SX1lFTExPVxAEEh8KG1NBVkVEX1RBQl9HUk9VUF9DT0xPUl9HUkVFThAFEh4KGlNBVkVEX1RBQl9HUk9VUF9DT0xPUl9QSU5LEAYSIAocU0FWRURfVEFCX0dST1VQX0NPTE9SX1BVUlBMRRAHEh4KGlNBVkVEX1RBQl9HUk9VUF9DT0xPUl9DWUFOEAgSIAocU0FWRURfVEFCX0dST1VQX0NPTE9SX09SQU5HRRAJIlQKEFNhdmVkVGFiR3JvdXBUYWISEgoKZ3JvdXBfZ3VpZBgBIAEoCRIQCghwb3NpdGlvbhgCIAEoAxILCgN1cmwYAyABKAkSDQoFdGl0bGUYBCABKAki2QEKFlNhdmVkVGFiR3JvdXBTcGVjaWZpY3MSDAoEZ3VpZBgBIAEoCRIqCiJjcmVhdGlvbl90aW1lX3dpbmRvd3NfZXBvY2hfbWljcm9zGAIgASgDEigKIHVwZGF0ZV90aW1lX3dpbmRvd3NfZXBvY2hfbWljcm9zGAMgASgDEicKBWdyb3VwGAQgASgLMhYuc3luY19wYi5TYXZlZFRhYkdyb3VwSAASKAoDdGFiGAUgASgLMhkuc3luY19wYi5TYXZlZFRhYkdyb3VwVGFiSABCCAoGZW50aXR5QjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI");
/**
 * Describes the message sync_pb.SavedTabGroup.
 * Use `create(SavedTabGroupSchema)` to create a new message.
 */
export const SavedTabGroupSchema = /*@__PURE__*/ messageDesc(file_saved_tab_group_specifics, 0);
/**
 * These colors map to tab_groups::TabGroupColorId. They DO NOT match the enum
 * integer values due to "kGrey" being in the "Unspecified" field.
 *
 * @generated from enum sync_pb.SavedTabGroup.SavedTabGroupColor
 */
export var SavedTabGroup_SavedTabGroupColor;
(function (SavedTabGroup_SavedTabGroupColor) {
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_UNSPECIFIED = 0;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_GREY = 1;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["GREY"] = 1] = "GREY";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_BLUE = 2;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["BLUE"] = 2] = "BLUE";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_RED = 3;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["RED"] = 3] = "RED";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_YELLOW = 4;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["YELLOW"] = 4] = "YELLOW";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_GREEN = 5;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["GREEN"] = 5] = "GREEN";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_PINK = 6;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["PINK"] = 6] = "PINK";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_PURPLE = 7;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["PURPLE"] = 7] = "PURPLE";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_CYAN = 8;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["CYAN"] = 8] = "CYAN";
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_ORANGE = 9;
     */
    SavedTabGroup_SavedTabGroupColor[SavedTabGroup_SavedTabGroupColor["ORANGE"] = 9] = "ORANGE";
})(SavedTabGroup_SavedTabGroupColor || (SavedTabGroup_SavedTabGroupColor = {}));
/**
 * Describes the enum sync_pb.SavedTabGroup.SavedTabGroupColor.
 */
export const SavedTabGroup_SavedTabGroupColorSchema = /*@__PURE__*/ enumDesc(file_saved_tab_group_specifics, 0, 0);
/**
 * Describes the message sync_pb.SavedTabGroupTab.
 * Use `create(SavedTabGroupTabSchema)` to create a new message.
 */
export const SavedTabGroupTabSchema = /*@__PURE__*/ messageDesc(file_saved_tab_group_specifics, 1);
/**
 * Describes the message sync_pb.SavedTabGroupSpecifics.
 * Use `create(SavedTabGroupSpecificsSchema)` to create a new message.
 */
export const SavedTabGroupSpecificsSchema = /*@__PURE__*/ messageDesc(file_saved_tab_group_specifics, 2);
//# sourceMappingURL=saved_tab_group_specifics_pb.js.map