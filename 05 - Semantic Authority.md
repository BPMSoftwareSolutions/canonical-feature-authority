# 5. Semantic Authority

Semantic authority declares what the responsibility means.

For this scenario, the responsibility is:

```text
Evaluate whether one canonical scenario
contains exactly one independent obligation.
```

A simplified authority might be:

```json
{
  "authorityType": "scenario-atomicity-evaluation.v1",
  "authorityId": "evaluate-scenario-atomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "inputContract": "canonical-scenario.v1",
  "evaluation": {
    "requiredObligationCount": 1,
    "redDisposition": "SCENARIO_NOT_ATOMIC",
    "greenDisposition": "SCENARIO_ATOMIC"
  },
  "forbiddenBehaviors": [
    "rewrite-feature",
    "convert-obligations-to-table",
    "merge-obligations",
    "generate-replacement-scenario",
    "silently-repair-authority"
  ],
  "resultProjection": "project-scenario-atomicity-signal"
}
```

---

# Semantic Authority Influence Classification

```json
{
  "projectionInfluence": {
    "classification": "semantic-runtime-authority",
    "directCodeInfluence": false,
    "semanticEdgeInfluence": true,
    "inputContractInfluence": true,
    "resultTypeInfluence": true,
    "runtimeDispositionInfluence": true,
    "forbiddenBehaviorInfluence": true,
    "proofInfluence": true
  }
}
```

## Code influence

```text
Code influence:
INDIRECT THROUGH A DECLARED SEMANTIC EDGE
```

This semantic authority does not directly render:

```typescript
if (scenario.obligationCount === 1) {
  return "SCENARIO_ATOMIC";
}

return "SCENARIO_NOT_ATOMIC";
```

That would bury the meaning of atomicity inside a language body.

Instead, the projected body invokes the semantic authority by identity:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The semantic runtime resolves and executes the declared meaning behind that identity.

---

# What `authorityType` Influences

## Semantic authority node

```json
{
  "authorityType": "scenario-atomicity-evaluation.v1"
}
```

## Meaning

This classifies the authority as an evaluation contract for scenario atomicity.

It tells the runtime and validator which schema and execution profile govern the document.

```text
Authority family:
scenario atomicity evaluation

Version:
v1
```

## This does not become Node code

It does not become:

```typescript
const authorityType = "scenario-atomicity-evaluation.v1";
```

inside the capability body.

Instead, it becomes an authority-validation and runtime-resolution constraint.

```text
Authority document
    ↓
schema family selected
    ↓
authority validated
    ↓
semantic runtime admits evaluation
```

## This may appear in generated metadata or receipts

```typescript
// semantic-authority-type: scenario-atomicity-evaluation.v1
```

Or:

```json
{
  "authorityType": "scenario-atomicity-evaluation.v1",
  "authorityStatus": "admitted"
}
```

The metadata helps trace the body to its governing authority, but it is not the implementation logic.

---

# What `authorityId` Influences

## Semantic authority node

```json
{
  "authorityId": "evaluate-scenario-atomicity"
}
```

## Meaning

This is the stable semantic identity of the evaluation.

It is the exact identity the projected body must invoke.

## This becomes

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

## Complete projected statement

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

This is a direct semantic identity relationship:

```text
authorityId
    ↓
semantic edge literal
    ↓
projected Node invocation
```

The platform agent must not replace the identity with:

```text
validate-scenario
check-gherkin
inspect-feature
evaluate-feature-validity
```

Even if those names sound similar.

The projected body must invoke the exact admitted identity.

---

# What `responsibilityId` Influences

## Semantic authority node

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

## Meaning

This authority belongs to exactly one responsibility.

```text
Responsibility:
evaluates-scenario-atomicity
```

The responsibility identity must match the expectation projection.

```text
Expected responsibility:
evaluates-scenario-atomicity

Semantic authority responsibility:
evaluates-scenario-atomicity
```

Any mismatch is a hard lineage failure.

## This becomes a generated operation name

Through an admitted naming projection:

```text
evaluates-scenario-atomicity
    ↓ kebab-case to lower camel case
evaluatesScenarioAtomicity
```

## This becomes

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

## This becomes generated lineage metadata

```typescript
// responsibility-id: evaluates-scenario-atomicity
```

The function name is a language projection.

The responsibility ID remains the canonical semantic identity.

---

# What `inputContract` Influences

## Semantic authority node

```json
{
  "inputContract": "canonical-scenario.v1"
}
```

## Meaning

The responsibility accepts one canonical scenario as its semantic input.

```text
Accepted input:
canonical-scenario.v1
```

The body must not accept raw Gherkin text, an arbitrary object, or a table-shaped workaround unless those inputs have already been projected into the canonical scenario contract.

