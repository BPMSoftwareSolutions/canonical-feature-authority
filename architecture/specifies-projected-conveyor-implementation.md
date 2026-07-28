# Projected Conveyor Implementation Specification

This document defines the implementation target for the authority conveyor that
will traverse this course, obtain bounded LLM submissions, admit semantic and
AST authority, invoke the deterministic TypeScript projector, and publish
verifiable lineage.

It deliberately contains no conveyor implementation. The implementation must be
projected later from the authorities described here.

The general code-body rules in
[Projected Code-Body Shape Specification](specifies-projected-code-body-shapes.md)
apply without exception. Conveyor code does not receive special permission to
branch, construct DTOs, hard-code identities, render TypeScript, or invent
policy.

## The conveyor's one responsibility

> Execute an admitted authority-projection plan without adding meaning or
> producing executable source code itself.

The conveyor coordinates authority. It does not author implementation.

## User story

**Feature ID:** `project-course-authority-through-a-governed-conveyor`

> As a student projecting an authority-first system,
> I want every admitted course authority to move through a governed LLM and
> deterministic projection conveyor,
> so that every executable body has complete canonical lineage and can be
> proven to have been projected by the trusted projector rather than authored
> by the model or conveyor.

The user story establishes the need. It does not authorize a workflow,
provider, prompt, AST, file, or code body by itself. Those decisions are split
across the atomic scenarios and downstream authorities below.

## Feature background

The background declares facts shared by every conveyor scenario:

```gherkin
Feature: Project course authority through a governed conveyor
  As a student projecting an authority-first system
  I want every admitted course authority to move through a governed LLM
    and deterministic projection conveyor
  So that every executable body has complete canonical lineage
    and provable projector-only code origin

  Background:
    Given canonical course authority has been admitted
    And the conveyor execution plan has been admitted
    And provider authority is supplied to the generic LLM connector
    And projector authority names one trusted deterministic projector
    And each executable target has a declared structural profile
```

The background does not claim that any scenario has succeeded. It establishes
only the authority required to evaluate each scenario.

## Canonical feature scenarios

Every scenario below owns one independently evaluable obligation, one focused
responsibility, and one observable outcome.

### Scenario 1: discover every admitted projection subject

```gherkin
  Scenario: Discover every admitted projection subject
    Given discovery authority identifies the permitted authority roots and schemas
    When the projection subjects are discovered
    Then one complete deterministically ordered projection-subject set is emitted
```

This scenario does not authorize projecting, repairing, or interpreting any
subject. It authorizes only discovery.

### Scenario 2: resolve the next authorized conveyor stage

```gherkin
  Scenario: Resolve the next authorized conveyor stage
    Given the conveyor plan and current admitted stage state
    When the next stage is resolved
    Then one authorized stage-transition signal is emitted
```

This scenario owns transition resolution, not execution of the selected stage.

### Scenario 3: project one bounded model request

```gherkin
  Scenario: Project one bounded model request
    Given one authorized conveyor stage requires a model submission
    When its model request authority is projected
    Then one complete provider-neutral model request is emitted
```

The request is data. This scenario does not invoke a provider.

### Scenario 4: obtain one bounded model submission

```gherkin
  Scenario: Obtain one bounded model submission
    Given one complete provider-neutral model request
    When the request is executed by the generic LLM connector
    Then one normalized model-submission testimony is emitted
```

This scenario obtains testimony. It does not admit the submission as authority.

### Scenario 5: evaluate a model submission for admission

```gherkin
  Scenario: Evaluate a model submission for admission
    Given one normalized model submission and its declared admission authority
    When the submission is evaluated
    Then one admission disposition is emitted without altering the submission
```

Schema conformance, identity preservation, forbidden code content, and upstream
hash checks are semantic rules of this responsibility.

### Scenario 6: attest one admitted authority artifact

```gherkin
  Scenario: Attest one admitted authority artifact
    Given one model submission has an admitted disposition
    When the admitted authority is attested
    Then one signed authority artifact is emitted
```

This scenario owns admission attestation. It does not project executable code.

### Scenario 7: project one admitted AST authority

```gherkin
  Scenario: Project one admitted AST authority
    Given one signed semantic authority satisfies its body expectation
    When lossless AST authority is projected
    Then one signed structurally conformant AST authority is emitted
```

The result is AST authority, not a TypeScript body.

### Scenario 8: invoke the trusted TypeScript projector

```gherkin
  Scenario: Invoke the trusted TypeScript projector
    Given one signed AST authority names an authorized TypeScript target
    When the deterministic projector is invoked
    Then one projector-signed TypeScript body is emitted
```

Only the projector may emit the `.ts` body.

### Scenario 9: evaluate projected-body conformance

```gherkin
  Scenario: Evaluate projected-body conformance
    Given one projector-signed body and its exact AST authority
    When projection conformance is evaluated
    Then one projection-conformance disposition is emitted
```

The evaluator observes and compares. It does not repair or re-sign the body.

### Scenario 10: publish the complete course lineage index

```gherkin
  Scenario: Publish the complete course lineage index
    Given every required projection subject has a conformant terminal disposition
    When course lineage is projected
    Then one signed index links every authority, AST, body, hash, and signature
```

The index is a signed navigational projection, not a detached projection
receipt.

### Scenario 11: stop downstream execution after RED

```gherkin
  Scenario: Stop downstream execution after RED
    Given one conveyor stage has emitted a RED disposition
    When the conveyor transition is resolved
    Then no downstream stage is authorized
```

This is one obligation: resolve a RED transition to a stopped topology.

### Scenario 12: resume only revalidated admitted authority

```gherkin
  Scenario: Resume only revalidated admitted authority
    Given one prior-stage artifact is presented for resumption
    When resumability is evaluated
    Then one resumability disposition is emitted
```

Signature, hash, identity, upstream-lineage, and current-plan checks live in
semantic authority. Malformed artifacts produce a non-resumable disposition
rather than a runtime crash.

### Scenario 13: execute the complete admitted conveyor plan

```gherkin
  Scenario: Execute the complete admitted conveyor plan
    Given one complete conveyor plan is bound to its governed execution port
    When the course authority conveyor is executed
    Then one terminal course-conveyor signal is emitted
```

The public entry responsibility delegates the plan. The plan and its semantic
interpreter own all stage behavior.

## Canonical identity and responsibility ledger

The following identities are proposed as the canonical documentary spine.
When the machine-readable authority is created, these values must be preserved
byte-for-byte through every downstream artifact.

