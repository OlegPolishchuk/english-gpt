import React from 'react';

import { Divider, NavLink } from '@mantine/core';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Message2, MessageChatbot, User } from 'tabler-icons-react';

import cls from './Links.module.css';

import { LogoutButton } from '@/components/Buttons';
import { Routes } from '@/shared/constants';

const linksList = [
  {
    path: Routes.main,
    title: 'Chat',
    icon: <MessageChatbot size={30} strokeWidth={1} color={'black'} />,
  },
  {
    path: Routes.profile,
    title: 'Profile',
    icon: <User size={30} strokeWidth={1} color={'black'} />,
  },
  {
    path: Routes.words,
    title: 'Words',
    icon: <Message2 size={30} strokeWidth={1} color={'black'} />,
  },
];

interface Props {
  onClick: (path: string) => void;
  className?: string;
}

export const Links = ({ onClick, className }: Props) => {
  const path = usePathname();

  const isActive = (linkPath: string) => {
    return linkPath === path;
  };

  return (
    <nav className={clsx(cls.navigation, className)}>
      <div className={cls.links}>
        {linksList.map(link => (
          <NavLink
            key={link.path}
            variant={'light'}
            label={link.title}
            icon={link.icon}
            onClick={() => onClick(link.path)}
            color={'green'}
            active={isActive(link.path)}
            className={cls.link}
            classNames={{ label: cls.link_label }}
          />
        ))}
      </div>

      <div className={cls.controls}>
        <Divider my={'lg'} />
        <LogoutButton className={cls.button_logout} />
      </div>
    </nav>
  );
};
