// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Common sync protocol for encrypted data.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file encryption.proto.
 */
export const file_encryption = /*@__PURE__*/ fileDesc("ChBlbmNyeXB0aW9uLnByb3RvEgdzeW5jX3BiIi8KDUVuY3J5cHRlZERhdGESEAoIa2V5X25hbWUYASABKAkSDAoEYmxvYhgCIAEoCUI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.EncryptedData.
 * Use `create(EncryptedDataSchema)` to create a new message.
 */
export const EncryptedDataSchema = /*@__PURE__*/ messageDesc(file_encryption, 0);
//# sourceMappingURL=encryption_pb.js.map