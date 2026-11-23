import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file printers_authorization_server_specifics.proto.
 */
export declare const file_printers_authorization_server_specifics: GenFile;
/**
 * Represents trusted Authorization Server for printers.
 *
 * @generated from message sync_pb.PrintersAuthorizationServerSpecifics
 */
export type PrintersAuthorizationServerSpecifics = Message<"sync_pb.PrintersAuthorizationServerSpecifics"> & {
    /**
     * Universal Resource Identifier for the authorization server on the network.
     * The scheme must be https. Example: https://address.example:port/path/path.
     * This field must be unique and is required.
     *
     * @generated from field: optional string uri = 1;
     */
    uri: string;
};
/**
 * Describes the message sync_pb.PrintersAuthorizationServerSpecifics.
 * Use `create(PrintersAuthorizationServerSpecificsSchema)` to create a new message.
 */
export declare const PrintersAuthorizationServerSpecificsSchema: GenMessage<PrintersAuthorizationServerSpecifics>;
//# sourceMappingURL=printers_authorization_server_specifics_pb.d.ts.map