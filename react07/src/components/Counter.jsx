import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {

    // useSelector() : store에 보관된 state를 접근하기 위한 함수
    // 매개변수 : state >> store에 보관된 state 정보를 객체로 반환
    // 화살표함수는 매개변수가 하나면 괄호 생략가능
    const count = useSelector(state=>state.counter.count)  // 0 출력(name)

    // useDispatch() : state를 변경하기 위한 명령을 보내는 함수
    const dispatch = useDispatch()

    console.log(count);
    
  return (
    <div>
        <h1>Redux Toolkit 활용 실습</h1>
        <h1>{count}</h1>
        <button>증가</button>
        <button>감소</button>
        <button>2씩 증가</button>
    </div>
  )
}

export default Counter