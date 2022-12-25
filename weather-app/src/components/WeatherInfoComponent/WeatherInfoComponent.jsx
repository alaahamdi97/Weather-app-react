import React from "react";
import WeatherInfoIcons from "../WeatherInfoIcons/WeatherInfoIcons";
import styles from "./Weather.module.css";
const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoIcon}>{WeatherInfoIcons[name]}</div>
      <span className={styles.infoLabel}>
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};
export default WeatherInfoComponent;
