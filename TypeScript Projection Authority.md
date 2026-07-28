# Layer 16 — TypeScript Projection Authority

```text
projects-typescript-body.json
```

This file answers:

```text
How must the language-neutral body authority
be represented in TypeScript?
```

Example:

```json
{
  "projectionType": "declarative-typescript-projection.v1",
  "projectionId": "project-evaluates-scenario-atomicity-body",
  "targetId": "typescript-esm",
  "artifact": {
    "path": "evaluates-scenario-atomicity.ts",
    "imports": [
      {
        "kind": "import",
        "from": "./scenario-atomicity.type.js",
        "typeOnly": true,
        "named": [
          "EvaluateScenarioAtomicityContext",
          "ScenarioAtomicitySignal"
        ]
      }
    ],
    "declaration": {
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
          "kind": "return-semantic-invocation",
          "edge": "evaluate-scenario-atomicity",
          "input": "context"
        }
      ]
    }
  }
}
```

The TypeScript projection authority owns representation.

It does not own business meaning.

It receives an already-admitted responsibility-body authority and declares how that authority must appear in the TypeScript language.

```text
Responsibility authority
    says who owns the work.

Semantic authority
    says what the work means.

File-body authority
    says what body must exist.

TypeScript projection authority
    says how that body is rendered in TypeScript.
```

The underlying documentation makes this separation explicit: the compiler reads the structured TypeScript body authority, while the surrounding feature, responsibility, and semantic layers establish intent, ownership, meaning, and proof.

---

# What the TypeScript Projection Authority Actually Becomes

```text
TypeScript projection authority
    ├── becomes an output file path
    ├── becomes native imports
    ├── becomes a function declaration
    ├── becomes native naming
    ├── becomes parameter syntax
    ├── becomes return-type syntax
    ├── becomes ordered statements
    ├── becomes semantic edge invocations
    ├── becomes generated-source markers
    └── becomes replayable projector input
```

It is consumed directly by the TypeScript projector.

Unlike the feature, obligation, or semantic authority, this layer is allowed to contain:

```text
TypeScript file extension
TypeScript import syntax
TypeScript function casing
TypeScript type names
TypeScript async syntax
TypeScript statement shapes
```

That language contamination is correct here because this artifact exists **below the projection boundary**.

---

## 1. It becomes the physical TypeScript artifact path

This field:

```json
{
  "path": "evaluates-scenario-atomicity.ts"
}
```

becomes the emitted file:

```text
evaluates-scenario-atomicity.ts
```

The projector uses the declared path.

It does not invent:

```text
validate.ts
atomicity-checker.ts
scenario-validator.ts
helpers/atomicity.ts
```

The file path remains connected to the admitted responsibility:

```text
Responsibility:
evaluates-scenario-atomicity

        ↓ TypeScript file-name projection

Artifact:
evaluates-scenario-atomicity.ts
```

The projector must also enforce that the path is safe, relative, inside the admitted workspace, and consistent with file-body authority.

---

## 2. It becomes a native TypeScript import

This declaration:

```json
{
  "kind": "import",
  "from": "./scenario-atomicity.type.js",
  "typeOnly": true,
  "named": [
    "EvaluateScenarioAtomicityContext",
    "ScenarioAtomicitySignal"
  ]
}
```

becomes:

```typescript
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";
```

The fields have deterministic syntax effects:

| Projection field | TypeScript effect               |
| ---------------- | ------------------------------- |
| `kind: "import"` | Emits an import declaration     |
| `typeOnly: true` | Emits `import type`             |
| `from`           | Supplies the module specifier   |
| `named`          | Supplies named imports          |
| Import ordering  | Determines stable emitted order |

The source projection walkthrough demonstrates this exact field-to-syntax relationship: path, `typeOnly`, function name, async marker, types, statements, and semantic identities are all controlled by structured authority rather than invented by generated code.

---

## 3. It becomes the language-specific operation name

This field:

```json
{
  "name": "evaluatesScenarioAtomicity"
}
```

becomes:

