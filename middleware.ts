import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["hu", "en"], // Támogatott nyelvek
  defaultLocale: "hu", // Alapértelmezett nyelv
  urlMappingStrategy: "redirect", // Use 'redirect' to ensure proper URL handling
});

export function middleware(request: NextRequest) {
  // Handle root URL specifically to always redirect to Hungarian
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/hu", request.url));
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
