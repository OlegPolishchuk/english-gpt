export interface Message {
  content: string;
  role: string;
}

export interface Choices {
  finish_reason: string;
  index: number;
  message: Message;
}

export interface Usage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

export interface SendMessageResponse {
  choices: Choices[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: Usage;
}
