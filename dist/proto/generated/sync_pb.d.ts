import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { ClientCommand } from "./client_commands_pb";
import type { DebugInfo } from "./client_debug_info_pb";
import type { DataTypeContext, DataTypeProgressMarker } from "./data_type_progress_marker_pb";
import type { GetUpdatesCallerInfo } from "./get_updates_caller_info_pb";
import type { OutgoingPasswordSharingInvitationCommitError } from "./password_sharing_invitation_specifics_pb";
import type { SyncEntity } from "./sync_entity_pb";
import type { SyncEnums_Action, SyncEnums_ErrorType, SyncEnums_GetUpdatesOrigin } from "./sync_enums_pb";
import type { SharingMessageCommitError } from "./sharing_message_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file sync.proto.
 */
export declare const file_sync: GenFile;
/**
 * This message contains diagnostic information used to correlate
 * commit-related traffic with extensions-related mutations to the
 * data models in chromium.  It plays no functional role in
 * processing this CommitMessage.
 *
 * @generated from message sync_pb.ChromiumExtensionsActivity
 */
export type ChromiumExtensionsActivity = Message<"sync_pb.ChromiumExtensionsActivity"> & {
    /**
     * The human-readable ID identifying the extension responsible
     * for the traffic reported in this ChromiumExtensionsActivity.
     *
     * @generated from field: optional string extension_id = 1;
     */
    extensionId: string;
    /**
     * How many times the extension successfully invoked a write
     * operation through the bookmarks API since the last CommitMessage.
     *
     * @generated from field: optional uint32 bookmark_writes_since_last_commit = 2;
     */
    bookmarkWritesSinceLastCommit: number;
};
/**
 * Describes the message sync_pb.ChromiumExtensionsActivity.
 * Use `create(ChromiumExtensionsActivitySchema)` to create a new message.
 */
export declare const ChromiumExtensionsActivitySchema: GenMessage<ChromiumExtensionsActivity>;
/**
 * Client specific configuration information.
 *
 * @generated from message sync_pb.ClientConfigParams
 */
