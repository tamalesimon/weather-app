import React, { useState } from 'react';
import './styles/main.css';
import { fetchWeather } from './api/fetchWeather';
import * as moment from 'moment';



const App = () => {
  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = async (event) =>{
    if(event.key === 'Enter'){
      const data = await fetchWeather(query)

      

      setWeather (data);
      console.log(data);  

      setQuery ('');
    }
  }

  return(
    
    <div className="container w-full flex h-full mx-auto my-40 flex-col items-center justify-center">
      <h2 className="text-gray-900 my-2 font-bold text-2xl"><svg class="h-20" viewBox="0 0 81 73" xmlns="http://www.w3.org/2000/svg">
  <g fill-rule="nonzero" fill="none">
    <path d="M35.288 26.431a2.283 2.283 0 01-4.218-1.746 19.025 19.025 0 0117.582-11.75c10.506 0 19.022 8.516 19.022 19.022 0 2.155-.36 4.264-1.055 6.26a2.283 2.283 0 01-4.311-1.502c.528-1.515.8-3.116.8-4.758 0-7.985-6.472-14.457-14.456-14.457a14.46 14.46 0 00-13.364 8.931zM71.248 9.36a2.283 2.283 0 010 3.228l-3.227 3.228a2.283 2.283 0 01-3.228-3.228L68.02 9.36a2.283 2.283 0 013.228 0zM48.653 0a2.283 2.283 0 012.283 2.283v4.565a2.283 2.283 0 11-4.565 0V2.283A2.283 2.283 0 0148.652 0zM80.61 31.957a2.283 2.283 0 01-2.283 2.282h-4.565a2.283 2.283 0 110-4.565h4.565a2.283 2.283 0 012.283 2.283zM26.056 9.36a2.283 2.283 0 013.228 0l3.228 3.228a2.283 2.283 0 11-3.228 3.228l-3.228-3.228a2.283 2.283 0 010-3.228z" fill="#FECA57"/>
    <path d="M45.138 37.283a2.283 2.283 0 01-1.93-1.064 20.524 20.524 0 00-17.382-9.589c-11.346 0-20.543 9.198-20.543 20.544s9.197 20.543 20.543 20.543H55.5c8.404 0 15.217-6.813 15.217-15.217S63.904 37.283 55.5 37.283H45.138zm1.22-4.566H55.5c10.926 0 19.783 8.857 19.783 19.783 0 10.926-8.857 19.783-19.783 19.783H25.826C11.96 72.283.717 61.04.717 47.173c0-13.866 11.242-25.108 25.11-25.108a25.08 25.08 0 0120.531 10.652z" fill="#0ABDE3"/>
  </g>
</svg>Weather App </h2>
      <div className="items-center justify-center">
      <input
          className="flex text-center bg-grey-lighter text-grey-darker border border-grey-lighter rounded"
          type="text"
          placeholder="Enter Country/City"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />
        </div>
      <div className="w-64 cursor-pointer border-none b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
        {weather.main && (
          <div>
            <div className="text-md  flex flex-col text-gray-900">
              <span className="font-bold">Today</span>
              <span>{moment().format('LL')}</span>
            </div>
            <div className="">
              <h2 className="city-name">
                <span className="font-bold text-xl">{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </div>
              <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
