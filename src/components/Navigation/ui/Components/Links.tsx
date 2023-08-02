import React from 'react';

import { NavLink } from '@mantine/core';
import { usePathname } from 'next/navigation';

import cls from '@/components/Navigation/ui/Navigation.module.css';
import { Routes } from '@/shared/constants';

const linksList = [
  { path: Routes.main, title: 'Chat' },
  { path: Routes.profile, title: 'Profile' },
];

interface Props {
  onClick: (path: string) => void;
}

export const Links = ({ onClick }: Props) => {
  const path = usePathname();

  const isActive = (linkPath: string) => {
    return linkPath === path;
  };

  return (
    <nav className={cls.navigation}>
      <div className={cls.links}>
        {linksList.map(link => (
          <NavLink
            key={link.path}
            variant={'light'}
            label={link.title}
            onClick={() => onClick(link.path)}
            color={'green'}
            active={isActive(link.path)}
            classNames={{ label: cls.link_label }}
          />
        ))}
      </div>
    </nav>
  );
};