## This influences the context type

The input contract can project into a language-specific context type.

```json
{
  "typeProjectionId": "project-canonical-scenario-evaluation-context",
  "sourceContract": "canonical-scenario.v1",
  "targetType": "EvaluateScenarioAtomicityContext"
}
```

## This becomes

```typescript
context: EvaluateScenarioAtomicityContext
```

## Complete projected function boundary

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

## This does not become DTO construction

The capability body must not do this:

```typescript
const scenario = {
  title: context.feature.title,
  steps: context.rawSteps,
  tables: context.rawTables
};
```

The context is already projected and validated before the body receives it.

```text
Raw feature material
    ↓
canonical feature projection
    ↓
canonical scenario validation
    ↓
EvaluateScenarioAtomicityContext
```

---

# What `requiredObligationCount` Influences

## Semantic authority node

```json
{
  "evaluation": {
    "requiredObligationCount": 1
  }
}
```

## Meaning

A scenario is atomic only when one independent obligation is established.

```text
Expected obligation count:
1
```

This value defines the evaluation threshold.

## This does not become authored Node branching

It must not become:

```typescript
if (context.scenario.obligations.length === 1) {
  return "SCENARIO_ATOMIC";
}
```

The threshold belongs to semantic decision authority.

A more complete semantic decision could be:

```json
{
  "decisionId": "resolve-scenario-atomicity-disposition",
  "inputs": [
    "observedIndependentObligationCount",
    "requiredObligationCount"
  ],
  "rules": [
    {
      "when": {
        "observedIndependentObligationCount": {
          "equals": "$requiredObligationCount"
        }
      },
      "then": "SCENARIO_ATOMIC"
    },
    {
      "when": {
        "*": true
      },
      "then": "SCENARIO_NOT_ATOMIC"
    }
  ]
}
```

## This is invoked in projected code as

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The kernel applies the threshold and returns the resolved signal.

---

# What the GREEN Disposition Influences

## Semantic authority node

```json
{
  "greenDisposition": "SCENARIO_ATOMIC"
}
```

## Meaning

GREEN means:

```text
Exactly one independent obligation was observed
under the admitted atomicity authority.
```

It does not mean:

```text
The parser did not crash.
The feature looked reasonable.
The scenario had one And keyword.
```

It means the declared obligation was actually satisfied.

## This does not become

```typescript
return "SCENARIO_ATOMIC";
```

inside the capability body.

The disposition is resolved by the semantic runtime.

## This influences the signal contract

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "allowedDispositions": [
    "SCENARIO_ATOMIC",
    "SCENARIO_NOT_ATOMIC"
  ]
}
```

## This influences the return type

```typescript
Promise<ScenarioAtomicitySignal>
```

## Example runtime result

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_ATOMIC",
  "color": "GREEN",
  "blocking": false
}
```

---

# What the RED Disposition Influences

## Semantic authority node

```json
{
  "redDisposition": "SCENARIO_NOT_ATOMIC"
}
```

## Meaning

RED means:

```text
More than one independent obligation was observed,
or atomicity could not be established.
```

The signal blocks scenario admission.

## This does not become authored branching

It must not become:

```typescript
throw new Error("Scenario is not atomic");
```

unless the signal-to-exception projection is separately authorized.

The semantic responsibility should return one domain signal.

## This influences the runtime result

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true
}
```

## This influences the projected return subject

```typescript
Promise<ScenarioAtomicitySignal>
```

## This is returned through

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

---

# What `forbiddenBehaviors` Influences

## Semantic authority node

```json
{
  "forbiddenBehaviors": [
    "rewrite-feature",
    "convert-obligations-to-table",
    "merge-obligations",
    "generate-replacement-scenario",
    "silently-repair-authority"
  ]
}
```

## Meaning

The responsibility is a validator.

It is not a remediator.

```text
Authorized:
observe
evaluate
return signal
preserve findings

