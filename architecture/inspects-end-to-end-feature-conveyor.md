# End-to-End New-Feature Conveyor Implementation Contract

## Status

```text
CONTRACT STATUS: PROPOSED
IMPLEMENTATION STATUS: RED - NOT YET IMPLEMENTED
CURRENTLY PROVEN: BOUNDED MODEL SUBMISSION AND PORTABLE PROVENANCE
NOT YET PROVEN: ONE PREVIOUSLY NONEXISTENT FEATURE END TO END
```

This document is the deterministic implementation and acceptance contract
for proving that the governed LLM conveyor can implement one entirely new
feature from reviewed request authority through independently verified runtime
behavior. It is documentation authority, not evidence that the feature already
exists.

## User story

Feature ID: `implement-one-new-feature-end-to-end-through-a-governed-conveyor`

```text
As a reviewer of authority-projected software
I want one previously nonexistent reviewed feature implemented through the
governed conveyor
So that its executable behavior and complete origin can be independently
reproduced and verified
```

The user story establishes the need. It does not authorize a provider, prompt,
semantic profile, runtime port, AST, source file, dependency, credential, or
deployment. Those decisions remain in reviewed downstream authority.

## Acceptance Gherkin

The new capability must project this exact feature:

```gherkin
Feature: Implement one new feature end to end through a governed conveyor
  As a reviewer of authority-projected software
  I want one previously nonexistent reviewed feature implemented through the
    governed conveyor
  So that its executable behavior and complete origin can be independently
    reproduced and verified

  Background:
    Given instructor trust authority is supplied outside the submitted repositories
    And schema, semantic-profile, and runtime-port catalogs are pinned

  @scenario-id:admit-one-reviewed-new-feature-request
  Scenario: Admit one reviewed new-feature request
    Given one instructor-signed reviewed new-feature request
    And its feature ID is absent from every submitted capability root
    When its reviewed request eligibility is independently evaluated
    Then one signed new-feature-request admission disposition is emitted

  @scenario-id:project-one-complete-new-feature-authority
  Scenario: Project one complete new-feature authority
    Given one signed GREEN new-feature-request admission disposition
    And one instructor-admitted fixed thirteen-stage conveyor plan
    When one bounded model submission is evaluated against the admitted catalogs
    Then one complete admitted new-feature authority bundle is emitted

  @scenario-id:materialize-one-complete-new-feature
  Scenario: Materialize one complete new feature
    Given one admitted complete new-feature authority bundle
    And one empty instructor-controlled output root
    When every declared authority and projection stage is executed
    Then one complete projector-signed new-feature materialization is emitted

  @scenario-id:execute-one-newly-materialized-feature
  Scenario: Execute one newly materialized feature
    Given one complete materialization and its admitted runtime composition
    When every reviewed example is executed through observed runtime ports
    Then one signed new-feature execution observation is emitted

  @scenario-id:verify-one-complete-new-feature-lineage
  Scenario: Verify one complete new-feature lineage
    Given one observed feature execution and one byte-identical regeneration
    When their complete authority lineage is independently evaluated
    Then one signed new-feature terminal disposition is emitted
```

Each scenario contains one Given state, one When responsibility, and one Then
observable outcome. The Background carries shared admitted preconditions and
does not add a second obligation to any scenario.

## Physical canonical feature authority

The documentary user story and Gherkin must be materialized as this exact
`projects-capability-authority.json` object:

```json
{
  "authorityType": "canonical-feature-authority.v1",
  "featureId":
    "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
  "title":
    "Implement one new feature end to end through a governed conveyor",
  "userStory": {
    "asA": "reviewer of authority-projected software",
    "iWant":
      "one previously nonexistent reviewed feature implemented through the governed conveyor",
    "soThat":
      "its executable behavior and complete origin can be independently reproduced and verified"
  },
  "scenarioIds": [
    "admit-one-reviewed-new-feature-request",
    "project-one-complete-new-feature-authority",
    "materialize-one-complete-new-feature",
    "execute-one-newly-materialized-feature",
    "verify-one-complete-new-feature-lineage"
  ],
  "governingObligation":
    "Every accepted run starts from instructor-reviewed request authority, preserves one atomic responsibility per scenario, and proves the generated feature through independent replay and execution."
}
```

The feature authority owns meaning and stable identity. It does not contain
artifact paths, provider settings, TypeScript names, implementation profiles,
runtime adapters, or acceptance evidence.

## Decision

The conveyor may propose implementation authority. It may not invent product
policy, bypass admission, emit hand-authored TypeScript, or claim support for
an effect that has no admitted semantic profile and runtime port.

```text
reviewed request authority
-> admitted conveyor plan
-> bounded provider request
-> independently observed model submission
-> candidate canonical feature authority
-> fail-closed admission
-> complete capability file-system spine
-> admitted semantic executable authorities
-> reproducible signed AST authorities
-> projector-signed TypeScript bodies
-> real runtime bindings
-> compiled and executed feature
-> expectations and conformance
-> complete signed lineage
-> independently verified terminal disposition
```

## Meaning of end to end

An end-to-end GREEN means that a feature absent from the submitted worktree at
the beginning of the acceptance run is materialized into an empty output root,
compiled, executed through real admitted collaborators, tested against reviewed
examples, regenerated from authority, and independently verified without
trusting feature-specific submitted proof code.

```text
GREEN requires all of the following:

the feature ID was absent from every submitted capability root before the run
the reviewed request was supplied by the instructor outside the submission
the submitted conveyor did not know the hidden feature ID before the run
no feature-specific materializer, template, switch case, or allowlist was used
every generated authority validates against a pinned schema
every semantic profile and runtime port was admitted before execution
semantic authority reproduces the AST byte-for-byte
AST authority reproduces TypeScript byte-for-byte
the generated project builds from the empty output root
the feature executes every reviewed example with the declared result or effect
negative controls stop at the expected first RED code
one portable verifier validates the complete evidence chain
```

## Bounded claim

This contract does not claim that the conveyor can implement every imaginable
program. A request is eligible only when its behavior is expressible through
the instructor-admitted semantic profile catalog and its effects are available
through the instructor-admitted runtime port catalog.

```text
unsupported syntax requirement
-> RED - SEMANTIC_PROFILE_UNAVAILABLE

unsupported external effect
-> RED - RUNTIME_PORT_UNAVAILABLE

missing product decision
-> RED - REVIEWED_REQUEST_INCOMPLETE

request requires model-authored TypeScript
-> RED - MODEL_SOURCE_EMISSION_FORBIDDEN
```

## Non-goals

```text
accepting an unreviewed chat message as canonical authority
allowing the LLM or conveyor to emit TypeScript source
installing packages selected only by the LLM
creating credentials, network permissions, or production deployments
expanding the projector language without separate reviewed authority
treating compilation alone as behavioral acceptance
treating a signed assertion as a substitute for deterministic replay
trusting a key, schema, verifier, or fixture supplied only by the submission
claiming arbitrary-feature support from one hard-coded demonstration
```

## Canonical capability identity

```text
capability directory:
capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor

featureId:
implement-one-new-feature-end-to-end-through-a-governed-conveyor

feature title:
Implement one new feature end to end through a governed conveyor

asA:
reviewer of authority-projected software

iWant:
one previously nonexistent reviewed feature implemented through the governed conveyor

soThat:
its executable behavior and complete origin can be independently reproduced and verified
```

## Atomic scenario spine

```text
1.
scenarioId: admit-one-reviewed-new-feature-request
obligationId: establish-one-eligible-new-feature-request
expectationId: expect-one-new-feature-request-admission
responsibilityId: admits-reviewed-new-feature-request
signalId: new-feature-request-admission
semanticOperationId: admit-reviewed-new-feature-request

2.
scenarioId: project-one-complete-new-feature-authority
obligationId: establish-one-complete-new-feature-authority
expectationId: expect-one-complete-new-feature-authority
responsibilityId: projects-complete-new-feature-authority
signalId: complete-new-feature-authority
semanticOperationId: project-complete-new-feature-authority

3.
scenarioId: materialize-one-complete-new-feature
obligationId: establish-one-complete-new-feature-materialization
expectationId: expect-one-complete-new-feature-materialization
responsibilityId: materializes-complete-new-feature
signalId: complete-new-feature-materialization
semanticOperationId: materialize-complete-new-feature

4.
scenarioId: execute-one-newly-materialized-feature
obligationId: establish-one-observed-new-feature-execution
expectationId: expect-one-observed-new-feature-execution
responsibilityId: executes-newly-materialized-feature
signalId: observed-new-feature-execution
semanticOperationId: execute-newly-materialized-feature

5.
scenarioId: verify-one-complete-new-feature-lineage
obligationId: establish-one-complete-new-feature-lineage
expectationId: expect-one-new-feature-terminal-disposition
responsibilityId: verifies-complete-new-feature-lineage
signalId: new-feature-terminal-disposition
semanticOperationId: verify-complete-new-feature-lineage
```

