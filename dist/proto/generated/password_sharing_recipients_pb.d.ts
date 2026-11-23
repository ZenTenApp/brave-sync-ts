import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { UserInfo } from "./password_sharing_invitation_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file password_sharing_recipients.proto.
 */
export declare const file_password_sharing_recipients: GenFile;
/**
 * A message to obtain a list of recipients for sending a password.
 *
 * The request returns family members for the user and that is why no
 * additional fields are required.
 *
 * @generated from message sync_pb.PasswordSharingRecipientsRequest
 */
export type PasswordSharingRecipientsRequest = Message<"sync_pb.PasswordSharingRecipientsRequest"> & {};
/**
 * Describes the message sync_pb.PasswordSharingRecipientsRequest.
 * Use `create(PasswordSharingRecipientsRequestSchema)` to create a new message.
 */
export declare const PasswordSharingRecipientsRequestSchema: GenMessage<PasswordSharingRecipientsRequest>;
/**
 * @generated from message sync_pb.PasswordSharingRecipientsResponse
 */
export type PasswordSharingRecipientsResponse = Message<"sync_pb.PasswordSharingRecipientsResponse"> & {
    /**
     * @generated from field: optional sync_pb.PasswordSharingRecipientsResponse.PasswordSharingRecipientsResult result = 1;
     */
    result: PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult;
    /**
     * List of possible recipients for sending a password. Note that public key
     * may be absent if a recipient can’t receive a password (e.g. due to an older
     * Chrome version).
     *
     * @generated from field: repeated sync_pb.UserInfo recipients = 2;
     */
    recipients: UserInfo[];
};
/**
 * Describes the message sync_pb.PasswordSharingRecipientsResponse.
 * Use `create(PasswordSharingRecipientsResponseSchema)` to create a new message.
 */
export declare const PasswordSharingRecipientsResponseSchema: GenMessage<PasswordSharingRecipientsResponse>;
/**
 * @generated from enum sync_pb.PasswordSharingRecipientsResponse.PasswordSharingRecipientsResult
 */
export declare enum PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * The user is a member of a family and the request succeeded.
     *
     * @generated from enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * Not a family member, used to distinguish from a family with
     * only one member.
     *
     * @generated from enum value: NOT_FAMILY_MEMBER = 2;
     */
    NOT_FAMILY_MEMBER = 2
}
/**
 * Describes the enum sync_pb.PasswordSharingRecipientsResponse.PasswordSharingRecipientsResult.
 */
export declare const PasswordSharingRecipientsResponse_PasswordSharingRecipientsResultSchema: GenEnum<PasswordSharingRecipientsResponse_PasswordSharingRecipientsResult>;
//# sourceMappingURL=password_sharing_recipients_pb.d.ts.map