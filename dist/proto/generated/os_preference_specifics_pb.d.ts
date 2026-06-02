import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { PreferenceSpecifics } from "./preference_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file os_preference_specifics.proto.
 */
export declare const file_os_preference_specifics: GenFile;
/**
 * Properties of a synced Chrome OS system preference. Uses PreferenceSpecifics
 * instead of declaring name and value fields to allow more code sharing in the
 * client (e.g. all PrefModelAssociators can operate on PreferenceSpecifics).
 *
 * @generated from message sync_pb.OsPreferenceSpecifics
 */
export type OsPreferenceSpecifics = Message<"sync_pb.OsPreferenceSpecifics"> & {
    /**
     * @generated from field: optional sync_pb.PreferenceSpecifics preference = 1;
     */
    preference?: PreferenceSpecifics;
};
/**
 * Describes the message sync_pb.OsPreferenceSpecifics.
 * Use `create(OsPreferenceSpecificsSchema)` to create a new message.
 */
export declare const OsPreferenceSpecificsSchema: GenMessage<OsPreferenceSpecifics>;
//# sourceMappingURL=os_preference_specifics_pb.d.ts.map