'use client';

import React from 'react';

import { useSetMobileHeight } from '../hooks';

import cls from './Chat.module.css';

import { ChatControls, MessagesField } from '@/components/Chat';

const HEADER_HEIGHT = 65;

export const Chat = () => {
  const height = useSetMobileHeight();

  return (
    <section className={cls.chat} style={{ height: `${height - HEADER_HEIGHT}px` }}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
