import React from 'react';

import {Description} from './Components/Description';
import cls from './Profile.module.css';

import {Statistic} from '@/modules/Profile/ui/Components/Statistic';
import {userService} from '@/services';

export const Profile = async () => {
  const userData = await userService.getUserProfile();
  const userStatistic = userData.Activity[0];

  return (
    <div className={cls.container}>
      <Description userData={userData} />

      <Statistic statistic={userStatistic} />
    </div>
  );
};
