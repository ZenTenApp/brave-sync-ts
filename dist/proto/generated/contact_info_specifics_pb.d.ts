import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file contact_info_specifics.proto.
 */
export declare const file_contact_info_specifics: GenFile;
/**
 * @generated from message sync_pb.ContactInfoSpecifics
 */
export type ContactInfoSpecifics = Message<"sync_pb.ContactInfoSpecifics"> & {
    /**
     * A globally unique, immutable UUID represented in lowercase.
     *
     * @generated from field: optional string guid = 1;
     */
    guid: string;
    /**
     * The number of time this profile has been used.
     *
     * @generated from field: optional int64 use_count = 3;
     */
    useCount: bigint;
    /**
     * The last time this profile was used.
     *
     * @generated from field: optional int64 use_date_unix_epoch_seconds = 4;
     */
    useDateUnixEpochSeconds: bigint;
    /**
     * The last time the profile was modified.
     *
     * @generated from field: optional int64 date_modified_unix_epoch_seconds = 37;
     */
    dateModifiedUnixEpochSeconds: bigint;
    /**
     * The BCP 47 language code used to format the address for display.
     *
     * @generated from field: optional string language_code = 38;
     */
    languageCode: string;
    /**
     * A user chosen profile label that is used to identify the profile.
     * The value of the label can be freely chosen by the user.
     *
     * @generated from field: optional string profile_label = 5;
     */
    profileLabel: string;
    /**
     * Tracks the application that initially created the profile. The integer
     * represents a value in the server-side enum `BillableService`. A value of
     * 70073 represents Chrome (enum value BILLABLE_SERVICE_CHROME_PAYMENTS).
     *
     * @generated from field: optional int32 initial_creator_id = 39;
     */
    initialCreatorId: number;
    /**
     * Tracks the application that applied the last modification to the
     * non-metadata content of the profile. It represents a value in the same
     * `BillableService` enum.
     * All StringTokens, and the `profile_label` are considered non-metadata.
     *
     * @generated from field: optional int32 last_modifier_id = 40;
     */
    lastModifierId: number;
    /**
     * Contact info name fields.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_first = 7;
     */
    nameFirst?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_middle = 8;
     */
    nameMiddle?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_last = 9;
     */
    nameLast?: ContactInfoSpecifics_StringToken;
    /**
     * Sometimes the last name is composed of two names as it is common for
     * Hispanic/Latinx names. In the unstructured representation of the last name,
     * there may be even a conjunction between the first and the second last
     * name. For example, the more-complete version of Pablo Picasso's surname is
     * "Ruiz y Picasso" containing a first last name, a conjunction (the y) and a
     * second last name.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_last_first = 10;
     */
    nameLastFirst?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_last_conjunction = 11;
     */
    nameLastConjunction?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_last_second = 12;
     */
    nameLastSecond?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken name_full = 13;
     */
    nameFull?: ContactInfoSpecifics_StringToken;
    /**
     * Contact info additional fields.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken email_address = 15;
     */
    emailAddress?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken company_name = 16;
     */
    companyName?: ContactInfoSpecifics_StringToken;
    /**
     * Address fields: These are user-provided values with no particular
     * guarantees about their format.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_city = 17;
     */
    addressCity?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_state = 18;
     */
    addressState?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_zip = 19;
     */
    addressZip?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_country = 20;
     */
    addressCountry?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_admin_level_2 = 43;
     */
    addressAdminLevel2?: ContactInfoSpecifics_StringToken;
    /**
     * Additional address fields for i18n.
     * Includes all of the lines of a street address, including newlines, e.g.
     *   123 Main Street,
     *   Apt. #42
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_street_address = 21;
     */
    addressStreetAddress?: ContactInfoSpecifics_StringToken;
    /**
     * A sorting code is similar to a postal code. However, whereas a postal code
     * normally refers to a single geographical location, a sorting code often
     * does not. Instead, a sorting code is assigned to an organization, which
     * might be geographically distributed. The most prominent example of a
     * sorting code system is CEDEX in France.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_sorting_code = 22;
     */
    addressSortingCode?: ContactInfoSpecifics_StringToken;
    /**
     * A dependent locality is a subunit of a locality, where a "locality" is
     * roughly equivalent to a city. Examples of dependent localities include
     * inner-city districts and suburbs.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_dependent_locality = 23;
     */
    addressDependentLocality?: ContactInfoSpecifics_StringToken;
    /**
     * The street name of the address, without a house number.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_thoroughfare_name = 25;
     */
    addressThoroughfareName?: ContactInfoSpecifics_StringToken;
    /**
     * The house number, which may be alphanumeric.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_thoroughfare_number = 26;
     */
    addressThoroughfareNumber?: ContactInfoSpecifics_StringToken;
    /**
     * Contains the floor, staircase or apartment number within a building.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_subpremise_name = 30;
     */
    addressSubpremiseName?: ContactInfoSpecifics_StringToken;
    /**
     * All the information related to the apartment. Normally a combination of the
     * apartment type (address_apt_type) and number (address_apt_num).
     * E.g. "Apt 5".
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_apt = 50;
     */
    addressApt?: ContactInfoSpecifics_StringToken;
    /**
     * The apartment number within a building.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_apt_num = 31;
     */
    addressAptNum?: ContactInfoSpecifics_StringToken;
    /**
     * Information describing the type of apartment (e.g. Apt, Apartamento, Sala,
     * Departamento).
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_apt_type = 51;
     */
    addressAptType?: ContactInfoSpecifics_StringToken;
    /**
     * The floor number within a building.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_floor = 32;
     */
    addressFloor?: ContactInfoSpecifics_StringToken;
    /**
     * Contains both the street and house number.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_street_location = 44;
     */
    addressStreetLocation?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_landmark = 41;
     */
    addressLandmark?: ContactInfoSpecifics_StringToken;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_overflow = 45;
     */
    addressOverflow?: ContactInfoSpecifics_StringToken;
    /**
     * Indicates that the address is at the intersection between two streets.
     * It is normally a combination of between_streets_1 and _2. This is a common
     * way of writing addresses in Mexico.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_between_streets = 42;
     */
    addressBetweenStreets?: ContactInfoSpecifics_StringToken;
    /**
     * The meaning of the field is similar to address_between_streets. The
     * type should be used for "Entre calle 1" in MX addresses which also
     * contain the "Entre calle 2" field.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_between_streets_1 = 46;
     */
    addressBetweenStreets1?: ContactInfoSpecifics_StringToken;
    /**
     * The meaning of the field is similar to address_between_streets. The
     * type should be used for "Entre calle 2" in MX addresses which also
     * contain the "Entre calle 1" field.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_between_streets_2 = 47;
     */
    addressBetweenStreets2?: ContactInfoSpecifics_StringToken;
    /**
     * Combination of types address_between_streets or address_landmark. Note that
     * some address forms require the combination of both in a single field as
     * opposed to each one separately.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_between_streets_or_landmark = 48;
     */
    addressBetweenStreetsOrLandmark?: ContactInfoSpecifics_StringToken;
    /**
     * Combination of types address_overflow and address_landmark. Note that some
     * address forms require the combination of both in a single field as opposed
     * to each one separately.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_overflow_and_landmark = 49;
     */
    addressOverflowAndLandmark?: ContactInfoSpecifics_StringToken;
    /**
     * Combination of types address_street_location and
     * address_dependent_locality. Note that some address forms require the
     * combination of both in a single field as opposed to each one separately.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken address_street_location_and_locality = 52;
     */
    addressStreetLocationAndLocality?: ContactInfoSpecifics_StringToken;
    /**
     * Phone.
     *
     * @generated from field: optional sync_pb.ContactInfoSpecifics.StringToken phone_home_whole_number = 33;
     */
    phoneHomeWholeNumber?: ContactInfoSpecifics_StringToken;
};
/**
 * Describes the message sync_pb.ContactInfoSpecifics.
 * Use `create(ContactInfoSpecificsSchema)` to create a new message.
 */
