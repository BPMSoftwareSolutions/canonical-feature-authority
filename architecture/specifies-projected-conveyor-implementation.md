# Projected Conveyor Implementation Specification

This document defines and indexes the materialized authority and projection
target for the course conveyor. It specifies how the conveyor traverses this
course, obtains bounded LLM submissions, admits semantic and AST authority,
invokes the deterministic TypeScript projector, and publishes verifiable
lineage.

Every documented body now links to its physical semantic executable authority,
lossless AST authority, body authorities, and projector-signed TypeScript
projection. The projected bodies are the implementation skeleton; concrete
runtime collaborators remain supplied through their declared contexts.

## Executable, disposable, and reprojectable proof

The repository-level proof command is:

```text
npm run prove:lifecycle
```

Its projected implementation is
[proves-projected-body-lifecycle.ts](../conformance/proves-projected-body-lifecycle.ts),
which is governed by
[semantic executable authority](../conformance/proves-projected-body-lifecycle.semantic-executable.json)
and
[lossless AST authority](../conformance/proves-projected-body-lifecycle.ts.ast.authority.json).

The proof does not use a scenario-ID allowlist. It discovers conveyor
executables from each `projection-lineage.index.json` and deletion targets from
each `*.ts.ast.authority.json`. Before deleting anything, it rejects absolute
paths, paths escaping the repository, duplicate targets, and bodies missing
embedded projector proof.

For every runtime-bearing conveyor body, both before and after reprojection, it
proves that:

- the authority-declared exported function exists and executes;
- the authority-declared operation is invoked exactly once;
- the authority-declared input is passed by identity; and
- the operation result becomes the projected body's result without alteration.

It then deletes all authority-resolved projected bodies, recreates them through
the trusted projector, requires byte-for-byte equality with the pre-deletion
bodies, verifies every embedded signature, rebuilds, re-executes, and runs the
course tests. A `finally` restoration guard reprojects missing targets if the
proof is interrupted after deletion.

Declaration-only type bodies are compile-time contracts. They are validated by
projection proof and compilation and are not misleadingly reported as runtime
executions.

This is deliberately not a claim that an external runtime collaborator has
performed its effect. A Gemini adapter, signer, file-system adapter, or
projector process must pass its own acceptance proof. This lifecycle proves
that the projected conveyor body faithfully executes its declared boundary; it
does not counterfeit provider testimony.

### Grading trust boundary

Local self-verification is tamper-evident only relative to its trust anchor. A
student who can modify the repository trust file, private signing key,
authority, and proof command controls the complete local claim. Therefore an
anti-cheating grading run must supply its projector trust anchor and proof
workflow from outside the submission, with the grading private key unavailable
to students. The submitted projected bodies remain disposable; the instructor
may delete them and reproduce them from the submitted authority under the
instructor-controlled projector identity.

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

## Physical canonical feature authority

The documentary user story is now materialized as
[projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json):

```json
{
  "authorityType": "canonical-feature-authority.v1",
  "featureId": "project-course-authority-through-a-governed-conveyor",
  "title": "Project course authority through a governed conveyor",
  "userStory": {
    "asA": "student projecting an authority-first system",
    "iWant": "every admitted course authority to move through a governed LLM and deterministic projection conveyor",
    "soThat": "every executable body has complete canonical lineage and provable projector-only code origin"
  },
  "scenarioIds": [
    "discover-every-admitted-projection-subject",
    "resolve-the-next-authorized-conveyor-stage",
    "project-one-bounded-model-request",
    "obtain-one-bounded-model-submission",
    "evaluate-a-model-submission-for-admission",
    "attest-one-admitted-authority-artifact",
    "project-one-admitted-ast-authority",
    "invoke-the-trusted-typescript-projector",
    "evaluate-projected-body-conformance",
    "publish-the-complete-course-lineage-index",
    "stop-downstream-execution-after-red",
    "resume-only-revalidated-admitted-authority",
    "execute-the-complete-admitted-conveyor-plan"
  ],
  "governingObligation": "Every conveyor scenario owns one obligation, responsibility, signal, and projected code-body lineage."
}
```

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
| 1 | `discovers-projection-subjects.ts` | `projection-subject-discovery.type.ts` | `discovers-projection-subjects.expectation.ts` | `runs-discovers-projection-subjects-conformance.ts` |
| 2 | `resolves-conveyor-stage.ts` | `conveyor-stage-transition.type.ts` | `resolves-conveyor-stage.expectation.ts` | `runs-resolves-conveyor-stage-conformance.ts` |
| 3 | `projects-bounded-model-request.ts` | `bounded-model-request-projection.type.ts` | `projects-bounded-model-request.expectation.ts` | `runs-projects-bounded-model-request-conformance.ts` |
| 4 | `obtains-bounded-model-submission.ts` | `bounded-model-submission.type.ts` | `obtains-bounded-model-submission.expectation.ts` | `runs-obtains-bounded-model-submission-conformance.ts` |
| 5 | `evaluates-model-submission.ts` | `model-submission-admission.type.ts` | `evaluates-model-submission.expectation.ts` | `runs-evaluates-model-submission-conformance.ts` |
| 6 | `attests-admitted-authority.ts` | `admitted-authority-attestation.type.ts` | `attests-admitted-authority.expectation.ts` | `runs-attests-admitted-authority-conformance.ts` |
| 7 | `projects-ast-authority.ts` | `ast-authority-projection.type.ts` | `projects-ast-authority.expectation.ts` | `runs-projects-ast-authority-conformance.ts` |
| 8 | `invokes-typescript-projector.ts` | `typescript-body-projection.type.ts` | `invokes-typescript-projector.expectation.ts` | `runs-invokes-typescript-projector-conformance.ts` |
| 9 | `evaluates-projected-body.ts` | `projected-body-conformance.type.ts` | `evaluates-projected-body.expectation.ts` | `runs-evaluates-projected-body-conformance.ts` |
| 10 | `projects-course-lineage-index.ts` | `course-lineage-index-projection.type.ts` | `projects-course-lineage-index.expectation.ts` | `runs-projects-course-lineage-index-conformance.ts` |
| 11 | `resolves-red-conveyor-transition.ts` | `red-conveyor-stop.type.ts` | `resolves-red-conveyor-transition.expectation.ts` | `runs-resolves-red-conveyor-transition-conformance.ts` |
| 12 | `evaluates-resumable-authority.ts` | `authority-resumability.type.ts` | `evaluates-resumable-authority.expectation.ts` | `runs-evaluates-resumable-authority-conformance.ts` |
| 13 | `executes-course-authority-conveyor.ts` | `course-authority-conveyor-execution.type.ts` | `executes-course-authority-conveyor.expectation.ts` | `runs-executes-course-authority-conveyor-conformance.ts` |

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
            ├── evaluates-resumable-authority.expectation.ts
            ├── evaluates-resumable-authority.expectation.ts.ast.authority.json
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
  invokes-typescript-projector.expectation.ts
    → invokes-typescript-projector.expectation.ts.ast.authority.json

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

