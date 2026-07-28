// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-multiple-obligations-evaluates-scenario-atomicity-runs-projection-conformance
// authority-sha256: sha256:0b843bdf19649ccdf3d3b465c4de3ce47db21aaf77963392a8c12b865f33f175
// body-sha256: sha256:1f4cda2608676721f8b895676cdafb420e5d8be1575c1baba17120b357d0901d
// projection-signature: ed25519:jH2euUHREQRcwBluiUpz34Kij03RXmZIMLENKi+X7n9g9MdRyhBQvsGxXi/kDVvLL5EnXF00tMzk6142o7rOBw==
// DO NOT EDIT.
import { observesGeneratedBody } from "../../../../../conformance/observes-generated-body.js";
import { parsesGeneratedBodyAst } from "../../../../../conformance/parses-generated-body-ast.js";
import { comparesExpectedAndObservedTopology } from "../../../../../conformance/compares-expected-and-observed-topology.js";
import { detectsForbiddenBodyStructures } from "../../../../../conformance/detects-forbidden-body-structures.js";
import { evaluatesCapabilityConformance } from "../../../../../conformance/evaluates-capability-conformance.js";

export async function runsProjectionConformance() {
  const observedBody = await observesGeneratedBody(
    "capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
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
