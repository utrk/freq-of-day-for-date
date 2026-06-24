export function validateDate(month: number, date: number) {
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month > 0 && month <= 12 && date > 0 && date <= monthDays[month - 1];
}

export function getDayOfWeekCountsFromDate(month: number, date: number) {
  const counts = Array(7).fill(0);

  for (let year = 2000; year < 2400; ++year) {
    const dateObj = new Date(Date.UTC(year, month - 1, date));
    if (dateObj.getUTCDate() !== date) continue;

    const day = dateObj.getUTCDay();
    counts[day]++;
  }

  return counts;
}
