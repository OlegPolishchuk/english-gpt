import NextAuth from 'next-auth';

import { authConfig } from '@/configs';
import { findUser, insertUserToDb } from '@/server/services/db';
import { UserFromNextAuth } from '@/server/types';
import { createNewUser } from '@/server/utils';

const handler = NextAuth({
  ...authConfig,
  callbacks: {
    session({ session }) {
      (async () => {
        try {
          const { user } = session;

          if (user && user.email) {
            const userFromDb = await findUser(user.email);

            if (!userFromDb) {
              const newUser = createNewUser(user as UserFromNextAuth);
              await insertUserToDb(newUser);
            }
          }
        } catch (e) {
          console.log('Error in next.auth => route.ts', e);
        }
      })();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
