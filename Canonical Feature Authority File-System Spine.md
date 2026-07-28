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

The scenario expectation is not code.

It is the operational contract between:

```text
Canonical scenario
    ↓
Required implementation topology
    ↓
Observable execution result
```

It says:

```text
When the admitted condition exists,

exactly one responsibility must evaluate it,

exactly one scenario body must execute,

and exactly one authoritative signal must report:

SCENARIO_NOT_ATOMIC
```

## What the Scenario Expectation Actually Becomes

The expectation projects into several downstream constraints.

```text
Scenario expectation
    ├── determines the expected condition
    ├── determines the expected result
    ├── determines the expected signal
    ├── determines implementation cardinality
    ├── constrains the responsibility body expectation
    ├── constrains the return contract
    ├── drives executable test projection
    └── becomes input to operational conformance
```

It does not directly become one block of TypeScript.

It shapes everything that TypeScript is permitted to become.

### 1. It becomes an admitted execution case

This portion:

```json
{
  "condition": {
    "obligationCardinality": "greater-than-one"
  }
}
```

does not become:

```typescript
if (scenario.obligations.length > 1) {
  // reject
}
```

Instead, it becomes an executable input condition supplied to the semantic path.

Conceptually:

```json
{
  "executionCaseId": "scenario-contains-multiple-obligations",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "inputFacts": {
    "classifiedObligations": [
      {
        "obligationId": "first-obligation",
        "independentlyEvaluable": true
      },
      {
        "obligationId": "second-obligation",
        "independentlyEvaluable": true
      }
    ]
  }
}
```

The condition describes the facts under which the scenario expectation must be evaluated.

The responsibility body does not manufacture those facts.

The execution harness or scenario runner supplies them through the canonical execution context.

### 2. It becomes an expected semantic result

This portion:

```json
{
  "expectedResult": {
    "resultId": "scenario-is-rejected"
  }
}
```

establishes the semantic outcome.

It says that the evaluation must resolve to:

```text
Scenario admission:
rejected
```

That result may later appear as a structured semantic value:

```json
{
  "resultId": "scenario-is-rejected",
  "admission": "REJECTED"
}
```

But that result should be projected by semantic authority.

It should not be manually assembled inside TypeScript:

```typescript
return {
  resultId: "scenario-is-rejected",
  admission: "REJECTED"
};
```

That would move semantic result construction into the language body.

### 3. It becomes an expected signal contract

This portion:

```json
{
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "disposition": "SCENARIO_NOT_ATOMIC"
  }
}
```

constrains the body's return subject.

It determines:

```text
Signal family:
scenario-atomicity

Expected disposition:
SCENARIO_NOT_ATOMIC
```

This influences the projected return contract:

```typescript
Promise<ScenarioAtomicitySignal>
```

It also constrains the semantic result:

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true
}
```

The literal disposition remains owned by semantic decision authority.

The TypeScript body returns the resolved signal.

It does not choose the disposition.

### 4. It becomes implementation cardinality

This portion:

```json
{
  "expectedCardinality": {
    "primaryResponsibilities": 1,
    "signals": 1,
    "scenarioBodies": 1
  }
}
```

has a major architectural effect.

It establishes:

```text
One scenario
    ↓
One primary responsibility
    ↓
One implementation body
    ↓
One authoritative signal
```

This is where the scenario expectation prevents implementation sprawl.

It rejects structures such as:

```text
Scenario
├── validates-obligation-count
├── repairs-scenario-structure
├── rewrites-feature
└── generates-review-report
```

That would be four responsibilities hidden below one scenario.

The expectation instead admits:

```text
Scenario
└── evaluates-scenario-atomicity
```

Any additional work must either:

```text
be a semantic dependency below the responsibility,

or

