import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file favicon_tracking_specifics.proto.
 */
export declare const file_favicon_tracking_specifics: GenFile;
/**
 * Tracking info for of favicon images. These control expiration of images
 * from sync based on recency, bookmark state, etc.
 *
 * @generated from message sync_pb.FaviconTrackingSpecifics
 */
export type FaviconTrackingSpecifics = Message<"sync_pb.FaviconTrackingSpecifics"> & {
    /**
     * The url of the favicon image.
     *
     * @generated from field: optional string favicon_url = 1;
     */
    faviconUrl: string;
    /**
     * The last time a page using this favicon was visited (in milliseconds
     * since linux epoch).
     *
     * @generated from field: optional int64 last_visit_time_ms = 3;
     */
    lastVisitTimeMs: bigint;
    /**
     * Whether this favicon is currently bookmarked or not.
     *
     * @generated from field: optional bool is_bookmarked = 4;
     */
    isBookmarked: boolean;
};
/**
 * Describes the message sync_pb.FaviconTrackingSpecifics.
 * Use `create(FaviconTrackingSpecificsSchema)` to create a new message.
 */
export declare const FaviconTrackingSpecificsSchema: GenMessage<FaviconTrackingSpecifics>;
//# sourceMappingURL=favicon_tracking_specifics_pb.d.ts.map