import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file wifi_configuration_specifics.proto.
 */
export declare const file_wifi_configuration_specifics: GenFile;
/**
 * @generated from message sync_pb.WifiConfigurationSpecifics
 */
export type WifiConfigurationSpecifics = Message<"sync_pb.WifiConfigurationSpecifics"> & {
    /**
     * SSID encoded to hex, letters should be upper case and 0x prefix should be
     * omitted. For example, ssid "network" would be provided as "6E6574776F726B".
     *
     * @generated from field: optional bytes hex_ssid = 1;
     */
    hexSsid: Uint8Array;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.SecurityType security_type = 2;
     */
    securityType: WifiConfigurationSpecifics_SecurityType;
    /**
     * The passphrase can be ASCII, UTF-8, or a string of hex digits.
     *
     * @generated from field: optional bytes passphrase = 3;
     */
    passphrase: Uint8Array;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.AutomaticallyConnectOption automatically_connect = 4;
     */
    automaticallyConnect: WifiConfigurationSpecifics_AutomaticallyConnectOption;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.IsPreferredOption is_preferred = 5;
     */
    isPreferred: WifiConfigurationSpecifics_IsPreferredOption;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.MeteredOption metered = 6;
     */
    metered: WifiConfigurationSpecifics_MeteredOption;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.ProxyConfiguration proxy_configuration = 7;
     */
    proxyConfiguration?: WifiConfigurationSpecifics_ProxyConfiguration;
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.DnsOption dns_option = 10;
     */
    dnsOption: WifiConfigurationSpecifics_DnsOption;
    /**
     * List of DNS servers to be used when set to DNS_OPTION_CUSTOM.  Up to 4.
     *
     * @generated from field: repeated string custom_dns = 8;
     */
    customDns: string[];
    /**
     * The last time this configuration was connected to before being synced.  It
     * will only be updated when the configuration is changed. This is represented
     * with the UNIX timestamp, ms since epoch.
     *
     * @generated from field: optional int64 last_connected_timestamp = 9;
     */
    lastConnectedTimestamp: bigint;
};
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.
 * Use `create(WifiConfigurationSpecificsSchema)` to create a new message.
 */
export declare const WifiConfigurationSpecificsSchema: GenMessage<WifiConfigurationSpecifics>;
/**
 * @generated from message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration
 */
export type WifiConfigurationSpecifics_ProxyConfiguration = Message<"sync_pb.WifiConfigurationSpecifics.ProxyConfiguration"> & {
    /**
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ProxyOption proxy_option = 1;
     */
    proxyOption: WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption;
    /**
     * Only set if PROXY_OPTION_AUTOMATIC.
     *
     * @generated from field: optional string autoconfiguration_url = 2;
     */
    autoconfigurationUrl: string;
    /**
     * Only set if PROXY_OPTION_MANUAL.
     *
     * @generated from field: optional sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ManualProxyConfiguration manual_proxy_configuration = 3;
     */
    manualProxyConfiguration?: WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfiguration;
};
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.
 * Use `create(WifiConfigurationSpecifics_ProxyConfigurationSchema)` to create a new message.
 */
export declare const WifiConfigurationSpecifics_ProxyConfigurationSchema: GenMessage<WifiConfigurationSpecifics_ProxyConfiguration>;
/**
 * @generated from message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ManualProxyConfiguration
 */
export type WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfiguration = Message<"sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ManualProxyConfiguration"> & {
    /**
     * @generated from field: optional string http_proxy_url = 1;
     */
    httpProxyUrl: string;
    /**
     * @generated from field: optional int32 http_proxy_port = 2;
     */
    httpProxyPort: number;
    /**
     * @generated from field: optional string secure_http_proxy_url = 3;
     */
    secureHttpProxyUrl: string;
    /**
     * @generated from field: optional int32 secure_http_proxy_port = 4;
     */
    secureHttpProxyPort: number;
    /**
     * @generated from field: optional string socks_host_url = 5;
     */
    socksHostUrl: string;
    /**
     * @generated from field: optional int32 socks_host_port = 6;
     */
    socksHostPort: number;
    /**
     * @generated from field: repeated string excluded_domains = 7;
     */
    excludedDomains: string[];
};
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ManualProxyConfiguration.
 * Use `create(WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfigurationSchema)` to create a new message.
 */
export declare const WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfigurationSchema: GenMessage<WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfiguration>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ProxyOption
 */
