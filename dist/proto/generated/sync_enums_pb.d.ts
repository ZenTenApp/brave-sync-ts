import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file sync_enums.proto.
 */
export declare const file_sync_enums: GenFile;
/**
 * @generated from message sync_pb.SyncEnums
 */
export type SyncEnums = Message<"sync_pb.SyncEnums"> & {};
/**
 * Describes the message sync_pb.SyncEnums.
 * Use `create(SyncEnumsSchema)` to create a new message.
 */
export declare const SyncEnumsSchema: GenMessage<SyncEnums>;
/**
 * These events are sent by the DebugInfo class for singleton events.
 *
 * @generated from enum sync_pb.SyncEnums.SingletonDebugEventType
 */
export declare enum SyncEnums_SingletonDebugEventType {
    /**
     * Connection status change. Note this gets generated even during a
     * successful connection.
     *
     * @generated from enum value: CONNECTION_STATUS_CHANGE = 1;
     */
    CONNECTION_STATUS_CHANGE = 1,
    /**
     * Client received an updated token.
     *
     * @generated from enum value: UPDATED_TOKEN = 2;
     */
    UPDATED_TOKEN = 2,
    /**
     * Cryptographer needs passphrase.
     *
     * @generated from enum value: PASSPHRASE_REQUIRED = 3;
     */
    PASSPHRASE_REQUIRED = 3,
    /**
     * Passphrase was accepted by cryptographer.
     *
     * @generated from enum value: PASSPHRASE_ACCEPTED = 4;
     */
    PASSPHRASE_ACCEPTED = 4,
    /**
     * Sync Initialization is complete.
     *
     * @generated from enum value: INITIALIZATION_COMPLETE = 5;
     */
    INITIALIZATION_COMPLETE = 5,
    /**
     * Server sent stop syncing permanently. This event should never be seen by
     * the server in the absence of bugs.
     *
     * @generated from enum value: STOP_SYNCING_PERMANENTLY = 6;
     */
    STOP_SYNCING_PERMANENTLY = 6,
    /**
     * Client has finished encrypting all data.
     * DEPRECATED_ENCRYPTION_COMPLETE = 7;
     * Client received an actionable error.
     *
     * @generated from enum value: ACTIONABLE_ERROR = 8;
     */
    ACTIONABLE_ERROR = 8,
    /**
     * Set of encrypted types has changed.
     *
     * @generated from enum value: ENCRYPTED_TYPES_CHANGED = 9;
     */
    ENCRYPTED_TYPES_CHANGED = 9,
    /**
     * The encryption passphrase state changed.
     *
     * @generated from enum value: PASSPHRASE_TYPE_CHANGED = 10;
     */
    PASSPHRASE_TYPE_CHANGED = 10,
    /**
     * A new keystore encryption token was persisted. Deprecated 11/2021.
     *
     * @generated from enum value: DEPRECATED_KEYSTORE_TOKEN_UPDATED = 11;
     */
    DEPRECATED_KEYSTORE_TOKEN_UPDATED = 11,
    /**
     * The datatype manager has finished an at least partially successful
     * configuration and is once again syncing with the server.
     *
     * @generated from enum value: CONFIGURE_COMPLETE = 12;
     */
    CONFIGURE_COMPLETE = 12,
    /**
     * A new cryptographer bootstrap token was generated.
     *
     * @generated from enum value: DEPRECATED_BOOTSTRAP_TOKEN_UPDATED = 13;
     */
    DEPRECATED_BOOTSTRAP_TOKEN_UPDATED = 13,
    /**
     * Cryptographer needs trusted vault decryption keys.
     *
     * @generated from enum value: TRUSTED_VAULT_KEY_REQUIRED = 14;
     */
    TRUSTED_VAULT_KEY_REQUIRED = 14,
    /**
     * Cryptographer no longer needs trusted vault decryption keys.
     *
     * @generated from enum value: TRUSTED_VAULT_KEY_ACCEPTED = 15;
     */
    TRUSTED_VAULT_KEY_ACCEPTED = 15
}
/**
 * Describes the enum sync_pb.SyncEnums.SingletonDebugEventType.
 */
export declare const SyncEnums_SingletonDebugEventTypeSchema: GenEnum<SyncEnums_SingletonDebugEventType>;
/**
 * Types of transitions between pages.
 *
 * @generated from enum sync_pb.SyncEnums.PageTransition
 */
