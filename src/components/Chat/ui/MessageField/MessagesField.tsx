'use client';

import React, { useRef } from 'react';
import clsx from 'clsx';
import cls from './MessageField.module.css';
import { ChatMessage } from '../ChatMessages/ChatMessage';
import { ScrollArea } from '@mantine/core';
import { useChatStore } from '@/store/chat/chatStore';
import { useScrollMessagesToBottom } from '@/modules/Chat/hooks';

export const MessagesField = () => {
  const messages = useChatStore.use.messages();

  const lastMessageInListRef = useRef<HTMLDivElement>(null);

  useScrollMessagesToBottom(lastMessageInListRef, messages.length);

  return (
    <ScrollArea className={cls.scrollArea}>
      <div className={clsx(cls.messagesFiled, 'container')}>
        {messages.map((message, index) => (
          <ChatMessage
            message={message}
            key={message.id}
            ref={index === messages.length - 1 ? lastMessageInListRef : null}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
