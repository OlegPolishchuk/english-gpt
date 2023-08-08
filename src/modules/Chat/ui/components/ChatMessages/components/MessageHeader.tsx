'use client';

import React from 'react';

import clsx from 'clsx';

import cls from '../ChatMessages.module.css';

import {MessageAudioPlayer} from '@/components/MessageAudioPlayer';
import {useUserStore} from "@/store/user/userStore";

interface Props {
  isUser: boolean;
  message: string;
}
export const MessageHeader = ({ isUser, message }: Props) => {
  const userName = useUserStore.use.user().name;

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
