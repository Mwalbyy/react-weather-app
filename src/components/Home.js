import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

export default function home() {
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
            <i class="fa-solid fa-magnifying-glass fa-xs"></i>
          </button>
        </div>
      </div>
      <Parallax pages={2} style={{ top: "70", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
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
