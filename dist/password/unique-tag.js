/**
 * Password unique tag computation for Brave Sync.
 *
 * The sync unique tag is used to identify password entries and prevent duplicates.
 */
import { sha1 } from "@noble/hashes/legacy.js";
/**
 * Characters that need to be escaped in EscapePath.
 * This matches Chromium's EscapePath function which ONLY escapes:
 * - Space -> %20
 * - These specific characters: "#%:<>?[\]^`{|}
 *
 * Unlike standard URL encoding, this does NOT escape: / @ ! $ & ' ( ) * + , ; =
 */
const ESCAPE_CHARS = new Set([
    " ",
    '"',
    "#",
    "%",
    ":",
    "<",
    ">",
    "?",
    "[",
    "\\",
    "]",
    "^",
    "`",
    "{",
    "|",
    "}",
]);
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
export function escapePath(s) {
    const encoder = new TextEncoder();
    let result = "";
    for (const char of s) {
        const code = char.charCodeAt(0);
        if (ESCAPE_CHARS.has(char) || code < 0x20 || code >= 0x7f) {
            // Escape non-printable and non-ASCII characters
            const bytes = encoder.encode(char);
            for (const byte of bytes) {
                result += `%${byte.toString(16).toUpperCase().padStart(2, "0")}`;
            }
        }
        else {
            result += char;
        }
    }
    return result;
}
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
export function computePasswordUniqueTag(origin, usernameElement, usernameValue, passwordElement, signonRealm) {
    return [
        escapePath(origin),
        escapePath(usernameElement),
        escapePath(usernameValue),
        escapePath(passwordElement),
        escapePath(signonRealm),
    ].join("|");
}
/**
 * Password type ID field prefix for client_tag_hash computation.
 * Field 45873 (password) with wire type 2, length 0 = bytes [0x8A, 0xB3, 0x16, 0x00]
 */
const PASSWORD_PROTOBUF_PREFIX = new Uint8Array([0x8a, 0xb3, 0x16, 0x00]);
/**
 * Compute the client_tag_hash for a password entity.
 *
 * Uses protobuf prefix + SHA1, then base64 encode.
 *
 * @param uniqueTag - The unique tag string
 * @returns Base64-encoded client tag hash
 */
export function computeClientTagHash(uniqueTag) {
    const encoder = new TextEncoder();
    const tagBytes = encoder.encode(uniqueTag);
    // Combine prefix + tag bytes
    const combined = new Uint8Array(PASSWORD_PROTOBUF_PREFIX.length + tagBytes.length);
    combined.set(PASSWORD_PROTOBUF_PREFIX);
    combined.set(tagBytes, PASSWORD_PROTOBUF_PREFIX.length);
    // SHA1 hash
    const hash = sha1(combined);
    // Base64 encode
    return btoa(String.fromCharCode(...hash));
}
//# sourceMappingURL=unique-tag.js.map