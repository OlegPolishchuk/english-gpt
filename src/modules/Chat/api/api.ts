import { Message } from '@/models';
import { sendMessageToGpt } from '@/services/gptService/gptService';

export const getAnswer = async (message: string) => {
  try {
    const data = await sendMessageToGpt(message);

    const answer: Message = {
      created: data.created,
      text: data.choices[0].message.content,
      isUser: false,
      id: data.id,
    };

    return answer;
  } catch (e) {
    console.log(e);
    return {
      created: Date.now(),
      text: 'Error!!! Something went wrong',
      isUser: false,
      id: '0',
    };
  }
};
