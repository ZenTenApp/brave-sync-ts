import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { CrossUserSharingPublicKey } from "./nigori_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file password_sharing_invitation_specifics.proto.
 */
export declare const file_password_sharing_invitation_specifics: GenFile;
/**
 * @generated from message sync_pb.PasswordSharingInvitationData
 */
export type PasswordSharingInvitationData = Message<"sync_pb.PasswordSharingInvitationData"> & {
    /**
     * @generated from field: optional sync_pb.PasswordSharingInvitationData.PasswordGroupData password_group_data = 2;
     */
    passwordGroupData?: PasswordSharingInvitationData_PasswordGroupData;
};
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.
 * Use `create(PasswordSharingInvitationDataSchema)` to create a new message.
 */
export declare const PasswordSharingInvitationDataSchema: GenMessage<PasswordSharingInvitationData>;
/**
 * Contains password fields required for sending. See PasswordSpecificsData
 * for field descriptions.
 *
 * @generated from message sync_pb.PasswordSharingInvitationData.PasswordGroupElementData
 */
export type PasswordSharingInvitationData_PasswordGroupElementData = Message<"sync_pb.PasswordSharingInvitationData.PasswordGroupElementData"> & {
    /**
     * See PasswordSpecificsData::Scheme for values.
     *
     * @generated from field: optional int32 scheme = 2;
     */
    scheme: number;
    /**
     * @generated from field: optional string signon_realm = 3;
     */
    signonRealm: string;
    /**
     * @generated from field: optional string origin = 4;
     */
    origin: string;
    /**
     * @generated from field: optional string username_element = 5;
     */
    usernameElement: string;
    /**
     * @generated from field: optional string password_element = 7;
     */
    passwordElement: string;
    /**
     * @generated from field: optional string display_name = 8;
     */
    displayName: string;
    /**
     * @generated from field: optional string avatar_url = 9;
     */
    avatarUrl: string;
};
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.PasswordGroupElementData.
 * Use `create(PasswordSharingInvitationData_PasswordGroupElementDataSchema)` to create a new message.
 */
export declare const PasswordSharingInvitationData_PasswordGroupElementDataSchema: GenMessage<PasswordSharingInvitationData_PasswordGroupElementData>;
/**
 * @generated from message sync_pb.PasswordSharingInvitationData.PasswordGroupData
 */
export type PasswordSharingInvitationData_PasswordGroupData = Message<"sync_pb.PasswordSharingInvitationData.PasswordGroupData"> & {
    /**
     * @generated from field: optional string username_value = 1;
     */
    usernameValue: string;
    /**
     * @generated from field: optional string password_value = 2;
     */
    passwordValue: string;
    /**
     * @generated from field: repeated sync_pb.PasswordSharingInvitationData.PasswordGroupElementData element_data = 3;
     */
    elementData: PasswordSharingInvitationData_PasswordGroupElementData[];
};
/**
 * Describes the message sync_pb.PasswordSharingInvitationData.PasswordGroupData.
 * Use `create(PasswordSharingInvitationData_PasswordGroupDataSchema)` to create a new message.
 */
export declare const PasswordSharingInvitationData_PasswordGroupDataSchema: GenMessage<PasswordSharingInvitationData_PasswordGroupData>;
/**
 * Contains user profile information.
 *
 * @generated from message sync_pb.UserDisplayInfo
 */
export type UserDisplayInfo = Message<"sync_pb.UserDisplayInfo"> & {
    /**
     * Primary email address of the user.
     *
     * @generated from field: optional string email = 1;
     */
    email: string;
    /**
     * The user's full name.
     *
     * @generated from field: optional string display_name = 2;
     */
    displayName: string;
    /**
     * Portrait photo of the user.
     *
     * @generated from field: optional string profile_image_url = 3;
     */
    profileImageUrl: string;
};
/**
 * Describes the message sync_pb.UserDisplayInfo.
 * Use `create(UserDisplayInfoSchema)` to create a new message.
 */
export declare const UserDisplayInfoSchema: GenMessage<UserDisplayInfo>;
/**
 * @generated from message sync_pb.UserInfo
 */
export type UserInfo = Message<"sync_pb.UserInfo"> & {
    /**
     * Obfuscated Gaia ID.
     *
     * @generated from field: optional string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: optional sync_pb.UserDisplayInfo user_display_info = 2;
     */
    userDisplayInfo?: UserDisplayInfo;
    /**
     * Latest user's public key registered on the server.
     *
     * @generated from field: optional sync_pb.CrossUserSharingPublicKey cross_user_sharing_public_key = 3;
     */
    crossUserSharingPublicKey?: CrossUserSharingPublicKey;
};
/**
 * Describes the message sync_pb.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export declare const UserInfoSchema: GenMessage<UserInfo>;
/**
 * Incoming invitations for password sending.
 *
 * @generated from message sync_pb.IncomingPasswordSharingInvitationSpecifics
 */
