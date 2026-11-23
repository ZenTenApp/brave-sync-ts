// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol for persisting the loopback server state to disk.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_sync_entity } from "./sync_entity_pb";
/**
 * Describes the file loopback_server.proto.
 */
export const file_loopback_server = /*@__PURE__*/ fileDesc("ChVsb29wYmFja19zZXJ2ZXIucHJvdG8SB3N5bmNfcGIizgEKFExvb3BiYWNrU2VydmVyRW50aXR5EjAKBHR5cGUYASABKA4yIi5zeW5jX3BiLkxvb3BiYWNrU2VydmVyRW50aXR5LlR5cGUSIwoGZW50aXR5GAIgASgLMhMuc3luY19wYi5TeW5jRW50aXR5EhIKCm1vZGVsX3R5cGUYAyABKAMiSwoEVHlwZRILCgdVTktOT1dOEAASDAoIQk9PS01BUksQARINCglQRVJNQU5FTlQQAhINCglUT01CU1RPTkUQAxIKCgZVTklRVUUQBCKlAQoTTG9vcGJhY2tTZXJ2ZXJQcm90bxIPCgd2ZXJzaW9uGAEgASgDEhYKDnN0b3JlX2JpcnRoZGF5GAIgASgDEi8KCGVudGl0aWVzGAMgAygLMh0uc3luY19wYi5Mb29wYmFja1NlcnZlckVudGl0eRIVCg1rZXlzdG9yZV9rZXlzGAQgAygMEh0KFWxhc3RfdmVyc2lvbl9hc3NpZ25lZBgFIAEoA0I2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi", [file_sync_entity]);
/**
 * Describes the message sync_pb.LoopbackServerEntity.
 * Use `create(LoopbackServerEntitySchema)` to create a new message.
 */
export const LoopbackServerEntitySchema = /*@__PURE__*/ messageDesc(file_loopback_server, 0);
/**
 * Entity type mapping to one of the subclasses of LoopbackServerEntity.
 *
 * @generated from enum sync_pb.LoopbackServerEntity.Type
 */
export var LoopbackServerEntity_Type;
(function (LoopbackServerEntity_Type) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    LoopbackServerEntity_Type[LoopbackServerEntity_Type["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: BOOKMARK = 1;
     */
    LoopbackServerEntity_Type[LoopbackServerEntity_Type["BOOKMARK"] = 1] = "BOOKMARK";
    /**
     * @generated from enum value: PERMANENT = 2;
     */
    LoopbackServerEntity_Type[LoopbackServerEntity_Type["PERMANENT"] = 2] = "PERMANENT";
    /**
     * @generated from enum value: TOMBSTONE = 3;
     */
    LoopbackServerEntity_Type[LoopbackServerEntity_Type["TOMBSTONE"] = 3] = "TOMBSTONE";
    /**
     * @generated from enum value: UNIQUE = 4;
     */
    LoopbackServerEntity_Type[LoopbackServerEntity_Type["UNIQUE"] = 4] = "UNIQUE";
})(LoopbackServerEntity_Type || (LoopbackServerEntity_Type = {}));
/**
 * Describes the enum sync_pb.LoopbackServerEntity.Type.
 */
export const LoopbackServerEntity_TypeSchema = /*@__PURE__*/ enumDesc(file_loopback_server, 0, 0);
/**
 * Describes the message sync_pb.LoopbackServerProto.
 * Use `create(LoopbackServerProtoSchema)` to create a new message.
 */
export const LoopbackServerProtoSchema = /*@__PURE__*/ messageDesc(file_loopback_server, 1);
//# sourceMappingURL=loopback_server_pb.js.map