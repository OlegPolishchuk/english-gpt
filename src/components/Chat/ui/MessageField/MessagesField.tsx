'use client';

import React from 'react';
import clsx from 'clsx';
import cls from './MessageField.module.css';
import { ChatMessage } from '../ChatMessages/ChatMessage';
import { ScrollArea } from '@mantine/core';

export const MessagesField = () => {
  return (
    <ScrollArea className={cls.scrollArea}>
      <div className={clsx(cls.messagesFiled, 'container')}>
        <ChatMessage isUser={false} text={''} />
        <ChatMessage isUser={true} text={''} />
        {/*<ChatMessage isUser={false} text={''} />*/}
        {/*<ChatMessage isUser={true} text={''} />*/}
      </div>
    </ScrollArea>
  );
};
