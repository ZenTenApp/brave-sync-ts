// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for desks on Chrome OS.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_sync_enums } from "./sync_enums_pb";
/**
 * Describes the file workspace_desk_specifics.proto.
 */
export const file_workspace_desk_specifics = /*@__PURE__*/ fileDesc("Ch53b3Jrc3BhY2VfZGVza19zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIitRcKFldvcmtzcGFjZURlc2tTcGVjaWZpY3MSDAoEdXVpZBgBIAEoCRIMCgRuYW1lGAIgASgJEikKIWNyZWF0ZWRfdGltZV93aW5kb3dzX2Vwb2NoX21pY3JvcxgDIAEoAxIpCiF1cGRhdGVkX3RpbWVfd2luZG93c19lcG9jaF9taWNyb3MYBSABKAMSMgoEZGVzaxgEIAEoCzIkLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5EZXNrEjsKCWRlc2tfdHlwZRgGIAEoDjIoLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5EZXNrVHlwZRIZChFjbGllbnRfY2FjaGVfZ3VpZBgHIAEoCRI/ChJkZXZpY2VfZm9ybV9mYWN0b3IYCCABKA4yIy5zeW5jX3BiLlN5bmNFbnVtcy5EZXZpY2VGb3JtRmFjdG9yGjkKBERlc2sSMQoEYXBwcxgBIAMoCzIjLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5BcHAaqwQKA0FwcBJBCgx3aW5kb3dfYm91bmQYASABKAsyKy5zeW5jX3BiLldvcmtzcGFjZURlc2tTcGVjaWZpY3MuV2luZG93Qm91bmQSQQoMd2luZG93X3N0YXRlGAIgASgOMisuc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLldpbmRvd1N0YXRlEg8KB3pfaW5kZXgYAyABKAUSNQoDYXBwGAQgASgLMiguc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLkFwcE9uZU9mEhEKCXdpbmRvd19pZBgFIAEoBRISCgpkaXNwbGF5X2lkGAYgASgDEk8KGnByZV9taW5pbWl6ZWRfd2luZG93X3N0YXRlGAcgASgOMisuc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLldpbmRvd1N0YXRlEkIKCWNvbnRhaW5lchgIIAEoDjIvLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5MYXVuY2hDb250YWluZXISSgoLZGlzcG9zaXRpb24YCSABKA4yNS5zeW5jX3BiLldvcmtzcGFjZURlc2tTcGVjaWZpY3MuV2luZG93T3BlbkRpc3Bvc2l0aW9uEhAKCGFwcF9uYW1lGAogASgJEg0KBXRpdGxlGAsgASgJEhcKD3NuYXBfcGVyY2VudGFnZRgMIAEoBRIUCgxvdmVycmlkZV91cmwYDSABKAkarAIKCEFwcE9uZU9mEk4KEmJyb3dzZXJfYXBwX3dpbmRvdxgBIAEoCzIwLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5Ccm93c2VyQXBwV2luZG93SAASPwoKY2hyb21lX2FwcBgCIAEoCzIpLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5DaHJvbWVBcHBIABJNChBwcm9ncmVzc193ZWJfYXBwGAMgASgLMjEuc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLlByb2dyZXNzaXZlV2ViQXBwSAASOQoHYXJjX2FwcBgEIAEoCzImLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5BcmNBcHBIAEIFCgNhcHAayAMKEEJyb3dzZXJBcHBXaW5kb3cSTAoEdGFicxgBIAMoCzI+LnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5Ccm93c2VyQXBwV2luZG93LkJyb3dzZXJBcHBUYWISGAoQYWN0aXZlX3RhYl9pbmRleBgCIAEoBRITCgtzaG93X2FzX2FwcBgDIAEoCBJNCgp0YWJfZ3JvdXBzGAQgAygLMjkuc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLkJyb3dzZXJBcHBXaW5kb3cuVGFiR3JvdXASIgoaZmlyc3Rfbm9uX3Bpbm5lZF90YWJfaW5kZXgYBSABKAUaKwoNQnJvd3NlckFwcFRhYhILCgN1cmwYASABKAkSDQoFdGl0bGUYAiABKAkalgEKCFRhYkdyb3VwEhMKC2ZpcnN0X2luZGV4GAEgASgFEhIKCmxhc3RfaW5kZXgYAiABKAUSDQoFdGl0bGUYAyABKAkSPAoFY29sb3IYBCABKA4yLS5zeW5jX3BiLldvcmtzcGFjZURlc2tTcGVjaWZpY3MuVGFiR3JvdXBDb2xvchIUCgxpc19jb2xsYXBzZWQYBSABKAgaIQoJQ2hyb21lQXBwEg4KBmFwcF9pZBgBIAEoCUoECAIQAxopChFQcm9ncmVzc2l2ZVdlYkFwcBIOCgZhcHBfaWQYASABKAlKBAgCEAMaogIKBkFyY0FwcBIOCgZhcHBfaWQYASABKAkSRwoMbWluaW11bV9zaXplGAIgASgLMjEuc3luY19wYi5Xb3Jrc3BhY2VEZXNrU3BlY2lmaWNzLkFyY0FwcC5XaW5kb3dTaXplEkcKDG1heGltdW1fc2l6ZRgDIAEoCzIxLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5BcmNBcHAuV2luZG93U2l6ZRJDCg5ib3VuZHNfaW5fcm9vdBgFIAEoCzIrLnN5bmNfcGIuV29ya3NwYWNlRGVza1NwZWNpZmljcy5XaW5kb3dCb3VuZBorCgpXaW5kb3dTaXplEg0KBXdpZHRoGAEgASgFEg4KBmhlaWdodBgCIAEoBUoECAQQBRpHCgtXaW5kb3dCb3VuZBILCgN0b3AYASABKAUSDAoEbGVmdBgCIAEoBRINCgV3aWR0aBgDIAEoBRIOCgZoZWlnaHQYBCABKAUirAEKD0xhdW5jaENvbnRhaW5lchIgChxMQVVOQ0hfQ09OVEFJTkVSX1VOU1BFQ0lGSUVEEAASGwoXTEFVTkNIX0NPTlRBSU5FUl9XSU5ET1cQARIlCiFMQVVOQ0hfQ09OVEFJTkVSX1BBTkVMX0RFUFJFQ0FURUQQAhIYChRMQVVOQ0hfQ09OVEFJTkVSX1RBQhADEhkKFUxBVU5DSF9DT05UQUlORVJfTk9ORRAEIpoBCgtXaW5kb3dTdGF0ZRIYChRVTktOT1dOX1dJTkRPV19TVEFURRAAEgoKBk5PUk1BTBABEg0KCU1JTklNSVpFRBACEg0KCU1BWElNSVpFRBADEg4KCkZVTExTQ1JFRU4QBBITCg9QUklNQVJZX1NOQVBQRUQQBRIVChFTRUNPTkRBUllfU05BUFBFRBAGEgsKB0ZMT0FURUQQByL/AQoVV2luZG93T3BlbkRpc3Bvc2l0aW9uEgsKB1VOS05PV04QABIPCgtDVVJSRU5UX1RBQhABEhEKDVNJTkdMRVRPTl9UQUIQAhIWChJORVdfRk9SRUdST1VORF9UQUIQAxIWChJORVdfQkFDS0dST1VORF9UQUIQBBINCglORVdfUE9QVVAQBRIOCgpORVdfV0lORE9XEAYSEAoMU0FWRV9UT19ESVNLEAcSEgoOT0ZGX1RIRV9SRUNPUkQQCBIRCg1JR05PUkVfQUNUSU9OEAkSEQoNU1dJVENIX1RPX1RBQhAKEhoKFk5FV19QSUNUVVJFX0lOX1BJQ1RVUkUQCyJXCghEZXNrVHlwZRIQCgxVTktOT1dOX1RZUEUQABIMCghURU1QTEFURRABEhMKD1NBVkVfQU5EX1JFQ0FMTBACEhYKEkZMT0FUSU5HX1dPUktTUEFDRRADIoIBCg1UYWJHcm91cENvbG9yEhEKDVVOS05PV05fQ09MT1IQABIICgRHUkVZEAESCAoEQkxVRRACEgcKA1JFRBADEgoKBllFTExPVxAEEgkKBUdSRUVOEAUSCAoEUElOSxAGEgoKBlBVUlBMRRAHEggKBENZQU4QCBIKCgZPUkFOR0UQCVIRY3JlYXRlZF90aW1lX3VzZWNCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg", [file_sync_enums]);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.
 * Use `create(WorkspaceDeskSpecificsSchema)` to create a new message.
 */
export const WorkspaceDeskSpecificsSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.Desk.
 * Use `create(WorkspaceDeskSpecifics_DeskSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_DeskSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 0);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.App.
 * Use `create(WorkspaceDeskSpecifics_AppSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_AppSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 1);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.AppOneOf.
 * Use `create(WorkspaceDeskSpecifics_AppOneOfSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_AppOneOfSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 2);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindowSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_BrowserAppWindowSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 3);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.BrowserAppTab.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTabSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_BrowserAppWindow_BrowserAppTabSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 3, 0);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.BrowserAppWindow.TabGroup.
 * Use `create(WorkspaceDeskSpecifics_BrowserAppWindow_TabGroupSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_BrowserAppWindow_TabGroupSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 3, 1);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ChromeApp.
 * Use `create(WorkspaceDeskSpecifics_ChromeAppSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_ChromeAppSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 4);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ProgressiveWebApp.
 * Use `create(WorkspaceDeskSpecifics_ProgressiveWebAppSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_ProgressiveWebAppSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 5);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ArcApp.
 * Use `create(WorkspaceDeskSpecifics_ArcAppSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_ArcAppSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 6);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.ArcApp.WindowSize.
 * Use `create(WorkspaceDeskSpecifics_ArcApp_WindowSizeSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_ArcApp_WindowSizeSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 6, 0);
