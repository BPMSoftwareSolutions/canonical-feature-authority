# 8. Observed Signal

At runtime, the responsibility emits one authoritative semantic signal.

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "authorityId": "evaluate-scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true,
  "evidence": {
    "observedIndependentObligationCount": 4,
    "requiredIndependentObligationCount": 1
  }
}
```

This signal is not another implementation instruction.

It is runtime testimony describing what the executed responsibility observed and resolved under current semantic authority.

```text
Declared authority
    ↓
Projected code body
    ↓
Executed responsibility
    ↓
Observed facts
    ↓
Resolved disposition
    ↓
Authoritative semantic signal
```

---

# Observed Signal Classification

```json
{
  "projectionInfluence": {
    "classification": "runtime-testimony",
    "isCanonicalAuthority": false,
    "isExpectedTopology": false,
    "isObservedEvidence": true,
    "mayInfluenceAdmission": true,
    "mayInfluenceControlFlow": true,
    "mustConformToSignalContract": true,
    "mustTieToCurrentAuthority": true
  }
}
```

## Code influence

```text
Code influence:
NONE ON THE BODY THAT ALREADY EXECUTED
```

The observed signal does not reach backward and rewrite the projected code body.

It influences downstream:

```text
scenario admission
parent gate disposition
proof evaluation
receipt projection
execution continuation
remediation eligibility
```

It must never become a reason for the validator to mutate the feature automatically.

---

# Where the Signal Type Came From

## Signal contract authority

```json
{
  "signalType": "scenario-atomicity-signal.v1"
}
```

## Meaning

This identifies the canonical contract governing the runtime signal.

The contract defines which fields must exist and which dispositions are allowed.

Conceptually:

```json
{
  "signalContractType": "semantic-signal-contract.v1",
  "signalType": "scenario-atomicity-signal.v1",
  "required": [
    "signalId",
    "scenarioId",
    "responsibilityId",
    "obligationId",
    "authorityId",
    "disposition",
    "color",
    "blocking",
    "evidence"
  ],
  "allowedDispositions": [
    "SCENARIO_ATOMIC",
    "SCENARIO_NOT_ATOMIC"
  ]
}
```

## This becomes

Not new TypeScript business logic.

It becomes the projected result type used by the body:

```typescript
Promise<ScenarioAtomicitySignal>
```

And the generated type declaration may become:

```typescript
export interface ScenarioAtomicitySignal {
  signalType: "scenario-atomicity-signal.v1";
  signalId: "scenario-atomicity";
  scenarioId: string;
  responsibilityId: "evaluates-scenario-atomicity";
  obligationId: "scenario-carries-one-obligation";
  authorityId: "evaluate-scenario-atomicity";
  disposition: "SCENARIO_ATOMIC" | "SCENARIO_NOT_ATOMIC";
  color: "GREEN" | "RED";
  blocking: boolean;
  evidence: ScenarioAtomicityEvidence;
}
```

The type declaration is a language projection of the canonical signal contract.

---

# Where the Signal ID Came From

## Scenario expectation

```json
{
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "count": 1
  }
}
```

## Observed signal

```json
{
  "signalId": "scenario-atomicity"
}
```

## Meaning

The observed signal identity must equal the expected signal identity exactly.

```text
Expected:
scenario-atomicity

Observed:
scenario-atomicity

Tie-out:
GREEN
```

A signal such as:

```text
feature-validity
scenario-validation
gherkin-status
```

would not satisfy the expectation merely because it carries a similar meaning.

## This becomes a proof comparison

```typescript
assert.equal(
  observedSignal.signalId,
  expectation.expectedSignal.signalId
);
```

That assertion belongs in the separate proof responsibility or conformance evaluator, not inside the capability body.

---

# Where the Scenario ID Came From

## Expected scenario lineage

```json
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations"
}
```

## Observed signal

```json
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations"
}
```

## Meaning

The signal testifies about one exact scenario.

It cannot be reused as evidence for another scenario without an explicit composition authority.

## This becomes a proof binding

```text
Observed signal
    belongs to
reject-a-scenario-with-multiple-obligations
```

And may be checked as:

```typescript
assert.equal(
  observedSignal.scenarioId,
  expectedScenario.scenarioId
);
```

---

# Where the Responsibility ID Came From

## Expected responsibility

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

## Observed signal

```json
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

## Meaning

The signal must be produced by the exact responsibility expected by the scenario.

