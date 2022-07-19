import { React, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const KEY = "c9648bd67b02cb074a8cff7f4418e8ec";
const part = "hourly";

export default function Fetch() {
  const [weatherData, setWeatherData] = useState({});
  const [latLon, setLatLon] = useState([]);
  const [citySelection, setCitySelection] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(true);

  const searchAgain = () => {
    setSearch(true);
  };

  const changeCity = async (event) => {
    setCity(event);
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    );
    const setData = await res.json();
    setCitySelection(setData);
    setLatLon([setData[0].lat, setData[0].lon]);
  };

  const chooseCity = async (event) => {
    event.preventDefault();
    // let res = await fetch(
    //   `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    // );
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
        <ul>
          {loading
            ? "loading"
            : citySelection?.map((city) => {
                return (
                  <form>
                    {/* create list of city.state and city.name next to each other, that when clicked console logs hello world */}
                    <li>
                      <h1>{city.name}</h1>
                      <h1>{city.state}</h1>
                      <button
                        type="submit"
                        onClick={(event) => {
                          chooseCity(event);
                        }}
                      >
                        hello world
                      </button>
                    </li>
                  </form>
                );
              })}
        </ul>
        <WeatherInfo loading={loading} weatherData={weatherData} />
      </div>
    </>
  );
}
