// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-provider-exchange-attestation-conformance-from-9e29c91528c66755f30387372b50a87a9dbe7232b3bc6cdeb23424122bbd0382
// authority-sha256: sha256:632d6a6585b01fd729473e6bde94069634b1f9d2022ae07947db9288f2b60b85
// body-sha256: sha256:ce088ae8f4c7265fa27538567023078586ce98d9bc870cd6668a77b99be2e1a4
// projection-signature: ed25519:Yjh8ccS4i2FpJ6ifxSEuEkg/0C1O1rGM0gHTrOfFtraukpI1PRjyOhCxsyueUqP+4mG0vk2S+OeUmhtIw2XVAw==
// DO NOT EDIT.
import type {
  RunsProviderExchangeAttestationConformanceContext,
  ProjectionConformanceSignal
} from "./provider-exchange-attestation.type.js";

export async function runsProviderExchangeAttestationConformance(
  context: RunsProviderExchangeAttestationConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
