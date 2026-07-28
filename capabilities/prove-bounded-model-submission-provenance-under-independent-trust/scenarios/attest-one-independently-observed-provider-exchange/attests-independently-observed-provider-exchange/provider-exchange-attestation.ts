// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-provider-exchange-attestation-from-fb3c6c4022c0c53d3f0b0cb888e80f7265b73828633b5075d4f4cf43f725a273
// authority-sha256: sha256:a916d2f89ec457a9efa9993cecdd01bd91c26416367c374e90ce985b504c0356
// body-sha256: sha256:c265655dfd69f9ffba3964559247a7d137ea0d5f33932c6d721abbffb84c0379
// projection-signature: ed25519:AAWKOK7MFCI3vgK/0zkNORuerWSZf81IiIgvV9bNQLPwl4F0cFBFiCniZf/CfVHZu4d2t+jVWTSaYRDrH9LsDg==
// DO NOT EDIT.
import type {
  AttestsIndependentlyObservedProviderExchangeContext,
  IndependentProviderExchangeAttestation
} from "./provider-exchange-attestation.type.js";

export async function attestsIndependentlyObservedProviderExchange(
  context: AttestsIndependentlyObservedProviderExchangeContext
): Promise<IndependentProviderExchangeAttestation> {
  return await context.attest(context.exchange);
}