export type IncomingPasswordSharingInvitationSpecifics = Message<"sync_pb.IncomingPasswordSharingInvitationSpecifics"> & {
    /**
     * Unique client tag for the invitation. This does *not* have to be the same
     * GUID as for the outgoing invitation.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * Profile information about the sender of the password. Sender's public key
     * is used to authenticate the sender for `encrypted_key_for_recipient`.
     *
     * @generated from field: optional sync_pb.UserInfo sender_info = 2;
     */
    senderInfo?: UserInfo;
    /**
     * Encrypted PasswordSharingInvitationData using recipient's public key
     * corresponding to `recipient_key_version` and sender's private key to
     * authenticate the sender, see https://www.rfc-editor.org/rfc/rfc9180.html.
     *
     * @generated from field: optional bytes encrypted_password_sharing_invitation_data = 3;
     */
    encryptedPasswordSharingInvitationData: Uint8Array;
    /**
     * An unsynced field for use internally on the client. This field should
     * never be set in any network-based communications because it contains
     * unencrypted material.
     *
     * @generated from field: optional sync_pb.PasswordSharingInvitationData client_only_unencrypted_data = 4;
     */
    clientOnlyUnencryptedData?: PasswordSharingInvitationData;
    /**
     * @generated from field: optional uint32 recipient_key_version = 6;
     */
    recipientKeyVersion: number;
};
/**
 * Describes the message sync_pb.IncomingPasswordSharingInvitationSpecifics.
 * Use `create(IncomingPasswordSharingInvitationSpecificsSchema)` to create a new message.
 */
export declare const IncomingPasswordSharingInvitationSpecificsSchema: GenMessage<IncomingPasswordSharingInvitationSpecifics>;
/**
 * Outgoing invitations for password sending.
 *
 * @generated from message sync_pb.OutgoingPasswordSharingInvitationSpecifics
 */
export type OutgoingPasswordSharingInvitationSpecifics = Message<"sync_pb.OutgoingPasswordSharingInvitationSpecifics"> & {
    /**
     * Unique client tag for the invitation, generated by the client.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * Recipient's user identifier (obfuscated Gaia ID).
     *
     * @generated from field: optional string recipient_user_id = 2;
     */
    recipientUserId: string;
    /**
     * Encrypted PasswordSharingInvitationData using recipient's public key
     * corresponding to `recipient_key_version` and sender's private key to
     * authenticate the sender, see https://www.rfc-editor.org/rfc/rfc9180.html.
     *
     * @generated from field: optional bytes encrypted_password_sharing_invitation_data = 3;
     */
    encryptedPasswordSharingInvitationData: Uint8Array;
    /**
     * An unsynced field for use internally on the client. This field should
     * never be set in any network-based communications because it contains
     * unencrypted material.
     *
     * @generated from field: optional sync_pb.PasswordSharingInvitationData client_only_unencrypted_data = 4;
     */
    clientOnlyUnencryptedData?: PasswordSharingInvitationData;
    /**
     * @generated from field: optional uint32 recipient_key_version = 6;
     */
    recipientKeyVersion: number;
    /**
     * Version of Public key of the sender which is used to authenticate the
     * sender of the password. Must be equal to the latest committed version.
     *
     * @generated from field: optional uint32 sender_key_version = 7;
     */
    senderKeyVersion: number;
};
/**
 * Describes the message sync_pb.OutgoingPasswordSharingInvitationSpecifics.
 * Use `create(OutgoingPasswordSharingInvitationSpecificsSchema)` to create a new message.
 */
export declare const OutgoingPasswordSharingInvitationSpecificsSchema: GenMessage<OutgoingPasswordSharingInvitationSpecifics>;
/**
 * Used for the server to return fine-grained commit errors back to the client.
 *
 * @generated from message sync_pb.OutgoingPasswordSharingInvitationCommitError
 */
export type OutgoingPasswordSharingInvitationCommitError = Message<"sync_pb.OutgoingPasswordSharingInvitationCommitError"> & {
    /**
     * @generated from field: optional sync_pb.OutgoingPasswordSharingInvitationCommitError.ErrorCode error_code = 1;
     */
    errorCode: OutgoingPasswordSharingInvitationCommitError_ErrorCode;
};
/**
 * Describes the message sync_pb.OutgoingPasswordSharingInvitationCommitError.
 * Use `create(OutgoingPasswordSharingInvitationCommitErrorSchema)` to create a new message.
 */
export declare const OutgoingPasswordSharingInvitationCommitErrorSchema: GenMessage<OutgoingPasswordSharingInvitationCommitError>;
/**
 * This enum is used in histograms. Entries should not be renumbered and
 * numeric values should never be reused. Also remember to update in
 * tools/metrics/histograms/enums.xml.
 *
 * @generated from enum sync_pb.OutgoingPasswordSharingInvitationCommitError.ErrorCode
 */
export declare enum OutgoingPasswordSharingInvitationCommitError_ErrorCode {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Sender's public key version is different on the server.
     *
     * @generated from enum value: PUBLIC_KEY_VERSION_MISMATCH = 1;
     */
    PUBLIC_KEY_VERSION_MISMATCH = 1,
    /**
     * The sender and the recipient are not in the same family according to the
     * Google family service.
     *
     * @generated from enum value: NOT_FAMILY_MEMBER = 2;
     */
    NOT_FAMILY_MEMBER = 2
}
/**
 * Describes the enum sync_pb.OutgoingPasswordSharingInvitationCommitError.ErrorCode.
 */
export declare const OutgoingPasswordSharingInvitationCommitError_ErrorCodeSchema: GenEnum<OutgoingPasswordSharingInvitationCommitError_ErrorCode>;
//# sourceMappingURL=password_sharing_invitation_specifics_pb.d.ts.map