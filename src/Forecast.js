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
            <h4> Sunday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <span className="degrees">20ºC</span>
                  <span className="degrees">14ºC</span>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>Monday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <span className="degrees">21ºC</span>
                  </bold>
                  <span className="degrees">14ºC</span>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>Tuesday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <span className="degrees">22ºC</span>
                  </bold>
                  <span className="degrees">15ºC</span>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>Wednesday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <span className="degrees">24ºC</span>
                  </bold>
                  <span className="degrees">13ºC</span>
                </section>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h4>Thursday</h4>
            <div className="row">
              <div className="col">
                <section className="temp">
                  <bold>
                    <span className="degrees">19ºC</span>
                  </bold>
                  <span className="degrees">8ºC</span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
