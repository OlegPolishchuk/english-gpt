import React from 'react';

import clsx from 'clsx';

import cls from './signin.module.css';

import { SignInForm } from '@/modules/Auth';

export default function SignIn() {
  return (
    <main className={clsx(cls.container, 'container')}>
      <SignInForm />
    </main>
  );
}
