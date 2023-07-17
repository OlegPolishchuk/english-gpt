import 'src/app/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'regenerator-runtime/runtime';

import { Header } from '@/components/Header';
import { Mantine } from '@/components/MantineProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice chat',
  description: 'English voice chat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Mantine>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </Mantine>
    </html>
  );
}
