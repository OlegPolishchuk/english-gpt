import React from 'react';

import cls from './Chat.module.css';

import { ChatControls, MessagesField } from '@/modules/Chat/ui/components';

export const Chat = () => {
  return (
    <section className={cls.chat}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
