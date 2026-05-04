/**
 * Re-exports for protobuf types used by Brave Sync.
 */

// Core sync messages
export {
  type ClientToServerMessage,
  ClientToServerMessageSchema,
  type ClientToServerResponse,
  ClientToServerResponseSchema,
  type CommitMessage,
  CommitMessageSchema,
  type CommitResponse,
  CommitResponseSchema,
  type GetUpdatesMessage,
  GetUpdatesMessageSchema,
  type GetUpdatesResponse,
  GetUpdatesResponseSchema,
} from "./generated/sync_pb.js";

// Sync entity
export {
  type SyncEntity,
  SyncEntitySchema,
} from "./generated/sync_entity_pb.js";

// Entity specifics
export {
  type EntitySpecifics,
  EntitySpecificsSchema,
} from "./generated/entity_specifics_pb.js";

// Encryption
export {
  type EncryptedData,
  EncryptedDataSchema,
} from "./generated/encryption_pb.js";

// Password specifics
export {
  type PasswordSpecifics,
  PasswordSpecificsSchema,
  type PasswordSpecificsData,
  PasswordSpecificsDataSchema,
  PasswordSpecificsData_Scheme,
  type PasswordIssues,
  PasswordIssuesSchema,
  type PasswordSpecificsData_Notes,
  PasswordSpecificsData_NotesSchema,
  type PasswordSpecificsData_Notes_Note,
  PasswordSpecificsData_Notes_NoteSchema,
} from "./generated/password_specifics_pb.js";

// Nigori specifics
export {
  type NigoriSpecifics,
  NigoriSpecificsSchema,
  type NigoriKey,
  NigoriKeySchema,
  type NigoriKeyBag,
  NigoriKeyBagSchema,
} from "./generated/nigori_specifics_pb.js";

// Sync enums
export {
  type SyncEnums,
  SyncEnumsSchema,
} from "./generated/sync_enums_pb.js";

// Data type progress marker
export {
  type DataTypeProgressMarker,
  DataTypeProgressMarkerSchema,
} from "./generated/data_type_progress_marker_pb.js";

// Bookmark specifics
export {
  type BookmarkSpecifics,
  BookmarkSpecificsSchema,
  BookmarkSpecifics_Type,
} from "./generated/bookmark_specifics_pb.js";

// Extension setting specifics
export {
  type ExtensionSettingSpecifics,
  ExtensionSettingSpecificsSchema,
} from "./generated/extension_setting_specifics_pb.js";
