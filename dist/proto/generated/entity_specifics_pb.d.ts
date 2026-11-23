import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { EncryptedData } from "./encryption_pb";
import type { AppListSpecifics } from "./app_list_specifics_pb";
import type { AppSettingSpecifics } from "./app_setting_specifics_pb";
import type { AppSpecifics } from "./app_specifics_pb";
import type { ArcPackageSpecifics } from "./arc_package_specifics_pb";
import type { AutofillProfileSpecifics, AutofillSpecifics, AutofillWalletSpecifics, WalletMetadataSpecifics } from "./autofill_specifics_pb";
import type { AutofillOfferSpecifics } from "./autofill_offer_specifics_pb";
import type { AutofillWalletCredentialSpecifics } from "./autofill_wallet_credential_specifics_pb";
import type { AutofillWalletUsageSpecifics } from "./autofill_wallet_usage_specifics_pb";
import type { BookmarkSpecifics } from "./bookmark_specifics_pb";
import type { CollaborationGroupSpecifics } from "./collaboration_group_specifics_pb";
import type { CompareSpecifics } from "./compare_specifics_pb";
import type { ContactInfoSpecifics } from "./contact_info_specifics_pb";
import type { DeviceInfoSpecifics } from "./device_info_specifics_pb";
import type { DictionarySpecifics } from "./dictionary_specifics_pb";
import type { ExperimentsSpecifics } from "./experiments_specifics_pb";
import type { ExtensionSettingSpecifics } from "./extension_setting_specifics_pb";
import type { ExtensionSpecifics } from "./extension_specifics_pb";
import type { FaviconImageSpecifics } from "./favicon_image_specifics_pb";
import type { FaviconTrackingSpecifics } from "./favicon_tracking_specifics_pb";
import type { HistoryDeleteDirectiveSpecifics } from "./history_delete_directive_specifics_pb";
import type { HistorySpecifics } from "./history_specifics_pb";
import type { ManagedUserSettingSpecifics } from "./managed_user_setting_specifics_pb";
import type { ManagedUserSharedSettingSpecifics } from "./managed_user_shared_setting_specifics_pb";
import type { NigoriSpecifics } from "./nigori_specifics_pb";
import type { OsPreferenceSpecifics } from "./os_preference_specifics_pb";
import type { OsPriorityPreferenceSpecifics } from "./os_priority_preference_specifics_pb";
import type { IncomingPasswordSharingInvitationSpecifics, OutgoingPasswordSharingInvitationSpecifics } from "./password_sharing_invitation_specifics_pb";
import type { PasswordSpecifics } from "./password_specifics_pb";
import type { PlusAddressSpecifics } from "./plus_address_specifics_pb";
import type { PowerBookmarkSpecifics } from "./power_bookmark_specifics_pb";
import type { PreferenceSpecifics } from "./preference_specifics_pb";
import type { PrinterSpecifics } from "./printer_specifics_pb";
import type { PrintersAuthorizationServerSpecifics } from "./printers_authorization_server_specifics_pb";
import type { PriorityPreferenceSpecifics } from "./priority_preference_specifics_pb";
import type { ReadingListSpecifics } from "./reading_list_specifics_pb";
import type { SavedTabGroupSpecifics } from "./saved_tab_group_specifics_pb";
import type { SearchEngineSpecifics } from "./search_engine_specifics_pb";
import type { SecurityEventSpecifics } from "./security_event_specifics_pb";
import type { SendTabToSelfSpecifics } from "./send_tab_to_self_specifics_pb";
import type { SegmentationSpecifics } from "./segmentation_specifics_pb";
import type { SessionSpecifics } from "./session_specifics_pb";
import type { SharedTabGroupDataSpecifics } from "./shared_tab_group_data_specifics_pb";
import type { SharingMessageSpecifics } from "./sharing_message_specifics_pb";
import type { ThemeSpecifics } from "./theme_specifics_pb";
import type { TypedUrlSpecifics } from "./typed_url_specifics_pb";
import type { UserConsentSpecifics } from "./user_consent_specifics_pb";
import type { UserEventSpecifics } from "./user_event_specifics_pb";
import type { WebApkSpecifics } from "./web_apk_specifics_pb";
import type { WebAppSpecifics } from "./web_app_specifics_pb";
import type { WebauthnCredentialSpecifics } from "./webauthn_credential_specifics_pb";
import type { WifiConfigurationSpecifics } from "./wifi_configuration_specifics_pb";
import type { WorkspaceDeskSpecifics } from "./workspace_desk_specifics_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file entity_specifics.proto.
 */
