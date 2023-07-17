import React from 'react';

import cls from './ChatMessages.module.css';
import clsx from 'clsx';
import { MessageHeader } from './Components/MessageHeader';
import { MessageBody } from './Components/MessageBody';

interface Props {
  isUser: boolean;
  text: string;
  date?: string;
}

export const ChatMessage = ({ isUser, text, date }: Props) => {
  return (
    <div className={clsx(cls.message, isUser && cls.alt)}>
      <div className={cls.text}>
        <MessageHeader isUser={isUser} />

        <MessageBody message={text} />
        <p>{date}</p>
      </div>

      <div className={clsx(cls.bubbleArrow, isUser ? cls.alt : '')}></div>
    </div>
  );
};
