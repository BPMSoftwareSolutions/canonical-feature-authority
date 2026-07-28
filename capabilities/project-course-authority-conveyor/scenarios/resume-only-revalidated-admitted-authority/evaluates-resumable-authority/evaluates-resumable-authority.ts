// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-resumable-authority-from-d87b298a22135ebfe1375cb52026e24b935f654da2a1d8fbb17144be6fd26f6a
// authority-sha256: sha256:5d3465bd2a61e73230085e6883b312ba3c3153d5a89978a7f29736ca7ee424c9
// body-sha256: sha256:8714774c91520f87fd5a6600ce50fc6adceb735c87a8dc8bf488ea994d3f7221
// projection-signature: ed25519:+4lHoQXLKLehyQWSsBSwcZ5ED4V9yEkwwPRzWvV01wrUKlsI7hk/jaS2ERjo2fP6uIAqB0KQcPvzCnG9jyO6Dg==
// DO NOT EDIT.
import type {
  EvaluatesResumableAuthorityContext,
  AuthorityResumabilitySignal
} from "./authority-resumability.type.js";

export async function evaluatesResumableAuthority(
  context: EvaluatesResumableAuthorityContext
): Promise<AuthorityResumabilitySignal> {
  return await context.evaluate(context.candidate);
}
