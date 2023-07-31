'use client';

import React from 'react';

import { Button } from '@mantine/core';

import { GithubIcon } from '@/shared/ui';

interface Props {
  callback: (provider: string) => void;
}

export const GitHubButton = ({ callback }: Props) => {
  return (
    <Button rightIcon={<GithubIcon />} color={'red'} disabled>
      Sign in with Github
    </Button>
  );
};
