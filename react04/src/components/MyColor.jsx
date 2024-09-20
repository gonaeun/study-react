import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../App'

const MyColor = () => {

    const shareData = useContext(ColorContext);

    const colorArray = [ 'red', 'orange', 'yellow', 'green', 'blue']

    let myStyle ={width:"100px", height:"100px", display:"inline-block"}

    // const testFun = () => test2
    // 1. 화살표 함수에서 실행로직이 한줄이라면 {중괄호} 생략 가능  (ES6 최신js문법)
    // 2. {} 생략한 경우, 함수실행로직으로 data가 있다면, 해당 data를 반환(return)하겠습니다

  return (
    <div>
        {colorArray.map((data)=>
        <div onClick={()=>shareData.setState(data)}
             style={{...myStyle, backgroundColor:data}}>
        </div>)}
    </div>
  )
}

export default MyColor