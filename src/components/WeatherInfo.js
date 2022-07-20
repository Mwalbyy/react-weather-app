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
                          props.chooseCity(event);
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
