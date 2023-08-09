import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";

import {Endpoints, JWT, Routes} from "@/shared/constants";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.search;

  console.log('google_code => ', code)

  const res = await fetch(Endpoints.auth.google_redirect + `${code}`, {
    credentials: 'include'
  })


  const cookiesFromRes = res.headers.get('set-cookie') as string;

  // console.log('cookiesFromRes', cookiesFromRes)
  if (!cookiesFromRes) {
    return NextResponse.redirect(new URL(Routes.signin, req.url));
  }

  const {accessToken, refreshToken} = getTokensFromString(cookiesFromRes)

  if (accessToken && refreshToken) {
    cookies().set('refreshToken', refreshToken, {maxAge: JWT.refreshExpTime, httpOnly: true})
    cookies().set('accessToken', accessToken, {maxAge: JWT.accessExpTime, httpOnly: true})
  }

  if (res.status === 200) {
    // console.log('STATUS === 200')
    // console.log('req.url =>', req.url)
    // console.log('Routes.main =>', Routes.main)
    // console.log('new URL => ', new URL(Routes.main, req.url))
    // console.log('////////////////////////////////////////////')

    return NextResponse.redirect(process.env.AUTH_REDIRECT_URL as string);
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