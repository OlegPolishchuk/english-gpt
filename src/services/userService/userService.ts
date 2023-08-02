import { User, UserActivity } from '@/models';
import { ServerRoutes } from '@/server/constants';
interface UserDataResponse extends User {
  Activity: UserActivity[];
}

export const userService = {
  async getUserData(userEmail: string) {
    console.log({ userEmail });
    const res = await fetch(ServerRoutes.profile, {
      method: 'POST',
      body: JSON.stringify({ userEmail }),
    });

    const data = await res.json();

    return data as UserDataResponse;
  },
};
