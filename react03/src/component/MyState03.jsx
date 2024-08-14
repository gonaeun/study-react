import React from 'react'
import { useState } from 'react';

const MyState03 = () => {

    const [num, setNum] = useState(0);
    
    const plus =()=>{
        setNum(num+1);
    }
    const minus =()=>{
        if(num>0){
            setNum(num-1);
        }else {
            setNum(0)
        }
    }
    // setNum(num-1) 이라고 정의한 후, if문(num<0일때 setNum(0))을 적어주면
    // 클로저함수의 특징(제일 마지막에 실행됨)에 의해 num값이 -1까지 나옴
    // >> 0이하로 내려가지 않게 하고 싶으면, if문 안에 setNum을 정의해 주어야 함

    const reset =()=>{
        setNum(0)
    }
  return (
    <div>
        <p>Like! ♥ {num}</p>
        <button onClick = {plus}>+1증가</button>
        <button onClick = {minus}>-1감소</button>
        <button onClick = {reset}>초기화</button>
    </div>
  )
}

export default MyState03