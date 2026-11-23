import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file extension_setting_specifics.proto.
 */
export declare const file_extension_setting_specifics: GenFile;
/**
 * Properties of extension setting sync objects.
 *
 * @generated from message sync_pb.ExtensionSettingSpecifics
 */
export type ExtensionSettingSpecifics = Message<"sync_pb.ExtensionSettingSpecifics"> & {
    /**
     * Id of the extension the setting is for.
     *
     * @generated from field: optional string extension_id = 1;
     */
    extensionId: string;
    /**
     * Setting key.
     *
     * @generated from field: optional string key = 2;
     */
    key: string;
    /**
     * Setting value serialized as JSON.
     *
     * @generated from field: optional string value = 3;
     */
    value: string;
};
/**
 * Describes the message sync_pb.ExtensionSettingSpecifics.
 * Use `create(ExtensionSettingSpecificsSchema)` to create a new message.
 */
export declare const ExtensionSettingSpecificsSchema: GenMessage<ExtensionSettingSpecifics>;
//# sourceMappingURL=extension_setting_specifics_pb.d.ts.map