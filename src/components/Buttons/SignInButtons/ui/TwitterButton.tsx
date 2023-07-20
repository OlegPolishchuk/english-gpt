'use client';

import React from 'react';

import { Button } from '@mantine/core';

import { TwitterIcon } from '@/shared/ui';

interface Props {
  callbackUrl: string;
}

export const TwitterButton = ({ callbackUrl }: Props) => {
  return (
    <Button rightIcon={<TwitterIcon />} color={'cyan'} disabled>
      Sign in with Twitter
    </Button>
  );
};
