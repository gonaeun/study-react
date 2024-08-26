import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherPage = () => {

  const [weather, setWeather] = useState(null)
  // 우리가 보고있는 정보의 형태가 객체니까 {}
  // html에서 물음표 문법 쓸거면 null로 해줘야 오류안남
  // (null로 적어줘야 물음표 문법이 판단할 때 처음에는 값이 비어서 화면이 보여지지 않다가, 데이터 들어오면 rerendering되면서 보여짐)

    const getCurrentWeather = async ()=>{
        let cityName = 'Gwangju';
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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
        <p>도시 : {weather?.name}</p>
        <p>온도: {weather?.main.temp}</p>
        <p>날씨상태: {weather?.weather[0].description}</p>
        <p><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="날씨이미지"></img></p>
        {/* 로칼서버가 아니라 외부서버에 데이터 요청하는거라서 통신 속도에 따라 에러가 뜰 수도 있음
          >> REACT에서 물음표 문법>> 데이터가 있냐 없냐 >> 있으면 보여주고 없어도 에러 안 뜨도록 */}
      </div>
    </div>
  )
}

export default WeatherPage