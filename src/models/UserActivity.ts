export interface UserActivity {
  id?: UniqueId;
  user_email: Email;
  total_count_of_visits: number;
  week_count_of_visits: number;
  consecutive_visits: number;
  last_visit: DateString;
  dates_of_visits: DateString[];
}
