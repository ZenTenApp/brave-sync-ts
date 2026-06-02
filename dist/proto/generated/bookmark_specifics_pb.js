// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for bookmarks.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import { file_unique_position } from "./unique_position_pb";
/**
 * Describes the file bookmark_specifics.proto.
 */
export const file_bookmark_specifics = /*@__PURE__*/ fileDesc("Chhib29rbWFya19zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIiJgoITWV0YUluZm8SCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJIqYDChFCb29rbWFya1NwZWNpZmljcxILCgN1cmwYASABKAkSDwoHZmF2aWNvbhgCIAEoDBIiChpsZWdhY3lfY2Fub25pY2FsaXplZF90aXRsZRgDIAEoCRIYChBjcmVhdGlvbl90aW1lX3VzGAQgASgDEhAKCGljb25fdXJsGAUgASgJEiQKCW1ldGFfaW5mbxgGIAMoCzIRLnN5bmNfcGIuTWV0YUluZm8SDAoEZ3VpZBgKIAEoCRISCgpmdWxsX3RpdGxlGAsgASgJEhMKC3BhcmVudF9ndWlkGA4gASgJEi0KBHR5cGUYDyABKA4yHy5zeW5jX3BiLkJvb2ttYXJrU3BlY2lmaWNzLlR5cGUSMAoPdW5pcXVlX3Bvc2l0aW9uGBAgASgLMhcuc3luY19wYi5VbmlxdWVQb3NpdGlvbhIZChFsYXN0X3VzZWRfdGltZV91cxgRIAEoAyIsCgRUeXBlEg8KC1VOU1BFQ0lGSUVEEAASBwoDVVJMEAESCgoGRk9MREVSEAJKBAgHEAhKBAgIEAlKBAgJEApKBAgMEA1KBAgNEA5CNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg", [file_unique_position]);
/**
 * Describes the message sync_pb.MetaInfo.
 * Use `create(MetaInfoSchema)` to create a new message.
 */
export const MetaInfoSchema = /*@__PURE__*/ messageDesc(file_bookmark_specifics, 0);
/**
 * Describes the message sync_pb.BookmarkSpecifics.
 * Use `create(BookmarkSpecificsSchema)` to create a new message.
 */
export const BookmarkSpecificsSchema = /*@__PURE__*/ messageDesc(file_bookmark_specifics, 1);
/**
 * Introduced in M94, determines whether this entity represents a bookmark
 * folder. This field is redundant to the similar field in SyncEntity. If this
 * field in specifics is set, it takes precedence over the one in SyncEntity.
 *
 * @generated from enum sync_pb.BookmarkSpecifics.Type
 */
export var BookmarkSpecifics_Type;
(function (BookmarkSpecifics_Type) {
    /**
     * |UNSPECIFIED| is relevant only for the case where the field is not set.
     * M94 and above should not use this value.
     *
     * @generated from enum value: UNSPECIFIED = 0;
     */
    BookmarkSpecifics_Type[BookmarkSpecifics_Type["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: URL = 1;
     */
    BookmarkSpecifics_Type[BookmarkSpecifics_Type["URL"] = 1] = "URL";
    /**
     * @generated from enum value: FOLDER = 2;
     */
    BookmarkSpecifics_Type[BookmarkSpecifics_Type["FOLDER"] = 2] = "FOLDER";
})(BookmarkSpecifics_Type || (BookmarkSpecifics_Type = {}));
/**
 * Describes the enum sync_pb.BookmarkSpecifics.Type.
 */
export const BookmarkSpecifics_TypeSchema = /*@__PURE__*/ enumDesc(file_bookmark_specifics, 1, 0);
//# sourceMappingURL=bookmark_specifics_pb.js.map