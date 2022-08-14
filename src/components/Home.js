import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

export default function home() {
  const data = [
    {
      time:"9:00",
      temp: "20"
    },
    {
      time:"10:00",
      temp: "30"
    },
    {
      time:"11:00",
      temp: "40"
    },
    {
      time:"12:00",
      temp: "50"
    },
    {
      time:"13:00",
      temp: "60"
    }
  ];
  return (
    <>
      <div className="center">
        <div className="searchBar">
          <input
            className="searchBar__input"
            type="text"
            aria-label="search input"
          />
          <button
            className="btn"
            type="submit"
            aria-label="submit search button"
          >
            <i className="fa-solid fa-magnifying-glass fa-xs"></i>
          </button>
        </div>
      </div>
      <Parallax pages={4} style={{ top: '10', left: '0' }}>
        <ul>
          {data.map((element, i) => (
            <ParallaxLayer offset={i/8}>
              <li key={i}>Time {element.time} Temp:{element.temp}°</li>
            </ParallaxLayer>
          ))}
        </ul>
      </Parallax>

      {/* <div className="weather">
        <h1 className="weather__location">London</h1>
        <div className="weather__info">
          <ul className="weather__list">
            <h3>9am</h3>
            <li>90°</li>
            <li>15%</li>
            <li>7 mph</li>
          </ul>
        </div>
      </div> */}
    </>
  );
}
