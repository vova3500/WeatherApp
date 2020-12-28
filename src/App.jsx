import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { loadingWeather } from "./redux/actions/weather";

import Header from "./components/Header/Header";
import SearchString from "./components/SearchString/SearchString";
import CurrentWeather from "./components/Weather/CurrentWeather";
import ComingWeather from "./components/Weather/ComingWeather";
import Preloader from "./components/Preloader/Preloader";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingWeather("Киев"));
  }, [dispatch]);

  const city = useSelector(({ weather }) => weather.city);
  const weather = useSelector(({ weather }) => weather.items);
  const loader = useSelector(({ weather }) => weather.loader);

  const comingWeather = weather
    ? [weather[1], weather[2], weather[3], weather[4]]
    : [];

  console.log(weather);
  console.log(city);
  return (
    <div className="App">
      <Header />

      {loader ? (
        <Preloader />
      ) : (
        <div className="content">
          <SearchString loader={loader} />
          <div className="wrapWeather">
            {city && weather && (
              <>
                <CurrentWeather dataCity={city} dataWeather={weather[0]} />
                <div className="wrapComingWeather">
                  {comingWeather.map((item) => (
                    <ComingWeather dataWeather={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
