'use client';

import React, { KeyboardEvent } from 'react';
import { Textarea } from '@mantine/core';

interface Props {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ setValue, onKeyPress, value, className }: Props) => {
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyUp={onKeyPress}
      className={className}
      placeholder="Write or tell your question"
      autosize
      radius={'lg'}
      size={'md'}
      maxRows={4}
      variant={'unstyled'}
    />
  );
};
