# Embedded Conveyor Provenance Contract

## Status

**Current disposition:** `RED — EMBEDDED CHAIN INCOMPLETE`  
**Observed on:** 2026-07-28  
**Canonical baseline:** `1ac526cbd35f80c0efaaa95bfaa5050d2afb190d`  
**Generic connector baseline:** `1325586417de205e4be8c19ae736c5bd4af58a2d`  
**TypeScript projector baseline:** `06ccfd8bc42f3fabae44fc381af519231336a1d1`

This document defines provenance as an authenticated property of the generated
artifacts themselves.

It explicitly rejects a detached receipt forest. The semantic executable, AST
authority, projected body, conformance body, and final lineage index are the
evidence. Each artifact carries the digest of its immediate authority, the
identity and digest of the trusted mechanism that transformed that authority,
its own payload digest, and a signature authenticating the transition.

The
[Conveyor Conformance Remediation Specification](remediates-conveyor-conformance.md)
defines the broader repairs required before the course is conformant. This
contract defines how the repaired artifacts must connect.

## The principle

```text
reviewed intent
  -> model request authority
  -> model-produced semantic authority
  -> derived AST authority
  -> projected TypeScript body
  -> conformance projection
  -> final lineage projection
```

Every arrow is represented in the child artifact.

The child contains:

- the canonical digest of its immediate parent;
- the transitive lineage-root digest;
- one `provenance-sha256` committing to the complete canonical lineage graph;
- the identity, version, and executable digest of the transformer;
- the child's canonical payload digest;
- the signing key ID; and
- a signature covering all those values.

Following the parent digests must lead from a generated body back to reviewed
intent without consulting detached receipts. A final index may make those
links convenient to navigate, but it does not own or duplicate the evidence.

## Hashes, signatures, and encryption

These mechanisms have different jobs:

- A **hash** identifies exact canonical bytes and connects one artifact to
  another.
- A **signature** authenticates who or what admitted the transition and
  prevents a submitter from replacing both the artifact and its claimed hash.
- **Encryption** hides data. It is not required for ordinary provenance and
  should not be confused with authenticity.

A hash alone is not enough. Anyone who changes a parent can calculate a new
hash. Every admitted transition therefore requires a signature verifiable
under an instructor-controlled trust authority.

## The projected body's provenance hash

The projected body's `provenance-sha256` is not another name for its AST hash.
It is the digest of the complete canonical lineage graph that produced the
body.

That graph contains the actual content digest and relative path of:

- reviewed feature authority;
- scenario authority;
- obligation authority;
- expectation authority;
- responsibility authority;
- signal authority;
- semantic-edge binding;
- model request authority;
- provider authority;
- model request and response testimony;
- semantic executable authority;
- semantic-to-AST transformer identity and loaded executable digest;
- AST authority;
- AST-to-TypeScript projector identity and loaded executable digest;
- projector trust-key authority;
- executable body payload; and
- every signed parent-child edge between those nodes.

Conceptually:

```text
provenance-sha256 =
  SHA-256(canonicalize(complete-pre-projection-provenance-manifest))
```

The signed body and the later execution lineage cannot hash each other. That
would create an unsatisfiable cycle. The immutable manifest therefore closes
over every authority available before projection; later terminal and lineage
artifacts point back to the manifest and body:

```text
provenance-sha256  = hash(complete pre-projection manifest)
body-sha256        = hash(executable TypeScript payload)
signature          = sign(all header fields + provenance-sha256 + body-sha256)
terminal signal    = sign(body-sha256 + provenance-sha256 + observation)
final lineage      = sign(body-sha256 + provenance-sha256 + terminal hash)
```

The body header contains the manifest's relative path and digest. The manifest
binds reviewed intent, Gherkin source and semantics, model request, provider
authority/request/response, semantic artifact and executable, AST, runtime
composition, expectation, the transformer's transitive dependency graph, and
the execution/terminal/final plans. The scenario's later lineage projection is
only the navigational index over actual artifacts.

## Canonical hashing rule

Every schema must define one unambiguous payload representation:

- JSON uses a pinned canonical JSON algorithm and UTF-8 encoding.
- TypeScript uses UTF-8 with LF line endings.
- A TypeScript `body-sha256` is calculated over the executable payload after
  the generated provenance header, not over a file containing its own hash.
