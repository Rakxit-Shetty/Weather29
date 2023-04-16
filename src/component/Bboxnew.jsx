import React, { useState } from "react";
import Showdata from "./Showdata";

export default function Bboxnew() {
  const [city, setCity] = useState("udupi");

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <Showdata city={city} />
    </div>
  );
}
