'use client';

import React from 'react';

import clsx from 'clsx';
import { useSession } from 'next-auth/react';

import cls from '../ChatMessages.module.css';

import { MessageAudioPlayer } from '@/components/MessageAudioPlayer';

interface Props {
  isUser: boolean;
  message: string;
}
export const MessageHeader = ({ isUser, message }: Props) => {
  const { data } = useSession();

  const userName = data?.user?.name ?? 'User';

  return (
    <div className={cls.header}>
      <h3 className={clsx(cls.userName, isUser ? cls.user : '')}>
        {isUser ? userName : 'ChatGPT'}
      </h3>

      <div className={clsx(cls.icon_sound, isUser && cls.isUser)}>
        <MessageAudioPlayer message={message} />
      </div>
    </div>
  );
};
