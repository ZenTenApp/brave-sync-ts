// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Sync protocol datatype extension for autofill.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file autofill_specifics.proto.
 */
export const file_autofill_specifics = /*@__PURE__*/ fileDesc("ChhhdXRvZmlsbF9zcGVjaWZpY3MucHJvdG8SB3N5bmNfcGIimScKGEF1dG9maWxsUHJvZmlsZVNwZWNpZmljcxIMCgRndWlkGA8gASgJEhkKEWRlcHJlY2F0ZWRfb3JpZ2luGBAgASgJEhEKCXVzZV9jb3VudBgWIAEoAxIQCgh1c2VfZGF0ZRgXIAEoAxIVCg1wcm9maWxlX2xhYmVsGD4gASgJEhIKCm5hbWVfZmlyc3QYAiADKAkSEwoLbmFtZV9taWRkbGUYAyADKAkSEQoJbmFtZV9sYXN0GAQgAygJEhcKD25hbWVfbGFzdF9maXJzdBgbIAMoCRIdChVuYW1lX2xhc3RfY29uanVuY3Rpb24YHCADKAkSGAoQbmFtZV9sYXN0X3NlY29uZBgdIAMoCRIRCgluYW1lX2Z1bGwYFSADKAkSTwoRbmFtZV9maXJzdF9zdGF0dXMYHyADKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSUAoSbmFtZV9taWRkbGVfc3RhdHVzGCAgAygOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEk4KEG5hbWVfbGFzdF9zdGF0dXMYISADKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSVAoWbmFtZV9sYXN0X2ZpcnN0X3N0YXR1cxgiIAMoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJaChxuYW1lX2xhc3RfY29uanVuY3Rpb25fc3RhdHVzGCMgAygOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzElUKF25hbWVfbGFzdF9zZWNvbmRfc3RhdHVzGCQgAygOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEk4KEG5hbWVfZnVsbF9zdGF0dXMYJSADKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSFQoNZW1haWxfYWRkcmVzcxgFIAMoCRIUCgxjb21wYW55X25hbWUYBiABKAkSGgoSYWRkcmVzc19ob21lX2xpbmUxGAcgASgJEhoKEmFkZHJlc3NfaG9tZV9saW5lMhgIIAEoCRIZChFhZGRyZXNzX2hvbWVfY2l0eRgJIAEoCRIaChJhZGRyZXNzX2hvbWVfc3RhdGUYCiABKAkSGAoQYWRkcmVzc19ob21lX3ppcBgLIAEoCRIcChRhZGRyZXNzX2hvbWVfY291bnRyeRgMIAEoCRIiChphZGRyZXNzX2hvbWVfYWRtaW5fbGV2ZWxfMhhHIAEoCRIjChthZGRyZXNzX2hvbWVfc3RyZWV0X2FkZHJlc3MYESABKAkSIQoZYWRkcmVzc19ob21lX3NvcnRpbmdfY29kZRgSIAEoCRInCh9hZGRyZXNzX2hvbWVfZGVwZW5kZW50X2xvY2FsaXR5GBMgASgJEiIKGmFkZHJlc3NfaG9tZV9sYW5ndWFnZV9jb2RlGBQgASgJEiYKHmFkZHJlc3NfaG9tZV90aG9yb3VnaGZhcmVfbmFtZRgmIAEoCRIoCiBhZGRyZXNzX2hvbWVfdGhvcm91Z2hmYXJlX251bWJlchgnIAEoCRIkChxhZGRyZXNzX2hvbWVfc3RyZWV0X2xvY2F0aW9uGEkgASgJEiQKHGFkZHJlc3NfaG9tZV9zdWJwcmVtaXNlX25hbWUYKiABKAkSGAoQYWRkcmVzc19ob21lX2FwdBhVIAEoCRIcChRhZGRyZXNzX2hvbWVfYXB0X251bRg4IAEoCRIdChVhZGRyZXNzX2hvbWVfYXB0X3R5cGUYVyABKAkSGgoSYWRkcmVzc19ob21lX2Zsb29yGDkgASgJEh0KFWFkZHJlc3NfaG9tZV9sYW5kbWFyaxhDIAEoCRIkChxhZGRyZXNzX2hvbWVfYmV0d2Vlbl9zdHJlZXRzGEUgASgJEiYKHmFkZHJlc3NfaG9tZV9iZXR3ZWVuX3N0cmVldHNfMRhNIAEoCRImCh5hZGRyZXNzX2hvbWVfYmV0d2Vlbl9zdHJlZXRzXzIYTyABKAkSHQoVYWRkcmVzc19ob21lX292ZXJmbG93GEsgASgJEjAKKGFkZHJlc3NfaG9tZV9iZXR3ZWVuX3N0cmVldHNfb3JfbGFuZG1hcmsYUSABKAkSKgoiYWRkcmVzc19ob21lX292ZXJmbG93X2FuZF9sYW5kbWFyaxhTIAEoCRIxCilhZGRyZXNzX2hvbWVfc3RyZWV0X2xvY2F0aW9uX2FuZF9sb2NhbGl0eRhZIAEoCRJWChhhZGRyZXNzX2hvbWVfY2l0eV9zdGF0dXMYKyABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSVwoZYWRkcmVzc19ob21lX3N0YXRlX3N0YXR1cxgsIAEoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJVChdhZGRyZXNzX2hvbWVfemlwX3N0YXR1cxgtIAEoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJZChthZGRyZXNzX2hvbWVfY291bnRyeV9zdGF0dXMYLiABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSWgocYWRkcmVzc19ob21lX2xhbmRtYXJrX3N0YXR1cxhEIAEoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJhCiNhZGRyZXNzX2hvbWVfYmV0d2Vlbl9zdHJlZXRzX3N0YXR1cxhGIAEoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJjCiVhZGRyZXNzX2hvbWVfYmV0d2Vlbl9zdHJlZXRzXzFfc3RhdHVzGE4gASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEmMKJWFkZHJlc3NfaG9tZV9iZXR3ZWVuX3N0cmVldHNfMl9zdGF0dXMYUCABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSXwohYWRkcmVzc19ob21lX2FkbWluX2xldmVsXzJfc3RhdHVzGEggASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEloKHGFkZHJlc3NfaG9tZV9vdmVyZmxvd19zdGF0dXMYTCABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSbQovYWRkcmVzc19ob21lX2JldHdlZW5fc3RyZWV0c19vcl9sYW5kbWFya19zdGF0dXMYUiABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSZwopYWRkcmVzc19ob21lX292ZXJmbG93X2FuZF9sYW5kbWFya19zdGF0dXMYVCABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSbgowYWRkcmVzc19ob21lX3N0cmVldF9sb2NhdGlvbl9hbmRfbG9jYWxpdHlfc3RhdHVzGFogASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEmAKImFkZHJlc3NfaG9tZV9zdHJlZXRfYWRkcmVzc19zdGF0dXMYLyABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSXgogYWRkcmVzc19ob21lX3NvcnRpbmdfY29kZV9zdGF0dXMYMCABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSZAomYWRkcmVzc19ob21lX2RlcGVuZGVudF9sb2NhbGl0eV9zdGF0dXMYMSABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSXwohYWRkcmVzc19ob21lX2xhbmd1YWdlX2NvZGVfc3RhdHVzGDIgASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEmMKJWFkZHJlc3NfaG9tZV90aG9yb3VnaGZhcmVfbmFtZV9zdGF0dXMYMyABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSZQonYWRkcmVzc19ob21lX3Rob3JvdWdoZmFyZV9udW1iZXJfc3RhdHVzGDQgASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEmEKI2FkZHJlc3NfaG9tZV9zdHJlZXRfbG9jYXRpb25fc3RhdHVzGEogASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzEmEKI2FkZHJlc3NfaG9tZV9zdWJwcmVtaXNlX25hbWVfc3RhdHVzGDcgASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzElUKF2FkZHJlc3NfaG9tZV9hcHRfc3RhdHVzGFYgASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzElkKG2FkZHJlc3NfaG9tZV9hcHRfbnVtX3N0YXR1cxg6IAEoDjI0LnN5bmNfcGIuQXV0b2ZpbGxQcm9maWxlU3BlY2lmaWNzLlZlcmlmaWNhdGlvblN0YXR1cxJaChxhZGRyZXNzX2hvbWVfYXB0X3R5cGVfc3RhdHVzGFggASgOMjQuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3MuVmVyaWZpY2F0aW9uU3RhdHVzElcKGWFkZHJlc3NfaG9tZV9mbG9vcl9zdGF0dXMYOyABKA4yNC5zeW5jX3BiLkF1dG9maWxsUHJvZmlsZVNwZWNpZmljcy5WZXJpZmljYXRpb25TdGF0dXMSHwoXcGhvbmVfaG9tZV93aG9sZV9udW1iZXIYDSADKAkSHAoQZGVwcmVjYXRlZF9sYWJlbBgBIAEoCUICGAESIgoWcGhvbmVfZmF4X3dob2xlX251bWJlchgOIAEoCUICGAESIwoXdmFsaWRpdHlfc3RhdGVfYml0ZmllbGQYGCABKANCAhgBEi0KIWlzX2NsaWVudF92YWxpZGl0eV9zdGF0ZXNfdXBkYXRlZBgZIAEoCEICGAEiiAEKElZlcmlmaWNhdGlvblN0YXR1cxIjCh9WRVJJRklDQVRJT05fU1RBVFVTX1VOU1BFQ0lGSUVEEAASCgoGUEFSU0VEEAESDQoJRk9STUFUVEVEEAISDAoIT0JTRVJWRUQQAxIRCg1VU0VSX1ZFUklGSUVEEAQSEQoNU0VSVkVSX1BBUlNFRBAFSgQIPBA9SgQIHhAfSgQIPRA+SgQIPxBASgQIQBBBSgQIQRBCSgQIQhBDSgQIKBApSgQIKRAqSgQINRA2SgQINhA3SgQIGhAbUhhuYW1lX2Z1bGxfd2l0aF9ob25vcmlmaWNSFW5hbWVfaG9ub3JpZmljX3N0YXR1c1IfbmFtZV9mdWxsX3dpdGhfaG9ub3JpZmljX3N0YXR1c1IhZGlzYWxsb3dfc2V0dGluZ3NfdmlzaWJsZV91cGRhdGVzUg1iaXJ0aGRhdGVfZGF5Ug9iaXJ0aGRhdGVfbW9udGhSDmJpcnRoZGF0ZV95ZWFyUihhZGRyZXNzX2hvbWVfZGVwZW5kZW50X3Rob3JvdWdoZmFyZV9uYW1lUhlhZGRyZXNzX2hvbWVfcHJlbWlzZV9uYW1lUi9hZGRyZXNzX2hvbWVfZGVwZW5kZW50X3Rob3JvdWdoZmFyZV9uYW1lX3N0YXR1c1IgYWRkcmVzc19ob21lX3ByZW1pc2VfbmFtZV9zdGF0dXNSDm5hbWVfaG9ub3JpZmljIq0BChFBdXRvZmlsbFNwZWNpZmljcxIMCgRuYW1lGAEgASgJEg0KBXZhbHVlGAIgASgJEhcKD3VzYWdlX3RpbWVzdGFtcBgDIAMoAxIyCgdwcm9maWxlGAQgASgLMiEuc3luY19wYi5BdXRvZmlsbFByb2ZpbGVTcGVjaWZpY3NKBAgFEAZKBAgGEAdSFWVuY3J5cHRlZF9jcmVkaXRfY2FyZFILY3JlZGl0X2NhcmQidQoOQ2xvdWRUb2tlbkRhdGESDgoGc3VmZml4GAEgASgJEhEKCWV4cF9tb250aBgCIAEoBRIQCghleHBfeWVhchgDIAEoBRIUCgxhcnRfZmlmZV91cmwYBCABKAkSGAoQaW5zdHJ1bWVudF90b2tlbhgFIAEoCSKrBQoLQ2FyZEJlbmVmaXQSEgoKYmVuZWZpdF9pZBgHIAEoCRIbChNiZW5lZml0X2Rlc2NyaXB0aW9uGAEgASgJEioKInN0YXJ0X3RpbWVfdW5peF9lcG9jaF9taWxsaXNlY29uZHMYAiABKAMSKAogZW5kX3RpbWVfdW5peF9lcG9jaF9taWxsaXNlY29uZHMYAyABKAMSQQoRZmxhdF9yYXRlX2JlbmVmaXQYBCABKAsyJC5zeW5jX3BiLkNhcmRCZW5lZml0LkZsYXRSYXRlQmVuZWZpdEgAEkAKEGNhdGVnb3J5X2JlbmVmaXQYBSABKAsyJC5zeW5jX3BiLkNhcmRCZW5lZml0LkNhdGVnb3J5QmVuZWZpdEgAEkAKEG1lcmNoYW50X2JlbmVmaXQYBiABKAsyJC5zeW5jX3BiLkNhcmRCZW5lZml0Lk1lcmNoYW50QmVuZWZpdEgAGhEKD0ZsYXRSYXRlQmVuZWZpdBpaCg9DYXRlZ29yeUJlbmVmaXQSRwoVY2F0ZWdvcnlfYmVuZWZpdF90eXBlGAEgASgOMiguc3luY19wYi5DYXJkQmVuZWZpdC5DYXRlZ29yeUJlbmVmaXRUeXBlGioKD01lcmNoYW50QmVuZWZpdBIXCg9tZXJjaGFudF9kb21haW4YASADKAkimQEKE0NhdGVnb3J5QmVuZWZpdFR5cGUSIQodQ0FURUdPUllfQkVORUZJVF9UWVBFX1VOS05PV04QABIQCgxTVUJTQ1JJUFRJT04QARILCgdGTElHSFRTEAISCgoGRElOSU5HEAMSEQoNRU5URVJUQUlOTUVOVBAEEg0KCVNUUkVBTUlORxAFEhIKDkdST0NFUllfU1RPUkVTEAZCFwoVRG9tYWluU3BlY2lmaWNCZW5lZml0IooBCgpDYXJkSXNzdWVyEioKBmlzc3VlchgBIAEoDjIaLnN5bmNfcGIuQ2FyZElzc3Vlci5Jc3N1ZXISEQoJaXNzdWVyX2lkGAIgASgJIj0KBklzc3VlchISCg5JU1NVRVJfVU5LTk9XThAAEgoKBkdPT0dMRRABEhMKD0VYVEVSTkFMX0lTU1VFUhACIpsJChZXYWxsZXRNYXNrZWRDcmVkaXRDYXJkEgoKAmlkGAEgASgJEkAKBnN0YXR1cxgCIAEoDjIwLnN5bmNfcGIuV2FsbGV0TWFza2VkQ3JlZGl0Q2FyZC5XYWxsZXRDYXJkU3RhdHVzEhQKDG5hbWVfb25fY2FyZBgDIAEoCRI8CgR0eXBlGAQgASgOMi4uc3luY19wYi5XYWxsZXRNYXNrZWRDcmVkaXRDYXJkLldhbGxldENhcmRUeXBlEhEKCWxhc3RfZm91chgFIAEoCRIRCglleHBfbW9udGgYBiABKAUSEAoIZXhwX3llYXIYByABKAUSGgoSYmlsbGluZ19hZGRyZXNzX2lkGAggASgJEhEKCWJhbmtfbmFtZRgKIAEoCRIxChBjbG91ZF90b2tlbl9kYXRhGAsgASgLMhcuc3luY19wYi5DbG91ZFRva2VuRGF0YRIQCghuaWNrbmFtZRgMIAEoCRIoCgtjYXJkX2lzc3VlchgNIAEoCzITLnN5bmNfcGIuQ2FyZElzc3VlchIVCg1pbnN0cnVtZW50X2lkGA8gASgDEmEKHXZpcnR1YWxfY2FyZF9lbnJvbGxtZW50X3N0YXRlGBAgASgOMjouc3luY19wYi5XYWxsZXRNYXNrZWRDcmVkaXRDYXJkLlZpcnR1YWxDYXJkRW5yb2xsbWVudFN0YXRlEhQKDGNhcmRfYXJ0X3VybBgRIAEoCRIbChNwcm9kdWN0X2Rlc2NyaXB0aW9uGBIgASgJEl8KHHZpcnR1YWxfY2FyZF9lbnJvbGxtZW50X3R5cGUYEyABKA4yOS5zeW5jX3BiLldhbGxldE1hc2tlZENyZWRpdENhcmQuVmlydHVhbENhcmRFbnJvbGxtZW50VHlwZRIqCgxjYXJkX2JlbmVmaXQYFCADKAsyFC5zeW5jX3BiLkNhcmRCZW5lZml0EhkKEXByb2R1Y3RfdGVybXNfdXJsGBUgASgJIioKEFdhbGxldENhcmRTdGF0dXMSCQoFVkFMSUQQABILCgdFWFBJUkVEEAEikwEKDldhbGxldENhcmRUeXBlEgsKB1VOS05PV04QABIICgRBTUVYEAESDAoIRElTQ09WRVIQAhIHCgNKQ0IQAxILCgdNQUVTVFJPEAQSDwoLTUFTVEVSX0NBUkQQBRIICgRTT0xPEAYSCgoGU1dJVENIEAcSCAoEVklTQRAIEgwKCFVOSU9OUEFZEAkSBwoDRUxPEAoijQEKGlZpcnR1YWxDYXJkRW5yb2xsbWVudFN0YXRlEg8KC1VOU1BFQ0lGSUVEEAASEgoKVU5FTlJPTExFRBABGgIIARIMCghFTlJPTExFRBACEh8KG1VORU5ST0xMRURfQU5EX05PVF9FTElHSUJMRRADEhsKF1VORU5ST0xMRURfQU5EX0VMSUdJQkxFEAQiSgoZVmlydHVhbENhcmRFbnJvbGxtZW50VHlwZRIUChBUWVBFX1VOU1BFQ0lGSUVEEAASCgoGSVNTVUVSEAESCwoHTkVUV09SSxACSgQICRAKSgQIDhAPUgpjYXJkX2NsYXNzIqECChNXYWxsZXRQb3N0YWxBZGRyZXNzEgoKAmlkGAEgASgJEhYKDnJlY2lwaWVudF9uYW1lGAwgASgJEhQKDGNvbXBhbnlfbmFtZRgCIAEoCRIWCg5zdHJlZXRfYWRkcmVzcxgDIAMoCRIRCglhZGRyZXNzXzEYBCABKAkSEQoJYWRkcmVzc18yGAUgASgJEhEKCWFkZHJlc3NfMxgGIAEoCRIRCglhZGRyZXNzXzQYByABKAkSEwoLcG9zdGFsX2NvZGUYCCABKAkSFAoMc29ydGluZ19jb2RlGAkgASgJEhQKDGNvdW50cnlfY29kZRgKIAEoCRIVCg1sYW5ndWFnZV9jb2RlGAsgASgJEhQKDHBob25lX251bWJlchgNIAEoCSIiChRQYXltZW50c0N1c3RvbWVyRGF0YRIKCgJpZBgBIAEoCSKdAQoeV2FsbGV0Q3JlZGl0Q2FyZENsb3VkVG9rZW5EYXRhEhYKDm1hc2tlZF9jYXJkX2lkGAEgASgJEg4KBnN1ZmZpeBgCIAEoCRIRCglleHBfbW9udGgYAyABKAUSEAoIZXhwX3llYXIYBCABKAUSFAoMYXJ0X2ZpZmVfdXJsGAUgASgJEhgKEGluc3RydW1lbnRfdG9rZW4YBiABKAkizwIKEVBheW1lbnRJbnN0cnVtZW50EhUKDWluc3RydW1lbnRfaWQYASABKAMSQQoPc3VwcG9ydGVkX3JhaWxzGAIgAygOMiguc3luY19wYi5QYXltZW50SW5zdHJ1bWVudC5TdXBwb3J0ZWRSYWlsEhgKEGRpc3BsYXlfaWNvbl91cmwYAyABKAkSEAoIbmlja25hbWUYBCABKAkSMwoMYmFua19hY2NvdW50GAUgASgLMhsuc3luY19wYi5CYW5rQWNjb3VudERldGFpbHNIABIpCgRpYmFuGAYgASgLMhkuc3luY19wYi5XYWxsZXRNYXNrZWRJYmFuSAAiPgoNU3VwcG9ydGVkUmFpbBIaChZTVVBQT1JURURfUkFJTF9VTktOT1dOEAASBwoDUElYEAESCAoESUJBThACQhQKEmluc3RydW1lbnRfZGV0YWlscyJrChBXYWxsZXRNYXNrZWRJYmFuEhUKDWluc3RydW1lbnRfaWQYASABKAkSDgoGcHJlZml4GAIgASgJEg4KBnN1ZmZpeBgDIAEoCRIOCgZsZW5ndGgYBCABKAUSEAoIbmlja25hbWUYBSABKAki/wEKEkJhbmtBY2NvdW50RGV0YWlscxIRCgliYW5rX25hbWUYASABKAkSHQoVYWNjb3VudF9udW1iZXJfc3VmZml4GAIgASgJEj0KDGFjY291bnRfdHlwZRgDIAEoDjInLnN5bmNfcGIuQmFua0FjY291bnREZXRhaWxzLkFjY291bnRUeXBlIngKC0FjY291bnRUeXBlEhwKGEFDQ09VTlRfVFlQRV9VTlNQRUNJRklFRBAAEgwKCENIRUNLSU5HEAESCwoHU0FWSU5HUxACEgsKB0NVUlJFTlQQAxIKCgZTQUxBUlkQBBIXChNUUkFOU0FDVElOR19BQ0NPVU5UEAUi0AQKF0F1dG9maWxsV2FsbGV0U3BlY2lmaWNzEj0KBHR5cGUYASABKA4yLy5zeW5jX3BiLkF1dG9maWxsV2FsbGV0U3BlY2lmaWNzLldhbGxldEluZm9UeXBlEjQKC21hc2tlZF9jYXJkGAIgASgLMh8uc3luY19wYi5XYWxsZXRNYXNrZWRDcmVkaXRDYXJkEi0KB2FkZHJlc3MYAyABKAsyHC5zeW5jX3BiLldhbGxldFBvc3RhbEFkZHJlc3MSNAoNY3VzdG9tZXJfZGF0YRgEIAEoCzIdLnN5bmNfcGIuUGF5bWVudHNDdXN0b21lckRhdGESQQoQY2xvdWRfdG9rZW5fZGF0YRgFIAEoCzInLnN5bmNfcGIuV2FsbGV0Q3JlZGl0Q2FyZENsb3VkVG9rZW5EYXRhEjYKEnBheW1lbnRfaW5zdHJ1bWVudBgGIAEoCzIaLnN5bmNfcGIuUGF5bWVudEluc3RydW1lbnQSMgoLbWFza2VkX2liYW4YByABKAsyGS5zeW5jX3BiLldhbGxldE1hc2tlZEliYW5CAhgBIqsBCg5XYWxsZXRJbmZvVHlwZRILCgdVTktOT1dOEAASFgoSTUFTS0VEX0NSRURJVF9DQVJEEAESEgoOUE9TVEFMX0FERFJFU1MQAhIRCg1DVVNUT01FUl9EQVRBEAMSIAocQ1JFRElUX0NBUkRfQ0xPVURfVE9LRU5fREFUQRAEEhYKElBBWU1FTlRfSU5TVFJVTUVOVBAFEhMKC01BU0tFRF9JQkFOEAYaAggBIvUBChdXYWxsZXRNZXRhZGF0YVNwZWNpZmljcxIzCgR0eXBlGAEgASgOMiUuc3luY19wYi5XYWxsZXRNZXRhZGF0YVNwZWNpZmljcy5UeXBlEgoKAmlkGAIgASgJEhEKCXVzZV9jb3VudBgDIAEoAxIQCgh1c2VfZGF0ZRgEIAEoAxIfChdjYXJkX2JpbGxpbmdfYWRkcmVzc19pZBgFIAEoCRIdChVhZGRyZXNzX2hhc19jb252ZXJ0ZWQYBiABKAgiNAoEVHlwZRILCgdVTktOT1dOEAASCAoEQ0FSRBABEgsKB0FERFJFU1MQAhIICgRJQkFOEANCNgolb3JnLmNocm9taXVtLmNvbXBvbmVudHMuc3luYy5wcm90b2NvbEgDUAFaCS4vc3luY19wYg");
/**
 * Describes the message sync_pb.AutofillProfileSpecifics.
 * Use `create(AutofillProfileSpecificsSchema)` to create a new message.
 */
export const AutofillProfileSpecificsSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 0);
/**
 * Represents the validation status of value stored in the AutofillProfile.
 *
 * @generated from enum sync_pb.AutofillProfileSpecifics.VerificationStatus
 */
export var AutofillProfileSpecifics_VerificationStatus;
(function (AutofillProfileSpecifics_VerificationStatus) {
    /**
     * No verification status assigned.
     *
     * @generated from enum value: VERIFICATION_STATUS_UNSPECIFIED = 0;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["VERIFICATION_STATUS_UNSPECIFIED"] = 0] = "VERIFICATION_STATUS_UNSPECIFIED";
    /**
     * The value token was parsed from a parent token.
     * For example, the first name was derived by splitting a full name into
     * its components.
     *
     * @generated from enum value: PARSED = 1;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["PARSED"] = 1] = "PARSED";
    /**
     * Value was built from its subcomponents.
     * For example, the full name was built from the first, middle and last
     * name.
     *
     * @generated from enum value: FORMATTED = 2;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["FORMATTED"] = 2] = "FORMATTED";
    /**
     * The value was observed in a form transmission.
     * For example, the user filled a form that contained at NAME_FULL field.
     * The value of NAME_FULL will be stored as OBSERVED.
     *
     * @generated from enum value: OBSERVED = 3;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["OBSERVED"] = 3] = "OBSERVED";
    /**
     * The user used the autofill settings to verify and store this token.
     * This is currently only applicable to the full name, since users cannot
     * edit individual components of their name.
     *
     * @generated from enum value: USER_VERIFIED = 4;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["USER_VERIFIED"] = 4] = "USER_VERIFIED";
    /**
     * The token was parsed remotely.
     *
     * @generated from enum value: SERVER_PARSED = 5;
     */
    AutofillProfileSpecifics_VerificationStatus[AutofillProfileSpecifics_VerificationStatus["SERVER_PARSED"] = 5] = "SERVER_PARSED";
})(AutofillProfileSpecifics_VerificationStatus || (AutofillProfileSpecifics_VerificationStatus = {}));
/**
 * Describes the enum sync_pb.AutofillProfileSpecifics.VerificationStatus.
 */
