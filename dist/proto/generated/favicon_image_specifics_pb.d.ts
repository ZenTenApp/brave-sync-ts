import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file favicon_image_specifics.proto.
 */
export declare const file_favicon_image_specifics: GenFile;
/**
 * @generated from message sync_pb.FaviconData
 */
export type FaviconData = Message<"sync_pb.FaviconData"> & {
    /**
     * The image data for the favicon (PNG encoded).
     *
     * @generated from field: optional bytes favicon = 1;
     */
    favicon: Uint8Array;
    /**
     * The favicon dimensions.
     *
     * @generated from field: optional int32 width = 2;
     */
    width: number;
    /**
     * @generated from field: optional int32 height = 3;
     */
    height: number;
};
/**
 * Describes the message sync_pb.FaviconData.
 * Use `create(FaviconDataSchema)` to create a new message.
 */
export declare const FaviconDataSchema: GenMessage<FaviconData>;
/**
 * Image data for favicons. Multiple resolutions are supported.
 *
 * @generated from message sync_pb.FaviconImageSpecifics
 */
export type FaviconImageSpecifics = Message<"sync_pb.FaviconImageSpecifics"> & {
    /**
     * The url of the favicon image.
     *
     * @generated from field: optional string favicon_url = 1;
     */
    faviconUrl: string;
    /**
     * A normal low-resolution web favicon (max resolution 16x16).
     *
     * @generated from field: optional sync_pb.FaviconData favicon_web = 2;
     */
    faviconWeb?: FaviconData;
    /**
     * A slightly higher-resolution web favicon (max resolution 32x32).
     *
     * @generated from field: optional sync_pb.FaviconData favicon_web_32 = 3;
     */
    faviconWeb32?: FaviconData;
    /**
     * A high-resolution touch favicon (not precomposed, max resolution 64x64).
     *
     * @generated from field: optional sync_pb.FaviconData favicon_touch_64 = 4;
     */
    faviconTouch64?: FaviconData;
    /**
     * A high-resolution touch favicon (precomposed, max resolution 64x64).
     *
     * @generated from field: optional sync_pb.FaviconData favicon_touch_precomposed_64 = 5;
     */
    faviconTouchPrecomposed64?: FaviconData;
};
/**
 * Describes the message sync_pb.FaviconImageSpecifics.
 * Use `create(FaviconImageSpecificsSchema)` to create a new message.
 */
export declare const FaviconImageSpecificsSchema: GenMessage<FaviconImageSpecifics>;
//# sourceMappingURL=favicon_image_specifics_pb.d.ts.map