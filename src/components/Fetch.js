import { React, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState({});
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [city, setCity] = useState("leonia");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`
    );
    const setData = await res.json();
    setLat(setData[0].lat);
    setLon(setData[0].lon);
    let mainRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}&units=imperial`
    );
    const data = await mainRes.json();
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <>
    
      <div className="searchBar">
        <SearchBar
          submit={handleSubmit}
          loading={setLoading}
          changeCity={setCity}
          cityName={city}
        />
      </div>
      <div className="weatherData">
        <WeatherInfo />
        <h1>
          {loading ? "Loading" : JSON.stringify(weatherData.daily[0].temp.day)}
        </h1>
      </div>
    </>
  );
}
