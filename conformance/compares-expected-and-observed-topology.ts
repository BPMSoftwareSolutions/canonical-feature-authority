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
