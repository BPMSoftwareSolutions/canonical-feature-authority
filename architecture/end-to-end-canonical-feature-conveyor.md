# End-to-End Canonical Feature Conveyor

```json
{
  "contractType": "canonical-feature-conveyor.v1",
  "contractId": "end-to-end-canonical-feature-conveyor",
  "title": "End-to-End Canonical Feature Conveyor",
  "status": "draft",
  "schemaVersion": "1.0.0"
}
```

The contract is authored, rendered, implemented, evaluated, and reviewed
in the same causal conveyor order. A later stage may consume only products
admitted by earlier stages.

## Construction state

```json
{
  "currentStage": "review-feature",
  "completedStages": [
    "capture-intent",
    "declare-outcome",
    "establish-feature",
    "establish-scenarios",
    "decompose-obligations",
    "declare-expectations",
    "assign-responsibilities",
    "declare-signals",
    "author-semantic-authority",
    "author-semantic-execution",
    "author-feature-body-authority",
    "resolve-language-projection",
    "project-expected-ast",
    "project-expected-code",
    "evaluate-semantic-execution",
    "evaluate-projected-execution",
    "evaluate-translation-conformance"
  ],
  "eligibleNextStages": [
    "review-feature"
  ]
}
```

## 1. Intent

```text
Stage ID: capture-intent
Purpose: Capture the human need without introducing implementation technology.
Authorized inputs: none
Required prior products: none
Required output: intent
Stop condition: one implementation-neutral intent is complete
```

Review questions:

- Is the need expressed without language, framework, file, or provider decisions?

Actor: reviewer of authority-projected software

Trigger: one previously nonexistent reviewed feature is submitted to the governed conveyor

Need: construct the complete canonical feature and its executable embodiment in admitted causal order

Purpose: prove that the conveyor can build new behavior without bypassing authority or inventing meaning during projection

Constraints:

- intent and canonical behavior remain language-neutral
- no construction stage may consume an output that has not been admitted
- language projection introduces no meaning absent from canonical authority
- execution cannot read the expected result to manufacture its observed result

## 2. Desired outcome

```text
Stage ID: declare-outcome
Purpose: State the observable condition that satisfies the admitted intent.
Authorized inputs: intent
Required prior products: intent
Required output: desired-outcome
Stop condition: one desired outcome and its observable state are complete
```

Review questions:

- Is the outcome observable without prescribing its implementation?

Outcome ID: `complete-new-feature-is-canonically-constructed`

One previously nonexistent reviewed feature is constructed, projected, executed, and reviewed entirely from admitted canonical authority.

Observable state:

- the canonical feature and every focused scenario are visible
- every obligation, expectation, responsibility, signal, and semantic execution is visible
- every language-neutral body, expected AST, and expected source projection is visible
- semantic execution, projected execution, and declared expectations are canonically equivalent

## 3. Canonical feature

```text
Stage ID: establish-feature
Purpose: Establish one canonical feature identity and user story from the admitted outcome.
Authorized inputs: intent, desired-outcome
Required prior products: desired-outcome
Required output: canonical-feature
Stop condition: one canonical feature identity, story, and governing obligation are complete
```

Review questions:

- Does the feature preserve the intent and desired outcome without adding implementation meaning?

```json
{
  "featureId": "implement-one-new-feature-end-to-end-through-a-governed-conveyor",
  "title": "Implement one new feature end to end through a governed conveyor",
  "userStory": {
    "asA": "reviewer of authority-projected software",
    "iWant": "one previously nonexistent reviewed feature implemented through the governed conveyor",
    "soThat": "its executable behavior and complete origin can be independently reproduced and reviewed"
  },
  "governingObligation": "Every accepted construction begins with reviewed intent, advances only through eligible stages, and conserves canonical meaning through semantic and projected execution."
}
```

User-story projection:

```text
As a reviewer of authority-projected software
I want one previously nonexistent reviewed feature implemented through the governed conveyor
So that its executable behavior and complete origin can be independently reproduced and reviewed
```

## 4. Scenarios

```text
Stage ID: establish-scenarios
Purpose: Decompose the feature into focused observable behavior transitions.
Authorized inputs: canonical-feature
Required prior products: canonical-feature
Required output: canonical-scenarios
Stop condition: every required feature behavior is represented by one focused scenario
```

Review questions:

- Does every scenario contain focused preconditions, one responsibility transition, and observable outcomes?

