'use client';

import React, { ReactNode } from 'react';

import { Tooltip as MantineTooltip } from '@mantine/core';

interface Props {
  children: ReactNode;
  label: string;
  withArrow?: boolean;
  offset?: number;
  className?: string;
}

export const Tooltip = ({ children, label, withArrow, offset, className }: Props) => {
  return (
    <MantineTooltip
      label={label}
      withArrow={withArrow}
      offset={offset}
      className={className}
    >
      {children}
    </MantineTooltip>
  );
};