export const AutofillProfileSpecifics_VerificationStatusSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 0, 0);
/**
 * Describes the message sync_pb.AutofillSpecifics.
 * Use `create(AutofillSpecificsSchema)` to create a new message.
 */
export const AutofillSpecificsSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 1);
/**
 * Describes the message sync_pb.CloudTokenData.
 * Use `create(CloudTokenDataSchema)` to create a new message.
 */
export const CloudTokenDataSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 2);
/**
 * Describes the message sync_pb.CardBenefit.
 * Use `create(CardBenefitSchema)` to create a new message.
 */
export const CardBenefitSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 3);
/**
 * Describes the message sync_pb.CardBenefit.FlatRateBenefit.
 * Use `create(CardBenefit_FlatRateBenefitSchema)` to create a new message.
 */
export const CardBenefit_FlatRateBenefitSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 3, 0);
/**
 * Describes the message sync_pb.CardBenefit.CategoryBenefit.
 * Use `create(CardBenefit_CategoryBenefitSchema)` to create a new message.
 */
export const CardBenefit_CategoryBenefitSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 3, 1);
/**
 * Describes the message sync_pb.CardBenefit.MerchantBenefit.
 * Use `create(CardBenefit_MerchantBenefitSchema)` to create a new message.
 */
export const CardBenefit_MerchantBenefitSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 3, 2);
/**
 * For category benefits, represents the category of purchases that the
 * benefit can be applied to.
 *
 * @generated from enum sync_pb.CardBenefit.CategoryBenefitType
 */
