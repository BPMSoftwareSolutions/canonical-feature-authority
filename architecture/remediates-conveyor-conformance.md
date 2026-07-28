# Conveyor Conformance Remediation Specification

## Status

**Status:** remediation required  
**Non-conformant baseline:** commit `1ac526c`  
**Scope:** `canonical-feature-authority`,
`declarative-typescript-body-projector`, and the course-specific runtime binding
to `generic-llm-connector`

This document records what must be repaired before the course may claim that
its conveyor bodies originate from semantic authority, are projected without
hand-authored implementation influence, execute their real scenario semantics,
and provide independently trustworthy provenance.

It is intentionally an admission of the current gaps, not a description of
work already completed.

## The claim that must eventually be true

For every executable course body:

1. reviewed feature authority establishes the scenario;
2. the scenario establishes one obligation, expectation, responsibility, and
   signal;
3. admitted semantic executable authority completely declares the body's
   meaning and permitted structure;
4. a trusted semantic-to-AST projector derives AST authority from that semantic
   authority without a course-specific source template;
5. the trusted TypeScript projector derives the body exclusively from admitted
   AST authority;
6. the body carries projector identity, authority hash, body hash, and
   signature;
7. deleting the AST and body and replaying the admitted semantic authority
   reproduces both artifacts deterministically;
8. executing the body invokes a real admitted runtime collaborator and produces
   the scenario's declared signal;
9. conformance compares the observed signal and effects with the scenario
   expectation; and
10. an instructor-controlled trust anchor can verify the result without
    trusting files or commands controlled by the student.

The current repository proves only part of steps 5 and 6, body-level
reprojection from existing AST authority, and delegation-shell execution. It
does not yet prove the complete chain above.

## Why the current baseline is non-conformant

### NC-01: the lifecycle prover began as hand-authored TypeScript

`conformance/proves-projected-body-lifecycle.ts` was drafted as TypeScript,
adopted into lossless AST authority, deleted, and then recreated by the
projector.

Its current signature truthfully proves that the projector emitted its present
bytes from the adjacent AST authority. It does not prove that semantic
authority produced that AST. Adoption preserved hand-authored implementation
decisions and then placed a valid projection signature over their downstream
representation.

**Required disposition:** replace, not grandfather.

### NC-02: the conveyor ASTs were influenced by a temporary source materializer

The 52 conveyor bodies were not written directly to `.ts` by the temporary
materializer. However, that materializer assembled TypeScript source shapes in
memory, tokenized those shapes, and wrote lossless AST authorities. The
materializer was hand-authored, was not retained as governed course authority,
and encoded implementation structure.

Avoiding a `.ts` write did not remove the implementation influence. The ASTs
are therefore reproducible, but their semantic origin is not conformant.

**Required disposition:** regenerate every affected AST through an admitted
semantic-to-AST projection path.

### NC-03: semantic-hash inclusion proves association, not derivation

The conveyor AST projection IDs contain a SHA-256 digest of the corresponding
semantic executable JSON. This detects substitution of the named semantic
record, but it does not prove that the AST was mechanically derived from that
record.

An arbitrary AST can be assigned a projection ID containing the digest of an
unrelated semantic record. Hash linkage alone is not transformation evidence.

**Required disposition:** replay the semantic projection and compare the
observed AST with the admitted AST structurally and byte-for-byte.

### NC-04: the custom semantic profiles are not executable projector contracts

Profiles such as `prebound-member-delegation.v1` and
`declaration-only-context.v1` describe intended shapes, but the course does not
currently contain a schema-valid request that the trusted semantic AST
projector consumes to reproduce each AST authority.

**Required disposition:** define schemas, validate every request, and make the
requests directly consumable by the projector.

### NC-05: the lifecycle proof executes probes, not the thirteen real semantics

The lifecycle prover supplies a probe collaborator that returns a
scenario-shaped `GREEN` value. This proves:

