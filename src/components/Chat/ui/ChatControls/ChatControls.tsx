'use client';

import React from 'react';
import cls from './ChatControls.module.css';
import clsx from 'clsx';

import { TextArea } from '@/shared/ui';
import { SendButton } from '@/components/SendButton';
import { useChatControls, useMicrophone } from '@/modules/Chat/hooks';
import { MicrophoneButtonWithTooltip } from '@/components/MicrophoneButtonWithTooltip';

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

          <MicrophoneButtonWithTooltip
            className={cls.control_button_send}
            setVoiceMessage={handleGetVoiceMessage}
            isOn={isOn}
            handleOn={handleOn}
            handleOff={handleOff}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
