import React from 'react';

import cls from './MessageAudioPlayer.module.css';

import { PauseButton, PlayButton, StopButton } from '@/components/Buttons';
import { DynamicButton } from '@/components/Buttons/DynamicButton';
import { useSpeechFromText } from '@/modules/Chat/hooks';

interface Props {
  message: string;
}

export const MessageAudioPlayer = ({ message }: Props) => {
  const { startSpeaking, isSpeaking, pauseSpeaking, stopSpeaking, isFinished } =
    useSpeechFromText();

  console.log({ isSpeaking });
  return (
    <div className={cls.player}>
      {isSpeaking && !isFinished ? (
        <>
          <StopButton />

          <PlayButton />

          <PauseButton />
        </>
      ) : (
        <DynamicButton onClick={() => startSpeaking(message)} />
      )}
    </div>
  );
};
