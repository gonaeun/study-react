import React from 'react'
import { useState } from 'react'

const MyMap02_2 = () => {

    const colorArray = ['red','orange','yellow','green','blue']
    const [myColor, setMyColor]=useState('black')

    let myStyle ={width:"100px", height:"100px", display:"inline-block"}

  return (
    <div>
        <h1>색상 선택하기</h1>
        {colorArray.map((data)=>
        <div onClick={()=>setMyColor(data)} style={{...myStyle, backgroundColor:data}}></div>)}
        {/* 코드 한줄로 끝내버리는 방법
         : 위에서 함수 안 만들고, html코드에서 화살표 함수 만들어서 중괄호로 적용해주기 */}

        {/* style 인라인으로 적용하는 또다른 방법 */}
        {/* ...(스프레드) : 객체 또는 배열이 가지고 있는 내용을 펼치겠습니다 (js최신문법) 
        style={{...myStyle}}
        style={{width:"100px", height:"100px", display:"inline-block"}} 의미함
        >> 스프레드의 객체를 사용하면, 객체형태로 풀려버리니까, 중괄호로 한번 더 묶어주기
         */}

        {/* backgroundColor:data의 값이 위에서는 정의되어 있지 않기 때문에,
            style을 return 위에 적어줄거면, 그 부분은 따로 빼서 html코드에 적어주기 (고정값이면 상관없음) */}
        <hr/>
        <h1>선택한 색상</h1>
        <div style={{
            width:"100px", height:"100px", backgroundColor:myColor,  display:"inline-block"
        }}></div>

    </div>
  )
}

export default MyMap02_2