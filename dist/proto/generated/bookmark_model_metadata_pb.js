// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_model_type_state } from "./model_type_state_pb";
import { file_entity_metadata } from "./entity_metadata_pb";
/**
 * Describes the file bookmark_model_metadata.proto.
 */
export const file_bookmark_model_metadata = /*@__PURE__*/ fileDesc("Ch1ib29rbWFya19tb2RlbF9tZXRhZGF0YS5wcm90bxIHc3luY19wYiJJChBCb29rbWFya01ldGFkYXRhEgoKAmlkGAEgASgDEikKCG1ldGFkYXRhGAIgASgLMhcuc3luY19wYi5FbnRpdHlNZXRhZGF0YSLwAgoVQm9va21hcmtNb2RlbE1ldGFkYXRhEjEKEG1vZGVsX3R5cGVfc3RhdGUYASABKAsyFy5zeW5jX3BiLk1vZGVsVHlwZVN0YXRlEjUKEmJvb2ttYXJrc19tZXRhZGF0YRgCIAMoCzIZLnN5bmNfcGIuQm9va21hcmtNZXRhZGF0YRItCiVib29rbWFya3NfaGllcmFyY2h5X2ZpZWxkc19yZXVwbG9hZGVkGAYgASgIEjEKKW51bV9pZ25vcmVkX3VwZGF0ZXNfZHVlX3RvX21pc3NpbmdfcGFyZW50GAcgASgDEj8KN21heF92ZXJzaW9uX2Ftb25nX2lnbm9yZWRfdXBkYXRlc19kdWVfdG9fbWlzc2luZ19wYXJlbnQYCCABKAMSOAowbGFzdF9pbml0aWFsX21lcmdlX3JlbW90ZV91cGRhdGVzX2V4Y2VlZGVkX2xpbWl0GAkgASgISgQIAxAESgQIBBAFSgQIBRAGQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_model_type_state, file_entity_metadata]);
/**
 * Describes the message sync_pb.BookmarkMetadata.
 * Use `create(BookmarkMetadataSchema)` to create a new message.
 */
export const BookmarkMetadataSchema = /*@__PURE__*/ messageDesc(file_bookmark_model_metadata, 0);
/**
 * Describes the message sync_pb.BookmarkModelMetadata.
 * Use `create(BookmarkModelMetadataSchema)` to create a new message.
 */
export const BookmarkModelMetadataSchema = /*@__PURE__*/ messageDesc(file_bookmark_model_metadata, 1);
//# sourceMappingURL=bookmark_model_metadata_pb.js.map