import { React, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [city, setCity] = useState("leonia");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`
        );
        const data = await res.json();
        console.log("this is the city lat lon data");
        setLat(data[0].lat)
        setLon(data[0].lon)
        console.log(data)
      } catch (e) {
        console.error(e);
      }
    };
    fetchCityData();
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`
      );
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
      setLoading(false)
    };
    fetchData();
  }, []);

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`
    //   );
    //   const data = await res.json();
    //   setWeatherData(data);
    //   console.log(data);
    //   setLoading(false)
    // };
    // fetchData();
  }, []);

  return (
    <>
      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="weatherData">
        <WeatherInfo />
        <h1>{loading ? 'hello' : JSON.stringify(weatherData.daily[0].temp.day)}</h1>
        
      </div>
    </>
  );
}
