import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file preference_specifics.proto.
 */
export declare const file_preference_specifics: GenFile;
/**
 * Properties of preference sync objects.
 *
 * @generated from message sync_pb.PreferenceSpecifics
 */
export type PreferenceSpecifics = Message<"sync_pb.PreferenceSpecifics"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string value = 2;
     */
    value: string;
};
/**
 * Describes the message sync_pb.PreferenceSpecifics.
 * Use `create(PreferenceSpecificsSchema)` to create a new message.
 */
export declare const PreferenceSpecificsSchema: GenMessage<PreferenceSpecifics>;
//# sourceMappingURL=preference_specifics_pb.d.ts.map