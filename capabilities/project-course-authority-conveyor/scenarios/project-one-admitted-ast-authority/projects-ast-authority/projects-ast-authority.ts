// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-ast-authority-from-a873a4793c310c7b58aea1d7e9fcc699ab7343c911f918757c8bfd1ae8f626f9
// authority-sha256: sha256:8eef2fce6b9cd964d126045de0f2949b98d5096b39512ad3af6b822955aa8f3e
// body-sha256: sha256:17ed7700eadce3e32db595179e91935e1f4f63f38419ff71939ca27bbb0489af
// projection-signature: ed25519:Uo9iFQKlZaBTRIWKtryuwjrXrt6jjJz4p9nE2S0C6jX8qvb+Dx5b3u8FNFHKWRbFtiUIjgtg+Ojgt4hdvPItDw==
// DO NOT EDIT.
import type {
  ProjectsAstAuthorityContext,
  AstAuthorityProjectionSignal
} from "./ast-authority-projection.type.js";

export async function projectsAstAuthority(
  context: ProjectsAstAuthorityContext
): Promise<AstAuthorityProjectionSignal> {
  return await context.project(context.semanticAuthority);
}
