// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-conformance-detects-forbidden-body-structures
// authority-sha256: sha256:7b85115513b048273e089ee112e62da736cc30bcdc02b50068f55e0c57c3a33b
// body-sha256: sha256:93607d4e097507a3c9d3facc960232e50e7f416c2cc5130d5b7d0f52eab8f342
// projection-signature: ed25519:N/qgVXY9Q9WhJt7nwAuozV83HU+aNmhWhTLPlvd+UJXG/YeZtHcJsCp1xyRpy2HPqz6T5IK0CrK0y9qNge9LCA==
// DO NOT EDIT.
// Reference stub — not a working implementation.
//
// Owns walking an observed AST for the node kinds every generated body
// forbids: IfStatement, SwitchStatement, loops, ConditionalExpression,
// direct SDK calls, DTO construction, authority mutation. See
// architecture/defines-generated-body-discipline.md and
// Canonical Feature Authority File-System Spine.md, Layer 17.

import type { ObservedAst } from "./parses-generated-body-ast.js";

export async function detectsForbiddenBodyStructures(
  observedAst: ObservedAst
): Promise<void> {
  throw new Error(
    "detectsForbiddenBodyStructures is a documentation stub — see architecture/defines-generated-body-discipline.md"
  );
}
