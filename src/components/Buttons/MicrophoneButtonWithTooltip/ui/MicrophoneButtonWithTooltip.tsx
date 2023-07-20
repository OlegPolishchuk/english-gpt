'use client';

import React from 'react';

import { Popover, Text } from '@mantine/core';

import { MicrophoneButton } from '@/components/Buttons/MicrophoneButton';

interface Props {
  setVoiceMessage: (message: string) => void;
  className?: string;
  isOn: boolean;
  handleOn: () => Promise<void>;
  handleOff: () => void;
  isLoading?: boolean;
}

const INIT_MESSAGE = 'Initializing...';
const READY_MESSAGE = 'Ready to speak';

export const MicrophoneButtonWithTooltip = ({
  className,
  setVoiceMessage,
  isOn,
  isLoading,
  handleOn,
  handleOff,
}: Props) => {
  const popoverMessage = isLoading ? INIT_MESSAGE : READY_MESSAGE;

  return (
    <Popover opened={isOn || isLoading}>
      <Popover.Target>
        <MicrophoneButton
          className={className}
          setVoiceMessage={setVoiceMessage}
          isOn={isOn}
          handleOn={handleOn}
          handleOff={handleOff}
          isLoading={isLoading}
        />
      </Popover.Target>

      <Popover.Dropdown>
        <Text color={isLoading ? 'orange' : 'green'}>{popoverMessage}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
