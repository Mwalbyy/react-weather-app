import { React, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState({});
  const [latLon, setLatLon] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const changeCity = async (event) => {
    setCity(event);
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`
    );
    const setData = await res.json();
      console.log(setData)
    setLatLon([setData[0].lat, setData[0].lon]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let mainRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon[0]}&lon=${latLon[1]}&exclude=${part}&appid=${KEY}&units=imperial`
    );
    const data = await mainRes.json();
    console.log(data)
    setWeatherData(data);
    setLoading(false);
    console.log(latLon);
  };

  return (
    <>
      <div className="searchBar">
        <SearchBar
          submit={handleSubmit}
          loading={setLoading}
          changeCity={changeCity}
        />
      </div>
      <div className="weatherData">
        <WeatherInfo />
        <h1>
          {loading
            ? "Loading"
            : JSON.stringify(weatherData?.daily[0]?.temp?.day)}
        </h1>
      </div>
    </>
  );
}
