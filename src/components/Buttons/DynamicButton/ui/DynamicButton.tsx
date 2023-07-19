'use client';

import React from 'react';

import { Button } from '@mantine/core';

import cls from './DynamicButton.module.css';

import { Tooltip } from '@/components/Tooltip';
import { SoundIcon } from '@/shared/ui';

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
