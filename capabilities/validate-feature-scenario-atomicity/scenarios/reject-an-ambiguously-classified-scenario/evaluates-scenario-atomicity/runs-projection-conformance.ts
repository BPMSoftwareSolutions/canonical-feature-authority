// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-an-ambiguously-classified-scenario-evaluates-scenario-atomicity-runs-projection-conformance
// authority-sha256: sha256:83560915d132371a752f88d968c0549743d01c71ebbbfed068fd6da9685d1d4c
// body-sha256: sha256:ddb7dd320340107c6485085562fca60a65ea66f6c8f3b99f4496875a6d5a87ab
// projection-signature: ed25519:kNC+Z54ZtrFzPK1ejDDXtD+Ko9aX6pu6/QcY6qVVykavzJuQj8q39vdSveroDD1JlbyjMbn4Xm0hICsXG5W7BQ==
// DO NOT EDIT.
import { observesGeneratedBody } from "../../../../../conformance/observes-generated-body.js";
import { parsesGeneratedBodyAst } from "../../../../../conformance/parses-generated-body-ast.js";
import { comparesExpectedAndObservedTopology } from "../../../../../conformance/compares-expected-and-observed-topology.js";
import { detectsForbiddenBodyStructures } from "../../../../../conformance/detects-forbidden-body-structures.js";
import { evaluatesCapabilityConformance } from "../../../../../conformance/evaluates-capability-conformance.js";

export async function runsProjectionConformance() {
  const observedBody = await observesGeneratedBody(
    "capabilities/validate-feature-scenario-atomicity/scenarios/reject-an-ambiguously-classified-scenario/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
  );

  const observedAst = await parsesGeneratedBodyAst(observedBody);

  await detectsForbiddenBodyStructures(observedAst);

  const topologyComparison = await comparesExpectedAndObservedTopology({
    expectationPath: "../expects-scenario-rejection.expectation.json",
    bodyExpectationPath: "./expects-evaluates-scenario-atomicity-body.json",
    fileBodyAuthorityPath: "./declares-evaluates-scenario-atomicity-body.json",
    astAuthorityPath: "./projects-typescript-ast.json",
    observedAst
  });

  return evaluatesCapabilityConformance(topologyComparison);
}