export type ClientConfigParams = Message<"sync_pb.ClientConfigParams"> & {
    /**
     * The set of data types this client has enabled. Note that this does not
     * include proxy types, as they do not have protocol field numbers and are
     * placeholder types that implicitly enable protocol types.
     *
     * @generated from field: repeated int32 enabled_type_ids = 1;
     */
    enabledTypeIds: number[];
    /**
     * Whether the PROXY_TABS proxy datatype is enabled on this client.
     * Deprecated and not populated anymore since M120.
     *
     * @generated from field: optional bool tabs_datatype_enabled = 2 [deprecated = true];
     * @deprecated
     */
    tabsDatatypeEnabled: boolean;
    /**
     * Whether the account(s) present in the content area's cookie jar match the
     * chrome account. If multiple accounts are present in the cookie jar, a
     * mismatch implies all of them are different from the chrome account.
     *
     * @generated from field: optional bool cookie_jar_mismatch = 3;
     */
    cookieJarMismatch: boolean;
    /**
     * Indicates that the client is not aware of any other active clients
     * interested in the committed data types. This flag shows that it is not
     * necessary to send invalidations for the committed data. A client is
     * considered active if it's DeviceInfo has updated recent enough. This flag
     * does not take into account whether standalone invalidations are enabled (as
     * opposed to |single_client_with_standalone_invalidations|). However, it's
     * set depending on interested data types of other devices, e.g. if there are
     * other devices but they are not interested in SESSION data type, and current
     * commit request contains only SESSION, it will be set to true.
     * Introduced in M88.
     *
     * @generated from field: optional bool single_client = 4;
     */
    singleClient: boolean;
    /**
     * A list of FCM registration tokens which are obtained from other clients.
     * This list is used by the server to send invalidations to all other clients.
     * If the list is empty, the server should treat this as "there is no
     * information about other clients". In practice, this happens by the next
     * causes:
     * 1. This is the old client which doesn't set this field.
     * 2. There are too many active devices and the list would have too many
     * items.
     * 3. An empty list could also mean that the current client is the only
     * client. This case should be covered by the
     * |single_client_with_standalone_invalidations| field instead (otherwise it
     * could be mixed up with older clients). The server doesn't have to use this
     * field and can ignore it. Note that this list does not take into account
     * interested data types from the other clients.
     * Introduced in M89.
     *
     * @generated from field: repeated string devices_fcm_registration_tokens = 5;
     */
    devicesFcmRegistrationTokens: string[];
    /**
     * Similar to |single_client| but takes into account only clients with enabled
     * sync standalone invalidations. When set to true, there are no other clients
     * with sync standalone invalidations interested in the committing types and
     * hence it's not necessary to send out standalone invalidations (it may still
     * be necessary to send out invalidations using the legacy system, see
     * |single_client| instead).
     * Introduced in M105.
     *
     * @generated from field: optional bool single_client_with_standalone_invalidations = 6;
     */
    singleClientWithStandaloneInvalidations: boolean;
    /**
     * Similar to |devices_fcm_registration_tokens| but takes into account clients
     * which are subscribed to the data types which are committed in current
     * commit request.
     * A list of FCM registration tokens which are obtained from other clients.
     * This list is used by the server to send invalidations to all other clients.
     * If the list is empty, the server should treat this as "there is no
     * information about other clients". In practice, this happens by the next
     * causes:
     * 1. This is the old client which doesn't set this field.
     * 2. There are too many active devices and the list would have too many
     * items.
     * 3. An empty list could also mean that the current client is the only
     * client. This case should be covered by the
     * |single_client_with_standalone_invalidations| field instead (otherwise it
     * could be mixed up with older clients). The server doesn't have to use this
     * field and can ignore it.
     * Introduced in M105.
     *
     * @generated from field: repeated string fcm_registration_tokens_for_interested_clients = 7;
     */
    fcmRegistrationTokensForInterestedClients: string[];
    /**
     * Similar to |single_client| but takes into account only clients which are
     * subscribed to old invalidations (i.e. not subscribed to sync standalone
     * invalidations). When set to true, there are no other clients subscribed to
     * old invalidations. Note that opposed to |single_client|, this flag does not
     * always take into account the list of interested data types (because
     * interested data types were introduced in M89). When the list is empty, a
     * client is considered to be subscribed to all data types. Note that "single
     * client" is a bit misleading since this will also be true if there are no
     * clients with old invalidations at all.
     * Introduced in M110.
     *
     * @generated from field: optional bool single_client_with_old_invalidations = 8;
     */
    singleClientWithOldInvalidations: boolean;
};
/**
 * Describes the message sync_pb.ClientConfigParams.
 * Use `create(ClientConfigParamsSchema)` to create a new message.
 */
export declare const ClientConfigParamsSchema: GenMessage<ClientConfigParams>;
/**
 * @generated from message sync_pb.CommitMessage
 */
export type CommitMessage = Message<"sync_pb.CommitMessage"> & {
    /**
     * @generated from field: repeated sync_pb.SyncEntity entries = 1;
     */
    entries: SyncEntity[];
    /**
     * A GUID that identifies the committing sync client.  This value will be
     * returned as originator_cache_guid for any new items.
     *
     * @generated from field: optional string cache_guid = 2;
     */
    cacheGuid: string;
    /**
     * @generated from field: repeated sync_pb.ChromiumExtensionsActivity extensions_activity = 3;
     */
    extensionsActivity: ChromiumExtensionsActivity[];
    /**
     * The configuration of this client at commit time. Used by the server to
     * make commit-time decisions about how to process datatypes that might
     * involve server-side interaction, and e.g require explicit user intent for
     * syncing a particular data type regardless of whether a commit for that
     * datatype is currently being sent up.
     *
     * @generated from field: optional sync_pb.ClientConfigParams config_params = 4;
     */
    configParams?: ClientConfigParams;
    /**
     * Set of optional per-client datatype contexts.
     *
     * @generated from field: repeated sync_pb.DataTypeContext client_contexts = 5;
     */
    clientContexts: DataTypeContext[];
    /**
     * This field need to be 256 bytes if set. This attempts to mitigate CRIME
     * attacks when sync communicate from client to server with compression. So if
     * compression is used, this need to set a 256 random ASCII bytes. If no
     * compression, this field should not be set. The server can ignore the
     * padding.
     *
     * @generated from field: optional string padding = 6;
     */
    padding: string;
};
/**
 * Describes the message sync_pb.CommitMessage.
 * Use `create(CommitMessageSchema)` to create a new message.
 */
