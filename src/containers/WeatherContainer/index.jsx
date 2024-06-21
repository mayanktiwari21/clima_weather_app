import React, { useContext, useEffect, useState } from 'react';

import WeatherDisplay from '../../components/WeatherDisplay';
import { WeatherData } from '../../store/weatherData';

const WeatherContainer = () => {
  const { searchText, weatherData, setWeatherData, error, setError } = useContext(WeatherData);

  const [isLoading, setIsLoading] = useState(false);

  /**
   * This function fetches the weather data of the city searched for.
   */
  const getCityWeather = async () => {
    setIsLoading(true);
    try {
      if (!searchText) {
        setError('');
        setWeatherData({});
        return;
      }
      // Get latitude and longitude data for the city
      let latitudeLongitude = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
      );
      latitudeLongitude = await latitudeLongitude.json();

      if (latitudeLongitude.length > 0) {
        // Get weather data for the city
        let weather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeLongitude[0]?.lat}&lon=${latitudeLongitude[0]?.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        weather = await weather.json();

        // Set the weather data in the store
        setWeatherData(weather);
      } else {
        throw new Error('City name not recognized. Try again.');
      }
    } catch (error) {
      setError(error.message);
      setWeatherData({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Use debounce effect to prevent frequent api calls
    const timeout = setTimeout(() => {
      getCityWeather();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  return <WeatherDisplay weatherData={weatherData} isLoading={isLoading} error={error} />;
};

export default WeatherContainer;
