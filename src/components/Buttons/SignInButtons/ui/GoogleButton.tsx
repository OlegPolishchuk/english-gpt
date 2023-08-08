'use client';

import React from 'react';

import { Button } from '@mantine/core';

import {Endpoints} from "@/shared/constants";
import { GoogleIcon } from '@/shared/ui';

interface Props {
  callback: (provider: string) => void;
}

export const GoogleButton = async ({ callback }: Props) => {
  const handleClick = () => {
    // callback('google');
  };

  return (
    <Button component={'a'} href={Endpoints.auth.google_login}  rightIcon={<GoogleIcon />} onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};
