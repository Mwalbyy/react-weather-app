import React from "react";
// import { ParallaxLayer } from "@react-spring/parallax";

export default function home() {
  return (
    <>
      <div className="center">
        <div className="searchBar">
          <input className="searchBar__input" type="text" aria-label="search input"/>
          <button className="btn" type="submit" aria-label="submit search button">
            <i class="fa-solid fa-magnifying-glass fa-xs"></i>
          </button>
        </div>
      </div>
      
    </>
  );
}
