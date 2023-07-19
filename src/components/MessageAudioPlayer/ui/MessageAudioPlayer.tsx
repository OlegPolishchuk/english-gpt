import React from 'react';

import cls from './MessageAudioPlayer.module.css';

import { PauseButton, PlayButton, StopButton } from '@/components/Buttons';
import { DynamicButton } from '@/components/Buttons/DynamicButton';
import { useSpeechFromText } from '@/modules/Chat/hooks';

interface Props {
  message: string;
}

export const MessageAudioPlayer = ({ message }: Props) => {
  const {
    startSpeaking,
    isSpeaking,
    pauseSpeaking,
    stopSpeaking,
    isFinished,
    resumeSpeaking,
  } = useSpeechFromText();

  console.log({ isSpeaking });
  return (
    <div className={cls.player}>
      {isSpeaking && !isFinished ? (
        <>
          <StopButton onClick={stopSpeaking} />

          <PlayButton onClick={resumeSpeaking} />

          <PauseButton onClick={pauseSpeaking} />
        </>
      ) : (
        <DynamicButton onClick={() => startSpeaking(message)} />
      )}
    </div>
  );
};