| # | Scenario ID | Obligation ID | Expectation ID | Responsibility ID | Signal ID | Semantic operation ID |
|---:|---|---|---|---|---|---|
| 1 | `discover-every-admitted-projection-subject` | `identify-the-complete-projection-subject-set` | `expect-one-complete-projection-subject-set` | `discovers-projection-subjects` | `projection-subject-discovery` | `discover-projection-subjects` |
| 2 | `resolve-the-next-authorized-conveyor-stage` | `identify-one-authorized-next-stage` | `expect-one-stage-transition` | `resolves-conveyor-stage` | `conveyor-stage-transition` | `resolve-conveyor-stage` |
| 3 | `project-one-bounded-model-request` | `produce-one-complete-model-request` | `expect-one-bounded-model-request` | `projects-bounded-model-request` | `bounded-model-request-projection` | `project-bounded-model-request` |
| 4 | `obtain-one-bounded-model-submission` | `obtain-one-normalized-model-testimony` | `expect-one-model-submission-testimony` | `obtains-bounded-model-submission` | `bounded-model-submission` | `obtain-bounded-model-submission` |
| 5 | `evaluate-a-model-submission-for-admission` | `resolve-one-submission-admission` | `expect-one-admission-disposition` | `evaluates-model-submission` | `model-submission-admission` | `evaluate-model-submission` |
| 6 | `attest-one-admitted-authority-artifact` | `cryptographically-bind-one-admitted-artifact` | `expect-one-signed-authority-artifact` | `attests-admitted-authority` | `admitted-authority-attestation` | `attest-admitted-authority` |
| 7 | `project-one-admitted-ast-authority` | `derive-one-lossless-conformant-ast-authority` | `expect-one-signed-ast-authority` | `projects-ast-authority` | `ast-authority-projection` | `project-ast-authority` |
| 8 | `invoke-the-trusted-typescript-projector` | `emit-one-projector-signed-typescript-body` | `expect-one-projector-signed-body` | `invokes-typescript-projector` | `typescript-body-projection` | `invoke-typescript-projector` |
| 9 | `evaluate-projected-body-conformance` | `resolve-one-body-projection-conformance` | `expect-one-projection-conformance-disposition` | `evaluates-projected-body` | `projected-body-conformance` | `evaluate-projected-body` |
| 10 | `publish-the-complete-course-lineage-index` | `publish-one-complete-signed-lineage-index` | `expect-one-signed-course-lineage-index` | `projects-course-lineage-index` | `course-lineage-index-projection` | `project-course-lineage-index` |
| 11 | `stop-downstream-execution-after-red` | `authorize-no-downstream-stage-after-red` | `expect-one-stopped-conveyor-transition` | `resolves-red-conveyor-transition` | `red-conveyor-stop` | `resolve-red-conveyor-transition` |
| 12 | `resume-only-revalidated-admitted-authority` | `classify-one-prior-artifact-for-resumption` | `expect-one-resumability-disposition` | `evaluates-resumable-authority` | `authority-resumability` | `evaluate-resumable-authority` |
| 13 | `execute-the-complete-admitted-conveyor-plan` | `execute-one-complete-admitted-conveyor-plan` | `expect-one-terminal-course-conveyor-signal` | `executes-course-authority-conveyor` | `course-authority-conveyor-execution` | `execute-course-authority-conveyor` |

### Focused responsibility and outcome coverage

| Responsibility ID | The one thing it owns | Expected outcome |
|---|---|---|
| `discovers-projection-subjects` | discover admitted subjects | complete ordered subject set |
| `resolves-conveyor-stage` | resolve the next permitted transition | one stage-transition signal |
| `projects-bounded-model-request` | project request authority | one complete provider-neutral request |
| `obtains-bounded-model-submission` | invoke the supplied connector boundary | one normalized testimony |
| `evaluates-model-submission` | determine admission conformance | one admission disposition |
| `attests-admitted-authority` | attest an already-admitted artifact | one signed authority artifact |
| `projects-ast-authority` | project and validate lossless AST authority | one signed AST authority |
| `invokes-typescript-projector` | invoke the trusted projector | one signed TypeScript body |
| `evaluates-projected-body` | compare body against AST and trust authority | one conformance disposition |
| `projects-course-lineage-index` | project the completed lineage view | one signed Markdown index |
| `resolves-red-conveyor-transition` | resolve downstream authority after RED | one stopped transition |
| `evaluates-resumable-authority` | revalidate prior admitted authority | one resumability disposition |
| `executes-course-authority-conveyor` | delegate one complete admitted plan | one terminal conveyor signal |

No responsibility in this ledger owns two outcomes. No outcome is owned by two
responsibilities.

## Complete projected code-body coverage

Each scenario projects four TypeScript surfaces:

1. one responsibility execution body;
2. one declaration-only context/result type body;
3. one projected expectation test body;
4. one projection-conformance execution body.

That gives complete operational and proof coverage without placing test data,
assertion decisions, or conformance rules in TypeScript.

| # | Primary execution body | Type body | Expectation body | Conformance body |
|---:|---|---|---|---|
| 1 | `discovers-projection-subjects.ts` | `projection-subject-discovery.type.ts` | `discovers-projection-subjects.test.ts` | `runs-discovers-projection-subjects-conformance.ts` |
| 2 | `resolves-conveyor-stage.ts` | `conveyor-stage-transition.type.ts` | `resolves-conveyor-stage.test.ts` | `runs-resolves-conveyor-stage-conformance.ts` |
| 3 | `projects-bounded-model-request.ts` | `bounded-model-request-projection.type.ts` | `projects-bounded-model-request.test.ts` | `runs-projects-bounded-model-request-conformance.ts` |
| 4 | `obtains-bounded-model-submission.ts` | `bounded-model-submission.type.ts` | `obtains-bounded-model-submission.test.ts` | `runs-obtains-bounded-model-submission-conformance.ts` |
| 5 | `evaluates-model-submission.ts` | `model-submission-admission.type.ts` | `evaluates-model-submission.test.ts` | `runs-evaluates-model-submission-conformance.ts` |
| 6 | `attests-admitted-authority.ts` | `admitted-authority-attestation.type.ts` | `attests-admitted-authority.test.ts` | `runs-attests-admitted-authority-conformance.ts` |
| 7 | `projects-ast-authority.ts` | `ast-authority-projection.type.ts` | `projects-ast-authority.test.ts` | `runs-projects-ast-authority-conformance.ts` |
| 8 | `invokes-typescript-projector.ts` | `typescript-body-projection.type.ts` | `invokes-typescript-projector.test.ts` | `runs-invokes-typescript-projector-conformance.ts` |
| 9 | `evaluates-projected-body.ts` | `projected-body-conformance.type.ts` | `evaluates-projected-body.test.ts` | `runs-evaluates-projected-body-conformance.ts` |
| 10 | `projects-course-lineage-index.ts` | `course-lineage-index-projection.type.ts` | `projects-course-lineage-index.test.ts` | `runs-projects-course-lineage-index-conformance.ts` |
| 11 | `resolves-red-conveyor-transition.ts` | `red-conveyor-stop.type.ts` | `resolves-red-conveyor-transition.test.ts` | `runs-resolves-red-conveyor-transition-conformance.ts` |
| 12 | `evaluates-resumable-authority.ts` | `authority-resumability.type.ts` | `evaluates-resumable-authority.test.ts` | `runs-evaluates-resumable-authority-conformance.ts` |
| 13 | `executes-course-authority-conveyor.ts` | `course-authority-conveyor-execution.type.ts` | `executes-course-authority-conveyor.test.ts` | `runs-executes-course-authority-conveyor-conformance.ts` |

