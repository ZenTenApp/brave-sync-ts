import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file web_app_specifics.proto.
 */
export declare const file_web_app_specifics: GenFile;
/**
 * Sync & local data: Information about web app icon.
 *
 * @generated from message sync_pb.WebAppIconInfo
 */
export type WebAppIconInfo = Message<"sync_pb.WebAppIconInfo"> & {
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
     * @generated from field: optional sync_pb.WebAppIconInfo.Purpose purpose = 3;
     */
    purpose: WebAppIconInfo_Purpose;
};
/**
 * Describes the message sync_pb.WebAppIconInfo.
 * Use `create(WebAppIconInfoSchema)` to create a new message.
 */
export declare const WebAppIconInfoSchema: GenMessage<WebAppIconInfo>;
/**
 * @generated from enum sync_pb.WebAppIconInfo.Purpose
 */
export declare enum WebAppIconInfo_Purpose {
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
 * Describes the enum sync_pb.WebAppIconInfo.Purpose.
 */
export declare const WebAppIconInfo_PurposeSchema: GenEnum<WebAppIconInfo_Purpose>;
/**
 * WebApp data. This is a synced part of
 * chrome/browser/web_applications/proto/web_app.proto data.
 *
 * @generated from message sync_pb.WebAppSpecifics
 */
export type WebAppSpecifics = Message<"sync_pb.WebAppSpecifics"> & {
    /**
     * @generated from field: optional string start_url = 1;
     */
    startUrl: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name: string;
    /**
     * User-selected display setting, which may be used if no platform-specific
     * setting is available (eg. on Windows, Mac, and Linux). If absent,
     * user_display_mode_cros may be used as fallback (if populated). On pre-M122
     * devices this field is used by all platforms (ie. ChromeOS, Windows, Mac,
     * Linux) and always replaces any locally-stored value, with
     * absent/unspecified falling back to standalone.
     *
     * @generated from field: optional sync_pb.WebAppSpecifics.UserDisplayMode user_display_mode_default = 3;
     */
    userDisplayModeDefault: WebAppSpecifics_UserDisplayMode;
    /**
     * @generated from field: optional uint32 theme_color = 4;
     */
    themeColor: number;
    /**
     * @generated from field: optional string scope = 5;
     */
    scope: string;
    /**
     * @generated from field: repeated sync_pb.WebAppIconInfo icon_infos = 6;
     */
    iconInfos: WebAppIconInfo[];
    /**
     * Used to store the page number that the app is displayed on in
     * chrome://apps.
     *
     * @generated from field: optional string user_page_ordinal = 7;
     */
    userPageOrdinal: string;
    /**
     * Used to store the in-page ranking for ordering apps in its given
     * |user_page_ordinal| page.
     *
     * @generated from field: optional string user_launch_ordinal = 8;
     */
    userLaunchOrdinal: string;
    /**
     * Used to store id specified in the manifest. This is a path that is relative
     * to the start_url, similar to how the id field is parsed in
     * https://www.w3.org/TR/appmanifest/#id-member, except this field does not
     * include a scheme or origin. This is only the path after the origin,
     * excluding the first "/".
     * Note: If this field is not set, then the manifest_id is generated using the
     * start_url in GenerateManifestIdFromStartUrlOnly. This is different than if
     * this is set to "", which means the manifest_id will be set to the origin of
     * the start_url.
     *
     * @generated from field: optional string relative_manifest_id = 9;
     */
    relativeManifestId: string;
    /**
     * User-selected display setting for ChromeOS.
     * If absent, user_display_mode_default may be used as fallback (if
     * populated).
     * Introduced in M122.
     *
     * @generated from field: optional sync_pb.WebAppSpecifics.UserDisplayMode user_display_mode_cros = 10;
     */
    userDisplayModeCros: WebAppSpecifics_UserDisplayMode;
};
/**
 * Describes the message sync_pb.WebAppSpecifics.
 * Use `create(WebAppSpecificsSchema)` to create a new message.
 */
export declare const WebAppSpecificsSchema: GenMessage<WebAppSpecifics>;
/**
 * This enum should be a subset of the DisplayMode enum in
 * chrome/browser/web_applications/proto/web_app.proto and
 * third_party/blink/public/mojom/manifest/display_mode.mojom
 *
 * @generated from enum sync_pb.WebAppSpecifics.UserDisplayMode
 */
export declare enum WebAppSpecifics_UserDisplayMode {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BROWSER = 1;
     */
    BROWSER = 1,
    /**
     * MINIMAL_UI is never serialized.
     *
     * @generated from enum value: STANDALONE = 3;
     */
    STANDALONE = 3,
    /**
     * FULLSCREEN is never serialized.
     * WINDOW_CONTROLS_OVERLAY is never serialized.
     *
     * BORDERLESS is never serialized.
     * PICTURE_IN_PICTURE is never serialized.
     *
     * @generated from enum value: TABBED = 6;
     */
    TABBED = 6
}
/**
 * Describes the enum sync_pb.WebAppSpecifics.UserDisplayMode.
 */
export declare const WebAppSpecifics_UserDisplayModeSchema: GenEnum<WebAppSpecifics_UserDisplayMode>;
//# sourceMappingURL=web_app_specifics_pb.d.ts.map