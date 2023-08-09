const base_url = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const Endpoints = {
  user: `${base_url}/user`,
  activity: `${base_url}/activity`,
  auth: {
    base: `${base_url}/auth`,
    google_login: `${base_url}/auth/google/login`,
    google_redirect: `${base_url}/auth/google/redirect`,
    refreshToken: `${base_url}/auth/refreshTokens`
  }
}