- A JSON `artifactSha256` is calculated over the canonical `payload` object,
  excluding the sibling `provenance` envelope.
- A signature covers the canonical provenance statement plus the payload
  digest.

The schema ID and canonicalization algorithm ID are signed fields. A verifier
must not guess how bytes were normalized.

## One embedded provenance envelope

Every generated JSON authority uses the same envelope shape:

```json
{
  "provenance": {
    "schema": "embedded-provenance.v1",
    "artifactType": "semantic-executable-authority",
    "artifactSha256": "sha256:CHILD_PAYLOAD",
    "parent": {
      "artifactType": "model-request-authority",
      "artifactSha256": "sha256:IMMEDIATE_PARENT"
    },
    "lineageRootSha256": "sha256:REVIEWED_INTENT",
    "transformer": {
      "id": "generic-llm-connector",
      "version": "pinned-version",
      "executableSha256": "sha256:LOADED_IMPLEMENTATION"
    },
    "signingKeyId": "sha256:INSTRUCTOR_TRUSTED_PUBLIC_KEY",
    "signature": "ed25519:SIGNATURE"
  },
  "payload": {
    "...": "the artifact's actual authority"
  }
}
```

The envelope is part of the artifact, not an adjacent receipt. Artifact schemas
must require it and set `additionalProperties: false`.

## The connected artifact chain

### 1. Reviewed intent

The reviewed intent is the lineage root. Its canonical digest is propagated
through every descendant.

It contains the identities, need, promise, admission policy, allowed
transformers, and allowed provider authority. The instructor or reviewer signs
it. No downstream tool may replace those identities.

### 2. Model request authority

The model request authority embeds:

- the reviewed-intent digest as its immediate parent and lineage root;
- provider-authority digest;
- request-policy and response-schema digests;
- fresh verifier challenge nonce;
- generic connector executable digest; and
- instructor/verifier signature.

The nonce makes a copied result from an older run fail the current chain.

### 3. Model-produced semantic authority

The semantic executable JSON is itself the model-execution evidence. It embeds:

- model-request-authority digest;
- lineage-root digest;
- canonical provider-request digest;
- canonical provider-response digest;
- provider authority ID and digest;
- adapter ID and loaded executable digest;
- resolved provider and model;
- provider request or correlation ID;
- finish reason, token usage, and timing allowed by evidence policy;
- connector transformer identity and executable digest; and
- conveyor or instructor signature over the complete statement.

No separate `llm-receipt.json` is created.

If a provider cryptographically signs its response, that signature is embedded.
If it does not, the artifact must say
`attestationKind: "connector-observed-provider-response"` and must not call the
claim provider-signed. Instructor-controlled credentials and provider-account
correlation remain necessary for strong live acceptance.

Relevant real implementation:

- [generic connector entrypoint](../../generic-llm-connector/bin/authority-conveyor.ts)
- [generic response operation](../../generic-llm-connector/src/obtains-model-response/obtains-model-response.ts)
- [provider dispatch](../../generic-llm-connector/src/obtains-model-response/invokes-provider-adapter.ts)
- [Gemini adapter and real HTTP transport](../../generic-llm-connector/providers/gemini/invokes-gemini-model.ts)
- [Gemini request mapping](../../generic-llm-connector/providers/gemini/maps-context-to-gemini-request.ts)
- [Gemini testimony mapping](../../generic-llm-connector/providers/gemini/maps-gemini-testimony.ts)
- [provider authority](../../generic-llm-connector/config/provider-authority.json)

### 4. Derived AST authority

The AST authority embeds:

- semantic executable JSON payload digest as its immediate parent;
- lineage-root digest;
- semantic schema digest;
- semantic-to-AST projector ID, version, commit, and loaded executable digest;
- canonical AST payload digest;
- projector key ID; and
- projector signature over the transition.

This proves more than placing the semantic hash in a projection ID. The
verifier deletes the AST, replays the pinned semantic projector, and requires
the regenerated canonical AST digest to equal the embedded AST payload digest.

No TypeScript draft, temporary source template, tokenizer adoption, or previous
AST may be an input to this transition.

### 5. Projected TypeScript body

The generated body header is its embedded receipt:

```text
// @generated
// provenance-schema: embedded-provenance.v1
// feature-id: project-course-authority-through-a-governed-conveyor
// scenario-id: obtain-one-bounded-model-submission
// obligation-id: obtain-one-normalized-model-testimony
// expectation-id: expect-one-model-submission-testimony
// responsibility-id: obtains-bounded-model-submission
// signal-id: bounded-model-submission
// semantic-operation-id: obtain-bounded-model-submission
// lineage-root-sha256: sha256:REVIEWED_INTENT
// provenance-path: capabilities/.../complete-projection-provenance.json
// provenance-sha256: sha256:COMPLETE_PRE_PROJECTION_MANIFEST
// gherkin-source-sha256: sha256:GHERKIN_BYTES
// gherkin-semantic-sha256: sha256:GHERKIN_SEMANTICS
// model-request-authority-sha256: sha256:MODEL_REQUEST
// provider-authority-sha256: sha256:PROVIDER_AUTHORITY
// provider-request-sha256: sha256:PROVIDER_REQUEST
// provider-response-sha256: sha256:PROVIDER_RESPONSE
// semantic-authority-sha256: sha256:SEMANTIC_PAYLOAD
// semantic-executable-sha256: sha256:SEMANTIC_EXECUTABLE
// ast-authority-sha256: sha256:IMMEDIATE_AST_PARENT
// runtime-composition-authority-sha256: sha256:RUNTIME_COMPOSITION
// expectation-authority-sha256: sha256:EXPECTATION
// transformer-dependency-graph-sha256: sha256:TRANSITIVE_IMPLEMENTATION_GRAPH
// execution-plan-sha256: sha256:EXECUTION_PLAN
// terminal-conformance-plan-sha256: sha256:TERMINAL_PLAN
// final-lineage-plan-sha256: sha256:FINAL_LINEAGE_PLAN
// projector-id: declarative-typescript-body-projector
// projector-version: pinned-version
// projector-executable-sha256: sha256:LOADED_PROJECTOR
// projector-key-id: sha256:INSTRUCTOR_TRUSTED_PUBLIC_KEY
// body-sha256: sha256:EXECUTABLE_PAYLOAD
// projection-signature: ed25519:SIGNATURE
// DO NOT EDIT.
```

The signature covers:

```text
provenance schema
+ feature/scenario/obligation/expectation/responsibility/signal identities
+ semantic operation identity
+ lineage root digest
+ complete manifest path and digest
+ every authority and plan digest printed in the header
+ projector identity/version/executable digest
+ projector key ID
+ body payload digest
```

The immediate authoritative parent is the AST. The semantic and root digests
are repeated in the header as transitive navigation safeguards and must equal
the values inside the AST envelope. The `provenance-sha256` is the complete
pre-projection commitment. The adjacent signed `body-sha256` binds the
executable payload without introducing a hash cycle.

### Required identity and artifact nodes

The canonical lineage graph must contain these nodes for each projected body:

| Layer | Required identity | Required artifact evidence |
|---|---|---|
| Feature | `featureId` | schema ID, path, canonical content hash, reviewer signature |
| Scenario | `scenarioId` | schema ID, path, canonical content hash, parent feature hash |
| Obligation | `obligationId` | schema ID, path, canonical content hash, parent scenario hash |
| Expectation | `expectationId` | schema ID, path, canonical content hash, obligation hash |
| Responsibility | `responsibilityId` | schema ID, path, canonical content hash, obligation hash |
| Signal | `signalId` | schema ID, path, canonical content hash, responsibility hash |
| Semantic edge | `semanticOperationId` | binding path, canonical content hash, responsibility and signal hashes |
| SEJ | SEJ authority type | path, canonical content hash, semantic-edge hash |
| Model request | request ID | path, canonical content hash, provider-authority hash |
| Model testimony | provider request ID | request hash, response hash, provider/model identity, connector signature |
| Semantic executable | body ID and role | path, canonical content hash, SEJ and model-testimony hashes |
| AST authority | projection ID | path, canonical payload hash, semantic-authority hash, projector signature |
| TypeScript body | projection ID | path, executable payload hash, AST hash, projector signature |

The same IDs are repeated in the human-readable header so a student can orient
without opening another file. The `provenance-sha256` prevents those displayed
IDs from drifting away from the complete hashed graph.

Current examples:

- [complete conveyor projected body](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts)
- [model-submission projected body](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts)
- [current AST authority](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts.ast.authority.json)
- [current semantic authority](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/projects-executes-course-authority-conveyor.semantic-executable.json)