/**
 * Describes the message sync_pb.WorkspaceDeskSpecifics.WindowBound.
 * Use `create(WorkspaceDeskSpecifics_WindowBoundSchema)` to create a new message.
 */
export const WorkspaceDeskSpecifics_WindowBoundSchema = /*@__PURE__*/ messageDesc(file_workspace_desk_specifics, 0, 7);
/**
 * Enumeration for the container an app was launched from as used by
 * (components/services/app_services/public/mojom/types.mojom:490).
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.LaunchContainer
 */
export var WorkspaceDeskSpecifics_LaunchContainer;
(function (WorkspaceDeskSpecifics_LaunchContainer) {
    /**
     * @generated from enum value: LAUNCH_CONTAINER_UNSPECIFIED = 0;
     */
    WorkspaceDeskSpecifics_LaunchContainer[WorkspaceDeskSpecifics_LaunchContainer["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: LAUNCH_CONTAINER_WINDOW = 1;
     */
    WorkspaceDeskSpecifics_LaunchContainer[WorkspaceDeskSpecifics_LaunchContainer["WINDOW"] = 1] = "WINDOW";
    /**
     * @generated from enum value: LAUNCH_CONTAINER_PANEL_DEPRECATED = 2;
     */
    WorkspaceDeskSpecifics_LaunchContainer[WorkspaceDeskSpecifics_LaunchContainer["PANEL_DEPRECATED"] = 2] = "PANEL_DEPRECATED";
    /**
     * @generated from enum value: LAUNCH_CONTAINER_TAB = 3;
     */
    WorkspaceDeskSpecifics_LaunchContainer[WorkspaceDeskSpecifics_LaunchContainer["TAB"] = 3] = "TAB";
    /**
     * @generated from enum value: LAUNCH_CONTAINER_NONE = 4;
     */
    WorkspaceDeskSpecifics_LaunchContainer[WorkspaceDeskSpecifics_LaunchContainer["NONE"] = 4] = "NONE";
})(WorkspaceDeskSpecifics_LaunchContainer || (WorkspaceDeskSpecifics_LaunchContainer = {}));
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.LaunchContainer.
 */
export const WorkspaceDeskSpecifics_LaunchContainerSchema = /*@__PURE__*/ enumDesc(file_workspace_desk_specifics, 0, 0);
/**
 * The state of a generic window.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.WindowState
 */
export var WorkspaceDeskSpecifics_WindowState;
(function (WorkspaceDeskSpecifics_WindowState) {
    /**
     * @generated from enum value: UNKNOWN_WINDOW_STATE = 0;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["UNKNOWN_WINDOW_STATE"] = 0] = "UNKNOWN_WINDOW_STATE";
    /**
     * Normal window state (not minimized, maximized, or fullscreen).
     *
     * @generated from enum value: NORMAL = 1;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["NORMAL"] = 1] = "NORMAL";
    /**
     * Minimized window state.
     *
     * @generated from enum value: MINIMIZED = 2;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["MINIMIZED"] = 2] = "MINIMIZED";
    /**
     * Maximized window state.
     *
     * @generated from enum value: MAXIMIZED = 3;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["MAXIMIZED"] = 3] = "MAXIMIZED";
    /**
     * Fullscreen window state.
     *
     * @generated from enum value: FULLSCREEN = 4;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["FULLSCREEN"] = 4] = "FULLSCREEN";
    /**
     * Snapped to primary half of the screen. Primary half is on the left in
     * landscape screen orientation and top in portrait screen orientation.
     *
     * @generated from enum value: PRIMARY_SNAPPED = 5;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["PRIMARY_SNAPPED"] = 5] = "PRIMARY_SNAPPED";
    /**
     * Snapped to secondary half of the screen. Secondary half is on the right
     * in landscape screen orientation and bottom in portrait screen
     * orientation.
     *
     * @generated from enum value: SECONDARY_SNAPPED = 6;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["SECONDARY_SNAPPED"] = 6] = "SECONDARY_SNAPPED";
    /**
     * Floated window state.
     *
     * @generated from enum value: FLOATED = 7;
     */
    WorkspaceDeskSpecifics_WindowState[WorkspaceDeskSpecifics_WindowState["FLOATED"] = 7] = "FLOATED";
})(WorkspaceDeskSpecifics_WindowState || (WorkspaceDeskSpecifics_WindowState = {}));
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.WindowState.
 */
export const WorkspaceDeskSpecifics_WindowStateSchema = /*@__PURE__*/ enumDesc(file_workspace_desk_specifics, 0, 1);
/**
 * Enumeration for how a window opens.  Maps to base::WindowOpenDisposition.
 * (found in ui/base/window_open_disposition.h:10).  Does not include
 * MAX_VALUE as MAX_VALUE is equivalent to NEW_PICTURE_IN_PICTURE.  All
 * comments are copied verbatim from aforementioned header.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.WindowOpenDisposition
 */
export var WorkspaceDeskSpecifics_WindowOpenDisposition;
(function (WorkspaceDeskSpecifics_WindowOpenDisposition) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: CURRENT_TAB = 1;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["CURRENT_TAB"] = 1] = "CURRENT_TAB";
    /**
     * Indicates that only one tab with the URL shoul exist in the same window.
     *
     * @generated from enum value: SINGLETON_TAB = 2;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["SINGLETON_TAB"] = 2] = "SINGLETON_TAB";
    /**
     * @generated from enum value: NEW_FOREGROUND_TAB = 3;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["NEW_FOREGROUND_TAB"] = 3] = "NEW_FOREGROUND_TAB";
    /**
     * @generated from enum value: NEW_BACKGROUND_TAB = 4;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["NEW_BACKGROUND_TAB"] = 4] = "NEW_BACKGROUND_TAB";
    /**
     * @generated from enum value: NEW_POPUP = 5;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["NEW_POPUP"] = 5] = "NEW_POPUP";
    /**
     * @generated from enum value: NEW_WINDOW = 6;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["NEW_WINDOW"] = 6] = "NEW_WINDOW";
    /**
     * @generated from enum value: SAVE_TO_DISK = 7;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["SAVE_TO_DISK"] = 7] = "SAVE_TO_DISK";
    /**
     * @generated from enum value: OFF_THE_RECORD = 8;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["OFF_THE_RECORD"] = 8] = "OFF_THE_RECORD";
    /**
     * @generated from enum value: IGNORE_ACTION = 9;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["IGNORE_ACTION"] = 9] = "IGNORE_ACTION";
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
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["SWITCH_TO_TAB"] = 10] = "SWITCH_TO_TAB";
    /**
     * creates a new document picture-in-picture window showing a child WebView.
     *
     * @generated from enum value: NEW_PICTURE_IN_PICTURE = 11;
     */
    WorkspaceDeskSpecifics_WindowOpenDisposition[WorkspaceDeskSpecifics_WindowOpenDisposition["NEW_PICTURE_IN_PICTURE"] = 11] = "NEW_PICTURE_IN_PICTURE";
})(WorkspaceDeskSpecifics_WindowOpenDisposition || (WorkspaceDeskSpecifics_WindowOpenDisposition = {}));
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.WindowOpenDisposition.
 */
