import { prisma } from '@/server/services/db';

export const findUserActivity = async (userId: number) => {
  try {
    const userActivity = await prisma.activity.findFirst({ where: { user_id: userId } });

    return userActivity;
  } catch (e) {
    console.log('Error in findUserActivity.ts', e);
  }
};
