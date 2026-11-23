#!/usr/bin/env node
/**
 * Brave Sync CLI
 *
 * Command-line interface for managing passwords, bookmarks, and
 * Authenticator.cc 2FA entries in Brave Sync.
 */
import { Command } from "commander";
import { pushPassword, readPasswords, updatePassword, deletePassword, readBookmarks, readAuthenticatorEntries, } from "./index.js";
const program = new Command();
/**
 * Get seed phrase from options or environment variable.
 */
function getSeedPhrase(options) {
    const seedPhrase = options.seed === "env"
        ? process.env.BRAVE_SYNC_SEED
        : options.seed;
    if (!seedPhrase) {
        console.error("Error: Seed phrase is required. Use --seed or set BRAVE_SYNC_SEED env var.");
        process.exit(1);
    }
    return seedPhrase;
}
program
    .name("brave-sync")
    .description("Manage passwords, bookmarks, and 2FA entries in Brave browser sync")
    .version("0.1.0");
// ============================================================================
// LIST PASSWORDS
// ============================================================================
program
    .command("list-passwords")
    .description("List all passwords from Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .option("--show-passwords", "Show actual password values (default: masked)")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    console.log("=".repeat(60));
    console.log("Listing passwords from Brave Sync");
    console.log("=".repeat(60));
    console.log();
    const result = await readPasswords({
        seedPhrase,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (!result.success) {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
    if (result.passwords.length === 0) {
        console.log("No passwords found.");
        return;
    }
    console.log(`Found ${result.passwords.length} password(s):`);
    if (result.decryptionFailures > 0) {
        console.log(`  (${result.decryptionFailures} failed to decrypt)`);
    }
    console.log();
    for (let i = 0; i < result.passwords.length; i++) {
        const pw = result.passwords[i];
        console.log(`[${i + 1}] ${pw.signonRealm}`);
        console.log(`    ID: ${pw.id}`);
        console.log(`    Version: ${pw.version}`);
        console.log(`    Username: ${pw.username}`);
        if (options.showPasswords) {
            console.log(`    Password: ${pw.password}`);
        }
        else {
            console.log(`    Password: ${"*".repeat(pw.password.length)}`);
        }
        console.log(`    Type: ${pw.type === 3 ? "Manually added" : `Type ${pw.type}`}`);
        console.log(`    Times used: ${pw.timesUsed}`);
        if (pw.dateCreated) {
            console.log(`    Created: ${new Date(pw.dateCreated * 1000).toISOString()}`);
        }
        if (pw.notes.length > 0) {
            console.log(`    Notes (${pw.notes.length}):`);
            for (const note of pw.notes) {
                const label = note.uniqueDisplayName ? `"${note.uniqueDisplayName}"` : "(default)";
                console.log(`      ${label}: ${note.value}`);
            }
        }
        else {
            console.log(`    Notes: (none)`);
        }
        console.log();
    }
});
// ============================================================================
// PUSH PASSWORD (CREATE)
// ============================================================================
program
    .command("push-password")
    .description("Push a new password to Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .requiredOption("--url <url>", "Website URL")
    .requiredOption("--username <username>", "Username or email")
    .requiredOption("--password <password>", "Password")
    .option("--note <text>", "Note to attach to the password")
    .option("--note-hidden", "Hide the note value by default")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    console.log("=".repeat(60));
    console.log("Pushing password to Brave Sync");
    console.log("=".repeat(60));
    console.log();
    // Build note if provided.
    // Brave only displays the default (unnamed) note, so no name field is used.
    const note = options.note
        ? {
            value: options.note,
            hidden: options.noteHidden ?? false,
        }
        : undefined;
    const result = await pushPassword({
        seedPhrase,
        url: options.url,
        username: options.username,
        password: options.password,
        note,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (result.success) {
        console.log("Success!");
        console.log(`  URL: ${options.url}`);
        console.log(`  Username: ${options.username}`);
        console.log(`  Password: ${"*".repeat(options.password.length)}`);
        console.log(`  Entity ID: ${result.entityId}`);
        if (note) {
            console.log(`  Note: ${note.value}`);
        }
    }
    else {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
});
// ============================================================================
// UPDATE PASSWORD
// ============================================================================
program
    .command("update-password")
    .description("Update an existing password in Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .option("--id <id>", "Entity ID (from list-passwords) - alternative to --url/--username")
    .option("--url <url>", "Website URL (must match existing entry)")
    .option("--username <username>", "Username (must match existing entry)")
    .requiredOption("--new-password <password>", "New password value")
    .option("--note <text>", "Note to attach to the password")
    .option("--note-hidden", "Hide the note value by default")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    // Validate: must provide either id OR (url + username)
    if (!options.id && (!options.url || !options.username)) {
        console.error("Error: Must provide either --id OR both --url and --username");
        process.exit(1);
    }
    console.log("=".repeat(60));
    console.log("Updating password in Brave Sync");
    console.log("=".repeat(60));
    console.log();
    // Build note if provided.
    // Brave only displays the default (unnamed) note, so no name field is used.
    const note = options.note
        ? {
            value: options.note,
            hidden: options.noteHidden ?? false,
        }
        : undefined;
    const result = await updatePassword({
        seedPhrase,
        id: options.id,
        url: options.url,
        username: options.username,
        newPassword: options.newPassword,
        note,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (result.success) {
        console.log("Success!");
        if (options.id) {
            console.log(`  ID: ${options.id}`);
        }
        else {
            console.log(`  URL: ${options.url}`);
            console.log(`  Username: ${options.username}`);
        }
        console.log(`  New Password: ${"*".repeat(options.newPassword.length)}`);
        if (note) {
            console.log(`  Note: ${note.value}`);
        }
    }
    else {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
});
// ============================================================================
// DELETE PASSWORD
// ============================================================================
program
    .command("delete-password")
    .description("Delete a password from Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .option("--id <id>", "Entity ID (from list-passwords) - alternative to --url/--username")
    .option("--url <url>", "Website URL (must match existing entry)")
    .option("--username <username>", "Username (must match existing entry)")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    // Validate: must provide either id OR (url + username)
    if (!options.id && (!options.url || !options.username)) {
        console.error("Error: Must provide either --id OR both --url and --username");
        process.exit(1);
    }
    console.log("=".repeat(60));
    console.log("Deleting password from Brave Sync");
    console.log("=".repeat(60));
    console.log();
    const result = await deletePassword({
        seedPhrase,
        id: options.id,
        url: options.url,
        username: options.username,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (result.success) {
        console.log("Success!");
        if (options.id) {
            console.log(`  Deleted ID: ${options.id}`);
        }
        else {
            console.log(`  Deleted: ${options.url} / ${options.username}`);
        }
    }
    else {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
});
// ============================================================================
// LIST BOOKMARKS
// ============================================================================
program
    .command("list-bookmarks")
    .description("List all bookmarks from Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .option("--folders-only", "Show only folders")
    .option("--urls-only", "Show only URL bookmarks (no folders)")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    console.log("=".repeat(60));
    console.log("Listing bookmarks from Brave Sync");
    console.log("=".repeat(60));
    console.log();
    const result = await readBookmarks({
        seedPhrase,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (!result.success) {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
    let bookmarks = result.bookmarks;
    if (options.foldersOnly) {
        bookmarks = bookmarks.filter((bm) => bm.type === "folder");
    }
    if (options.urlsOnly) {
        bookmarks = bookmarks.filter((bm) => bm.type === "url");
    }
    if (bookmarks.length === 0) {
        console.log("No bookmarks found.");
        return;
    }
    console.log(`Found ${bookmarks.length} bookmark(s):`);
    if (result.decryptionFailures > 0) {
        console.log(`  (${result.decryptionFailures} failed to decrypt)`);
    }
    console.log();
    for (let i = 0; i < bookmarks.length; i++) {
        const bm = bookmarks[i];
        const typeLabel = bm.type === "folder" ? "[FOLDER]" : "[URL]";
        const serverTag = bm.serverDefined ? ` (${bm.serverDefinedTag})` : "";
        console.log(`[${i + 1}] ${typeLabel} ${bm.title}${serverTag}`);
        if (bm.url) {
            console.log(`    URL: ${bm.url}`);
        }
        console.log(`    GUID: ${bm.guid}`);
        console.log(`    Parent: ${bm.parentGuid}`);
        if (bm.dateCreated) {
            console.log(`    Created: ${new Date(bm.dateCreated * 1000).toISOString()}`);
        }
        console.log();
    }
});
// ============================================================================
// LIST AUTHENTICATOR (2FA) ENTRIES
// ============================================================================
program
    .command("list-authenticator")
    .description("List all Authenticator.cc 2FA entries from Brave Sync")
    .requiredOption("--seed <phrase>", "25-word seed phrase (or 'env' to use BRAVE_SYNC_SEED)")
    .option("--server <url>", "Sync server URL", "https://sync-v2.brave.com/v2")
    .option("--service-key <key>", "Brave service key")
    .option("--show-secrets", "Show TOTP secret values (default: masked)")
    .action(async (options) => {
    const seedPhrase = getSeedPhrase(options);
    console.log("=".repeat(60));
    console.log("Listing Authenticator.cc entries from Brave Sync");
    console.log("=".repeat(60));
    console.log();
    const result = await readAuthenticatorEntries({
        seedPhrase,
        serverUrl: options.server,
        serviceKey: options.serviceKey,
    });
    if (!result.success) {
        console.error("Failed!");
        console.error(`  Error: ${result.error}`);
        process.exit(1);
    }
    if (result.entries.length === 0) {
        console.log("No authenticator entries found.");
        return;
    }
    console.log(`Found ${result.entries.length} OTP entry(ies):`);
    if (result.decryptionFailures > 0) {
        console.log(`  (${result.decryptionFailures} failed to decrypt)`);
    }
    console.log();
    const sorted = [...result.entries].sort((a, b) => a.issuer.toLowerCase().localeCompare(b.issuer.toLowerCase())
        || a.account.toLowerCase().localeCompare(b.account.toLowerCase()));
    for (let i = 0; i < sorted.length; i++) {
        const entry = sorted[i];
        const typeLabel = entry.type === 2 ? "HOTP" : "TOTP";
        console.log(`[${i + 1}] ${entry.issuer} (${entry.account})`);
        console.log(`    Type: ${typeLabel}`);
        if (options.showSecrets) {
            console.log(`    Secret: ${entry.secret}`);
        }
        else {
            console.log(`    Secret: ${"*".repeat(Math.min(entry.secret.length, 16))}...`);
        }
        if (entry.hash) {
            console.log(`    Hash: ${entry.hash}`);
        }
        console.log();
    }
});
program.parse();
//# sourceMappingURL=cli.js.map