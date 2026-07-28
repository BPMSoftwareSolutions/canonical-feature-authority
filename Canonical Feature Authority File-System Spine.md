# Canonical Feature Authority File-System Spine

```text
canonical-feature-authority/
│
├── README.md
├── package.json
├── tsconfig.json
│
├── architecture/
│   ├── explains-canonical-feature-authority.md
│   ├── shows-intent-to-execution-spine.ascii.md
│   ├── defines-authority-projection-boundary.md
│   ├── defines-capability-first-layout.md
│   └── defines-generated-body-discipline.md
│
├── capabilities/
│   │
│   └── validate-feature-scenario-atomicity/
│       │
│       │   # Human intention
│       │
│       ├── describes-human-need.md
│       ├── states-user-story.md
│       │
│       │   # Canonical behavioral authority
│       │
│       ├── rejects-non-atomic-feature-scenarios.feature
│       │
│       │   # Capability-wide projections and entrypoints
│       │
│       ├── projects-capability-authority.json
│       ├── runs-feature-scenario-atomicity-validation.ts
│       │
│       └── scenarios/
│           │
│           ├── reject-a-scenario-with-multiple-obligations/
│           │   │
│           │   │   # Scenario understanding
│           │   │
│           │   ├── analyzes-scenario-intent.md
│           │   ├── requires-one-independent-obligation.obligation.json
│           │   │
│           │   │   # Scenario expectation
│           │   │
│           │   ├── expects-scenario-rejection.expectation.json
│           │   │
│           │   └── evaluates-scenario-atomicity/
│           │       │
│           │       │   # Responsibility identity
│           │       │
│           │       ├── declares-responsibility.json
│           │       ├── declares-scenario-atomicity-signal.json
│           │       ├── binds-responsibility-to-semantic-edge.json
│           │       │
│           │       │   # Semantic authority
│           │       │
│           │       ├── observes-scenario-obligations.sej.json
│           │       ├── evaluates-obligation-cardinality.sej.json
│           │       ├── resolves-scenario-atomicity-disposition.sej.json
│           │       └── projects-scenario-atomicity-signal.sej.json
│           │       │
│           │       │   # Responsibility body expectation
│           │       │
│           │       ├── expects-evaluates-scenario-atomicity-body.json
│           │       │
│           │       │   # File-body authority
│           │       │
│           │       ├── declares-evaluates-scenario-atomicity-body.json
│           │       │
│           │       │   # Language projection authority
│           │       │
│           │       ├── projects-typescript-body.json
│           │       ├── projects-typescript-ast.json
│           │       │
│           │       │   # Generated execution bodies
│           │       │
│           │       ├── evaluates-scenario-atomicity.ts
│           │       ├── evaluates-scenario-atomicity.test.ts
│           │       │
│           │       │   # Operational conformance
│           │       │
│           │       ├── evaluates-projection-conformance.sej.json
│           │       └── runs-projection-conformance.ts
│           │
│           ├── accept-a-scenario-with-one-obligation/
│           │   │
│           │   ├── analyzes-scenario-intent.md
│           │   ├── requires-one-independent-obligation.obligation.json
│           │   ├── expects-scenario-acceptance.expectation.json
│           │   │
│           │   └── evaluates-scenario-atomicity/
│           │       ├── declares-responsibility.json
│           │       ├── declares-scenario-atomicity-signal.json
│           │       ├── binds-responsibility-to-semantic-edge.json
│           │       ├── observes-scenario-obligations.sej.json
│           │       ├── evaluates-obligation-cardinality.sej.json
│           │       ├── resolves-scenario-atomicity-disposition.sej.json
│           │       ├── projects-scenario-atomicity-signal.sej.json
│           │       ├── expects-evaluates-scenario-atomicity-body.json
│           │       ├── declares-evaluates-scenario-atomicity-body.json
│           │       ├── projects-typescript-body.json
│           │       ├── projects-typescript-ast.json
│           │       ├── evaluates-scenario-atomicity.ts
│           │       ├── evaluates-scenario-atomicity.test.ts
│           │       ├── evaluates-projection-conformance.sej.json
│           │       └── runs-projection-conformance.ts
│           │
│           ├── reject-a-scenario-with-no-obligation/
│           │   │
│           │   ├── analyzes-scenario-intent.md
│           │   ├── requires-one-independent-obligation.obligation.json
│           │   ├── expects-scenario-rejection.expectation.json
│           │   │
│           │   └── evaluates-scenario-atomicity/
│           │       ├── declares-responsibility.json
│           │       ├── declares-scenario-atomicity-signal.json
│           │       ├── binds-responsibility-to-semantic-edge.json
│           │       ├── observes-scenario-obligations.sej.json
│           │       ├── evaluates-obligation-cardinality.sej.json
│           │       ├── resolves-scenario-atomicity-disposition.sej.json
│           │       ├── projects-scenario-atomicity-signal.sej.json
│           │       ├── expects-evaluates-scenario-atomicity-body.json
│           │       ├── declares-evaluates-scenario-atomicity-body.json
│           │       ├── projects-typescript-body.json
│           │       ├── projects-typescript-ast.json
│           │       ├── evaluates-scenario-atomicity.ts
│           │       ├── evaluates-scenario-atomicity.test.ts
│           │       ├── evaluates-projection-conformance.sej.json
│           │       └── runs-projection-conformance.ts
│           │
│           └── reject-an-ambiguously-classified-scenario/
│               │
│               ├── analyzes-scenario-intent.md
│               ├── requires-one-independent-obligation.obligation.json
│               ├── expects-scenario-rejection.expectation.json
│               │
│               └── evaluates-scenario-atomicity/
│                   ├── declares-responsibility.json
│                   ├── declares-scenario-atomicity-signal.json
│                   ├── binds-responsibility-to-semantic-edge.json
│                   ├── observes-scenario-obligations.sej.json
│                   ├── evaluates-obligation-cardinality.sej.json
│                   ├── resolves-scenario-atomicity-disposition.sej.json
│                   ├── projects-scenario-atomicity-signal.sej.json
│                   ├── expects-evaluates-scenario-atomicity-body.json
│                   ├── declares-evaluates-scenario-atomicity-body.json
│                   ├── projects-typescript-body.json
│                   ├── projects-typescript-ast.json
│                   ├── evaluates-scenario-atomicity.ts
│                   ├── evaluates-scenario-atomicity.test.ts
│                   ├── evaluates-projection-conformance.sej.json
│                   └── runs-projection-conformance.ts
│
├── runtime/
│   ├── invokes-semantic-edge.ts
│   ├── resolves-semantic-authority.ts
│   ├── executes-semantic-authority.ts
│   └── projects-semantic-result.ts
│
├── projection/
│   ├── projects-scenario-expectation.ts
│   ├── projects-responsibility-body-expectation.ts
│   ├── projects-file-body-authority.ts
│   ├── projects-typescript-ast.ts
│   └── emits-typescript-body.ts
│
├── conformance/
│   ├── observes-generated-body.ts
│   ├── parses-generated-body-ast.ts
│   ├── compares-expected-and-observed-topology.ts
│   ├── detects-forbidden-body-structures.ts
│   └── evaluates-capability-conformance.ts
│
├── schemas/
│   ├── obligation.type.schema.json
│   ├── responsibility.type.schema.json
│   ├── signal.type.schema.json
│   ├── scenario-expectation.type.schema.json
│   ├── responsibility-body-expectation.type.schema.json
│   ├── file-body-authority.type.schema.json
│   ├── semantic-authority.type.schema.json
│   ├── typescript-projection.type.schema.json
│   └── conformance-evaluation.type.schema.json
│
└── cli/
    ├── analyzes-scenario.ts
    ├── projects-scenario-authority.ts
    ├── projects-responsibility-body.ts
    ├── runs-capability.ts
    └── evaluates-conformance.ts
```

