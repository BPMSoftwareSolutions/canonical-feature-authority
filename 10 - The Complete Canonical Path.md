# 10. The Complete Canonical Path

```text id="5n17fh"
Human intent
    ↓
Canonical feature authority
    ↓
Projected Gherkin
    ↓
Scenario implementation expectation
    ↓
Semantic authority
    ↓
Code-body projection authority
    ↓
Generated TypeScript body
    ↓
Observed RED/GREEN signal
    ↓
Expectation-to-outcome conformance receipt
```

Every artifact represents the same semantic subject through a different projection surface.

```text id="k1sxp8"
Feature:
reject-non-atomic-feature-scenarios

Scenario:
reject-a-scenario-with-multiple-obligations

Obligation:
scenario-carries-one-obligation

Responsibility:
evaluates-scenario-atomicity

Signal:
scenario-atomicity
```

Those identities must not drift as the subject moves through different projection surfaces.

---

# Canonical Path Classification

```json id="30m44b"
{
  "pathType": "canonical-semantic-lineage.v1",
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  },
  "requiredLayers": [
    "intent",
    "canonical-feature-authority",
    "human-readable-behavior",
    "expectation",
    "semantic-authority",
    "language-projection-authority",
    "language-projection",
    "observation",
    "proof"
  ]
}
```

The canonical path is complete only when the same semantic subject can be traced across every required layer.

---

# One Subject, Many Projection Surfaces

The artifacts do not all contain the same fields or serve the same purpose.

They preserve the same subject while answering different questions.

| Layer                          | Question answered                           |
| ------------------------------ | ------------------------------------------- |
| Human intent                   | What does the human want?                   |
| Canonical feature authority    | What behavior is admitted?                  |
| Projected Gherkin              | How can a human read that behavior?         |
| Expectation projection         | What must exist downstream?                 |
| Semantic authority             | What does the responsibility mean?          |
| Code-body projection authority | What exact syntax tree may be rendered?     |
| Generated TypeScript           | What executable language body was produced? |
| Observed signal                | What happened at runtime?                   |
| Conformance receipt            | Did observed reality satisfy expectation?   |

The path is not:

```text id="syp8ii"
Nine unrelated documents
```

It is:

```text id="jf4e39"
One semantic subject
    ↓
Nine governed representations
```

---

# 1. Human Intent Carries the Candidate Outcome

## Human statement

```text id="0ii70v"
Reject a feature scenario when it contains
more than one independent obligation.
```

## Semantic subject first discovered

```json id="wd3wt8"
{
  "candidateFeatureId": "reject-non-atomic-feature-scenarios",
  "candidateOutcome": "reject-scenario-containing-multiple-obligations"
}
```

## This becomes

Not Node code.

It becomes candidate semantic input for canonicalization and human admission.

```text id="8nbi9y"
Human language
    ↓
candidate capability meaning
```

---

# 2. Canonical Feature Authority Stabilizes the Subject

## Canonical identities

```json id="7usuyq"
{
  "featureId": "reject-non-atomic-feature-scenarios",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity"
}
```

## This becomes

The stable identity set inherited by every downstream artifact.

```text id="3emkmm"
Candidate meaning
    ↓
admitted semantic identities
```

These identities must not later be recreated from titles, filenames, or guessed function names.

---

# 3. Projected Gherkin Makes the Subject Human-Readable

## Canonical subject

```json id="8me0us"
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity"
}
```

## This becomes

```gherkin id="93ifzu"
Scenario: Reject a scenario with multiple obligations
  Given a canonical scenario containing multiple independent obligations
  When scenario atomicity is evaluated
  Then the scenario is rejected
  And the signal is SCENARIO_NOT_ATOMIC
```

The words are readable projections.

The stable identities remain the canonical lineage.

---

# 4. Expectation Projection Makes the Subject Implementable

## Expected subject topology

```json id="1aw1nv"
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectedObligation": {
    "obligationId": "scenario-carries-one-obligation"
  },
  "expectedResponsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "count": 1
  },
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "count": 1
  },
  "expectedBodyLineage": [
    {
      "bodyId": "evaluates-scenario-atomicity-body"
    }
  ]
}
```

## This becomes

```text id="dtiq7c"
One expected obligation

One expected responsibility

One expected body

One expected signal

One expected proof lineage
```

The expectation projector turns admitted behavior into binding downstream topology.

---

# 5. Semantic Authority Makes the Subject Executable

## Semantic authority

```json id="11an3j"
{
  "authorityId": "evaluate-scenario-atomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "inputContract": "canonical-scenario.v1",
  "resultProjection": "project-scenario-atomicity-signal"
}
```

## This is invoked in projected code as

