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

---

# Gherkin Projection Influence Classification

```json
{
  "projectionInfluence": {
    "classification": "behavioral-and-lineage",
    "directCodeInfluence": false,
    "directAstInfluence": false,
    "expectationInfluence": true,
    "scenarioOwnershipInfluence": true,
    "proofInfluence": true
  }
}
```

## Code influence

```text
Code influence:
INDIRECT THROUGH EXPECTATION AND SEMANTIC AUTHORITY
```

The Gherkin must not directly become handwritten branching code such as:

```typescript
if (scenario.obligationCount > 1) {
  return "SCENARIO_NOT_ATOMIC";
}
```

That would allow the implementation body to invent:

* how obligation count is determined;
* what makes obligations independent;
* whether tables are inspected;
* whether hidden semantic density is detected;
* what rejection means;
* what evidence supports the signal; and
* whether the feature may be rewritten.

Instead, Gherkin constrains the behavior that the downstream authority and projected code must satisfy.

---

# What the Feature Title Influences

## Gherkin projection

```gherkin
Feature: Reject non-atomic feature scenarios
```

This line comes from the canonical feature title:

```json
{
  "featureId": "reject-non-atomic-feature-scenarios",
  "title": "Reject non-atomic feature scenarios"
}
```

## This becomes

A human-readable feature declaration:

```gherkin
Feature: Reject non-atomic feature scenarios
```

It also preserves the feature identity used by downstream lineage:

```typescript
// feature-id: reject-non-atomic-feature-scenarios
```

The title itself does not determine the function body.

The stable `featureId` participates in body ownership, projection receipts, and proof lineage.

---

# What the Scenario Title Influences

## Gherkin projection

```gherkin
Scenario: Reject a scenario with multiple obligations
```

This line comes from:

```json
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "title": "Reject a scenario with multiple obligations"
}
```

## This becomes

The human-readable scenario declaration:

```gherkin
Scenario: Reject a scenario with multiple obligations
```

It also constrains the downstream body lineage:

```typescript
// scenario-id: reject-a-scenario-with-multiple-obligations
```

The scenario title does not determine the TypeScript operation name.

The stable scenario identity links:

```text
Scenario
    ↓
Expectation
    ↓
Responsibility
    ↓
Projected body
    ↓
Proof
```

---

# What the `Given` Influences

## Gherkin projection

```gherkin
Given a canonical scenario containing multiple independent obligations
```

This comes from the canonical condition:

```json
{
  "condition": {
    "text": "a canonical scenario contains multiple independent obligations"
  }
}
```

## Behavioral meaning

The `Given` identifies the admitted condition under which the scenario is evaluated.

```text
Input subject:
one canonical feature scenario

Observed condition:
the scenario carries multiple independent obligations
```

## This does not become

```typescript
const scenario = {
  containsMultipleIndependentObligations: true
};
```

The Gherkin condition does not construct a runtime DTO.

It also does not become:

```typescript
if (scenario.containsMultipleIndependentObligations) {
  // reject
}
```

The condition contributes to the semantic evaluation authority invoked through the projected body.

## This is invoked in projected code as

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The runtime context carries the canonical scenario being evaluated.

The semantic authority determines how the condition is observed and evaluated.

---

# What the `When` Influences

## Gherkin projection

```gherkin
When scenario atomicity is evaluated
```

This comes from:

```json
{
  "trigger": {
    "text": "scenario atomicity is evaluated"
  },
  "responsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "kind": "validation"
  }
}
```

## Behavioral meaning

The `When` identifies the single responsibility exercised by the scenario.

```text
Responsibility:
evaluates-scenario-atomicity
```

The human-readable wording:

```gherkin
When scenario atomicity is evaluated
```

must resolve to that exact responsibility identity.

## Responsibility binding

```json
{
  "scenarioStepBindingType": "when-to-responsibility.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "stepKind": "when",
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

## This becomes

The expected body identity:

```text
evaluates-scenario-atomicity-body
```

The expected Node operation name:

```typescript
evaluatesScenarioAtomicity
```

And the primary semantic edge:

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

The complete projected function boundary becomes:

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

The transformation must be explicit:

```text
When phrase
    ↓
responsibility binding
    ↓
body expectation
    ↓
Node operation identity
```

The function name must not be guessed independently from prose.

---

# What the `Then` Influences

## Gherkin projection

```gherkin
Then the scenario is rejected
```

This comes from:

```json
{
  "expectedResult": {
    "resultId": "scenario-is-rejected",
    "text": "the scenario is rejected"
  }
}
```

## Behavioral meaning

The `Then` declares the one expected result.

```text
Expected result:
scenario-is-rejected
```

It does not describe how the result is constructed.

It does not authorize the body to rewrite, repair, split, or transform the scenario.

## This does not become

```typescript
return {
  rejected: true
};
```

The result object must not be invented by the code body.

The expected result instead constrains:

* the semantic result projection;
* the accepted signal dispositions;
* the scenario proof;
* and the final conformance receipt.

## This is represented in projected code by

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The semantic edge returns a signal whose disposition establishes whether the expected result occurred.

Conceptually:

```text
SCENARIO_NOT_ATOMIC
    ↓
scenario admission rejected
```

The result meaning remains in semantic authority, not authored TypeScript branching.

---

# What the Supporting `And` Influences

## Gherkin projection

```gherkin
And the signal is SCENARIO_NOT_ATOMIC
```

This comes from:

```json
{
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "red": "SCENARIO_NOT_ATOMIC",
    "green": "SCENARIO_ATOMIC"
  }
}
```

## Behavioral meaning

The supporting `And` identifies the one observable signal that witnesses the expected result.

```text
Signal identity:
scenario-atomicity

