# **Canonical Feature Authority: The Student Experience**

SIR SID, this repository should not feel like a collection of lectures or starter code.

It should feel like a **controlled software foundry** that students progressively bring to life.

The students’ capstone achievement is not merely:

> “We generated a TypeScript function.”

It is:

> **We established a repository in which every future code body must originate from admitted canonical intent, pass through declared semantic authority, be projected mechanically, and produce proof of its lineage.**

The repository itself becomes the final teaching artifact.

---

# 1. The End-State Students Are Building Toward

At the end of the course, the repository should operate like this:

```text
Human intent
    ↓
Canonical Feature Authority
    ↓
Projected Gherkin
    ↓
Scenario atomicity evaluation
    ↓
Obligation and responsibility authority
    ↓
Semantic authority
    ↓
Code-body projection authority
    ↓
Generated AST
    ↓
Generated code body
    ↓
Observed execution
    ↓
Conformance receipt
```

Every artifact represents the same semantic subject:

```text
Feature
    ↓
Scenario
    ↓
Obligation
    ↓
Responsibility
    ↓
Semantic operation
    ↓
Projected body
    ↓
Observed signal
```

The governing invariant is:

```text
The identity may be projected.

The identity may not drift.
```

This reflects the engineering doctrine that canonical intent and semantic authority are the source of truth while code remains a disposable execution projection. 

---

# 2. The Repository’s Educational Story

The repository should tell one continuous story:

```text
At first:
The student manually follows the process.

Then:
The student describes the process canonically.

Then:
The student projects the process into a code body.

Then:
That code body begins governing the next iteration.

Finally:
The repository governs the complete process by which
all future bodies may enter the repository.
```

That is the fractal.

The first body is manually shepherded through the entire authority chain.

That first body then becomes the smallest operational governor of the second body.

The second body expands governance.

Each subsequent body reduces the amount of manual trust required.

---

# 3. The Most Important First Question

The class must identify:

> **What is the smallest executable governance capability that provides the greatest immediate protection against unauthorized code authoring?**

I would make the first operational capability:

# **Reject an unregistered code body**

Its responsibility is not yet to generate every possible code body.

Its first responsibility is much smaller:

```text
Given one repository code body

Determine whether that body has
an admitted canonical lineage.

GREEN:
The body has a complete admitted lineage.

RED:
The body has no complete admitted lineage.
```

Conceptually:

```text
Observed code body
        +
Canonical Feature Authority registry
        ↓
Lineage lookup
        ↓
Expected projection identity
        ↓
Observed body identity
        ↓
GREEN or RED
```

This is the highest-value minimal governor because it immediately establishes:

```text
No orphan bodies.
No unexplained bodies.
No manually invented application bodies.
No body without a feature, scenario, obligation, and responsibility.
```

It does not have to understand every line of source code yet.

It only has to establish:

> **This body belongs to an admitted canonical chain—or it does not belong in this repository.**

---

# 4. Why This Should Come Before Full Code Generation

A full generator is more impressive, but it is not the first governance primitive.

Before the repository can safely generate code, it should know:

```text
Which bodies are authorized to exist?
Which authority projected them?
Which semantic subject do they represent?
Which exact bytes were produced?
```

So the first progression should be:

```text
1. Register the expected body.
2. Project the expected body identity.
3. Observe the physical body.
4. Compare expected and observed identity.
5. Reject bodies with no admitted lineage.
```

Then the next progression becomes:

```text
6. Verify the body bytes.
7. Verify the body structure.
8. Verify the AST shape.
9. Regenerate the body.
10. Replace manual authorship with deterministic projection.
```

The repository begins by governing **admission**, then grows toward governing **construction**.

That is the same Step-Zero principle established for SIR: before governing source bodies deeply, first prove the contract through which those bodies may be governed. 

---

# 5. The First Semantic Transistor

The first student-built transistor can be:

```text
Signal:
code-body-has-canonical-lineage

Question:
Does this observed body resolve to exactly one admitted
feature → scenario → obligation → responsibility chain?

GREEN:
Exactly one current authority chain owns the body.

RED:
No chain, multiple chains, or an incomplete chain owns the body.
```

That is wonderfully teachable because it demonstrates the entire philosophy without requiring the entire architecture.

```text
One obligation:
Every admitted body must have one canonical lineage.

One responsibility:
Resolve the canonical lineage of one observed body.

One signal:
GREEN or RED.
```

