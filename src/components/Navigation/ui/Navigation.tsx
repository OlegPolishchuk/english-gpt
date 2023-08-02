'use client';

import React from 'react';

import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

import cls from './Navigation.module.css';

import { MenuButton } from '@/components/Buttons';
import { Links } from '@/components/Navigation/ui/Components/Links';

export const Navigation = () => {
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = async (path: string) => {
    console.log(path);
    await router.push(path);
    close();
  };

  return (
    <>
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
    </>
  );
};
