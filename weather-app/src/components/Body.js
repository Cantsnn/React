import React from 'react'
import { useWeather } from '../context/WeatherContext'

 
function Body() {
 const {city, setCity,isLoading, weatherData} = useWeather();
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const current_date = new Date()
 var day = current_date.getDay()
  
 console.log(day)
  return (
    isLoading ? <h1>Yükleniyor....</h1> : <div>  
      <h3>Şehir seçiniz : 
        <select name='cities' value={city} onChange={(val) => setCity(val.target.value)}>
            <option>İstanbul</option>
            <option>Ankara</option>
            <option>İzmir</option>
            <option>Trabzon</option>
        </select> 
        </h3>
        <ul  >
        <h1>{city  }</h1>
        {
          weatherData.map((weather,i)=>(
            
              <li key={i}>
              <div id="weather_wrapper">
              <div className={`weatherCard ${i===0?'today':""}`}>
                <div className="currentTemp">
                  <span className="temp">{Math.floor(weather.day.avgtemp_c)}&deg;</span>
                  <span className={`location ${i===0?'today':""}`}>{i===0?"Today":weekday[(++day)%7]}</span>
                  
                </div>
                <div className="currentWeather">
                  <span className="conditions"><img src={weather.day.condition.icon} alt=" " ></img>
                    
                  </span>
                  
                  <div className="info"> 
                    <span className="rain">% {weather.day.daily_chance_of_rain<10?'0'+weather.day.daily_chance_of_rain:weather.day.daily_chance_of_rain}</span>
                    <span className="wind">{weather.day.maxwind_mph} MPH</span>
                  </div>
                </div>
              </div>
              
            </div>
 
       </li>
          ))
     
      }
       
 
       </ul>
    </div>
  )
}

export default Body