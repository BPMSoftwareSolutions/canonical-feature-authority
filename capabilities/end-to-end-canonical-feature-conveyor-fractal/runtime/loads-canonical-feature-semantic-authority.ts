// @generated
// authority-ref: implementation-artifact:semantic-authority-loader
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { readFile } from "node:fs/promises";
import { resolve, sep } from "node:path";

import type { SemanticAuthority } from "./interprets-canonical-feature-semantic-authority.js";

export interface LoadCanonicalFeatureSemanticAuthorityContext {
  readonly repositoryRoot: string;
}

const semanticAuthorityArtifactPaths = [
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json",
  "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json"
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function parsesSemanticAuthority(
  artifactPath: string,
  source: string
): SemanticAuthority {
  let value: unknown;
  try {
    value = JSON.parse(source);
  } catch {
    throw new Error(`SEMANTIC_AUTHORITY_JSON_INVALID: ${artifactPath}`);
  }
  if (
    !isRecord(value) ||
    typeof value.responsibilityId !== "string" ||
    !Array.isArray(value.observations) ||
    !Array.isArray(value.decisions) ||
    !Array.isArray(value.projections) ||
    !isRecord(value.execution) ||
    typeof value.execution.executionModelId !== "string" ||
    !Array.isArray(value.execution.steps)
  ) {
    throw new Error(`SEMANTIC_AUTHORITY_ENVELOPE_INVALID: ${artifactPath}`);
  }
  return value as unknown as SemanticAuthority;
}

export async function loadsCanonicalFeatureSemanticAuthority(
  context: LoadCanonicalFeatureSemanticAuthorityContext
): Promise<readonly SemanticAuthority[]> {
  const repositoryRoot = resolve(context.repositoryRoot);
  const authorities = await Promise.all(
    semanticAuthorityArtifactPaths.map(async artifactPath => {
      const authorityPath = resolve(
        repositoryRoot,
        ...artifactPath.split("/")
      );
      if (
        authorityPath === repositoryRoot ||
        !authorityPath.startsWith(`${repositoryRoot}${sep}`)
      ) {
        throw new Error(`SEMANTIC_AUTHORITY_PATH_ESCAPES_ROOT: ${artifactPath}`);
      }
      const source = await readFile(authorityPath, "utf8");
      return parsesSemanticAuthority(artifactPath, source);
    })
  );
  const responsibilityIds = authorities.map(
    authority => authority.responsibilityId
  );
  if (new Set(responsibilityIds).size !== responsibilityIds.length) {
    throw new Error("SEMANTIC_AUTHORITY_RESPONSIBILITY_DUPLICATED");
  }
  return authorities;
}
