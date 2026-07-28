// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-accept-a-scenario-with-one-obligation-evaluates-scenario-atomicity-runs-projection-conformance
// authority-sha256: sha256:33bf4f29f1909c607467913d5696a8a9357da81da107271b50401b26917f8907
// body-sha256: sha256:8b7511b46ec1768b4302cf6b64319db1dbcd2dd8d88c118e36f14d26a70f0fc5
// projection-signature: ed25519:q3cKL27B4LkNu6B5moqUAMt8uzc7BJx55j4P+RJfhMaRL5jgJq6b6HzzANxvf0LAAvfVFu8XfhI6doEM8eDdBg==
// DO NOT EDIT.
import { observesGeneratedBody } from "../../../../../conformance/observes-generated-body.js";
import { parsesGeneratedBodyAst } from "../../../../../conformance/parses-generated-body-ast.js";
import { comparesExpectedAndObservedTopology } from "../../../../../conformance/compares-expected-and-observed-topology.js";
import { detectsForbiddenBodyStructures } from "../../../../../conformance/detects-forbidden-body-structures.js";
import { evaluatesCapabilityConformance } from "../../../../../conformance/evaluates-capability-conformance.js";

export async function runsProjectionConformance() {
  const observedBody = await observesGeneratedBody(
    "capabilities/validate-feature-scenario-atomicity/scenarios/accept-a-scenario-with-one-obligation/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
  );

  const observedAst = await parsesGeneratedBodyAst(observedBody);

  await detectsForbiddenBodyStructures(observedAst);

  const topologyComparison = await comparesExpectedAndObservedTopology({
    expectationPath: "../expects-scenario-acceptance.expectation.json",
    bodyExpectationPath: "./expects-evaluates-scenario-atomicity-body.json",
    fileBodyAuthorityPath: "./declares-evaluates-scenario-atomicity-body.json",
    astAuthorityPath: "./projects-typescript-ast.json",
    observedAst
  });

  return evaluatesCapabilityConformance(topologyComparison);
}
