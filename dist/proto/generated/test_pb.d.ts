import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file test.proto.
 */
export declare const file_test: GenFile;
/**
 * @generated from message sync_pb.UnknownFieldsTestA
 */
export type UnknownFieldsTestA = Message<"sync_pb.UnknownFieldsTestA"> & {
    /**
     * @generated from field: required bool foo = 1;
     */
    foo: boolean;
};
/**
 * Describes the message sync_pb.UnknownFieldsTestA.
 * Use `create(UnknownFieldsTestASchema)` to create a new message.
 */
export declare const UnknownFieldsTestASchema: GenMessage<UnknownFieldsTestA>;
/**
 * @generated from message sync_pb.UnknownFieldsTestB
 */
export type UnknownFieldsTestB = Message<"sync_pb.UnknownFieldsTestB"> & {
    /**
     * @generated from field: required bool foo = 1;
     */
    foo: boolean;
    /**
     * @generated from field: required bool bar = 2;
     */
    bar: boolean;
};
/**
 * Describes the message sync_pb.UnknownFieldsTestB.
 * Use `create(UnknownFieldsTestBSchema)` to create a new message.
 */
export declare const UnknownFieldsTestBSchema: GenMessage<UnknownFieldsTestB>;
//# sourceMappingURL=test_pb.d.ts.map