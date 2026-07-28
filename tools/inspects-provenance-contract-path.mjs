import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const repositoryRoot = resolve(import.meta.dirname, "..");
const capabilityRoot = resolve(
  repositoryRoot,
  "capabilities/prove-bounded-model-submission-provenance-under-independent-trust"
);
const readIndex = process.argv.indexOf("--read");

async function lists(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await lists(path);
    else console.log(path);
  }
}

if (readIndex !== -1) {
  const requested = resolve(repositoryRoot, process.argv[readIndex + 1]);
  if (
    requested !== capabilityRoot &&
    !requested.startsWith(`${capabilityRoot}\\`) &&
    !requested.startsWith(`${capabilityRoot}/`)
  ) {
    throw new Error("Inspection path must remain inside the provenance capability");
  }
  process.stdout.write(await readFile(requested));
} else {
  await lists(capabilityRoot);
}
