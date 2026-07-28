# The Intent-to-Execution Spine

```text
Human need
    ↓
User story
    ↓
Canonical feature
    ↓
Scenario intent analysis
    ↓
Obligation authority
    ↓
Scenario expectation
    ↓
Responsibility authority
    ↓
Signal authority
    ↓
Responsibility-to-edge binding
    ↓
Semantic observation authority
    ↓
Semantic evaluation authority
    ↓
Semantic disposition authority
    ↓
Semantic result projection
    ↓
Responsibility body expectation
    ↓
File-body authority
    ↓
TypeScript projection authority
    ↓
AST projection
    ↓
Generated code body
    ↓
Executable expectation (test)
    ↓
Operational conformance authority
    ↓
Executable conformance component
```

Twenty-one layers, one identity. Every layer answers exactly one question and hands a narrower question to the layer below it:

```text
Layer 1-2   What problem, for whom?
Layer 3     What observable capability?
Layer 4     Is this scenario atomic?
Layer 5     What truth must hold?
Layer 6     What observable result must this scenario produce?
Layer 7     Who owns producing that result?
Layer 8     What signal communicates the evaluation?
Layer 9     Which semantic edge embodies the responsibility?
Layer 10-13 What facts, what evaluation, what disposition, what projected signal?
Layer 14    What implementation topology must exist?
Layer 15    What file, what path, what public operation?
Layer 16-17 What TypeScript structure, what exact AST?
Layer 18    What executes?
Layer 19    Does the operational component satisfy the scenario?
Layer 20-21 Does the actual projection remain faithful to the admitted chain?
```

See [Canonical Feature Authority File-System Spine.md](../Canonical%20Feature%20Authority%20File-System%20Spine.md) in the repository root for the full worked example of every layer, using the scenario `reject-a-scenario-with-multiple-obligations`.
