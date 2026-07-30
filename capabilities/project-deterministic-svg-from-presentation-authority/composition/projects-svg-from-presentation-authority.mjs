// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
import { resolveSvgProjectionAuthority } from "../scenarios/resolve-svg-projection-authority/resolve-svg-projection-authority/resolve-svg-projection-authority.mjs";
import { executeResolvedSvgProjection } from "../scenarios/execute-resolved-svg-projection/execute-resolved-svg-projection/execute-resolved-svg-projection.mjs";
import { serializeSvgCanonically } from "../scenarios/serialize-svg-canonically/serialize-svg-canonically/serialize-svg-canonically.mjs";
import { inspectGeneratedSvg } from "../scenarios/inspect-generated-svg/inspect-generated-svg/inspect-generated-svg.mjs";
import { projectSvgConformanceReceipt } from "../scenarios/project-svg-conformance-receipt/project-svg-conformance-receipt/project-svg-conformance-receipt.mjs";

export function projectsSvgFromPresentationAuthority(contextPath) {
  const authority = resolveSvgProjectionAuthority(contextPath);
  const execution = executeResolvedSvgProjection(authority);
  const serialized = serializeSvgCanonically(execution, authority.outputPath);
  const inspection = inspectGeneratedSvg(serialized, authority, execution);
  return projectSvgConformanceReceipt(authority, execution, serialized, inspection);
}
