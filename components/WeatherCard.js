import React from "react";
import { preinitModule } from "react-dom";
import { getWeatherIcon } from "./helpers/WeatherIcon";


function WeatherCard(props) {
  console.log('WeatherCard props:', props);
    if(!props.data){
    return <p>No weather data available</p>
  }
  

  const icon = getWeatherIcon(props.data.forecast)

  return (
    <div className = "weather-card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt={props.data.forecast} id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;