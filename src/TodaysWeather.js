import React from "react";
import Dated from "./Dated";

import Converter from "./Converter";

export default function TodaysWeather(props) {
  // console.log("obj ", props.data);
  let source = props.data;
  return (
    <div>
      <h2>{source.city}</h2>
      <div className="row">
        <section className="current">
          <div className="col">
            <legend className="current-temp"></legend>
            {/* Converter */}
            <Converter degrees={source} />
            {/* date should go here */}
            <Dated date={source} />
            {/* slogan */}
            <p className="slogan">
              {" "}
              {source.description
                .slice(0, 1)
                .toUpperCase()
                .concat(source.description.slice(1))}
            </p>
          </div>
          {/* additional weather goes here, high, humidity, wind... */}
          <div className="col">
            <br />
            High Temp/
            <em>
              {" "}
              <bold>Low Temp:</bold>{" "}
            </em>
            <strong id="temp-max">{Math.round(source.temperature)}% </strong>
            <strong id="temp-min">{Math.round(source.minTemp)}% </strong>
            <br />
            <strong id="wind">Wind: {Math.round(source.wind)}k/h</strong>
            <br />
            <strong id="humidity">Humidity: {source.humidity}%</strong>
            <p className="slogan"></p>
          </div>
        </section>
      </div>
    </div>
  );
}
