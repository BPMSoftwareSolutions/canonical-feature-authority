# Inspecting Independent Live-Conveyor Provenance

## Domain boundary

This guide applies to the course-authority conveyor and the bounded-model
submission stage.

The subject authority is:

```json
{
  "featureId":
    "project-course-authority-through-a-governed-conveyor",
  "scenarioId":
    "obtain-one-bounded-model-submission",
  "obligationId":
    "obtain-one-normalized-model-testimony",
  "expectationId":
    "expect-one-model-submission-testimony",
  "responsibilityId":
    "obtains-bounded-model-submission",
  "signalId":
    "bounded-model-submission",
  "semanticOperationId":
    "obtain-bounded-model-submission"
}
```

That scenario governs the domain operation:

```gherkin
@scenario-id:obtain-one-bounded-model-submission
Scenario: Obtain one bounded model submission
  Given one complete provider-neutral model request
  When the request is executed by the generic LLM connector
  Then one normalized model-submission testimony is emitted
```

It does not, by itself, govern independent acceptance of the run. Independent
acceptance requires separate feature authority.

## Independent-acceptance feature

The missing acceptance feature should use this domain language:

```gherkin
Feature: Prove live conveyor provenance under independent trust
  As an independent conveyor verifier
  I want provider exchange, projection, and execution evidence verified
    outside the submitted trust domain
  So that only one reproducible live-conveyor lineage receives GREEN

  @scenario-id:attest-one-independently-observed-provider-exchange
  Scenario: Attest one independently observed provider exchange
    Given one instructor-issued challenge and one admitted provider-neutral model request
    When its provider exchange is observed by instructor-controlled infrastructure
    Then one signed independent-provider-exchange attestation is emitted

  @scenario-id:reproduce-one-bounded-model-submission-body
  Scenario: Reproduce one bounded-model-submission body
    Given one admitted bounded-model-submission SEJ, AST, and transformer graph
    When its recorded transformer build is independently replayed
    Then one byte-identical projector-signed bounded-model-submission body is emitted

  @scenario-id:observe-one-bounded-model-submission-execution
  Scenario: Observe one bounded-model-submission execution
    Given one projector-signed bounded-model-submission body and its admitted connector binding
    When the body is executed through an instructor-controlled observation port
    Then one signed raw bounded-model-submission execution observation is emitted

  @scenario-id:verify-one-complete-bounded-model-submission-lineage
  Scenario: Verify one complete bounded-model-submission lineage
    Given one provider attestation, reproducible body, and raw execution observation
    When their complete authority lineage is independently evaluated
    Then one signed bounded-model-submission acceptance disposition is emitted
```

These are proposed missing authorities. They must not be described as existing
proof until their Gherkin, JSON authorities, SEJs, ASTs, projected bodies, and
signatures exist.

## Expected authority paths

The acceptance feature should live at:

```text
capabilities/
  prove-live-conveyor-provenance-under-independent-trust/
    proves-live-conveyor-provenance.feature
    declares-feature-authority.json
```

The provider-exchange scenario should live at:

```text
scenarios/
  attest-one-independently-observed-provider-exchange/
    declares-scenario-authority.json
    establish-one-independent-provider-exchange-attestation.obligation.json
    expect-one-independent-provider-exchange-attestation.expectation.json
    attests-independently-observed-provider-exchange/
      declares-responsibility.json
      binds-responsibility-to-semantic-edge.json
      projects-provider-exchange-attestation.semantic-executable.json
      provider-exchange-attestation.ts.ast.authority.json
      provider-exchange-attestation.ts
```

The body-reproduction scenario should live at:

```text
scenarios/
  reproduce-one-bounded-model-submission-body/
    declares-scenario-authority.json
    establish-one-byte-identical-bounded-model-submission-body.obligation.json
    expect-one-byte-identical-bounded-model-submission-body.expectation.json
    reproduces-bounded-model-submission-body/
      declares-responsibility.json
      binds-responsibility-to-semantic-edge.json
      projects-bounded-model-submission-reproduction.semantic-executable.json
      bounded-model-submission-reproduction.ts.ast.authority.json
      bounded-model-submission-reproduction.ts
```

The execution-observation scenario should live at:

