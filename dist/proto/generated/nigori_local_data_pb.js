// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_encryption } from "./encryption_pb";
import { file_entity_metadata } from "./entity_metadata_pb";
import { file_model_type_state } from "./model_type_state_pb";
import { file_nigori_specifics } from "./nigori_specifics_pb";
/**
 * Describes the file nigori_local_data.proto.
 */
export const file_nigori_local_data = /*@__PURE__*/ fileDesc("ChduaWdvcmlfbG9jYWxfZGF0YS5wcm90bxIHc3luY19wYiJQChRDcm9zc1VzZXJTaGFyaW5nS2V5cxI4Cgtwcml2YXRlX2tleRgBIAMoCzIjLnN5bmNfcGIuQ3Jvc3NVc2VyU2hhcmluZ1ByaXZhdGVLZXkiNAoRTG9jYWxOaWdvcmlLZXlCYWcSHwoDa2V5GAIgAygLMhIuc3luY19wYi5OaWdvcmlLZXkimgEKEUNyeXB0b2dyYXBoZXJEYXRhEisKB2tleV9iYWcYASABKAsyGi5zeW5jX3BiLkxvY2FsTmlnb3JpS2V5QmFnEhgKEGRlZmF1bHRfa2V5X25hbWUYAiABKAkSPgoXY3Jvc3NfdXNlcl9zaGFyaW5nX2tleXMYAyABKAsyHS5zeW5jX3BiLkNyb3NzVXNlclNoYXJpbmdLZXlzIrMBCiNDdXN0b21QYXNzcGhyYXNlS2V5RGVyaXZhdGlvblBhcmFtcxJdCidjdXN0b21fcGFzc3BocmFzZV9rZXlfZGVyaXZhdGlvbl9tZXRob2QYASABKA4yLC5zeW5jX3BiLk5pZ29yaVNwZWNpZmljcy5LZXlEZXJpdmF0aW9uTWV0aG9kEi0KJWN1c3RvbV9wYXNzcGhyYXNlX2tleV9kZXJpdmF0aW9uX3NhbHQYAiABKAki7wUKC05pZ29yaU1vZGVsEjYKEmNyeXB0b2dyYXBoZXJfZGF0YRgBIAEoCzIaLnN5bmNfcGIuQ3J5cHRvZ3JhcGhlckRhdGESIQoZY3VycmVudF9rZXlzdG9yZV9rZXlfbmFtZRgCIAEoCRIsCgxwZW5kaW5nX2tleXMYAyABKAsyFi5zeW5jX3BiLkVuY3J5cHRlZERhdGESSQoPcGFzc3BocmFzZV90eXBlGAQgASgOMicuc3luY19wYi5OaWdvcmlTcGVjaWZpY3MuUGFzc3BocmFzZVR5cGU6B1VOS05PV04SHwoXa2V5c3RvcmVfbWlncmF0aW9uX3RpbWUYBSABKAMSHgoWY3VzdG9tX3Bhc3NwaHJhc2VfdGltZRgGIAEoAxJdCidjdXN0b21fcGFzc3BocmFzZV9rZXlfZGVyaXZhdGlvbl9wYXJhbXMYByABKAsyLC5zeW5jX3BiLkN1c3RvbVBhc3NwaHJhc2VLZXlEZXJpdmF0aW9uUGFyYW1zEhoKEmVuY3J5cHRfZXZlcnl0aGluZxgIIAEoCBIuCiZlbmNyeXB0ZWRfdHlwZXNfc3BlY2lmaWNzX2ZpZWxkX251bWJlchgJIAMoBRIUCgxrZXlzdG9yZV9rZXkYCiADKAkSQAogcGVuZGluZ19rZXlzdG9yZV9kZWNyeXB0b3JfdG9rZW4YCyABKAsyFi5zeW5jX3BiLkVuY3J5cHRlZERhdGESKwojbGFzdF9kZWZhdWx0X3RydXN0ZWRfdmF1bHRfa2V5X25hbWUYDCABKAkSUAoYdHJ1c3RlZF92YXVsdF9kZWJ1Z19pbmZvGA0gASgLMi4uc3luY19wYi5OaWdvcmlTcGVjaWZpY3MuVHJ1c3RlZFZhdWx0RGVidWdJbmZvEkkKHWNyb3NzX3VzZXJfc2hhcmluZ19wdWJsaWNfa2V5GA4gASgLMiIuc3luY19wYi5Dcm9zc1VzZXJTaGFyaW5nUHVibGljS2V5IqIBCg9OaWdvcmlMb2NhbERhdGESMQoQbW9kZWxfdHlwZV9zdGF0ZRgBIAEoCzIXLnN5bmNfcGIuTW9kZWxUeXBlU3RhdGUSMAoPZW50aXR5X21ldGFkYXRhGAIgASgLMhcuc3luY19wYi5FbnRpdHlNZXRhZGF0YRIqCgxuaWdvcmlfbW9kZWwYAyABKAsyFC5zeW5jX3BiLk5pZ29yaU1vZGVsQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI", [file_encryption, file_entity_metadata, file_model_type_state, file_nigori_specifics]);
/**
 * Describes the message sync_pb.CrossUserSharingKeys.
 * Use `create(CrossUserSharingKeysSchema)` to create a new message.
 */
export const CrossUserSharingKeysSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 0);
/**
 * Describes the message sync_pb.LocalNigoriKeyBag.
 * Use `create(LocalNigoriKeyBagSchema)` to create a new message.
 */
export const LocalNigoriKeyBagSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 1);
/**
 * Describes the message sync_pb.CryptographerData.
 * Use `create(CryptographerDataSchema)` to create a new message.
 */
export const CryptographerDataSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 2);
/**
 * Describes the message sync_pb.CustomPassphraseKeyDerivationParams.
 * Use `create(CustomPassphraseKeyDerivationParamsSchema)` to create a new message.
 */
export const CustomPassphraseKeyDerivationParamsSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 3);
/**
 * Describes the message sync_pb.NigoriModel.
 * Use `create(NigoriModelSchema)` to create a new message.
 */
export const NigoriModelSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 4);
/**
 * Describes the message sync_pb.NigoriLocalData.
 * Use `create(NigoriLocalDataSchema)` to create a new message.
 */
export const NigoriLocalDataSchema = /*@__PURE__*/ messageDesc(file_nigori_local_data, 5);
//# sourceMappingURL=nigori_local_data_pb.js.map