export declare enum SyncEnums_PageTransition {
    /**
     * @generated from enum value: LINK = 0;
     */
    LINK = 0,
    /**
     * @generated from enum value: TYPED = 1;
     */
    TYPED = 1,
    /**
     * @generated from enum value: AUTO_BOOKMARK = 2;
     */
    AUTO_BOOKMARK = 2,
    /**
     * @generated from enum value: AUTO_SUBFRAME = 3;
     */
    AUTO_SUBFRAME = 3,
    /**
     * @generated from enum value: MANUAL_SUBFRAME = 4;
     */
    MANUAL_SUBFRAME = 4,
    /**
     * @generated from enum value: GENERATED = 5;
     */
    GENERATED = 5,
    /**
     * @generated from enum value: AUTO_TOPLEVEL = 6;
     */
    AUTO_TOPLEVEL = 6,
    /**
     * @generated from enum value: FORM_SUBMIT = 7;
     */
    FORM_SUBMIT = 7,
    /**
     * @generated from enum value: RELOAD = 8;
     */
    RELOAD = 8,
    /**
     * @generated from enum value: KEYWORD = 9;
     */
    KEYWORD = 9,
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
    KEYWORD_GENERATED = 10
}
/**
 * Describes the enum sync_pb.SyncEnums.PageTransition.
 */
export declare const SyncEnums_PageTransitionSchema: GenEnum<SyncEnums_PageTransition>;
/**
 * Types of redirects that triggered a transition.
 *
 * @generated from enum sync_pb.SyncEnums.PageTransitionRedirectType
 */
export declare enum SyncEnums_PageTransitionRedirectType {
    /**
     * @generated from enum value: CLIENT_REDIRECT = 1;
     */
    CLIENT_REDIRECT = 1,
    /**
     * @generated from enum value: SERVER_REDIRECT = 2;
     */
    SERVER_REDIRECT = 2
}
/**
 * Describes the enum sync_pb.SyncEnums.PageTransitionRedirectType.
 */
export declare const SyncEnums_PageTransitionRedirectTypeSchema: GenEnum<SyncEnums_PageTransitionRedirectType>;
/**
 * @generated from enum sync_pb.SyncEnums.ErrorType
 */
export declare enum SyncEnums_ErrorType {
    /**
     * @generated from enum value: SUCCESS = 0;
     */
    SUCCESS = 0,
    /**
     * DEPRECATED_ACCESS_DENIED = 1;
     * Returned when the server and client disagree on the store birthday. This
     * should be interpreted as all local sync metadata requiring cleanup,
     * obviously including the locally-cached store birthday.
     *
     * @generated from enum value: NOT_MY_BIRTHDAY = 2;
     */
    NOT_MY_BIRTHDAY = 2,
    /**
     * Returned when the store has exceeded the allowed bandwidth utilization.
     *
     * @generated from enum value: THROTTLED = 3;
     */
    THROTTLED = 3,
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
    TRANSIENT_ERROR = 8,
    /**
     * A server-side migration has taken place for one or more data types. The
     * client should clear the cache for these data types only and then re-sync
     * with a server.
     *
     * @generated from enum value: MIGRATION_DONE = 9;
     */
    MIGRATION_DONE = 9,
    /**
     * An administrator disabled sync for this domain.
     *
     * @generated from enum value: DISABLED_BY_ADMIN = 10;
     */
    DISABLED_BY_ADMIN = 10,
    /**
     * Deprecated in M50.
     * DEPRECATED_USER_ROLLBACK = 11;
     * Returned when the client wants to update several data types, but some of
     * them failed (e.g. throttled).
     *
     * @generated from enum value: PARTIAL_FAILURE = 12;
     */
    PARTIAL_FAILURE = 12,
    /**
     * Returned when the server detects that this client's sync metadata is
     * obsolete. The client should reset local sync metadata and restart
     * syncing.
     *
     * @generated from enum value: CLIENT_DATA_OBSOLETE = 13;
     */
    CLIENT_DATA_OBSOLETE = 13,
    /**
     * Returned when the server detects that the encryption state (Nigori,
     * keystore keys) has been reset/overridden, which means the local
     * Nigori-related state is obsolete and should be cleared.
     * Introduced in M84.
     *
     * @generated from enum value: ENCRYPTION_OBSOLETE = 14;
     */
    ENCRYPTION_OBSOLETE = 14,
    /**
     * Unknown value. This should never be explicitly used; it is the default
     * value when an out-of-date client parses a value it doesn't recognize.
     *
     * @generated from enum value: UNKNOWN = 100;
     */
    UNKNOWN = 100
}
/**
 * Describes the enum sync_pb.SyncEnums.ErrorType.
 */
