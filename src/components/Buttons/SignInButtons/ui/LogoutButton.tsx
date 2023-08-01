'use client';

import React from 'react';

import { ActionIcon } from '@mantine/core';
import { signOut } from 'next-auth/react';
import { Logout } from 'tabler-icons-react';

import { Tooltip } from '@/components/Tooltip';
import { Routes } from '@/shared/constants';

export const LogoutButton = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: Routes.main });
  };

  return (
    <Tooltip label={'Log out'}>
      <ActionIcon onClick={handleSignOut}>
        <Logout size={48} strokeWidth={2} color={'var(--color-theme)'} />
      </ActionIcon>
    </Tooltip>
  );
};