## Materialized capability-first authority shape

The conveyor authority now lives vertically with the capability it governs:

```text
capabilities/
└── project-course-authority-conveyor/
    ├── projects-conveyor-authority.manifest.json
    ├── projects-capability-authority.json
    ├── projects-course-authority.feature
    └── scenarios/                              # 13 scenario folders
        └── <scenarioId>/
            ├── declares-scenario-authority.json
            ├── <obligationId>.obligation.json
            ├── <expectationId>.expectation.json
            └── <responsibilityId>/
                ├── declares-responsibility.json
                ├── declares-signal.json
                ├── binds-responsibility-to-semantic-edge.json
                ├── executes-<responsibilityId>.sej.json
                ├── projection-lineage.index.json
                └── <four projected body lineages>/
                    ├── projects-*.semantic-executable.json
                    ├── expects-*-body.json
                    ├── declares-*-body.json
                    ├── projects-*-body.json
                    ├── *.ts.ast.authority.json
                    └── *.ts
```

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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/declares-scenario-authority.json) |
| Obligation | `identify-the-complete-projection-subject-set` |
| Expectation | `expect-one-complete-projection-subject-set` |
| Responsibility | `discovers-projection-subjects` |
| Signal | `projection-subject-discovery` |
| Semantic operation | `discover-projection-subjects` |
| Primary semantic executable | [projects-discovers-projection-subjects.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/projects-discovers-projection-subjects.semantic-executable.json) |
| Primary AST authority | [discovers-projection-subjects.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.ts.ast.authority.json) |
| Body authority chain | [expects-discovers-projection-subjects-body.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/expects-discovers-projection-subjects-body.json) → [declares-discovers-projection-subjects-body.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/declares-discovers-projection-subjects-body.json) → [projects-discovers-projection-subjects-body.json](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/projects-discovers-projection-subjects-body.json) |
| Primary body | [discovers-projection-subjects.ts](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.ts) |
| Type body | [projection-subject-discovery.type.ts](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/projection-subject-discovery.type.ts) |
| Expected-body projection | [discovers-projection-subjects.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.expectation.ts) |
| Projection-conformance body | [runs-discovers-projection-subjects-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/runs-discovers-projection-subjects-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/projection-lineage.index.json) |

<!-- physical-authority:discover-every-admitted-projection-subject:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "discovers-projection-subjects-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "discover-every-admitted-projection-subject",
    "obligationId": "identify-the-complete-projection-subject-set",
    "expectationId": "expect-one-complete-projection-subject-set",
    "responsibilityId": "discovers-projection-subjects",
    "signalId": "projection-subject-discovery",
    "semanticOperationId": "discover-projection-subjects"
  },
  "projection": {
    "functionName": "discoversProjectionSubjects",
    "contextParameter": {
      "name": "context",
      "typeReference": "DiscoversProjectionSubjectsContext"
    },
    "resultTypeReference": "ProjectionSubjectDiscoverySignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "discover",
      "argument": {
        "receiver": "context",
        "member": "authority"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-discovers-projection-subjects-from-bea9362bf12fea7b8a064f0fa351c7613d7074344cb3d5698467a9dba99680c0",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "discover-every-admitted-projection-subject",
    "obligationId": "identify-the-complete-projection-subject-set",
    "responsibilityId": "discovers-projection-subjects",
    "signalId": "projection-subject-discovery"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:discover-every-admitted-projection-subject:end -->

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
): Promise<ProjectionSubjectDiscoverySignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/declares-scenario-authority.json) |
| Obligation | `identify-one-authorized-next-stage` |
| Expectation | `expect-one-stage-transition` |
| Responsibility | `resolves-conveyor-stage` |
| Signal | `conveyor-stage-transition` |
| Semantic operation | `resolve-conveyor-stage` |
| Primary semantic executable | [projects-resolves-conveyor-stage.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/projects-resolves-conveyor-stage.semantic-executable.json) |
| Primary AST authority | [resolves-conveyor-stage.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.ts.ast.authority.json) |
| Body authority chain | [expects-resolves-conveyor-stage-body.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/expects-resolves-conveyor-stage-body.json) → [declares-resolves-conveyor-stage-body.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/declares-resolves-conveyor-stage-body.json) → [projects-resolves-conveyor-stage-body.json](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/projects-resolves-conveyor-stage-body.json) |
| Primary body | [resolves-conveyor-stage.ts](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.ts) |
| Type body | [conveyor-stage-transition.type.ts](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/conveyor-stage-transition.type.ts) |
| Expected-body projection | [resolves-conveyor-stage.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.expectation.ts) |
| Projection-conformance body | [runs-resolves-conveyor-stage-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/runs-resolves-conveyor-stage-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/projection-lineage.index.json) |

