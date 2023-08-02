'use client';

import React from 'react';

import { Paper, Title } from '@mantine/core';

import cls from '../Profile.module.css';

import { UserActivity } from '@/models';
import { formatDate } from '@/modules/Profile/utils';

interface Props {
  statistic: UserActivity;
}

export const Statistic = ({ statistic }: Props) => {
  const {
    consecutive_visits,
    week_count_of_visits,
    total_count_of_visits,
    last_visit,
    dates_of_visits,
  } = statistic;

  const statList = [
    { title: 'Days in a row', value: consecutive_visits },
    { title: 'Total visits', value: total_count_of_visits },
    { title: 'Visits per week', value: week_count_of_visits },
    { title: 'Last visit', value: formatDate(last_visit) },
  ];

  return (
    <div className={cls.statistic_container}>
      <h3>Statistics:</h3>

      <div className={cls.statistic_content}>
        {statList.map((stat, index) => (
          <Paper shadow={'sm'} radius={'lg'} p={'md'} key={index}>
            <Title order={3} align={'center'} color={'var(--color-theme)'}>
              {stat.value}
            </Title>
            <Title order={5} color={'dimmed'} align={'center'}>
              {stat.title}
            </Title>
          </Paper>
        ))}
      </div>

      <div className={cls.visits}>
        <h3>All visits:</h3>

        {dates_of_visits.map((date, index) => (
          <p key={index}>{formatDate(date)}</p>
        ))}
      </div>
    </div>
  );
};
