'use client';

import React from 'react';
import { Button } from '@mantine/core';
import { SoundIcon } from '@/shared/ui';

import cls from 'src/components/Buttons/DynamicButton/ui/DynamicButton.module.css';
import { Tooltip } from '@/components/Tooltip';

interface Props {
  onClick: () => void;
}

export const DynamicButton = ({ onClick }: Props) => {
  const label = 'click to listen';

  return (
    <Tooltip label={label}>
      <Button variant={'subtle'} className={cls.button} onClick={onClick}>
        <SoundIcon className={cls.icon_sound} />
      </Button>
    </Tooltip>
  );
};
