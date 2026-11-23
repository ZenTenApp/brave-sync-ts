import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ExtensionSettingSpecifics } from "./extension_setting_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file app_setting_specifics.proto.
 */
export declare const file_app_setting_specifics: GenFile;
/**
 * Properties of app setting sync objects; just an extension setting.
 *
 * @generated from message sync_pb.AppSettingSpecifics
 */
export type AppSettingSpecifics = Message<"sync_pb.AppSettingSpecifics"> & {
    /**
     * @generated from field: optional sync_pb.ExtensionSettingSpecifics extension_setting = 1;
     */
    extensionSetting?: ExtensionSettingSpecifics;
};
/**
 * Describes the message sync_pb.AppSettingSpecifics.
 * Use `create(AppSettingSpecificsSchema)` to create a new message.
 */
export declare const AppSettingSpecificsSchema: GenMessage<AppSettingSpecifics>;
//# sourceMappingURL=app_setting_specifics_pb.d.ts.map