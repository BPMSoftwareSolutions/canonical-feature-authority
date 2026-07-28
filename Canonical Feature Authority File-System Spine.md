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
How must the language-neutral body authority
be represented in TypeScript?
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

The TypeScript projection authority owns representation.

It does not own business meaning.

It receives an already-admitted responsibility-body authority and declares how that authority must appear in the TypeScript language.

```text
Responsibility authority
    says who owns the work.

Semantic authority
    says what the work means.

File-body authority
    says what body must exist.

TypeScript projection authority
    says how that body is rendered in TypeScript.
```

The underlying documentation makes this separation explicit: the compiler reads the structured TypeScript body authority, while the surrounding feature, responsibility, and semantic layers establish intent, ownership, meaning, and proof.

## What the TypeScript Projection Authority Actually Becomes

```text
TypeScript projection authority
    ├── becomes an output file path
    ├── becomes native imports
    ├── becomes a function declaration
    ├── becomes native naming
    ├── becomes parameter syntax
    ├── becomes return-type syntax
    ├── becomes ordered statements
    ├── becomes semantic edge invocations
    ├── becomes generated-source markers
    └── becomes replayable projector input
```

It is consumed directly by the TypeScript projector.

Unlike the feature, obligation, or semantic authority, this layer is allowed to contain:

```text
TypeScript file extension
TypeScript import syntax
TypeScript function casing
TypeScript type names
TypeScript async syntax
TypeScript statement shapes
```

That language contamination is correct here because this artifact exists **below the projection boundary**.

### 1. It becomes the physical TypeScript artifact path

This field:

```json
{
  "path": "evaluates-scenario-atomicity.ts"
}
```

becomes the emitted file:

```text
evaluates-scenario-atomicity.ts
```

The projector uses the declared path.

It does not invent:

```text
validate.ts
atomicity-checker.ts
scenario-validator.ts
helpers/atomicity.ts
```

The file path remains connected to the admitted responsibility:

```text
Responsibility:
evaluates-scenario-atomicity

        ↓ TypeScript file-name projection

Artifact:
evaluates-scenario-atomicity.ts
```

The projector must also enforce that the path is safe, relative, inside the admitted workspace, and consistent with file-body authority.

### 2. It becomes a native TypeScript import

This declaration:

```json
{
  "kind": "import",
  "from": "./scenario-atomicity.type.js",
  "typeOnly": true,
  "named": [
    "EvaluateScenarioAtomicityContext",
    "ScenarioAtomicitySignal"
  ]
}
```

becomes:

```typescript
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";
```

The fields have deterministic syntax effects:

| Projection field | TypeScript effect               |
| ---------------- | ------------------------------- |
| `kind: "import"` | Emits an import declaration     |
| `typeOnly: true` | Emits `import type`             |
| `from`           | Supplies the module specifier   |
| `named`          | Supplies named imports          |
| Import ordering  | Determines stable emitted order |

The source projection walkthrough demonstrates this exact field-to-syntax relationship: path, `typeOnly`, function name, async marker, types, statements, and semantic identities are all controlled by structured authority rather than invented by generated code.

### 3. It becomes the language-specific operation name

This field:

```json
{
  "name": "evaluatesScenarioAtomicity"
}
```

becomes:

```typescript
evaluatesScenarioAtomicity
```

That name is a TypeScript representation of the canonical responsibility:

```text
Canonical responsibility:
evaluates-scenario-atomicity

TypeScript operation:
evaluatesScenarioAtomicity
```

The transformation must be declared or governed by a pinned naming profile.

The projector may not silently rename the operation to:

```text
validateScenarioAtomicity
checkScenario
runAtomicityValidation
processScenario
```

Those names would introduce new identities.

### 4. It becomes the exported async boundary

These fields:

```json
{
  "export": true,
  "async": true
}
```

become:

```typescript
export async function
```

The projection authority therefore determines whether the body:

```text
is publicly visible,
is asynchronous,
and can be invoked through the expected runtime boundary.
```

If file-body authority requires an exported async function, a projection that emits a private synchronous function is structurally nonconforming.

### 5. It becomes the parameter boundary

This projection:

```json
{
  "parameters": [
    {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    }
  ]
}
```

becomes:

```typescript
context: EvaluateScenarioAtomicityContext
```

The body receives one admitted context.

It does not independently acquire:

