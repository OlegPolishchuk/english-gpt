'use client';

import React, { forwardRef } from 'react';
import 'regenerator-runtime/runtime';

import { MicIcon, MicOffIcon } from '@/shared/ui';
import clsx from 'clsx';
import cls from './MicrophoneButton.module.css';
import { MicrophoneProgress } from '@/components/MicrophoneProgress';

interface Props {
  setVoiceMessage: (message: string) => void;
  className?: string;
  isOn: boolean;
  handleOn: () => Promise<void>;
  handleOff: () => void;
  isLoading?: boolean;
}

export const MicrophoneButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, isOn, isLoading, handleOn, handleOff }, ref) => {
    return (
      <div className={cls.button_microphone}>
        {isOn && (
          <button
            ref={ref}
            onClick={handleOff}
            className={clsx(cls.button, isOn && cls.button_on, className && className)}
          >
            <MicIcon className={cls.icon} />
          </button>
        )}

        {!isOn && (
          <button
            ref={ref}
            onClick={handleOn}
            className={clsx(cls.button, className && className)}
            disabled={isLoading}
          >
            <MicOffIcon className={cls.icon} />
          </button>
        )}

        {isLoading && (
          <MicrophoneProgress className={cls.loading_progressbar} isAnimate={isLoading} />
        )}
      </div>
    );
  },
);
