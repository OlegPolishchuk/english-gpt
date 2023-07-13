'use client';

import React from 'react';
import cls from '@/components/Header/ui/Header.module.css';
import { Button } from '@mantine/core';

export const Controls = () => {
  return (
    <div className={cls.controls}>
      <Button variant={'filled'} color={'green'}>
        Log in
      </Button>
      <Button variant={'filled'} color={'green'}>
        Sign Up
      </Button>
    </div>
  );
};
