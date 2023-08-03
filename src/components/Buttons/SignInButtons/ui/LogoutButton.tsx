'use client';

import React from 'react';

import { Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { signOut } from 'next-auth/react';
import { Logout } from 'tabler-icons-react';

import { Routes } from '@/shared/constants';

interface Props {
  className?: string;
}

export const LogoutButton = ({ className }: Props) => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: Routes.main });
  };

  return (
    <Button
      className={className}
      variant={'subtle'}
      color={'gray'}
      leftIcon={<Logout size={30} strokeWidth={1} />}
      onClick={handleSignOut}
    >
      Logout
    </Button>
  );
};
