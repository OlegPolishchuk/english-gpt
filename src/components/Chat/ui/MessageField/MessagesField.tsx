'use client';

import React from 'react';
import clsx from 'clsx';
import cls from './MessageField.module.css';
import { ChatMessage } from '../ChatMessages/ChatMessage';
import { ScrollArea } from '@mantine/core';
import { useChatStore } from '@/store/chat/chatStore';

export const MessagesField = () => {
  const messages = useChatStore.use.messages();

  console.log({ messages });

  return (
    <ScrollArea className={cls.scrollArea}>
      <div className={clsx(cls.messagesFiled, 'container')}>
        {messages.map(message => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>
    </ScrollArea>
  );
};
