'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import cls from './Nav.module.css';

import { Links } from '@/components/Navigation/ui/Components/Links';

export const Nav = () => {
  const router = useRouter();

  const handleClick = async (path: string) => {
    await router.push(path);
    close();
  };

  return (
    <nav className={cls.navbar}>
      <Links onClick={handleClick} />
    </nav>
  );
};