Forbidden:
rewrite
repair
merge
convert
replace
```

This directly addresses the exploit that moved additional obligations into tables.

## This does not become five `if` statements

It must not become:

```typescript
if (operation === "rewrite-feature") {
  throw new Error("Forbidden");
}
```

inside the scenario body.

Instead, these become admission and conformance rules applied to downstream topology.

## This becomes a body-conformance policy

```json
{
  "conformanceRuleId": "scenario-atomicity-body-forbids-remediation",
  "forbiddenSemanticEdges": [
    "rewrite-feature",
    "convert-obligations-to-table",
    "merge-obligations",
    "generate-replacement-scenario",
    "silently-repair-authority"
  ],
  "redDisposition": "UNAUTHORIZED_REMEDIATION_BEHAVIOR"
}
```

## This becomes a semantic fan-out check

Expected observed semantic edges:

```text
evaluate-scenario-atomicity
```

Forbidden observed semantic edges:

```text
rewrite-feature
convert-obligations-to-table
merge-obligations
generate-replacement-scenario
silently-repair-authority
```

## Example RED finding

```json
{
  "findingId": "UNAUTHORIZED_REMEDIATION_BEHAVIOR",
  "responsibilityId": "evaluates-scenario-atomicity",
  "observedSemanticEdge": "convert-obligations-to-table",
  "expectedAuthority": "evaluate-scenario-atomicity",
  "blocking": true
}
```

The platform agent must reject the implementation rather than explain that it was trying to be helpful.

---

# What `resultProjection` Influences

## Semantic authority node

```json
{
  "resultProjection": "project-scenario-atomicity-signal"
}
```

## Meaning

After evaluation, the observed facts and resolved disposition must be projected into one canonical signal contract.

```text
Observed evaluation
    ↓
Resolved disposition
    ↓
