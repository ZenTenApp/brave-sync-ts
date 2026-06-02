// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Protocol messages used to record the state of the model type store for USS.
// At the time of writing, the model type store uses leveldb, a schemaless
// key-value store. This means that the database's schema is mostly implicit.
// This descriptor isn't intended to fully describe the schema, just keep track
// of which major changes have been applied.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file model_type_store_schema_descriptor.proto.
 */
export const file_model_type_store_schema_descriptor = /*@__PURE__*/ fileDesc("Cihtb2RlbF90eXBlX3N0b3JlX3NjaGVtYV9kZXNjcmlwdG9yLnByb3RvEgdzeW5jX3BiIjgKHk1vZGVsVHlwZVN0b3JlU2NoZW1hRGVzY3JpcHRvchIWCg52ZXJzaW9uX251bWJlchgBIAEoA0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.ModelTypeStoreSchemaDescriptor.
 * Use `create(ModelTypeStoreSchemaDescriptorSchema)` to create a new message.
 */
export const ModelTypeStoreSchemaDescriptorSchema = /*@__PURE__*/ messageDesc(file_model_type_store_schema_descriptor, 0);
//# sourceMappingURL=model_type_store_schema_descriptor_pb.js.map