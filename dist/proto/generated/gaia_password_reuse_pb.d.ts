import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gaia_password_reuse.proto.
 */
export declare const file_gaia_password_reuse: GenFile;
/**
 * User reused their GAIA password on another website.
 *
 * @generated from message sync_pb.GaiaPasswordReuse
 */
export type GaiaPasswordReuse = Message<"sync_pb.GaiaPasswordReuse"> & {
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseDetected reuse_detected = 1;
     */
    reuseDetected?: GaiaPasswordReuse_PasswordReuseDetected;
    /**
     * Logged when we try to detect whether the password was reused on a
     * Phishing or a Low-reputation site.
     *
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseLookup reuse_lookup = 2;
     */
    reuseLookup?: GaiaPasswordReuse_PasswordReuseLookup;
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction dialog_interaction = 3;
     */
    dialogInteraction?: GaiaPasswordReuse_PasswordReuseDialogInteraction;
};
/**
 * Describes the message sync_pb.GaiaPasswordReuse.
 * Use `create(GaiaPasswordReuseSchema)` to create a new message.
 */
export declare const GaiaPasswordReuseSchema: GenMessage<GaiaPasswordReuse>;
/**
 * Logged when we detect a password re-use event on a non-GAIA site.
 * If the user hasn’t enabled SafeBrowsing, this will be the last event.
 *
 * @generated from message sync_pb.GaiaPasswordReuse.PasswordReuseDetected
 */
export type GaiaPasswordReuse_PasswordReuseDetected = Message<"sync_pb.GaiaPasswordReuse.PasswordReuseDetected"> & {
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus status = 1;
     */
    status?: GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus;
};
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDetected.
 * Use `create(GaiaPasswordReuse_PasswordReuseDetectedSchema)` to create a new message.
 */
export declare const GaiaPasswordReuse_PasswordReuseDetectedSchema: GenMessage<GaiaPasswordReuse_PasswordReuseDetected>;
/**
 * @generated from message sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus
 */
export type GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus = Message<"sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus"> & {
    /**
     * Is SafeBrowsing enabled?
     *
     * @generated from field: optional bool enabled = 1;
     */
    enabled: boolean;
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.ReportingPopulation safe_browsing_reporting_population = 2;
     */
    safeBrowsingReportingPopulation: GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation;
};
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.
 * Use `create(GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatusSchema)` to create a new message.
 */
export declare const GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatusSchema: GenMessage<GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus>;
/**
 * If SafeBrowsing is enabled, is the user opted-in to extended
 * reporting or Scout?
 *
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.ReportingPopulation
 */
export declare enum GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation {
    /**
     * @generated from enum value: REPORTING_POPULATION_UNSPECIFIED = 0;
     */
    REPORTING_POPULATION_UNSPECIFIED = 0,
    /**
     * @generated from enum value: NONE = 1;
     */
    NONE = 1,
    /**
     * @generated from enum value: EXTENDED_REPORTING = 2;
     */
    EXTENDED_REPORTING = 2,
    /**
     * @generated from enum value: SCOUT = 3;
     */
    SCOUT = 3
}
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseDetected.SafeBrowsingStatus.ReportingPopulation.
 */
export declare const GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulationSchema: GenEnum<GaiaPasswordReuse_PasswordReuseDetected_SafeBrowsingStatus_ReportingPopulation>;
/**
 * @generated from message sync_pb.GaiaPasswordReuse.PasswordReuseLookup
 */
export type GaiaPasswordReuse_PasswordReuseLookup = Message<"sync_pb.GaiaPasswordReuse.PasswordReuseLookup"> & {
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseLookup.LookupResult lookup_result = 1;
     */
    lookupResult: GaiaPasswordReuse_PasswordReuseLookup_LookupResult;
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseLookup.ReputationVerdict verdict = 2;
     */
    verdict: GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict;
    /**
     * PhishGuard token that identifies the verdict on the server.
     *
     * @generated from field: optional bytes verdict_token = 3;
     */
    verdictToken: Uint8Array;
};
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseLookup.
 * Use `create(GaiaPasswordReuse_PasswordReuseLookupSchema)` to create a new message.
 */
export declare const GaiaPasswordReuse_PasswordReuseLookupSchema: GenMessage<GaiaPasswordReuse_PasswordReuseLookup>;
/**
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.LookupResult
 */
