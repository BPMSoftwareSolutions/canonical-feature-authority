// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-attests-admitted-authority-from-685e217fe9464d4f75b1ce9659b729dc42b2c4a9fc62a66fd8a7d3fda4fae876
// authority-sha256: sha256:b5035545af43ff24f7f0d75c255bd996732a9282fdcd9ee6d7002ab3c6b65ce1
// body-sha256: sha256:7a1947e726e44036e236429336393b54093deed9459e1e598732bfdceb4e37be
// projection-signature: ed25519:SHApUoS9CoreKEGvr/RNRULRok5nBcJ9OhdBk/qZaFvdf8+ZyaVfbYaiPeS8WafHx9waQlgc9ceBqKy+kCJZDg==
// DO NOT EDIT.
import type {
  AttestsAdmittedAuthorityContext,
  AdmittedAuthorityAttestationSignal
} from "./admitted-authority-attestation.type.js";

export async function attestsAdmittedAuthority(
  context: AttestsAdmittedAuthorityContext
): Promise<AdmittedAuthorityAttestationSignal> {
  return await context.attest(context.admitted);
}
