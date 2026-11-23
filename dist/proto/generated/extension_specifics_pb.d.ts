import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file extension_specifics.proto.
 */
export declare const file_extension_specifics: GenFile;
/**
 * Properties of extension sync objects.
 *
 * Merge policy: the settings for the higher version number win; in
 * the case of a tie, server wins.
 *
 * @generated from message sync_pb.ExtensionSpecifics
 */
export type ExtensionSpecifics = Message<"sync_pb.ExtensionSpecifics"> & {
    /**
     * Globally unique id for this extension.
     *
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * The known installed version.
     *
     * @generated from field: optional string version = 2;
     */
    version: string;
    /**
     * Auto-update URL to use for this extension.  May be blank, in
     * which case the default one (i.e., the one for the Chrome
     * Extensions Gallery) is used.
     *
     * @generated from field: optional string update_url = 3;
     */
    updateUrl: string;
    /**
     * Whether or not this extension is enabled.
     *
     * @generated from field: optional bool enabled = 4;
     */
    enabled: boolean;
    /**
     * Whether or not this extension is enabled in incognito mode.
     *
     * @generated from field: optional bool incognito_enabled = 5;
     */
    incognitoEnabled: boolean;
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional string name = 6 [deprecated = true];
     * @deprecated
     */
    name: string;
    /**
     * Whether this extension was installed remotely, and hasn't been approved by
     * a user in chrome yet.
     *
     * @generated from field: optional bool remote_install = 7;
     */
    remoteInstall: boolean;
    /**
     * DEPRECATED. See https://crbug.com/1014183.
     *
     * @generated from field: optional bool installed_by_custodian = 8 [deprecated = true];
     * @deprecated
     */
    installedByCustodian: boolean;
    /**
     * DEPRECATED. See https://crbug.com/839681.
     *
     * @generated from field: optional bool all_urls_enabled = 9 [deprecated = true];
     * @deprecated
     */
    allUrlsEnabled: boolean;
    /**
     * Bitmask of the set of reasons why the extension is disabled (see
     * extensions::disable_reason::DisableReason). Only relevant when enabled ==
     * false. Note that old clients (<M45) won't set this, even when enabled is
     * false.
     *
     * @generated from field: optional int32 disable_reasons = 10;
     */
    disableReasons: number;
};
/**
 * Describes the message sync_pb.ExtensionSpecifics.
 * Use `create(ExtensionSpecificsSchema)` to create a new message.
 */
export declare const ExtensionSpecificsSchema: GenMessage<ExtensionSpecifics>;
//# sourceMappingURL=extension_specifics_pb.d.ts.map