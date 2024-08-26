import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const WeatherPage = () => {

    const getCurrentWeather = async ()=>{
        let cityName = 'Gwangju';
        const API_KEY = 'd63e8cb3b097baac3b1a3eab593124ae';
        let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        const res = await axios.get(weather_url)
        const data = res.data

        console.log('날씨정보:', data);
        
    }

    // 처음 렌더링 했을 때, API 호출
    useEffect(()=>{
        getCurrentWeather()
    },[]) // MOUNT 상태

  return (
    <div>WeatherPage</div>
  )
}

export default WeatherPage