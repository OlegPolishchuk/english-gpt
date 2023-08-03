import React from 'react';

import clsx from 'clsx';
import { getServerSession } from 'next-auth';

import { Controls } from './Components/Controls';
import cls from './Header.module.css';

import { authConfig } from '@/configs';

interface Props {
  className?: string;
}

export const Header = async ({ className }: Props) => {
  const session = await getServerSession(authConfig);
  const isAuth = !!session?.user?.name;

  return (
    <header className={cls.header}>
      <div className={clsx(cls.container, className)}>
        <Controls isAuth={isAuth} />
      </div>
    </header>
  );
};
