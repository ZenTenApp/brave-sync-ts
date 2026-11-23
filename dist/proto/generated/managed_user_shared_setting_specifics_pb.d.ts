import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file managed_user_shared_setting_specifics.proto.
 */
export declare const file_managed_user_shared_setting_specifics: GenFile;
/**
 * Properties of managed user shared setting sync objects.
 *
 * @generated from message sync_pb.ManagedUserSharedSettingSpecifics
 */
export type ManagedUserSharedSettingSpecifics = Message<"sync_pb.ManagedUserSharedSettingSpecifics"> & {
    /**
     * The MU ID for the managed user to whom the setting applies.
     *
     * @generated from field: optional string mu_id = 1;
     */
    muId: string;
    /**
     * The key of the setting.
     *
     * @generated from field: optional string key = 2;
     */
    key: string;
    /**
     * The setting value. The setting is a JSON encoding of an arbitrary
     * Javascript value.
     *
     * @generated from field: optional string value = 3;
     */
    value: string;
    /**
     * This flag is set by the server to acknowledge that it has committed a
     * change to a setting.
     *
     * @generated from field: optional bool acknowledged = 4 [default = false];
     */
    acknowledged: boolean;
};
/**
 * Describes the message sync_pb.ManagedUserSharedSettingSpecifics.
 * Use `create(ManagedUserSharedSettingSpecificsSchema)` to create a new message.
 */
export declare const ManagedUserSharedSettingSpecificsSchema: GenMessage<ManagedUserSharedSettingSpecifics>;
//# sourceMappingURL=managed_user_shared_setting_specifics_pb.d.ts.map