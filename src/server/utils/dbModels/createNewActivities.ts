import { UserActivity } from '@/models';

export const createNewActivities = (userEmail: string): UserActivity => {
  return {
    user_email: userEmail,
    last_visit: new Date().toISOString(),
    total_count_of_visits: 1,
    week_count_of_visits: 1,
    consecutive_visits: 1,
    dates_of_visits: [new Date().toISOString()],
  };
};