```typescript
evaluatesScenarioAtomicity
```

That name is a TypeScript representation of the canonical responsibility:

```text
Canonical responsibility:
evaluates-scenario-atomicity

TypeScript operation:
evaluatesScenarioAtomicity
```

The transformation must be declared or governed by a pinned naming profile.

The projector may not silently rename the operation to:

```text
validateScenarioAtomicity
checkScenario
runAtomicityValidation
processScenario
```

Those names would introduce new identities.

---

## 4. It becomes the exported async boundary

These fields:

```json
{
  "export": true,
  "async": true
}
```

become:

```typescript
export async function
```

The projection authority therefore determines whether the body:

```text
is publicly visible,
is asynchronous,
and can be invoked through the expected runtime boundary.
```

If file-body authority requires an exported async function, a projection that emits a private synchronous function is structurally nonconforming.

---

## 5. It becomes the parameter boundary

This projection:

```json
{
  "parameters": [
    {
      "name": "context",
      "type": "EvaluateScenarioAtomicityContext"
    }
  ]
}
```

becomes:

```typescript
context: EvaluateScenarioAtomicityContext
```

The body receives one admitted context.

It does not independently acquire:

```text
Filesystem clients
Registry writers
Environment variables
SDK clients
Feature rewriters
Global configuration
Mutable singleton state
```

The context type constrains what the body may reach.

This reinforces the collapsed-body discipline:

```text
One immutable context
    ↓
Declared semantic invocation
    ↓
Returned semantic result
```

---

## 6. It becomes the return boundary

This field:

```json
{
  "returnType": "Promise<ScenarioAtomicitySignal>"
}
```

becomes:

```typescript
Promise<ScenarioAtomicitySignal>
```

That preserves the signal authority in native syntax.

The body must return:

```text
scenario-atomicity
```

It must not drift into returning:

```text
A rewritten feature
A remediation plan
A validation report
An audit DTO
A Boolean with no semantic identity
```

The return type is therefore not merely compiler decoration.

It is the native representation of the responsibility’s admitted output boundary.

---

## 7. It becomes a semantic invocation statement

This projection node:

```json
{
  "kind": "return-semantic-invocation",
  "edge": "evaluate-scenario-atomicity",
  "input": "context"
}
```

becomes:

```typescript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

This is the most important transformation.

The projection authority controls:

```text
The fact that the statement returns
The fact that the invocation is awaited
The invocation mechanism
The semantic edge identity
The argument identity
The statement order
```

It does not allow the code generator to add a decision between the invocation and the return.

---

## 8. It becomes the complete generated body

The entire projection authority becomes:

```typescript
// @generated
// projection-id: project-evaluates-scenario-atomicity-body

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
```

Every visible part has a source:

```text
File path
    ← artifact.path

Import
    ← artifact.imports

Function name
    ← declaration.name

Export marker
    ← declaration.export

Async marker
    ← declaration.async

Parameter
    ← declaration.parameters

Return type
    ← declaration.returnType

Edge invocation
    ← declaration.body

Semantic identity
    ← edge

Input value
    ← input
```

The generated code contains no independently authored meaning.

The source lab demonstrates the same pattern with a real scanner body: structured projection authority controls the path, imports, function declaration, local bindings, semantic calls, and return statement; the compiler deterministically renders those nodes into TypeScript.

---

# What the Projection Authority Must Not Contain

The TypeScript projection authority should not contain business decisions such as:

```json
{
  "if": {
    "obligationCount": {
      "greaterThan": 1
    }
  },
  "then": "SCENARIO_NOT_ATOMIC"
}
```

That belongs in semantic decision authority.

It should not contain DTO mappings such as:

```json
{
  "object": {
    "signalId": "scenario-atomicity",
    "disposition": {
      "from": "decision.result"
    }
  }
}
```

unless the node is itself a declared invocation of a semantic projection authority.

It should not contain hidden retry, fallback, classification, remediation, or mutation.

The engineering discipline requires that meaning expand in semantic authority while the language body collapses into ordered edge invocation and return.

---

# The Projection Authority as a Compiler Input

The TypeScript projector performs something conceptually equivalent to:

```text
Validate projection authority
    ↓
