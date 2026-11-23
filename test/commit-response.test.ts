/**
 * Unit tests for commit response checking.
 */

import { describe, it, expect } from "vitest";
import { create } from "@bufbuild/protobuf";
import {
  ClientToServerResponseSchema,
  CommitResponseSchema,
  CommitResponse_EntryResponseSchema,
  CommitResponse_ResponseType,
} from "../src/proto/generated/sync_pb.js";
import { getCommitError } from "../src/sync/client.js";

function responseWith(errorCode: number, ...types: CommitResponse_ResponseType[]) {
  return create(ClientToServerResponseSchema, {
    errorCode,
    commit: create(CommitResponseSchema, {
      entryresponse: types.map((responseType) =>
        create(CommitResponse_EntryResponseSchema, {
          responseType,
          errorMessage: responseType === CommitResponse_ResponseType.SUCCESS ? "" : "server detail",
        })
      ),
    }),
  });
}

describe("getCommitError", () => {
  it("accepts a commit whose entries all succeeded", () => {
    expect(getCommitError(responseWith(0, CommitResponse_ResponseType.SUCCESS))).toBeNull();
  });

  it("reports a message-level server error", () => {
    expect(getCommitError(responseWith(3))).toBe("Server error code: 3");
  });

  it("rejects OVER_QUOTA even when the message-level code is SUCCESS", () => {
    const err = getCommitError(responseWith(0, CommitResponse_ResponseType.OVER_QUOTA));
    expect(err).toMatch(/^Storage limit reached/);
    // The server's message may carry an internal adjusted count; keep it out.
    expect(err).not.toContain("server detail");
  });

  it("rejects other per-entry failures with the type and server message", () => {
    expect(getCommitError(responseWith(0, CommitResponse_ResponseType.CONFLICT))).toBe(
      "Commit rejected (CONFLICT): server detail"
    );
    expect(getCommitError(responseWith(0, CommitResponse_ResponseType.TRANSIENT_ERROR))).toBe(
      "Commit rejected (TRANSIENT_ERROR): server detail"
    );
  });

  it("rejects a commit response with missing entry results", () => {
    expect(getCommitError(responseWith(0))).toMatch(/missing entry results/);
    expect(getCommitError(create(ClientToServerResponseSchema, { errorCode: 0 }))).toMatch(
      /missing entry results/
    );
  });
});
