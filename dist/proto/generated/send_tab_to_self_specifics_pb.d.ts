import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file send_tab_to_self_specifics.proto.
 */
export declare const file_send_tab_to_self_specifics: GenFile;
/**
 * Send Tab To Self list entry. This proto contains the fields synced to send
 * a url across devices.
 *
 * @generated from message sync_pb.SendTabToSelfSpecifics
 */
export type SendTabToSelfSpecifics = Message<"sync_pb.SendTabToSelfSpecifics"> & {
    /**
     * A random unique identifier for each shared tab.
     * Required.
     *
     * @generated from field: optional string guid = 5;
     */
    guid: string;
    /**
     * The name of the tab being shared.
     *
     * @generated from field: optional string title = 1;
     */
    title: string;
    /**
     * The URL of the tab being shared.
     * Required.
     *
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * The time the tab was shared as measured by the client in microseconds since
     * the windows epoch.
     *
     * @generated from field: optional int64 shared_time_usec = 3;
     */
    sharedTimeUsec: bigint;
    /**
     * A non-unique but human readable name to describe this client, used in UI.
     *
     * @generated from field: optional string device_name = 4;
     */
    deviceName: string;
    /**
     * The stable Device_id of the device that this tab was shared with.
     * Required.
     *
     * @generated from field: optional string target_device_sync_cache_guid = 7;
     */
    targetDeviceSyncCacheGuid: string;
    /**
     * A boolean to designate if the shared tab been opened on the target device.
     *
     * @generated from field: optional bool opened = 8;
     */
    opened: boolean;
    /**
     * Whether the notification for this proto been dismissed.
     *
     * @generated from field: optional bool notification_dismissed = 9;
     */
    notificationDismissed: boolean;
};
/**
 * Describes the message sync_pb.SendTabToSelfSpecifics.
 * Use `create(SendTabToSelfSpecificsSchema)` to create a new message.
 */
export declare const SendTabToSelfSpecificsSchema: GenMessage<SendTabToSelfSpecifics>;
//# sourceMappingURL=send_tab_to_self_specifics_pb.d.ts.map