import { React, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo"

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(33.4);
  const [lon, setLon] = useState(-94.04);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`
      );
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="searchBar">
        <SearchBar/>
      </div>

      <div className="weatherData">
        <WeatherInfo/>
        {JSON.stringify(weatherData.daily[0].temp.day)}
      </div>
    </>
  );
}
