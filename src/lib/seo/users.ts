import crypto from "crypto";

import { hashPassword } from "./auth";
import { getSeoStore } from "./store";

import type { SeoRole, SeoUser } from "./types";

const BOOTSTRAP_ID = "usr_bootstrap";

let cachedSeed: SeoUser | null = null;

function bootstrapUser(): SeoUser {
  if (cachedSeed) return cachedSeed;

  cachedSeed = {
    id: BOOTSTRAP_ID,
    username: process.env.SEO_BOOTSTRAP_USERNAME ?? "seo-admin",
    displayName: process.env.SEO_BOOTSTRAP_DISPLAY_NAME ?? "SEO Administrator",
    email: process.env.SEO_BOOTSTRAP_EMAIL ?? null,
    role: "admin",
    passwordHash: hashPassword(
      process.env.SEO_BOOTSTRAP_PASSWORD ?? "SeoDev@2026"
    ),
    active: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null,
  };

  return cachedSeed;
}

export async function listSeoUsers(): Promise<SeoUser[]> {
  const db = await getSeoStore().read();
  if (db.users.length > 0) return db.users;
  return [bootstrapUser()];
}

export async function findUserByUsername(
  username: string
): Promise<SeoUser | null> {
  const wanted = username.trim().toLowerCase();
  const users = await listSeoUsers();
  return users.find((user) => user.username.toLowerCase() === wanted) ?? null;
}

export async function findUserById(id: string): Promise<SeoUser | null> {
  const users = await listSeoUsers();
  return users.find((user) => user.id === id) ?? null;
}

export async function saveSeoUser(user: SeoUser): Promise<void> {
  await getSeoStore().upsertUser(user);
  if (user.id === BOOTSTRAP_ID) cachedSeed = user;
}

export async function recordLogin(userId: string): Promise<SeoUser | null> {
  const user = await findUserById(userId);
  if (!user) return null;

  const next: SeoUser = { ...user, lastLoginAt: new Date().toISOString() };
  await saveSeoUser(next);
  return next;
}

export interface CreateSeoUserInput {
  username: string;
  password: string;
  displayName: string;
  email?: string | null;
  role?: SeoRole;
}

export async function createSeoUser(
  input: CreateSeoUserInput
): Promise<SeoUser> {
  const existing = await findUserByUsername(input.username);
  if (existing) throw new Error(`Username already exists: ${input.username}`);

  const user: SeoUser = {
    id: `usr_${crypto.randomBytes(8).toString("hex")}`,
    username: input.username.trim(),
    displayName: input.displayName,
    email: input.email ?? null,
    role: input.role ?? "editor",
    passwordHash: hashPassword(input.password),
    active: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null,
  };

  await saveSeoUser(user);
  return user;
}