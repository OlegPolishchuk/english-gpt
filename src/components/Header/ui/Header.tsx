import React from 'react';

import clsx from 'clsx';

import {Controls} from './Components/Controls';
import cls from './Header.module.css';

import {me} from '@/services';


interface Props {
  className?: string;
}

export const Header = async ({ className }: Props) => {
  const user = await me();

  const isAuth = !!user;
  const userAvatar = user?.image;

  return (
    <header className={cls.header}>
      <div className={clsx(cls.container, !isAuth && 'container', className)}>
        <Controls isAuth={isAuth} avatarSrc={userAvatar} />
      </div>
    </header>
  );
};