- the declared export can be loaded;
- the declared operation is called once;
- the declared input is forwarded by identity; and
- the collaborator result is returned by identity.

It does not prove that projection subjects were really discovered, Gemini
really responded, an artifact was really admitted and signed, the projector
really ran through the projected stage body, RED really stopped downstream
execution, resume really rejected altered authority, or the final lineage
index was really published.

**Required disposition:** retain the delegation proof as a unit-level
structural test, but add scenario acceptance executions backed by real runtime
collaborators.

### NC-06: conveyor runtime types erase semantic outcomes to `unknown`

The current generated context, input, and result aliases are predominantly
`unknown`. This permits the shells to compile without proving that a scenario's
input and signal agree with its authority.

**Required disposition:** project concrete, authority-derived input and signal
contracts for every scenario.

### NC-07: runtime collaborators are declared but not bound

The projected bodies call context members such as `discover`, `project`,
`obtain`, `evaluate`, and `execute`. The course does not yet provide an admitted
runtime composition that binds all thirteen members to real mechanisms.

**Required disposition:** add course-owned composition authority and adapters.
Provider-neutral behavior must remain in `generic-llm-connector`; course
scenario identities, paths, ordering, and policy must remain in this
repository.

### NC-08: local student trust is not independent grading trust

A student who can change the AST authority, repository trusted-key file,
private projector key, package scripts, and proof implementation controls the
entire local claim. A locally green proof cannot prevent that actor from
replacing authority and verification together.

**Required disposition:** grading must use an instructor-controlled key, trust
authority, projector distribution, and proof workflow outside the submission.

### NC-09: live provider testimony is not yet part of the course acceptance run

No current course proof demonstrates a live request through
`generic-llm-connector` using the configured provider authority and
`LOC_GEMINI_API_KEY`. A valid body signature is not provider testimony.

**Required disposition:** create an explicit live integration acceptance gate
that is separate from deterministic offline tests and records provider
testimony in the scenario's declared signal or generated artifact.

## Contaminated artifacts

Until remediation is complete, the following are demonstrations, not
conformant assignment answers:

- all AST authorities and projected bodies under
  `capabilities/project-course-authority-conveyor/`;
- `conformance/proves-projected-body-lifecycle.ts`;
- its adjacent lossless AST authority; and
- any documentation claiming semantic-to-AST derivation or complete live
  execution for those artifacts.

The feature, scenario, obligation, expectation, responsibility, and signal
records may be retained if independent review confirms their meaning. They do
not become invalid merely because downstream projection was contaminated.

## Required trust model

### Trusted computing base

The course must name a finite root of trust rather than imply an infinite chain
in which every projector must somehow project itself.

The minimum trusted computing base is:

- a reviewed version of the generic semantic-to-AST projector;
- a reviewed version of the deterministic TypeScript AST projector;
- their schemas and supported structural profiles;
- the instructor-controlled projector public-key authority;
- the instructor-controlled grading workflow; and
- the standard language/runtime toolchain used to execute the proof.

These components may have conventionally authored implementations. They are
tools under independent review, not student assignment outputs. Their versions
and hashes must be pinned by instructor authority.

### Student-controlled authority

Students may author or obtain reviewed declarative authority:

- feature and scenario authority;
- obligations and expectations;
- responsibility and signal authority;
- semantic executable JSON;
- runtime composition authority; and
- scenario fixtures that are explicitly classified as test authority.

Students must not submit handwritten TypeScript as an intermediate source for
AST adoption.

### Instructor-controlled grading

The grader must:

1. ignore or delete submitted projected TypeScript;
2. ignore submitted copies of grading keys and grading trust files;
3. validate submitted declarative authority with instructor-owned schemas;
4. regenerate AST authority from semantic authority using the pinned semantic
   projector;
5. regenerate TypeScript using the pinned TypeScript projector;
6. verify signatures using an external instructor trust authority;
7. run offline scenario acceptance and lifecycle proofs from an
   instructor-controlled workflow; and
8. run any required live-provider acceptance with instructor-observed
   credentials and testimony.

