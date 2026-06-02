import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file autofill_wallet_credential_specifics.proto.
 */
export declare const file_autofill_wallet_credential_specifics: GenFile;
/**
 * Autofill wallet data which stores the relevant card credential data.
 *
 * @generated from message sync_pb.AutofillWalletCredentialSpecifics
 */
export type AutofillWalletCredentialSpecifics = Message<"sync_pb.AutofillWalletCredentialSpecifics"> & {
    /**
     * A server-generated unique ID for the instrument/card.
     *
     * @generated from field: optional string instrument_id = 1;
     */
    instrumentId: string;
    /**
     * A 3 or 4 digit card verification code.
     *
     * @generated from field: optional string cvc = 2;
     */
    cvc: string;
    /**
     * The timestamp of the last update. Used to determine data freshness.
     *
     * @generated from field: optional int64 last_updated_time_unix_epoch_millis = 3;
     */
    lastUpdatedTimeUnixEpochMillis: bigint;
};
/**
 * Describes the message sync_pb.AutofillWalletCredentialSpecifics.
 * Use `create(AutofillWalletCredentialSpecificsSchema)` to create a new message.
 */
export declare const AutofillWalletCredentialSpecificsSchema: GenMessage<AutofillWalletCredentialSpecifics>;
//# sourceMappingURL=autofill_wallet_credential_specifics_pb.d.ts.map