# 4. Expectation Projection

The expectation projector answers:

> What must exist downstream if this scenario is implemented correctly?

```json
{
  "expectationType": "scenario-implementation-expectation.v1",
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
    "green": "SCENARIO_ATOMIC",
    "red": "SCENARIO_NOT_ATOMIC",
    "count": 1
  },
  "expectedBodyLineage": [
    {
      "bodyId": "evaluates-scenario-atomicity-body",
      "bodyKind": "scenario-responsibility",
      "responsibilityId": "evaluates-scenario-atomicity"
    }
  ],
  "expectedProof": {
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation",
    "requiredSignalId": "scenario-atomicity"
  }
}
```

The expectation projector does not generate the final Node body.

It declares the topology that every later authority, projection, implementation, and proof surface must preserve.

```text
Scenario authority
    ↓
Expectation projector
    ↓
Expected obligation
Expected responsibility
Expected body
Expected signal
Expected proof
```

---

# Expectation Projection Influence Classification

```json
{
  "projectionInfluence": {
    "classification": "implementation-topology",
    "directCodeInfluence": false,
    "directAstInfluence": false,
    "fileBodyInfluence": true,
    "nodeProjectionInfluence": true,
    "semanticAuthorityInfluence": true,
    "proofInfluence": true
  }
}
```

## Code influence

```text
Code influence:
INDIRECT THROUGH FILE-BODY AND NODE PROJECTION AUTHORITY
```

The expectation does not directly become:

```typescript
export async function evaluatesScenarioAtomicity() {
  // implementation
}
```

Instead, it constrains:

* how many responsibility bodies may exist;
* which responsibility owns the body;
* which signal the body must return;
* which semantic subject the body must preserve;
* which proof responsibility must evaluate the result; and
* which downstream artifacts are allowed to claim completion.

---

# What the Expected Obligation Influences

## Expectation node

```json
{
  "expectedObligation": {
    "obligationId": "scenario-carries-one-obligation"
  }
}
```

## Meaning

This identifies the single semantic obligation being evaluated.

```text
Obligation:
A scenario must carry one independent obligation.
```

The implementation body must remain causally subordinate to this obligation.

It may evaluate scenario atomicity.

It may not introduce unrelated responsibilities such as:

```text
rewrite the scenario
split the scenario
migrate tables
repair Gherkin
generate replacement authority
publish remediation
```

## This does not directly become Node code

The obligation identity should not become business logic such as:

```typescript
if (scenario.obligations.length !== 1) {
  // reject
}
```

The expectation does not define how independent obligations are detected.

That meaning belongs to semantic authority.

## This influences generated lineage metadata

```typescript
// obligation-id: scenario-carries-one-obligation
```

## This influences the semantic boundary invoked in code

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The semantic edge must evaluate the declared obligation and nothing broader.

---

# What the Expected Responsibility Influences

## Expectation node

```json
{
  "expectedResponsibility": {
    "responsibilityId": "evaluates-scenario-atomicity",
    "count": 1
  }
}
```

## Meaning

This declares:

```text
Owning responsibility:
evaluates-scenario-atomicity

Permitted primary responsibility count:
1
```

This is one of the strongest downstream constraints.

The platform agent must not create several responsibility bodies and claim they all belong to this one scenario.

## This becomes a file-body identity

```json
{
  "bodyId": "evaluates-scenario-atomicity-body",
  "responsibilityId": "evaluates-scenario-atomicity",
  "bodyKind": "scenario-responsibility"
}
```

## This becomes a Node operation identity

Through an admitted naming projection:

```text
evaluates-scenario-atomicity
        ↓ kebab-to-lower-camel
evaluatesScenarioAtomicity
```

## This becomes

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

The function name is not guessed from the Gherkin title.

It is projected from the stable responsibility identity.

---

# What the Responsibility Count Influences

## Expectation node

```json
{
  "count": 1
}
```

## Meaning

Exactly one primary responsibility is permitted beneath this scenario.

## This does not become executable branching

It does not become:

```typescript
if (responsibilityCount !== 1) {
  throw new Error("Invalid responsibility count");
}
```

