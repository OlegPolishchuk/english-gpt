import React from 'react';

import cls from './Chat.module.css';

import { ChatControls, MessagesField } from '@/components/Chat';

export const Chat = () => {
  return (
    <section className={cls.chat}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
