import React from "react";
import Row from "./Row";
import Forecast from "./Forecast";

import "./Container.css";

export default function Container() {
  return (
    <div className="container">
      <h1>
        <bold>
          <strong>Weather</strong>
        </bold>
        Simplified
      </h1>
      <div className="row">
        <div className="col-6">
          <Row />
        </div>
        <div className="col-4">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
