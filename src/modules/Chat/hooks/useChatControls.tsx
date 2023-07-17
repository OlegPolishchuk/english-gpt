import { KeyboardEvent, useState } from 'react';
import { useChatStore } from '@/store/chat/chatStore';
import { prepareNewUserMessage } from '@/modules/Chat/utils/prepareNewUserMessage';
import { getAnswer } from '@/modules/Chat/api/api';

export const useChatControls = () => {
  const [message, setMessage] = useState('');

  const addMessageToList = useChatStore.use.push();

  const handleChangeMessage = (value: string) => {
    setMessage(value);
  };

  const handleGetVoiceMessage = (message: string) => {
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
