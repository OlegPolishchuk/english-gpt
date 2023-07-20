'use client';

import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <MantineProvider>{children}</MantineProvider>
    </SessionProvider>
  );
};
