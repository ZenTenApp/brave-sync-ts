import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file arc_package_specifics.proto.
 */
export declare const file_arc_package_specifics: GenFile;
/**
 * Properties of arc package objects.
 *
 * @generated from message sync_pb.ArcPackageSpecifics
 */
export type ArcPackageSpecifics = Message<"sync_pb.ArcPackageSpecifics"> & {
    /**
     * Unique identifier for the item:
     * Android package name.
     *
     * @generated from field: optional string package_name = 1;
     */
    packageName: string;
    /**
     * Android package version.
     *
     * @generated from field: optional int32 package_version = 2;
     */
    packageVersion: number;
    /**
     * Last Android id generated when Android side backups data.
     *
     * @generated from field: optional int64 last_backup_android_id = 3;
     */
    lastBackupAndroidId: bigint;
    /**
     * Last time internal value that Android side backups data.
     *
     * @generated from field: optional int64 last_backup_time = 4;
     */
    lastBackupTime: bigint;
};
/**
 * Describes the message sync_pb.ArcPackageSpecifics.
 * Use `create(ArcPackageSpecificsSchema)` to create a new message.
 */
export declare const ArcPackageSpecificsSchema: GenMessage<ArcPackageSpecifics>;
//# sourceMappingURL=arc_package_specifics_pb.d.ts.map