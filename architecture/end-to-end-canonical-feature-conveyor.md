# End-to-End Canonical Feature Conveyor

```json
{
  "contractType": "canonical-feature-conveyor.v1",
  "contractId": "end-to-end-canonical-feature-conveyor",
  "title": "End-to-End Canonical Feature Conveyor",
  "status": "draft",
  "schemaVersion": "1.0.0"
}
```

## Feature destination

### Intended outcome

One previously nonexistent reviewed feature is constructed, projected, executed, and reviewed entirely from admitted canonical authority.

### Complete execution flow

```text
[reviewed-new-feature-request.v1]
        |
        |  1. admits-reviewed-new-feature-request
        v
[new-feature-request-admission.v1]
        |
        |  2. adapts-new-feature-request-admission
        v
[admitted-new-feature-request.v1]
        |
        |  3. projects-complete-new-feature-authority
        v
[complete-new-feature-authority.v1]
        |
        |  4. materializes-complete-new-feature
        v
[complete-new-feature-materialization.v1]
        |
        |  5. executes-newly-materialized-feature
        v
[observed-new-feature-execution.v1]
        |
        |  6. composes-new-feature-execution-comparison
        v
[new-feature-execution-comparison.v1]
        |
        |  7. verifies-complete-new-feature-lineage
        v
[new-feature-terminal-disposition.v1]
```

Current projection target: Node / TypeScript

### Projected feature execution body

Artifact: `composition/executes-end-to-end-canonical-feature-conveyor.ts`

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "./executes-end-to-end-canonical-feature-conveyor.type.js";

export async function executesEndToEndCanonicalFeatureConveyor(
  context: EndToEndCanonicalFeatureConveyorContext
): Promise<NewFeatureTerminalDisposition> {
  const admission = await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
  const admittedRequest = await context.edges.invokes(
    "adapt-new-feature-request-admission",
    admission
  );
  const authority = await context.edges.invokes(
    "project-complete-new-feature-authority",
    admittedRequest
  );
  const materialization = await context.edges.invokes(
    "materialize-complete-new-feature",
    authority
  );
  const execution = await context.edges.invokes(
    "execute-newly-materialized-feature",
    materialization
  );
  const comparison = await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    execution
  );
  const disposition = await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    comparison
  );
  return disposition;
}

```

### Projected responsibility bodies

| Sequence | Responsibility | Input | Output | Projected artifact |
| --- | --- | --- | --- | --- |
| 1 | admits-reviewed-new-feature-request | reviewed-new-feature-request.v1 | new-feature-request-admission.v1 | src/new-feature-request-admission.ts |
| 2 | projects-complete-new-feature-authority | admitted-new-feature-request.v1 | complete-new-feature-authority.v1 | src/complete-new-feature-authority.ts |
| 3 | materializes-complete-new-feature | complete-new-feature-authority.v1 | complete-new-feature-materialization.v1 | src/complete-new-feature-materialization.ts |
| 4 | executes-newly-materialized-feature | complete-new-feature-materialization.v1 | observed-new-feature-execution.v1 | src/observed-new-feature-execution.ts |
| 5 | verifies-complete-new-feature-lineage | new-feature-execution-comparison.v1 | new-feature-terminal-disposition.v1 | src/complete-new-feature-lineage.ts |

### File-body system

```text
Canonical authority graph

[RESP] Responsibility ──owns──► [SA] Semantic Authority
[SA] Semantic Authority ──projects──► [FB] Feature Body Authority
[FB] Feature Body Authority ──projects──► [AST] Projected AST
[AST] Projected AST ──projects──► [TS] Projected Runtime Body
[TS] Projected Runtime Body ──requires──► [TYPE] Projected Type Definitions
[TS] Projected Runtime Body ──participates-in──► [REG] Runtime Registration
[FEATURE] Feature Execution Authority ──projects──► [FLOW] Feature Execution Body
[FLOW] Feature Execution Body ──requires──► [PORT] Runtime Adapter

Responsibility projection conveyors

Scenario
└── admit-one-reviewed-new-feature-request
    │
    └── Responsibility
        └── admits-reviewed-new-feature-request
            │
            ├─► [SA] Semantic Authority
            │      admit-reviewed-new-feature-request.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      new-feature-request-admission.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      new-feature-request-admission.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      new-feature-request-admission.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      new-feature-request-admission.ts
            │
            └─► [REG] Runtime Registration
                   registers-admit-reviewed-new-feature-request.ts

Scenario
└── project-one-complete-new-feature-authority
    │
    └── Responsibility
        └── projects-complete-new-feature-authority
            │
            ├─► [SA] Semantic Authority
            │      project-complete-new-feature-authority.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-authority.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-authority.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-authority.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-authority.ts
            │
            └─► [REG] Runtime Registration
                   registers-project-complete-new-feature-authority.ts

Scenario
└── materialize-one-complete-new-feature
    │
    └── Responsibility
        └── materializes-complete-new-feature
            │
            ├─► [SA] Semantic Authority
            │      materialize-complete-new-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-materialization.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-materialization.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-materialization.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-materialization.ts
            │
            └─► [REG] Runtime Registration
                   registers-materialize-complete-new-feature.ts

Scenario
└── execute-one-newly-materialized-feature
    │
    └── Responsibility
        └── executes-newly-materialized-feature
            │
            ├─► [SA] Semantic Authority
            │      execute-newly-materialized-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      observed-new-feature-execution.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      observed-new-feature-execution.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      observed-new-feature-execution.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      observed-new-feature-execution.ts
            │
            └─► [REG] Runtime Registration
                   registers-execute-newly-materialized-feature.ts

Scenario
└── verify-one-complete-new-feature-lineage
    │
    └── Responsibility
        └── verifies-complete-new-feature-lineage
            │
            ├─► [SA] Semantic Authority
            │      verify-complete-new-feature-lineage.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-lineage.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-lineage.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-lineage.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-lineage.ts
            │
            └─► [REG] Runtime Registration
                   registers-verify-complete-new-feature-lineage.ts

Feature-level execution
├─► [FLOW] Feature Execution Body
│      composition/executes-end-to-end-canonical-feature-conveyor.ts
│
└─► [PORT] Runtime Adapter
       runtime/invokes-canonical-feature-conveyor.ts
```

### How the document gets there

```text
1. capture-intent
   |
   v
2. declare-outcome
   |
   v
3. establish-feature
   |
   v
4. establish-scenarios
   |
   v