---

# The Complete Spine Inside One Scenario

The most important view is not the repository root.

It is the view inside one scenario.

```text
reject-a-scenario-with-multiple-obligations/
│
├── analyzes-scenario-intent.md
├── requires-one-independent-obligation.obligation.json
├── expects-scenario-rejection.expectation.json
│
└── evaluates-scenario-atomicity/
    ├── declares-responsibility.json
    ├── declares-scenario-atomicity-signal.json
    ├── binds-responsibility-to-semantic-edge.json
    │
    ├── observes-scenario-obligations.sej.json
    ├── evaluates-obligation-cardinality.sej.json
    ├── resolves-scenario-atomicity-disposition.sej.json
    ├── projects-scenario-atomicity-signal.sej.json
    │
    ├── expects-evaluates-scenario-atomicity-body.json
    ├── declares-evaluates-scenario-atomicity-body.json
    │
    ├── projects-typescript-body.json
    ├── projects-typescript-ast.json
    │
    ├── evaluates-scenario-atomicity.ts
    ├── evaluates-scenario-atomicity.test.ts
    │
    ├── evaluates-projection-conformance.sej.json
    └── runs-projection-conformance.ts
```

That folder tells the complete architectural story:

```text
Scenario understanding
    ↓
Obligation
    ↓
Expected behavior
    ↓
Responsibility
    ↓
Signal
    ↓
Semantic authority
    ↓
Expected body
    ↓
File-body authority
    ↓
Language projection
    ↓
Generated AST
    ↓
Generated body
    ↓
Executable expectation
    ↓
Operational conformance
```