export const WorkspaceDeskSpecifics_WindowOpenDispositionSchema = /*@__PURE__*/ enumDesc(file_workspace_desk_specifics, 0, 2);
/**
 * Enumerates the type of desk, namely to differentiate desks between desks
 * saved for desk templates and desks saved for save and recall.
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.DeskType
 */
export var WorkspaceDeskSpecifics_DeskType;
(function (WorkspaceDeskSpecifics_DeskType) {
    /**
     * @generated from enum value: UNKNOWN_TYPE = 0;
     */
    WorkspaceDeskSpecifics_DeskType[WorkspaceDeskSpecifics_DeskType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
    /**
     * @generated from enum value: TEMPLATE = 1;
     */
    WorkspaceDeskSpecifics_DeskType[WorkspaceDeskSpecifics_DeskType["TEMPLATE"] = 1] = "TEMPLATE";
    /**
     * @generated from enum value: SAVE_AND_RECALL = 2;
     */
    WorkspaceDeskSpecifics_DeskType[WorkspaceDeskSpecifics_DeskType["SAVE_AND_RECALL"] = 2] = "SAVE_AND_RECALL";
    /**
     * @generated from enum value: FLOATING_WORKSPACE = 3;
     */
    WorkspaceDeskSpecifics_DeskType[WorkspaceDeskSpecifics_DeskType["FLOATING_WORKSPACE"] = 3] = "FLOATING_WORKSPACE";
})(WorkspaceDeskSpecifics_DeskType || (WorkspaceDeskSpecifics_DeskType = {}));
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.DeskType.
 */
export const WorkspaceDeskSpecifics_DeskTypeSchema = /*@__PURE__*/ enumDesc(file_workspace_desk_specifics, 0, 3);
/**
 * Enumerates the possible colors that a tab group can have.  This mirrors
 * the enumeration that can be found in
 * components/tab_groups/tab_group_color.h
 *
 * @generated from enum sync_pb.WorkspaceDeskSpecifics.TabGroupColor
 */
export var WorkspaceDeskSpecifics_TabGroupColor;
(function (WorkspaceDeskSpecifics_TabGroupColor) {
    /**
     * @generated from enum value: UNKNOWN_COLOR = 0;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["UNKNOWN_COLOR"] = 0] = "UNKNOWN_COLOR";
    /**
     * @generated from enum value: GREY = 1;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["GREY"] = 1] = "GREY";
    /**
     * @generated from enum value: BLUE = 2;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["BLUE"] = 2] = "BLUE";
    /**
     * @generated from enum value: RED = 3;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["RED"] = 3] = "RED";
    /**
     * @generated from enum value: YELLOW = 4;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["YELLOW"] = 4] = "YELLOW";
    /**
     * @generated from enum value: GREEN = 5;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["GREEN"] = 5] = "GREEN";
    /**
     * @generated from enum value: PINK = 6;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["PINK"] = 6] = "PINK";
    /**
     * @generated from enum value: PURPLE = 7;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["PURPLE"] = 7] = "PURPLE";
    /**
     * @generated from enum value: CYAN = 8;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["CYAN"] = 8] = "CYAN";
    /**
     * @generated from enum value: ORANGE = 9;
     */
    WorkspaceDeskSpecifics_TabGroupColor[WorkspaceDeskSpecifics_TabGroupColor["ORANGE"] = 9] = "ORANGE";
})(WorkspaceDeskSpecifics_TabGroupColor || (WorkspaceDeskSpecifics_TabGroupColor = {}));
/**
 * Describes the enum sync_pb.WorkspaceDeskSpecifics.TabGroupColor.
 */
export const WorkspaceDeskSpecifics_TabGroupColorSchema = /*@__PURE__*/ enumDesc(file_workspace_desk_specifics, 0, 4);
//# sourceMappingURL=workspace_desk_specifics_pb.js.map