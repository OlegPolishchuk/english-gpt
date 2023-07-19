import React, { ComponentPropsWithRef } from 'react';

import cls from './StopButton.module.css';

import { ClearButton } from '@/components/Buttons';
import { Tooltip } from '@/components/Tooltip';
import { StopIcon } from '@/shared/ui';

export const StopButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Stop'}>
      <ClearButton className={cls.button} {...props}>
        <StopIcon className={cls.stopIcon} />
      </ClearButton>
    </Tooltip>
  );
};
