// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
export function projectSvgConformanceReceipt(authority, execution, serialized, inspection) {
  return {
    receiptType: "deterministic-infographic-projection-receipt.v1",
    artifactId: execution.artifactId,
    schemaId: authority.schemaId,
    schemaHash: authority.schemaHash,
    contractHash: authority.contractHash,
    rendererProfileId: authority.rendererProfileId,
    projectionPlanHash: authority.projectionPlanHash,
    svgHash: serialized.svgHash,
    sectionCount: authority.contract.sections.length,
    projectedSectionCount: execution.projectedOperationCount,
    findings: inspection.findings,
    disposition: inspection.findings.length === 0 ? "INFOGRAPHIC_CONFORMS" : "INFOGRAPHIC_NON_CONFORMING"
  };
}
