# Projected Code-Body Shape Specification

This document defines the implementation target for every projected executable
body in this course repository. It describes what the TypeScript must look like
*after* the semantic layer, body authority, AST authority, and deterministic
projector are complete.

This is an acceptance target, not a claim that every current reference or stub
already conforms. A current body that contains branching, domain construction,
hard-coded identities, or locally invented failure behavior identifies an
authority gap that must be repaired upstream before that body is reprojected.

## The governing sentence

> A projected code body may execute an admitted semantic path, but it may not
> decide what that path means or construct the domain result of that path.

The body is executable plumbing. It is not a second semantic layer.

## The strict target

Every executable body in this repository must be:

- projector-generated and safe to regenerate;
- cryptographically bound to its exact AST authority and exact emitted bytes;
- linear, with one entry and one exit;
- supplied with an immutable, already-resolved context;
- limited to invoking pre-bound semantic operations in their declared order;
- free of domain decisions, branching, recovery policy, transformation logic,
  DTO construction, and hard-coded semantic identities;
- incapable of calling an LLM, SDK, transport, file system, environment, clock,
  random source, or other external mechanism unless that capability arrives as
  an explicitly admitted context port;
- incapable of changing canonical, semantic, projection, or trust authority.

The strongest and preferred shape is one returned semantic invocation:

```typescript
export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.evaluate(context.input);
}
```

The body does not choose an edge by a string literal. `context.evaluate` is the
pre-bound edge projected from semantic-edge authority. The body does not build
the signal. The semantic operation returns it.

## What must already exist before a body can be projected

A legal body is possible only when upstream authority has eliminated every
implementation-time choice.

| Concern | Owning authority | What the body receives |
|---|---|---|
| Input identity and shape | scenario and semantic input authority | `context.input` |
| Operation sequence | semantic execution authority | pre-bound context operations |
| Conditions and classifications | semantic decision tables | no condition to evaluate locally |
| RED, GREEN, and UNRESOLVED meaning | signal and disposition authority | a resolved signal |
| Output shape and field mapping | semantic result-projection authority | an already-constructed result |
| Error classification | semantic failure authority | a declared failure signal or runtime propagation |
| Retry, timeout, and substitution | execution-policy authority | an already-governed invocation port |
| Side-effect permission | responsibility and edge authority | only the admitted capability port |
| File, export, and parameter shape | file-body authority | the projected TypeScript shell |
| Exact syntax | TypeScript AST authority | deterministic source bytes |

If the projector cannot emit a branch-free, construction-free body from these
authorities, it must stop RED. It must not fill the gap with a plausible
implementation.

## Canonical executable profiles

### Profile A: single semantic delegation

This is the default responsibility-body shape.

```typescript
export async function resolvesStudentGreeting(
  context: ResolvesStudentGreetingContext
): Promise<StudentGreetingSignal> {
  return await context.resolve(context.input);
}
```

Allowed topology:

```text
FunctionDeclaration
└── ReturnStatement
    └── AwaitExpression
        └── CallExpression
            ├── pre-bound context operation
            └── existing context value
```

The call target and input member are projected from authority. They are not
selected by the body author.

### Profile B: declared linear semantic pipeline

Use this only when semantic execution authority explicitly declares multiple
ordered stages and each stage returns the complete input of the next stage.

```typescript
export async function evaluatesScenario(
  context: EvaluatesScenarioContext
): Promise<ScenarioEvaluationSignal> {
  const observed = await context.observe(context.input);
  const evaluated = await context.evaluate(observed);
  return await context.project(evaluated);
}
```

This body has sequence but no decisionality:

```text
input
  → observe
  → evaluate
  → project
  → return
```

Each local is immutable. No stage reshapes, filters, merges, defaults, or
interprets the previous stage. The sequence itself must be declared in semantic
execution authority before it appears in AST authority.

If a stage needs several values, semantic authority must expose one admitted
input value for that stage. The TypeScript body must not assemble an object or
array to call it.

### Profile C: capability or CLI entry delegation

An entry point resolves no domain policy and reads no global state directly.

```typescript
export async function runsCapability(
  context: RunsCapabilityContext
): Promise<CapabilityRunSignal> {
  return await context.run(context.input);
}
```

Argument parsing, environment lookup, provider resolution, credential access,
formatting, exit-code selection, and output transport belong behind admitted
ports and declarative policy. The projected entry body merely delegates.

### Profile D: semantic-runtime delegation

A course runtime body does not reimplement a decision table in TypeScript. It
passes admitted semantic authority to a separately governed interpreter:

```typescript
export async function executesSemanticAuthority(
  context: ExecutesSemanticAuthorityContext
): Promise<SemanticSignal> {
  return await context.interpret(context.authority);
}
```