<!-- physical-authority:resolve-the-next-authorized-conveyor-stage:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "resolves-conveyor-stage-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "resolve-the-next-authorized-conveyor-stage",
    "obligationId": "identify-one-authorized-next-stage",
    "expectationId": "expect-one-stage-transition",
    "responsibilityId": "resolves-conveyor-stage",
    "signalId": "conveyor-stage-transition",
    "semanticOperationId": "resolve-conveyor-stage"
  },
  "projection": {
    "functionName": "resolvesConveyorStage",
    "contextParameter": {
      "name": "context",
      "typeReference": "ResolvesConveyorStageContext"
    },
    "resultTypeReference": "ConveyorStageTransitionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "resolve",
      "argument": {
        "receiver": "context",
        "member": "plan"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-resolves-conveyor-stage-from-7360d9863f789c8889459a519f496ffda115c061d102684a8473001a96145e77",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "resolve-the-next-authorized-conveyor-stage",
    "obligationId": "identify-one-authorized-next-stage",
    "responsibilityId": "resolves-conveyor-stage",
    "signalId": "conveyor-stage-transition"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:resolve-the-next-authorized-conveyor-stage:end -->

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
): Promise<ConveyorStageTransitionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/declares-scenario-authority.json) |
| Obligation | `produce-one-complete-model-request` |
| Expectation | `expect-one-bounded-model-request` |
| Responsibility | `projects-bounded-model-request` |
| Signal | `bounded-model-request-projection` |
| Semantic operation | `project-bounded-model-request` |
| Primary semantic executable | [projects-projects-bounded-model-request.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-projects-bounded-model-request.semantic-executable.json) |
| Primary AST authority | [projects-bounded-model-request.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.ts.ast.authority.json) |
| Body authority chain | [expects-projects-bounded-model-request-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/expects-projects-bounded-model-request-body.json) → [declares-projects-bounded-model-request-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/declares-projects-bounded-model-request-body.json) → [projects-projects-bounded-model-request-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-projects-bounded-model-request-body.json) |
| Primary body | [projects-bounded-model-request.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.ts) |
| Type body | [bounded-model-request-projection.type.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/bounded-model-request-projection.type.ts) |
| Expected-body projection | [projects-bounded-model-request.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.expectation.ts) |
| Projection-conformance body | [runs-projects-bounded-model-request-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/runs-projects-bounded-model-request-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projection-lineage.index.json) |

<!-- physical-authority:project-one-bounded-model-request:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "projects-bounded-model-request-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "project-one-bounded-model-request",
    "obligationId": "produce-one-complete-model-request",
    "expectationId": "expect-one-bounded-model-request",
    "responsibilityId": "projects-bounded-model-request",
    "signalId": "bounded-model-request-projection",
    "semanticOperationId": "project-bounded-model-request"
  },
  "projection": {
    "functionName": "projectsBoundedModelRequest",
    "contextParameter": {
      "name": "context",
      "typeReference": "ProjectsBoundedModelRequestContext"
    },
    "resultTypeReference": "BoundedModelRequestProjectionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "project",
      "argument": {
        "receiver": "context",
        "member": "stage"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-projects-bounded-model-request-from-3788ad6db1a9ae1b55b6be6d86d1a8c41dcdf09f3627937b8500e93b7c17865e",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "project-one-bounded-model-request",
    "obligationId": "produce-one-complete-model-request",
    "responsibilityId": "projects-bounded-model-request",
    "signalId": "bounded-model-request-projection"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:project-one-bounded-model-request:end -->

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
): Promise<BoundedModelRequestProjectionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/declares-scenario-authority.json) |
| Obligation | `obtain-one-normalized-model-testimony` |
| Expectation | `expect-one-model-submission-testimony` |
| Responsibility | `obtains-bounded-model-submission` |
| Signal | `bounded-model-submission` |
| Semantic operation | `obtain-bounded-model-submission` |
| Primary semantic executable | [projects-obtains-bounded-model-submission.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/projects-obtains-bounded-model-submission.semantic-executable.json) |
| Primary AST authority | [obtains-bounded-model-submission.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts.ast.authority.json) |
| Body authority chain | [expects-obtains-bounded-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/expects-obtains-bounded-model-submission-body.json) → [declares-obtains-bounded-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/declares-obtains-bounded-model-submission-body.json) → [projects-obtains-bounded-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/projects-obtains-bounded-model-submission-body.json) |
| Primary body | [obtains-bounded-model-submission.ts](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts) |
| Type body | [bounded-model-submission.type.ts](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/bounded-model-submission.type.ts) |
| Expected-body projection | [obtains-bounded-model-submission.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.expectation.ts) |
| Projection-conformance body | [runs-obtains-bounded-model-submission-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/runs-obtains-bounded-model-submission-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/projection-lineage.index.json) |

