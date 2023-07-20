'use client';

import React from 'react';

import { Button } from '@mantine/core';
import Link from 'next/link';
import { signOut, useSession, signIn } from 'next-auth/react';

import { Routes } from '@/shared/constants/routes';

export const SignInButtons = () => {
  const { status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: Routes.main });
  };

  const handleSignIn = async () => {
    await signIn('');
  };

  return (
    <>
      {status === 'authenticated' ? (
        <>
          <Link href={Routes.protected.profile}>Profile</Link>

          <Button onClick={handleSignOut} variant={'filled'} color={'green'}>
            Logout
          </Button>
        </>
      ) : (
        <Button
          onClick={handleSignIn}
          component={'a'}
          href={'/api/auth/signin'}
          variant={'filled'}
          color={'green'}
        >
          Sign In
        </Button>
      )}
    </>
  );
};
