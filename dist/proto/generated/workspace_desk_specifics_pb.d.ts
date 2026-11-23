import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SyncEnums_DeviceFormFactor } from "./sync_enums_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file workspace_desk_specifics.proto.
 */
export declare const file_workspace_desk_specifics: GenFile;
/**
 * A workspace desk entry. This proto contains the fields synced to represent
 * a saved desk in user's workspace.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics
 */
export type WorkspaceDeskSpecifics = Message<"sync_pb.WorkspaceDeskSpecifics"> & {
    /**
     * A random unique identifier for each desk.
     * Required.
     *
     * @generated from field: optional string uuid = 1;
     */
    uuid: string;
    /**
     * The name of the desk being saved.
     *
     * @generated from field: optional string name = 2;
     */
    name: string;
    /**
     * The time this snapshot of desk was created.
     *
     * @generated from field: optional int64 created_time_windows_epoch_micros = 3;
     */
    createdTimeWindowsEpochMicros: bigint;
    /**
     * The time this snapshot of desk was updated.
     *
     * @generated from field: optional int64 updated_time_windows_epoch_micros = 5;
     */
    updatedTimeWindowsEpochMicros: bigint;
    /**
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.Desk desk = 4;
     */
    desk?: WorkspaceDeskSpecifics_Desk;
    /**
     * The type of a desk.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.DeskType desk_type = 6;
     */
    deskType: WorkspaceDeskSpecifics_DeskType;
    /**
     * The cache guid of the syncing client. Used to identify a unique device
     * that's syncing data.
     *
     * @generated from field: optional string client_cache_guid = 7;
     */
    clientCacheGuid: string;
    /**
     * The form factor of the device.
     *
     * @generated from field: optional sync_pb.SyncEnums.DeviceFormFactor device_form_factor = 8;
     */
    deviceFormFactor: SyncEnums_DeviceFormFactor;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.
 * Use `create(WorkspaceDeskSpecificsSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecificsSchema: GenMessage<WorkspaceDeskSpecifics>;
/**
 * Represent a snapshot of the information on a desk.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.Desk
 */
export type WorkspaceDeskSpecifics_Desk = Message<"sync_pb.WorkspaceDeskSpecifics.Desk"> & {
    /**
     * The apps in this template.
     *
     * @generated from field: repeated sync_pb.WorkspaceDeskSpecifics.App apps = 1;
     */
    apps: WorkspaceDeskSpecifics_App[];
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.Desk.
 * Use `create(WorkspaceDeskSpecifics_DeskSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_DeskSchema: GenMessage<WorkspaceDeskSpecifics_Desk>;
/**
 * A Launchable app in template.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.App
 */
export type WorkspaceDeskSpecifics_App = Message<"sync_pb.WorkspaceDeskSpecifics.App"> & {
    /**
     * The on-display location of this window.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.WindowBound window_bound = 1;
     */
    windowBound?: WorkspaceDeskSpecifics_WindowBound;
    /**
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.WindowState window_state = 2;
     */
    windowState: WorkspaceDeskSpecifics_WindowState;
    /**
     * The z-index of this app relative to other apps in this template.
     * App with larger z-index appears in front of app with smaller z-index.
     *
     * @generated from field: optional int32 z_index = 3;
     */
    zIndex: number;
    /**
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.AppOneOf app = 4;
     */
    app?: WorkspaceDeskSpecifics_AppOneOf;
    /**
     * window_id used to instantiate proto as a restore_data object.  The
     * restore_data object in question can be found at:
     * //components/app_restore/restore_data.h
     *
     * @generated from field: optional int32 window_id = 5;
     */
    windowId: number;
    /**
     * Display ID this app is on.
     *
     * @generated from field: optional int64 display_id = 6;
     */
    displayId: bigint;
    /**
     * State of a window before it was minimized. Empty/unset for non-minimized
     * windows.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.WindowState pre_minimized_window_state = 7;
     */
    preMinimizedWindowState: WorkspaceDeskSpecifics_WindowState;
    /**
     * Container this app was launched from.  Empty/unset for Arc apps.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.LaunchContainer container = 8;
     */
    container: WorkspaceDeskSpecifics_LaunchContainer;
    /**
     * Window open disposition, defines how a window opens. Empty/unset for Arc
     * apps.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.WindowOpenDisposition disposition = 9;
     */
    disposition: WorkspaceDeskSpecifics_WindowOpenDisposition;
    /**
     * Name of the app which is used by the browser to determine whether to
     * launch an app as an app or a tab. Does not contain a human readable name
     * but contains the app ID and a prefix.
     *
     * @generated from field: optional string app_name = 10;
     */
    appName: string;
    /**
     * Human readable title of the app.
     *
     * @generated from field: optional string title = 11;
     */
    title: string;
    /**
     * This is used to determine the size of a snapped window is in clamshell
     * mode. Empty/unset for non-snapped windows. This should be a value between
     * 0 and 100.
     *
     * @generated from field: optional int32 snap_percentage = 12;
     */
    snapPercentage: number;
    /**
     * The override URL can be specified by apps to override the default URL at
     * launch.
     *
     * @generated from field: optional string override_url = 13;
     */
    overrideUrl: string;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.App.
 * Use `create(WorkspaceDeskSpecifics_AppSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_AppSchema: GenMessage<WorkspaceDeskSpecifics_App>;
/**
 * @generated from message sync_pb.WorkspaceDeskSpecifics.AppOneOf
 */
export type WorkspaceDeskSpecifics_AppOneOf = Message<"sync_pb.WorkspaceDeskSpecifics.AppOneOf"> & {
    /**
     * @generated from oneof sync_pb.WorkspaceDeskSpecifics.AppOneOf.app
     */
    app: {
        /**
         * @generated from field: sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow browser_app_window = 1;
         */
        value: WorkspaceDeskSpecifics_BrowserAppWindow;
        case: "browserAppWindow";
    } | {
        /**
         * @generated from field: sync_pb.WorkspaceDeskSpecifics.ChromeApp chrome_app = 2;
         */
        value: WorkspaceDeskSpecifics_ChromeApp;
        case: "chromeApp";
    } | {
        /**
         * @generated from field: sync_pb.WorkspaceDeskSpecifics.ProgressiveWebApp progress_web_app = 3;
         */
        value: WorkspaceDeskSpecifics_ProgressiveWebApp;
        case: "progressWebApp";
    } | {
        /**
         * @generated from field: sync_pb.WorkspaceDeskSpecifics.ArcApp arc_app = 4;
         */
        value: WorkspaceDeskSpecifics_ArcApp;
        case: "arcApp";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.AppOneOf.
 * Use `create(WorkspaceDeskSpecifics_AppOneOfSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_AppOneOfSchema: GenMessage<WorkspaceDeskSpecifics_AppOneOf>;
/**
 * A Chrome or Lacros Browser app window.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow
 */
export type WorkspaceDeskSpecifics_BrowserAppWindow = Message<"sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow"> & {
    /**
     * The tabs in this browser window.
     *
     * @generated from field: repeated sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.BrowserAppTab tabs = 1;
     */
    tabs: WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTab[];
    /**
     * The index of the currently active tab.
     *
     * @generated from field: optional int32 active_tab_index = 2;
     */
    activeTabIndex: number;
    /**
     * Indicates whether to show as a dedicated app window.
     *
     * @generated from field: optional bool show_as_app = 3;
     */
    showAsApp: boolean;
    /**
     * Tab groups associated with this window.
     *
     * @generated from field: repeated sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.TabGroup tab_groups = 4;
     */
    tabGroups: WorkspaceDeskSpecifics_BrowserAppWindow_TabGroup[];
    /**
     * The index of the first non-pinned tab.
     *
     * @generated from field: optional int32 first_non_pinned_tab_index = 5;
     */
    firstNonPinnedTabIndex: number;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindowSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_BrowserAppWindowSchema: GenMessage<WorkspaceDeskSpecifics_BrowserAppWindow>;
/**
 * @generated from message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.BrowserAppTab
 */
export type WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTab = Message<"sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.BrowserAppTab"> & {
    /**
     * The last committed URL of the main frame of the tab.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * The title of the tab.
     *
     * @generated from field: optional string title = 2;
     */
    title: string;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.BrowserAppTab.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTabSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTabSchema: GenMessage<WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTab>;
/**
 * Structure representing a tab group associated with this window.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.TabGroup
 */
export type WorkspaceDeskSpecifics_BrowserAppWindow_TabGroup = Message<"sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.TabGroup"> & {
    /**
     * Zero-based index within the browser app tabs of the first tab in the
     * group.
     *
     * @generated from field: optional int32 first_index = 1;
     */
    firstIndex: number;
    /**
     * Zero-based Index wotjom the browser app tabs of the last tab in the
     * group.
     *
     * @generated from field: optional int32 last_index = 2;
     */
    lastIndex: number;
    /**
     * User readable title of the tab group.
     *
     * @generated from field: optional string title = 3;
     */
    title: string;
    /**
     * Color associated with this tab group.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.TabGroupColor color = 4;
     */
    color: WorkspaceDeskSpecifics_TabGroupColor;
    /**
     * Indicates whether the tab group is collapsed.
     *
     * @generated from field: optional bool is_collapsed = 5;
     */
    isCollapsed: boolean;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.TabGroup.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindow_TabGroupSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_BrowserAppWindow_TabGroupSchema: GenMessage<WorkspaceDeskSpecifics_BrowserAppWindow_TabGroup>;
/**
 * A Chrome App window.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.ChromeApp
 */
export type WorkspaceDeskSpecifics_ChromeApp = Message<"sync_pb.WorkspaceDeskSpecifics.ChromeApp"> & {
    /**
     * The Chrome App's App ID.
     *
     * @generated from field: optional string app_id = 1;
     */
    appId: string;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ChromeApp.
 * Use `create(WorkspaceDeskSpecifics_ChromeAppSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_ChromeAppSchema: GenMessage<WorkspaceDeskSpecifics_ChromeApp>;
/**
 * A PWA window.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.ProgressiveWebApp
 */
export type WorkspaceDeskSpecifics_ProgressiveWebApp = Message<"sync_pb.WorkspaceDeskSpecifics.ProgressiveWebApp"> & {
    /**
     * The PWA's App ID.
     *
     * @generated from field: optional string app_id = 1;
     */
    appId: string;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ProgressiveWebApp.
 * Use `create(WorkspaceDeskSpecifics_ProgressiveWebAppSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_ProgressiveWebAppSchema: GenMessage<WorkspaceDeskSpecifics_ProgressiveWebApp>;
/**
 * An Arc App window.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.ArcApp
 */
export type WorkspaceDeskSpecifics_ArcApp = Message<"sync_pb.WorkspaceDeskSpecifics.ArcApp"> & {
    /**
     * The Arc App's ID.
     *
     * @generated from field: optional string app_id = 1;
     */
    appId: string;
    /**
     * Arc window information.  This maps
     * to ArcExtraInfo in a WindowInfo struct.
     *
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize minimum_size = 2;
     */
    minimumSize?: WorkspaceDeskSpecifics_ArcApp_WindowSize;
    /**
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize maximum_size = 3;
     */
    maximumSize?: WorkspaceDeskSpecifics_ArcApp_WindowSize;
    /**
     * @generated from field: optional sync_pb.WorkspaceDeskSpecifics.WindowBound bounds_in_root = 5;
     */
    boundsInRoot?: WorkspaceDeskSpecifics_WindowBound;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ArcApp.
 * Use `create(WorkspaceDeskSpecifics_ArcAppSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_ArcAppSchema: GenMessage<WorkspaceDeskSpecifics_ArcApp>;
/**
 * maps to gfx::Size.  Width of the window, including the frame,
 * in pixels.
 *
 * @generated from message sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize
 */
export type WorkspaceDeskSpecifics_ArcApp_WindowSize = Message<"sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize"> & {
    /**
     * @generated from field: optional int32 width = 1;
     */
    width: number;
    /**
     * @generated from field: optional int32 height = 2;
     */
    height: number;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize.
 * Use `create(WorkspaceDeskSpecifics_ArcApp_WindowSizeSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_ArcApp_WindowSizeSchema: GenMessage<WorkspaceDeskSpecifics_ArcApp_WindowSize>;
/**
 * @generated from message sync_pb.WorkspaceDeskSpecifics.WindowBound
 */
export type WorkspaceDeskSpecifics_WindowBound = Message<"sync_pb.WorkspaceDeskSpecifics.WindowBound"> & {
    /**
     * The offset of the window from the top edge of the screen in pixels.
     *
     * @generated from field: optional int32 top = 1;
     */
    top: number;
    /**
     * The offset of the window from the left edge of the screen in pixels.
     *
     * @generated from field: optional int32 left = 2;
     */
    left: number;
    /**
     * The width of the window, including the frame, in pixels.
     *
     * @generated from field: optional int32 width = 3;
     */
    width: number;
    /**
     * The height of the window, including the frame, in pixels.
     *
     * @generated from field: optional int32 height = 4;
     */
    height: number;
};
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.WindowBound.
 * Use `create(WorkspaceDeskSpecifics_WindowBoundSchema)` to create a new message.
 */
export declare const WorkspaceDeskSpecifics_WindowBoundSchema: GenMessage<WorkspaceDeskSpecifics_WindowBound>;
/**
 * Enumeration for the container an app was launched from as used by
 * (components/services/app_services/public/mojom/types.mojom:490).
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.LaunchContainer
 */
export declare enum WorkspaceDeskSpecifics_LaunchContainer {
    /**
     * @generated from enum value: LAUNCH_CONTAINER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: LAUNCH_CONTAINER_WINDOW = 1;
     */
    WINDOW = 1,
    /**
     * @generated from enum value: LAUNCH_CONTAINER_PANEL_DEPRECATED = 2;
     */
    PANEL_DEPRECATED = 2,
    /**
     * @generated from enum value: LAUNCH_CONTAINER_TAB = 3;
     */
    TAB = 3,
    /**
     * @generated from enum value: LAUNCH_CONTAINER_NONE = 4;
     */
    NONE = 4
}
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.LaunchContainer.
 */
export declare const WorkspaceDeskSpecifics_LaunchContainerSchema: GenEnum<WorkspaceDeskSpecifics_LaunchContainer>;
/**
 * The state of a generic window.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.WindowState
 */
export declare enum WorkspaceDeskSpecifics_WindowState {
    /**
     * @generated from enum value: UNKNOWN_WINDOW_STATE = 0;
     */
    UNKNOWN_WINDOW_STATE = 0,
    /**
     * Normal window state (not minimized, maximized, or fullscreen).
     *
     * @generated from enum value: NORMAL = 1;
     */
    NORMAL = 1,
    /**
     * Minimized window state.
     *
     * @generated from enum value: MINIMIZED = 2;
     */
    MINIMIZED = 2,
    /**
     * Maximized window state.
     *
     * @generated from enum value: MAXIMIZED = 3;
     */
    MAXIMIZED = 3,
    /**
     * Fullscreen window state.
     *
     * @generated from enum value: FULLSCREEN = 4;
     */
    FULLSCREEN = 4,
    /**
     * Snapped to primary half of the screen. Primary half is on the left in
     * landscape screen orientation and top in portrait screen orientation.
     *
     * @generated from enum value: PRIMARY_SNAPPED = 5;
     */
    PRIMARY_SNAPPED = 5,
    /**
     * Snapped to secondary half of the screen. Secondary half is on the right
     * in landscape screen orientation and bottom in portrait screen
     * orientation.
     *
     * @generated from enum value: SECONDARY_SNAPPED = 6;
     */
    SECONDARY_SNAPPED = 6,
    /**
     * Floated window state.
     *
     * @generated from enum value: FLOATED = 7;
     */
    FLOATED = 7
}
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.WindowState.
 */
export declare const WorkspaceDeskSpecifics_WindowStateSchema: GenEnum<WorkspaceDeskSpecifics_WindowState>;
/**
 * Enumeration for how a window opens.  Maps to base::WindowOpenDisposition.
 * (found in ui/base/window_open_disposition.h:10).  Does not include
 * MAX_VALUE as MAX_VALUE is equivalent to NEW_PICTURE_IN_PICTURE.  All
 * comments are copied verbatim from aforementioned header.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.WindowOpenDisposition
 */
export declare enum WorkspaceDeskSpecifics_WindowOpenDisposition {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CURRENT_TAB = 1;
     */
    CURRENT_TAB = 1,
    /**
     * Indicates that only one tab with the URL shoul exist in the same window.
     *
     * @generated from enum value: SINGLETON_TAB = 2;
     */
    SINGLETON_TAB = 2,
    /**
     * @generated from enum value: NEW_FOREGROUND_TAB = 3;
     */
    NEW_FOREGROUND_TAB = 3,
    /**
     * @generated from enum value: NEW_BACKGROUND_TAB = 4;
     */
    NEW_BACKGROUND_TAB = 4,
    /**
     * @generated from enum value: NEW_POPUP = 5;
     */
    NEW_POPUP = 5,
    /**
     * @generated from enum value: NEW_WINDOW = 6;
     */
    NEW_WINDOW = 6,
    /**
     * @generated from enum value: SAVE_TO_DISK = 7;
     */
    SAVE_TO_DISK = 7,
    /**
     * @generated from enum value: OFF_THE_RECORD = 8;
     */
    OFF_THE_RECORD = 8,
    /**
     * @generated from enum value: IGNORE_ACTION = 9;
     */
    IGNORE_ACTION = 9,
    /**
     * Activates an existing tab containing the URL, rather than navigating.
     * This is similar to SINGLETON_TAB, but searches across all windows
     * from the current profile and anymity (instead of tjust the current one);
     * closes the current tab on switching if the current ta was the NTP with
     * no session history; and behaves like CURRENT_TAB instead of
     * NEW_FOREGROUND_TAB when no existing tab is found.
     *
     * @generated from enum value: SWITCH_TO_TAB = 10;
     */
    SWITCH_TO_TAB = 10,
    /**
     * creates a new document picture-in-picture window showing a child WebView.
     *
     * @generated from enum value: NEW_PICTURE_IN_PICTURE = 11;
     */
    NEW_PICTURE_IN_PICTURE = 11
}
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.WindowOpenDisposition.
 */
export declare const WorkspaceDeskSpecifics_WindowOpenDispositionSchema: GenEnum<WorkspaceDeskSpecifics_WindowOpenDisposition>;
/**
 * Enumerates the type of desk, namely to differentiate desks between desks
 * saved for desk templates and desks saved for save and recall.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.DeskType
 */
export declare enum WorkspaceDeskSpecifics_DeskType {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    UNKNOWN_TYPE = 0,
    /**
     * @generated from enum value: TEMPLATE = 1;
     */
    TEMPLATE = 1,
    /**
     * @generated from enum value: SAVE_AND_RECALL = 2;
     */
    SAVE_AND_RECALL = 2,
    /**
     * @generated from enum value: FLOATING_WORKSPACE = 3;
     */
    FLOATING_WORKSPACE = 3
}
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.DeskType.
 */
export declare const WorkspaceDeskSpecifics_DeskTypeSchema: GenEnum<WorkspaceDeskSpecifics_DeskType>;
/**
 * Enumerates the possible colors that a tab group can have.  This mirrors
 * the enumeration that can be found in
 * components/tab_groups/tab_group_color.h
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.TabGroupColor
 */
export declare enum WorkspaceDeskSpecifics_TabGroupColor {
    /**
     * @generated from enum value: UNKNOWN_COLOR = 0;
     */
    UNKNOWN_COLOR = 0,
    /**
     * @generated from enum value: GREY = 1;
     */
    GREY = 1,
    /**
     * @generated from enum value: BLUE = 2;
     */
    BLUE = 2,
    /**
     * @generated from enum value: RED = 3;
     */
    RED = 3,
    /**
     * @generated from enum value: YELLOW = 4;
     */
    YELLOW = 4,
    /**
     * @generated from enum value: GREEN = 5;
     */
    GREEN = 5,
    /**
     * @generated from enum value: PINK = 6;
     */
    PINK = 6,
    /**
     * @generated from enum value: PURPLE = 7;
     */
    PURPLE = 7,
    /**
     * @generated from enum value: CYAN = 8;
     */
    CYAN = 8,
    /**
     * @generated from enum value: ORANGE = 9;
     */
    ORANGE = 9
}
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.TabGroupColor.
 */
export declare const WorkspaceDeskSpecifics_TabGroupColorSchema: GenEnum<WorkspaceDeskSpecifics_TabGroupColor>;
//# sourceMappingURL=workspace_desk_specifics_pb.d.ts.map