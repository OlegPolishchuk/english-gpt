'use client';

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import cls from './MessageField.module.css';
import { ChatMessage } from '../ChatMessages/ChatMessage';
import { ScrollArea } from '@mantine/core';
import { useChatStore } from '@/store/chat/chatStore';

export const MessagesField = () => {
  const messages = useChatStore.use.messages();

  const messagesField = useRef<HTMLDivElement>(null);
  const lastMessageInList = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    lastMessageInList.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <ScrollArea className={cls.scrollArea} ref={messagesField}>
      <div className={clsx(cls.messagesFiled, 'container')}>
        {messages.map((message, index) => (
          <ChatMessage
            message={message}
            key={message.id}
            ref={index === messages.length - 1 ? lastMessageInList : null}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
