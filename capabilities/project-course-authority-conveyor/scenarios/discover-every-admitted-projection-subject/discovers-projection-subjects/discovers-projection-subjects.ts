// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-discovers-projection-subjects-from-bea9362bf12fea7b8a064f0fa351c7613d7074344cb3d5698467a9dba99680c0
// authority-sha256: sha256:1c4c3871297ec49e96e5bb9c27b1c37414dbf9d8e38d6f8ede8e1ff0f810e668
// body-sha256: sha256:f53709561abf0e9d81c79d6e32c06f01eaa79913bace85b28feb914f576c8498
// projection-signature: ed25519:oqrUrhF/bV+jBEQW1KurtxEiLvGiDeaHA/rMDCfAwuvWurcdExTqdXBVXVjsAXOu4t+5d0uWPozIX4WYumXvCg==
// DO NOT EDIT.
import type {
  DiscoversProjectionSubjectsContext,
  ProjectionSubjectDiscoverySignal
} from "./projection-subject-discovery.type.js";

export async function discoversProjectionSubjects(
  context: DiscoversProjectionSubjectsContext
): Promise<ProjectionSubjectDiscoverySignal> {
  return await context.discover(context.authority);
}