export declare enum GaiaPasswordReuse_PasswordReuseLookup_LookupResult {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * URL did match the password reuse allowlist.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: ALLOWLIST_HIT = 1;
     */
    ALLOWLIST_HIT = 1,
    /**
     * The URL exists in the client’s cache.
     * No further action required related to this re-use event.
     * This event also logs the ReputationVerdict.
     *
     * @generated from enum value: CACHE_HIT = 2;
     */
    CACHE_HIT = 2,
    /**
     * A valid response received from the SafeBrowsing service.
     * This event also logs the ReputationVerdict.
     *
     * @generated from enum value: REQUEST_SUCCESS = 3;
     */
    REQUEST_SUCCESS = 3,
    /**
     * Unable to get a valid response from the SafeBrowsing service.
     *
     * @generated from enum value: REQUEST_FAILURE = 4;
     */
    REQUEST_FAILURE = 4,
    /**
     * We won't be able to compute reputation for the URL e.g. local IP
     * address, localhost, not-yet-assigned by ICANN gTLD, etc.
     *
     * @generated from enum value: URL_UNSUPPORTED = 5;
     */
    URL_UNSUPPORTED = 5,
    /**
     * URL did match enterprise allowlist.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: ENTERPRISE_ALLOWLIST_HIT = 6;
     */
    ENTERPRISE_ALLOWLIST_HIT = 6,
    /**
     * Password reuse lookup is turned off by enterprise policy.
     * No further action required related to this re-use event.
     *
     * @generated from enum value: TURNED_OFF_BY_POLICY = 7;
     */
    TURNED_OFF_BY_POLICY = 7
}
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.LookupResult.
 */
export declare const GaiaPasswordReuse_PasswordReuseLookup_LookupResultSchema: GenEnum<GaiaPasswordReuse_PasswordReuseLookup_LookupResult>;
/**
 * The following two are only present for CACHE_HIT and REQUEST_SUCCESS.
 * The verdict received from the Reputation service. This is set only
 * if the user has SafeBrowsing enabled and we fetch the verdict from the
 * cache or by sending a verdict request.
 *
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.ReputationVerdict
 */
export declare enum GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict {
    /**
     * @generated from enum value: VERDICT_UNSPECIFIED = 0;
     */
    VERDICT_UNSPECIFIED = 0,
    /**
     * @generated from enum value: SAFE = 1;
     */
    SAFE = 1,
    /**
     * @generated from enum value: LOW_REPUTATION = 2;
     */
    LOW_REPUTATION = 2,
    /**
     * @generated from enum value: PHISHING = 3;
     */
    PHISHING = 3
}
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseLookup.ReputationVerdict.
 */
export declare const GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdictSchema: GenEnum<GaiaPasswordReuse_PasswordReuseLookup_ReputationVerdict>;
/**
 * Logged when the user interacts with the warning UI shown to encourage
 * password change if the site is Phishing or Low-reputation.
 *
 * @generated from message sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction
 */
export type GaiaPasswordReuse_PasswordReuseDialogInteraction = Message<"sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction"> & {
    /**
     * @generated from field: optional sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.InteractionResult interaction_result = 1;
     */
    interactionResult: GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult;
};
/**
 * Describes the message sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.
 * Use `create(GaiaPasswordReuse_PasswordReuseDialogInteractionSchema)` to create a new message.
 */
export declare const GaiaPasswordReuse_PasswordReuseDialogInteractionSchema: GenMessage<GaiaPasswordReuse_PasswordReuseDialogInteraction>;
/**
 * @generated from enum sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.InteractionResult
 */
export declare enum GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The user took the action suggested by the warning prompt.
     *
     * @generated from enum value: WARNING_ACTION_TAKEN = 1;
     */
    WARNING_ACTION_TAKEN = 1,
    /**
     * The user clicked ignore in the warning prompt.
     *
     * @generated from enum value: WARNING_ACTION_IGNORED = 2;
     */
    WARNING_ACTION_IGNORED = 2,
    /**
     * The warning UI was ignored, i.e. not interacted with by the user.
     * This could happen if the user navigates away from the page.
     *
     * @generated from enum value: WARNING_UI_IGNORED = 3;
     */
    WARNING_UI_IGNORED = 3,
    /**
     * The user clicked "Change Password" on chrome://settings page.
     *
     * @generated from enum value: WARNING_ACTION_TAKEN_ON_SETTINGS = 4;
     */
    WARNING_ACTION_TAKEN_ON_SETTINGS = 4
}
/**
 * Describes the enum sync_pb.GaiaPasswordReuse.PasswordReuseDialogInteraction.InteractionResult.
 */
export declare const GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResultSchema: GenEnum<GaiaPasswordReuse_PasswordReuseDialogInteraction_InteractionResult>;
//# sourceMappingURL=gaia_password_reuse_pb.d.ts.map