The current headers contain AST authority and body projection proof, but not
the complete embedded chain specified above.

### 6. Expectation and conformance projections

Expectation and conformance bodies follow the same chain. Their semantic
authority declares what observation they consume. Their projected headers link
to their own AST and semantic authority.

Their output signal must include:

- subject body digest;
- input digest;
- observed signal digest;
- required-effect digest or observation;
- expectation authority digest; and
- `GREEN` or `RED`.

The terminal signal is the execution evidence. It is a declared output of the
conformance executable, not a detached generic receipt.

For a filesystem effect, the observation is the resulting canonical file or
tree digest. For a projector effect, it is the projected body digest and
signature result. For a provider effect, it is the provider testimony embedded
in the admitted semantic artifact.

### 7. Final lineage projection

One final signed lineage index is allowed and required. It is a projection, not
a receipt dump.

It contains one row per admitted artifact:

```json
{
  "artifactType": "typescript-body",
  "path": "capabilities/.../body.ts",
  "artifactSha256": "sha256:BODY",
  "parentSha256": "sha256:AST",
  "lineageRootSha256": "sha256:INTENT",
  "signatureStatus": "VERIFIED"
}
```

The index:

- links to the actual artifacts;
- repeats their digests for navigation and whole-chain verification;
- contains no copied prompts, responses, ASTs, bodies, or receipts;
- has its own parent digest, payload digest, projector identity, and signature;
- is regenerated solely from the embedded artifact envelopes; and
- becomes RED if any link is missing, duplicated, untrusted, or inconsistent.

Its canonical payload digest is the `provenance-sha256` embedded in each body
that it governs.

The course already has a projected lineage responsibility:

- [lineage-index projected body](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts)

That body must be bound to the real embedded-lineage indexer.

## Runtime composition must also be authority

The projected shells currently call context members. The course must provide
one signed composition authority mapping each semantic operation ID to:

- repository and commit;
- module path;
- exported function;
- loaded executable digest;
- allowed dependency digests; and
- runtime policy.

That composition authority is an input to the complete-conveyor semantic
executable and therefore becomes part of the same embedded parent chain. It is
not a receipt.

The required mappings are:

| Operation | Projected body | Required concrete collaborator |
|---|---|---|
| `discover-projection-subjects` | [`discovers-projection-subjects.ts`](../capabilities/project-course-authority-conveyor/scenarios/discover-every-admitted-projection-subject/discovers-projection-subjects/discovers-projection-subjects.ts) | Authority-root discovery |
| `resolve-conveyor-stage` | [`resolves-conveyor-stage.ts`](../capabilities/project-course-authority-conveyor/scenarios/resolve-the-next-authorized-conveyor-stage/resolves-conveyor-stage/resolves-conveyor-stage.ts) | Admitted-plan transition resolver |
| `project-bounded-model-request` | [`projects-bounded-model-request.ts`](../capabilities/project-course-authority-conveyor/scenarios/project-one-bounded-model-request/projects-bounded-model-request/projects-bounded-model-request.ts) | Provider-neutral request projector |
| `obtain-bounded-model-submission` | [`obtains-bounded-model-submission.ts`](../capabilities/project-course-authority-conveyor/scenarios/obtain-one-bounded-model-submission/obtains-bounded-model-submission/obtains-bounded-model-submission.ts) | `generic-llm-connector` operation |
| `evaluate-model-submission` | [`evaluates-model-submission.ts`](../capabilities/project-course-authority-conveyor/scenarios/evaluate-a-model-submission-for-admission/evaluates-model-submission/evaluates-model-submission.ts) | Admission evaluator |
| `attest-admitted-authority` | [`attests-admitted-authority.ts`](../capabilities/project-course-authority-conveyor/scenarios/attest-one-admitted-authority-artifact/attests-admitted-authority/attests-admitted-authority.ts) | Instructor-admitted signer |
| `project-ast-authority` | [`projects-ast-authority.ts`](../capabilities/project-course-authority-conveyor/scenarios/project-one-admitted-ast-authority/projects-ast-authority/projects-ast-authority.ts) | Pinned semantic-to-AST projector |
| `invoke-typescript-projector` | [`invokes-typescript-projector.ts`](../capabilities/project-course-authority-conveyor/scenarios/invoke-the-trusted-typescript-projector/invokes-typescript-projector/invokes-typescript-projector.ts) | Pinned AST projector |
| `evaluate-projected-body` | [`evaluates-projected-body.ts`](../capabilities/project-course-authority-conveyor/scenarios/evaluate-projected-body-conformance/evaluates-projected-body/evaluates-projected-body.ts) | Body/signature verifier |
| `project-course-lineage-index` | [`projects-course-lineage-index.ts`](../capabilities/project-course-authority-conveyor/scenarios/publish-the-complete-course-lineage-index/projects-course-lineage-index/projects-course-lineage-index.ts) | Embedded-lineage indexer |
| `resolve-red-conveyor-transition` | [`resolves-red-conveyor-transition.ts`](../capabilities/project-course-authority-conveyor/scenarios/stop-downstream-execution-after-red/resolves-red-conveyor-transition/resolves-red-conveyor-transition.ts) | Stop and non-invocation verifier |
| `evaluate-resumable-authority` | [`evaluates-resumable-authority.ts`](../capabilities/project-course-authority-conveyor/scenarios/resume-only-revalidated-admitted-authority/evaluates-resumable-authority/evaluates-resumable-authority.ts) | Embedded-chain revalidator |
| `execute-course-authority-conveyor` | [`executes-course-authority-conveyor.ts`](../capabilities/project-course-authority-conveyor/scenarios/execute-the-complete-admitted-conveyor-plan/executes-course-authority-conveyor/executes-course-authority-conveyor.ts) | Course-owned composition |

