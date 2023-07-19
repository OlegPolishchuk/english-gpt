import React, { ComponentPropsWithRef } from 'react';
import { ClearButton } from '@/components/Buttons';
import { PauseIcon } from '@/shared/ui';

import cls from './PauseButton.module.css';
import clsx from 'clsx';
import { Tooltip } from '@/components/Tooltip';

export const PauseButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Pause'}>
      <ClearButton className={clsx(cls.button, props.className)}>
        <PauseIcon className={cls.icon} />
      </ClearButton>
    </Tooltip>
  );
};