Each scenario owns one obligation, expectation, responsibility, signal, and
semantic operation. Each responsibility contains the complete four-body spine:
primary execution, declaration-only type, expectation, and conformance.

```text
five scenarios
x four body roles
= twenty projector-governed body lineages
```

## Repository spine

The acceptance capability root is exactly:

```text
capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/
  implement-one-new-feature-end-to-end-through-a-governed-conveyor.feature
  projects-capability-authority.json
  scenarios/
    admit-one-reviewed-new-feature-request/
    project-one-complete-new-feature-authority/
    materialize-one-complete-new-feature/
    execute-one-newly-materialized-feature/
    verify-one-complete-new-feature-lineage/
```

No top-level repository `scenarios/` directory is created. Each scenario
directory owns its scenario authority, obligation, expectation, and one
responsibility directory.

## Complete artifact set for the normative scenario

The request-admission scenario is the normative filesystem template. The other
four scenarios apply the identity and filename substitutions in the projection
ledger without omitting a role.

```text
capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/
  scenarios/
    admit-one-reviewed-new-feature-request/
      declares-scenario-authority.json
      establish-one-eligible-new-feature-request.obligation.json
      expect-one-new-feature-request-admission.expectation.json
      admits-reviewed-new-feature-request/
        declares-responsibility.json
        declares-signal.json
        binds-responsibility-to-semantic-edge.json
        executes-new-feature-request-admission.sej.json
        projection-lineage.index.json

        expects-new-feature-request-admission-type-body.json
        declares-new-feature-request-admission-type-body.json
        projects-new-feature-request-admission-type.semantic-executable.json
        projects-new-feature-request-admission-type-body.json
        new-feature-request-admission.type.ts.ast.authority.json
        new-feature-request-admission.type.ts

        expects-new-feature-request-admission-body.json
        declares-new-feature-request-admission-body.json
        projects-new-feature-request-admission.semantic-executable.json
        projects-new-feature-request-admission-body.json
        new-feature-request-admission.ts.ast.authority.json
        new-feature-request-admission.ts

        expects-new-feature-request-admission-expectation-body.json
        declares-new-feature-request-admission-expectation-body.json
        projects-new-feature-request-admission-expectation.semantic-executable.json
        projects-new-feature-request-admission-expectation-body.json
        new-feature-request-admission.expectation.ts.ast.authority.json
        new-feature-request-admission.expectation.ts

        expects-runs-new-feature-request-admission-conformance-body.json
        declares-runs-new-feature-request-admission-conformance-body.json
        projects-runs-new-feature-request-admission-conformance.semantic-executable.json
        projects-runs-new-feature-request-admission-conformance-body.json
        runs-new-feature-request-admission-conformance.ts.ast.authority.json
        runs-new-feature-request-admission-conformance.ts
```

```text
each responsibility directory contains:

one responsibility authority
one signal authority
one responsibility-to-edge binding
one execution SEJ
one projection-lineage index
four body-expectation authorities
four file-body authorities
four semantic executable authorities
four TypeScript projection authorities
four signed AST authorities
four projected TypeScript bodies
```

## Authority identity and projection ledger

This matrix is normative. It supplies every identity and four-body projection
name that the generic contract materializer must consume.

```json
{
  "matrixType": "four-body-sej-substitution-matrix.v1",
  "featureId":
    "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
  "entries": [
    {
      "scenarioId": "admit-one-reviewed-new-feature-request",
      "obligationId": "establish-one-eligible-new-feature-request",
      "expectationId": "expect-one-new-feature-request-admission",
      "responsibilityId": "admits-reviewed-new-feature-request",
      "signalId": "new-feature-request-admission",
      "semanticOperationId": "admit-reviewed-new-feature-request",
      "operationMember": "admit",
      "inputMember": "request",
      "inputType": "ReviewedNewFeatureRequest",
      "resultType": "NewFeatureRequestAdmission",
      "functionName": "admitsReviewedNewFeatureRequest",
      "contextType": "AdmitsReviewedNewFeatureRequestContext",
      "baseName": "new-feature-request-admission",
      "bodies": [
        { "bodyRole": "primary", "file": "new-feature-request-admission.ts" },
        { "bodyRole": "type", "file": "new-feature-request-admission.type.ts" },
        { "bodyRole": "expectation", "file": "new-feature-request-admission.expectation.ts" },
        { "bodyRole": "conformance", "file": "runs-new-feature-request-admission-conformance.ts" }
      ]
    },
    {
      "scenarioId": "project-one-complete-new-feature-authority",
      "obligationId": "establish-one-complete-new-feature-authority",
      "expectationId": "expect-one-complete-new-feature-authority",
      "responsibilityId": "projects-complete-new-feature-authority",
      "signalId": "complete-new-feature-authority",
      "semanticOperationId": "project-complete-new-feature-authority",
      "operationMember": "project",
      "inputMember": "request",
      "inputType": "AdmittedNewFeatureRequest",
      "resultType": "CompleteNewFeatureAuthority",
      "functionName": "projectsCompleteNewFeatureAuthority",
      "contextType": "ProjectsCompleteNewFeatureAuthorityContext",
      "baseName": "complete-new-feature-authority",
      "bodies": [
        { "bodyRole": "primary", "file": "complete-new-feature-authority.ts" },
        { "bodyRole": "type", "file": "complete-new-feature-authority.type.ts" },
        { "bodyRole": "expectation", "file": "complete-new-feature-authority.expectation.ts" },
        { "bodyRole": "conformance", "file": "runs-complete-new-feature-authority-conformance.ts" }
      ]
    },
    {
      "scenarioId": "materialize-one-complete-new-feature",
      "obligationId": "establish-one-complete-new-feature-materialization",
      "expectationId": "expect-one-complete-new-feature-materialization",
      "responsibilityId": "materializes-complete-new-feature",
      "signalId": "complete-new-feature-materialization",
      "semanticOperationId": "materialize-complete-new-feature",
      "operationMember": "materialize",
      "inputMember": "authority",
      "inputType": "AdmittedCompleteNewFeatureAuthority",
      "resultType": "CompleteNewFeatureMaterialization",
      "functionName": "materializesCompleteNewFeature",
      "contextType": "MaterializesCompleteNewFeatureContext",
      "baseName": "complete-new-feature-materialization",
      "bodies": [
        { "bodyRole": "primary", "file": "complete-new-feature-materialization.ts" },
        { "bodyRole": "type", "file": "complete-new-feature-materialization.type.ts" },
        { "bodyRole": "expectation", "file": "complete-new-feature-materialization.expectation.ts" },
        { "bodyRole": "conformance", "file": "runs-complete-new-feature-materialization-conformance.ts" }
      ]
    },
    {
      "scenarioId": "execute-one-newly-materialized-feature",
      "obligationId": "establish-one-observed-new-feature-execution",
      "expectationId": "expect-one-observed-new-feature-execution",
      "responsibilityId": "executes-newly-materialized-feature",
      "signalId": "observed-new-feature-execution",
      "semanticOperationId": "execute-newly-materialized-feature",
      "operationMember": "execute",
      "inputMember": "subject",
      "inputType": "NewFeatureExecutionSubject",
      "resultType": "ObservedNewFeatureExecution",
      "functionName": "executesNewlyMaterializedFeature",
      "contextType": "ExecutesNewlyMaterializedFeatureContext",
      "baseName": "observed-new-feature-execution",
      "bodies": [
        { "bodyRole": "primary", "file": "observed-new-feature-execution.ts" },
        { "bodyRole": "type", "file": "observed-new-feature-execution.type.ts" },
        { "bodyRole": "expectation", "file": "observed-new-feature-execution.expectation.ts" },
        { "bodyRole": "conformance", "file": "runs-observed-new-feature-execution-conformance.ts" }
      ]
    },
    {
      "scenarioId": "verify-one-complete-new-feature-lineage",
      "obligationId": "establish-one-complete-new-feature-lineage",
      "expectationId": "expect-one-new-feature-terminal-disposition",
      "responsibilityId": "verifies-complete-new-feature-lineage",
      "signalId": "new-feature-terminal-disposition",
      "semanticOperationId": "verify-complete-new-feature-lineage",
      "operationMember": "evaluate",
      "inputMember": "lineage",
      "inputType": "CompleteNewFeatureLineage",
      "resultType": "NewFeatureTerminalDisposition",
      "functionName": "verifiesCompleteNewFeatureLineage",
      "contextType": "VerifiesCompleteNewFeatureLineageContext",
      "baseName": "complete-new-feature-lineage",
      "bodies": [
        { "bodyRole": "primary", "file": "complete-new-feature-lineage.ts" },
        { "bodyRole": "type", "file": "complete-new-feature-lineage.type.ts" },
        { "bodyRole": "expectation", "file": "complete-new-feature-lineage.expectation.ts" },
        { "bodyRole": "conformance", "file": "runs-complete-new-feature-lineage-conformance.ts" }
      ]
    }
  ]
}
```