export var CardBenefit_CategoryBenefitType;
(function (CardBenefit_CategoryBenefitType) {
    /**
     * @generated from enum value: CATEGORY_BENEFIT_TYPE_UNKNOWN = 0;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["CATEGORY_BENEFIT_TYPE_UNKNOWN"] = 0] = "CATEGORY_BENEFIT_TYPE_UNKNOWN";
    /**
     * @generated from enum value: SUBSCRIPTION = 1;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["SUBSCRIPTION"] = 1] = "SUBSCRIPTION";
    /**
     * @generated from enum value: FLIGHTS = 2;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["FLIGHTS"] = 2] = "FLIGHTS";
    /**
     * @generated from enum value: DINING = 3;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["DINING"] = 3] = "DINING";
    /**
     * @generated from enum value: ENTERTAINMENT = 4;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["ENTERTAINMENT"] = 4] = "ENTERTAINMENT";
    /**
     * @generated from enum value: STREAMING = 5;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["STREAMING"] = 5] = "STREAMING";
    /**
     * @generated from enum value: GROCERY_STORES = 6;
     */
    CardBenefit_CategoryBenefitType[CardBenefit_CategoryBenefitType["GROCERY_STORES"] = 6] = "GROCERY_STORES";
})(CardBenefit_CategoryBenefitType || (CardBenefit_CategoryBenefitType = {}));
/**
 * Describes the enum sync_pb.CardBenefit.CategoryBenefitType.
 */
