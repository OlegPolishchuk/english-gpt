'use client';

import React from 'react';
import cls from './ChatControls.module.css';
import clsx from 'clsx';

import { TextArea } from '@/shared/ui';
import { SendButton } from '@/components/SendButton';
import { MicrophoneButton } from '@/components/MicrophoneButton';
import { useChatControls, useMicrophone } from '@/modules/Chat/hooks';

export const ChatControls = () => {
  const {
    handleGetVoiceMessage,
    handleChangeMessage,
    message,
    handleSendToChatGPT,
    handleKeyUp,
  } = useChatControls();

  const { isOn, handleOn, handleOff, isLoading, resetTranscript } =
    useMicrophone(handleGetVoiceMessage);

  const handleSendMessage = async () => {
    await handleSendToChatGPT();

    resetTranscript();
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
          <SendButton
            className={cls.button_send}
            onClick={handleSendMessage}
            disabled={message.trim() === ''}
          />

          <MicrophoneButton
            className={cls.control_button_send}
            isOn={isOn}
            handleOn={handleOn}
            handleOff={handleOff}
            isLoading={isLoading}
            setVoiceMessage={handleGetVoiceMessage}
          />
        </div>
      </div>
    </div>
  );
};