The interpreter may be sophisticated, but the course body does not know its
algorithm. The context binding identifies the admitted interpreter; the
semantic authority supplies the rules and dispositions.

The same boundary applies to course-facing projection adapters:

```typescript
export async function projectsTypescriptBody(
  context: ProjectsTypescriptBodyContext
): Promise<ProjectionSignal> {
  return await context.project(context.authority);
}
```

The deterministic projector owns parsing, AST traversal, emission, hashing, and
signing. This projected course body owns none of those mechanics.

### Profile E: conformance delegation

Conformance bodies observe and compare through admitted operations. They do not
repair either side.

```typescript
export async function evaluatesConformance(
  context: EvaluatesConformanceContext
): Promise<ConformanceSignal> {
  const observed = await context.observe(context.subject);
  return await context.compare(context.expectation, observed);
}
```

The comparison rules, forbidden structures, and disposition mapping live in
conformance semantic authority. The body does not contain a local `if` that
returns RED or GREEN.

### Profile F: projected executable expectation

A projected test body exercises an already-declared fixture and expectation.
It does not invent test data or expected DTOs.

```typescript
export async function provesScenarioExpectation(
  context: ProvesScenarioExpectationContext
): Promise<void> {
  const observed = await context.execute(context.fixture);
  await context.assertConforms(context.expectation, observed);
}
```

Fixtures and expected signals are data authority. Assertion behavior is a
pre-bound test-runtime port. A test body must not recreate the expected object
with an object literal.

### Profile G: declaration-only projection

Type surfaces may contain interfaces, type aliases, and imported type
references, but no runtime initializers or executable decisions.

```typescript
export interface EvaluatesScenarioContext {
  readonly input: ScenarioInput;
  readonly evaluate: SemanticOperation<
    ScenarioInput,
    ScenarioAtomicitySignal
  >;
}
```

This is not DTO construction. It is a projected type contract. Runtime values
still come from admitted resolvers.

Configuration and fixtures that would require executable object or array
literals stay in JSON authority. They are not converted into TypeScript merely
to make them look like code.

## Expected shapes by repository area

| Area | Projected executable shape | Meaning that must remain outside the body |
|---|---|---|
| `capabilities/` | single semantic delegation | scenario rules, dispositions, signal construction |
| `runtime/` | semantic-interpreter delegation | rule evaluation, operation dispatch, result construction |
| `projection/` | projector-port delegation | parsing, AST derivation, source emission, signing |
| `conformance/` | observe then compare | comparison rules, forbidden topology, RED/GREEN mapping |
| `cli/` | entry-port delegation | argument parsing, configuration resolution, output and exit policy |
| projected expectations/tests | execute then assert | fixtures, expected values, assertion semantics |
| `*.type.ts` | declaration-only | runtime construction and defaults |
| configuration and fixtures | remain JSON authority | all governed data values |

No root folder receives an exemption. A file being called "runtime,"
"projector," "CLI," or "test" does not authorize it to become a pocket of
hand-authored decisionality.

## One authority-to-body example

The target is easiest to understand as one chain. Semantic execution authority
first declares the bound operation and data flow:

```json
{
  "semanticExecutionType": "single-bound-operation.v1",
  "operationId": "evaluate-scenario-atomicity",
  "binding": {
    "contextMember": "evaluate"
  },
  "input": {
    "fromContextMember": "input"
  },
  "result": {
    "returnOperationResult": true
  }
}
```

The responsibility body authority then constrains physical and structural
shape without restating the evaluation rule:

```json
{
  "bodyId": "evaluates-scenario-atomicity-body",
  "relativePath": "evaluates-scenario-atomicity.ts",
  "exportName": "evaluatesScenarioAtomicity",
  "contextType": "EvaluateScenarioAtomicityContext",
  "resultType": "ScenarioAtomicitySignal",
  "structuralProfile": "single-semantic-delegation.v1",
  "semanticExecutionAuthority": "evaluate-scenario-atomicity",
  "forbidden": [
    "branching",
    "construction",
    "semantic-literals",
    "direct-mechanism-access"
  ]
}
```

AST authority is then a lossless projection of those admitted constraints. At a
readable topology level, before the lossless token stream is considered, it
must say only:

```text
SourceFile
├── projector attestation header
├── type-only import
└── exported async FunctionDeclaration
    ├── immutable context parameter
    └── ReturnStatement
        └── AwaitExpression
            └── CallExpression
                ├── context.evaluate
                └── context.input
```

The deterministic projector may then emit:

```typescript
// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: <trusted Ed25519 key id>
// projection-id: project-evaluates-scenario-atomicity
// authority-sha256: <exact AST authority hash>
// body-sha256: <exact executable body hash>
// projection-signature: ed25519:<signature>
// DO NOT EDIT.

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.evaluate(context.input);
}
```