## Reviewed request authority

The acceptance run begins with a signed reviewed request supplied outside the
submitted repositories. Natural-language conversation is not the input
authority.

```text
schema file:
schemas/reviewed-new-feature-request.schema.json

authorityType:
reviewed-new-feature-request.v1

required root fields:
authorityType
requestId
featureId
title
userStory
scenarios
constraints
requiredEffects
reviewedExamples
issuedAt
expiresAt
reviewAuthoritySha256

userStory required fields:
asA
iWant
soThat

scenario required fields:
scenarioId
title
given
when
then
obligationStatement

reviewed example required fields:
exampleId
scenarioId
input
expectedResult
expectedEffects
```

The schema must set `additionalProperties: false` at every object boundary.
Feature, scenario, and example identifiers use lowercase kebab case. Scenario
IDs are unique, example IDs are unique, and every example references one
declared scenario.

## Instructor-hidden acceptance fixture

The decisive acceptance fixture is instructor-owned and unavailable to the
submission until the acceptance run. It describes a pure or locally observable
feature whose behavior fits the admitted catalogs. It must not require
credentials, public network access, package installation, or deployment.

```text
fixture authority location:
C:/lab/trusted-tools/
  canonical-feature-authority-instructor-harness/
  fixtures/new-feature/<request-id>/reviewed-new-feature-request.json

fixture trust location:
C:/lab/trusted-tools/
  canonical-feature-authority-instructor-harness/
  .instructor-trust/new-feature-acceptance-trusted-keys.json

submitted worktree precondition:
featureId does not occur as a path segment, manifest identity, switch case,
fixture value, template value, or source literal
```

## Admitted conveyor plan

A generic instructor-owned plan policy exists before request admission. It
defines the fixed stage order, limits, dependency rules, and terminal
requirements, but it contains no request ID or reviewed-request hash.

```text
preexisting policy:
C:/lab/trusted-tools/
  canonical-feature-authority-instructor-harness/
  policies/new-feature-conveyor-plan-policy.json

request-specific plan:
instantiated only after a GREEN request-admission disposition
binds reviewedRequestSha256 and lineageRootSha256
is signed by authority-admission-evaluator
```

```text
schema file:
schemas/new-feature-conveyor-plan.schema.json

authorityType:
new-feature-conveyor-plan.v1

required fields:
authorityType
planId
reviewedRequestSha256
lineageRootSha256
outputRootPolicy
stageIds
semanticProfileCatalogSha256
runtimePortCatalogSha256
schemaCatalogSha256
projectorTrustAuthoritySha256
maximumProviderInvocations
maximumResumeAttempts
dependencyPolicy
terminalRequirements
```

The plan is signed by the acceptance evaluator after request admission. The
model cannot add, remove, reorder, or rename stages.

```text
stageIds, in exact order:

discover-every-admitted-projection-subject
resolve-the-next-authorized-conveyor-stage
project-one-bounded-model-request
obtain-one-bounded-model-submission
evaluate-a-model-submission-for-admission
attest-one-admitted-authority-artifact
project-one-admitted-ast-authority
invoke-the-trusted-typescript-projector
evaluate-projected-body-conformance
publish-the-complete-course-lineage-index
stop-downstream-execution-after-red
resume-only-revalidated-admitted-authority
execute-the-complete-admitted-conveyor-plan
```

## Semantic profile catalog

The projector repository owns the set of syntax-bearing semantic profiles.
The acceptance plan pins the catalog commit and complete JCS hash. A model
submission may select only a cataloged profile.

```text
catalog authority file:
C:/lab/repos/declarative-typescript-body-projector/
  contracts/semantic-profile-catalog.authority.json

catalog schema file:
C:/lab/repos/declarative-typescript-body-projector/
  contracts/semantic-profile-catalog.schema.json

required profile entry fields:
profileId
requestSchemaId
projectorOperationId
projectorRepositoryCommit
projectorExecutableSha256
supportedStatementKinds
supportedDeclarationKinds
forbiddenConstructs
```

If those catalog artifacts do not exist, the implementation agent must create
them in the projector repository. The catalog may initially register only
profiles already implemented and proven by projector tests. Registering a
profile is not permission to create new syntax behavior in the course
repository.

## Runtime port catalog

Runtime effects are admitted independently from syntax. The course repository
owns port meaning; concrete adapters remain in their generic repositories or
the instructor harness.

```text
catalog authority file:
runtime/new-feature-runtime-port-catalog.authority.json

catalog schema file:
schemas/new-feature-runtime-port-catalog.schema.json

authorityType:
new-feature-runtime-port-catalog.v1

required port entry fields:
portId
semanticOperationId
inputSchemaId
outputSchemaId
effectClass
adapterRepository
adapterRepositoryCommit
adapterModulePath
adapterExportName
adapterExecutableSha256
credentialPolicy
observationPolicy
```

```text
effectClass enum:
pure
filesystem-read
filesystem-write-scoped
provider-observed
instructor-observed

credentialPolicy enum:
none
instructor-injected-never-persisted

observationPolicy enum:
return-value
before-and-after-snapshot
exact-transport-bytes
signed-instructor-observation
```

## Model request and response boundary

The LLM receives only the reviewed request, admitted catalogs, JSON schemas,
and the exact candidate-authority response contract. It does not receive a
request to write source code.

```text
provider request must require:

one JSON object and no prose
canonical feature authority
scenario authorities
obligation and expectation authorities
responsibility and signal authorities
semantic executable authorities selecting cataloged profiles
runtime port requirements selecting cataloged ports
reviewed example bindings
no TypeScript, JavaScript, shell, Markdown, or package manifest content
challenge nonce in the actual provider request bytes
```

The instructor-observed provider protocol, nonce policy, exact request and
response byte hashing, trust roles, and portable verification requirements in
`inspects-projected-body-provenance.md` apply without modification.

## Candidate feature authority bundle

```text
schema file:
schemas/candidate-new-feature-authority-bundle.schema.json

authorityType:
candidate-new-feature-authority-bundle.v1

required fields:
authorityType
reviewedRequestSha256
featureAuthority
scenarioAuthorities
obligationAuthorities
expectationAuthorities
responsibilityAuthorities
signalAuthorities
semanticExecutableAuthorities
runtimePortBindings
reviewedExampleBindings
```

Every array is deterministically ordered by its stable identity. Every identity
must be derivable from and equal to the reviewed request. The bundle must not
contain absolute paths, source text, executable closures, credentials, or
unregistered schema identifiers.

## Candidate admission

```text
schema file:
schemas/new-feature-authority-admission-disposition.schema.json

artifact type:
new-feature-authority-admission-disposition

required payload fields:
authorityType
reviewedRequestSha256
candidateBundleSha256
schemaCatalogSha256
semanticProfileCatalogSha256
runtimePortCatalogSha256
identityCoverage
scenarioAtomicity
exampleCoverage
profileCoverage
portCoverage
forbiddenContentScan
disposition
redCode
```

Only a GREEN admission disposition authorizes materialization. The evaluator
must validate the complete bundle independently; it must not trust a model
claim that the bundle is complete.

## Materialization protocol

The materializer is generic. It traverses the admitted bundle and schema
catalog. It has no feature IDs, scenario IDs, operation IDs, filenames, or
domain vocabulary embedded in source.

```text
implementation owner:
tools/materializes-admitted-new-feature.mjs

required inputs:
--admitted-bundle <absolute-path>
--admission-disposition <absolute-path>
--output-root <absolute-path>
--schema-catalog <absolute-path>

required output:
<output-root>/capabilities/<feature-id>/...
<output-root>/new-feature-materialization-manifest.json

forbidden implementation mechanisms:
feature-ID switch statements
scenario-ID allowlists
domain-specific templates
source-code string assembly
copying a preexisting capability tree
reading the target Markdown contract as generation input
```

