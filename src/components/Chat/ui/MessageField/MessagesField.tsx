'use client';

import React, { useEffect, useRef, useState } from 'react';

import { ScrollArea } from '@mantine/core';
import clsx from 'clsx';

import { ChatMessage } from '../ChatMessages/ChatMessage';

import cls from './MessageField.module.css';

import { useScrollMessagesToBottom } from '@/modules/Chat/hooks';
import { useChatStore } from '@/store/chat/chatStore';

export const MessagesField = () => {
  const messages = useChatStore.use.messages();

  const lastMessageInListRef = useRef<HTMLDivElement>(null);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useScrollMessagesToBottom(lastMessageInListRef, messages.length);

  return (
    <ScrollArea className={cls.scrollArea} viewportRef={scrollAreaRef}>
      <div className={clsx(cls.messagesFiled, 'container')} ref={scrollAreaRef}>
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