```text
scenarios/
  observe-one-bounded-model-submission-execution/
    declares-scenario-authority.json
    establish-one-raw-bounded-model-submission-observation.obligation.json
    expect-one-raw-bounded-model-submission-observation.expectation.json
    observes-bounded-model-submission-execution/
      declares-responsibility.json
      binds-responsibility-to-semantic-edge.json
      projects-bounded-model-submission-observation.semantic-executable.json
      bounded-model-submission-observation.ts.ast.authority.json
      bounded-model-submission-observation.ts
```

The terminal-lineage scenario should live at:

```text
scenarios/
  verify-one-complete-bounded-model-submission-lineage/
    declares-scenario-authority.json
    establish-one-complete-bounded-model-submission-lineage.obligation.json
    expect-one-complete-bounded-model-submission-lineage.expectation.json
    verifies-complete-bounded-model-submission-lineage/
      declares-responsibility.json
      binds-responsibility-to-semantic-edge.json
      projects-bounded-model-submission-lineage-conformance.semantic-executable.json
      bounded-model-submission-lineage-conformance.ts.ast.authority.json
      bounded-model-submission-lineage-conformance.ts
```

## 1. Inspect the original domain authority

Open:

```text
capabilities/project-course-authority-conveyor/
projects-course-authority.feature
```

Find:

```gherkin
@scenario-id:obtain-one-bounded-model-submission
Scenario: Obtain one bounded model submission
  Given one complete provider-neutral model request
  When the request is executed by the generic LLM connector
  Then one normalized model-submission testimony is emitted
```

Open:

```text
scenarios/obtain-one-bounded-model-submission/
declares-scenario-authority.json
```

Confirm:

```json
{
  "featureId":
    "project-course-authority-through-a-governed-conveyor",
  "scenarioId":
    "obtain-one-bounded-model-submission",
  "given":
    "one complete provider-neutral model request",
  "when":
    "the request is executed by the generic LLM connector",
  "then":
    "one normalized model-submission testimony is emitted",
  "independentObligationCount": 1
}
```

Open:

```text
obtain-one-normalized-model-testimony.obligation.json
```

Confirm:

```json
{
  "featureId":
    "project-course-authority-through-a-governed-conveyor",
  "scenarioId":
    "obtain-one-bounded-model-submission",
  "obligationId":
    "obtain-one-normalized-model-testimony",
  "statement":
    "one normalized model-submission testimony is emitted",
  "independentlyEvaluable": true
}
```

Manual equality:

```text
scenario.then
==
obligation.statement
```

Open:

```text
expect-one-model-submission-testimony.expectation.json
```

Confirm:

```json
{
  "scenarioId":
    "obtain-one-bounded-model-submission",
  "obligationId":
    "obtain-one-normalized-model-testimony",
  "expectationId":
    "expect-one-model-submission-testimony",
  "outcome":
    "one normalized model-submission testimony is emitted",
  "expectedResponsibilityId":
    "obtains-bounded-model-submission",
  "expectedSignalId":
    "bounded-model-submission"
}
```

## 2. Inspect the bounded-model-submission SEJ

Open:

```text
scenarios/obtain-one-bounded-model-submission/
obtains-bounded-model-submission/
projects-obtains-bounded-model-submission.semantic-executable.json
```

