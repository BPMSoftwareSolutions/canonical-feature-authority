# Canonical Feature Authority

## Dedicated Student Walkthrough — Section 2

This document isolates the **Canonical Feature Authority** layer so students can see exactly how one canonical scenario influences expectation, file-body authority, Node/TypeScript projection authority, generated code, and conformance.

The governing rule is:

```text
Canonical feature authority
    determines what downstream software must represent.

Expectation authority
    turns that meaning into required implementation topology.

File-body and Node projection authority
    turn that topology into exact generated code.
```

Every applicable authority node is followed by **This becomes** so the projection relationship remains visible.

---

That canonical feature authority should influence the file-body projection **indirectly first, then directly through an expectation-derived body contract**.

It should not jump straight from feature JSON to handwritten TypeScript syntax.

The clean chain is:

```text
Canonical feature authority
        ↓
Scenario expectation projection
        ↓
Responsibility body expectation
        ↓
Node/body projection authority
        ↓
Generated Node/TypeScript body
```

The feature authority tells us **what body must exist and what semantic identity it must carry**. The node projection authority tells the compiler **how to render that body as TypeScript**.

# What this feature authority determines

From this section:

```json
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectedResult": {
    "resultId": "scenario-is-rejected"
  },
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "red": "SCENARIO_NOT_ATOMIC",
    "green": "SCENARIO_ATOMIC"
  },
  "obligation": {
    "obligationId": "scenario-carries-one-obligation"
  },
  "responsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "kind": "validation"
  },
  "expectedCardinality": {
    "primaryResponsibilities": 1,
    "signals": 1,
    "scenarioBodyLineages": 1
  }
}
```

we can derive these body constraints:

```text
Scenario body count:
1

Owning responsibility:
evaluates-scenario-atomicity

Body kind:
validation responsibility

Primary semantic invocation:
evaluate-scenario-atomicity

Returned semantic subject:
scenario-atomicity signal

Permitted final dispositions:
SCENARIO_ATOMIC
SCENARIO_NOT_ATOMIC
```

It also tells us what must **not** happen:

```text
No second responsibility body
No second emitted signal
No unrelated result aggregation
No automatic scenario rewrite
No table conversion
No remediation behavior
```

# Step 1 — Expectation node projected from the feature

The feature authority should first become a body expectation node like this:

```json
{
  "expectationType": "scenario-body-expectation.v1",
  "expectationId": "expect-reject-multiple-obligations-body",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "kind": "validation"
  },
  "result": {
    "resultId": "scenario-is-rejected"
  },
  "signal": {
    "signalId": "scenario-atomicity",
    "green": "SCENARIO_ATOMIC",
    "red": "SCENARIO_NOT_ATOMIC"
  },
  "bodyLineage": {
    "bodyId": "evaluates-scenario-atomicity-body",
    "count": 1,
    "targetLanguage": "typescript",
    "targetPath": "src/runtime/evaluates-scenario-atomicity.ts"
  },
  "semanticEdges": {
    "primaryInvocation": "evaluate-scenario-atomicity"
  },
  "cardinality": {
    "primaryResponsibilities": 1,
    "signals": 1,
    "scenarioBodies": 1
  }
}
```

## This becomes

Not code yet.

This becomes the authoritative constraint that says:

```text
Create exactly one TypeScript body
for responsibility evaluates-scenario-atomicity,
at src/runtime/evaluates-scenario-atomicity.ts,
which invokes evaluate-scenario-atomicity
and returns one scenario-atomicity signal.
```

# Step 2 — File-body authority

The body expectation can then project a file-body contract:

```json
{
  "bodyContractType": "scenario-responsibility-body.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "kind": "validation",
  "target": {
    "language": "typescript",
    "runtime": "node",
    "path": "src/runtime/evaluates-scenario-atomicity.ts"
  },
  "publicOperation": {
    "name": "evaluatesScenarioAtomicity",
    "async": true,
    "parameter": {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    },
    "returnType": "Promise<ScenarioAtomicitySignal>"
  },
  "execution": {
    "primarySemanticEdge": "evaluate-scenario-atomicity",
    "input": "context",
    "return": "semantic-edge-result"
  },
  "constraints": {
    "maximumPrimaryResponsibilities": 1,
    "maximumSignals": 1,
    "maximumBodyLineages": 1,
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidDirectEffects": true,
    "forbidAuthorityMutation": true
  }
}
```

