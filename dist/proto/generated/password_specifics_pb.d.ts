import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EncryptedData } from "./encryption_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file password_specifics.proto.
 */
export declare const file_password_specifics: GenFile;
/**
 * All the strings are encoded with UTF-8. URLs are encoded in Punycode.
 *
 * @generated from message sync_pb.PasswordIssues
 */
export type PasswordIssues = Message<"sync_pb.PasswordIssues"> & {
    /**
     * @generated from field: optional sync_pb.PasswordIssues.PasswordIssue leaked_password_issue = 1;
     */
    leakedPasswordIssue?: PasswordIssues_PasswordIssue;
    /**
     * @generated from field: optional sync_pb.PasswordIssues.PasswordIssue reused_password_issue = 2;
     */
    reusedPasswordIssue?: PasswordIssues_PasswordIssue;
    /**
     * @generated from field: optional sync_pb.PasswordIssues.PasswordIssue weak_password_issue = 3;
     */
    weakPasswordIssue?: PasswordIssues_PasswordIssue;
    /**
     * @generated from field: optional sync_pb.PasswordIssues.PasswordIssue phished_password_issue = 4;
     */
    phishedPasswordIssue?: PasswordIssues_PasswordIssue;
};
/**
 * Describes the message sync_pb.PasswordIssues.
 * Use `create(PasswordIssuesSchema)` to create a new message.
 */
export declare const PasswordIssuesSchema: GenMessage<PasswordIssues>;
/**
 * @generated from message sync_pb.PasswordIssues.PasswordIssue
 */
export type PasswordIssues_PasswordIssue = Message<"sync_pb.PasswordIssues.PasswordIssue"> & {
    /**
     * Timestamp set by a client detecting the issue for the first time.
     * Number of microseconds since Windows epoch (1601).
     * This can be unset even if is_muted is set in a few cases in
     * storage (for a time mutes were written without setting this
     * field - fixed starting 2021-11-10).
     *
     * @generated from field: optional uint64 date_first_detection_windows_epoch_micros = 1;
     */
    dateFirstDetectionWindowsEpochMicros: bigint;
    /**
     * Whether the issue was muted by user.
     *
     * @generated from field: optional bool is_muted = 2;
     */
    isMuted: boolean;
    /**
     * Whether the backend should notify the user about this issue.
     * Set to true if the user hasn't already seen a client notification for
     * this issue (e.g. a leak detection prompt in Chrome). The backend sending
     * notifications does not reset this field. All other sources can write this
     * in both `PasswordSpecificsData` and `PasswordSpecificsMetadata` and do
     * so.
     *
     * @generated from field: optional bool trigger_notification_from_backend_on_detection = 3;
     */
    triggerNotificationFromBackendOnDetection: boolean;
};
/**
 * Describes the message sync_pb.PasswordIssues.PasswordIssue.
 * Use `create(PasswordIssues_PasswordIssueSchema)` to create a new message.
 */
export declare const PasswordIssues_PasswordIssueSchema: GenMessage<PasswordIssues_PasswordIssue>;
/**
 * @generated from message sync_pb.PasswordSpecificsData
 */