Instead, it becomes body-conformance policy.

```json
{
  "conformanceRuleId": "scenario-has-one-primary-responsibility",
  "expectedCount": 1,
  "observedSurface": "scenario-responsibility-bodies",
  "redDisposition": "MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO"
}
```

## This becomes a repository gate

```text
Expected primary responsibility bodies: 1
Observed primary responsibility bodies: 1
Disposition: GREEN
```

Or:

```text
Expected primary responsibility bodies: 1
Observed primary responsibility bodies: 3
Disposition: MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO
```

This is a proof and admission influence, not code syntax.

---

# What the Expected Signal Influences

## Expectation node

```json
{
  "expectedSignal": {
    "signalId": "scenario-atomicity",
    "green": "SCENARIO_ATOMIC",
    "red": "SCENARIO_NOT_ATOMIC",
    "count": 1
  }
}
```

## Meaning

The responsibility must emit one authoritative signal family.

```text
Signal identity:
scenario-atomicity

GREEN:
SCENARIO_ATOMIC

RED:
SCENARIO_NOT_ATOMIC
```

This is not permission to return several separate validation signals.

The following would violate the expectation:

```text
schema-validity
table-validity
gherkin-validity
proof-validity
lineage-validity
```

Those may be subordinate observations, but the scenario must receive one final authoritative signal.

## This influences the Node return type

```typescript
Promise<ScenarioAtomicitySignal>
```

## This becomes

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

## This influences generated lineage metadata

```typescript
// signal-id: scenario-atomicity
```

## This influences the returned semantic subject

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The semantic edge must return one `ScenarioAtomicitySignal`.

---

# What the GREEN and RED Dispositions Influence

## Expectation node

```json
{
  "green": "SCENARIO_ATOMIC",
  "red": "SCENARIO_NOT_ATOMIC"
}
```

## Meaning

The scenario is modeled as one semantic transistor.

```text
One obligation
    ↓
One responsibility
    ↓
One authoritative signal
    ↓
GREEN or RED
```

The two dispositions are not separate outcomes or separate responsibilities.

They are the two states of the same signal.

## This does not become

```typescript
if (atomic) {
  return "SCENARIO_ATOMIC";
}

return "SCENARIO_NOT_ATOMIC";
```

That would put domain decisionality in the projected body.

The dispositions instead become semantic decision authority.

```json
{
  "decisionId": "resolve-scenario-atomicity-disposition",
  "outcomes": {
    "exactlyOneIndependentObligation": "SCENARIO_ATOMIC",
    "moreThanOneIndependentObligation": "SCENARIO_NOT_ATOMIC"
  }
}
```

## This is invoked in projected code as

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The semantic kernel evaluates the decision authority behind that edge.

---

# What the Signal Count Influences

## Expectation node

```json
{
  "count": 1
}
```

## Meaning

Exactly one authoritative signal may be emitted for this scenario.

## This becomes conformance authority

```json
{
  "conformanceRuleId": "scenario-has-one-authoritative-signal",
  "expectedCount": 1,
  "observedSurface": "emitted-signal-identities",
  "redDisposition": "MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO"
}
```

## This becomes a proof check

```text
Expected signal identities:
1

Observed signal identities:
1

Observed signal:
scenario-atomicity

Disposition:
GREEN
```

If the body or receipt emits several unrelated signal identities:

```text
Disposition:
MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO
```

Again, this is a downstream conformance rule, not authored TypeScript logic.

---

# What the Expected Body Lineage Influences

## Expectation node

```json
{
  "expectedBodyLineage": [
    {
      "bodyId": "evaluates-scenario-atomicity-body",
      "bodyKind": "scenario-responsibility",
      "responsibilityId": "evaluates-scenario-atomicity"
    }
  ]
}
```

## Meaning

The scenario is expected to produce one code-body lineage.

```text
Scenario:
reject-a-scenario-with-multiple-obligations

        ↓ owns

Responsibility:
evaluates-scenario-atomicity

        ↓ projects

Body:
evaluates-scenario-atomicity-body
```

This is the direct bridge from scenario expectation into the file-body contract.

## This becomes a file-body contract