<!-- physical-authority:obtain-one-bounded-model-submission:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "obtains-bounded-model-submission-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "obtain-one-bounded-model-submission",
    "obligationId": "obtain-one-normalized-model-testimony",
    "expectationId": "expect-one-model-submission-testimony",
    "responsibilityId": "obtains-bounded-model-submission",
    "signalId": "bounded-model-submission",
    "semanticOperationId": "obtain-bounded-model-submission"
  },
  "projection": {
    "functionName": "obtainsBoundedModelSubmission",
    "contextParameter": {
      "name": "context",
      "typeReference": "ObtainsBoundedModelSubmissionContext"
    },
    "resultTypeReference": "BoundedModelSubmissionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "obtain",
      "argument": {
        "receiver": "context",
        "member": "request"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-obtains-bounded-model-submission-from-b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "obtain-one-bounded-model-submission",
    "obligationId": "obtain-one-normalized-model-testimony",
    "responsibilityId": "obtains-bounded-model-submission",
    "signalId": "bounded-model-submission"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:obtain-one-bounded-model-submission:end -->

The generic connector receives a complete request authority. The conveyor body
does not know Gemini, OpenAI, HTTP, credentials, endpoints, or SDK shapes.

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/declares-scenario-authority.json) |
| Obligation | `resolve-one-submission-admission` |
| Expectation | `expect-one-admission-disposition` |
| Responsibility | `evaluates-model-submission` |
| Signal | `model-submission-admission` |
| Semantic operation | `evaluate-model-submission` |
| Primary semantic executable | [projects-evaluates-model-submission.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/projects-evaluates-model-submission.semantic-executable.json) |
| Primary AST authority | [evaluates-model-submission.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.ts.ast.authority.json) |
| Body authority chain | [expects-evaluates-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/expects-evaluates-model-submission-body.json) → [declares-evaluates-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/declares-evaluates-model-submission-body.json) → [projects-evaluates-model-submission-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/projects-evaluates-model-submission-body.json) |
| Primary body | [evaluates-model-submission.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.ts) |
| Type body | [model-submission-admission.type.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/model-submission-admission.type.ts) |
| Expected-body projection | [evaluates-model-submission.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.expectation.ts) |
| Projection-conformance body | [runs-evaluates-model-submission-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/runs-evaluates-model-submission-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/projection-lineage.index.json) |

<!-- physical-authority:evaluate-a-model-submission-for-admission:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "evaluates-model-submission-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "evaluate-a-model-submission-for-admission",
    "obligationId": "resolve-one-submission-admission",
    "expectationId": "expect-one-admission-disposition",
    "responsibilityId": "evaluates-model-submission",
    "signalId": "model-submission-admission",
    "semanticOperationId": "evaluate-model-submission"
  },
  "projection": {
    "functionName": "evaluatesModelSubmission",
    "contextParameter": {
      "name": "context",
      "typeReference": "EvaluatesModelSubmissionContext"
    },
    "resultTypeReference": "ModelSubmissionAdmissionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": {
        "receiver": "context",
        "member": "submission"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-evaluates-model-submission-from-e6a43b24d2fc7029716d4b0a26123c0978bd67290cca5b0797e255c457d73f7c",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "evaluate-a-model-submission-for-admission",
    "obligationId": "resolve-one-submission-admission",
    "responsibilityId": "evaluates-model-submission",
    "signalId": "model-submission-admission"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:evaluate-a-model-submission-for-admission:end -->

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
): Promise<ModelSubmissionAdmissionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/declares-scenario-authority.json) |
| Obligation | `cryptographically-bind-one-admitted-artifact` |
| Expectation | `expect-one-signed-authority-artifact` |
| Responsibility | `attests-admitted-authority` |
| Signal | `admitted-authority-attestation` |
| Semantic operation | `attest-admitted-authority` |
| Primary semantic executable | [projects-attests-admitted-authority.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/projects-attests-admitted-authority.semantic-executable.json) |
| Primary AST authority | [attests-admitted-authority.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.ts.ast.authority.json) |
| Body authority chain | [expects-attests-admitted-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/expects-attests-admitted-authority-body.json) → [declares-attests-admitted-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/declares-attests-admitted-authority-body.json) → [projects-attests-admitted-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/projects-attests-admitted-authority-body.json) |
| Primary body | [attests-admitted-authority.ts](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.ts) |
| Type body | [admitted-authority-attestation.type.ts](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/admitted-authority-attestation.type.ts) |
| Expected-body projection | [attests-admitted-authority.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.expectation.ts) |
| Projection-conformance body | [runs-attests-admitted-authority-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/runs-attests-admitted-authority-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/projection-lineage.index.json) |

