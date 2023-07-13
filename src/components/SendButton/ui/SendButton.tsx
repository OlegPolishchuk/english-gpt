'use client';

import React, { ComponentPropsWithRef } from 'react';
import { Button } from '@mantine/core';
import { SendIcon } from '@/shared/ui';

import cls from './SensButton.module.css';
import clsx from 'clsx';

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