This is exactly the transistor-level discipline: one declared obligation, one focused responsibility, and one authoritative signal. 

---

# 6. The Minimal First Feature

```gherkin
Feature: Govern code-body admission through canonical lineage

  Scenario: Admit a body with one current canonical lineage
    Given an observed repository code body
    When its canonical lineage is resolved
    Then exactly one admitted responsibility owns the body
    And the lineage signal is GREEN

  Scenario: Reject a body without canonical lineage
    Given an observed repository code body
    When its canonical lineage is resolved
    Then no admitted responsibility owns the body
    And the lineage signal is RED

  Scenario: Reject a body with ambiguous canonical lineage
    Given an observed repository code body
    When its canonical lineage is resolved
    Then multiple admitted responsibilities claim the body
    And the lineage signal is RED
```

Notice what this first feature does **not** attempt:

```text
It does not parse all implementation logic.
It does not derive Gherkin from code.
It does not generate multiple languages.
It does not evaluate runtime behavior.
It does not prove complete semantic conformance.
```

It establishes the first irreversible rule:

> **A physical code body cannot exist legitimately without canonical ownership.**

---

# 7. The First Canonical Authority Record

The students might author a record conceptually like this:

```json
{
  "featureId": "govern-code-body-admission",
  "scenarioId": "admit-a-body-with-one-current-canonical-lineage",
  "obligationId": "every-body-has-one-canonical-lineage",
  "responsibilityId": "resolves-code-body-canonical-lineage",
  "body": {
    "bodyId": "resolves-code-body-canonical-lineage",
    "relativePath": "src/resolves-code-body-canonical-lineage.ts",
    "kind": "scenario-responsibility",
    "language": "typescript"
  },
  "projection": {
    "projectionId": "project-resolves-code-body-canonical-lineage",
    "target": "typescript-esm"
  }
}
```

At first, that authority may be authored manually.

But it becomes the declared source from which the body identity, file location, AST expectation, and eventually the full source bytes are projected.

---

# 8. The Student Journey

## Phase 1 — Experience Projection

The first lab should be extremely small.

Students receive a declarative projection and generate one body.

```text
Canonical projection
        ↓
Compiler
        ↓
Generated file
        ↓
Projection receipt
```

They learn:

```text
Authority is durable.
Code is generated.
Generated code is replaceable.
The receipt explains where it came from.
```

This progressive-disclosure model is already the strongest teaching posture: let students see one simple projection work before introducing the full authority system. 

---

## Phase 2 — Establish Feature Authority

Students manually create:

```text
Feature identity
Scenario identity
Obligation identity
Responsibility identity
Expected signal identity
```

They should see an identity chain:

```text
govern-code-body-admission
    ↓
admit-a-body-with-one-current-canonical-lineage
    ↓
every-body-has-one-canonical-lineage
    ↓
resolves-code-body-canonical-lineage
    ↓
code-body-has-canonical-lineage
```

The repository now knows **why** the body exists.

---

## Phase 3 — Analyze Scenario Atomicity

Students run the design analysis before semantic authoring.

They ask:

```text
How many obligations are present?
How many workers are hidden?
How many signals are required?
Is this one transistor or already a circuit?
```

They produce:

```text
Scenario verdict:
ATOMIC

Obligation count:
1

Responsibility count:
1

Expected signal count:
1
```

This prevents dense scenarios from contaminating every downstream artifact.

The student analysis discipline should happen before semantic-authority authoring or code projection. 

---

## Phase 4 — Author the Semantic Transistor

Students describe:

```text
Authorized input
Observed facts
Evaluation authority
GREEN disposition
RED disposition
Evidence requirements
Blocking posture
```

Conceptually:

```json
{
  "signalId": "code-body-has-canonical-lineage",
  "obligationId": "every-body-has-one-canonical-lineage",
  "evaluation": "exactly-one-lineage-resolves",
  "greenDisposition": "BODY_LINEAGE_RESOLVED",
  "redDispositions": [
    "BODY_LINEAGE_NOT_FOUND",
    "BODY_LINEAGE_AMBIGUOUS",
    "BODY_LINEAGE_INCOMPLETE"
  ],
  "blocking": true
}
```

Now the repository contains the meaning of the evaluation before it contains the executable implementation.

---

## Phase 5 — Declare the Execution Model

The first execution model can remain tiny:

```text
1. Observe the code-body identity.
2. Retrieve canonical body registrations.
3. Resolve matching lineage.
4. Evaluate lineage cardinality.
5. Project the lineage signal.
```

