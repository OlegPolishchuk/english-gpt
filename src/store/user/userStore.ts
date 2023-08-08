import {create} from 'zustand';

import {User, UserActivity} from '@/models';
import {createSelectors} from '@/store/utils/createSelectors';

interface UserStore {
  user: User;
  statistics: UserActivity;
  setUser: (user: User) => void;
}

const useUserStoreBase = create<UserStore>()(set => ({
  user: {} as User,
  statistics: {} as UserActivity,
  setUser: userData =>
    set(state => {
      console.log('zustand');

      console.log('userData in Zustand user store', userData);
      if (userData.id) {

        return { user: userData };
      }

      return state;
    }),
}));

export const useUserStore = createSelectors(useUserStoreBase);
