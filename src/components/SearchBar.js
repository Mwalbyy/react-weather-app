import React from "react";

export default function SearchBar(props) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter city or town name"
          onChange={(event) => {
            props.changeCity(event.target.value);
            console.log(props.cityName)
          }}
        />
        <button
          type="submit"
          onClick={(event) => {
            props.submit(event);
          }}
        >
          search
        </button>
      </form>
    </>
  );
}
