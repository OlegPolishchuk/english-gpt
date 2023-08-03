import { create } from 'zustand';

import { User, UserActivity } from '@/models';
import { UserDataResponse } from '@/services';
import { createSelectors } from '@/store/utils/createSelectors';

interface UserStore {
  user: User;
  statistics: UserActivity;
  setUser: (user: UserDataResponse) => void;
}

const useUserStoreBase = create<UserStore>()(set => ({
  user: {} as User,
  statistics: {} as UserActivity,
  setUser: userData =>
    set(state => {
      console.log('zustand');

      console.log('userData in Zustand user store', userData);
      if (userData.id) {
        const { Activity, ...user } = userData;
        return {
          user,
          statistics: Activity[0],
        };
      }

      return state;
    }),
}));

export const useUserStore = createSelectors(useUserStoreBase);
