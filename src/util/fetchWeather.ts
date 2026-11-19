import type WeatherRecord from "../types/weathertype";

//turns raw .dat text into an array of records.
export function parseWeatherText(text: string): WeatherRecord[] {
  // Split into lines, handling both Windows (\r\n) and Unix (\n) endings
  const lines = text.trim().split(/\r?\n/);

  if (lines.length < 5) {
    throw new Error('File format unexpected or empty');
  }

  // Line 1 holds the column names; strip quotes and split on commas
  const headers = lines[1].replace(/"/g, '').split(',').map((header) => header.trim());
  const timestampIndex = headers.indexOf('TIMESTAMP');
  if (timestampIndex === -1) {
    throw new Error('TIMESTAMP column not found');
  }

  // Real data starts at line 4.
  const dataLines = lines.slice(4);

  const records: WeatherRecord[] = [];

  for (const line of dataLines) {
    // Skip blank lines
    if (!line.trim()) continue;

    const values = line.replace(/"/g, '').split(',');

    // Skip partial lines
    if (values.length !== headers.length) continue;

    const timestamp = values[timestampIndex].trim();
    const date = new Date(timestamp.replace(' ', 'T'));
    if (Number.isNaN(date.getTime())) {
      throw new Error(`Invalid TIMESTAMP value: ${timestamp}`);
    }

    const record: Record<string, string | number | Date> = {};

    headers.forEach((header, i) => {
      const val = values[i].trim();

      if (header === 'TIMESTAMP') {
        record[header] = val;
        record.date = date;
      } else {
        const num = Number(val);
        // Empty, "NAN", or the -9999 sentinel become NaN so averages can skip them
        record[header] = val === '' || isNaN(num) || num === -9999 ? NaN : num;
      }
    });

    records.push(record as WeatherRecord);
  }

  // Oldest first, so the last element is always the most recent reading
  return records.sort((a, b) => a.date.getTime() - b.date.getTime());
}

// Fetches and parses the weather records. The caller handles failures.
export async function fetchAllWeather(): Promise<WeatherRecord[]> {
  const response = await fetch('/api/weather');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const text = await response.text();
  return parseWeatherText(text);
}