import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

import { MongoClient } from "mongodb";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envFile = path.join(root, ".env.local");
const dataFile = path.join(root, ".seo-data", "db.json");

function removeKey(content, key) {
  const pattern = new RegExp(`^\\s*${key}\\s*=`, "i");
  return content
    .split(/\r?\n/)
    .filter((line) => !pattern.test(line))
    .join("\n");
}

function setKey(content, key, value) {
  let next = removeKey(content, key).replace(/\n+$/, "");
  if (next) next += "\n";
  return next + `${key}=${value}\n`;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const uri = (await rl.question("MongoDB URI paste karein: ")).trim().replace(/^["']|["']$/g, "");
const dbName = (await rl.question("DB name (blank = URI wala DB): ")).trim().replace(/^["']|["']$/g, "");
rl.close();

if (!/^mongodb(\+srv)?:\/\//i.test(uri)) {
  console.error("URI galat hai. mongodb:// ya mongodb+srv:// se shuru hona chahiye.");
  process.exit(1);
}

let env = fs.existsSync(envFile) ? fs.readFileSync(envFile, "utf8") : "";
env = setKey(env, "MONGO_URI", uri);
env = removeKey(env, "MONGODB_URI");
env = removeKey(env, "SEO_STORE");
if (dbName) env = setKey(env, "MONGODB_DB", dbName);
else env = removeKey(env, "MONGODB_DB");
fs.writeFileSync(envFile, env, "utf8");
console.log(".env.local update ho gaya. URI yahan print nahi kiya gaya.");

const client = new MongoClient(uri);
await client.connect();
const db = client.db(dbName || undefined);
await db.command({ ping: 1 });
console.log("Mongo connection OK.");

const collection = db.collection("seo_state");
const existing = await collection.findOne({ _id: "main" });
const local = fs.existsSync(dataFile)
  ? JSON.parse(fs.readFileSync(dataFile, "utf8"))
  : {};

const merged = {
  _id: "main",
  pages: { ...(local.pages ?? {}), ...(existing?.pages ?? {}) },
  site: existing?.site ?? local.site ?? null,
  scripts: existing?.scripts?.length ? existing.scripts : (local.scripts ?? []),
  audit: existing?.audit?.length ? existing.audit : (local.audit ?? []),
  users: existing?.users?.length ? existing.users : (local.users ?? []),
};

await collection.replaceOne({ _id: "main" }, merged, { upsert: true });
console.log(
  `SEO data Mongo me copy ho gaya: ${Object.keys(merged.pages).length} pages, ${merged.scripts.length} scripts, ${merged.users.length} users.`
);
console.log("Ab dev server restart karein: Ctrl+C, phir npm run dev");
await client.close();
