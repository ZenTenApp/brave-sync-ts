import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file brave_device_info_specifics.proto.
 */
export declare const file_brave_device_info_specifics: GenFile;
/**
 * @generated from message sync_pb.BraveSpecificFields
 */
export type BraveSpecificFields = Message<"sync_pb.BraveSpecificFields"> & {
    /**
     * @generated from field: optional bool is_self_delete_supported = 1;
     */
    isSelfDeleteSupported: boolean;
};
/**
 * Describes the message sync_pb.BraveSpecificFields.
 * Use `create(BraveSpecificFieldsSchema)` to create a new message.
 */
export declare const BraveSpecificFieldsSchema: GenMessage<BraveSpecificFields>;
//# sourceMappingURL=brave_device_info_specifics_pb.d.ts.map