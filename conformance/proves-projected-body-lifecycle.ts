// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-proves-projected-body-lifecycle-from-f4429a83a10525e3535d72056d724010fcb34e6e17d0f6d8e11a2a68ad5d57e4
// authority-sha256: sha256:c334cc8b465e53bfecf46ef7d5e120ea672e9690d88854c3056c370040755ac6
// body-sha256: sha256:c3c76c4b2b634ce51cb9b5fbfe2466b5319a49c0d878463e2a6dddd9ac243ccf
// projection-signature: ed25519:Wn5YoF0peHUoWgyldWLtjIhI/3AyGOQ5ykdIa2KkhK6XvTgOJT69XV7PtUF1Tfnp+mWr/64JKTIghu6iXt9xCw==
// DO NOT EDIT.
// feature-id: project-course-authority-through-a-governed-conveyor
// scenario-id: prove-executable-disposable-and-reprojectable-bodies
// obligation-id: prove-every-projected-body-from-authority
// responsibility-id: proves-projected-body-lifecycle
// signal-id: projected-body-lifecycle-proof
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { access, readFile, readdir, rm } from "node:fs/promises";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

interface AstAuthority {
  readonly artifact: {
    readonly relativePath: string;
  };
}

interface LineageEntry {
  readonly role: "primary" | "type" | "expectation" | "conformance";
  readonly semanticAuthority: string;
  readonly projectedBody: string;
}

interface LineageIndex {
  readonly scenarioId: string;
  readonly projectedBodyCount: number;
  readonly entries: readonly LineageEntry[];
}

interface SemanticExecutable {
  readonly bodyRole: LineageEntry["role"];
  readonly artifact: {
    readonly relativePath: string;
  };
  readonly lineage: {
    readonly scenarioId: string;
    readonly signalId: string;
  };
  readonly projection: {
    readonly functionName: string;
    readonly contextParameter: {
      readonly name: string;
    };
    readonly invocation: {
      readonly receiver: string;
      readonly operationMember: string;
      readonly argument: {
        readonly receiver: string;
        readonly member: string;
      };
    };
  };
}

interface ProjectedTarget {
  readonly authorityPath: string;
  readonly bodyPath: string;
  readonly relativePath: string;
  readonly originalBytes: Buffer;
}

const repositoryRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../.."
);
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

async function discoversFiles(
  directory: string,
  predicate: (name: string) => boolean
): Promise<string[]> {
  const discovered: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "dist" || entry.name === "node_modules") {
      continue;
    }
    const candidate = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      discovered.push(...(await discoversFiles(candidate, predicate)));
    } else if (entry.isFile() && predicate(entry.name)) {
      discovered.push(candidate);
    }
  }
  return discovered.sort();
}

function resolvesInsideRepository(relativePath: string): string {
  assert.equal(isAbsolute(relativePath), false, `absolute target rejected: ${relativePath}`);
  const resolved = resolve(repositoryRoot, relativePath);
  const fromRoot = relative(repositoryRoot, resolved);
  assert.equal(
    fromRoot === ".." || fromRoot.startsWith(`..${process.platform === "win32" ? "\\" : "/"}`),
    false,
    `out-of-repository target rejected: ${relativePath}`
  );
  return resolved;
}

function runsNpm(script: string): void {
  const outcome = spawnSync(npmCommand, ["run", script], {
    cwd: repositoryRoot,
    encoding: "utf8",
    shell: process.platform === "win32"
  });
  process.stdout.write(outcome.stdout ?? "");
  process.stderr.write(outcome.stderr ?? "");
  assert.equal(outcome.status, 0, `npm run ${script} failed`);
}

async function readsProjectedTargets(): Promise<ProjectedTarget[]> {
  const authorities = await discoversFiles(
    repositoryRoot,
    (name) => name.endsWith(".ts.ast.authority.json")
  );
  const targets: ProjectedTarget[] = [];
  const uniqueTargets = new Set<string>();
  for (const authorityPath of authorities) {
    const authority = JSON.parse(
      await readFile(authorityPath, "utf8")
    ) as AstAuthority;
    const bodyPath = resolvesInsideRepository(authority.artifact.relativePath);
    assert.equal(
      uniqueTargets.has(bodyPath),
      false,
      `duplicate projected target: ${authority.artifact.relativePath}`
    );
    uniqueTargets.add(bodyPath);
    const originalBytes = await readFile(bodyPath);
    const source = originalBytes.toString("utf8");
    assert.match(source, /^\/\/ @generated$/m);
    assert.match(source, /^\/\/ projector-id: declarative-typescript-body-projector$/m);
    assert.match(source, /^\/\/ projection-signature: ed25519:.+$/m);
    assert.match(source, /^\/\/ DO NOT EDIT\.$/m);
    targets.push({
      authorityPath,
      bodyPath,
      relativePath: authority.artifact.relativePath,
      originalBytes
    });
  }
  assert.ok(targets.length > 0, "no projected targets discovered");
  return targets;
}

async function readsScenarioLineages(): Promise<
  readonly { readonly indexPath: string; readonly index: LineageIndex }[]