No code body decides what `0`, `1`, or `2+` matches mean.

The semantic decision authority defines:

```text
0 matches      → BODY_LINEAGE_NOT_FOUND
1 match        → BODY_LINEAGE_RESOLVED
2+ matches     → BODY_LINEAGE_AMBIGUOUS
```

---

## Phase 6 — Project the First Body

The projected body should be intentionally boring:

```typescript
export async function resolvesCodeBodyCanonicalLineage(
  context: ResolveCodeBodyCanonicalLineageContext
): Promise<CodeBodyLineageResult> {
  const authority = await context.edges.invokes(
    "resolve-code-body-lineage-authority",
    context
  );

  const execution = await context.edges.invokes(
    "execute-resolved-code-body-lineage",
    authority
  );

  return context.edges.projects(
    "project-code-body-lineage-result",
    execution
  );
}
```

The students should immediately see:

```text
The body contains no lineage policy.
The body contains no branching.
The body constructs no domain DTO.
The body does not choose a failure disposition.
```

Meaning expands in authority.

Execution collapses in code.

---

## Phase 7 — Generate and Inspect the AST

This is where the course becomes visually powerful.

Students see:

```text
Canonical responsibility
        ↓
Code-body projection authority
        ↓
Language projection
        ↓
AST
        ↓
Source text
```

The AST is not merely an implementation detail.

It becomes a governance surface.

The body’s structural expectations can be represented as:

```text
Function declaration
├── name: resolvesCodeBodyCanonicalLineage
├── parameters: one immutable context
├── statement 1: invokes semantic edge
├── statement 2: invokes semantic edge
├── return: projects semantic result
└── forbidden:
    ├── if
    ├── switch
    ├── loops
    ├── direct SDK calls
    └── DTO object construction
```

Now the students can understand how the repository will later reject manually contaminated code.

---

# 9. The First Self-Governing Moment

This should be a major classroom milestone.

The students generate the first body.

Then they manually add an unauthorized file:

```text
src/does-something-random.ts
```

The new governor scans the admitted body registry.

```text
Observed:
src/resolves-code-body-canonical-lineage.ts

Expected:
src/resolves-code-body-canonical-lineage.ts

Result:
GREEN
```

Then:

```text
Observed:
src/does-something-random.ts

Expected:
No registered body

Result:
RED — BODY_LINEAGE_NOT_FOUND
```

That is the moment the repository becomes operationally alive.

The first body has begun enforcing the conditions under which another body may belong.

---

# 10. The Fractal Expansion

From there, every new governance body strengthens the same loop.

## Body 1 — Resolve canonical lineage

```text
Question:
Does this body belong to one canonical responsibility?
```

## Body 2 — Verify expected body location

```text
Question:
Does the body exist at its projected path?
```

## Body 3 — Verify projected body digest

```text
Question:
Do the body bytes match the current projection receipt?
```

## Body 4 — Verify body AST conformance

```text
Question:
Does the body contain only allowed structural forms?
```

## Body 5 — Verify scenario atomicity

```text
Question:
Does each scenario carry one coherent obligation?
```

## Body 6 — Verify responsibility coverage

```text
Question:
Does each obligation resolve to one responsibility?
```

## Body 7 — Verify semantic authority coverage

```text
Question:
Does each responsibility have the required semantic authority?
```

## Body 8 — Project code bodies

```text
Question:
Can the admitted responsibility be projected into the target language?
```

## Body 9 — Verify expected versus observed topology

```text
Question:
Do the declared and physical repository topologies conform?
```

## Body 10 — Produce the complete conformance receipt

```text
Question:
Can the repository truthfully claim canonical feature closure?
```

That is the fractal:

```text
Each body governs one obligation.

Together, the bodies govern the process
that creates and governs future bodies.
```

---

# 11. The Repository Structure Students Experience