export declare const CommitMessageSchema: GenMessage<CommitMessage>;
/**
 * @generated from message sync_pb.GetUpdatesMessage
 */
export type GetUpdatesMessage = Message<"sync_pb.GetUpdatesMessage"> & {
    /**
     * Indicates the reason for the GetUpdatesMessage.
     * This was *mostly* deprecated in M29.  GetUpdatesOrigin is the new way to
     * encode the reason for the GetUpdates request, but some parts of the server
     * still rely on this field.  It also still contains the
     * "notifications_enabled" flag which needs to be moved elsewhere before this
     * can be fully removed. See https://crbug.com/510165.
     *
     * @generated from field: optional sync_pb.GetUpdatesCallerInfo caller_info = 2;
     */
    callerInfo?: GetUpdatesCallerInfo;
    /**
     * Indicates whether related folders should be fetched.
     *
     * @generated from field: optional bool fetch_folders = 3 [default = true];
     */
    fetchFolders: boolean;
    /**
     * Per-datatype progress marker.
     *
     * With the exception of certain configuration or initial sync requests, the
     * client should include one instance of this field for each enabled data
     * type.
     *
     * @generated from field: repeated sync_pb.DataTypeProgressMarker from_progress_marker = 6;
     */
    fromProgressMarker: DataTypeProgressMarker[];
    /**
     * Indicates whether the response should be sent in chunks.  This may be
     * needed for devices with limited memory resources.  If true, the response
     * will include one or more ClientToServerResponses, with the first one
     * containing GetUpdatesMetadataResponse, and the remaining ones, if any,
     * containing GetUpdatesStreamingResponse.  These ClientToServerResponses are
     * delimited by a length prefix, which is encoded as a varint.
     *
     * @generated from field: optional bool streaming = 7 [default = false];
     */
    streaming: boolean;
    /**
     * Whether the client needs the server to provide an encryption key for this
     * account.
     * Note: this should typically only be set on the first GetUpdates a client
     * requests. Clients are expected to persist the encryption key from then on.
     * The allowed frequency for requesting encryption keys is much lower than
     * other datatypes, so repeated usage will likely result in throttling.
     *
     * @generated from field: optional bool need_encryption_key = 8 [default = false];
     */
    needEncryptionKey: boolean;
    /**
     * This value is an updated version of the GetUpdatesCallerInfo's
     * GetUpdatesSource.  It describes the reason for the GetUpdate request.
     * Introduced in M29.
     *
     * @generated from field: optional sync_pb.SyncEnums.GetUpdatesOrigin get_updates_origin = 9;
     */
    getUpdatesOrigin: SyncEnums_GetUpdatesOrigin;
    /**
     * Whether this GU also serves as a retry GU. Any GU that happens after
     * retry timer timeout is a retry GU effectively.
     *
     * @generated from field: optional bool is_retry = 10 [default = false];
     */
    isRetry: boolean;
    /**
     * Set of optional per-client datatype contexts.
     *
     * @generated from field: repeated sync_pb.DataTypeContext client_contexts = 11;
     */
    clientContexts: DataTypeContext[];
};
/**
 * Describes the message sync_pb.GetUpdatesMessage.
 * Use `create(GetUpdatesMessageSchema)` to create a new message.
 */
export declare const GetUpdatesMessageSchema: GenMessage<GetUpdatesMessage>;
/**
 * Message from a client asking the server to clear its data. This causes the
 * server to generate a new store birthday, which allows dealing reliably with
 * in-flight requests (in particular commits) from other clients.
 *
 * No arguments needed as the store birthday and user identifier are part of
 * an enclosing message.
 *
 * @generated from message sync_pb.ClearServerDataMessage
 */