```json
{
  "bodyContractType": "scenario-responsibility-body.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "bodyKind": "scenario-responsibility",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "responsibilityId": "evaluates-scenario-atomicity",
  "target": {
    "language": "typescript",
    "runtime": "node",
    "path": "src/runtime/evaluates-scenario-atomicity.ts"
  }
}
```

## This becomes

```text
src/runtime/evaluates-scenario-atomicity.ts
```

## This becomes generated metadata

```typescript
// scenario-id: reject-a-scenario-with-multiple-obligations
// responsibility-id: evaluates-scenario-atomicity
// body-id: evaluates-scenario-atomicity-body
```

## This becomes the projected operation

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

---

# What the Body Kind Influences

## Expectation node

```json
{
  "bodyKind": "scenario-responsibility"
}
```

## Meaning

This is not:

* an adapter body;
* a kernel primitive;
* a test fixture;
* a remediation proposer;
* a command-line entry point; or
* a proof evaluator.

It is a scenario-responsibility body.

That classification determines the body policy applied by the projector and repository scanner.

## This becomes a body policy selection

```json
{
  "bodyPolicyId": "collapsed-scenario-responsibility-body.v1",
  "forbiddenSyntax": [
    "IfStatement",
    "SwitchStatement",
    "ForStatement",
    "ForOfStatement",
    "ForInStatement",
    "WhileStatement",
    "DoWhileStatement",
    "ConditionalExpression"
  ],
  "forbiddenMeaning": [
    "multiple-primary-responsibilities",
    "multiple-signal-emission",
    "authority-rewrite",
    "remediation-execution",
    "domain-dto-stitching"
  ]
}
```

## This becomes the expected Node-body shape

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

The body kind constrains the shape.

It does not necessarily appear as literal executable syntax.

---

# What the Expected Proof Influences

## Expectation node

```json
{
  "expectedProof": {
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation",
    "requiredSignalId": "scenario-atomicity"
  }
}
```

## Meaning

The implementation is not complete merely because a function exists.

A distinct proof responsibility must establish that:

* the expected body exists;
* the body belongs to the expected responsibility;
* the body emits the required signal identity;
* the signal disposition matches observed scenario content;
* no second primary responsibility was introduced;
* no additional signal family was introduced; and
* no unauthorized rewrite occurred.

## This does not become Node code in the capability body

It must not become:

```typescript
assert.equal(result.signalId, "scenario-atomicity");
```

inside `evaluatesScenarioAtomicity`.

That would mix execution and proof responsibilities.

## This becomes a proof body expectation

```json
{
  "bodyId": "proves-scenario-atomicity-evaluation-body",
  "bodyKind": "proof-responsibility",
  "responsibilityId": "proves-scenario-atomicity-evaluation",
  "requiredSignalId": "scenario-atomicity"
}
```

## This may become a separate Node proof operation

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

The scenario execution body and proof body remain separate lineages.

---

# What the Required Signal ID Influences

## Expectation node

```json
{
  "requiredSignalId": "scenario-atomicity"
}
```

## Meaning

The proof responsibility must evaluate the exact signal expected by the scenario.

It may not accept a vaguely similar signal such as:

```text
feature-validity
gherkin-validity
validation-completed
scenario-rejected
```

## This becomes a proof binding

```json
{
  "proofBindingType": "proof-to-signal.v1",
  "proofResponsibilityId": "proves-scenario-atomicity-evaluation",
  "signalId": "scenario-atomicity"
}
```

## This becomes a proof-side invocation

```typescript
return await context.edges.invokes(
  "prove-scenario-atomicity-evaluation",
  context
);
```

The proof authority behind that invocation must reject any observed signal whose identity does not equal `scenario-atomicity`.

---

# Expectation-to-Semantic-Authority Projection

The expectation constrains the semantic authority that must exist.

```json
{
  "authorityType": "scenario-atomicity-evaluation.v1",
  "authorityId": "evaluate-scenario-atomicity",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "dispositions": {
    "green": "SCENARIO_ATOMIC",
    "red": "SCENARIO_NOT_ATOMIC"
  }
}
```

