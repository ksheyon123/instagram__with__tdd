import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { PATHNAME } from "@/constants/index";

const keys = Object.keys(PATHNAME).filter(
  (el) => el !== "SIGN_IN" && el !== "SIGN_UP"
);
const allPaths = Object.values(PATHNAME);

const middleware: NextMiddleware = (request, next) => {
  const response = NextResponse.next();

  // If the user access to the wrong path, redirect them to the SIGN_IN page.
  if (!allPaths.some((el) => el === request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(PATHNAME.SIGN_IN, request.url));
  }

  if (request.nextUrl.pathname === PATHNAME.SIGN_IN) {
  }

  //other middleware operations
  return response;
};

export default middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|.swa).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
