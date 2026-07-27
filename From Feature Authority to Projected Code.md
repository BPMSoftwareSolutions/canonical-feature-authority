# From Feature Authority to Projected Code

## A Student Walkthrough of One Atomic Scenario

## Purpose

This lesson shows how one human-readable software expectation moves through the deterministic architecture.

You will see the same semantic subject represented as:

1. canonical feature authority;
2. projected Gherkin;
3. projected implementation expectation;
4. semantic execution authority;
5. structured code-body authority;
6. generated TypeScript;
7. an observed signal; and
8. conformance proof.

The governing rule is:

> One scenario owns one obligation, one responsibility, one expected result, and one observable signal.

```text
One scenario
    ↓
One obligation
    ↓
One responsibility
    ↓
One expected result
    ↓
One observable RED/GREEN signal
    ↓
One downstream body lineage
    ↓
One coherent proof boundary
```

---

# 1. Human Intent

We begin with the human need.

```text
Reject a feature scenario when it contains
more than one independent obligation.
```

This statement explains the desired outcome, but it is not yet canonical software authority.

### Artifact tag

```json
{
  "artifactKind": "human-intent",
  "layer": "intent",
  "proofRole": "candidate-input"
}
```

---

# 2. Canonical Feature Authority

The canonical feature authority is the machine-readable source of truth.

It separates the scenario's:

* condition;
* trigger;
* expected result;
* observable signal;
* obligation;
* responsibility; and
* expected downstream lineage.

```json
{
  "featureAuthorityType": "canonical-feature-authority.v1",
  "featureId": "reject-non-atomic-feature-scenarios",
  "title": "Reject non-atomic feature scenarios",
  "scenarios": [
    {
      "scenarioId": "reject-a-scenario-with-multiple-obligations",
      "title": "Reject a scenario with multiple obligations",
      "condition": {
        "text": "a canonical scenario contains multiple independent obligations"
      },
      "trigger": {
        "text": "scenario atomicity is evaluated"
      },
      "expectedResult": {
        "resultId": "scenario-is-rejected",
        "text": "the scenario is rejected"
      },
      "expectedSignal": {
        "signalId": "scenario-atomicity",
        "red": "SCENARIO_NOT_ATOMIC",
        "green": "SCENARIO_ATOMIC"
      },
      "obligation": {
        "obligationId": "scenario-carries-one-obligation",
        "text": "one scenario must carry one independent obligation"
      },
      "responsibility": {
        "responsibilityId": "evaluates-scenario-atomicity",
        "kind": "validation"
      },
      "expectedCardinality": {
        "primaryObligations": 1,
        "primaryResponsibilities": 1,
        "expectedResults": 1,
        "signals": 1,
        "scenarioBodyLineages": 1
      }
    }
  ]
}
```

### What this layer owns

```text
What behavior is authorized?
Which obligation is being evaluated?
Which responsibility owns the evaluation?
What result is expected?
What signal must be observable?
```

### What this layer does not own

```text
TypeScript syntax
Function formatting
SDK calls
Runtime library choices
Generated file formatting
```

### Artifact tag

```json
{
  "artifactKind": "canonical-feature-authority",
  "layer": "canonical-intent",
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "responsibilityId": "evaluates-scenario-atomicity",
    "obligationId": "scenario-carries-one-obligation",
    "signalId": "scenario-atomicity"
  },
  "proofRole": "declared-authority"
}
```

---

# 3. Gherkin Projection

Gherkin is the human-readable projection of the canonical feature authority.

```gherkin
Feature: Reject non-atomic feature scenarios

  Scenario: Reject a scenario with multiple obligations
    Given a canonical scenario containing multiple independent obligations
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the signal is SCENARIO_NOT_ATOMIC
```

The `Then` expresses the one expected result.

The single supporting `And` expresses the one observable signal.

```text
Then
    = expected result

And
    = observable signal witnessing that result
```

The `And` must not introduce another obligation, responsibility, proof family, or outcome.

### Projection relationship

