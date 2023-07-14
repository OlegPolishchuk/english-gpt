import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export const useSetMobileChatHeight = () => {
  const matches = useMediaQuery('(max-width: 768px)', true, {
    getInitialValueInEffect: false,
  });

  const [vh, setVh] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [vh]);

  if (!window) {
    return;
  }

  if (matches) {
    const vh = window.innerHeight * 0.01;

    setVh(vh);
  }
};
