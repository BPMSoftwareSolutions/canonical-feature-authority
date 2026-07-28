// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-provider-exchange-attestation-type-from-894a84e5e7be7ef39155d0cf600f6a49bbd42c729864211cab0e7ee9898275d0
// authority-sha256: sha256:0d888b28ae62febf6b6f5d81c1aae09a3964b81b0c4fa638343cceda241b2a1d
// body-sha256: sha256:c2b1e42caca690a5cc79b6fc407021d428cad6af4f6ab5f9f0a9e9fac5c0875b
// projection-signature: ed25519:UJl2gImSQ6R75Ml+CoVHxZKUuBHuPdsQR9WZDTE5DDPhH4IjlHGiaiiGujO6NEMOO1Wax6L8GCFhYtrKcK20DQ==
// DO NOT EDIT.
export type IndependentProviderExchange = unknown;
export type IndependentProviderExchangeAttestation = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface AttestsIndependentlyObservedProviderExchangeContext {
  readonly exchange: IndependentProviderExchange;
  readonly attest: (
    input: IndependentProviderExchange
  ) => Promise<IndependentProviderExchangeAttestation>;
}

export interface ProvesProviderExchangeAttestationExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsProviderExchangeAttestationConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