## This is invoked in projected code as

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The expectation determines which semantic authority must exist.

The semantic authority determines how the responsibility is evaluated.

---

# Expectation-to-File-Body Projection

The expectation projects one file-body contract.

```json
{
  "bodyContractType": "scenario-responsibility-body.v1",
  "bodyId": "evaluates-scenario-atomicity-body",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "target": {
    "language": "typescript",
    "runtime": "node",
    "path": "src/runtime/evaluates-scenario-atomicity.ts"
  },
  "publicOperation": {
    "name": "evaluatesScenarioAtomicity",
    "async": true,
    "parameterType": "EvaluateScenarioAtomicityContext",
    "returnType": "Promise<ScenarioAtomicitySignal>"
  },
  "execution": {
    "primarySemanticEdge": "evaluate-scenario-atomicity"
  }
}
```

## This becomes

```text
File:
src/runtime/evaluates-scenario-atomicity.ts

Operation:
evaluatesScenarioAtomicity

Input:
EvaluateScenarioAtomicityContext

Return:
Promise<ScenarioAtomicitySignal>

Primary edge:
evaluate-scenario-atomicity
```

---

# Expectation-to-Node-Projection Authority

The file-body contract becomes structured Node/TypeScript projection authority.

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
      "metadata": {
        "scenarioId": "reject-a-scenario-with-multiple-obligations",
        "obligationId": "scenario-carries-one-obligation",
        "responsibilityId": "evaluates-scenario-atomicity",
        "signalId": "scenario-atomicity",
        "bodyId": "evaluates-scenario-atomicity-body"
      },
      "declarations": [
        {
          "kind": "function",
          "name": "evaluatesScenarioAtomicity",
          "export": true,
          "async": true,
          "parameters": [
            {
              "name": "context",
              "type": "EvaluateScenarioAtomicityContext"
            }
          ],
          "returnType": "Promise<ScenarioAtomicitySignal>",
          "body": [
            {
              "kind": "return",
              "expression": {
                "kind": "await",
                "expression": {
                  "kind": "call",
                  "callee": "context.edges.invokes",
                  "arguments": [
                    {
                      "kind": "literal",
                      "value": "evaluate-scenario-atomicity"
                    },
                    {
                      "kind": "identifier",
                      "name": "context"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
```

## This becomes

```typescript
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-evaluates-scenario-atomicity-body
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
// body-id: evaluates-scenario-atomicity-body
// DO NOT EDIT.

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

---

# Expectation-to-Proof Projection

The expectation also projects the required conformance checks.

```json
{
  "proofAuthorityType": "scenario-implementation-conformance.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "expected": {
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "bodyId": "evaluates-scenario-atomicity-body",
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation"
  },
  "cardinality": {
    "primaryResponsibilities": 1,
    "authoritativeSignals": 1,
    "scenarioBodies": 1
  }
}
```

## This becomes a conformance receipt

```json
{
  "receiptType": "scenario-implementation-conformance-receipt.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "checks": {
    "obligationIdentity": "GREEN",
    "responsibilityIdentity": "GREEN",
    "responsibilityCardinality": "GREEN",
    "signalIdentity": "GREEN",
    "signalCardinality": "GREEN",
    "bodyIdentity": "GREEN",
    "bodyCardinality": "GREEN",
    "proofBinding": "GREEN"
  },
  "disposition": "SCENARIO_IMPLEMENTATION_CONFORMS"
}
```

---

# Exact Expectation Influence Map

| Expectation field                         | Influence classification | Downstream effect                                 |
| ----------------------------------------- | ------------------------ | ------------------------------------------------- |
| `scenarioId`                              | Direct lineage           | Body ownership, comments, receipts, proof binding |
| `expectedObligation.obligationId`         | Semantic constraint      | Limits body meaning to one obligation             |
| `expectedResponsibility.responsibilityId` | Direct structural        | Body ID, function name, semantic-edge binding     |
| `expectedResponsibility.count`            | Conformance              | Requires one primary responsibility body          |
| `expectedSignal.signalId`                 | Direct result identity   | Return type, metadata, signal binding             |
| `expectedSignal.green`                    | Indirect runtime         | Semantic GREEN disposition                        |
| `expectedSignal.red`                      | Indirect runtime         | Semantic RED disposition                          |
| `expectedSignal.count`                    | Conformance              | Requires one authoritative signal                 |
| `expectedBodyLineage.bodyId`              | Direct file-body         | Body identity and generated metadata              |
| `expectedBodyLineage.bodyKind`            | Body policy              | Selects collapsed responsibility-body constraints |
| `expectedBodyLineage.responsibilityId`    | Structural binding       | Binds body to exact responsibility                |
| `expectedProof.proofResponsibilityId`     | Proof topology           | Requires separate proof responsibility            |
| `expectedProof.requiredSignalId`          | Proof binding            | Proof must evaluate the exact expected signal     |

---

# Platform-Agent Tagging Requirement

The platform agent should tag this expectation artifact as:

```json
{
  "artifactKind": "scenario-implementation-expectation",
  "layer": "expectation",
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "bodyId": "evaluates-scenario-atomicity-body",
    "proofResponsibilityId": "proves-scenario-atomicity-evaluation"
  },
  "projectedFrom": "canonical-feature-authority",
  "projectsTo": [
    "semantic-execution-authority",
    "file-body-contract",
    "code-body-projection-authority",
    "body-conformance-proof"
  ],
  "projectionInfluence": {
    "classification": "implementation-topology",
    "directCodeInfluence": false,
    "fileBodyInfluence": true,
    "nodeProjectionInfluence": true,
    "semanticRuntimeInfluence": true,
    "proofInfluence": true
  },
  "proofRole": "expected-topology"
}
```

The platform agent must treat the expectation as a hard constraint.

It may not:

```text
add another primary responsibility
add another authoritative signal
create another body lineage
replace evaluation with remediation
merge proof responsibilities into the capability body
invent a broader semantic edge
```

Possible findings:

```text
EXPECTED_RESPONSIBILITY_MISSING
EXPECTATION_BODY_CARDINALITY_MISMATCH
MULTIPLE_RESPONSIBILITIES_BELOW_ATOMIC_SCENARIO
EXPECTED_SIGNAL_MISSING
MULTIPLE_SIGNALS_BELOW_ATOMIC_SCENARIO
EXPECTED_BODY_LINEAGE_MISSING
UNDECLARED_BODY_LINEAGE_OBSERVED
EXPECTED_PROOF_RESPONSIBILITY_MISSING
PROOF_SIGNAL_BINDING_MISMATCH
```

---

# Complete Expectation-to-Code Trace

```text
Expected obligation:
scenario-carries-one-obligation
    ↓
limits body meaning
```

```text
Expected responsibility:
evaluates-scenario-atomicity
    ↓
body:
evaluates-scenario-atomicity-body
    ↓
Node operation:
evaluatesScenarioAtomicity
```

```text
Expected signal:
scenario-atomicity
    ↓
return type:
ScenarioAtomicitySignal
    ↓
runtime dispositions:
SCENARIO_ATOMIC
SCENARIO_NOT_ATOMIC
```

```text
Expected body lineage:
one scenario-responsibility body
    ↓
file:
src/runtime/evaluates-scenario-atomicity.ts
```

```text
Expected proof:
proves-scenario-atomicity-evaluation
    ↓
separate proof body and conformance receipt
```

## Complete projected Node body

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

---

# The Key Lesson

The expectation projector does not tell TypeScript how to implement scenario atomicity.

It tells the delivery system:

```text
Exactly one obligation must be represented.

Exactly one responsibility must own it.

Exactly one responsibility body must be projected.

Exactly one authoritative signal must be returned.

Exactly one proof responsibility must establish conformance.
```

The downstream layers then have distinct jobs:

```text
Expectation
    defines what must exist.

Semantic authority
    defines what the responsibility means.

File-body authority
    defines where the body belongs.

Node projection authority
    defines the emitted syntax.

Generated code
    executes one admitted semantic edge.

Proof
    compares the observed implementation
    against the expected topology.
```

The expectation projection is therefore the first artifact that turns human-readable behavior into a **binding implementation shape**.
