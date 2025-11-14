//기본 한국어 페이지로 자동 리다이렉트

import { NextResponse } from "next/server";

export const middleware = (req) => {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/kr";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};