Notice what is absent: no obligation counting, no classification check, no
disposition literal, no signal object, no edge ID string, no exception policy,
and no mechanism import. Those absences are evidence that authority is doing
its job.

## Forbidden executable syntax

The AST conformance gate must reject these nodes or equivalent hidden forms in
an executable projected body:

```text
IfStatement
SwitchStatement
CaseClause / DefaultClause
ConditionalExpression
ForStatement / ForInStatement / ForOfStatement
WhileStatement / DoStatement
TryStatement / CatchClause / FinallyBlock
ThrowStatement
BreakStatement / ContinueStatement
ObjectLiteralExpression
ArrayLiteralExpression
NewExpression
AssignmentExpression
Prefix or postfix mutation
DeleteExpression
YieldExpression
FunctionExpression or ArrowFunction callback inside the body
SpreadAssignment / SpreadElement
ElementAccessExpression used for dynamic dispatch
OptionalChain used as fallback control flow
NullishCoalesceExpression
Logical AND/OR used as control flow
```

The conformance rule is semantic, not cosmetic. Replacing an `if` with a
ternary, optional chain, boolean expression, lookup object, callback, or
`filter`/`map`/`reduce` pipeline does not make the decision legal.

## Forbidden behavior even when the syntax looks linear

Some one-line bodies still smuggle meaning. These are forbidden:

```typescript
// Hard-coded semantic identity and dynamic dispatch.
return await context.edges.invokes("evaluate-scenario-atomicity", context);

// DTO construction.
return { signalId: "scenario-atomicity", disposition: "GREEN" };

// Construction hidden behind a helper.
return createsGreenSignal(context.input);

// A domain decision hidden in a library call.
return context.input.obligations.length === 1
  ? context.green
  : context.red;

// A branch hidden as collection processing.
return context.input.obligations.filter(isIndependent).length;

// Undeclared environmental authority.
return await fetch(process.env.SERVICE_URL!);

// Locally invented recovery policy.
return await context.execute(context.input).catch(() => context.fallback);
```

Linearity is necessary, but it is not sufficient. Every invoked operation must
be a pre-bound port whose identity, authority, inputs, outputs, and policy are
traceable upstream.

## No DTO construction

An executable body must not:

- create an object or array that represents a domain input, signal, result,
  command, event, request, response, error, or receipt;
- call a constructor, factory, builder, serializer, mapper, or formatter that
  manufactures such a value;
- spread, merge, clone, default, or rename fields;
- attach identity, disposition, provenance, or status literals;
- translate between provider, semantic, and public DTO shapes.

Those operations are meaning-bearing projections. They belong in semantic
result-projection authority and execute behind an admitted semantic port.

Passing an existing value is legal:

```typescript
return await context.evaluate(context.input);
```

Assembling a new value is not:

```typescript
return await context.evaluate({
  scenarioId: context.scenarioId,
  obligations: context.obligations
});
```

If the semantic operation needs that input, the context resolver must supply it
as one admitted value.

## No local error policy

Projected bodies contain no `try`, `catch`, `finally`, `throw`, fallback,
default, or retry loop.

There are two legal failure models:

1. The semantic runtime returns a declared signal whose disposition represents
   the failure.
2. The admitted runtime port propagates an infrastructure failure according to
   separately declared execution policy.

The body does not translate one into the other. It does not decide whether an
error is transient, whether to retry, which provider to substitute, what
message to show, or which exit code to return.

## No hard-coded semantic identity

Business and governance identifiers do not appear as executable string or
number literals inside a body:

```text
featureId
scenarioId
obligationId
responsibilityId
signalId
semanticOperationId
providerAuthorityId
model name
disposition
status
error code
file path
endpoint
timeout
retry count
```

Lineage belongs in signed authority and projection metadata. Runtime bindings
arrive as typed, pre-resolved context members. This avoids a conveyor,
projector, or LLM quietly steering execution by inserting a convenient literal.

Module specifiers in generated imports and the signed projection header are
structural projection data, not runtime semantic choices. They remain governed
by file-body and AST authority.

## Imports and dependencies

An executable responsibility body may import types. It should not import a
concrete runtime, SDK, provider adapter, persistence client, parser, renderer,
clock, or environment reader.

Preferred:

```typescript
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";
```

Forbidden:

```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";
import { readFile } from "node:fs/promises";
import { evaluatesRule } from "../../../runtime/evaluates-rule.js";
```

Concrete mechanisms are resolved outside the responsibility body and exposed
only through the admitted context contract.

## Provenance carried by the projected file

Every projected TypeScript file begins with the projector-owned attestation:

