import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";

import {Endpoints, JWT, Routes} from "@/shared/constants";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.search;

  const res = await fetch(Endpoints.auth.google_redirect + `${code}`, {
    credentials: 'include'
  })

  const cookiesFromRes = res.headers.get('set-cookie') as string;

  console.log('cookiesFromRes', cookiesFromRes)
  const {accessToken, refreshToken} = getTokensFromString(cookiesFromRes)

  if (accessToken && refreshToken) {
    cookies().set('refreshToken', refreshToken, {maxAge: JWT.refreshExpTime, httpOnly: true})
    cookies().set('accessToken', accessToken, {maxAge: JWT.accessExpTime, httpOnly: true})
  }

  if (res.status === 200) {
    return NextResponse.redirect(new URL(Routes.main, req.url));
  }

  return NextResponse.redirect(new URL(Routes.signin, req.url));
}


function getTokensFromString(cookiesFromRes: string) {
  const refreshTokenStartIndex = cookiesFromRes.indexOf("refreshToken=");
  const refreshTokenEndIndex = cookiesFromRes.indexOf(";", refreshTokenStartIndex);
  const refreshToken = cookiesFromRes.slice(refreshTokenStartIndex + 13, refreshTokenEndIndex);

  const accessTokenStartIndex = cookiesFromRes.indexOf("accessToken=");
  const accessTokenEndIndex = cookiesFromRes.indexOf(";", accessTokenStartIndex);
  const accessToken = cookiesFromRes.slice(accessTokenStartIndex + 12, accessTokenEndIndex);

  return {accessToken, refreshToken}
}