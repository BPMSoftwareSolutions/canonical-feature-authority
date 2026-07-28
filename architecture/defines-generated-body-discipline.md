# Generated Body Discipline

Every `.ts` file under `capabilities/**/evaluates-*` carries a `// @generated` header and a `// DO NOT EDIT.` footer comment. This document states exactly what that discipline requires.

## The shape every generated body follows

```typescript
// @generated
// feature-id: <featureId>
// scenario-id: <scenarioId>
// obligation-id: <obligationId>
// responsibility-id: <responsibilityId>
// signal-id: <signalId>
// DO NOT EDIT.

import type {
  <ContextType>,
  <SignalType>
} from "./<type-file>.js";

export async function <operationName>(
  context: <ContextType>
): Promise<<SignalType>> {
  return await context.edges.invokes(
    "<primary-semantic-edge>",
    context
  );
}
```

One exported function. One parameter — an immutable context. One statement — invoking the responsibility's declared primary semantic edge and returning its result.

## What is never allowed to appear

```text
IfStatement
SwitchStatement
ForStatement / WhileStatement / DoWhileStatement
ConditionalExpression (ternary)
Direct SDK or I/O calls
Hand-constructed domain object literals (DTOs)
Multiple exported operations
Multiple returned signal families
Mutation of canonical or semantic authority
```

If any of these appear, the body is no longer a projection of admitted authority — it is authored code smuggling a decision past review. The AST conformance evaluator (see [conformance/detects-forbidden-body-structures.ts](../conformance/detects-forbidden-body-structures.ts)) exists to catch exactly this.

## Why "disposable" matters

A generated body should be safe to delete and regenerate at any time. If deleting `evaluates-scenario-atomicity.ts` and re-running the TypeScript projector would produce a file that is byte-for-byte identical (or functionally identical, given a stable projector), the body has stayed honest to its authority. If deleting it would lose behavior nobody else remembers, some decision leaked into the body that should have lived in semantic authority instead.
