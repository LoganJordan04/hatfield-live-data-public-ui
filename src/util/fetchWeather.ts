export interface WeatherRecord {
  TIMESTAMP: string;
  RECORD: number;
  AWS: number;      // Average Wind Speed (MPH)
  AWD: number;      // Average Wind Direction (Degrees)
  SIG: number;
  Gust: number;     // Wind Gust (MPH)
  AvgAT: number;    // Average Air Temperature (°F)
  MaxAT: number;
  MinAT: number;
  AvgRH: number;    // Average Relative Humidity (%RH)
  AvgBP: number | string;    // Barometric Pressure (Inches) or "NAN"
  TotRN_5: number;
  DailyRN: number;
  Batt: number;     // Battery Voltage (Vdc)
  [key: string]: string | number; // Fallback index signature for dynamic columns
}

export async function fetchLatestWeather(): Promise<WeatherRecord | null> {
  try {
    const response = await fetch('/api/weather');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    const lines = text.trim().split(/\r?\n/);
    
    if (lines.length < 5) {
      throw new Error("File format unexpected or empty");
    }

    const headers = lines[1].replace(/"/g, '').split(',');
    const latestLine = lines[lines.length - 1];
    const values = latestLine.replace(/"/g, '').split(',');

    const weatherData: Record<string, any> = {};
    headers.forEach((header, index) => {
      const val = values[index];
      if (header === 'TIMESTAMP') {
        weatherData[header] = val;
      } else {
        weatherData[header] = isNaN(Number(val)) ? val : Number(val);
      }
    });

    return weatherData as WeatherRecord;
  } catch (error) {
    console.error("Error fetching or parsing weather data:", error);
    return null;
  }
}