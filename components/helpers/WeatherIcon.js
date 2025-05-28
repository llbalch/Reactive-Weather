import React from 'react'
import sunnyIcon from "../../assets/Sunny.svg"
import cloudyIcon from "../../assets/Cloudy.svg"
import partlyCloudyIcon from "../../assets/PartlyCloudy.svg"
import rainyIcon from "../../assets/Rainy.svg"

  export function getWeatherIcon(forecast) {
    if (forecast === "Sunny"){
      return <img src ={sunnyIcon} alt="Sunny" />;
    } else if (forecast === "Cloudy"){
      return <img src ={cloudyIcon} alt="Cloudy" />;
    } else if (forecast === "Partly Cloudy"){
      return <img src ={partlyCloudyIcon} alt="Partly Cloudy" />;
    } else if (forecast === "Rainy"){
      return <img src ={rainyIcon} alt="Rainy" />;
    } else {
        return null;
    }
}