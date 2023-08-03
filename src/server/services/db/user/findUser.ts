import { disconnectFromDb, prisma } from '@/server/services/db';

export const findUser = async (userEmail: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });

    return user;
  } catch (e) {
    console.log('Error in findUser.ts', e);
  } finally {
    await disconnectFromDb(prisma);
  }
};
