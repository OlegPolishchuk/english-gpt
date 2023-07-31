import { Prisma } from '.prisma/client';

import InputJsonObject = Prisma.InputJsonObject;
import { Nullable } from '@/types/common';

export interface User {
  id?: number;
  email: string;
  name?: Nullable<string>;
  created: string;
  image?: string;
  activity: InputJsonObject;
}
