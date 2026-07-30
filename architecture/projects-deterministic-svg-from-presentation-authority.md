# Project deterministic SVG from presentation authority Contract

## Status

```text
CONTRACT STATUS: REVIEWED
CONTRACT TYPE: reviewed-capability-request.v1
SCHEMA VERSION: 1.0.0
IMPLEMENTATION STATUS: NOT YET CLAIMED
```

## Future-state preview

```text
Presentation Schema + Presentation Contract + Projection Profile
                            |
                            v
                 Resolved Projection Plan
                            |
                            v
               Generic SVG Projection Kernel
                            |
                            v
          Canonical SVG + Conformance Receipt
```

## Reviewed intent

Actor: reviewer of governed visual artifacts
Trigger: one pinned presentation schema, presentation contract, and SVG projection profile are submitted
Need: project the declared visual subject through one generic deterministic SVG interpreter
Purpose: produce byte-stable SVG and independently verifiable conformance evidence without renderer discretion

## Governed constraints

```json
{
  "constraints": [
    {
      "statementId": "schema-defines-language",
      "text": "The presentation schema alone defines which presentation declarations are legal."
    },
    {
      "statementId": "contract-defines-subject",
      "text": "The presentation contract alone defines sections, text, order, bounds, colors, fonts, icons, omission policy, and rewriting policy."
    },
    {
      "statementId": "profile-defines-rendering",
      "text": "The projection profile identifies the renderer catalog, theme catalog, primitive catalog, icon catalog, output path, and serialization policy."
    },
    {
      "statementId": "kernel-is-generic",
      "text": "The SVG projection kernel contains no infographic-specific branching and makes no visual design decisions."
    },
    {
      "statementId": "primitives-are-closed",
      "text": "The primitive catalog is closed to create-svg-root, create-group, create-rectangle, create-line, create-path, create-text, create-tspan, create-icon, apply-transform, apply-style-token, bind-content, clip-region, and serialize-svg."
    },
    {
      "statementId": "renderers-are-closed",
      "text": "The initial renderer catalog is closed to split-hero, three-equal-cards, three-equal-columns, split-callout-with-center-divider, three-step-horizontal-journey, capability-equation, horizontal-banner, right-outcome-callout, and single-line-footer."
    },
    {
      "statementId": "icons-are-declarative",
      "text": "Every icon resolves from a pinned registry to declared viewBox and path data; external assets and substitutions are forbidden."
    },
    {
      "statementId": "serialization-is-canonical",
      "text": "SVG serialization uses UTF-8, LF endings, canonical attribute order, projection-sequence element order, fixed numeric precision, no timestamps, no random identifiers, no runtime comments, stable whitespace, and one terminal newline."
    },
    {
      "statementId": "inspection-is-independent",
      "text": "Conformance inspection parses emitted SVG bytes and compares observed structure with authority without trusting projector claims."
    },
    {
      "statementId": "evaluation-is-fail-closed",
      "text": "The acceptance algorithm evaluates ordered checks and returns the first assigned RED code; GREEN is forbidden when any required check fails."
    },
    {
      "statementId": "projection-is-capability-local",
      "text": "All implementation artifacts project beneath capabilities/project-deterministic-svg-from-presentation-authority using canonical scenario and responsibility folders."
    }
  ]
}
```

## Required outcome

One admitted presentation authority produces one canonical SVG artifact and one terminal conformance receipt.

```json
{
  "outcomeId": "governed-svg-projection-exists",
  "observableState": [
    {
      "statementId": "contract-consumed",
      "text": "The exact submitted presentation contract is validated and consumed."
    },
    {
      "statementId": "plan-is-resolved",
      "text": "One complete ordered projection plan resolves every section, bound, binding, token, icon, renderer, and proof requirement."
    },
    {
      "statementId": "svg-is-byte-stable",
      "text": "Repeated projection from identical authority produces byte-identical SVG."
    },
    {
      "statementId": "receipt-binds-evidence",
      "text": "The receipt binds schema, contract, profile, plan, and SVG hashes to the terminal disposition."
    },
    {
      "statementId": "negative-controls-are-specific",
      "text": "Every invalid authority or artifact condition returns its assigned first RED code."
    }
  ]
}
```

## User story

```text
As a reviewer of governed visual artifacts
I want a presentation schema, presentation contract, and projection profile to drive one generic SVG projection kernel
So that the declared visual subject is embodied and independently verified without renderer discretion or byte drift
```

