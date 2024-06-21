import { createContext, useState } from 'react';

export const WeatherData = createContext([]);

function WeatherDataProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState({});
  return (
    <WeatherData.Provider value={{ searchText, setSearchText, weatherData, setWeatherData, error, setError }}>
      {children}
    </WeatherData.Provider>
  );
}

export default WeatherDataProvider;
