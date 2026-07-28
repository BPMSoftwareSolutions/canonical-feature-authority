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