export type ClearServerDataMessage = Message<"sync_pb.ClearServerDataMessage"> & {};
/**
 * Describes the message sync_pb.ClearServerDataMessage.
 * Use `create(ClearServerDataMessageSchema)` to create a new message.
 */
export declare const ClearServerDataMessageSchema: GenMessage<ClearServerDataMessage>;
/**
 * Response to a ClearServerData request.
 *
 * No result fields necessary. Success/failure is indicated in
 * ClientToServerResponse.
 *
 * @generated from message sync_pb.ClearServerDataResponse
 */
export type ClearServerDataResponse = Message<"sync_pb.ClearServerDataResponse"> & {};
/**
 * Describes the message sync_pb.ClearServerDataResponse.
 * Use `create(ClearServerDataResponseSchema)` to create a new message.
 */
export declare const ClearServerDataResponseSchema: GenMessage<ClearServerDataResponse>;
/**
 * The client must preserve, store, and resend the chip bag with
 * every request.  The server depends on the chip bag in order
 * to precisely choreograph a client-server state machines.
 *
 * Because the client stores and sends this data on every request,
 * the contents of the chip bag should be kept relatively small.
 *
 * If the server does not return a chip bag, the client must assume
 * that there has been no change to the chip bag.  The client must
 * resend the bag of chips it had prior on the next request.
 *
 * The client must make the chip bag durable if and only if it
 * processes the response from the server.
 *
 * @generated from message sync_pb.ChipBag
 */
export type ChipBag = Message<"sync_pb.ChipBag"> & {
    /**
     * Server chips are deliberately oqaque, allowing the server
     * to encapsulate its state machine logic.
     *
     * @generated from field: optional bytes server_chips = 1;
     */
    serverChips: Uint8Array;
};
/**
 * Describes the message sync_pb.ChipBag.
 * Use `create(ChipBagSchema)` to create a new message.
 */
export declare const ChipBagSchema: GenMessage<ChipBag>;
/**
 * Information about the syncer's state.
 *
 * @generated from message sync_pb.ClientStatus
 */
export type ClientStatus = Message<"sync_pb.ClientStatus"> & {
    /**
     * Flag to indicate if the client has detected hierarchy conflcits.  The flag
     * is left unset if update application has not been attempted yet.
     *
     * The server should attempt to resolve any hierarchy conflicts when this flag
     * is set.  The client may not assume that any particular action will be
     * taken.  There is no guarantee the problem will be addressed in a reasonable
     * amount of time.
     * TODO(crbug.com/1315573): Deprecated in M103.
     *
     * @generated from field: optional bool hierarchy_conflict_detected = 1 [deprecated = true];
     * @deprecated
     */
    hierarchyConflictDetected: boolean;
    /**
     * Whether the client has full sync (or, sync the feature) enabled or not.
     *
     * @generated from field: optional bool is_sync_feature_enabled = 2;
     */
    isSyncFeatureEnabled: boolean;
};
/**
 * Describes the message sync_pb.ClientStatus.
 * Use `create(ClientStatusSchema)` to create a new message.
 */
export declare const ClientStatusSchema: GenMessage<ClientStatus>;
/**
 * @generated from message sync_pb.ClientToServerMessage
 */
