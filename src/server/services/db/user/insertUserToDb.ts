import { User } from '@/models';
import { disconnectFromDb, prisma } from '@/server/services/db';
import { createNewActivities } from '@/server/utils';

export const insertUserToDb = async (userData: User) => {
  prisma.user.create({ data: userData }).then(user => {
    const newActivity = createNewActivities(user.email);

    prisma.activity.create({ data: newActivity }).then(() => {
      disconnectFromDb(prisma);
    });
  });
};
