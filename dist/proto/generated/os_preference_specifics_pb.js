// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for Chrome OS preferences.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_preference_specifics } from "./preference_specifics_pb";
/**
 * Describes the file os_preference_specifics.proto.
 */
export const file_os_preference_specifics = /*@__PURE__*/ fileDesc("Ch1vc19wcmVmZXJlbmNlX3NwZWNpZmljcy5wcm90bxIHc3luY19wYiJJChVPc1ByZWZlcmVuY2VTcGVjaWZpY3MSMAoKcHJlZmVyZW5jZRgBIAEoCzIcLnN5bmNfcGIuUHJlZmVyZW5jZVNwZWNpZmljc0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_preference_specifics]);
/**
 * Describes the message sync_pb.OsPreferenceSpecifics.
 * Use `create(OsPreferenceSpecificsSchema)` to create a new message.
 */
export const OsPreferenceSpecificsSchema = /*@__PURE__*/ messageDesc(file_os_preference_specifics, 0);
//# sourceMappingURL=os_preference_specifics_pb.js.map