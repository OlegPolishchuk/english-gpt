import React from 'react';

import { getServerSession } from 'next-auth';

import { Description } from './Components/Description';
import cls from './Profile.module.css';

import { authConfig } from '@/configs';
import { Statistic } from '@/modules/Profile/ui/Components/Statistic';
import { userService } from '@/services';

export const Profile = async () => {
  const session = await getServerSession(authConfig);
  const userData = await userService.getUserData(session?.user?.email || '');

  const userStatistic = userData.Activity[0];

  return (
    <div className={cls.container}>
      <Description userData={userData} />

      <Statistic statistic={userStatistic} />
    </div>
  );
};
