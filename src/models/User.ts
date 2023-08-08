import { Nullable } from '@/types/common';

export interface User {
  id?: UniqueId;
  email: Email;
  name?: Nullable<UserName>;
  created: Date;
  image?: ImgSrs;
}
