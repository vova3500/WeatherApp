import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { loadingWeather } from "./redux/actions/weather";

import ErrorBoundary from "./components/ErrorBoundary";

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

  return (
    <div className="App">
      <Header />

      <Preloader loader={loader}>
        <div className="content">
          <ErrorBoundary>
            <SearchString />
          </ErrorBoundary>

          <div className="wrapWeather">
            {city && weather && (
              <>
                <ErrorBoundary>
                  <CurrentWeather dataCity={city} dataWeather={weather[0]} />
                </ErrorBoundary>

                <div className="wrapComingWeather">
                  {comingWeather.map((item, index) => (
                    <ErrorBoundary key={index}>
                      <ComingWeather dataWeather={item} />
                    </ErrorBoundary>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Preloader>
    </div>
  );
}

export default App;