Resolve target profile
    ↓
Create native AST nodes
    ↓
Validate artifact path
    ↓
Render deterministic TypeScript
    ↓
Write generated file
    ↓
Hash authority and artifact
```

This is a mechanical compiler path.

The projector does not:

```text
Interpret the user story
Reanalyze the Gherkin
Reclassify the obligation
Choose the responsibility
Invent the semantic edge
Select the disposition
Construct domain meaning
```

Those decisions have already been made above the projection boundary.

---

# Exact Projection Influence

| Projection field     | Generated TypeScript influence                       |
| -------------------- | ---------------------------------------------------- |
| `projectionType`     | Selects the declarative TypeScript compiler contract |
| `projectionId`       | Becomes generation lineage and marker                |
| `targetId`           | Selects TypeScript module/runtime conventions        |
| `artifact.path`      | Determines the emitted file                          |
| `imports[].from`     | Determines module paths                              |
| `imports[].typeOnly` | Determines `import type`                             |
| `imports[].named`    | Determines native named imports                      |
| `declaration.kind`   | Determines function/class/type node kind             |
| `declaration.name`   | Determines native operation name                     |
| `declaration.export` | Determines visibility                                |
| `declaration.async`  | Determines async syntax                              |
| `parameters`         | Determines parameter names and types                 |
| `returnType`         | Determines native return annotation                  |
| `body[].kind`        | Determines statement/node shape                      |
| `body[].edge`        | Determines exact semantic edge identity              |
| `body[].input`       | Determines the invocation argument                   |
| Statement order      | Determines execution sequence                        |

---

# The Deeper Insight

The TypeScript projection authority performs three projections simultaneously.

```text
1. Representation projection
   How does the body appear in TypeScript?

2. Boundary projection
   What file, function, parameter, and return boundary exist?

3. Execution projection
   What exact semantic edges are invoked and in what order?
```

The complete transformation is:

```text
Language-neutral body authority
“Invoke evaluate-scenario-atomicity and return its signal.”

        ↓

TypeScript projection authority
“Emit an exported async TypeScript function
with one context parameter and one semantic invocation.”

        ↓

Native AST
FunctionDeclaration
ReturnStatement
AwaitExpression
CallExpression

        ↓

Generated TypeScript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);
```

> **The TypeScript projection authority is not the implementation’s meaning. It is the deterministic native construction plan for an already-resolved meaning.**

---

# Layer 17 — AST Projection

```text
projects-typescript-ast.json
```

This file answers:

```text
What exact syntax tree is permitted?
```

Expected shape:

```text
Function declaration
├── exported
├── async
├── name: evaluatesScenarioAtomicity
├── parameter
│   └── context: EvaluateScenarioAtomicityContext
├── return type
│   └── Promise<ScenarioAtomicitySignal>
└── body
    └── return await context.edges.invokes(
            "evaluate-scenario-atomicity",
            context
        )
```

Forbidden nodes:

```text
IfStatement
SwitchStatement
ForStatement
WhileStatement
DoWhileStatement
ConditionalExpression
Direct SDK invocation
Domain object literal
DTO construction
Authority mutation
```

The AST projection is where the TypeScript representation becomes structurally inspectable.

It answers two related questions:

```text
What nodes must exist?

What nodes must never exist?
```

---

# Important Refinement

There are two legitimate ways to represent this layer.

## Option A — Explicit projected AST authority

The projector produces a complete expected AST document:

```text
projects-typescript-ast.json
```

This can be consumed by:

```text
The TypeScript emitter
The AST conformance evaluator
The projection replay checker
The mutation harness
```

## Option B — AST derived from `projects-typescript-body.json`

The structured body projection is compiled directly into a native AST in memory.

The repository may then persist only:

```text
projects-typescript-body.json
```

and reproduce the AST whenever needed.

This is simpler when the body authority already describes exact syntax nodes.

The source lab is explicit that the current compiler reads the structured TypeScript body authority directly and does **not** derive that body automatically from the higher-level execution model.

Therefore, the clean rule is:

```text
Do not persist a second AST file
unless it is operationally consumed.

