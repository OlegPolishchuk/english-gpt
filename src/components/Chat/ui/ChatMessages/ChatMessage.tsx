import React, { forwardRef } from 'react';

import cls from './ChatMessages.module.css';
import clsx from 'clsx';
import { MessageHeader } from './Components/MessageHeader';
import { MessageBody } from './Components/MessageBody';
import { Message } from '@/models';
import { transformDateNumberToString } from '@/shared/utils';

interface Props {
  message: Message;
}

export const ChatMessage = forwardRef<HTMLDivElement, Props>(({ message }, ref) => {
  const { isUser, text, created } = message;

  const formattedDate = transformDateNumberToString(created);

  return (
    <div className={clsx(cls.message, isUser && cls.isUser)} ref={ref}>
      <div className={cls.text}>
        <MessageHeader isUser={isUser} message={text} />

        <MessageBody message={text} />

        <p className={clsx(cls.date, isUser && cls.isUser)}>{formattedDate}</p>
      </div>

      <div className={clsx(cls.bubbleArrow, isUser ? cls.isUser : '')}></div>
    </div>
  );
});
