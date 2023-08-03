import { UserFromNextAuth } from '@/server/types';
import { Nullable } from '@/types/common';

export interface User {
  id?: UniqueId;
  email: Email;
  name?: Nullable<UserName>;
  created: DateString;
  image?: ImgSrs;
}

export const createNewUser = (user: UserFromNextAuth): User => {
  return {
    email: user.email,
    name: user.name,
    image: user.image,
    created: new Date().toISOString(),
  };
};
