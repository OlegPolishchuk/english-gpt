'use client';

import React, { useState } from 'react';
import cls from '@/components/Chat/ui/Chat.module.css';
import clsx from 'clsx';
import { MicrophoneButton, SendButton } from '@/components';
import { ChatTextField } from './ChatTextField';

const TOKEN = process.env.NEXT_PUBLIC_CHAT_GPT_API_KEY_DEV;
const URL = process.env.NEXT_PUBLIC_CHAT_GPT_ENDPOINT_DEV;

// 'https://api.openai.com/v1/chat/completions'

export const ChatControls = () => {
  const [message, setMessage] = useState('');
  // const [voiceMessage, setVoiceMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleChangeMessage = (value: string) => {
    setIsListening(true);

    setMessage(value);
  };

  const handleGetVoiceMessage = (message: string) => {
    setMessage(message);
  };

  const handleSendToChatGPT = async () => {
    // // const res = await fetch(`${URL}/chat/completions`, {
    // //   method: 'POST',
    // //   headers: {
    // //     Authorization: `Bearer ${TOKEN}`,
    // //     'Content-Type': 'application/json',
    // //   },
    // //   body: JSON.stringify({
    // //     model: 'gpt-3.5-turbo',
    // //     messages: [{ role: 'user', content: 'HELLO' }],
    // //   }),
    // // });
    // //
    // // const data = await res.json();
    //
    // console.log(data);

    console.log('click');
  };

  return (
    <div className={cls.controls}>
      <div className={clsx(cls.controls_container, 'container')}>
        <ChatTextField value={message} setValue={handleChangeMessage} />
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
