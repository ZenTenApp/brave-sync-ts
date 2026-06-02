import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { SyncEnums_BrowserType, SyncEnums_PageTransition, SyncEnums_PageTransitionRedirectType, SyncEnums_PasswordState } from "./sync_enums_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file history_specifics.proto.
 */
export declare const file_history_specifics: GenFile;
/**
 * A history sync entity - this roughly represents one navigation, including its
 * full redirect chain (but not referrals). Fields correspond to similarly named
 * fields in history::VisitRow and history::URLRow.
 *
 * @generated from message sync_pb.HistorySpecifics
 */
export type HistorySpecifics = Message<"sync_pb.HistorySpecifics"> & {
    /**
     * Timestamp, also called "global ID" in some places (e.g. in delete
     * directives). This uniquely identifies the entity.
     *
     * @generated from field: optional int64 visit_time_windows_epoch_micros = 1;
     */
    visitTimeWindowsEpochMicros: bigint;
    /**
     * Cache GUID of the client that produced this entity, aka the "originator".
     *
     * @generated from field: optional string originator_cache_guid = 2;
     */
    originatorCacheGuid: string;
    /**
     * The redirect chain. The first entry is the URL the user originally
     * navigated to; the last one is where they ended up. If there were no
     * redirects, this has only one entry.
     *
     * @generated from field: repeated sync_pb.HistorySpecifics.RedirectEntry redirect_entries = 3;
     */
    redirectEntries: HistorySpecifics_RedirectEntry[];
    /**
     * Whether the redirect chain in this entity is the continuation of a prior
     * chain, and whether a continuation of this chain exists, in other entities.
     * These are effectively the inverse of the CHAIN_START/CHAIN_END page
     * transition qualifiers in Chrome. They are typically both false, since the
     * whole chain is included in `redirect_entries`, but in some cases (notably,
     * client redirects) a redirect chain may be split up across multiple
     * entities.
     *
     * @generated from field: optional bool redirect_chain_start_incomplete = 19;
     */
    redirectChainStartIncomplete: boolean;
    /**
     * @generated from field: optional bool redirect_chain_end_incomplete = 20;
     */
    redirectChainEndIncomplete: boolean;
    /**
     * If this is set to true, then the redirect chain was too long and some
     * entries were trimmed from the middle, so `redirect_entries` only
     * corresponds to some of the first plus some of the last entries of the
     * actual redirect chain.
     *
     * @generated from field: optional bool redirect_chain_middle_trimmed = 21;
     */
    redirectChainMiddleTrimmed: boolean;
    /**
     * The PageTransition for the navigation.
     *
     * @generated from field: optional sync_pb.HistorySpecifics.PageTransition page_transition = 4;
     */
    pageTransition?: HistorySpecifics_PageTransition;
    /**
     * The ID of the visit, on the originator client, that was a referrer for
     * this one, or 0 if no referrer exists.
     *
     * @generated from field: optional int64 originator_referring_visit_id = 5;
     */
    originatorReferringVisitId: bigint;
    /**
     * The ID of the visit, on the originator client, that opened this one, or 0
     * if no opener exists.
     *
     * @generated from field: optional int64 originator_opener_visit_id = 6;
     */
    originatorOpenerVisitId: bigint;
    /**
     * The ID of the cluster that this visit belongs to on the originator client,
     * or 0 if the originator client does not support setting this field or the
     * visit does not belong to any cluster.
     *
     * @generated from field: optional int64 originator_cluster_id = 22;
     */
    originatorClusterId: bigint;
    /**
     * The duration of the visit, in microseconds. Zero if the visit hasn't been
     * finished (or the duration wasn't updated for some other reason).
     *
     * @generated from field: optional int64 visit_duration_micros = 7;
     */
    visitDurationMicros: bigint;
    /**
     * The kind of browser where this visit happened.
     *
     * @generated from field: optional sync_pb.SyncEnums.BrowserType browser_type = 8;
     */
    browserType: SyncEnums_BrowserType;
    /**
     * The SessionID of the window and tab where the visit happened. Can be used
     * to link together possibly-related visits.
     * Note: These are only unique per-client, so always use together with
     * `originator_cache_guid`.
     *
     * @generated from field: optional int32 window_id = 9;
     */
    windowId: number;
    /**
     * @generated from field: optional int32 tab_id = 10;
     */
    tabId: number;
    /**
     * The ID for the task associated with this navigation, which is globally
     * unique with high probability.
     *
     * @generated from field: optional int64 task_id = 11;
     */
    taskId: bigint;
    /**
     * The IDs of ancestor tasks. These can be used to construct a tree of related
     * visits.
     *
     * @generated from field: optional int64 root_task_id = 12;
     */
    rootTaskId: bigint;
    /**
     * @generated from field: optional int64 parent_task_id = 13;
     */
    parentTaskId: bigint;
    /**
     * The HTTP response code of the navigation.
     *
     * @generated from field: optional int32 http_response_code = 14;
     */
    httpResponseCode: number;
    /**
     * The language of the content on the page, as an ISO 639 language code
     * (usually two letters). May be "und" if the language couldn't be determined.
     *
     * @generated from field: optional string page_language = 15;
     */
    pageLanguage: string;
    /**
     * Whether a password field was found on the page.
     *
     * @generated from field: optional sync_pb.SyncEnums.PasswordState password_state = 16;
     */
    passwordState: SyncEnums_PasswordState;
    /**
     * URL of the favicon for this page.
     *
     * @generated from field: optional string favicon_url = 17;
     */
    faviconUrl: string;
    /**
     * The URL of the referrer (indicated by `originator_referring_visit_id`), if
     * any.
     *
     * @generated from field: optional string referrer_url = 18;
     */
    referrerUrl: string;
    /**
     * Visit has an image derived from public version of the page. This can be
     * used to provide more visual experience.
     *
     * @generated from field: optional bool has_url_keyed_image = 23;
     */
    hasUrlKeyedImage: boolean;
    /**
     * Categories tagged for the visit.
     *
     * @generated from field: repeated sync_pb.HistorySpecifics.Category categories = 24;
     */
    categories: HistorySpecifics_Category[];
    /**
     * Related search URLs for a Google SRP visit, to provide next steps to user.
     *
     * @generated from field: repeated string related_searches = 25;
     */
    relatedSearches: string[];
    /**
     * ID of the app (non-BrApp) this entity was generated for, if any. Only
     * visits originating from Android devices may have this set.
     *
     * @generated from field: optional string app_id = 26;
     */
    appId: string;
};
/**
 * Describes the message sync_pb.HistorySpecifics.
 * Use `create(HistorySpecificsSchema)` to create a new message.
 */
