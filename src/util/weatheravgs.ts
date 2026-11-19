import type WeatherRecord from "../types/weathertype";

const SKIP = new Set(['date', 'TIMESTAMP', 'RECORD']);

export function dailyAverages(
  records: WeatherRecord[]
): Record<string, number | null> {
  if (records.length === 0) return {};

  // "Today" = the date on the newest row, e.g. "2026-11-19"
  const today = records[records.length - 1].TIMESTAMP.slice(0, 10);
  const todayRows = records.filter((r) => r.TIMESTAMP.startsWith(today));

  const averages: Record<string, number | null> = {};

  // Use the first row's keys as the list of columns
  for (const key of Object.keys(todayRows[0])) {
    if (SKIP.has(key)) continue;

    // Keep only valid numbers (drops NaN and strings like "NAN")
    const values = todayRows
      .map((r) => r[key])
      .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

    averages[key] =
      values.length > 0
        ? values.reduce((sum, v) => sum + v, 0) / values.length
        : null;
  }

  return averages;
}

export function weeklyAverages(
  records: WeatherRecord[]
): Record<string, number | null> {
  if (records.length === 0) return {};

  const today = records[records.length - 1].TIMESTAMP.slice(0, 10);
  const todayDate = new Date(`${today}T00:00:00Z`);
  const weekDates = Array.from({ length: 7 }, (_, daysAgo) => {
    const date = new Date(todayDate);
    date.setUTCDate(date.getUTCDate() - daysAgo);
    return date.toISOString().slice(0, 10);
  });
  const weekRows = records.filter((record) =>
    weekDates.includes(record.TIMESTAMP.slice(0, 10))
  );

  const averages: Record<string, number | null> = {};

  for (const key of Object.keys(weekRows[0])) {
    if (SKIP.has(key)) continue;

    const values = weekRows
      .map((record) => record[key])
      .filter((value): value is number =>
        typeof value === "number" && Number.isFinite(value)
      );

    averages[key] =
      values.length > 0
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : null;
  }

  return averages;
}