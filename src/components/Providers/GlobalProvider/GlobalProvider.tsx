import React from 'react';

import { getServerSession } from 'next-auth';

import { Mantine } from '../Mantine/Mantine';
import { NextSessionProvider } from '../NextSession/NextSessionProvider';

import { authConfig } from '@/configs';
import { userService } from '@/services';

export const GlobalProvider = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authConfig);
  const userData = await userService.getUserData(session?.user?.email || '');

  return (
    <NextSessionProvider user={userData}>
      <Mantine>{children}</Mantine>
    </NextSessionProvider>
  );
};
