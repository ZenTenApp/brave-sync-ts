import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SyncEnums_BrowserType, SyncEnums_DeviceFormFactor, SyncEnums_DeviceType, SyncEnums_PageTransition, SyncEnums_PageTransitionRedirectType, SyncEnums_PasswordState } from "./sync_enums_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file session_specifics.proto.
 */
export declare const file_session_specifics: GenFile;
/**
 * @generated from message sync_pb.SessionSpecifics
 */
export type SessionSpecifics = Message<"sync_pb.SessionSpecifics"> & {
    /**
     * Unique id for the client. M89 and higher use sync's cache GUID (client ID)
     * to populate this tag for *new* sessions.
     *
     * @generated from field: optional string session_tag = 1;
     */
    sessionTag: string;
    /**
     * @generated from field: optional sync_pb.SessionHeader header = 2;
     */
    header?: SessionHeader;
    /**
     * @generated from field: optional sync_pb.SessionTab tab = 3;
     */
    tab?: SessionTab;
    /**
     * The local tab id used by sync. Unique across all nodes for that client.
     *
     * @generated from field: optional int32 tab_node_id = 4 [default = -1];
     */
    tabNodeId: number;
};
/**
 * Describes the message sync_pb.SessionSpecifics.
 * Use `create(SessionSpecificsSchema)` to create a new message.
 */
export declare const SessionSpecificsSchema: GenMessage<SessionSpecifics>;
/**
 * Properties of session sync objects.
 *
 * @generated from message sync_pb.SessionHeader
 */
export type SessionHeader = Message<"sync_pb.SessionHeader"> & {
    /**
     * Each session is composed of windows.
     *
     * @generated from field: repeated sync_pb.SessionWindow window = 2;
     */
    window: SessionWindow[];
    /**
     * A non-unique but human-readable name to describe this client.
     *
     * @generated from field: optional string client_name = 3;
     */
    clientName: string;
    /**
     * The form factor of device.
     *
     * @generated from field: optional sync_pb.SyncEnums.DeviceFormFactor device_form_factor = 5;
     */
    deviceFormFactor: SyncEnums_DeviceFormFactor;
    /**
     * The type of device.
     * Mandatory until M115. Replaced by device_form_factor afterwards, but still
     * populated for backward compatibility.
     *
     * @generated from field: optional sync_pb.SyncEnums.DeviceType device_type = 4 [deprecated = true];
     * @deprecated
     */
    deviceType: SyncEnums_DeviceType;
};
/**
 * Describes the message sync_pb.SessionHeader.
 * Use `create(SessionHeaderSchema)` to create a new message.
 */
export declare const SessionHeaderSchema: GenMessage<SessionHeader>;
/**
 * @generated from message sync_pb.SessionWindow
 */
export type SessionWindow = Message<"sync_pb.SessionWindow"> & {
    /**
     * Unique (to the owner) id for this window.
     *
     * @generated from field: optional int32 window_id = 1;
     */
    windowId: number;
    /**
     * Index of the selected tab in tabs; -1 if no tab is selected.
     *
     * @generated from field: optional int32 selected_tab_index = 2 [default = -1];
     */
    selectedTabIndex: number;
    /**
     * Type of the window.
     *
     * @generated from field: optional sync_pb.SyncEnums.BrowserType browser_type = 3 [default = TYPE_TABBED];
     */
    browserType: SyncEnums_BrowserType;
    /**
     * The tabs that compose a window (correspond to tab id's).
     *
     * @generated from field: repeated int32 tab = 4;
     */
    tab: number[];
};
/**
 * Describes the message sync_pb.SessionWindow.
 * Use `create(SessionWindowSchema)` to create a new message.
 */
export declare const SessionWindowSchema: GenMessage<SessionWindow>;
/**
 * @generated from message sync_pb.SessionTab
 */
