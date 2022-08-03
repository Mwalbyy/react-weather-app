import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

export default function home() {
  return (
    <>
      <div className="searchForm">
        <div className="searchBar">
          <input className="searchInput" type="text" />
          <button className="btn" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      
    </>
  );
}
