import { ParallaxLayer } from "@react-spring/parallax";

export default function WeatherInfo(props) {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.5} factor={2}>
        <ul className="listOfStates">
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
                          props.setLoadingWeather(true);
                          props.setLatLon([city.lat, city.lon]);
                          props.chooseCity(event);
                          props.handleSubmit(event);
                          props.setLoadingWeather(false);
                        }}
                      >
                        this state
                      </button>
                    </li>
                  </form>
                );
              })}
        </ul>
      </ParallaxLayer>
      <ParallaxLayer>
        <h1 className="weatherInfo">
          {props.loadingWeather
            ? "Loading"
            : JSON.stringify(props.weatherData?.daily[0]?.temp?.day)}
        </h1>
      </ParallaxLayer>
    </>
  );
}
