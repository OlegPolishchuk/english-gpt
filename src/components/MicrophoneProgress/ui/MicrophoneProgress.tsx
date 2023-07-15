import React from 'react';

import clsx from 'clsx';

import cls from './MicrophoneProgress.module.css';

interface Props {
  className?: string;
  isAnimate: boolean;
}

export const MicrophoneProgress = ({ className, isAnimate }: Props) => {
  return <div className={clsx(cls.circle_wrap, className, isAnimate && cls.animate)} />;
};
