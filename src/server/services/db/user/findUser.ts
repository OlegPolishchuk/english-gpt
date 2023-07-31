import { PrismaClient } from '@prisma/client';

import { disconnectFromDb } from '@/server/services/db';

export const findUser = async (userEmail: string) => {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });

    return user;
  } catch (e) {
    console.log(e);
    await disconnectFromDb(prisma);
  }
};
