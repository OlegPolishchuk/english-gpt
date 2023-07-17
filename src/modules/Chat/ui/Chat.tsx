'use client';

import React from 'react';
import { useSetMobileHeight } from '../hooks';
import cls from './Chat.module.css';
import { ChatControls, MessagesField } from '@/components/Chat';
export const Chat = () => {
  const height = useSetMobileHeight();

  return (
    <section className={cls.chat} style={{ height: `${height - 65}px` }}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
