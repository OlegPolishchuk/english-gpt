'use client';

import React from 'react';
import clsx from 'clsx';
import cls from '@/components/Chat/ui/Chat.module.css';
import { ChatMessage } from '@/components/Chat/ui/Components/ChatMessages/ChatMessage';
import { ScrollArea } from '@mantine/core';

export const MessagesField = () => {
  return (
    <ScrollArea className={cls.scrollArea}>
      <div className={clsx(cls.messagesFiled, 'container')}>
        <ChatMessage isUser={false} text={''} />
        <ChatMessage isUser={true} text={''} />
        <ChatMessage isUser={false} text={''} />
        <ChatMessage isUser={true} text={''} />
      </div>
    </ScrollArea>
  );
};
