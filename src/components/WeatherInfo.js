import React from "react";

export default function WeatherInfo(props) {
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
                        }}
                      >
                        hello world
                      </button>
                    </li>
                  </form>
                );
              })}
        </ul>
      <h1>
        {props.loading
          ? "Loading"
          : JSON.stringify(props.weatherData?.daily[0]?.temp?.day)}
      </h1>
    </>
  );
}
// city takes two clicks to get the lat and lon
// create on change for the api call