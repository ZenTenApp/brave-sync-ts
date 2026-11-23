import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file note_entity.proto.
 */
export declare const file_note_entity: GenFile;
/**
 * @generated from message sync_pb.NoteEntity
 */
export type NoteEntity = Message<"sync_pb.NoteEntity"> & {
    /**
     * Plain text of the note.
     *
     * @generated from field: optional string plain_text = 1;
     */
    plainText: string;
    /**
     * Rich text of the note. It will be used when plain_text is empty and the UI
     * supports rich text.
     *
     * @generated from field: optional string rich_text = 2;
     */
    richText: string;
    /**
     * required
     *
     * @generated from field: optional sync_pb.NoteEntity.TargetType target_type = 3;
     */
    targetType: NoteEntity_TargetType;
    /**
     * required
     *
     * @generated from field: optional int32 current_note_version = 4;
     */
    currentNoteVersion: number;
};
/**
 * Describes the message sync_pb.NoteEntity.
 * Use `create(NoteEntitySchema)` to create a new message.
 */
export declare const NoteEntitySchema: GenMessage<NoteEntity>;
/**
 * @generated from enum sync_pb.NoteEntity.TargetType
 */
export declare enum NoteEntity_TargetType {
    /**
     * @generated from enum value: TARGET_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Page target type makes the note global to the page. It does not associate
     * with any user selection.
     *
     * @generated from enum value: TARGET_TYPE_PAGE = 1;
     */
    PAGE = 1
}
/**
 * Describes the enum sync_pb.NoteEntity.TargetType.
 */
export declare const NoteEntity_TargetTypeSchema: GenEnum<NoteEntity_TargetType>;
//# sourceMappingURL=note_entity_pb.d.ts.map