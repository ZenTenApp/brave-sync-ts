// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for the reading list items.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file reading_list_specifics.proto.
 */
export const file_reading_list_specifics = /*@__PURE__*/ fileDesc("ChxyZWFkaW5nX2xpc3Rfc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiItcCChRSZWFkaW5nTGlzdFNwZWNpZmljcxIQCghlbnRyeV9pZBgBIAEoCRINCgV0aXRsZRgCIAEoCRILCgN1cmwYAyABKAkSGAoQY3JlYXRpb25fdGltZV91cxgEIAEoAxIWCg51cGRhdGVfdGltZV91cxgFIAEoAxIaChJmaXJzdF9yZWFkX3RpbWVfdXMYByABKAMSHAoUdXBkYXRlX3RpdGxlX3RpbWVfdXMYCCABKAMSIwobZXN0aW1hdGVkX3JlYWRfdGltZV9zZWNvbmRzGAkgASgFEkQKBnN0YXR1cxgGIAEoDjI0LnN5bmNfcGIuUmVhZGluZ0xpc3RTcGVjaWZpY3MuUmVhZGluZ0xpc3RFbnRyeVN0YXR1cyI6ChZSZWFkaW5nTGlzdEVudHJ5U3RhdHVzEgoKBlVOUkVBRBAAEggKBFJFQUQQARIKCgZVTlNFRU4QAkI2CiVvcmcuY2hyb21pdW0uY29tcG9uZW50cy5zeW5jLnByb3RvY29sSANQAVoJLi9zeW5jX3Bi");
/**
 * Describes the message sync_pb.ReadingListSpecifics.
 * Use `create(ReadingListSpecificsSchema)` to create a new message.
 */
export const ReadingListSpecificsSchema = /*@__PURE__*/ messageDesc(file_reading_list_specifics, 0);
/**
 * @generated from enum sync_pb.ReadingListSpecifics.ReadingListEntryStatus
 */
export var ReadingListSpecifics_ReadingListEntryStatus;
(function (ReadingListSpecifics_ReadingListEntryStatus) {
    /**
     * @generated from enum value: UNREAD = 0;
     */
    ReadingListSpecifics_ReadingListEntryStatus[ReadingListSpecifics_ReadingListEntryStatus["UNREAD"] = 0] = "UNREAD";
    /**
     * @generated from enum value: READ = 1;
     */
    ReadingListSpecifics_ReadingListEntryStatus[ReadingListSpecifics_ReadingListEntryStatus["READ"] = 1] = "READ";
    /**
     * @generated from enum value: UNSEEN = 2;
     */
    ReadingListSpecifics_ReadingListEntryStatus[ReadingListSpecifics_ReadingListEntryStatus["UNSEEN"] = 2] = "UNSEEN";
})(ReadingListSpecifics_ReadingListEntryStatus || (ReadingListSpecifics_ReadingListEntryStatus = {}));
/**
 * Describes the enum sync_pb.ReadingListSpecifics.ReadingListEntryStatus.
 */
export const ReadingListSpecifics_ReadingListEntryStatusSchema = /*@__PURE__*/ enumDesc(file_reading_list_specifics, 0, 0);
//# sourceMappingURL=reading_list_specifics_pb.js.map