'use client';

import React from 'react';

import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

import cls from './Mobile.module.css';

import { MenuButton } from '@/components/Buttons';
import { Links } from '@/components/Navigation/ui/Components/Links';

export const MobileNav = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = async (path: string) => {
    await router.push(path);
    close();
  };

  return (
    <div className={cls.mobile_nav}>
      <MenuButton handleOpen={open} />
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
      </Drawer>
    </div>
  );
};