The independent verifier resolves these identifiers. The composition may not
embed callbacks, source code, test doubles, or fixture results.

## Anti-stub verification without receipt sprawl

The verifier operates directly on the connected artifacts:

1. issue a fresh nonce in model request authority;
2. require the nonce-derived request digest in model-produced semantic
   authority;
3. hash loaded collaborator, adapter, transport, and projector modules;
4. require those loaded digests to equal signed composition authority;
5. observe the allowed outbound provider connection under
   instructor-controlled credentials;
6. reconcile the embedded provider correlation ID with provider-account logs
   when available;
7. delete and replay AST and TypeScript projections;
8. execute expectations and conformance against observed effects;
9. regenerate the single lineage index from the artifacts; and
10. verify every signature under an external instructor trust anchor.

Required negative controls must show that the same chain becomes RED when:

- a fixture adapter replaces the real adapter;
- network access is blocked;
- credentials are invalid;
- a provider ID or response hash is fabricated;
- an old model response is replayed against a fresh nonce;
- a semantic JSON, AST, body, or composition module is changed;
- an untrusted key re-signs a changed artifact;
- a `GREEN` signal lacks the declared effect;
- any provider lane returns `MAX_TOKENS`, timeout, safety, or malformed output;
- a RED stage is followed by downstream execution; or
- an existing artifact from another plan is resumed.

Negative-control results are conformance signals owned by their scenario
artifacts. They are not accumulated in a detached `receipts/` directory.

## What can and cannot be embedded

Origin provenance can be embedded in an immutable generated body because it is
known when the body is projected.

Later execution cannot be written back into that body without changing its
bytes and invalidating the projector signature. Execution proof therefore
belongs in the declared terminal signal and its signed final lineage
projection. There should be one terminal projection for the run, not one
receipt per function call.

This distinction must remain explicit:

- the body header proves **where the body came from**;
- the conformance signal proves **what happened when it ran**; and
- the final lineage projection connects both without duplicating either.

## Current evidence and gaps

### Embedded schema foundation

The first remediation slice now defines the schema family without claiming
that any transition has been executed or signed:

- [shared embedded provenance envelope](../schemas/embedded-provenance.schema.json)
- [reviewed intent authority](../schemas/reviewed-intent-authority.schema.json)
- [model request authority](../schemas/model-request-authority.schema.json)
- [model-produced semantic authority](../schemas/model-produced-semantic-authority.schema.json)
- [embedded AST authority](../schemas/embedded-ast-authority.schema.json)
- [runtime composition authority](../schemas/runtime-composition-authority.schema.json)
- [conformance terminal signal](../schemas/conformance-terminal-signal.schema.json)
- [final lineage projection](../schemas/final-lineage-projection.schema.json)
- [parsed TypeScript provenance header](../schemas/embedded-typescript-provenance-header.schema.json)
- [schema catalog and remaining RED gaps](../schemas/embedded-provenance-schema-catalog.json)

