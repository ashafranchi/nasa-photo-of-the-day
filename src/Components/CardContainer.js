import React, { useState, useEffect } from "react";

import Header from "./Header";
import Card from "./Card";

import axios from "axios";

function CardContainer() {
  const [data, setData] = useState("loading....");

  console.log("before/after", data);

  const numbers = ["1", "2", "3"];

  useEffect(() => {
    axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
    )
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>NASA Picture of the Day</h2>
      <Header data={data} />
      <Card data={data} />
    </div>
  );
}

export default CardContainer;