Expected scenario disposition:
SCENARIO_NOT_ATOMIC

Signal color:
RED

Blocking:
true
```

## This must not become

```typescript
const schemaSignal = "...";
const tableSignal = "...";
const proofSignal = "...";
const lineageSignal = "...";
```

That would introduce multiple signal families below one scenario.

The scenario permits exactly one authoritative signal identity.

## This influences the return type

```typescript
Promise<ScenarioAtomicitySignal>
```

## This influences generated lineage metadata

```typescript
// signal-id: scenario-atomicity
```

## This influences the semantic invocation result

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The invoked semantic responsibility must return one signal conforming to:

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true
}
```

The literal disposition should not be authored inside the collapsed body.

It is resolved by semantic authority.

---

# Gherkin-to-Expectation Projection

The Gherkin scenario confirms the human-readable behavioral cell:

```text
Given:
one admitted condition

When:
one responsibility

Then:
one expected result

And:
one observable signal
```

That cell projects into the scenario expectation:

```json
{
  "expectationType": "scenario-implementation-expectation.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "conditionId": "scenario-contains-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "resultId": "scenario-is-rejected",
  "signalId": "scenario-atomicity",
  "expectedDisposition": "SCENARIO_NOT_ATOMIC",
  "expectedCardinality": {
    "conditions": 1,
    "primaryResponsibilities": 1,
    "expectedResults": 1,
    "signals": 1,
    "scenarioBodyLineages": 1
  }
}
```

## This becomes

```text
One expected body:
evaluates-scenario-atomicity-body

One expected responsibility:
evaluates-scenario-atomicity

One expected return subject:
scenario-atomicity

One expected RED disposition:
SCENARIO_NOT_ATOMIC
```

---

# Gherkin-to-File-Body Influence

The Gherkin does not directly declare the file path, but its stable scenario and responsibility identities constrain the file-body expectation.

```json
{
  "bodyExpectationType": "scenario-responsibility-body.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "target": {
    "language": "typescript",
    "path": "src/runtime/evaluates-scenario-atomicity.ts"
  }
}
```

## This becomes

```text
src/runtime/evaluates-scenario-atomicity.ts
```

The path is produced through an admitted file-placement or naming projection.

It must not be guessed by the platform agent without authority.

---

# Gherkin-to-Node-Body Influence

The scenario's `When`, `Then`, and supporting `And` constrain the Node body shape.

```text
When
    → one responsibility invocation

Then
    → one result established

And
    → one signal returned
```

The corresponding Node projection authority becomes:

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
```

## This becomes

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

---

# Complete Gherkin-to-Code Trace

```text
Feature:
Reject non-atomic feature scenarios
    ↓
feature-id:
reject-non-atomic-feature-scenarios
    ↓
generated lineage:
feature-id comment and receipt identity
```

```text
Scenario:
Reject a scenario with multiple obligations
    ↓
scenario-id:
reject-a-scenario-with-multiple-obligations
    ↓
generated lineage:
scenario-id comment and body ownership
```

```text
Given:
scenario contains multiple independent obligations
    ↓
semantic input condition
    ↓
runtime context evaluated behind semantic edge
```

```text
When:
scenario atomicity is evaluated
    ↓
responsibility:
evaluates-scenario-atomicity
    ↓
Node operation:
evaluatesScenarioAtomicity
    ↓
semantic invocation:
evaluate-scenario-atomicity
```

```text
Then:
scenario is rejected
    ↓
expected result:
scenario-is-rejected
    ↓
proof obligation:
rejection must be established
```

```text
And:
signal is SCENARIO_NOT_ATOMIC
    ↓
signal:
scenario-atomicity
    ↓
return type:
ScenarioAtomicitySignal
    ↓
runtime disposition:
SCENARIO_NOT_ATOMIC
```

---

# Complete Generated Node Body

```typescript
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-evaluates-scenario-atomicity-body
// feature-id: reject-non-atomic-feature-scenarios
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

---

# Projection Relationship

```text
Canonical feature authority
        ↓
Gherkin projector
        ↓
Human-readable feature
        ↓
Expectation projector
        ↓
Scenario body expectation
        ↓
Node-body projector
        ↓
Generated TypeScript body
```

Gherkin participates in the lineage, but it does not independently invent the Node body.

---

# Artifact Tag

```json
{
  "artifactKind": "gherkin-feature-projection",
  "layer": "human-readable-behavior",
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "responsibilityId": "evaluates-scenario-atomicity",
    "resultId": "scenario-is-rejected",
    "signalId": "scenario-atomicity"
  },
  "projectedFrom": "canonical-feature-authority",
  "projectsInto": "scenario-implementation-expectation",
  "projectionInfluence": {
    "classification": "behavioral-and-lineage",
    "directCodeInfluence": false,
    "expectedBodyInfluence": true,
    "proofInfluence": true
  },
  "proofRole": "readable-projection"
}
```

---

# Student Lesson

The Gherkin does not tell TypeScript how to count obligations.

It tells the system:

```text
Under this condition,
exercise this one responsibility,
establish this one result,
and emit this one signal.
```

The expectation and semantic layers then determine what body may exist.

The Node projection layer determines how that body is rendered.

```text
Gherkin
    states the behavior.

Expectation
    states what implementation topology must exist.

Semantic authority
    states what the responsibility means.

Node projection authority
    states what syntax must be generated.

Generated code
    executes the admitted responsibility.
```

The key rule is:

> Gherkin influences the projected body by constraining its responsibility, result, signal, ownership, and proof lineage—not by directly authoring implementation logic.
