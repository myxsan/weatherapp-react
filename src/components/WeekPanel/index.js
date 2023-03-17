import React, { useEffect, useState } from "react";
import locationContext from "../../context/locationContext";
import { useContext } from "react";

function WeekPanel() {
  const { weatherData } = useContext(locationContext);
  const [icon, setIcon] = useState(weatherData.icon)
  useEffect(() => {
    setIcon(weatherData.icon)
  }, [weatherData]);
  return <div className="weekPanel">
    <div className="day">
      <img src={icon} className="weatherIcon" />
      <h4 className="temp">{Math.round(weatherData.tempMin)}/{Math.round(weatherData.tempMax)}</h4>
    </div>
  </div>;
}

export default WeekPanel;
