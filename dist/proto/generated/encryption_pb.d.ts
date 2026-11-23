import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file encryption.proto.
 */
export declare const file_encryption: GenFile;
/**
 * Encrypted sync data consists of two parts: a key name and a blob. Key name is
 * the name of the key that was used to encrypt blob and blob is encrypted data
 * itself.
 *
 * The reason we need to keep track of the key name is that a sync user can
 * change their passphrase (and thus their encryption key) at any time. When
 * that happens, we make a best effort to reencrypt all nodes with the new
 * passphrase, but since we don't have transactions on the server-side, we
 * cannot guarantee that every node will be reencrypted. As a workaround, we
 * keep track of all keys, assign each key a name (by using that key to encrypt
 * a well known string) and keep track of which key was used to encrypt each
 * node.
 *
 * @generated from message sync_pb.EncryptedData
 */
export type EncryptedData = Message<"sync_pb.EncryptedData"> & {
    /**
     * @generated from field: optional string key_name = 1;
     */
    keyName: string;
    /**
     * base64-encoded.
     *
     * @generated from field: optional string blob = 2;
     */
    blob: string;
};
/**
 * Describes the message sync_pb.EncryptedData.
 * Use `create(EncryptedDataSchema)` to create a new message.
 */
export declare const EncryptedDataSchema: GenMessage<EncryptedData>;
//# sourceMappingURL=encryption_pb.d.ts.map