be admitted as another scenario and responsibility.
```

### 5. It becomes a responsibility body expectation

The scenario expectation projects into a more implementation-specific body expectation:

```json
{
  "expectationType": "responsibility-body-expectation.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-independent-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "expectedResultId": "scenario-is-rejected",
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "disposition": "SCENARIO_NOT_ATOMIC"
  },
  "expectedCardinality": {
    "bodyCount": 1,
    "primarySemanticEdges": 1,
    "returnedSignals": 1
  }
}
```

The scenario expectation says:

```text
What must happen.
```

The responsibility body expectation says:

```text
What executable body must exist to make it happen.
```

### 6. It becomes a file-body constraint

The scenario expectation does not necessarily author the file path itself.

But it constrains the file-body authority that may be projected.

```json
{
  "bodyId": "evaluates-scenario-atomicity-body",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "target": {
    "language": "typescript",
    "path": "evaluates-scenario-atomicity.ts"
  },
  "constraints": {
    "maximumPrimaryResponsibilities": 1,
    "maximumSignals": 1,
    "maximumBodyLineages": 1
  }
}
```

The scenario expectation therefore constrains:

```text
How many bodies may exist
Which responsibility the body must embody
Which signal family the body must return
Which scenario owns the body
```

### 7. It becomes an executable test projection

The expectation also drives the operational scenario test.

Conceptually:

```typescript
it("rejects a scenario with multiple obligations", async () => {
  const context = createsScenarioAtomicityContext({
    classifiedObligations: [
      createsIndependentObligation("first-obligation"),
      createsIndependentObligation("second-obligation")
    ]
  });

  const signal = await evaluatesScenarioAtomicity(context);

  expect(signal.signalId).toBe("scenario-atomicity");
  expect(signal.disposition).toBe("SCENARIO_NOT_ATOMIC");
});
```

The test is not a new authority.

It is a language projection of the admitted scenario expectation.

The expectation owns:

```text
Condition
Expected result
Expected signal
Expected disposition
```

The test merely executes that contract.

### 8. It becomes operational conformance input

The conformance evaluator loads the expectation and compares it with observed implementation and execution.

```text
Expected:
1 primary responsibility

Observed:
1 primary responsibility

Expected:
1 scenario body

Observed:
1 scenario body

Expected:
scenario-atomicity

Observed:
scenario-atomicity

Expected disposition:
SCENARIO_NOT_ATOMIC

Observed disposition:
SCENARIO_NOT_ATOMIC
```

Potential findings include:

```text
EXPECTED_RESPONSIBILITY_NOT_PROJECTED

MULTIPLE_PRIMARY_RESPONSIBILITIES_PROJECTED

EXPECTED_SCENARIO_BODY_NOT_FOUND

MULTIPLE_SCENARIO_BODIES_PROJECTED

EXPECTED_SIGNAL_NOT_RETURNED

UNAUTHORIZED_SIGNAL_RETURNED

EXPECTED_DISPOSITION_NOT_OBSERVED
```

The expectation is therefore operationally consumed by:

```text
Body expectation projection
File-body projection
Test projection
Execution evaluation
Conformance evaluation
```

It remains in the execution chain.

## What the Projected TypeScript Becomes

The scenario expectation contributes lineage and return constraints, but not domain branching.

```typescript
// @generated
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-independent-obligation
// responsibility-id: evaluates-scenario-atomicity
// expected-result-id: scenario-is-rejected
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

Notice what does not appear:

```typescript
if (context.scenario.obligations.length > 1) {
  return {
    signalId: "scenario-atomicity",
    disposition: "SCENARIO_NOT_ATOMIC"
  };
}
```

That logic belongs to semantic authority.

The projected body remains execution-only.

## Exact Projection Influence

| Expectation field                    | Projected influence                                   |
| ------------------------------------ | ----------------------------------------------------- |
| `featureId`                          | Preserves feature lineage                             |
| `scenarioId`                         | Establishes scenario ownership                        |
| `obligationId`                       | Constrains the semantic boundary                      |
| `condition`                          | Defines executable input facts                        |
| `expectedResult.resultId`            | Defines the admitted semantic outcome                 |
| `expectedSignal.signalId`            | Constrains the return subject                         |
| `expectedSignal.disposition`         | Defines the expected execution verdict                |
| `primaryResponsibilities: 1`         | Permits one owning responsibility                     |
| `signals: 1`                         | Permits one authoritative signal                      |
| `scenarioBodies: 1`                  | Permits one implementation lineage                    |
| `blocking` inherited from obligation | Determines whether failed expectation stops admission |

