import React from 'react';

import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authConfig } from '@/configs';

const Page = async () => {
  const session = await getServerSession(authConfig);

  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  // console.log({ userName });
  // console.log({ userImage });

  return (
    <div>
      {/*<h1>Profile of {userName}</h1>*/}
      {/*{session?.user?.image && (*/}
      {/*  <Image src={session.user.image} alt={'profile image'} width={100} height={100} />*/}
      {/*)}*/}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Page;