export declare const SyncEnums_ErrorTypeSchema: GenEnum<SyncEnums_ErrorType>;
/**
 * @generated from enum sync_pb.SyncEnums.Action
 */
export declare enum SyncEnums_Action {
    /**
     * Upgrade the client to latest version.
     *
     * @generated from enum value: UPGRADE_CLIENT = 0;
     */
    UPGRADE_CLIENT = 0,
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
    UNKNOWN_ACTION = 5
}
/**
 * Describes the enum sync_pb.SyncEnums.Action.
 */
export declare const SyncEnums_ActionSchema: GenEnum<SyncEnums_Action>;
/**
 * New enums to describe the device type were introduced; OsType and
 * FormFactor. Deprecated 12/2022.
 * TODO(1395353): Remove deprecated values from DeviceType enum.
 *
 * @generated from enum sync_pb.SyncEnums.DeviceType
 */
export declare enum SyncEnums_DeviceType {
    /**
     * @generated from enum value: TYPE_UNSET = 0 [deprecated = true];
     * @deprecated
     */
    TYPE_UNSET = 0,
    /**
     * @generated from enum value: TYPE_WIN = 1 [deprecated = true];
     * @deprecated
     */
    TYPE_WIN = 1,
    /**
     * @generated from enum value: TYPE_MAC = 2 [deprecated = true];
     * @deprecated
     */
    TYPE_MAC = 2,
    /**
     * @generated from enum value: TYPE_LINUX = 3 [deprecated = true];
     * @deprecated
     */
    TYPE_LINUX = 3,
    /**
     * @generated from enum value: TYPE_CROS = 4 [deprecated = true];
     * @deprecated
     */
    TYPE_CROS = 4,
    /**
     * @generated from enum value: TYPE_OTHER = 5 [deprecated = true];
     * @deprecated
     */
    TYPE_OTHER = 5,
    /**
     * @generated from enum value: TYPE_PHONE = 6 [deprecated = true];
     * @deprecated
     */
    TYPE_PHONE = 6,
    /**
     * @generated from enum value: TYPE_TABLET = 7 [deprecated = true];
     * @deprecated
     */
    TYPE_TABLET = 7
}
/**
 * Describes the enum sync_pb.SyncEnums.DeviceType.
 */
export declare const SyncEnums_DeviceTypeSchema: GenEnum<SyncEnums_DeviceType>;
/**
 * Types of device OS.
 *
 * @generated from enum sync_pb.SyncEnums.OsType
 */
export declare enum SyncEnums_OsType {
    /**
     * @generated from enum value: OS_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: OS_TYPE_WINDOWS = 1;
     */
    WINDOWS = 1,
    /**
     * @generated from enum value: OS_TYPE_MAC = 2;
     */
    MAC = 2,
    /**
     * @generated from enum value: OS_TYPE_LINUX = 3;
     */
    LINUX = 3,
    /**
     * @generated from enum value: OS_TYPE_CHROME_OS_ASH = 4;
     */
    CHROME_OS_ASH = 4,
    /**
     * @generated from enum value: OS_TYPE_ANDROID = 5;
     */
    ANDROID = 5,
    /**
     * @generated from enum value: OS_TYPE_IOS = 6;
     */
    IOS = 6,
    /**
     * @generated from enum value: OS_TYPE_CHROME_OS_LACROS = 7;
     */
    CHROME_OS_LACROS = 7,
    /**
     * @generated from enum value: OS_TYPE_FUCHSIA = 8;
     */
    FUCHSIA = 8
}
/**
 * Describes the enum sync_pb.SyncEnums.OsType.
 */
export declare const SyncEnums_OsTypeSchema: GenEnum<SyncEnums_OsType>;
/**
 * Types of device form factors.
 *
 * @generated from enum sync_pb.SyncEnums.DeviceFormFactor
 */
export declare enum SyncEnums_DeviceFormFactor {
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_DESKTOP = 1;
     */
    DESKTOP = 1,
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_PHONE = 2;
     */
    PHONE = 2,
    /**
     * @generated from enum value: DEVICE_FORM_FACTOR_TABLET = 3;
     */
    TABLET = 3
}
/**
 * Describes the enum sync_pb.SyncEnums.DeviceFormFactor.
 */
