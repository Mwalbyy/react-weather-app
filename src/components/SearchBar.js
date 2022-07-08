import React from "react";

export default function SearchBar(props) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter city or town name"
          onChange={async (event) => {
            await props.changeCity(event.target.value);
          }}
        />
        <button
          type="submit"
          onClick={ async(event) => {
            await props.loading(true);
            await props.submit(event);
            console.log(props.citycity)
          }}
        >
          search
        </button>
      </form>
    </>
  );
}