```text
Filesystem clients
Registry writers
Environment variables
SDK clients
Feature rewriters
Global configuration
Mutable singleton state
```

The context type constrains what the body may reach.

This reinforces the collapsed-body discipline:

```text
One immutable context
    ↓
Declared semantic invocation
    ↓
Returned semantic result
```

### 6. It becomes the return boundary

This field:

```json
{
  "returnType": "Promise<ScenarioAtomicitySignal>"
}
```

becomes:

```typescript
Promise<ScenarioAtomicitySignal>
```

That preserves the signal authority in native syntax.

The body must return:

```text
scenario-atomicity
```

It must not drift into returning:

```text
A rewritten feature
A remediation plan
A validation report
An audit DTO
A Boolean with no semantic identity
```

The return type is therefore not merely compiler decoration.

It is the native representation of the responsibility's admitted output boundary.

### 7. It becomes a semantic invocation statement

This projection node:

```json
{
  "kind": "return-semantic-invocation",
  "edge": "evaluate-scenario-atomicity",
  "input": "context"
}
```

becomes:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

This is the most important transformation.

The projection authority controls:

```text
The fact that the statement returns
The fact that the invocation is awaited
The invocation mechanism
The semantic edge identity
The argument identity
The statement order
```

It does not allow the code generator to add a decision between the invocation and the return.

### 8. It becomes the complete generated body

The entire projection authority becomes:

```typescript
// @generated
// projection-id: project-evaluates-scenario-atomicity-body

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

Every visible part has a source:

```text
File path
    ← artifact.path

Import
    ← artifact.imports

Function name
    ← declaration.name

Export marker
    ← declaration.export

Async marker
    ← declaration.async

Parameter
    ← declaration.parameters

Return type
    ← declaration.returnType

Edge invocation
    ← declaration.body

Semantic identity
    ← edge

Input value
    ← input
```

The generated code contains no independently authored meaning.

The source lab demonstrates the same pattern with a real scanner body: structured projection authority controls the path, imports, function declaration, local bindings, semantic calls, and return statement; the compiler deterministically renders those nodes into TypeScript.

## What the Projection Authority Must Not Contain

The TypeScript projection authority should not contain business decisions such as:

```json
{
  "if": {
    "obligationCount": {
      "greaterThan": 1
    }
  },
  "then": "SCENARIO_NOT_ATOMIC"
}
```

That belongs in semantic decision authority.

It should not contain DTO mappings such as:

```json
{
  "object": {
    "signalId": "scenario-atomicity",
    "disposition": {
      "from": "decision.result"
    }
  }
}
```

unless the node is itself a declared invocation of a semantic projection authority.

It should not contain hidden retry, fallback, classification, remediation, or mutation.

The engineering discipline requires that meaning expand in semantic authority while the language body collapses into ordered edge invocation and return.

## The Projection Authority as a Compiler Input

The TypeScript projector performs something conceptually equivalent to:

```text
Validate projection authority
    ↓
Resolve target profile
    ↓
Create native AST nodes
    ↓
Validate artifact path
    ↓
Render deterministic TypeScript
    ↓
Write generated file
    ↓
Hash authority and artifact
```

This is a mechanical compiler path.

The projector does not:

```text
Interpret the user story
Reanalyze the Gherkin
Reclassify the obligation
Choose the responsibility
Invent the semantic edge
Select the disposition
Construct domain meaning
```

Those decisions have already been made above the projection boundary.

## Exact Projection Influence

| Projection field     | Generated TypeScript influence                        |
| --------------------- | ------------------------------------------------------ |
| `projectionType`     | Selects the declarative TypeScript compiler contract  |
| `projectionId`       | Becomes generation lineage and marker                 |
| `targetId`           | Selects TypeScript module/runtime conventions          |
| `artifact.path`      | Determines the emitted file                            |
| `imports[].from`     | Determines module paths                                |
| `imports[].typeOnly` | Determines `import type`                               |
| `imports[].named`    | Determines native named imports                        |
| `declaration.kind`   | Determines function/class/type node kind               |
| `declaration.name`   | Determines native operation name                       |
| `declaration.export` | Determines visibility                                  |
| `declaration.async`  | Determines async syntax                                |
| `parameters`         | Determines parameter names and types                   |
| `returnType`         | Determines native return annotation                    |
| `body[].kind`        | Determines statement/node shape                        |
| `body[].edge`        | Determines exact semantic edge identity                |
| `body[].input`       | Determines the invocation argument                     |
| Statement order      | Determines execution sequence                           |

## The Deeper Insight

The TypeScript projection authority performs three projections simultaneously.

```text
1. Representation projection
   How does the body appear in TypeScript?