---

# Layer 1 — Human Need

```text
describes-human-need.md
```

This file answers:

```text
What problem are we trying to solve?
```

Example:

```markdown
Feature scenarios can contain multiple independent obligations.

When those obligations are treated as one executable scenario,
responsibility ownership, signaling, projection, and conformance
become ambiguous.

The repository must prevent a non-atomic scenario from becoming
implementation authority.
```

This file is human-facing design input.

It remains useful because it explains the problem the capability exists to solve.

It does not authorize code directly.

---

# Layer 2 — User Story

```text
states-user-story.md
```

This file answers:

```text
Who needs what, and why?
```

Example:

```text
As a canonical feature author,

I want every scenario to carry one independent obligation,

so that each scenario can be owned by one responsibility,
produce one authoritative signal,
and be projected without ambiguity.
```

The user story establishes the intent boundary.

It does not independently determine TypeScript structure.

---

# Layer 3 — Canonical Feature

```text
rejects-non-atomic-feature-scenarios.feature
```

This file answers:

```text
What observable capability must exist?
```

Example:

```gherkin
Feature: Reject non-atomic feature scenarios

  As a canonical feature author
  I want each scenario to carry one independent obligation
  So that responsibility, signaling, and projection remain unambiguous

  Scenario: Reject a scenario with multiple obligations
    Given a canonical scenario contains multiple independent obligations
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_NOT_ATOMIC

  Scenario: Accept a scenario with one obligation
    Given a canonical scenario contains one independent obligation
    When scenario atomicity is evaluated
    Then the scenario is admitted
    And the scenario atomicity signal is SCENARIO_ATOMIC

  Scenario: Reject a scenario with no obligation
    Given a canonical scenario contains no identifiable obligation
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_NOT_ATOMIC

  Scenario: Reject an ambiguously classified scenario
    Given the obligations of a canonical scenario cannot be classified deterministically
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_ATOMICITY_UNRESOLVED
```

This is the only feature file for the capability.

There is no second set of “proof feature files.”

The canonical feature remains the behavior authority.

---

# Layer 4 — Scenario Intent Analysis

```text
analyzes-scenario-intent.md
```

This file answers:

```text
Is this scenario one semantic transistor,
or does it already contain a circuit?
```

Example:

```text
Scenario:
reject-a-scenario-with-multiple-obligations

Given-family clauses:
1

When-family clauses:
1

Then-family clauses:
2

Identified obligations:
1

Primary responsibilities:
1

Authoritative signals:
1

Scenario body lineages:
1

Atomicity disposition:
ATOMIC
```

The analysis occurs before semantic-authority authoring or code projection.

Its purpose is to prevent a dense scenario from contaminating every downstream authority surface.

---

# Layer 5 — Obligation Authority

```text
requires-one-independent-obligation.obligation.json
```

This file answers:

```text
What truth must hold?
```

Example:

```json
{
  "obligationId": "scenario-carries-one-independent-obligation",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "statement": "A canonical scenario must carry exactly one independently evaluable obligation.",
  "blocking": true
}
```

The obligation is not executable implementation.

It is the truth the responsibility must enforce.

