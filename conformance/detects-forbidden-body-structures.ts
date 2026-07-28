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