If the AST can be deterministically reproduced
from projects-typescript-body.json,
the reproduced AST may be the proof surface.
```

This keeps us aligned with the no-documentation-sprawl discipline.

---

# What the AST Projection Actually Becomes

```text
AST projection
    ├── becomes native compiler nodes
    ├── becomes source emission
    ├── becomes structural conformance rules
    ├── becomes forbidden-node detection
    ├── becomes invocation-cardinality evaluation
    ├── becomes exact lineage inspection
    ├── becomes mutation-test input
    └── becomes replayable structural proof
```

The AST is not just an intermediate compiler object.

It is the exact operational shape against which generated bodies are inspected.

---

## 1. It becomes a `FunctionDeclaration`

The expected root node is:

```text
FunctionDeclaration
```

with:

```text
name:
evaluatesScenarioAtomicity

export:
true

async:
true
```

Conceptually:

```json
{
  "kind": "FunctionDeclaration",
  "name": "evaluatesScenarioAtomicity",
  "modifiers": [
    "export",
    "async"
  ]
}
```

This permits one declared function boundary.

It rejects:

```text
ClassDeclaration
ArrowFunction hidden inside an object
Default export of an anonymous function
Multiple exported functions
Nested responsibility functions
```

unless a separate profile explicitly admits them.

---

## 2. It becomes one parameter node

The expected parameter is:

```text
context: EvaluateScenarioAtomicityContext
```

Conceptually:

```json
{
  "kind": "Parameter",
  "name": "context",
  "type": "EvaluateScenarioAtomicityContext",
  "optional": false,
  "rest": false
}
```

The AST evaluator can prove:

```text
Exactly one parameter exists
The parameter is named context
The parameter has the expected type
The parameter is not optional
The parameter is not mutable through reassignment
```

Additional parameters would be findings:

```text
Unexpected repository client
Unexpected SDK client
Unexpected policy object
Unexpected mutable state
```

---

## 3. It becomes one return-type node

Expected:

```text
Promise<ScenarioAtomicitySignal>
```

Conceptually:

```json
{
  "kind": "TypeReference",
  "name": "Promise",
  "typeArguments": [
    {
      "kind": "TypeReference",
      "name": "ScenarioAtomicitySignal"
    }
  ]
}
```

The AST can prove that the generated body does not return:

```text
unknown
any
boolean
void
A composite DTO
An unrelated signal type
```

The source architecture emphasizes that native language support maps a language-neutral profile into native AST structures while normalized conformance findings remain stable across languages.

---

## 4. It becomes one `ReturnStatement`

Expected body:

```text
ReturnStatement
```

The AST profile can enforce:

```text
Statement count:
1

Statement kind:
ReturnStatement
```

That means the body cannot silently acquire:

```text
Local business decisions
Mutable accumulators
Logging policy
Retries
Fallback
Remediation
Multiple independent edge calls
```

A richer admitted body profile may permit local bindings before the return, but those bindings must be declared in the projection authority.

---

## 5. It becomes an `AwaitExpression`

Expected:

```text
await context.edges.invokes(...)
```

Conceptually:

```json
{
  "kind": "AwaitExpression",
  "expression": {
    "kind": "CallExpression"
  }
}
```

The AST can prove that asynchronous semantic execution is awaited rather than accidentally returned as an unresolved or incorrectly wrapped value.

---

## 6. It becomes an exact `CallExpression`

Expected call:

```typescript
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

Conceptually:

```json
{
  "kind": "CallExpression",
  "callee": {
    "kind": "PropertyAccessExpression",
    "object": {
      "kind": "PropertyAccessExpression",
      "object": {
        "kind": "Identifier",
        "name": "context"
      },
      "property": "edges"
    },
    "property": "invokes"
  },
  "arguments": [
    {
      "kind": "StringLiteral",
      "value": "evaluate-scenario-atomicity"
    },
    {
      "kind": "Identifier",
      "name": "context"
    }
  ]
}
```

