'use client';

import React from 'react';
import { Button } from '@mantine/core';
import { SoundIcon } from '@/shared/ui';

import cls from './DynamicButton.module.css';

interface Props {
  onClick: () => void;
}

export const DynamicButton = ({ onClick }: Props) => {
  return (
    <Button variant={'subtle'} className={cls.button} onClick={onClick}>
      <SoundIcon />
    </Button>
  );
};
