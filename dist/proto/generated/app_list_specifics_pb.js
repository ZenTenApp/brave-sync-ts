// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for the app list (aka app launcher).
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file app_list_specifics.proto.
 */
export const file_app_list_specifics = /*@__PURE__*/ fileDesc("ChhhcHBfbGlzdF9zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIixQUKEEFwcExpc3RTcGVjaWZpY3MSDwoHaXRlbV9pZBgBIAEoCRI8CglpdGVtX3R5cGUYAiABKA4yKS5zeW5jX3BiLkFwcExpc3RTcGVjaWZpY3MuQXBwTGlzdEl0ZW1UeXBlEhEKCWl0ZW1fbmFtZRgDIAEoCRIRCglwYXJlbnRfaWQYBCABKAkSIQoVT0JTT0xFVEVfcGFnZV9vcmRpbmFsGAUgASgJQgIYARIUCgxpdGVtX29yZGluYWwYBiABKAkSGAoQaXRlbV9waW5fb3JkaW5hbBgHIAEoCRI3CgppdGVtX2NvbG9yGAggASgLMiMuc3luY19wYi5BcHBMaXN0U3BlY2lmaWNzLkljb25Db2xvchIWCg5pc191c2VyX3Bpbm5lZBgJIAEoCBIaChJwcm9taXNlX3BhY2thZ2VfaWQYCiABKAkaWAoJSWNvbkNvbG9yEj4KEGJhY2tncm91bmRfY29sb3IYASABKA4yJC5zeW5jX3BiLkFwcExpc3RTcGVjaWZpY3MuQ29sb3JHcm91cBILCgNodWUYAiABKAUieQoPQXBwTGlzdEl0ZW1UeXBlEgwKCFRZUEVfQVBQEAESGwoXVFlQRV9SRU1PVkVfREVGQVVMVF9BUFAQAhIPCgtUWVBFX0ZPTERFUhADEhUKEVRZUEVfT0JTT0xFVEVfVVJMEAQSEwoPVFlQRV9QQUdFX0JSRUFLEAUipgEKCkNvbG9yR3JvdXASDwoLQ09MT1JfRU1QVFkQABIPCgtDT0xPUl9XSElURRABEg0KCUNPTE9SX1JFRBACEhAKDENPTE9SX09SQU5HRRADEhAKDENPTE9SX1lFTExPVxAEEg8KC0NPTE9SX0dSRUVOEAUSDgoKQ09MT1JfQkxVRRAGEhEKDUNPTE9SX01BR0VOVEEQBxIPCgtDT0xPUl9CTEFDSxAIQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI");
/**
 * Describes the message sync_pb.AppListSpecifics.
 * Use `create(AppListSpecificsSchema)` to create a new message.
 */
export const AppListSpecificsSchema = /*@__PURE__*/ messageDesc(file_app_list_specifics, 0);
/**
 * Describes the message sync_pb.AppListSpecifics.IconColor.
 * Use `create(AppListSpecifics_IconColorSchema)` to create a new message.
 */
export const AppListSpecifics_IconColorSchema = /*@__PURE__*/ messageDesc(file_app_list_specifics, 0, 0);
/**
 * What type of item this is.
 *
 * @generated from enum sync_pb.AppListSpecifics.AppListItemType
 */
export var AppListSpecifics_AppListItemType;
(function (AppListSpecifics_AppListItemType) {
    /**
     * An app, whether a web app, Android app, etc.
     *
     * For bookmark apps (URL shortcuts), additional information such as their
     * URLs are kept in the AppSpecifics.bookmark_app_foobar fields.
     *
     * @generated from enum value: TYPE_APP = 1;
     */
    AppListSpecifics_AppListItemType[AppListSpecifics_AppListItemType["TYPE_APP"] = 1] = "TYPE_APP";
    /**
     * A request to remove any matching default installed apps.
     *
     * @generated from enum value: TYPE_REMOVE_DEFAULT_APP = 2;
     */
    AppListSpecifics_AppListItemType[AppListSpecifics_AppListItemType["TYPE_REMOVE_DEFAULT_APP"] = 2] = "TYPE_REMOVE_DEFAULT_APP";
    /**
     * A folder containing entries whose |parent_id| matches |item_id|.
     *
     * @generated from enum value: TYPE_FOLDER = 3;
     */
    AppListSpecifics_AppListItemType[AppListSpecifics_AppListItemType["TYPE_FOLDER"] = 3] = "TYPE_FOLDER";
    /**
     * Obsolete type, intended for URL shortcuts, that was never implemented.
     *
     * @generated from enum value: TYPE_OBSOLETE_URL = 4;
     */
    AppListSpecifics_AppListItemType[AppListSpecifics_AppListItemType["TYPE_OBSOLETE_URL"] = 4] = "TYPE_OBSOLETE_URL";
    /**
     * A "page break" item (Indicate creation of a new page in app list).
     *
     * @generated from enum value: TYPE_PAGE_BREAK = 5;
     */
    AppListSpecifics_AppListItemType[AppListSpecifics_AppListItemType["TYPE_PAGE_BREAK"] = 5] = "TYPE_PAGE_BREAK";
})(AppListSpecifics_AppListItemType || (AppListSpecifics_AppListItemType = {}));
/**
 * Describes the enum sync_pb.AppListSpecifics.AppListItemType.
 */
export const AppListSpecifics_AppListItemTypeSchema = /*@__PURE__*/ enumDesc(file_app_list_specifics, 0, 0);
/**
 * The color groups used for grouping together icons by colors.
 *
 * @generated from enum sync_pb.AppListSpecifics.ColorGroup
 */
export var AppListSpecifics_ColorGroup;
(function (AppListSpecifics_ColorGroup) {
    /**
     * @generated from enum value: COLOR_EMPTY = 0;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_EMPTY"] = 0] = "COLOR_EMPTY";
    /**
     * @generated from enum value: COLOR_WHITE = 1;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_WHITE"] = 1] = "COLOR_WHITE";
    /**
     * @generated from enum value: COLOR_RED = 2;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_RED"] = 2] = "COLOR_RED";
    /**
     * @generated from enum value: COLOR_ORANGE = 3;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_ORANGE"] = 3] = "COLOR_ORANGE";
    /**
     * @generated from enum value: COLOR_YELLOW = 4;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_YELLOW"] = 4] = "COLOR_YELLOW";
    /**
     * @generated from enum value: COLOR_GREEN = 5;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_GREEN"] = 5] = "COLOR_GREEN";
    /**
     * @generated from enum value: COLOR_BLUE = 6;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_BLUE"] = 6] = "COLOR_BLUE";
    /**
     * @generated from enum value: COLOR_MAGENTA = 7;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_MAGENTA"] = 7] = "COLOR_MAGENTA";
    /**
     * @generated from enum value: COLOR_BLACK = 8;
     */
    AppListSpecifics_ColorGroup[AppListSpecifics_ColorGroup["COLOR_BLACK"] = 8] = "COLOR_BLACK";
})(AppListSpecifics_ColorGroup || (AppListSpecifics_ColorGroup = {}));
/**
 * Describes the enum sync_pb.AppListSpecifics.ColorGroup.
 */
export const AppListSpecifics_ColorGroupSchema = /*@__PURE__*/ enumDesc(file_app_list_specifics, 0, 1);
//# sourceMappingURL=app_list_specifics_pb.js.map