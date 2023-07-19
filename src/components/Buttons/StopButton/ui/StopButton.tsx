import React, { ComponentPropsWithRef } from 'react';
import { ClearButton } from '@/components/Buttons';
import { StopIcon } from '@/shared/ui';

import cls from './StopButton.module.css';
import { Tooltip } from '@/components/Tooltip';

export const StopButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Stop'}>
      <ClearButton className={cls.button} {...props}>
        <StopIcon className={cls.stopIcon} />
      </ClearButton>
    </Tooltip>
  );
};
