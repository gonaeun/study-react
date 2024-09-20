import React from 'react'
import { useState } from 'react'

const MyMap02 = () => {

    const colorArray = ['red','orange','yellow','green','blue']
    const [myColor, setMyColor]=useState('black')

    const divClick =(e)=>{
        // 두번째 줄에 있는 div 태그 색상 변경 >> useState 사용
        // html코드에서 colorArray.map(data)로 만들어진 data값을 가져와야해
        // e.target : onClick 이벤트를 발생시킨 div태그
        setMyColor(e.target.style.backgroundColor)
    }
  return (
    <div>
        {colorArray.map((data)=>
        <div onClick={divClick} style={{backgroundColor:data, width:"100px", height:"100px", display:"inline-block"}}></div>)}
        <hr />
        <div style={{
            width:"100px", height:"100px", backgroundColor:myColor,  display:"inline-block"
        }}></div>

    </div>
  )
}

export default MyMap02 