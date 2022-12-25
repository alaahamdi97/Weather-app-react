import React from "react";
import styles from "./City.module.css";
import imgSun from "./sun.png";
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <div className={styles.cityComponent}>
      <img src={imgSun} className={styles.weatherLogo} />
      <span className={styles.chooseCityLabel}>Find Weather of your city</span>
      <form className={styles.searchBox} onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(event) => updateCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default CityComponent;
