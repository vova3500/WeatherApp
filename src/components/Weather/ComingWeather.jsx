import React from "react";

import moment from "moment";

import { weatherIcon } from "../../helpers/weather";

import "./comingWeather.scss";

const ComingWeather = ({ dataWeather }) => {
  const { temp_max } = dataWeather.main;
  const { description, icon } = dataWeather.weather[0];
  const { dt } = dataWeather;

  const imgIcon = weatherIcon(icon);
  return (
    <div className="comingWeather">
      <h3 className="text-center">{moment.unix(dt).format("dddd")}</h3>
      <div className="comingWeather-icon">
        <img src={`/images/${imgIcon}.svg`} alt="Weather icon" />
      </div>
      <div className="comingWeather-temp">{temp_max}</div>
      <div className="comingWeather-description">{description}</div>
    </div>
  );
};

export default ComingWeather;