```typescript id="p39t89"
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

The semantic authority gives executable meaning to the expected responsibility.

---

# 6. Code-Body Projection Authority Gives the Subject Language Structure

## Structured body authority

```json id="6wxr2z"
{
  "path": "src/runtime/evaluates-scenario-atomicity.ts",
  "name": "evaluatesScenarioAtomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "primarySemanticInvocation": "evaluate-scenario-atomicity"
}
```

## This becomes

```typescript id="jpvqy0"
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

The subject is now embodied in TypeScript without changing its semantic identity.

---

# 7. Generated TypeScript Carries the Same Lineage

## Generated body

```typescript id="q7iiv0"
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

## Lineage preserved

```text id="wa47ms"
Scenario identity:
unchanged

Obligation identity:
unchanged

Responsibility identity:
unchanged

Signal identity:
unchanged

Semantic authority identity:
unchanged
```

The function name is language-specific.

The canonical responsibility ID is not.

---

# 8. Observed Signal Carries the Same Runtime Subject

## Observed signal

```json id="9y4mzi"
{
  "signalId": "scenario-atomicity",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "authorityId": "evaluate-scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

## Lineage preserved

```text id="xiinmx"
Expected signal:
scenario-atomicity

Observed signal:
scenario-atomicity
```

The runtime result still refers to the exact subject declared above the projection boundary.

---

# 9. Conformance Receipt Closes the Lineage

## Proof subject

```json id="d1lzc0"
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "bodyId": "evaluates-scenario-atomicity-body",
  "authorityId": "evaluate-scenario-atomicity"
}
```

## This becomes the tie-out

```text id="ax60ha"
Expected subject
    =
Observed subject

Expected topology
    =
Observed topology

Expected semantic edge
    =
Observed semantic edge

Expected signal
    =
Observed signal
```

## Final conformance result

```json id="3jfl04"
{
  "scenarioDisposition": "SCENARIO_NOT_ATOMIC",
  "conformanceDisposition": "SCENARIO_IMPLEMENTATION_CONFORMS"
}
```

The scenario result is RED because the submitted scenario is invalid.

The conformance result is GREEN because the implementation correctly detected it.

---

# Identity Preservation Matrix

| Canonical identity | Feature authority |      Gherkin      | Expectation | Semantic authority | Code authority |  Generated body  |  Signal  | Proof |
| ------------------ | :---------------: | :---------------: | :---------: | :----------------: | :------------: | :--------------: | :------: | :---: |
| Feature ID         |         ✓         |       bound       |      ✓      |        bound       |    metadata    |     metadata     | optional |   ✓   |
| Scenario ID        |         ✓         |       bound       |      ✓      |        bound       |    metadata    |     metadata     |     ✓    |   ✓   |
| Obligation ID      |         ✓         | implicit/readable |      ✓      |          ✓         |    metadata    |     metadata     |     ✓    |   ✓   |
| Responsibility ID  |         ✓         |   `When` binding  |      ✓      |          ✓         |        ✓       |     metadata     |     ✓    |   ✓   |
| Signal ID          |         ✓         |  supporting `And` |      ✓      |          ✓         |        ✓       |   metadata/type  |     ✓    |   ✓   |
| Authority ID       |         —         |         —         |   expected  |          ✓         |  literal call  |   literal call   |     ✓    |   ✓   |
| Body ID            |         —         |         —         |      ✓      |        bound       |        ✓       | metadata/receipt |     —    |   ✓   |

`bound` means the readable or semantic surface is explicitly connected to the canonical identity even where that identity is not rendered directly as visible prose.

---

# Identity Drift Rules

The repository must reject drift at any transition.

## Feature-to-Gherkin drift

```text id="vxb0u7"
Canonical scenario ID:
reject-a-scenario-with-multiple-obligations

Projected Gherkin binding:
different scenario ID

Disposition:
GHERKIN_SCENARIO_IDENTITY_MISMATCH
```

## Expectation drift

```text id="pt5fto"
Feature responsibility:
evaluates-scenario-atomicity

Expectation responsibility:
repairs-scenario-atomicity

Disposition:
EXPECTATION_RESPONSIBILITY_DRIFT
```

## Semantic-authority drift

```text id="wppzvo"
Expected responsibility:
evaluates-scenario-atomicity

Authority responsibility:
rewrites-feature-scenario

Disposition:
RESPONSIBILITY_AUTHORITY_BINDING_MISMATCH
```

## Code-projection drift

```text id="bqlt5d"
Expected semantic edge:
evaluate-scenario-atomicity

Projected semantic edge:
convert-obligations-to-table

Disposition:
SEMANTIC_AUTHORITY_ID_MISMATCH
```

## Runtime-signal drift

```text id="ty31io"
Expected signal:
scenario-atomicity

Observed signal:
feature-validity

Disposition:
SIGNAL_IDENTITY_MISMATCH
```

## Proof-subject drift

```text id="wu34ab"
Expected scenario:
reject-a-scenario-with-multiple-obligations

Proof receipt scenario:
admit-a-scenario-with-one-obligation

Disposition:
PROOF_SUBJECT_MISMATCH
```

---

# The Same Subject Must Not Be Reconstructed from Labels

The platform agent must never treat human-readable titles as stable identity.

```text id="zaw25n"
Title:
Reject a scenario with multiple obligations
```

may be edited for clarity.

The stable identity remains:

```text id="6xrci7"
reject-a-scenario-with-multiple-obligations
```

Likewise:

```text id="wlzubv"
TypeScript function:
evaluatesScenarioAtomicity
```

is not the canonical responsibility identity.

The canonical responsibility remains:

```text id="r7hhzk"
evaluates-scenario-atomicity
```

The naming relationship must be projected and traceable.

---

# Canonical Subject Envelope

Each artifact should expose or reference a common subject envelope.

```json id="sez79x"
{
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  }
}
```

Additional layer-specific identities may be added:

```json id="nwqu9b"
{
  "semanticAuthorityId": "evaluate-scenario-atomicity",
  "bodyId": "evaluates-scenario-atomicity-body",
  "projectionId": "project-scenario-atomicity-body",
  "proofResponsibilityId": "proves-scenario-atomicity-evaluation"
}
```

The common subject envelope allows deterministic lineage checks across unlike artifact types.

---

# Platform-Agent Tagging Requirement

Every artifact created, projected, executed, observed, or proven by the platform agent must be tagged with:

```text id="1wfp88"
artifactKind
layer
featureId
scenarioId
obligationId
responsibilityId
signalId
projectedFrom
producedBy or authoritySource
proofRole
status
```

Where applicable, it must also carry:

```text id="vru72z"
semanticAuthorityId
bodyId
projectionId
proofResponsibilityId
authorityDigest
artifactDigest
```

A platform-agent artifact without a resolvable semantic subject must not be admitted.

Possible findings:

```text id="p65tpe"
SEMANTIC_SUBJECT_MISSING
FEATURE_IDENTITY_MISMATCH
SCENARIO_IDENTITY_MISMATCH
OBLIGATION_IDENTITY_MISMATCH
RESPONSIBILITY_IDENTITY_MISMATCH
SIGNAL_IDENTITY_MISMATCH
AUTHORITY_IDENTITY_MISMATCH
BODY_LINEAGE_MISMATCH
PROJECTION_LINEAGE_MISMATCH
PROOF_SUBJECT_MISMATCH
```

---

# The Platform Agent Must Follow the Path Forward

The platform agent must move through the canonical path in order.

```text id="570nkl"
Human intent
    ↓ candidate only

Canonical feature authority
    ↓ admitted behavior

Gherkin
    ↓ readable projection

Expectation
    ↓ required downstream topology

Semantic authority
    ↓ admitted meaning

Code-body authority
    ↓ admitted syntax structure

Generated code
    ↓ executable projection

Observed signal
    ↓ runtime testimony

Conformance proof
    ↓ expectation-to-reality tie-out
```

It must not skip from:

```text id="1bz5yr"
Human intent
    directly to
generated code
```

It must not skip from:

```text id="j4igsk"
Gherkin
    directly to
handwritten implementation
```

It must not work backward by changing authority to match code that was already produced.

---

# The Platform Agent Must Follow the Path Backward During Review

During validation, the agent must be able to trace any generated line backward.

```text id="iu63xs"
Generated TypeScript line
    ↑
Code-body projection node
    ↑
File-body expectation
    ↑
Semantic responsibility
    ↑
Scenario expectation
    ↑
Canonical feature authority
    ↑
Human intent
```

For example:

```typescript id="cwwbkw"
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

must trace backward to:

```text id="j5vyy4"
Semantic authority:
evaluate-scenario-atomicity

Responsibility:
evaluates-scenario-atomicity

Obligation:
scenario-carries-one-obligation

Scenario:
reject-a-scenario-with-multiple-obligations

Feature:
reject-non-atomic-feature-scenarios
```

If the reverse path breaks, the code line has no complete admitted lineage.

---

# Forward and Reverse Proof

The architecture requires both directions.

## Forward projection

```text id="n3sd4r"
Intent
    ↓
Authority
    ↓
Expectation
    ↓
Code
    ↓
Observation
```

## Reverse conformance

```text id="kbz16l"
Observed result
    ↑
Generated body
    ↑
Projection authority
    ↑
Semantic authority
    ↑
Expectation
    ↑
Scenario
    ↑
Intent
```

The forward path proves derivation.

The reverse path proves traceability.

Together they establish lineage.

---

# Full Canonical Lineage Record

A lineage record might look like this:

```json id="erxwsa"
{
  "lineageType": "canonical-scenario-lineage.v1",
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  },
  "surfaces": [
    {
      "layer": "intent",
      "artifactId": "reject-non-atomic-scenario-human-intent"
    },
    {
      "layer": "canonical-feature-authority",
      "artifactId": "reject-non-atomic-feature-scenarios"
    },
    {
      "layer": "human-readable-behavior",
      "artifactId": "reject-non-atomic-feature-scenarios.feature"
    },
    {
      "layer": "expectation",
      "artifactId": "expect-reject-multiple-obligations-body"
    },
    {
      "layer": "semantic-authority",
      "artifactId": "evaluate-scenario-atomicity"
    },
    {
      "layer": "language-projection-authority",
      "artifactId": "project-scenario-atomicity-body"
    },
    {
      "layer": "language-projection",
      "artifactId": "src/runtime/evaluates-scenario-atomicity.ts"
    },
    {
      "layer": "observation",
      "artifactId": "scenario-atomicity-signal"
    },
    {
      "layer": "proof",
      "artifactId": "scenario-implementation-conformance-receipt"
    }
  ],
  "disposition": "CANONICAL_LINEAGE_COMPLETE"
}
```

---

# Closure Conditions

The canonical path is complete only when:

```text id="rs3tgn"
The human intent has been reviewed.

