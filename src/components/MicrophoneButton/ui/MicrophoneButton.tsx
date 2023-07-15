'use client';

import React, { ComponentPropsWithRef, useEffect, useRef, useState } from 'react';
import 'regenerator-runtime/runtime';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { MicIcon, MicOffIcon } from '@/shared/ui';
import clsx from 'clsx';
import cls from './MicrophoneButton.module.css';
import { MicrophoneProgress } from '@/components/MicrophoneProgress';

const MIC_INIT_DELAY = 3000;

interface Props extends ComponentPropsWithRef<'button'> {
  isOn: boolean;
  // setVoiceMessage: React.Dispatch<React.SetStateAction<string>>;
  setVoiceMessage: (message: string) => void;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MicrophoneButton = ({
  isOn = true,
  className,
  setIsOn,
  setVoiceMessage,
  ...restProps
}: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timerId = useRef<number | null>(null);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = async () => {
    const options = {
      continuous: true,
      language: 'en-US',
    };
    await SpeechRecognition.startListening(options);
    console.log('on');
  };

  const stopListening = async () => {
    await SpeechRecognition.stopListening();
    resetTranscript();
  };

  const handleOn = async () => {
    await startListening();

    setIsLoading(true);

    timerId.current = window.setTimeout(async () => {
      setIsLoading(false);
      setIsOn(true);
    }, MIC_INIT_DELAY);
  };

  const handleOff = async () => {
    setIsOn(false);

    await stopListening();
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (transcript) {
      setVoiceMessage(transcript);
    }
  }, [transcript]);

  if (!isClient) {
    return null;
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition</span>;
  }

  return (
    <div className={cls.button_microphone}>
      {isOn && (
        <button
          onClick={handleOff}
          className={clsx(cls.button, isOn && cls.button_on, className && className)}
          {...restProps}
        >
          <MicIcon className={cls.icon} />
        </button>
      )}

      {!isOn && (
        <button
          onClick={handleOn}
          className={clsx(cls.button, className && className)}
          disabled={isLoading}
          {...restProps}
        >
          <MicOffIcon className={cls.icon} />
        </button>
      )}

      {isLoading && (
        <MicrophoneProgress className={cls.loading_progressbar} isAnimate={isLoading} />
      )}
    </div>
  );
};
