import {NextRequest, NextResponse} from "next/server";

import {Routes} from "@/shared/constants";


export async function middleware(req: NextRequest) {
  console.log('middleware')
  const token = req.cookies.get('accessToken');
  console.log('token =>', token)
  if (!token) {
    return NextResponse.redirect(new URL(Routes.signin, req.url));
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/chat', '/profile']
}