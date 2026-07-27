# 1. Human Intent

We begin with the human need.

```text
Reject a feature scenario when it contains
more than one independent obligation.
```

This statement explains the desired outcome, but it is not yet canonical software authority.

It is candidate input supplied by a human.

---

## What the human is asking for

The statement contains several implied ideas:

```text
Subject:
A feature scenario

Condition:
The scenario contains more than one independent obligation

Required behavior:
Reject the scenario

Reason:
The scenario is not semantically atomic
```

The system must not immediately convert those words into implementation code.

It must first determine what software meaning the intent is proposing.

---

## Artifact tag

```json
{
  "artifactKind": "human-intent",
  "layer": "intent",
  "proofRole": "candidate-input",
  "authorityStatus": "not-admitted"
}
```

The `authorityStatus` is important.

```text
Human intent
    ≠
admitted software authority
```

The statement must be analyzed, structured, reviewed, and admitted before it may govern implementation.

---

# Human Intent Influence Classification

```json
{
  "projectionInfluence": {
    "classification": "candidate-semantic-input",
    "directCodeInfluence": false,
    "directAuthorityInfluence": false,
    "requiresCanonicalization": true,
    "requiresHumanAdmission": true
  }
}
```

## Code influence

```text
Code influence:
NONE DIRECTLY
```

The human sentence must not immediately become:

```typescript
if (scenario.obligationCount > 1) {
  rejectScenario();
}
```

That would allow implementation to invent:

* how obligations are counted;
* what qualifies as independent;
* what rejection means;
* which signal is returned;
* whether the scenario is rewritten;
* whether tables are inspected;
* and what evidence proves the result.

All of those decisions must be declared before code projection.

---

# What the Human Intent First Becomes

The human statement first becomes a **candidate intent interpretation**.

```json
{
  "intentInterpretationType": "candidate-capability-intent.v1",
  "intentId": "reject-non-atomic-feature-scenarios",
  "subject": {
    "kind": "feature-scenario"
  },
  "condition": {
    "kind": "multiple-independent-obligations"
  },
  "desiredOutcome": {
    "kind": "reject-scenario"
  },
  "proposedReason": {
    "kind": "scenario-not-atomic"
  }
}
```

## This becomes

```text
Candidate capability:
Reject non-atomic feature scenarios

Candidate subject:
One feature scenario

Candidate trigger condition:
More than one independent obligation is observed

Candidate outcome:
The scenario is rejected
```

This is still not implementation authority.

It is a structured interpretation that a human can review.

---

# Questions Exposed by Canonicalization

Once the human intent is structured, the system can expose the decisions that still require authority.

```text
1. What is an independent obligation?

2. How is obligation independence established?

3. Does rejection mean:
   - schema rejection;
   - semantic admission rejection;
   - feature-compilation rejection; or
   - implementation-gate rejection?

4. What RED signal represents rejection?

5. What GREEN signal represents acceptance?

6. Is the evaluator authorized only to reject,
   or may it rewrite the scenario?

7. What evidence must support the signal?

8. Which responsibility owns this evaluation?

9. What downstream body should embody that responsibility?
```

The architecture does not hide these decisions inside code.

It makes them visible before implementation.

---

# Human Review Clarifies the Intent

The reviewed intent may become:

```json
{
  "intentAuthorityCandidateType": "feature-validation-intent.v1",
  "intentId": "reject-non-atomic-feature-scenarios",
  "actor": "feature-authority-admission-gate",
  "trigger": "a canonical feature scenario is submitted for admission",
  "desiredOutcome": "a scenario containing more than one independent obligation is rejected before implementation projection",
  "constraints": [
    "the evaluator must not rewrite feature authority",
    "the evaluator must not convert obligations into tables",
    "the evaluator must not merge independent obligations",
    "the evaluator must return one authoritative atomicity signal",
    "the evaluator must preserve diagnostic evidence"
  ]
}
```

## This becomes

```text
When a canonical feature scenario is submitted,
evaluate whether it contains one independent obligation.

If exactly one obligation is present:
    emit SCENARIO_ATOMIC.

If more than one obligation is present:
    emit SCENARIO_NOT_ATOMIC.

Do not rewrite the feature.
Do not repair the scenario.
Do not hide obligations in another representation.
```

Now the intended capability boundary is much clearer.

---

# The Human Intent Projects a Capability Expectation

From the admitted intent, the Expectation Projector can derive the expected capability surface.

