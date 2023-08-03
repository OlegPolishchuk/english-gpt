export interface Word {
  id?: UniqueId;
  title: string;
  translate: string;
  transcription?: string;
  user: Email;
}
