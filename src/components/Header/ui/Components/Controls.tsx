'use client';

import React from 'react';

import { Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import cls from '../Header.module.css';

import { SignInButton } from '@/components/Buttons';
import { MobileNav } from '@/components/Navigation';
import { UserAvatar } from '@/components/UserAvatar';

interface Props {
  isAuth: boolean;
  avatarSrc?: ImgSrs;
}

export const Controls = ({ isAuth, avatarSrc }: Props) => {
  const isSmallScreen = useMediaQuery('(max-width: 992px)');

  return (
    <div className={cls.controls}>
      {isAuth ? (
        <>
          {avatarSrc && (
            <>
              <UserAvatar src={avatarSrc} width={40} height={40} />
              {isSmallScreen && <Divider orientation={'vertical'} mx={'lg'} />}
            </>
          )}

          <MobileNav />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};
