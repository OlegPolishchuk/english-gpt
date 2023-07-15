'use client';

import React from 'react';
import { MessagesField } from '../ChatMessages/MessagesField';
import { ChatControls } from '../ChatControls/ChatControls';
import cls from '@/components/Chat/ui/Chat.module.css';
import { useSetMobileHeight } from '@/hooks';

export const ChatClientModule = () => {
  const height = useSetMobileHeight();

  return (
    <section className={cls.chat} style={{ height: `${height - 65}px` }}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
