# 9. Projection and Conformance Proof

The final proof compares the expected implementation topology with the observed implementation topology.

```text
Expected responsibility count: 1
Observed responsibility count: 1

Expected signal count: 1
Observed signal count: 1

Expected body lineage count: 1
Observed body lineage count: 1

Expected primary semantic invocation:
evaluate-scenario-atomicity

Observed primary semantic invocation:
evaluate-scenario-atomicity
```

This proof answers:

> Did the downstream implementation preserve the exact obligation, responsibility, signal, body lineage, and semantic boundary declared by the scenario expectation?

```text
Expected topology
        ↓
Observed topology
        ↓
Exact comparison
        ↓
GREEN or RED
```

---

# Conformance Proof Classification

```json
{
  "projectionInfluence": {
    "classification": "expectation-to-observation-conformance",
    "isCanonicalAuthority": false,
    "isObservedTestimony": false,
    "isProofArtifact": true,
    "mayAuthorizeAdmission": true,
    "mustUseCurrentExpectation": true,
    "mustUseCurrentObservedArtifacts": true
  }
}
```

## Code influence

```text
Code influence:
NONE ON THE IMPLEMENTATION BEING PROVEN
```

The proof does not rewrite the body to make it conform.

It compares:

```text
what was expected
against
what was observed
```

If they differ, the proof returns RED.

---

# Proof Inputs

The conformance evaluator consumes several previously established surfaces.

```text
Scenario implementation expectation
        +
Code-body projection authority
        +
Generated body observation
        +
Observed semantic signal
        +
Projection receipt
        ↓
Conformance proof
```

A proof request might be:

```json
{
  "proofRequestType": "scenario-implementation-conformance-request.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectationReference": {
    "expectationId": "expect-reject-multiple-obligations-body",
    "digest": "sha256:..."
  },
  "projectionAuthorityReference": {
    "projectionId": "project-scenario-atomicity-body",
    "digest": "sha256:..."
  },
  "observedBodyReference": {
    "path": "src/runtime/evaluates-scenario-atomicity.ts",
    "digest": "sha256:..."
  },
  "observedSignalReference": {
    "signalId": "scenario-atomicity",
    "digest": "sha256:..."
  }
}
```

The proof must bind exact artifact identities and bytes.

A filename alone is not enough.

---

# Expected Topology

The expectation projection declared:

```json
{
  "expectedTopology": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilities": [
      {
        "responsibilityId": "evaluates-scenario-atomicity",
        "bodyId": "evaluates-scenario-atomicity-body"
      }
    ],
    "signals": [
      {
        "signalId": "scenario-atomicity"
      }
    ],
    "semanticInvocations": [
      {
        "authorityId": "evaluate-scenario-atomicity",
        "role": "primary"
      }
    ]
  }
}
```

This is the implementation shape the scenario was expected to produce.

---

# Observed Topology

The observed topology is recovered from current artifacts.

```json
{
  "observedTopology": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilities": [
      {
        "responsibilityId": "evaluates-scenario-atomicity",
        "bodyId": "evaluates-scenario-atomicity-body",
        "path": "src/runtime/evaluates-scenario-atomicity.ts"
      }
    ],
    "signals": [
      {
        "signalId": "scenario-atomicity",
        "disposition": "SCENARIO_NOT_ATOMIC"
      }
    ],
    "semanticInvocations": [
      {
        "authorityId": "evaluate-scenario-atomicity",
        "role": "primary"
      }
    ]
  }
}
```

The observed topology must come from parsed and validated artifacts.

It must not be supplied as an unverified assertion.

---

# Responsibility Cardinality Comparison

## Expected

```json
{
  "expectedResponsibilityCount": 1
}
```

## Observed

```json
{
  "observedResponsibilityCount": 1
}
```

## Comparison

```text
Expected: 1
Observed: 1
Result: GREEN
```

## This becomes a proof finding

```json
{
  "checkId": "responsibility-cardinality",
  "expected": 1,
  "observed": 1,
  "disposition": "GREEN"
}
```

If three responsibility bodies were found:

```json
{
  "checkId": "responsibility-cardinality",
  "expected": 1,
  "observed": 3,
  "disposition": "RED",
  "finding": "MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO"
}
```

---

# Responsibility Identity Comparison

## Expected

```text
evaluates-scenario-atomicity
```

## Observed

```text
evaluates-scenario-atomicity
```

## Result

```text
GREEN
```

## This becomes

```json
{
  "checkId": "responsibility-identity",
  "expected": "evaluates-scenario-atomicity",
  "observed": "evaluates-scenario-atomicity",
  "disposition": "GREEN"
}
```

A body owned by `repairs-scenario-atomicity` would fail even if the function appeared to return the right disposition.

---

# Signal Cardinality Comparison

## Expected

```json
{
  "expectedSignalCount": 1
}
```

## Observed

```json
{
  "observedSignalCount": 1
}
```

## Result

```text
GREEN
```

## This becomes

```json
{
  "checkId": "signal-cardinality",
  "expected": 1,
  "observed": 1,
  "disposition": "GREEN"
}
```

If the implementation emitted several signal families:

```text
scenario-atomicity
schema-validity
table-validity
proof-validity
```

the result would become:

```json
{
  "checkId": "signal-cardinality",
  "expected": 1,
  "observed": 4,
  "disposition": "RED",
  "finding": "MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO"
}
```

---

# Signal Identity Comparison

## Expected

```text
scenario-atomicity
```

## Observed

```text
scenario-atomicity
```

## Result

```text
GREEN
```

## This becomes

```json
{
  "checkId": "signal-identity",
  "expected": "scenario-atomicity",
  "observed": "scenario-atomicity",
  "disposition": "GREEN"
}
```

A similar-sounding signal does not qualify.

```text
scenario-validation
```

is not equal to:

```text
scenario-atomicity
```

---

# Body Lineage Cardinality Comparison

## Expected

```json
{
  "expectedBodyLineageCount": 1
}
```

## Observed

```json
{
  "observedBodyLineageCount": 1
}
```

## Result

```text
GREEN
```

## This becomes

```json
{
  "checkId": "body-lineage-cardinality",
  "expected": 1,
  "observed": 1,
  "disposition": "GREEN"
}
```

If the scenario produced several implementation bodies:

```text
counts-scenario-clauses
classifies-scenario-tables
repairs-scenario-authority
projects-validation-report
```

the body-lineage check would return RED.

---

# Body Identity Comparison

## Expected

```text
evaluates-scenario-atomicity-body
```

## Observed

```text
evaluates-scenario-atomicity-body
```

## This becomes

```json
{
  "checkId": "body-identity",
  "expected": "evaluates-scenario-atomicity-body",
  "observed": "evaluates-scenario-atomicity-body",
  "disposition": "GREEN"
}
```

This confirms that the observed source body belongs to the expected implementation lineage.

---

# Primary Semantic Invocation Comparison

## Expected

```text
evaluate-scenario-atomicity
```

## Observed

```text
evaluate-scenario-atomicity
```

## Result

```text
GREEN
```

## This becomes

```json
{
  "checkId": "primary-semantic-invocation",
  "expected": "evaluate-scenario-atomicity",
  "observed": "evaluate-scenario-atomicity",
  "disposition": "GREEN"
}
```

This is the crucial semantic-edge tie-out.

The generated body contains:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The proof evaluator must recover that identity from the parsed AST or another admitted source representation.

It must not trust a comment alone.

---

# Semantic Fan-Out Comparison

The expectation permits one primary semantic responsibility.

## Expected semantic edges

```json
{
  "expectedPrimaryEdges": [
    "evaluate-scenario-atomicity"
  ]
}
```

## Observed semantic edges

```json
{
  "observedPrimaryEdges": [
    "evaluate-scenario-atomicity"
  ]
}
```

## Result

```text
GREEN
```

If the body invoked:

```text
evaluate-scenario-atomicity
rewrite-feature
convert-obligations-to-table
aggregate-proof
```

the proof would return:

```json
{
  "checkId": "semantic-fan-out",
  "expectedPrimaryEdgeCount": 1,
  "observedPrimaryEdgeCount": 4,
  "disposition": "RED",
  "finding": "SEMANTIC_FAN_OUT_EXCEEDED"
}
```

