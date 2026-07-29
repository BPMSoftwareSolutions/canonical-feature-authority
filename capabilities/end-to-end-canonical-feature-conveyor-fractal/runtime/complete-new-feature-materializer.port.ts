// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { CompleteNewFeatureAuthority, CompleteNewFeatureMaterialization } from "../composition/executes-end-to-end-canonical-feature-conveyor.type.js";

/**
 * Port declared by complete-new-feature-materializer-port.v1.
 *
 * Materializes a complete authority and writes its artifact manifest.
 */
export interface CompleteNewFeatureMaterializerPort {
  readonly materializesAndWritesArtifactManifest: (input: CompleteNewFeatureAuthority) => Promise<CompleteNewFeatureMaterialization>;
}
