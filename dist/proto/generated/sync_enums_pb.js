// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol for communication between sync client and server.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file sync_enums.proto.
 */
export const file_sync_enums = /*@__PURE__*/ fileDesc("ChBzeW5jX2VudW1zLnByb3RvEgdzeW5jX3BiItMOCglTeW5jRW51bXMirgMKF1NpbmdsZXRvbkRlYnVnRXZlbnRUeXBlEhwKGENPTk5FQ1RJT05fU1RBVFVTX0NIQU5HRRABEhEKDVVQREFURURfVE9LRU4QAhIXChNQQVNTUEhSQVNFX1JFUVVJUkVEEAMSFwoTUEFTU1BIUkFTRV9BQ0NFUFRFRBAEEhsKF0lOSVRJQUxJWkFUSU9OX0NPTVBMRVRFEAUSHAoYU1RPUF9TWU5DSU5HX1BFUk1BTkVOVExZEAYSFAoQQUNUSU9OQUJMRV9FUlJPUhAIEhsKF0VOQ1JZUFRFRF9UWVBFU19DSEFOR0VEEAkSGwoXUEFTU1BIUkFTRV9UWVBFX0NIQU5HRUQQChIlCiFERVBSRUNBVEVEX0tFWVNUT1JFX1RPS0VOX1VQREFURUQQCxIWChJDT05GSUdVUkVfQ09NUExFVEUQDBImCiJERVBSRUNBVEVEX0JPT1RTVFJBUF9UT0tFTl9VUERBVEVEEA0SHgoaVFJVU1RFRF9WQVVMVF9LRVlfUkVRVUlSRUQQDhIeChpUUlVTVEVEX1ZBVUxUX0tFWV9BQ0NFUFRFRBAPIsMBCg5QYWdlVHJhbnNpdGlvbhIICgRMSU5LEAASCQoFVFlQRUQQARIRCg1BVVRPX0JPT0tNQVJLEAISEQoNQVVUT19TVUJGUkFNRRADEhMKD01BTlVBTF9TVUJGUkFNRRAEEg0KCUdFTkVSQVRFRBAFEhEKDUFVVE9fVE9QTEVWRUwQBhIPCgtGT1JNX1NVQk1JVBAHEgoKBlJFTE9BRBAIEgsKB0tFWVdPUkQQCRIVChFLRVlXT1JEX0dFTkVSQVRFRBAKIkYKGlBhZ2VUcmFuc2l0aW9uUmVkaXJlY3RUeXBlEhMKD0NMSUVOVF9SRURJUkVDVBABEhMKD1NFUlZFUl9SRURJUkVDVBACItEBCglFcnJvclR5cGUSCwoHU1VDQ0VTUxAAEhMKD05PVF9NWV9CSVJUSERBWRACEg0KCVRIUk9UVExFRBADEhMKD1RSQU5TSUVOVF9FUlJPUhAIEhIKDk1JR1JBVElPTl9ET05FEAkSFQoRRElTQUJMRURfQllfQURNSU4QChITCg9QQVJUSUFMX0ZBSUxVUkUQDBIYChRDTElFTlRfREFUQV9PQlNPTEVURRANEhcKE0VOQ1JZUFRJT05fT0JTT0xFVEUQDhILCgdVTktOT1dOEGQiMAoGQWN0aW9uEhIKDlVQR1JBREVfQ0xJRU5UEAASEgoOVU5LTk9XTl9BQ1RJT04QBSKoAQoKRGV2aWNlVHlwZRISCgpUWVBFX1VOU0VUEAAaAggBEhAKCFRZUEVfV0lOEAEaAggBEhAKCFRZUEVfTUFDEAIaAggBEhIKClRZUEVfTElOVVgQAxoCCAESEQoJVFlQRV9DUk9TEAQaAggBEhIKClRZUEVfT1RIRVIQBRoCCAESEgoKVFlQRV9QSE9ORRAGGgIIARITCgtUWVBFX1RBQkxFVBAHGgIIASLOAQoGT3NUeXBlEhcKE09TX1RZUEVfVU5TUEVDSUZJRUQQABITCg9PU19UWVBFX1dJTkRPV1MQARIPCgtPU19UWVBFX01BQxACEhEKDU9TX1RZUEVfTElOVVgQAxIZChVPU19UWVBFX0NIUk9NRV9PU19BU0gQBBITCg9PU19UWVBFX0FORFJPSUQQBRIPCgtPU19UWVBFX0lPUxAGEhwKGE9TX1RZUEVfQ0hST01FX09TX0xBQ1JPUxAHEhMKD09TX1RZUEVfRlVDSFNJQRAIIpMBChBEZXZpY2VGb3JtRmFjdG9yEiIKHkRFVklDRV9GT1JNX0ZBQ1RPUl9VTlNQRUNJRklFRBAAEh4KGkRFVklDRV9GT1JNX0ZBQ1RPUl9ERVNLVE9QEAESHAoYREVWSUNFX0ZPUk1fRkFDVE9SX1BIT05FEAISHQoZREVWSUNFX0ZPUk1fRkFDVE9SX1RBQkxFVBADIl0KC0Jyb3dzZXJUeXBlEhgKFEJST1dTRVJfVFlQRV9VTktOT1dOEAASDwoLVFlQRV9UQUJCRUQQARIOCgpUWVBFX1BPUFVQEAISEwoPVFlQRV9DVVNUT01fVEFCEAMiWgoNUGFzc3dvcmRTdGF0ZRIaChZQQVNTV09SRF9TVEFURV9VTktOT1dOEAASFQoRTk9fUEFTU1dPUkRfRklFTEQQARIWChJIQVNfUEFTU1dPUkRfRklFTEQQAiKzAQoQR2V0VXBkYXRlc09yaWdpbhISCg5VTktOT1dOX09SSUdJThAAEgwKCFBFUklPRElDEAQSHAoYTkVXTFlfU1VQUE9SVEVEX0RBVEFUWVBFEAcSDQoJTUlHUkFUSU9OEAgSDgoKTkVXX0NMSUVOVBAJEhMKD1JFQ09ORklHVVJBVElPThAKEg4KCkdVX1RSSUdHRVIQDBIJCgVSRVRSWRANEhAKDFBST0dSQU1NQVRJQxAOQjYKJW9yZy5jaHJvbWl1bS5jb21wb25lbnRzLnN5bmMucHJvdG9jb2xIA1ABWgkuL3N5bmNfcGI");
/**
 * Describes the message sync_pb.SyncEnums.
 * Use `create(SyncEnumsSchema)` to create a new message.
 */
