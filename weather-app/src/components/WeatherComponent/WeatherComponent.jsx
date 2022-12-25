import React from "react";
import WeatherInfoComponent from "../WeatherInfoComponent/WeatherInfoComponent";
import WeatherIcons from "../WeatherIcons/WeatherIcons";
import styles from "./WeatherComponent.module.css";
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <div className={styles.weatherComponent}>
      <span
        className={styles.location}
      >{`${weather?.name}, ${weather?.sys?.country}`}</span>
      <div className={styles.weatherCondition}>
        <span className={styles.condition}>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {` | ${weather?.weather[0].description}`}
        </span>
        {WeatherIcons[weather?.weather[0].icon]}
      </div>
      <span className={styles.weatherInfoLabel}>Weather info :</span>
      <div className={styles.weatherInfoContainer}>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </div>
    </div>
  );
};
export default WeatherComponent;
