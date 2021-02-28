import React from "react";

function Date(props) {
  // console.log("props ", props);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysOfWeek[props.date.getDay()];
  /*
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

  return (
    <div className="date" id="date">
      {props.date}
    </div>
  );
}
export default Date;