export const SyncEnumsSchema = /*@__PURE__*/ messageDesc(file_sync_enums, 0);
/**
 * These events are sent by the DebugInfo class for singleton events.
 *
 * @generated from enum sync_pb.SyncEnums.SingletonDebugEventType
 */
export var SyncEnums_SingletonDebugEventType;
(function (SyncEnums_SingletonDebugEventType) {
    /**
     * Connection status change. Note this gets generated even during a
     * successful connection.
     *
     * @generated from enum value: CONNECTION_STATUS_CHANGE = 1;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["CONNECTION_STATUS_CHANGE"] = 1] = "CONNECTION_STATUS_CHANGE";
    /**
     * Client received an updated token.
     *
     * @generated from enum value: UPDATED_TOKEN = 2;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["UPDATED_TOKEN"] = 2] = "UPDATED_TOKEN";
    /**
     * Cryptographer needs passphrase.
     *
     * @generated from enum value: PASSPHRASE_REQUIRED = 3;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["PASSPHRASE_REQUIRED"] = 3] = "PASSPHRASE_REQUIRED";
    /**
     * Passphrase was accepted by cryptographer.
     *
     * @generated from enum value: PASSPHRASE_ACCEPTED = 4;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["PASSPHRASE_ACCEPTED"] = 4] = "PASSPHRASE_ACCEPTED";
    /**
     * Sync Initialization is complete.
     *
     * @generated from enum value: INITIALIZATION_COMPLETE = 5;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["INITIALIZATION_COMPLETE"] = 5] = "INITIALIZATION_COMPLETE";
    /**
     * Server sent stop syncing permanently. This event should never be seen by
     * the server in the absence of bugs.
     *
     * @generated from enum value: STOP_SYNCING_PERMANENTLY = 6;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["STOP_SYNCING_PERMANENTLY"] = 6] = "STOP_SYNCING_PERMANENTLY";
    /**
     * Client has finished encrypting all data.
     * DEPRECATED_ENCRYPTION_COMPLETE = 7;
     * Client received an actionable error.
     *
     * @generated from enum value: ACTIONABLE_ERROR = 8;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["ACTIONABLE_ERROR"] = 8] = "ACTIONABLE_ERROR";
    /**
     * Set of encrypted types has changed.
     *
     * @generated from enum value: ENCRYPTED_TYPES_CHANGED = 9;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["ENCRYPTED_TYPES_CHANGED"] = 9] = "ENCRYPTED_TYPES_CHANGED";
    /**
     * The encryption passphrase state changed.
     *
     * @generated from enum value: PASSPHRASE_TYPE_CHANGED = 10;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["PASSPHRASE_TYPE_CHANGED"] = 10] = "PASSPHRASE_TYPE_CHANGED";
    /**
     * A new keystore encryption token was persisted. Deprecated 11/2021.
     *
     * @generated from enum value: DEPRECATED_KEYSTORE_TOKEN_UPDATED = 11;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["DEPRECATED_KEYSTORE_TOKEN_UPDATED"] = 11] = "DEPRECATED_KEYSTORE_TOKEN_UPDATED";
    /**
     * The datatype manager has finished an at least partially successful
     * configuration and is once again syncing with the server.
     *
     * @generated from enum value: CONFIGURE_COMPLETE = 12;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["CONFIGURE_COMPLETE"] = 12] = "CONFIGURE_COMPLETE";
    /**
     * A new cryptographer bootstrap token was generated.
     *
     * @generated from enum value: DEPRECATED_BOOTSTRAP_TOKEN_UPDATED = 13;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["DEPRECATED_BOOTSTRAP_TOKEN_UPDATED"] = 13] = "DEPRECATED_BOOTSTRAP_TOKEN_UPDATED";
    /**
     * Cryptographer needs trusted vault decryption keys.
     *
     * @generated from enum value: TRUSTED_VAULT_KEY_REQUIRED = 14;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["TRUSTED_VAULT_KEY_REQUIRED"] = 14] = "TRUSTED_VAULT_KEY_REQUIRED";
    /**
     * Cryptographer no longer needs trusted vault decryption keys.
     *
     * @generated from enum value: TRUSTED_VAULT_KEY_ACCEPTED = 15;
     */
    SyncEnums_SingletonDebugEventType[SyncEnums_SingletonDebugEventType["TRUSTED_VAULT_KEY_ACCEPTED"] = 15] = "TRUSTED_VAULT_KEY_ACCEPTED";
})(SyncEnums_SingletonDebugEventType || (SyncEnums_SingletonDebugEventType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.SingletonDebugEventType.
 */
export const SyncEnums_SingletonDebugEventTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 0);
/**
 * Types of transitions between pages.
 *
 * @generated from enum sync_pb.SyncEnums.PageTransition
 */
export var SyncEnums_PageTransition;
(function (SyncEnums_PageTransition) {
    /**
     * @generated from enum value: LINK = 0;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["LINK"] = 0] = "LINK";
    /**
     * @generated from enum value: TYPED = 1;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["TYPED"] = 1] = "TYPED";
    /**
     * @generated from enum value: AUTO_BOOKMARK = 2;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["AUTO_BOOKMARK"] = 2] = "AUTO_BOOKMARK";
    /**
     * @generated from enum value: AUTO_SUBFRAME = 3;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["AUTO_SUBFRAME"] = 3] = "AUTO_SUBFRAME";
    /**
     * @generated from enum value: MANUAL_SUBFRAME = 4;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["MANUAL_SUBFRAME"] = 4] = "MANUAL_SUBFRAME";
    /**
     * @generated from enum value: GENERATED = 5;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["GENERATED"] = 5] = "GENERATED";
    /**
     * @generated from enum value: AUTO_TOPLEVEL = 6;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["AUTO_TOPLEVEL"] = 6] = "AUTO_TOPLEVEL";
    /**
     * @generated from enum value: FORM_SUBMIT = 7;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["FORM_SUBMIT"] = 7] = "FORM_SUBMIT";
    /**
     * @generated from enum value: RELOAD = 8;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["RELOAD"] = 8] = "RELOAD";
    /**
     * @generated from enum value: KEYWORD = 9;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["KEYWORD"] = 9] = "KEYWORD";
    /**
     * The below two were mistakenly added but never properly used. They are
     * actually transition qualifiers, and are set independently of other
     * qualifiers and of the main transitions. See session_specifics.proto for
     * the list of synced transition qualifiers.
     * DEPRECATED_CHAIN_START = 12;
     * DEPRECATED_CHAIN_END = 13;
     *
     * @generated from enum value: KEYWORD_GENERATED = 10;
     */
    SyncEnums_PageTransition[SyncEnums_PageTransition["KEYWORD_GENERATED"] = 10] = "KEYWORD_GENERATED";
})(SyncEnums_PageTransition || (SyncEnums_PageTransition = {}));
/**
 * Describes the enum sync_pb.SyncEnums.PageTransition.
 */
export const SyncEnums_PageTransitionSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 1);
/**
 * Types of redirects that triggered a transition.
 *
 * @generated from enum sync_pb.SyncEnums.PageTransitionRedirectType
 */
