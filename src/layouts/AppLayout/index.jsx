import React, { useContext } from 'react';

import Navbar from '../../components/Navbar';

import { WeatherData } from '../../store/weatherData';

const AppLayout = ({ children }) => {
  const {setSearchText} = useContext(WeatherData);

  const onChange = (event) => {
    setSearchText(event.target.value || '');
  };

  return (
    <>
      <Navbar searchPlaceholder="Enter city name..." onTextChange={onChange} />
      {children}
    </>
  );
};

export default AppLayout;
