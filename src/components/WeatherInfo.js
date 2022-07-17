import React from "react";

export default function WeatherInfo(props) {
  return (
    <>
      <h1>
        {props.loading
          ? "Loading"
          : JSON.stringify(props.weatherData?.daily[0]?.temp?.day)}
      </h1>
    </>
  );
}