```text
Expected producer:
evaluates-scenario-atomicity

Observed producer:
evaluates-scenario-atomicity
```

A signal emitted by:

```text
rewrites-feature-scenario
repairs-scenario-structure
converts-obligations-to-table
```

would expose unauthorized responsibility substitution.

## This becomes a proof comparison

```typescript
assert.equal(
  observedSignal.responsibilityId,
  expectation.expectedResponsibility.responsibilityId
);
```

---

# Where the Obligation ID Came From

## Expected obligation

```json
{
  "obligationId": "scenario-carries-one-obligation"
}
```

## Observed signal

```json
{
  "obligationId": "scenario-carries-one-obligation"
}
```

## Meaning

The signal claims to answer one bounded question:

> Does this scenario carry exactly one independent obligation?

The obligation identity prevents the signal from quietly broadening into:

```text
Is the feature valid?
Is the remediation complete?
Is the proof chain current?
Is the body projection fresh?
```

Those are separate obligations and require separate responsibilities and signals.

## This becomes a proof boundary

```text
Signal evidence may support:
scenario-carries-one-obligation

Signal evidence may not independently prove:
feature completeness
body freshness
authority admission
replay equivalence
```

---

# Where the Authority ID Came From

## Semantic authority

```json
{
  "authorityId": "evaluate-scenario-atomicity"
}
```

## Observed signal

```json
{
  "authorityId": "evaluate-scenario-atomicity"
}
```

## Meaning

The runtime signal must identify the exact semantic authority under which the disposition was resolved.

This distinguishes:

```text
Observed result
```

from:

```text
Observed result under current admitted meaning
```

## This becomes receipt lineage

```json
{
  "authorityId": "evaluate-scenario-atomicity",
  "authorityDigest": "sha256:..."
}
```

The digest should normally be included in the durable receipt, even if the lightweight runtime signal carries only the authority identity.

---

# Where the Disposition Came From

## Semantic authority

```json
{
  "evaluation": {
    "redDisposition": "SCENARIO_NOT_ATOMIC",
    "greenDisposition": "SCENARIO_ATOMIC"
  }
}
```

## Observed facts

```json
{
  "observedIndependentObligationCount": 4,
  "requiredIndependentObligationCount": 1
}
```

## Semantic resolution

```text
Observed obligation count:
4

Required obligation count:
1

Comparison:
4 does not equal 1

Resolved disposition:
SCENARIO_NOT_ATOMIC
```

## This becomes

