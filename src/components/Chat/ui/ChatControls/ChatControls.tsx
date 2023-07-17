'use client';

import React, { useState, useId, KeyboardEvent } from 'react';
import cls from './ChatControls.module.css';
import clsx from 'clsx';

import { TextArea } from '@/shared/ui';
import { SendButton } from '@/components/SendButton';
import { MicrophoneButton } from '@/components/MicrophoneButton';
import { useChatStore } from '@/store/chat/chatStore';
import { getAnswer } from '@/modules/Chat/api/api';
import { prepareNewUserMessage } from '@/modules/Chat/utils/prepareNewUserMessage';

export const ChatControls = () => {
  const [message, setMessage] = useState('');
  const id = useId();

  const [isListening, setIsListening] = useState(false);

  const addMessageToList = useChatStore.use.push();

  const handleChangeMessage = (value: string) => {
    setIsListening(true);

    setMessage(value);
  };

  const handleGetVoiceMessage = (message: string) => {
    setMessage(message);
  };

  const handleSendToChatGPT = async () => {
    const newMessageId = `${id}${Date.now()}`;
    addMessageToList(prepareNewUserMessage(message, newMessageId));
    setMessage('');

    const answer = await getAnswer(message);

    addMessageToList(answer);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleSendToChatGPT();
    }
  };

  return (
    <div className={cls.controls}>
      <div className={clsx(cls.controls_container, 'container')}>
        <TextArea
          value={message}
          setValue={handleChangeMessage}
          className={cls.text_field}
          onKeyPress={handleKeyUp}
        />

        <div className={cls.controls_buttons}>
          <SendButton className={cls.button_send} onClick={handleSendToChatGPT} />

          <MicrophoneButton
            className={cls.control_button_send}
            isOn={isListening}
            setVoiceMessage={handleGetVoiceMessage}
            setIsOn={setIsListening}
          />
        </div>
      </div>
    </div>
  );
};
