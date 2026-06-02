import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { GaiaPasswordReuse } from "./gaia_password_reuse_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file security_event_specifics.proto.
 */
export declare const file_security_event_specifics: GenFile;
/**
 * @generated from message sync_pb.SecurityEventSpecifics
 */
export type SecurityEventSpecifics = Message<"sync_pb.SecurityEventSpecifics"> & {
    /**
     * The specific security event to record.
     *
     * @generated from oneof sync_pb.SecurityEventSpecifics.event
     */
    event: {
        /**
         * @generated from field: sync_pb.GaiaPasswordReuse gaia_password_reuse_event = 1;
         */
        value: GaiaPasswordReuse;
        case: "gaiaPasswordReuseEvent";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Time of event, as measured by client in microseconds since Windows epoch.
     *
     * @generated from field: optional int64 event_time_usec = 2;
     */
    eventTimeUsec: bigint;
};
/**
 * Describes the message sync_pb.SecurityEventSpecifics.
 * Use `create(SecurityEventSpecificsSchema)` to create a new message.
 */
export declare const SecurityEventSpecificsSchema: GenMessage<SecurityEventSpecifics>;
//# sourceMappingURL=security_event_specifics_pb.d.ts.map