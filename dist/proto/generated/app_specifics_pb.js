// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for apps.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_extension_specifics } from "./extension_specifics_pb";
/**
 * Describes the file app_specifics.proto.
 */
export const file_app_specifics = /*@__PURE__*/ fileDesc("ChNhcHBfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiImQKF0FwcE5vdGlmaWNhdGlvblNldHRpbmdzEh4KEmluaXRpYWxfc2V0dXBfZG9uZRgBIAEoCEICGAESEAoIZGlzYWJsZWQYAiABKAgSFwoPb2F1dGhfY2xpZW50X2lkGAMgASgJIi4KEUxpbmtlZEFwcEljb25JbmZvEgsKA3VybBgBIAEoCRIMCgRzaXplGAIgASgNIpAECgxBcHBTcGVjaWZpY3MSLgoJZXh0ZW5zaW9uGAEgASgLMhsuc3luY19wYi5FeHRlbnNpb25TcGVjaWZpY3MSPwoVbm90aWZpY2F0aW9uX3NldHRpbmdzGAIgASgLMiAuc3luY19wYi5BcHBOb3RpZmljYXRpb25TZXR0aW5ncxIaChJhcHBfbGF1bmNoX29yZGluYWwYAyABKAkSFAoMcGFnZV9vcmRpbmFsGAQgASgJEjUKC2xhdW5jaF90eXBlGAUgASgOMiAuc3luY19wYi5BcHBTcGVjaWZpY3MuTGF1bmNoVHlwZRIcChBib29rbWFya19hcHBfdXJsGAYgASgJQgIYARIkChhib29rbWFya19hcHBfZGVzY3JpcHRpb24YByABKAlCAhgBEiMKF2Jvb2ttYXJrX2FwcF9pY29uX2NvbG9yGAggASgJQgIYARI0ChBsaW5rZWRfYXBwX2ljb25zGAkgAygLMhouc3luY19wYi5MaW5rZWRBcHBJY29uSW5mbxIeChJib29rbWFya19hcHBfc2NvcGUYCiABKAlCAhgBEiQKGGJvb2ttYXJrX2FwcF90aGVtZV9jb2xvchgLIAEoDUICGAEiQQoKTGF1bmNoVHlwZRIKCgZQSU5ORUQQABILCgdSRUdVTEFSEAESDgoKRlVMTFNDUkVFThACEgoKBldJTkRPVxADQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_extension_specifics]);
/**
 * Describes the message sync_pb.AppNotificationSettings.
 * Use `create(AppNotificationSettingsSchema)` to create a new message.
 */
export const AppNotificationSettingsSchema = /*@__PURE__*/ messageDesc(file_app_specifics, 0);
/**
 * Describes the message sync_pb.LinkedAppIconInfo.
 * Use `create(LinkedAppIconInfoSchema)` to create a new message.
 */
export const LinkedAppIconInfoSchema = /*@__PURE__*/ messageDesc(file_app_specifics, 1);
/**
 * Describes the message sync_pb.AppSpecifics.
 * Use `create(AppSpecificsSchema)` to create a new message.
 */
export const AppSpecificsSchema = /*@__PURE__*/ messageDesc(file_app_specifics, 2);
/**
 * The possible launch types for an app.
 * This enum should be kept in sync with extensions::LaunchType.
 *
 * @generated from enum sync_pb.AppSpecifics.LaunchType
 */
export var AppSpecifics_LaunchType;
(function (AppSpecifics_LaunchType) {
    /**
     * @generated from enum value: PINNED = 0;
     */
    AppSpecifics_LaunchType[AppSpecifics_LaunchType["PINNED"] = 0] = "PINNED";
    /**
     * @generated from enum value: REGULAR = 1;
     */
    AppSpecifics_LaunchType[AppSpecifics_LaunchType["REGULAR"] = 1] = "REGULAR";
    /**
     * @generated from enum value: FULLSCREEN = 2;
     */
    AppSpecifics_LaunchType[AppSpecifics_LaunchType["FULLSCREEN"] = 2] = "FULLSCREEN";
    /**
     * @generated from enum value: WINDOW = 3;
     */
    AppSpecifics_LaunchType[AppSpecifics_LaunchType["WINDOW"] = 3] = "WINDOW";
})(AppSpecifics_LaunchType || (AppSpecifics_LaunchType = {}));
/**
 * Describes the enum sync_pb.AppSpecifics.LaunchType.
 */
export const AppSpecifics_LaunchTypeSchema = /*@__PURE__*/ enumDesc(file_app_specifics, 2, 0);
//# sourceMappingURL=app_specifics_pb.js.map