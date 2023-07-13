import React from 'react';

import cls from './Header.module.css';
import clsx from 'clsx';
import { Controls } from '@/components/Header/ui/Components/Controls';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={clsx('container', cls.container)}>
        <Controls />
      </div>
    </header>
  );
};
