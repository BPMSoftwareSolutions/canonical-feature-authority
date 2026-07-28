// Reference stub — not a working implementation.
//
// Owns the one call every generated body makes: dispatching a declared
// semantic-edge ID (e.g. "evaluate-scenario-atomicity") to the semantic
// authority record that owns it, and returning its result.
//
// A real implementation would resolve the edge ID against the .sej.json
// registry for the responsibility's scenario folder and execute the
// observation/evaluation/disposition/projection chain declared there.

import type { SemanticEdgeRuntime } from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";

export function invokesSemanticEdge(): SemanticEdgeRuntime {
  throw new Error(
    "invokesSemanticEdge is a documentation stub — see architecture/defines-authority-projection-boundary.md"
  );
}