export declare const SyncEnums_DeviceFormFactorSchema: GenEnum<SyncEnums_DeviceFormFactor>;
/**
 * Types of browsers; used for history-related data types.
 *
 * @generated from enum sync_pb.SyncEnums.BrowserType
 */
export declare enum SyncEnums_BrowserType {
    /**
     * @generated from enum value: BROWSER_TYPE_UNKNOWN = 0;
     */
    BROWSER_TYPE_UNKNOWN = 0,
    /**
     * A normal tabbed window.
     *
     * @generated from enum value: TYPE_TABBED = 1;
     */
    TYPE_TABBED = 1,
    /**
     * A popup window.
     *
     * @generated from enum value: TYPE_POPUP = 2;
     */
    TYPE_POPUP = 2,
    /**
     * A custom tab within an app.
     *
     * @generated from enum value: TYPE_CUSTOM_TAB = 3;
     */
    TYPE_CUSTOM_TAB = 3
}
/**
 * Describes the enum sync_pb.SyncEnums.BrowserType.
 */
export declare const SyncEnums_BrowserTypeSchema: GenEnum<SyncEnums_BrowserType>;
/**
 * The "password state" is the presence/absence of a password field on a
 * website; used for history-related data types.
 *
 * @generated from enum sync_pb.SyncEnums.PasswordState
 */
export declare enum SyncEnums_PasswordState {
    /**
     * @generated from enum value: PASSWORD_STATE_UNKNOWN = 0;
     */
    PASSWORD_STATE_UNKNOWN = 0,
    /**
     * @generated from enum value: NO_PASSWORD_FIELD = 1;
     */
    NO_PASSWORD_FIELD = 1,
    /**
     * @generated from enum value: HAS_PASSWORD_FIELD = 2;
     */
    HAS_PASSWORD_FIELD = 2
}
/**
 * Describes the enum sync_pb.SyncEnums.PasswordState.
 */
export declare const SyncEnums_PasswordStateSchema: GenEnum<SyncEnums_PasswordState>;
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
export declare enum SyncEnums_GetUpdatesOrigin {
    /**
     * The source was not set by the caller.
     *
     * @generated from enum value: UNKNOWN_ORIGIN = 0;
     */
    UNKNOWN_ORIGIN = 0,
    /**
     * The source of the update was periodic polling.
     *
     * @generated from enum value: PERIODIC = 4;
     */
    PERIODIC = 4,
    /**
     * The client is in configuration mode
     *
     * @generated from enum value: NEWLY_SUPPORTED_DATATYPE = 7;
     */
    NEWLY_SUPPORTED_DATATYPE = 7,
    /**
     * because it's syncing all datatypes, and
     * support for a new datatype was recently
     * released via a software auto-update.
     *
     * The client is in configuration mode because a
     *
     * @generated from enum value: MIGRATION = 8;
     */
    MIGRATION = 8,
    /**
     * MIGRATION_DONE error previously returned by the
     * server necessitated resynchronization.
     *
     * The client is in configuration mode because the
     *
     * @generated from enum value: NEW_CLIENT = 9;
     */
    NEW_CLIENT = 9,
    /**
     * user enabled sync for the first time.  Not to be
     * confused with FIRST_UPDATE.
     *
     * The client is in configuration mode because the
     *
     * @generated from enum value: RECONFIGURATION = 10;
     */
    RECONFIGURATION = 10,
    /**
     * user opted to sync a different set of datatypes.
     *
     * The client is in 'normal' mode.  It may have several
     *
     * @generated from enum value: GU_TRIGGER = 12;
     */
    GU_TRIGGER = 12,
    /**
     * reasons for requesting an update.  See the per-type
     * GetUpdateTriggers message for more details.
     *
     * A retry GU to pick up updates missed by last GU due to
     *
     * @generated from enum value: RETRY = 13;
     */
    RETRY = 13,
    /**
     * replication delay, missing hints, etc.
     *
     * A GU to programmatically enable/disable a
     *
     * @generated from enum value: PROGRAMMATIC = 14;
     */
    PROGRAMMATIC = 14
}
/**
 * Describes the enum sync_pb.SyncEnums.GetUpdatesOrigin.
 */
export declare const SyncEnums_GetUpdatesOriginSchema: GenEnum<SyncEnums_GetUpdatesOrigin>;
//# sourceMappingURL=sync_enums_pb.d.ts.map