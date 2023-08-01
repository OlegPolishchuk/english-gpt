import { UserActivity } from '@/models';

export const createNewActivities = (userId: number): UserActivity => {
  return {
    user_id: userId,
    last_visit: new Date().toISOString(),
    total_count_of_visits: 1,
    week_count_of_visits: 1,
    consecutive_visits: 1,
    dates_of_visits: [new Date().toISOString()],
  };
};
