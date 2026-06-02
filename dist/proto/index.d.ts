/**
 * Re-exports for protobuf types used by Brave Sync.
 */
export { type ClientToServerMessage, ClientToServerMessageSchema, type ClientToServerResponse, ClientToServerResponseSchema, type CommitMessage, CommitMessageSchema, type CommitResponse, CommitResponseSchema, type GetUpdatesMessage, GetUpdatesMessageSchema, type GetUpdatesResponse, GetUpdatesResponseSchema, } from "./generated/sync_pb.js";
export { type SyncEntity, SyncEntitySchema, } from "./generated/sync_entity_pb.js";
export { type EntitySpecifics, EntitySpecificsSchema, } from "./generated/entity_specifics_pb.js";
export { type EncryptedData, EncryptedDataSchema, } from "./generated/encryption_pb.js";
export { type PasswordSpecifics, PasswordSpecificsSchema, type PasswordSpecificsData, PasswordSpecificsDataSchema, PasswordSpecificsData_Scheme, type PasswordIssues, PasswordIssuesSchema, type PasswordSpecificsData_Notes, PasswordSpecificsData_NotesSchema, type PasswordSpecificsData_Notes_Note, PasswordSpecificsData_Notes_NoteSchema, } from "./generated/password_specifics_pb.js";
export { type NigoriSpecifics, NigoriSpecificsSchema, type NigoriKey, NigoriKeySchema, type NigoriKeyBag, NigoriKeyBagSchema, } from "./generated/nigori_specifics_pb.js";
export { type SyncEnums, SyncEnumsSchema, } from "./generated/sync_enums_pb.js";
export { type DataTypeProgressMarker, DataTypeProgressMarkerSchema, } from "./generated/data_type_progress_marker_pb.js";
export { type BookmarkSpecifics, BookmarkSpecificsSchema, BookmarkSpecifics_Type, } from "./generated/bookmark_specifics_pb.js";
export { type ExtensionSettingSpecifics, ExtensionSettingSpecificsSchema, } from "./generated/extension_setting_specifics_pb.js";
//# sourceMappingURL=index.d.ts.map