Governing obligation: Transform only admitted presentation authority into canonical SVG bytes and a conformance receipt without infographic-specific branching or undeclared visual decisions.

## Acceptance Gherkin

```gherkin
Feature: Project deterministic SVG from presentation authority
  As a reviewer of governed visual artifacts
  I want a presentation schema, presentation contract, and projection profile to drive one generic SVG projection kernel
  So that the declared visual subject is embodied and independently verified without renderer discretion or byte drift

  Background:
    Given one immutable presentation schema identifies the admissible presentation language
    And one immutable presentation contract identifies the exact visual subject
    And one immutable projection profile identifies rendering and serialization policy
    And the renderer, theme, primitive, and icon registries are pinned and available

  @scenario-id:resolve-svg-projection-authority
  Scenario: Resolve admitted presentation authority
    Given the pinned schema, contract, profile, and registries are available as exact bytes
    When the resolver validates identities, hashes, references, layouts, content bindings, and proof requirements
    Then one ambiguity-free ordered SVG projection plan is returned
    And any missing, unknown, inconsistent, or unresolvable declaration is rejected before projection

  @scenario-id:execute-resolved-svg-projection
  Scenario: Execute the resolved plan without visual discretion
    Given one validated projection plan contains exact operations, bounds, bindings, tokens, and renderer identities
    When the generic projection kernel executes every operation in declared sequence
    Then each emitted SVG element corresponds to one admitted operation
    And no artifact-specific branch, external asset, substitution, or inferred design decision is introduced

  @scenario-id:serialize-svg-canonically
  Scenario: Serialize one byte-stable SVG artifact
    Given one complete in-memory SVG tree contains only admitted elements and attributes
    When the canonical serializer orders and encodes the tree under the pinned policy
    Then identical authority produces byte-identical UTF-8 SVG with LF endings and one terminal newline
    And timestamps, random identifiers, runtime comments, and unstable whitespace are absent

  @scenario-id:inspect-generated-svg
  Scenario: Inspect the emitted artifact independently
    Given the exact emitted SVG bytes and admitted presentation authority are available
    When the inspector parses the SVG and evaluates identities, order, bounds, text, tokens, icons, overflow, and undeclared elements
    Then one ordered observation exists for every proof requirement
    And observed SVG state is compared with authority without trusting projector claims

  @scenario-id:project-svg-conformance-receipt
  Scenario: Issue the terminal conformance receipt
    Given all ordered proof observations and exact input, plan, and SVG hashes are available
    When the evaluator applies the fail-closed acceptance algorithm
    Then INFOGRAPHIC_CONFORMS is issued only when every required check passes
    And the first failed check returns its assigned terminal RED code and no GREEN receipt
```

## Canonical authority graph

```text
1. scenario/resolve-svg-projection-authority
   -> obligation/resolve-all-presentation-decisions
   -> responsibility/resolve-svg-projection-authority
   -> semantic-operation/resolve-svg-projection-authority
   -> signal/svg-projection-authority-resolved
   -> expectation/resolved-authority-expected
   -> disposition/PROJECTION_AUTHORITY_RESOLVED
2. scenario/execute-resolved-svg-projection
   -> obligation/interpret-plan-mechanically
   -> responsibility/execute-resolved-svg-projection
   -> semantic-operation/execute-resolved-svg-projection
   -> signal/resolved-svg-projection-executed
   -> expectation/projection-execution-expected
   -> disposition/SVG_ELEMENTS_PROJECTED
3. scenario/serialize-svg-canonically
   -> obligation/emit-canonical-svg-bytes
   -> responsibility/serialize-svg-canonically
   -> semantic-operation/serialize-svg-canonically
   -> signal/canonical-svg-serialized
   -> expectation/canonical-svg-expected
   -> disposition/SVG_BYTES_CANONICAL
4. scenario/inspect-generated-svg
   -> obligation/inspect-svg-independently
   -> responsibility/inspect-generated-svg
   -> semantic-operation/inspect-generated-svg
   -> signal/generated-svg-inspected
   -> expectation/inspection-expected
   -> disposition/SVG_OBSERVATIONS_COMPLETE
5. scenario/project-svg-conformance-receipt
   -> obligation/bind-terminal-evidence
   -> responsibility/project-svg-conformance-receipt
   -> semantic-operation/project-svg-conformance-receipt
   -> signal/svg-conformance-receipt-projected
   -> expectation/receipt-expected
   -> disposition/INFOGRAPHIC_CONFORMS
```