Canonical scenario-atomicity signal
```

## This may influence a resolve-execute-project body shape

Where the public body explicitly separates evaluation and result projection, the file-body authority can become:

```json
{
  "body": [
    {
      "kind": "variable",
      "declarationKind": "const",
      "name": "evaluation",
      "value": {
        "kind": "await",
        "expression": {
          "kind": "call",
          "callee": "context.edges.invokes",
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
    },
    {
      "kind": "return",
      "expression": {
        "kind": "call",
        "callee": "context.edges.projects",
        "arguments": [
          {
            "kind": "literal",
            "value": "project-scenario-atomicity-signal"
          },
          {
            "kind": "identifier",
            "name": "evaluation"
          }
        ]
      }
    }
  ]
}
```

## This becomes

```typescript
const evaluation = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

return context.edges.projects(
  "project-scenario-atomicity-signal",
  evaluation
);
```

This shape makes the result projection visible in the code body.

## Alternative collapsed shape

If `evaluate-scenario-atomicity` already returns the canonical signal, the body can remain:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The chosen boundary must be explicit in the body expectation.

The system must not silently alternate between the two shapes.

---

# Semantic Authority to File-Body Projection

The semantic authority constrains the file-body contract.

```json
{
  "bodyContractType": "scenario-responsibility-body.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "responsibilityId": "evaluates-scenario-atomicity",
  "inputContract": "canonical-scenario.v1",
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
  "semanticExecution": {
    "primaryEdge": "evaluate-scenario-atomicity",
    "resultProjection": "project-scenario-atomicity-signal"
  },
  "forbiddenSemanticEdges": [
    "rewrite-feature",
    "convert-obligations-to-table",
    "merge-obligations",
    "generate-replacement-scenario",
    "silently-repair-authority"
  ]
}
```

## This becomes

```text
File:
src/runtime/evaluates-scenario-atomicity.ts

Operation:
evaluatesScenarioAtomicity

Input:
EvaluateScenarioAtomicityContext

Primary semantic edge:
evaluate-scenario-atomicity

Result projection:
project-scenario-atomicity-signal

Return:
ScenarioAtomicitySignal
```

---

# Semantic Authority to Node Projection

The file-body contract can project into structured TypeScript authority.

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
      "metadata": {
        "authorityId": "evaluate-scenario-atomicity",
        "responsibilityId": "evaluates-scenario-atomicity",
        "inputContract": "canonical-scenario.v1",
        "resultProjection": "project-scenario-atomicity-signal"
      },
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
              "kind": "variable",
              "declarationKind": "const",
              "name": "evaluation",
              "value": {
                "kind": "await",
                "expression": {
                  "kind": "call",
                  "callee": "context.edges.invokes",
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
            },
            {
              "kind": "return",
              "expression": {
                "kind": "call",
                "callee": "context.edges.projects",
                "arguments": [
                  {
                    "kind": "literal",
                    "value": "project-scenario-atomicity-signal"
                  },
                  {
                    "kind": "identifier",
                    "name": "evaluation"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
```

## This becomes

```typescript
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-evaluates-scenario-atomicity-body
// semantic-authority-id: evaluate-scenario-atomicity
// responsibility-id: evaluates-scenario-atomicity
// input-contract: canonical-scenario.v1
// result-projection: project-scenario-atomicity-signal
// DO NOT EDIT.

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  const evaluation = await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );

  return context.edges.projects(
    "project-scenario-atomicity-signal",
    evaluation
  );
}
```

---

# Exact Semantic Authority Influence Map

| Semantic authority field  | Influence classification   | Downstream effect                                       |
| ------------------------- | -------------------------- | ------------------------------------------------------- |
| `authorityType`           | Governance/runtime         | Selects schema and authority execution family           |
| `authorityId`             | Direct semantic edge       | Becomes the literal invoked by `context.edges.invokes`  |
| `responsibilityId`        | Structural and lineage     | Function name, body ownership, metadata, proof binding  |
| `inputContract`           | Type and admission         | Determines accepted canonical input and context type    |
| `requiredObligationCount` | Indirect runtime           | Governs atomicity decision threshold                    |
| `redDisposition`          | Indirect runtime           | Permitted RED signal disposition                        |
| `greenDisposition`        | Indirect runtime           | Permitted GREEN signal disposition                      |
| `forbiddenBehaviors`      | Conformance                | Rejects unauthorized remediation edges and body fan-out |
| `resultProjection`        | Direct semantic projection | Becomes the literal invoked by `context.edges.projects` |

---

# Platform-Agent Tagging Requirement

The semantic authority artifact should be tagged as:

```json
{
  "artifactKind": "semantic-authority",
  "layer": "authority",
  "semanticSubject": {
    "authorityId": "evaluate-scenario-atomicity",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "inputContract": "canonical-scenario.v1",
    "resultProjection": "project-scenario-atomicity-signal"
  },
  "projectedFrom": "scenario-implementation-expectation",
  "projectsTo": [
    "file-body-contract",
    "code-body-projection-authority",
    "semantic-runtime-registration",
    "body-conformance-proof"
  ],
  "projectionInfluence": {
    "classification": "semantic-runtime-authority",
    "directCodeFields": [
      "authorityId",
      "responsibilityId",
      "inputContract",
      "resultProjection"
    ],
    "runtimeDecisionFields": [
      "evaluation.requiredObligationCount",
      "evaluation.redDisposition",
      "evaluation.greenDisposition"
    ],
    "conformanceFields": [
      "forbiddenBehaviors"
    ]
  },
  "proofRole": "execution-meaning"
}
```

The platform agent must identify every downstream artifact influenced by this authority.

It must reject:

```text
An invocation using the wrong authority ID
A body owned by a different responsibility
A context that bypasses canonical-scenario.v1
A result that emits an undeclared disposition
A body that invokes forbidden remediation behavior
A result projected through the wrong signal projection
```

Possible findings:

```text
SEMANTIC_AUTHORITY_ID_MISMATCH
RESPONSIBILITY_AUTHORITY_BINDING_MISMATCH
INPUT_CONTRACT_MISMATCH
UNDECLARED_SIGNAL_DISPOSITION
UNAUTHORIZED_REMEDIATION_BEHAVIOR
RESULT_PROJECTION_MISMATCH
SEMANTIC_FAN_OUT_EXCEEDED
```

---

# Complete Semantic-Authority-to-Code Trace

```text
authorityId:
evaluate-scenario-atomicity
    ↓
projected semantic invocation:
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

```text
responsibilityId:
evaluates-scenario-atomicity
    ↓
Node operation:
evaluatesScenarioAtomicity
```

```text
inputContract:
canonical-scenario.v1
    ↓
context type:
EvaluateScenarioAtomicityContext
```

```text
requiredObligationCount:
1
    ↓
semantic decision threshold
    ↓
resolved disposition
```

```text
greenDisposition:
SCENARIO_ATOMIC

redDisposition:
SCENARIO_NOT_ATOMIC
    ↓
ScenarioAtomicitySignal
```

```text
resultProjection:
project-scenario-atomicity-signal
    ↓
context.edges.projects(
  "project-scenario-atomicity-signal",
  evaluation
)
```

```text
forbiddenBehaviors:
rewrite, convert, merge, replace, repair
    ↓
body-conformance and semantic-fan-out gate
```

## Complete projected Node body

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  const evaluation = await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );

  return context.edges.projects(
    "project-scenario-atomicity-signal",
    evaluation
  );
}
```

---

# The Key Lesson

Semantic authority does not tell TypeScript how to format a function.

It tells the system:

```text
Which responsibility is being executed.

Which canonical input is admitted.

What atomicity means.

Which dispositions are allowed.

Which behavior is forbidden.

Which canonical signal must be projected.
```

The Node projection authority then renders the smallest body capable of invoking that meaning.

```text
Expectation
    says what must exist.

Semantic authority
    says what it means.

File-body authority
    says where it belongs.

Node projection authority
    says how it is rendered.

Generated code
    invokes the declared meaning.

Proof
    ensures the body did not exceed it.
```

The most important student takeaway is:

> The semantic authority is where the software becomes intelligent. The projected code body remains mechanically boring because every meaningful decision has already been declared.
