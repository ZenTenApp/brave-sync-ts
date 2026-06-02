import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file autofill_offer_specifics.proto.
 */
export declare const file_autofill_offer_specifics: GenFile;
/**
 * Next tag: 11
 *
 * @generated from message sync_pb.AutofillOfferSpecifics
 */
export type AutofillOfferSpecifics = Message<"sync_pb.AutofillOfferSpecifics"> & {
    /**
     * The id for this offer data. Will be used as the client tag.
     *
     * @generated from field: optional int64 id = 1;
     */
    id: bigint;
    /**
     * The link leading to the offer details page on Gpay app. Will be populated
     * on Android only.
     *
     * @generated from field: optional string offer_details_url = 2;
     */
    offerDetailsUrl: string;
    /**
     * Merchant domain and merchant app package name refers to the merchant this
     * offer is applied to.
     *
     * @generated from field: repeated string merchant_domain = 3;
     */
    merchantDomain: string[];
    /**
     * @generated from field: repeated string merchant_app_package = 4;
     */
    merchantAppPackage: string[];
    /**
     * The expiry of this offer. Will be represented in the form of unix epoch
     * time in seconds. Once the offer is expired it will not be shown in the
     * client.
     *
     * @generated from field: optional int64 offer_expiry_date = 5;
     */
    offerExpiryDate: bigint;
    /**
     * The unique offer data for different offer types.
     *
     * @generated from oneof sync_pb.AutofillOfferSpecifics.type_specific_offer_data
     */
    typeSpecificOfferData: {
        /**
         * @generated from field: sync_pb.AutofillOfferSpecifics.CardLinkedOfferData card_linked_offer_data = 6;
         */
        value: AutofillOfferSpecifics_CardLinkedOfferData;
        case: "cardLinkedOfferData";
    } | {
        /**
         * @generated from field: sync_pb.AutofillOfferSpecifics.PromoCodeOfferData promo_code_offer_data = 9;
         */
        value: AutofillOfferSpecifics_PromoCodeOfferData;
        case: "promoCodeOfferData";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional sync_pb.AutofillOfferSpecifics.DisplayStrings display_strings = 10;
     */
    displayStrings?: AutofillOfferSpecifics_DisplayStrings;
    /**
     * The reward type of the offer. Will be used to generate the display text in
     * the UI. Each type has its own client side text template.
     *
     * @generated from oneof sync_pb.AutofillOfferSpecifics.reward_type
     */
    rewardType: {
        /**
         * @generated from field: sync_pb.AutofillOfferSpecifics.PercentageReward percentage_reward = 7;
         */
        value: AutofillOfferSpecifics_PercentageReward;
        case: "percentageReward";
    } | {
        /**
         * @generated from field: sync_pb.AutofillOfferSpecifics.FixedAmountReward fixed_amount_reward = 8;
         */
        value: AutofillOfferSpecifics_FixedAmountReward;
        case: "fixedAmountReward";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.
 * Use `create(AutofillOfferSpecificsSchema)` to create a new message.
 */
export declare const AutofillOfferSpecificsSchema: GenMessage<AutofillOfferSpecifics>;
/**
 * Proto containing data specific to a card-linked offer.
 *
 * @generated from message sync_pb.AutofillOfferSpecifics.CardLinkedOfferData
 */
export type AutofillOfferSpecifics_CardLinkedOfferData = Message<"sync_pb.AutofillOfferSpecifics.CardLinkedOfferData"> & {
    /**
     * The server id of the card to which the offer is linked.
     *
     * @generated from field: repeated int64 instrument_id = 3;
     */
    instrumentId: bigint[];
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.CardLinkedOfferData.
 * Use `create(AutofillOfferSpecifics_CardLinkedOfferDataSchema)` to create a new message.
 */
export declare const AutofillOfferSpecifics_CardLinkedOfferDataSchema: GenMessage<AutofillOfferSpecifics_CardLinkedOfferData>;
/**
 * Proto containing data specific to a promo code offer.
 *
 * @generated from message sync_pb.AutofillOfferSpecifics.PromoCodeOfferData
 */
export type AutofillOfferSpecifics_PromoCodeOfferData = Message<"sync_pb.AutofillOfferSpecifics.PromoCodeOfferData"> & {
    /**
     * The actual promo code which can be applied at checkout.
     *
     * @generated from field: optional string promo_code = 1;
     */
    promoCode: string;
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.PromoCodeOfferData.
 * Use `create(AutofillOfferSpecifics_PromoCodeOfferDataSchema)` to create a new message.
 */
export declare const AutofillOfferSpecifics_PromoCodeOfferDataSchema: GenMessage<AutofillOfferSpecifics_PromoCodeOfferData>;
/**
 * Strings to be shown in client UI, based on the offer type and details.
 *
 * @generated from message sync_pb.AutofillOfferSpecifics.DisplayStrings
 */
export type AutofillOfferSpecifics_DisplayStrings = Message<"sync_pb.AutofillOfferSpecifics.DisplayStrings"> & {
    /**
     * A message translated in the user's GPay app locale, explaining the value
     * of the offer. For example, a promo code offer might display
     * "$5 off on shoes, up to $50."
     *
     * @generated from field: optional string value_prop_text = 1;
     */
    valuePropText: string;
    /**
     * A message translated in the user's GPay app locale and shown on mobile as
     * a link, prompting the user to click it to learn more about the offer.
     * Generally, "See details".
     *
     * @generated from field: optional string see_details_text_mobile = 2;
     */
    seeDetailsTextMobile: string;
    /**
     * A message translated in the user's GPay app locale and shown on desktop
     * (not as a link), informing the user that exclusions and restrictions may
     * apply to the value prop text. Generally, "Terms apply."
     *
     * @generated from field: optional string see_details_text_desktop = 3;
     */
    seeDetailsTextDesktop: string;
    /**
     * A message translated in the user's GPay app locale and shown on mobile,
     * instructing them on how to redeem the offer. For example, a promo code
     * offer might display "Tap the promo code field at checkout to autofill
     * it."
     *
     * @generated from field: optional string usage_instructions_text_mobile = 4;
     */
    usageInstructionsTextMobile: string;
    /**
     * A message translated in the user's GPay app locale and shown on desktop,
     * instructing them on how to redeem the offer. For example, a promo code
     * offer might display "Click the promo code field at checkout to autofill
     * it."
     *
     * @generated from field: optional string usage_instructions_text_desktop = 5;
     */
    usageInstructionsTextDesktop: string;
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.DisplayStrings.
 * Use `create(AutofillOfferSpecifics_DisplayStringsSchema)` to create a new message.
 */
export declare const AutofillOfferSpecifics_DisplayStringsSchema: GenMessage<AutofillOfferSpecifics_DisplayStrings>;
/**
 * This value will be shown in the offer text template as "XXX% cashback".
 * Percentage has a range of (0, 100].
 *
 * @generated from message sync_pb.AutofillOfferSpecifics.PercentageReward
 */
export type AutofillOfferSpecifics_PercentageReward = Message<"sync_pb.AutofillOfferSpecifics.PercentageReward"> & {
    /**
     * The string contains a number and a percent sign.
     *
     * @generated from field: optional string percentage = 1;
     */
    percentage: string;
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.PercentageReward.
 * Use `create(AutofillOfferSpecifics_PercentageRewardSchema)` to create a new message.
 */
export declare const AutofillOfferSpecifics_PercentageRewardSchema: GenMessage<AutofillOfferSpecifics_PercentageReward>;
/**
 * This value will be shown in the offer text template as "XXX$ off".
 *
 * @generated from message sync_pb.AutofillOfferSpecifics.FixedAmountReward
 */
export type AutofillOfferSpecifics_FixedAmountReward = Message<"sync_pb.AutofillOfferSpecifics.FixedAmountReward"> & {
    /**
     * The string contains a number and a currency sign.
     *
     * @generated from field: optional string amount = 1;
     */
    amount: string;
};
/**
 * Describes the message sync_pb.AutofillOfferSpecifics.FixedAmountReward.
 * Use `create(AutofillOfferSpecifics_FixedAmountRewardSchema)` to create a new message.
 */
export declare const AutofillOfferSpecifics_FixedAmountRewardSchema: GenMessage<AutofillOfferSpecifics_FixedAmountReward>;
//# sourceMappingURL=autofill_offer_specifics_pb.d.ts.map