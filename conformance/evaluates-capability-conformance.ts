// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-conformance-evaluates-capability-conformance
// authority-sha256: sha256:5bc66d2a08662f3c1cf2ba595295293df0d5eabc1536441a3e7ea3ee8419d0d8
// body-sha256: sha256:be9a1afb3c6438d52a05453c49cf19db931a5042eb79b57105d4b813d5132f5f
// projection-signature: ed25519:O+QADz3shQ+sgQ7u1AMMsiOZo6qzCCcjmcnS5N7HYUwIn1NKxIxMB1o4JmWduv6xt+Ssf99ZPsh4fJtuQERRDQ==
// DO NOT EDIT.
// Reference stub — not a working implementation.
//
// Owns turning a topology-comparison result into the final GREEN/RED
// conformance disposition for one responsibility body — the last step of
// runs-projection-conformance.ts in every scenario folder. See
// Canonical Feature Authority File-System Spine.md, Layer 21.

import type { TopologyComparisonResult } from "./compares-expected-and-observed-topology.js";

export interface CapabilityConformanceResult {
  readonly disposition: "CONFORMS" | "DOES_NOT_CONFORM";
  readonly findings: ReadonlyArray<string>;
}

export async function evaluatesCapabilityConformance(
  comparison: TopologyComparisonResult
): Promise<CapabilityConformanceResult> {
  throw new Error(
    "evaluatesCapabilityConformance is a documentation stub — see Canonical Feature Authority File-System Spine.md, Layer 21"
  );
}
