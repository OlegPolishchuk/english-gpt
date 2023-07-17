import React from 'react';

interface Props {
  message: string;
}
export const MessageBody = ({ message }: Props) => {
  return (
    <p>
      {message}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industrys standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book
    </p>
  );
};
