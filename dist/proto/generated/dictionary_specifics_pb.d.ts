import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file dictionary_specifics.proto.
 */
export declare const file_dictionary_specifics: GenFile;
/**
 * Properties of Dictionary objects.
 *
 * @generated from message sync_pb.DictionarySpecifics
 */
export type DictionarySpecifics = Message<"sync_pb.DictionarySpecifics"> & {
    /**
     * A spelling which when typed is treated as a correctly spelled word.
     *
     * @generated from field: optional string word = 1;
     */
    word: string;
};
/**
 * Describes the message sync_pb.DictionarySpecifics.
 * Use `create(DictionarySpecificsSchema)` to create a new message.
 */
export declare const DictionarySpecificsSchema: GenMessage<DictionarySpecifics>;
//# sourceMappingURL=dictionary_specifics_pb.d.ts.map