export const CardBenefit_CategoryBenefitTypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 3, 0);
/**
 * Describes the message sync_pb.CardIssuer.
 * Use `create(CardIssuerSchema)` to create a new message.
 */
export const CardIssuerSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 4);
/**
 * @generated from enum sync_pb.CardIssuer.Issuer
 */
export var CardIssuer_Issuer;
(function (CardIssuer_Issuer) {
    /**
     * @generated from enum value: ISSUER_UNKNOWN = 0;
     */
    CardIssuer_Issuer[CardIssuer_Issuer["ISSUER_UNKNOWN"] = 0] = "ISSUER_UNKNOWN";
    /**
     * Card where the issuer is Google.
     *
     * @generated from enum value: GOOGLE = 1;
     */
    CardIssuer_Issuer[CardIssuer_Issuer["GOOGLE"] = 1] = "GOOGLE";
    /**
     * Card where the issuer is external.
     *
     * @generated from enum value: EXTERNAL_ISSUER = 2;
     */
    CardIssuer_Issuer[CardIssuer_Issuer["EXTERNAL_ISSUER"] = 2] = "EXTERNAL_ISSUER";
})(CardIssuer_Issuer || (CardIssuer_Issuer = {}));
/**
 * Describes the enum sync_pb.CardIssuer.Issuer.
 */
