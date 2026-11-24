import fs from "fs";
import path from "path";

import { DEFAULT_SCRIPTS, DEFAULT_SITE_SETTINGS } from "./defaults";
import { normalizePathname } from "./path";

import type {
  AuditEntry,
  PageSeoOverride,
  ScriptBlock,
  SeoDatabase,
  SeoUser,
  SiteSettings,
} from "./types";

const DATA_DIR = path.join(process.cwd(), ".seo-data");
const DB_FILE = path.join(DATA_DIR, "db.json");

export interface SeoStore {
  readonly name: string;
  isWritable(): boolean;
  read(): Promise<SeoDatabase>;
  writePage(path: string, override: PageSeoOverride): Promise<void>;
  clearPage(path: string): Promise<void>;
  writeSite(site: SiteSettings): Promise<void>;
  writeScript(block: ScriptBlock): Promise<void>;
  deleteScript(id: string): Promise<void>;
  upsertUser(user: SeoUser): Promise<void>;
  pushAudit(entries: AuditEntry[]): Promise<void>;
}

function emptyDb(): SeoDatabase {
  return { pages: {}, site: null, scripts: [], audit: [], users: [] };
}

const EMPTY_DB: SeoDatabase = emptyDb();

let memory: SeoDatabase = emptyDb();
let fileWritable = true;

function ensureDir(): boolean {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    return true;
  } catch {
    return false;
  }
}

function readFile(): SeoDatabase {
  try {
    if (!fs.existsSync(DB_FILE)) return memory;
    const raw = fs.readFileSync(DB_FILE, "utf8").trim();
    if (!raw) return memory;
    const parsed = JSON.parse(raw) as Partial<SeoDatabase>;
    return {
      pages: parsed.pages ?? {},
      site: parsed.site ?? null,
      scripts: parsed.scripts ?? [],
      audit: parsed.audit ?? [],
      users: parsed.users ?? [],
    };
  } catch {
    return memory;
  }
}

function persist(db: SeoDatabase): boolean {
  memory = db;
  try {
    if (!ensureDir()) return false;
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), "utf8");
    return true;
  } catch {
    fileWritable = false;
    return false;
  }
}

export const devStore: SeoStore = {
  name: "dev-file",

  isWritable() {
    if (!fileWritable) return false;
    return ensureDir();
  },

  async read() {
    return readFile();
  },

  async writePage(pagePath, override) {
    const db = readFile();
    db.pages[normalizePathname(pagePath)] = override;
    persist(db);
  },

  async clearPage(pagePath) {
    const db = readFile();
    delete db.pages[normalizePathname(pagePath)];
    persist(db);
  },

  async writeSite(site) {
    const db = readFile();
    db.site = site;
    persist(db);
  },

  async writeScript(block) {
    const db = readFile();
    const index = db.scripts.findIndex((item) => item.id === block.id);
    if (index >= 0) db.scripts[index] = block;
    else db.scripts.push(block);
    persist(db);
  },

  async deleteScript(id) {
    const db = readFile();
    db.scripts = db.scripts.filter((item) => item.id !== id);
    persist(db);
  },

  async upsertUser(user) {
    const db = readFile();
    const index = db.users.findIndex((item) => item.id === user.id);
    if (index >= 0) db.users[index] = user;
    else db.users.push(user);
    persist(db);
  },

  async pushAudit(entries) {
    if (entries.length === 0) return;
    const db = readFile();
    db.audit = [...entries, ...db.audit].slice(0, 500);
    persist(db);
  },
};

export async function readSiteSettings(): Promise<SiteSettings> {
  const db = await devStore.read();
  const stored = db.site;
  if (!stored) return { ...DEFAULT_SITE_SETTINGS };

  return {
    ...DEFAULT_SITE_SETTINGS,
    ...stored,
    address: { ...DEFAULT_SITE_SETTINGS.address, ...(stored.address ?? {}) },
    google: { ...DEFAULT_SITE_SETTINGS.google, ...(stored.google ?? {}) },
  };
}

export async function readScriptBlocks(): Promise<ScriptBlock[]> {
  const db = await devStore.read();
  if (db.scripts.length > 0) return db.scripts;
  return DEFAULT_SCRIPTS.map((block) => ({ ...block }));
}

export function getSeoStore(): SeoStore {
  return devStore;
}
