// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-conformance-compares-expected-and-observed-topology
// authority-sha256: sha256:c2117e4eee53514cfa896e4f77df75c7823fc503f56373bcf79ea40ef99df6cf
// body-sha256: sha256:16e53bb021143f67404ae31922534e3ef4af7795487f25ea84ad1e954a51ce67
// projection-signature: ed25519:5e5gUYhm5JpdcirYWdmm4LCjDdtk8gvgOImFs6KjUcxJGeF2u8LGBPxNhnsHS/OK+wt7+3UhyOf2AklTYM1FCw==
// DO NOT EDIT.
// Reference stub — not a working implementation.
//
// Owns the core conformance comparison: loading the scenario expectation,
// body expectation, file-body authority, and AST authority for one
// responsibility, then diffing each against the observed AST to produce
// findings such as EXPECTED_RESPONSIBILITY_NOT_PROJECTED or
// UNAUTHORIZED_SIGNAL_RETURNED. See
// Canonical Feature Authority File-System Spine.md, Layer 6 ("It becomes
// operational conformance input") and Layer 20-21.

import type { ObservedAst } from "./parses-generated-body-ast.js";

export interface TopologyComparisonInput {
  readonly expectationPath: string;
  readonly bodyExpectationPath: string;
  readonly fileBodyAuthorityPath: string;
  readonly astAuthorityPath: string;
  readonly observedAst: ObservedAst;
}

export interface TopologyComparisonResult {
  readonly findings: ReadonlyArray<string>;
}

export async function comparesExpectedAndObservedTopology(
  input: TopologyComparisonInput
): Promise<TopologyComparisonResult> {
  throw new Error(
    "comparesExpectedAndObservedTopology is a documentation stub — see Canonical Feature Authority File-System Spine.md, Layer 20-21"
  );
}
