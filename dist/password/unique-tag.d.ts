/**
 * Password unique tag computation for Brave Sync.
 *
 * The sync unique tag is used to identify password entries and prevent duplicates.
 */
/**
 * Escape a string for use in password sync unique tag.
 *
 * This implements Chromium's EscapePath function which ONLY escapes:
 * - Space -> %20
 * - These specific characters: "#%:<>?[\]^`{|}
 *
 * Unlike standard URL encoding, this does NOT escape: / @ ! $ & ' ( ) * + , ; =
 *
 * @param s - String to escape
 * @returns Escaped string
 */
export declare function escapePath(s: string): string;
/**
 * Compute the unique tag for a password entity.
 *
 * The sync unique tag is calculated as:
 * EscapePath(origin) + "|" +
 * EscapePath(username_element) + "|" +
 * EscapePath(username_value) + "|" +
 * EscapePath(password_element) + "|" +
 * EscapePath(signon_realm)
 *
 * @param origin - The origin URL
 * @param usernameElement - The username form element name (usually empty for manually added)
 * @param usernameValue - The username value
 * @param passwordElement - The password form element name (usually empty for manually added)
 * @param signonRealm - The signon realm
 * @returns The unique tag string
 */
export declare function computePasswordUniqueTag(origin: string, usernameElement: string, usernameValue: string, passwordElement: string, signonRealm: string): string;
/**
 * Compute the client_tag_hash for a password entity.
 *
 * Uses protobuf prefix + SHA1, then base64 encode.
 *
 * @param uniqueTag - The unique tag string
 * @returns Base64-encoded client tag hash
 */
export declare function computeClientTagHash(uniqueTag: string): string;
//# sourceMappingURL=unique-tag.d.ts.map