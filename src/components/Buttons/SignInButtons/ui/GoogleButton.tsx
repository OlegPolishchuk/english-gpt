'use client';

import React from 'react';

import { Button } from '@mantine/core';

import { GoogleIcon } from '@/shared/ui';

interface Props {
  callback: (provider: string) => void;
}

export const GoogleButton = async ({ callback }: Props) => {
  const handleClick = () => {
    // callback('google');
  };
  return (
    <Button component={'a'} href={'http://localhost:4200/api/auth/google/login'}  rightIcon={<GoogleIcon />} onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};