export type ClientToServerMessage = Message<"sync_pb.ClientToServerMessage"> & {
    /**
     * |share| field is only used on the server for logging and can sometimes
     * contain empty string. It is still useful for logging username when it can't
     * be derived from access token in case of auth error.
     *
     * @generated from field: required string share = 1;
     */
    share: string;
    /**
     * @generated from field: optional int32 protocol_version = 2 [default = 99];
     */
    protocolVersion: number;
    /**
     * Each ClientToServerMessage contains one request defined by the
     * message_contents. Each type has a corresponding message field that will be
     * present iff the message is of that type. E.g. a commit message will have a
     * message_contents of COMMIT and its commit field will be present.
     *
     * @generated from field: required sync_pb.ClientToServerMessage.Contents message_contents = 3;
     */
    messageContents: ClientToServerMessage_Contents;
    /**
     * @generated from field: optional sync_pb.CommitMessage commit = 4;
     */
    commit?: CommitMessage;
    /**
     * @generated from field: optional sync_pb.GetUpdatesMessage get_updates = 5;
     */
    getUpdates?: GetUpdatesMessage;
    /**
     * Opaque server-provided ID representing an "epoch" of the server-side data.
     * Clients must hand this opaque ID back to the server as part of all requests
     * within the same sync session (i.e. for all requests to the server except
     * the very first GetUpdates request). See analogous field
     * ClientToServerResponse.store_birthday for more details about its lifetime.
     *
     * @generated from field: optional string store_birthday = 7;
     */
    storeBirthday: string;
    /**
     * Client side state information for debugging purpose.
     * This is only sent on the first getupdates of every sync cycle,
     * as an optimization to save bandwidth.
     *
     * @generated from field: optional sync_pb.DebugInfo debug_info = 10;
     */
    debugInfo?: DebugInfo;
    /**
     * Per-client state for use by the server. Sent with every message sent to the
     * server.
     *
     * @generated from field: optional sync_pb.ChipBag bag_of_chips = 11;
     */
    bagOfChips?: ChipBag;
    /**
     * Google API key.
     *
     * @generated from field: optional string api_key = 12;
     */
    apiKey: string;
    /**
     * Client's self-reported state.
     * The client should set this on every message sent to the server, though its
     * member fields may often be unset.
     *
     * @generated from field: optional sync_pb.ClientStatus client_status = 13;
     */
    clientStatus?: ClientStatus;
    /**
     * The ID that our invalidation client used to identify itself to the server.
     * Sending the ID here allows the server to not send notifications of our own
     * changes to our invalidator.
     * The field was deprecated in M117 and is no longer populated.
     *
     * @generated from field: optional string invalidator_client_id = 14 [deprecated = true];
     * @deprecated
     */
    invalidatorClientId: string;
    /**
     * Identifies this ClientToServerMessage as a clear server data request. This
     * field is present when message_contents is CLEAR_SERVER_DATA.
     *
     * @generated from field: optional sync_pb.ClearServerDataMessage clear_server_data = 15;
     */
    clearServerData?: ClearServerDataMessage;
};
/**
 * Describes the message sync_pb.ClientToServerMessage.
 * Use `create(ClientToServerMessageSchema)` to create a new message.
 */
export declare const ClientToServerMessageSchema: GenMessage<ClientToServerMessage>;
/**
 * @generated from enum sync_pb.ClientToServerMessage.Contents
 */
export declare enum ClientToServerMessage_Contents {
    /**
     * @generated from enum value: COMMIT = 1;
     */
    COMMIT = 1,
    /**
     * @generated from enum value: GET_UPDATES = 2;
     */
    GET_UPDATES = 2,
    /**
     * @generated from enum value: DEPRECATED_3 = 3;
     */
    DEPRECATED_3 = 3,
    /**
     * @generated from enum value: DEPRECATED_4 = 4;
     */
    DEPRECATED_4 = 4,
    /**
     * @generated from enum value: CLEAR_SERVER_DATA = 5;
     */
    CLEAR_SERVER_DATA = 5
}
/**
 * Describes the enum sync_pb.ClientToServerMessage.Contents.
 */
export declare const ClientToServerMessage_ContentsSchema: GenEnum<ClientToServerMessage_Contents>;
/**
 * @generated from message sync_pb.CommitResponse
 */
export type CommitResponse = Message<"sync_pb.CommitResponse"> & {
    /**
     * @generated from field: repeated sync_pb.CommitResponse.EntryResponse entryresponse = 1;
     */
    entryresponse: CommitResponse_EntryResponse[];
};
/**
 * Describes the message sync_pb.CommitResponse.
 * Use `create(CommitResponseSchema)` to create a new message.
 */
export declare const CommitResponseSchema: GenMessage<CommitResponse>;
/**
 * @generated from message sync_pb.CommitResponse.EntryResponse
 */