These names are documentary file-body identities. Later body authority must
assign their exact vertical scenario-relative paths.

The proposed path derivation is:

```text
capabilities/project-course-authority-conveyor/
  scenarios/<scenarioId>/<responsibilityId>/<codeBodyFilename>
```

Every code body in the coverage table receives an adjacent authority:

```text
<codeBodyFilename>.ast.authority.json
```

For example, Scenario 12 balances to:

```text
capabilities/project-course-authority-conveyor/
└── scenarios/
    └── resume-only-revalidated-admitted-authority/
        └── evaluates-resumable-authority/
            ├── evaluates-resumable-authority.ts
            ├── evaluates-resumable-authority.ts.ast.authority.json
            ├── authority-resumability.type.ts
            ├── authority-resumability.type.ts.ast.authority.json
            ├── evaluates-resumable-authority.test.ts
            ├── evaluates-resumable-authority.test.ts.ast.authority.json
            ├── runs-evaluates-resumable-authority-conformance.ts
            └── runs-evaluates-resumable-authority-conformance.ts.ast.authority.json
```

The scenario folder also contains its obligation, expectation, responsibility,
signal, semantic, body, and projection authority. The code surfaces never move
to a horizontal generated-code or proof directory.

### Primary responsibility body shape

Every row's primary body uses the stage-delegation profile already demonstrated
later in this document:

```typescript
export async function projectedResponsibility(
  context: ProjectedResponsibilityContext
): Promise<ProjectedResponsibilitySignal> {
  return await context.execute(context.input);
}
```

The actual exported function name, context member, input member, and result type
come from that scenario's semantic and body authority.

### Declaration-only type body shape

```typescript
export interface ProjectedResponsibilityContext {
  readonly input: ProjectedInput;
  readonly execute: SemanticOperation<
    ProjectedInput,
    ProjectedResponsibilitySignal
  >;
}
```

The type body declares capability. It constructs no runtime context.

### Projected expectation body shape

```typescript
export async function provesProjectedExpectation(
  context: ProvesProjectedExpectationContext
): Promise<ExpectationSignal> {
  const observed = await context.execute(context.fixture);
  return await context.assert(context.expectation, observed);
}
```

The fixture and expectation are authority values. The test body creates
neither.

### Projection-conformance body shape

```typescript
export async function runsProjectionConformance(
  context: RunsProjectionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
```

The body contains no AST traversal, hash comparison, signature verification,
forbidden-node list, or RED/GREEN branch. Those are conformance semantic
authority.

## How a student traces one scenario into code

Stage 8 is the concrete tie-out example.

```text
Feature
  project-course-authority-through-a-governed-conveyor

Scenario
  invoke-the-trusted-typescript-projector

Obligation
  emit-one-projector-signed-typescript-body

Expectation
  expect-one-projector-signed-body

Responsibility
  invokes-typescript-projector

Signal
  typescript-body-projection

Semantic operation
  invoke-typescript-projector

Primary body
  invokes-typescript-projector.ts
    → invokes-typescript-projector.ts.ast.authority.json

Type body
  typescript-body-projection.type.ts
    → typescript-body-projection.type.ts.ast.authority.json

Expected-body projection
  invokes-typescript-projector.test.ts
    → invokes-typescript-projector.test.ts.ast.authority.json

Projection-conformance body
  runs-invokes-typescript-projector-conformance.ts
    → runs-invokes-typescript-projector-conformance.ts.ast.authority.json
```

The student can trace downward from the feature to a body and upward from any
body to exactly one scenario. The same trace must work for all thirteen binding
cards. A matching word in two filenames is not sufficient; the machine-readable
artifacts must carry the exact IDs and upstream hashes.

## Documentary completeness equations

Before machine-readable artifacts are created, the documentation must balance:

```text
feature count                         = 1
user-story count                      = 1
scenario count                        = 13
obligation count                      = 13
expectation count                     = 13
responsibility count                  = 13
signal-family count                   = 13
semantic-operation count              = 13
primary responsibility-body count     = 13
declaration-only type-body count       = 13
projected expectation-body count      = 13
projection-conformance-body count      = 13
total projected TypeScript body count = 52
required adjacent AST-authority count  = 52
detached projection-receipt count      = 0
```

Cardinality invariants:

```text
for every scenario:
  independent obligations = 1
  focused responsibilities = 1
  expected outcomes = 1
  signal families = 1
  semantic operations = 1
  primary responsibility bodies = 1
  type bodies = 1
  expectation bodies = 1
  conformance bodies = 1

for every projected TypeScript body:
  adjacent AST authorities = 1
  embedded projector attestations = 1
  detached projection receipts = 0
```

Identity invariants:

```text
every scenarioId appears once in the identity ledger
every obligationId appears once in the identity ledger
every expectationId appears once in the identity ledger
every responsibilityId appears once in the identity ledger
every signalId appears once in the identity ledger
every semanticOperationId appears once in the identity ledger
every primary body filename appears once in code-body coverage
every primary body maps back to exactly one responsibility
every companion body maps back to exactly one scenario
```

The future documentation-conformance evaluator must calculate these
relationships from admitted authority. It must not rely on the counts printed
in this prose.

```text
human and course authority
  → bounded model request authority
  → model submission testimony
  → admitted semantic authority
  → admitted AST authority
  → deterministic projector
  → projector-signed executable body
  → signed navigational index
```

Every arrow is governed. No arrow means "let the model or conveyor figure out
what code would be useful."

## Repository ownership boundary

The three repositories have distinct authority:

| Repository | Owns | Must not own |
|---|---|---|
| `canonical-feature-authority` | course intent, conveyor plan, lane semantics, identities, artifact placement, expected lineage | provider protocol, generic model execution, TypeScript rendering |
| `generic-llm-connector` | obtaining one response under supplied provider/model/request/evidence authority | course lanes, course paths, feature IDs, AST shapes, TypeScript templates |
| `declarative-typescript-body-projector` | validating AST projection authority, emitting exact TypeScript bytes, hashing, signing, checking | course semantics, LLM prompting, provider selection, semantic decisions |

The course supplies declarations to both tools. Neither tool hard-codes this
course.

## The conveyor is data before it is code

The durable conveyor definition is a declarative semantic execution plan. It
must identify:

