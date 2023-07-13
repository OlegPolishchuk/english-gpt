import React from 'react';

import cls from './Chat.module.css';
import { ChatControls } from './Components/ChatControls/ChatControls';
import { MessagesField } from '@/components/Chat/ui/Components/ChatMessages/MessagesField';

export const Chat = () => {
  return (
    <section className={cls.chat}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
