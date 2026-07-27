# 6. Code-Body Projection Authority

The code-body projection authority declares the exact TypeScript structure that the language projector must render.

It is the first layer in this walkthrough that directly controls Node/TypeScript syntax.

```text id="zwu5ck"
Semantic authority
    declares what the responsibility means.

Code-body projection authority
    declares the exact syntax tree to render.

Language projector
    renders that syntax tree.

Generated TypeScript
    is the resulting executable artifact.
```

A complete authority for this body might be:

```json id="41g2mn"
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
      "generatedHeader": {
        "generatorId": "semantic-kernel/declarative-typescript.v1",
        "doNotEdit": true
      },
      "lineage": {
        "scenarioId": "reject-a-scenario-with-multiple-obligations",
        "obligationId": "scenario-carries-one-obligation",
        "responsibilityId": "evaluates-scenario-atomicity",
        "signalId": "scenario-atomicity"
      },
      "imports": [
        {
          "kind": "import",
          "typeOnly": true,
          "from": "../types/scenario-atomicity.type.js",
          "named": [
            {
              "imported": "EvaluateScenarioAtomicityContext"
            },
            {
              "imported": "ScenarioAtomicitySignal"
            }
          ]
        }
      ],
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
                  "callee": {
                    "kind": "member",
                    "object": {
                      "kind": "member",
                      "object": {
                        "kind": "identifier",
                        "name": "context"
                      },
                      "property": "edges"
                    },
                    "property": "invokes"
                  },
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

---

# Code-Body Projection Influence Classification

```json id="xirnvk"
{
  "projectionInfluence": {
    "classification": "direct-code-structure",
    "directCodeInfluence": true,
    "directAstInfluence": true,
    "semanticDecisionInfluence": false,
    "runtimeMeaningInfluence": false,
    "proofInfluence": true
  }
}
```

## Code influence

```text id="st1wij"
Code influence:
DIRECT
```

Every applicable node in this authority must be followed by:

```text id="8cgsmz"
This becomes:
<exact generated Node/TypeScript>
```

The projector must not add undeclared application syntax.

---

# What `projectionType` Influences

## Projection-authority node

```json id="noek6c"
{
  "projectionType": "declarative-typescript-projection.v1"
}
```

## Meaning

This selects the schema and projection grammar used to describe TypeScript artifacts.

It determines which node kinds the compiler accepts, such as:

```text id="fm7jvh"
import
function
variable
return
await
call
member
identifier
literal
```

## This does not become application code

It does not become:

```typescript id="u12gwt"
const projectionType =
  "declarative-typescript-projection.v1";
```

Instead, it controls how the authority document is validated and interpreted.

## This may become projection testimony

```json id="0agjsi"
{
  "projectionType": "declarative-typescript-projection.v1"
}
```

inside the projection receipt.

---

# What `projectionId` Influences

## Projection-authority node

```json id="ui6rl2"
{
  "projectionId": "project-scenario-atomicity-body"
}
```

## Meaning

This is the stable identity of the code projection.

## This becomes

```typescript id="1fxwfe"
// projection-id: project-scenario-atomicity-body
```

## It also becomes receipt identity

```json id="sy2sqx"
{
  "projectionId": "project-scenario-atomicity-body"
}
```

The generated comment is navigation testimony.

The receipt remains the authoritative projection testimony.

---

# What `targetId` Influences

## Projection-authority node

```json id="i46xr0"
{
  "targetId": "typescript-esm"
}
```

## Meaning

This selects the TypeScript ECMAScript-module target profile.

The target profile can govern matters such as:

```text id="b9h36m"
ES module import syntax
TypeScript type annotations
File-extension policy
Export syntax
Formatting profile
```

## This does not directly become

```typescript id="njg9ya"
const target = "typescript-esm";
```

It configures the language projector.

## This may become receipt testimony

```json id="af54fa"
{
  "targetId": "typescript-esm"
}
```

---

# What the Artifact Path Influences

## Projection-authority node

```json id="9gf08v"
{
  "path": "src/runtime/evaluates-scenario-atomicity.ts"
}
```

## Meaning

This declares the exact relative path of the generated artifact.

## This becomes

```text id="61ve29"
src/runtime/evaluates-scenario-atomicity.ts
```

The projector writes the rendered TypeScript to that location.

It must not choose a different location based on convenience.

---

# What the Generated Header Influences

## Projection-authority node

```json id="jp0eb4"
{
  "generatedHeader": {
    "generatorId": "semantic-kernel/declarative-typescript.v1",
    "doNotEdit": true
  }
}
```

## This becomes

```typescript id="ghlh6s"
// @generated by semantic-kernel/declarative-typescript.v1
// DO NOT EDIT.
```

Without this node—or an explicit target-profile rule that deterministically supplies it—the projector cannot truthfully claim that these comments came from the shown authority.

---

# What the Scenario Lineage Influences

## Projection-authority node

```json id="adkncp"
{
  "lineage": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations"
  }
}
```

## This becomes

```typescript id="dml1sa"
// scenario-id: reject-a-scenario-with-multiple-obligations
```

## It also binds the artifact to the scenario

```text id="yz1tj1"
Scenario
    ↓