export var SyncEnums_PageTransitionRedirectType;
(function (SyncEnums_PageTransitionRedirectType) {
    /**
     * @generated from enum value: CLIENT_REDIRECT = 1;
     */
    SyncEnums_PageTransitionRedirectType[SyncEnums_PageTransitionRedirectType["CLIENT_REDIRECT"] = 1] = "CLIENT_REDIRECT";
    /**
     * @generated from enum value: SERVER_REDIRECT = 2;
     */
    SyncEnums_PageTransitionRedirectType[SyncEnums_PageTransitionRedirectType["SERVER_REDIRECT"] = 2] = "SERVER_REDIRECT";
})(SyncEnums_PageTransitionRedirectType || (SyncEnums_PageTransitionRedirectType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.PageTransitionRedirectType.
 */
export const SyncEnums_PageTransitionRedirectTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 2);
/**
 * @generated from enum sync_pb.SyncEnums.ErrorType
 */
export var SyncEnums_ErrorType;
(function (SyncEnums_ErrorType) {
    /**
     * @generated from enum value: SUCCESS = 0;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["SUCCESS"] = 0] = "SUCCESS";
    /**
     * DEPRECATED_ACCESS_DENIED = 1;
     * Returned when the server and client disagree on the store birthday. This
     * should be interpreted as all local sync metadata requiring cleanup,
     * obviously including the locally-cached store birthday.
     *
     * @generated from enum value: NOT_MY_BIRTHDAY = 2;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["NOT_MY_BIRTHDAY"] = 2] = "NOT_MY_BIRTHDAY";
    /**
     * Returned when the store has exceeded the allowed bandwidth utilization.
     *
     * @generated from enum value: THROTTLED = 3;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["THROTTLED"] = 3] = "THROTTLED";
    /**
     * DEPRECATED_AUTH_EXPIRED = 4;
     * DEPRECATED_USER_NOT_ACTIVATED = 5;
     * DEPRECATED_AUTH_INVALID = 6;
     * DEPRECATED_CLEAR_PENDING = 7;
     * A transient error occurred (e.g. a backend timeout). The client should
     * try again later.
     *
     * @generated from enum value: TRANSIENT_ERROR = 8;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["TRANSIENT_ERROR"] = 8] = "TRANSIENT_ERROR";
    /**
     * A server-side migration has taken place for one or more data types. The
     * client should clear the cache for these data types only and then re-sync
     * with a server.
     *
     * @generated from enum value: MIGRATION_DONE = 9;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["MIGRATION_DONE"] = 9] = "MIGRATION_DONE";
    /**
     * An administrator disabled sync for this domain.
     *
     * @generated from enum value: DISABLED_BY_ADMIN = 10;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["DISABLED_BY_ADMIN"] = 10] = "DISABLED_BY_ADMIN";
    /**
     * Deprecated in M50.
     * DEPRECATED_USER_ROLLBACK = 11;
     * Returned when the client wants to update several data types, but some of
     * them failed (e.g. throttled).
     *
     * @generated from enum value: PARTIAL_FAILURE = 12;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["PARTIAL_FAILURE"] = 12] = "PARTIAL_FAILURE";
    /**
     * Returned when the server detects that this client's sync metadata is
     * obsolete. The client should reset local sync metadata and restart
     * syncing.
     *
     * @generated from enum value: CLIENT_DATA_OBSOLETE = 13;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["CLIENT_DATA_OBSOLETE"] = 13] = "CLIENT_DATA_OBSOLETE";
    /**
     * Returned when the server detects that the encryption state (Nigori,
     * keystore keys) has been reset/overridden, which means the local
     * Nigori-related state is obsolete and should be cleared.
     * Introduced in M84.
     *
     * @generated from enum value: ENCRYPTION_OBSOLETE = 14;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["ENCRYPTION_OBSOLETE"] = 14] = "ENCRYPTION_OBSOLETE";
    /**
     * Unknown value. This should never be explicitly used; it is the default
     * value when an out-of-date client parses a value it doesn't recognize.
     *
     * @generated from enum value: UNKNOWN = 100;
     */
    SyncEnums_ErrorType[SyncEnums_ErrorType["UNKNOWN"] = 100] = "UNKNOWN";
})(SyncEnums_ErrorType || (SyncEnums_ErrorType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.ErrorType.
 */
export const SyncEnums_ErrorTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 3);
/**
 * @generated from enum sync_pb.SyncEnums.Action
 */
export var SyncEnums_Action;
(function (SyncEnums_Action) {
    /**
     * Upgrade the client to latest version.
     *
     * @generated from enum value: UPGRADE_CLIENT = 0;
     */
    SyncEnums_Action[SyncEnums_Action["UPGRADE_CLIENT"] = 0] = "UPGRADE_CLIENT";
    /**
     * DEPRECATED_CLEAR_USER_DATA_AND_RESYNC = 1;
     * DEPRECATED_ENABLE_SYNC_ON_ACCOUNT = 2;
     * DEPRECATED_STOP_AND_RESTART_SYNC = 3;
     * DEPRECATED_DISABLE_SYNC_ON_CLIENT = 4;
     *
     * This is the default.
     *
     * @generated from enum value: UNKNOWN_ACTION = 5;
     */
    SyncEnums_Action[SyncEnums_Action["UNKNOWN_ACTION"] = 5] = "UNKNOWN_ACTION";
})(SyncEnums_Action || (SyncEnums_Action = {}));
/**
 * Describes the enum sync_pb.SyncEnums.Action.
 */
export const SyncEnums_ActionSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 4);
/**
 * New enums to describe the device type were introduced; OsType and
 * FormFactor. Deprecated 12/2022.
 * TODO(1395353): Remove deprecated values from DeviceType enum.
 *
 * @generated from enum sync_pb.SyncEnums.DeviceType
 */
export var SyncEnums_DeviceType;
(function (SyncEnums_DeviceType) {
    /**
     * @generated from enum value: TYPE_UNSET = 0 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_UNSET"] = 0] = "TYPE_UNSET";
    /**
     * @generated from enum value: TYPE_WIN = 1 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_WIN"] = 1] = "TYPE_WIN";
    /**
     * @generated from enum value: TYPE_MAC = 2 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_MAC"] = 2] = "TYPE_MAC";
    /**
     * @generated from enum value: TYPE_LINUX = 3 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_LINUX"] = 3] = "TYPE_LINUX";
    /**
     * @generated from enum value: TYPE_CROS = 4 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_CROS"] = 4] = "TYPE_CROS";
    /**
     * @generated from enum value: TYPE_OTHER = 5 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_OTHER"] = 5] = "TYPE_OTHER";
    /**
     * @generated from enum value: TYPE_PHONE = 6 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_PHONE"] = 6] = "TYPE_PHONE";
    /**
     * @generated from enum value: TYPE_TABLET = 7 [deprecated = true];
     * @deprecated
     */
    SyncEnums_DeviceType[SyncEnums_DeviceType["TYPE_TABLET"] = 7] = "TYPE_TABLET";
})(SyncEnums_DeviceType || (SyncEnums_DeviceType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.DeviceType.
 */
export const SyncEnums_DeviceTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 5);
/**
 * Types of device OS.
 *
 * @generated from enum sync_pb.SyncEnums.OsType
 */
export var SyncEnums_OsType;
(function (SyncEnums_OsType) {
    /**
     * @generated from enum value: OS_TYPE_UNSPECIFIED = 0;
     */
    SyncEnums_OsType[SyncEnums_OsType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: OS_TYPE_WINDOWS = 1;
     */
    SyncEnums_OsType[SyncEnums_OsType["WINDOWS"] = 1] = "WINDOWS";
    /**
     * @generated from enum value: OS_TYPE_MAC = 2;
     */
    SyncEnums_OsType[SyncEnums_OsType["MAC"] = 2] = "MAC";
    /**
     * @generated from enum value: OS_TYPE_LINUX = 3;
     */
    SyncEnums_OsType[SyncEnums_OsType["LINUX"] = 3] = "LINUX";
    /**
     * @generated from enum value: OS_TYPE_CHROME_OS_ASH = 4;
     */
    SyncEnums_OsType[SyncEnums_OsType["CHROME_OS_ASH"] = 4] = "CHROME_OS_ASH";
    /**
     * @generated from enum value: OS_TYPE_ANDROID = 5;
     */
    SyncEnums_OsType[SyncEnums_OsType["ANDROID"] = 5] = "ANDROID";
    /**
     * @generated from enum value: OS_TYPE_IOS = 6;
     */
    SyncEnums_OsType[SyncEnums_OsType["IOS"] = 6] = "IOS";
    /**
     * @generated from enum value: OS_TYPE_CHROME_OS_LACROS = 7;
     */
    SyncEnums_OsType[SyncEnums_OsType["CHROME_OS_LACROS"] = 7] = "CHROME_OS_LACROS";
    /**
     * @generated from enum value: OS_TYPE_FUCHSIA = 8;
     */
    SyncEnums_OsType[SyncEnums_OsType["FUCHSIA"] = 8] = "FUCHSIA";
})(SyncEnums_OsType || (SyncEnums_OsType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.OsType.
 */
export const SyncEnums_OsTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 6);
/**
 * Types of device form factors.
 *
 * @generated from enum sync_pb.SyncEnums.DeviceFormFactor
 */
export var SyncEnums_DeviceFormFactor;
(function (SyncEnums_DeviceFormFactor) {
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_UNSPECIFIED = 0;
     */
    SyncEnums_DeviceFormFactor[SyncEnums_DeviceFormFactor["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_DESKTOP = 1;
     */
    SyncEnums_DeviceFormFactor[SyncEnums_DeviceFormFactor["DESKTOP"] = 1] = "DESKTOP";
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_PHONE = 2;
     */
    SyncEnums_DeviceFormFactor[SyncEnums_DeviceFormFactor["PHONE"] = 2] = "PHONE";
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_TABLET = 3;
     */
    SyncEnums_DeviceFormFactor[SyncEnums_DeviceFormFactor["TABLET"] = 3] = "TABLET";
})(SyncEnums_DeviceFormFactor || (SyncEnums_DeviceFormFactor = {}));
/**
 * Describes the enum sync_pb.SyncEnums.DeviceFormFactor.
 */
export const SyncEnums_DeviceFormFactorSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 7);
/**
 * Types of browsers; used for history-related data types.
 *
 * @generated from enum sync_pb.SyncEnums.BrowserType
 */
export var SyncEnums_BrowserType;
(function (SyncEnums_BrowserType) {
    /**
     * @generated from enum value: BROWSER_TYPE_UNKNOWN = 0;
     */
    SyncEnums_BrowserType[SyncEnums_BrowserType["BROWSER_TYPE_UNKNOWN"] = 0] = "BROWSER_TYPE_UNKNOWN";
    /**
     * A normal tabbed window.
     *
     * @generated from enum value: TYPE_TABBED = 1;
     */
    SyncEnums_BrowserType[SyncEnums_BrowserType["TYPE_TABBED"] = 1] = "TYPE_TABBED";
    /**
     * A popup window.
     *
     * @generated from enum value: TYPE_POPUP = 2;
     */
    SyncEnums_BrowserType[SyncEnums_BrowserType["TYPE_POPUP"] = 2] = "TYPE_POPUP";
    /**
     * A custom tab within an app.
     *
     * @generated from enum value: TYPE_CUSTOM_TAB = 3;
     */
    SyncEnums_BrowserType[SyncEnums_BrowserType["TYPE_CUSTOM_TAB"] = 3] = "TYPE_CUSTOM_TAB";
})(SyncEnums_BrowserType || (SyncEnums_BrowserType = {}));
/**
 * Describes the enum sync_pb.SyncEnums.BrowserType.
 */
export const SyncEnums_BrowserTypeSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 8);
/**
 * The "password state" is the presence/absence of a password field on a
 * website; used for history-related data types.
 *
 * @generated from enum sync_pb.SyncEnums.PasswordState
 */
export var SyncEnums_PasswordState;
(function (SyncEnums_PasswordState) {
    /**
     * @generated from enum value: PASSWORD_STATE_UNKNOWN = 0;
     */
    SyncEnums_PasswordState[SyncEnums_PasswordState["PASSWORD_STATE_UNKNOWN"] = 0] = "PASSWORD_STATE_UNKNOWN";
    /**
     * @generated from enum value: NO_PASSWORD_FIELD = 1;
     */
    SyncEnums_PasswordState[SyncEnums_PasswordState["NO_PASSWORD_FIELD"] = 1] = "NO_PASSWORD_FIELD";
    /**
     * @generated from enum value: HAS_PASSWORD_FIELD = 2;
     */
    SyncEnums_PasswordState[SyncEnums_PasswordState["HAS_PASSWORD_FIELD"] = 2] = "HAS_PASSWORD_FIELD";
})(SyncEnums_PasswordState || (SyncEnums_PasswordState = {}));
/**
 * Describes the enum sync_pb.SyncEnums.PasswordState.
 */
export const SyncEnums_PasswordStateSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 9);
/**
 * This is the successor to GetUpdatesSource.  It merges the "normal mode"
 * values (LOCAL, NOTIFICATION and DATATYPE_REFRESH), which were never really
 * mutually exclusive to being with, into the GU_TRIGGER value.  It also
 * drops support for some old values that are not supported by newer clients.
 *
 * Mind the gaps: Some values are intentionally unused because we want to
 * keep the values in sync with GetUpdatesSource as much as possible.  Please
 * don't add any values < 12 unless there's a good reason for it.
 *
 * Introduced in M28.
 *
 * @generated from enum sync_pb.SyncEnums.GetUpdatesOrigin
 */
export var SyncEnums_GetUpdatesOrigin;
(function (SyncEnums_GetUpdatesOrigin) {
    /**
     * The source was not set by the caller.
     *
     * @generated from enum value: UNKNOWN_ORIGIN = 0;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["UNKNOWN_ORIGIN"] = 0] = "UNKNOWN_ORIGIN";
    /**
     * The source of the update was periodic polling.
     *
     * @generated from enum value: PERIODIC = 4;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["PERIODIC"] = 4] = "PERIODIC";
    /**
     * The client is in configuration mode
     *
     * @generated from enum value: NEWLY_SUPPORTED_DATATYPE = 7;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["NEWLY_SUPPORTED_DATATYPE"] = 7] = "NEWLY_SUPPORTED_DATATYPE";
    /**
     * because it's syncing all datatypes, and
     * support for a new datatype was recently
     * released via a software auto-update.
     *
     * The client is in configuration mode because a
     *
     * @generated from enum value: MIGRATION = 8;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["MIGRATION"] = 8] = "MIGRATION";
    /**
     * MIGRATION_DONE error previously returned by the
     * server necessitated resynchronization.
     *
     * The client is in configuration mode because the
     *
     * @generated from enum value: NEW_CLIENT = 9;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["NEW_CLIENT"] = 9] = "NEW_CLIENT";
    /**
     * user enabled sync for the first time.  Not to be
     * confused with FIRST_UPDATE.
     *
     * The client is in configuration mode because the
     *
     * @generated from enum value: RECONFIGURATION = 10;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["RECONFIGURATION"] = 10] = "RECONFIGURATION";
    /**
     * user opted to sync a different set of datatypes.
     *
     * The client is in 'normal' mode.  It may have several
     *
     * @generated from enum value: GU_TRIGGER = 12;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["GU_TRIGGER"] = 12] = "GU_TRIGGER";
    /**
     * reasons for requesting an update.  See the per-type
     * GetUpdateTriggers message for more details.
     *
     * A retry GU to pick up updates missed by last GU due to
     *
     * @generated from enum value: RETRY = 13;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["RETRY"] = 13] = "RETRY";
    /**
     * replication delay, missing hints, etc.
     *
     * A GU to programmatically enable/disable a
     *
     * @generated from enum value: PROGRAMMATIC = 14;
     */
    SyncEnums_GetUpdatesOrigin[SyncEnums_GetUpdatesOrigin["PROGRAMMATIC"] = 14] = "PROGRAMMATIC";
})(SyncEnums_GetUpdatesOrigin || (SyncEnums_GetUpdatesOrigin = {}));
/**
 * Describes the enum sync_pb.SyncEnums.GetUpdatesOrigin.
 */
export const SyncEnums_GetUpdatesOriginSchema = /*@__PURE__*/ enumDesc(file_sync_enums, 0, 10);
//# sourceMappingURL=sync_enums_pb.js.map