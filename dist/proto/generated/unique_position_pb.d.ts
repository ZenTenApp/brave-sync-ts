import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file unique_position.proto.
 */
export declare const file_unique_position: GenFile;
/**
 * A UniquePosition is a string of bytes.
 *
 * Unique positions are unique per-item, since they are guaranteed to end with a
 * fixed-length suffix that is unique per-item.  The position string may not end
 * with a '\0' byte.
 *
 * Prior to the suffix is a series of arbitrary bytes of arbitrary length.
 * Items under the same parent are positioned relative to each other by a
 * lexicographic comparison of their UniquePosition values.
 *
 * History:
 *
 * Unique positions were first introduced in M28.  This change was rolled out
 * in such a way that it would try to maintain backwards compatibilty with
 * clients that understood only the old int64-based positions.
 *
 * At first, clients supported only the 'value' field.  This version never
 * made it to stable.  We later added support for the 'compressed_value'
 * field, and clients would populate either one or the other.
 *
 * In M30, we added the custom_compressed_v1 representation.  This
 * representation was better than the previous implementations in almost every
 * way.  However, we could not use it right away, since older clients would
 * not understand it.  We decided to write both the old-style ('value' or
 * 'custom_compressed') representation and the 'custom_compressed_v1'
 * repersentations to every protobuf during the transition period.  Protobufs
 * written during this transition period would be readable by clients who
 * understand at least one of the two formats.
 *
 * In M33, we dropped support for writing the backwards-compatibility fields.
 * Protobufs written by this version or later are not be intelligible by
 * clients with version M29 or older.  Those clients will end up making use of
 * the old int64 position fallback mechanism.
 *
 * @generated from message sync_pb.UniquePosition
 */
export type UniquePosition = Message<"sync_pb.UniquePosition"> & {
    /**
     * The uncompressed string of bytes representing the position.
     *
     * Deprecated.  See history note above.
     *
     * @generated from field: optional bytes value = 1 [deprecated = true];
     * @deprecated
     */
    value: Uint8Array;
    /**
     * The client may choose to write a compressed position to this field instead
     * of populating the 'value' above.  If it chooses to use compression, the
     * 'value' field above must be empty.  The position value will be compressed
     * with gzip and stored in the compressed_value field.  The position's
     * uncompressed length must be specified and written to the
     * uncompressed_length field.
     *
     * Deprecated.  See history note above.
     *
     * @generated from field: optional bytes compressed_value = 2 [deprecated = true];
     * @deprecated
     */
    compressedValue: Uint8Array;
    /**
     * @generated from field: optional uint64 uncompressed_length = 3 [deprecated = true];
     * @deprecated
     */
    uncompressedLength: bigint;
    /**
     * This encoding uses compression scheme designed especially for unique
     * positions.  It has the property that X < Y precisely when Compressed(X) <
     * Compressed(Y), which is very useful when the most common operation is to
     * compare these positions against each other.  Their values may remain
     * compressed in memory.
     *
     * The compression scheme is implemented and documented in
     * sync/core_impl/base/unique_position.cc.
     *
     * As of M30, this is the preferred encoding.  Newer clients may continue to
     * populate the 'value' and 'compressed_value' fields to ensure backwards
     * compatibility, but they will always try to read from this field first.
     *
     * @generated from field: optional bytes custom_compressed_v1 = 4;
     */
    customCompressedV1: Uint8Array;
};
/**
 * Describes the message sync_pb.UniquePosition.
 * Use `create(UniquePositionSchema)` to create a new message.
 */
export declare const UniquePositionSchema: GenMessage<UniquePosition>;
//# sourceMappingURL=unique_position_pb.d.ts.map