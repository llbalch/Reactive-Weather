import React from 'react';
import { useState } from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard.js'
import Location from './components/Location.js'
import { cities } from './data.js'

function App() {

    const [location, setLocation] = useState("Dallas")
    console.log('cities:', cities);
    cities.forEach((city, i) => console.log(`city ${i}:`, city));

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((city, i) => (
                < WeatherCard key={i} data={city} />
                ))}
            </div>
            
        </>
    )
}

export default App;