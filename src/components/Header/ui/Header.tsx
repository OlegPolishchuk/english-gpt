import React from 'react';

import clsx from 'clsx';

import cls from './Header.module.css';

import { SignInButtons } from '@/components/Buttons';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={clsx('container', cls.container)}>
        <SignInButtons />
      </div>
    </header>
  );
};
