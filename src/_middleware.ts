import { NextMiddleware, NextRequest, NextResponse } from "next/server";

// const keys = Object.keys(PATHNAME).filter(
//   (el) => el !== "SIGN_IN" && el !== "SIGN_UP"
// );
// const allPaths = Object.values(PATHNAME);

export const middleware = (request: NextRequest) => {
  const res = NextResponse.next();
  return res;
  //   return NextResponse.redirect(new URL("/", request.url));
};

// const middleware: NextMiddleware = (request) => {
//   //   const isNotPaging = request.nextUrl.pathname.includes("/api");
//   //   console.log("Request", request.nextUrl.pathname);
//   //   if (
//   //     // !isStatic &&
//   //     !isNotPaging &&
//   //     !allPaths.some((el) => el === request.nextUrl.pathname)
//   //   ) {
//   //     console.log("Main Middleware", request.nextUrl.pathname);
//   //     // If the user access to the wrong path, redirect them to the SIGN_IN page.
//   //     return NextResponse.redirect(new URL(PATHNAME.SIGN_IN, request.url));
//   //   }

//   console.log("request", request.nextUrl);
//   const res = NextResponse.next();
//   //other middleware operations
//   return res;
// };

export default middleware;

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     {
//       source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
//       missing: [
//         { type: "header", key: "next-router-prefetch" },
//         { type: "header", key: "purpose", value: "prefetch" },
//       ],
//     },
//   ],
// };
