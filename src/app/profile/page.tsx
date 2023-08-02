import React from 'react';

import { getServerSession } from 'next-auth';

import { authConfig } from '@/configs';
import { userService } from '@/services';

const Page = async () => {
  const session = await getServerSession(authConfig);

  const userData = await userService.getUserData(session?.user?.email || '');

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default Page;
