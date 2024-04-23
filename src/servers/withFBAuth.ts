import { PATHNAME } from "@/constants";
import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

export default async function withFBAuth(middleware: NextMiddleware) {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const isLogin = request.nextUrl.pathname === PATHNAME.SIGN_IN;

    if (isLogin) {
      //   next.waitUntil(getFBProfile().then((rsp) => {}));
    }
    return middleware(request, next);
  };
}
