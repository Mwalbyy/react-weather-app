import { React, useState } from "react";

export default function WeatherInfo(props) {
const [loadingWeather, setLoadingWeather] = useState(true);
  return (
    <>
    <ul>
          {props.loading
            ? "loading"
            : props.citySelection?.map((city) => {
                return (
                  <form>
                    <li>
                      <h1>{city.name}</h1>
                      <h1>{city.state}</h1>
                      <button
                        type="submit"
                        onClick={(event) => {
                          props.setLatLon([city.lat, city.lon]);
                          props.chooseCity(event);
                          props.handleSubmit(event)
                          setLoadingWeather(false);
                        }}
                      >
                        this state
                      </button>
                    </li>
                  </form>
                );
              })}
        </ul>
      <h1>
        {loadingWeather
          ? "Loading"
          : JSON.stringify(props.weatherData?.daily[0]?.temp?.day)}
      </h1>
    </>
  );
}
