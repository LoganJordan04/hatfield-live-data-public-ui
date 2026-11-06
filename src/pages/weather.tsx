import {useState, useEffect} from 'react';
import { fetchLatestWeather, type WeatherRecord } from '../util/fetchWeather';

export default function WeatherPage() {
    const [weather, setWeather] = useState<WeatherRecord | null>(null);
    const [fetchInterval, setFetchInterval] = useState(0);
    const [timer, setTimer] = useState(0);
    const fetchWeather = async () => {
        const weatherData = await fetchLatestWeather();
        setWeather(weatherData);
    };

    useEffect(() => {
        fetchWeather(); // Initial fetch
        const interval = setInterval(() => {
            setFetchInterval(prevInterval => prevInterval + 1);
            fetchWeather();
        }, 900000); // 15 minutes in milliseconds
        const timer = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000); // Update timer every second
        return () => {
            clearInterval(interval);
            clearInterval(timer);
        }; // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>Weather Data</h1>
            <h1>Updates In: {Math.round((9000000 - timer * 1000) / 600000)} minutes</h1>
            {weather ? (
                <div>
                    <p><strong>Timestamp:</strong> {weather.TIMESTAMP}</p>
                    <p><strong>Average Wind Speed:</strong> {weather.AWS} MPH</p>
                    <p><strong>Average Wind Direction:</strong> {weather.AWD}°</p>
                    <p><strong>Wind Gust:</strong> {weather.Gust} MPH</p>
                    <p><strong>Average Air Temperature:</strong> {weather.AvgAT} °F</p>
                    <p><strong>Max Air Temperature:</strong> {weather.MaxAT} °F</p>
                    <p><strong>Min Air Temperature:</strong> {weather.MinAT} °F</p>
                    <p><strong>Average Relative Humidity:</strong> {weather.AvgRH} %RH</p>
                    <p><strong>Barometric Pressure:</strong> {weather.AvgBP} inHg</p>
                    <p><strong>Total Rainfall (10 min):</strong> {weather.TotRN_5} in</p>
                    <p><strong>Daily Rainfall:</strong> {weather.DailyRN} in</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
            <button onClick={() => window.location.href = '/'} className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                Home
            </button>
        </div>
    );
}