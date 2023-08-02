import NextAuth from 'next-auth';

import { authConfig } from '@/configs';
import { disconnectFromDb, findUser, insertUserToDb, prisma } from '@/server/services/db';
import { updateActivity } from '@/server/services/db/activity';
import { UserFromNextAuth } from '@/server/types';
import { createNewUser } from '@/server/utils';

const handler = NextAuth({
  ...authConfig,
  callbacks: {
    session({ session }) {
      (async () => {
        try {
          const { user } = session;

          if (!user?.email) {
            return null;
          }

          const userFromDb = await findUser(user.email);
          console.log({ userFromDb });
          if (!userFromDb) {
            const newUser = createNewUser(user as UserFromNextAuth);
            await insertUserToDb(newUser);

            return;
          }

          await updateActivity(userFromDb.id);
          await disconnectFromDb(prisma);
        } catch (e) {
          console.log('Error in next.auth => route.ts', e);
        }
      })();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