Expected body lineage
    ↓
Projected artifact
```

The platform agent can now locate the owning scenario directly from the generated body.

---

# What the Obligation Lineage Influences

## Projection-authority node

```json id="7q30ga"
{
  "lineage": {
    "obligationId": "scenario-carries-one-obligation"
  }
}
```

## This becomes

```typescript id="tg4c84"
// obligation-id: scenario-carries-one-obligation
```

This tag makes the body’s semantic boundary visible.

The body must remain causally subordinate to this obligation.

---

# What the Responsibility Lineage Influences

## Projection-authority node

```json id="wlcjx9"
{
  "lineage": {
    "responsibilityId": "evaluates-scenario-atomicity"
  }
}
```

## This becomes

```typescript id="r42ye8"
// responsibility-id: evaluates-scenario-atomicity
```

It also ties the body to the operation projected later:

```typescript id="jq07k3"
evaluatesScenarioAtomicity
```

The canonical responsibility ID and the TypeScript function name remain different representations of the same responsibility.

---

# What the Signal Lineage Influences

## Projection-authority node

```json id="zl0s1z"
{
  "lineage": {
    "signalId": "scenario-atomicity"
  }
}
```

## This becomes

```typescript id="jyp9qp"
// signal-id: scenario-atomicity
```

It also constrains the return contract:

```typescript id="ncb5me"
Promise<ScenarioAtomicitySignal>
```

The comment alone does not prove the body emits that signal. The return type, semantic invocation, runtime result, and proof receipt must tie out as well.

---

# What the Type-Only Import Influences

## Projection-authority node

```json id="brgnqn"
{
  "kind": "import",
  "typeOnly": true,
  "from": "../types/scenario-atomicity.type.js",
  "named": [
    {
      "imported": "EvaluateScenarioAtomicityContext"
    },
    {
      "imported": "ScenarioAtomicitySignal"
    }
  ]
}
```

## Projection interpretation

```text id="edugdr"
kind: import
    → create an import declaration

typeOnly: true
    → add the TypeScript type modifier

named
    → create named imports

from
    → use the declared module specifier
```

## This becomes

```typescript id="h00uv4"
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "../types/scenario-atomicity.type.js";
```

These imports must be declared by the projection authority or supplied by another explicit deterministic projection.

The projector must not infer them silently.

---

# What `kind: function` Influences

## Projection-authority node

```json id="5r72o6"
{
  "kind": "function"
}
```

## This becomes

```typescript id="eg7046"
function
```

Combined with the remaining function nodes, it produces a complete function declaration.

---

# What the Function Name Influences

## Projection-authority node

```json id="5xgn87"
{
  "name": "evaluatesScenarioAtomicity"
}
```

## This becomes

```typescript id="61ve40"
evaluatesScenarioAtomicity
```

Within the complete declaration:

```typescript id="w63xr1"
function evaluatesScenarioAtomicity(...)
```

The function name is direct TypeScript authority.

It should normally be traceable to an admitted naming projection from:

```text id="obsv8s"
evaluates-scenario-atomicity
    ↓
