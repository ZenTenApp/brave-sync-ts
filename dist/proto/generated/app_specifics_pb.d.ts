import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ExtensionSpecifics } from "./extension_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file app_specifics.proto.
 */
export declare const file_app_specifics: GenFile;
/**
 * Settings related to push notifications for apps.
 *
 * @generated from message sync_pb.AppNotificationSettings
 */
export type AppNotificationSettings = Message<"sync_pb.AppNotificationSettings"> & {
    /**
     * DEPRECATED: Use oauth_client_id below.
     * Whether or not the user has setup notifications at least once.
     * The value for this field will start out false and will be set
     * to true when the user accepts receiving notifications for the
     * first time and then it will always remain true.
     *
     * @generated from field: optional bool initial_setup_done = 1 [deprecated = true];
     * @deprecated
     */
    initialSetupDone: boolean;
    /**
     * Whether or not the user has disabled notifications.
     *
     * @generated from field: optional bool disabled = 2;
     */
    disabled: boolean;
    /**
     * OAuth2 client id to which the user granted the notification permission.
     * This field will start out empty.
     * It will be set when the user accepts receiving notifications.
     * This field is used when the user revokes the notifications permission.
     * Note that it is never cleared after it was set once. Hence, the presence
     * of this field can be used to determine if the user has setup notifications
     * at least once for the given app.
     *
     * @generated from field: optional string oauth_client_id = 3;
     */
    oauthClientId: string;
};
/**
 * Describes the message sync_pb.AppNotificationSettings.
 * Use `create(AppNotificationSettingsSchema)` to create a new message.
 */
export declare const AppNotificationSettingsSchema: GenMessage<AppNotificationSettings>;
/**
 * Information about a linked app icon.
 *
 * @generated from message sync_pb.LinkedAppIconInfo
 */
export type LinkedAppIconInfo = Message<"sync_pb.LinkedAppIconInfo"> & {
    /**
     * The URL of the app icon.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * The size of the app icon in DIPs.
     *
     * @generated from field: optional uint32 size = 2;
     */
    size: number;
};
/**
 * Describes the message sync_pb.LinkedAppIconInfo.
 * Use `create(LinkedAppIconInfoSchema)` to create a new message.
 */
export declare const LinkedAppIconInfoSchema: GenMessage<LinkedAppIconInfo>;
/**
 * Properties of app sync objects.
 *
 * For now, an app is just an extension.  We keep the two data types
 * separate for future-proofing purposes.
 *
 * @generated from message sync_pb.AppSpecifics
 */
export type AppSpecifics = Message<"sync_pb.AppSpecifics"> & {
    /**
     * Extension data.
     *
     * @generated from field: optional sync_pb.ExtensionSpecifics extension = 1;
     */
    extension?: ExtensionSpecifics;
    /**
     * Notification settings.
     *
     * @generated from field: optional sync_pb.AppNotificationSettings notification_settings = 2;
     */
    notificationSettings?: AppNotificationSettings;
    /**
     * This controls where on a page this application icon will appear.
     *
     * @generated from field: optional string app_launch_ordinal = 3;
     */
    appLaunchOrdinal: string;
    /**
     * This specifics which page the application icon will appear on in the NTP.
     * This values only provide the order within the application pages, not within
     * all of the panels in the NTP.
     *
     * @generated from field: optional string page_ordinal = 4;
     */
    pageOrdinal: string;
    /**
     * This describes how the extension should be launched.
     *
     * @generated from field: optional sync_pb.AppSpecifics.LaunchType launch_type = 5;
     */
    launchType: AppSpecifics_LaunchType;
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional string bookmark_app_url = 6 [deprecated = true];
     * @deprecated
     */
    bookmarkAppUrl: string;
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional string bookmark_app_description = 7 [deprecated = true];
     * @deprecated
     */
    bookmarkAppDescription: string;
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional string bookmark_app_icon_color = 8 [deprecated = true];
     * @deprecated
     */
    bookmarkAppIconColor: string;
    /**
     * This is information about linked icons (that is, icons that are downloaded
     * from outside the app's bundle of files.
     *
     * @generated from field: repeated sync_pb.LinkedAppIconInfo linked_app_icons = 9;
     */
    linkedAppIcons: LinkedAppIconInfo[];
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional string bookmark_app_scope = 10 [deprecated = true];
     * @deprecated
     */
    bookmarkAppScope: string;
    /**
     * DEPRECATED. See https://crbug.com/1233303.
     *
     * @generated from field: optional uint32 bookmark_app_theme_color = 11 [deprecated = true];
     * @deprecated
     */
    bookmarkAppThemeColor: number;
};
/**
 * Describes the message sync_pb.AppSpecifics.
 * Use `create(AppSpecificsSchema)` to create a new message.
 */
export declare const AppSpecificsSchema: GenMessage<AppSpecifics>;
/**
 * The possible launch types for an app.
 * This enum should be kept in sync with extensions::LaunchType.
 *
 * @generated from enum sync_pb.AppSpecifics.LaunchType
 */
export declare enum AppSpecifics_LaunchType {
    /**
     * @generated from enum value: PINNED = 0;
     */
    PINNED = 0,
    /**
     * @generated from enum value: REGULAR = 1;
     */
    REGULAR = 1,
    /**
     * @generated from enum value: FULLSCREEN = 2;
     */
    FULLSCREEN = 2,
    /**
     * @generated from enum value: WINDOW = 3;
     */
    WINDOW = 3
}
/**
 * Describes the enum sync_pb.AppSpecifics.LaunchType.
 */
export declare const AppSpecifics_LaunchTypeSchema: GenEnum<AppSpecifics_LaunchType>;
//# sourceMappingURL=app_specifics_pb.d.ts.map