This lets the evaluator prove:

```text
Invocation mechanism is context.edges.invokes

Semantic edge identity is exact

Input is the declared context

Invocation count is exactly one

No undeclared call surrounds or replaces it
```

---

# The Complete Expected AST

Conceptually:

```json
{
  "kind": "SourceFile",
  "statements": [
    {
      "kind": "ImportDeclaration",
      "typeOnly": true,
      "moduleSpecifier": "./scenario-atomicity.type.js",
      "namedImports": [
        "EvaluateScenarioAtomicityContext",
        "ScenarioAtomicitySignal"
      ]
    },
    {
      "kind": "FunctionDeclaration",
      "name": "evaluatesScenarioAtomicity",
      "export": true,
      "async": true,
      "parameters": [
        {
          "kind": "Parameter",
          "name": "context",
          "type": "EvaluateScenarioAtomicityContext"
        }
      ],
      "returnType": {
        "kind": "PromiseType",
        "typeArgument": "ScenarioAtomicitySignal"
      },
      "body": [
        {
          "kind": "ReturnStatement",
          "expression": {
            "kind": "AwaitExpression",
            "expression": {
              "kind": "CallExpression",
              "callee": "context.edges.invokes",
              "arguments": [
                {
                  "kind": "StringLiteral",
                  "value": "evaluate-scenario-atomicity"
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
  ]
}
```

This is not independently authored business logic.

It is the exact structural realization of the TypeScript projection authority.

---

# Required AST Constraints

The AST projection should establish positive requirements.

```json
{
  "required": {
    "sourceFileCount": 1,
    "functionCount": 1,
    "exportedFunctionCount": 1,
    "asyncFunctionCount": 1,
    "parameterCount": 1,
    "returnStatementCount": 1,
    "semanticInvocationCount": 1
  }
}
```

It should also establish exact identities:

```json
{
  "expected": {
    "functionName": "evaluatesScenarioAtomicity",
    "parameterName": "context",
    "parameterType": "EvaluateScenarioAtomicityContext",
    "returnType": "Promise<ScenarioAtomicitySignal>",
    "semanticEdge": "evaluate-scenario-atomicity",
    "invocationMechanism": "context.edges.invokes"
  }
}
```

Positive constraints are important.

A body is not conformant merely because it contains no `if` statement.

It must also contain the required execution path.

---

# Forbidden AST Nodes

The discipline identifies these as forbidden in collapsed capability bodies:

```text
IfStatement
SwitchStatement
ForStatement
ForOfStatement
ForInStatement
WhileStatement
DoWhileStatement
ConditionalExpression
```

These restrictions prevent the body from authoring domain decisions or iteration policy.

The standard also identifies broader prohibited operations:

```text
DTO object construction
Business exception classification
Provider selection
Retry selection
Direct file-system access
Direct SDK access
Hidden fallback
Array mutation
Undeclared semantic calls
```

The four-layer discipline defines the expected body as one immutable context, declared semantic edge invocation, optional projection, and return, while placing decisions, DTO shaping, iteration, and failure meaning in semantic authority.

---

## Forbidden branching

Reject:

```typescript
if (context.scenario.obligations.length === 1) {
  return createsAtomicSignal();
}

return createsNonAtomicSignal();
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
nodeKind: IfStatement
```

Reason:

```text
Scenario atomicity meaning has been authored
inside the TypeScript body.
```

---

## Forbidden iteration

Reject:

```typescript
for (const clause of context.scenario.clauses) {
  classifyClause(clause);
}
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
nodeKind: ForOfStatement
```

Reason:

```text
Iteration, classification, ordering,
and aggregation belong to semantic execution authority.
```

---

## Forbidden DTO construction

Reject:

```typescript
return {
  signalId: "scenario-atomicity",
  disposition: "SCENARIO_NOT_ATOMIC",
  blocking: true
};
```

Finding:

