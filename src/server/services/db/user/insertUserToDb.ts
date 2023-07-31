import { PrismaClient } from '@prisma/client';

import { User } from '@/models';
import { disconnectFromDb } from '@/server/services/db';

export const insertUserToDb = async (userData: User) => {
  const prisma = new PrismaClient();

  prisma.user.create({ data: userData }).then(() => {
    disconnectFromDb(prisma);
  });
};
