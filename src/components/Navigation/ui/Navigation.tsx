'use client';

import React from 'react';

import { Drawer, NavLink } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';

import cls from './Navigation.module.css';

import { LogoutButton } from '@/components/Buttons';
import { Links } from '@/components/Navigation/ui/Components/Links';
import { Routes } from '@/shared/constants';

interface Props {
  opened: boolean;
  close: () => void;
}

export const Navigation = ({ opened, close }: Props) => {
  const router = useRouter();

  const handleClick = async (path: string) => {
    console.log(path);
    await router.push(path);
    close();
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      size={'xs'}
      overlayProps={{ opacity: 0.5, blur: 4 }}
      className={cls.drawer}
      classNames={{
        body: cls.drawer_body,
      }}
    >
      <Links onClick={handleClick} />

      <LogoutButton className={cls.button_logout} />
    </Drawer>
  );
};