5. decompose-obligations
   |
   v
6. declare-expectations
   |
   v
7. assign-responsibilities
   |
   v
8. declare-signals
   |
   v
9. author-semantic-authority
   |
   v
10. author-semantic-execution
   |
   v
11. author-feature-body-authority
   |
   v
12. resolve-language-projection
   |
   v
13. project-expected-ast
   |
   v
14. project-expected-code
   |
   v
15. evaluate-semantic-execution
   |
   v
16. evaluate-projected-execution
   |
   v
17. evaluate-translation-conformance
   |
   v
18. review-feature
```

## Construction state

```json
{
  "currentStage": "review-feature",
  "completedStages": [
    "capture-intent",
    "declare-outcome",
    "establish-feature",
    "establish-scenarios",
    "decompose-obligations",
    "declare-expectations",
    "assign-responsibilities",
    "declare-signals",
    "author-semantic-authority",
    "author-semantic-execution",
    "author-feature-body-authority",
    "resolve-language-projection",
    "project-expected-ast",
    "project-expected-code",
    "evaluate-semantic-execution",
    "evaluate-projected-execution",
    "evaluate-translation-conformance"
  ],
  "eligibleNextStages": [
    "review-feature"
  ]
}
```

## Canonical conveyor flow

```text
1. capture-intent
   |
   v
2. declare-outcome
   |
   v
3. establish-feature
   |
   v
4. establish-scenarios
   |
   v
5. decompose-obligations
   |
   v
6. declare-expectations
   |
   v
7. assign-responsibilities
   |
   v
8. declare-signals
   |
   v
9. author-semantic-authority
   |
   v
10. author-semantic-execution
   |
   v
11. author-feature-body-authority
   |
   v
12. resolve-language-projection
   |
   v
13. project-expected-ast
   |
   v
14. project-expected-code
   |
   v
15. evaluate-semantic-execution
   |
   v
16. evaluate-projected-execution
   |
   v
17. evaluate-translation-conformance
   |
   v
18. review-feature
```

## 1. Intent

```text
Stage ID: capture-intent
Purpose: Capture the human need without introducing implementation technology.
Authorized inputs: none
Required prior products: none
Required output: intent
Stop condition: one implementation-neutral intent is complete
```

Review questions:

- Is the need expressed without language, framework, file, or provider decisions?

Actor: reviewer of authority-projected software

Trigger: one previously nonexistent reviewed feature is submitted to the governed conveyor

Need: construct the complete canonical feature and its executable embodiment in admitted causal order

Purpose: prove that the conveyor can build new behavior without bypassing authority or inventing meaning during projection

Constraints:

- intent and canonical behavior remain language-neutral
- no construction stage may consume an output that has not been admitted
- language projection introduces no meaning absent from canonical authority
- execution cannot read the expected result to manufacture its observed result

## 2. Desired outcome

```text
Stage ID: declare-outcome
Purpose: State the observable condition that satisfies the admitted intent.
Authorized inputs: intent
Required prior products: intent
Required output: desired-outcome
Stop condition: one desired outcome and its observable state are complete
```

Review questions:

- Is the outcome observable without prescribing its implementation?

Outcome ID: `complete-new-feature-is-canonically-constructed`

One previously nonexistent reviewed feature is constructed, projected, executed, and reviewed entirely from admitted canonical authority.

Observable state:

- the canonical feature and every focused scenario are visible
- every obligation, expectation, responsibility, signal, and semantic execution is visible
- every language-neutral body, expected AST, and expected source projection is visible
- semantic execution, projected execution, and declared expectations are canonically equivalent

## 3. Canonical feature

```text
Stage ID: establish-feature
Purpose: Establish one canonical feature identity and user story from the admitted outcome.
Authorized inputs: intent, desired-outcome
Required prior products: desired-outcome
Required output: canonical-feature
Stop condition: one canonical feature identity, story, and governing obligation are complete
```

Review questions:

- Does the feature preserve the intent and desired outcome without adding implementation meaning?

```json
{
  "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
  "title": "Implement one new feature end to end through a governed conveyor",
  "userStory": {
    "asA": "reviewer of authority-projected software",
    "iWant": "one previously nonexistent reviewed feature implemented through the governed conveyor",
    "soThat": "its executable behavior and complete origin can be independently reproduced and reviewed"
  },
  "governingObligation": "Every accepted construction begins with reviewed intent, advances only through eligible stages, and conserves canonical meaning through semantic and projected execution."
}
```

## 4. Scenarios

```text
Stage ID: establish-scenarios
Purpose: Decompose the feature into focused observable behavior transitions.
Authorized inputs: canonical-feature
Required prior products: canonical-feature
Required output: canonical-scenarios
Stop condition: every required feature behavior is represented by one focused scenario
```

Review questions:

- Does every scenario contain focused preconditions, one responsibility transition, and observable outcomes?

```gherkin
Feature: Implement one new feature end to end through a governed conveyor
  As a reviewer of authority-projected software
  I want one previously nonexistent reviewed feature implemented through the governed conveyor
  So that its executable behavior and complete origin can be independently reproduced and reviewed

  Background:
    Given review authority is supplied independently of the feature implementation
    And construction, semantic, language, and runtime profiles are pinned

  @scenario-id:admit-one-reviewed-new-feature-request
  Scenario: Admit one reviewed new-feature request
    Given one instructor-reviewed new-feature request
    And its feature identity is absent from the implementation root
    When the request is evaluated against construction eligibility
    Then one new-feature request admission is observed

  @scenario-id:project-one-complete-new-feature-authority
  Scenario: Project one complete new-feature authority
    Given one admitted reviewed new-feature request
    When the admitted request is projected through every canonical construction stage
    Then one complete canonical new-feature authority is observed

  @scenario-id:materialize-one-complete-new-feature
  Scenario: Materialize one complete new feature
    Given one admitted complete new-feature authority
    And one empty controlled materialization root
    When every admitted body and language projection is materialized
    Then one complete projected new-feature materialization is observed

  @scenario-id:execute-one-newly-materialized-feature
  Scenario: Execute one newly materialized feature
    Given one complete new-feature materialization
    And one admitted runtime composition
    When the materialized feature executes through its admitted semantic edges
    Then one new-feature execution observation is produced

  @scenario-id:verify-one-complete-new-feature-lineage
  Scenario: Verify one complete new-feature lineage
    Given one direct semantic evaluation
    And one independently observed projected evaluation
    When their expectation, execution, AST, and code relationships are reviewed
    Then one terminal canonical-feature construction disposition is produced