```json
{
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

This disposition is not authored as an `if` statement in the projected scenario body.

It is resolved behind the semantic edge:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

---

# Where the Color Came From

## Signal projection authority

```json
{
  "projectionId": "project-scenario-atomicity-signal",
  "dispositionColorMapping": {
    "SCENARIO_ATOMIC": "GREEN",
    "SCENARIO_NOT_ATOMIC": "RED"
  }
}
```

## Observed disposition

```json
{
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

## This becomes

```json
{
  "color": "RED"
}
```

The color is a human-readable and machine-readable signal projection.

It is not a replacement for the canonical disposition.

```text
Canonical decision:
SCENARIO_NOT_ATOMIC

Visual projection:
RED
```

---

# Where `blocking: true` Came From

## Gate or signal policy

```json
{
  "signalId": "scenario-atomicity",
  "blockingWhen": [
    "SCENARIO_NOT_ATOMIC"
  ]
}
```

## Observed disposition

```json
{
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

## This becomes

```json
{
  "blocking": true
}
```

## Runtime consequence

```text
SCENARIO_NOT_ATOMIC
    ↓
RED
    ↓
blocking = true
    ↓
scenario admission stops
    ↓
downstream body projection is NOT_EVALUATED
```

The blocking policy is declared above the runtime result.

The signal merely reports the resolved consequence.

---

# Where the Evidence Came From

## Mechanical observation

```json
{
  "observedIndependentObligationCount": 4
}
```

## Authority threshold

```json
{
  "requiredIndependentObligationCount": 1
}
```

## Meaning

Evidence answers:

> Which observed fact caused this signal to become RED?

The signal should not contain only:

```json
{
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

because that would provide a verdict without enough testimony to explain it.

## This becomes diagnostic testimony

```text
Expected independent obligations:
1

Observed independent obligations:
4

Result:
SCENARIO_NOT_ATOMIC
```

The evidence must be observed or deterministically derived.

It must not be fabricated by the agent to make the signal look complete.

---

# The Evidence Needs Stronger Lineage

For a durable implementation, the count alone is not enough.

Students should be able to inspect which obligation candidates were observed.

A stronger signal might be:

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "authorityId": "evaluate-scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true,
  "evidence": {
    "requiredIndependentObligationCount": 1,
    "observedIndependentObligationCount": 4,
    "observedObligations": [
      {
        "candidateId": "reject-overloaded-scenario",
        "sourceReference": "then"
      },
      {
        "candidateId": "validate-schema-conformance",
        "sourceReference": "result-table-row-1"
      },
      {
        "candidateId": "validate-authority-lineage",
        "sourceReference": "result-table-row-2"
      },
      {
        "candidateId": "validate-proof-freshness",
        "sourceReference": "result-table-row-3"
      }
    ]
  }
}
```

This makes the RED signal explainable.

The exact shape of obligation-candidate evidence still requires admitted authority. The example must not be treated as already implemented merely because it appears in documentation.

---

# Green Signal Example

When exactly one independent obligation is observed:

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "scenarioId": "admit-a-scenario-with-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "authorityId": "evaluate-scenario-atomicity",
  "disposition": "SCENARIO_ATOMIC",
  "color": "GREEN",
  "blocking": false,
  "evidence": {
    "observedIndependentObligationCount": 1,
    "requiredIndependentObligationCount": 1
  }
}
```

Green means:

```text
The scenario was evaluated under current authority,
exactly one independent obligation was observed,
and no blocking atomicity finding remains.
```

Green does not mean:

```text
The whole feature is valid.

The implementation is correct.

The generated body is fresh.

The proof chain is complete.
```

It means one declared obligation was satisfied.

---

# Red Signal Example

When several independent obligations are observed:

```json
{
  "signalType": "scenario-atomicity-signal.v1",
  "signalId": "scenario-atomicity",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "authorityId": "evaluate-scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true,
  "evidence": {
    "observedIndependentObligationCount": 4,
    "requiredIndependentObligationCount": 1
  }
}
```

Red means:

```text
The scenario contains more than one independent obligation
and cannot be admitted as an atomic scenario.
```

The downstream system must stop before projecting or admitting a body for the invalid scenario.

---

# What the Signal Influences Downstream

The observed signal becomes input to a scenario-admission gate.

## Observed signal

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "color": "RED",
  "blocking": true
}
```

## Gate authority

```json
{
  "gateId": "admit-atomic-feature-scenario",
  "requiredSignals": [
    "scenario-atomicity"
  ],
  "evaluation": "all-required-green",
  "stopOnFirstRed": true
}
```

## This becomes a runtime gate result

```json
{
  "gateId": "admit-atomic-feature-scenario",
  "disposition": "RED",
  "firstBlockingSignalId": "scenario-atomicity",
  "downstreamDisposition": "NOT_EVALUATED"
}
```

## This may become control-plane code

The generic control plane may consume the signal like this:

```typescript
const admission = await context.edges.invokes(
  "evaluate-feature-scenario-admission",
  {
    ...context,
    signals: [atomicitySignal]
  }
);
```

The capability-specific code body still does not author the gate logic.

---

# What RED Must Prevent

A blocking RED signal must prevent:

```text
scenario admission
expectation promotion
semantic-authority promotion
code-body projection
generated body admission
implementation closure
```

It must not automatically trigger:

```text
feature rewriting
table migration
scenario splitting
replacement authority generation
silent repair
```

Those actions belong to a separate remediation-proposal capability.

---

# Detection and Remediation Remain Separate

## Validation result

```json
{
  "disposition": "SCENARIO_NOT_ATOMIC",
  "blocking": true
}
```

## Permitted next action

```text
Create a remediation finding or proposal request.
```

## Not permitted

```text
Modify the scenario until the validator becomes GREEN.
```

A separate remediation candidate might later say:

```json
{
  "proposalType": "scenario-decomposition-candidate.v1",
  "sourceSignalId": "scenario-atomicity",
  "status": "draft",
  "requiresHumanAdmission": true
}
```

The observed signal authorizes no mutation by itself.

---

# Signal-to-Proof Projection

The signal becomes evidence for the proof responsibility.

## Expected proof

```json
{
  "proofResponsibilityId": "proves-scenario-atomicity-evaluation",
  "requiredSignalId": "scenario-atomicity"
}
```

## Observed signal

```json
{
  "signalId": "scenario-atomicity",
  "responsibilityId": "evaluates-scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC"
}
```

## This becomes proof input

```json
{
  "proofInputType": "scenario-atomicity-proof-input.v1",
  "expectedSignalId": "scenario-atomicity",
  "observedSignal": {
    "signalId": "scenario-atomicity",
    "disposition": "SCENARIO_NOT_ATOMIC"
  }
}
```

## This may become a separate proof operation

```typescript
export async function provesScenarioAtomicityEvaluation(
  context: ProveScenarioAtomicityEvaluationContext
): Promise<ScenarioAtomicityProofReceipt> {
  return await context.edges.invokes(
    "prove-scenario-atomicity-evaluation",
    context
  );
}
```

The proof responsibility evaluates the signal.

The validation responsibility does not prove itself.

---

# Signal Conformance Checks

The downstream proof should compare:

```text
Expected signal identity
    versus
