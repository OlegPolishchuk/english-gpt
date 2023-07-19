'use client';

import React, { ComponentPropsWithRef } from 'react';

import { Button } from '@mantine/core';
import clsx from 'clsx';

import cls from './SensButton.module.css';

import { SendIcon } from '@/shared/ui';

export const SendButton = ({
  className,
  onClick,
  ...restProps
}: ComponentPropsWithRef<'button'>) => {
  return (
    <Button
      variant={'subtle'}
      className={clsx(cls.button, className && className)}
      {...restProps}
      onClick={onClick}
    >
      <SendIcon />
    </Button>
  );
};
