import React from 'react';

import clsx from 'clsx';
import { getServerSession } from 'next-auth';

import { Controls } from './Components/Controls';
import cls from './Header.module.css';

import { authConfig } from '@/configs';
import { userService } from '@/services';

interface Props {
  className?: string;
}

export const Header = async ({ className }: Props) => {
  const session = await getServerSession(authConfig);
  const userData = await userService.fetchUsersDataIfAuth();

  const isAuth = !!session?.user;
  const userAvatar = userData.image;

  return (
    <header className={cls.header}>
      <div className={clsx(cls.container, !isAuth && 'container', className)}>
        <Controls isAuth={isAuth} avatarSrc={userAvatar} />
      </div>
    </header>
  );
};