## Scenario authority

### resolve-svg-projection-authority

```json
{
  "obligation": {
    "obligationId": "resolve-all-presentation-decisions",
    "statement": "Resolve all presentation decisions before SVG element creation."
  },
  "responsibility": {
    "responsibilityId": "resolve-svg-projection-authority",
    "kind": "composition",
    "semanticOperationId": "resolve-svg-projection-authority"
  },
  "signal": {
    "signalId": "svg-projection-authority-resolved",
    "statement": "One complete resolved projection plan is observable.",
    "resultShape": {
      "contractId": "resolved-svg-presentation.v1",
      "fields": [
        {
          "name": "projectionPlanType",
          "type": "string",
          "required": true
        },
        {
          "name": "artifactId",
          "type": "string",
          "required": true
        },
        {
          "name": "canvas",
          "type": "object",
          "required": true
        },
        {
          "name": "operations",
          "type": "array",
          "required": true
        },
        {
          "name": "proofRequirementId",
          "type": "string",
          "required": true
        }
      ]
    }
  },
  "expectation": {
    "expectationId": "resolved-authority-expected",
    "signalId": "svg-projection-authority-resolved",
    "expectedDisposition": "PROJECTION_AUTHORITY_RESOLVED"
  }
}
```

### execute-resolved-svg-projection

```json
{
  "obligation": {
    "obligationId": "interpret-plan-mechanically",
    "statement": "Mechanically interpret the resolved plan through bounded generic primitives and renderers."
  },
  "responsibility": {
    "responsibilityId": "execute-resolved-svg-projection",
    "kind": "execution",
    "semanticOperationId": "execute-resolved-svg-projection"
  },
  "signal": {
    "signalId": "resolved-svg-projection-executed",
    "statement": "The complete admitted SVG element tree is observable.",
    "resultShape": {
      "contractId": "svg-projection-execution.v1",
      "fields": [
        {
          "name": "artifactId",
          "type": "string",
          "required": true
        },
        {
          "name": "svgTree",
          "type": "object",
          "required": true
        },
        {
          "name": "operationCount",
          "type": "integer",
          "required": true
        },
        {
          "name": "projectedOperationCount",
          "type": "integer",
          "required": true
        }
      ]
    }
  },
  "expectation": {
    "expectationId": "projection-execution-expected",
    "signalId": "resolved-svg-projection-executed",
    "expectedDisposition": "SVG_ELEMENTS_PROJECTED"
  }
}
```

### serialize-svg-canonically

```json
{
  "obligation": {
    "obligationId": "emit-canonical-svg-bytes",
    "statement": "Emit canonical SVG bytes whose identity depends only on admitted authority."
  },
  "responsibility": {
    "responsibilityId": "serialize-svg-canonically",
    "kind": "projection",
    "semanticOperationId": "serialize-svg-canonically"
  },
  "signal": {
    "signalId": "canonical-svg-serialized",
    "statement": "Exact canonical SVG bytes and their hash are observable.",
    "resultShape": {
      "contractId": "canonical-svg-artifact.v1",
      "fields": [
        {
          "name": "artifactId",
          "type": "string",
          "required": true
        },
        {
          "name": "outputPath",
          "type": "string",
          "required": true
        },
        {
          "name": "svgSha256",
          "type": "string",
          "required": true
        },
        {
          "name": "byteLength",
          "type": "integer",
          "required": true
        }
      ]
    }
  },
  "expectation": {
    "expectationId": "canonical-svg-expected",
    "signalId": "canonical-svg-serialized",
    "expectedDisposition": "SVG_BYTES_CANONICAL"
  }
}
```

### inspect-generated-svg

```json
{
  "obligation": {
    "obligationId": "inspect-svg-independently",
    "statement": "Observe generated SVG structure and presentation semantics independently of projection execution."
  },
  "responsibility": {
    "responsibilityId": "inspect-generated-svg",
    "kind": "observation",
    "semanticOperationId": "inspect-generated-svg"
  },
  "signal": {
    "signalId": "generated-svg-inspected",
    "statement": "Complete ordered proof observations are observable.",
    "resultShape": {
      "contractId": "svg-conformance-observation.v1",
      "fields": [
        {
          "name": "artifactId",
          "type": "string",
          "required": true
        },
        {
          "name": "observations",
          "type": "array",
          "required": true
        },
        {
          "name": "findingCount",
          "type": "integer",
          "required": true
        },
        {
          "name": "findings",
          "type": "array",
          "required": true
        }
      ]
    }
  },
  "expectation": {
    "expectationId": "inspection-expected",
    "signalId": "generated-svg-inspected",
    "expectedDisposition": "SVG_OBSERVATIONS_COMPLETE"
  }
}
```