export type PasswordSpecificsData = Message<"sync_pb.PasswordSpecificsData"> & {
    /**
     * See the enum above.
     *
     * @generated from field: optional int32 scheme = 1;
     */
    scheme: number;
    /**
     * Signon realm stores information on where the saved password was stored, and
     * where it's supposed to be filled again.
     *
     * It can take various formats depending on the exact circumstances where it
     * was recorded. Note that the format is *not* guaranteed to be a valid URL or
     * URI:
     *
     *  * For parsed web forms and normal passwords saved through Credential
     *  Manager
     *    API: <http-scheme>://<url-host>[:<url-port>]/
     *
     *    where
     *      <http-scheme> is one of "http" or "https"
     *      <url-host> is the host for which the password was stored
     *      <url-port> is the option port on the host
     *    The signon realm is a valid URL in this case with an empty path.
     *    Examples:
     *      http://www.example.com/
     *      https://127.0.0.1/
     *      http://www.google.com:8080/
     *      http://192.168.1.254/
     *      https://accounts.google.com/
     *
     *  * For Android apps saved through Autofill with Google:
     *      android://<hash-of-cert>@<package-name>/
     *    where
     *      <hash-of-cert> is the base64 encoded SHA512 of the app's public
     *      certificate <package-name> is the app's package name
     *    Examples:
     *      android://kCyQDzpaoAX2gs-1zdGPKNAeICb8LzRFOxa4NCq0jO8c8d_NFS_q-Y35bU3Nq3GmFV2lLurmNvIZa6YPYZwmWg==@com.pinterest/
     *      android://mNUCvTnoWBkzIhSSkVj-uzAdK42YagmCmyUtPoC6JPmYAN3wKpmTdIRsdJtz6pzNBye8XL7nBbEcx-y9CJeo9A==@com.twitter.android.lite/
     *
     *  * For federated credentials:
     *      federation://<origin_host>/<federation_host>
     *    where
     *      <origin_host> is the host for which the login information was stored
     *      <federation_host> is the host of the federation provider that was
     *        used to sign in
     *    Examples:
     *      federation://www.example.com/accounts.google.com
     *      federation://uk.trustpilot.com/www.facebook.com
     *
     *  * For proxy auth:
     *      <proxy-host>[:<proxy_port>]/<auth-realm>
     *    where
     *      <proxy-host> is the host of the proxy for which the password was
     *      stored
     *      <proxy-port> is the port of the proxy
     *      <auth-realm> is a string provided by the proxy during authentication.
     *      It can contain spaces.
     *    Examples:
     *      proxy2.eq.edu.au:80/MISldap
     *      proxy.det.nsw.edu.au:8080/NSW Department of Education
     *      10.47.2.250:3128/Squid Proxy Server CPUT
     *      default.go2https.com:443/(******Get password from vpnso.com/account/
     *      *****)
     *
     *  * For HTTP basic auth:
     *      <http-scheme>://<url-host>[:<url-port>]/<auth-realm>
     *    where
     *      <http-scheme> is one of "http" or "https"
     *      <url-host> is the host for which the password was stored
     *      <url-port> is the option port on the host
     *      <auth-realm> is a string provided by the host during authentication.
     *      It can contain spaces.
     *    Examples:
     *      http://192.168.1.1/Broadband Router
     *      http://192.168.0.1/TP-LINK Wireless N Router WR841N
     *      http://192.168.1.1/index.htm
     *      https://www.edge.asic.gov.au/ASIC eBusiness
     *
     * @generated from field: optional string signon_realm = 2;
     */
    signonRealm: string;
    /**
     * For parsed web forms and Credential Management API:
     *     url-scheme://url-host[:url-port]/path
     * For Android: "android://<hash of cert>@<package name>/"
     * For proxy/HTTP auth: url-scheme://url-host[:url-port]/path
     *
     * @generated from field: optional string origin = 3;
     */
    origin: string;
    /**
     * Only for web-parsed forms - the action target of the form:
     *     url-scheme://url-host[:url-port]/path
     *
     * @generated from field: optional string action = 4;
     */
    action: string;
    /**
     * Only for web-parsed forms - the name of the element containing username.
     *
     * @generated from field: optional string username_element = 5;
     */
    usernameElement: string;
    /**
     * For all: the username.
     * For blacklisted forms: <empty>.
     *
     * @generated from field: optional string username_value = 6;
     */
    usernameValue: string;
    /**
     * Only for web-parsed forms - the name of the element containing password.
     *
     * @generated from field: optional string password_element = 7;
     */
    passwordElement: string;
    /**
     * For all: the password.
     * For federated logins and blacklisted forms: <empty>
     *
     * @generated from field: optional string password_value = 8;
     */
    passwordValue: string;
    /**
     * Deprecated: http://crbug.com/413020
     * True if the credential was saved for a HTTPS session with a valid SSL cert.
     * Ignored for Android apps.
     *
     * @generated from field: optional bool ssl_valid = 9 [deprecated = true];
     * @deprecated
     */
    sslValid: boolean;
    /**
     * True for the last credential used for logging in on a given site.
     * Deprecated in M81.
     *
     * @generated from field: optional bool preferred = 10 [deprecated = true];
     * @deprecated
     */
    preferred: boolean;
    /**
     * Time when the credential was created. Amount of microseconds since 1601.
     *
     * @generated from field: optional int64 date_created = 11;
     */
    dateCreated: bigint;
    /**
     * True, if user chose permanently not to save the credentials for the form.
     *
     * @generated from field: optional bool blacklisted = 12;
     */
    blacklisted: boolean;
    /**
     * kFormSubmission(0), user manually filled the username and the password
     * in the form.
     * kGenerated(1), the credential was auto generated.
     * kApi(2), the credential was generated from Credential Management API.
     * kManuallyAdded(3), user manually created the password credential
     * via Settings.
     * kImported(4), the credential was imported using the import flow.
     * kReceivedViaSharing(5), the credential has been received via the password
     * sharing feature.
     *
     * @generated from field: optional int32 type = 13;
     */
    type: number;
    /**
     * Number of times this login was used for logging in using an HTML form.
     * Chrome uses this field to distinguish log-in and sign-up forms.
     *
     * @generated from field: optional int32 times_used = 14;
     */
    timesUsed: number;
    /**
     * A human readable name of the account holder. Set by CredentialManager API
     * and Android.
     *
     * @generated from field: optional string display_name = 15;
     */
    displayName: string;
    /**
     * A URL of the avatar for the credential. Set by CredentialManager API and
     * Android.
     *
     * @generated from field: optional string avatar_url = 16;
     */
    avatarUrl: string;
    /**
     * A URL of the IdP used to verify the credential. Set by Credential Manager
     * API and Android.
     *
     * @generated from field: optional string federation_url = 17;
     */
    federationUrl: string;
    /**
     * Time when the credential was last used. This covers *successful* logins to
     * the website, and explicit updates to the password. It does *not* cover if
     * the password just gets filled but not actually submitted, or if the login
     * failed.
     * Note that password consumers other than Chrome (e.g. Google Play Services)
     * might not update this at all.
     * Amount of microseconds since 1601, aka Windows epoch.
     *
     * @generated from field: optional int64 date_last_used = 18;
     */
    dateLastUsed: bigint;
    /**
     * Set if an issue was detected that puts this password at risk. All the
     * clients are expected to clear the field when the password value is updated.
     * 'reused' part can be additionally reset when the analysis on the entire
     * password store is completed.
     *
     * @generated from field: optional sync_pb.PasswordIssues password_issues = 19;
     */
    passwordIssues?: PasswordIssues;
    /**
     * Time when the |password_value| was last modified. For new credentials it
     * should be set to |date_created|. For subsequent updates the timestamp is
     * changed if and only if the new password value was saved.
     * Number of microseconds since Windows epoch (1601).
     *
     * @generated from field: optional int64 date_password_modified_windows_epoch_micros = 20;
     */
    datePasswordModifiedWindowsEpochMicros: bigint;
    /**
     * Set of extra notes that the user attached to the password. The presence of
     * this field, even with an empty Notes message, becomes the authoritative
     * value for notes and would disregard whatever `encrypted_notes_backup`
     * contains.
     *
     * @generated from field: optional sync_pb.PasswordSpecificsData.Notes notes = 22;
     */
    notes?: PasswordSpecificsData_Notes;
    /**
     * For credentials that have been shared by another user, this field captures
     * the sender email. It's empty for credentials that weren't received via
     * password sharing feature.
     *
     * @generated from field: optional string sender_email = 23;
     */
    senderEmail: string;
    /**
     * Similar to `sender_email` but for the sender name.
     *
     * @generated from field: optional string sender_name = 24;
     */
    senderName: string;
    /**
     * The timestamp when the password was received via sharing feature from
     * another user.
     *
     * @generated from field: optional int64 date_received_windows_epoch_micros = 25;
     */
    dateReceivedWindowsEpochMicros: bigint;
    /**
     * Whether the user has been already notified that they received this password
     * from another user via the password sharing feature. This is synced to avoid
     * showing the notification on multiple devices.
     *
     * @generated from field: optional bool sharing_notification_displayed = 26;
     */
    sharingNotificationDisplayed: boolean;
    /**
     * Similar to `sender_email` but for the url of the sender profile image.
     *
     * @generated from field: optional string sender_profile_image_url = 27;
     */
    senderProfileImageUrl: string;
};
/**
 * Describes the message sync_pb.PasswordSpecificsData.
 * Use `create(PasswordSpecificsDataSchema)` to create a new message.
 */
