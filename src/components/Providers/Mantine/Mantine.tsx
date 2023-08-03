'use client';

import React, { ReactNode, useState } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

interface Props {
  children: ReactNode;
}

export const useGluedEmotionCache = (key = 'emotion') => {
  const [cache] = useState(() => {
    const cache = createCache({ key });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);

    if (!entries.length) return null;

    const names = entries
      .map(([n]) => n)
      .filter(n => typeof n === 'string')
      .join(' ');
    const styles = entries.map(([, s]) => s).join('\n');
    const emotionKey = `${key} ${names}`;
    return (
      <style data-emotion={emotionKey} dangerouslySetInnerHTML={{ __html: styles }} />
    );
  });

  return cache;
};

export const Mantine = ({ children }: Props) => {
  const cache = useGluedEmotionCache();

  return (
    <CacheProvider value={cache}>
      <MantineProvider emotionCache={cache}>{children}</MantineProvider>
    </CacheProvider>
  );
};
