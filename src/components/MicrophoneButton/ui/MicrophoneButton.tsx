'use client';

import React, { ComponentPropsWithRef } from 'react';
import 'regenerator-runtime/runtime';
import { Button } from '@mantine/core';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { MicIcon, MicOffIcon } from '@/shared/ui';
import clsx from 'clsx';
import cls from './MicrophoneButton.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
  isOn: boolean;
  setVoice: React.Dispatch<React.SetStateAction<string>>;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MicrophoneButton = ({
  isOn = true,
  className,
  setIsOn,
  setVoice,
  ...restProps
}: Props) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!window) {
    return;
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition</span>;
  }

  const startListening = async () => {
    const options = {
      continuous: true,
      language: 'en-US',
    };
    await SpeechRecognition.startListening(options);
    console.log('on');
  };

  console.log(isOn);
  const stopListening = async () => {
    await SpeechRecognition.stopListening();
  };

  const handleToggleIsOn = async () => {
    console.log('wefwefwe');
    setIsOn(prev => !prev);
  };

  return (
    <button
      onClick={handleToggleIsOn}
      className={clsx(cls.button, isOn && cls.button_on, className && className)}
      {...restProps}
    >
      {isOn && <MicIcon className={cls.icon} />}
      {!isOn && <MicOffIcon className={cls.icon} />}
    </button>
  );
};
