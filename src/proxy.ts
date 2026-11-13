import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { phrases } from "./data/phrases";

// The 19 phrase pages that were intentionally retired. Only /make/no-signal
// remains indexed; these return 410 Gone so search engines drop them.
const gone = new Set(phrases.filter((p) => p.slug !== "no-signal").map((p) => p.slug));

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/make\//, "").replace(/\/+$/, "");
  if (gone.has(slug)) {
    return new NextResponse(null, { status: 410 });
  }
  return NextResponse.next();
}

export const config = { matcher: "/make/:path*" };