## Canonical materialized file-system spine

```text
capabilities/<feature-id>/
  projects-capability-authority.json
  <feature-id>.feature
  scenarios/
    <scenario-id>/
      declares-scenario-authority.json
      <obligation-id>.obligation.json
      <expectation-id>.expectation.json
      <responsibility-id>/
        declares-responsibility.json
        declares-signal.json
        binds-responsibility-to-semantic-edge.json
        executes-<primary-base>.sej.json
        projection-lineage.index.json

        expects-<type-authority-base>-body.json
        declares-<type-authority-base>-body.json
        projects-<type-authority-base>.semantic-executable.json
        projects-<type-authority-base>-body.json
        <type-projected-base>.ts.ast.authority.json
        <type-projected-base>.ts

        expects-<primary-base>-body.json
        declares-<primary-base>-body.json
        projects-<primary-base>.semantic-executable.json
        projects-<primary-base>-body.json
        <primary-base>.ts.ast.authority.json
        <primary-base>.ts

        expects-<expectation-authority-base>-body.json
        declares-<expectation-authority-base>-body.json
        projects-<expectation-authority-base>.semantic-executable.json
        projects-<expectation-authority-base>-body.json
        <expectation-projected-base>.ts.ast.authority.json
        <expectation-projected-base>.ts

        expects-<conformance-base>-body.json
        declares-<conformance-base>-body.json
        projects-<conformance-base>.semantic-executable.json
        projects-<conformance-base>-body.json
        <conformance-base>.ts.ast.authority.json
        <conformance-base>.ts
```

Filename derivation is identical for the acceptance capability and every
generated feature. No alternate `declares-obligation.json`,
`declares-scenario-expectation.json`, or feature-title-derived Gherkin filename
is permitted.

```text
feature file = <feature-id>.feature
obligation file = <obligation-id>.obligation.json
expectation file = <expectation-id>.expectation.json
responsibility directory = <responsibility-id>/
primary base = projection-ledger entry baseName
type authority base = <primary-base>-type
type projected base = <primary-base>.type
expectation authority base = <primary-base>-expectation
expectation projected base = <primary-base>.expectation
conformance base = runs-<primary-base>-conformance
```

The materializer creates JSON authorities and navigational Gherkin only. The
semantic-to-AST projector creates AST authorities. The trusted TypeScript
projector creates TypeScript. No materializer may create AST tokens or
TypeScript bytes.

## Empty-root execution

```text
acceptance workspace:
C:/lab/runs/new-feature-conveyor-<timestamp>/workspace

precondition:
workspace exists and contains no capability, source, AST, manifest, or test

allowed bootstrap inputs:
reviewed request
signed conveyor plan
pinned schema catalog
pinned semantic profile catalog
pinned runtime port catalog
external trust authority
generic conveyor executable
generic projector executables

forbidden bootstrap inputs:
any file containing the hidden feature ID except the reviewed request
a pre-materialized capability
a pre-generated AST or TypeScript body
a feature-specific script or template
```

## Build contract

The empty workspace receives a deterministic generic build shell pinned by the
plan. The build shell is infrastructure, not feature implementation. It may
provide TypeScript configuration, the generic runtime interpreter, and imports
to admitted adapters.

```text
build requirements:

no network package installation during acceptance
all package identities and bytes pinned before the run
TypeScript compiler identity recorded
Node identity recorded
zero TypeScript diagnostics
generated expectation bodies execute
generated conformance bodies execute
full regeneration before the second build
second build and execution equal the first
```

## Runtime composition authority

```text
schema file:
schemas/new-feature-runtime-composition-authority.schema.json

artifact type:
new-feature-runtime-composition-authority

required payload fields:
authorityType
featureId
planSha256
runtimePortCatalogSha256
bindings
loaderExecutableSha256
nodeVersion

required binding fields:
semanticOperationId
portId
adapterRepositoryCommit
adapterModuleSha256
adapterExportName
inputSchemaSha256
outputSchemaSha256
observationPolicy
```

The runtime loader verifies every binding before importing it. The generated
feature receives only the context members declared by its semantic authority.
No dynamic fallback, ambient registry lookup, or unrecorded adapter is allowed.

## Execution observation

```text
schema file:
schemas/new-feature-execution-observation.schema.json

artifact type:
new-feature-execution-observation

required payload fields:
authorityType
featureId
scenarioObservations
reviewedExampleObservations
runtimeCompositionAuthoritySha256
materializationManifestSha256
buildManifestSha256
startedAt
completedAt

required reviewed example observation fields:
exampleId
scenarioId
inputJcsSha256
resultJcsSha256
effectObservationSha256
invocationCount
disposition
```

Each reviewed example executes exactly once unless the reviewed request
explicitly declares another count. Expected results and effects are calculated
from reviewed authority, not copied from model output.

## Evidence artifact set

```text
01-reviewed-new-feature-request.json
02-new-feature-request-admission.json
03-new-feature-conveyor-plan.json
04-model-request-authority.json
05-provider-exchange-attestation.json
06-model-submission.json
07-candidate-new-feature-authority-bundle.json
08-new-feature-authority-admission-disposition.json
09-new-feature-materialization-manifest.json
10-new-feature-build-manifest.json
11-new-feature-transformer-dependency-graph.json
12-new-feature-runtime-composition-authority.json
13-new-feature-execution-observation.json
14-new-feature-regeneration-report.json
15-complete-new-feature-lineage.json
16-new-feature-terminal-disposition.json
17-portable-new-feature-verification-report.json
```

Provider nonce-consumption evidence is linked from the provider exchange using
the existing portable provenance contract. It may retain that contract's
`02a` filename inside its provider evidence subdirectory.

## Normative evidence schemas

```text
schemas/reviewed-new-feature-request.schema.json
schemas/new-feature-request-admission.schema.json
schemas/new-feature-conveyor-plan.schema.json
schemas/new-feature-runtime-port-catalog.schema.json
schemas/model-request-authority.schema.json
schemas/independent-provider-exchange-attestation.schema.json
schemas/model-produced-semantic-authority.schema.json
schemas/candidate-new-feature-authority-bundle.schema.json
schemas/new-feature-authority-admission-disposition.schema.json
schemas/new-feature-materialization-manifest.schema.json
schemas/new-feature-build-manifest.schema.json
schemas/new-feature-transformer-dependency-graph.schema.json
schemas/new-feature-runtime-composition-authority.schema.json
schemas/new-feature-execution-observation.schema.json
schemas/new-feature-regeneration-report.schema.json
schemas/complete-new-feature-lineage.schema.json
schemas/new-feature-terminal-disposition.schema.json
schemas/portable-new-feature-verification-report.schema.json
```

All schemas use Draft 2020-12, have stable `$id` values, set
`additionalProperties: false` at every object boundary, and are registered in
a new `new-feature-conveyor-schema-catalog.v1` catalog. Each schema has valid
and invalid fixtures executed by the contract verifier.

The evidence set is schema-closed by this catalog. Every persisted normative
artifact has one schema, registered artifact type, fixed parent type, and fixed
signer role.

