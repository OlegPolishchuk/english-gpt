import { prisma } from '@/server/services/db';

export const getUserData = async (userEmail: string) => {
  try {
    const data = await prisma.user.findFirst({
      where: { email: userEmail },
      include: {
        Activity: true,
      },
    });

    return data;
  } catch (e) {
    console.log('Error in getUserData.ts', e);
  }
};