export type SessionTab = Message<"sync_pb.SessionTab"> & {
    /**
     * Unique (to the owner) id for this tab.
     *
     * @generated from field: optional int32 tab_id = 1 [default = -1];
     */
    tabId: number;
    /**
     * The unique id for the window this tab belongs to.
     *
     * @generated from field: optional int32 window_id = 2;
     */
    windowId: number;
    /**
     * Visual index of the tab within its window. There may be gaps in these
     * values.
     *
     * @generated from field: optional int32 tab_visual_index = 3 [default = -1];
     */
    tabVisualIndex: number;
    /**
     * Identifies the index of the current navigation in navigations. For
     * example, if this is 2 it means the current navigation is navigations[2].
     *
     * @generated from field: optional int32 current_navigation_index = 4 [default = -1];
     */
    currentNavigationIndex: number;
    /**
     * True if the tab is pinned.
     *
     * @generated from field: optional bool pinned = 5 [default = false];
     */
    pinned: boolean;
    /**
     * If non-empty, this tab is an app tab and this is the id of the extension.
     *
     * @generated from field: optional string extension_app_id = 6;
     */
    extensionAppId: string;
    /**
     * Tabs are navigated, and the navigation data is here.
     *
     * @generated from field: repeated sync_pb.TabNavigation navigation = 7;
     */
    navigation: TabNavigation[];
    /**
     * @generated from field: optional sync_pb.SyncEnums.BrowserType browser_type = 13;
     */
    browserType: SyncEnums_BrowserType;
    /**
     * Timestamp for when this tab was last activated.
     * Corresponds to WebContents::GetLastActiveTime().
     *
     * @generated from field: optional int64 last_active_time_unix_epoch_millis = 14;
     */
    lastActiveTimeUnixEpochMillis: bigint;
    /**
     * The favicon for the current url the tab is displaying. Either empty
     * or a valid PNG encoded favicon.
     *
     * @generated from field: optional bytes favicon = 8 [deprecated = true];
     * @deprecated
     */
    favicon: Uint8Array;
    /**
     * @generated from field: optional sync_pb.SessionTab.FaviconType favicon_type = 9 [deprecated = true];
     * @deprecated
     */
    faviconType: SessionTab_FaviconType;
    /**
     * The url of the actual favicon (as opposed to the page using the favicon).
     *
     * @generated from field: optional string favicon_source = 11 [deprecated = true];
     * @deprecated
     */
    faviconSource: string;
    /**
     * Ids of the currently assigned variations which should be sent to sync.
     *
     * @generated from field: repeated uint64 variation_id = 12 [deprecated = true];
     * @deprecated
     */
    variationId: bigint[];
};
/**
 * Describes the message sync_pb.SessionTab.
 * Use `create(SessionTabSchema)` to create a new message.
 */
export declare const SessionTabSchema: GenMessage<SessionTab>;
/**
 * The type of favicon. For now only normal web favicons are supported.
 *
 * @generated from enum sync_pb.SessionTab.FaviconType
 */
export declare enum SessionTab_FaviconType {
    /**
     * @generated from enum value: TYPE_WEB_FAVICON = 1;
     */
    TYPE_WEB_FAVICON = 1
}
/**
 * Describes the enum sync_pb.SessionTab.FaviconType.
 */
export declare const SessionTab_FaviconTypeSchema: GenEnum<SessionTab_FaviconType>;
/**
 * @generated from message sync_pb.TabNavigation
 */
