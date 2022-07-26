import { React, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [latLon, setLatLon] = useState([]);
  const [citySelection, setCitySelection] = useState([]);
  const [city, setCity] = useState("");
  // when loading is true certain components are not rendered 
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(true);


  // function that hides the search results of the previous search and brings up the search bar again
  const searchAgain = () => {
    setSearch(true);
    setLoading(true);
    setLoadingWeather(true);
  };

  // function that takes the search input and sends it to the API on change
  const changeCity = async (event) => {
    setCity(event);
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    );
    const setData = await res.json();
    setCitySelection(setData);
    setLatLon([setData[0].lat, setData[0].lon]);
  };

  // when city and state are selected, this function sends the lat and lon to the API to get the weather data 
  const chooseCity = async (event) => {
    event.preventDefault();
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    );
    console.log("hello world");
    console.log(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let mainRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon[0]}&lon=${latLon[1]}&exclude=${part}&appid=${KEY}&units=imperial`
    );
    const data = await mainRes.json();
    setWeatherData(data);
    setLoading(false);
    setSearch(false);
  };

  return (
    <>
      <div className="searchBar">
        {search ? (
          <SearchBar
            submit={handleSubmit}
            loading={setLoading}
            changeCity={changeCity}
          />
        ) : (
          <button onClick={searchAgain}>search again</button>
        )}
      </div>
      <div className="weatherData">
        <WeatherInfo
          loading={loading}
          weatherData={weatherData}
          citySelection={citySelection}
          chooseCity={chooseCity}
          setLatLon={setLatLon}
          latLon={latLon}
          handleSubmit={handleSubmit}
          setLoadingWeather={setLoadingWeather}
          loadingWeather={loadingWeather}
          />
      </div>
    </>
  );
}