evaluatesScenarioAtomicity
```

---

# What `export: true` Influences

## Projection-authority node

```json id="f6s23a"
{
  "export": true
}
```

## This becomes

```typescript id="n4p02c"
export
```

Within the declaration:

```typescript id="thebef"
export function evaluatesScenarioAtomicity(...)
```

This makes the responsibility available through the module boundary.

---

# What `async: true` Influences

## Projection-authority node

```json id="h5s1a1"
{
  "async": true
}
```

## This becomes

```typescript id="0cltmu"
async
```

Within the declaration:

```typescript id="4avdc3"
export async function evaluatesScenarioAtomicity(...)
```

This permits the projected body to await the semantic edge invocation.

---

# What the Parameter Node Influences

## Projection-authority node

```json id="qu45c9"
{
  "parameters": [
    {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    }
  ]
}
```

## This becomes

```typescript id="drxmjd"
context: EvaluateScenarioAtomicityContext
```

Within the function boundary:

```typescript id="yj3ops"
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
)
```

The body accepts one immutable context rather than a growing collection of positional arguments.

---

# What the Return Type Influences

## Projection-authority node

```json id="aak25v"
{
  "returnType": "Promise<ScenarioAtomicitySignal>"
}
```

## This becomes

```typescript id="8xe73q"
: Promise<ScenarioAtomicitySignal>
```

Within the complete function boundary:

```typescript id="1qjb5z"
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

This states that the responsibility returns one scenario-atomicity signal asynchronously.

It does not itself prove the runtime result conforms to that contract.

---

# What `kind: return` Influences

## Projection-authority node

```json id="y7j87p"
{
  "kind": "return"
}
```

## This becomes

```typescript id="ykz0oh"
return
```

The projected body returns the semantic invocation result directly.

---

# What `kind: await` Influences

## Projection-authority node

```json id="jktpmu"
{
  "kind": "await"
}
```

## This becomes

```typescript id="gwtyjx"
await
```

Within the body:

```typescript id="8vpp09"
return await ...
```

---

# What the Call Node Influences

## Projection-authority node

```json id="saszq7"
{
  "kind": "call"
}
```

## This becomes

```typescript id="h0dl5d"
(...)
```

It declares that the projected expression is a function or method invocation.

---

# What the Callee Member Tree Influences

## Projection-authority node

```json id="4hawz4"
{
  "callee": {
    "kind": "member",
    "object": {
      "kind": "member",
      "object": {
        "kind": "identifier",
        "name": "context"
      },
      "property": "edges"
    },
    "property": "invokes"
  }
}
```

## Projection interpretation

```text id="qkby87"
identifier context
    → context

member property edges
    → context.edges

member property invokes
    → context.edges.invokes
```

## This becomes

```typescript id="cl3ezu"
context.edges.invokes
```

This exact member tree is preferable to a shorthand string such as:

```json id="moq4ju"
{
  "callee": "context.edges.invokes"
}
```

because the structured form exposes the actual AST nodes being projected.

---

# What the Semantic Identity Literal Influences

## Projection-authority node

```json id="t75wjm"
{
  "kind": "literal",
  "value": "evaluate-scenario-atomicity"
}
```

## This becomes

```typescript id="y1iv2g"
"evaluate-scenario-atomicity"
```

Within the semantic invocation:

```typescript id="n20h7i"
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

This literal must match the admitted semantic authority ID exactly.

---

# What the Context Argument Influences

## Projection-authority node

```json id="g0k3lg"
{
  "kind": "identifier",
  "name": "context"
}
```

## This becomes

```typescript id="8nt71u"
context
```

As the second invocation argument:

```typescript id="f51flj"
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

---

# What the Complete Return Expression Becomes

## Projection-authority node

```json id="krtsfn"
{
  "kind": "return",
  "expression": {
    "kind": "await",
    "expression": {
      "kind": "call",
      "callee": {
        "kind": "member",
        "object": {
          "kind": "member",
          "object": {
            "kind": "identifier",
            "name": "context"
          },
          "property": "edges"
        },
        "property": "invokes"
      },
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
```

## This becomes

```typescript id="86fyoq"
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

---

# Complete Direct Projection Map

```text id="y44vej"
projectionId
    ↓
projection comment
```

```text id="2qo219"
generatedHeader
    ↓
generated and do-not-edit comments
```

```text id="krngkq"
lineage
    ↓
scenario, obligation, responsibility, and signal comments
```

```text id="6jfn03"
imports
    ↓
TypeScript import declarations
```

```text id="6bl0h3"
function node
    ↓
TypeScript function declaration
```

```text id="e1f1q7"
parameter and return type
    ↓
typed function boundary
```

```text id="39dypg"
return → await → call → member tree
    ↓
semantic invocation statement
```

---

# What Students Should Notice

The body authority contains:

```text id="pcvuuf"
one generated artifact
one immutable context
one primary semantic invocation
one returned signal
```

It does not contain:

```text id="otly46"
feature rewriting
table migration
scenario decomposition
proof aggregation
multiple responsibility dispatch
obligation-count decision rules
GREEN/RED branching
result DTO construction
```

Those meanings either belong in semantic authority or are prohibited entirely.

---

# Projection Boundary Decision

This specific body uses the boundary:

```text id="if0dvy"
evaluate-scenario-atomicity
    returns
ScenarioAtomicitySignal
```

Therefore, the body returns the semantic invocation directly:

```typescript id="87fsxf"
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

The earlier semantic authority listed:

```json id="k13xaa"
{
  "resultProjection": "project-scenario-atomicity-signal"
}
```

That creates a required design decision.

## Option A — Projection occurs behind the semantic edge

```text id="jxf04e"
evaluate-scenario-atomicity
    ↓
evaluates atomicity
    ↓
applies project-scenario-atomicity-signal internally
    ↓
returns ScenarioAtomicitySignal
```

### Projected body

```typescript id="4wty2w"
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

## Option B — Projection remains visible in the body

```text id="7hllcz"
evaluate-scenario-atomicity
    ↓
returns evaluation testimony

project-scenario-atomicity-signal
    ↓
returns ScenarioAtomicitySignal
```

### Projected body

```typescript id="hbas0w"
const evaluation = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

return context.edges.projects(
  "project-scenario-atomicity-signal",
  evaluation
);
```

The authority must select one boundary.

The repository must reject a body whose structure does not match the selected boundary.

For this lesson, **Option A** is selected to preserve the smallest one-invocation scenario body.

The semantic authority should therefore make that explicit:

```json id="jpmk5w"
{
  "resultBoundary": {
    "projectionId": "project-scenario-atomicity-signal",
    "executionLocation": "inside-semantic-edge",
    "edgeReturns": "ScenarioAtomicitySignal"
  }
}
```

---

# Artifact Tag

```json id="yd5hj3"
{
  "artifactKind": "code-body-projection-authority",
  "layer": "language-projection-authority",
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "semanticAuthorityId": "evaluate-scenario-atomicity"
  },
  "projectedFrom": [
    "scenario-implementation-expectation",
    "scenario-atomicity-semantic-authority"
  ],
  "produces": "src/runtime/evaluates-scenario-atomicity.ts",
  "projectionInfluence": {
    "classification": "direct-code-structure",
    "directAstInfluence": true,
    "directCodeInfluence": true
  },
  "proofRole": "code-structure-authority"
}
```

---

# 7. Generated TypeScript

The language projector renders the structured code-body authority.

```typescript id="rj51zx"
// @generated by semantic-kernel/declarative-typescript.v1
// projection-id: project-scenario-atomicity-body
// scenario-id: reject-a-scenario-with-multiple-obligations
// obligation-id: scenario-carries-one-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
// DO NOT EDIT.

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "../types/scenario-atomicity.type.js";

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