2. Boundary projection
   What file, function, parameter, and return boundary exist?

3. Execution projection
   What exact semantic edges are invoked and in what order?
```

The complete transformation is:

```text
Language-neutral body authority
"Invoke evaluate-scenario-atomicity and return its signal."

        ↓

TypeScript projection authority
"Emit an exported async TypeScript function
with one context parameter and one semantic invocation."

        ↓

Native AST
FunctionDeclaration
ReturnStatement
AwaitExpression
CallExpression

        ↓

Generated TypeScript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

> **The TypeScript projection authority is not the implementation's meaning. It is the deterministic native construction plan for an already-resolved meaning.**

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

The AST projection is where the TypeScript representation becomes structurally inspectable.

It answers two related questions:

```text
What nodes must exist?

What nodes must never exist?
```

## Important Refinement

There are two legitimate ways to represent this layer.

### Option A — Explicit projected AST authority

The projector produces a complete expected AST document:

```text
projects-typescript-ast.json
```

This can be consumed by:

```text
The TypeScript emitter
The AST conformance evaluator
The projection replay checker
The mutation harness
```

### Option B — AST derived from `projects-typescript-body.json`

The structured body projection is compiled directly into a native AST in memory.

The repository may then persist only:

```text
projects-typescript-body.json
```

and reproduce the AST whenever needed.

This is simpler when the body authority already describes exact syntax nodes.

The source lab is explicit that the current compiler reads the structured TypeScript body authority directly and does **not** derive that body automatically from the higher-level execution model.

Therefore, the clean rule is:

```text
Do not persist a second AST file
unless it is operationally consumed.

If the AST can be deterministically reproduced
from projects-typescript-body.json,
the reproduced AST may be the proof surface.
```

This keeps us aligned with the no-documentation-sprawl discipline.

## What the AST Projection Actually Becomes

```text
AST projection
    ├── becomes native compiler nodes
    ├── becomes source emission
    ├── becomes structural conformance rules
    ├── becomes forbidden-node detection
    ├── becomes invocation-cardinality evaluation
    ├── becomes exact lineage inspection
    ├── becomes mutation-test input
    └── becomes replayable structural proof
```

The AST is not just an intermediate compiler object.

It is the exact operational shape against which generated bodies are inspected.

### 1. It becomes a `FunctionDeclaration`

The expected root node is:

```text
FunctionDeclaration
```

with:

```text
name:
evaluatesScenarioAtomicity

export:
true

async:
true
```

Conceptually:

```json
{
  "kind": "FunctionDeclaration",
  "name": "evaluatesScenarioAtomicity",
  "modifiers": [
    "export",
    "async"
  ]
}
```

This permits one declared function boundary.

It rejects:

```text
ClassDeclaration
ArrowFunction hidden inside an object
Default export of an anonymous function
Multiple exported functions
Nested responsibility functions
```

unless a separate profile explicitly admits them.

### 2. It becomes one parameter node

The expected parameter is:

```text
context: EvaluateScenarioAtomicityContext
```

Conceptually:

```json
{
  "kind": "Parameter",
  "name": "context",
  "type": "EvaluateScenarioAtomicityContext",
  "optional": false,
  "rest": false
}
```

The AST evaluator can prove:

```text
Exactly one parameter exists
The parameter is named context
The parameter has the expected type
The parameter is not optional
The parameter is not mutable through reassignment
```

Additional parameters would be findings:

```text
Unexpected repository client
Unexpected SDK client
Unexpected policy object
Unexpected mutable state
```

### 3. It becomes one return-type node

Expected:

```text
Promise<ScenarioAtomicitySignal>
```

Conceptually:

```json
{
  "kind": "TypeReference",
  "name": "Promise",
  "typeArguments": [
    {
      "kind": "TypeReference",
      "name": "ScenarioAtomicitySignal"
    }
  ]
}
```

The AST can prove that the generated body does not return:

```text
unknown
any
boolean
void
A composite DTO
An unrelated signal type
```

The source architecture emphasizes that native language support maps a language-neutral profile into native AST structures while normalized conformance findings remain stable across languages.

