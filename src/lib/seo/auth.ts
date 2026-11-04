import crypto from "crypto";

import type { SeoSession, SeoUser } from "./types";

export const SEO_COOKIE = "seo_token";
export const SEO_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function sessionSecret(): string {
  const configured = process.env.SEO_SESSION_SECRET;

  if (configured && configured.length >= 16) return configured;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "SEO_SESSION_SECRET must be set to at least 16 characters in production"
    );
  }

  return "dmv-gc-seo-dashboard-dev-only-secret";
}

export function hashPassword(plain: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(plain, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(plain: string, stored: string): boolean {
  const [scheme, salt, hash] = stored.split("$");
  if (scheme !== "scrypt" || !salt || !hash) return false;

  const candidate = Buffer.from(crypto.scryptSync(plain, salt, 64).toString("hex"), "hex");
  const expected = Buffer.from(hash, "hex");

  if (candidate.length !== expected.length) return false;
  return crypto.timingSafeEqual(candidate, expected);
}

function sign(payload: string): string {
  return crypto
    .createHmac("sha256", sessionSecret())
    .update(payload)
    .digest("base64url");
}

export function createSessionToken(user: SeoUser): string {
  const payload = Buffer.from(
    JSON.stringify({
      uid: user.id,
      u: user.username,
      role: user.role,
      exp: Date.now() + SEO_SESSION_MAX_AGE_SECONDS * 1000,
    })
  ).toString("base64url");

  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): SeoSession | null {
  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const provided = Buffer.from(signature);
  const expected = Buffer.from(sign(payload));
  if (provided.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(provided, expected)) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      uid: string;
      u: string;
      role: SeoUser["role"];
      exp: number;
    };

    if (typeof data.exp !== "number" || data.exp < Date.now()) return null;
    if (typeof data.uid !== "string" || typeof data.u !== "string") return null;

    return { userId: data.uid, username: data.u, role: data.role };
  } catch {
    return null;
  }
}

export function canEdit(role: SeoUser["role"]): boolean {
  return role === "editor" || role === "admin";
}

export function canManageUsers(role: SeoUser["role"]): boolean {
  return role === "admin";
}

export function toPublicUser(user: SeoUser) {
  const { passwordHash: _passwordHash, ...safe } = user;
  return safe;
}