This catches meaning hidden inside an otherwise syntactically small body.

---

# Forbidden Behavior Comparison

The semantic authority forbids:

```text
rewrite-feature
convert-obligations-to-table
merge-obligations
generate-replacement-scenario
silently-repair-authority
```

## Observed semantic edges

```json
{
  "observedSemanticEdges": [
    "evaluate-scenario-atomicity"
  ]
}
```

## Result

```text
No forbidden semantic edge observed.
Disposition: GREEN
```

## This becomes

```json
{
  "checkId": "forbidden-behavior",
  "forbidden": [
    "rewrite-feature",
    "convert-obligations-to-table",
    "merge-obligations",
    "generate-replacement-scenario",
    "silently-repair-authority"
  ],
  "observed": [],
  "disposition": "GREEN"
}
```

If `convert-obligations-to-table` appeared:

```json
{
  "checkId": "forbidden-behavior",
  "observed": [
    "convert-obligations-to-table"
  ],
  "disposition": "RED",
  "finding": "UNAUTHORIZED_REMEDIATION_BEHAVIOR"
}
```

---

# Generated-Body Freshness Comparison

The observed body must match the current projection authority.

```text
Current projection authority
        ↓
Fresh projection
        ↓
Expected body bytes
        ↓
Compare with repository body bytes
```

## This becomes

```json
{
  "checkId": "generated-body-freshness",
  "expectedSha256": "sha256:...",
  "observedSha256": "sha256:...",
  "disposition": "GREEN"
}
```

A mismatch becomes:

```json
{
  "checkId": "generated-body-freshness",
  "disposition": "RED",
  "finding": "PROJECTED_BODY_STALE"
}
```

This proves that the body has not been manually changed after projection.

---

# Projection Receipt Comparison

The projection receipt must identify:

```text
the expected projection ID
the expected projector
the expected target
the expected artifact
the current authority digest
the current artifact digest
```

## Expected

```json
{
  "projectionId": "project-scenario-atomicity-body",
  "projectorId": "semantic-kernel/declarative-typescript.v1",
  "targetId": "typescript-esm",
  "artifactPath": "src/runtime/evaluates-scenario-atomicity.ts"
}
```

## Observed

```json
{
  "projectionId": "project-scenario-atomicity-body",
  "projectorId": "semantic-kernel/declarative-typescript.v1",
  "targetId": "typescript-esm",
  "artifactPath": "src/runtime/evaluates-scenario-atomicity.ts"
}
```

## Result

```text
GREEN
```

---

# Observed Signal Tie-Out

The proof must compare the expected signal with the observed runtime signal.

## Expected

```json
{
  "signalId": "scenario-atomicity",
  "allowedDispositions": [
    "SCENARIO_ATOMIC",
    "SCENARIO_NOT_ATOMIC"
  ],
  "producerResponsibilityId": "evaluates-scenario-atomicity"
}
```

## Observed

```json
{
  "signalId": "scenario-atomicity",
  "disposition": "SCENARIO_NOT_ATOMIC",
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

## This becomes

```json
{
  "checkId": "observed-signal-tie-out",
  "signalIdentity": "GREEN",
  "producerIdentity": "GREEN",
  "dispositionAllowed": "GREEN",
  "disposition": "GREEN"
}
```

The scenario outcome may be RED while the proof check is GREEN.

That distinction is essential.

```text
Scenario signal:
RED

Conformance proof:
GREEN
```

The runtime correctly rejected the non-atomic scenario.

Therefore, the implementation conformed to expectation.

---

# Scenario Result Versus Proof Result

Students must distinguish these two outcomes.

## Scenario result

```text
SCENARIO_NOT_ATOMIC
RED
```

This means the submitted scenario was invalid.

## Conformance result

```text
SCENARIO_IMPLEMENTATION_CONFORMS
GREEN
```

This means the software correctly detected and reported that invalid scenario.

```text
Input condition:
invalid scenario

Expected behavior:
reject it

Observed behavior:
rejected it

