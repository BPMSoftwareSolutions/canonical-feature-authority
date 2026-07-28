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

### Stage 1: discover admitted projection subjects

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

## Resume behavior

Resume authority must require deterministic revalidation:

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
return await context.execute(context.plan);
```

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
