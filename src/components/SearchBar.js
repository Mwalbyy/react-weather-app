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
          }}
          // onKeyDown={props.submit}

        />
        <button
          type="submit"
          onClick={(event) => {
            props.loading(true);
            props.submit(event);
          }}
        >
          search
        </button>
      </form>
    </>
  );
}