# Generated Code Influence Classification

```json id="i8pfgj"
{
  "projectionInfluence": {
    "classification": "executable-projection",
    "isAuthority": false,
    "isGenerated": true,
    "mayBeEdited": false,
    "mustMatchProjectionAuthority": true,
    "mustCarryCurrentReceipt": true
  }
}
```

The generated file is not another source of meaning.

It is an executable projection of admitted structure and semantic identities.

---

# Where Every Generated Section Came From

## Generated marker

### Authority

```json id="ynuqew"
{
  "generatedHeader": {
    "generatorId": "semantic-kernel/declarative-typescript.v1"
  }
}
```

### This becomes

```typescript id="pmqvqh"
// @generated by semantic-kernel/declarative-typescript.v1
```

---

## Projection identity

### Authority

```json id="z1u57p"
{
  "projectionId": "project-scenario-atomicity-body"
}
```

### This becomes

```typescript id="nmv3bb"
// projection-id: project-scenario-atomicity-body
```

---

## Scenario identity

### Authority

```json id="1em27c"
{
  "scenarioId": "reject-a-scenario-with-multiple-obligations"
}
```

### This becomes

```typescript id="iiaovv"
// scenario-id: reject-a-scenario-with-multiple-obligations
```

---

## Obligation identity

### Authority

```json id="zz20yt"
{
  "obligationId": "scenario-carries-one-obligation"
}
```

### This becomes

```typescript id="o73q2e"
// obligation-id: scenario-carries-one-obligation
```

---

## Responsibility identity

### Authority

```json id="0d1g9p"
{
  "responsibilityId": "evaluates-scenario-atomicity"
}
```

### This becomes

```typescript id="3c3o82"
// responsibility-id: evaluates-scenario-atomicity
```

---

## Signal identity

### Authority

```json id="at8izv"
{
  "signalId": "scenario-atomicity"
}
```

### This becomes

```typescript id="sxlr18"
// signal-id: scenario-atomicity
```

---

## Type imports

### Authority

```json id="1akdpm"
{
  "kind": "import",
  "typeOnly": true,
  "from": "../types/scenario-atomicity.type.js",
  "named": [
    {
      "imported": "EvaluateScenarioAtomicityContext"
    },
    {
      "imported": "ScenarioAtomicitySignal"
    }
  ]
}
```

### This becomes

```typescript id="oa5af6"
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "../types/scenario-atomicity.type.js";
```

---

## Function boundary

### Authority

```json id="tt3wpc"
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
  "returnType": "Promise<ScenarioAtomicitySignal>"
}
```

### This becomes

```typescript id="mv6u9h"
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal>
```

---

## Function body

### Authority

```json id="5no8sw"
{
  "kind": "return",
  "expression": {
    "kind": "await",
    "expression": {
      "kind": "call",
      "callee": {
        "kind": "member",
        "object": {
          "kind": "member",
          "object": {
            "kind": "identifier",
            "name": "context"
          },
          "property": "edges"
        },
        "property": "invokes"
      },
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
```

### This becomes

```typescript id="nlv0d3"
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

---

# Why the Generated Tags Matter

The platform agent and student can immediately see:

```text id="33o9zq"
Which scenario owns this body?

Which obligation limits its meaning?

Which responsibility does it execute?

Which signal does it return?

