import Home from './scenes/Home';
import WeatherDataProvider from './store/weatherData';

import './App.css';

function App() {
  return (
    <WeatherDataProvider>
      <Home />
    </WeatherDataProvider>
  );
}

export default App;