## The Deeper Insight

The scenario expectation has four projections:

```text
1. Behavioral projection
   What condition and result must be observed?

2. Topological projection
   How many responsibilities, signals, and bodies may exist?

3. Execution projection
   What input case must be run and what signal must return?

4. Conformance projection
   What expected facts must be compared with observed facts?
```

The final transformation is:

```text
Scenario expectation
"Multiple obligations must produce scenario rejection."

        ↓

Execution case
"Supply more than one independently classified obligation."

        ↓

Responsibility body expectation
"Exactly one body must evaluate scenario atomicity."

        ↓

Projected return contract
Promise<ScenarioAtomicitySignal>

        ↓

Observed signal
SCENARIO_NOT_ATOMIC

        ↓

Conformance
Expected and observed behavior and topology match.
```

> **The scenario expectation does not implement behavior. It establishes the exact behavior and topology that the implementation must operationally satisfy.**

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

The responsibility authority does not yet define TypeScript syntax.

It establishes a stable semantic worker identity.

```text
Obligation:
scenario-carries-one-independent-obligation

Owned by:
evaluates-scenario-atomicity
```

The responsibility is the bridge between:

```text
What must be true
    ↓
Who owns determining whether it is true
    ↓
What semantic execution must occur
    ↓
What body must be projected
```

## What the Responsibility Authority Actually Becomes

```text
Responsibility authority
    ├── becomes a semantic execution identity
    ├── binds to one primary semantic edge
    ├── determines the responsibility body identity
    ├── influences the projected operation name
    ├── constrains the body kind
    ├── preserves ownership lineage
    ├── determines conformance ownership
    └── prevents unrelated behavior from entering the body
```

### 1. It becomes the stable worker identity

This value:

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

is the canonical identity.

It remains stable across language projections:

```text
Canonical responsibility ID:
evaluates-scenario-atomicity

TypeScript operation:
evaluatesScenarioAtomicity

C# operation:
EvaluateScenarioAtomicity

Python operation:
evaluates_scenario_atomicity

Java operation:
evaluateScenarioAtomicity
```

The programming-language operation names are projections.

They are not new semantic identities.

The body lineage remains attached to:

```text
evaluates-scenario-atomicity
```

### 2. It becomes a semantic-edge binding

The responsibility must bind explicitly to semantic execution authority.

```json
{
  "bindingType": "responsibility-to-semantic-edge.v1",
  "responsibilityId": "evaluates-scenario-atomicity",
  "primarySemanticEdge": "evaluate-scenario-atomicity"
}
```

The two names are related but distinct:

```text
Responsibility:
evaluates-scenario-atomicity

Semantic edge:
evaluate-scenario-atomicity
```

The responsibility identifies the worker.

The semantic edge identifies the executable semantic boundary that performs the work.

The binding must be declared rather than inferred through naming coincidence.

### 3. It becomes a semantic execution path

The responsibility statement:

```text
Evaluate whether one canonical scenario carries exactly one
independently evaluable obligation.
```

decomposes into semantic operations:

```text
Observe scenario obligation candidates
    ↓
Classify independently evaluable obligations
    ↓
Evaluate obligation cardinality
    ↓
Resolve atomicity disposition
    ↓
Project scenario atomicity signal
```

These may be represented as SEJ authority:

```json
{
  "semanticEdgeId": "evaluate-scenario-atomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "operations": [
    {
      "invokes": "observe-scenario-obligations"
    },
    {
      "invokes": "classify-independent-obligations"
    },
    {
      "invokes": "evaluate-obligation-cardinality"
    },
    {
      "invokes": "resolve-scenario-atomicity-disposition"
    },
    {
      "invokes": "project-scenario-atomicity-signal"
    }
  ]
}
```

The responsibility authorizes the semantic path.

The TypeScript body does not individually author or orchestrate these domain decisions.

### 4. It becomes a body identity

The responsibility projects into one responsibility body:

```json
{
  "bodyId": "evaluates-scenario-atomicity-body",
  "responsibilityId": "evaluates-scenario-atomicity",
  "kind": "validation"
}
```

