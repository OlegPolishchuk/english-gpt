'use client';

import React from 'react';

import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';

import { Routes } from '@/shared/constants/routes';

export const SignInButton = () => {
  const handleSignIn = async () => {
    await signIn('');
  };

  return (
    <Button
      onClick={handleSignIn}
      component={'a'}
      href={Routes.auth.signin}
      variant={'filled'}
      color={'green'}
    >
      Sign In
    </Button>
  );
};
