import React, { useState } from "react";
import axios from "axios";

import "./Row.css";
import Date from "./Date";

export default function Row() {
  // State
  const [showInput, handleInput] = useState(null);
  const [result, showResult] = useState(false);
  const [weather, displayWeather] = useState(null);

  function changeData(event) {
    handleInput(event.target.value);
  }

  //call from API
  function showTemp(response) {
    console.log("response is ", response.data.main.name);
    //console.log(response.data.weather);
    displayWeather({
      temperature: Math.round(response.data.main.temp),
      description: Math.round(response.data.weather[0].description),
      temp_max: Math.floor(response.data.main.temp_max),
      temp_min: Math.floor(response.data.main.temp_min),
      wind: Math.floor(response.data.wind.speed),
      humidity: Math.floor(response.data.main.humidity),
    });
  }

  function searching(event) {
    event.preventDefault();
    // Axios
    const apiKey = "5d58512296f20bed286330764deb9e8d";
    //or 80995efae6a984b21a5fdccf75f0b0c2
    const units = "metric";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${showInput}&apiKey=${apiKey}&units=${units}`;
    //api.openweathermap.org/data/2.5/weather?q=Brooklyn&apiKey=5d58512296f20bed286330764deb9e8d&units=metric
    //console.log(apiUrl);
    axios.get(apiUrl).then(showTemp);

    showResult(weather);
  }

  //storing form
  const form = (
    <div>
      <div className="form">
        <section className="user-input">
          <nav className="navbar">
            <form className="Searching" onSubmit={searching}>
              <input
                type="search"
                className="form-control mr-sm-2"
                placeholder="Search a city"
                onChange={changeData}
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

  //conditional render
  if (result) {
    return (
      <div>
        {/* <Date /> */}
        {/* fix the below */}
        <h2>
          {showInput.slice(0, 1).toUpperCase().concat(showInput.slice(1))}
        </h2>
        <div className="row">
          <section className="current">
            <div className="col">
              <legend className="current-temp" id="curTemp"></legend>
              <span id="emoji"> ☀️</span>
              {/* NEED A COMPONENT TO GRAB CURRENT TEMP */}
              <span id="current-temp"> {weather.temp_max} </span>
              {form}

              <div className="col">
                <div className="todays-additional-weather">
                  <br />
                  High Temp/
                  <em>
                    {" "}
                    <bold>Low Temp:</bold>{" "}
                  </em>
                  <strong id="temp-max">{weather.temp_max} %</strong>
                  <strong id="temp-min">{weather.temp_min} % </strong>
                  <br />
                  <strong id="wind">Wind: {weather.wind}k/h</strong>
                  <br />
                  <strong id="humidity">Humidity: {weather.humidity}%</strong>
                  <p className="slogan"></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  //form
  return (
    <div>
      <div className="city">Brooklyn</div>
      <Date />
      {form}
      {/* {showTemp("Brooklyn")} */}
    </div>
  );
}