- the capability and scenario being projected;
- the ordered authority stages;
- the input authority for each stage;
- the schema of each permitted model submission;
- the exact identities that must be preserved;
- the admission rule for each submission;
- the disposition emitted by acceptance, rejection, or unresolved authority;
- the next stage authorized by each disposition;
- the artifact location derived from file-body authority;
- the signing authority allowed to attest admission;
- the AST authority allowed to reach the projector;
- the projector identity and trusted key authority;
- the conformance checks required before the next stage may execute;
- the signed index projection required after completion.

Those values belong in JSON and SEJ authority. They do not appear as constants,
arrays, lookup tables, prompt strings, path lists, or conditionals in a
TypeScript conveyor body.

## Proposed capability-first authority shape

The eventual conveyor authority should live vertically with the capability it
governs. A representative shape is:

```text
capabilities/
└── project-course-authority-conveyor/
    ├── describes-human-need.md
    ├── projects-capability-authority.json
    ├── projects-course-authority.feature
    └── scenarios/
        └── project-every-admitted-course-body/
            ├── analyzes-scenario-intent.md
            ├── requires-projector-only-code-origin.obligation.json
            ├── expects-complete-course-projection.expectation.json
            └── executes-course-authority-conveyor/
                ├── declares-responsibility.json
                ├── declares-course-conveyor-signal.json
                ├── binds-responsibility-to-semantic-edge.json
                ├── discovers-projection-authorities.sej.json
                ├── obtains-bounded-model-submissions.sej.json
                ├── admits-signed-authority.sej.json
                ├── resolves-conveyor-disposition.sej.json
                ├── invokes-typescript-projector.sej.json
                ├── evaluates-projected-body-conformance.sej.json
                ├── projects-course-lineage-index.sej.json
                ├── expects-course-conveyor-body.json
                ├── declares-course-conveyor-body.json
                ├── projects-course-conveyor-body.json
                ├── projects-course-conveyor-ast.json
                ├── executes-course-authority-conveyor.ts
                └── executes-course-authority-conveyor.ts.ast.authority.json
```

This is a proposed authority topology, not a request to create these artifacts
yet. Their exact names should be admitted during the authority-design phase.

The topology remains vertical. It does not create repository-wide
`receipts/`, `generated/`, `proof/`, or `llm-output/` forests.

## Semantic conveyor stages

The conveyor plan is a sequence of semantic responsibilities. The projected
TypeScript does not implement these responsibilities; it invokes their
pre-bound ports.

Every stage below includes a binding card. The card is the local join between
the feature scenario near the top of this document and the projected code shown
beside the stage. Students should not have to infer that relationship from a
similar filename.

