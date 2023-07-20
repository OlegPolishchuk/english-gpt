import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProviders from 'next-auth/providers/google';

const config: AuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(config);

export { handler as GET, handler as POST };