The obligation authority does **not** project into a standalone block of business logic.

It projects into **constraints on what the downstream implementation is allowed to become**.

That is the key distinction.

does **not** become:


```typescript
if (scenario.obligations.length !== 1) {
  throw new Error("Scenario must contain one obligation");
}
```

That would bury the meaning of the obligation inside TypeScript.

Instead, the obligation influences several downstream operational surfaces.

```text
Obligation authority
    ↓
Responsibility ownership
    ↓
Semantic evaluation authority
    ↓
Body expectation
    ↓
Projected execution body
    ↓
Conformance rules
```

The source walkthrough follows exactly this pattern: canonical authority first projects an expectation and body contract, and only later becomes a generated TypeScript body. 

## What the obligation actually becomes

### 1. It becomes responsibility ownership

The obligation asks:

```text
Who is responsible for determining
whether this truth holds?
```

That produces:

```json
{
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-independent-obligation",
  "kind": "validation"
}
```

The obligation does not perform the evaluation.

It authorizes one responsibility to own the evaluation.

```text
Truth:
A scenario must carry one obligation.

Worker:
evaluates-scenario-atomicity
```

---

### 2. It becomes semantic evaluation authority

The statement:

```text
exactly one independently evaluable obligation
```

contains a semantic rule.

That rule must become machine-evaluable authority.

For example:

```json
{
  "decisionId": "evaluate-obligation-cardinality",
  "inputs": [
    "observedObligations.classificationStatus",
    "observedObligations.count"
  ],
  "rules": [
    {
      "when": {
        "observedObligations.classificationStatus": "resolved",
        "observedObligations.count": 1
      },
      "then": "SCENARIO_ATOMIC"
    },
    {
      "when": {
        "observedObligations.classificationStatus": "resolved",
        "observedObligations.count": {
          "notEquals": 1
        }
      },
      "then": "SCENARIO_NOT_ATOMIC"
    },
    {
      "when": {
        "observedObligations.classificationStatus": "unresolved"
      },
      "then": "SCENARIO_ATOMICITY_UNRESOLVED"
    }
  ]
}
```

This is where the phrase **“exactly one”** becomes operational.

Not in an `if` statement inside the capability body.

The deterministic engineering standard explicitly places meaningful decisions in semantic authority rather than hidden branching inside language bodies. 

---

### 3. It becomes body cardinality constraints

The obligation also determines implementation topology.

Because one scenario carries one obligation, the projected structure should admit:

```text
One obligation
    ↓
One owning responsibility
    ↓
One primary semantic edge
    ↓
One scenario body
    ↓
One authoritative signal
```

That becomes expectation authority:

```json
{
  "expectationType": "responsibility-body-expectation.v1",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "expectedCardinality": {
    "primaryResponsibilities": 1,
    "primarySemanticEdges": 1,
    "scenarioBodies": 1,
    "authoritativeSignals": 1
  }
}
```

So the obligation affects how many bodies may exist.

It does not directly generate their syntax.

---

### 4. It becomes a body contract

The body contract preserves the obligation identity and constrains implementation shape:

```json
{
  "bodyId": "evaluates-scenario-atomicity-body",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "execution": {
    "primarySemanticEdge": "evaluate-scenario-atomicity"
  },
  "constraints": {
    "maximumPrimaryResponsibilities": 1,
    "maximumSignals": 1,
    "maximumBodyLineages": 1,
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true
  }
}
```

The obligation now influences projected structure in two ways:

```text
Semantic constraint:
exactly one obligation must be observed

Structural constraint:
exactly one responsibility body may own the scenario
```

---

## What the projected TypeScript becomes

The projected body should be extremely small:

