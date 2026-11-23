import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { PreferenceSpecifics } from "./preference_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file priority_preference_specifics.proto.
 */
export declare const file_priority_preference_specifics: GenFile;
/**
 * Properties of a synced priority preference.
 *
 * @generated from message sync_pb.PriorityPreferenceSpecifics
 */
export type PriorityPreferenceSpecifics = Message<"sync_pb.PriorityPreferenceSpecifics"> & {
    /**
     * @generated from field: optional sync_pb.PreferenceSpecifics preference = 1;
     */
    preference?: PreferenceSpecifics;
};
/**
 * Describes the message sync_pb.PriorityPreferenceSpecifics.
 * Use `create(PriorityPreferenceSpecificsSchema)` to create a new message.
 */
export declare const PriorityPreferenceSpecificsSchema: GenMessage<PriorityPreferenceSpecifics>;
//# sourceMappingURL=priority_preference_specifics_pb.d.ts.map