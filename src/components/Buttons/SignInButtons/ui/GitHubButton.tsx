'use client';

import React from 'react';

import { Button } from '@mantine/core';

import { GithubIcon } from '@/shared/ui';

interface Props {
  callbackUrl: string;
}

export const GitHubButton = ({ callbackUrl }: Props) => {
  return (
    <Button rightIcon={<GithubIcon />} color={'red'} disabled>
      Sign in with Github
    </Button>
  );
};
