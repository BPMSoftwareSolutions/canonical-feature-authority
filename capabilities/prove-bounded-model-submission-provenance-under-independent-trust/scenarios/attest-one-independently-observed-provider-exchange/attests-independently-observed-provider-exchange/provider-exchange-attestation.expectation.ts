// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-provider-exchange-attestation-expectation-from-3f1a26b8a6841d23f352b5e2e0318c78f4802f12e152244bc2b8a7a283dcd445
// authority-sha256: sha256:64c160708143d31ac462c8bc61df136f74795f33a8538f6534f05ad689083c63
// body-sha256: sha256:f4bd8dfff1785cc117ce3858fbd11b71adcc75c002a2784345f67236d183e73b
// projection-signature: ed25519:swAS8OATdb9LIsZ0vJgBOl8e3plrO+wTbossQUKyh9jiOSXs0C1BJs4+0XyeIWcX+VCTIYDSBIasmJDCMFWsDw==
// DO NOT EDIT.
import type {
  ProvesProviderExchangeAttestationExpectationContext,
  ExpectationSignal
} from "./provider-exchange-attestation.type.js";

export async function provesProviderExchangeAttestationExpectation(
  context: ProvesProviderExchangeAttestationExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
