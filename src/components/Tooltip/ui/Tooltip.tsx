import React, { ReactNode } from 'react';
import { MantineColor, Tooltip as MantineTooltip } from '@mantine/core';

interface Props {
  children: ReactNode;
  label: string;
  withArrow?: boolean;
  color?: MantineColor;
  offset?: number;
}

export const Tooltip = ({ children, label, withArrow, color, offset }: Props) => {
  return (
    <MantineTooltip label={label} color={color} withArrow={withArrow} offset={offset}>
      {children}
    </MantineTooltip>
  );
};
