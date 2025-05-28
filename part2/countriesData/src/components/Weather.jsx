import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  console.log("API KEY:", API_KEY);
  console.log("API Key desde Vite:", import.meta.env.VITE_API_KEY);

  useEffect(() => {
    if (!capital) return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [capital]);

  if (!weatherData) return <p>Loading weather...</p>;

  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weatherData.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </>
  );
};

export default Weather;
