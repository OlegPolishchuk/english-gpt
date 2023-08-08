import React, {ReactNode} from 'react';

import cls from './MainCointainer.module.css';

import {Nav} from '@/components/Navigation';
import {isUserAuth} from "@/modules/Auth";

interface Props {
  children: ReactNode;
}
export const MainContainer = async ({ children }: Props) => {
  const isAuth = await isUserAuth();
  console.log(isAuth)

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
