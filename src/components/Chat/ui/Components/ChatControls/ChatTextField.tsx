'use client';

import React from 'react';
import { Textarea } from '@mantine/core';

import cls from '../../Chat.module.css';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const ChatTextField = ({ setValue, value }: Props) => {
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      className={cls.text_field}
      placeholder="Write or tell your question"
      autosize
      radius={'lg'}
      size={'md'}
      maxRows={4}
      variant={'unstyled'}
    />
  );
};
