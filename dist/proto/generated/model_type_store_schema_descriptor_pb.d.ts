import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file model_type_store_schema_descriptor.proto.
 */
export declare const file_model_type_store_schema_descriptor: GenFile;
/**
 * @generated from message sync_pb.ModelTypeStoreSchemaDescriptor
 */
export type ModelTypeStoreSchemaDescriptor = Message<"sync_pb.ModelTypeStoreSchemaDescriptor"> & {
    /**
     * @generated from field: optional int64 version_number = 1;
     */
    versionNumber: bigint;
};
/**
 * Describes the message sync_pb.ModelTypeStoreSchemaDescriptor.
 * Use `create(ModelTypeStoreSchemaDescriptorSchema)` to create a new message.
 */
export declare const ModelTypeStoreSchemaDescriptorSchema: GenMessage<ModelTypeStoreSchemaDescriptor>;
//# sourceMappingURL=model_type_store_schema_descriptor_pb.d.ts.map