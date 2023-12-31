import { AuthOptions } from 'next-auth';
import GoogleProviders from 'next-auth/providers/google';

import { Routes } from '@/shared/constants/routes/routes';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: Routes.signin,
  },
};
