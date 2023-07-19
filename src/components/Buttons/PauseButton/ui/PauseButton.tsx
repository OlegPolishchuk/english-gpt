import React, { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import cls from './PauseButton.module.css';

import { ClearButton } from '@/components/Buttons';
import { Tooltip } from '@/components/Tooltip';
import { PauseIcon } from '@/shared/ui';

export const PauseButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Pause'}>
      <ClearButton className={clsx(cls.button, props.className)} {...props}>
        <PauseIcon className={cls.icon} />
      </ClearButton>
    </Tooltip>
  );
};