```

Scenario circuits:

### admit-one-reviewed-new-feature-request

```text
admit-one-reviewed-new-feature-request
  |
  v
establish-one-eligible-new-feature-request
  |
  v
expect-one-new-feature-request-admission
  |
  v
admits-reviewed-new-feature-request
  |
  v
new-feature-request-admission
```

### project-one-complete-new-feature-authority

```text
project-one-complete-new-feature-authority
  |
  v
establish-one-complete-new-feature-authority
  |
  v
expect-one-complete-new-feature-authority
  |
  v
projects-complete-new-feature-authority
  |
  v
complete-new-feature-authority
```

### materialize-one-complete-new-feature

```text
materialize-one-complete-new-feature
  |
  v
materialize-only-admitted-new-feature-authority
  |
  v
expect-one-complete-new-feature-materialization
  |
  v
materializes-complete-new-feature
  |
  v
complete-new-feature-materialization
```

### execute-one-newly-materialized-feature

```text
execute-one-newly-materialized-feature
  |
  v
execute-new-feature-through-admitted-semantics
  |
  v
expect-one-observed-new-feature-execution
  |
  v
executes-newly-materialized-feature
  |
  v
observed-new-feature-execution
```

### verify-one-complete-new-feature-lineage

```text
verify-one-complete-new-feature-lineage
  |
  v
prove-complete-new-feature-equivalence
  |
  v
expect-complete-new-feature-equivalence
  |
  v
verifies-complete-new-feature-lineage
  |
  v
complete-new-feature-equivalence
```

## 5. Obligations

```text
Stage ID: decompose-obligations
Purpose: Extract exactly one governing obligation from every scenario.
Authorized inputs: canonical-scenarios
Required prior products: canonical-scenarios
Required output: scenario-obligations
Stop condition: every scenario has one complete obligation
```

Review questions:

- Does each obligation express exactly the meaning that its scenario requires?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "obligation": {
    "obligationId": "establish-one-eligible-new-feature-request",
    "statement": "Only one complete, reviewed, previously nonexistent feature request may enter construction."
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "obligation": {
    "obligationId": "establish-one-complete-new-feature-authority",
    "statement": "The admitted request must produce complete feature, scenario, obligation, expectation, responsibility, signal, and semantic authority."
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "obligation": {
    "obligationId": "materialize-only-admitted-new-feature-authority",
    "statement": "Materialization must derive every executable body from admitted feature-body and AST authority."
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "obligation": {
    "obligationId": "execute-new-feature-through-admitted-semantics",
    "statement": "Projected execution must use the same admitted semantic responsibility exercised by direct semantic evaluation."
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "obligation": {
    "obligationId": "prove-complete-new-feature-equivalence",
    "statement": "Declared expectation, direct semantic execution, and projected execution must be canonically equivalent."
  }
}
```

## 6. Expectations

```text
Stage ID: declare-expectations
Purpose: Declare the disposition expected when each scenario obligation is satisfied.
Authorized inputs: canonical-scenarios, scenario-obligations
Required prior products: scenario-obligations
Required output: scenario-expectations
Stop condition: every scenario has one expectation bound to one signal
```

Review questions:

