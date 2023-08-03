import { User } from '@/models';
import { disconnectFromDb, prisma } from '@/server/services/db';

export const findUser = async (userEmail: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });

    return user as User;
  } catch (e) {
    console.log('Error in findUser.ts', e);
    return {} as User;
  } finally {
    await disconnectFromDb(prisma);
  }
};
