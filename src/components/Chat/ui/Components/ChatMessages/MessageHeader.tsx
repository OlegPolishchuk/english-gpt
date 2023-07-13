'use client';

import React from 'react';
import cls from '@/components/Chat/ui/Chat.module.css';
import clsx from 'clsx';
import { DynamicButton } from '@/components';

interface Props {
  isUser: boolean;
}
export const MessageHeader = ({ isUser }: Props) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={cls.text_header}>
      <h3 className={clsx(cls.userName, isUser ? cls.user : '')}>
        {isUser ? 'User' : 'ChatGPT'}
      </h3>

      <div className={clsx(cls.icon_sound, isUser && cls.alt)}>
        <DynamicButton onClick={handleClick} />
      </div>
    </div>
  );
};