```gherkin
Feature: Implement one new feature end to end through a governed conveyor
  As a reviewer of authority-projected software
  I want one previously nonexistent reviewed feature implemented through the governed conveyor
  So that its executable behavior and complete origin can be independently reproduced and reviewed

  Background:
    Given review authority is supplied independently of the feature implementation
    And construction, semantic, language, and runtime profiles are pinned

  @scenario-id:admit-one-reviewed-new-feature-request
  Scenario: Admit one reviewed new-feature request
    Given one instructor-reviewed new-feature request
    And its feature identity is absent from the implementation root
    When the request is evaluated against construction eligibility
    Then one new-feature request admission is observed

  @scenario-id:project-one-complete-new-feature-authority
  Scenario: Project one complete new-feature authority
    Given one admitted reviewed new-feature request
    When the admitted request is projected through every canonical construction stage
    Then one complete canonical new-feature authority is observed

  @scenario-id:materialize-one-complete-new-feature
  Scenario: Materialize one complete new feature
    Given one admitted complete new-feature authority
    And one empty controlled materialization root
    When every admitted body and language projection is materialized
    Then one complete projected new-feature materialization is observed

  @scenario-id:execute-one-newly-materialized-feature
  Scenario: Execute one newly materialized feature
    Given one complete new-feature materialization
    And one admitted runtime composition
    When the materialized feature executes through its admitted semantic edges
    Then one new-feature execution observation is produced

  @scenario-id:verify-one-complete-new-feature-lineage
  Scenario: Verify one complete new-feature lineage
    Given one direct semantic evaluation
    And one independently observed projected evaluation
    When their expectation, execution, AST, and code relationships are reviewed
    Then one terminal canonical-feature construction disposition is produced
```

## 5. Obligations

```text
Stage ID: decompose-obligations
Purpose: Extract exactly one governing obligation from every scenario.
Authorized inputs: canonical-scenarios
Required prior products: canonical-scenarios
Required output: scenario-obligations
Stop condition: every scenario has one complete obligation
```

Review questions:

- Does each obligation express exactly the meaning that its scenario requires?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "obligation": {
    "obligationId": "establish-one-eligible-new-feature-request",
    "statement": "Only one complete, reviewed, previously nonexistent feature request may enter construction."
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "obligation": {
    "obligationId": "establish-one-complete-new-feature-authority",
    "statement": "The admitted request must produce complete feature, scenario, obligation, expectation, responsibility, signal, and semantic authority."
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "obligation": {
    "obligationId": "materialize-only-admitted-new-feature-authority",
    "statement": "Materialization must derive every executable body from admitted feature-body and AST authority."
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "obligation": {
    "obligationId": "execute-new-feature-through-admitted-semantics",
    "statement": "Projected execution must use the same admitted semantic responsibility exercised by direct semantic evaluation."
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "obligation": {
    "obligationId": "prove-complete-new-feature-equivalence",
    "statement": "Declared expectation, direct semantic execution, and projected execution must be canonically equivalent."
  }
}
```

## 6. Expectations

```text
Stage ID: declare-expectations
Purpose: Declare the disposition expected when each scenario obligation is satisfied.
Authorized inputs: canonical-scenarios, scenario-obligations
Required prior products: scenario-obligations
Required output: scenario-expectations
Stop condition: every scenario has one expectation bound to one signal
```

Review questions:

- Is each expected disposition independently comparable with observed execution?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "expectation": {
    "expectationId": "expect-one-new-feature-request-admission",
    "signalId": "new-feature-request-admission",
    "expectedDisposition": "ADMITTED"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-authority",
    "signalId": "complete-new-feature-authority",
    "expectedDisposition": "COMPLETE"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-materialization",
    "signalId": "complete-new-feature-materialization",
    "expectedDisposition": "MATERIALIZED"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "expectation": {
    "expectationId": "expect-one-observed-new-feature-execution",
    "signalId": "observed-new-feature-execution",
    "expectedDisposition": "CONFORMS"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "expectation": {
    "expectationId": "expect-complete-new-feature-equivalence",
    "signalId": "complete-new-feature-equivalence",
    "expectedDisposition": "PROJECTION_CONFORMS"
  }
}
```

## 7. Responsibilities

```text
Stage ID: assign-responsibilities
Purpose: Assign one accountable responsibility to satisfy each admitted obligation.
Authorized inputs: scenario-obligations, scenario-expectations
Required prior products: scenario-expectations
Required output: scenario-responsibilities
Stop condition: every obligation has one responsible semantic operation
```

Review questions:

- Does each responsibility own one semantic transition and no unrelated policy?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "responsibility": {
    "responsibilityId": "admits-reviewed-new-feature-request",
    "kind": "admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "responsibility": {
    "responsibilityId": "projects-complete-new-feature-authority",
    "kind": "projection",
    "semanticOperationId": "project-complete-new-feature-authority"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "responsibility": {
    "responsibilityId": "materializes-complete-new-feature",
    "kind": "projection",
    "semanticOperationId": "materialize-complete-new-feature"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "responsibility": {
    "responsibilityId": "executes-newly-materialized-feature",
    "kind": "execution",
    "semanticOperationId": "execute-newly-materialized-feature"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "responsibility": {
    "responsibilityId": "verifies-complete-new-feature-lineage",
    "kind": "conformance",
    "semanticOperationId": "verify-complete-new-feature-lineage"
  }
}
```

## 8. Signals

```text
Stage ID: declare-signals
Purpose: Declare the observable signal produced by every responsibility.
Authorized inputs: scenario-expectations, scenario-responsibilities
Required prior products: scenario-responsibilities
Required output: scenario-signals
Stop condition: every responsibility produces one expectation-bound signal
```

Review questions:

- Can every declared signal be observed without reading the expectation during execution?

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "signal": {
    "signalId": "new-feature-request-admission",
    "statement": "The reviewed request is admitted or rejected with one deterministic disposition."
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "signal": {
    "signalId": "complete-new-feature-authority",
    "statement": "Every required canonical construction product exists and is causally linked."
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "signal": {
    "signalId": "complete-new-feature-materialization",
    "statement": "Every expected artifact exists and reproduces its admitted AST."
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "signal": {
    "signalId": "observed-new-feature-execution",
    "statement": "The projected feature produces the same observable signal as direct semantic execution."
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "signal": {
    "signalId": "complete-new-feature-equivalence",
    "statement": "Canonical meaning is conserved across authority, AST, source, and both execution surfaces."
  }
}
```

## 9. Semantic authority

```text
Stage ID: author-semantic-authority
Purpose: Define the language-neutral observations, decisions, and projections owned by every responsibility.
Authorized inputs: scenario-responsibilities, scenario-signals
Required prior products: scenario-signals
Required output: semantic-authority
Stop condition: every responsibility has complete language-neutral semantic authority
```

Review questions:

- Does semantic authority own every decision and result shape required by the responsibility?

### admits-reviewed-new-feature-request

```json
{
  "responsibilityId": "admits-reviewed-new-feature-request",
  "accepts": {
    "contractId": "reviewed-new-feature-request.v1"
  },
  "produces": {
    "contractId": "new-feature-request-admission.v1"
  },
  "observations": [
    {
      "observationId": "observe-reviewed-request",
      "source": "$.canonicalFeatureBody.scenarios[0]"
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-request-admission",
      "outcomes": [
        "ADMITTED",
        "REJECTED"
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-request-admission",
      "from": "resolve-request-admission",
      "to": "new-feature-request-admission.v1"
    }
  ]
}
```

### projects-complete-new-feature-authority

```json
{
  "responsibilityId": "projects-complete-new-feature-authority",
  "accepts": {
    "contractId": "admitted-new-feature-request.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "observations": [
    {
      "observationId": "observe-admitted-request",
      "source": "$.canonicalFeatureBody.feature"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-authority",
      "from": "observe-admitted-request",
      "to": "complete-new-feature-authority.v1"
    }
  ]
}
```

### materializes-complete-new-feature

```json
{
  "responsibilityId": "materializes-complete-new-feature",
  "accepts": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "observations": [
    {
      "observationId": "observe-complete-feature-authority",
      "source": "$.featureBodyAuthority"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-materialization",
      "from": "observe-complete-feature-authority",
      "to": "complete-new-feature-materialization.v1"
    }
  ]
}
```

### executes-newly-materialized-feature

```json
{
  "responsibilityId": "executes-newly-materialized-feature",
  "accepts": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "produces": {
    "contractId": "observed-new-feature-execution.v1"
  },
  "observations": [
    {
      "observationId": "observe-materialized-feature",
      "source": "$.projectionAuthority"
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-execution-observation",
      "from": "observe-materialized-feature",
      "to": "observed-new-feature-execution.v1"
    }
  ]
}
```

### verifies-complete-new-feature-lineage

```json
{
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "accepts": {
    "contractId": "new-feature-execution-comparison.v1"
  },
  "produces": {
    "contractId": "new-feature-terminal-disposition.v1"
  },
  "observations": [
    {
      "observationId": "observe-execution-comparison",
      "source": "$.evaluationAuthority"
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-terminal-disposition",
      "outcomes": [
        "PROJECTION_CONFORMS",
        "PROJECTION_DIVERGES"
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-terminal-disposition",
      "from": "resolve-terminal-disposition",
      "to": "new-feature-terminal-disposition.v1"
    }
  ]
}
```

## 10. Semantic execution

```text
Stage ID: author-semantic-execution
Purpose: Order the admitted semantic operations into directly executable models.
Authorized inputs: semantic-authority
Required prior products: semantic-authority
Required output: semantic-execution
Stop condition: every semantic authority has one deterministic execution model
```

Review questions:

- Can the semantic model execute directly without projected source code?

### admits-reviewed-new-feature-request

```json
{
  "responsibilityId": "admits-reviewed-new-feature-request",
  "execution": {
    "executionModelId": "admit-reviewed-new-feature-request",
    "steps": [
      {
        "sequence": 1,
        "operation": "observe-reviewed-request"
      },
      {
        "sequence": 2,
        "operation": "resolve-request-admission"
      },
      {
        "sequence": 3,
        "operation": "project-request-admission"
      }
    ]
  }
}
```

### projects-complete-new-feature-authority

```json
{
  "responsibilityId": "projects-complete-new-feature-authority",
  "execution": {
    "executionModelId": "project-complete-new-feature-authority",
    "steps": [
      {
        "sequence": 1,
        "operation": "observe-admitted-request"
      },
      {
        "sequence": 2,
        "operation": "project-complete-feature-authority"
      }
    ]
  }
}
```

### materializes-complete-new-feature

```json
{
  "responsibilityId": "materializes-complete-new-feature",
  "execution": {
    "executionModelId": "materialize-complete-new-feature",
    "steps": [
      {
        "sequence": 1,
        "operation": "observe-complete-feature-authority"
      },
      {
        "sequence": 2,
        "operation": "project-complete-feature-materialization"
      }
    ]
  }
}
```

### executes-newly-materialized-feature

```json
{
  "responsibilityId": "executes-newly-materialized-feature",
  "execution": {
    "executionModelId": "execute-newly-materialized-feature",
    "steps": [
      {
        "sequence": 1,
        "operation": "observe-materialized-feature"
      },
      {
        "sequence": 2,
        "operation": "project-execution-observation"
      }
    ]
  }
}
```

### verifies-complete-new-feature-lineage

```json
{
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "execution": {
    "executionModelId": "verify-complete-new-feature-lineage",
    "steps": [
      {
        "sequence": 1,
        "operation": "observe-execution-comparison"
      },
      {
        "sequence": 2,
        "operation": "resolve-terminal-disposition"
      },
      {
        "sequence": 3,
        "operation": "project-terminal-disposition"
      }
    ]
  }
}
```

## 11. Feature-body authority

```text
Stage ID: author-feature-body-authority
Purpose: Collapse each semantic execution edge into one language-neutral executable body.
Authorized inputs: scenario-responsibilities, semantic-execution
Required prior products: semantic-execution
Required output: feature-body-authority
Stop condition: every responsibility has one complete constrained feature body
```

Review questions:

- Does each body invoke only its admitted semantic edge and introduce no domain meaning?

### new-feature-request-admission

```json
{
  "bodyId": "new-feature-request-admission",
  "responsibilityId": "admits-reviewed-new-feature-request",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "admit-reviewed-new-feature-request-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "admit-reviewed-new-feature-request",
      "input": "$.context",
      "assign": "admission"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.admission"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-authority

```json
{
  "bodyId": "complete-new-feature-authority",
  "responsibilityId": "projects-complete-new-feature-authority",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "project-complete-new-feature-authority-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "project-complete-new-feature-authority",
      "input": "$.context",
      "assign": "authority"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.authority"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-materialization

```json
{
  "bodyId": "complete-new-feature-materialization",
  "responsibilityId": "materializes-complete-new-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "materialize-complete-new-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "materialize-complete-new-feature",
      "input": "$.context",
      "assign": "materialization"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.materialization"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### observed-new-feature-execution

```json
{
  "bodyId": "observed-new-feature-execution",
  "responsibilityId": "executes-newly-materialized-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "execute-newly-materialized-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "execute-newly-materialized-feature",
      "input": "$.context",
      "assign": "observation"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.observation"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

### complete-new-feature-lineage

```json
{
  "bodyId": "complete-new-feature-lineage",
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "verify-complete-new-feature-lineage-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "verify-complete-new-feature-lineage",
      "input": "$.context",
      "assign": "disposition"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.disposition"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

## 12. Language projection authority

```text
Stage ID: resolve-language-projection
Purpose: Bind each feature body to one admitted language and module profile.
Authorized inputs: feature-body-authority
Required prior products: feature-body-authority
Required output: language-projection-authority
Stop condition: every feature body has one admitted language projection
```

Review questions:

- Does the selected language profile translate the body without changing its meaning?

### new-feature-request-admission

```json
{
  "bodyId": "new-feature-request-admission",
  "target": {
    "language": "typescript",
    "moduleProfile": "typescript-esm",
    "languageProfileId": "typescript-collapsed-responsibility-body.v1"
  },
  "translation": {
    "sourceBodyId": "new-feature-request-admission",
    "projectionId": "project-new-feature-request-admission",
    "artifactPath": "src/new-feature-request-admission.ts"
  }
}
```

### complete-new-feature-authority

```json
{
  "bodyId": "complete-new-feature-authority",
  "target": {
    "language": "typescript",
    "moduleProfile": "typescript-esm",
    "languageProfileId": "typescript-collapsed-responsibility-body.v1"
  },
  "translation": {
    "sourceBodyId": "complete-new-feature-authority",
    "projectionId": "project-complete-new-feature-authority-body",
    "artifactPath": "src/complete-new-feature-authority.ts"
  }
}
```

### complete-new-feature-materialization

```json
{
  "bodyId": "complete-new-feature-materialization",
  "target": {
    "language": "typescript",
    "moduleProfile": "typescript-esm",
    "languageProfileId": "typescript-collapsed-responsibility-body.v1"
  },
  "translation": {
    "sourceBodyId": "complete-new-feature-materialization",
    "projectionId": "project-complete-new-feature-materialization",
    "artifactPath": "src/complete-new-feature-materialization.ts"
  }
}
```

### observed-new-feature-execution

```json
{
  "bodyId": "observed-new-feature-execution",
  "target": {
    "language": "typescript",
    "moduleProfile": "typescript-esm",
    "languageProfileId": "typescript-collapsed-responsibility-body.v1"
  },
  "translation": {
    "sourceBodyId": "observed-new-feature-execution",
    "projectionId": "project-observed-new-feature-execution",
    "artifactPath": "src/observed-new-feature-execution.ts"
  }
}
```

### complete-new-feature-lineage

```json
{
  "bodyId": "complete-new-feature-lineage",
  "target": {
    "language": "typescript",
    "moduleProfile": "typescript-esm",
    "languageProfileId": "typescript-collapsed-responsibility-body.v1"
  },
  "translation": {
    "sourceBodyId": "complete-new-feature-lineage",
    "projectionId": "project-complete-new-feature-lineage",
    "artifactPath": "src/complete-new-feature-lineage.ts"
  }
}
```

## 13. Expected AST

```text
Stage ID: project-expected-ast
Purpose: Project each feature body into the complete expected language AST.
Authorized inputs: feature-body-authority, language-projection-authority
Required prior products: language-projection-authority
Required output: expected-ast
Stop condition: every projected body has one complete expected AST
```

Review questions:

- Can every AST node be traced to feature-body authority?

### new-feature-request-admission

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "FunctionDeclaration",
      "name": "admitsReviewedNewFeatureRequest",
      "modifiers": [
        "export",
        "async"
      ],
      "parameters": [
        {
          "name": "context",
          "typeReference": "AdmitReviewedNewFeatureRequestContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "Promise",
        "typeReference": "NewFeatureRequestAdmission"
      },
      "body": {
        "kind": "Block",
        "statements": [
          {
            "kind": "ReturnStatement",
            "expression": {
              "kind": "AwaitExpression",
              "expression": {
                "kind": "CallExpression",
                "callee": {
                  "kind": "PropertyAccessExpression",
                  "receiver": {
                    "kind": "Identifier",
                    "name": "context"
                  },
                  "member": "invoke"
                },
                "arguments": [
                  {
                    "kind": "StringLiteral",
                    "value": "admit-reviewed-new-feature-request"
                  },
                  {
                    "kind": "Identifier",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-authority

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "FunctionDeclaration",
      "name": "projectsCompleteNewFeatureAuthority",
      "modifiers": [
        "export",
        "async"
      ],
      "parameters": [
        {
          "name": "context",
          "typeReference": "ProjectCompleteNewFeatureAuthorityContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "Promise",
        "typeReference": "CompleteNewFeatureAuthority"
      },
      "body": {
        "kind": "Block",
        "statements": [
          {
            "kind": "ReturnStatement",
            "expression": {
              "kind": "AwaitExpression",
              "expression": {
                "kind": "CallExpression",
                "callee": {
                  "kind": "PropertyAccessExpression",
                  "receiver": {
                    "kind": "Identifier",
                    "name": "context"
                  },
                  "member": "invoke"
                },
                "arguments": [
                  {
                    "kind": "StringLiteral",
                    "value": "project-complete-new-feature-authority"
                  },
                  {
                    "kind": "Identifier",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-materialization

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "FunctionDeclaration",
      "name": "materializesCompleteNewFeature",
      "modifiers": [
        "export",
        "async"
      ],
      "parameters": [
        {
          "name": "context",
          "typeReference": "MaterializeCompleteNewFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "Promise",
        "typeReference": "CompleteNewFeatureMaterialization"
      },
      "body": {
        "kind": "Block",
        "statements": [
          {
            "kind": "ReturnStatement",
            "expression": {
              "kind": "AwaitExpression",
              "expression": {
                "kind": "CallExpression",
                "callee": {
                  "kind": "PropertyAccessExpression",
                  "receiver": {
                    "kind": "Identifier",
                    "name": "context"
                  },
                  "member": "invoke"
                },
                "arguments": [
                  {
                    "kind": "StringLiteral",
                    "value": "materialize-complete-new-feature"
                  },
                  {
                    "kind": "Identifier",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### observed-new-feature-execution

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "FunctionDeclaration",
      "name": "executesNewlyMaterializedFeature",
      "modifiers": [
        "export",
        "async"
      ],
      "parameters": [
        {
          "name": "context",
          "typeReference": "ExecuteNewlyMaterializedFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "Promise",
        "typeReference": "ObservedNewFeatureExecution"
      },
      "body": {
        "kind": "Block",
        "statements": [
          {
            "kind": "ReturnStatement",
            "expression": {
              "kind": "AwaitExpression",
              "expression": {
                "kind": "CallExpression",
                "callee": {
                  "kind": "PropertyAccessExpression",
                  "receiver": {
                    "kind": "Identifier",
                    "name": "context"
                  },
                  "member": "invoke"
                },
                "arguments": [
                  {
                    "kind": "StringLiteral",
                    "value": "execute-newly-materialized-feature"
                  },
                  {
                    "kind": "Identifier",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

### complete-new-feature-lineage

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "FunctionDeclaration",
      "name": "verifiesCompleteNewFeatureLineage",
      "modifiers": [
        "export",
        "async"
      ],
      "parameters": [
        {
          "name": "context",
          "typeReference": "VerifyCompleteNewFeatureLineageContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "Promise",
        "typeReference": "NewFeatureTerminalDisposition"
      },
      "body": {
        "kind": "Block",
        "statements": [
          {
            "kind": "ReturnStatement",
            "expression": {
              "kind": "AwaitExpression",
              "expression": {
                "kind": "CallExpression",
                "callee": {
                  "kind": "PropertyAccessExpression",
                  "receiver": {
                    "kind": "Identifier",
                    "name": "context"
                  },
                  "member": "invoke"
                },
                "arguments": [
                  {
                    "kind": "StringLiteral",
                    "value": "verify-complete-new-feature-lineage"
                  },
                  {
                    "kind": "Identifier",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

## 14. Expected code projection

```text
Stage ID: project-expected-code
Purpose: Render expected source code exclusively from the admitted AST.
Authorized inputs: expected-ast
Required prior products: expected-ast
Required output: expected-code
Stop condition: every expected AST renders one deterministic source body
```

Review questions:

- Does every source construct come from the expected AST with no hand-authored additions?

### src/new-feature-request-admission.ts

```typescript
export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.invoke(
    "admit-reviewed-new-feature-request",
    context
  );
}
```

### src/complete-new-feature-authority.ts

```typescript
export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.invoke(
    "project-complete-new-feature-authority",
    context
  );
}
```

### src/complete-new-feature-materialization.ts

```typescript
export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.invoke(
    "materialize-complete-new-feature",
    context
  );
}
```

### src/observed-new-feature-execution.ts

```typescript
export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.invoke(
    "execute-newly-materialized-feature",
    context
  );
}
```

### src/complete-new-feature-lineage.ts

```typescript
export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.invoke(
    "verify-complete-new-feature-lineage",
    context
  );
}
```

## 15. Direct semantic evaluation

```text
Stage ID: evaluate-semantic-execution
Purpose: Execute semantic authority directly and observe its signals.
Authorized inputs: semantic-execution, scenario-signals
Required prior products: semantic-execution
Required output: semantic-evaluation
Stop condition: every semantic execution produces one observed signal
```

Review questions:

- Was the semantic result observed without using the expected result as execution input?

```json
{
  "executionSource": "$.semanticAuthority[*].execution",
  "fixtureSource": "$.canonicalFeatureBody.scenarios[*].behavior.given",
  "expectedSignalSource": "$.canonicalFeatureBody.scenarios[*].signal"
}
```

## 16. Projected-body evaluation

```text
Stage ID: evaluate-projected-execution
Purpose: Execute the projected embodiment and observe its signals independently.
Authorized inputs: expected-code, scenario-signals
Required prior products: expected-code
Required output: projected-evaluation
Stop condition: every projected body produces one independently observed signal
```

Review questions:

- Was the projected result observed through the same fixture boundary as semantic execution?

```json
{
  "executionSource": "$.projectionAuthority[*].expectedProjection.ast",
  "fixtureSource": "$.canonicalFeatureBody.scenarios[*].behavior.given",
  "expectedSignalSource": "$.canonicalFeatureBody.scenarios[*].signal"
}
```

## 17. Translation conformance

```text
Stage ID: evaluate-translation-conformance
Purpose: Compare declared expectations, semantic observations, and projected observations.
Authorized inputs: scenario-expectations, semantic-evaluation, projected-evaluation
Required prior products: semantic-evaluation, projected-evaluation
Required output: translation-conformance
Stop condition: every responsibility has one terminal translation determination
```

Review questions:

- Are the declared, semantic, and projected outcomes canonically equivalent?

```json
{
  "translationEvaluation": {
    "compare": [
      "$.semanticEvaluation.observedSignal",
      "$.projectedEvaluation.observedSignal",
      "$.canonicalFeatureBody.scenarios[*].expectation"
    ],
    "requiredRelationship": "canonical-equivalence"
  },
  "terminalDetermination": {
    "semanticExecution": "CONFORMS",
    "projectedExecution": "CONFORMS",
    "translation": "EQUIVALENT",
    "disposition": "PROJECTION_CONFORMS"
  }
}
```

## 18. Review disposition

```text
Stage ID: review-feature
Purpose: Present the complete construction lineage for human implementation admission.
Authorized inputs: canonical-feature, translation-conformance
Required prior products: translation-conformance
Required output: review-disposition
Stop condition: one review disposition covers the complete canonical feature
```

Review questions:

- Is every implementation construct traceable through AST, body, semantic authority, and feature intent?

Review questions:

- Does each stage consume only admitted products of earlier stages?
- Does every scenario carry one obligation, expectation, responsibility, signal, and semantic operation?
- Can every feature-body operation be traced to semantic execution?
- Can every AST node be traced to feature-body authority?
- Can every projected source construct be traced to the expected AST?
- Are direct semantic and projected observations canonically equivalent to the declared expectation?

Translation tie-out:

| Canonical authority | Expected AST | Expected code |
| --- | --- | --- |
| Each feature body accepts one immutable context. | Each function declaration has one immutable context parameter. | Each projected function accepts one typed context parameter. |
| Each feature body invokes exactly one admitted semantic edge. | Each function body contains one awaited call expression. | Each projected function returns one awaited context invocation. |
| Each semantic edge ID equals its scenario semantic operation ID. | Each call contains the edge ID as one string literal. | Each context invocation names the admitted semantic edge. |
| Domain branching and DTO construction are forbidden. | No branch or object-construction nodes are admitted. | No if, switch, loop, or object construction is projected. |

Admission rule: Admit implementation only when construction order is complete and expectation, semantic execution, AST, projected execution, and review are canonically equivalent.
