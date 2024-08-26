import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherPage = () => {

  const [weather, setWeather] = useState({})
  // 우리가 보고있는 정보의 형태가 객체니까 {}

    const getCurrentWeather = async ()=>{
        let cityName = 'Gwangju';
        const API_KEY = 'd63e8cb3b097baac3b1a3eab593124ae';
        let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        const res = await axios.get(weather_url)
        const data = res.data

        // API 호출 응답결과를 state에 저장
        setWeather(data)

        console.log('응답정보', res);
        console.log('날씨정보:', data);
        
    }

    // 처음 렌더링 했을 때, API 호출
    useEffect(()=>{
        getCurrentWeather()
    },[]) // MOUNT 상태

  return (
    <div>
      <h1>WeatherPage</h1>
      <div>
        <p>도시 : {weather.name}</p>
        <p>온도: {weather.main?.temp}</p>
        <p>날씨상태: {weather.weather[0].description}</p>
        {/* REACT에서 물음표 >> 데이터가 있냐 없냐 >> 있으면 보여주고 없어도 에러 안뜨도록 */}
      </div>
    </div>
  )
}

export default WeatherPage