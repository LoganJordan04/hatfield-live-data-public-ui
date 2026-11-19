import { useEffect, useState } from "react";
import type WeatherRecord from "../types/weathertype";
import { fetchAllWeather } from "../util/fetchWeather";
import { dailyAverages, weeklyAverages } from "../util/weatheravgs";

export default function WeatherPage() {
  const [weather, setWeather] = useState<WeatherRecord[] | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(900);
  const [dailyAvg, setDailyAvg] = useState<Record<string, number | null> | null>(null);
  const [weeklyAvg, setWeeklyAvg] = useState<Record<string, number | null> | null>(null);
  const [showDailyAvg, setShowDailyAvg] = useState(false);
  const [showWeeklyAvg, setShowWeeklyAvg] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        const records = await fetchAllWeather();
        if (!isMounted) return;

        setWeather(records);
        setIsOffline(false);
        setSecondsLeft(900);
        setDailyAvg(dailyAverages(records));
        setWeeklyAvg(weeklyAverages(records));
      } catch (error) {
        console.error("Error fetching or parsing weather data:", error);
        if (isMounted) setIsOffline(true);
      }
    };

    void fetchWeather();

    const fetchInterval = setInterval(() => {
      void fetchWeather();
    }, 900000);
    const countdownInterval = setInterval(() => {
      setSecondsLeft((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(fetchInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  const latestWeather = weather?.[weather.length - 1];
  const minutesRemaining = Math.ceil(secondsLeft / 60);

  return (
    <main>
      <h1>Weather Data</h1>
      <p>Updates in: {minutesRemaining} minutes</p>

      {isOffline && (
        <p role="status">
          Weather data is temporarily unavailable.
          {latestWeather && " Showing the most recent readings we have."}
        </p>
      )}

      {weather === null ? (
        isOffline ? (
          <p>Weather data could not be loaded.</p>
        ) : (
          <p>Loading weather data...</p>
        )
      ) : latestWeather ? (
        <div>
        <div>
          <p><strong>Timestamp:</strong> {latestWeather.TIMESTAMP}</p>
          <p><strong>Average Wind Speed:</strong> {latestWeather.AWS} MPH</p>
          <p><strong>Average Wind Direction:</strong> {latestWeather.AWD}°</p>
          <p><strong>Wind Gust:</strong> {latestWeather.Gust} MPH</p>
          <p><strong>Average Air Temperature:</strong> {latestWeather.AvgAT} °F</p>
          <p><strong>Max Air Temperature:</strong> {latestWeather.MaxAT} °F</p>
          <p><strong>Min Air Temperature:</strong> {latestWeather.MinAT} °F</p>
          <p><strong>Average Relative Humidity:</strong> {latestWeather.AvgRH} %RH</p>
          <p><strong>Barometric Pressure:</strong> {latestWeather.AvgBP} inHg</p>
          <p><strong>Total Rainfall (10 min):</strong> {latestWeather.TotRN_5} in</p>
          <p><strong>Daily Rainfall:</strong> {latestWeather.DailyRN} in</p>
        </div>
        <button onClick={() => setShowDailyAvg(!showDailyAvg)}>
          {showDailyAvg ? "Hide" : "Show"} Daily Averages
        </button>
        <button onClick={() => setShowWeeklyAvg(!showWeeklyAvg)}>
          {showWeeklyAvg ? "Hide" : "Show"} Weekly Averages
        </button>
        </div>
      ) : (
        <p>No weather readings are available right now.</p>
      )}
      {showDailyAvg && dailyAvg && (
        <div>
          <h2>Daily Averages</h2>
          {Object.entries(dailyAvg).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value !== null ? value.toFixed(2) : "N/A"}
            </p>
          ))}
        </div>
      )}
        {showWeeklyAvg && weeklyAvg && (
            <div>
                <h2>Weekly Averages</h2>
                {Object.entries(weeklyAvg).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value !== null ? value.toFixed(2) : "N/A"}
                    </p>
                ))}
            </div>
        )}

      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="absolute top-4 right-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Home
      </button>
    </main>
  );
}
