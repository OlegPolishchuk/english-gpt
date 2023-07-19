import React, { ComponentPropsWithRef, forwardRef } from 'react';
import cls from './ClearButton.module.css';
import clsx from 'clsx';

export const ClearButton = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <button className={clsx(cls.button, className)} {...restProps} ref={ref}>
        {children}
      </button>
    );
  },
);
