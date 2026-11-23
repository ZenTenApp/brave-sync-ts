// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for shared tab groups and tabs.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_unique_position } from "./unique_position_pb";
/**
 * Describes the file shared_tab_group_data_specifics.proto.
 */
export const file_shared_tab_group_data_specifics = /*@__PURE__*/ fileDesc("CiVzaGFyZWRfdGFiX2dyb3VwX2RhdGFfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIqgBChtTaGFyZWRUYWJHcm91cERhdGFTcGVjaWZpY3MSDAoEZ3VpZBgBIAEoCRIgChhsYXN0X21vZGlmaWNhdGlvbl9hdXRob3IYAiABKAkSLAoJdGFiX2dyb3VwGAMgASgLMhcuc3luY19wYi5TaGFyZWRUYWJHcm91cEgAEiEKA3RhYhgEIAEoCzISLnN5bmNfcGIuU2hhcmVkVGFiSABCCAoGZW50aXR5IscBCg5TaGFyZWRUYWJHcm91cBINCgV0aXRsZRgBIAEoCRIsCgVjb2xvchgCIAEoDjIdLnN5bmNfcGIuU2hhcmVkVGFiR3JvdXAuQ29sb3IieAoFQ29sb3ISDwoLVU5TUEVDSUZJRUQQABIICgRHUkVZEAESCAoEQkxVRRACEgcKA1JFRBADEgoKBllFTExPVxAEEgkKBUdSRUVOEAUSCAoEUElOSxAGEgoKBlBVUlBMRRAHEggKBENZQU4QCBIKCgZPUkFOR0UQCSKNAQoJU2hhcmVkVGFiEgsKA3VybBgBIAEoCRINCgV0aXRsZRgCIAEoCRITCgtmYXZpY29uX3VybBgDIAEoCRIdChVzaGFyZWRfdGFiX2dyb3VwX2d1aWQYBCABKAkSMAoPdW5pcXVlX3Bvc2l0aW9uGAUgASgLMhcuc3luY19wYi5VbmlxdWVQb3NpdGlvbkI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_unique_position]);
/**
 * Describes the message sync_pb.SharedTabGroupDataSpecifics.
 * Use `create(SharedTabGroupDataSpecificsSchema)` to create a new message.
 */
export const SharedTabGroupDataSpecificsSchema = /*@__PURE__*/ messageDesc(file_shared_tab_group_data_specifics, 0);
/**
 * Describes the message sync_pb.SharedTabGroup.
 * Use `create(SharedTabGroupSchema)` to create a new message.
 */
export const SharedTabGroupSchema = /*@__PURE__*/ messageDesc(file_shared_tab_group_data_specifics, 1);
/**
 * These colors map to tab_groups::TabGroupColorId. They DO NOT match the enum
 * integer values due to "kGrey" being in the "Unspecified" field.
 *
 * @generated from enum sync_pb.SharedTabGroup.Color
 */
export var SharedTabGroup_Color;
(function (SharedTabGroup_Color) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: GREY = 1;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["GREY"] = 1] = "GREY";
    /**
     * @generated from enum value: BLUE = 2;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["BLUE"] = 2] = "BLUE";
    /**
     * @generated from enum value: RED = 3;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["RED"] = 3] = "RED";
    /**
     * @generated from enum value: YELLOW = 4;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["YELLOW"] = 4] = "YELLOW";
    /**
     * @generated from enum value: GREEN = 5;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["GREEN"] = 5] = "GREEN";
    /**
     * @generated from enum value: PINK = 6;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["PINK"] = 6] = "PINK";
    /**
     * @generated from enum value: PURPLE = 7;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["PURPLE"] = 7] = "PURPLE";
    /**
     * @generated from enum value: CYAN = 8;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["CYAN"] = 8] = "CYAN";
    /**
     * @generated from enum value: ORANGE = 9;
     */
    SharedTabGroup_Color[SharedTabGroup_Color["ORANGE"] = 9] = "ORANGE";
})(SharedTabGroup_Color || (SharedTabGroup_Color = {}));
/**
 * Describes the enum sync_pb.SharedTabGroup.Color.
 */
export const SharedTabGroup_ColorSchema = /*@__PURE__*/ enumDesc(file_shared_tab_group_data_specifics, 1, 0);
/**
 * Describes the message sync_pb.SharedTab.
 * Use `create(SharedTabSchema)` to create a new message.
 */
export const SharedTabSchema = /*@__PURE__*/ messageDesc(file_shared_tab_group_data_specifics, 2);
//# sourceMappingURL=shared_tab_group_data_specifics_pb.js.map