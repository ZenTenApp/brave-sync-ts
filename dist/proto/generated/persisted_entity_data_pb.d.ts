import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EntitySpecifics } from "./entity_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file persisted_entity_data.proto.
 */
export declare const file_persisted_entity_data: GenFile;
/**
 * Sync proto to store entity data similar to what the legacy Directory used
 * to store, used to persist data locally and never sent through the wire.
 *
 * Because it's conceptually similar to SyncEntity (actual protocol) and it's
 * unclear how big this'll grow, we've kept compatibility with SyncEntity by
 * using the same field numbers.
 *
 * @generated from message sync_pb.PersistedEntityData
 */
export type PersistedEntityData = Message<"sync_pb.PersistedEntityData"> & {
    /**
     * See corresponding fields in SyncEntity for details.
     *
     * @generated from field: optional string name = 8;
     */
    name: string;
    /**
     * @generated from field: optional sync_pb.EntitySpecifics specifics = 21;
     */
    specifics?: EntitySpecifics;
};
/**
 * Describes the message sync_pb.PersistedEntityData.
 * Use `create(PersistedEntityDataSchema)` to create a new message.
 */
export declare const PersistedEntityDataSchema: GenMessage<PersistedEntityData>;
//# sourceMappingURL=persisted_entity_data_pb.d.ts.map