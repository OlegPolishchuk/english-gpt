import { disconnectFromDb, prisma } from '@/server/services/db';

export const findUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (e) {
    await disconnectFromDb(prisma);
  }
};
