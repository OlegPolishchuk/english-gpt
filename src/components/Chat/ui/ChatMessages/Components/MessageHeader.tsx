'use client';

import React from 'react';
import cls from '../ChatMessages.module.css';
import clsx from 'clsx';
import { DynamicButton } from '../../../../DynamicButton';
import { useSpeechFromText } from '@/modules/Chat/hooks';

interface Props {
  isUser: boolean;
  message: string;
}
export const MessageHeader = ({ isUser, message }: Props) => {
  const { speak } = useSpeechFromText();
  const handleClick = () => {
    speak(message);
  };

  return (
    <div className={cls.text_header}>
      <h3 className={clsx(cls.userName, isUser ? cls.user : '')}>
        {isUser ? 'User' : 'ChatGPT'}
      </h3>

      <div className={clsx(cls.icon_sound, isUser && cls.isUser)}>
        <DynamicButton onClick={handleClick} />
      </div>
    </div>
  );
};
