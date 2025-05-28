import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
import { preinitModule } from "react-dom";


function WeatherCard(props) {
let icon;
if (props.data.forecast === "Sunny"){
  icon = sunny;
} else if (props.data.forecast === "Cloudy"){
  icon = cloudy;
} else if (props.data.forecast === "Partly Cloudy"){
  icon = partlyCloudy;
} else if (props.data.forecast === "Rainy"){
  icon = rainy;
}

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt={props.data.forecast} id = "icon"/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{props.city.city}</h3>
            <h5 className="card-text">{props.city.temperature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;