```typescript
// @generated
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-independent-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

That is the correct projection.

The code body does not know:

```text
What counts as an obligation
How obligations are discovered
How independence is classified
Why one is acceptable
Why zero is invalid
Why two are invalid
Which signal is RED
Which signal is GREEN
```

All of that belongs in semantic authority.

The body only invokes the authority responsible for evaluating the obligation.

This matches the four-layer discipline: the semantic layer owns meaning, while the projected body accepts context, invokes declared edges, and returns the semantic result. 

## The exact projection influence

| Obligation field            | Projected influence                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| `obligationId`              | Lineage metadata in expectations, contracts, projections, generated body, and conformance |
| `featureId`                 | Connects the body to its canonical feature                                                |
| `scenarioId`                | Establishes scenario ownership                                                            |
| `statement`                 | Drives semantic decision and classification authority                                     |
| `blocking`                  | Determines whether a failed evaluation produces a stopping RED signal                     |
| “exactly one”               | Becomes semantic cardinality evaluation                                                   |
| “independently evaluable”   | Becomes obligation-classification criteria                                                |
| one obligation per scenario | Becomes one-responsibility/one-body topology constraints                                  |


---

# Layer 6 — Scenario Expectation

```text
expects-scenario-rejection.expectation.json
```

This file answers:

```text
What observable result must this scenario produce?
```

Example:

```json
{
  "expectationType": "scenario-expectation.v1",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "condition": {
    "obligationCardinality": "greater-than-one"
  },
  "expectedResult": {
    "resultId": "scenario-is-rejected"
  },
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "disposition": "SCENARIO_NOT_ATOMIC"
  },
  "expectedCardinality": {
    "primaryResponsibilities": 1,
    "signals": 1,
    "scenarioBodies": 1
  }
}
```

The walkthrough explicitly distinguishes this expectation from code. It is the authoritative constraint that one body must exist for one responsibility, at one declared location, returning one signal.

---

# Layer 7 — Responsibility Authority

```text
declares-responsibility.json
```

This file answers:

```text
What one worker owns the obligation?
```

Example:

```json
{
  "responsibilityId": "evaluates-scenario-atomicity",
  "kind": "validation",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "statement": "Evaluate whether one canonical scenario carries exactly one independently evaluable obligation."
}
```

The responsibility ID becomes the stable execution identity.

The language-specific operation name is a later projection.

---

# Layer 8 — Signal Authority

```text
declares-scenario-atomicity-signal.json
```

This file answers:

```text
What authoritative result communicates the evaluation?
```

Example:

```json
{
  "signalId": "scenario-atomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "green": [
    "SCENARIO_ATOMIC"
  ],
  "red": [
    "SCENARIO_NOT_ATOMIC",
    "SCENARIO_ATOMICITY_UNRESOLVED"
  ],
  "blocking": true
}
```

The signal values belong in semantic authority.

They should not appear as independently authored conditional literals inside the TypeScript body. The walkthrough states that red and green dispositions should be resolved behind the semantic invocation rather than implemented as body-level branching.

---

# Layer 9 — Responsibility-to-Edge Binding

```text
binds-responsibility-to-semantic-edge.json
```

This file answers:

```text
Which semantic execution edge embodies this responsibility?
```

Example:

```json
{
  "bindingType": "responsibility-to-semantic-edge.v1",
  "responsibilityId": "evaluates-scenario-atomicity",
  "semanticEdgeId": "evaluate-scenario-atomicity"
}
```

This relationship must be explicit.

The responsibility ID does not magically become an edge name through an undocumented convention.

---

# Layer 10 — Semantic Observation Authority

```text
observes-scenario-obligations.sej.json
```

This file answers:

```text
What facts must be observed?
```

Conceptually:

```json
{
  "semanticAuthorityType": "observation.v1",
  "semanticOperationId": "observe-scenario-obligations",
  "input": {
    "from": "context.scenario"
  },
  "output": {
    "as": "observedScenarioObligations"
  }
}
```

The generated TypeScript body does not inspect Gherkin text directly.

It invokes semantic authority that owns the observation.

---

# Layer 11 — Semantic Evaluation Authority

```text
evaluates-obligation-cardinality.sej.json
```

This file answers:

```text
How is scenario atomicity deterministically evaluated?
```

Conceptually:

```text
Observed obligation count = 1
    → SCENARIO_ATOMIC

Observed obligation count = 0
    → SCENARIO_NOT_ATOMIC

Observed obligation count > 1
    → SCENARIO_NOT_ATOMIC

Obligation classification unresolved
    → SCENARIO_ATOMICITY_UNRESOLVED
