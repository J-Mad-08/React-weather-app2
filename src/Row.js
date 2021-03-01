import React, { useState } from "react";
import axios from "axios";
import TodaysWeather from "./TodaysWeather";
import "./Row.css";

export default function Row(props) {
  // State
  const [forecast, setForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
    // console.log("date is ", new Date(response.data.dt * 1000));
  }

  function searching(event) {
    event.preventDefault();
    //search for a city
    search(city);
  }

  function changeData(event) {
    setCity(event.target.value);
  }

  function search() {
    // Axios
    const apiKey = "5d58512296f20bed286330764deb9e8d";
    //or 80995efae6a984b21a5fdccf75f0b0c2
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}&units=${units}`;
    //api.openweathermap.org/data/2.5/weather?q=Brooklyn&apiKey=5d58512296f20bed286330764deb9e8d&units=metric
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    //storing form
  }
  //conditional
  if (forecast.ready) {
    return (
      <div>
        <TodaysWeather data={forecast} />

        {/* form */}
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
  } else {
    search();
    return "Loading...";
  }
}
