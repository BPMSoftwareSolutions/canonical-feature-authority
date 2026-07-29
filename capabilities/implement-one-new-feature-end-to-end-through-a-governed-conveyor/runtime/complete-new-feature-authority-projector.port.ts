// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { AdmittedNewFeatureRequest, CompleteNewFeatureAuthority } from "../composition/executes-end-to-end-canonical-feature-conveyor.type.js";

/**
 * Port declared by complete-new-feature-authority-projector-port.v1.
 *
 * Projects and writes authority from one admitted new-feature request.
 */
export interface CompleteNewFeatureAuthorityProjectorPort {
  readonly projectsAndWritesCompleteAuthority: (input: AdmittedNewFeatureRequest) => Promise<CompleteNewFeatureAuthority>;
}