## This becomes

```text
File:
src/runtime/evaluates-scenario-atomicity.ts

Exported operation:
evaluatesScenarioAtomicity

Input:
EvaluateScenarioAtomicityContext

Return:
Promise<ScenarioAtomicitySignal>

Primary edge:
evaluate-scenario-atomicity
```

# Step 3 — Node projection authority

That file-body contract should then become structured Node/TypeScript projection nodes.

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
      "metadata": {
        "featureId": "reject-non-atomic-feature-scenarios",
        "scenarioId": "reject-a-scenario-with-multiple-obligations",
        "obligationId": "scenario-carries-one-obligation",
        "responsibilityId": "evaluates-scenario-atomicity",
        "signalId": "scenario-atomicity"
      },
      "imports": [
        {
          "kind": "import",
          "from": "../types/scenario-atomicity.type.js",
          "typeOnly": true,
          "named": [
            {
              "imported": "EvaluateScenarioAtomicityContext"
            },
            {
              "imported": "ScenarioAtomicitySignal"
            }
          ]
        }
      ],
      "declarations": [
        {
          "kind": "function",
          "name": "evaluatesScenarioAtomicity",
          "export": true,
          "async": true,
          "parameters": [
            {
              "name": "context",
              "type": "EvaluateScenarioAtomicityContext"
            }
          ],
          "returnType": "Promise<ScenarioAtomicitySignal>",
          "body": [
            {
              "kind": "return",
              "expression": {
                "kind": "await",
                "expression": {
                  "kind": "call",
                  "callee": {
                    "kind": "member",
                    "object": {
                      "kind": "member",
                      "object": {
                        "kind": "identifier",
                        "name": "context"
                      },
                      "property": "edges"
                    },
                    "property": "invokes"
                  },
                  "arguments": [
                    {
                      "kind": "literal",
                      "value": "evaluate-scenario-atomicity"
                    },
                    {
                      "kind": "identifier",
                      "name": "context"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
```

# Exactly what each node becomes

## Artifact path

### Authority node

```json
{
  "path": "src/runtime/evaluates-scenario-atomicity.ts"
}
```

### This becomes

```text
src/runtime/evaluates-scenario-atomicity.ts
```

---

## Semantic lineage metadata

### Authority node

```json
{
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity"
}
```

### This becomes

```typescript
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
```

These comments are navigation testimony. The canonical identities must also remain in the projection receipt or artifact registry.

---

## Imports

### Authority node

```json
{
  "kind": "import",
  "from": "../types/scenario-atomicity.type.js",
  "typeOnly": true,
  "named": [
    {
      "imported": "EvaluateScenarioAtomicityContext"
    },
    {
      "imported": "ScenarioAtomicitySignal"
    }
  ]
}
```

### This becomes

```typescript
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "../types/scenario-atomicity.type.js";
```

---

## Function identity

The responsibility ID:

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

influences the projected operation name:

```json
{
  "name": "evaluatesScenarioAtomicity"
}
```

### This becomes

```typescript
evaluatesScenarioAtomicity
```

The transformation from kebab-case responsibility identity to camel-case function name should be a declared naming projection, not an undocumented convention.

```json
{
  "namingProjectionId": "project-responsibility-id-to-typescript-operation-name",
  "source": "evaluates-scenario-atomicity",
  "strategy": "kebab-to-lower-camel"
}
```

### This becomes

```typescript
evaluatesScenarioAtomicity
```

---

## Function boundary

### Authority node

```json
{
  "kind": "function",
  "name": "evaluatesScenarioAtomicity",
  "export": true,
  "async": true,
  "parameters": [
    {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    }
  ],
  "returnType": "Promise<ScenarioAtomicitySignal>"
}
```

### This becomes

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

---

## Primary semantic edge

The responsibility:

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

should map through semantic authority to this execution identity:

```json
{
  "primarySemanticEdge": "evaluate-scenario-atomicity"
}
```

That relationship must be explicit:

```json
{
  "responsibilityBindingType": "responsibility-to-semantic-edge.v1",
  "responsibilityId": "evaluates-scenario-atomicity",
  "semanticEdgeId": "evaluate-scenario-atomicity"
}
```

### This becomes

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

---

## Return and await nodes

### Authority node

```json
{
  "kind": "return",
  "expression": {
    "kind": "await",
    "expression": {
      "kind": "call"
    }
  }
}
```

### This becomes

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

# Complete projected Node body

Putting all directly influential nodes together:

```typescript
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-evaluates-scenario-atomicity-body
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
// DO NOT EDIT.

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "../types/scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

# What does not directly become Node code

Several canonical feature fields govern meaning and conformance but should not be rendered as literal TypeScript logic.

## Condition

```json
{
  "condition": {
    "text": "a canonical scenario contains multiple independent obligations"
  }
}
```

This does **not** become:

```typescript
if (scenario.hasMultipleObligations) {
  // ...
}
```

Instead, it contributes to the semantic evaluation authority invoked by:

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

---

## Expected result

```json
{
  "expectedResult": {
    "resultId": "scenario-is-rejected",
    "text": "the scenario is rejected"
  }
}
```

This does not directly become a return object.

It governs what the returned signal and proof must establish.

Its downstream influence is:

```text
Expected result
    ↓
Proof requirement
    ↓
Observed signal must show rejection
```

---

## Signal dispositions

```json
{
  "expectedSignal": {
    "red": "SCENARIO_NOT_ATOMIC",
    "green": "SCENARIO_ATOMIC"
  }
}
```

These should live in semantic decision or signal authority—not as authored branch literals in the code body.

They are resolved behind:

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

---

## Cardinality

```json
{
  "expectedCardinality": {
    "primaryResponsibilities": 1,
    "signals": 1,
    "scenarioBodyLineages": 1
  }
}
```

This does not become executable code inside the body.

It becomes conformance policy:

```json
{
  "bodyConformanceRules": {
    "expectedResponsibilityCount": 1,
    "expectedSignalCount": 1,
    "expectedBodyCount": 1
  }
}
```

That policy evaluates the generated or observed body.

Possible red findings:

```text
EXPECTATION_BODY_CARDINALITY_MISMATCH
MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO
MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO
```

# The exact influence map

| Canonical feature field    | Influence classification        | Downstream effect                                  |
| -------------------------- | ------------------------------- | -------------------------------------------------- |
| `featureId`                | Direct metadata                 | Generated lineage tag and receipt identity         |
| `scenarioId`               | Direct metadata                 | Generated lineage tag and body ownership           |
| `obligationId`             | Direct metadata and conformance | Body lineage tag and obligation binding            |
| `responsibilityId`         | Direct structural               | Function/body identity and semantic-edge binding   |
| `responsibility.kind`      | Indirect structural             | Selects validation-body profile                    |
| `expectedResult.resultId`  | Indirect proof                  | Determines required proof outcome                  |
| `expectedSignal.signalId`  | Direct result identity          | Return type, metadata, receipt, and signal binding |
| `expectedSignal.red/green` | Indirect runtime                | Semantic evaluation dispositions                   |
| `condition`                | Indirect runtime                | Input condition evaluated behind semantic edge     |
| `trigger`                  | Indirect execution              | Determines invoked responsibility                  |
| `expectedCardinality`      | Governance/conformance          | Limits body, responsibility, and signal topology   |
| `title` fields             | Human-readable only             | Documentation and Gherkin projection               |

# The platform-agent rule

The platform agent should tag this section:

```json
{
  "projectionInfluence": {
    "classification": "mixed",
    "directCodeFields": [
      "featureId",
      "scenarioId",
      "obligation.obligationId",
      "responsibility.responsibilityId",
      "responsibility.kind",
      "expectedSignal.signalId"
    ],
    "semanticRuntimeFields": [
      "condition",
      "trigger",
      "expectedResult",
      "expectedSignal.red",
      "expectedSignal.green"
    ],
    "conformanceFields": [
      "expectedCardinality"
    ],
    "humanProjectionFields": [
      "title",
      "condition.text",
      "trigger.text",
      "expectedResult.text"
    ]
  }
}
```

The most important architectural point is:

> The canonical feature authority should not directly contain the full TypeScript AST. It should project the expected body identity and constraints. Those expectations then produce the structured Node-body projection authority, which produces the generated code.

```text
Feature authority
    determines what body must exist.

Expectation authority
    determines what that body is allowed to mean.

File-body authority
    determines where the body lives.

Node projection authority
    determines its TypeScript syntax.

Generated code
    embodies the declared responsibility.

Conformance proof
    determines whether the body remained inside the scenario’s one-obligation boundary.
```
