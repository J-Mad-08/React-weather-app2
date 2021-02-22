import React from "react";
//import axios from "axios";
import "./Forecast.css";

// <div className="col-5">
export default function Forecast() {
  return (
    <div>
      <h3>5 Day Forecast</h3>
      <section className="forecast">
        <div className="row">
          <div className="col-12">
            <h4>☀️ Sunday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <a href="" className="degrees">
                    20ºC
                  </a>
                  <a href="" className="degrees">
                    14ºC
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>🌤 Monday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <a href="" className="degrees">
                      21ºC
                    </a>
                  </bold>
                  <a href="" className="degrees">
                    14ºC
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>🌥 Tuesday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <a href="" className="degrees">
                      22ºC
                    </a>
                  </bold>
                  <a href="" className="degrees">
                    15ºC
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>🌥 Wednesday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <a href="" className="degrees">
                      24ºC
                    </a>
                  </bold>
                  <a href="" className="degrees">
                    13ºC
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>🌧 Thursday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <a href="" className="degrees">
                      19ºC
                    </a>
                  </bold>
                  <a href="" className="degrees">
                    8ºC
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
