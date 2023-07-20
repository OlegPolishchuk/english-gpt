import React from 'react';

import { getServerSession } from 'next-auth';

import { authConfig } from '@/configs';

const Page = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Page;
