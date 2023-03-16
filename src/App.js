import "./App.css";
import Header from "./components/Header";
import WeekPanel from "./components/WeekPanel";
import { WeatherProvider } from "./context/locationContext";

function App() {
  return (
    <div>
      <Header />
      <WeatherProvider>
        <WeekPanel />
      </WeatherProvider>
    </div>
  );
}

export default App;
