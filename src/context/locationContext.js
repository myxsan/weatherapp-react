import { createContext, useState, useEffect } from "react";
import axios from "axios";

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialValues = {
    name: "",
    tempMin: 0,
    tempMax: 0,
    icon: "",
  };

  const [weatherData, setWeatherData] = useState(initialValues);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    if (currentCity !== "") {
      axios(
        `https://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=2ca583651f3413f20056ec25604aea24`
      )
        .then((res) => res.data[0])
        .then((data) => {
          axios(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=2ca583651f3413f20056ec25604aea24&units=metric`
          )
            .then((res) => res.data)
            .then((data) => {
              setWeatherData({
                name: currentCity,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
              });
            })
        });
    }
  }, [currentCity]);

  const values = {
    weatherData,
    setCurrentCity,
  };

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};
export default weatherContext;