- Is each expected disposition independently comparable with observed execution?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "expectation": {
    "expectationId": "expect-one-new-feature-request-admission",
    "signalId": "new-feature-request-admission",
    "expectedDisposition": "ADMITTED"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-authority",
    "signalId": "complete-new-feature-authority",
    "expectedDisposition": "COMPLETE"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-materialization",
    "signalId": "complete-new-feature-materialization",
    "expectedDisposition": "MATERIALIZED"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "expectation": {
    "expectationId": "expect-one-observed-new-feature-execution",
    "signalId": "observed-new-feature-execution",
    "expectedDisposition": "CONFORMS"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "expectation": {
    "expectationId": "expect-complete-new-feature-equivalence",
    "signalId": "complete-new-feature-equivalence",
    "expectedDisposition": "PROJECTION_CONFORMS"
  }
}
```

## 7. Responsibilities

```text
Stage ID: assign-responsibilities
Purpose: Assign one accountable responsibility to satisfy each admitted obligation.
Authorized inputs: scenario-obligations, scenario-expectations
Required prior products: scenario-expectations
Required output: scenario-responsibilities
Stop condition: every obligation has one responsible semantic operation
```

Review questions:

- Does each responsibility own one semantic transition and no unrelated policy?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "responsibility": {
    "responsibilityId": "admits-reviewed-new-feature-request",
    "kind": "admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "responsibility": {
    "responsibilityId": "projects-complete-new-feature-authority",
    "kind": "projection",
    "semanticOperationId": "project-complete-new-feature-authority"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "responsibility": {
    "responsibilityId": "materializes-complete-new-feature",
    "kind": "projection",
    "semanticOperationId": "materialize-complete-new-feature"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "responsibility": {
    "responsibilityId": "executes-newly-materialized-feature",
    "kind": "execution",
    "semanticOperationId": "execute-newly-materialized-feature"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "responsibility": {
    "responsibilityId": "verifies-complete-new-feature-lineage",
    "kind": "conformance",
    "semanticOperationId": "verify-complete-new-feature-lineage"
  }
}
```

## 8. Signals

```text
Stage ID: declare-signals
Purpose: Declare the observable signal produced by every responsibility.
Authorized inputs: scenario-expectations, scenario-responsibilities
Required prior products: scenario-responsibilities
Required output: scenario-signals
Stop condition: every responsibility produces one expectation-bound signal
```

Review questions:

- Can every declared signal be observed without reading the expectation during execution?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "signal": {
    "signalId": "new-feature-request-admission",
    "statement": "The reviewed request is admitted or rejected with one deterministic disposition."
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "signal": {
    "signalId": "complete-new-feature-authority",
    "statement": "Every required canonical construction product exists and is causally linked."
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "signal": {
    "signalId": "complete-new-feature-materialization",
    "statement": "Every expected artifact exists and reproduces its admitted AST."
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "signal": {
    "signalId": "observed-new-feature-execution",
    "statement": "The projected feature produces the same observable signal as direct semantic execution."
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "signal": {
    "signalId": "complete-new-feature-equivalence",
    "statement": "Canonical meaning is conserved across authority, AST, source, and both execution surfaces."
  }
}
```

## 9. Semantic authority

```text
Stage ID: author-semantic-authority
Purpose: Define the language-neutral observations, decisions, and projections owned by every responsibility.
Authorized inputs: scenario-responsibilities, scenario-signals
Required prior products: scenario-signals
Required output: semantic-authority
Stop condition: every responsibility has complete language-neutral semantic authority
```

Review questions:

- Does semantic authority own every decision and result shape required by the responsibility?

### admits-reviewed-new-feature-request

```json
{
  "responsibilityId": "admits-reviewed-new-feature-request",
  "accepts": {
    "contractId": "reviewed-new-feature-request.v1"
  },
  "produces": {
    "contractId": "new-feature-request-admission.v1"
  },
  "observations": [
    {
      "observationId": "observe-reviewed-request",
      "sourceRef": "scenario:admit-one-reviewed-new-feature-request"
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-request-admission",
      "inputs": [
        "$.input.reviewDisposition",
        "$.input.existingFeatureIds"
      ],
      "rules": [
        {
          "ruleId": "resolve-request-admission-success",
          "when": {
            "allRequiredInputsConform": true
          },
          "then": "ADMITTED"
        },
        {
          "ruleId": "resolve-request-admission-fallback",
          "when": {
            "*": true
          },
          "then": "REJECTED"
        }
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-request-admission",
      "from": "resolve-request-admission",
      "to": "new-feature-request-admission.v1",
      "fields": {
        "responsibilityId": "$.responsibilityId",
        "signalId": "$.signalId",
        "disposition": "$.decision.disposition"
      }
    }
  ]
}
```

### projects-complete-new-feature-authority

```json
{
  "responsibilityId": "projects-complete-new-feature-authority",
  "accepts": {
    "contractId": "admitted-new-feature-request.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "observations": [
    {
      "observationId": "observe-admitted-request",
      "sourceRef": "scenario:project-one-complete-new-feature-authority"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-authority",
      "from": "observe-admitted-request",
      "to": "complete-new-feature-authority.v1",
      "fields": {
        "responsibilityId": "$.responsibilityId",
        "signalId": "$.signalId",
        "disposition": "$.observed.disposition"
      }
    }
  ]
}
```

### materializes-complete-new-feature

```json
{
  "responsibilityId": "materializes-complete-new-feature",
  "accepts": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "observations": [
    {
      "observationId": "observe-complete-feature-authority",
      "sourceRef": "scenario:materialize-one-complete-new-feature"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-materialization",
      "from": "observe-complete-feature-authority",
      "to": "complete-new-feature-materialization.v1",
      "fields": {
        "responsibilityId": "$.responsibilityId",
        "signalId": "$.signalId",
        "disposition": "$.observed.disposition"
      }
    }
  ]
}
```

### executes-newly-materialized-feature

```json
{
  "responsibilityId": "executes-newly-materialized-feature",
  "accepts": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "produces": {
    "contractId": "observed-new-feature-execution.v1"
  },
  "observations": [
    {
      "observationId": "observe-materialized-feature",
      "sourceRef": "scenario:execute-one-newly-materialized-feature"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-execution-observation",
      "from": "observe-materialized-feature",
      "to": "observed-new-feature-execution.v1",
      "fields": {
        "responsibilityId": "$.responsibilityId",
        "signalId": "$.signalId",
        "disposition": "$.observed.disposition"
      }
    }
  ]
}
```

### verifies-complete-new-feature-lineage

```json
{
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "accepts": {
    "contractId": "new-feature-execution-comparison.v1"
  },
  "produces": {
    "contractId": "new-feature-terminal-disposition.v1"
  },
  "observations": [
    {
      "observationId": "observe-execution-comparison",
      "sourceRef": "scenario:verify-one-complete-new-feature-lineage"
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-terminal-disposition",
      "inputs": [
        "$.input.reviewDisposition",
        "$.input.existingFeatureIds"
      ],
      "rules": [
        {
          "ruleId": "resolve-terminal-disposition-success",
          "when": {
            "allRequiredInputsConform": true
          },
          "then": "PROJECTION_CONFORMS"
        },
        {
          "ruleId": "resolve-terminal-disposition-fallback",
          "when": {
            "*": true
          },
          "then": "PROJECTION_DIVERGES"
        }
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-terminal-disposition",
      "from": "resolve-terminal-disposition",
      "to": "new-feature-terminal-disposition.v1",
      "fields": {
        "responsibilityId": "$.responsibilityId",
        "signalId": "$.signalId",
        "disposition": "$.decision.disposition"
      }
    }
  ]
}
```

## 10. Semantic execution

```text
Stage ID: author-semantic-execution
Purpose: Order the admitted semantic operations into directly executable models.
Authorized inputs: semantic-authority
Required prior products: semantic-authority
Required output: semantic-execution
Stop condition: every semantic authority has one deterministic execution model
```

Review questions:

- Can the semantic model execute directly without projected source code?

### admits-reviewed-new-feature-request

```json
{
  "executionModelId": "admit-reviewed-new-feature-request",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-reviewed-request",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "resolve-decision",
      "authorityId": "resolve-request-admission",
      "input": "$.observed",
      "assign": "$.decision"
    },
    {
      "sequence": 3,
      "operation": "project-result",
      "authorityId": "project-request-admission",
      "input": "$.decision",
      "assign": "$.result"
    }
  ]
}
```

### projects-complete-new-feature-authority

```json
{
  "executionModelId": "project-complete-new-feature-authority",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-admitted-request",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-complete-feature-authority",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### materializes-complete-new-feature

```json
{
  "executionModelId": "materialize-complete-new-feature",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-complete-feature-authority",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-complete-feature-materialization",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### executes-newly-materialized-feature

```json
{
  "executionModelId": "execute-newly-materialized-feature",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-materialized-feature",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-execution-observation",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### verifies-complete-new-feature-lineage

```json
{
  "executionModelId": "verify-complete-new-feature-lineage",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-execution-comparison",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "resolve-decision",
      "authorityId": "resolve-terminal-disposition",
      "input": "$.observed",
      "assign": "$.decision"
    },
    {
      "sequence": 3,
      "operation": "project-result",
      "authorityId": "project-terminal-disposition",
      "input": "$.decision",
      "assign": "$.result"
    }
  ]
}
```

## 11. Feature-body authority

```text
Stage ID: author-feature-body-authority
Purpose: Collapse each semantic execution edge into one language-neutral executable body.
Authorized inputs: scenario-responsibilities, semantic-execution
Required prior products: semantic-execution
Required output: feature-body-authority
Stop condition: every responsibility has one complete constrained feature body
```

Review questions:

- Does each body invoke only its admitted semantic edge and introduce no domain meaning?

### new-feature-request-admission

```json
{
  "bodyId": "new-feature-request-admission",
  "responsibilityId": "admits-reviewed-new-feature-request",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "admit-reviewed-new-feature-request-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "admit-reviewed-new-feature-request",
      "input": "$.context",
      "assign": "admission"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.admission"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-authority

```json
{
  "bodyId": "complete-new-feature-authority",
  "responsibilityId": "projects-complete-new-feature-authority",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "project-complete-new-feature-authority-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "project-complete-new-feature-authority",
      "input": "$.context",
      "assign": "authority"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.authority"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-materialization

```json
{
  "bodyId": "complete-new-feature-materialization",
  "responsibilityId": "materializes-complete-new-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "materialize-complete-new-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "materialize-complete-new-feature",
      "input": "$.context",
      "assign": "materialization"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.materialization"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### observed-new-feature-execution

```json
{
  "bodyId": "observed-new-feature-execution",
  "responsibilityId": "executes-newly-materialized-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "execute-newly-materialized-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "execute-newly-materialized-feature",
      "input": "$.context",
      "assign": "observation"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.observation"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-lineage

```json
{
  "bodyId": "complete-new-feature-lineage",
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "verify-complete-new-feature-lineage-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "verify-complete-new-feature-lineage",
      "input": "$.context",
      "assign": "disposition"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.disposition"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

Governed file-body system:

```text
Canonical authority graph

[RESP] Responsibility ──owns──► [SA] Semantic Authority
[SA] Semantic Authority ──projects──► [FB] Feature Body Authority
[FB] Feature Body Authority ──projects──► [AST] Projected AST
[AST] Projected AST ──projects──► [TS] Projected Runtime Body
[TS] Projected Runtime Body ──requires──► [TYPE] Projected Type Definitions
[TS] Projected Runtime Body ──participates-in──► [REG] Runtime Registration
[FEATURE] Feature Execution Authority ──projects──► [FLOW] Feature Execution Body
[FLOW] Feature Execution Body ──requires──► [PORT] Runtime Adapter

Responsibility projection conveyors

Scenario
└── admit-one-reviewed-new-feature-request
    │
    └── Responsibility
        └── admits-reviewed-new-feature-request
            │
            ├─► [SA] Semantic Authority
            │      admit-reviewed-new-feature-request.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      new-feature-request-admission.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      new-feature-request-admission.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      new-feature-request-admission.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      new-feature-request-admission.ts
            │
            └─► [REG] Runtime Registration
                   registers-admit-reviewed-new-feature-request.ts

Scenario
└── project-one-complete-new-feature-authority
    │
    └── Responsibility
        └── projects-complete-new-feature-authority
            │
            ├─► [SA] Semantic Authority
            │      project-complete-new-feature-authority.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-authority.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-authority.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-authority.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-authority.ts
            │
            └─► [REG] Runtime Registration
                   registers-project-complete-new-feature-authority.ts

Scenario
└── materialize-one-complete-new-feature
    │
    └── Responsibility
        └── materializes-complete-new-feature
            │
            ├─► [SA] Semantic Authority
            │      materialize-complete-new-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-materialization.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-materialization.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-materialization.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-materialization.ts
            │
            └─► [REG] Runtime Registration
                   registers-materialize-complete-new-feature.ts

Scenario
└── execute-one-newly-materialized-feature
    │
    └── Responsibility
        └── executes-newly-materialized-feature
            │
            ├─► [SA] Semantic Authority
            │      execute-newly-materialized-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      observed-new-feature-execution.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      observed-new-feature-execution.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      observed-new-feature-execution.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      observed-new-feature-execution.ts
            │
            └─► [REG] Runtime Registration
                   registers-execute-newly-materialized-feature.ts

Scenario
└── verify-one-complete-new-feature-lineage
    │
    └── Responsibility
        └── verifies-complete-new-feature-lineage
            │
            ├─► [SA] Semantic Authority
            │      verify-complete-new-feature-lineage.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      complete-new-feature-lineage.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      complete-new-feature-lineage.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      complete-new-feature-lineage.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      complete-new-feature-lineage.ts
            │
            └─► [REG] Runtime Registration
                   registers-verify-complete-new-feature-lineage.ts

Feature-level execution
├─► [FLOW] Feature Execution Body
│      composition/executes-end-to-end-canonical-feature-conveyor.ts
│
└─► [PORT] Runtime Adapter
       runtime/invokes-canonical-feature-conveyor.ts
```

## 12. Language projection authority

```text
Stage ID: resolve-language-projection
Purpose: Bind each feature body to one admitted language and module profile.
Authorized inputs: feature-body-authority
Required prior products: feature-body-authority
Required output: language-projection-authority
Stop condition: every feature body has one admitted language projection
```

Review questions:

- Does the selected language profile translate the body without changing its meaning?

```json
[
  {
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "targetLanguage": "typescript",
    "moduleProfile": "typescript-esm",
    "bodyKind": "scenario-responsibility",
    "mappings": [
      {
        "ruleId": "body-to-exported-async-function",
        "source": "scenario-responsibility body",
        "target": "exported async FunctionDeclaration"
      },
      {
        "ruleId": "context-to-parameter",
        "source": "body.context",
        "target": "one immutable function parameter"
      },
      {
        "ruleId": "semantic-edge-to-call",
        "source": "invoke-semantic-edge",
        "target": "context.edges.invokes CallExpression"
      },
      {
        "ruleId": "edge-id-to-string-literal",
        "source": "invoke-semantic-edge.edgeId",
        "target": "first call argument StringLiteral"
      },
      {
        "ruleId": "context-input-to-identifier",
        "source": "invoke-semantic-edge.input $.context",
        "target": "second call argument context Identifier"
      },
      {
        "ruleId": "asynchronous-invocation-to-await",
        "source": "semantic edge invocation",
        "target": "AwaitExpression"
      },
      {
        "ruleId": "return-operation-to-return-statement",
        "source": "return operation",
        "target": "ReturnStatement containing awaited invocation"
      }
    ],
    "namingRules": {
      "functionName": "camel-case(responsibilityId)",
      "contextType": "resolve(typeResolution.contextType)",
      "resultType": "resolve(typeResolution.resultType)"
    }
  }
]
```

Production projector invocations:

```json
[
  {
    "bodyId": "new-feature-request-admission",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "../declarative-typescript-body-projector/dist/bootstrap/executes-semantic-ast-projection.js",
      "executableSha256": "sha256:b31e96525788a7d2bd1030208441de32b034526ef36313510e8c6449991e8382"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:new-feature-request-admission",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-new-feature-request-admission-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "src/new-feature-request-admission.ts"
        },
        "lineage": {
          "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
          "scenarioId": "admit-one-reviewed-new-feature-request",
          "obligationId": "establish-one-eligible-new-feature-request",
          "responsibilityId": "admits-reviewed-new-feature-request",
          "signalId": "new-feature-request-admission"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./new-feature-request-admission.type.js",
            "namedBindings": [
              "AdmitReviewedNewFeatureRequestContext",
              "NewFeatureRequestAdmission"
            ]
          }
        ],
        "function": {
          "identity": "new-feature-request-admission",
          "name": "admitsReviewedNewFeatureRequest",
          "contextParameter": {
            "name": "context",
            "typeReference": "AdmitReviewedNewFeatureRequestContext"
          },
          "resultTypeReference": "NewFeatureRequestAdmission",
          "semanticEdgeId": "admit-reviewed-new-feature-request",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "src/new-feature-request-admission.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "AdmitReviewedNewFeatureRequestContext",
      "resultType": "NewFeatureRequestAdmission"
    }
  },
  {
    "bodyId": "complete-new-feature-authority",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "../declarative-typescript-body-projector/dist/bootstrap/executes-semantic-ast-projection.js",
      "executableSha256": "sha256:b31e96525788a7d2bd1030208441de32b034526ef36313510e8c6449991e8382"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-authority",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-authority-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "src/complete-new-feature-authority.ts"
        },
        "lineage": {
          "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
          "scenarioId": "project-one-complete-new-feature-authority",
          "obligationId": "establish-one-complete-new-feature-authority",
          "responsibilityId": "projects-complete-new-feature-authority",
          "signalId": "complete-new-feature-authority"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-authority.type.js",
            "namedBindings": [
              "ProjectCompleteNewFeatureAuthorityContext",
              "CompleteNewFeatureAuthority"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-authority",
          "name": "projectsCompleteNewFeatureAuthority",
          "contextParameter": {
            "name": "context",
            "typeReference": "ProjectCompleteNewFeatureAuthorityContext"
          },
          "resultTypeReference": "CompleteNewFeatureAuthority",
          "semanticEdgeId": "project-complete-new-feature-authority",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "src/complete-new-feature-authority.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "ProjectCompleteNewFeatureAuthorityContext",
      "resultType": "CompleteNewFeatureAuthority"
    }
  },
  {
    "bodyId": "complete-new-feature-materialization",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "../declarative-typescript-body-projector/dist/bootstrap/executes-semantic-ast-projection.js",
      "executableSha256": "sha256:b31e96525788a7d2bd1030208441de32b034526ef36313510e8c6449991e8382"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-materialization",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-materialization-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "src/complete-new-feature-materialization.ts"
        },
        "lineage": {
          "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
          "scenarioId": "materialize-one-complete-new-feature",
          "obligationId": "materialize-only-admitted-new-feature-authority",
          "responsibilityId": "materializes-complete-new-feature",
          "signalId": "complete-new-feature-materialization"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-materialization.type.js",
            "namedBindings": [
              "MaterializeCompleteNewFeatureContext",
              "CompleteNewFeatureMaterialization"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-materialization",
          "name": "materializesCompleteNewFeature",
          "contextParameter": {
            "name": "context",
            "typeReference": "MaterializeCompleteNewFeatureContext"
          },
          "resultTypeReference": "CompleteNewFeatureMaterialization",
          "semanticEdgeId": "materialize-complete-new-feature",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "src/complete-new-feature-materialization.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "MaterializeCompleteNewFeatureContext",
      "resultType": "CompleteNewFeatureMaterialization"
    }
  },
  {
    "bodyId": "observed-new-feature-execution",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "../declarative-typescript-body-projector/dist/bootstrap/executes-semantic-ast-projection.js",
      "executableSha256": "sha256:b31e96525788a7d2bd1030208441de32b034526ef36313510e8c6449991e8382"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:observed-new-feature-execution",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-observed-new-feature-execution-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "src/observed-new-feature-execution.ts"
        },
        "lineage": {
          "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
          "scenarioId": "execute-one-newly-materialized-feature",
          "obligationId": "execute-new-feature-through-admitted-semantics",
          "responsibilityId": "executes-newly-materialized-feature",
          "signalId": "observed-new-feature-execution"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./observed-new-feature-execution.type.js",
            "namedBindings": [
              "ExecuteNewlyMaterializedFeatureContext",
              "ObservedNewFeatureExecution"
            ]
          }
        ],
        "function": {
          "identity": "observed-new-feature-execution",
          "name": "executesNewlyMaterializedFeature",
          "contextParameter": {
            "name": "context",
            "typeReference": "ExecuteNewlyMaterializedFeatureContext"
          },
          "resultTypeReference": "ObservedNewFeatureExecution",
          "semanticEdgeId": "execute-newly-materialized-feature",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "src/observed-new-feature-execution.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "ExecuteNewlyMaterializedFeatureContext",
      "resultType": "ObservedNewFeatureExecution"
    }
  },
  {
    "bodyId": "complete-new-feature-lineage",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "../declarative-typescript-body-projector/dist/bootstrap/executes-semantic-ast-projection.js",
      "executableSha256": "sha256:b31e96525788a7d2bd1030208441de32b034526ef36313510e8c6449991e8382"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-lineage",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-lineage-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "src/complete-new-feature-lineage.ts"
        },
        "lineage": {
          "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
          "scenarioId": "verify-one-complete-new-feature-lineage",
          "obligationId": "prove-complete-new-feature-equivalence",
          "responsibilityId": "verifies-complete-new-feature-lineage",
          "signalId": "complete-new-feature-equivalence"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-lineage.type.js",
            "namedBindings": [
              "VerifyCompleteNewFeatureLineageContext",
              "NewFeatureTerminalDisposition"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-lineage",
          "name": "verifiesCompleteNewFeatureLineage",
          "contextParameter": {
            "name": "context",
            "typeReference": "VerifyCompleteNewFeatureLineageContext"
          },
          "resultTypeReference": "NewFeatureTerminalDisposition",
          "semanticEdgeId": "verify-complete-new-feature-lineage",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "src/complete-new-feature-lineage.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "VerifyCompleteNewFeatureLineageContext",
      "resultType": "NewFeatureTerminalDisposition"
    }
  }
]
```

## 13. Derived AST

```text
Stage ID: project-expected-ast
Purpose: Project each feature body into the complete expected language AST.
Authorized inputs: feature-body-authority, language-projection-authority
Required prior products: language-projection-authority
Required output: expected-ast
Stop condition: every projected body has one complete expected AST
```

Review questions:

- Can every AST node be traced to feature-body authority?

```text
new-feature-request-admission
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
new-feature-request-admission.projectedAst
  | production source printer
  v
src/new-feature-request-admission.ts

complete-new-feature-authority
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-authority.projectedAst
  | production source printer
  v
src/complete-new-feature-authority.ts

complete-new-feature-materialization
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-materialization.projectedAst
  | production source printer
  v
src/complete-new-feature-materialization.ts

observed-new-feature-execution
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
observed-new-feature-execution.projectedAst
  | production source printer
  v
src/observed-new-feature-execution.ts

complete-new-feature-lineage
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-lineage.projectedAst
  | production source printer
  v
src/complete-new-feature-lineage.ts
```

### new-feature-request-admission

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: admit-one-reviewed-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: establish-one-eligible-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: admits-reviewed-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: new-feature-request-admission"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./new-feature-request-admission.type.js",
      "namedBindings": [
        "AdmitReviewedNewFeatureRequestContext",
        "NewFeatureRequestAdmission"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "new-feature-request-admission",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "admitsReviewedNewFeatureRequest",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "AdmitReviewedNewFeatureRequestContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "NewFeatureRequestAdmission"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "admit-reviewed-new-feature-request",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-authority

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: project-one-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: establish-one-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: projects-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-authority.type.js",
      "namedBindings": [
        "ProjectCompleteNewFeatureAuthorityContext",
        "CompleteNewFeatureAuthority"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-authority",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "projectsCompleteNewFeatureAuthority",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "ProjectCompleteNewFeatureAuthorityContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "CompleteNewFeatureAuthority"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "project-complete-new-feature-authority",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-materialization

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: materialize-one-complete-new-feature"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: materialize-only-admitted-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: materializes-complete-new-feature"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-materialization"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-materialization.type.js",
      "namedBindings": [
        "MaterializeCompleteNewFeatureContext",
        "CompleteNewFeatureMaterialization"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-materialization",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "materializesCompleteNewFeature",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "MaterializeCompleteNewFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "CompleteNewFeatureMaterialization"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "materialize-complete-new-feature",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### observed-new-feature-execution

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: execute-one-newly-materialized-feature"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: execute-new-feature-through-admitted-semantics"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: executes-newly-materialized-feature"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: observed-new-feature-execution"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./observed-new-feature-execution.type.js",
      "namedBindings": [
        "ExecuteNewlyMaterializedFeatureContext",
        "ObservedNewFeatureExecution"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "observed-new-feature-execution",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "executesNewlyMaterializedFeature",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "ExecuteNewlyMaterializedFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "ObservedNewFeatureExecution"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "execute-newly-materialized-feature",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-lineage

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: verify-one-complete-new-feature-lineage"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: prove-complete-new-feature-equivalence"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: verifies-complete-new-feature-lineage"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-equivalence"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-lineage.type.js",
      "namedBindings": [
        "VerifyCompleteNewFeatureLineageContext",
        "NewFeatureTerminalDisposition"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-lineage",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "verifiesCompleteNewFeatureLineage",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "VerifyCompleteNewFeatureLineageContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "NewFeatureTerminalDisposition"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "verify-complete-new-feature-lineage",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

## 14. Production-projector code

```text
Stage ID: project-expected-code
Purpose: Render expected source code exclusively from the admitted AST.
Authorized inputs: expected-ast
Required prior products: expected-ast
Required output: expected-code
Stop condition: every expected AST renders one deterministic source body
```

Review questions:

- Does every source construct come from the expected AST with no hand-authored additions?

### src/new-feature-request-admission.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

### src/new-feature-request-admission.type.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
export interface AdmitReviewedNewFeatureRequestContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdmitReviewedNewFeatureRequestContext) => Promise<NewFeatureRequestAdmission>;
  };
}

export interface NewFeatureRequestAdmission {
  readonly disposition: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:admits-reviewed-new-feature-request | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:new-feature-request-admission:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:new-feature-request-admission:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:new-feature-request-admission:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:new-feature-request-admission:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### src/complete-new-feature-authority.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

### src/complete-new-feature-authority.type.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
export interface ProjectCompleteNewFeatureAuthorityContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ProjectCompleteNewFeatureAuthorityContext) => Promise<CompleteNewFeatureAuthority>;
  };
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:projects-complete-new-feature-authority | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-authority:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-authority:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-authority:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-authority:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### src/complete-new-feature-materialization.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

### src/complete-new-feature-materialization.type.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
export interface MaterializeCompleteNewFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: MaterializeCompleteNewFeatureContext) => Promise<CompleteNewFeatureMaterialization>;
  };
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:materializes-complete-new-feature | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-materialization:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-materialization:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-materialization:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-materialization:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### src/observed-new-feature-execution.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

### src/observed-new-feature-execution.type.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
export interface ExecuteNewlyMaterializedFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ExecuteNewlyMaterializedFeatureContext) => Promise<ObservedNewFeatureExecution>;
  };
}

export interface ObservedNewFeatureExecution {
  readonly disposition: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:executes-newly-materialized-feature | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:observed-new-feature-execution:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:observed-new-feature-execution:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:observed-new-feature-execution:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:observed-new-feature-execution:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### src/complete-new-feature-lineage.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

### src/complete-new-feature-lineage.type.ts

```typescript
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
export interface VerifyCompleteNewFeatureLineageContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: VerifyCompleteNewFeatureLineageContext) => Promise<NewFeatureTerminalDisposition>;
  };
}

export interface NewFeatureTerminalDisposition {
  readonly disposition: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:verifies-complete-new-feature-lineage | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-lineage:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-lineage:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-lineage:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-lineage:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

## 15. Direct semantic evaluation

```text
Stage ID: evaluate-semantic-execution
Purpose: Execute semantic authority directly and observe its signals.
Authorized inputs: semantic-execution, scenario-signals
Required prior products: semantic-execution
Required output: semantic-evaluation
Stop condition: every semantic execution produces one observed signal
```

Review questions:

- Was the semantic result observed without using the expected result as execution input?

```json
{
  "executionRefs": [
    "responsibility:admits-reviewed-new-feature-request",
    "responsibility:projects-complete-new-feature-authority",
    "responsibility:materializes-complete-new-feature",
    "responsibility:executes-newly-materialized-feature",
    "responsibility:verifies-complete-new-feature-lineage"
  ],
  "fixtureRefs": [
    "scenario:admit-one-reviewed-new-feature-request",
    "scenario:project-one-complete-new-feature-authority",
    "scenario:materialize-one-complete-new-feature",
    "scenario:execute-one-newly-materialized-feature",
    "scenario:verify-one-complete-new-feature-lineage"
  ],
  "expectedSignalRefs": [
    "signal:new-feature-request-admission",
    "signal:complete-new-feature-authority",
    "signal:complete-new-feature-materialization",
    "signal:observed-new-feature-execution",
    "signal:complete-new-feature-equivalence"
  ]
}
```

Observed: NOT_EVALUATED

## 16. Projected-body evaluation

```text
Stage ID: evaluate-projected-execution
Purpose: Execute the projected embodiment and observe its signals independently.
Authorized inputs: expected-code, scenario-signals
Required prior products: expected-code
Required output: projected-evaluation
Stop condition: every projected body produces one independently observed signal
```

Review questions:

- Was the projected result observed through the same fixture boundary as semantic execution?

```json
{
  "executionRefs": [
    "feature-body:new-feature-request-admission",
    "feature-body:complete-new-feature-authority",
    "feature-body:complete-new-feature-materialization",
    "feature-body:observed-new-feature-execution",
    "feature-body:complete-new-feature-lineage"
  ],
  "fixtureRefs": [
    "scenario:admit-one-reviewed-new-feature-request",
    "scenario:project-one-complete-new-feature-authority",
    "scenario:materialize-one-complete-new-feature",
    "scenario:execute-one-newly-materialized-feature",
    "scenario:verify-one-complete-new-feature-lineage"
  ],
  "expectedSignalRefs": [
    "signal:new-feature-request-admission",
    "signal:complete-new-feature-authority",
    "signal:complete-new-feature-materialization",
    "signal:observed-new-feature-execution",
    "signal:complete-new-feature-equivalence"
  ]
}
```

Observed: NOT_EVALUATED

## 17. Translation conformance

```text
Stage ID: evaluate-translation-conformance
Purpose: Compare declared expectations, semantic observations, and projected observations.
Authorized inputs: scenario-expectations, semantic-evaluation, projected-evaluation
Required prior products: semantic-evaluation, projected-evaluation
Required output: translation-conformance
Stop condition: every responsibility has one terminal translation determination
```

Review questions:

- Are the declared, semantic, and projected outcomes canonically equivalent?

```json
{
  "policy": {
    "possibleDispositions": [
      "PROJECTION_CONFORMS",
      "SEMANTIC_EXECUTION_DIVERGES",
      "PROJECTED_EXECUTION_DIVERGES",
      "TRANSLATION_DIVERGES",
      "NOT_EVALUATED"
    ]
  },
  "translationEvaluation": {
    "comparisonRefs": [
      "semantic-observation:responsibility:admits-reviewed-new-feature-request",
      "semantic-observation:responsibility:projects-complete-new-feature-authority",
      "semantic-observation:responsibility:materializes-complete-new-feature",
      "semantic-observation:responsibility:executes-newly-materialized-feature",
      "semantic-observation:responsibility:verifies-complete-new-feature-lineage",
      "projected-observation:feature-body:new-feature-request-admission",
      "projected-observation:feature-body:complete-new-feature-authority",
      "projected-observation:feature-body:complete-new-feature-materialization",
      "projected-observation:feature-body:observed-new-feature-execution",
      "projected-observation:feature-body:complete-new-feature-lineage",
      "signal:new-feature-request-admission",
      "signal:complete-new-feature-authority",
      "signal:complete-new-feature-materialization",
      "signal:observed-new-feature-execution",
      "signal:complete-new-feature-equivalence"
    ],
    "requiredRelationship": "canonical-equivalence"
  },
  "observation": {
    "semanticExecution": "NOT_EVALUATED",
    "projectedExecution": "NOT_EVALUATED",
    "translation": "NOT_EVALUATED",
    "disposition": "NOT_EVALUATED"
  }
}
```

```text
semantic authority ------> direct semantic execution
        |                             |
        |                             v
        |                    semantic observation
        |                             |
        v                             v
feature-body authority -> projected execution
                                      |
                                      v
                             projected observation
                                      |
                                      v
required relationship: canonical-equivalence
observed disposition: NOT_EVALUATED
```

## 18. Review disposition

```text
Stage ID: review-feature
Purpose: Present the complete construction lineage for human implementation admission.
Authorized inputs: canonical-feature, translation-conformance
Required prior products: translation-conformance
Required output: review-disposition
Stop condition: one review disposition covers the complete canonical feature
```

Review questions:

- Is every implementation construct traceable through AST, body, semantic authority, and feature intent?

Review questions:

- Does each stage consume only admitted products of earlier stages?
- Does every scenario carry one obligation, expectation, responsibility, signal, and semantic operation?
- Can every feature-body operation be traced to semantic execution?
- Can every AST node be traced to feature-body authority?
- Can every projected source construct be traced to the expected AST?
- Are direct semantic and projected observations canonically equivalent to the declared expectation?

Translation tie-out:

| Canonical authority | Expected AST | Expected code |
| --- | --- | --- |
| Each feature body accepts one immutable context. | Each function declaration has one immutable context parameter. | Each projected function accepts one typed context parameter. |
| Each feature body invokes exactly one admitted semantic edge. | Each function body contains one awaited call expression. | Each projected function returns one awaited context invocation. |
| Each semantic edge ID equals its scenario semantic operation ID. | Each call contains the edge ID as one string literal. | Each context invocation names the admitted semantic edge. |
| Domain branching and DTO construction are forbidden. | No branch or object-construction nodes are admitted. | No if, switch, loop, or object construction is projected. |

Admission rule: Admit implementation only when construction order is complete and expectation, semantic execution, AST, projected execution, and review are canonically equivalent.
