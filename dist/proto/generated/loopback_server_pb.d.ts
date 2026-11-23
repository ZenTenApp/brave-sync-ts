import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SyncEntity } from "./sync_entity_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file loopback_server.proto.
 */
export declare const file_loopback_server: GenFile;
/**
 * Serialization of the LoopbackServerEntity and its ancestors.
 *
 * @generated from message sync_pb.LoopbackServerEntity
 */
export type LoopbackServerEntity = Message<"sync_pb.LoopbackServerEntity"> & {
    /**
     * @generated from field: optional sync_pb.LoopbackServerEntity.Type type = 1;
     */
    type: LoopbackServerEntity_Type;
    /**
     * @generated from field: optional sync_pb.SyncEntity entity = 2;
     */
    entity?: SyncEntity;
    /**
     * @generated from field: optional int64 model_type = 3;
     */
    modelType: bigint;
};
/**
 * Describes the message sync_pb.LoopbackServerEntity.
 * Use `create(LoopbackServerEntitySchema)` to create a new message.
 */
export declare const LoopbackServerEntitySchema: GenMessage<LoopbackServerEntity>;
/**
 * Entity type mapping to one of the subclasses of LoopbackServerEntity.
 *
 * @generated from enum sync_pb.LoopbackServerEntity.Type
 */
export declare enum LoopbackServerEntity_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: BOOKMARK = 1;
     */
    BOOKMARK = 1,
    /**
     * @generated from enum value: PERMANENT = 2;
     */
    PERMANENT = 2,
    /**
     * @generated from enum value: TOMBSTONE = 3;
     */
    TOMBSTONE = 3,
    /**
     * @generated from enum value: UNIQUE = 4;
     */
    UNIQUE = 4
}
/**
 * Describes the enum sync_pb.LoopbackServerEntity.Type.
 */
export declare const LoopbackServerEntity_TypeSchema: GenEnum<LoopbackServerEntity_Type>;
/**
 * Contains the loopback server state.
 *
 * @generated from message sync_pb.LoopbackServerProto
 */
export type LoopbackServerProto = Message<"sync_pb.LoopbackServerProto"> & {
    /**
     * The protocol buffer format version.
     *
     * @generated from field: optional int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from field: optional int64 store_birthday = 2;
     */
    storeBirthday: bigint;
    /**
     * @generated from field: repeated sync_pb.LoopbackServerEntity entities = 3;
     */
    entities: LoopbackServerEntity[];
    /**
     * All Keystore keys known to the server.
     *
     * @generated from field: repeated bytes keystore_keys = 4;
     */
    keystoreKeys: Uint8Array[];
    /**
     * The last entity ID that was assigned to an entity.
     *
     * @generated from field: optional int64 last_version_assigned = 5;
     */
    lastVersionAssigned: bigint;
};
/**
 * Describes the message sync_pb.LoopbackServerProto.
 * Use `create(LoopbackServerProtoSchema)` to create a new message.
 */
export declare const LoopbackServerProtoSchema: GenMessage<LoopbackServerProto>;
//# sourceMappingURL=loopback_server_pb.d.ts.map