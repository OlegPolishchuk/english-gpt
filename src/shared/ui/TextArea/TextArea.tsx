'use client';

import React from 'react';
import { Textarea } from '@mantine/core';

interface Props {
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

export const TextArea = ({ setValue, value, className }: Props) => {
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
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
