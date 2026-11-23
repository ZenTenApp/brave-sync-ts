import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { NoteEntity } from "./note_entity_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file power_bookmark_specifics.proto.
 */
export declare const file_power_bookmark_specifics: GenFile;
/**
 * Data structure dedicated to each power type.
 * Should keep the field numbers of specifics in sync with the ones in PowerType
 * below.
 *
 * @generated from message sync_pb.PowerEntity
 */
export type PowerEntity = Message<"sync_pb.PowerEntity"> & {
    /**
     * @generated from oneof sync_pb.PowerEntity.entity
     */
    entity: {
        /**
         * Used for notes.
         *
         * @generated from field: sync_pb.NoteEntity note_entity = 2;
         */
        value: NoteEntity;
        case: "noteEntity";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.PowerEntity.
 * Use `create(PowerEntitySchema)` to create a new message.
 */
export declare const PowerEntitySchema: GenMessage<PowerEntity>;
/**
 * @generated from message sync_pb.PowerBookmarkSpecifics
 */
export type PowerBookmarkSpecifics = Message<"sync_pb.PowerBookmarkSpecifics"> & {
    /**
     * required
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * required
     *
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * required
     *
     * @generated from field: optional sync_pb.PowerBookmarkSpecifics.PowerType power_type = 3;
     */
    powerType: PowerBookmarkSpecifics_PowerType;
    /**
     * required
     *
     * @generated from field: optional int64 creation_time_usec = 4;
     */
    creationTimeUsec: bigint;
    /**
     * required
     *
     * @generated from field: optional int64 update_time_usec = 5;
     */
    updateTimeUsec: bigint;
    /**
     * required
     *
     * @generated from field: optional sync_pb.PowerEntity power_entity = 100;
     */
    powerEntity?: PowerEntity;
};
/**
 * Describes the message sync_pb.PowerBookmarkSpecifics.
 * Use `create(PowerBookmarkSpecificsSchema)` to create a new message.
 */
export declare const PowerBookmarkSpecificsSchema: GenMessage<PowerBookmarkSpecifics>;
/**
 * PowerType is persisted to disk and therefore shouldn't be reoderered or
 * changed.
 * Should keep the field numbers of PowerType in sync with the ones in
 * entity above.
 *
 * @generated from enum sync_pb.PowerBookmarkSpecifics.PowerType
 */
export declare enum PowerBookmarkSpecifics_PowerType {
    /**
     * All powers should have type so this should be unused.
     *
     * @generated from enum value: POWER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Used for testing.
     *
     * @generated from enum value: POWER_TYPE_MOCK = 1;
     */
    MOCK = 1,
    /**
     * Used for notes.
     *
     * @generated from enum value: POWER_TYPE_NOTE = 2;
     */
    NOTE = 2
}
/**
 * Describes the enum sync_pb.PowerBookmarkSpecifics.PowerType.
 */
export declare const PowerBookmarkSpecifics_PowerTypeSchema: GenEnum<PowerBookmarkSpecifics_PowerType>;
//# sourceMappingURL=power_bookmark_specifics_pb.d.ts.map