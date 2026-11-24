import type { NextRequest } from "next/server";

import { SEO_COOKIE, SEO_SESSION_MAX_AGE_SECONDS, verifySessionToken } from "./auth";
import { findUserById } from "./users";

import type { SeoSession, SeoUser } from "./types";

export function seoCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SEO_SESSION_MAX_AGE_SECONDS,
  };
}

export async function getSeoUser(
  request: NextRequest
): Promise<SeoUser | null> {
  const token = request.cookies.get(SEO_COOKIE)?.value;
  const session = verifySessionToken(token);
  if (!session) return null;

  const user = await findUserById(session.userId);
  if (!user || !user.active) return null;

  return user;
}

export function sessionFrom(user: SeoUser): SeoSession {
  return { userId: user.id, username: user.username, role: user.role };
}