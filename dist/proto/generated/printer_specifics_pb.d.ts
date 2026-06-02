import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file printer_specifics.proto.
 */
export declare const file_printer_specifics: GenFile;
/**
 * User PPD configuration
 *
 * @generated from message sync_pb.PrinterPPDReference
 */
export type PrinterPPDReference = Message<"sync_pb.PrinterPPDReference"> & {
    /**
     * Url for user provided file.  Overrides other fields.
     *
     * @generated from field: optional string user_supplied_ppd_url = 1;
     */
    userSuppliedPpdUrl: string;
    /**
     * Retired fields
     *
     * @generated from field: optional string effective_manufacturer = 2 [deprecated = true];
     * @deprecated
     */
    effectiveManufacturer: string;
    /**
     * @generated from field: optional string effective_model = 3 [deprecated = true];
     * @deprecated
     */
    effectiveModel: string;
    /**
     * String identifying the type of printer, used to look up a ppd to drive the
     * printer.
     *
     * @generated from field: optional string effective_make_and_model = 4;
     */
    effectiveMakeAndModel: string;
    /**
     * True if the printer should be automatically configured, false otherwise.
     *
     * @generated from field: optional bool autoconf = 5 [default = false];
     */
    autoconf: boolean;
};
/**
 * Describes the message sync_pb.PrinterPPDReference.
 * Use `create(PrinterPPDReferenceSchema)` to create a new message.
 */
export declare const PrinterPPDReferenceSchema: GenMessage<PrinterPPDReference>;
/**
 * @generated from message sync_pb.PrinterSpecifics
 */
export type PrinterSpecifics = Message<"sync_pb.PrinterSpecifics"> & {
    /**
     * Printer record GUID
     *
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * User visible name.  Any string.
     *
     * @generated from field: optional string display_name = 2;
     */
    displayName: string;
    /**
     * User visible description.  Any string.
     *
     * @generated from field: optional string description = 3;
     */
    description: string;
    /**
     * Printer manufacturer.  Should be a known manufacturuer.
     * Deprecated in favor of make_and_model.
     *
     * @generated from field: optional string manufacturer = 4 [deprecated = true];
     * @deprecated
     */
    manufacturer: string;
    /**
     * Printer model.  Should match a known model for the manufacturer.
     * Deprecated in favor of make_and_model.
     *
     * @generated from field: optional string model = 5 [deprecated = true];
     * @deprecated
     */
    model: string;
    /**
     * Universal Resource Identifier for the printer on the network.  usb:// will
     * be the scheme for USB printers.  Example
     * ipp://address.example:port/queue/queue/queue.
     *
     * @generated from field: optional string uri = 6;
     */
    uri: string;
    /**
     * Universally Unique Identifier provided by the printer.  Used for unique
     * identification of printers in a zeroconf environment.
     *
     * @generated from field: optional string uuid = 7;
     */
    uuid: string;
    /**
     * PPDData was deprecated in favor of PPDReference format.
     *
     * @generated from field: optional bytes ppd = 8 [deprecated = true];
     * @deprecated
     */
    ppd: Uint8Array;
    /**
     * Structure representing the user's ppd configuration.
     *
     * @generated from field: optional sync_pb.PrinterPPDReference ppd_reference = 9;
     */
    ppdReference?: PrinterPPDReference;
    /**
     * Timestamp when printer was last updated.
     *
     * @generated from field: optional int64 updated_timestamp = 10;
     */
    updatedTimestamp: bigint;
    /**
     * The make and model of the printer in one string.  The typical arrangement
     * for this is '<make> <model>'.  This aligns with the typical formatting of
     * the IPP attribute printer-make-and-model.
     *
     * @generated from field: optional string make_and_model = 11;
     */
    makeAndModel: string;
    /**
     * Universal Resource Identifier for the print server on the network.  This
     * will only be populated if the printer is from a print server.  Example
     * ipp://address.example:port/
     *
     * @generated from field: optional string print_server_uri = 12;
     */
    printServerUri: string;
};
/**
 * Describes the message sync_pb.PrinterSpecifics.
 * Use `create(PrinterSpecificsSchema)` to create a new message.
 */
export declare const PrinterSpecificsSchema: GenMessage<PrinterSpecifics>;
//# sourceMappingURL=printer_specifics_pb.d.ts.map