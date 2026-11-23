import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file search_engine_specifics.proto.
 */
export declare const file_search_engine_specifics: GenFile;
/**
 * Properties of custom search engine sync objects.
 *
 * @generated from message sync_pb.SearchEngineSpecifics
 */
export type SearchEngineSpecifics = Message<"sync_pb.SearchEngineSpecifics"> & {
    /**
     * The description of the search engine.
     *
     * @generated from field: optional string short_name = 1;
     */
    shortName: string;
    /**
     * The search engine keyword for omnibox access.
     *
     * @generated from field: optional string keyword = 2;
     */
    keyword: string;
    /**
     * A URL to the favicon to show in the search engines options page.
     *
     * @generated from field: optional string favicon_url = 3;
     */
    faviconUrl: string;
    /**
     * The actual parameterized search engine query URL.
     *
     * @generated from field: optional string url = 4;
     */
    url: string;
    /**
     * A flag signifying whether it is safe to automatically modify this search
     * engine entry or not.
     *
     * @generated from field: optional bool safe_for_autoreplace = 5;
     */
    safeForAutoreplace: boolean;
    /**
     * The URL to the OSD file this search engine entry came from.
     *
     * @generated from field: optional string originating_url = 6;
     */
    originatingUrl: string;
    /**
     * The date this search engine entry was created. A UTC timestamp with units
     * in microseconds.
     *
     * @generated from field: optional int64 date_created = 7;
     */
    dateCreated: bigint;
    /**
     * A list of supported input encodings.
     *
     * @generated from field: optional string input_encodings = 8;
     */
    inputEncodings: string;
    /**
     * Obsolete field. This used to represent whether or not this entry is shown
     * in the list of default search engines.
     *
     * @generated from field: optional bool deprecated_show_in_default_list = 9 [deprecated = true];
     * @deprecated
     */
    deprecatedShowInDefaultList: boolean;
    /**
     * The parameterized URL that provides suggestions as the user types.
     *
     * @generated from field: optional string suggestions_url = 10;
     */
    suggestionsUrl: string;
    /**
     * The ID associated with the prepopulate data this search engine comes from.
     * Set to zero if it was not prepopulated.
     *
     * @generated from field: optional int32 prepopulate_id = 11;
     */
    prepopulateId: number;
    /**
     * DEPRECATED: Whether to autogenerate a keyword for the search engine or not.
     * Do not write to this field in the future.  We preserve this for now so we
     * can read the field in order to migrate existing data that sets this bit.
     *
     * @generated from field: optional bool autogenerate_keyword = 12 [deprecated = true];
     * @deprecated
     */
    autogenerateKeyword: boolean;
    /**
     * ID 13 reserved - previously used by |logo_id|, now deprecated.
     *
     * @generated from field: optional string instant_url = 15 [deprecated = true];
     * @deprecated
     */
    instantUrl: string;
    /**
     * ID 16 reserved - previously used by |id|, now deprecated.
     * The last time this entry was modified by a user. A UTC timestamp with units
     * in microseconds.
     *
     * @generated from field: optional int64 last_modified = 17;
     */
    lastModified: bigint;
    /**
     * The primary identifier of this search engine entry for Sync.
     *
     * @generated from field: optional string sync_guid = 18;
     */
    syncGuid: string;
    /**
     * A list of URL patterns that can be used, in addition to |url|, to extract
     * search terms from a URL.
     *
     * @generated from field: repeated string alternate_urls = 19;
     */
    alternateUrls: string[];
    /**
     * @generated from field: optional string search_terms_replacement_key = 20 [deprecated = true];
     * @deprecated
     */
    searchTermsReplacementKey: string;
    /**
     * The parameterized URL that provides image results according to the image
     * content or image URL provided by user.
     *
     * @generated from field: optional string image_url = 21;
     */
    imageUrl: string;
    /**
     * The following post_params are comma-separated lists used to specify the
     * post parameters for the corresponding search URL.
     *
     * @generated from field: optional string search_url_post_params = 22;
     */
    searchUrlPostParams: string;
    /**
     * @generated from field: optional string suggestions_url_post_params = 23;
     */
    suggestionsUrlPostParams: string;
    /**
     * @generated from field: optional string instant_url_post_params = 24 [deprecated = true];
     * @deprecated
     */
    instantUrlPostParams: string;
    /**
     * @generated from field: optional string image_url_post_params = 25;
     */
    imageUrlPostParams: string;
    /**
     * The parameterized URL for a search provider specified new tab page.
     *
     * @generated from field: optional string new_tab_url = 26;
     */
    newTabUrl: string;
    /**
     * Whether a search engine is 'active' and can be triggered via the omnibox by
     * typing in the relevant keyword.
     *
     * @generated from field: optional sync_pb.SearchEngineSpecifics.ActiveStatus is_active = 27;
     */
    isActive: SearchEngineSpecifics_ActiveStatus;
    /**
     * The ID associated with the starter pack engine.  This is set to 0 if not a
     * starter pack engine.
     *
     * @generated from field: optional int32 starter_pack_id = 28;
     */
    starterPackId: number;
};
/**
 * Describes the message sync_pb.SearchEngineSpecifics.
 * Use `create(SearchEngineSpecificsSchema)` to create a new message.
 */
export declare const SearchEngineSpecificsSchema: GenMessage<SearchEngineSpecifics>;
/**
 * @generated from enum sync_pb.SearchEngineSpecifics.ActiveStatus
 */
export declare enum SearchEngineSpecifics_ActiveStatus {
    /**
     * The default state when a SE is auto-added. Unspecified SE are inactive.
     *
     * @generated from enum value: ACTIVE_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The SE is active and can be triggered via the omnibox.
     *
     * @generated from enum value: ACTIVE_STATUS_TRUE = 1;
     */
    TRUE = 1,
    /**
     * The SE has been manually set to inactive by the user.
     *
     * @generated from enum value: ACTIVE_STATUS_FALSE = 2;
     */
    FALSE = 2
}
/**
 * Describes the enum sync_pb.SearchEngineSpecifics.ActiveStatus.
 */
export declare const SearchEngineSpecifics_ActiveStatusSchema: GenEnum<SearchEngineSpecifics_ActiveStatus>;
//# sourceMappingURL=search_engine_specifics_pb.d.ts.map