import React from 'react';
import WeatherCard from "./WeatherCard"
import sunnyIcon from "../assets/Sunny.svg"
import cloudyIcon from "../assets/Cloudy.svg"
import partlyCloudyIcon from "../assets/PartlyCloudy.svg"
import rainyIcon from "../assets/Rainy.svg"



export function getWeatherIcon(forecast){
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

function LocationCard({ data }) {
    return (
        <div className="weather-card">
            <h2>{data.city}</h2>
            <p>{data.forecast}</p>
            <p>{data.temperature}°</p>

{getWeatherIcon(data.forecast)}
        </div>
    )
}


export default function Location({ data, location}){
const matchedData = data.find((item) => item.city === location)
return matchedData ? (
    <LocationCard data={matchedData} />
) : (
    <p>No weather data found for {location}</p>
)
}