> {
  const paths = await discoversFiles(
    repositoryRoot,
    (name) => name === "projection-lineage.index.json"
  );
  return Promise.all(
    paths.map(async (indexPath) => ({
      indexPath,
      index: JSON.parse(await readFile(indexPath, "utf8")) as LineageIndex
    }))
  );
}

async function executesRuntimeBodies(cycle: string): Promise<number> {
  const lineages = await readsScenarioLineages();
  let executed = 0;
  for (const { indexPath, index } of lineages) {
    assert.equal(index.projectedBodyCount, index.entries.length);
    for (const entry of index.entries) {
      if (entry.role === "type") {
        continue;
      }
      const semanticPath = resolve(dirname(indexPath), entry.semanticAuthority);
      const semantic = JSON.parse(
        await readFile(semanticPath, "utf8")
      ) as SemanticExecutable;
      assert.equal(semantic.bodyRole, entry.role);
      assert.equal(semantic.lineage.scenarioId, index.scenarioId);
      assert.equal(semantic.projection.contextParameter.name, "context");
      assert.equal(semantic.projection.invocation.receiver, "context");
      assert.equal(semantic.projection.invocation.argument.receiver, "context");

      const compiledRelativePath = semantic.artifact.relativePath.replace(
        /\.ts$/,
        ".js"
      );
      const compiledPath = resolve(repositoryRoot, "dist", compiledRelativePath);
      const projectedModule = (await import(
        `${pathToFileURL(compiledPath).href}?cycle=${encodeURIComponent(cycle)}`
      )) as Record<string, unknown>;
      const projectedFunction = projectedModule[
        semantic.projection.functionName
      ];
      assert.equal(
        typeof projectedFunction,
        "function",
        `${semantic.projection.functionName} is not executable`
      );

      const input = Object.freeze({
        scenarioId: semantic.lineage.scenarioId,
        bodyRole: semantic.bodyRole,
        cycle
      });
      const signal = Object.freeze({
        signalId: semantic.lineage.signalId,
        disposition: "GREEN",
        bodyRole: semantic.bodyRole,
        cycle
      });
      let invocationCount = 0;
      const context: Record<string, unknown> = {
        [semantic.projection.invocation.argument.member]: input,
        [semantic.projection.invocation.operationMember]: async (
          observedInput: unknown
        ) => {
          invocationCount += 1;
          assert.equal(observedInput, input);
          return signal;
        }
      };
      const result = await (
        projectedFunction as (
          context: Readonly<Record<string, unknown>>
        ) => Promise<unknown>
      )(context);
      assert.equal(invocationCount, 1);
      assert.equal(result, signal);
      executed += 1;
    }
  }
  return executed;
}

async function deletesProjectedTargets(
  targets: readonly ProjectedTarget[]
): Promise<void> {
  for (const target of targets) {
    const current = await readFile(target.bodyPath, "utf8");
    assert.match(current, /^\/\/ @generated$/m);
    assert.match(current, /^\/\/ projection-signature: ed25519:.+$/m);
  }
  for (const target of targets) {
    await rm(target.bodyPath);
  }
  for (const target of targets) {
    await assert.rejects(access(target.bodyPath));
  }
}

async function assertsByteIdenticalReprojection(
  targets: readonly ProjectedTarget[]
): Promise<void> {
  for (const target of targets) {
    const regenerated = await readFile(target.bodyPath);
    assert.equal(
      Buffer.compare(regenerated, target.originalBytes),
      0,
      `non-deterministic reprojection: ${target.relativePath}`
    );
  }
}

async function restoresMissingTargets(
  targets: readonly ProjectedTarget[]
): Promise<void> {
  const missing: string[] = [];
  for (const target of targets) {
    try {
      await access(target.bodyPath);
    } catch {
      missing.push(target.relativePath);
    }
  }
  if (missing.length > 0) {
    process.stderr.write(
      `Restoring ${missing.length} projected bodies after interrupted proof.\n`
    );
    runsNpm("project:bodies");
  }
}

async function provesProjectedBodyLifecycle(): Promise<void> {
  runsNpm("check:bodies");
  const targets = await readsProjectedTargets();
  const beforeExecutionCount = await executesRuntimeBodies("before-reprojection");
  let deletionStarted = false;
  try {
    deletionStarted = true;
    await deletesProjectedTargets(targets);
    runsNpm("project:bodies");
    await assertsByteIdenticalReprojection(targets);
    runsNpm("check:bodies");
    runsNpm("build");
    const afterExecutionCount = await executesRuntimeBodies("after-reprojection");
    assert.equal(afterExecutionCount, beforeExecutionCount);
    runsNpm("test");
    process.stdout.write(
      [
        "",
        "PROJECTED BODY LIFECYCLE: GREEN",
        `projected bodies deleted and reproduced byte-for-byte: ${targets.length}`,
        `runtime-bearing conveyor bodies executed before and after: ${beforeExecutionCount}`,
        "declaration-only bodies: compiled by the repository build",
        "detached receipts created: 0",
        ""
      ].join("\n")
    );
  } finally {
    if (deletionStarted) {
      await restoresMissingTargets(targets);
    }
  }
}

await provesProjectedBodyLifecycle();
