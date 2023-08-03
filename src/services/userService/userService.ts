import { getServerSession } from 'next-auth';

import { authConfig } from '@/configs';
import { User, UserActivity } from '@/models';
import { ServerRoutes } from '@/server/constants';
export interface UserDataResponse extends User {
  Activity: UserActivity[];
}

export const userService = {
  async getUserData(userEmail: string) {
    const res = await fetch(ServerRoutes.profile, {
      method: 'POST',
      body: JSON.stringify({ userEmail }),
    });

    const data = await res.json();

    return data as UserDataResponse;
  },

  async fetchUsersDataIfAuth() {
    const session = await getServerSession(authConfig);
    const userData = await userService.getUserData(session?.user?.email || '');

    return userData || ({} as UserDataResponse);
  },
};
