import React, { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import cls from './PlayButton.module.css';

import { ClearButton } from '@/components/Buttons';
import { Tooltip } from '@/components/Tooltip';
import { PlayIcon } from '@/shared/ui';

export const PlayButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Continue'}>
      <ClearButton className={clsx(cls.button, props.className)} {...props}>
        <PlayIcon className={cls.icon} />
      </ClearButton>
    </Tooltip>
  );
};