export declare const PasswordSpecificsDataSchema: GenMessage<PasswordSpecificsData>;
/**
 * @generated from message sync_pb.PasswordSpecificsData.Notes
 */
export type PasswordSpecificsData_Notes = Message<"sync_pb.PasswordSpecificsData.Notes"> & {
    /**
     * @generated from field: repeated sync_pb.PasswordSpecificsData.Notes.Note note = 1;
     */
    note: PasswordSpecificsData_Notes_Note[];
};
/**
 * Describes the message sync_pb.PasswordSpecificsData.Notes.
 * Use `create(PasswordSpecificsData_NotesSchema)` to create a new message.
 */
export declare const PasswordSpecificsData_NotesSchema: GenMessage<PasswordSpecificsData_Notes>;
/**
 * @generated from message sync_pb.PasswordSpecificsData.Notes.Note
 */
export type PasswordSpecificsData_Notes_Note = Message<"sync_pb.PasswordSpecificsData.Notes.Note"> & {
    /**
     * The display name must be unique within the scope of a password.
     *
     * @generated from field: optional string unique_display_name = 1;
     */
    uniqueDisplayName: string;
    /**
     * The user-defined value of the note.
     *
     * @generated from field: optional string value = 2;
     */
    value: string;
    /**
     * The creation time of the note. Number of microseconds since 1601.
     *
     * @generated from field: optional int64 date_created_windows_epoch_micros = 3;
     */
    dateCreatedWindowsEpochMicros: bigint;
    /**
     * Whether the value of the note is not displayed in plain text by
     * default.
     *
     * @generated from field: optional bool hide_by_default = 4;
     */
    hideByDefault: boolean;
};
/**
 * Describes the message sync_pb.PasswordSpecificsData.Notes.Note.
 * Use `create(PasswordSpecificsData_Notes_NoteSchema)` to create a new message.
 */
