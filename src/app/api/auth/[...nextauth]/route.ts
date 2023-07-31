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
        const { user } = session;

        if (user && user.email) {
          const userFromDb = await findUser(user.email);

          if (!userFromDb) {
            const newUser = createNewUser(user as UserFromNextAuth);
            console.log({ newUser });
            await insertUserToDb(newUser);
          }
        }
      })();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