```typescript
// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: <trusted Ed25519 key id>
// projection-id: <projection authority identity>
// authority-sha256: <exact AST authority hash>
// body-sha256: <exact executable body hash>
// projection-signature: ed25519:<signature>
// DO NOT EDIT.
```

The TypeScript projection is its own projection receipt. No detached projection
receipt is needed.

An LLM does not write this header and does not sign the TypeScript body as the
projector. If an LLM contributes an upstream semantic or AST authority, that
artifact carries its own model invocation testimony and admission signature.
The AST authority then links to that admitted upstream hash, and the projector
signature binds the emitted body to the AST authority. The identities must not
be collapsed into one ambiguous "generated by AI" claim.

```text
signed semantic authority
  → signed AST authority
  → projector-signed TypeScript body
```

Altering any body byte breaks the body hash or projector signature. Altering
the AST authority breaks the authority hash. Substituting an LLM-written body
cannot produce a valid projector signature without possession of the trusted
projector private key.

## Structural conformance profiles

Each file-body authority must select exactly one profile:

| Profile | Maximum executable shape | Construction | Branching |
|---|---|---:|---:|
| `single-semantic-delegation.v1` | one returned awaited call | forbidden | forbidden |
| `linear-semantic-pipeline.v1` | immutable locals plus ordered calls and one return | forbidden | forbidden |
| `entry-delegation.v1` | one returned admitted entry-port call | forbidden | forbidden |
| `semantic-runtime-delegation.v1` | one returned interpreter-port call | forbidden | forbidden |
| `projection-port-delegation.v1` | one returned projector-port call | forbidden | forbidden |
| `conformance-delegation.v1` | observe, compare, return | forbidden | forbidden |
| `expectation-execution.v1` | execute fixture, assert admitted expectation | forbidden | forbidden |
| `declaration-only.v1` | type declarations; no executable body | not applicable | not applicable |

A profile is an allowlist, not merely a list of banned nodes. An AST containing
an unrecognized statement, expression, call target, import, literal, or
dependency turns RED.

## What belongs outside this repository's projected bodies

A general-purpose engine may internally require branching to parse JSON,
validate schemas, perform cryptography, invoke a provider, or traverse an AST.
That does not authorize those mechanics to leak into course responsibility
bodies.

Such machinery belongs behind a separately governed, provider-neutral tool
boundary—for example, the generic LLM connector or deterministic TypeScript
projector. This repository supplies those tools with declarative authority. It
does not copy their algorithms into course-specific bodies, and those tools do
not hard-code this course's feature, scenario, obligation, or signal identities.

The boundary is:

```text
this repository
  owns course meaning, semantic execution authority, body contracts, and AST authority

generic connector
  owns provider-neutral request execution and testimony

deterministic projector
  owns AST-to-TypeScript embodiment and projector signatures
```

## Student review checklist

Before accepting a projected body, a student must be able to answer **yes** to
all of these:

1. Can I delete this file and reproduce it exactly from admitted authority?
2. Does the body carry a valid projector key, authority hash, body hash, and
   signature?
3. Is its executable path linear from entry to return?
4. Are all call targets pre-bound context ports?
5. Does it contain no domain or governance literals?
6. Does it contain no condition, branch, loop, callback decision, fallback, or
   exception policy?
7. Does it construct no object, array, DTO, signal, error, event, request,
   response, or receipt?
8. Does it avoid direct SDK, provider, transport, file-system, environment, and
   global-runtime access?
9. Can every operation, input, output, and sequence be traced to semantic
   authority?
10. Would an authority gap stop projection RED instead of being filled with
    guessed code?

Any **no** means the work returns upstream. The student changes authority, not
the generated TypeScript file.

## Implementation sequence from this specification

The implementation should proceed in this order:

1. Inventory every TypeScript body and assign one structural profile.
2. Identify each current branch, construction, literal, direct dependency, and
   recovery behavior.
3. Move the meaning behind each item into explicit semantic, result-projection,
   failure, execution-policy, or binding authority.
4. Project immutable context contracts with pre-bound operations and
   already-resolved inputs.
5. Strengthen file-body and AST schemas to express profile allowlists.
6. Make the AST projector reject any unrecognized executable topology.
7. Project the TypeScript bodies only after semantic and AST authority are
   complete.
8. Verify every body by reconstructing it from AST authority and checking its
   embedded projector signature.
9. Execute projected expectations and conformance paths against the actual
   projected bodies.
10. Publish a signed navigational index linking each semantic authority, AST
    authority, and projector-signed body—without introducing detached
    projection receipts.

This ordering keeps the next implementation honest: first establish what a
legal body is, then make the authorities rich enough that the legal body is the
only possible projection.

The conveyor-specific application of this grammar is defined separately in
[Projected Conveyor Implementation Specification](specifies-projected-conveyor-implementation.md).