export declare const PasswordSpecificsData_Notes_NoteSchema: GenMessage<PasswordSpecificsData_Notes_Note>;
/**
 * The different types of the saved credential.
 *
 * @generated from enum sync_pb.PasswordSpecificsData.Scheme
 */
export declare enum PasswordSpecificsData_Scheme {
    /**
     * SCHEME_HTML, the credential represents either a parsed HTML form, or an
     * android credential or a password saved through Credential Management API
     * (https://w3c.github.io/webappsec/specs/credentialmanagement/).
     *
     * @generated from enum value: SCHEME_HTML = 0;
     */
    SCHEME_HTML = 0,
    /**
     * SCHEME_BASIC, basic access http authentication.
     *
     * @generated from enum value: SCHEME_BASIC = 1;
     */
    SCHEME_BASIC = 1,
    /**
     * SCHEME_DIGEST, digest access authentication.
     *
     * @generated from enum value: SCHEME_DIGEST = 2;
     */
    SCHEME_DIGEST = 2,
    /**
     * SCHEME_OTHER, another proxy access authentication.
     *
     * @generated from enum value: SCHEME_OTHER = 3;
     */
    SCHEME_OTHER = 3,
    /**
     * USERNAME_ONLY, partial credentials saved on Android that contain only
     * username and miss the password.
     *
     * @generated from enum value: USERNAME_ONLY = 4;
     */
    USERNAME_ONLY = 4
}
/**
 * Describes the enum sync_pb.PasswordSpecificsData.Scheme.
 */
export declare const PasswordSpecificsData_SchemeSchema: GenEnum<PasswordSpecificsData_Scheme>;
/**
 * Contains the password specifics metadata which simplifies its lookup.
 *
 * @generated from message sync_pb.PasswordSpecificsMetadata
 */
