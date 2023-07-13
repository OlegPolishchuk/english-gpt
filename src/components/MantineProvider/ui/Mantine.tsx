'use client';

import { MantineProvider } from '@mantine/core';

export const Mantine = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
