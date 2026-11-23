import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file saved_tab_group_specifics.proto.
 */
export declare const file_saved_tab_group_specifics: GenFile;
/**
 * Sync protocol datatype extension for saved tab groups. Saved Tab Groups are
 * tab groups which can be recalled between browser sessions, and if sync is
 * turned on, cross device. A saved tab group contains tabs which are stored as
 * a SavedTabGroupSpecifics separately (SavedTabGroupTab). This is due to
 * limitations from the sync service on the size of an individual sync entity.
 *
 * @generated from message sync_pb.SavedTabGroup
 */
export type SavedTabGroup = Message<"sync_pb.SavedTabGroup"> & {
    /**
     * The position of the SavedTabGroup in any visual display. This also
     * represents the index in the SavedTabGroupModel of the group.
     *
     * @generated from field: optional int64 position = 1;
     */
    position: bigint;
    /**
     * The displayed title of the group, shown on the tab group and the saved tab
     * group button.
     *
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * The color of the group, mapped to tab_groups::TabGroupColorId.
     *
     * @generated from field: optional sync_pb.SavedTabGroup.SavedTabGroupColor color = 3;
     */
    color: SavedTabGroup_SavedTabGroupColor;
};
/**
 * Describes the message sync_pb.SavedTabGroup.
 * Use `create(SavedTabGroupSchema)` to create a new message.
 */
export declare const SavedTabGroupSchema: GenMessage<SavedTabGroup>;
/**
 * These colors map to tab_groups::TabGroupColorId. They DO NOT match the enum
 * integer values due to "kGrey" being in the "Unspecified" field.
 *
 * @generated from enum sync_pb.SavedTabGroup.SavedTabGroupColor
 */
export declare enum SavedTabGroup_SavedTabGroupColor {
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_GREY = 1;
     */
    GREY = 1,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_BLUE = 2;
     */
    BLUE = 2,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_RED = 3;
     */
    RED = 3,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_YELLOW = 4;
     */
    YELLOW = 4,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_GREEN = 5;
     */
    GREEN = 5,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_PINK = 6;
     */
    PINK = 6,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_PURPLE = 7;
     */
    PURPLE = 7,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_CYAN = 8;
     */
    CYAN = 8,
    /**
     * @generated from enum value: SAVED_TAB_GROUP_COLOR_ORANGE = 9;
     */
    ORANGE = 9
}
/**
 * Describes the enum sync_pb.SavedTabGroup.SavedTabGroupColor.
 */
export declare const SavedTabGroup_SavedTabGroupColorSchema: GenEnum<SavedTabGroup_SavedTabGroupColor>;
/**
 * Sync protocol datatype extension for saved tab group tabs. SavedTabGroupTab
 * are the sync representation of a tab in a saved tab group. they are stored as
 * separate entities due to size limitations of sync entities.
 *
 * @generated from message sync_pb.SavedTabGroupTab
 */
export type SavedTabGroupTab = Message<"sync_pb.SavedTabGroupTab"> & {
    /**
     * An id that links the saved tab group tab to it's saved tab group.
     *
     * @generated from field: optional string group_guid = 1;
     */
    groupGuid: string;
    /**
     * The position in the Tab Strip the tab is located relative to the start of
     * the tab group. This is also the index in the saved_tabs_ vector in the
     * SavedTabGroup in the SavedTabGroupModel, which is updated by the
     * TabStripModel.
     *
     * @generated from field: optional int64 position = 2;
     */
    position: bigint;
    /**
     * Tab Data used for constructing the tab.
     *
     * @generated from field: optional string url = 3;
     */
    url: string;
    /**
     * The displayed title of the tab, shown on the saved tab group button's
     * context menu.
     *
     * @generated from field: optional string title = 4;
     */
    title: string;
};
/**
 * Describes the message sync_pb.SavedTabGroupTab.
 * Use `create(SavedTabGroupTabSchema)` to create a new message.
 */
export declare const SavedTabGroupTabSchema: GenMessage<SavedTabGroupTab>;
/**
 * @generated from message sync_pb.SavedTabGroupSpecifics
 */
export type SavedTabGroupSpecifics = Message<"sync_pb.SavedTabGroupSpecifics"> & {
    /**
     * An id that refers to the sync saved tab group object.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * Timestamps for CRUD operations.
     *
     * @generated from field: optional int64 creation_time_windows_epoch_micros = 2;
     */
    creationTimeWindowsEpochMicros: bigint;
    /**
     * @generated from field: optional int64 update_time_windows_epoch_micros = 3;
     */
    updateTimeWindowsEpochMicros: bigint;
    /**
     * @generated from oneof sync_pb.SavedTabGroupSpecifics.entity
     */
    entity: {
        /**
         * @generated from field: sync_pb.SavedTabGroup group = 4;
         */
        value: SavedTabGroup;
        case: "group";
    } | {
        /**
         * @generated from field: sync_pb.SavedTabGroupTab tab = 5;
         */
        value: SavedTabGroupTab;
        case: "tab";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.SavedTabGroupSpecifics.
 * Use `create(SavedTabGroupSpecificsSchema)` to create a new message.
 */
export declare const SavedTabGroupSpecificsSchema: GenMessage<SavedTabGroupSpecifics>;
//# sourceMappingURL=saved_tab_group_specifics_pb.d.ts.map