Observed signal identity

Expected responsibility
    versus
Observed responsibility

Expected obligation
    versus
Observed obligation

Expected authority
    versus
Observed authority

Allowed dispositions
    versus
Observed disposition

Expected cardinality
    versus
Observed signal count
```

Possible findings:

```text
EXPECTED_SIGNAL_MISSING
UNDECLARED_SIGNAL_OBSERVED
MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO
SIGNAL_RESPONSIBILITY_MISMATCH
SIGNAL_OBLIGATION_MISMATCH
SIGNAL_AUTHORITY_MISMATCH
UNDECLARED_SIGNAL_DISPOSITION
SIGNAL_EVIDENCE_INCOMPLETE
```

---

# Observed Signal Does Not Prove Everything

This signal can prove or support:

```text
The atomicity evaluator produced one result.

The result belongs to the expected scenario.

The expected responsibility produced it.

The expected obligation was evaluated.

The observed count differed from the required count.

The atomicity disposition was RED.
```

It cannot alone prove:

```text
The code body was freshly projected.

The authority was human-admitted.

The feature schema was current.

The repository checkpoint was valid.

The complete remediation was closed.

The runtime signal was not fabricated.
```

Those require additional proof surfaces and tie-outs.

---

# Artifact Tag

```json
{
  "artifactKind": "observed-semantic-signal",
  "layer": "observation",
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "authorityId": "evaluate-scenario-atomicity"
  },
  "projectedFrom": "executed-responsibility",
  "consumedBy": [
    "scenario-admission-gate",
    "scenario-atomicity-proof-responsibility"
  ],
  "projectionInfluence": {
    "classification": "runtime-testimony",
    "directCodeInfluence": false,
    "admissionInfluence": true,
    "gateInfluence": true,
    "proofInfluence": true
  },
  "proofRole": "runtime-testimony"
}
```

---

# Platform-Agent Requirements

When the platform agent observes or handles this signal, it must verify:

```text
The signal type is admitted.

The signal ID matches the expectation.

The scenario ID matches the owning scenario.

The responsibility ID matches the expected producer.

The obligation ID matches the scenario obligation.

The authority ID matches current admitted authority.

The disposition is allowed.

The color agrees with the disposition.

The blocking posture agrees with gate policy.

The evidence is present and traceable.

Only one authoritative signal was emitted.
```

The agent must not:

```text
change the signal to GREEN by rewriting input authority
drop blocking evidence
replace the signal identity
aggregate unrelated signals
continue downstream projection after blocking RED
silently create a remediation
```

---

# Complete Runtime Trace

```text
Generated body:

evaluatesScenarioAtomicity(context)
    ↓
invokes:
evaluate-scenario-atomicity
    ↓
observes:
4 independent obligations
    ↓
compares against:
required count 1
    ↓
resolves:
SCENARIO_NOT_ATOMIC
    ↓
projects:
scenario-atomicity signal
    ↓
emits:
RED, blocking
    ↓
scenario admission:
STOP
```

---

# Student Lesson

Students should understand the difference between:

```text
Expected signal
    = what must be observed

Observed signal
    = what runtime actually emitted

Proof
    = whether the observed signal satisfies the expectation
```

The central rule is:

> A semantic signal is one bounded runtime answer to one declared obligation.

```text
One obligation
    ↓
One responsibility
    ↓
One observed evaluation
    ↓
One authoritative signal
    ↓
GREEN or RED
```

The observed signal is where the semantic transistor becomes visible in runtime reality.
