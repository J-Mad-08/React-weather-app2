import React from "react";
import Row from "./Row";

import "./Container.css";

export default function Container() {
  return (
    <div className="Container">
      <h1>
        <bold>
          <strong>Weather</strong>
        </bold>
        Simplified
      </h1>
      <Row />
    </div>
  );
}
