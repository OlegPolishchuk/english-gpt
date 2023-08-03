'use client';

import React from 'react';

import { Badge, Divider, Space, Title } from '@mantine/core';
import clsx from 'clsx';
import Image from 'next/image';

import cls from '../Profile.module.css';

import { UserAvatar } from '@/components/UserAvatar';
import { User } from '@/models';
import { formatDate } from '@/modules/Profile/utils';
import { UserDataResponse } from '@/services';

interface Props {
  userData: UserDataResponse;
  className?: string;
}

export const Description = ({ userData, className }: Props) => {
  const { name, email, id, created, image, Activity } = userData;

  const formattedDate = formatDate(created);

  return (
    <>
      <div className={clsx(cls.description, className)}>
        <div className={cls.user_info}>
          <div>
            <h2>{name}</h2>
            <h4>{email}</h4>
          </div>

          <div className={cls.sub_info}>
            <p>
              Created: <span>{formattedDate}</span>
            </p>
            <p>
              id: <span>{id}</span>
            </p>
          </div>
        </div>

        {image && (
          <UserAvatar
            className={cls.user_image}
            src={image}
            alt={'user image'}
            width={100}
            height={100}
          />
        )}
      </div>

      <Space my={100} />

      <Divider my={'xs'} />

      <Space my={100} />
    </>
  );
};
