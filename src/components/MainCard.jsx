import React, { useEffect, useState } from "react";

const MainCard = ({
  temp,
  pressure,
  humidity,
  weatherMood,
  name,
  country,
  sunset,
  speed,
}) => {
  const [weatherState, setWeatherState] = useState("");

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        default:
          setWeatherState("wi-day-sunny");
      }
    }
  }, [weatherMood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div className="box">
      {/* top  */}
      <div className="main-icon">
        <i className={`wi ${weatherState}`}></i>
      </div>

      {/* middle  */}
      <div className="middle-box">
        <div className="temparature">
          <h1>{temp}&deg;</h1>
        </div>
        <div className="weather-name">
          <h2>{weatherMood}</h2>
          <span>
            {country}, {name}
          </span>
        </div>
        <div className="time">
          <h2> {new Date().toLocaleDateString()}</h2>
          <h2> {new Date().toLocaleTimeString()}</h2>
        </div>
      </div>

      {/* bottom  */}
      <div className="bottom">
        {/* single bottom box  */}
        <div className="single-box">
          <div className="botton-icon">
            <i className="wi wi-humidity"></i>
          </div>
          <div className="botton-icon-text">
            <p>{timeStr} PM</p>
            <p>Sunset</p>
          </div>
        </div>

        {/* single bottom box  */}
        <div className="single-box">
          <div className="botton-icon">
            <i className="wi wi-thermometer"></i>
          </div>
          <div className="botton-icon-text">
            <p>{humidity}</p>
            <p>Humidity</p>
          </div>
        </div>

        {/* single bottom box  */}
        <div className="single-box">
          <div className="botton-icon">
            <i className="wi wi-solar-eclipse"></i>
          </div>
          <div className="botton-icon-text">
            <p>{pressure}</p>
            <p>Pressure</p>
          </div>
        </div>

        {/* single bottom box  */}
        <div className="single-box">
          <div className="botton-icon">
            <i className="wi wi-night-alt-cloudy"></i>
          </div>
          <div className="botton-icon-text">
            <p>{speed}</p>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
