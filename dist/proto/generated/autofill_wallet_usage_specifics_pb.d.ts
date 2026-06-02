import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file autofill_wallet_usage_specifics.proto.
 */
export declare const file_autofill_wallet_usage_specifics: GenFile;
/**
 * @generated from message sync_pb.AutofillWalletUsageSpecifics
 */
export type AutofillWalletUsageSpecifics = Message<"sync_pb.AutofillWalletUsageSpecifics"> & {
    /**
     * A unique ID identifying this item. Used as the client tag.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * The type of usage data this entity is associated with.
     *
     * @generated from oneof sync_pb.AutofillWalletUsageSpecifics.usage_data_type
     */
    usageDataType: {
        /**
         * @generated from field: sync_pb.AutofillWalletUsageSpecifics.VirtualCardUsageData virtual_card_usage_data = 2;
         */
        value: AutofillWalletUsageSpecifics_VirtualCardUsageData;
        case: "virtualCardUsageData";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.AutofillWalletUsageSpecifics.
 * Use `create(AutofillWalletUsageSpecificsSchema)` to create a new message.
 */
export declare const AutofillWalletUsageSpecificsSchema: GenMessage<AutofillWalletUsageSpecifics>;
/**
 * @generated from message sync_pb.AutofillWalletUsageSpecifics.VirtualCardUsageData
 */
export type AutofillWalletUsageSpecifics_VirtualCardUsageData = Message<"sync_pb.AutofillWalletUsageSpecifics.VirtualCardUsageData"> & {
    /**
     * The instrument id of the actual card that the virtual card is related to.
     *
     * @generated from field: optional int64 instrument_id = 1;
     */
    instrumentId: bigint;
    /**
     * The last four of the virtual card number. This is tied to the usage
     * data because the virtual card number may vary depending on merchants.
     *
     * @generated from field: optional string virtual_card_last_four = 2;
     */
    virtualCardLastFour: string;
    /**
     * The url of the merchant where the virtual card is used.
     *
     * @generated from field: optional string merchant_url = 3;
     */
    merchantUrl: string;
    /**
     * The merchant the usage data is related to on the Android platform.
     *
     * @generated from field: optional string merchant_app_package = 4;
     */
    merchantAppPackage: string;
};
/**
 * Describes the message sync_pb.AutofillWalletUsageSpecifics.VirtualCardUsageData.
 * Use `create(AutofillWalletUsageSpecifics_VirtualCardUsageDataSchema)` to create a new message.
 */
export declare const AutofillWalletUsageSpecifics_VirtualCardUsageDataSchema: GenMessage<AutofillWalletUsageSpecifics_VirtualCardUsageData>;
//# sourceMappingURL=autofill_wallet_usage_specifics_pb.d.ts.map