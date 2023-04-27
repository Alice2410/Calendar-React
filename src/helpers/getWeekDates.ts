export function getWeekDates (startDate: number) {
  const dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(startDate+i);
  }

  return dates;
}