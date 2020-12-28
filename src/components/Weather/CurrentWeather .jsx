import React from "react";

import "./CurrentWeather.scss";

const CurrentWeather = ({ dataCity, dataWeather }) => {
  console.log(dataWeather);
  return (
    <div className="currentWeather">
      <div className="currentWeather-city">{`${dataCity.name}, ${dataCity.country}`}</div>
      <div className="currentWeather-temp">{dataWeather.main.temp_max}</div>
      <div className="currentWeather-description">
        {dataWeather.weather[0].description}
      </div>
      <div className="currentWeather-info">
        <div>{`Wind ${dataWeather.wind.speed} m/s`}</div>
        <div>{`Pressure ${dataWeather.main.pressure} pPa`}</div>
      </div>
      <div className="currentWeather-info">
        <div>{`Humidity ${dataWeather.main.humidity}`}</div>
        <div>{`Clouds ${dataWeather.clouds.all} pPa`}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
