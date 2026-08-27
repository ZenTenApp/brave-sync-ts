/**
 * Bookmark module for Brave Sync.
 */

export {
  fetchBookmarks,
  type BookmarkEntry,
  type ReadBookmarksResult,
} from "./read.js";

export {
  createBookmarkEntity,
  type CreateBookmarkEntityOptions,
} from "./write.js";