### Stage 1: discover admitted projection subjects

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`discover-every-admitted-projection-subject`](#scenario-1-discover-every-admitted-projection-subject) |
| Obligation | `identify-the-complete-projection-subject-set` |
| Expectation | `expect-one-complete-projection-subject-set` |
| Responsibility | `discovers-projection-subjects` |
| Signal | `projection-subject-discovery` |
| Semantic operation | `discover-projection-subjects` |
| Body authority chain | `expects-discovers-projection-subjects-body.json` → `declares-discovers-projection-subjects-body.json` → `projects-discovers-projection-subjects-body.json` |
| Primary body | `discovers-projection-subjects.ts` |
| Type body | `projection-subject-discovery.type.ts` |
| Expected-body projection | `discovers-projection-subjects.test.ts` |
| Projection-conformance body | `runs-discovers-projection-subjects-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Semantic authority owns:

- which authority schema identifies a projection subject;
- the authorized discovery root;
- ignored paths;
- duplicate-target handling;
- deterministic ordering;
- the disposition for malformed or missing authority.

The projected body shape is:

```typescript
export async function discoversProjectionSubjects(
  context: DiscoversProjectionSubjectsContext
): Promise<ProjectionSubjectSet> {
  return await context.discover(context.authority);
}
```

There is no directory loop, glob, suffix literal, path filtering, JSON parsing,
sorting, or duplicate check in this body.

### Stage 2: resolve the next admitted authority stage

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`resolve-the-next-authorized-conveyor-stage`](#scenario-2-resolve-the-next-authorized-conveyor-stage) |
| Obligation | `identify-one-authorized-next-stage` |
| Expectation | `expect-one-stage-transition` |
| Responsibility | `resolves-conveyor-stage` |
| Signal | `conveyor-stage-transition` |
| Semantic operation | `resolve-conveyor-stage` |
| Body authority chain | `expects-resolves-conveyor-stage-body.json` → `declares-resolves-conveyor-stage-body.json` → `projects-resolves-conveyor-stage-body.json` |
| Primary body | `resolves-conveyor-stage.ts` |
| Type body | `conveyor-stage-transition.type.ts` |
| Expected-body projection | `resolves-conveyor-stage.test.ts` |
| Projection-conformance body | `runs-resolves-conveyor-stage-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Semantic authority owns:

- stage order;
- upstream prerequisites;
- RED stop behavior;
- resume eligibility;
- whether a stage is already satisfied;
- terminal completion.

The projected body shape is:

```typescript
export async function resolvesConveyorStage(
  context: ResolvesConveyorStageContext
): Promise<ConveyorStageSignal> {
  return await context.resolve(context.plan);
}
```

There is no `if`, `switch`, stage-name array, index increment, or state-machine
table in TypeScript.

### Stage 3: project a bounded model request

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`project-one-bounded-model-request`](#scenario-3-project-one-bounded-model-request) |
| Obligation | `produce-one-complete-model-request` |
| Expectation | `expect-one-bounded-model-request` |
| Responsibility | `projects-bounded-model-request` |
| Signal | `bounded-model-request-projection` |
| Semantic operation | `project-bounded-model-request` |
| Body authority chain | `expects-projects-bounded-model-request-body.json` → `declares-projects-bounded-model-request-body.json` → `projects-projects-bounded-model-request-body.json` |
| Primary body | `projects-bounded-model-request.ts` |
| Type body | `bounded-model-request-projection.type.ts` |
| Expected-body projection | `projects-bounded-model-request.test.ts` |
| Projection-conformance body | `runs-projects-bounded-model-request-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Request authority owns:

- system and user instruction authority;
- provider authority reference;
- model alias;
- structured-output schema;
- token and temperature policy;
- attempt, timeout, and substitution policy;
- evidence-capture policy;
- exact identity-preservation requirements.

The projected body shape is:

```typescript
export async function projectsBoundedModelRequest(
  context: ProjectsBoundedModelRequestContext
): Promise<ModelRequestAuthority> {
  return await context.project(context.stage);
}
```

The body creates no message array, request object, JSON Schema object, prompt
string, model name, timeout, or retry configuration.

### Stage 4: obtain one model response

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`obtain-one-bounded-model-submission`](#scenario-4-obtain-one-bounded-model-submission) |
| Obligation | `obtain-one-normalized-model-testimony` |
| Expectation | `expect-one-model-submission-testimony` |
| Responsibility | `obtains-bounded-model-submission` |
| Signal | `bounded-model-submission` |
| Semantic operation | `obtain-bounded-model-submission` |
| Body authority chain | `expects-obtains-bounded-model-submission-body.json` → `declares-obtains-bounded-model-submission-body.json` → `projects-obtains-bounded-model-submission-body.json` |
| Primary body | `obtains-bounded-model-submission.ts` |
| Type body | `bounded-model-submission.type.ts` |
| Expected-body projection | `obtains-bounded-model-submission.test.ts` |
| Projection-conformance body | `runs-obtains-bounded-model-submission-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

The generic connector receives a complete request authority. The conveyor body
does not know Gemini, OpenAI, HTTP, credentials, endpoints, or SDK shapes.

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<ModelSubmissionTestimony> {
  return await context.obtain(context.request);
}
```

Provider resolution, credential access, transport, timeout observation, and
response normalization remain behind `context.obtain`.

### Stage 5: evaluate admission

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`evaluate-a-model-submission-for-admission`](#scenario-5-evaluate-a-model-submission-for-admission) |
| Obligation | `resolve-one-submission-admission` |
| Expectation | `expect-one-admission-disposition` |
| Responsibility | `evaluates-model-submission` |
| Signal | `model-submission-admission` |
| Semantic operation | `evaluate-model-submission` |
| Body authority chain | `expects-evaluates-model-submission-body.json` → `declares-evaluates-model-submission-body.json` → `projects-evaluates-model-submission-body.json` |
| Primary body | `evaluates-model-submission.ts` |
| Type body | `model-submission-admission.type.ts` |
| Expected-body projection | `evaluates-model-submission.test.ts` |
| Projection-conformance body | `runs-evaluates-model-submission-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Admission semantic authority owns:

- schema conformance;
- exact identity preservation;
- forbidden fields;
- forbidden source-code content;
- upstream hash requirements;
- accepted, rejected, and unresolved dispositions.

```typescript
export async function evaluatesModelSubmission(
  context: EvaluatesModelSubmissionContext
): Promise<AdmissionSignal> {
  return await context.evaluate(context.submission);
}
```

The body contains no validation branch, regular expression, property lookup,
schema traversal, or RED/GREEN literal.

### Stage 6: attest admitted authority

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`attest-one-admitted-authority-artifact`](#scenario-6-attest-one-admitted-authority-artifact) |
| Obligation | `cryptographically-bind-one-admitted-artifact` |
| Expectation | `expect-one-signed-authority-artifact` |
| Responsibility | `attests-admitted-authority` |
| Signal | `admitted-authority-attestation` |
| Semantic operation | `attest-admitted-authority` |
| Body authority chain | `expects-attests-admitted-authority-body.json` → `declares-attests-admitted-authority-body.json` → `projects-attests-admitted-authority-body.json` |
| Primary body | `attests-admitted-authority.ts` |
| Type body | `admitted-authority-attestation.type.ts` |
| Expected-body projection | `attests-admitted-authority.test.ts` |
| Projection-conformance body | `runs-attests-admitted-authority-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Signing authority owns:

- signer identity;
- trusted public key;
- algorithm;
- canonical serialization profile;
- signed payload shape;
- relationship between model testimony and admitted artifact;
- private-key capability binding.

```typescript
export async function attestsAdmittedAuthority(
  context: AttestsAdmittedAuthorityContext
): Promise<SignedAuthorityArtifact> {
  return await context.attest(context.admitted);
}
```

The body constructs no envelope, provenance object, hash payload, signature
object, or key path.

### Stage 7: project or admit AST authority

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`project-one-admitted-ast-authority`](#scenario-7-project-one-admitted-ast-authority) |
| Obligation | `derive-one-lossless-conformant-ast-authority` |
| Expectation | `expect-one-signed-ast-authority` |
| Responsibility | `projects-ast-authority` |
| Signal | `ast-authority-projection` |
| Semantic operation | `project-ast-authority` |
| Body authority chain | `expects-projects-ast-authority-body.json` → `declares-projects-ast-authority-body.json` → `projects-projects-ast-authority-body.json` |
| Primary body | `projects-ast-authority.ts` |
| Type body | `ast-authority-projection.type.ts` |
| Expected-body projection | `projects-ast-authority.test.ts` |
| Projection-conformance body | `runs-projects-ast-authority-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Semantic and AST projection authority own:

- the executable operation graph;
- context and result type references;
- pre-bound semantic operation names;
- structural profile;
- permitted imports;
- exact AST topology;
- exact token stream;
- forbidden nodes and call targets;
- upstream semantic-authority hash.

```typescript
export async function projectsAstAuthority(
  context: ProjectsAstAuthorityContext
): Promise<SignedAstAuthority> {
  return await context.project(context.semanticAuthority);
}
```

The conveyor does not import TypeScript, create compiler nodes, emit tokens,
adopt source text, or construct AST JSON.

If an LLM submits proposed AST authority, its proposal remains model authority
until deterministic validation and admission succeed. The model never receives
projector identity merely because it proposed the AST.

### Stage 8: invoke the deterministic projector

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`invoke-the-trusted-typescript-projector`](#scenario-8-invoke-the-trusted-typescript-projector) |
| Obligation | `emit-one-projector-signed-typescript-body` |
| Expectation | `expect-one-projector-signed-body` |
| Responsibility | `invokes-typescript-projector` |
| Signal | `typescript-body-projection` |
| Semantic operation | `invoke-typescript-projector` |
| Body authority chain | `expects-invokes-typescript-projector-body.json` → `declares-invokes-typescript-projector-body.json` → `projects-invokes-typescript-projector-body.json` |
| Primary body | `invokes-typescript-projector.ts` |
| Type body | `typescript-body-projection.type.ts` |
| Expected-body projection | `invokes-typescript-projector.test.ts` |
| Projection-conformance body | `runs-invokes-typescript-projector-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

The projector receives admitted AST authority and emits the exact body.

```typescript
export async function invokesTypescriptProjector(
  context: InvokesTypescriptProjectorContext
): Promise<ProjectedBodySignal> {
  return await context.project(context.astAuthority);
}
```

The conveyor body has no TypeScript template, line array, token renderer,
compiler import, source string, file extension rule, header builder, or
`writeFile` capability.

### Stage 9: evaluate projected-body conformance

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`evaluate-projected-body-conformance`](#scenario-9-evaluate-projected-body-conformance) |
| Obligation | `resolve-one-body-projection-conformance` |
| Expectation | `expect-one-projection-conformance-disposition` |
| Responsibility | `evaluates-projected-body` |
| Signal | `projected-body-conformance` |
| Semantic operation | `evaluate-projected-body` |
| Body authority chain | `expects-evaluates-projected-body-body.json` → `declares-evaluates-projected-body-body.json` → `projects-evaluates-projected-body-body.json` |
| Primary body | `evaluates-projected-body.ts` |
| Type body | `projected-body-conformance.type.ts` |
| Expected-body projection | `evaluates-projected-body.test.ts` |
| Projection-conformance body | `runs-evaluates-projected-body-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Conformance authority owns:

- reconstruction from AST authority;
- projector identity and trusted-key checks;
- authority hash verification;
- body hash verification;
- signature verification;
- structural-profile verification;
- forbidden-node verification;
- upstream lineage verification.

```typescript
export async function evaluatesProjectedBody(
  context: EvaluatesProjectedBodyContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.projectedBody);
}
```

The body does not compare hashes, parse headers, inspect AST nodes, or choose a
conformance disposition.

### Stage 10: project the course lineage index

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`publish-the-complete-course-lineage-index`](#scenario-10-publish-the-complete-course-lineage-index) |
| Obligation | `publish-one-complete-signed-lineage-index` |
| Expectation | `expect-one-signed-course-lineage-index` |
| Responsibility | `projects-course-lineage-index` |
| Signal | `course-lineage-index-projection` |
| Semantic operation | `project-course-lineage-index` |
| Body authority chain | `expects-projects-course-lineage-index-body.json` → `declares-projects-course-lineage-index-body.json` → `projects-projects-course-lineage-index-body.json` |
| Primary body | `projects-course-lineage-index.ts` |
| Type body | `course-lineage-index-projection.type.ts` |
| Expected-body projection | `projects-course-lineage-index.test.ts` |
| Projection-conformance body | `runs-projects-course-lineage-index-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

Index authority owns:

- which admitted artifacts must be linked;
- display order;
- labels;
- relative-link derivation;
- hashes and signatures that must be shown;
- completion criteria;
- document-signing authority.

```typescript
export async function projectsCourseLineageIndex(
  context: ProjectsCourseLineageIndexContext
): Promise<SignedDocumentSignal> {
  return await context.project(context.lineage);
}
```

The body contains no Markdown template, array of headings, string
interpolation, path arithmetic, or hand-written provenance text.

## The complete projected conveyor body

The strictest final shape delegates the entire admitted plan to a generic
semantic execution port:

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`execute-the-complete-admitted-conveyor-plan`](#scenario-13-execute-the-complete-admitted-conveyor-plan) |
| Obligation | `execute-one-complete-admitted-conveyor-plan` |
| Expectation | `expect-one-terminal-course-conveyor-signal` |
| Responsibility | `executes-course-authority-conveyor` |
| Signal | `course-authority-conveyor-execution` |
| Semantic operation | `execute-course-authority-conveyor` |
| Body authority chain | `expects-executes-course-authority-conveyor-body.json` → `declares-executes-course-authority-conveyor-body.json` → `projects-executes-course-authority-conveyor-body.json` |
| Primary body | `executes-course-authority-conveyor.ts` |
| Type body | `course-authority-conveyor-execution.type.ts` |
| Expected-body projection | `executes-course-authority-conveyor.test.ts` |
| Projection-conformance body | `runs-executes-course-authority-conveyor-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

```typescript
// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: <trusted Ed25519 key id>
// projection-id: project-executes-course-authority-conveyor
// authority-sha256: <exact AST authority hash>
// body-sha256: <exact body hash>
// projection-signature: ed25519:<signature>
// DO NOT EDIT.

import type {
  CourseConveyorContext,
  CourseConveyorSignal
} from "./course-conveyor.type.js";

export async function executesCourseAuthorityConveyor(
  context: CourseConveyorContext
): Promise<CourseConveyorSignal> {
  return await context.execute(context.plan);
}
```

This is the preferred public conveyor entry body.

The plan determines discovery, stage order, model requests, admission,
attestation, AST validation, projection, conformance, stopping, resumption, and
index publication. The TypeScript entry body knows none of those details.

## Optional visible linear pipeline

For teaching, authority may permit a visible linear pipeline when students need
to inspect the major semantic boundaries:

```typescript
export async function executesCourseAuthorityConveyor(
  context: CourseConveyorContext
): Promise<CourseConveyorSignal> {
  const subjects = await context.discover(context.plan);
  const admitted = await context.admit(subjects);
  const projected = await context.project(admitted);
  const verified = await context.verify(projected);
  return await context.publish(verified);
}
```

This remains legal only when:

- the exact sequence is declared in semantic execution authority;
- each call target is pre-bound;
- each result is the complete admitted input to the next operation;
- the operations handle iteration, decisions, construction, and policies
  behind their boundaries;
- the body contains no local branch, callback, object, array, literal, fallback,
  or mutation.

The visible pipeline does not authorize the body to loop over course files. A
subject set is one admitted semantic value processed by the bound operation.

## Projected conveyor context shape

The context is a capability boundary, not a service locator. It exposes only
the operations admitted for this responsibility:

```typescript
export interface CourseConveyorContext {
  readonly plan: CourseConveyorPlanAuthority;
  readonly execute: SemanticOperation<
    CourseConveyorPlanAuthority,
    CourseConveyorSignal
  >;
}
```

For the optional visible pipeline:

```typescript
export interface CourseConveyorContext {
  readonly plan: CourseConveyorPlanAuthority;
  readonly discover: SemanticOperation<
    CourseConveyorPlanAuthority,
    ProjectionSubjectSet
  >;
  readonly admit: SemanticOperation<
    ProjectionSubjectSet,
    AdmittedAuthoritySet
  >;
  readonly project: SemanticOperation<
    AdmittedAuthoritySet,
    ProjectedBodySet
  >;
  readonly verify: SemanticOperation<
    ProjectedBodySet,
    VerifiedProjectionSet
  >;
  readonly publish: SemanticOperation<
    VerifiedProjectionSet,
    CourseConveyorSignal
  >;
}
```

These are declaration-only projections. Runtime construction and binding occur
outside the generated entry body under resolver authority.

The context must not expose:

- an unrestricted file-system handle;
- raw environment access;
- a generic shell or process executor;
- an SDK client;
- a raw private key;
- a TypeScript compiler API;
- an unbounded `invoke(name, payload)` escape hatch;
- mutable conveyor state;
- arbitrary path or string-template utilities.

An overly broad context would let a small body bypass the semantic plan while
still appearing linear.

## No DTO construction in conveyor bodies

Conveyor bodies must not construct:

- model requests or messages;
- provider configuration;
- model responses or testimony;
- authority candidates;
- admission findings;
- artifact envelopes;
- provenance records;
- hash payloads;
- signature records;
- AST nodes or token arrays;
- projection requests;
- conformance results;
- index rows or Markdown documents;
- progress events or completion summaries.

All of these are semantic values projected or returned by admitted operations.

Forbidden:

```typescript
return await context.obtain({
  providerAuthorityId: "primary-cognitive-provider",
  modelAlias: "instruction-capable-model",
  messages: [{ role: "user", content: context.prompt }]
});
```

Legal:

```typescript
return await context.obtain(context.request);
```

Forbidden:

```typescript
return {
  artifact: context.submission,
  invocationId: context.response.invocationId,
  signature: await context.sign(context.submission)
};
```

Legal:

```typescript
return await context.attest(context.admitted);
```

## No branching or hidden branching

Conveyor bodies contain none of:

```text
if / else
switch / case
for / while / do
try / catch / finally
throw
ternary expressions
optional chaining used for fallback
nullish coalescing
logical AND/OR control flow
Promise.catch fallback
array map/filter/reduce used as workflow control
lookup objects used as state machines
callbacks that decide continuation
early returns
mutable stage counters
```

These decisions belong in declared semantic authority:

| Decision | Required authority |
|---|---|
| Continue to the next stage? | conveyor transition authority |
| Stop RED? | admission/conformance disposition authority |
| Resume an artifact? | resume validation authority |
| Retry a provider? | model execution-policy authority |
| Substitute a provider? | provider-substitution authority |
| Persist a submission? | artifact admission authority |
| Invoke the projector? | AST-admission transition authority |
| Publish the index? | completion authority |

The semantic interpreter evaluates those authorities. The projected conveyor
body does not.

## No hard-coded conveyor influence

Executable conveyor bodies contain no literals for:

- lane or stage names;
- feature, scenario, obligation, responsibility, or signal IDs;
- provider authority IDs;
- provider kinds;
- model aliases or resolved model names;
- environment-variable names;
- prompts or system instructions;
- JSON Schema fragments;
- artifact filenames or directory roots;
- `.ts`, `.json`, or Markdown suffixes;
- projector IDs or key IDs;
- algorithm names;
- disposition names;
- timeout, token, temperature, retry, or concurrency values;
- progress messages;
- document headings.

These values may appear in signed declarative authority and projector metadata.
They do not steer execution as handwritten constants.

## LLM authority boundary

The LLM may submit only the schema-bound artifact authorized for the current
stage. It may not submit:

- TypeScript, JavaScript, or another executable source body;
- a projector signature;
- a trusted projector key identity;
- a claim that it emitted the executable body;
- an undeclared artifact path;
- extra identities;
- a replacement for upstream authority;
- a detached assertion that projection succeeded.

The model response is testimony, not automatically admitted authority.
Admission requires deterministic validation and a conveyor signature.

Gemini or another provider may expose a provider request ID, but that is not a
cryptographic provider signature. Documentation must distinguish:

```text
provider testimony
    invocation ID
    provider request ID when available
    resolved model
    request hash
    response hash
    timing and token usage

conveyor admission attestation
    admitted artifact hash
    conveyor key ID
    Ed25519 signature

projector attestation
    AST authority hash
    emitted body hash
    projector key ID
    Ed25519 signature
```

No identity may impersonate another.

## Provenance and lineage chain

Each admitted conveyor artifact must carry or reference:

```text
canonical subject identity
  featureId
  scenarioId
  obligationId
  responsibilityId
  signalId

upstream authority
  artifact identity
  exact artifact hash

live model testimony, when a model was invoked
  provider authority ID
  resolved model
  invocation ID
  request hash
  response hash

admission attestation
  signer ID
  key ID
  algorithm
  admitted artifact hash
  signature

downstream projection relationship
  target authority identity
  target artifact path
```

AST authority additionally binds:

- semantic authority hash;
- structural profile;
- exact source topology and tokens;
- target relative path;
- trusted projector identity.

The generated TypeScript body additionally embeds:

- projector ID;
- projector key ID;
- projection ID;
- AST authority hash;
- body hash;
- projector signature.

The projected body is the projection receipt. No separate
`projection-receipt.json` is created.

## The signed course index

After every required subject reaches conformant projection, a deterministic
document projector produces one Markdown index. The index is navigational
evidence, not a substitute for the linked artifacts.

For every body, it links:

- canonical and semantic authority;
- model-generated authority, when applicable;
- model invocation testimony and hashes;
- conveyor admission hash and signature;
- AST authority;
- projector-generated TypeScript;
- projector key, authority hash, body hash, and signature;
- final conformance disposition.

The index itself carries:

```text
document projector ID
document projector key ID
content hash
document projection signature
DO NOT EDIT marker
```

The index body must be projected from lineage authority. No TypeScript conveyor
body assembles Markdown strings.

## Persistence boundary

The conveyor may persist only artifacts whose admission authority permits
persistence.

Before AST admission, those artifacts are non-executable data. The conveyor has
no capability to write a TypeScript target.

```text
model connector
  returns testimony

admission operation
  may persist admitted JSON authority

AST authority operation
  may persist admitted AST JSON authority

TypeScript projector
  exclusively writes the .ts projection

document projector
  exclusively writes the signed Markdown index
```

File extensions alone are not the security boundary. Capability separation,
schema validation, target authority, trusted keys, hashes, signatures, and
independent reconstruction together establish provenance.

## RED behavior

RED behavior is declarative and fail-closed:

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`stop-downstream-execution-after-red`](#scenario-11-stop-downstream-execution-after-red) |
| Obligation | `authorize-no-downstream-stage-after-red` |
| Expectation | `expect-one-stopped-conveyor-transition` |
| Responsibility | `resolves-red-conveyor-transition` |
| Signal | `red-conveyor-stop` |
| Semantic operation | `resolve-red-conveyor-transition` |
| Body authority chain | `expects-resolves-red-conveyor-transition-body.json` → `declares-resolves-red-conveyor-transition-body.json` → `projects-resolves-red-conveyor-transition-body.json` |
| Primary body | `resolves-red-conveyor-transition.ts` |
| Type body | `red-conveyor-stop.type.ts` |
| Expected-body projection | `resolves-red-conveyor-transition.test.ts` |
| Projection-conformance body | `runs-resolves-red-conveyor-transition-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

- a rejected model submission is not persisted as admitted authority;
- no downstream stage executes;
- no AST authority is admitted from that submission;
- no TypeScript body is emitted for that subject;
- no completion index claims the subject succeeded;
- existing valid upstream authority remains unchanged;
- the observed failure testimony remains available according to evidence
  authority;
- resumption begins only after the failed stage is newly satisfied.

The projected body contains no branch implementing this. A semantic transition
interpreter consumes the declared disposition and transition authority.

```typescript
export async function resolvesRedConveyorTransition(
  context: ResolvesRedConveyorTransitionContext
): Promise<RedConveyorStopSignal> {
  return await context.resolve(context.disposition);
}
```

`context.resolve` is bound to RED transition authority. The body does not
contain the RED literal, choose a downstream stage, or construct the stop
signal.

## Resume behavior

Resume authority must require deterministic revalidation:

**Scenario-to-body binding**

| Authority/body role | Bound identity |
|---|---|
| Scenario | [`resume-only-revalidated-admitted-authority`](#scenario-12-resume-only-revalidated-admitted-authority) |
| Obligation | `classify-one-prior-artifact-for-resumption` |
| Expectation | `expect-one-resumability-disposition` |
| Responsibility | `evaluates-resumable-authority` |
| Signal | `authority-resumability` |
| Semantic operation | `evaluate-resumable-authority` |
| Body authority chain | `expects-evaluates-resumable-authority-body.json` → `declares-evaluates-resumable-authority-body.json` → `projects-evaluates-resumable-authority-body.json` |
| Primary body | `evaluates-resumable-authority.ts` |
| Type body | `authority-resumability.type.ts` |
| Expected-body projection | `evaluates-resumable-authority.test.ts` |
| Projection-conformance body | `runs-evaluates-resumable-authority-conformance.ts` |
| AST coverage | one adjacent `*.ast.authority.json` for each of the four bodies |

1. Parse the candidate as the declared artifact type.
2. Verify its exact admitted artifact hash.
3. Verify its admission signature against trusted conveyor authority.
4. Verify its upstream authority hashes still match.
5. Verify its subject identities still match.
6. Verify its stage is still required by the current plan.
7. Verify no downstream artifact is being used to authorize an upstream stage.

Malformed JSON, missing attestation fields, invalid signatures, stale lineage,
or changed authority returns "not resumable." It must not crash the conveyor
and must not be silently trusted.

Again, these are semantic rules. The projected entry body still remains:

```typescript
export async function evaluatesResumableAuthority(
  context: EvaluatesResumableAuthorityContext
): Promise<AuthorityResumabilitySignal> {
  return await context.evaluate(context.candidate);
}
```

The resume body does not parse attestation fields, inspect signatures, compare
hashes, catch malformed JSON, or decide whether to reuse an artifact.

## AST structural profiles for conveyor bodies

The conveyor introduces these body profiles:

| Profile | Permitted executable topology |
|---|---|
| `conveyor-entry-delegation.v1` | one returned awaited `context.execute(context.plan)` |
| `conveyor-stage-delegation.v1` | one returned awaited pre-bound stage operation |
| `conveyor-linear-pipeline.v1` | immutable results of admitted calls followed by one returned admitted call |
| `conveyor-context-declaration.v1` | type declarations only |

For executable profiles, the allowlist is limited to:

```text
FunctionDeclaration
Parameter
Block
VariableStatement with const declaration, only for the linear profile
ReturnStatement
AwaitExpression
CallExpression
PropertyAccessExpression
Identifier
type-only ImportDeclaration
```

Every call target must resolve to a member admitted by context authority. Every
argument must be an existing context member or immutable result of the
immediately preceding admitted operation.

Any other executable node turns RED.

## Conveyor conformance checks

Conformance must prove:

1. Every projected conveyor body has adjacent valid AST authority.
2. Every body reconstructs exactly from that AST authority.
3. Every embedded projector signature verifies against trusted projector
   authority.
4. No body contains a forbidden AST node.
5. No call target falls outside the context allowlist.
6. No body contains a semantic, provider, path, policy, or disposition literal.
7. No body constructs an object, array, request, testimony, artifact,
   provenance record, AST, signal, or document.
8. The connector is invoked only with supplied provider authority.
9. The connector contains no course-specific identities or paths.
10. The conveyor cannot write TypeScript.
11. The model cannot claim projector identity.
12. Every admitted model artifact verifies against conveyor trust authority.
13. Every AST authority links to admitted upstream semantic authority.
14. Every TypeScript body links to exact AST authority.
15. Altering model authority, AST authority, or body bytes independently turns
    conformance RED.
16. Malformed resume artifacts return not resumable rather than throwing.
17. The signed index covers every required body exactly once.
18. No detached projection receipt exists.

## Student-facing projected result

When the implementation is complete, students should see a small conveyor
entry body:

```typescript
export async function executesCourseAuthorityConveyor(
  context: CourseConveyorContext
): Promise<CourseConveyorSignal> {
  return await context.execute(context.plan);
}
```

They should then be able to follow the meaning outward:

```text
executes-course-authority-conveyor.ts
  → executes-course-authority-conveyor.ts.ast.authority.json
  → projects-course-conveyor-body.json
  → declares-course-conveyor-body.json
  → conveyor semantic execution authorities
  → scenario obligation and expectation
  → canonical feature authority
```

And follow execution evidence downstream:

```text
conveyor plan
  → live model testimony
  → signed admitted semantic authority
  → signed admitted AST authority
  → projector-signed TypeScript body
  → conformance signal
  → signed course lineage index
```

The lesson is visible in the artifacts: the code is tiny because the authority
is complete.

## Implementation order

No conveyor TypeScript should be authored during these steps.

1. Establish the conveyor human need and canonical feature authority.
2. Write the atomic scenario, obligation, expectation, responsibility, and
   signal authority.
3. Declare semantic authorities for discovery, transitions, model request
   projection, admission, attestation, AST admission, projector invocation,
   conformance, resumption, and index publication.
4. Declare the provider-neutral connector boundary and projector boundary.
5. Declare the conveyor context contract with only pre-bound capabilities.
6. Declare the responsibility-body expectation and file-body authority.
7. Declare the structural profile and forbidden topology.
8. Project declarative TypeScript-body authority from those inputs.
9. Project and validate lossless AST authority.
10. Invoke the deterministic TypeScript projector.
11. Verify the emitted body's hashes, signature, topology, dependencies, and
    upstream lineage.
12. Execute the projected expectation and adversarial conformance scenarios.
13. Use the resulting conveyor to traverse the remaining course authorities.
14. Project the signed course lineage index.

If any step needs a handwritten `if`, object literal, prompt, path, lane name,
or TypeScript template inside a conveyor body, stop. The missing decision
belongs in authority or behind a separately governed generic tool boundary.

## Student acceptance checklist

A student accepts the conveyor only when every answer is **yes**:

1. Is course meaning declared in this repository rather than the generic
   connector?
2. Is provider execution supplied entirely by request and provider authority?
3. Is TypeScript emitted only by the declared projector?
4. Is the public conveyor body one clean delegation or admitted linear
   pipeline?
5. Are all operations pre-bound context members?
6. Are all stage transitions data-driven?
7. Are there no branches, loops, catches, fallbacks, or mutable counters?
8. Are there no request, response, artifact, provenance, AST, DTO, signal, or
   Markdown constructions?
9. Are there no course, provider, model, path, policy, disposition, or lane
   literals in executable code?
10. Does each model contribution carry live testimony and conveyor admission
    attestation?
11. Does each emitted body carry projector attestation?
12. Can model authority, AST authority, and body bytes each be verified and
    tamper-tested independently?
13. Does RED prevent persistence and downstream execution?
14. Does malformed resume state fail closed without crashing?
15. Does one signed index link the complete chain without becoming a detached
    projection receipt?
16. Can every generated body be deleted and reproduced from admitted authority?

The final conveyor should look almost disappointingly small in TypeScript.
That is the success condition. All interesting behavior is visible, reviewable,
and signed in authority.
