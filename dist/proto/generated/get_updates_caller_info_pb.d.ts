import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file get_updates_caller_info.proto.
 */
export declare const file_get_updates_caller_info: GenFile;
/**
 * @generated from message sync_pb.GetUpdatesCallerInfo
 */
export type GetUpdatesCallerInfo = Message<"sync_pb.GetUpdatesCallerInfo"> & {
    /**
     * True if notifications were enabled for this GetUpdateMessage.
     * Note: Ideally this would be moved out of GetUpdatesCallerInfo, so that
     * GetUpdatesCallerInfo itself can be removed.
     *
     * @generated from field: optional bool notifications_enabled = 2;
     */
    notificationsEnabled: boolean;
};
/**
 * Describes the message sync_pb.GetUpdatesCallerInfo.
 * Use `create(GetUpdatesCallerInfoSchema)` to create a new message.
 */
export declare const GetUpdatesCallerInfoSchema: GenMessage<GetUpdatesCallerInfo>;
//# sourceMappingURL=get_updates_caller_info_pb.d.ts.map