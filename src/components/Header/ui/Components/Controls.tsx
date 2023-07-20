'use client';

import React from 'react';

import { Button } from '@mantine/core';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import cls from '../Header.module.css';

import { Routes } from '@/shared/constants/routes';

export const Controls = () => {
  const { data, status } = useSession();

  console.log({ data });
  console.log({ status });

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className={cls.controls}>
      {status === 'authenticated' ? (
        <>
          <Link href={Routes.protected.profile}>Profile</Link>

          <Button onClick={handleSignOut} variant={'filled'} color={'green'}>
            Logout
          </Button>
        </>
      ) : (
        <Button
          component={'a'}
          href={'/api/auth/signin'}
          variant={'filled'}
          color={'green'}
        >
          Sign In
        </Button>
      )}
    </div>
  );
};
