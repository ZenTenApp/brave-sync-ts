// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_data_type_progress_marker } from "./data_type_progress_marker_pb";
/**
 * Describes the file model_type_state.proto.
 */
export const file_model_type_state = /*@__PURE__*/ fileDesc("ChZtb2RlbF90eXBlX3N0YXRlLnByb3RvEgdzeW5jX3BiIvEECg5Nb2RlbFR5cGVTdGF0ZRI4Cg9wcm9ncmVzc19tYXJrZXIYASABKAsyHy5zeW5jX3BiLkRhdGFUeXBlUHJvZ3Jlc3NNYXJrZXISLgoMdHlwZV9jb250ZXh0GAIgASgLMhguc3luY19wYi5EYXRhVHlwZUNvbnRleHQSGwoTZW5jcnlwdGlvbl9rZXlfbmFtZRgDIAEoCRIoChxpbml0aWFsX3N5bmNfZG9uZV9kZXByZWNhdGVkGAQgASgIQgIYARJEChJpbml0aWFsX3N5bmNfc3RhdGUYCSABKA4yKC5zeW5jX3BiLk1vZGVsVHlwZVN0YXRlLkluaXRpYWxTeW5jU3RhdGUSEgoKY2FjaGVfZ3VpZBgFIAEoCRIgChhhdXRoZW50aWNhdGVkX2FjY291bnRfaWQYBiABKAkSOwoNaW52YWxpZGF0aW9ucxgHIAMoCzIkLnN5bmNfcGIuTW9kZWxUeXBlU3RhdGUuSW52YWxpZGF0aW9uEjcKL25vdGVzX2VuYWJsZWRfYmVmb3JlX2luaXRpYWxfc3luY19mb3JfcGFzc3dvcmRzGAggASgIGi0KDEludmFsaWRhdGlvbhIMCgRoaW50GAEgASgMEg8KB3ZlcnNpb24YAiABKAMijAEKEEluaXRpYWxTeW5jU3RhdGUSIgoeSU5JVElBTF9TWU5DX1NUQVRFX1VOU1BFQ0lGSUVEEAASHwobSU5JVElBTF9TWU5DX1BBUlRJQUxMWV9ET05FEAISFQoRSU5JVElBTF9TWU5DX0RPTkUQAxIcChhJTklUSUFMX1NZTkNfVU5ORUNFU1NBUlkQBEI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_data_type_progress_marker]);
/**
 * Describes the message sync_pb.ModelTypeState.
 * Use `create(ModelTypeStateSchema)` to create a new message.
 */
export const ModelTypeStateSchema = /*@__PURE__*/ messageDesc(file_model_type_state, 0);
/**
 * Describes the message sync_pb.ModelTypeState.Invalidation.
 * Use `create(ModelTypeState_InvalidationSchema)` to create a new message.
 */
export const ModelTypeState_InvalidationSchema = /*@__PURE__*/ messageDesc(file_model_type_state, 0, 0);
/**
 * @generated from enum sync_pb.ModelTypeState.InitialSyncState
 */
export var ModelTypeState_InitialSyncState;
(function (ModelTypeState_InitialSyncState) {
    /**
     * Default value, typically used when there is no metadata (e.g. because
     * Sync is disabled).
     *
     * @generated from enum value: INITIAL_SYNC_STATE_UNSPECIFIED = 0;
     */
    ModelTypeState_InitialSyncState[ModelTypeState_InitialSyncState["INITIAL_SYNC_STATE_UNSPECIFIED"] = 0] = "INITIAL_SYNC_STATE_UNSPECIFIED";
    /**
     * Indicates that syncing has started and some, but not all updates from the
     * initial download/sync have been delivered. This is only used for data
     * types in ApplyUpdatesImmediatelyTypes().
     *
     * @generated from enum value: INITIAL_SYNC_PARTIALLY_DONE = 2;
     */
    ModelTypeState_InitialSyncState[ModelTypeState_InitialSyncState["INITIAL_SYNC_PARTIALLY_DONE"] = 2] = "INITIAL_SYNC_PARTIALLY_DONE";
    /**
     * Indicates that the initial sync (download + merge) has been completed.
     *
     * @generated from enum value: INITIAL_SYNC_DONE = 3;
     */
    ModelTypeState_InitialSyncState[ModelTypeState_InitialSyncState["INITIAL_SYNC_DONE"] = 3] = "INITIAL_SYNC_DONE";
    /**
     * Indicates that no initial sync is necessary, used for CommitOnlyTypes().
     *
     * @generated from enum value: INITIAL_SYNC_UNNECESSARY = 4;
     */
    ModelTypeState_InitialSyncState[ModelTypeState_InitialSyncState["INITIAL_SYNC_UNNECESSARY"] = 4] = "INITIAL_SYNC_UNNECESSARY";
})(ModelTypeState_InitialSyncState || (ModelTypeState_InitialSyncState = {}));
/**
 * Describes the enum sync_pb.ModelTypeState.InitialSyncState.
 */
export const ModelTypeState_InitialSyncStateSchema = /*@__PURE__*/ enumDesc(file_model_type_state, 0, 0);
//# sourceMappingURL=model_type_state_pb.js.map