```

This decisionality belongs in SEJ.

It does not become:

```typescript
if (count === 1) {
  ...
}
```

inside the responsibility body.

---

# Layer 12 — Semantic Disposition Authority

```text
resolves-scenario-atomicity-disposition.sej.json
```

This file answers:

```text
Which admitted disposition follows from the evaluated facts?
```

It resolves the semantic result from the evaluation authority.

This separation keeps observation, evaluation, and projection explicit without putting DTO construction or domain decisions into the generated code body.

---

# Layer 13 — Semantic Result Projection

```text
projects-scenario-atomicity-signal.sej.json
```

This file answers:

```text
How is the evaluated disposition projected into the canonical signal?
```

Conceptually:

```json
{
  "semanticAuthorityType": "projection.v1",
  "semanticOperationId": "project-scenario-atomicity-signal",
  "subject": "scenario-atomicity",
  "from": "resolvedScenarioAtomicityDisposition",
  "output": "ScenarioAtomicitySignal"
}
```

The signal object is constructed semantically.

The TypeScript body returns the semantic result.

It does not construct the domain DTO itself.

---

# Layer 14 — Responsibility Body Expectation

```text
expects-evaluates-scenario-atomicity-body.json
```

This file answers:

```text
What implementation topology must exist for the responsibility?
```

Example:

```json
{
  "expectationType": "responsibility-body-expectation.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "bodyCount": 1,
  "semanticEdges": [
    "evaluate-scenario-atomicity"
  ],
  "target": {
    "language": "typescript",
    "runtime": "node"
  }
}
```

This is the expectation-derived body contract boundary described in the source walkthrough.

---

# Layer 15 — File-Body Authority

```text
declares-evaluates-scenario-atomicity-body.json
```

This file answers:

```text
What file must exist,
where must it live,
and what operation must it expose?
```

Example:

```json
{
  "bodyContractType": "scenario-responsibility-body.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "kind": "validation",
  "target": {
    "language": "typescript",
    "runtime": "node",
    "path": "capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
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

The source walkthrough defines these exact body constraints: one responsibility, one signal, one body lineage, no branching, no loops, no DTO construction, no direct effects, and no authority mutation.

---

# Layer 16 — TypeScript Projection Authority

```text
projects-typescript-body.json
```

This file answers:

```text
How must the language-neutral body authority be represented in TypeScript?
```

Example:

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifact": {
    "path": "evaluates-scenario-atomicity.ts",
    "imports": [
      {
        "kind": "import",
        "from": "./scenario-atomicity.type.js",
        "typeOnly": true,
        "named": [
          "EvaluateScenarioAtomicityContext",
          "ScenarioAtomicitySignal"
        ]
      }
    ],
    "declaration": {
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
          "kind": "return-semantic-invocation",
          "edge": "evaluate-scenario-atomicity",
          "input": "context"
        }
      ]
    }
  }
}
```

The projection authority owns syntax.

The feature authority does not contain a TypeScript AST.

---

# Layer 17 — AST Projection

```text
projects-typescript-ast.json
```

This file answers:

```text
What exact syntax tree is permitted?
```

Expected shape:

```text
Function declaration
├── exported
├── async
├── name: evaluatesScenarioAtomicity
├── parameter
│   └── context: EvaluateScenarioAtomicityContext
├── return type
│   └── Promise<ScenarioAtomicitySignal>
└── body
    └── return await context.edges.invokes(
            "evaluate-scenario-atomicity",
            context
        )
```

Forbidden nodes:

```text
IfStatement
SwitchStatement
ForStatement
WhileStatement
DoWhileStatement
ConditionalExpression
Direct SDK invocation
Domain object literal
DTO construction
Authority mutation
```

The original documentation identifies AST inspection as the structural governance boundary for rejecting branching, loops, direct calls, and DTO construction.

---

# Layer 18 — Generated Code Body

```text
evaluates-scenario-atomicity.ts
```

This file answers:

```text
What executable body embodies the authority?
```

Generated output:

```typescript
// @generated
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-independent-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
// DO NOT EDIT.

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

This matches the documented complete projected Node body.

The generated body contains:

```text
No domain decision
No branching
No loops
No DTO construction
No direct external effect
No independent signal selection
```

It is a collapsed execution projection.

---

# Layer 19 — Executable Expectation

```text
evaluates-scenario-atomicity.test.ts
```

