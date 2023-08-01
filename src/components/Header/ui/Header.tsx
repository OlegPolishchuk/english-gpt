import React from 'react';

import clsx from 'clsx';
import { getServerSession } from 'next-auth';

import { Controls } from './Components/Controls';
import cls from './Header.module.css';

import { authConfig } from '@/configs';

export const Header = async () => {
  const session = await getServerSession(authConfig);
  const isAuth = !!session?.user?.name;

  return (
    <header className={cls.header}>
      <div className={clsx('container', cls.container)}>
        <Controls isAuth={isAuth} />
      </div>
    </header>
  );
};
