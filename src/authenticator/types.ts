/**
 * Types for Brave Authenticator (Authenticator.cc) OTP entries.
 */

/**
 * A single OTP entry from the Authenticator.cc extension.
 */
export interface OTPEntry {
  /** Issuer name (e.g. "GitHub", "Google") */
  issuer: string;
  /** Account identifier (e.g. "user@example.com") */
  account: string;
  /** Base32-encoded TOTP secret */
  secret: string;
  /** OTP type (1 = TOTP, 2 = HOTP) */
  type: number;
  /** Hash algorithm identifier */
  hash: string;
}

/**
 * Result of reading authenticator entries.
 */
export interface ReadAuthenticatorResult {
  /** Whether the operation succeeded */
  success: boolean;
  /** List of OTP entries */
  entries: OTPEntry[];
  /** Number of entries that failed to decrypt */
  decryptionFailures: number;
  /** Error message if the operation failed */
  error?: string;
}
