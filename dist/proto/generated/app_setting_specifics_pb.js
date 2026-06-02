// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for an app setting.
// This is the same as for an extension setting, but uses a separate datatype
// in order to control syncability separately.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_extension_setting_specifics } from "./extension_setting_specifics_pb";
/**
 * Describes the file app_setting_specifics.proto.
 */
export const file_app_setting_specifics = /*@__PURE__*/ fileDesc("ChthcHBfc2V0dGluZ19zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIiVAoTQXBwU2V0dGluZ1NwZWNpZmljcxI9ChFleHRlbnNpb25fc2V0dGluZxgBIAEoCzIiLnN5bmNfcGIuRXh0ZW5zaW9uU2V0dGluZ1NwZWNpZmljc0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_extension_setting_specifics]);
/**
 * Describes the message sync_pb.AppSettingSpecifics.
 * Use `create(AppSettingSpecificsSchema)` to create a new message.
 */
export const AppSettingSpecificsSchema = /*@__PURE__*/ messageDesc(file_app_setting_specifics, 0);
//# sourceMappingURL=app_setting_specifics_pb.js.map