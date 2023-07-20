'use client';

import React from 'react';

import { Button } from '@mantine/core';
import { useSession, signIn, signOut } from 'next-auth/react';

import cls from '../Header.module.css';

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
        <Button onClick={handleSignOut} variant={'filled'} color={'green'}>
          Logout
        </Button>
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
