import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const stash = path.join(root, ".static-build-stash");

const serverOnlyTargets = [
  { source: path.join(root, "src", "app", "api"), name: "api" },
  { source: path.join(root, "src", "proxy.ts"), name: "proxy.ts" },
];

function movePath(source, destination) {
  if (process.platform === "win32") {
    const quote = (value) => `'${value.replace(/'/g, "''")}'`;
    const result = spawnSync(
      "powershell.exe",
      [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        `Move-Item -LiteralPath ${quote(source)} -Destination ${quote(destination)} -ErrorAction Stop`,
      ],
      { stdio: "inherit" }
    );

    if (result.status !== 0) {
      throw new Error(`Unable to move ${source} to ${destination}`);
    }

    return;
  }

  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      fs.renameSync(source, destination);
      return;
    } catch (error) {
      const retryable = ["EBUSY", "ENOTEMPTY", "EPERM"].includes(error.code);

      if (!retryable || attempt === 10) throw error;

      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 300);
    }
  }
}

function restoreServerOnlyFiles() {
  if (!fs.existsSync(stash)) return;

  for (const target of serverOnlyTargets) {
    const stashed = path.join(stash, target.name);

    if (!fs.existsSync(stashed)) continue;

    if (fs.existsSync(target.source)) {
      fs.rmSync(stashed, { recursive: true, force: true });
      continue;
    }

    fs.mkdirSync(path.dirname(target.source), { recursive: true });
    movePath(stashed, target.source);
  }

  fs.rmSync(stash, { recursive: true, force: true });
}

function stashServerOnlyFiles() {
  fs.mkdirSync(stash, { recursive: true });

  for (const target of serverOnlyTargets) {
    if (!fs.existsSync(target.source)) continue;

    const stashed = path.join(stash, target.name);
    fs.rmSync(stashed, { recursive: true, force: true });
    movePath(target.source, stashed);
  }
}

function copyLauncherFiles() {
  const outDir = path.join(root, "out");
  const launcherDir = path.join(root, "scripts", "static-launcher");

  if (!fs.existsSync(path.join(outDir, "index.html"))) return;

  for (const name of ["Start Website.bat", "serve-static.ps1"]) {
    fs.copyFileSync(path.join(launcherDir, name), path.join(outDir, name));
  }
}

function runNextBuild() {
  const nextBin = path.join(
    root,
    "node_modules",
    "next",
    "dist",
    "bin",
    "next"
  );

  return new Promise((resolve) => {
    const child = spawn(process.execPath, [nextBin, "build", "--webpack"], {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    });

    child.on("error", (error) => {
      console.error(error);
      resolve(1);
    });

    child.on("exit", (code, signal) => {
      if (signal) console.error(`Build stopped by ${signal}`);
      resolve(code ?? 1);
    });
  });
}

restoreServerOnlyFiles();
stashServerOnlyFiles();

let exitCode = 1;

try {
  exitCode = await runNextBuild();
} finally {
  restoreServerOnlyFiles();
}

if (exitCode === 0) {
  copyLauncherFiles();
}

process.exit(exitCode);
