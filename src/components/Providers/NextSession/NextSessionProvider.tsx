'use client';

import React, { ReactNode, useEffect } from 'react';

import { SessionProvider } from 'next-auth/react';

import { UserDataResponse } from '@/services';
import { useUserStore } from '@/store/user/userStore';

interface Props {
  children: ReactNode;
  user: UserDataResponse;
}
export const NextSessionProvider = ({ children, user }: Props) => {
  const setUser = useUserStore.use.setUser();

  useEffect(() => {
    setUser(user);
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};
