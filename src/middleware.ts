import {NextRequest, NextResponse} from "next/server";

import {updateTokens} from "@/services";
import {JWT, Routes} from "@/shared/constants";
import {TokensPair} from "@/types/common";


export async function middleware(req: NextRequest) {
  console.log('middleware')
  const token = req.cookies.get('accessToken');

  if (!token) {
    try {
      const rToken = req.cookies.get('refreshToken')?.value as string;

      if (!rToken) {
        return NextResponse.redirect(new URL(Routes.signin, req.url));
      }

      const res = await updateTokens(rToken);
      const {accessToken, refreshToken}: TokensPair = await res.json()

      if (!accessToken && !refreshToken) {
        return NextResponse.redirect(new URL(Routes.signin, req.url));
      }

      const response = NextResponse.next();
      response.cookies.set('refreshToken', refreshToken,  {maxAge: JWT.refreshExpTime, httpOnly: true})
      response.cookies.set('accessToken', accessToken,  {maxAge: JWT.accessExpTime, httpOnly: true})

      return response;
    }
    catch (e) {
      return NextResponse.redirect(new URL(Routes.signin, req.url));
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/chat', '/profile']
}