Inspect:

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "bodyId":
    "obtains-bounded-model-submission-body",
  "lineage": {
    "featureId":
      "project-course-authority-through-a-governed-conveyor",
    "scenarioId":
      "obtain-one-bounded-model-submission",
    "obligationId":
      "obtain-one-normalized-model-testimony",
    "expectationId":
      "expect-one-model-submission-testimony",
    "responsibilityId":
      "obtains-bounded-model-submission",
    "signalId":
      "bounded-model-submission",
    "semanticOperationId":
      "obtain-bounded-model-submission"
  },
  "projection": {
    "functionName":
      "obtainsBoundedModelSubmission",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "ObtainsBoundedModelSubmissionContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionSignal",
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

Before opening the AST or TypeScript, predict:

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
  return await context.obtain(context.request);
}
```

The canonical SEJ hash is carried in the current projection ID:

```text
sha256:b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee
```

## 3. Inspect the bounded-model-submission AST

Open:

```text
obtains-bounded-model-submission.ts.ast.authority.json
```

Confirm:

```json
{
  "projectionId":
    "project-obtains-bounded-model-submission-from-b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee",
  "lineage": {
    "featureId":
      "project-course-authority-through-a-governed-conveyor",
    "scenarioId":
      "obtain-one-bounded-model-submission",
    "obligationId":
      "obtain-one-normalized-model-testimony",
    "responsibilityId":
      "obtains-bounded-model-submission",
    "signalId":
      "bounded-model-submission"
  },
  "attestation": {
    "projectorId":
      "declarative-typescript-body-projector",
    "keyId":
      "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
    "algorithm": "ed25519"
  }
}
```

Find the executable token sequence:

```json
[
  { "kind": "ReturnKeyword", "text": "return" },
  { "kind": "AwaitKeyword", "text": "await" },
  { "kind": "Identifier", "text": "context" },
  { "kind": "DotToken", "text": "." },
  { "kind": "Identifier", "text": "obtain" },
  { "kind": "OpenParenToken", "text": "(" },
  { "kind": "Identifier", "text": "context" },
  { "kind": "DotToken", "text": "." },
  { "kind": "Identifier", "text": "request" },
  { "kind": "CloseParenToken", "text": ")" }
]
```

The current AST authority hash is:

```text
sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9
```

Replay SEJ to AST using only:

```text
the signed SEJ
the admitted structural profile
the pinned semantic-to-AST projector
the external public trust anchor
```

Reject any projector call that also receives:

```text
a prior AST
TypeScript source
a source template
a token fixture
```

## 4. Inspect the projected bounded-model-submission body

Open:

```text
obtains-bounded-model-submission.ts
```

Inspect the current header:

```typescript
// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-obtains-bounded-model-submission-from-b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee
// authority-sha256: sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9
// body-sha256: sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4
// projection-signature: ed25519:ujWNzSyedxnG7ip3MdJZXqK+Gf7dG1+TSzxkWm1FNfwT21YaXRGyagbwHTEq6vQ2DnK3m1xO9Lf0w1vbF+c6DQ==
```

Inspect the body:

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
  return await context.obtain(context.request);
}
```

Manual equalities:

```text
body.projection-id
==
AST.projectionId

body.authority-sha256
==
canonicalSha256(AST authority)

body.body-sha256
==
sha256(projected body bytes)
```

Verify `projection-signature` using the independently supplied projector public
key.

The current header proves AST-to-body projection. It does not yet bind every
feature, scenario, obligation, provider, runtime, and terminal hash required by
the independent-acceptance feature.

## 5. Inspect the provider-exchange attestation

The provider-exchange scenario identity must be:

```json
{
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "attest-one-independently-observed-provider-exchange",
  "obligationId":
    "establish-one-independent-provider-exchange-attestation",
  "expectationId":
    "expect-one-independent-provider-exchange-attestation",
  "responsibilityId":
    "attests-independently-observed-provider-exchange",
  "signalId":
    "independent-provider-exchange-attestation",
  "semanticOperationId":
    "attest-independent-provider-exchange"
}
```