<!-- physical-authority:attest-one-admitted-authority-artifact:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "attests-admitted-authority-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "attest-one-admitted-authority-artifact",
    "obligationId": "cryptographically-bind-one-admitted-artifact",
    "expectationId": "expect-one-signed-authority-artifact",
    "responsibilityId": "attests-admitted-authority",
    "signalId": "admitted-authority-attestation",
    "semanticOperationId": "attest-admitted-authority"
  },
  "projection": {
    "functionName": "attestsAdmittedAuthority",
    "contextParameter": {
      "name": "context",
      "typeReference": "AttestsAdmittedAuthorityContext"
    },
    "resultTypeReference": "AdmittedAuthorityAttestationSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "attest",
      "argument": {
        "receiver": "context",
        "member": "admitted"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-attests-admitted-authority-from-685e217fe9464d4f75b1ce9659b729dc42b2c4a9fc62a66fd8a7d3fda4fae876",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "attest-one-admitted-authority-artifact",
    "obligationId": "cryptographically-bind-one-admitted-artifact",
    "responsibilityId": "attests-admitted-authority",
    "signalId": "admitted-authority-attestation"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:attest-one-admitted-authority-artifact:end -->

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
): Promise<AdmittedAuthorityAttestationSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/declares-scenario-authority.json) |
| Obligation | `derive-one-lossless-conformant-ast-authority` |
| Expectation | `expect-one-signed-ast-authority` |
| Responsibility | `projects-ast-authority` |
| Signal | `ast-authority-projection` |
| Semantic operation | `project-ast-authority` |
| Primary semantic executable | [projects-projects-ast-authority.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-projects-ast-authority.semantic-executable.json) |
| Primary AST authority | [projects-ast-authority.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.ts.ast.authority.json) |
| Body authority chain | [expects-projects-ast-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/expects-projects-ast-authority-body.json) → [declares-projects-ast-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/declares-projects-ast-authority-body.json) → [projects-projects-ast-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-projects-ast-authority-body.json) |
| Primary body | [projects-ast-authority.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.ts) |
| Type body | [ast-authority-projection.type.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/ast-authority-projection.type.ts) |
| Expected-body projection | [projects-ast-authority.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.expectation.ts) |
| Projection-conformance body | [runs-projects-ast-authority-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/runs-projects-ast-authority-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projection-lineage.index.json) |

<!-- physical-authority:project-one-admitted-ast-authority:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "projects-ast-authority-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "project-one-admitted-ast-authority",
    "obligationId": "derive-one-lossless-conformant-ast-authority",
    "expectationId": "expect-one-signed-ast-authority",
    "responsibilityId": "projects-ast-authority",
    "signalId": "ast-authority-projection",
    "semanticOperationId": "project-ast-authority"
  },
  "projection": {
    "functionName": "projectsAstAuthority",
    "contextParameter": {
      "name": "context",
      "typeReference": "ProjectsAstAuthorityContext"
    },
    "resultTypeReference": "AstAuthorityProjectionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "project",
      "argument": {
        "receiver": "context",
        "member": "semanticAuthority"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-projects-ast-authority-from-a873a4793c310c7b58aea1d7e9fcc699ab7343c911f918757c8bfd1ae8f626f9",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "project-one-admitted-ast-authority",
    "obligationId": "derive-one-lossless-conformant-ast-authority",
    "responsibilityId": "projects-ast-authority",
    "signalId": "ast-authority-projection"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:project-one-admitted-ast-authority:end -->

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
): Promise<AstAuthorityProjectionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/declares-scenario-authority.json) |
| Obligation | `emit-one-projector-signed-typescript-body` |
| Expectation | `expect-one-projector-signed-body` |
| Responsibility | `invokes-typescript-projector` |
| Signal | `typescript-body-projection` |
| Semantic operation | `invoke-typescript-projector` |
| Primary semantic executable | [projects-invokes-typescript-projector.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/projects-invokes-typescript-projector.semantic-executable.json) |
| Primary AST authority | [invokes-typescript-projector.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.ts.ast.authority.json) |
| Body authority chain | [expects-invokes-typescript-projector-body.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/expects-invokes-typescript-projector-body.json) → [declares-invokes-typescript-projector-body.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/declares-invokes-typescript-projector-body.json) → [projects-invokes-typescript-projector-body.json](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/projects-invokes-typescript-projector-body.json) |
| Primary body | [invokes-typescript-projector.ts](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.ts) |
| Type body | [typescript-body-projection.type.ts](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/typescript-body-projection.type.ts) |
| Expected-body projection | [invokes-typescript-projector.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.expectation.ts) |
| Projection-conformance body | [runs-invokes-typescript-projector-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/runs-invokes-typescript-projector-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/projection-lineage.index.json) |

