import "./App.css";
import Header from "./components/Header";
import WeekPanel from "./components/WeekPanel";
import { WeatherProvider } from "./context/locationContext";

function App() {
  return (
    <WeatherProvider>
      <Header />
      <WeekPanel />
    </WeatherProvider>
  );
}

export default App;
