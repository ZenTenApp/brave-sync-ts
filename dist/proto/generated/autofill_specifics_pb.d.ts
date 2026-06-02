import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file autofill_specifics.proto.
 */
export declare const file_autofill_specifics: GenFile;
/**
 * An AutofillProfile.
 *
 * @generated from message sync_pb.AutofillProfileSpecifics
 */
export type AutofillProfileSpecifics = Message<"sync_pb.AutofillProfileSpecifics"> & {
    /**
     * @generated from field: optional string guid = 15;
     */
    guid: string;
    /**
     * Starting from M115, Autofill ignores the origin and doesn't distinguish
     * between verified (meaning `deprecated_origin == kSettingsOrigin`) and
     * unverified profiles anymore. However, clients prior to this milestone only
     * accept updates to verified profiles through Sync if the remote profile is
     * verified as well. For this reason, M115 clients and above always set the
     * origin to kSettingsOrigin.
     * TODO(crbug.com/1441905): Remove in a few milestones.
     *
     * @generated from field: optional string deprecated_origin = 16;
     */
    deprecatedOrigin: string;
    /**
     * @generated from field: optional int64 use_count = 22;
     */
    useCount: bigint;
    /**
     * The time_t value of the last time this profile was used. This
     * value makes sense wrt base::Time::To/FromTimeT, which measures
     * from the Windows epoch.
     *
     * @generated from field: optional int64 use_date = 23;
     */
    useDate: bigint;
    /**
     * A user chosen profile label that is used to identify the profile.
     * The value of the label can be freely chosen by the user. Two possible label
     * values are '$HOME$' or '$WORK$' which have a special meaning.
     *
     * @generated from field: optional string profile_label = 62;
     */
    profileLabel: string;
    /**
     * Contact info name fields.
     *
     * @generated from field: repeated string name_first = 2;
     */
    nameFirst: string[];
    /**
     * @generated from field: repeated string name_middle = 3;
     */
    nameMiddle: string[];
    /**
     * @generated from field: repeated string name_last = 4;
     */
    nameLast: string[];
    /**
     * Sometimes the last name is composed of two names as it is common for
     * Hispanic/Latinx names. In the unstructured representation of the last name,
     * there may be even a conjunction between the first and the second last
     * name. For example, the more-complete version of Pablo Picasso's surname is
     * "Ruiz y Picasso" containing a first last name, a conjunction (the y) and a
     * second last name.
     *
     * @generated from field: repeated string name_last_first = 27;
     */
    nameLastFirst: string[];
    /**
     * @generated from field: repeated string name_last_conjunction = 28;
     */
    nameLastConjunction: string[];
    /**
     * @generated from field: repeated string name_last_second = 29;
     */
    nameLastSecond: string[];
    /**
     * @generated from field: repeated string name_full = 21;
     */
    nameFull: string[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_first_status = 31;
     */
    nameFirstStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_middle_status = 32;
     */
    nameMiddleStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_last_status = 33;
     */
    nameLastStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_last_first_status = 34;
     */
    nameLastFirstStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_last_conjunction_status = 35;
     */
    nameLastConjunctionStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_last_second_status = 36;
     */
    nameLastSecondStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * @generated from field: repeated sync_pb.AutofillProfileSpecifics.VerificationStatus name_full_status = 37;
     */
    nameFullStatus: AutofillProfileSpecifics_VerificationStatus[];
    /**
     * Contact info additional fields.
     *
     * @generated from field: repeated string email_address = 5;
     */
    emailAddress: string[];
    /**
     * @generated from field: optional string company_name = 6;
     */
    companyName: string;
    /**
     * Address field.
     * The address_home_line1/2 fields are deprecated and
     * address_home_street_address should be used instead by
     * joining address_home_line1/2 with a newline ("\n").
     * Full deprecation can not be achieved before all sync profiles have been
     * updated with a M86+ client.
     * TODO(crbug/1111740): Remove usages of address_home_line1/2 and mark field
     * as deprecated.
     *
     * @generated from field: optional string address_home_line1 = 7;
     */
    addressHomeLine1: string;
    /**
     * @generated from field: optional string address_home_line2 = 8;
     */
    addressHomeLine2: string;
    /**
     * @generated from field: optional string address_home_city = 9;
     */
    addressHomeCity: string;
    /**
     * @generated from field: optional string address_home_state = 10;
     */
    addressHomeState: string;
    /**
     * @generated from field: optional string address_home_zip = 11;
     */
    addressHomeZip: string;
    /**
     * @generated from field: optional string address_home_country = 12;
     */
    addressHomeCountry: string;
    /**
     * @generated from field: optional string address_home_admin_level_2 = 71;
     */
    addressHomeAdminLevel2: string;
    /**
     * Additional address fields for i18n.
     *
     * @generated from field: optional string address_home_street_address = 17;
     */
    addressHomeStreetAddress: string;
    /**
     * @generated from field: optional string address_home_sorting_code = 18;
     */
    addressHomeSortingCode: string;
    /**
     * @generated from field: optional string address_home_dependent_locality = 19;
     */
    addressHomeDependentLocality: string;
    /**
     * @generated from field: optional string address_home_language_code = 20;
     */
    addressHomeLanguageCode: string;
    /**
     * @generated from field: optional string address_home_thoroughfare_name = 38;
     */
    addressHomeThoroughfareName: string;
    /**
     * @generated from field: optional string address_home_thoroughfare_number = 39;
     */
    addressHomeThoroughfareNumber: string;
    /**
     * @generated from field: optional string address_home_street_location = 73;
     */
    addressHomeStreetLocation: string;
    /**
     * @generated from field: optional string address_home_subpremise_name = 42;
     */
    addressHomeSubpremiseName: string;
    /**
     * All the information related to the apartment. Normally a combination of the
     * apartment type (address_home_apt_type) and number (address_home_apt_num).
     * E.g. "Apt 5".
     *
     * @generated from field: optional string address_home_apt = 85;
     */
    addressHomeApt: string;
    /**
     * The raw number (or identifier) of an apartment (e.g. "5") but without a
     * prefix. The value "apt 5" would correspond to the address_home_apt.
     *
     * @generated from field: optional string address_home_apt_num = 56;
     */
    addressHomeAptNum: string;
    /**
     * Information describing the type of apartment (e.g. Apt, Apartamento, Sala,
     * Departamento).
     *
     * @generated from field: optional string address_home_apt_type = 87;
     */
    addressHomeAptType: string;
    /**
     * @generated from field: optional string address_home_floor = 57;
     */
    addressHomeFloor: string;
    /**
     * @generated from field: optional string address_home_landmark = 67;
     */
    addressHomeLandmark: string;
    /**
     * The type indicates that the address is at the intersection between two
     * streets. This is a common way of writing addresses in Mexico.
     *
     * @generated from field: optional string address_home_between_streets = 69;
     */
    addressHomeBetweenStreets: string;
    /**
     * The meaning of the field is similar to address_home_between_streets. The
     * type should be used for "Entre calle 1" in MX addresses which also
     * contain the "Entre calle 2" field.
     *
     * @generated from field: optional string address_home_between_streets_1 = 77;
     */
    addressHomeBetweenStreets1: string;
    /**
     * The meaning of the field is similar to address_home_between_streets. The
     * type should be used for "Entre calle 2" in MX addresses which also
     * contain the "Entre calle 1" field.
     *
     * @generated from field: optional string address_home_between_streets_2 = 79;
     */
    addressHomeBetweenStreets2: string;
    /**
     * @generated from field: optional string address_home_overflow = 75;
     */
    addressHomeOverflow: string;
    /**
     * Combination of types address_home_between_streets or address_home_landmark.
     * Note that some address forms require the combination of both in a single
     * field as opposed to each one separately.
     *
     * @generated from field: optional string address_home_between_streets_or_landmark = 81;
     */
    addressHomeBetweenStreetsOrLandmark: string;
    /**
     * Combination of types address_home_overflow and address_home_landmark.
     * Note that some address forms require the combination of both in a single
     * field as opposed to each one separately.
     *
     * @generated from field: optional string address_home_overflow_and_landmark = 83;
     */
    addressHomeOverflowAndLandmark: string;
    /**
     * Combination of types address_home_street_location and
     * address_home_dependent_locality. Note that some address forms require the
     * combination of both in a single field as opposed to each one separately.
     *
     * @generated from field: optional string address_home_street_location_and_locality = 89;
     */
    addressHomeStreetLocationAndLocality: string;
    /**
     * Validation status records for address fields.
     *
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_city_status = 43;
     */
    addressHomeCityStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_state_status = 44;
     */
    addressHomeStateStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_zip_status = 45;
     */
    addressHomeZipStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_country_status = 46;
     */
    addressHomeCountryStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_landmark_status = 68;
     */
    addressHomeLandmarkStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_between_streets_status = 70;
     */
    addressHomeBetweenStreetsStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_between_streets_1_status = 78;
     */
    addressHomeBetweenStreets1Status: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_between_streets_2_status = 80;
     */
    addressHomeBetweenStreets2Status: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_admin_level_2_status = 72;
     */
    addressHomeAdminLevel2Status: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_overflow_status = 76;
     */
    addressHomeOverflowStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_between_streets_or_landmark_status = 82;
     */
    addressHomeBetweenStreetsOrLandmarkStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_overflow_and_landmark_status = 84;
     */
    addressHomeOverflowAndLandmarkStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_street_location_and_locality_status = 90;
     */
    addressHomeStreetLocationAndLocalityStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_street_address_status = 47;
     */
    addressHomeStreetAddressStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_sorting_code_status = 48;
     */
    addressHomeSortingCodeStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_dependent_locality_status = 49;
     */
    addressHomeDependentLocalityStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_language_code_status = 50;
     */
    addressHomeLanguageCodeStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_thoroughfare_name_status = 51;
     */
    addressHomeThoroughfareNameStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_thoroughfare_number_status = 52;
     */
    addressHomeThoroughfareNumberStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_street_location_status = 74;
     */
    addressHomeStreetLocationStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_subpremise_name_status = 55;
     */
    addressHomeSubpremiseNameStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_apt_status = 86;
     */
    addressHomeAptStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_apt_num_status = 58;
     */
    addressHomeAptNumStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_apt_type_status = 88;
     */
    addressHomeAptTypeStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * @generated from field: optional sync_pb.AutofillProfileSpecifics.VerificationStatus address_home_floor_status = 59;
     */
    addressHomeFloorStatus: AutofillProfileSpecifics_VerificationStatus;
    /**
     * Phone.
     *
     * @generated from field: repeated string phone_home_whole_number = 13;
     */
    phoneHomeWholeNumber: string[];
    /**
     * Deprecated.
     *
     * @generated from field: optional string deprecated_label = 1 [deprecated = true];
     * @deprecated
     */
    deprecatedLabel: string;
    /**
     * @generated from field: optional string phone_fax_whole_number = 14 [deprecated = true];
     * @deprecated
     */
    phoneFaxWholeNumber: string;
    /**
     * The following validity-related fields have only been used in combination
     * with an experimental features that are disabled for all clients and have
     * been removed in M100.
     *
     * @generated from field: optional int64 validity_state_bitfield = 24 [deprecated = true];
     * @deprecated
     */
    validityStateBitfield: bigint;
    /**
     * @generated from field: optional bool is_client_validity_states_updated = 25 [deprecated = true];
     * @deprecated
     */
    isClientValidityStatesUpdated: boolean;
};
/**
 * Describes the message sync_pb.AutofillProfileSpecifics.
 * Use `create(AutofillProfileSpecificsSchema)` to create a new message.
 */
export declare const AutofillProfileSpecificsSchema: GenMessage<AutofillProfileSpecifics>;
/**
 * Represents the validation status of value stored in the AutofillProfile.
 *
 * @generated from enum sync_pb.AutofillProfileSpecifics.VerificationStatus
 */
export declare enum AutofillProfileSpecifics_VerificationStatus {
    /**
     * No verification status assigned.
     *
     * @generated from enum value: VERIFICATION_STATUS_UNSPECIFIED = 0;
     */
    VERIFICATION_STATUS_UNSPECIFIED = 0,
    /**
     * The value token was parsed from a parent token.
     * For example, the first name was derived by splitting a full name into
     * its components.
     *
     * @generated from enum value: PARSED = 1;
     */
    PARSED = 1,
    /**
     * Value was built from its subcomponents.
     * For example, the full name was built from the first, middle and last
     * name.
     *
     * @generated from enum value: FORMATTED = 2;
     */
    FORMATTED = 2,
    /**
     * The value was observed in a form transmission.
     * For example, the user filled a form that contained at NAME_FULL field.
     * The value of NAME_FULL will be stored as OBSERVED.
     *
     * @generated from enum value: OBSERVED = 3;
     */
    OBSERVED = 3,
    /**
     * The user used the autofill settings to verify and store this token.
     * This is currently only applicable to the full name, since users cannot
     * edit individual components of their name.
     *
     * @generated from enum value: USER_VERIFIED = 4;
     */
    USER_VERIFIED = 4,
    /**
     * The token was parsed remotely.
     *
     * @generated from enum value: SERVER_PARSED = 5;
     */
    SERVER_PARSED = 5
}
/**
 * Describes the enum sync_pb.AutofillProfileSpecifics.VerificationStatus.
 */
export declare const AutofillProfileSpecifics_VerificationStatusSchema: GenEnum<AutofillProfileSpecifics_VerificationStatus>;
/**
 * @generated from message sync_pb.AutofillSpecifics
 */
export type AutofillSpecifics = Message<"sync_pb.AutofillSpecifics"> & {
    /**
     * If any of these 3 fields are present, then all 3 should be, and it implies
     * that this entity represents a classic autofill object.  In this case,
     * none of the autofill++ objects below should be present.
     *
     * @generated from field: optional string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string value = 2;
     */
    value: string;
    /**
     * @generated from field: repeated int64 usage_timestamp = 3;
     */
    usageTimestamp: bigint[];
    /**
     * An autofill++ profile object.  If present, indicates this entity
     * represents an AutofillProfile exclusively, and no other fields (such as
     * name/value or credit_card) should be present.
     *
     * @generated from field: optional sync_pb.AutofillProfileSpecifics profile = 4;
     */
    profile?: AutofillProfileSpecifics;
};
/**
 * Describes the message sync_pb.AutofillSpecifics.
 * Use `create(AutofillSpecificsSchema)` to create a new message.
 */
export declare const AutofillSpecificsSchema: GenMessage<AutofillSpecifics>;
/**
 * TODO(crbug.com/1020740): Deprecated, remove this once dependent change is
 * done. Use WalletCreditCardCloudTokenData instead.
 *
 * @generated from message sync_pb.CloudTokenData
 */
export type CloudTokenData = Message<"sync_pb.CloudTokenData"> & {
    /**
     * Last 4-5 digits of the Cloud Primary Account Number (CPAN).
     *
     * @generated from field: optional string suffix = 1;
     */
    suffix: string;
    /**
     * CPAN Month number 1-12.
     *
     * @generated from field: optional int32 exp_month = 2;
     */
    expMonth: number;
    /**
     * CPAN Four-digit year (e.g. 2017).
     *
     * @generated from field: optional int32 exp_year = 3;
     */
    expYear: number;
    /**
     * URL of the card art to be displayed for CPAN.
     *
     * @generated from field: optional string art_fife_url = 4;
     */
    artFifeUrl: string;
    /**
     * Opaque identifier for the cloud token associated with the payment
     * instrument.
     *
     * @generated from field: optional string instrument_token = 5;
     */
    instrumentToken: string;
};
/**
 * Describes the message sync_pb.CloudTokenData.
 * Use `create(CloudTokenDataSchema)` to create a new message.
 */
export declare const CloudTokenDataSchema: GenMessage<CloudTokenData>;
/**
 * Next id: 8
 *
 * @generated from message sync_pb.CardBenefit
 */
export type CardBenefit = Message<"sync_pb.CardBenefit"> & {
    /**
     * The unique identifier of the benefit. Generated originally in Chrome Sync
     * server.
     *
     * @generated from field: optional string benefit_id = 7;
     */
    benefitId: string;
    /**
     * The benefit description (Engligh only currently) to be shown in the UI.
     *
     * @generated from field: optional string benefit_description = 1;
     */
    benefitDescription: string;
    /**
     * When the benefit should be displayed, in UTC time.
     *
     * @generated from field: optional int64 start_time_unix_epoch_milliseconds = 2;
     */
    startTimeUnixEpochMilliseconds: bigint;
    /**
     * @generated from field: optional int64 end_time_unix_epoch_milliseconds = 3;
     */
    endTimeUnixEpochMilliseconds: bigint;
    /**
     * Proto data representing the actual data of the credit card benefit,
     * depending on the benefit type.
     *
     * @generated from oneof sync_pb.CardBenefit.DomainSpecificBenefit
     */
    DomainSpecificBenefit: {
        /**
         * @generated from field: sync_pb.CardBenefit.FlatRateBenefit flat_rate_benefit = 4;
         */
        value: CardBenefit_FlatRateBenefit;
        case: "flatRateBenefit";
    } | {
        /**
         * @generated from field: sync_pb.CardBenefit.CategoryBenefit category_benefit = 5;
         */
        value: CardBenefit_CategoryBenefit;
        case: "categoryBenefit";
    } | {
        /**
         * @generated from field: sync_pb.CardBenefit.MerchantBenefit merchant_benefit = 6;
         */
        value: CardBenefit_MerchantBenefit;
        case: "merchantBenefit";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.CardBenefit.
 * Use `create(CardBenefitSchema)` to create a new message.
 */
export declare const CardBenefitSchema: GenMessage<CardBenefit>;
/**
 * Proto containing data specific to a flat rate benefit. Empty as flat rate
 * benefits don't have unique fields. The actual benefit (e.g. "2% cash back")
 * is already included in the `benefit_description`.
 *
 * @generated from message sync_pb.CardBenefit.FlatRateBenefit
 */
export type CardBenefit_FlatRateBenefit = Message<"sync_pb.CardBenefit.FlatRateBenefit"> & {};
/**
 * Describes the message sync_pb.CardBenefit.FlatRateBenefit.
 * Use `create(CardBenefit_FlatRateBenefitSchema)` to create a new message.
 */
export declare const CardBenefit_FlatRateBenefitSchema: GenMessage<CardBenefit_FlatRateBenefit>;
/**
 * Proto containing data specific to a category benefit.
 *
 * @generated from message sync_pb.CardBenefit.CategoryBenefit
 */
export type CardBenefit_CategoryBenefit = Message<"sync_pb.CardBenefit.CategoryBenefit"> & {
    /**
     * The type of category purchases the benefit is eligible on.
     *
     * @generated from field: optional sync_pb.CardBenefit.CategoryBenefitType category_benefit_type = 1;
     */
    categoryBenefitType: CardBenefit_CategoryBenefitType;
};
/**
 * Describes the message sync_pb.CardBenefit.CategoryBenefit.
 * Use `create(CardBenefit_CategoryBenefitSchema)` to create a new message.
 */
export declare const CardBenefit_CategoryBenefitSchema: GenMessage<CardBenefit_CategoryBenefit>;
/**
 * Proto containing data specific to a merchant benefit.
 *
 * @generated from message sync_pb.CardBenefit.MerchantBenefit
 */
export type CardBenefit_MerchantBenefit = Message<"sync_pb.CardBenefit.MerchantBenefit"> & {
    /**
     * The merchant domain that the benefit is eligible on.
     * Example: https://www.acme.com
     *
     * @generated from field: repeated string merchant_domain = 1;
     */
    merchantDomain: string[];
};
/**
 * Describes the message sync_pb.CardBenefit.MerchantBenefit.
 * Use `create(CardBenefit_MerchantBenefitSchema)` to create a new message.
 */
export declare const CardBenefit_MerchantBenefitSchema: GenMessage<CardBenefit_MerchantBenefit>;
/**
 * For category benefits, represents the category of purchases that the
 * benefit can be applied to.
 *
 * @generated from enum sync_pb.CardBenefit.CategoryBenefitType
 */
export declare enum CardBenefit_CategoryBenefitType {
    /**
     * @generated from enum value: CATEGORY_BENEFIT_TYPE_UNKNOWN = 0;
     */
    CATEGORY_BENEFIT_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: SUBSCRIPTION = 1;
     */
    SUBSCRIPTION = 1,
    /**
     * @generated from enum value: FLIGHTS = 2;
     */
    FLIGHTS = 2,
    /**
     * @generated from enum value: DINING = 3;
     */
    DINING = 3,
    /**
     * @generated from enum value: ENTERTAINMENT = 4;
     */
    ENTERTAINMENT = 4,
    /**
     * @generated from enum value: STREAMING = 5;
     */
    STREAMING = 5,
    /**
     * @generated from enum value: GROCERY_STORES = 6;
     */
    GROCERY_STORES = 6
}
/**
 * Describes the enum sync_pb.CardBenefit.CategoryBenefitType.
 */
export declare const CardBenefit_CategoryBenefitTypeSchema: GenEnum<CardBenefit_CategoryBenefitType>;
/**
 * @generated from message sync_pb.CardIssuer
 */
export type CardIssuer = Message<"sync_pb.CardIssuer"> & {
    /**
     * @generated from field: optional sync_pb.CardIssuer.Issuer issuer = 1;
     */
    issuer: CardIssuer_Issuer;
    /**
     * Uniquely identifies the issuer of the card. This field is required when
     * Issuer is EXTERNAL_ISSUER.
     * Example: capitalone, amex.
     *
     * @generated from field: optional string issuer_id = 2;
     */
    issuerId: string;
};
/**
 * Describes the message sync_pb.CardIssuer.
 * Use `create(CardIssuerSchema)` to create a new message.
 */
export declare const CardIssuerSchema: GenMessage<CardIssuer>;
/**
 * @generated from enum sync_pb.CardIssuer.Issuer
 */
export declare enum CardIssuer_Issuer {
    /**
     * @generated from enum value: ISSUER_UNKNOWN = 0;
     */
    ISSUER_UNKNOWN = 0,
    /**
     * Card where the issuer is Google.
     *
     * @generated from enum value: GOOGLE = 1;
     */
    GOOGLE = 1,
    /**
     * Card where the issuer is external.
     *
     * @generated from enum value: EXTERNAL_ISSUER = 2;
     */
    EXTERNAL_ISSUER = 2
}
/**
 * Describes the enum sync_pb.CardIssuer.Issuer.
 */
export declare const CardIssuer_IssuerSchema: GenEnum<CardIssuer_Issuer>;
/**
 * @generated from message sync_pb.WalletMaskedCreditCard
 */
export type WalletMaskedCreditCard = Message<"sync_pb.WalletMaskedCreditCard"> & {
    /**
     * Server-generated unique ID string. This is opaque to the client.
     * This is the legacy version of |instrument_id|.
     *
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * What the server thinks of this card.
     *
     * @generated from field: optional sync_pb.WalletMaskedCreditCard.WalletCardStatus status = 2;
     */
    status: WalletMaskedCreditCard_WalletCardStatus;
    /**
     * @generated from field: optional string name_on_card = 3;
     */
    nameOnCard: string;
    /**
     * @generated from field: optional sync_pb.WalletMaskedCreditCard.WalletCardType type = 4;
     */
    type: WalletMaskedCreditCard_WalletCardType;
    /**
     * Last 4 digits of the credit card number.
     *
     * @generated from field: optional string last_four = 5;
     */
    lastFour: string;
    /**
     * Month number 1-12.
     *
     * @generated from field: optional int32 exp_month = 6;
     */
    expMonth: number;
    /**
     * Four-digit year (e.g. 2017).
     *
     * @generated from field: optional int32 exp_year = 7;
     */
    expYear: number;
    /**
     * The WalletPostalAddress.id of the billing address.
     *
     * @generated from field: optional string billing_address_id = 8;
     */
    billingAddressId: string;
    /**
     * Issuing Bank name which is internationalized (e.g. "Chase", "工商银行")
     *
     * @generated from field: optional string bank_name = 10;
     */
    bankName: string;
    /**
     * TODO(crbug.com/1020740): Deprecated, remove this once dependent change is
     * done.
     * Use WalletCreditCardCloudTokenData instead. This field will be set if
     * a cloud token is available for the instrument.
     *
     * @generated from field: optional sync_pb.CloudTokenData cloud_token_data = 11;
     */
    cloudTokenData?: CloudTokenData;
    /**
     * The card's nickname, if it exists.
     *
     * @generated from field: optional string nickname = 12;
     */
    nickname: string;
    /**
     * Issuer of the card.
     *
     * @generated from field: optional sync_pb.CardIssuer card_issuer = 13;
     */
    cardIssuer?: CardIssuer;
    /**
     * Server-generated unique ID. This is opaque to the client.
     * |id| is the legacy version of this.
     *
     * @generated from field: optional int64 instrument_id = 15;
     */
    instrumentId: bigint;
    /**
     * The state of virtual card enrollment.
     *
     * @generated from field: optional sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentState virtual_card_enrollment_state = 16;
     */
    virtualCardEnrollmentState: WalletMaskedCreditCard_VirtualCardEnrollmentState;
    /**
     * The URL for the client to fetch the card art image.
     *
     * @generated from field: optional string card_art_url = 17;
     */
    cardArtUrl: string;
    /**
     * The product description for the card. Used to be shown in the UI.
     *
     * @generated from field: optional string product_description = 18;
     */
    productDescription: string;
    /**
     * The type of virtual card enrollment. kTypeUnspecified indicates that the
     * card is unenrolled.
     *
     * @generated from field: optional sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentType virtual_card_enrollment_type = 19;
     */
    virtualCardEnrollmentType: WalletMaskedCreditCard_VirtualCardEnrollmentType;
    /**
     * The benefits (e.g. points or discounts) associated with purchases made
     * with the card.
     *
     * @generated from field: repeated sync_pb.CardBenefit card_benefit = 20;
     */
    cardBenefit: CardBenefit[];
    /**
     * Separate link from the card issuer which provides additional context or
     * terms and conditions regarding the credit card product and its benefits.
     *
     * @generated from field: optional string product_terms_url = 21;
     */
    productTermsUrl: string;
};
/**
 * Describes the message sync_pb.WalletMaskedCreditCard.
 * Use `create(WalletMaskedCreditCardSchema)` to create a new message.
 */
export declare const WalletMaskedCreditCardSchema: GenMessage<WalletMaskedCreditCard>;
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.WalletCardStatus
 */
export declare enum WalletMaskedCreditCard_WalletCardStatus {
    /**
     * @generated from enum value: VALID = 0;
     */
    VALID = 0,
    /**
     * @generated from enum value: EXPIRED = 1;
     */
    EXPIRED = 1
}
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.WalletCardStatus.
 */
export declare const WalletMaskedCreditCard_WalletCardStatusSchema: GenEnum<WalletMaskedCreditCard_WalletCardStatus>;
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.WalletCardType
 */
export declare enum WalletMaskedCreditCard_WalletCardType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: AMEX = 1;
     */
    AMEX = 1,
    /**
     * @generated from enum value: DISCOVER = 2;
     */
    DISCOVER = 2,
    /**
     * @generated from enum value: JCB = 3;
     */
    JCB = 3,
    /**
     * @generated from enum value: MAESTRO = 4;
     */
    MAESTRO = 4,
    /**
     * @generated from enum value: MASTER_CARD = 5;
     */
    MASTER_CARD = 5,
    /**
     * @generated from enum value: SOLO = 6;
     */
    SOLO = 6,
    /**
     * @generated from enum value: SWITCH = 7;
     */
    SWITCH = 7,
    /**
     * @generated from enum value: VISA = 8;
     */
    VISA = 8,
    /**
     * @generated from enum value: UNIONPAY = 9;
     */
    UNIONPAY = 9,
    /**
     * @generated from enum value: ELO = 10;
     */
    ELO = 10
}
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.WalletCardType.
 */
export declare const WalletMaskedCreditCard_WalletCardTypeSchema: GenEnum<WalletMaskedCreditCard_WalletCardType>;
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentState
 */
export declare enum WalletMaskedCreditCard_VirtualCardEnrollmentState {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: UNENROLLED = 1 [deprecated = true];
     * @deprecated
     */
    UNENROLLED = 1,
    /**
     * @generated from enum value: ENROLLED = 2;
     */
    ENROLLED = 2,
    /**
     * @generated from enum value: UNENROLLED_AND_NOT_ELIGIBLE = 3;
     */
    UNENROLLED_AND_NOT_ELIGIBLE = 3,
    /**
     * @generated from enum value: UNENROLLED_AND_ELIGIBLE = 4;
     */
    UNENROLLED_AND_ELIGIBLE = 4
}
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentState.
 */
export declare const WalletMaskedCreditCard_VirtualCardEnrollmentStateSchema: GenEnum<WalletMaskedCreditCard_VirtualCardEnrollmentState>;
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentType
 */
export declare enum WalletMaskedCreditCard_VirtualCardEnrollmentType {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ISSUER = 1;
     */
    ISSUER = 1,
    /**
     * @generated from enum value: NETWORK = 2;
     */
    NETWORK = 2
}
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentType.
 */
export declare const WalletMaskedCreditCard_VirtualCardEnrollmentTypeSchema: GenEnum<WalletMaskedCreditCard_VirtualCardEnrollmentType>;
/**
 * Unused by the client since M121.
 * TODO(crbug.com/1457187): Some server-side code still relies on this message.
 * To keep the protos in sync, it is kept until that code is cleaned up.
 * Different than an AutofillProfile because this represents some known address
 * on the server that is pulled down rather than synced between Chromes.
 *
 * @generated from message sync_pb.WalletPostalAddress
 */
export type WalletPostalAddress = Message<"sync_pb.WalletPostalAddress"> & {
    /**
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional string recipient_name = 12;
     */
    recipientName: string;
    /**
     * @generated from field: optional string company_name = 2;
     */
    companyName: string;
    /**
     * This is the street address, of which there may be multiple lines. This
     * corresponds to "address_home_line[1|2] in the AutofillProfileSpecifics
     * message above. In some locales there may be more than two lines.
     *
     * @generated from field: repeated string street_address = 3;
     */
    streetAddress: string[];
    /**
     * Also known as "administrative area". This is normally the state or
     * province in most countries.
     *
     * @generated from field: optional string address_1 = 4;
     */
    address1: string;
    /**
     * Also known as "locality". In the US this is the city.
     *
     * @generated from field: optional string address_2 = 5;
     */
    address2: string;
    /**
     * A sub-classification beneath the city, e.g. an inner-city district or
     * suburb. Also known as "dependent_locality"
     *
     * @generated from field: optional string address_3 = 6;
     */
    address3: string;
    /**
     * Used in certain countries. Also known as "sub_dependent_locality".
     *
     * @generated from field: optional string address_4 = 7;
     */
    address4: string;
    /**
     * @generated from field: optional string postal_code = 8;
     */
    postalCode: string;
    /**
     * Similar to the zipcode column, but used for businesses or organizations
     * that might not be geographically contiguous. The canonical example is
     * CEDEX in France.
     *
     * @generated from field: optional string sorting_code = 9;
     */
    sortingCode: string;
    /**
     * @generated from field: optional string country_code = 10;
     */
    countryCode: string;
    /**
     * @generated from field: optional string language_code = 11;
     */
    languageCode: string;
    /**
     * Phone number. The format is unspecified and will be explicitly ignored.
     *
     * @generated from field: optional string phone_number = 13;
     */
    phoneNumber: string;
};
/**
 * Describes the message sync_pb.WalletPostalAddress.
 * Use `create(WalletPostalAddressSchema)` to create a new message.
 */
export declare const WalletPostalAddressSchema: GenMessage<WalletPostalAddress>;
/**
 * Contains information about a Payments Customer.
 *
 * @generated from message sync_pb.PaymentsCustomerData
 */
export type PaymentsCustomerData = Message<"sync_pb.PaymentsCustomerData"> & {
    /**
     * The billable customer ID associated with the account.
     *
     * @generated from field: optional string id = 1;
     */
    id: string;
};
/**
 * Describes the message sync_pb.PaymentsCustomerData.
 * Use `create(PaymentsCustomerDataSchema)` to create a new message.
 */
export declare const PaymentsCustomerDataSchema: GenMessage<PaymentsCustomerData>;
/**
 * Contains information about the cloud token data of server credit cards.
 *
 * @generated from message sync_pb.WalletCreditCardCloudTokenData
 */
export type WalletCreditCardCloudTokenData = Message<"sync_pb.WalletCreditCardCloudTokenData"> & {
    /**
     * Server-generated ID string for the card this cloud token data is related
     * to. This should match the id in WalletMaskedCreditCard for to fetch the
     * corresponding actual card data. Note this is not unique across all cloud
     * token data, which means one card can have multiple sets of cloud token data
     * with the same masked_card_id.
     *
     * @generated from field: optional string masked_card_id = 1;
     */
    maskedCardId: string;
    /**
     * Last 4-5 digits of the Cloud Primary Account Number (CPAN).
     *
     * @generated from field: optional string suffix = 2;
     */
    suffix: string;
    /**
     * CPAN Month number 1-12.
     *
     * @generated from field: optional int32 exp_month = 3;
     */
    expMonth: number;
    /**
     * CPAN Four-digit year (e.g. 2017).
     *
     * @generated from field: optional int32 exp_year = 4;
     */
    expYear: number;
    /**
     * URL of the card art to be displayed for CPAN.
     *
     * @generated from field: optional string art_fife_url = 5;
     */
    artFifeUrl: string;
    /**
     * Opaque identifier for the cloud token.
     *
     * @generated from field: optional string instrument_token = 6;
     */
    instrumentToken: string;
};
/**
 * Describes the message sync_pb.WalletCreditCardCloudTokenData.
 * Use `create(WalletCreditCardCloudTokenDataSchema)` to create a new message.
 */
export declare const WalletCreditCardCloudTokenDataSchema: GenMessage<WalletCreditCardCloudTokenData>;
/**
 * Contains information of payment instruments that can be used by the user.
 *
 * @generated from message sync_pb.PaymentInstrument
 */
export type PaymentInstrument = Message<"sync_pb.PaymentInstrument"> & {
    /**
     * Opaque identifier for the account stored in Payments Platform.
     * This will be used to initiate the payment.
     *
     * @generated from field: optional int64 instrument_id = 1;
     */
    instrumentId: bigint;
    /**
     * The supported rails for which a payment can be made for the given account.
     * For example, Pix is the open-banking rail in Brazil, UPI is the
     * open-banking rail in India.
     *
     * @generated from field: repeated sync_pb.PaymentInstrument.SupportedRail supported_rails = 2;
     */
    supportedRails: PaymentInstrument_SupportedRail[];
    /**
     * The URL for the image to be displayed when showing the account to the
     * user.
     *
     * @generated from field: optional string display_icon_url = 3;
     */
    displayIconUrl: string;
    /**
     * Nickname for the instrument.
     *
     * @generated from field: optional string nickname = 4;
     */
    nickname: string;
    /**
     * The backing source for the applicable rails.
     *
     * @generated from oneof sync_pb.PaymentInstrument.instrument_details
     */
    instrumentDetails: {
        /**
         * @generated from field: sync_pb.BankAccountDetails bank_account = 5;
         */
        value: BankAccountDetails;
        case: "bankAccount";
    } | {
        /**
         * @generated from field: sync_pb.WalletMaskedIban iban = 6;
         */
        value: WalletMaskedIban;
        case: "iban";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.PaymentInstrument.
 * Use `create(PaymentInstrumentSchema)` to create a new message.
 */
export declare const PaymentInstrumentSchema: GenMessage<PaymentInstrument>;
/**
 * Supported payment infrastructures (rail) that allow users to send money
 * between the payer and the payee. https://en.wikipedia.org/wiki/Payment_rail
 *
 * @generated from enum sync_pb.PaymentInstrument.SupportedRail
 */
export declare enum PaymentInstrument_SupportedRail {
    /**
     * @generated from enum value: SUPPORTED_RAIL_UNKNOWN = 0;
     */
    SUPPORTED_RAIL_UNKNOWN = 0,
    /**
     * Payment rails for Brazil Open Banking.
     *
     * @generated from enum value: PIX = 1;
     */
    PIX = 1,
    /**
     * International Bank Account Numbers.
     *
     * @generated from enum value: IBAN = 2;
     */
    IBAN = 2
}
/**
 * Describes the enum sync_pb.PaymentInstrument.SupportedRail.
 */
export declare const PaymentInstrument_SupportedRailSchema: GenEnum<PaymentInstrument_SupportedRail>;
/**
 * Contains information of server IBAN (International Bank Account Number).
 *
 * @generated from message sync_pb.WalletMaskedIban
 */
export type WalletMaskedIban = Message<"sync_pb.WalletMaskedIban"> & {
    /**
     * Opaque identifier for the account stored in Payments Platform.
     *
     * @generated from field: optional string instrument_id = 1;
     */
    instrumentId: string;
    /**
     * Prefix of the full IBAN value, if available.
     *
     * @generated from field: optional string prefix = 2;
     */
    prefix: string;
    /**
     * Suffix of the full IBAN value, if available.
     *
     * @generated from field: optional string suffix = 3;
     */
    suffix: string;
    /**
     * Length of the full IBAN value, if available.
     *
     * @generated from field: optional int32 length = 4;
     */
    length: number;
    /**
     * Nickname for the IBAN, if available.
     *
     * @generated from field: optional string nickname = 5;
     */
    nickname: string;
};
/**
 * Describes the message sync_pb.WalletMaskedIban.
 * Use `create(WalletMaskedIbanSchema)` to create a new message.
 */
export declare const WalletMaskedIbanSchema: GenMessage<WalletMaskedIban>;
/**
 * Details of a bank account required to show it in the payment instrument
 * selector.
 *
 * @generated from message sync_pb.BankAccountDetails
 */
export type BankAccountDetails = Message<"sync_pb.BankAccountDetails"> & {
    /**
     * The name of the bank where the user has an account.
     *
     * @generated from field: optional string bank_name = 1;
     */
    bankName: string;
    /**
     * The last four digits of the account number to help the user identify their
     * account.
     *
     * @generated from field: optional string account_number_suffix = 2;
     */
    accountNumberSuffix: string;
    /**
     * The type of bank account.
     *
     * @generated from field: optional sync_pb.BankAccountDetails.AccountType account_type = 3;
     */
    accountType: BankAccountDetails_AccountType;
};
/**
 * Describes the message sync_pb.BankAccountDetails.
 * Use `create(BankAccountDetailsSchema)` to create a new message.
 */
export declare const BankAccountDetailsSchema: GenMessage<BankAccountDetails>;
/**
 * @generated from enum sync_pb.BankAccountDetails.AccountType
 */
export declare enum BankAccountDetails_AccountType {
    /**
     * @generated from enum value: ACCOUNT_TYPE_UNSPECIFIED = 0;
     */
    ACCOUNT_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHECKING = 1;
     */
    CHECKING = 1,
    /**
     * @generated from enum value: SAVINGS = 2;
     */
    SAVINGS = 2,
    /**
     * @generated from enum value: CURRENT = 3;
     */
    CURRENT = 3,
    /**
     * @generated from enum value: SALARY = 4;
     */
    SALARY = 4,
    /**
     * @generated from enum value: TRANSACTING_ACCOUNT = 5;
     */
    TRANSACTING_ACCOUNT = 5
}
/**
 * Describes the enum sync_pb.BankAccountDetails.AccountType.
 */
export declare const BankAccountDetails_AccountTypeSchema: GenEnum<BankAccountDetails_AccountType>;
/**
 * @generated from message sync_pb.AutofillWalletSpecifics
 */
export type AutofillWalletSpecifics = Message<"sync_pb.AutofillWalletSpecifics"> & {
    /**
     * @generated from field: optional sync_pb.AutofillWalletSpecifics.WalletInfoType type = 1;
     */
    type: AutofillWalletSpecifics_WalletInfoType;
    /**
     * This field exists if and only if the "type" field equals to
     * MASKED_CREDIT_CARD.
     *
     * @generated from field: optional sync_pb.WalletMaskedCreditCard masked_card = 2;
     */
    maskedCard?: WalletMaskedCreditCard;
    /**
     * Unused by the client since M121.
     * This field exists if and only if the `type` equals POSTAL_ADDRESS.
     * TODO(crbug.com/1457187): Some server-side code still relies on this field.
     * To keep the protos in sync, it is kept until that code is cleaned up.
     *
     * @generated from field: optional sync_pb.WalletPostalAddress address = 3;
     */
    address?: WalletPostalAddress;
    /**
     * This field exists if and only if the "type" field equals to CUSTOMER_DATA.
     *
     * @generated from field: optional sync_pb.PaymentsCustomerData customer_data = 4;
     */
    customerData?: PaymentsCustomerData;
    /**
     * This field exists if and only if the "type" field equals to
     * CREDIT_CARD_CLOUD_TOKEN_DATA.
     *
     * @generated from field: optional sync_pb.WalletCreditCardCloudTokenData cloud_token_data = 5;
     */
    cloudTokenData?: WalletCreditCardCloudTokenData;
    /**
     * This field exists if and only if the "type" field equals to
     * PAYMENT_INSTRUMENT.
     *
     * @generated from field: optional sync_pb.PaymentInstrument payment_instrument = 6;
     */
    paymentInstrument?: PaymentInstrument;
    /**
     * This field exists if and only if the `type` field equals to
     * MASKED_IBAN.
     *
     * @generated from field: optional sync_pb.WalletMaskedIban masked_iban = 7 [deprecated = true];
     * @deprecated
     */
    maskedIban?: WalletMaskedIban;
};
/**
 * Describes the message sync_pb.AutofillWalletSpecifics.
 * Use `create(AutofillWalletSpecificsSchema)` to create a new message.
 */
export declare const AutofillWalletSpecificsSchema: GenMessage<AutofillWalletSpecifics>;
/**
 * @generated from enum sync_pb.AutofillWalletSpecifics.WalletInfoType
 */
export declare enum AutofillWalletSpecifics_WalletInfoType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: MASKED_CREDIT_CARD = 1;
     */
    MASKED_CREDIT_CARD = 1,
    /**
     * POSTAL_ADDRESS is unused by the client since M121.
     *
     * @generated from enum value: POSTAL_ADDRESS = 2;
     */
    POSTAL_ADDRESS = 2,
    /**
     * @generated from enum value: CUSTOMER_DATA = 3;
     */
    CUSTOMER_DATA = 3,
    /**
     * @generated from enum value: CREDIT_CARD_CLOUD_TOKEN_DATA = 4;
     */
    CREDIT_CARD_CLOUD_TOKEN_DATA = 4,
    /**
     * @generated from enum value: PAYMENT_INSTRUMENT = 5;
     */
    PAYMENT_INSTRUMENT = 5,
    /**
     * @generated from enum value: MASKED_IBAN = 6 [deprecated = true];
     * @deprecated
     */
    MASKED_IBAN = 6
}
/**
 * Describes the enum sync_pb.AutofillWalletSpecifics.WalletInfoType.
 */
export declare const AutofillWalletSpecifics_WalletInfoTypeSchema: GenEnum<AutofillWalletSpecifics_WalletInfoType>;
/**
 * Wallet card usage information that can be synced.
 *
 * @generated from message sync_pb.WalletMetadataSpecifics
 */
export type WalletMetadataSpecifics = Message<"sync_pb.WalletMetadataSpecifics"> & {
    /**
     * The type of the Wallet metadata.
     *
     * @generated from field: optional sync_pb.WalletMetadataSpecifics.Type type = 1;
     */
    type: WalletMetadataSpecifics_Type;
    /**
     * Base64 encoding of the unique ID string of the corresponding
     * AutofillMetadata.
     * For Wallet cards, this value is WalletMaskedCreditCard::id.
     * For Wallet IBANs, this value is WalletMaskedIban::instrument_id.
     *
     * @generated from field: optional string id = 2;
     */
    id: string;
    /**
     * The number of times that this Wallet card or address was used.
     *
     * @generated from field: optional int64 use_count = 3;
     */
    useCount: bigint;
    /**
     * The last use date of this Wallet card or address. Measured in microseconds
     * since the Windows epoch (1601).
     *
     * @generated from field: optional int64 use_date = 4;
     */
    useDate: bigint;
    /**
     * The id of the profile/address that represents the billing address of this
     * Wallet card.
     *
     * @generated from field: optional string card_billing_address_id = 5;
     */
    cardBillingAddressId: string;
    /**
     * Unused by the client since M121.
     * TODO(crbug.com/1457187): Some server-side code still relies on this field.
     * To keep the protos in sync, it is kept until that code is cleaned up.
     *
     * @generated from field: optional bool address_has_converted = 6;
     */
    addressHasConverted: boolean;
};
/**
 * Describes the message sync_pb.WalletMetadataSpecifics.
 * Use `create(WalletMetadataSpecificsSchema)` to create a new message.
 */
export declare const WalletMetadataSpecificsSchema: GenMessage<WalletMetadataSpecifics>;
/**
 * @generated from enum sync_pb.WalletMetadataSpecifics.Type
 */
export declare enum WalletMetadataSpecifics_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: CARD = 1;
     */
    CARD = 1,
    /**
     * Unused by the client since M121.
     * TODO(crbug.com/1457187): Some server-side code still relies on this.
     * To keep the protos in sync, it is kept until that code is cleaned up.
     *
     * @generated from enum value: ADDRESS = 2;
     */
    ADDRESS = 2,
    /**
     * @generated from enum value: IBAN = 3;
     */
    IBAN = 3
}
/**
 * Describes the enum sync_pb.WalletMetadataSpecifics.Type.
 */
export declare const WalletMetadataSpecifics_TypeSchema: GenEnum<WalletMetadataSpecifics_Type>;
//# sourceMappingURL=autofill_specifics_pb.d.ts.map