export const CardIssuer_IssuerSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 4, 0);
/**
 * Describes the message sync_pb.WalletMaskedCreditCard.
 * Use `create(WalletMaskedCreditCardSchema)` to create a new message.
 */
export const WalletMaskedCreditCardSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 5);
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.WalletCardStatus
 */
export var WalletMaskedCreditCard_WalletCardStatus;
(function (WalletMaskedCreditCard_WalletCardStatus) {
    /**
     * @generated from enum value: VALID = 0;
     */
    WalletMaskedCreditCard_WalletCardStatus[WalletMaskedCreditCard_WalletCardStatus["VALID"] = 0] = "VALID";
    /**
     * @generated from enum value: EXPIRED = 1;
     */
    WalletMaskedCreditCard_WalletCardStatus[WalletMaskedCreditCard_WalletCardStatus["EXPIRED"] = 1] = "EXPIRED";
})(WalletMaskedCreditCard_WalletCardStatus || (WalletMaskedCreditCard_WalletCardStatus = {}));
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.WalletCardStatus.
 */
export const WalletMaskedCreditCard_WalletCardStatusSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 5, 0);
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.WalletCardType
 */
export var WalletMaskedCreditCard_WalletCardType;
(function (WalletMaskedCreditCard_WalletCardType) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: AMEX = 1;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["AMEX"] = 1] = "AMEX";
    /**
     * @generated from enum value: DISCOVER = 2;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["DISCOVER"] = 2] = "DISCOVER";
    /**
     * @generated from enum value: JCB = 3;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["JCB"] = 3] = "JCB";
    /**
     * @generated from enum value: MAESTRO = 4;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["MAESTRO"] = 4] = "MAESTRO";
    /**
     * @generated from enum value: MASTER_CARD = 5;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["MASTER_CARD"] = 5] = "MASTER_CARD";
    /**
     * @generated from enum value: SOLO = 6;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["SOLO"] = 6] = "SOLO";
    /**
     * @generated from enum value: SWITCH = 7;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["SWITCH"] = 7] = "SWITCH";
    /**
     * @generated from enum value: VISA = 8;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["VISA"] = 8] = "VISA";
    /**
     * @generated from enum value: UNIONPAY = 9;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["UNIONPAY"] = 9] = "UNIONPAY";
    /**
     * @generated from enum value: ELO = 10;
     */
    WalletMaskedCreditCard_WalletCardType[WalletMaskedCreditCard_WalletCardType["ELO"] = 10] = "ELO";
})(WalletMaskedCreditCard_WalletCardType || (WalletMaskedCreditCard_WalletCardType = {}));
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.WalletCardType.
 */
