/**
 * Password operations for Brave Sync.
 */

export { escapePath, computePasswordUniqueTag, computeClientTagHash } from "./unique-tag.js";
export {
  createPasswordEntity,
  updatePasswordEntity,
  deletePasswordEntity,
  type CreatePasswordEntityOptions,
  type UpdatePasswordEntityOptions,
  type DeletePasswordEntityOptions,
  type PasswordNote,
} from "./entity.js";
export {
  fetchPasswords,
  type PasswordEntry,
  type ReadPasswordsResult,
} from "./read.js";
