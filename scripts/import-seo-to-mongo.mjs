import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MongoClient } from "mongodb";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!match) continue;
    const value = match[2].replace(/^["']|["']$/g, "");
    if (!process.env[match[1]]) process.env[match[1]] = value;
  }
}

loadEnv(path.join(root, ".env.local"));

const uri = process.env.MONGODB_URI ?? process.env.MONGO_URI;
if (!uri) {
  console.error("MONGODB_URI or MONGO_URI is required");
  process.exit(1);
}

const dbName = process.env.MONGODB_DB;
const dbFile = path.join(root, ".seo-data", "db.json");
const local = fs.existsSync(dbFile)
  ? JSON.parse(fs.readFileSync(dbFile, "utf8"))
  : {};

const client = new MongoClient(uri);
await client.connect();
const collection = client.db(dbName).collection("seo_state");
const existing = await collection.findOne({ _id: "main" });

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
  `SEO data imported: ${Object.keys(merged.pages).length} pages, ${merged.scripts.length} scripts, ${merged.users.length} users`
);

await client.close();
