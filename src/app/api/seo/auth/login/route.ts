import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  SEO_COOKIE,
  createSessionToken,
  toPublicUser,
  verifyPassword,
} from "@/lib/seo/auth";
import { seoCookieOptions, sessionFrom } from "@/lib/seo/session";
import { findUserByUsername, recordLogin } from "@/lib/seo/users";

export const dynamic = "force-dynamic";

function unauthorized(message = "Unauthorized") {
  return NextResponse.json({ error: message }, { status: 401 });
}

export async function POST(request: NextRequest) {
  let body: { username?: string; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const username = (body.username ?? "").trim();
  const password = body.password ?? "";

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required" },
      { status: 400 }
    );
  }

  const user = await findUserByUsername(username);

  if (!user || !user.active || !verifyPassword(password, user.passwordHash)) {
    return unauthorized("Invalid username or password");
  }

  const withLogin = (await recordLogin(user.id)) ?? user;
  const response = NextResponse.json({
    ok: true,
    session: sessionFrom(withLogin),
    user: toPublicUser(withLogin),
  });

  response.cookies.set(SEO_COOKIE, createSessionToken(withLogin), seoCookieOptions());
  return response;
}