The derivation is:

```text
Responsibility:
evaluates-scenario-atomicity

        ↓

Body identity:
evaluates-scenario-atomicity-body
```

This body ID becomes the stable physical lineage identity for the projected implementation.

### 5. It becomes a body kind

This field:

```json
{
  "kind": "validation"
}
```

constrains what the body may do.

A validation responsibility may:

```text
Observe admitted input
Invoke validation authority
Return a validation signal
```

It may not silently become:

```text
A remediation body
A mutation body
A rewriting body
A reporting body
A persistence body
A source generator
```

That means the generated body may evaluate and report.

It may not repair the scenario.

For example, this would violate the responsibility boundary:

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  if (context.scenario.obligations.length > 1) {
    context.scenario = rewritesScenarioIntoMultipleScenarios(
      context.scenario
    );
  }

  return createsAtomicitySignal(context.scenario);
}
```

That body performs:

```text
Evaluation
Mutation
Remediation
DTO construction
```

It is no longer one validation responsibility.

### 6. It becomes the public operation boundary

The responsibility identity influences the file-body contract:

```json
{
  "publicOperation": {
    "name": "evaluatesScenarioAtomicity",
    "async": true,
    "parameter": {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    },
    "returnType": "Promise<ScenarioAtomicitySignal>"
  }
}
```

The naming transformation is declared:

```text
evaluates-scenario-atomicity
        ↓ TypeScript naming projection
evaluatesScenarioAtomicity
```

The platform agent does not independently invent:

```typescript
validateScenario()
checkAtomicity()
processFeatureScenario()
handleInvalidScenario()
```

Those names would introduce new identities not authorized by the responsibility authority.

### 7. It becomes the file identity

The responsibility also influences the projected filename:

```text
evaluates-scenario-atomicity.ts
```

The relationship is:

```text
Responsibility ID:
evaluates-scenario-atomicity

Body ID:
evaluates-scenario-atomicity-body

TypeScript operation:
evaluatesScenarioAtomicity

TypeScript file:
evaluates-scenario-atomicity.ts
```

All are projections of one semantic worker identity.

### 8. It becomes the input boundary

The responsibility statement determines what context the body needs.

```typescript
export interface EvaluateScenarioAtomicityContext {
  readonly scenario: CanonicalScenario;
  readonly edges: SemanticEdgeRuntime;
}
```

But the body should not be handed unrelated authority such as:

```typescript
interface EvaluateScenarioAtomicityContext {
  scenario: CanonicalScenario;
  repositoryWriter: RepositoryWriter;
  featureRewriter: FeatureRewriter;
  reportGenerator: ReportGenerator;
  remediationQueue: RemediationQueue;
}
```

Those dependencies would imply responsibilities beyond evaluation.

The responsibility authority therefore constrains dependency admission.

### 9. It becomes the return boundary

The responsibility owns one authoritative output:

```typescript
Promise<ScenarioAtomicitySignal>
```

It should not return:

```typescript
Promise<{
  atomicity: ScenarioAtomicitySignal;
  rewrittenFeature: Feature;
  documentation: MarkdownDocument;
  remediationPlan: RemediationPlan;
  auditReport: AuditReport;
}>
```

That result shape would reveal multiple responsibilities.

The return boundary should reflect one worker and one signal.

### 10. It becomes the projected implementation body

The final TypeScript projection is:

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

The responsibility authority projects into:

```text
Function identity
File identity
Body identity
Context boundary
Return boundary
Primary semantic edge
Lineage metadata
```

It does not project into authored domain logic.

### 11. It becomes structural constraints on the AST

Because the responsibility is singular and its kind is validation, the AST authority may permit:

```text
One exported function
One context parameter
One semantic invocation
One returned semantic result
```

It may forbid:

```text
Multiple exported operations
Branching
Loops
Direct source mutation
Direct filesystem effects
DTO construction
Multiple returned signal families
Unrelated semantic edge invocations
```

Expected AST:

```text
FunctionDeclaration
├── name: evaluatesScenarioAtomicity
├── async: true
├── parameter: context
└── body
    └── ReturnStatement
        └── SemanticEdgeInvocation
            ├── edge: evaluate-scenario-atomicity
            └── input: context
