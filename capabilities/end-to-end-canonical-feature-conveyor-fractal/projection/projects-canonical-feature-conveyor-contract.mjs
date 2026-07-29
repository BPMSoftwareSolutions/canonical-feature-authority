import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  projectsMarkdown,
  readsConveyorAuthority,
  repositoryRoot,
  sha256
} from "./canonical-feature-conveyor-projection.mjs";

const modes = ["--hash", "--write", "--check"].filter(mode =>
  process.argv.includes(mode)
);
if (modes.length !== 1) {
  throw new Error("Specify exactly one of --hash, --write, or --check");
}
const authorityPath = resolve(
  repositoryRoot,
  "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);
const authority = await readsConveyorAuthority(authorityPath);
const derivedPath = resolve(
  repositoryRoot,
  authority.projection.derivedProjectionOutputPath
);
const derivedBytes = await readFile(derivedPath);
if (
  sha256(derivedBytes) !==
  authority.projection.derivedProjectionSha256
) {
  throw new Error("DERIVED_PROJECTION_HASH_MISMATCH");
}
const derived = JSON.parse(derivedBytes.toString("utf8"));
const projected = projectsMarkdown(authority, derived);
const projectedHash = sha256(projected);

if (modes[0] === "--hash") {
  console.log(`Proposed output byte SHA-256: ${projectedHash}`);
  console.log(
    `Admitted output byte SHA-256: ${authority.projection.outputByteSha256}`
  );
  process.exit(0);
}
if (authority.projection.outputByteSha256 !== projectedHash) {
  throw new Error(
    `CONVEYOR_PROJECTION_HASH_MISMATCH: expected ` +
      `${authority.projection.outputByteSha256}, observed ${projectedHash}`
  );
}
const outputPath = resolve(
  repositoryRoot,
  authority.projection.outputPath
);
if (modes[0] === "--write") {
  await writeFile(outputPath, projected);
  console.log(`Projected document: ${authority.projection.outputPath}`);
} else {
  const observed = await readFile(outputPath);
  if (!observed.equals(projected)) {
    throw new Error("CONVEYOR_PROJECTION_BYTE_DRIFT");
  }
  console.log(
    `Conveyor projection is byte-identical: ${authority.projection.outputPath}`
  );
}
console.log(`Output byte SHA-256: ${projectedHash}`);
