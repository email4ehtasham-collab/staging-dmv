import { MongoClient } from "mongodb";

import { normalizePathname } from "./path";

import type { SeoStore } from "./store";
import type {
  AuditEntry,
  PageSeoOverride,
  ScriptBlock,
  SeoDatabase,
  SeoUser,
  SiteSettings,
} from "./types";

const COLLECTION = "seo_state";
const DOCUMENT_ID = "main";

type SeoDocument = SeoDatabase & { _id: string };

const uri = process.env.MONGODB_URI ?? process.env.MONGO_URI;
const dbName = process.env.MONGODB_DB;

let clientPromise: Promise<MongoClient> | null = null;
let connectionFailed = false;

function emptyDb(): SeoDatabase {
  return { pages: {}, site: null, scripts: [], audit: [], users: [] };
}

function fromDocument(document: SeoDocument | null): SeoDatabase {
  if (!document) return emptyDb();
  return {
    pages: document.pages ?? {},
    site: document.site ?? null,
    scripts: document.scripts ?? [],
    audit: document.audit ?? [],
    users: document.users ?? [],
  };
}

async function getCollection() {
  if (!uri) throw new Error("MONGODB_URI is not configured");

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect().catch((error) => {
      connectionFailed = true;
      clientPromise = null;
      throw error;
    });
  }

  const client = await clientPromise;
  return client.db(dbName).collection<SeoDocument>(COLLECTION);
}

async function readDb(): Promise<SeoDatabase> {
  const collection = await getCollection();
  const document = await collection.findOne({ _id: DOCUMENT_ID });
  return fromDocument(document);
}

async function writeDb(db: SeoDatabase): Promise<void> {
  const collection = await getCollection();
  await collection.replaceOne({ _id: DOCUMENT_ID }, { ...db }, { upsert: true });
}

export const mongoStore: SeoStore = {
  name: "mongo",

  isWritable() {
    return Boolean(uri) && !connectionFailed;
  },

  async read() {
    return readDb();
  },

  async writePage(pagePath: string, override: PageSeoOverride) {
    const db = await readDb();
    db.pages[normalizePathname(pagePath)] = override;
    await writeDb(db);
  },

  async clearPage(pagePath: string) {
    const db = await readDb();
    delete db.pages[normalizePathname(pagePath)];
    await writeDb(db);
  },

  async writeSite(site: SiteSettings) {
    const db = await readDb();
    db.site = site;
    await writeDb(db);
  },

  async writeScript(block: ScriptBlock) {
    const db = await readDb();
    const index = db.scripts.findIndex((item) => item.id === block.id);
    if (index >= 0) db.scripts[index] = block;
    else db.scripts.push(block);
    await writeDb(db);
  },

  async deleteScript(id: string) {
    const db = await readDb();
    db.scripts = db.scripts.filter((item) => item.id !== id);
    await writeDb(db);
  },

  async upsertUser(user: SeoUser) {
    const db = await readDb();
    const index = db.users.findIndex((item) => item.id === user.id);
    if (index >= 0) db.users[index] = user;
    else db.users.push(user);
    await writeDb(db);
  },

  async pushAudit(entries: AuditEntry[]) {
    if (entries.length === 0) return;
    const db = await readDb();
    db.audit = [...entries, ...db.audit].slice(0, 500);
    await writeDb(db);
  },
};
