import { User } from '@/models';
import { disconnectFromDb, prisma } from '@/server/services/db';
import { createNewActivities } from '@/server/utils';

export const insertUserToDb = async (userData: User) => {
  prisma.user.create({ data: userData }).then(user => {
    console.log('user from insertUser', user);
    const newActivity = createNewActivities(user.id);
    prisma.activity.create({ data: newActivity }).then(() => {
      disconnectFromDb(prisma);
    });
  });
};
