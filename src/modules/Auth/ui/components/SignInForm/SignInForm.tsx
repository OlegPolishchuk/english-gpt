'use client';

import React from 'react';

import { Paper, Title } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import cls from './SignInForm.module.css';

import {
  GitHubButton,
  GoogleButton,
  TwitterButton,
} from '@/components/Buttons/SignInButtons';

export const SignInForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  const handleClick = (provider: string) => {
    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <Paper shadow="md" radius="md" p="xl" className={cls.form}>
      <Title order={3} className={cls.title}>
        Sign In:
      </Title>

      <div className={cls.buttons}>
        <GoogleButton callback={handleClick} />
        <TwitterButton callback={handleClick} />
        <GitHubButton callback={handleClick} />
      </div>
    </Paper>
  );
};