### project-svg-conformance-receipt

```json
{
  "obligation": {
    "obligationId": "bind-terminal-evidence",
    "statement": "Bind exact authority and artifact identities to one exhaustive terminal disposition."
  },
  "responsibility": {
    "responsibilityId": "project-svg-conformance-receipt",
    "kind": "conformance",
    "semanticOperationId": "project-svg-conformance-receipt"
  },
  "signal": {
    "signalId": "svg-conformance-receipt-projected",
    "statement": "One terminal receipt binding all required hashes and findings is observable.",
    "resultShape": {
      "contractId": "deterministic-infographic-projection-receipt.v1",
      "fields": [
        {
          "name": "receiptType",
          "type": "string",
          "required": true
        },
        {
          "name": "artifactId",
          "type": "string",
          "required": true
        },
        {
          "name": "schemaId",
          "type": "string",
          "required": true
        },
        {
          "name": "schemaHash",
          "type": "string",
          "required": true
        },
        {
          "name": "contractHash",
          "type": "string",
          "required": true
        },
        {
          "name": "rendererProfileId",
          "type": "string",
          "required": true
        },
        {
          "name": "projectionPlanHash",
          "type": "string",
          "required": true
        },
        {
          "name": "svgHash",
          "type": "string",
          "required": true
        },
        {
          "name": "sectionCount",
          "type": "integer",
          "required": true
        },
        {
          "name": "projectedSectionCount",
          "type": "integer",
          "required": true
        },
        {
          "name": "findings",
          "type": "array",
          "required": true
        },
        {
          "name": "disposition",
          "type": "string",
          "allowedValues": [
            "INFOGRAPHIC_CONFORMS"
          ],
          "required": true
        }
      ]
    }
  },
  "expectation": {
    "expectationId": "receipt-expected",
    "signalId": "svg-conformance-receipt-projected",
    "expectedDisposition": "INFOGRAPHIC_CONFORMS"
  }
}
```

## Canonical file body system

```text
capabilities/project-deterministic-svg-from-presentation-authority/
  authority/
    reviewed-capability-request.json
    model-produced-capability-authority.json
    projected-artifact-manifest.json
  scenarios/
    resolve-svg-projection-authority/
      resolve-svg-projection-authority/
        resolve-svg-projection-authority.ts
        resolve-svg-projection-authority.type.ts
        resolve-svg-projection-authority.expectation.ts
        resolve-svg-projection-authority.conformance.ts
    execute-resolved-svg-projection/
      execute-resolved-svg-projection/
        execute-resolved-svg-projection.ts
        execute-resolved-svg-projection.type.ts
        execute-resolved-svg-projection.expectation.ts
        execute-resolved-svg-projection.conformance.ts
    serialize-svg-canonically/
      serialize-svg-canonically/
        serialize-svg-canonically.ts
        serialize-svg-canonically.type.ts
        serialize-svg-canonically.expectation.ts
        serialize-svg-canonically.conformance.ts
    inspect-generated-svg/
      inspect-generated-svg/
        inspect-generated-svg.ts
        inspect-generated-svg.type.ts
        inspect-generated-svg.expectation.ts
        inspect-generated-svg.conformance.ts
    project-svg-conformance-receipt/
      project-svg-conformance-receipt/
        project-svg-conformance-receipt.ts
        project-svg-conformance-receipt.type.ts
        project-svg-conformance-receipt.expectation.ts
        project-svg-conformance-receipt.conformance.ts
```

## Conveyor admission boundary

This reviewed contract is the admitted input to the canonical feature conveyor.
It does not embed model-produced semantic authority, AST, code, or implementation
evidence. Those downstream artifacts must be projected by the conveyor and bound
back to this exact contract rather than authored into a parallel schema.

## Implementation exit condition

The capability is complete only when the canonical conveyor consumes this exact
contract, projects a non-empty capability-local artifact set, executes acceptance
against a real SVG output, reproduces identical SVG bytes from identical authority,
and independently issues the expected terminal receipt with exhaustive RED controls.