export declare const file_entity_specifics: GenFile;
/**
 * @generated from message sync_pb.EntitySpecifics
 */
export type EntitySpecifics = Message<"sync_pb.EntitySpecifics"> & {
    /**
     * If a datatype is encrypted, this field will contain the encrypted
     * original EntitySpecifics. The extension for the datatype will continue
     * to exist, but contain only the default values.
     * Note that currently passwords employ their own legacy encryption scheme and
     * do not use this field.
     *
     * @generated from field: optional sync_pb.EncryptedData encrypted = 1;
     */
    encrypted?: EncryptedData;
    /**
     * @generated from oneof sync_pb.EntitySpecifics.specifics_variant
     */
    specificsVariant: {
        /**
         * @generated from field: sync_pb.AutofillSpecifics autofill = 31729;
         */
        value: AutofillSpecifics;
        case: "autofill";
    } | {
        /**
         * @generated from field: sync_pb.BookmarkSpecifics bookmark = 32904;
         */
        value: BookmarkSpecifics;
        case: "bookmark";
    } | {
        /**
         * @generated from field: sync_pb.PreferenceSpecifics preference = 37702;
         */
        value: PreferenceSpecifics;
        case: "preference";
    } | {
        /**
         * @generated from field: sync_pb.TypedUrlSpecifics typed_url = 40781;
         */
        value: TypedUrlSpecifics;
        case: "typedUrl";
    } | {
        /**
         * @generated from field: sync_pb.ThemeSpecifics theme = 41210;
         */
        value: ThemeSpecifics;
        case: "theme";
    } | {
        /**
         * @generated from field: sync_pb.PasswordSpecifics password = 45873;
         */
        value: PasswordSpecifics;
        case: "password";
    } | {
        /**
         * @generated from field: sync_pb.NigoriSpecifics nigori = 47745;
         */
        value: NigoriSpecifics;
        case: "nigori";
    } | {
        /**
         * @generated from field: sync_pb.ExtensionSpecifics extension = 48119;
         */
        value: ExtensionSpecifics;
        case: "extension";
    } | {
        /**
         * @generated from field: sync_pb.AppSpecifics app = 48364;
         */
        value: AppSpecifics;
        case: "app";
    } | {
        /**
         * @generated from field: sync_pb.SessionSpecifics session = 50119;
         */
        value: SessionSpecifics;
        case: "session";
    } | {
        /**
         * @generated from field: sync_pb.AutofillProfileSpecifics autofill_profile = 63951;
         */
        value: AutofillProfileSpecifics;
        case: "autofillProfile";
    } | {
        /**
         * @generated from field: sync_pb.SearchEngineSpecifics search_engine = 88610;
         */
        value: SearchEngineSpecifics;
        case: "searchEngine";
    } | {
        /**
         * @generated from field: sync_pb.ExtensionSettingSpecifics extension_setting = 96159;
         */
        value: ExtensionSettingSpecifics;
        case: "extensionSetting";
    } | {
        /**
         * @generated from field: sync_pb.AppSettingSpecifics app_setting = 103656;
         */
        value: AppSettingSpecifics;
        case: "appSetting";
    } | {
        /**
         * @generated from field: sync_pb.HistoryDeleteDirectiveSpecifics history_delete_directive = 150251;
         */
        value: HistoryDeleteDirectiveSpecifics;
        case: "historyDeleteDirective";
    } | {
        /**
         * @generated from field: sync_pb.DeviceInfoSpecifics device_info = 154522;
         */
        value: DeviceInfoSpecifics;
        case: "deviceInfo";
    } | {
        /**
         * @generated from field: sync_pb.PriorityPreferenceSpecifics priority_preference = 163425;
         */
        value: PriorityPreferenceSpecifics;
        case: "priorityPreference";
    } | {
        /**
         * @generated from field: sync_pb.DictionarySpecifics dictionary = 170540;
         */
        value: DictionarySpecifics;
        case: "dictionary";
    } | {
        /**
         * @generated from field: sync_pb.ManagedUserSettingSpecifics managed_user_setting = 186662;
         */
        value: ManagedUserSettingSpecifics;
        case: "managedUserSetting";
    } | {
        /**
         * @generated from field: sync_pb.AppListSpecifics app_list = 229170;
         */
        value: AppListSpecifics;
        case: "appList";
    } | {
        /**
         * @generated from field: sync_pb.AutofillWalletSpecifics autofill_wallet = 306270;
         */
        value: AutofillWalletSpecifics;
        case: "autofillWallet";
    } | {
        /**
         * @generated from field: sync_pb.WalletMetadataSpecifics wallet_metadata = 330441;
         */
        value: WalletMetadataSpecifics;
        case: "walletMetadata";
    } | {
        /**
         * @generated from field: sync_pb.ArcPackageSpecifics arc_package = 340906;
         */
        value: ArcPackageSpecifics;
        case: "arcPackage";
    } | {
        /**
         * @generated from field: sync_pb.PrinterSpecifics printer = 410745;
         */
        value: PrinterSpecifics;
        case: "printer";
    } | {
        /**
         * @generated from field: sync_pb.ReadingListSpecifics reading_list = 411028;
         */
        value: ReadingListSpecifics;
        case: "readingList";
    } | {
        /**
         * @generated from field: sync_pb.UserEventSpecifics user_event = 455206;
         */
        value: UserEventSpecifics;
        case: "userEvent";
    } | {
        /**
         * @generated from field: sync_pb.UserConsentSpecifics user_consent = 556014;
         */
        value: UserConsentSpecifics;
        case: "userConsent";
    } | {
        /**
         * @generated from field: sync_pb.SendTabToSelfSpecifics send_tab_to_self = 601980;
         */
        value: SendTabToSelfSpecifics;
        case: "sendTabToSelf";
    } | {
        /**
         * @generated from field: sync_pb.SecurityEventSpecifics security_event = 600372;
         */
        value: SecurityEventSpecifics;
        case: "securityEvent";
    } | {
        /**
         * @generated from field: sync_pb.WebApkSpecifics web_apk = 1117170;
         */
        value: WebApkSpecifics;
        case: "webApk";
    } | {
        /**
         * @generated from field: sync_pb.WebAppSpecifics web_app = 673225;
         */
        value: WebAppSpecifics;
        case: "webApp";
    } | {
        /**
         * @generated from field: sync_pb.WifiConfigurationSpecifics wifi_configuration = 662827;
         */
        value: WifiConfigurationSpecifics;
        case: "wifiConfiguration";
    } | {
        /**
         * @generated from field: sync_pb.OsPreferenceSpecifics os_preference = 702141;
         */
        value: OsPreferenceSpecifics;
        case: "osPreference";
    } | {
        /**
         * @generated from field: sync_pb.OsPriorityPreferenceSpecifics os_priority_preference = 703915;
         */
        value: OsPriorityPreferenceSpecifics;
        case: "osPriorityPreference";
    } | {
        /**
         * @generated from field: sync_pb.SharingMessageSpecifics sharing_message = 728866;
         */
        value: SharingMessageSpecifics;
        case: "sharingMessage";
    } | {
        /**
         * @generated from field: sync_pb.AutofillOfferSpecifics autofill_offer = 774329;
         */
        value: AutofillOfferSpecifics;
        case: "autofillOffer";
    } | {
        /**
         * @generated from field: sync_pb.WorkspaceDeskSpecifics workspace_desk = 874841;
         */
        value: WorkspaceDeskSpecifics;
        case: "workspaceDesk";
    } | {
        /**
         * @generated from field: sync_pb.WebauthnCredentialSpecifics webauthn_credential = 895275;
         */
        value: WebauthnCredentialSpecifics;
        case: "webauthnCredential";
    } | {
        /**
         * @generated from field: sync_pb.HistorySpecifics history = 963985;
         */
        value: HistorySpecifics;
        case: "history";
    } | {
        /**
         * @generated from field: sync_pb.PrintersAuthorizationServerSpecifics printers_authorization_server = 974304;
         */
        value: PrintersAuthorizationServerSpecifics;
        case: "printersAuthorizationServer";
    } | {
        /**
         * @generated from field: sync_pb.SavedTabGroupSpecifics saved_tab_group = 1004874;
         */
        value: SavedTabGroupSpecifics;
        case: "savedTabGroup";
    } | {
        /**
         * @generated from field: sync_pb.AutofillWalletUsageSpecifics autofill_wallet_usage = 1033580;
         */
        value: AutofillWalletUsageSpecifics;
        case: "autofillWalletUsage";
    } | {
        /**
         * @generated from field: sync_pb.ContactInfoSpecifics contact_info = 1034378;
         */
        value: ContactInfoSpecifics;
        case: "contactInfo";
    } | {
        /**
         * @generated from field: sync_pb.SegmentationSpecifics segmentation = 1026052;
         */
        value: SegmentationSpecifics;
        case: "segmentation";
    } | {
        /**
         * @generated from field: sync_pb.PowerBookmarkSpecifics power_bookmark = 1073150;
         */
        value: PowerBookmarkSpecifics;
        case: "powerBookmark";
    } | {
        /**
         * @generated from field: sync_pb.IncomingPasswordSharingInvitationSpecifics incoming_password_sharing_invitation = 1141935;
         */
        value: IncomingPasswordSharingInvitationSpecifics;
        case: "incomingPasswordSharingInvitation";
    } | {
        /**
         * @generated from field: sync_pb.OutgoingPasswordSharingInvitationSpecifics outgoing_password_sharing_invitation = 1142081;
         */
        value: OutgoingPasswordSharingInvitationSpecifics;
        case: "outgoingPasswordSharingInvitation";
    } | {
        /**
         * @generated from field: sync_pb.AutofillWalletCredentialSpecifics autofill_wallet_credential = 1164238;
         */
        value: AutofillWalletCredentialSpecifics;
        case: "autofillWalletCredential";
    } | {
        /**
         * @generated from field: sync_pb.SharedTabGroupDataSpecifics shared_tab_group_data = 1239418;
         */
        value: SharedTabGroupDataSpecifics;
        case: "sharedTabGroupData";
    } | {
        /**
         * @generated from field: sync_pb.CollaborationGroupSpecifics collaboration_group = 1259076;
         */
        value: CollaborationGroupSpecifics;
        case: "collaborationGroup";
    } | {
        /**
         * @generated from field: sync_pb.CompareSpecifics compare = 1329438;
         */
        value: CompareSpecifics;
        case: "compare";
    } | {
        /**
         * When adding a new type, follow the docs below and keep this comment as
         * the last entry.
         * https://www.chromium.org/developers/design-documents/sync/integration-checklist/
         *
         * @generated from field: sync_pb.PlusAddressSpecifics plus_address = 1267844;
         */
        value: PlusAddressSpecifics;
        case: "plusAddress";
    } | {
        /**
         * No-longer-supported data types, in various stages of removal.
         * TODO(crbug.com/1395003): Eventually, these should all become "reserved"
         * fields, or at least use "EmptySpecifics". But some of them are still
         * needed by the server, e.g. to support older clients.
         *
         * @generated from field: sync_pb.EmptySpecifics app_notification = 45184 [deprecated = true];
         * @deprecated
         */
        value: EmptySpecifics;
        case: "appNotification";
    } | {
        /**
         * @generated from field: sync_pb.EmptySpecifics synced_notification = 153108 [deprecated = true];
         * @deprecated
         */
        value: EmptySpecifics;
        case: "syncedNotification";
    } | {
        /**
         * @generated from field: sync_pb.EmptySpecifics synced_notification_app_info = 235816 [deprecated = true];
         * @deprecated
         */
        value: EmptySpecifics;
        case: "syncedNotificationAppInfo";
    } | {
        /**
         * @generated from field: sync_pb.ExperimentsSpecifics experiments = 161496 [deprecated = true];
         * @deprecated
         */
        value: ExperimentsSpecifics;
        case: "experiments";
    } | {
        /**
         * @generated from field: sync_pb.FaviconTrackingSpecifics favicon_tracking = 181534 [deprecated = true];
         * @deprecated
         */
        value: FaviconTrackingSpecifics;
        case: "faviconTracking";
    } | {
        /**
         * @generated from field: sync_pb.FaviconImageSpecifics favicon_image = 182019 [deprecated = true];
         * @deprecated
         */
        value: FaviconImageSpecifics;
        case: "faviconImage";
    } | {
        /**
         * @generated from field: sync_pb.EmptySpecifics managed_user = 194582 [deprecated = true];
         * @deprecated
         */
        value: EmptySpecifics;
        case: "managedUser";
    } | {
        /**
         * @generated from field: sync_pb.ManagedUserSharedSettingSpecifics managed_user_shared_setting = 202026 [deprecated = true];
         * @deprecated
         */
        value: ManagedUserSharedSettingSpecifics;
        case: "managedUserSharedSetting";
    } | {
        /**
         * @generated from field: sync_pb.EmptySpecifics managed_user_allowlist = 306060 [deprecated = true];
         * @deprecated
         */
        value: EmptySpecifics;
        case: "managedUserAllowlist";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message sync_pb.EntitySpecifics.
 * Use `create(EntitySpecificsSchema)` to create a new message.
 */
export declare const EntitySpecificsSchema: GenMessage<EntitySpecifics>;
/**
 * @generated from message sync_pb.EmptySpecifics
 */
export type EmptySpecifics = Message<"sync_pb.EmptySpecifics"> & {};
/**
 * Describes the message sync_pb.EmptySpecifics.
 * Use `create(EmptySpecificsSchema)` to create a new message.
 */
export declare const EmptySpecificsSchema: GenMessage<EmptySpecifics>;
//# sourceMappingURL=entity_specifics_pb.d.ts.map