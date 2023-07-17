import React from 'react';

interface Props {
  message: string;
}
export const MessageBody = ({ message }: Props) => {
  return <p>{message}</p>;
};
