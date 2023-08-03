import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'regenerator-runtime/runtime';

import { Header } from '@/components/Header';
import { GlobalProvider } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice chat',
  description: 'English voice chat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={inter.className}>
          <Header className={'container'} />
          {children}
        </body>
      </GlobalProvider>
    </html>
  );
}
