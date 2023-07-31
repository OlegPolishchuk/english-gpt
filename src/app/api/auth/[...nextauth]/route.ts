import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { async } from 'regenerator-runtime';

import { authConfig } from '@/configs';
import { insertUserToDb, findUser } from '@/server/services/db';
import { UserFromNextAuth } from '@/server/types';
import { createNewUser } from '@/server/utils';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   return await NextAuth(req, res, {
//     ...authConfig,
//     callbacks: {
//       session({ session }) {
//         (async () => {
//           const { user } = session;
//
//           if (user && user.email) {
//             const userFromDb = await findUser(user.email);
//
//             if (!userFromDb) {
//               const newUser = createNewUser(user as UserFromNextAuth);
//               await insertUserToDb(newUser);
//             }
//           }
//         })();
//
//         return session;
//       },
//     },
//   });
// };

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
            await insertUserToDb(newUser);
          }
        }
      })();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
