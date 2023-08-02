'use client';

import React from 'react';

import { SessionProvider } from 'next-auth/react';

import { Mantine } from '../Mantine/Mantine';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Mantine>{children}</Mantine>
    </SessionProvider>
  );
};
