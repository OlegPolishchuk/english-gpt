'use client';

import React from 'react';

import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';

import { GoogleIcon } from '@/shared/ui';

interface Props {
  callbackUrl: string;
}

export const GoogleButton = ({ callbackUrl }: Props) => {
  const handleClick = () =>
    signIn('google', {
      callbackUrl,
    });

  return (
    <Button rightIcon={<GoogleIcon />} onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};
