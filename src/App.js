import axios from "axios";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeekPanel from "./components/WeekPanel";

function App() {
  const [data, setData] = useState(
    axios(
      "http://api.weatherapi.com/v1/current.json?key=61a0eef40d3543bca09143107231303&q=London&aqi=no"
    )
      .then((res) => res.data)
      .finally(() => console.log(data))
  );
  return (
    <div>
      <Header />
      <WeekPanel />
    </div>
  );
}

export default App;