This file answers:

```text
Does the operational component satisfy the canonical scenario?
```

The test must remain connected to the canonical feature scenario.

It should evaluate at least:

```text
One obligation
    → SCENARIO_ATOMIC

Multiple obligations
    → SCENARIO_NOT_ATOMIC

No obligations
    → SCENARIO_NOT_ATOMIC

Unresolved classification
    → SCENARIO_ATOMICITY_UNRESOLVED
```

The test is not a separate behavioral authority.

It is the executable projection of the canonical scenario expectation.

---

# Layer 20 — Operational Conformance Authority

```text
evaluates-projection-conformance.sej.json
```

This file answers:

```text
Does the actual projection remain faithful to the admitted authority chain?
```

It evaluates:

```text
Expected feature identity
Observed feature identity

Expected scenario identity
Observed scenario identity

Expected obligation identity
Observed obligation identity

Expected responsibility identity
Observed responsibility identity

Expected signal identity
Observed signal identity

Expected body count
Observed body count

Expected semantic edge
Observed semantic edge

Expected AST structures
Observed AST structures

Forbidden structures
Observed forbidden structures

Expected scenario disposition
Observed scenario disposition
```

The cardinality rules from canonical feature authority become conformance policy rather than implementation code.

---

# Layer 21 — Executable Conformance Component

```text
runs-projection-conformance.ts
```

This is the operational proof component.

It performs the conformance path:

```text
Load scenario expectation
    ↓
Load responsibility body expectation
    ↓
Load file-body authority
    ↓
Load TypeScript projection authority
    ↓
Parse generated body
    ↓
Observe generated AST
    ↓
Execute canonical expectation
    ↓
Compare expected and observed topology
    ↓
Return conformance signal
```

There is no passive `proof-surfaces/` directory.

There is no second set of feature files.

There is no receipt forest describing what these operational components already evaluate.

Proof remains in the execution path.

---

# Why the Generated Body Remains Beside Its Authority

The generated body should remain inside the responsibility directory:

```text
evaluates-scenario-atomicity/
├── declares-responsibility.json
├── semantic authority...
├── body expectation...
├── file-body authority...
├── TypeScript projection authority...
├── evaluates-scenario-atomicity.ts
└── conformance...
```

This preserves locality:

```text
Why does this body exist?
    → declares-responsibility.json

What does it mean?
    → semantic authority

What body was expected?
    → expects-evaluates-scenario-atomicity-body.json

Where should it live?
    → declares-evaluates-scenario-atomicity-body.json

How was it constructed?
    → projects-typescript-body.json

What exact syntax was authorized?
    → projects-typescript-ast.json

What executes?
    → evaluates-scenario-atomicity.ts

What proves conformance?
    → evaluates-projection-conformance.sej.json
      plus runs-projection-conformance.ts
```

The student does not need to traverse six repository-wide registries to understand one body.

---

# What the Spine Must Never Become

```text
canonical-authority/
semantic-authority/
expectations/
body-contracts/
projections/
generated/
tests/
proof/
receipts/
```

That horizontal organization may be useful for generated indexes, but it should not be the primary authorship shape.

It would fragment one semantic subject across the repository.

The primary shape is vertical and capability-first:

```text
Capability
    ↓
Scenario
    ↓
Obligation
    ↓
Responsibility
    ↓
Semantic authority
    ↓
Body authority
    ↓
Projection
    ↓
Executable body
    ↓
Operational conformance
```

---

# Files That Are Human-Facing

Only three files in the primary scenario chain are principally human explanatory surfaces:

```text
describes-human-need.md
states-user-story.md
analyzes-scenario-intent.md
```

Their purposes are bounded:

```text
Human need
    explains the problem.

User story
    states who needs what and why.

Scenario analysis
    records the intent-chain design determination.
```

They do not multiply downstream.

They do not pretend to be execution proof.

---

# Files That Must Be Operationally Consumed

Every JSON, SEJ, TypeScript, and test artifact must have an execution consumer.

```text
Artifact:
requires-one-independent-obligation.obligation.json

Consumed by:
scenario expectation projector
responsibility coverage evaluator

Missing consequence:
scenario cannot be admitted
```

