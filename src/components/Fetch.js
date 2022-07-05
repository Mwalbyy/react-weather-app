import { React, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [city, setCity] = useState("leonia");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`
        );
        const setData = await res.json();
        setLat(setData[0].lat)
        setLon(setData[0].lon)
      } catch (e) {
        console.error(e);
      }
    };
    
    fetchCityData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`
        );
        const data = await res.json();
        setWeatherData(data);
        console.log(data);
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    };
    fetchData();
  },[])

  
  console.log(lat)
  return (
    <>
      <div className="searchBar">
        <SearchBar changeCity={setCity} />
      </div>

      <div className="weatherData">
        <WeatherInfo />
        <h1>{loading ? 'hello' : JSON.stringify(weatherData.daily[0].temp.day)}</h1>
        
      </div>
    </>
  );
}