## Remediation workstreams

### R-01: freeze and label the baseline

- Mark commit `1ac526c` and its conveyor projections as non-conformant.
- Add a visible warning to the conveyor implementation specification until the
  replacement chain passes.
- Do not use the current signed bodies as examples of semantic-origin proof.
- Preserve the baseline only as a teaching example of why a valid downstream
  signature cannot establish upstream authorship.

**Exit condition:** no course document calls the baseline fully conformant.

### R-02: define canonical semantic projection request schemas

Create schema-versioned contracts for:

- one linear prebound operation delegation;
- one declaration-only context and signal contract;
- one expectation execution body;
- one projection-conformance body;
- the lifecycle proof orchestration;
- imports and runtime dependencies;
- input and result type shapes; and
- allowed statements and effects.

Every schema must set `additionalProperties` to `false` where appropriate,
declare required fields, and reject implementation text, token streams, source
fragments, callbacks, and unbounded free-form code.

**Exit condition:** all semantic requests validate without custom,
course-specific parsing.

### R-03: establish a generic semantic-to-AST projection profile

Enhance `declarative-typescript-body-projector` only where the capability is
generic. It may understand structural concepts such as:

- exported function declaration;
- context parameter;
- awaited member invocation;
- property access;
- returned operation result;
- interfaces and named type references; and
- explicitly authorized imports.

It must not understand:

- course feature or scenario IDs;
- conveyor stage numbers;
- Gemini;
- course paths;
- course signal names; or
- a prewritten TypeScript template.

Course-specific values must arrive entirely in the validated request.

**Exit condition:** the same projector profile can project an unrelated
capability without modification.

### R-04: project AST authority directly from semantic authority

For every body:

1. validate semantic authority;
2. canonicalize it;
3. compute its digest;
4. invoke the semantic-to-AST projector;
5. emit AST authority whose lineage names that digest;
6. replay the same request independently;
7. require identical AST structure; and
8. reject an admitted AST that differs from replay.

No process may construct a TypeScript source string and tokenize it as the
means of creating assignment AST authority.

**Exit condition:** deleting every conveyor AST and replaying semantic
authority reproduces every AST exactly.

### R-05: regenerate all contaminated conveyor bodies

- Remove the 52 current conveyor AST authorities and TypeScript bodies.
- Regenerate the four body roles for all thirteen scenarios through R-04.
- Project TypeScript from the regenerated ASTs.
- Verify signatures with the pinned projector trust authority.
- Confirm that no previous body bytes or in-memory source templates are used as
  projection input.

**Exit condition:** semantic authority alone, plus the trusted projectors,
recreates the complete conveyor body tree.

### R-06: replace the lifecycle prover through the same path

The replacement lifecycle proof must begin as declarative semantic authority,
not as a TypeScript draft. Its authority must declare:

- discovery of targets from authority;
- safe target-boundary validation;
- pre-deletion verification;
- pre- and post-projection execution;
- exact deletion semantics;
- semantic-to-AST replay;
- AST-to-body replay;
- byte and topology comparisons;
- signature verification;
- restoration behavior; and
- terminal disposition.

If the current semantic projector cannot express that orchestration, extend the
generic semantic vocabulary first. Do not fall back to AST adoption.

**Exit condition:** the lifecycle prover can delete its own AST and body and
reproduce both from semantic authority.

### R-07: project concrete scenario contracts

Replace `unknown` aliases with authority-derived contracts. Each scenario must
declare:

- admitted input;
- successful signal;
- RED signal;
- unresolved or not-evaluated signal where applicable;
- externally observable effects;
- error/failure authority; and
- the runtime port responsible for the effect.

**Exit condition:** swapping two scenario inputs or signals causes
schema-validation or compilation failure.

### R-08: implement and admit real runtime collaborators

Create course-owned composition authority binding the thirteen semantic
operations to mechanisms:

