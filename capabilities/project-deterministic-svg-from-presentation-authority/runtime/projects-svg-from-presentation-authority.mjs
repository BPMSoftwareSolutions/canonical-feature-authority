#!/usr/bin/env node
// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { projectsSvgFromPresentationAuthority } from "../composition/projects-svg-from-presentation-authority.mjs";

const capabilityRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const contextPath = resolve(process.argv[2] ?? resolve(capabilityRoot, "examples/context.json"));
try {
  const receipt = projectsSvgFromPresentationAuthority(contextPath);
  process.stdout.write(JSON.stringify(receipt) + "\n");
  if (receipt.disposition !== "INFOGRAPHIC_CONFORMS") process.exitCode = 1;
} catch (error) {
  process.stderr.write((error instanceof Error ? error.message : String(error)) + "\n");
  process.exitCode = 1;
}
