import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import _debounce from "lodash/debounce";
import "../css/main.10eec380.chunk.css";
import { ColorRing } from "react-loader-spinner";
export default function Bbox() {
  const [input, setInput] = useState("udupi");
  const [data, setData] = useState("");
  const [desp, setDesp] = useState("");
  const [minmax, setMinmax] = useState("");
  const [inputCall, setInputCall] = useState("");

  useEffect(() => {
    if (!input) {
      setData(" ");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7e47e48462c06831b09a3c5d577fda9d&units=metric`
        ) //"https://catfact.ninja/fact")
        .then((res) => {
          setData(res.data.main.temp + "°cel");
          //console.log(res.data.main.temp_max)
          setMinmax(
            "min : " +
              res.data.main.temp_min +
              " | " +
              "max : " +
              res.data.main.temp_max
          );
          setDesp(res.data.weather[0].description);
        })

        .catch((er) => {
          setData("");
          setDesp("");
          setMinmax("");
        });
    }
  }, [inputCall]);

  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(val) {
    setInputCall(val);
  }

  function handleChange(e) {
    setInput(e.target.value);
    debounceFn(e.target.value);
  }

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="text"
            placeholder="Enter city name..."
            value={input}
            onChange={handleChange}
            className="inputField"
          />
        </div>

        <div className="info">
          
          {data ? (
            <>
            <h1 className="location">{input}</h1>
              <h2 className="temp">{data}</h2>
              <h3 className="tempmin_max" style={{marginBottom:"80px"}}>
                <p>{desp}</p>
                <br></br>
                {minmax}
              </h3>
            </>
          ) : (
            <>
              <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </>
          )}
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
      </div>

      <div className="footer">
        <div>
          &#169; {new Date().getFullYear()} to Learn React JS components by
          <a href="https://rakshithshetty.netlify.app"> &nbsp; Rakxit-Shetty</a>
        </div>
      </div>
    </>
  );
}
