import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PROTECTED = ["/s_dashboard"];
const ADMIN_LOGIN = "/dashboard_login";

const SEO_PROTECTED = ["/seo-dashboard", "/api/seo"];
const SEO_LOGIN = "/seo_login";

function matches(pathname: string, routes: string[]): boolean {
  return routes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

/**
 * Cookie PRESENCE check only, for UX (redirect before rendering).
 * Cryptographic session verification happens in every /api/seo route via
 * getSeoUser(), so a forged cookie gets no data access.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const adminToken = request.cookies.get("token")?.value;
  const seoToken = request.cookies.get("seo_token")?.value;

  const seoNeedsAuth = matches(pathname, SEO_PROTECTED);
  const seoIsPublic =
    pathname === SEO_LOGIN || pathname === "/api/seo/auth/login";

  if (seoNeedsAuth && !seoIsPublic && !seoToken) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL(SEO_LOGIN, request.url));
  }

  if (seoToken && pathname === SEO_LOGIN) {
    return NextResponse.redirect(new URL("/seo-dashboard", request.url));
  }

  if (!adminToken && matches(pathname, ADMIN_PROTECTED)) {
    return NextResponse.redirect(new URL(ADMIN_LOGIN, request.url));
  }

  if (adminToken && pathname === ADMIN_LOGIN) {
    return NextResponse.redirect(new URL("/s_dashboard", request.url));
  }

  return NextResponse.next();
}