```text
Artifact:
expects-scenario-rejection.expectation.json

Consumed by:
responsibility body expectation projector
scenario execution evaluator

Missing consequence:
body topology cannot be projected
```

```text
Artifact:
declares-responsibility.json

Consumed by:
semantic-edge binder
file-body projector
conformance evaluator

Missing consequence:
no body ownership can be established
```

```text
Artifact:
observes-scenario-obligations.sej.json

Consumed by:
semantic runtime

Missing consequence:
scenario facts cannot be observed
```

```text
Artifact:
evaluates-obligation-cardinality.sej.json

Consumed by:
semantic runtime

Missing consequence:
atomicity cannot be determined
```

```text
Artifact:
projects-scenario-atomicity-signal.sej.json

Consumed by:
semantic runtime

Missing consequence:
no canonical result can be returned
```

```text
Artifact:
expects-evaluates-scenario-atomicity-body.json

Consumed by:
file-body authority projector
conformance evaluator

Missing consequence:
required implementation topology is unknown
```

```text
Artifact:
declares-evaluates-scenario-atomicity-body.json

Consumed by:
TypeScript projector
filesystem conformance evaluator

Missing consequence:
the body has no admitted physical boundary
```

```text
Artifact:
projects-typescript-body.json

Consumed by:
TypeScript AST projector

Missing consequence:
the body cannot be generated
```

```text
Artifact:
projects-typescript-ast.json

Consumed by:
TypeScript emitter
AST conformance evaluator

Missing consequence:
exact structure cannot be emitted or verified
```

```text
Artifact:
evaluates-scenario-atomicity.ts

Consumed by:
capability runtime
canonical scenario test

Missing consequence:
the responsibility cannot execute
```

```text
Artifact:
evaluates-projection-conformance.sej.json

Consumed by:
runs-projection-conformance.ts

Missing consequence:
the repository cannot determine projection conformance
```

This gives us the hard admission question:

```text
Who consumes this artifact?

What operation does it influence?

What deterministic failure occurs when it is missing or changed?
```

If those questions have no answer, the artifact does not belong in the operational spine.

---

# Naming Discipline

Files should express actions wherever possible.

```text
describes-human-need.md
states-user-story.md
analyzes-scenario-intent.md
requires-one-independent-obligation.obligation.json
expects-scenario-rejection.expectation.json
declares-responsibility.json
observes-scenario-obligations.sej.json
evaluates-obligation-cardinality.sej.json
resolves-scenario-atomicity-disposition.sej.json
projects-scenario-atomicity-signal.sej.json
expects-evaluates-scenario-atomicity-body.json
declares-evaluates-scenario-atomicity-body.json
projects-typescript-body.json
projects-typescript-ast.json
evaluates-scenario-atomicity.ts
evaluates-scenario-atomicity.test.ts
evaluates-projection-conformance.sej.json
runs-projection-conformance.ts
```

Noun-oriented suffixes identify artifact types:

```text
.obligation.json
.expectation.json
.sej.json
.type.ts
.schema.json
```

The leading phrase still describes what the artifact does.

---

# The Canonical Identity Chain

Every machine-readable artifact carries the same semantic coordinate:

```json
{
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity"
}
```

The coordinate is preserved through:

```text
Feature
    ↓
Scenario expectation
    ↓
Obligation
    ↓
Responsibility
    ↓
Semantic edge
    ↓
Body expectation
    ↓
File-body authority
    ↓
TypeScript projection
    ↓
AST
    ↓
Generated body
    ↓
Observed signal
    ↓
Conformance evaluation
```

The identity may change representation.

It may not drift.

---

# The Final File-System Equation

```text
Capability folder
    =
Human intention
    +
Canonical feature
    +
Scenario analysis
    +
Obligation authority
    +
Scenario expectation
    +
Responsibility authority
    +
Signal authority
    +
Semantic authority
    +
Responsibility body expectation
    +
File-body authority
    +
Language projection authority
    +
Generated executable body
    +
Executable expectation
    +
Operational conformance
```

And the governing discipline is:

```text
Authority declares.

Expectation constrains.

Semantics decide.

Projection constructs.

Generated bodies execute.

Conformance evaluates.

Nothing passive is added merely to claim proof.
```