export declare enum WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption {
    /**
     * @generated from enum value: PROXY_OPTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROXY_OPTION_DISABLED = 1;
     */
    DISABLED = 1,
    /**
     * Use a Proxy Auto-config(PAC) Url, set in proxy_url
     *
     * @generated from enum value: PROXY_OPTION_AUTOMATIC = 2;
     */
    AUTOMATIC = 2,
    /**
     * Uses Web Proxy Auto-Discovery Protocol (WPAD) to discover the proxy
     * settings using DHCP/DNS.
     *
     * @generated from enum value: PROXY_OPTION_AUTODISCOVERY = 3;
     */
    AUTODISCOVERY = 3,
    /**
     * User sets details in manual_proxy_configuration.
     *
     * @generated from enum value: PROXY_OPTION_MANUAL = 4;
     */
    MANUAL = 4
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ProxyOption.
 */
export declare const WifiConfigurationSpecifics_ProxyConfiguration_ProxyOptionSchema: GenEnum<WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.SecurityType
 */
export declare enum WifiConfigurationSpecifics_SecurityType {
    /**
     * @generated from enum value: SECURITY_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SECURITY_TYPE_NONE = 1;
     */
    NONE = 1,
    /**
     * @generated from enum value: SECURITY_TYPE_WEP = 2;
     */
    WEP = 2,
    /**
     * WPA-PSK or RSN-PSK
     *
     * @generated from enum value: SECURITY_TYPE_PSK = 3;
     */
    PSK = 3
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.SecurityType.
 */
export declare const WifiConfigurationSpecifics_SecurityTypeSchema: GenEnum<WifiConfigurationSpecifics_SecurityType>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.AutomaticallyConnectOption
 */
export declare enum WifiConfigurationSpecifics_AutomaticallyConnectOption {
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_UNSPECIFIED = 0;
     */
    AUTOMATICALLY_CONNECT_UNSPECIFIED = 0,
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_DISABLED = 1;
     */
    AUTOMATICALLY_CONNECT_DISABLED = 1,
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_ENABLED = 2;
     */
    AUTOMATICALLY_CONNECT_ENABLED = 2
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.AutomaticallyConnectOption.
 */
export declare const WifiConfigurationSpecifics_AutomaticallyConnectOptionSchema: GenEnum<WifiConfigurationSpecifics_AutomaticallyConnectOption>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.IsPreferredOption
 */
export declare enum WifiConfigurationSpecifics_IsPreferredOption {
    /**
     * @generated from enum value: IS_PREFERRED_UNSPECIFIED = 0;
     */
    IS_PREFERRED_UNSPECIFIED = 0,
    /**
     * @generated from enum value: IS_PREFERRED_DISABLED = 1;
     */
    IS_PREFERRED_DISABLED = 1,
    /**
     * @generated from enum value: IS_PREFERRED_ENABLED = 2;
     */
    IS_PREFERRED_ENABLED = 2
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.IsPreferredOption.
 */
export declare const WifiConfigurationSpecifics_IsPreferredOptionSchema: GenEnum<WifiConfigurationSpecifics_IsPreferredOption>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.MeteredOption
 */
export declare enum WifiConfigurationSpecifics_MeteredOption {
    /**
     * @generated from enum value: METERED_OPTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: METERED_OPTION_NO = 1;
     */
    NO = 1,
    /**
     * @generated from enum value: METERED_OPTION_YES = 2;
     */
    YES = 2,
    /**
     * Allows the device to use heuristics to determine if network is metered.
     *
     * @generated from enum value: METERED_OPTION_AUTO = 3;
     */
    AUTO = 3
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.MeteredOption.
 */
export declare const WifiConfigurationSpecifics_MeteredOptionSchema: GenEnum<WifiConfigurationSpecifics_MeteredOption>;
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.DnsOption
 */
export declare enum WifiConfigurationSpecifics_DnsOption {
    /**
     * @generated from enum value: DNS_OPTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: DNS_OPTION_DEFAULT_DHCP = 1;
     */
    DEFAULT_DHCP = 1,
    /**
     * @generated from enum value: DNS_OPTION_CUSTOM = 2;
     */
    CUSTOM = 2
}
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.DnsOption.
 */
export declare const WifiConfigurationSpecifics_DnsOptionSchema: GenEnum<WifiConfigurationSpecifics_DnsOption>;
//# sourceMappingURL=wifi_configuration_specifics_pb.d.ts.map