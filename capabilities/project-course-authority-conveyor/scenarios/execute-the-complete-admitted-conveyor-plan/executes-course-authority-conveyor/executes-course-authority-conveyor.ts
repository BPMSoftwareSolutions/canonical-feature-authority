// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-executes-course-authority-conveyor-from-0ce67f6cd9bf94156891d2c861d57e6ed342804e612881497ba0ebbfcbf0c507
// authority-sha256: sha256:de72d8834f39da1adcaeeca8db9dd2ff4a6ee9f9b340d4bf86f1c117343cae03
// body-sha256: sha256:4745c68993c41ef23aa07a32dda526cef1bf7e1c25ba0b55c3c3b98cca219ae6
// projection-signature: ed25519:E2Nikhoa0hJ0OraAndlD9XnhCa/brq5caoeTdTIUX+GLiyJ4E3a2IHl28mVgC2dKf+FPNyj0ZoOlg+tinX8NDg==
// DO NOT EDIT.
import type {
  CourseConveyorContext,
  CourseConveyorSignal
} from "./course-authority-conveyor-execution.type.js";

export async function executesCourseAuthorityConveyor(
  context: CourseConveyorContext
): Promise<CourseConveyorSignal> {
  return await context.execute(context.plan);
}
