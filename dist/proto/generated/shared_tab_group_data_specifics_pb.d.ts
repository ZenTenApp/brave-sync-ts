import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { UniquePosition } from "./unique_position_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file shared_tab_group_data_specifics.proto.
 */
export declare const file_shared_tab_group_data_specifics: GenFile;
/**
 * @generated from message sync_pb.SharedTabGroupDataSpecifics
 */
export type SharedTabGroupDataSpecifics = Message<"sync_pb.SharedTabGroupDataSpecifics"> & {
    /**
     * Unique identifier for this entity.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * TODO(b/319521964): consider to rename and add a comment to clarify the
     * content.
     *
     * @generated from field: optional string last_modification_author = 2;
     */
    lastModificationAuthor: string;
    /**
     * @generated from oneof sync_pb.SharedTabGroupDataSpecifics.entity
     */
    entity: {
        /**
         * @generated from field: sync_pb.SharedTabGroup tab_group = 3;
         */
        value: SharedTabGroup;
        case: "tabGroup";
    } | {
        /**
         * @generated from field: sync_pb.SharedTab tab = 4;
         */
        value: SharedTab;
        case: "tab";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.SharedTabGroupDataSpecifics.
 * Use `create(SharedTabGroupDataSpecificsSchema)` to create a new message.
 */
export declare const SharedTabGroupDataSpecificsSchema: GenMessage<SharedTabGroupDataSpecifics>;
/**
 * @generated from message sync_pb.SharedTabGroup
 */
export type SharedTabGroup = Message<"sync_pb.SharedTabGroup"> & {
    /**
     * The displayed title of the group, shown on the tab group.
     *
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * The color of the tab group, mapped to tab_groups::TabGroupColorId.
     *
     * @generated from field: optional sync_pb.SharedTabGroup.Color color = 2;
     */
    color: SharedTabGroup_Color;
};
/**
 * Describes the message sync_pb.SharedTabGroup.
 * Use `create(SharedTabGroupSchema)` to create a new message.
 */
export declare const SharedTabGroupSchema: GenMessage<SharedTabGroup>;
/**
 * These colors map to tab_groups::TabGroupColorId. They DO NOT match the enum
 * integer values due to "kGrey" being in the "Unspecified" field.
 *
 * @generated from enum sync_pb.SharedTabGroup.Color
 */
export declare enum SharedTabGroup_Color {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
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
 * Describes the enum sync_pb.SharedTabGroup.Color.
 */
export declare const SharedTabGroup_ColorSchema: GenEnum<SharedTabGroup_Color>;
/**
 * @generated from message sync_pb.SharedTab
 */
export type SharedTab = Message<"sync_pb.SharedTab"> & {
    /**
     * The URL of the page.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * The title of the page.
     *
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * The URL to the favicon of the page.
     *
     * @generated from field: optional string favicon_url = 3;
     */
    faviconUrl: string;
    /**
     * The GUID of the SharedTabGroup this is a member of.
     *
     * @generated from field: optional string shared_tab_group_guid = 4;
     */
    sharedTabGroupGuid: string;
    /**
     * The UniquePosition within a SharedTabGroup.
     *
     * @generated from field: optional sync_pb.UniquePosition unique_position = 5;
     */
    uniquePosition?: UniquePosition;
};
/**
 * Describes the message sync_pb.SharedTab.
 * Use `create(SharedTabSchema)` to create a new message.
 */
export declare const SharedTabSchema: GenMessage<SharedTab>;
//# sourceMappingURL=shared_tab_group_data_specifics_pb.d.ts.map