```text
canonical-feature-authority/
├── README.md
│
├── course/
│   ├── 01-experience-projection/
│   ├── 02-establish-feature-authority/
│   ├── 03-analyze-scenario-intent/
│   ├── 04-design-semantic-transistors/
│   ├── 05-author-semantic-authority/
│   ├── 06-project-code-bodies/
│   ├── 07-inspect-generated-ast/
│   ├── 08-establish-body-lineage/
│   ├── 09-enforce-conformance/
│   └── 10-complete-the-fractal/
│
├── canonical-authority/
│   ├── features/
│   ├── scenarios/
│   ├── obligations/
│   ├── responsibilities/
│   ├── signals/
│   └── body-lineage/
│
├── semantic-authority/
│   ├── observations/
│   ├── decisions/
│   ├── projections/
│   ├── execution-models/
│   ├── iterations/
│   ├── failure-policies/
│   ├── ports/
│   └── proof-requirements/
│
├── projection-authority/
│   ├── ast/
│   ├── typescript/
│   └── body-registry/
│
├── generated/
│   └── typescript/
│
├── governance/
│   ├── body-admission/
│   ├── body-lineage/
│   ├── ast-conformance/
│   ├── projection-freshness/
│   └── topology-conformance/
│
├── proof/
│   ├── fixtures/
│   ├── receipts/
│   ├── negative-controls/
│   └── conformance/
│
└── tools/
    └── student-cli/
```

The most important repository distinction is:

```text
canonical-authority/
    = what should exist and why

semantic-authority/
    = what the behavior means

projection-authority/
    = how the body is structurally rendered

generated/
    = disposable physical output

governance/
    = admission and conformance enforcement

proof/
    = testimony of what was observed
```

---

# 12. The Classroom Interface

Students should not spend the semester manually wiring references.

The repository should expose a guided command:

```bash
cfa begin \
  --feature govern-code-body-admission \
  --scenario admit-a-body-with-one-current-canonical-lineage
```

Then:

```text
Canonical Feature Authority

Feature:
  govern-code-body-admission

Scenario:
  admit-a-body-with-one-current-canonical-lineage

Current design posture:
  INTENT_CAPTURED

Required next action:
  analyze scenario obligations
```

Next:

```bash
cfa analyze scenario \
  admit-a-body-with-one-current-canonical-lineage
```

Output:

```text
Scenario analysis

Given-family clauses: 1
When-family clauses: 1
Then-family clauses: 2

Obligation candidates: 1
Responsibility candidates: 1
Signal candidates: 1

Verdict:
ATOMIC
```

Then:

```bash
cfa scaffold authority \
  --scenario admit-a-body-with-one-current-canonical-lineage
```

Then:

```bash
cfa project body \
  --responsibility resolves-code-body-canonical-lineage \
  --target typescript
```

Then:

```bash
cfa prove body \
  src/resolves-code-body-canonical-lineage.ts
```

Finally:

```text
Canonical body conformance

Canonical lineage         GREEN
Projection identity       GREEN
Expected path             GREEN
Expected digest           GREEN
AST shape                 GREEN
Forbidden constructs      GREEN

Disposition:
BODY_CONFORMS
```

---

# 13. The Capstone Experience

The final capstone should be adversarial.

Students must demonstrate:

```text
1. Add an orphan body.
   Expected: RED

2. Manually edit a generated body.
   Expected: RED

3. Add an if statement to a collapsed body.
   Expected: RED

4. Create a scenario with multiple obligations.
   Expected: RED

5. Remove an obligation-to-responsibility edge.
   Expected: RED

6. Change semantic authority without reprojection.
   Expected: RED

7. Restore all authority and regenerate.
   Expected: GREEN
```

The capstone is not complete because the happy path works.

It is complete when the repository detects contamination.

---

# 14. The Final Repository Claim

At course completion, students should be able to make this bounded claim:

```text
Every admitted application code body in this repository:

1. resolves to one canonical feature authority chain;
2. is projected from current code-body projection authority;
3. conforms to its expected AST structure;
4. contains no independently authored domain meaning;
5. matches the current projection receipt;
6. and is rejected when any required lineage or proof is absent.
```

That is a real source-integrity statement.

Not:

> “We tried to follow the architecture.”

But:

> **The repository detects when the architecture has not been followed.**

---

# 15. The Deepest Lesson

The students begin by believing they are learning how to generate code without writing code.

By the end, they understand that code generation was never the deepest lesson.

The real lesson is:

```text
Software does not begin with code.

Software begins with an authoritative claim
about what should be true.

That claim is decomposed into obligations.

Each obligation becomes a responsibility.

Each responsibility emits one deterministic signal.

Those signals form a governed circuit.

The circuit projects executable bodies.

The repository proves whether the bodies remain faithful.
```

## The course north star

```text
Canonical intent establishes identity.

Semantic authority establishes meaning.

Projection authority establishes form.

Execution establishes behavior.

Proof establishes truth.

Governance preserves the chain.
```

And the first practical rule the students make operational is beautifully small:

> **No code body enters without canonical lineage.**
