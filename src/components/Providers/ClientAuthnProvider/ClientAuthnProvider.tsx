'use client';

import React, {ReactNode, useEffect} from 'react';

import {User} from "@/models";
import {useUserStore} from '@/store/user/userStore';

interface Props {
  children: ReactNode;
  user: User;
}
export const ClientAuthnProvider = ({ children, user }: Props) => {
  const setUser = useUserStore.use.setUser();

  useEffect(() => {
    setUser(user);
  }, []);

  return <>{children}</>;
};
