# Generated Body Discipline

Every projected `.ts` file carries a `// @generated` header and a
`// DO NOT EDIT.` marker. This document states the minimum discipline. The
complete executable grammar and all structural profiles are specified in
[Projected Code-Body Shape Specification](specifies-projected-code-body-shapes.md).

## The preferred responsibility-body shape

```typescript
// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: <trusted-key-id>
// projection-id: <projection-id>
// authority-sha256: <ast-authority-hash>
// body-sha256: <body-hash>
// projection-signature: ed25519:<signature>
// DO NOT EDIT.

import type {
  ProjectedContext,
  ProjectedSignal
} from "./<type-file>.js";

export async function projectedOperation(
  context: ProjectedContext
): Promise<ProjectedSignal> {
  return await context.preBoundSemanticOperation(context.input);
}
```

One exported function. One parameter—an immutable context. One statement—
invoking the responsibility's pre-bound semantic operation and returning its
result. The body contains no string edge ID and constructs no invocation DTO.

## What is never allowed to appear

```text
IfStatement
SwitchStatement
ForStatement / WhileStatement / DoWhileStatement
ConditionalExpression (ternary)
TryStatement / CatchClause / FinallyBlock
ThrowStatement
Direct SDK, transport, global-runtime, or I/O calls
Hand-constructed domain object literals (DTOs)
Hard-coded semantic, signal, provider, or disposition identities
Factories, builders, mappers, serializers, or formatters
Multiple exported operations
Multiple returned signal families
Mutation of canonical, semantic, projection, or trust authority
```

If any of these appear, the body is no longer a projection of admitted
authority. It is authored code smuggling a decision past review. The AST
conformance evaluator exists to catch exactly this.

## Why disposable matters

A generated body must be safe to delete and regenerate at any time. If deleting
it and running the projector does not recreate the same signed bytes, either
authority drifted or meaning leaked into the body. Durable changes belong in
semantic, body, or AST authority—not in the emitted TypeScript.
