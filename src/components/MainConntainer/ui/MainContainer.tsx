import React, { ReactNode } from 'react';

import { getServerSession } from 'next-auth';

import cls from './MainCointainer.module.css';

import { Nav } from '@/components/Navigation';
import { authConfig } from '@/configs';

interface Props {
  children: ReactNode;
}
export const MainContainer = async ({ children }: Props) => {
  const session = await getServerSession(authConfig);
  const isAuth = !!session?.user?.name;

  return (
    <main className={cls.container}>
      {isAuth && (
        <aside className={cls.leftbar}>
          <Nav />
        </aside>
      )}

      <section className={cls.content}>{children}</section>
    </main>
  );
};
