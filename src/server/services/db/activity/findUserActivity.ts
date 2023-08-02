import { prisma } from '@/server/services/db';

export const findUserActivity = async (userEmail: string) => {
  try {
    const userActivity = await prisma.activity.findFirst({
      where: { user_email: userEmail },
    });

    return userActivity;
  } catch (e) {
    console.log('Error in findUserActivity.ts', e);
  }
};