### 4. It becomes one `ReturnStatement`

Expected body:

```text
ReturnStatement
```

The AST profile can enforce:

```text
Statement count:
1

Statement kind:
ReturnStatement
```

That means the body cannot silently acquire:

```text
Local business decisions
Mutable accumulators
Logging policy
Retries
Fallback
Remediation
Multiple independent edge calls
```

A richer admitted body profile may permit local bindings before the return, but those bindings must be declared in the projection authority.

### 5. It becomes an `AwaitExpression`

Expected:

```text
await context.edges.invokes(...)
```

Conceptually:

```json
{
  "kind": "AwaitExpression",
  "expression": {
    "kind": "CallExpression"
  }
}
```

The AST can prove that asynchronous semantic execution is awaited rather than accidentally returned as an unresolved or incorrectly wrapped value.

### 6. It becomes an exact `CallExpression`

Expected call:

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

Conceptually:

```json
{
  "kind": "CallExpression",
  "callee": {
    "kind": "PropertyAccessExpression",
    "object": {
      "kind": "PropertyAccessExpression",
      "object": {
        "kind": "Identifier",
        "name": "context"
      },
      "property": "edges"
    },
    "property": "invokes"
  },
  "arguments": [
    {
      "kind": "StringLiteral",
      "value": "evaluate-scenario-atomicity"
    },
    {
      "kind": "Identifier",
      "name": "context"
    }
  ]
}
```

This lets the evaluator prove:

```text
Invocation mechanism is context.edges.invokes

Semantic edge identity is exact

Input is the declared context

Invocation count is exactly one

No undeclared call surrounds or replaces it
```

## The Complete Expected AST