Implementation conformance:
GREEN
```

A RED domain signal can therefore be the correct expected result.

---

# Complete Conformance Receipt

```json
{
  "receiptType": "scenario-implementation-conformance-receipt.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expectation": {
    "expectationId": "expect-reject-multiple-obligations-body",
    "digest": "sha256:..."
  },
  "projection": {
    "projectionId": "project-scenario-atomicity-body",
    "authorityDigest": "sha256:...",
    "artifactPath": "src/runtime/evaluates-scenario-atomicity.ts",
    "artifactDigest": "sha256:..."
  },
  "observedSignal": {
    "signalId": "scenario-atomicity",
    "disposition": "SCENARIO_NOT_ATOMIC",
    "digest": "sha256:..."
  },
  "checks": [
    {
      "checkId": "obligation-identity",
      "disposition": "GREEN"
    },
    {
      "checkId": "responsibility-cardinality",
      "expected": 1,
      "observed": 1,
      "disposition": "GREEN"
    },
    {
      "checkId": "responsibility-identity",
      "disposition": "GREEN"
    },
    {
      "checkId": "signal-cardinality",
      "expected": 1,
      "observed": 1,
      "disposition": "GREEN"
    },
    {
      "checkId": "signal-identity",
      "disposition": "GREEN"
    },
    {
      "checkId": "body-lineage-cardinality",
      "expected": 1,
      "observed": 1,
      "disposition": "GREEN"
    },
    {
      "checkId": "body-identity",
      "disposition": "GREEN"
    },
    {
      "checkId": "primary-semantic-invocation",
      "expected": "evaluate-scenario-atomicity",
      "observed": "evaluate-scenario-atomicity",
      "disposition": "GREEN"
    },
    {
      "checkId": "semantic-fan-out",
      "disposition": "GREEN"
    },
    {
      "checkId": "forbidden-behavior",
      "disposition": "GREEN"
    },
    {
      "checkId": "generated-body-freshness",
      "disposition": "GREEN"
    },
    {
      "checkId": "observed-signal-tie-out",
      "disposition": "GREEN"
    }
  ],
  "firstBlockingFinding": null,
  "scenarioDisposition": "SCENARIO_NOT_ATOMIC",
  "conformanceDisposition": "SCENARIO_IMPLEMENTATION_CONFORMS"
}
```

---

# What This Receipt Proves

This receipt proves:

```text
The expected responsibility exists.

Only one primary responsibility exists.

The expected signal was emitted.

Only one authoritative signal was emitted.

The expected body lineage exists.

Only one scenario body lineage exists.

The expected semantic authority was invoked.

No forbidden remediation behavior was observed.

The generated body matches current projection authority.

The observed runtime signal ties to the expected scenario.
```

---

# What This Receipt Does Not Prove

This receipt does not independently prove:

```text
The expectation itself was human-approved.

The semantic authority was correctly designed.

The obligation detector is universally accurate.

Every possible semantic-density evasion has been tested.

The complete feature is ready for release.

The entire remediation is closed.
```

Those require additional admission, adversarial, integration, and closure proof surfaces.

---

# First-Blocker Behavior

If one required conformance check returns RED:

```text
First blocking check
        ↓
Conformance disposition RED
        ↓
Remaining dependent checks NOT_EVALUATED
```

Example:

```json
{
  "checks": [
    {
      "checkId": "responsibility-cardinality",
      "expected": 1,
      "observed": 3,
      "disposition": "RED",
      "finding": "MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO"
    },
    {
      "checkId": "responsibility-identity",
      "disposition": "NOT_EVALUATED",
      "blockedBy": "responsibility-cardinality"
    },
    {
      "checkId": "semantic-fan-out",
      "disposition": "NOT_EVALUATED",
      "blockedBy": "responsibility-cardinality"
    }
  ],
  "firstBlockingFinding": "MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO",
  "conformanceDisposition": "SCENARIO_IMPLEMENTATION_DOES_NOT_CONFORM"
}
```

This prevents proof sprawl.

---

# Proof Body Expectation

The proof responsibility should remain separate from the capability body.

```json
{
  "bodyContractType": "proof-responsibility-body.v1",
  "bodyId": "proves-scenario-atomicity-evaluation-body",
  "responsibilityId": "proves-scenario-atomicity-evaluation",
  "target": {
    "language": "typescript",
    "path": "src/proof/proves-scenario-atomicity-evaluation.ts"
  },
  "primarySemanticEdge": "prove-scenario-atomicity-evaluation"
}
```

## This becomes

```typescript
export async function provesScenarioAtomicityEvaluation(
  context: ProveScenarioAtomicityEvaluationContext
): Promise<ScenarioImplementationConformanceReceipt> {
  return await context.edges.invokes(
    "prove-scenario-atomicity-evaluation",
    context
  );
}
```

The capability body evaluates atomicity.

The proof body evaluates conformance.

```text
evaluates-scenario-atomicity
    ≠
