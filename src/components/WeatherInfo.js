import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";


export default function WeatherInfo(props) {
  const [showStates, setShowStates] = useState(false);

  return (
    <>
      <ul className="listOfStates">
        {props.loading
          ? ""
          : props.citySelection?.map((city) => {
              return (
                <form>
                  <li>
                    <button
                      className="btn"
                      type="submit"
                      onClick={(event) => {
                        setShowStates(true)
                        props.setLoadingWeather(true);
                        props.setLatLon([city.lat, city.lon]);
                        props.chooseCity(event);
                        props.handleSubmit(event);
                        props.setLoadingWeather(false);
                      }}
                    >
                      {city.name},{city.state}
                    </button>
                  </li>
                </form>
              );
            })}
      </ul>
      <h1 className="weatherInfo">
        {props.loadingWeather
          ? ""
          : JSON.stringify(props.weatherData?.daily[0]?.temp?.day)}
      </h1>
    </>
  );
}
