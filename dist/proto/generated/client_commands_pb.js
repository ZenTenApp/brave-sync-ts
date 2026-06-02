// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol for communication between sync client and server.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file client_commands.proto.
 */
export const file_client_commands = /*@__PURE__*/ fileDesc("ChVjbGllbnRfY29tbWFuZHMucHJvdG8SB3N5bmNfcGIiOQoQQ3VzdG9tTnVkZ2VEZWxheRITCgtkYXRhdHlwZV9pZBgBIAEoBRIQCghkZWxheV9tcxgCIAEoBSLXAwoNQ2xpZW50Q29tbWFuZBIeChZzZXRfc3luY19wb2xsX2ludGVydmFsGAEgASgFEicKG3NldF9zeW5jX2xvbmdfcG9sbF9pbnRlcnZhbBgCIAEoBUICGAESHQoVbWF4X2NvbW1pdF9iYXRjaF9zaXplGAMgASgFEh4KFnRocm90dGxlX2RlbGF5X3NlY29uZHMYBSABKAUSMAokY2xpZW50X2ludmFsaWRhdGlvbl9oaW50X2J1ZmZlcl9zaXplGAYgASgFQgIYARIeChZndV9yZXRyeV9kZWxheV9zZWNvbmRzGAcgASgFEjYKE2N1c3RvbV9udWRnZV9kZWxheXMYCCADKAsyGS5zeW5jX3BiLkN1c3RvbU51ZGdlRGVsYXkSIgoaZXh0ZW5zaW9uX3R5cGVzX21heF90b2tlbnMYCSABKAUSLwonZXh0ZW5zaW9uX3R5cGVzX3JlZmlsbF9pbnRlcnZhbF9zZWNvbmRzGAogASgFEjoKMmV4dGVuc2lvbl90eXBlc19kZXBsZXRlZF9xdW90YV9udWRnZV9kZWxheV9zZWNvbmRzGAsgASgFSgQIBBAFUh1zZXNzaW9uc19jb21taXRfZGVsYXlfc2Vjb25kc0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.CustomNudgeDelay.
 * Use `create(CustomNudgeDelaySchema)` to create a new message.
 */
export const CustomNudgeDelaySchema = /*@__PURE__*/ messageDesc(file_client_commands, 0);
/**
 * Describes the message sync_pb.ClientCommand.
 * Use `create(ClientCommandSchema)` to create a new message.
 */
export const ClientCommandSchema = /*@__PURE__*/ messageDesc(file_client_commands, 1);
//# sourceMappingURL=client_commands_pb.js.map