| Scenario responsibility | Required real acceptance behavior |
|---|---|
| discover projection subjects | discover the admitted authority set from the configured roots |
| resolve conveyor stage | select the one next stage authorized by the admitted plan |
| project bounded model request | produce the connector request from admitted request authority |
| obtain model submission | invoke `generic-llm-connector` under supplied provider authority |
| evaluate model submission | validate structure, identities, policy, and admissibility |
| attest admitted authority | produce and verify the declared cryptographic attestation |
| project AST authority | run the admitted semantic-to-AST projector |
| invoke TypeScript projector | run the trusted TypeScript projector against the admitted AST |
| evaluate body conformance | verify bytes, topology, hashes, signature, and trust |
| publish lineage index | produce the navigational Markdown index from admitted lineage |
| stop after RED | prove no later collaborator was invoked |
| resume admitted authority | revalidate prior authority and reject alteration or wrong-plan reuse |
| execute complete plan | produce one terminal signal after all authorized stages |

The course repository owns this composition. `generic-llm-connector` must remain
provider- and domain-neutral.

**Exit condition:** every scenario has an acceptance test that observes the
real declared effect.

### R-09: add negative controls that expose laundering

The conformance suite must reject:

- AST created from source adoption for an assignment body;
- AST whose semantic hash is correct but whose replayed structure differs;
- a hand-edited projected body;
- a body re-signed by an untrusted key;
- a changed repository trust file;
- a proof command changed by the submission;
- a fake provider invocation ID;
- a GREEN signal without the required observed effect;
- a resumed artifact from another plan; and
- a downstream invocation after RED.

**Exit condition:** each attack has a named failing example and expected RED
disposition.

### R-10: establish independent grading provenance

Create an instructor-owned workflow that accepts a submission directory but
does not execute submitted proof scripts as its root of trust. It must use:

- pinned projector versions and hashes;
- an external trusted-key authority;
- an instructor-only private key;
- instructor-owned schemas;
- a clean output directory;
- deterministic offline acceptance; and
- an optional separately identified live-provider job.

**Exit condition:** changing every trust-related file inside the submission
cannot make a non-conformant submission pass.

### R-11: add live provider acceptance

The live job must:

- resolve `LOC_GEMINI_API_KEY` only at runtime;
- never write or echo the credential;
- pass provider authority into `generic-llm-connector`;
- record provider/model/request testimony allowed by evidence policy;
- bind the returned authority to request and response hashes;
- validate the model contribution before projection;
- prove that no model-produced text becomes TypeScript directly; and
- publish links to admitted authority, derived AST, and projected body.

The live job must be opt-in so deterministic offline grading does not depend on
network availability.

**Exit condition:** instructor-observed provider testimony and the final
projector signature form one verifiable lineage without claiming that either
one proves the other.

## Required proof levels

The repaired course must report proof levels separately:

| Proof level | What it proves | What it does not prove |
|---|---|---|
| Schema validation | authority has an admitted shape | authority is semantically correct |
| Identity balance | feature/scenario/downstream IDs align | AST was derived from semantics |
| Semantic replay | AST is the deterministic result of semantic authority | TypeScript matches the AST |
| Projection verification | body bytes match AST and trusted projector signature | runtime collaborator is correct |
| Delegation execution | body calls the declared port and returns its result | the port performed its real effect |
| Scenario acceptance | real collaborator produced the declared signal/effect | live provider ran unless testimony exists |
| Live integration | provider invocation was observed and admitted | student did not control grading trust |
| Independent grading | result verifies under instructor-controlled trust | broader system correctness outside declared scope |

No single GREEN result may be presented as covering a higher proof level.

## Acceptance matrix

Remediation is complete only when all rows are GREEN:

