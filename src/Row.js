import React, { useState } from "react";
import axios from "axios";

import "./Row.css";

export default function Row() {
  // State
  const [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    //console.log("other ", response.data);

    //instead of making multiple states for the responses, place all into an obj
    setForecast({
      ready: true,
      minTemp: response.data.main.temp_min,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      humanFeel: response.data.main.feels_like,
    });
    // console.log("forecast is ", forecast);
  }

  //conditional
  if (forecast.ready) {
    return (
      <div>
        <h2>{forecast.city}</h2>
        <div className="row">
          <section className="current">
            <div className="col">
              <legend className="current-temp"></legend>
              <span id="curTemp"> {forecast.icon}</span>
              <span id="curTemp"> {Math.round(forecast.temperature)} </span>
              <a href="#" id="converter">
                <small id="celsius">ºC</small>|<small id="fahrenheit">ºF</small>
              </a>
              <div>
                {/* date should go here */}
                <div className="dateForecast">{Math.round(forecast.date)}</div>
                {/* slogan */}
                <p className="slogan">
                  {" "}
                  {forecast.description
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(forecast.description.slice(1))}
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
                    {Math.round(forecast.temperature)} %
                  </strong>
                  <strong id="temp-min">
                    {Math.round(forecast.minTemp)} %{" "}
                  </strong>
                  <br />
                  <strong id="wind">
                    Wind: {Math.round(forecast.wind)}k/h
                  </strong>
                  <br />
                  <strong id="humidity">Humidity: {forecast.humidity}%</strong>
                  <p className="slogan"></p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* form */}
        <div className="form">
          <section className="user-input">
            <nav className="navbar">
              <form className="Searching">
                {/* onSubmit={searching} */}
                <input
                  type="search"
                  className="form-control mr-sm-2"
                  placeholder="Search a city"
                  // onChange={changeData}
                ></input>
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-dark"
                  id="dark-button"
                  autoFocus="on"
                ></input>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  id="current-button"
                >
                  Current
                </button>
              </form>
            </nav>
          </section>
        </div>
      </div>
    );
  } else {
    // Axios
    const apiKey = "5d58512296f20bed286330764deb9e8d";
    //or 80995efae6a984b21a5fdccf75f0b0c2
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Marietta&apiKey=${apiKey}&units=${units}`;
    //api.openweathermap.org/data/2.5/weather?q=Brooklyn&apiKey=5d58512296f20bed286330764deb9e8d&units=metric
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    //storing form
    return null;
  }
}