```json
{
  "catalogType": "new-feature-evidence-artifact-catalog.v1",
  "entries": [
    {
      "file": "01-reviewed-new-feature-request.json",
      "artifactType": "reviewed-new-feature-request",
      "schema": "reviewed-new-feature-request.schema.json",
      "parentArtifactType": null,
      "signerRole": "review-authority"
    },
    {
      "file": "02-new-feature-request-admission.json",
      "artifactType": "new-feature-request-admission",
      "schema": "new-feature-request-admission.schema.json",
      "parentArtifactType": "reviewed-new-feature-request",
      "signerRole": "authority-admission-evaluator"
    },
    {
      "file": "03-new-feature-conveyor-plan.json",
      "artifactType": "new-feature-conveyor-plan",
      "schema": "new-feature-conveyor-plan.schema.json",
      "parentArtifactType": "new-feature-request-admission",
      "signerRole": "authority-admission-evaluator"
    },
    {
      "file": "04-model-request-authority.json",
      "artifactType": "model-request-authority",
      "schema": "model-request-authority.schema.json",
      "parentArtifactType": "new-feature-conveyor-plan",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "05-provider-exchange-attestation.json",
      "artifactType": "independent-provider-exchange-attestation",
      "schema": "independent-provider-exchange-attestation.schema.json",
      "parentArtifactType": "model-request-authority",
      "signerRole": "provider-observer"
    },
    {
      "file": "06-model-submission.json",
      "artifactType": "model-produced-semantic-authority",
      "schema": "model-produced-semantic-authority.schema.json",
      "parentArtifactType": "independent-provider-exchange-attestation",
      "signerRole": "provider-observer"
    },
    {
      "file": "07-candidate-new-feature-authority-bundle.json",
      "artifactType": "candidate-new-feature-authority-bundle",
      "schema": "candidate-new-feature-authority-bundle.schema.json",
      "parentArtifactType": "model-produced-semantic-authority",
      "signerRole": "authority-admission-evaluator"
    },
    {
      "file": "08-new-feature-authority-admission-disposition.json",
      "artifactType": "new-feature-authority-admission-disposition",
      "schema": "new-feature-authority-admission-disposition.schema.json",
      "parentArtifactType": "candidate-new-feature-authority-bundle",
      "signerRole": "authority-admission-evaluator"
    },
    {
      "file": "09-new-feature-materialization-manifest.json",
      "artifactType": "new-feature-materialization-manifest",
      "schema": "new-feature-materialization-manifest.schema.json",
      "parentArtifactType": "new-feature-authority-admission-disposition",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "10-new-feature-build-manifest.json",
      "artifactType": "new-feature-build-manifest",
      "schema": "new-feature-build-manifest.schema.json",
      "parentArtifactType": "new-feature-materialization-manifest",
      "signerRole": "runtime-observer"
    },
    {
      "file": "11-new-feature-transformer-dependency-graph.json",
      "artifactType": "new-feature-transformer-dependency-graph",
      "schema": "new-feature-transformer-dependency-graph.schema.json",
      "parentArtifactType": "new-feature-build-manifest",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "12-new-feature-runtime-composition-authority.json",
      "artifactType": "new-feature-runtime-composition-authority",
      "schema": "new-feature-runtime-composition-authority.schema.json",
      "parentArtifactType": "new-feature-transformer-dependency-graph",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "13-new-feature-execution-observation.json",
      "artifactType": "new-feature-execution-observation",
      "schema": "new-feature-execution-observation.schema.json",
      "parentArtifactType": "new-feature-runtime-composition-authority",
      "signerRole": "runtime-observer"
    },
    {
      "file": "14-new-feature-regeneration-report.json",
      "artifactType": "new-feature-regeneration-report",
      "schema": "new-feature-regeneration-report.schema.json",
      "parentArtifactType": "new-feature-execution-observation",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "15-complete-new-feature-lineage.json",
      "artifactType": "complete-new-feature-lineage",
      "schema": "complete-new-feature-lineage.schema.json",
      "parentArtifactType": "new-feature-regeneration-report",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "16-new-feature-terminal-disposition.json",
      "artifactType": "new-feature-terminal-disposition",
      "schema": "new-feature-terminal-disposition.schema.json",
      "parentArtifactType": "complete-new-feature-lineage",
      "signerRole": "acceptance-evaluator"
    },
    {
      "file": "17-portable-new-feature-verification-report.json",
      "artifactType": "portable-new-feature-verification-report",
      "schema": "portable-new-feature-verification-report.schema.json",
      "parentArtifactType": "new-feature-terminal-disposition",
      "signerRole": "portable-verifier"
    }
  ]
}
```

The implementation must add every catalog artifact type not already present to
`schemas/embedded-provenance.schema.json#/$defs/artifactType`. No artifact may
be persisted under an unregistered type.

```json
[
  "reviewed-new-feature-request",
  "new-feature-request-admission",
  "new-feature-conveyor-plan",
  "candidate-new-feature-authority-bundle",
  "new-feature-authority-admission-disposition",
  "new-feature-materialization-manifest",
  "new-feature-build-manifest",
  "new-feature-transformer-dependency-graph",
  "new-feature-runtime-composition-authority",
  "new-feature-execution-observation",
  "new-feature-regeneration-report",
  "complete-new-feature-lineage",
  "new-feature-terminal-disposition",
  "portable-new-feature-verification-report"
]
```

The reviewed request is the one root-envelope exception. Its schema constrains
`provenance.parent` to `null`.

```json
{
  "provenance": {
    "schema": "embedded-provenance.v1",
    "canonicalizationAlgorithm": "RFC8785-JCS",
    "artifactType": "reviewed-new-feature-request",
    "artifactSha256": "sha256:<payload-jcs-hash>",
    "parent": null,
    "lineageRootSha256": "sha256:<payload-jcs-hash>",
    "transformer": {
      "id": "instructor-review-authority",
      "version": "<version>",
      "repositoryCommit": "<40-lowercase-hex>",
      "executableSha256": "sha256:<review-transformer-bytes>"
    },
    "signingKeyId": "sha256:<review-authority-public-key-id>",
    "signature": "ed25519:<base64-signature>"
  },
  "payload": "<reviewed-new-feature-request-payload>"
}
```

