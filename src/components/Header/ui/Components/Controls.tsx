'use client';

import React from 'react';

import cls from '../Header.module.css';

import { SignInButton } from '@/components/Buttons';
import { Navigation } from '@/components/Navigation';

interface Props {
  isAuth: boolean;
}

export const Controls = ({ isAuth }: Props) => {
  return (
    <div className={cls.controls}>
      {isAuth ? (
        <>
          <Navigation />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};