export type CommitResponse_EntryResponse = Message<"sync_pb.CommitResponse.EntryResponse"> & {
    /**
     * @generated from field: required sync_pb.CommitResponse.ResponseType response_type = 2;
     */
    responseType: CommitResponse_ResponseType;
    /**
     * Sync servers may also return a new ID for an existing item, indicating
     * a new entry's been created to hold the data the client's sending up.
     *
     * @generated from field: optional string id_string = 3;
     */
    idString: string;
    /**
     * The item's current version.
     *
     * @generated from field: optional int64 version = 6;
     */
    version: bigint;
    /**
     * @generated from field: optional string error_message = 9;
     */
    errorMessage: string;
    /**
     * Last modification time (in milliseconds since Unix epoch).  Allows the
     * server to override the client-supplied mtime during a commit operation.
     * TODO(crbug.com/1182252): Delete this field too.
     *
     * @generated from field: optional int64 mtime = 10 [deprecated = true];
     * @deprecated
     */
    mtime: bigint;
    /**
     * Datatype specific error (if any).
     *
     * @generated from field: optional sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError datatype_specific_error = 11;
     */
    datatypeSpecificError?: CommitResponse_EntryResponse_DatatypeSpecificError;
};
/**
 * Describes the message sync_pb.CommitResponse.EntryResponse.
 * Use `create(CommitResponse_EntryResponseSchema)` to create a new message.
 */
export declare const CommitResponse_EntryResponseSchema: GenMessage<CommitResponse_EntryResponse>;
/**
 * @generated from message sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError
 */
