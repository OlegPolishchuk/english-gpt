'use client';

import React from 'react';

import { Paper, Title } from '@mantine/core';
import { useSearchParams } from 'next/navigation';

import cls from './SignInForm.module.css';

import {
  GitHubButton,
  GoogleButton,
  TwitterButton,
} from '@/components/Buttons/SignInButtons';

export const SignInForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  return (
    <Paper shadow="md" radius="md" p="xl" className={cls.form}>
      <Title order={3} className={cls.title}>
        Sign In:
      </Title>

      <div className={cls.buttons}>
        <GoogleButton callbackUrl={callbackUrl} />
        <TwitterButton callbackUrl={callbackUrl} />
        <GitHubButton callbackUrl={callbackUrl} />
      </div>
    </Paper>
  );
};
