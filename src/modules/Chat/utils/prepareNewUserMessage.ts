import { Message } from '@/models';

export const prepareNewUserMessage = (text: string, id: string) => {
  return {
    id,
    created: Date.now(),
    text,
    isUser: true,
  } as Message;
};
