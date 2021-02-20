import React from "react";
import axios from "axios";

function Date() {
  /*
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let day = daysOfWeek[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
  }
  
  //Format hours from dt to std clock
  function formatHours(timestamp) {
    //console.log(new Date(timestamp));
    let date = new Date(timestamp);
    let hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    return `${hour}:${min}`;
  }
*/
  //Make a default city
  const apiKey = "5d58512296f20bed286330764deb9e8d";
  let units = "metric";

  //   NEED SHOW TEMP
  function defaultCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemp);

    //NEED DISPLAYFORECAST
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&apiKey=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayForecast);
  }

  function displayForecast(response) {
    console.log("displayForecast ", response.data.list[0]);
  }
  function showTemp(response) {
    console.log(response.data.weather[0]);
  }
  defaultCity("Brooklyn");
  return (
    <div className="date" id="date">
      Sunday 17:55
    </div>
  );
}
export default Date;