export type PasswordSpecificsMetadata = Message<"sync_pb.PasswordSpecificsMetadata"> & {
    /**
     * The signon realm for the credential. For more details, see the
     * `signon_realm` field in PasswordSpecificsData.
     *
     * @generated from field: optional string url = 1;
     */
    url: string;
    /**
     * True, if user chose permanently not to save the credentials for the form.
     * Introduced in M82. Copy from PasswordSpecificsData.blacklisted.
     *
     * @generated from field: optional bool blacklisted = 2;
     */
    blacklisted: boolean;
    /**
     * Copy from PasswordSpecificsData.date_last_used.
     * Introduced in M112.
     *
     * @generated from field: optional int64 date_last_used_windows_epoch_micros = 3;
     */
    dateLastUsedWindowsEpochMicros: bigint;
    /**
     * Copy from PasswordSpecificsData.password_issues. Introduced in M114.
     *
     * @generated from field: optional sync_pb.PasswordIssues password_issues = 4;
     */
    passwordIssues?: PasswordIssues;
    /**
     * Copy from PasswordSpecificsData.type. Introduced in M119.
     *
     * @generated from field: optional int32 type = 13;
     */
    type: number;
};
/**
 * Describes the message sync_pb.PasswordSpecificsMetadata.
 * Use `create(PasswordSpecificsMetadataSchema)` to create a new message.
 */
export declare const PasswordSpecificsMetadataSchema: GenMessage<PasswordSpecificsMetadata>;
/**
 * Properties of password sync objects.
 *
 * @generated from message sync_pb.PasswordSpecifics
 */
export type PasswordSpecifics = Message<"sync_pb.PasswordSpecifics"> & {
    /**
     * The actual password data. Contains an encrypted PasswordSpecificsData
     * message.
     *
     * @generated from field: optional sync_pb.EncryptedData encrypted = 1;
     */
    encrypted?: EncryptedData;
    /**
     * An unsynced field for use internally on the client. This field should
     * never be set in any network-based communications because it contains
     * unencrypted material.
     *
     * @generated from field: optional sync_pb.PasswordSpecificsData client_only_encrypted_data = 2;
     */
    clientOnlyEncryptedData?: PasswordSpecificsData;
    /**
     * Password related metadata, which is sent to the server side. The field
     * should never be set for full encryption users. If encryption is enabled,
     * this field must be cleared.
     *
     * @generated from field: optional sync_pb.PasswordSpecificsMetadata unencrypted_metadata = 3;
     */
    unencryptedMetadata?: PasswordSpecificsMetadata;
    /**
     * An encrypted backup of the notes field inside the PasswordSpecificsData.
     * The Sync server preserves the contents of this field across commits from
     * legacy clients that don't set this field. It is the responsibility of Sync
     * clients to populate the contents of PasswordSpecificsData notes fields
     * using the contents of this field. This should be deprecated together with
     * the logic for preserving it on the server when clients without support for
     * the |notes| field are no longer allowed by the server (below support
     * version horizon).
     *
     * Encryption key considerations:
     * a) For commits, the client must use the same key for both encrypted blobs.
     * b) For handling getupdates, the two keys may NOT necessarily match the
     *    encryption key used, as in theory the new blob could be "behind" if key
     *    rotation took place. As of today, it is safe to assume that if
     *    |encrypted| is decryptable by a client, then |encrypted_notes_backup|
     *    must be decryptable too (i.e. the Nigori keybag should include older
     *    versions of the key). But not the other way round.
     *
     * If both `encrypted_notes_backup` and the `notes` in `encrypted` are
     * populated, the one in notes is considered the authoritative value.
     *
     * @generated from field: optional sync_pb.EncryptedData encrypted_notes_backup = 5;
     */
    encryptedNotesBackup?: EncryptedData;
};
/**
 * Describes the message sync_pb.PasswordSpecifics.
 * Use `create(PasswordSpecificsSchema)` to create a new message.
 */
export declare const PasswordSpecificsSchema: GenMessage<PasswordSpecifics>;
//# sourceMappingURL=password_specifics_pb.d.ts.map