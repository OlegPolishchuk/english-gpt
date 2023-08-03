import { create } from 'zustand';

import { Message } from '@/models';
import { createSelectors } from '@/store/utils/createSelectors';

interface State {
  messages: Message[];
  push: (message: Message) => void;
}

const startMessage: Message = {
  id: 0,
  text: 'Hello! I am your companion for the near future!',
  created: 123456,
  isUser: false,
};

const useChatStoreBase = create<State>()(set => ({
  messages: [startMessage],
  push: newMessage =>
    set(state => {
      console.log(newMessage);

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }),
}));

export const useChatStore = createSelectors(useChatStoreBase);
