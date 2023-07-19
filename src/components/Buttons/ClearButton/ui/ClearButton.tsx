import React, { ComponentPropsWithRef, forwardRef } from 'react';

import clsx from 'clsx';

import cls from './ClearButton.module.css';

export const ClearButton = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <button className={clsx(cls.button, className)} {...restProps} ref={ref}>
        {children}
      </button>
    );
  },
);
