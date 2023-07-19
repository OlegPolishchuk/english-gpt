import React, { ReactNode } from 'react';

import { Tooltip as MantineTooltip } from '@mantine/core';

interface Props {
  children: ReactNode;
  label: string;
  withArrow?: boolean;
  offset?: number;
}

export const Tooltip = ({ children, label, withArrow, offset }: Props) => {
  return (
    <MantineTooltip label={label} withArrow={withArrow} offset={offset}>
      {children}
    </MantineTooltip>
  );
};