The feature authority is admitted.

The Gherkin projection matches the feature authority.

The expectation matches the scenario.

The semantic authority matches the expected responsibility.

The code-body authority matches the expected body lineage.

The generated body matches current code-body authority.

The observed signal matches the expected signal.

The conformance receipt binds current expectations and observations.

Every required identity remains unchanged.
```

Possible final dispositions:

```text id="95iqzs"
CANONICAL_LINEAGE_COMPLETE

CANONICAL_LINEAGE_INCOMPLETE

CANONICAL_IDENTITY_DRIFT_DETECTED

EXPECTED_SURFACE_MISSING

UNDECLARED_SURFACE_OBSERVED

PROJECTION_NOT_CURRENT

OBSERVATION_NOT_TIED_TO_EXPECTATION

PROOF_SUBJECT_MISMATCH
```

---

# Complete Canonical Path in One Detailed View

```text id="bc7z77"
Human intent
"Reject scenarios containing multiple obligations"
    │
    ▼
Canonical feature authority
feature-id: reject-non-atomic-feature-scenarios
scenario-id: reject-a-scenario-with-multiple-obligations
    │
    ▼
Projected Gherkin
Given one condition
When one responsibility
Then one expected result
And one observable signal
    │
    ▼
Scenario implementation expectation
obligation: scenario-carries-one-obligation
responsibility: evaluates-scenario-atomicity
body count: 1
signal count: 1
    │
    ▼