export const WalletMaskedCreditCard_WalletCardTypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 5, 1);
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentState
 */
export var WalletMaskedCreditCard_VirtualCardEnrollmentState;
(function (WalletMaskedCreditCard_VirtualCardEnrollmentState) {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentState[WalletMaskedCreditCard_VirtualCardEnrollmentState["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: UNENROLLED = 1 [deprecated = true];
     * @deprecated
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentState[WalletMaskedCreditCard_VirtualCardEnrollmentState["UNENROLLED"] = 1] = "UNENROLLED";
    /**
     * @generated from enum value: ENROLLED = 2;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentState[WalletMaskedCreditCard_VirtualCardEnrollmentState["ENROLLED"] = 2] = "ENROLLED";
    /**
     * @generated from enum value: UNENROLLED_AND_NOT_ELIGIBLE = 3;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentState[WalletMaskedCreditCard_VirtualCardEnrollmentState["UNENROLLED_AND_NOT_ELIGIBLE"] = 3] = "UNENROLLED_AND_NOT_ELIGIBLE";
    /**
     * @generated from enum value: UNENROLLED_AND_ELIGIBLE = 4;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentState[WalletMaskedCreditCard_VirtualCardEnrollmentState["UNENROLLED_AND_ELIGIBLE"] = 4] = "UNENROLLED_AND_ELIGIBLE";
})(WalletMaskedCreditCard_VirtualCardEnrollmentState || (WalletMaskedCreditCard_VirtualCardEnrollmentState = {}));
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentState.
 */
export const WalletMaskedCreditCard_VirtualCardEnrollmentStateSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 5, 2);
/**
 * @generated from enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentType
 */
export var WalletMaskedCreditCard_VirtualCardEnrollmentType;
(function (WalletMaskedCreditCard_VirtualCardEnrollmentType) {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentType[WalletMaskedCreditCard_VirtualCardEnrollmentType["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /**
     * @generated from enum value: ISSUER = 1;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentType[WalletMaskedCreditCard_VirtualCardEnrollmentType["ISSUER"] = 1] = "ISSUER";
    /**
     * @generated from enum value: NETWORK = 2;
     */
    WalletMaskedCreditCard_VirtualCardEnrollmentType[WalletMaskedCreditCard_VirtualCardEnrollmentType["NETWORK"] = 2] = "NETWORK";
})(WalletMaskedCreditCard_VirtualCardEnrollmentType || (WalletMaskedCreditCard_VirtualCardEnrollmentType = {}));
/**
 * Describes the enum sync_pb.WalletMaskedCreditCard.VirtualCardEnrollmentType.
 */
export const WalletMaskedCreditCard_VirtualCardEnrollmentTypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 5, 3);
/**
 * Describes the message sync_pb.WalletPostalAddress.
 * Use `create(WalletPostalAddressSchema)` to create a new message.
 */
export const WalletPostalAddressSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 6);
/**
 * Describes the message sync_pb.PaymentsCustomerData.
 * Use `create(PaymentsCustomerDataSchema)` to create a new message.
 */
export const PaymentsCustomerDataSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 7);
/**
 * Describes the message sync_pb.WalletCreditCardCloudTokenData.
 * Use `create(WalletCreditCardCloudTokenDataSchema)` to create a new message.
 */
export const WalletCreditCardCloudTokenDataSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 8);
/**
 * Describes the message sync_pb.PaymentInstrument.
 * Use `create(PaymentInstrumentSchema)` to create a new message.
 */
export const PaymentInstrumentSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 9);
/**
 * Supported payment infrastructures (rail) that allow users to send money
 * between the payer and the payee. https://en.wikipedia.org/wiki/Payment_rail
 *
 * @generated from enum sync_pb.PaymentInstrument.SupportedRail
 */
export var PaymentInstrument_SupportedRail;
(function (PaymentInstrument_SupportedRail) {
    /**
     * @generated from enum value: SUPPORTED_RAIL_UNKNOWN = 0;
     */
    PaymentInstrument_SupportedRail[PaymentInstrument_SupportedRail["SUPPORTED_RAIL_UNKNOWN"] = 0] = "SUPPORTED_RAIL_UNKNOWN";
    /**
     * Payment rails for Brazil Open Banking.
     *
     * @generated from enum value: PIX = 1;
     */
    PaymentInstrument_SupportedRail[PaymentInstrument_SupportedRail["PIX"] = 1] = "PIX";
    /**
     * International Bank Account Numbers.
     *
     * @generated from enum value: IBAN = 2;
     */
    PaymentInstrument_SupportedRail[PaymentInstrument_SupportedRail["IBAN"] = 2] = "IBAN";
})(PaymentInstrument_SupportedRail || (PaymentInstrument_SupportedRail = {}));
/**
 * Describes the enum sync_pb.PaymentInstrument.SupportedRail.
 */