Which projection authority generated it?
```

The tags are navigation testimony.

They do not replace:

```text id="szfl7s"
canonical feature authority
scenario expectation
semantic authority
code-body projection authority
projection receipt
body-conformance proof
```

A manually edited comment does not alter canonical lineage.

The repository must verify the comments by reprojecting the body from authority.

---

# Generated Code Must Not Become Authority

Students must understand:

```text id="7phblv"
Generated TypeScript
    = executable projection

Generated TypeScript
    ≠ canonical authority
```

To change the function name:

```text id="i4bzp4"
Do not edit:
src/runtime/evaluates-scenario-atomicity.ts

Change:
the admitted projection authority

Then:
reproject the body
```

To change the semantic responsibility:

```text id="871h94"
Do not replace the edge literal manually.

Change:
the expectation and semantic authority

Then:
project a new body authority

Then:
regenerate the TypeScript
```

---

# Artifact Tag

```json id="802x4w"
{
  "artifactKind": "generated-code-body",
  "layer": "language-projection",
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity",
    "semanticAuthorityId": "evaluate-scenario-atomicity"
  },
  "projectedFrom": "project-scenario-atomicity-body",
  "producedBy": "semantic-kernel/declarative-typescript.v1",
  "projectionInfluence": {
    "classification": "executable-projection",
    "mayInfluenceAuthority": false,
    "mustConformToAuthority": true
  },
  "proofRole": "executable-projection"
}
```

---

# Projection Receipt Expectation

The generated body should be accompanied by a receipt such as:

```json id="sh3ch5"
{
  "receiptType": "code-projection-receipt.v1",
  "projectionId": "project-scenario-atomicity-body",
  "projectorId": "semantic-kernel/declarative-typescript.v1",
  "targetId": "typescript-esm",
  "authoritySha256": "sha256:...",
  "artifacts": [
    {
      "path": "src/runtime/evaluates-scenario-atomicity.ts",
      "sha256": "sha256:..."
    }
  ],
  "semanticSubject": {
    "scenarioId": "reject-a-scenario-with-multiple-obligations",
    "obligationId": "scenario-carries-one-obligation",
    "responsibilityId": "evaluates-scenario-atomicity",
    "signalId": "scenario-atomicity"
  },
  "disposition": "CODE_BODY_PROJECTED"
}
```

The receipt proves:

```text id="u4id24"
which authority was projected
which projector rendered it
which target profile applied
which artifact was written
which artifact bytes resulted
which semantic subject owns the body
```

---

# Complete Authority-to-Code Tie-Out

| Authority surface             | Generated surface               |
| ----------------------------- | ------------------------------- |
| `projectionId`                | Projection comment              |
| `generatedHeader.generatorId` | Generated-by comment            |
| `lineage.scenarioId`          | Scenario comment                |
| `lineage.obligationId`        | Obligation comment              |
| `lineage.responsibilityId`    | Responsibility comment          |
| `lineage.signalId`            | Signal comment                  |
| `artifact.path`               | Generated file location         |
| `imports[]`                   | TypeScript imports              |
| `function.name`               | Function identifier             |
| `function.export`             | `export` modifier               |
| `function.async`              | `async` modifier                |
| `parameters[]`                | Typed parameter list            |
| `returnType`                  | Return annotation               |
| `return` node                 | Return statement                |
| `await` node                  | Await expression                |
| `callee` member tree          | `context.edges.invokes`         |
| Authority ID literal          | `"evaluate-scenario-atomicity"` |
| Context identifier            | `context` argument              |

Every visible generated element must tie back to declared authority or an explicit target-profile rule.

Nothing application-specific should appear from nowhere.

---

# Student North Star

```text id="kbdk39"
Semantic authority
    declares meaning.

Code-body authority
    declares structure.

The projector
    renders syntax.

Generated code
    executes one admitted responsibility.

The receipt
    proves which authority produced the bytes.
```

The key rule is:

> If a student can point to generated Node code but cannot point back to the exact authority node that produced it, the projection lineage is incomplete.
