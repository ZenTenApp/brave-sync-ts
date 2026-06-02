import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file web_apk_specifics.proto.
 */
export declare const file_web_apk_specifics: GenFile;
/**
 * Sync & local data: Information about web app icon.
 *
 * @generated from message sync_pb.WebApkIconInfo
 */
export type WebApkIconInfo = Message<"sync_pb.WebApkIconInfo"> & {
    /**
     * The size of the square app icon, in raw pixels.
     *
     * @generated from field: optional int32 size_in_px = 1;
     */
    sizeInPx: number;
    /**
     * The URL of the app icon.
     *
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * The purpose or context in which the icon should be used.
     *
     * @generated from field: optional sync_pb.WebApkIconInfo.Purpose purpose = 3;
     */
    purpose: WebApkIconInfo_Purpose;
};
/**
 * Describes the message sync_pb.WebApkIconInfo.
 * Use `create(WebApkIconInfoSchema)` to create a new message.
 */
export declare const WebApkIconInfoSchema: GenMessage<WebApkIconInfo>;
/**
 * @generated from enum sync_pb.WebApkIconInfo.Purpose
 */
export declare enum WebApkIconInfo_Purpose {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Suitable for any purpose.
     *
     * @generated from enum value: ANY = 1;
     */
    ANY = 1,
    /**
     * Designed for masking.
     *
     * @generated from enum value: MASKABLE = 2;
     */
    MASKABLE = 2,
    /**
     * Suitable for monochrome purposes.
     *
     * @generated from enum value: MONOCHROME = 3;
     */
    MONOCHROME = 3
}
/**
 * Describes the enum sync_pb.WebApkIconInfo.Purpose.
 */
export declare const WebApkIconInfo_PurposeSchema: GenEnum<WebApkIconInfo_Purpose>;
/**
 * WebApk data.
 *
 * @generated from message sync_pb.WebApkSpecifics
 */
export type WebApkSpecifics = Message<"sync_pb.WebApkSpecifics"> & {
    /**
     * @generated from field: optional string manifest_id = 1;
     */
    manifestId: string;
    /**
     * @generated from field: optional string start_url = 2;
     */
    startUrl: string;
    /**
     * @generated from field: optional string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional uint32 theme_color = 4;
     */
    themeColor: number;
    /**
     * @generated from field: optional string scope = 5;
     */
    scope: string;
    /**
     * @generated from field: repeated sync_pb.WebApkIconInfo icon_infos = 6;
     */
    iconInfos: WebApkIconInfo[];
    /**
     * Time when this WebApk was last used or installed.
     * Number of microseconds since 1601, aka Windows epoch.
     *
     * @generated from field: optional int64 last_used_time_windows_epoch_micros = 7;
     */
    lastUsedTimeWindowsEpochMicros: bigint;
};
/**
 * Describes the message sync_pb.WebApkSpecifics.
 * Use `create(WebApkSpecificsSchema)` to create a new message.
 */
export declare const WebApkSpecificsSchema: GenMessage<WebApkSpecifics>;
//# sourceMappingURL=web_apk_specifics_pb.d.ts.map