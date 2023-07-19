import React, { ComponentPropsWithRef } from 'react';
import cls from './PlayButton.module.css';
import { ClearButton } from '@/components/Buttons';
import { PlayIcon } from '@/shared/ui';
import clsx from 'clsx';
import { Tooltip } from '@/components/Tooltip';

export const PlayButton = (props: ComponentPropsWithRef<'button'>) => {
  return (
    <Tooltip label={'Continue'}>
      <ClearButton className={clsx(cls.button, props.className)}>
        <PlayIcon className={cls.icon} />
      </ClearButton>
    </Tooltip>
  );
};
