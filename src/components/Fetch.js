import { React, useEffect } from "react";

export default function Fetch() {
  let lat = 33.4;
  let lon = -94.04;
  let part = "hourly";
  let KEY = "c9648bd67b02cb074a8cff7f4418e8ec";

  useEffect(async () => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${KEY}`
      );
      const data = await res.json();
      console.log(data);

    };
    // fetchData()
    // .catch(console.error);

  }, []);


  return <div>hello world</div>;
}
