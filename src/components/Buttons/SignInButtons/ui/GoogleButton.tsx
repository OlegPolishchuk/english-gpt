'use client';

import React from 'react';

import { Button } from '@mantine/core';

import { GoogleIcon } from '@/shared/ui';

interface Props {
  callback: (provider: string) => void;
}

export const GoogleButton = ({ callback }: Props) => {
  const handleClick = () => {
    callback('google');
  };
  return (
    <Button rightIcon={<GoogleIcon />} onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};
