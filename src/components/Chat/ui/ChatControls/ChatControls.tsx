'use client';

import React, { useState, useId } from 'react';
import cls from './ChatControls.module.css';
import clsx from 'clsx';

import { TextArea } from '@/shared/ui';
import { SendButton } from '@/components/SendButton';
import { MicrophoneButton } from '@/components/MicrophoneButton';
import { useChatStore } from '@/store/chat/chatStore';
import { getAnswer } from '@/modules/Chat/api/api';
import { prepareNewUserMessage } from '@/modules/Chat/utils/prepareNewUserMessage';

const TOKEN = process.env.NEXT_PUBLIC_CHAT_GPT_API_KEY_DEV;
const URL = process.env.NEXT_PUBLIC_CHAT_GPT_ENDPOINT_DEV;

// 'https://api.openai.com/v1/chat/completions'

export const ChatControls = () => {
  const [message, setMessage] = useState('');
  const id = useId();
  // const [voiceMessage, setVoiceMessage] = useState('');
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
    addMessageToList(prepareNewUserMessage(message, id));

    const answer = await getAnswer(message);

    addMessageToList(answer);
  };

  return (
    <div className={cls.controls}>
      <div className={clsx(cls.controls_container, 'container')}>
        <TextArea
          value={message}
          setValue={handleChangeMessage}
          className={cls.text_field}
        />
        {/*{message ? (*/}
        {/*  <SendButton className={cls.control_button_send} onClick={handleSendToChatGPT} />*/}
        {/*) : (*/}
        {/*  <MicrophoneButton*/}
        {/*    className={cls.control_button_send}*/}
        {/*    isOn={isListening}*/}
        {/*    // onClick={handleGetVoiceMessage}*/}
        {/*    setVoice={setVoiceMessage}*/}
        {/*    setIsOn={setIsListening}*/}
        {/*  />*/}
        {/*)}*/}

        <div className={cls.controls_buttons}>
          <SendButton className={cls.button_send} onClick={handleSendToChatGPT} />

          <MicrophoneButton
            className={cls.control_button_send}
            isOn={isListening}
            // onClick={handleGetVoiceMessage}
            setVoiceMessage={handleGetVoiceMessage}
            setIsOn={setIsListening}
          />
        </div>
      </div>
    </div>
  );
};
