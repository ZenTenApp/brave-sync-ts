import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file typed_url_specifics.proto.
 */
export declare const file_typed_url_specifics: GenFile;
/**
 * Properties of typed_url sync objects - fields correspond to similarly named
 * fields in history::URLRow.
 *
 * @generated from message sync_pb.TypedUrlSpecifics
 */
export type TypedUrlSpecifics = Message<"sync_pb.TypedUrlSpecifics"> & {
    /**
     * Actual URL that was typed.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * Title of the page corresponding to this URL.
     *
     * @generated from field: optional string title = 2;
     */
    title: string;
    /**
     * True if the URL should NOT be used for auto-complete.
     *
     * @generated from field: optional bool hidden = 4;
     */
    hidden: boolean;
    /**
     * Timestamps for all visits to this URL.
     *
     * @generated from field: repeated int64 visits = 7 [packed = true];
     */
    visits: bigint[];
    /**
     * The PageTransition::Type for each of the visits in the |visit| array. Both
     * arrays must be the same length.
     *
     * @generated from field: repeated int32 visit_transitions = 8 [packed = true];
     */
    visitTransitions: number[];
};
/**
 * Describes the message sync_pb.TypedUrlSpecifics.
 * Use `create(TypedUrlSpecificsSchema)` to create a new message.
 */
export declare const TypedUrlSpecificsSchema: GenMessage<TypedUrlSpecifics>;
//# sourceMappingURL=typed_url_specifics_pb.d.ts.map