export declare const ContactInfoSpecificsSchema: GenMessage<ContactInfoSpecifics>;
/**
 * @generated from message sync_pb.ContactInfoSpecifics.Observation
 */
export type ContactInfoSpecifics_Observation = Message<"sync_pb.ContactInfoSpecifics.Observation"> & {
    /**
     * An `autofill::ProfileTokenQuality::ObservationType`. Represented as a
     * uint32 to retain future enum values (since this is proto2).
     * The `ObservationType`'s underlying type is uint8_t, but this is not
     * supported by protos. Since the uint32 Proto type uses variable-length
     * encoding, uint32 has a similar size as a single element byte[].
     *
     * @generated from field: optional uint32 type = 1;
     */
    type: number;
    /**
     * The `autofill::ProfileTokenQuality::FormSignatureHash` has type uint8_t.
     * Like for `type`, this should have the (non-existing) data type uint8.
     *
     * @generated from field: optional uint32 form_hash = 2;
     */
    formHash: number;
};
/**
 * Describes the message sync_pb.ContactInfoSpecifics.Observation.
 * Use `create(ContactInfoSpecifics_ObservationSchema)` to create a new message.
 */
export declare const ContactInfoSpecifics_ObservationSchema: GenMessage<ContactInfoSpecifics_Observation>;
/**
 * Metadata that is attached to every token type.
 *
 * @generated from message sync_pb.ContactInfoSpecifics.TokenMetadata
 */
