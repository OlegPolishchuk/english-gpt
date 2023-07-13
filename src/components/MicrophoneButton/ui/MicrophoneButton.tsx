'use client';

import React, { ComponentPropsWithRef } from 'react';
import { Button } from '@mantine/core';

import cls from './MicrophoneButton.module.css';
import { MicIcon, MicOffIcon } from '@/shared/ui';
import clsx from 'clsx';

interface Props extends ComponentPropsWithRef<'button'> {
  isOn: boolean;
}

export const MicrophoneButton = ({
  isOn = true,
  className,
  onClick,
  ...restProps
}: Props) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(cls.button, isOn && cls.button_on, className && className)}
      variant={'subtle'}
      {...restProps}
    >
      {isOn && <MicIcon className={cls.icon} />}
      {!isOn && <MicOffIcon className={cls.icon} />}
    </Button>
  );
};
