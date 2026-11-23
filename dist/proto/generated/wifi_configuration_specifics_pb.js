// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for Wi-Fi configuration items.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file wifi_configuration_specifics.proto.
 */
export const file_wifi_configuration_specifics = /*@__PURE__*/ fileDesc("CiJ3aWZpX2NvbmZpZ3VyYXRpb25fc3BlY2lmaWNzLnByb3RvEgdzeW5jX3BiIoQOChpXaWZpQ29uZmlndXJhdGlvblNwZWNpZmljcxIQCghoZXhfc3NpZBgBIAEoDBJHCg1zZWN1cml0eV90eXBlGAIgASgOMjAuc3luY19wYi5XaWZpQ29uZmlndXJhdGlvblNwZWNpZmljcy5TZWN1cml0eVR5cGUSEgoKcGFzc3BocmFzZRgDIAEoDBJdChVhdXRvbWF0aWNhbGx5X2Nvbm5lY3QYBCABKA4yPi5zeW5jX3BiLldpZmlDb25maWd1cmF0aW9uU3BlY2lmaWNzLkF1dG9tYXRpY2FsbHlDb25uZWN0T3B0aW9uEksKDGlzX3ByZWZlcnJlZBgFIAEoDjI1LnN5bmNfcGIuV2lmaUNvbmZpZ3VyYXRpb25TcGVjaWZpY3MuSXNQcmVmZXJyZWRPcHRpb24SQgoHbWV0ZXJlZBgGIAEoDjIxLnN5bmNfcGIuV2lmaUNvbmZpZ3VyYXRpb25TcGVjaWZpY3MuTWV0ZXJlZE9wdGlvbhJTChNwcm94eV9jb25maWd1cmF0aW9uGAcgASgLMjYuc3luY19wYi5XaWZpQ29uZmlndXJhdGlvblNwZWNpZmljcy5Qcm94eUNvbmZpZ3VyYXRpb24SQQoKZG5zX29wdGlvbhgKIAEoDjItLnN5bmNfcGIuV2lmaUNvbmZpZ3VyYXRpb25TcGVjaWZpY3MuRG5zT3B0aW9uEhIKCmN1c3RvbV9kbnMYCCADKAkSIAoYbGFzdF9jb25uZWN0ZWRfdGltZXN0YW1wGAkgASgDGvgEChJQcm94eUNvbmZpZ3VyYXRpb24SWAoMcHJveHlfb3B0aW9uGAEgASgOMkIuc3luY19wYi5XaWZpQ29uZmlndXJhdGlvblNwZWNpZmljcy5Qcm94eUNvbmZpZ3VyYXRpb24uUHJveHlPcHRpb24SHQoVYXV0b2NvbmZpZ3VyYXRpb25fdXJsGAIgASgJEnMKGm1hbnVhbF9wcm94eV9jb25maWd1cmF0aW9uGAMgASgLMk8uc3luY19wYi5XaWZpQ29uZmlndXJhdGlvblNwZWNpZmljcy5Qcm94eUNvbmZpZ3VyYXRpb24uTWFudWFsUHJveHlDb25maWd1cmF0aW9uGtUBChhNYW51YWxQcm94eUNvbmZpZ3VyYXRpb24SFgoOaHR0cF9wcm94eV91cmwYASABKAkSFwoPaHR0cF9wcm94eV9wb3J0GAIgASgFEh0KFXNlY3VyZV9odHRwX3Byb3h5X3VybBgDIAEoCRIeChZzZWN1cmVfaHR0cF9wcm94eV9wb3J0GAQgASgFEhYKDnNvY2tzX2hvc3RfdXJsGAUgASgJEhcKD3NvY2tzX2hvc3RfcG9ydBgGIAEoBRIYChBleGNsdWRlZF9kb21haW5zGAcgAygJIpsBCgtQcm94eU9wdGlvbhIcChhQUk9YWV9PUFRJT05fVU5TUEVDSUZJRUQQABIZChVQUk9YWV9PUFRJT05fRElTQUJMRUQQARIaChZQUk9YWV9PUFRJT05fQVVUT01BVElDEAISHgoaUFJPWFlfT1BUSU9OX0FVVE9ESVNDT1ZFUlkQAxIXChNQUk9YWV9PUFRJT05fTUFOVUFMEAQicwoMU2VjdXJpdHlUeXBlEh0KGVNFQ1VSSVRZX1RZUEVfVU5TUEVDSUZJRUQQABIWChJTRUNVUklUWV9UWVBFX05PTkUQARIVChFTRUNVUklUWV9UWVBFX1dFUBACEhUKEVNFQ1VSSVRZX1RZUEVfUFNLEAMiigEKGkF1dG9tYXRpY2FsbHlDb25uZWN0T3B0aW9uEiUKIUFVVE9NQVRJQ0FMTFlfQ09OTkVDVF9VTlNQRUNJRklFRBAAEiIKHkFVVE9NQVRJQ0FMTFlfQ09OTkVDVF9ESVNBQkxFRBABEiEKHUFVVE9NQVRJQ0FMTFlfQ09OTkVDVF9FTkFCTEVEEAIiZgoRSXNQcmVmZXJyZWRPcHRpb24SHAoYSVNfUFJFRkVSUkVEX1VOU1BFQ0lGSUVEEAASGQoVSVNfUFJFRkVSUkVEX0RJU0FCTEVEEAESGAoUSVNfUFJFRkVSUkVEX0VOQUJMRUQQAiJ3Cg1NZXRlcmVkT3B0aW9uEh4KGk1FVEVSRURfT1BUSU9OX1VOU1BFQ0lGSUVEEAASFQoRTUVURVJFRF9PUFRJT05fTk8QARIWChJNRVRFUkVEX09QVElPTl9ZRVMQAhIXChNNRVRFUkVEX09QVElPTl9BVVRPEAMiWwoJRG5zT3B0aW9uEhoKFkROU19PUFRJT05fVU5TUEVDSUZJRUQQABIbChdETlNfT1BUSU9OX0RFRkFVTFRfREhDUBABEhUKEUROU19PUFRJT05fQ1VTVE9NEAJCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.
 * Use `create(WifiConfigurationSpecificsSchema)` to create a new message.
 */
export const WifiConfigurationSpecificsSchema = /*@__PURE__*/ messageDesc(file_wifi_configuration_specifics, 0);
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.
 * Use `create(WifiConfigurationSpecifics_ProxyConfigurationSchema)` to create a new message.
 */
export const WifiConfigurationSpecifics_ProxyConfigurationSchema = /*@__PURE__*/ messageDesc(file_wifi_configuration_specifics, 0, 0);
/**
 * Describes the message sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ManualProxyConfiguration.
 * Use `create(WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfigurationSchema)` to create a new message.
 */
export const WifiConfigurationSpecifics_ProxyConfiguration_ManualProxyConfigurationSchema = /*@__PURE__*/ messageDesc(file_wifi_configuration_specifics, 0, 0, 0);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ProxyOption
 */
export var WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption;
(function (WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption) {
    /**
     * @generated from enum value: PROXY_OPTION_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption[WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: PROXY_OPTION_DISABLED = 1;
     */
    WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption[WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption["DISABLED"] = 1] = "DISABLED";
    /**
     * Use a Proxy Auto-config(PAC) Url, set in proxy_url
     *
     * @generated from enum value: PROXY_OPTION_AUTOMATIC = 2;
     */
    WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption[WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption["AUTOMATIC"] = 2] = "AUTOMATIC";
    /**
     * Uses Web Proxy Auto-Discovery Protocol (WPAD) to discover the proxy
     * settings using DHCP/DNS.
     *
     * @generated from enum value: PROXY_OPTION_AUTODISCOVERY = 3;
     */
    WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption[WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption["AUTODISCOVERY"] = 3] = "AUTODISCOVERY";
    /**
     * User sets details in manual_proxy_configuration.
     *
     * @generated from enum value: PROXY_OPTION_MANUAL = 4;
     */
    WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption[WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption["MANUAL"] = 4] = "MANUAL";
})(WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption || (WifiConfigurationSpecifics_ProxyConfiguration_ProxyOption = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.ProxyConfiguration.ProxyOption.
 */
export const WifiConfigurationSpecifics_ProxyConfiguration_ProxyOptionSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 0, 0);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.SecurityType
 */
export var WifiConfigurationSpecifics_SecurityType;
(function (WifiConfigurationSpecifics_SecurityType) {
    /**
     * @generated from enum value: SECURITY_TYPE_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_SecurityType[WifiConfigurationSpecifics_SecurityType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: SECURITY_TYPE_NONE = 1;
     */
    WifiConfigurationSpecifics_SecurityType[WifiConfigurationSpecifics_SecurityType["NONE"] = 1] = "NONE";
    /**
     * @generated from enum value: SECURITY_TYPE_WEP = 2;
     */
    WifiConfigurationSpecifics_SecurityType[WifiConfigurationSpecifics_SecurityType["WEP"] = 2] = "WEP";
    /**
     * WPA-PSK or RSN-PSK
     *
     * @generated from enum value: SECURITY_TYPE_PSK = 3;
     */
    WifiConfigurationSpecifics_SecurityType[WifiConfigurationSpecifics_SecurityType["PSK"] = 3] = "PSK";
})(WifiConfigurationSpecifics_SecurityType || (WifiConfigurationSpecifics_SecurityType = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.SecurityType.
 */
export const WifiConfigurationSpecifics_SecurityTypeSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 0);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.AutomaticallyConnectOption
 */
export var WifiConfigurationSpecifics_AutomaticallyConnectOption;
(function (WifiConfigurationSpecifics_AutomaticallyConnectOption) {
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_AutomaticallyConnectOption[WifiConfigurationSpecifics_AutomaticallyConnectOption["AUTOMATICALLY_CONNECT_UNSPECIFIED"] = 0] = "AUTOMATICALLY_CONNECT_UNSPECIFIED";
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_DISABLED = 1;
     */
    WifiConfigurationSpecifics_AutomaticallyConnectOption[WifiConfigurationSpecifics_AutomaticallyConnectOption["AUTOMATICALLY_CONNECT_DISABLED"] = 1] = "AUTOMATICALLY_CONNECT_DISABLED";
    /**
     * @generated from enum value: AUTOMATICALLY_CONNECT_ENABLED = 2;
     */
    WifiConfigurationSpecifics_AutomaticallyConnectOption[WifiConfigurationSpecifics_AutomaticallyConnectOption["AUTOMATICALLY_CONNECT_ENABLED"] = 2] = "AUTOMATICALLY_CONNECT_ENABLED";
})(WifiConfigurationSpecifics_AutomaticallyConnectOption || (WifiConfigurationSpecifics_AutomaticallyConnectOption = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.AutomaticallyConnectOption.
 */
export const WifiConfigurationSpecifics_AutomaticallyConnectOptionSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 1);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.IsPreferredOption
 */
export var WifiConfigurationSpecifics_IsPreferredOption;
(function (WifiConfigurationSpecifics_IsPreferredOption) {
    /**
     * @generated from enum value: IS_PREFERRED_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_IsPreferredOption[WifiConfigurationSpecifics_IsPreferredOption["IS_PREFERRED_UNSPECIFIED"] = 0] = "IS_PREFERRED_UNSPECIFIED";
    /**
     * @generated from enum value: IS_PREFERRED_DISABLED = 1;
     */
    WifiConfigurationSpecifics_IsPreferredOption[WifiConfigurationSpecifics_IsPreferredOption["IS_PREFERRED_DISABLED"] = 1] = "IS_PREFERRED_DISABLED";
    /**
     * @generated from enum value: IS_PREFERRED_ENABLED = 2;
     */
    WifiConfigurationSpecifics_IsPreferredOption[WifiConfigurationSpecifics_IsPreferredOption["IS_PREFERRED_ENABLED"] = 2] = "IS_PREFERRED_ENABLED";
})(WifiConfigurationSpecifics_IsPreferredOption || (WifiConfigurationSpecifics_IsPreferredOption = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.IsPreferredOption.
 */
export const WifiConfigurationSpecifics_IsPreferredOptionSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 2);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.MeteredOption
 */
export var WifiConfigurationSpecifics_MeteredOption;
(function (WifiConfigurationSpecifics_MeteredOption) {
    /**
     * @generated from enum value: METERED_OPTION_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_MeteredOption[WifiConfigurationSpecifics_MeteredOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: METERED_OPTION_NO = 1;
     */
    WifiConfigurationSpecifics_MeteredOption[WifiConfigurationSpecifics_MeteredOption["NO"] = 1] = "NO";
    /**
     * @generated from enum value: METERED_OPTION_YES = 2;
     */
    WifiConfigurationSpecifics_MeteredOption[WifiConfigurationSpecifics_MeteredOption["YES"] = 2] = "YES";
    /**
     * Allows the device to use heuristics to determine if network is metered.
     *
     * @generated from enum value: METERED_OPTION_AUTO = 3;
     */
    WifiConfigurationSpecifics_MeteredOption[WifiConfigurationSpecifics_MeteredOption["AUTO"] = 3] = "AUTO";
})(WifiConfigurationSpecifics_MeteredOption || (WifiConfigurationSpecifics_MeteredOption = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.MeteredOption.
 */
export const WifiConfigurationSpecifics_MeteredOptionSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 3);
/**
 * @generated from enum sync_pb.WifiConfigurationSpecifics.DnsOption
 */
export var WifiConfigurationSpecifics_DnsOption;
(function (WifiConfigurationSpecifics_DnsOption) {
    /**
     * @generated from enum value: DNS_OPTION_UNSPECIFIED = 0;
     */
    WifiConfigurationSpecifics_DnsOption[WifiConfigurationSpecifics_DnsOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: DNS_OPTION_DEFAULT_DHCP = 1;
     */
    WifiConfigurationSpecifics_DnsOption[WifiConfigurationSpecifics_DnsOption["DEFAULT_DHCP"] = 1] = "DEFAULT_DHCP";
    /**
     * @generated from enum value: DNS_OPTION_CUSTOM = 2;
     */
    WifiConfigurationSpecifics_DnsOption[WifiConfigurationSpecifics_DnsOption["CUSTOM"] = 2] = "CUSTOM";
})(WifiConfigurationSpecifics_DnsOption || (WifiConfigurationSpecifics_DnsOption = {}));
/**
 * Describes the enum sync_pb.WifiConfigurationSpecifics.DnsOption.
 */
export const WifiConfigurationSpecifics_DnsOptionSchema = /*@__PURE__*/ enumDesc(file_wifi_configuration_specifics, 0, 4);
//# sourceMappingURL=wifi_configuration_specifics_pb.js.map