proves-scenario-atomicity-evaluation
```

---

# Proof Artifact Tag

```json
{
  "artifactKind": "scenario-implementation-conformance-receipt",
  "layer": "proof",
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "bodyId": "evaluates-scenario-atomicity-body",
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation"
  },
  "projectedFrom": [
    "scenario-implementation-expectation",
    "code-body-projection-authority",
    "generated-code-body-observation",
    "observed-semantic-signal",
    "code-projection-receipt"
  ],
  "projectionInfluence": {
    "classification": "expectation-to-observation-conformance",
    "admissionInfluence": true,
    "closureInfluence": true
  },
  "proofRole": "implementation-conformance"
}
```

---

# Platform-Agent Requirements

The platform agent must verify:

```text
The expectation and observed artifacts refer to the same scenario.

The obligation identity is unchanged.

The responsibility identity is unchanged.

The expected and observed cardinalities match.

The expected body lineage exists.

The generated body is current.

The primary semantic invocation is exact.

No unauthorized semantic edge is present.

The observed signal matches the expected signal.

The scenario result and proof result are not confused.
```

The agent must not:

```text
change the expectation to match observed code
remove observed bodies from the count
collapse several signals into one label
ignore forbidden semantic edges
treat comments as sufficient AST proof
report the domain RED signal as proof failure
rewrite artifacts to manufacture GREEN
```

---

# Complete Expectation-to-Proof Trace

```text
Expected obligation:
scenario-carries-one-obligation

Observed obligation:
scenario-carries-one-obligation

Tie-out:
GREEN
```

```text
Expected responsibility:
evaluates-scenario-atomicity

Observed responsibility:
evaluates-scenario-atomicity

Cardinality:
1 = 1

Tie-out:
GREEN
```

```text
Expected signal:
scenario-atomicity

Observed signal:
scenario-atomicity

Cardinality:
1 = 1

Tie-out:
GREEN
```

```text
Expected body:
evaluates-scenario-atomicity-body

Observed body:
evaluates-scenario-atomicity-body

Cardinality:
1 = 1

Tie-out:
GREEN
```

```text
Expected semantic invocation:
evaluate-scenario-atomicity

Observed semantic invocation:
evaluate-scenario-atomicity

Tie-out:
GREEN
```

```text
Expected scenario outcome:
SCENARIO_NOT_ATOMIC

Observed scenario outcome:
SCENARIO_NOT_ATOMIC

Tie-out:
GREEN
```

---

# Final Result

```text
Scenario signal:
RED — SCENARIO_NOT_ATOMIC

Implementation conformance:
GREEN — SCENARIO_IMPLEMENTATION_CONFORMS
```

The invalid scenario was correctly rejected.

The body remained within one obligation.

The body executed one responsibility.

The body emitted one signal.

The observed implementation matched the projected expectation.

---

# Student Lesson

Students should now be able to see the complete closed circuit:

```text
Human intent
    ↓
Canonical feature authority
    ↓
Gherkin projection
    ↓
Expectation projection
    ↓
Semantic authority
    ↓
Code-body projection authority
    ↓
Generated TypeScript
    ↓
Observed semantic signal
    ↓
Projection and conformance proof
```

The central rule is:

> Expectation defines what must exist. Observation records what does exist. Conformance proves whether the two are the same.

```text
Expected truth
    ↓
Projected implementation
    ↓
Observed reality
    ↓
Exact tie-out
    ↓
Provable outcome
```
