import React from "react";
import Dated from "./Dated";
import WeatherIcon from "./WeatherIcon";

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
            {/* Weather icon */}
            <span id="curTemp">
              {" "}
              <WeatherIcon icon={source.icon} />
            </span>
            <span id="curTemp"> {Math.round(source.temperature)} </span>
            <span id="converter">
              <small id="celsius">ºC</small>|<small id="fahrenheit">ºF</small>
            </span>
            <div>
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
              <div className="todays-additional-weather">
                <br />
                High Temp/
                <em>
                  {" "}
                  <bold>Low Temp:</bold>{" "}
                </em>
                <strong id="temp-max">
                  {Math.round(source.temperature)}%{" "}
                </strong>
                <strong id="temp-min">{Math.round(source.minTemp)}% </strong>
                <br />
                <strong id="wind">Wind: {Math.round(source.wind)}k/h</strong>
                <br />
                <strong id="humidity">Humidity: {source.humidity}%</strong>
                <p className="slogan"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
