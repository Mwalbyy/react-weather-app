import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

export default function home() {
  const time = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];
  const temperature = [
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
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
      <ul>
        {time.map((times) => (
          <li key={times}>{times}</li>
        ))}
      </ul>
      {/* loop through the temperature and create a li for each item*/}
      <div className="weather">
        <h1 className="weather__location">London</h1>
        <div className="weather__info">
          <ul className="weather__list">
            <h3>9am</h3>
            <li>90°</li>
            <li>15%</li>
            <li>7 mph</li>
          </ul>
        </div>
      </div>
    </>
  );
}
