import React from "react";

import "./Dated.css";

function Dated(props) {
  // console.log("props ", props.date.date);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let sourceDate = props.date.date;
  let day = daysOfWeek[sourceDate.getDay()];
  let hours = sourceDate.getHours();
  let minutes = sourceDate.getMinutes();
  //console.log(day);

  //Format hours from dt to std clock
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  //Make a default city

  return (
    <div className="date" id="date">
      {day} {hours}:{minutes}
    </div>
  );
}
export default Dated;