```json
{
  "capabilityExpectationType": "capability-expectation.v1",
  "capabilityId": "validate-feature-scenario-atomicity",
  "expectedOutcome": {
    "resultId": "scenario-admission-disposition-resolved"
  },
  "expectedResponsibilities": [
    {
      "responsibilityId": "evaluates-scenario-atomicity",
      "kind": "validation"
    }
  ],
  "expectedSignals": [
    {
      "signalId": "scenario-atomicity",
      "green": "SCENARIO_ATOMIC",
      "red": "SCENARIO_NOT_ATOMIC"
    }
  ],
  "forbiddenResponsibilities": [
    "rewrites-feature-scenario",
    "converts-obligations-to-table",
    "merges-independent-obligations",
    "generates-replacement-scenario"
  ]
}
```

## This becomes

```text
Expected capability:
validate-feature-scenario-atomicity

Expected responsibility:
evaluates-scenario-atomicity

Expected signal:
scenario-atomicity

Expected GREEN:
SCENARIO_ATOMIC

Expected RED:
SCENARIO_NOT_ATOMIC

Forbidden downstream behavior:
rewrite, merge, convert, or repair
```

---

# The Capability Expectation Projects the Feature Boundary

The expected capability can then produce canonical feature authority.

```json
{
  "featureAuthorityType": "canonical-feature-authority.v1",
  "featureId": "reject-non-atomic-feature-scenarios",
  "title": "Reject non-atomic feature scenarios",
  "scenarios": [
    {
      "scenarioId": "reject-a-scenario-with-multiple-obligations",
      "title": "Reject a scenario with multiple obligations",
      "condition": {
        "text": "a canonical scenario contains multiple independent obligations"
      },
      "trigger": {
        "text": "scenario atomicity is evaluated"
      },
      "expectedResult": {
        "resultId": "scenario-is-rejected",
        "text": "the scenario is rejected"
      },
      "expectedSignal": {
        "signalId": "scenario-atomicity",
        "red": "SCENARIO_NOT_ATOMIC",
        "green": "SCENARIO_ATOMIC"
      },
      "obligation": {
        "obligationId": "scenario-carries-one-obligation",
        "text": "one scenario must carry one independent obligation"
      },
      "responsibility": {
        "responsibilityId": "evaluates-scenario-atomicity",
        "kind": "validation"
      }
    }
  ]
}
```

## This becomes

```gherkin
Feature: Reject non-atomic feature scenarios

  Scenario: Reject a scenario with multiple obligations
    Given a canonical scenario containing multiple independent obligations
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the signal is SCENARIO_NOT_ATOMIC
```

This is the first human-readable behavioral projection of the original intent.

---

# The Feature Authority Projects the Body Expectation

The canonical feature authority then constrains what body may exist.

```json
{
  "expectationType": "scenario-body-expectation.v1",
  "scenarioId": "reject-a-scenario-with-multiple-obligations",
  "obligationId": "scenario-carries-one-obligation",
  "responsibilityId": "evaluates-scenario-atomicity",
  "signalId": "scenario-atomicity",
  "expectedBody": {
    "bodyId": "evaluates-scenario-atomicity-body",
    "count": 1,
    "targetPath": "src/runtime/evaluates-scenario-atomicity.ts"
  },
  "expectedExecution": {
    "primarySemanticEdge": "evaluate-scenario-atomicity"
  }
}
```

## This becomes

```text
Create exactly one downstream responsibility body.

Body:
evaluates-scenario-atomicity-body

Responsibility:
evaluates-scenario-atomicity

Primary semantic edge:
evaluate-scenario-atomicity

Returned signal:
scenario-atomicity

Target:
src/runtime/evaluates-scenario-atomicity.ts
```

---

# The Body Expectation Projects Node Authority

The expected body becomes a structured TypeScript projection authority.

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
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

# Complete Human-Intent-to-Code Trace

```text
Human says:

"Reject a feature scenario when it contains
more than one independent obligation."

        ↓

Candidate intent interpretation:

Subject:
feature scenario

Condition:
multiple independent obligations

Outcome:
reject scenario

        ↓

Admitted capability intent:

Evaluate atomicity.
Return one signal.
Do not rewrite authority.

        ↓

Canonical feature authority:

Scenario:
reject-a-scenario-with-multiple-obligations

Responsibility:
evaluates-scenario-atomicity

Signal:
scenario-atomicity

        ↓

Expected body lineage:

One body
One responsibility
One semantic edge
One signal

        ↓

Node projection authority:

FunctionDeclaration
ReturnStatement
AwaitExpression
CallExpression

        ↓

Generated TypeScript:

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

# Student Lesson

The original sentence did not directly generate the function.

It progressively constrained the software.

```text
Human intent
    determines the desired outcome.

Canonical intent
    determines the capability boundary.

Feature authority
    determines the behavior.

Expectation authority
    determines what body must exist.

Semantic authority
    determines what the body means.

Node projection authority
    determines the TypeScript structure.

Generated code
    embodies the admitted expectation.
```

The most important lesson is:

> The code body is not an interpretation of the human sentence. It is the final language projection of a reviewed, admitted, and traceable expectation derived from that sentence.