export type TabNavigation = Message<"sync_pb.TabNavigation"> & {
    /**
     * The virtual URL, when nonempty, will override the actual URL of the page
     * when we display it to the user.
     *
     * @generated from field: optional string virtual_url = 2;
     */
    virtualUrl: string;
    /**
     * The referring URL, which can be empty.
     *
     * @generated from field: optional string referrer = 3;
     */
    referrer: string;
    /**
     * The title of the page.
     *
     * @generated from field: optional string title = 4;
     */
    title: string;
    /**
     * The core transition type.
     *
     * @generated from field: optional sync_pb.SyncEnums.PageTransition page_transition = 6 [default = LINK];
     */
    pageTransition: SyncEnums_PageTransition;
    /**
     * If this transition was triggered by a redirect, the redirect type.
     *
     * @generated from field: optional sync_pb.SyncEnums.PageTransitionRedirectType redirect_type = 7;
     */
    redirectType: SyncEnums_PageTransitionRedirectType;
    /**
     * The unique navigation id (within this client).
     *
     * @generated from field: optional int32 unique_id = 8;
     */
    uniqueId: number;
    /**
     * Timestamp for when this navigation last occurred (in client time).
     * If the user goes back/forward in history the timestamp may refresh.
     *
     * @generated from field: optional int64 timestamp_msec = 9;
     */
    timestampMsec: bigint;
    /**
     * User used the Forward or Back button to navigate among browsing history.
     *
     * @generated from field: optional bool navigation_forward_back = 10;
     */
    navigationForwardBack: boolean;
    /**
     * User used the address bar to trigger this navigation.
     *
     * @generated from field: optional bool navigation_from_address_bar = 11;
     */
    navigationFromAddressBar: boolean;
    /**
     * User is navigating to the home page.
     *
     * @generated from field: optional bool navigation_home_page = 12;
     */
    navigationHomePage: boolean;
    /**
     * The id for this navigation, which is globally unique with high
     * probability.
     *
     * @generated from field: optional int64 global_id = 15;
     */
    globalId: bigint;
    /**
     * The favicon url associated with this page.
     *
     * @generated from field: optional string favicon_url = 17;
     */
    faviconUrl: string;
    /**
     * The status code from the last navigation.
     *
     * @generated from field: optional int32 http_status_code = 20;
     */
    httpStatusCode: number;
    /**
     * Correct referrer policy. Valid enums are defined in
     * third_party/WebKit/public/platform/WebReferrerPolicy.h.
     *
     * @generated from field: optional int32 correct_referrer_policy = 25 [default = 1];
     */
    correctReferrerPolicy: number;
    /**
     * Whether the Password Manager saw a password field on the page.
     *
     * @generated from field: optional sync_pb.SyncEnums.PasswordState password_state = 26;
     */
    passwordState: SyncEnums_PasswordState;
    /**
     * The start/end of a redirect chain. Deprecated in M108 because they were
     * always set to false in practice, and don't make sense in the first place -
     * this message corresponds to a complete chain.
     *
     * @generated from field: optional bool navigation_chain_start = 13 [deprecated = true];
     * @deprecated
     */
    navigationChainStart: boolean;
    /**
     * @generated from field: optional bool navigation_chain_end = 14 [deprecated = true];
     * @deprecated
     */
    navigationChainEnd: boolean;
    /**
     * Search terms extracted from the URL. Deprecated in M64.
     *
     * @generated from field: optional string search_terms = 16 [deprecated = true];
     * @deprecated
     */
    searchTerms: string;
    /**
     * Whether access to the URL was allowed or blocked. Deprecated in M121
     * because it was unused.
     *
     * @generated from field: optional sync_pb.TabNavigation.BlockedState blocked_state = 18 [default = STATE_ALLOWED, deprecated = true];
     * @deprecated
     */
    blockedState: TabNavigation_BlockedState;
    /**
     * Referrer policy. Old, broken value. Deprecated in M61.
     *
     * @generated from field: optional int32 obsolete_referrer_policy = 21 [deprecated = true];
     * @deprecated
     */
    obsoleteReferrerPolicy: number;
    /**
     * True if created from restored navigation entry that hasn't been loaded.
     * Deprecated in M121 because it was unused.
     *
     * @generated from field: optional bool is_restored = 22 [deprecated = true];
     * @deprecated
     */
    isRestored: boolean;
    /**
     * The chain of redirections for this navigation, from the original URL
     * through the last URL that redirected. Deprecated in M121 because it was
     * unused.
     *
     * @generated from field: repeated sync_pb.NavigationRedirect navigation_redirect = 23 [deprecated = true];
     * @deprecated
     */
    navigationRedirect: NavigationRedirect[];
    /**
     * The last URL traversed when different from the virtual_url. Deprecated in
     * M121 because it was unused.
     *
     * @generated from field: optional string last_navigation_redirect_url = 24 [deprecated = true];
     * @deprecated
     */
    lastNavigationRedirectUrl: string;
    /**
     * The id for the task associated with this navigation, which is globally
     * unique with high probability. Deprecated in M121 because it was unused.
     *
     * @generated from field: optional int64 task_id = 27 [deprecated = true];
     * @deprecated
     */
    taskId: bigint;
    /**
     * Task ids of all ancestor navigations, which can be from other tabs, from
     * root to parent. Deprecated in M121 because it was unused.
     *
     * @generated from field: repeated int64 ancestor_task_id = 28 [deprecated = true];
     * @deprecated
     */
    ancestorTaskId: bigint[];
    /**
     * When a history entry is replaced (e.g. history.replaceState()), this
     * contained some information about the entry prior to being replaced.
     * Deprecated in M121 because it was unused.
     *
     * @generated from field: optional sync_pb.ReplacedNavigation replaced_navigation = 29 [deprecated = true];
     * @deprecated
     */
    replacedNavigation?: ReplacedNavigation;
    /**
     * The page language as determined by its textual content. An ISO 639 language
     * code (two letters, except for Chinese where a localization is necessary).
     * Deprecated in M121 because it was unused.
     *
     * @generated from field: optional string page_language = 30 [deprecated = true];
     * @deprecated
     */
    pageLanguage: string;
};
/**
 * Describes the message sync_pb.TabNavigation.
 * Use `create(TabNavigationSchema)` to create a new message.
 */
