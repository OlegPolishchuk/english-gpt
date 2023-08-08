import './styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'regenerator-runtime/runtime';

import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainConntainer';
import { GlobalProvider } from '@/components/Providers';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice chat',
  description: 'English voice chat',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={inter.className}>
          <Header />
          <MainContainer>{children}</MainContainer>
        </body>
      </GlobalProvider>
    </html>
  );
}
