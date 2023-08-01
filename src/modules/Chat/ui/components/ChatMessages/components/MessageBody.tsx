import React from 'react';

import cls from '../ChatMessages.module.css';

interface Props {
  message: string;
}
export const MessageBody = ({ message }: Props) => {
  return <p className={cls.text_container}>{message}</p>;
};
