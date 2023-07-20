export { default } from 'next-auth/middleware';

// const protectedRoutes = Object.keys(Routes.protected).map(route => `/${route}`);

export const config = {
  matcher: ['/profile'],
};
