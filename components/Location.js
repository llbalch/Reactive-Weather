import React from 'react';
import { useState, useEffect } from 'react';
import { getWeatherIcon } from "./helpers/WeatherIcon";

function Location() {
    const [location, setLocation] = useState("Dallas")
    const [weather, setWeather] = useState(null)
    const apiKey = process.env.REACT_APP_ACCU_API_KEY;

async function fetchWeather(){
    const result = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/351194?apikey=${apiKey}`)
    const data = await result.json();
    setWeather(data)
}

useEffect(() => {
fetchWeather()
},[location])


return (
    <div>
        <input value={location} onChange={e => setLocation(e.target.value)}/>
    <div>
        {weather && JSON.stringify(weather, null, 2)}
    </div>
    </div>
)
}








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