Conceptually:

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "ImportDeclaration",
      "typeOnly": true,
      "moduleSpecifier": "./scenario-atomicity.type.js",
      "namedImports": [
        "EvaluateScenarioAtomicityContext",
        "ScenarioAtomicitySignal"
      ]
    },
    {
      "kind": "FunctionDeclaration",
      "name": "evaluatesScenarioAtomicity",
      "export": true,
      "async": true,
      "parameters": [
        {
          "kind": "Parameter",
          "name": "context",
          "type": "EvaluateScenarioAtomicityContext"
        }
      ],
      "returnType": {
        "kind": "PromiseType",
        "typeArgument": "ScenarioAtomicitySignal"
      },
      "body": [
        {
          "kind": "ReturnStatement",
          "expression": {
            "kind": "AwaitExpression",
            "expression": {
              "kind": "CallExpression",
              "callee": "context.edges.invokes",
              "arguments": [
                {
                  "kind": "StringLiteral",
                  "value": "evaluate-scenario-atomicity"
                },
                {
                  "kind": "Identifier",
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
```

This is not independently authored business logic.

It is the exact structural realization of the TypeScript projection authority.

## Required AST Constraints

The AST projection should establish positive requirements.

```json
{
  "required": {
    "sourceFileCount": 1,
    "functionCount": 1,
    "exportedFunctionCount": 1,
    "asyncFunctionCount": 1,
    "parameterCount": 1,
    "returnStatementCount": 1,
    "semanticInvocationCount": 1
  }
}
```

It should also establish exact identities:

```json
{
  "expected": {
    "functionName": "evaluatesScenarioAtomicity",
    "parameterName": "context",
    "parameterType": "EvaluateScenarioAtomicityContext",
    "returnType": "Promise<ScenarioAtomicitySignal>",
    "semanticEdge": "evaluate-scenario-atomicity",
    "invocationMechanism": "context.edges.invokes"
  }
}
```

Positive constraints are important.

A body is not conformant merely because it contains no `if` statement.

It must also contain the required execution path.

## Forbidden AST Nodes

The discipline identifies these as forbidden in collapsed capability bodies:

```text
IfStatement
SwitchStatement
ForStatement
ForOfStatement
ForInStatement
WhileStatement
DoWhileStatement
ConditionalExpression
```

These restrictions prevent the body from authoring domain decisions or iteration policy.

The standard also identifies broader prohibited operations:

```text
DTO object construction
Business exception classification
Provider selection
Retry selection
Direct file-system access
Direct SDK access
Hidden fallback
Array mutation
Undeclared semantic calls
```

The four-layer discipline defines the expected body as one immutable context, declared semantic edge invocation, optional projection, and return, while placing decisions, DTO shaping, iteration, and failure meaning in semantic authority.

### Forbidden branching

Reject:

```typescript
if (context.scenario.obligations.length === 1) {
  return createsAtomicSignal();
}

return createsNonAtomicSignal();
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
nodeKind: IfStatement
```

Reason:

```text
Scenario atomicity meaning has been authored
inside the TypeScript body.
```

### Forbidden iteration

Reject:

```typescript
for (const clause of context.scenario.clauses) {
  classifyClause(clause);
}
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
nodeKind: ForOfStatement
```

Reason:

```text
Iteration, classification, ordering,
and aggregation belong to semantic execution authority.
```

### Forbidden DTO construction

Reject:

```typescript
return {
  signalId: "scenario-atomicity",
  disposition: "SCENARIO_NOT_ATOMIC",
  blocking: true
};
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_CONSTRUCTION
constructionKind: domain-object-literal
```

Reason:

```text
The signal projection belongs to semantic projection authority.
```

The engineering standard explicitly rejects authored DTO stitching and requires semantic projections to own domain object construction.

### Forbidden direct SDK invocation

Reject:

```typescript
return scenarioAnalyzer.evaluate(context.scenario);
```

Finding:

```text
BODY_PROFILE_UNDECLARED_EFFECT
callTarget: scenarioAnalyzer.evaluate
```

Reason:

```text
Concrete implementations must be seated behind admitted
semantic edges or ports.
```

### Forbidden authority mutation

Reject:

```typescript
context.authority.obligationCount = 1;
```

Finding:

```text
BODY_PROFILE_AUTHORITY_MUTATION
```

Reason:

```text
A generated body executes admitted authority.
It does not rewrite authority to make execution pass.
```

## Structural Conformance Evaluation

The AST conformance operation compares:

```text
Expected AST
    ↓
Observed generated AST
    ↓
Normalized structural findings
```

Example comparison:

```text
Expected function count:
1

Observed function count:
1

Expected operation:
evaluatesScenarioAtomicity

Observed operation:
evaluatesScenarioAtomicity

Expected semantic edge:
evaluate-scenario-atomicity

Observed semantic edge:
evaluate-scenario-atomicity

Expected invocation count:
1

Observed invocation count:
1

Forbidden branch nodes:
0

Observed branch nodes:
0

Forbidden DTO constructions:
0

Observed DTO constructions:
0
```

Possible findings:

```text
BODY_PROFILE_FUNCTION_MISSING

BODY_PROFILE_FUNCTION_CARDINALITY_INVALID

BODY_PROFILE_OPERATION_NAME_MISMATCH

BODY_PROFILE_PARAMETER_MISMATCH

BODY_PROFILE_RETURN_TYPE_MISMATCH

BODY_PROFILE_REQUIRED_EDGE_MISSING

BODY_PROFILE_EDGE_CARDINALITY_INVALID

BODY_PROFILE_UNDECLARED_EDGE

BODY_PROFILE_EXECUTION_SEQUENCE_INVALID

BODY_PROFILE_FORBIDDEN_STRUCTURE

BODY_PROFILE_FORBIDDEN_CONSTRUCTION

BODY_PROFILE_UNDECLARED_EFFECT

BODY_PROFILE_AUTHORITY_MUTATION
```

These findings remain normalized even though the native AST implementation is TypeScript-specific.

## The AST as an Operational Proof Surface

This is the critical connection to our earlier discussion.

The AST is not passive documentation.

It remains operational because it is used to:

```text
Emit the source body
Inspect the generated source
Compare expected and observed structure
Reject unauthorized nodes
Verify edge identities
Verify invocation cardinality
Detect manual body edits
Drive negative mutations
Reproduce the source deterministically
```

Therefore:

```text
Expected AST structure
    +
Observed parsed AST
    +
Deterministic comparison
    =
Structural conformance
```

No separate prose document needs to claim that the body has no branching.

The AST evaluator can determine it directly.

## Negative Mutation Proof

The AST governance layer should prove that its controls actually detect contamination.

Start with the admitted body:

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

Mutation 1:

```typescript
if (!context.scenario) {
  throw new Error("Missing scenario");
}
```

Expected finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
IfStatement
```

Mutation 2:

```typescript
return {
  signalId: "scenario-atomicity",
  disposition: "SCENARIO_NOT_ATOMIC"
};
```

Expected finding:

```text
BODY_PROFILE_FORBIDDEN_CONSTRUCTION
domain-object-literal
```

Mutation 3:

```typescript
return await context.edges.invokes(
  "rewrite-scenario",
  context
);
```

Expected finding:

```text
BODY_PROFILE_UNDECLARED_EDGE
rewrite-scenario
```

Mutation 4:

```typescript
const first = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

const second = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

return second;
```

Expected finding:

```text
BODY_PROFILE_EDGE_CARDINALITY_INVALID
expected: 1
observed: 2
```

This turns AST constraints into adversarially proven governance.

## Exact AST Influence

| AST constraint                 | Operational effect                          |
| ------------------------------- | --------------------------------------------- |
| Required `FunctionDeclaration` | Ensures one admitted operation exists       |
| Required export modifier       | Ensures the runtime entrypoint is visible   |
| Required async modifier        | Preserves the declared execution boundary   |
| Exact function name            | Preserves responsibility identity           |
| Exact parameter count          | Prevents undeclared dependencies            |
| Exact parameter type           | Preserves context contract                  |
| Exact return type              | Preserves signal contract                   |
| Required edge invocation       | Ensures semantic authority is actually used |
| Edge cardinality               | Prevents duplicate or missing execution     |
| Statement ordering             | Preserves declared execution sequence       |
| Forbidden branching nodes      | Prevents hidden decisions                   |
| Forbidden loop nodes           | Prevents hidden iteration policy            |
| Forbidden object construction  | Prevents DTO stitching                      |
| Forbidden direct calls         | Prevents bypassing semantic authority       |
| Forbidden mutation             | Prevents authority rewriting                |
| Complexity ceiling             | Prevents body accretion                     |

## The Deeper Insight

The AST layer has four jobs:

```text
1. Construction
   Provide the exact native syntax structure to emit.

2. Inspection
   Reveal the real structure of the generated body.

3. Conformance
   Compare permitted structure with observed structure.

4. Contamination detection
   Reject decisions, loops, DTO construction,
   direct effects, and undeclared calls.
```

The complete transformation is:

```text
TypeScript projection authority
"Emit one exported async function
that invokes one semantic edge."

        ↓

Expected native AST
FunctionDeclaration
└── ReturnStatement
    └── AwaitExpression
        └── CallExpression

        ↓

Generated TypeScript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

        ↓

Observed AST
Parsed directly from generated source

        ↓

Conformance
Required nodes present
Forbidden nodes absent
Edge identity exact
Cardinality exact
```

> **The AST projection is not another description of the code. It is the executable structural law used to construct, inspect, and reject unauthorized TypeScript embodiment.**

## How Layers 16 and 17 Work Together

These layers are related, but they answer different questions.

```text
TypeScript projection authority:
How should the body be represented?

AST projection:
What exact native structure is permitted?
```

The projection authority says:

```text
Create:
evaluates-scenario-atomicity.ts

Import:
EvaluateScenarioAtomicityContext
ScenarioAtomicitySignal

Declare:
export async function evaluatesScenarioAtomicity

Accept:
context

Return:
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

The AST layer says:

```text
Permit:
one exported async FunctionDeclaration
one typed parameter
one ReturnStatement
one AwaitExpression
one declared CallExpression

Reject:
branches
loops
DTO construction
direct SDK calls
authority mutation
undeclared edges
extra statements
```

Together:

```text
TypeScript Projection Authority
    ↓ constructs

Expected Native AST
    ↓ emits

Generated TypeScript
    ↓ parses into

Observed Native AST
    ↓ compares against

Structural Conformance
```

## The Final Operational Rule

```text
Semantic authority owns meaning.

Body authority owns the legal execution boundary.

TypeScript projection authority owns native representation.

The native AST owns structural enforceability.

The generated source owns execution.

AST conformance proves that the source did not acquire
unauthorized meaning below the projection boundary.
```

And the anti-sprawl rule remains:

```text
Persist projects-typescript-ast.json
only when it is operationally consumed.

Otherwise:

projects-typescript-body.json
    ↓ deterministic compiler
in-memory expected AST
    ↓ source emission
generated TypeScript
    ↓ native parser
observed AST
    ↓ conformance comparison
```

The proof is the operational projection and comparison path—not another passive document.

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
