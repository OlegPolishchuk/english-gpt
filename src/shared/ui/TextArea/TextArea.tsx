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
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyUp={onKeyPress}
      onKeyDown={handleKeyDown}
      className={className}
      placeholder="Write or say your question"
      autosize
      radius={'lg'}
      size={'md'}
      maxRows={4}
      variant={'unstyled'}
    />
  );
};
