// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-course-lineage-index-from-ece36b939356325fd945fa18502af6e70f3fd5dadbdf9e212be073eae036451d
// authority-sha256: sha256:06342b1a219446cfdf3dbf0d1d87f3abd237facabacfd1d9015bfbc717a320ac
// body-sha256: sha256:02fb4840ecad75854f3350ff0c2a3972684b6987b6c16b5dc078b8fafbafaf34
// projection-signature: ed25519:+MtVcksFjerYOA0+0BPMlwJwUFUCCoAoS2OlSiFsukfc/T2fgVJQL/F6Xy6In/LRH21BDiblfIAO7rL7SPkFDA==
// DO NOT EDIT.
import type {
  ProjectsCourseLineageIndexContext,
  CourseLineageIndexProjectionSignal
} from "./course-lineage-index-projection.type.js";

export async function projectsCourseLineageIndex(
  context: ProjectsCourseLineageIndexContext
): Promise<CourseLineageIndexProjectionSignal> {
  return await context.project(context.lineage);
}
