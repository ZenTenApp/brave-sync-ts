import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file managed_user_setting_specifics.proto.
 */
export declare const file_managed_user_setting_specifics: GenFile;
/**
 * Properties of managed user setting sync objects.
 *
 * @generated from message sync_pb.ManagedUserSettingSpecifics
 */
export type ManagedUserSettingSpecifics = Message<"sync_pb.ManagedUserSettingSpecifics"> & {
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
 * Describes the message sync_pb.ManagedUserSettingSpecifics.
 * Use `create(ManagedUserSettingSpecificsSchema)` to create a new message.
 */
export declare const ManagedUserSettingSpecificsSchema: GenMessage<ManagedUserSettingSpecifics>;
//# sourceMappingURL=managed_user_setting_specifics_pb.d.ts.map