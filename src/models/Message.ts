export interface Message {
  id: UniqueId;
  created: number;
  text: string;
  isUser: boolean;
}