```text
Canonical feature authority
        ↓
Gherkin projector
        ↓
Human-readable feature
```

### Artifact tag

```json
{
  "artifactKind": "gherkin-feature-projection",
  "layer": "human-readable-behavior",
  "projectedFrom": "canonical-feature-authority",
  "proofRole": "readable-projection"
}
```

Gherkin is authoritative only when the delivery policy explicitly treats it as the canonical source. In this model, canonical JSON is the source and Gherkin is its deterministic projection.

---

# 4. Expectation Projection

The expectation projector answers:

> What must exist downstream if this scenario is implemented correctly?

```json
{
  "expectationType": "scenario-implementation-expectation.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectedObligation": {
    "obligationId": "scenario-carries-one-obligation"
  },
  "expectedResponsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "count": 1
  },
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "green": "SCENARIO_ATOMIC",
    "red": "SCENARIO_NOT_ATOMIC",
    "count": 1
  },
  "expectedBodyLineage": [
    {
      "bodyId": "evaluates-scenario-atomicity-body",
      "bodyKind": "scenario-responsibility",
      "responsibilityId": "evaluates-scenario-atomicity"
    }
  ],
  "expectedProof": {
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation",
    "requiredSignalId": "scenario-atomicity"
  }
}
```

### The key lesson

The expectation projector does not generate the final code.

It declares what the implementation must eventually prove exists.

```text
Scenario authority
    ↓
Expectation projector
    ↓
Expected responsibility
Expected body
Expected signal
Expected proof
```

### Artifact tag

```json
{
  "artifactKind": "scenario-implementation-expectation",
  "layer": "expectation",
  "projectedFrom": "canonical-feature-authority",
  "projectsTo": [
    "semantic-execution-authority",
    "code-body-projection-authority",
    "body-conformance-proof"
  ],
  "proofRole": "expected-topology"
}
```

---

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

### What the semantic authority owns

```text
The meaning of atomicity
The allowed result dispositions
The forbidden remediation behavior
The signal identity
The result projection
```

### What it does not own

```text
How a TypeScript function is formatted
How imports are written
How await expressions are rendered
```

### Artifact tag

```json
{
  "artifactKind": "semantic-authority",
  "layer": "authority",
  "semanticSubject": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  },
  "projectedFrom": "scenario-implementation-expectation",
  "proofRole": "execution-meaning"
}
```

---

# 6. Code-Body Projection Authority

The code-body projection authority declares the exact structure that the language projector must render.

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
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
            }
          ]
        }
      ]
    }
  ]
}
```

### What students should notice

The body authority contains:

```text
one context
one primary semantic invocation
one returned signal
```

It does not contain:

```text
feature rewriting
table migration
scenario decomposition
proof aggregation
multiple responsibility dispatch
```

### Artifact tag

```json
{
  "artifactKind": "code-body-projection-authority",
  "layer": "language-projection-authority",
  "projectedFrom": "scenario-implementation-expectation",
  "produces": "src/runtime/evaluates-scenario-atomicity.ts",
  "proofRole": "code-structure-authority"
}
```

---

# 7. Generated TypeScript

The language projector renders the structured authority.

```typescript
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-scenario-atomicity-body
// scenario-id: reject-a-scenario-with-multiple-obligations
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

### Why the generated tags matter

The platform agent and student can immediately see:

```text
Which scenario owns this body?
Which responsibility does it execute?
Which signal does it produce?
Which projection authority generated it?
```

The tags are testimony and navigation aids. They do not replace the canonical authority or projection receipt.

### Artifact tag

```json
{
  "artifactKind": "generated-code-body",
  "layer": "language-projection",
  "projectedFrom": "project-scenario-atomicity-body",
  "proofRole": "executable-projection"
}
```

---

# 8. Observed Signal