Every non-root signed evidence schema uses this exact wrapper, replacing the
three placeholders with the artifact-specific constants and complete payload
schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id":
    "https://canonical-feature-authority/schemas/<schema-name>",
  "allOf": [
    {
      "$ref":
        "https://canonical-feature-authority/schemas/embedded-provenance.schema.json"
    },
    {
      "type": "object",
      "properties": {
        "provenance": {
          "type": "object",
          "properties": {
            "artifactType": {
              "const": "<artifact-type>"
            },
            "parent": {
              "type": "object",
              "required": ["artifactType", "artifactSha256"],
              "properties": {
                "artifactType": {
                  "const": "<parent-artifact-type>"
                }
              }
            }
          }
        },
        "payload": { "$ref": "#/$defs/payload" }
      }
    }
  ],
  "$defs": {
    "payload": "<complete-additional-properties-false-payload-schema>"
  }
}
```

## Complete SEJ inputs

The normative scenario supplies all four projector-compatible semantic
executable inputs. The remaining scenarios use the exact identity, function,
type, operation, input, and filename substitutions in the projection ledger.

### Request-admission primary SEJ

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile": "conveyor-stage-delegation.v1",
  "bodyId": "new-feature-request-admission-body",
  "artifact": {
    "relativePath":
      "capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts"
  },
  "lineage": {
    "featureId":
      "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
    "scenarioId": "admit-one-reviewed-new-feature-request",
    "obligationId": "establish-one-eligible-new-feature-request",
    "expectationId": "expect-one-new-feature-request-admission",
    "responsibilityId": "admits-reviewed-new-feature-request",
    "signalId": "new-feature-request-admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  },
  "projection": {
    "functionName": "admitsReviewedNewFeatureRequest",
    "contextParameter": {
      "name": "context",
      "typeReference": "AdmitsReviewedNewFeatureRequestContext"
    },
    "resultTypeReference": "NewFeatureRequestAdmission",
    "invocation": {
      "receiver": "context",
      "operationMember": "admit",
      "argument": { "receiver": "context", "member": "request" },
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

### Request-admission type SEJ

```json
{
  "semanticExecutableType": "declaration-only-context.v1",
  "bodyRole": "type",
  "structuralProfile": "conveyor-context-declaration.v1",
  "bodyId": "new-feature-request-admission-type-body",
  "artifact": {
    "relativePath":
      "capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts"
  },
  "lineage": {
    "featureId":
      "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
    "scenarioId": "admit-one-reviewed-new-feature-request",
    "obligationId": "establish-one-eligible-new-feature-request",
    "expectationId": "expect-one-new-feature-request-admission",
    "responsibilityId": "admits-reviewed-new-feature-request",
    "signalId": "new-feature-request-admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  },
  "projection": {
    "declarations": [
      "AdmitsReviewedNewFeatureRequestContext",
      "ProvesNewFeatureRequestAdmissionExpectationContext",
      "RunsNewFeatureRequestAdmissionConformanceContext",
      "ReviewedNewFeatureRequest",
      "NewFeatureRequestAdmission",
      "ExpectationSignal",
      "ProjectionConformanceSignal"
    ]
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

### Request-admission expectation SEJ

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "expectation",
  "structuralProfile": "expectation-execution.v1",
  "bodyId": "new-feature-request-admission-expectation-body",
  "artifact": {
    "relativePath":
      "capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.expectation.ts"
  },
  "lineage": {
    "featureId":
      "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
    "scenarioId": "admit-one-reviewed-new-feature-request",
    "obligationId": "establish-one-eligible-new-feature-request",
    "expectationId": "expect-one-new-feature-request-admission",
    "responsibilityId": "admits-reviewed-new-feature-request",
    "signalId": "new-feature-request-admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  },
  "projection": {
    "functionName": "provesNewFeatureRequestAdmissionExpectation",
    "contextParameter": {
      "name": "context",
      "typeReference": "ProvesNewFeatureRequestAdmissionExpectationContext"
    },
    "resultTypeReference": "ExpectationSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "prove",
      "argument": { "receiver": "context", "member": "expectation" },
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

### Request-admission conformance SEJ

```json
{
  "semanticExecutableType": "prebound-member-delegation.v1",
  "bodyRole": "conformance",
  "structuralProfile": "conformance-delegation.v1",
  "bodyId": "runs-new-feature-request-admission-conformance-body",
  "artifact": {
    "relativePath":
      "capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/runs-new-feature-request-admission-conformance.ts"
  },
  "lineage": {
    "featureId":
      "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
    "scenarioId": "admit-one-reviewed-new-feature-request",
    "obligationId": "establish-one-eligible-new-feature-request",
    "expectationId": "expect-one-new-feature-request-admission",
    "responsibilityId": "admits-reviewed-new-feature-request",
    "signalId": "new-feature-request-admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  },
  "projection": {
    "functionName": "runsNewFeatureRequestAdmissionConformance",
    "contextParameter": {
      "name": "context",
      "typeReference": "RunsNewFeatureRequestAdmissionConformanceContext"
    },
    "resultTypeReference": "ProjectionConformanceSignal",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": { "receiver": "context", "member": "subject" },
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

## Projected TypeScript bodies

The four normative SEJs above must project these source shapes. Projector
provenance headers are omitted here because their hashes and signatures are
calculated from the implemented authorities.

### Primary body projection

```typescript
export async function admitsReviewedNewFeatureRequest(
  context: AdmitsReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.admit(context.request);
}
```

### Type body projection

```typescript
export type ReviewedNewFeatureRequest = unknown;
export type NewFeatureRequestAdmission = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface AdmitsReviewedNewFeatureRequestContext {
  readonly request: ReviewedNewFeatureRequest;
  readonly admit: (
    request: ReviewedNewFeatureRequest
  ) => Promise<NewFeatureRequestAdmission>;
}

export interface ProvesNewFeatureRequestAdmissionExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsNewFeatureRequestAdmissionConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
```

### Expectation body projection

```typescript
export async function provesNewFeatureRequestAdmissionExpectation(
  context: ProvesNewFeatureRequestAdmissionExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
```

### Conformance body projection

```typescript
export async function runsNewFeatureRequestAdmissionConformance(
  context: RunsNewFeatureRequestAdmissionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
```

## Evidence envelope and signatures

Signed evidence uses `embedded-provenance.v1`, RFC 8785 JCS payload hashing,
SHA-256 byte hashing, and Ed25519 signatures. The complete parsed reviewed
request is the lineage root.

```typescript
const artifactSha256 =
  sha256(utf8(rfc8785Jcs(payload)));

const lineageRootSha256 =
  sha256(utf8(rfc8785Jcs(reviewedRequestPayload)));

const unsignedProvenance = {
  schema: "embedded-provenance.v1",
  canonicalizationAlgorithm: "RFC8785-JCS",
  artifactType,
  artifactSha256,
  parent,
  lineageRootSha256,
  transformer,
  signingKeyId
};

const signature = ed25519Sign(
  privateKey,
  utf8(rfc8785Jcs(unsignedProvenance))
);
```

For the reviewed-request root, `parent` is the literal JSON value `null` in
`unsignedProvenance` and therefore in the JCS signature preimage. For every
non-root artifact, `parent` is the exact `{artifactType, artifactSha256}`
object. No empty-string or sentinel parent representation is permitted.

## Trust roles

```text
review-authority
  signs reviewed new-feature request

provider-observer
  signs exact provider exchange and nonce evidence

authority-admission-evaluator
  signs request and candidate-authority admissions

semantic-ast-projector
  signs semantic-to-AST transitions

typescript-projector
  signs AST-to-TypeScript transitions

runtime-observer
  signs build manifest and execution observations

acceptance-evaluator
  signs materialization, dependency graph, runtime composition, regeneration,
  complete lineage, and terminal disposition

portable-verifier
  signs the schema-valid public verification report
```

The trust authority is supplied outside the run root and submitted
repositories. The verifier enforces artifact type, transformer identity, key
ID, and role together. A run-local trust file is an audit copy only.

## Artifact parent relationships

```text
reviewed request
  parent -> null
request admission
  parent -> reviewed request
conveyor plan
  parent -> request admission
model request authority
  parent -> conveyor plan
provider exchange attestation
  parent -> model request authority
model submission
  parent -> provider exchange attestation
candidate authority bundle
  parent -> model submission
candidate admission disposition
  parent -> candidate authority bundle
materialization manifest
  parent -> candidate admission disposition
build manifest
  parent -> materialization manifest
transformer dependency graph
  parent -> build manifest
runtime composition authority
  parent -> transformer dependency graph
execution observation
  parent -> runtime composition authority
regeneration report
  parent -> execution observation
complete lineage
  parent -> regeneration report
terminal disposition
  parent -> complete lineage
portable verification report
  parent -> terminal disposition
```

## Regeneration proof

```text
schema file:
schemas/new-feature-regeneration-report.schema.json

required proof sequence:

hash every materialized authority, AST, body, and manifest
delete every authority-derived AST and TypeScript body
replay admitted semantic authority to signed AST authority
replay signed AST authority to signed TypeScript
require every regenerated byte to equal the first materialization
rebuild the empty-root workspace
rerun every reviewed example
require identical canonical results and observed effects
require all embedded signatures to verify
record the complete before-and-after hash set
```

## Ordered terminal acceptance algorithm

```typescript
function evaluatesNewFeatureRun(input): Disposition {
  requireInstructorOwnedFixtureAndTrust();
  requireFeatureAbsentBeforeRun();
  requireEmptyOutputRoot();
  verifyReviewedRequestSchemaAndSignature();
  verifyRequestCompletenessAndAtomicity();
  verifyConveyorPlanSchemaSignatureAndStageOrder();
  verifyPinnedSchemaProfilePortAndTrustCatalogs();
  verifyProviderRequestAuthority();
  verifyIndependentProviderExchangeAndNonce();
  verifyCandidateBundleSchemaAndForbiddenContent();
  verifyIdentityScenarioExampleProfileAndPortCoverage();
  verifyCandidateAdmissionBeforeMaterialization();
  verifyGenericMaterializerIdentityAndExecutableHash();
  verifyNoFeatureSpecificSourceTemplateOrAllowlist();
  verifyCompleteCapabilitySpineAndTwentyBodyLineages();
  verifyEverySemanticAuthorityAgainstPinnedProfile();
  replayEverySemanticAuthorityToSignedAst();
  replayEverySignedAstToSignedTypescript();
  verifyRuntimeCompositionAndAdapterBytes();
  verifyFirstBuildHasZeroDiagnostics();
  verifyEveryReviewedExampleExecutionAndEffect();
  verifyExpectationAndConformanceSignals();
  verifyNoDownstreamInvocationAfterRed();
  verifyCleanRegenerationIsByteIdentical();
  verifySecondBuildAndExecutionEqualFirst();
  verifyCompleteArtifactParentChainAndLineageRoot();
  verifyAllFixedSignerRolesAndTransformerBytes();
  verifyAllNegativeControlsReturnExpectedFirstRed();
  verifyPortablePublicReportWithoutPrivateState();
  return GREEN;
}
```

The evaluator executes checks in this exact order and stops at the first RED.
A later successful check cannot overwrite an earlier failure. Missing required
evidence during acceptance is RED, not unresolved.

The following map is normative. It binds every ordered check to its complete
set of possible first RED dispositions and assigns every RED disposition to
exactly one check.

```json
{
  "mapType": "acceptance-check-red-code-map.v1",
  "entries": [
    { "check": "requireInstructorOwnedFixtureAndTrust", "redCodes": ["FIXTURE_NOT_INSTRUCTOR_CONTROLLED", "TRUST_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED"] },
    { "check": "requireFeatureAbsentBeforeRun", "redCodes": ["FEATURE_ALREADY_PRESENT"] },
    { "check": "requireEmptyOutputRoot", "redCodes": ["OUTPUT_ROOT_NOT_EMPTY"] },
    { "check": "verifyReviewedRequestSchemaAndSignature", "redCodes": ["REVIEWED_REQUEST_SCHEMA_INVALID", "REVIEWED_REQUEST_SIGNATURE_INVALID"] },
    { "check": "verifyRequestCompletenessAndAtomicity", "redCodes": ["REVIEWED_REQUEST_INCOMPLETE", "SCENARIO_NOT_ATOMIC", "REVIEWED_EXAMPLE_COVERAGE_INCOMPLETE"] },
    { "check": "verifyConveyorPlanSchemaSignatureAndStageOrder", "redCodes": ["CONVEYOR_PLAN_SCHEMA_INVALID", "CONVEYOR_PLAN_SIGNATURE_INVALID", "CONVEYOR_STAGE_ORDER_MISMATCH"] },
    { "check": "verifyPinnedSchemaProfilePortAndTrustCatalogs", "redCodes": ["SCHEMA_CATALOG_MISMATCH", "SEMANTIC_PROFILE_CATALOG_MISMATCH", "RUNTIME_PORT_CATALOG_MISMATCH", "PROJECTOR_TRUST_AUTHORITY_MISMATCH"] },
    { "check": "verifyProviderRequestAuthority", "redCodes": ["MODEL_REQUEST_AUTHORITY_INVALID"] },
    { "check": "verifyIndependentProviderExchangeAndNonce", "redCodes": ["PROVIDER_EXCHANGE_NOT_INDEPENDENTLY_OBSERVED", "PROVIDER_EXCHANGE_BYTE_HASH_MISMATCH", "CHALLENGE_NONCE_INVALID"] },
    { "check": "verifyCandidateBundleSchemaAndForbiddenContent", "redCodes": ["CANDIDATE_BUNDLE_SCHEMA_INVALID", "MODEL_SOURCE_EMISSION_FORBIDDEN"] },
    { "check": "verifyIdentityScenarioExampleProfileAndPortCoverage", "redCodes": ["CANDIDATE_IDENTITY_MISMATCH", "CANDIDATE_SCENARIO_COVERAGE_INCOMPLETE", "CANDIDATE_EXAMPLE_COVERAGE_INCOMPLETE", "SEMANTIC_PROFILE_UNAVAILABLE", "RUNTIME_PORT_UNAVAILABLE"] },
    { "check": "verifyCandidateAdmissionBeforeMaterialization", "redCodes": ["CANDIDATE_AUTHORITY_NOT_ADMITTED"] },
    { "check": "verifyGenericMaterializerIdentityAndExecutableHash", "redCodes": ["MATERIALIZER_NOT_GENERIC"] },
    { "check": "verifyNoFeatureSpecificSourceTemplateOrAllowlist", "redCodes": ["FEATURE_SPECIFIC_GENERATOR_DETECTED"] },
    { "check": "verifyCompleteCapabilitySpineAndTwentyBodyLineages", "redCodes": ["CAPABILITY_SPINE_INCOMPLETE", "BODY_LINEAGE_INCOMPLETE"] },
    { "check": "verifyEverySemanticAuthorityAgainstPinnedProfile", "redCodes": ["SEMANTIC_AUTHORITY_SCHEMA_INVALID"] },
    { "check": "replayEverySemanticAuthorityToSignedAst", "redCodes": ["SEMANTIC_TO_AST_REPLAY_MISMATCH"] },
    { "check": "replayEverySignedAstToSignedTypescript", "redCodes": ["AST_TO_TYPESCRIPT_REPLAY_MISMATCH", "PROJECTOR_SIGNATURE_INVALID"] },
    { "check": "verifyRuntimeCompositionAndAdapterBytes", "redCodes": ["RUNTIME_COMPOSITION_MISMATCH", "RUNTIME_ADAPTER_BYTE_MISMATCH"] },
    { "check": "verifyFirstBuildHasZeroDiagnostics", "redCodes": ["TYPESCRIPT_BUILD_FAILED"] },
    { "check": "verifyEveryReviewedExampleExecutionAndEffect", "redCodes": ["REVIEWED_EXAMPLE_RESULT_MISMATCH", "REVIEWED_EXAMPLE_EFFECT_MISMATCH", "INVOCATION_COUNT_MISMATCH"] },
    { "check": "verifyExpectationAndConformanceSignals", "redCodes": ["EXPECTATION_SIGNAL_MISMATCH", "CONFORMANCE_SIGNAL_MISMATCH"] },
    { "check": "verifyNoDownstreamInvocationAfterRed", "redCodes": ["DOWNSTREAM_EXECUTION_AFTER_RED"] },
    { "check": "verifyCleanRegenerationIsByteIdentical", "redCodes": ["REGENERATION_BYTE_DRIFT"] },
    { "check": "verifySecondBuildAndExecutionEqualFirst", "redCodes": ["SECOND_EXECUTION_MISMATCH"] },
    { "check": "verifyCompleteArtifactParentChainAndLineageRoot", "redCodes": ["ARTIFACT_PARENT_MISMATCH", "LINEAGE_ROOT_MISMATCH"] },
    { "check": "verifyAllFixedSignerRolesAndTransformerBytes", "redCodes": ["SIGNING_KEY_NOT_TRUSTED", "SIGNING_KEY_ROLE_NOT_PERMITTED", "TRANSFORMER_EXECUTABLE_MISMATCH"] },
    { "check": "verifyAllNegativeControlsReturnExpectedFirstRed", "redCodes": ["NEGATIVE_CONTROL_MISMATCH"] },
    { "check": "verifyPortablePublicReportWithoutPrivateState", "redCodes": ["PORTABLE_VERIFICATION_FAILED"] }
  ]
}
```

## RED dispositions

```json
[
  "FIXTURE_NOT_INSTRUCTOR_CONTROLLED",
  "TRUST_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED",
  "FEATURE_ALREADY_PRESENT",
  "OUTPUT_ROOT_NOT_EMPTY",
  "REVIEWED_REQUEST_SCHEMA_INVALID",
  "REVIEWED_REQUEST_SIGNATURE_INVALID",
  "REVIEWED_REQUEST_INCOMPLETE",
  "SCENARIO_NOT_ATOMIC",
  "REVIEWED_EXAMPLE_COVERAGE_INCOMPLETE",
  "CONVEYOR_PLAN_SCHEMA_INVALID",
  "CONVEYOR_PLAN_SIGNATURE_INVALID",
  "CONVEYOR_STAGE_ORDER_MISMATCH",
  "SCHEMA_CATALOG_MISMATCH",
  "SEMANTIC_PROFILE_CATALOG_MISMATCH",
  "RUNTIME_PORT_CATALOG_MISMATCH",
  "PROJECTOR_TRUST_AUTHORITY_MISMATCH",
  "MODEL_REQUEST_AUTHORITY_INVALID",
  "PROVIDER_EXCHANGE_NOT_INDEPENDENTLY_OBSERVED",
  "PROVIDER_EXCHANGE_BYTE_HASH_MISMATCH",
  "CHALLENGE_NONCE_INVALID",
  "CANDIDATE_BUNDLE_SCHEMA_INVALID",
  "CANDIDATE_IDENTITY_MISMATCH",
  "CANDIDATE_SCENARIO_COVERAGE_INCOMPLETE",
  "CANDIDATE_EXAMPLE_COVERAGE_INCOMPLETE",
  "SEMANTIC_PROFILE_UNAVAILABLE",
  "RUNTIME_PORT_UNAVAILABLE",
  "MODEL_SOURCE_EMISSION_FORBIDDEN",
  "CANDIDATE_AUTHORITY_NOT_ADMITTED",
  "MATERIALIZER_NOT_GENERIC",
  "FEATURE_SPECIFIC_GENERATOR_DETECTED",
  "CAPABILITY_SPINE_INCOMPLETE",
  "BODY_LINEAGE_INCOMPLETE",
  "SEMANTIC_AUTHORITY_SCHEMA_INVALID",
  "SEMANTIC_TO_AST_REPLAY_MISMATCH",
  "AST_TO_TYPESCRIPT_REPLAY_MISMATCH",
  "PROJECTOR_SIGNATURE_INVALID",
  "RUNTIME_COMPOSITION_MISMATCH",
  "RUNTIME_ADAPTER_BYTE_MISMATCH",
  "TYPESCRIPT_BUILD_FAILED",
  "REVIEWED_EXAMPLE_RESULT_MISMATCH",
  "REVIEWED_EXAMPLE_EFFECT_MISMATCH",
  "INVOCATION_COUNT_MISMATCH",
  "EXPECTATION_SIGNAL_MISMATCH",
  "CONFORMANCE_SIGNAL_MISMATCH",
  "DOWNSTREAM_EXECUTION_AFTER_RED",
  "REGENERATION_BYTE_DRIFT",
  "SECOND_EXECUTION_MISMATCH",
  "ARTIFACT_PARENT_MISMATCH",
  "LINEAGE_ROOT_MISMATCH",
  "SIGNING_KEY_NOT_TRUSTED",
  "SIGNING_KEY_ROLE_NOT_PERMITTED",
  "TRANSFORMER_EXECUTABLE_MISMATCH",
  "NEGATIVE_CONTROL_MISMATCH",
  "PORTABLE_VERIFICATION_FAILED"
]
```

## UNRESOLVED dispositions

```json
[
  "PROVIDER_JOB_NOT_REQUESTED",
  "PROVIDER_NETWORK_UNAVAILABLE",
  "INSTRUCTOR_FIXTURE_UNAVAILABLE",
  "INSTRUCTOR_TRUST_STORE_UNAVAILABLE",
  "INSTRUCTOR_OBSERVER_UNAVAILABLE"
]
```

UNRESOLVED is permitted only before an acceptance claim exists. Once an
acceptance run starts, absent required artifacts, adapters, profiles, schemas,
or proof steps produce the applicable RED code.

## Required deterministic negative controls

```text
fixture copied into submission before run
  -> FEATURE_ALREADY_PRESENT
non-empty output root
  -> OUTPUT_ROOT_NOT_EMPTY
unsigned or wrong-role reviewed request
  -> REVIEWED_REQUEST_SIGNATURE_INVALID
scenario with two obligations
  -> SCENARIO_NOT_ATOMIC
reviewed scenario without an example
  -> REVIEWED_EXAMPLE_COVERAGE_INCOMPLETE
reordered conveyor stage
  -> CONVEYOR_STAGE_ORDER_MISMATCH
substituted semantic profile catalog
  -> SEMANTIC_PROFILE_CATALOG_MISMATCH
candidate selects unknown profile
  -> SEMANTIC_PROFILE_UNAVAILABLE
candidate selects unknown port
  -> RUNTIME_PORT_UNAVAILABLE
candidate contains TypeScript source
  -> MODEL_SOURCE_EMISSION_FORBIDDEN
materialization begins after RED admission
  -> CANDIDATE_AUTHORITY_NOT_ADMITTED
materializer contains hidden feature ID
  -> FEATURE_SPECIFIC_GENERATOR_DETECTED
one required authority file omitted
  -> CAPABILITY_SPINE_INCOMPLETE
one of twenty body lineages omitted
  -> BODY_LINEAGE_INCOMPLETE
semantic authority mutated after admission
  -> SEMANTIC_TO_AST_REPLAY_MISMATCH
AST token mutated after signing
  -> AST_TO_TYPESCRIPT_REPLAY_MISMATCH
runtime adapter byte changed
  -> RUNTIME_ADAPTER_BYTE_MISMATCH
compiler diagnostic introduced
  -> TYPESCRIPT_BUILD_FAILED
reviewed example result changed
  -> REVIEWED_EXAMPLE_RESULT_MISMATCH
expected filesystem effect omitted
  -> REVIEWED_EXAMPLE_EFFECT_MISMATCH
semantic operation invoked twice
  -> INVOCATION_COUNT_MISMATCH
downstream collaborator invoked after RED
  -> DOWNSTREAM_EXECUTION_AFTER_RED
regenerated body differs by one byte
  -> REGENERATION_BYTE_DRIFT
one evidence parent hash substituted
  -> ARTIFACT_PARENT_MISMATCH
one artifact signed by a trusted wrong-role key
  -> SIGNING_KEY_ROLE_NOT_PERMITTED
portable verifier is given a private-state dependency
  -> PORTABLE_VERIFICATION_FAILED
```

The implementation may add negative controls, but it must not remove, merge,
weaken, or reorder these controls without revising this governed authority.

## Implementation ownership map

```text
canonical-feature-authority:
  capability and twenty four-body lineages
  reviewed-request and evidence schemas
  generic authority materializer
  runtime port catalog meaning
  contract verifier and negative controls

declarative-typescript-body-projector:
  semantic profile schema and catalog
  semantic-to-AST projection for every admitted profile
  signed AST generation and replay
  signed TypeScript generation and replay

generic-llm-connector:
  provider-neutral request
  instructor-observed exact Gemini transport
  normalized model submission without course-domain vocabulary

canonical-feature-authority-instructor-harness:
  hidden reviewed-request fixture
  external trust authority
  nonce service and provider observation
  empty-root orchestration
  runtime effect observation
  portable verifier and terminal evidence issuance
```

## Repository dependency rule

Generic repositories must not acquire course-domain vocabulary. Course-specific
identities, scenarios, schemas, fixtures, and acceptance policy remain in the
canonical repository or instructor harness. Connector and projector changes
must be reusable through generic contracts.

## Required implementation tools

```text
canonical-feature-authority/tools/
  materializes-end-to-end-new-feature-contract.mjs
  verifies-end-to-end-new-feature-contract.mjs
  regenerates-end-to-end-new-feature-contract.mjs
  materializes-admitted-new-feature.mjs
  verifies-new-feature-materialization.mjs

canonical-feature-authority-instructor-harness/
  runs-hidden-new-feature-acceptance.ts
  verifies-hidden-new-feature-acceptance.ts
  portable-new-feature-verification-runtime.mjs
```

Contract materialization tools create the canonical acceptance capability and
its own projected bodies. The runtime feature materializer is a separate
generic executable and may not contain the contract's demonstration fixture.

## Contract verification before live acceptance

```text
required local gates:

all new schemas are Draft 2020-12 meta-valid
all schema valid fixtures pass
all schema invalid fixtures fail
all artifact types and schemas are cataloged
all five scenarios have complete authority spines
all twenty body lineages reproduce and verify
clean empty-root contract regeneration is byte-identical
TypeScript build passes
existing repository tests pass
109 existing projected artifacts remain verified
bounded-model portable provenance remains GREEN
git diff --check passes
all governed documentation remains byte-identical
```

## Live acceptance report

```text
report path:
C:/lab/runs/new-feature-conveyor-<timestamp>/
  verification/public-new-feature-verification-report.json

required report fields:
reportType
verificationMode
reviewedRequestSha256
featureId
featureAbsentBeforeRun
emptyRootSha256Before
externalTrustAuthoritySha256
verifiedArtifacts
verifiedRepositories
verifiedDependencyFiles
verifiedTransformerExecutables
verifiedRuntimeAdapters
semanticToAstReplay
astToTypescriptReplay
firstBuild
firstExecution
regeneration
secondBuild
secondExecution
negativeControls
terminalDispositionSha256
finalDisposition
```

## Manual inspection sequence

```text
1. Confirm the hidden feature ID is absent before execution.
2. Inspect the externally signed reviewed request.
3. Confirm the output workspace is empty.
4. Follow request admission into the fixed thirteen-stage plan.
5. Inspect exact provider request and response evidence.
6. Confirm the model emitted JSON authority and no source.
7. Compare candidate identities with reviewed authority.
8. Confirm admission precedes every materialized byte.
9. Inspect the complete capability spine and twenty body lineages.
10. Replay semantic authority to AST.
11. Replay AST to TypeScript.
12. Verify runtime adapter identities and observation policies.
13. Execute every reviewed example.
14. Delete and regenerate every derived AST and body.
15. Rebuild and re-execute.
16. Run every negative control.
17. Follow every parent hash to the reviewed request root.
18. Verify the portable terminal report using public evidence only.
```

## Implementation exit condition

The feature becomes GREEN only when one instructor-hidden, previously
nonexistent feature completes the ordered acceptance algorithm and an
independent portable verifier returns GREEN with no private-state dependency.

```text
until then:

RED - END-TO-END NEW-FEATURE CONVEYOR NOT IMPLEMENTED

after complete acceptance:

GREEN - ONE NEW FEATURE IMPLEMENTED END TO END

the GREEN wording must remain singular and bounded
it must not be restated as support for every arbitrary feature
```

## Handoff rule

The implementation agent must treat this governed JSON authority and its
byte-identical Markdown projection as the design source. Any ambiguity found
during implementation is a contract defect to be repaired in authority first,
not an invitation to invent behavior in code.
