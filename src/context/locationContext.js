import { createContext, useState, useEffect } from "react";
import axios from "axios";

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialValues = {
    name: "",
    tempMin: 0,
    tempMax: 0,
  };

  const [weatherData, setWeatherData] = useState(initialValues);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    setCurrentCity("Istanbul");
  }, []);

  useEffect(() => {
    console.log("Changed weather data", weatherData)
  },[weatherData])

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
            .then((res) => res.data.main)
            .then((data) => {
              console.log(data)
              setWeatherData({
                name: currentCity,
                tempMin: data.temp_min,
                tempMax: data.temp_max,
              });
            })
        });
    }
  }, [currentCity]);

  const values = {
    weatherData,
    setWeatherData,
  };

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};
export default weatherContext;
