export const transformDateNumberToString = (date: number) => {
  // Получаем текущую дату
  // Функция для добавления ведущего нуля к числу, если оно меньше 10
  const currentDate = new Date(date);
  function addLeadingZero(number: number) {
    return number < 10 ? '0' + number : number;
  }

  // Получаем день, месяц и год из текущей даты
  const day = addLeadingZero(currentDate.getDate());
  const month = addLeadingZero(currentDate.getMonth() + 1); // Месяцы в JavaScript отсчитываются с 0 (январь) до 11 (декабрь)
  const year = currentDate.getFullYear();

  // Формируем строку в формате "dd.mm.yyyy"
  const dateString = `${day}.${month}.${year}`;

  return dateString;
};
