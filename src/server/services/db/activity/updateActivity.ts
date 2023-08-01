import { UserActivity } from '@/models';
import { prisma } from '@/server/services/db';
import { findUserActivity } from '@/server/services/db/activity/findUserActivity';
import {
  checkDatesToSameDay,
  checkDatesToSameWeek,
  checkDateToYesterday,
} from '@/server/utils';

export const updateActivity = async (userId: number) => {
  try {
    const userActivity = await findUserActivity(userId);

    if (userActivity) {
      const lastVisit = userActivity.last_visit;

      const now = new Date().toISOString();
      const isSameWeek = checkDatesToSameWeek(lastVisit, now);
      const isDaysInARow = checkDateToYesterday(lastVisit, now);
      const isSameDay = checkDatesToSameDay(lastVisit, now);

      await prisma.activity.update({
        where: { id: userActivity.id },
        data: {
          total_count_of_visits: { increment: 1 },
          week_count_of_visits: { increment: isSameWeek ? 1 : 0 },
          consecutive_visits: { increment: isDaysInARow ? 1 : 0 },
          last_visit: now,
          ...(isSameDay && { dates_of_visits: { push: now } }),
        },
      });
    }
  } catch (e) {
    console.log('Error in updateActivity.ts', e);
  }
};
