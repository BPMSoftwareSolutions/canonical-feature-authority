// @generated
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { projectsSvgFromPresentationAuthority } from "../composition/projects-svg-from-presentation-authority.mjs";
const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const receipt = projectsSvgFromPresentationAuthority(resolve(root, "examples/context.json"));
const actual = readFileSync(resolve(root, "generated/governed-svg-review.svg"));
const expected = readFileSync(resolve(root, "examples/expected-governed-svg-review.svg"));
if (!actual.equals(expected)) throw new Error("STANDALONE_SVG_BYTES_DIVERGE");
if (receipt.disposition !== "INFOGRAPHIC_CONFORMS") throw new Error("STANDALONE_RECEIPT_RED");
const hash = "sha256:" + createHash("sha256").update(actual).digest("hex");
if (receipt.svgHash !== hash) throw new Error("STANDALONE_RECEIPT_HASH_DIVERGES");
process.stdout.write(JSON.stringify({disposition: "GREEN", svgHash: hash}) + "\n");
