import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file app_list_specifics.proto.
 */
export declare const file_app_list_specifics: GenFile;
/**
 * Properties of app list objects.
 *
 * @generated from message sync_pb.AppListSpecifics
 */
export type AppListSpecifics = Message<"sync_pb.AppListSpecifics"> & {
    /**
     * Unique identifier for the item:
     * * TYPE_FOLDER: Folder id (generated)
     * * TYPE_APP: App Id
     *
     * @generated from field: optional string item_id = 1;
     */
    itemId: string;
    /**
     * @generated from field: optional sync_pb.AppListSpecifics.AppListItemType item_type = 2;
     */
    itemType: AppListSpecifics_AppListItemType;
    /**
     * Item name (FOLDER).
     *
     * @generated from field: optional string item_name = 3;
     */
    itemName: string;
    /**
     * Id of the parent (folder) item.
     *
     * @generated from field: optional string parent_id = 4;
     */
    parentId: string;
    /**
     * Marked OBSOLETE because this is unused for the app list.
     * Which page this item will appear on in the app list.
     *
     * @generated from field: optional string OBSOLETE_page_ordinal = 5 [deprecated = true];
     * @deprecated
     */
    OBSOLETEPageOrdinal: string;
    /**
     * Where on a page this item will appear.
     *
     * @generated from field: optional string item_ordinal = 6;
     */
    itemOrdinal: string;
    /**
     * Where on a shelf this item will appear.
     * Note that not all apps are pinned to the shelf by the user -- some might
     * originate from the PinnedLauncherApps policy. See `is_user_pinned` for more
     * details.
     *
     * @generated from field: optional string item_pin_ordinal = 7;
     */
    itemPinOrdinal: string;
    /**
     * @generated from field: optional sync_pb.AppListSpecifics.IconColor item_color = 8;
     */
    itemColor?: AppListSpecifics_IconColor;
    /**
     * Whether the app was pinned to shelf by the user or not (apps can also be
     * pinned by other means such as enterprise policies).
     * The eventual consistency (a sufficient amount of time after the rollout)
     * promise here is for this field to be synced with the pin ordinal:
     * `item_pin_ordinal.IsValid() <=> is_user_pinned.has_value()`.
     * However, it's okay for this contract to be violated in the meantine.
     *
     *  * missing value indicates that either `item_pin_ordinal` is invalid or
     *    this field is new and hasn't yet been processed by sync.
     *  * `true` means that the app was pinned by the user.
     *    This definition is used in a relaxed way -- for instance, default
     *    OS apps that are shown in the shelf (like Chrome itself) also have this
     *    value set to true.
     *  * `false` means that the app was pinned by PinnedLauncherApps policy.
     *    Note that user pin has priority: if an app was first pinned by the user
     *    and then additionally specified in PinnedLauncherApps, this value will
     *    be set to true.
     *
     * @generated from field: optional bool is_user_pinned = 9;
     */
    isUserPinned: boolean;
    /**
     * Identifier for the app package of the item. Package Ids are stable and
     * globally unique across app platforms, whereas App Id stored in item_id is
     * not.
     *
     * @generated from field: optional string promise_package_id = 10;
     */
    promisePackageId: string;
};
/**
 * Describes the message sync_pb.AppListSpecifics.
 * Use `create(AppListSpecificsSchema)` to create a new message.
 */
export declare const AppListSpecificsSchema: GenMessage<AppListSpecifics>;
/**
 * @generated from message sync_pb.AppListSpecifics.IconColor
 */
export type AppListSpecifics_IconColor = Message<"sync_pb.AppListSpecifics.IconColor"> & {
    /**
     * The item icon's background color.
     *
     * @generated from field: optional sync_pb.AppListSpecifics.ColorGroup background_color = 1;
     */
    backgroundColor: AppListSpecifics_ColorGroup;
    /**
     * The item icon's hue.
     *
     * @generated from field: optional int32 hue = 2;
     */
    hue: number;
};
/**
 * Describes the message sync_pb.AppListSpecifics.IconColor.
 * Use `create(AppListSpecifics_IconColorSchema)` to create a new message.
 */
export declare const AppListSpecifics_IconColorSchema: GenMessage<AppListSpecifics_IconColor>;
/**
 * What type of item this is.
 *
 * @generated from enum sync_pb.AppListSpecifics.AppListItemType
 */
export declare enum AppListSpecifics_AppListItemType {
    /**
     * An app, whether a web app, Android app, etc.
     *
     * For bookmark apps (URL shortcuts), additional information such as their
     * URLs are kept in the AppSpecifics.bookmark_app_foobar fields.
     *
     * @generated from enum value: TYPE_APP = 1;
     */
    TYPE_APP = 1,
    /**
     * A request to remove any matching default installed apps.
     *
     * @generated from enum value: TYPE_REMOVE_DEFAULT_APP = 2;
     */
    TYPE_REMOVE_DEFAULT_APP = 2,
    /**
     * A folder containing entries whose |parent_id| matches |item_id|.
     *
     * @generated from enum value: TYPE_FOLDER = 3;
     */
    TYPE_FOLDER = 3,
    /**
     * Obsolete type, intended for URL shortcuts, that was never implemented.
     *
     * @generated from enum value: TYPE_OBSOLETE_URL = 4;
     */
    TYPE_OBSOLETE_URL = 4,
    /**
     * A "page break" item (Indicate creation of a new page in app list).
     *
     * @generated from enum value: TYPE_PAGE_BREAK = 5;
     */
    TYPE_PAGE_BREAK = 5
}
/**
 * Describes the enum sync_pb.AppListSpecifics.AppListItemType.
 */
export declare const AppListSpecifics_AppListItemTypeSchema: GenEnum<AppListSpecifics_AppListItemType>;
/**
 * The color groups used for grouping together icons by colors.
 *
 * @generated from enum sync_pb.AppListSpecifics.ColorGroup
 */
export declare enum AppListSpecifics_ColorGroup {
    /**
     * @generated from enum value: COLOR_EMPTY = 0;
     */
    COLOR_EMPTY = 0,
    /**
     * @generated from enum value: COLOR_WHITE = 1;
     */
    COLOR_WHITE = 1,
    /**
     * @generated from enum value: COLOR_RED = 2;
     */
    COLOR_RED = 2,
    /**
     * @generated from enum value: COLOR_ORANGE = 3;
     */
    COLOR_ORANGE = 3,
    /**
     * @generated from enum value: COLOR_YELLOW = 4;
     */
    COLOR_YELLOW = 4,
    /**
     * @generated from enum value: COLOR_GREEN = 5;
     */
    COLOR_GREEN = 5,
    /**
     * @generated from enum value: COLOR_BLUE = 6;
     */
    COLOR_BLUE = 6,
    /**
     * @generated from enum value: COLOR_MAGENTA = 7;
     */
    COLOR_MAGENTA = 7,
    /**
     * @generated from enum value: COLOR_BLACK = 8;
     */
    COLOR_BLACK = 8
}
/**
 * Describes the enum sync_pb.AppListSpecifics.ColorGroup.
 */
export declare const AppListSpecifics_ColorGroupSchema: GenEnum<AppListSpecifics_ColorGroup>;
//# sourceMappingURL=app_list_specifics_pb.d.ts.map