<!-- physical-authority:invoke-the-trusted-typescript-projector:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "invokes-typescript-projector-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "invoke-the-trusted-typescript-projector",
    "obligationId": "emit-one-projector-signed-typescript-body",
    "expectationId": "expect-one-projector-signed-body",
    "responsibilityId": "invokes-typescript-projector",
    "signalId": "typescript-body-projection",
    "semanticOperationId": "invoke-typescript-projector"
  },
  "projection": {
    "functionName": "invokesTypescriptProjector",
    "contextParameter": {
      "name": "context",
      "typeReference": "InvokesTypescriptProjectorContext"
    },
    "resultTypeReference": "TypescriptBodyProjectionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "project",
      "argument": {
        "receiver": "context",
        "member": "astAuthority"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-invokes-typescript-projector-from-f477dc262bdf691ce00b2162a06ed3f8573c6f66c3c38f8f112f53904d03a95e",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "invoke-the-trusted-typescript-projector",
    "obligationId": "emit-one-projector-signed-typescript-body",
    "responsibilityId": "invokes-typescript-projector",
    "signalId": "typescript-body-projection"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:invoke-the-trusted-typescript-projector:end -->

The projector receives admitted AST authority and emits the exact body.

```typescript
export async function invokesTypescriptProjector(
  context: InvokesTypescriptProjectorContext
): Promise<TypescriptBodyProjectionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/declares-scenario-authority.json) |
| Obligation | `resolve-one-body-projection-conformance` |
| Expectation | `expect-one-projection-conformance-disposition` |
| Responsibility | `evaluates-projected-body` |
| Signal | `projected-body-conformance` |
| Semantic operation | `evaluate-projected-body` |
| Primary semantic executable | [projects-evaluates-projected-body.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/projects-evaluates-projected-body.semantic-executable.json) |
| Primary AST authority | [evaluates-projected-body.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.ts.ast.authority.json) |
| Body authority chain | [expects-evaluates-projected-body-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/expects-evaluates-projected-body-body.json) → [declares-evaluates-projected-body-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/declares-evaluates-projected-body-body.json) → [projects-evaluates-projected-body-body.json](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/projects-evaluates-projected-body-body.json) |
| Primary body | [evaluates-projected-body.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.ts) |
| Type body | [projected-body-conformance.type.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/projected-body-conformance.type.ts) |
| Expected-body projection | [evaluates-projected-body.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.expectation.ts) |
| Projection-conformance body | [runs-evaluates-projected-body-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/runs-evaluates-projected-body-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/projection-lineage.index.json) |

<!-- physical-authority:evaluate-projected-body-conformance:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "evaluates-projected-body-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "evaluate-projected-body-conformance",
    "obligationId": "resolve-one-body-projection-conformance",
    "expectationId": "expect-one-projection-conformance-disposition",
    "responsibilityId": "evaluates-projected-body",
    "signalId": "projected-body-conformance",
    "semanticOperationId": "evaluate-projected-body"
  },
  "projection": {
    "functionName": "evaluatesProjectedBody",
    "contextParameter": {
      "name": "context",
      "typeReference": "EvaluatesProjectedBodyContext"
    },
    "resultTypeReference": "ProjectedBodyConformanceSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": {
        "receiver": "context",
        "member": "projectedBody"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-evaluates-projected-body-from-ed24b03968a85d78a8d99475243393ca3f939cec42e9185593cba6dd3d2d7b61",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "evaluate-projected-body-conformance",
    "obligationId": "resolve-one-body-projection-conformance",
    "responsibilityId": "evaluates-projected-body",
    "signalId": "projected-body-conformance"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:evaluate-projected-body-conformance:end -->

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
): Promise<ProjectedBodyConformanceSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/declares-scenario-authority.json) |
| Obligation | `publish-one-complete-signed-lineage-index` |
| Expectation | `expect-one-signed-course-lineage-index` |
| Responsibility | `projects-course-lineage-index` |
| Signal | `course-lineage-index-projection` |
| Semantic operation | `project-course-lineage-index` |
| Primary semantic executable | [projects-projects-course-lineage-index.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-projects-course-lineage-index.semantic-executable.json) |
| Primary AST authority | [projects-course-lineage-index.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts.ast.authority.json) |
| Body authority chain | [expects-projects-course-lineage-index-body.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/expects-projects-course-lineage-index-body.json) → [declares-projects-course-lineage-index-body.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/declares-projects-course-lineage-index-body.json) → [projects-projects-course-lineage-index-body.json](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-projects-course-lineage-index-body.json) |
| Primary body | [projects-course-lineage-index.ts](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts) |
| Type body | [course-lineage-index-projection.type.ts](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/course-lineage-index-projection.type.ts) |
| Expected-body projection | [projects-course-lineage-index.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.expectation.ts) |
| Projection-conformance body | [runs-projects-course-lineage-index-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/runs-projects-course-lineage-index-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projection-lineage.index.json) |

<!-- physical-authority:publish-the-complete-course-lineage-index:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "projects-course-lineage-index-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "publish-the-complete-course-lineage-index",
    "obligationId": "publish-one-complete-signed-lineage-index",
    "expectationId": "expect-one-signed-course-lineage-index",
    "responsibilityId": "projects-course-lineage-index",
    "signalId": "course-lineage-index-projection",
    "semanticOperationId": "project-course-lineage-index"
  },
  "projection": {
    "functionName": "projectsCourseLineageIndex",
    "contextParameter": {
      "name": "context",
      "typeReference": "ProjectsCourseLineageIndexContext"
    },
    "resultTypeReference": "CourseLineageIndexProjectionSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "project",
      "argument": {
        "receiver": "context",
        "member": "lineage"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-projects-course-lineage-index-from-ece36b939356325fd945fa18502af6e70f3fd5dadbdf9e212be073eae036451d",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "publish-the-complete-course-lineage-index",
    "obligationId": "publish-one-complete-signed-lineage-index",
    "responsibilityId": "projects-course-lineage-index",
    "signalId": "course-lineage-index-projection"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:publish-the-complete-course-lineage-index:end -->

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
): Promise<CourseLineageIndexProjectionSignal> {
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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/declares-scenario-authority.json) |
| Obligation | `execute-one-complete-admitted-conveyor-plan` |
| Expectation | `expect-one-terminal-course-conveyor-signal` |
| Responsibility | `executes-course-authority-conveyor` |
| Signal | `course-authority-conveyor-execution` |
| Semantic operation | `execute-course-authority-conveyor` |
| Primary semantic executable | [projects-executes-course-authority-conveyor.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/projects-executes-course-authority-conveyor.semantic-executable.json) |
| Primary AST authority | [executes-course-authority-conveyor.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts.ast.authority.json) |
| Body authority chain | [expects-executes-course-authority-conveyor-body.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/expects-executes-course-authority-conveyor-body.json) → [declares-executes-course-authority-conveyor-body.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/declares-executes-course-authority-conveyor-body.json) → [projects-executes-course-authority-conveyor-body.json](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/projects-executes-course-authority-conveyor-body.json) |
| Primary body | [executes-course-authority-conveyor.ts](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts) |
| Type body | [course-authority-conveyor-execution.type.ts](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/course-authority-conveyor-execution.type.ts) |
| Expected-body projection | [executes-course-authority-conveyor.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.expectation.ts) |
| Projection-conformance body | [runs-executes-course-authority-conveyor-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/runs-executes-course-authority-conveyor-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/projection-lineage.index.json) |

<!-- physical-authority:execute-the-complete-admitted-conveyor-plan:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-entry-delegation.v1",
  "bodyId": "executes-course-authority-conveyor-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "execute-the-complete-admitted-conveyor-plan",
    "obligationId": "execute-one-complete-admitted-conveyor-plan",
    "expectationId": "expect-one-terminal-course-conveyor-signal",
    "responsibilityId": "executes-course-authority-conveyor",
    "signalId": "course-authority-conveyor-execution",
    "semanticOperationId": "execute-course-authority-conveyor"
  },
  "projection": {
    "functionName": "executesCourseAuthorityConveyor",
    "contextParameter": {
      "name": "context",
      "typeReference": "CourseConveyorContext"
    },
    "resultTypeReference": "CourseConveyorSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "execute",
      "argument": {
        "receiver": "context",
        "member": "plan"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-executes-course-authority-conveyor-from-0ce67f6cd9bf94156891d2c861d57e6ed342804e612881497ba0ebbfcbf0c507",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "execute-the-complete-admitted-conveyor-plan",
    "obligationId": "execute-one-complete-admitted-conveyor-plan",
    "responsibilityId": "executes-course-authority-conveyor",
    "signalId": "course-authority-conveyor-execution"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:execute-the-complete-admitted-conveyor-plan:end -->

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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/declares-scenario-authority.json) |
| Obligation | `authorize-no-downstream-stage-after-red` |
| Expectation | `expect-one-stopped-conveyor-transition` |
| Responsibility | `resolves-red-conveyor-transition` |
| Signal | `red-conveyor-stop` |
| Semantic operation | `resolve-red-conveyor-transition` |
| Primary semantic executable | [projects-resolves-red-conveyor-transition.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/projects-resolves-red-conveyor-transition.semantic-executable.json) |
| Primary AST authority | [resolves-red-conveyor-transition.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.ts.ast.authority.json) |
| Body authority chain | [expects-resolves-red-conveyor-transition-body.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/expects-resolves-red-conveyor-transition-body.json) → [declares-resolves-red-conveyor-transition-body.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/declares-resolves-red-conveyor-transition-body.json) → [projects-resolves-red-conveyor-transition-body.json](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/projects-resolves-red-conveyor-transition-body.json) |
| Primary body | [resolves-red-conveyor-transition.ts](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.ts) |
| Type body | [red-conveyor-stop.type.ts](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/red-conveyor-stop.type.ts) |
| Expected-body projection | [resolves-red-conveyor-transition.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.expectation.ts) |
| Projection-conformance body | [runs-resolves-red-conveyor-transition-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/runs-resolves-red-conveyor-transition-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/projection-lineage.index.json) |

<!-- physical-authority:stop-downstream-execution-after-red:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "resolves-red-conveyor-transition-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "stop-downstream-execution-after-red",
    "obligationId": "authorize-no-downstream-stage-after-red",
    "expectationId": "expect-one-stopped-conveyor-transition",
    "responsibilityId": "resolves-red-conveyor-transition",
    "signalId": "red-conveyor-stop",
    "semanticOperationId": "resolve-red-conveyor-transition"
  },
  "projection": {
    "functionName": "resolvesRedConveyorTransition",
    "contextParameter": {
      "name": "context",
      "typeReference": "ResolvesRedConveyorTransitionContext"
    },
    "resultTypeReference": "RedConveyorStopSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "resolve",
      "argument": {
        "receiver": "context",
        "member": "disposition"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-resolves-red-conveyor-transition-from-c2a38bf906964fe0666179ff28581e246ce8e9c64f3c5c37b281f155b6f80763",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "stop-downstream-execution-after-red",
    "obligationId": "authorize-no-downstream-stage-after-red",
    "responsibilityId": "resolves-red-conveyor-transition",
    "signalId": "red-conveyor-stop"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:stop-downstream-execution-after-red:end -->

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
| Feature authority | [projects-capability-authority.json](../capabilities/project-course-authority-conveyor/projects-capability-authority.json) |
| Scenario authority | [declares-scenario-authority.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/declares-scenario-authority.json) |
| Obligation | `classify-one-prior-artifact-for-resumption` |
| Expectation | `expect-one-resumability-disposition` |
| Responsibility | `evaluates-resumable-authority` |
| Signal | `authority-resumability` |
| Semantic operation | `evaluate-resumable-authority` |
| Primary semantic executable | [projects-evaluates-resumable-authority.semantic-executable.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/projects-evaluates-resumable-authority.semantic-executable.json) |
| Primary AST authority | [evaluates-resumable-authority.ts.ast.authority.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.ts.ast.authority.json) |
| Body authority chain | [expects-evaluates-resumable-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/expects-evaluates-resumable-authority-body.json) → [declares-evaluates-resumable-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/declares-evaluates-resumable-authority-body.json) → [projects-evaluates-resumable-authority-body.json](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/projects-evaluates-resumable-authority-body.json) |
| Primary body | [evaluates-resumable-authority.ts](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.ts) |
| Type body | [authority-resumability.type.ts](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/authority-resumability.type.ts) |
| Expected-body projection | [evaluates-resumable-authority.expectation.ts](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.expectation.ts) |
| Projection-conformance body | [runs-evaluates-resumable-authority-conformance.ts](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/runs-evaluates-resumable-authority-conformance.ts) |
| AST coverage | [complete four-body semantic/AST lineage](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/projection-lineage.index.json) |

<!-- physical-authority:resume-only-revalidated-admitted-authority:start -->

<details>
<summary>Exact semantic executable JSON for the primary body</summary>

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "evaluates-resumable-authority-body",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "resume-only-revalidated-admitted-authority",
    "obligationId": "classify-one-prior-artifact-for-resumption",
    "expectationId": "expect-one-resumability-disposition",
    "responsibilityId": "evaluates-resumable-authority",
    "signalId": "authority-resumability",
    "semanticOperationId": "evaluate-resumable-authority"
  },
  "projection": {
    "functionName": "evaluatesResumableAuthority",
    "contextParameter": {
      "name": "context",
      "typeReference": "EvaluatesResumableAuthorityContext"
    },
    "resultTypeReference": "AuthorityResumabilitySignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": {
        "receiver": "context",
        "member": "candidate"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

</details>

<details>
<summary>AST authority identity and topology for the primary body</summary>

The linked AST authority in the binding card contains the complete
lossless token stream. This embedded view shows its identity, lineage,
trusted projector binding, posture, and structural topology.

```json
{
  "projectionId": "project-evaluates-resumable-authority-from-d87b298a22135ebfe1375cb52026e24b935f654da2a1d8fbb17144be6fd26f6a",
  "artifact": {
    "relativePath": "capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.ts"
  },
  "lineage": {
    "featureId": "project-course-authority-through-a-governed-conveyor",
    "scenarioId": "resume-only-revalidated-admitted-authority",
    "obligationId": "classify-one-prior-artifact-for-resumption",
    "responsibilityId": "evaluates-resumable-authority",
    "signalId": "authority-resumability"
  },
  "attestation": {
    "projectorId": "declarative-typescript-body-projector",
    "keyId": "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  },
  "sourceAst": {
    "profile": "lossless-typescript-ast.v1",
    "posture": "executable",
    "topology": [
      {
        "kind": "SourceFile",
        "depth": 0
      },
      {
        "kind": "ImportDeclaration",
        "depth": 1
      },
      {
        "kind": "ImportClause",
        "depth": 2
      },
      {
        "kind": "NamedImports",
        "depth": 3
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "ImportSpecifier",
        "depth": 4
      },
      {
        "kind": "Identifier",
        "depth": 5
      },
      {
        "kind": "StringLiteral",
        "depth": 2
      },
      {
        "kind": "FunctionDeclaration",
        "depth": 1
      },
      {
        "kind": "ExportKeyword",
        "depth": 2
      },
      {
        "kind": "AsyncKeyword",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 2
      },
      {
        "kind": "Parameter",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "TypeReference",
        "depth": 2
      },
      {
        "kind": "Identifier",
        "depth": 3
      },
      {
        "kind": "TypeReference",
        "depth": 3
      },
      {
        "kind": "Identifier",
        "depth": 4
      },
      {
        "kind": "Block",
        "depth": 2
      },
      {
        "kind": "ReturnStatement",
        "depth": 3
      },
      {
        "kind": "AwaitExpression",
        "depth": 4
      },
      {
        "kind": "CallExpression",
        "depth": 5
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "PropertyAccessExpression",
        "depth": 6
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "Identifier",
        "depth": 7
      },
      {
        "kind": "EndOfFileToken",
        "depth": 1
      }
    ]
  }
}
```

</details>

<!-- physical-authority:resume-only-revalidated-admitted-authority:end -->

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
