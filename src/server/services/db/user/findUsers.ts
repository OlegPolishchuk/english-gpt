import { PrismaClient } from '@prisma/client';

import { disconnectFromDb } from '@/server/services/db';

export const findUsers = async () => {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    await disconnectFromDb(prisma);
  }
};
