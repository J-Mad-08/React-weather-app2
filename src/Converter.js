import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./Converter.css";

export default function Converter(props) {
  //   State to track units
  const [unit, setUnit] = useState("metric");
  //   conversion function
  function convert2F(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convert2C(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return (props.degrees.temperature * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div>
        {/* Weather icon */}
        <span id="icon">
          <WeatherIcon icon={props} />
        </span>
        <span id="curTemp"> {Math.round(props.degrees.temperature)} </span>
        <span id="converter">
          {" "}
          <small id="celsius"> ºC</small> |{" "}
          <a href="/">
            <small id="fahrenheit" onClick={convert2F}>
              ºF
            </small>
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {/* Weather icon */}
        <span id="icon">
          <WeatherIcon icon={props} />
        </span>
        <span id="curTemp"> {Math.round(fahrenheit())}</span>
        <span id="converter">
          <a href="/" onClick={convert2C}>
            <small id="celsius"> ºC</small>
          </a>{" "}
          |{" "}
          <a href="/">
            <small id="fahrenheit" onClick={convert2F}>
              ºF
            </small>
          </a>
        </span>
      </div>
    );
  }
}
