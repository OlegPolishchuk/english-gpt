export interface UserActivity {
  id?: number;
  user_id: number;
  total_count_of_visits: number;
  week_count_of_visits: number;
  consecutive_visits: number;
  last_visit: string;
}