```text
BODY_PROFILE_FORBIDDEN_CONSTRUCTION
constructionKind: domain-object-literal
```

Reason:

```text
The signal projection belongs to semantic projection authority.
```

The engineering standard explicitly rejects authored DTO stitching and requires semantic projections to own domain object construction.

---

## Forbidden direct SDK invocation

Reject:

```typescript
return scenarioAnalyzer.evaluate(context.scenario);
```

Finding:

```text
BODY_PROFILE_UNDECLARED_EFFECT
callTarget: scenarioAnalyzer.evaluate
```

Reason:

```text
Concrete implementations must be seated behind admitted
semantic edges or ports.
```

---

## Forbidden authority mutation

Reject:

```typescript
context.authority.obligationCount = 1;
```

Finding:

```text
BODY_PROFILE_AUTHORITY_MUTATION
```

Reason:

```text
A generated body executes admitted authority.
It does not rewrite authority to make execution pass.
```

---

# Structural Conformance Evaluation

The AST conformance operation compares:

```text
Expected AST
    ↓
Observed generated AST
    ↓
Normalized structural findings
```

Example comparison:

```text
Expected function count:
1

Observed function count:
1

Expected operation:
evaluatesScenarioAtomicity

Observed operation:
evaluatesScenarioAtomicity

Expected semantic edge:
evaluate-scenario-atomicity

Observed semantic edge:
evaluate-scenario-atomicity

Expected invocation count:
1

Observed invocation count:
1

Forbidden branch nodes:
0

Observed branch nodes:
0

Forbidden DTO constructions:
0

Observed DTO constructions:
0
```

Possible findings:

```text
BODY_PROFILE_FUNCTION_MISSING

BODY_PROFILE_FUNCTION_CARDINALITY_INVALID

BODY_PROFILE_OPERATION_NAME_MISMATCH

BODY_PROFILE_PARAMETER_MISMATCH

BODY_PROFILE_RETURN_TYPE_MISMATCH

BODY_PROFILE_REQUIRED_EDGE_MISSING

BODY_PROFILE_EDGE_CARDINALITY_INVALID

BODY_PROFILE_UNDECLARED_EDGE

BODY_PROFILE_EXECUTION_SEQUENCE_INVALID

BODY_PROFILE_FORBIDDEN_STRUCTURE

BODY_PROFILE_FORBIDDEN_CONSTRUCTION

BODY_PROFILE_UNDECLARED_EFFECT

BODY_PROFILE_AUTHORITY_MUTATION
```

These findings remain normalized even though the native AST implementation is TypeScript-specific.

---

# The AST as an Operational Proof Surface

This is the critical connection to our earlier discussion.

The AST is not passive documentation.

It remains operational because it is used to:

```text
Emit the source body
Inspect the generated source
Compare expected and observed structure
Reject unauthorized nodes
Verify edge identities
Verify invocation cardinality
Detect manual body edits
Drive negative mutations
Reproduce the source deterministically
```

Therefore:

```text
Expected AST structure
    +
Observed parsed AST
    +
Deterministic comparison
    =
Structural conformance
```

No separate prose document needs to claim that the body has no branching.

The AST evaluator can determine it directly.

---

# Negative Mutation Proof

The AST governance layer should prove that its controls actually detect contamination.

Start with the admitted body:

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

Mutation 1:

```typescript
if (!context.scenario) {
  throw new Error("Missing scenario");
}
```

Expected finding:

```text
BODY_PROFILE_FORBIDDEN_STRUCTURE
IfStatement
```

Mutation 2:

```typescript
return {
  signalId: "scenario-atomicity",
  disposition: "SCENARIO_NOT_ATOMIC"
};
```

Expected finding:

```text
BODY_PROFILE_FORBIDDEN_CONSTRUCTION
domain-object-literal
```

Mutation 3:

```typescript
return await context.edges.invokes(
  "rewrite-scenario",
  context
);
```

Expected finding:

```text
BODY_PROFILE_UNDECLARED_EDGE
rewrite-scenario
```

Mutation 4:

```typescript
const first = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

const second = await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

return second;
```

Expected finding:

```text
BODY_PROFILE_EDGE_CARDINALITY_INVALID
expected: 1
observed: 2
```

This turns AST constraints into adversarially proven governance.

---

# Exact AST Influence

| AST constraint                 | Operational effect                          |
| ------------------------------ | ------------------------------------------- |
| Required `FunctionDeclaration` | Ensures one admitted operation exists       |
| Required export modifier       | Ensures the runtime entrypoint is visible   |
| Required async modifier        | Preserves the declared execution boundary   |
| Exact function name            | Preserves responsibility identity           |
| Exact parameter count          | Prevents undeclared dependencies            |
| Exact parameter type           | Preserves context contract                  |
| Exact return type              | Preserves signal contract                   |
| Required edge invocation       | Ensures semantic authority is actually used |
| Edge cardinality               | Prevents duplicate or missing execution     |
| Statement ordering             | Preserves declared execution sequence       |
| Forbidden branching nodes      | Prevents hidden decisions                   |
| Forbidden loop nodes           | Prevents hidden iteration policy            |
| Forbidden object construction  | Prevents DTO stitching                      |
| Forbidden direct calls         | Prevents bypassing semantic authority       |
| Forbidden mutation             | Prevents authority rewriting                |
| Complexity ceiling             | Prevents body accretion                     |

---

# The Deeper Insight

The AST layer has four jobs:

```text
1. Construction
   Provide the exact native syntax structure to emit.

2. Inspection
   Reveal the real structure of the generated body.

3. Conformance
   Compare permitted structure with observed structure.

4. Contamination detection
   Reject decisions, loops, DTO construction,
   direct effects, and undeclared calls.
```

The complete transformation is:

```text
TypeScript projection authority
“Emit one exported async function
that invokes one semantic edge.”

        ↓

Expected native AST
FunctionDeclaration
└── ReturnStatement
    └── AwaitExpression
        └── CallExpression

        ↓

Generated TypeScript
return await context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
);

        ↓

Observed AST
Parsed directly from generated source

        ↓

Conformance
Required nodes present
Forbidden nodes absent
Edge identity exact
Cardinality exact
```

> **The AST projection is not another description of the code. It is the executable structural law used to construct, inspect, and reject unauthorized TypeScript embodiment.**

---

# How Layers 16 and 17 Work Together

These layers are related, but they answer different questions.

```text
TypeScript projection authority:
How should the body be represented?

AST projection:
What exact native structure is permitted?
```

The projection authority says:

```text
Create:
evaluates-scenario-atomicity.ts

Import:
EvaluateScenarioAtomicityContext
ScenarioAtomicitySignal

Declare:
export async function evaluatesScenarioAtomicity

Accept:
context

Return:
context.edges.invokes(
  "evaluate-scenario-atomicity",
  context
)
```

The AST layer says:

```text
Permit:
one exported async FunctionDeclaration
one typed parameter
one ReturnStatement
one AwaitExpression
one declared CallExpression

Reject:
branches
loops
DTO construction
direct SDK calls
authority mutation
undeclared edges
extra statements
```

Together:

```text
TypeScript Projection Authority
    ↓ constructs

Expected Native AST
    ↓ emits

Generated TypeScript
    ↓ parses into

Observed Native AST
    ↓ compares against

Structural Conformance
```

---

# The Final Operational Rule

```text
Semantic authority owns meaning.

Body authority owns the legal execution boundary.

TypeScript projection authority owns native representation.

The native AST owns structural enforceability.

The generated source owns execution.

AST conformance proves that the source did not acquire
unauthorized meaning below the projection boundary.
```

And the anti-sprawl rule remains:

```text
Persist projects-typescript-ast.json
only when it is operationally consumed.

Otherwise:

projects-typescript-body.json
    ↓ deterministic compiler
in-memory expected AST
    ↓ source emission
generated TypeScript
    ↓ native parser
observed AST
    ↓ conformance comparison
```

The proof is the operational projection and comparison path—not another passive document.
