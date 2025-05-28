import React from 'react';
import { getWeatherIcon } from "./helpers/WeatherIcon";

function LocationCard(props){
    const icon = getWeatherIcon(props.data.forecast)
return (
    <div className = "location-card">
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
}

// Search the data array to find the item that has the matching city
export default function Location({ data, location, setLocation}){
const matchedData = data.find((item) => item.city === location)
return matchedData ? (
    <LocationCard data={matchedData} />
) : (
    <p>No weather data found for {location}</p>
)
}
