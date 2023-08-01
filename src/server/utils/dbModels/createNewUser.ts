import { User } from '@/models';
import { UserFromNextAuth } from '@/server/types';

export const createNewUser = (user: UserFromNextAuth): User => {
  return {
    email: user.email,
    name: user.name,
    image: user.image,
    created: new Date().toISOString(),
  };
};
