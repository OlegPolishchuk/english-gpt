import { useEffect } from 'react';

export const useScrollMessagesToBottom = (
  messageRef: React.RefObject<HTMLDivElement>,
  messagesLength: number,
) => {
  const scrollToBottom = () => {
    messageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesLength]);
};