export declare const HistorySpecificsSchema: GenMessage<HistorySpecifics>;
/**
 * @generated from message sync_pb.HistorySpecifics.RedirectEntry
 */
export type HistorySpecifics_RedirectEntry = Message<"sync_pb.HistorySpecifics.RedirectEntry"> & {
    /**
     * ID of the visit on the originator client, unique within that client.
     *
     * @generated from field: optional int64 originator_visit_id = 1;
     */
    originatorVisitId: bigint;
    /**
     * URL that was visited.
     *
     * @generated from field: optional string url = 2;
     */
    url: string;
    /**
     * Title of the page corresponding to this URL.
     *
     * @generated from field: optional string title = 3;
     */
    title: string;
    /**
     * True if the URL should NOT be used for auto-complete.
     *
     * @generated from field: optional bool hidden = 4;
     */
    hidden: boolean;
    /**
     * The redirect type (if any).
     *
     * @generated from field: optional sync_pb.SyncEnums.PageTransitionRedirectType redirect_type = 5;
     */
    redirectType: SyncEnums_PageTransitionRedirectType;
};
/**
 * Describes the message sync_pb.HistorySpecifics.RedirectEntry.
 * Use `create(HistorySpecifics_RedirectEntrySchema)` to create a new message.
 */
export declare const HistorySpecifics_RedirectEntrySchema: GenMessage<HistorySpecifics_RedirectEntry>;
/**
 * @generated from message sync_pb.HistorySpecifics.PageTransition
 */
export type HistorySpecifics_PageTransition = Message<"sync_pb.HistorySpecifics.PageTransition"> & {
    /**
     * The core transition type.
     *
     * @generated from field: optional sync_pb.SyncEnums.PageTransition core_transition = 1 [default = LINK];
     */
    coreTransition: SyncEnums_PageTransition;
    /**
     * Qualifiers:
     * A supervised user tried to access this URL but was blocked.
     *
     * @generated from field: optional bool blocked = 2;
     */
    blocked: boolean;
    /**
     * User used the Forward or Back button to navigate among browsing history.
     *
     * @generated from field: optional bool forward_back = 3;
     */
    forwardBack: boolean;
    /**
     * User used the address bar to trigger this navigation.
     *
     * @generated from field: optional bool from_address_bar = 4;
     */
    fromAddressBar: boolean;
    /**
     * User is navigating to the home page.
     *
     * @generated from field: optional bool home_page = 5;
     */
    homePage: boolean;
};
/**
 * Describes the message sync_pb.HistorySpecifics.PageTransition.
 * Use `create(HistorySpecifics_PageTransitionSchema)` to create a new message.
 */
export declare const HistorySpecifics_PageTransitionSchema: GenMessage<HistorySpecifics_PageTransition>;
/**
 * @generated from message sync_pb.HistorySpecifics.Category
 */
export type HistorySpecifics_Category = Message<"sync_pb.HistorySpecifics.Category"> & {
    /**
     * ID of the category, this typically is an MID.
     *
     * @generated from field: optional string id = 1;
     */
    id: string;
    /**
     * Weight of the category, this is an integer value informing the confidence
     * of a visit belonging to this category.
     *
     * @generated from field: optional int32 weight = 2;
     */
    weight: number;
};
/**
 * Describes the message sync_pb.HistorySpecifics.Category.
 * Use `create(HistorySpecifics_CategorySchema)` to create a new message.
 */
export declare const HistorySpecifics_CategorySchema: GenMessage<HistorySpecifics_Category>;
//# sourceMappingURL=history_specifics_pb.d.ts.map