export const PaymentInstrument_SupportedRailSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 9, 0);
/**
 * Describes the message sync_pb.WalletMaskedIban.
 * Use `create(WalletMaskedIbanSchema)` to create a new message.
 */
export const WalletMaskedIbanSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 10);
/**
 * Describes the message sync_pb.BankAccountDetails.
 * Use `create(BankAccountDetailsSchema)` to create a new message.
 */
export const BankAccountDetailsSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 11);
/**
 * @generated from enum sync_pb.BankAccountDetails.AccountType
 */
export var BankAccountDetails_AccountType;
(function (BankAccountDetails_AccountType) {
    /**
     * @generated from enum value: ACCOUNT_TYPE_UNSPECIFIED = 0;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    /**
     * @generated from enum value: CHECKING = 1;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["CHECKING"] = 1] = "CHECKING";
    /**
     * @generated from enum value: SAVINGS = 2;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["SAVINGS"] = 2] = "SAVINGS";
    /**
     * @generated from enum value: CURRENT = 3;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["CURRENT"] = 3] = "CURRENT";
    /**
     * @generated from enum value: SALARY = 4;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["SALARY"] = 4] = "SALARY";
    /**
     * @generated from enum value: TRANSACTING_ACCOUNT = 5;
     */
    BankAccountDetails_AccountType[BankAccountDetails_AccountType["TRANSACTING_ACCOUNT"] = 5] = "TRANSACTING_ACCOUNT";
})(BankAccountDetails_AccountType || (BankAccountDetails_AccountType = {}));
/**
 * Describes the enum sync_pb.BankAccountDetails.AccountType.
 */
export const BankAccountDetails_AccountTypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 11, 0);
/**
 * Describes the message sync_pb.AutofillWalletSpecifics.
 * Use `create(AutofillWalletSpecificsSchema)` to create a new message.
 */
export const AutofillWalletSpecificsSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 12);
/**
 * @generated from enum sync_pb.AutofillWalletSpecifics.WalletInfoType
 */
export var AutofillWalletSpecifics_WalletInfoType;
(function (AutofillWalletSpecifics_WalletInfoType) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: MASKED_CREDIT_CARD = 1;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["MASKED_CREDIT_CARD"] = 1] = "MASKED_CREDIT_CARD";
    /**
     * POSTAL_ADDRESS is unused by the client since M121.
     *
     * @generated from enum value: POSTAL_ADDRESS = 2;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["POSTAL_ADDRESS"] = 2] = "POSTAL_ADDRESS";
    /**
     * @generated from enum value: CUSTOMER_DATA = 3;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["CUSTOMER_DATA"] = 3] = "CUSTOMER_DATA";
    /**
     * @generated from enum value: CREDIT_CARD_CLOUD_TOKEN_DATA = 4;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["CREDIT_CARD_CLOUD_TOKEN_DATA"] = 4] = "CREDIT_CARD_CLOUD_TOKEN_DATA";
    /**
     * @generated from enum value: PAYMENT_INSTRUMENT = 5;
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["PAYMENT_INSTRUMENT"] = 5] = "PAYMENT_INSTRUMENT";
    /**
     * @generated from enum value: MASKED_IBAN = 6 [deprecated = true];
     * @deprecated
     */
    AutofillWalletSpecifics_WalletInfoType[AutofillWalletSpecifics_WalletInfoType["MASKED_IBAN"] = 6] = "MASKED_IBAN";
})(AutofillWalletSpecifics_WalletInfoType || (AutofillWalletSpecifics_WalletInfoType = {}));
/**
 * Describes the enum sync_pb.AutofillWalletSpecifics.WalletInfoType.
 */
export const AutofillWalletSpecifics_WalletInfoTypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 12, 0);
/**
 * Describes the message sync_pb.WalletMetadataSpecifics.
 * Use `create(WalletMetadataSpecificsSchema)` to create a new message.
 */
export const WalletMetadataSpecificsSchema = /*@__PURE__*/ messageDesc(file_autofill_specifics, 13);
/**
 * @generated from enum sync_pb.WalletMetadataSpecifics.Type
 */
export var WalletMetadataSpecifics_Type;
(function (WalletMetadataSpecifics_Type) {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    WalletMetadataSpecifics_Type[WalletMetadataSpecifics_Type["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: CARD = 1;
     */
    WalletMetadataSpecifics_Type[WalletMetadataSpecifics_Type["CARD"] = 1] = "CARD";
    /**
     * Unused by the client since M121.
     * TODO(crbug.com/1457187): Some server-side code still relies on this.
     * To keep the protos in sync, it is kept until that code is cleaned up.
     *
     * @generated from enum value: ADDRESS = 2;
     */
    WalletMetadataSpecifics_Type[WalletMetadataSpecifics_Type["ADDRESS"] = 2] = "ADDRESS";
    /**
     * @generated from enum value: IBAN = 3;
     */
    WalletMetadataSpecifics_Type[WalletMetadataSpecifics_Type["IBAN"] = 3] = "IBAN";
})(WalletMetadataSpecifics_Type || (WalletMetadataSpecifics_Type = {}));
/**
 * Describes the enum sync_pb.WalletMetadataSpecifics.Type.
 */
export const WalletMetadataSpecifics_TypeSchema = /*@__PURE__*/ enumDesc(file_autofill_specifics, 13, 0);
//# sourceMappingURL=autofill_specifics_pb.js.map