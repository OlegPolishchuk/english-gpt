import { disconnectFromDb, prisma } from '@/server/services/db';

export const findUser = async (userEmail: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });

    return user;
  } catch (e) {
    console.log(e);
    await disconnectFromDb(prisma);
  }
};
