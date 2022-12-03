import { useEffect, useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import SearchBox from "./components/SearchBox";

function App() {
  const [apiData, setApiData] = useState({});
  const [buttonValue, SetButtonValue] = useState("dhaka");
console.log(apiData)
  useEffect(() => {
    const weatherAPI = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${buttonValue}&units=metric&appid=92786e203e64a8736c232d0bc13c5d1f`;

        const res = await fetch(url);
        const data = await res.json();

        const { temp, pressure, humidity } = data.main;
        const { main: weatherMood } = data.weather[0];
        const { name, timezone } = data;
        const { country, sunset } = data.sys;
        const { speed } = data.wind;

        const myNewWeatherInfo = {
          temp,
          pressure,
          humidity,
          weatherMood,
          name,
          country,
          sunset,
          speed,
          timezone,
        };

        setApiData(myNewWeatherInfo);
      } catch (err) {
        console.log(err);
      }
    };
    weatherAPI();
  }, [buttonValue]);

  return (
    <div className="App">
      <main>
        <div className="container">
          <SearchBox SetButtonValue={SetButtonValue} />

          <MainCard {...apiData} />
        </div>
      </main>
    </div>
  );
}

export default App;
