/**
 * TypeScript type definitions for Brave Sync library.
 */
/** PBKDF2_HMAC_SHA1_1003 key derivation method */
export const KEY_DERIVATION_PBKDF2 = 1;
/** SCRYPT_8192_8_11 key derivation method */
export const KEY_DERIVATION_SCRYPT = 2;
/**
 * Constants for Brave Sync.
 */
export const BRAVE_SYNC_CONSTANTS = {
    /** Default Brave sync server URL */
    DEFAULT_SERVER_URL: "https://sync-v2.brave.com/v2",
    /** Brave service key for production server */
    SERVICE_KEY: "qztbjzBqJueQZLFkwTTJrieu8Vw3789u",
    /** Password sync type ID (from entity_specifics.proto) */
    PASSWORD_TYPE_ID: 45873,
    /** Nigori sync type ID */
    NIGORI_TYPE_ID: 47745,
    /** Bookmark sync type ID */
    BOOKMARK_TYPE_ID: 32904,
    /** Extension settings sync type ID (from entity_specifics.proto field 96159) */
    EXTENSION_SETTING_TYPE_ID: 96159,
    /** Brave Authenticator extension ID */
    AUTHENTICATOR_EXTENSION_ID: "bhghoamapcdpbohphigoooaddinpkbai",
    /** Windows epoch offset: seconds between 1601-01-01 and 1970-01-01 */
    WINDOWS_EPOCH_OFFSET: 11644473600,
};
//# sourceMappingURL=types.js.map