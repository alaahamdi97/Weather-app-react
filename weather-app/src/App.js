import React from "react";
import CityComponent from "./components/CityComponent/CityComponent";
import WeatherComponent from "./components/WeatherComponent/WeatherComponent";
import axios from "axios";
// import Axios from "https://cdn.skypack.dev/axios";
import styles from "./App.module.css";
const API_KEY = "56a2c31c64a6247e0e851f88799c0dd5";

function App() {
  const [city, updateCity] = React.useState();
  const [weather, updateWeather] = React.useState();

  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };

  return (
    <div className={styles.container}>
      <span className={styles.appLabel}> Weather App</span>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