export type ContactInfoSpecifics_TokenMetadata = Message<"sync_pb.ContactInfoSpecifics.TokenMetadata"> & {
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.VerificationStatus status = 1;
     */
    status: ContactInfoSpecifics_VerificationStatus;
    /**
     * @generated from field: repeated sync_pb.ContactInfoSpecifics.Observation observations = 2;
     */
    observations: ContactInfoSpecifics_Observation[];
    /**
     * Stores a hash of the token value that this metadata is associated with.
     * This is used by Autofill to detect changes of the token value by external
     * integrators.
     *
     * @generated from field: optional uint32 value_hash = 3;
     */
    valueHash: number;
};
/**
 * Describes the message sync_pb.ContactInfoSpecifics.TokenMetadata.
 * Use `create(ContactInfoSpecifics_TokenMetadataSchema)` to create a new message.
 */
export declare const ContactInfoSpecifics_TokenMetadataSchema: GenMessage<ContactInfoSpecifics_TokenMetadata>;
/**
 * A token with a string interpretation of the value.
 *
 * @generated from message sync_pb.ContactInfoSpecifics.StringToken
 */
export type ContactInfoSpecifics_StringToken = Message<"sync_pb.ContactInfoSpecifics.StringToken"> & {
    /**
     * @generated from field: optional string value = 1;
     */
    value: string;
    /**
     * @generated from field: optional sync_pb.ContactInfoSpecifics.TokenMetadata metadata = 2;
     */
    metadata?: ContactInfoSpecifics_TokenMetadata;
};
/**
 * Describes the message sync_pb.ContactInfoSpecifics.StringToken.
 * Use `create(ContactInfoSpecifics_StringTokenSchema)` to create a new message.
 */
export declare const ContactInfoSpecifics_StringTokenSchema: GenMessage<ContactInfoSpecifics_StringToken>;
/**
 * Represents the validation status of a stored value.
 *
 * @generated from enum sync_pb.ContactInfoSpecifics.VerificationStatus
 */
export declare enum ContactInfoSpecifics_VerificationStatus {
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
     * The user used the settings UI to verify and store this token.
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
 * Describes the enum sync_pb.ContactInfoSpecifics.VerificationStatus.
 */
export declare const ContactInfoSpecifics_VerificationStatusSchema: GenEnum<ContactInfoSpecifics_VerificationStatus>;
//# sourceMappingURL=contact_info_specifics_pb.d.ts.map