'use client';

import React, { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import cls from './SendButton.module.css';

import { SendIcon } from '@/shared/ui';

export const SendButton = ({
  className,
  onClick,
  ...restProps
}: ComponentPropsWithRef<'button'>) => {
  return (
    <button
      className={clsx(cls.button, className && className)}
      {...restProps}
      onClick={onClick}
    >
      <SendIcon />
    </button>
  );
};
