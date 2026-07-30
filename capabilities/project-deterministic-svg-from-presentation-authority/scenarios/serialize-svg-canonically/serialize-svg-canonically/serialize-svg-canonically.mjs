// @generated
// feature-id: project-deterministic-svg-from-presentation-authority
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function escape(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function render(node, depth = 0) {
  const indent = "  ".repeat(depth);
  const attributes = Object.entries(node.attributes ?? {}).sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => key + '="' + escape(value) + '"').join(" ");
  const open = "<" + node.tag + (attributes ? " " + attributes : "");
  if ((node.children?.length ?? 0) === 0 && node.text === undefined) return indent + open + "/>";
  if ((node.children?.length ?? 0) === 0) return indent + open + ">" + escape(node.text) + "</" + node.tag + ">";
  return indent + open + ">\n" + node.children.map(child => render(child, depth + 1)).join("\n") +
    "\n" + indent + "</" + node.tag + ">";
}

export function serializeSvgCanonically(execution, outputPath) {
  const bytes = Buffer.from(render(execution.svgTree) + "\n", "utf8");
  mkdirSync(dirname(outputPath), {recursive: true});
  writeFileSync(outputPath, bytes);
  return {
    artifactId: execution.artifactId,
    outputPath,
    svgHash: "sha256:" + createHash("sha256").update(bytes).digest("hex"),
    byteLength: bytes.length,
    svgText: bytes.toString("utf8")
  };
}
