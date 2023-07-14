'use client';

import React, { useEffect, useState } from 'react';
import { MessagesField } from '@/components/Chat/ui/Components/ChatMessages/MessagesField';
import { ChatControls } from '@/components/Chat/ui/Components/ChatControls/ChatControls';
import cls from '@/components/Chat/ui/Chat.module.css';

export const ChatClientModule = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  // Добавляем обработчик события изменения размера окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className={cls.chat} style={{ height: `${height - 65}px` }}>
      <MessagesField />

      <ChatControls />
    </section>
  );
};