| ID | Acceptance requirement |
|---|---|
| AC-01 | No assignment TypeScript body was used as input to AST adoption |
| AC-02 | Every semantic executable JSON validates against a pinned schema |
| AC-03 | Every AST is reproducible from semantic authority alone |
| AC-04 | Every TypeScript body is reproducible from AST authority alone |
| AC-05 | Semantic replay rejects a same-hash/different-AST substitution attempt |
| AC-06 | All projected bodies carry a trusted projector signature |
| AC-07 | All runtime-bearing bodies execute before and after full regeneration |
| AC-08 | Declaration-only bodies compile and are not counted as runtime executions |
| AC-09 | All thirteen primary scenarios execute real admitted collaborators |
| AC-10 | Each scenario produces and validates its declared signal and effect |
| AC-11 | RED prevents every downstream collaborator invocation |
| AC-12 | Resume rejects malformed, altered, expired, wrong-plan, and untrusted authority |
| AC-13 | Live Gemini acceptance carries real provider testimony when the live job is required |
| AC-14 | No LLM response, conveyor template, or temporary source builder emits TypeScript |
| AC-15 | Deleting semantic-derived ASTs and bodies regenerates both deterministically |
| AC-16 | The lifecycle prover regenerates itself from semantic authority |
| AC-17 | The grader ignores submission-controlled trust and proof machinery |
| AC-18 | Generic connector and projector repositories contain no course-domain leakage |
| AC-19 | Documentation describes proof boundaries without overstating them |
| AC-20 | Every negative-control attack produces its declared RED disposition |

## Required demonstration for students

The final classroom demonstration must visibly perform this sequence:

```text
reviewed scenario authority
  → schema-valid semantic executable authority
  → delete prior AST authority
  → project AST authority from semantics
  → replay and compare AST authority
  → delete prior TypeScript body
  → project signed TypeScript from AST authority
  → verify body signature
  → execute the body with the admitted real collaborator
  → observe the declared scenario signal and effect
  → evaluate expectation and conformance
```

For the live model scenario, the demonstration additionally shows provider
testimony from the actual invocation. For offline scenarios, deterministic
local collaborators produce the real declared effect.

## Prohibited shortcuts

The following actions invalidate conformance even when all hashes and
signatures verify:

- writing a TypeScript draft and adopting it as assignment AST;
- constructing TypeScript source text in a temporary script before
  tokenization;
- copying a previous AST and changing only lineage fields;
- placing a semantic hash in a projection ID without replay verification;
- returning a fixture's expected result without executing the declared
  semantics;
- treating a probe collaborator as proof of a real external effect;
- using a student-controlled private key as independent grading evidence;
- executing a submission-controlled proof script as the grading root of trust;
- allowing the model or conveyor to render TypeScript; and
- describing an index, hash, or signature as proof beyond its actual boundary.

## Repair order

The repair must proceed in this order:

1. label and quarantine the current baseline;
2. establish the trusted computing base and instructor grading boundary;
3. define and validate semantic projection schemas;
4. implement generic semantic-to-AST profiles;
5. prove semantic replay with negative controls;
6. regenerate the 52 conveyor body chains;
7. replace the lifecycle prover without AST adoption;
8. project concrete scenario input and signal contracts;
9. bind and test real runtime collaborators;
10. add live provider acceptance;
11. run the independent grading workflow; and
12. remove the remediation warning only after AC-01 through AC-20 pass.

Regenerating signed bodies before fixing semantic-to-AST provenance would only
repeat the original mistake.

## Definition of done

The remediation is done when an instructor can start from a clean checkout,
delete every submitted AST and TypeScript conveyor artifact, retain only
reviewed declarative authority, and use instructor-controlled tools to:

- recreate every AST;
- recreate every body;
- verify every signature;
- execute all thirteen scenarios through real collaborators;
- observe every declared outcome and effect;
- reject every negative control;
- optionally observe the live Gemini invocation;
- reproduce the lifecycle prover itself; and
- obtain GREEN without trusting any student-controlled key, trust file,
  projector binary, or proof command.

Until then, the course may accurately claim that the current artifacts
demonstrate signed AST-to-TypeScript projection and disposable body
reprojection. It must not claim complete semantic-origin conformance or
cheat-resistant assignment provenance.