```

### 12. It becomes conformance ownership

The conformance evaluator asks:

```text
Was the obligation implemented by the admitted responsibility?

Was exactly one body projected for the responsibility?

Does the body invoke the responsibility's declared semantic edge?

Does the body return the responsibility's admitted signal?

Does the body contain work outside the responsibility boundary?
```

Potential findings include:

```text
RESPONSIBILITY_NOT_PROJECTED

MULTIPLE_BODIES_FOR_RESPONSIBILITY

RESPONSIBILITY_EDGE_BINDING_MISSING

RESPONSIBILITY_EDGE_MISMATCH

RESPONSIBILITY_SIGNAL_MISMATCH

RESPONSIBILITY_KIND_VIOLATION

RESPONSIBILITY_CONTAINS_UNAUTHORIZED_EFFECT

RESPONSIBILITY_CONTAINS_MULTIPLE_WORKERS
```

## Exact Projection Influence

| Responsibility field  | Projected influence                      |
| --------------------- | ----------------------------------------- |
| `responsibilityId`    | Stable semantic worker identity          |
| `kind`                | Constrains permitted body behavior       |
| `featureId`           | Preserves feature lineage                |
| `scenarioId`          | Preserves scenario ownership             |
| `obligationId`        | Declares the truth the worker owns       |
| `statement`           | Drives semantic operation design         |
| Responsibility ID     | Projects into body ID                    |
| Responsibility ID     | Projects into operation name             |
| Responsibility ID     | Projects into filename                   |
| Responsibility kind   | Constrains AST and dependencies          |
| Semantic-edge binding | Determines the body's primary invocation |
| Owned signal          | Determines the return boundary           |

## The Deeper Insight

The responsibility has four projections:

```text
1. Identity projection
   What stable worker is being created?

2. Semantic projection
   What execution path embodies its meaning?

3. Physical projection
   What file and public operation represent the worker?

4. Conformance projection
   How do we verify that the worker remained within its boundary?
```

The complete transformation is:

```text
Obligation
"A scenario must carry one independent obligation."

        ↓

Responsibility
"evaluates-scenario-atomicity"

        ↓

Semantic edge
"evaluate-scenario-atomicity"

        ↓

Body identity
"evaluates-scenario-atomicity-body"

        ↓

TypeScript operation
evaluatesScenarioAtomicity(...)

        ↓

Generated implementation
return context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

        ↓

Conformance
Verify one worker,
one body,
one edge,
one signal,
and no unauthorized behavior.
```

> **The responsibility authority does not contain the implementation. It establishes the stable worker identity from which semantic execution, physical embodiment, language naming, and conformance ownership are projected.**

## How Layers 6 and 7 Work Together

These two layers must remain distinct.

```text
Scenario expectation:
What must be observed?

Responsibility authority:
Who owns producing that observation?
```

For this scenario:

```text
Expectation
────────────────────────────────────────
Condition:
more than one independent obligation

Expected result:
scenario is rejected

Expected signal:
SCENARIO_NOT_ATOMIC

Expected topology:
one responsibility
one body
one signal
```

```text
Responsibility
────────────────────────────────────────
Worker:
evaluates-scenario-atomicity

Kind:
validation

Owned obligation:
scenario-carries-one-independent-obligation

Semantic boundary:
evaluate-scenario-atomicity
```

Together they produce:

```text
When a scenario contains multiple independent obligations,

the one admitted worker
evaluates-scenario-atomicity

must invoke the semantic edge
evaluate-scenario-atomicity

through one projected body

and return one scenario-atomicity signal

whose admitted disposition is
SCENARIO_NOT_ATOMIC.
```

That becomes the implementation spine:

```text
Scenario expectation
    ↓
Responsibility authority
    ↓
Semantic-edge binding
    ↓
Responsibility body expectation
    ↓
File-body authority
    ↓
TypeScript projection authority
    ↓
Generated body
    ↓
Observed signal
    ↓
Conformance evaluation
```

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