These contracts pin `RFC8785-JCS` for JSON payloads and
`UTF8-LF-AFTER-HEADER` for TypeScript payloads. They reject undeclared
properties, missing transition signatures, invalid parent types, runtime
callbacks embedded in composition authority, GREEN conformance without an
observed effect, and a GREEN final lineage containing a RED signature.

This is schema-level progress only. No placeholder digest or signature is
admitted as real provenance, and the catalog remains
`RED_IMPLEMENTATION_NOT_YET_BOUND`.

### Trusted semantic-to-AST boundary progress

The projector working tree now contains a generic semantic-authority-to-AST
transition at
`C:/lab/repos/declarative-typescript-body-projector/src/ast/projects-semantic-authority-to-ast.ts`.
Its public projection operation accepts a verified embedded semantic artifact,
posture, declared projector identity, and private-key path. It accepts no source
text, token list, topology, previous AST, or TypeScript template.

The transition:

- verifies the signed parent and its canonical payload hash;
- validates and projects the embedded semantic request through the existing
  semantic AST kernel;
- constructs canonical TypeScript internally from that semantic AST;
- derives lossless tokens and compiler topology from those derived bytes;
- calculates the loaded transition module's executable hash rather than
  accepting that hash from the caller;
- embeds the immediate semantic-parent hash and lineage-root hash; and
- signs the complete AST provenance statement with Ed25519.

Its proof harness at
`C:/lab/repos/declarative-typescript-body-projector/proof/verifies-semantic-authority-to-ast-transition.ts`
currently proves deterministic replay, equality with the ordinary canonical
projector path, parent/root linkage, semantic-parent substitution rejection, and
AST-payload substitution rejection. The projector's complete `npm run prove`
gate passes, including governance registration for both new bodies.

At that stage this did **not** turn the course chain GREEN: the implementation
was still an uncommitted projector working tree, its commit and executable
digest were not pinned into this repository, and no real connector-produced
signed semantic artifact existed. The following live pilot closes that one
demonstration gap without changing the course-wide disposition.

### Live embedded-provenance pilot — GREEN

On 2026-07-28, an external instructor harness completed one real greeting
scenario from clean, commit-pinned worktrees at
`C:/lab/runs/complete-body-provenance-pilot-20260728-live`.

The admitted run contains:

1. [`01-reviewed-intent.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/01-reviewed-intent.json);
2. [`02-model-request.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/02-model-request.json);
3. [`03-model-semantic.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/03-model-semantic.json);
4. [`04-typescript-ast.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/04-typescript-ast.json);
5. [`05-runtime-composition.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/05-runtime-composition.json);
6. [`06-expectation.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/06-expectation.json);
7. [`07-complete-projection-provenance.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/07-complete-projection-provenance.json);
8. [`08-transformer-dependency-graph.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/08-transformer-dependency-graph.json);
9. [`generated/greets-student.ts`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/generated/greets-student.ts);
10. [`09-terminal-signal.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/09-terminal-signal.json); and
11. [`10-final-lineage.json`](C:/lab/runs/complete-body-provenance-pilot-20260728-live/10-final-lineage.json).

Gemini Flash invocation
`invocation-420fc19d-3020-4561-b917-73938fa77bd1` produced the semantic
authority with 322 input tokens, 242 output tokens, and 1,572 provider-reported
total tokens. The provider did not return a distinct request ID, so the
connector invocation ID is explicitly retained as the correlation ID; the
artifact does not claim provider-signed testimony.

The generated body hash is
`sha256:ccb5132fac95ab567d556cc075721e220b11df8ac62e91c769528044603475a0`.
Its complete pre-projection provenance hash is
`sha256:307ea1ba7c1d91999db89584aa9e24519c3b7ae8b6ede70f5571a353f6f7259d`.
Checks established:

- the manifest, terminal signal, and final lineage validate against their
  declared schemas;
- the body signature verifies against the manifest and AST;
- substitution of only the provider-response hash is rejected;
- omission of one required manifest hash is rejected by the projector proof;
- all transitive trusted source files match their recorded commits;
- semantic-to-AST and AST-to-TypeScript replay conform;
- execution invokes `resolve-student-greeting` exactly once; and
- the observed signal is `GREEN` with value `Hello, Ada!`.

The final lineage payload hash is
`sha256:5e1fc841feebae5eb2f212f582e1bca30f795205026706324dfee5d77ebc2a77`
and declares `GREEN_COMPLETE_EMBEDDED_PROVENANCE`.

Earlier live attempts remain evidence rather than being overwritten:
one altered `signalId` and omitted the semantic declaration; the next emitted
an empty declaration object. Exact canonical admission rejected both before AST
projection. A later GREEN mechanics run preceded repository pinning and is not
the durable pilot named above.

This is a **pilot GREEN**, not course-wide GREEN. The pilot uses `any` at its
injected context and result boundary to stay within Gemini's currently admitted
single-function structured-output profile. Concrete projected course contracts,
reviewed implementation commits, course-owned composition, and migration of all
declared bodies remain required.

### What is demonstrated

`npm run prove:lifecycle` currently demonstrates:

- 93 of 93 embedded body projection signatures verify;
- 93 bodies can be deleted and reproduced byte-for-byte from current AST
  authority;
- 39 runtime-bearing exports delegate once to injected operations before and
  after reprojection;
- the repository compiles; and
- the four existing tests pass.

The current
[lifecycle prover](../conformance/proves-projected-body-lifecycle.ts) creates
probe callbacks and returns manufactured signals. It proves shell delegation,
not the real effects.

### What the live audit demonstrated

The signed projected complete-conveyor shell was explicitly bound by an audit
harness to the real adjacent
[eight-lane connector implementation](../../generic-llm-connector/src/conveyor/runs-authority-conveyor.ts)
and Gemini HTTP adapter.

Three lanes completed:

1. `feature-authority`;
2. `scenario-authority`; and
3. `obligation-authority`.

The fourth lane, `responsibility-authority`, returned:

```text
PROVIDER_REQUEST_REJECTED — MAX_TOKENS —
Gemini terminated generation with finish reason "MAX_TOKENS".
```

A resume attempt stopped at the same lane. Therefore the observed disposition
is:

```text
RED — LIVE PROVIDER REACHED; CONVEYOR INCOMPLETE
```

The temporary audit output was diagnostic and is deliberately not promoted
into a receipt tree in this repository.

### Missing embedded links

| Link | Current state |
|---|---|
| Reviewed intent -> model request authority | Incomplete |
| Model request -> model-produced semantic JSON | Provider evidence not embedded to this contract |
| Semantic JSON -> AST | Hash association exists in places; derivation replay not proven |
| AST -> TypeScript body | Demonstrated and signed |
| Composition authority -> loaded real collaborators | Missing |
| Real effects -> conformance signals | Missing for the thirteen course scenarios |
| Provider testimony -> semantic authority | Missing from the course chain |
| All artifacts -> one signed lineage projection | Current index is not yet this complete chain |
| Instructor-controlled trust | Missing |

## GREEN acceptance

The course may claim `GREEN — COMPLETE EMBEDDED PROVENANCE` only when:

1. every generated artifact carries the required provenance envelope or
   generated header;
2. every immediate-parent digest resolves to an actual admitted artifact;
3. every lineage-root digest resolves to reviewed signed intent;
4. semantic-to-AST and AST-to-body replay reproduce exact canonical payloads;
5. every transformer executable digest matches instructor-approved code;
6. all thirteen projected operations resolve through signed composition
   authority to real collaborators;
7. all expectations and conformance bodies evaluate real observed effects;
8. all eight provider lanes complete with embedded provider testimony;
9. the final body compiles and passes its declared behavior;
10. every negative control produces RED;
11. every signature verifies under instructor-controlled trust; and
12. the one final lineage projection connects the entire artifact graph.

Partial completion remains RED. A valid hash or signature must never be
described as proving a link above or below the transition it actually covers.

## Definition of done

Starting from reviewed intent and instructor-owned trust, an independent
verifier can:

- delete every derived AST and TypeScript body;
- regenerate the ASTs from semantic authority;
- regenerate the bodies from AST authority;
- follow embedded parent digests from each body back to reviewed intent;
- verify the exact transformer used at every edge;
- bind and execute the thirteen real collaborators;
- observe the provider and other declared effects;
- validate the terminal signals;
- regenerate one navigational lineage index; and
- obtain GREEN without trusting a detached receipt, a student-controlled key,
  or a submission-controlled proof command.

The artifacts are the receipts. The projections are the provenance chain.
