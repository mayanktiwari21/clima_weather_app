import React from 'react';

import { NullState } from '../NullState';
import Loader from '../Loader';
import Wind from '../../assets/images/wind.svg';
import Pressure from '../../assets/images/pressure.svg';
import Humidity from '../../assets/images/humidity.svg';
import Visibility from '../../assets/images/visibility.svg';
import './styles.css';

const WeatherDisplay = ({ weatherData, isLoading, error }) => {
  const getTime = () => {
    return new Date(weatherData.dt * 1000).toLocaleTimeString().substring(0, 5);
  };

  const displayWeatherData = () => {
    return (
      <>
        <div className="weather__card">
          {/* City and Time */}
          <div className="weather__card-header">
            <span className="weather__info highlight">
              {weatherData.name}, {weatherData?.sys.country}
            </span>
            <span className="weather__info">{getTime()}</span>
          </div>

          {/* Temperature & Weather */}
          <p className="weather__temp">{weatherData?.main.temp} &deg;C</p>
          <p className="weather__info--small">
            {weatherData?.weather[0].main}, {weatherData?.weather[0].description}
          </p>

          {/* Wind, Pressure, Humidity, Visibility */}
          <div className="weather__info-wrapper">
            <div className="weather__info-container">
              <p className="weather__info">
                <span className="weather__icons" title="Wind Speed">
                  <img src={Wind} alt="Wind" />
                </span>
                {weatherData.wind.speed} m/s
              </p>
              <p className="weather__info">
                <span className="weather__icons" title="Pressure">
                  <img src={Pressure} alt="Pressure" />
                </span>
                {weatherData.main.pressure} hPa
              </p>
              <p className="weather__info">
                <span className="weather__icons" title="Humidity">
                  <img src={Humidity} alt="Humidity" />
                </span>
                {weatherData.main.humidity} %
              </p>
              <p className="weather__info">
                <span className="weather__icons" title="Visibility">
                  <img src={Visibility} alt="Visibility" />
                </span>
                {weatherData.visibility} m
              </p>
            </div>
            <div className="weather__image-wrapper">
              <img
                className="weather__image"
                src={` https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="weather">
      {isLoading && <Loader />}
      {!isLoading &&
        (!weatherData.name ? (
          <NullState
            message={`${!!error ? error : "Search a city to know it's weather conditions!"}`}
            isError={!!error}
          />
        ) : (
          displayWeatherData()
        ))}
    </section>
  );
};

export default WeatherDisplay;
