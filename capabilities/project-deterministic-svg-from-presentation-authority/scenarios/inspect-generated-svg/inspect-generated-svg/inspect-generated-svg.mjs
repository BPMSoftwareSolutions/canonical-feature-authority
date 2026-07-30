// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
export function inspectGeneratedSvg(serialized, authority, execution) {
  const findings = [];
  if (execution.operationCount !== authority.contract.sections.length) findings.push("SVG_SECTION_COVERAGE_MISMATCH");
  for (const section of authority.contract.sections) {
    if (!serialized.svgText.includes('id="' + section.sectionId + '"')) findings.push("SVG_SEMANTIC_IDENTITY_MISMATCH");
    if (!serialized.svgText.includes(">" + section.text + "</text>")) findings.push("SVG_TEXT_MISMATCH");
  }
  if (!serialized.svgText.endsWith("\n")) findings.push("SVG_TERMINAL_NEWLINE_MISSING");
  return {artifactId: execution.artifactId, findings, findingCount: findings.length};
}
