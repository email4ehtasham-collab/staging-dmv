import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  canManageUsers,
  hashPassword,
  toPublicUser,
  verifySessionToken,
} from "@/lib/seo/auth";
import { SEO_COOKIE } from "@/lib/seo/auth";
import { getSeoUser } from "@/lib/seo/session";
import {
  createSeoUser,
  findUserById,
  listSeoUsers,
  saveSeoUser,
} from "@/lib/seo/users";

import type { SeoRole, SeoUser } from "@/lib/seo/types";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function forbidden() {
  return NextResponse.json({ error: "Admin access required" }, { status: 403 });
}

async function currentUser(request: NextRequest): Promise<SeoUser | null> {
  const token = request.cookies.get(SEO_COOKIE)?.value;
  if (!token || !verifySessionToken(token)) return null;
  return getSeoUser(request);
}

export async function GET(request: NextRequest) {
  const user = await currentUser(request);
  if (!user) return unauthorized();

  const users = await listSeoUsers();
  return NextResponse.json({
    me: toPublicUser(user),
    users: users.map(toPublicUser),
  });
}

export async function POST(request: NextRequest) {
  const user = await currentUser(request);
  if (!user) return unauthorized();
  if (!canManageUsers(user.role)) return forbidden();

  let body: {
    username?: string;
    password?: string;
    displayName?: string;
    email?: string | null;
    role?: SeoRole;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const username = (body.username ?? "").trim();
  const password = body.password ?? "";
  const displayName = (body.displayName ?? "").trim();

  if (!username || !displayName) {
    return NextResponse.json(
      { error: "username and displayName are required" },
      { status: 400 }
    );
  }

  if (password.length < 10) {
    return NextResponse.json(
      { error: "Password must be at least 10 characters" },
      { status: 400 }
    );
  }

  try {
    const created = await createSeoUser({
      username,
      password,
      displayName,
      email: body.email ?? null,
      role: body.role ?? "editor",
    });

    return NextResponse.json({ ok: true, user: toPublicUser(created) });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not create user" },
      { status: 400 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const user = await currentUser(request);
  if (!user) return unauthorized();
  if (!canManageUsers(user.role)) return forbidden();

  let body: { id?: string; active?: boolean; role?: SeoRole; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const id = body.id;
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  const target = await findUserById(id);
  if (!target) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (target.id === user.id && body.active === false) {
    return NextResponse.json(
      { error: "You cannot deactivate your own account" },
      { status: 400 }
    );
  }

  if (body.password && body.password.length < 10) {
    return NextResponse.json(
      { error: "Password must be at least 10 characters" },
      { status: 400 }
    );
  }

  const next: SeoUser = { ...target };

  if (typeof body.active === "boolean") next.active = body.active;
  if (body.role) next.role = body.role;
  if (body.password) next.passwordHash = hashPassword(body.password);

  await saveSeoUser(next);
  return NextResponse.json({ ok: true, user: toPublicUser(next) });
}