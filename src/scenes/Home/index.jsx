import React from 'react';

import AppLayout from '../../layouts/AppLayout';
import WeatherContainer from '../../containers/WeatherContainer';

const Home = () => {
  return (
    <AppLayout>
      <WeatherContainer />
    </AppLayout>
  );
};

export default Home;