Semantic authority
authority-id: evaluate-scenario-atomicity
input: canonical-scenario.v1
output: scenario-atomicity
    │
    ▼
Code-body projection authority
body-id: evaluates-scenario-atomicity-body
projection-id: project-scenario-atomicity-body
    │
    ▼
Generated TypeScript
evaluatesScenarioAtomicity(context)
invokes evaluate-scenario-atomicity
    │
    ▼
Observed signal
signal-id: scenario-atomicity
disposition: SCENARIO_NOT_ATOMIC
color: RED
    │
    ▼
Conformance receipt
scenario result: RED
implementation conformance: GREEN
lineage: COMPLETE
```

---

# Artifact Tag

```json id="drbzdo"
{
  "artifactKind": "canonical-semantic-lineage",
  "layer": "cross-layer-governance",
  "semanticSubject": {
    "featureId": "reject-non-atomic-feature-scenarios",
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  },
  "includesLayers": [
    "intent",
    "canonical-feature-authority",
    "human-readable-behavior",
    "expectation",
    "semantic-authority",
    "language-projection-authority",
    "language-projection",
    "observation",
    "proof"
  ],
  "proofRole": "complete-lineage"
}
```

---

# Student Lesson

Students should finish this walkthrough able to say:

```text id="lvspbo"
I can start with one human need.

I can identify its canonical feature and scenario.

I can trace one obligation to one responsibility.

I can see what body the expectation requires.

I can see what the semantic authority means.

I can see which authority nodes become TypeScript.

I can observe the runtime signal.

I can prove that the observed implementation
matches the original expectation.
```

The central rule is:

> Every projection surface may change the representation, but it must preserve the semantic subject.

```text id="q66qti"
Representation changes.

Identity remains.

Meaning remains traceable.

Proof closes the path.
```