export declare const TabNavigationSchema: GenMessage<TabNavigation>;
/**
 * @generated from enum sync_pb.TabNavigation.BlockedState
 */
export declare enum TabNavigation_BlockedState {
    /**
     * @generated from enum value: STATE_ALLOWED = 1;
     */
    STATE_ALLOWED = 1,
    /**
     * @generated from enum value: STATE_BLOCKED = 2;
     */
    STATE_BLOCKED = 2
}
/**
 * Describes the enum sync_pb.TabNavigation.BlockedState.
 */
export declare const TabNavigation_BlockedStateSchema: GenEnum<TabNavigation_BlockedState>;
/**
 * Navigation information for a single redirection within a single navigation.
 *
 * @generated from message sync_pb.NavigationRedirect
 */
export type NavigationRedirect = Message<"sync_pb.NavigationRedirect"> & {
    /**
     * A URL that redirected while navigating to the virtual_url.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
};
/**
 * Describes the message sync_pb.NavigationRedirect.
 * Use `create(NavigationRedirectSchema)` to create a new message.
 */
export declare const NavigationRedirectSchema: GenMessage<NavigationRedirect>;
/**
 * Subset of TabNavigation fields representing a navigation that was later
 * replaced in history (e.g. history.replaceState()), which allows tracking
 * information about the original navigation prior to the first replacement.
 *
 * @generated from message sync_pb.ReplacedNavigation
 */
export type ReplacedNavigation = Message<"sync_pb.ReplacedNavigation"> & {
    /**
     * @generated from field: optional string first_committed_url = 1;
     */
    firstCommittedUrl: string;
    /**
     * @generated from field: optional int64 first_timestamp_msec = 2;
     */
    firstTimestampMsec: bigint;
    /**
     * @generated from field: optional sync_pb.SyncEnums.PageTransition first_page_transition = 3;
     */
    firstPageTransition: SyncEnums_PageTransition;
};
/**
 * Describes the message sync_pb.ReplacedNavigation.
 * Use `create(ReplacedNavigationSchema)` to create a new message.
 */
export declare const ReplacedNavigationSchema: GenMessage<ReplacedNavigation>;
//# sourceMappingURL=session_specifics_pb.d.ts.map