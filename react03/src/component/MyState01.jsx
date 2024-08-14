import React from 'react'
import { useState } from 'react';
// React Hook : 함수형 컴포넌트에서 사용되어지는 기능
// useState : state 변수를 생성할 수 있는 기능

// React에서는 일반 변수와 화면에 출력할 변수(state변수)를 구분함

const MyState01 = () => {

    const [num, setNum] = useState(0);
    // useState를 이용해서 state변수를 생성하는 구조
    // num : state 변수
    // setNum : state 변수를 바꿀 수 있는 함수
    // useState(0) : state 변수의 초기값을 0으로 설정
    // 비구조 할당 : 특정 함수를 통해 정해져있지 않은 값을 데이터로 넣겠다

    // let num = 0;
    // 일반 변수는 num=10 ; 이런식으로 변수값을 바꿀 수 있었지만
    // useState에서는 setNum을 이용해서만 값을 바꿀 수 있음 >> num++; 사용못함

    const plus =()=>{
        // num++;
        // console.log(num)
        // 증가된 값은 콘솔에 보이지만, 화면에서는 변하지 않음 >> React Hook 필요
        setNum(num +1);
        // num의 값을 바꿔서 다시 출력하기 위함 >> "재렌더링" == 해당 컴포넌트를 다시 실행 시킬거야
        console.log(num); 
        //setNum이 1일때, 콘솔로그는 아직 0이 찍혀있음 왜냐? 클로저함수이기 때문

        // setState의 특징 :  클로저 함수 >> 제일 마지막에 실행된다!!
        // setNum(num+1) >> 여기 순서에서야 실행되어서 콘솔로그가 먼저 찍히고, setNum 값이 이후에 바뀌는 것
        // if(num==10){alert("목표숫자도달")} 함수도 한박자 느리게 작동할 수 밖에...
    }

    // 함수 선언할 때, const랑 function은 개발자 스타일 차이
    function minus(){
        setNum(num -1);
    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
    </div>
  )
}

export default MyState01