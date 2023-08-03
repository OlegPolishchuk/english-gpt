import { createNewActivities, User } from '@/models';
import { disconnectFromDb, prisma } from '@/server/services/db';

export const insertUserToDb = async (userData: User) => {
  prisma.user.create({ data: userData }).then(user => {
    const newActivity = createNewActivities(user.email);

    prisma.activity.create({ data: newActivity }).then(() => {
      disconnectFromDb(prisma);
    });
  });
};
