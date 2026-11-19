export default interface WeatherRecord {
  date: Date;
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
  [key: string]: string | number | Date; // Fallback index signature for dynamic columns
}