At runtime, the responsibility emits one authoritative signal.

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true,
  "evidence": {
    "observedIndependentObligationCount": 4
  }
}
```

Green means:

```text
The scenario was evaluated under current authority
and exactly one independent obligation was observed.
```

Red means:

```text
The scenario contains more than one independent obligation
and cannot be admitted as an atomic scenario.
```

### Artifact tag

```json
{
  "artifactKind": "observed-semantic-signal",
  "layer": "observation",
  "projectedFrom": "executed-responsibility",
  "proofRole": "runtime-testimony"
}
```

---

# 9. Projection and Conformance Proof

The final proof compares expected topology with observed topology.

```text
Expected responsibility count: 1
Observed responsibility count: 1

Expected signal count: 1
Observed signal count: 1

Expected body lineage count: 1
Observed body lineage count: 1

Expected primary semantic invocation:
evaluate-scenario-atomicity

Observed primary semantic invocation:
evaluate-scenario-atomicity
```

Example receipt:

```json
{
  "receiptType": "scenario-body-conformance-receipt.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectationId": "scenario-implementation-expectation.v1",
  "projectionId": "project-scenario-atomicity-body",
  "observedBody": "src/runtime/evaluates-scenario-atomicity.ts",
  "checks": {
    "responsibilityCardinality": "GREEN",
    "signalCardinality": "GREEN",
    "bodyLineageCardinality": "GREEN",
    "semanticIdentityConformance": "GREEN",
    "forbiddenSyntax": "GREEN",
    "unauthorizedRemediationBehavior": "GREEN"
  },
  "disposition": "SCENARIO_BODY_CONFORMS"
}
```

### Artifact tag

```json
{
  "artifactKind": "scenario-body-conformance-receipt",
  "layer": "proof",
  "projectedFrom": [
    "scenario-implementation-expectation",
    "observed-code-body",
    "observed-semantic-signal"
  ],
  "proofRole": "expectation-to-outcome-conformance"
}
```

---

# 10. The Complete Canonical Path

```text
Human intent
    ↓
Canonical feature authority
    ↓
Projected Gherkin
    ↓
Scenario implementation expectation
    ↓
Semantic authority
    ↓
Code-body projection authority
    ↓
Generated TypeScript body
    ↓
Observed RED/GREEN signal
    ↓
Expectation-to-outcome conformance receipt
```

Every artifact represents the same semantic subject.

```text
Feature:
reject-non-atomic-feature-scenarios

Scenario:
reject-a-scenario-with-multiple-obligations

Obligation:
scenario-carries-one-obligation

Responsibility:
evaluates-scenario-atomicity

Signal:
scenario-atomicity
```

Those identities must not drift as the subject moves through different projection surfaces.

---

# 11. Platform-Agent Tagging Requirements

The platform agent must classify every created or modified artifact.

Required tags:

```text
artifactKind
layer
featureId
scenarioId
responsibilityId
obligationId
signalId
authoritySource
projectedFrom
projectsTo or produces
proofRole
status
```

The agent must refuse to create an untagged implementation artifact when the owning expectation cannot be identified.

Possible red findings:

```text
CANONICAL_SUBJECT_TAG_MISSING
SCENARIO_ID_MISSING
RESPONSIBILITY_ID_MISSING
OBLIGATION_ID_MISSING
SIGNAL_ID_MISSING
PROJECTION_SOURCE_MISSING
BODY_EXPECTATION_NOT_FOUND
MULTIPLE_RESPONSIBILITIES_FOR_SCENARIO
MULTIPLE_SIGNALS_FOR_SCENARIO
UNAUTHORIZED_REMEDIATION_BEHAVIOR
```

The agent must not repair authority merely to make a guard pass.

```text
Validation:
Observe and reject.

Remediation proposal:
Draft a candidate change.

Human authority:
Admit or reject the candidate.

Projection:
Generate only from admitted authority.
```

---

# Student North Star

```text
One intent
    ↓
One atomic scenario
    ↓
One obligation
    ↓
One responsibility
    ↓
One expected result
    ↓
One observable signal
    ↓
One projected body
    ↓
One coherent proof
```

The purpose of the architecture is not to make students memorize JSON.

It is to let them see that:

> Meaning is declared once, projected visibly through every layer, embodied in disposable code, and proven against the original expectation.