export type CommitResponse_EntryResponse_DatatypeSpecificError = Message<"sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError"> & {
    /**
     * @generated from oneof sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError.datatype_error
     */
    datatypeError: {
        /**
         * @generated from field: sync_pb.SharingMessageCommitError sharing_message_error = 1;
         */
        value: SharingMessageCommitError;
        case: "sharingMessageError";
    } | {
        /**
         * @generated from field: sync_pb.OutgoingPasswordSharingInvitationCommitError outgoing_password_sharing_invitation_error = 2;
         */
        value: OutgoingPasswordSharingInvitationCommitError;
        case: "outgoingPasswordSharingInvitationError";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.CommitResponse.EntryResponse.DatatypeSpecificError.
 * Use `create(CommitResponse_EntryResponse_DatatypeSpecificErrorSchema)` to create a new message.
 */
export declare const CommitResponse_EntryResponse_DatatypeSpecificErrorSchema: GenMessage<CommitResponse_EntryResponse_DatatypeSpecificError>;
/**
 * @generated from enum sync_pb.CommitResponse.ResponseType
 */
export declare enum CommitResponse_ResponseType {
    /**
     * @generated from enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * You're out of date; update and check your data
     *
     * @generated from enum value: CONFLICT = 2;
     */
    CONFLICT = 2,
    /**
     * TODO(ncarter): What's the difference between RETRY and TRANSIENT_ERROR?
     *
     * Someone has a conflicting, non-expired session open
     *
     * @generated from enum value: RETRY = 3;
     */
    RETRY = 3,
    /**
     * What the client sent was invalid, and trying again
     *
     * @generated from enum value: INVALID_MESSAGE = 4;
     */
    INVALID_MESSAGE = 4,
    /**
     * won't help.
     *
     * This operation would put you, or you are, over quota
     *
     * @generated from enum value: OVER_QUOTA = 5;
     */
    OVER_QUOTA = 5,
    /**
     * Something went wrong; try again in a bit
     *
     * @generated from enum value: TRANSIENT_ERROR = 6;
     */
    TRANSIENT_ERROR = 6
}
/**
 * Describes the enum sync_pb.CommitResponse.ResponseType.
 */
export declare const CommitResponse_ResponseTypeSchema: GenEnum<CommitResponse_ResponseType>;
/**
 * @generated from message sync_pb.GetUpdatesResponse
 */
export type GetUpdatesResponse = Message<"sync_pb.GetUpdatesResponse"> & {
    /**
     * New sync entries that the client should apply.
     *
     * @generated from field: repeated sync_pb.SyncEntity entries = 1;
     */
    entries: SyncEntity[];
    /**
     * Approximate count of changes remaining - use this for UI feedback.
     * If present and zero, this estimate is firm: the server has no changes
     * after the current batch.
     *
     * @generated from field: optional int64 changes_remaining = 4;
     */
    changesRemaining: bigint;
    /**
     * Opaque, per-datatype timestamp-like tokens.  Clients should retain and
     * persist the values returned in this field, and present them back to the
     * server to indicate the starting point for future update requests.
     *
     * This will be sent only if the client provided |from_progress_marker|
     * in the update request.
     *
     * The server may provide a new progress marker even if this is the end of
     * the batch, or if there were no new updates on the server; and the client
     * must save these.  If the server does not provide a |new_progress_marker|
     * value for a particular datatype, when the request provided a
     * |from_progress_marker| value for that datatype, the client should
     * interpret this to mean "no change from the previous state" and retain its
     * previous progress-marker value for that datatype.
     *
     * @generated from field: repeated sync_pb.DataTypeProgressMarker new_progress_marker = 5;
     */
    newProgressMarker: DataTypeProgressMarker[];
    /**
     * The current encryption keys associated with this account. Will be set if
     * the GetUpdatesMessage in the request had need_encryption_key == true or
     * the server has updated the set of encryption keys (e.g. due to a key
     * rotation).
     *
     * @generated from field: repeated bytes encryption_keys = 6;
     */
    encryptionKeys: Uint8Array[];
    /**
     * Set of optional datatype contexts server mutations.
     *
     * @generated from field: repeated sync_pb.DataTypeContext context_mutations = 7;
     */
    contextMutations: DataTypeContext[];
};
/**
 * Describes the message sync_pb.GetUpdatesResponse.
 * Use `create(GetUpdatesResponseSchema)` to create a new message.
 */
export declare const GetUpdatesResponseSchema: GenMessage<GetUpdatesResponse>;
/**
 * @generated from message sync_pb.ClientToServerResponse
 */
export type ClientToServerResponse = Message<"sync_pb.ClientToServerResponse"> & {
    /**
     * @generated from field: optional sync_pb.CommitResponse commit = 1;
     */
    commit?: CommitResponse;
    /**
     * @generated from field: optional sync_pb.GetUpdatesResponse get_updates = 2;
     */
    getUpdates?: GetUpdatesResponse;
    /**
     * Up until protocol_version 24, the default was SUCCESS which made it
     * impossible to add new enum values since older clients would parse any
     * out-of-range value as SUCCESS. Starting with 25, unless explicitly set,
     * the error_code will be UNKNOWN so that clients know when they're
     * out-of-date. Note also that when using protocol_version < 25,
     * TRANSIENT_ERROR is not supported. Instead, the server sends back a HTTP
     * 400 error code. This is deprecated now.
     *
     * @generated from field: optional sync_pb.SyncEnums.ErrorType error_code = 4 [default = UNKNOWN];
     */
    errorCode: SyncEnums_ErrorType;
    /**
     * @generated from field: optional string error_message = 5;
     */
    errorMessage: string;
    /**
     * Opaque server-provided ID representing an "epoch" of the server-side data,
     * referred to as "birthday" or "store birthday". This ID remains fixed until
     * server-side data gets cleared/reset (e.g. via ClearServerDataMessage),
     * which clients experience as NOT_MY_BIRTHDAY error, and involves clearing
     * all local sync metadata including the cached store birthday.
     *
     * This mechanism allows the server to implement clear-data/reset
     * functionality that reliably identifies and deletes sync entities uploaded
     * before the clear-data/reset event (e.g. via ClearServerDataMessage).
     * Furthermore, it allows the server to deal reliably with in-flight changes
     * from other clients upon clear-data event, because all writes issued with an
     * outdated birthday (which in-flight writes would use) can be detected by the
     * server.
     *
     * @generated from field: optional string store_birthday = 6;
     */
    storeBirthday: string;
    /**
     * @generated from field: optional sync_pb.ClientCommand client_command = 7;
     */
    clientCommand?: ClientCommand;
    /**
     * The data types whose storage has been migrated.  Present when the value of
     * error_code is MIGRATION_DONE.
     *
     * @generated from field: repeated int32 migrated_data_type_id = 12;
     */
    migratedDataTypeId: number[];
    /**
     * @generated from field: optional sync_pb.ClientToServerResponse.Error error = 13;
     */
    error?: ClientToServerResponse_Error;
    /**
     * The new per-client state for this client. If set, should be persisted and
     * sent with any subsequent ClientToServerMessages.
     *
     * @generated from field: optional sync_pb.ChipBag new_bag_of_chips = 14;
     */
    newBagOfChips?: ChipBag;
    /**
     * Present if this ClientToServerResponse is in response to a ClearServerData
     * request.
     *
     * @generated from field: optional sync_pb.ClearServerDataResponse clear_server_data = 15;
     */
    clearServerData?: ClearServerDataResponse;
};
/**
 * Describes the message sync_pb.ClientToServerResponse.
 * Use `create(ClientToServerResponseSchema)` to create a new message.
 */
export declare const ClientToServerResponseSchema: GenMessage<ClientToServerResponse>;
/**
 * @generated from message sync_pb.ClientToServerResponse.Error
 */
export type ClientToServerResponse_Error = Message<"sync_pb.ClientToServerResponse.Error"> & {
    /**
     * @generated from field: optional sync_pb.SyncEnums.ErrorType error_type = 1 [default = UNKNOWN];
     */
    errorType: SyncEnums_ErrorType;
    /**
     * @generated from field: optional string error_description = 2;
     */
    errorDescription: string;
    /**
     * @generated from field: optional sync_pb.SyncEnums.Action action = 4 [default = UNKNOWN_ACTION];
     */
    action: SyncEnums_Action;
    /**
     * Currently meaningful if |error_type| is throttled or partial_failure.
     * In the throttled case, if this field is absent then the whole client
     * (all datatypes) is throttled.
     * In the partial_failure case, this field denotes partial failures. The
     * client should retry those datatypes with exponential backoff.
     *
     * @generated from field: repeated int32 error_data_type_ids = 5;
     */
    errorDataTypeIds: number[];
};
/**
 * Describes the message sync_pb.ClientToServerResponse.Error.
 * Use `create(ClientToServerResponse_ErrorSchema)` to create a new message.
 */
export declare const ClientToServerResponse_ErrorSchema: GenMessage<ClientToServerResponse_Error>;
/**
 * A message to notify the server of certain sync events. Idempotent. Send these
 * to the /event endpoint.
 *
 * @generated from message sync_pb.EventRequest
 */
export type EventRequest = Message<"sync_pb.EventRequest"> & {
    /**
     * @generated from field: optional sync_pb.SyncDisabledEvent sync_disabled = 1;
     */
    syncDisabled?: SyncDisabledEvent;
};
/**
 * Describes the message sync_pb.EventRequest.
 * Use `create(EventRequestSchema)` to create a new message.
 */
export declare const EventRequestSchema: GenMessage<EventRequest>;
/**
 * @generated from message sync_pb.EventResponse
 */
export type EventResponse = Message<"sync_pb.EventResponse"> & {};
/**
 * Describes the message sync_pb.EventResponse.
 * Use `create(EventResponseSchema)` to create a new message.
 */
export declare const EventResponseSchema: GenMessage<EventResponse>;
/**
 * A message indicating that the sync engine has been disabled on a client.
 *
 * @generated from message sync_pb.SyncDisabledEvent
 */
export type SyncDisabledEvent = Message<"sync_pb.SyncDisabledEvent"> & {
    /**
     * The GUID that identifies the sync client.
     *
     * @generated from field: optional string cache_guid = 1;
     */
    cacheGuid: string;
    /**
     * The store birthday that the client was using before disabling sync.
     *
     * @generated from field: optional string store_birthday = 2;
     */
    storeBirthday: string;
};
/**
 * Describes the message sync_pb.SyncDisabledEvent.
 * Use `create(SyncDisabledEventSchema)` to create a new message.
 */
export declare const SyncDisabledEventSchema: GenMessage<SyncDisabledEvent>;
//# sourceMappingURL=sync_pb.d.ts.map