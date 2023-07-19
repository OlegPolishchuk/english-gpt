import React from 'react';

import cls from './MessageAudioPlayer.module.css';
import { useSpeechFromText } from '@/modules/Chat/hooks';
import { DynamicButton } from '@/components/Buttons/DynamicButton';
import { PauseButton, PlayButton, StopButton } from '@/components/Buttons';

interface Props {
  message: string;
}

export const MessageAudioPlayer = ({ message }: Props) => {
  const { startSpeaking, isSpeaking, pauseSpeaking, stopSpeaking } = useSpeechFromText();

  return (
    <div className={cls.player}>
      <DynamicButton onClick={() => startSpeaking(message)} />

      <StopButton />

      <PlayButton />

      <PauseButton />
    </div>
  );
};
