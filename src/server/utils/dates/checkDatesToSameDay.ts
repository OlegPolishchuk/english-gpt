import dayjs from 'dayjs';

export const checkDatesToSameDay = (
  previousDate: string | Date,
  currentDate: string | Date = new Date(),
) => {
  const previousVisitDate = dayjs(previousDate);
  const currentVisitDate = dayjs(currentDate);

  console.log(previousVisitDate);
  console.log(currentVisitDate);

  return currentVisitDate.isSame(previousVisitDate, 'day');
};
