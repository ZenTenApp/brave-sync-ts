// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_entity_specifics } from "./entity_specifics_pb";
import { file_unique_position } from "./unique_position_pb";
/**
 * Describes the file entity_metadata.proto.
 */
export const file_entity_metadata = /*@__PURE__*/ fileDesc("ChVlbnRpdHlfbWV0YWRhdGEucHJvdG8SB3N5bmNfcGIitAQKDkVudGl0eU1ldGFkYXRhEhcKD2NsaWVudF90YWdfaGFzaBgBIAEoCRIRCglzZXJ2ZXJfaWQYAiABKAkSEgoKaXNfZGVsZXRlZBgDIAEoCBIXCg9zZXF1ZW5jZV9udW1iZXIYBCABKAMSHQoVYWNrZWRfc2VxdWVuY2VfbnVtYmVyGAUgASgDEhoKDnNlcnZlcl92ZXJzaW9uGAYgASgDOgItMRIVCg1jcmVhdGlvbl90aW1lGAcgASgDEhkKEW1vZGlmaWNhdGlvbl90aW1lGAggASgDEhYKDnNwZWNpZmljc19oYXNoGAkgASgJEhsKE2Jhc2Vfc3BlY2lmaWNzX2hhc2gYCiABKAkSMAoPdW5pcXVlX3Bvc2l0aW9uGAsgASgLMhcuc3luY19wYi5VbmlxdWVQb3NpdGlvbhIdChVib29rbWFya19mYXZpY29uX2hhc2gYDCABKAcSQQofcG9zc2libHlfdHJpbW1lZF9iYXNlX3NwZWNpZmljcxgNIAEoCzIYLnN5bmNfcGIuRW50aXR5U3BlY2lmaWNzEhoKEmRlbGV0ZWRfYnlfdmVyc2lvbhgOIAEoCRJECg1jb2xsYWJvcmF0aW9uGA8gASgLMi0uc3luY19wYi5FbnRpdHlNZXRhZGF0YS5Db2xsYWJvcmF0aW9uTWV0YWRhdGEaMQoVQ29sbGFib3JhdGlvbk1ldGFkYXRhEhgKEGNvbGxhYm9yYXRpb25faWQYASABKAlCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg", [file_entity_specifics, file_unique_position]);
/**
 * Describes the message sync_pb.EntityMetadata.
 * Use `create(EntityMetadataSchema)` to create a new message.
 */
export const EntityMetadataSchema = /*@__PURE__*/ messageDesc(file_entity_metadata, 0);
/**
 * Describes the message sync_pb.EntityMetadata.CollaborationMetadata.
 * Use `create(EntityMetadata_CollaborationMetadataSchema)` to create a new message.
 */
export const EntityMetadata_CollaborationMetadataSchema = /*@__PURE__*/ messageDesc(file_entity_metadata, 0, 0);
//# sourceMappingURL=entity_metadata_pb.js.map