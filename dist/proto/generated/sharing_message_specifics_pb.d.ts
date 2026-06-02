import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file sharing_message_specifics.proto.
 */
export declare const file_sharing_message_specifics: GenFile;
/**
 * @generated from message sync_pb.SharingMessageSpecifics
 */
export type SharingMessageSpecifics = Message<"sync_pb.SharingMessageSpecifics"> & {
    /**
     * Unique identifier of message.
     *
     * @generated from field: optional string message_id = 1;
     */
    messageId: string;
    /**
     * @generated from field: optional sync_pb.SharingMessageSpecifics.ChannelConfiguration channel_configuration = 2;
     */
    channelConfiguration?: SharingMessageSpecifics_ChannelConfiguration;
    /**
     * Payload encrypted using the target user keys according to WebPush
     * encryption scheme. The payload has to be a valid
     * chrome/browser/sharing/proto/sharing_message.proto serialized using
     * SerializeToString.
     *
     * @generated from field: optional bytes payload = 3;
     */
    payload: Uint8Array;
};
/**
 * Describes the message sync_pb.SharingMessageSpecifics.
 * Use `create(SharingMessageSpecificsSchema)` to create a new message.
 */
export declare const SharingMessageSpecificsSchema: GenMessage<SharingMessageSpecifics>;
/**
 * @generated from message sync_pb.SharingMessageSpecifics.ChannelConfiguration
 */
export type SharingMessageSpecifics_ChannelConfiguration = Message<"sync_pb.SharingMessageSpecifics.ChannelConfiguration"> & {
    /**
     * @generated from oneof sync_pb.SharingMessageSpecifics.ChannelConfiguration.channel_configuration
     */
    channelConfiguration: {
        /**
         * FCM channel configuration. Message will be delivered as a FCM message.
         *
         * @generated from field: sync_pb.SharingMessageSpecifics.ChannelConfiguration.FCMChannelConfiguration fcm = 1;
         */
        value: SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfiguration;
        case: "fcm";
    } | {
        /**
         * Opaque server channel configuration. Message will be delivered through
         * server channel.
         *
         * @generated from field: bytes server = 2;
         */
        value: Uint8Array;
        case: "server";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.SharingMessageSpecifics.ChannelConfiguration.
 * Use `create(SharingMessageSpecifics_ChannelConfigurationSchema)` to create a new message.
 */
export declare const SharingMessageSpecifics_ChannelConfigurationSchema: GenMessage<SharingMessageSpecifics_ChannelConfiguration>;
/**
 * @generated from message sync_pb.SharingMessageSpecifics.ChannelConfiguration.FCMChannelConfiguration
 */
export type SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfiguration = Message<"sync_pb.SharingMessageSpecifics.ChannelConfiguration.FCMChannelConfiguration"> & {
    /**
     * FCM registration token of target device.
     *
     * @generated from field: optional string token = 1;
     */
    token: string;
    /**
     * Time to live for a FCM message (in seconds) - if specified, the message
     * will expire based on the TTL.
     *
     * @generated from field: optional int32 ttl = 2;
     */
    ttl: number;
    /**
     * Priority level of a FCM message. 5 = normal, 10 = high.
     *
     * @generated from field: optional int32 priority = 3;
     */
    priority: number;
};
/**
 * Describes the message sync_pb.SharingMessageSpecifics.ChannelConfiguration.FCMChannelConfiguration.
 * Use `create(SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfigurationSchema)` to create a new message.
 */
export declare const SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfigurationSchema: GenMessage<SharingMessageSpecifics_ChannelConfiguration_FCMChannelConfiguration>;
/**
 * Used for the server to return fine grained commit errors back to the client.
 *
 * @generated from message sync_pb.SharingMessageCommitError
 */
export type SharingMessageCommitError = Message<"sync_pb.SharingMessageCommitError"> & {
    /**
     * @generated from field: optional sync_pb.SharingMessageCommitError.ErrorCode error_code = 1;
     */
    errorCode: SharingMessageCommitError_ErrorCode;
};
/**
 * Describes the message sync_pb.SharingMessageCommitError.
 * Use `create(SharingMessageCommitErrorSchema)` to create a new message.
 */
export declare const SharingMessageCommitErrorSchema: GenMessage<SharingMessageCommitError>;
/**
 * This enum is used in histograms. Entries should not be renumbered and
 * numeric values should never be reused. Also remember to update in
 * tools/metrics/histograms/enums.xml SyncSharingMessageCommitErrorCode enum.
 *
 * @generated from enum sync_pb.SharingMessageCommitError.ErrorCode
 */
export declare enum SharingMessageCommitError_ErrorCode {
    /**
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from enum value: INVALID_ARGUMENT = 1;
     */
    INVALID_ARGUMENT = 1,
    /**
     * @generated from enum value: NOT_FOUND = 2;
     */
    NOT_FOUND = 2,
    /**
     * @generated from enum value: INTERNAL = 3;
     */
    INTERNAL = 3,
    /**
     * @generated from enum value: UNAVAILABLE = 4;
     */
    UNAVAILABLE = 4,
    /**
     * @generated from enum value: RESOURCE_EXHAUSTED = 5;
     */
    RESOURCE_EXHAUSTED = 5,
    /**
     * @generated from enum value: UNAUTHENTICATED = 6;
     */
    UNAUTHENTICATED = 6,
    /**
     * @generated from enum value: PERMISSION_DENIED = 7;
     */
    PERMISSION_DENIED = 7,
    /**
     * Client-specific error codes.
     *
     * @generated from enum value: SYNC_TURNED_OFF = 8;
     */
    SYNC_TURNED_OFF = 8,
    /**
     * @generated from enum value: SYNC_NETWORK_ERROR = 9;
     */
    SYNC_NETWORK_ERROR = 9,
    /**
     * Deprecated UMA bucket, prior to splitting between SYNC_SERVER_ERROR and
     * SYNC_AUTH_ERROR.
     *
     * @generated from enum value: DEPRECATED_SYNC_SERVER_OR_AUTH_ERROR = 10;
     */
    DEPRECATED_SYNC_SERVER_OR_AUTH_ERROR = 10,
    /**
     * Message wasn't committed before timeout.
     *
     * @generated from enum value: SYNC_TIMEOUT = 11;
     */
    SYNC_TIMEOUT = 11,
    /**
     * Error code for server error or unparsable server response.
     *
     * @generated from enum value: SYNC_SERVER_ERROR = 12;
     */
    SYNC_SERVER_ERROR = 12,
    /**
     * Auth error when communicating with the server.
     *
     * @generated from enum value: SYNC_AUTH_ERROR = 13;
     */
    SYNC_AUTH_ERROR = 13
}
/**
 * Describes the enum sync_pb.SharingMessageCommitError.ErrorCode.
 */
export declare const SharingMessageCommitError_ErrorCodeSchema: GenEnum<SharingMessageCommitError_ErrorCode>;
//# sourceMappingURL=sharing_message_specifics_pb.d.ts.map