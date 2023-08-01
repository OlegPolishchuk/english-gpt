'use client';

import React from 'react';

import { useDisclosure } from '@mantine/hooks';
import { signOut } from 'next-auth/react';

import cls from '../Header.module.css';

import { MenuButton, SignInButton } from '@/components/Buttons';
import { Navigation } from '@/components/Navigation';
import { Routes } from '@/shared/constants/routes';

interface Props {
  isAuth: boolean;
}

export const Controls = ({ isAuth }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={cls.controls}>
      {isAuth ? (
        <>
          <MenuButton handleOpen={open} />
          <Navigation opened={opened} close={close} />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};
