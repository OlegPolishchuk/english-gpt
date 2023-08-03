import type { Metadata } from 'next';

import 'regenerator-runtime/runtime';
import cls from './profile.module.css';

import { Nav } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Voice chat',
  description: 'English voice chat',
};

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={cls.container}>
      <aside className={cls.leftbar}>
        <Nav />
      </aside>

      <section className={cls.content}>{children}</section>
    </main>
  );
}
