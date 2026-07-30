// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

function hash(bytes) {
  return "sha256:" + createHash("sha256").update(bytes).digest("hex");
}

function readJson(path, code) {
  let bytes;
  try { bytes = readFileSync(path); } catch { throw new Error(code + "_MISSING"); }
  try { return {bytes, value: JSON.parse(bytes.toString("utf8"))}; }
  catch { throw new Error(code + "_JSON_INVALID"); }
}

function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value) &&
    Object.keys(value).sort().join("|") === [...keys].sort().join("|");
}

function validateContract(value) {
  if (!exactKeys(value, ["authorityType", "artifactId", "canvas", "sections", "proofRequirementId"])) return false;
  if (value.authorityType !== "deterministic-infographic-presentation.v1") return false;
  if (!exactKeys(value.canvas, ["width", "height", "viewBox"])) return false;
  if (!Number.isInteger(value.canvas.width) || value.canvas.width < 1) return false;
  if (!Number.isInteger(value.canvas.height) || value.canvas.height < 1) return false;
  if (!Array.isArray(value.sections) || value.sections.length < 1) return false;
  return value.sections.every(section =>
    exactKeys(section, ["sectionId", "rendererId", "bounds", "text", "styleToken"]) &&
    exactKeys(section.bounds, ["x", "y", "width", "height"]) &&
    section.bounds.width > 0 && section.bounds.height > 0 &&
    typeof section.text === "string" && section.text.length > 0
  );
}

export function resolveSvgProjectionAuthority(contextPath) {
  const absoluteContext = resolve(contextPath);
  const contextDirectory = dirname(absoluteContext);
  const contextRecord = readJson(absoluteContext, "CONTEXT");
  const context = contextRecord.value;
  if (!context.schema?.schemaPath || !context.contract?.contractPath ||
      !context.projection?.profilePath || !context.projection?.outputPath) {
    throw new Error("CONTEXT_PATHS_INCOMPLETE");
  }
  const schemaRecord = readJson(resolve(contextDirectory, context.schema.schemaPath), "SCHEMA");
  const contractRecord = readJson(resolve(contextDirectory, context.contract.contractPath), "CONTRACT");
  const profileRecord = readJson(resolve(contextDirectory, context.projection.profilePath), "PROFILE");
  if (!validateContract(contractRecord.value)) throw new Error("PRESENTATION_CONTRACT_SCHEMA_INVALID");
  const contract = contractRecord.value;
  const profile = profileRecord.value;
  if (profile.profileId !== context.projection.profileId) throw new Error("PROJECTION_PROFILE_IDENTITY_MISMATCH");
  const operations = [];
  contract.sections.forEach((section, index) => {
    const renderer = profile.renderers?.[section.rendererId];
    const style = profile.styleTokens?.[section.styleToken];
    if (renderer?.rendererType !== "rectangle-with-centered-text.v1") throw new Error("RENDERER_UNRESOLVED");
    if (!style) throw new Error("STYLE_TOKEN_UNRESOLVED");
    operations.push({
      sequence: index + 1,
      operation: "render-rectangle-with-centered-text",
      sectionId: section.sectionId,
      bounds: section.bounds,
      text: section.text,
      style
    });
  });
  const plan = {
    projectionPlanType: "resolved-svg-presentation.v1",
    artifactId: contract.artifactId,
    canvas: contract.canvas,
    operations,
    proofRequirementId: contract.proofRequirementId
  };
  const planBytes = Buffer.from(JSON.stringify(plan, null, 2) + "\n", "utf8");
  const planPath = resolve(contextDirectory, "../generated/resolved-projection-plan.json");
  mkdirSync(dirname(planPath), {recursive: true});
  writeFileSync(planPath, planBytes);
  return {
    schemaId: context.schema.schemaId,
    schemaHash: hash(schemaRecord.bytes),
    contractHash: hash(contractRecord.bytes),
    rendererProfileId: profile.profileId,
    projectionPlanHash: hash(planBytes),
    outputPath: resolve(contextDirectory, context.projection.outputPath),
    contract,
    plan
  };
}