Its SEJ should declare one branch-free delegation:

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole":
    "provider-exchange-attestation",
  "lineage": {
    "featureId":
      "prove-live-conveyor-provenance-under-independent-trust",
    "scenarioId":
      "attest-one-independently-observed-provider-exchange",
    "obligationId":
      "establish-one-independent-provider-exchange-attestation",
    "responsibilityId":
      "attests-independently-observed-provider-exchange",
    "signalId":
      "independent-provider-exchange-attestation",
    "semanticOperationId":
      "attest-independent-provider-exchange"
  },
  "projection": {
    "functionName":
      "attestsIndependentlyObservedProviderExchange",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "AttestsIndependentlyObservedProviderExchangeContext"
    },
    "resultTypeReference":
      "IndependentProviderExchangeAttestation",
    "invocation": {
      "receiver": "context",
      "operationMember": "attest",
      "argument": {
        "receiver": "context",
        "member": "exchange"
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

The AST must project exactly:

```typescript
export async function attestsIndependentlyObservedProviderExchange(
  context: AttestsIndependentlyObservedProviderExchangeContext
): Promise<IndependentProviderExchangeAttestation> {
  return await context.attest(context.exchange);
}
```

The instructor-controlled attestation port must return signed evidence:

```json
{
  "authorityType":
    "independent-provider-exchange-attestation.v1",
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "attest-one-independently-observed-provider-exchange",
  "obligationId":
    "establish-one-independent-provider-exchange-attestation",
  "subjectFeatureId":
    "project-course-authority-through-a-governed-conveyor",
  "subjectScenarioId":
    "obtain-one-bounded-model-submission",
  "challengeNonce":
    "<instructor-issued-nonce>",
  "modelRequestAuthoritySha256":
    "sha256:<model-request-authority-hash>",
  "providerRequestSha256":
    "sha256:<provider-request-hash>",
  "providerResponseSha256":
    "sha256:<provider-response-hash>",
  "resolvedProvider": "<provider-id>",
  "resolvedModel": "<model-id>",
  "providerCorrelationId": "<correlation-id>",
  "observerExecutableSha256":
    "sha256:<instructor-observer-hash>",
  "signingKeyId":
    "sha256:<instructor-observer-key>",
  "signature":
    "ed25519:<external-observation-signature>"
}
```

Manual equalities:

```text
attestation.challengeNonce
==
admitted model request challenge nonce

attestation.modelRequestAuthoritySha256
==
model request authority hash

attestation.providerRequestSha256
==
connector-recorded provider request hash

attestation.providerResponseSha256
==
connector-recorded provider response hash
```

The public trust anchor must come from outside the submitted workspace.

## 6. Inspect recorded-build reproduction

The reproduction scenario identity must be:

```json
{
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "reproduce-one-bounded-model-submission-body",
  "obligationId":
    "establish-one-byte-identical-bounded-model-submission-body",
  "expectationId":
    "expect-one-byte-identical-bounded-model-submission-body",
  "responsibilityId":
    "reproduces-bounded-model-submission-body",
  "signalId":
    "bounded-model-submission-body-reproduction",
  "semanticOperationId":
    "reproduce-bounded-model-submission-body"
}
```

Its SEJ should project:

```typescript
export async function reproducesBoundedModelSubmissionBody(
  context: ReproducesBoundedModelSubmissionBodyContext
): Promise<BoundedModelSubmissionBodyReproduction> {
  return await context.reproduce(context.subject);
}
```

Its signed raw result should contain:

```json
{
  "signalId":
    "bounded-model-submission-body-reproduction",
  "semanticAuthoritySha256":
    "sha256:b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee",
  "astAuthoritySha256":
    "sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9",
  "expectedBodySha256":
    "sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4",
  "observedBodySha256":
    "sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4",
  "projectorExecutableSha256":
    "sha256:<recorded-projector-hash>",
  "transformerDependencyGraphSha256":
    "sha256:<recorded-dependency-graph-hash>",
  "byteIdentical": true,
  "signingKeyId":
    "sha256:<instructor-reproduction-key>",
  "signature":
    "ed25519:<reproduction-signature>"
}
```

Hash every dependency byte:

```powershell
$actual =
  "sha256:" +
  (Get-FileHash -Algorithm SHA256 -LiteralPath $dependencyPath).
    Hash.ToLowerInvariant()

if ($actual -ne $recordedSha256) {
  throw "TRANSFORMER_DEPENDENCY_MISMATCH"
}
```

Do not normalize line endings during a byte-identical proof.

## 7. Inspect bounded-model-submission execution

The execution-observation scenario identity must be:

```json
{
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "observe-one-bounded-model-submission-execution",
  "obligationId":
    "establish-one-raw-bounded-model-submission-observation",
  "expectationId":
    "expect-one-raw-bounded-model-submission-observation",
  "responsibilityId":
    "observes-bounded-model-submission-execution",
  "signalId":
    "bounded-model-submission-execution-observation",
  "semanticOperationId":
    "observe-bounded-model-submission-execution"
}
```

Its SEJ should declare:

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole":
    "runtime-observation",
  "lineage": {
    "featureId":
      "prove-live-conveyor-provenance-under-independent-trust",
    "scenarioId":
      "observe-one-bounded-model-submission-execution",
    "obligationId":
      "establish-one-raw-bounded-model-submission-observation",
    "responsibilityId":
      "observes-bounded-model-submission-execution",
    "signalId":
      "bounded-model-submission-execution-observation",
    "semanticOperationId":
      "observe-bounded-model-submission-execution"
  },
  "projection": {
    "functionName":
      "observesBoundedModelSubmissionExecution",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "ObservesBoundedModelSubmissionExecutionContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionExecutionObservation",
    "invocation": {
      "receiver": "context",
      "operationMember": "observe",
      "argument": {
        "receiver": "context",
        "member": "subject"
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

The AST must project exactly:

```typescript
export async function observesBoundedModelSubmissionExecution(
  context: ObservesBoundedModelSubmissionExecutionContext
): Promise<BoundedModelSubmissionExecutionObservation> {
  return await context.observe(context.subject);
}
```

The admitted runtime composition must bind the subject operation:

```json
{
  "semanticOperationId":
    "obtain-bounded-model-submission",
  "contextOperationMember": "obtain",
  "repository":
    "generic-llm-connector",
  "repositoryCommit":
    "<exact-connector-commit>",
  "modulePath":
    "src/obtains-model-response/obtains-model-response.ts",
  "exportedFunction":
    "obtainsModelResponse",
  "executableSha256":
    "sha256:<connector-executable-hash>",
  "dependencyGraphSha256":
    "sha256:<connector-dependency-graph-hash>"
}
```

The observation mechanism must emit raw evidence rather than decide GREEN:

```json
{
  "authorityType":
    "bounded-model-submission-execution-observation.v1",
  "scenarioId":
    "observe-one-bounded-model-submission-execution",
  "obligationId":
    "establish-one-raw-bounded-model-submission-observation",
  "subjectBodySha256":
    "sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4",
  "observedSemanticOperationId":
    "obtain-bounded-model-submission",
  "observedInvocationCount": 1,
  "modelRequestAuthoritySha256":
    "sha256:<model-request-authority-hash>",
  "boundedModelSubmissionSha256":
    "sha256:<normalized-submission-hash>",
  "providerExchangeAttestationSha256":
    "sha256:<independent-provider-attestation-hash>",
  "observerExecutableSha256":
    "sha256:<runtime-observer-hash>",
  "signingKeyId":
    "sha256:<runtime-observer-key>",
  "signature":
    "ed25519:<runtime-observation-signature>"
}
```

The handwritten counter must not appear as an ungoverned proof body:

```typescript
let invocationCount = 0;
```

Counting is an implementation detail behind the admitted observation port. Its
mechanism bytes must be pinned, independently controlled, and named in the
signed observation.

## 8. Inspect complete-lineage conformance

The terminal scenario identity must be:

```json
{
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "verify-one-complete-bounded-model-submission-lineage",
  "obligationId":
    "establish-one-complete-bounded-model-submission-lineage",
  "expectationId":
    "expect-one-complete-bounded-model-submission-lineage",
  "responsibilityId":
    "verifies-complete-bounded-model-submission-lineage",
  "signalId":
    "bounded-model-submission-acceptance-disposition",
  "semanticOperationId":
    "evaluate-complete-bounded-model-submission-lineage"
}
```

Its SEJ should project:

```typescript
export async function verifiesCompleteBoundedModelSubmissionLineage(
  context: VerifiesCompleteBoundedModelSubmissionLineageContext
): Promise<BoundedModelSubmissionAcceptanceDisposition> {
  return await context.evaluate(context.subject);
}
```

Its subject must bind all prior evidence:

```json
{
  "subjectType":
    "complete-bounded-model-submission-lineage.v1",
  "subjectFeatureId":
    "project-course-authority-through-a-governed-conveyor",
  "subjectScenarioId":
    "obtain-one-bounded-model-submission",
  "subjectObligationId":
    "obtain-one-normalized-model-testimony",
  "subjectResponsibilityId":
    "obtains-bounded-model-submission",
  "semanticAuthoritySha256":
    "sha256:b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee",
  "astAuthoritySha256":
    "sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9",
  "projectedBodySha256":
    "sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4",
  "providerExchangeAttestationSha256":
    "sha256:<provider-attestation-hash>",
  "bodyReproductionSha256":
    "sha256:<body-reproduction-hash>",
  "executionObservationSha256":
    "sha256:<execution-observation-hash>",
  "runtimeCompositionAuthoritySha256":
    "sha256:<runtime-composition-hash>",
  "transformerDependencyGraphSha256":
    "sha256:<transformer-graph-hash>"
}
```

The signed terminal result should be:

```json
{
  "authorityType":
    "bounded-model-submission-acceptance-disposition.v1",
  "featureId":
    "prove-live-conveyor-provenance-under-independent-trust",
  "scenarioId":
    "verify-one-complete-bounded-model-submission-lineage",
  "obligationId":
    "establish-one-complete-bounded-model-submission-lineage",
  "subjectLineageSha256":
    "sha256:<complete-subject-lineage-hash>",
  "disposition":
    "GREEN_COMPLETE_BOUNDED_MODEL_SUBMISSION_PROVENANCE",
  "signingKeyId":
    "sha256:<independent-acceptance-key>",
  "signature":
    "ed25519:<terminal-signature>"
}
```

## 9. Expected projected-body provenance

The bounded-model-submission body should eventually carry one manifest root:

```typescript
// provenance-path: complete-projection-provenance.json
// provenance-sha256: sha256:<complete-manifest-hash>
// gherkin-source-sha256: sha256:<subject-gherkin-hash>
// feature-authority-sha256: sha256:<subject-feature-authority-hash>
// scenario-authority-sha256: sha256:<subject-scenario-authority-hash>
// obligation-authority-sha256: sha256:<subject-obligation-hash>
// expectation-authority-sha256: sha256:<subject-expectation-hash>
// responsibility-authority-sha256: sha256:<subject-responsibility-hash>
// semantic-authority-sha256: sha256:b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee
// ast-authority-sha256: sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9
// runtime-composition-authority-sha256: sha256:<runtime-composition-hash>
// transformer-dependency-graph-sha256: sha256:<transformer-graph-hash>
// projector-executable-sha256: sha256:<projector-hash>
// body-sha256: sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4
// projection-signature: ed25519:<signature-over-all-fields>
```

Provider exchange and later execution results cannot be inserted into a body
that already existed before execution. They are joined by the independently
signed complete-lineage subject and terminal disposition.

## 10. Run domain-aligned rejection controls

Substitute the provider response:

```typescript
tamperedProviderAttestation.providerResponseSha256 =
  "sha256:0000000000000000000000000000000000000000000000000000000000000000";

assert.equal(
  verifyProviderExchangeAttestation(
    tamperedProviderAttestation
  ),
  "PROVIDER_EXCHANGE_MISMATCH"
);
```

Substitute the bounded-model-submission operation:

```typescript
tamperedAst.sourceAst.tokens[
  operationMemberIndex
].text = "fabricate";

assert.equal(
  verifyAst(tamperedAst).conforms,
  false
);
```

Replace the connector binding:

```typescript
tamperedComposition.exportedFunction =
  "returnsFixture";

assert.equal(
  verifyRuntimeComposition(tamperedComposition),
  "RUNTIME_COMPOSITION_MISMATCH"
);
```

Return a normalized fixture without invoking the connector:

```typescript
context.obtain = async () =>
  admittedExpectedSubmission;

assert.equal(
  verifyExecutionObservation(context),
  "CONNECTOR_INVOCATION_NOT_OBSERVED"
);
```

Make the connector fail:

```typescript
context.obtain = async () => {
  throw new Error("provider unavailable");
};

await assert.rejects(
  () => obtainsBoundedModelSubmission(context),
  /provider unavailable/
);
```

If terminal conformance remains GREEN after any substitution, the proof
mechanism is fabricating success.

## Current disposition

The working tree contains the bounded-model-submission Gherkin, scenario,
obligation, expectation, responsibility, SEJ, AST, projected body, body hash,
and projector signature.

It does not yet contain the complete independent-acceptance feature described
above.

Therefore the current disposition for this boundary is:

```text
RED — INDEPENDENT BOUNDED-MODEL-SUBMISSION ACCEPTANCE AUTHORITY MISSING
```
