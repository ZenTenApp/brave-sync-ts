// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for security events.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_gaia_password_reuse } from "./gaia_password_reuse_pb";
/**
 * Describes the file security_event_specifics.proto.
 */
export const file_security_event_specifics = /*@__PURE__*/ fileDesc("Ch5zZWN1cml0eV9ldmVudF9zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIiewoWU2VjdXJpdHlFdmVudFNwZWNpZmljcxI/ChlnYWlhX3Bhc3N3b3JkX3JldXNlX2V2ZW50GAEgASgLMhouc3luY19wYi5HYWlhUGFzc3dvcmRSZXVzZUgAEhcKD2V2ZW50X3RpbWVfdXNlYxgCIAEoA0IHCgVldmVudEI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_gaia_password_reuse]);
/**
 * Describes the message sync_pb.SecurityEventSpecifics.
 * Use `create(SecurityEventSpecificsSchema)` to create a new message.
 */
export const SecurityEventSpecificsSchema = /*@__PURE__*/ messageDesc(file_security_event_specifics, 0);
//# sourceMappingURL=security_event_specifics_pb.js.map