import { KeyboardEvent, useState } from 'react';

import { getAnswer } from '@/modules/Chat/api/api';
import { prepareNewUserMessage } from '@/modules/Chat/utils/prepareNewUserMessage';
import { useChatStore } from '@/store/chat/chatStore';

export const useChatControls = () => {
  const [message, setMessage] = useState('');

  const addMessageToList = useChatStore.use.push();

  const handleChangeMessage = (value: string) => {
    setMessage(value);
  };

  const handleGetVoiceMessage = (message: string) => {
    console.log(message);
    setMessage(message);
  };

  const handleSendToChatGPT = async () => {
    const newMessageId = `${Date.now()}`;
    addMessageToList(prepareNewUserMessage(message, newMessageId));
    setMessage('');

    const answer = await getAnswer(message);

    addMessageToList(answer);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (message.trim() !== '') {
        handleSendToChatGPT();
      }
    }
  };

  return {
    message,
    handleGetVoiceMessage,
    handleChangeMessage,
    handleSendToChatGPT,
    handleKeyUp,
  };
};
