import React from "react";

import { weatherIcon } from "../../helpers/weather";

import "./currentWeather.scss";

const CurrentWeather = ({ dataCity, dataWeather }) => {
  const { description, icon } = dataWeather.weather[0];
  const { temp_max, pressure, humidity } = dataWeather.main;
  const { name, country } = dataCity;
  const { speed } = dataWeather.wind;
  const { clouds } = dataWeather;

  const imgIcon = weatherIcon(icon);
  console.log(dataWeather);
  return (
    <div className="currentWeather">
      <div className="currentWeather-city">{`${name}, ${country}`}</div>
      <div className="currentWeather-temp">{temp_max}</div>
      <div className="currentWeather-icon">
        <img src={`/images/${imgIcon}.svg`} alt="Weather icon" />
      </div>
      <div className="currentWeather-description">{description}</div>
      <div className="currentWeather-info">
        <div>{`Wind ${speed} m/s`}</div>
        <div>{`Pressure ${pressure} pPa`}</div>
      </div>
      <div className="currentWeather-info">
        <div>{`Humidity ${humidity}`}</div>
        <div>{`Clouds ${clouds.all}`}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
