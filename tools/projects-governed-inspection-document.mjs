import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import {
  hashesAuthority,
  moduleRepositoryRoot,
  readsAndValidatesAuthority,
  resolvesOutputPath,
  sha256Bytes
} from "./governed-inspection-document-projection.mjs";

function readsArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

const repositoryRoot = resolve(
  readsArgument("--root") ?? moduleRepositoryRoot
);
const authorityPath = resolve(
  readsArgument("--authority") ??
    resolve(
      repositoryRoot,
      "architecture/inspects-projected-body-provenance.authority.json"
    )
);
const check = process.argv.includes("--check");
const write = process.argv.includes("--write");
const hash = process.argv.includes("--hash");

if ([check, write, hash].filter(Boolean).length !== 1) {
  throw new Error("Specify exactly one of --check, --write, or --hash");
}

const { authority, projected } =
  await readsAndValidatesAuthority(
    authorityPath,
    { verifyOutputHash: !hash }
  );
const outputPath = resolvesOutputPath(
  repositoryRoot,
  authority.projection.outputPath
);

if (hash) {
  console.log(`Proposed output byte SHA-256: ${sha256Bytes(projected)}`);
  console.log(
    `Admitted output byte SHA-256: ${authority.projection.outputByteSha256}`
  );
} else if (check) {
  await access(outputPath);
  const observed = await readFile(outputPath);
  if (!observed.equals(projected)) {
    throw new Error(
      "DOCUMENT_PROJECTION_BYTE_DRIFT: " +
        `${authority.projection.outputPath}; ` +
        `expected ${sha256Bytes(projected)}, observed ${sha256Bytes(observed)}`
    );
  }
  console.log(
    `Document projection is byte-identical: ${authority.projection.outputPath}`
  );
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, projected);
  console.log(`Projected document: ${authority.projection.outputPath}`);
}

console.log(`Authority JCS SHA-256: ${hashesAuthority(authority)}`);
if (!hash) {
  console.log(`Output byte SHA-256: ${sha256Bytes(projected)}`);
}
