import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// counterSlice 내에 정의된 reducer 함수를 접근하기 위한 import
import { CounterActions } from '../redux/reducers/counterSlice'


const Counter = () => {

    // useSelector() : store에 보관된 state를 접근하기 위한 함수
    // 매개변수 : state >> store에 보관된 state 정보를 객체로 반환
    // 화살표함수는 매개변수가 하나면 괄호 생략가능
    const count = useSelector(state=>state.counter.count)  // 0 출력(name)

    // useDispatch() : state를 변경하기 위한 명령을 보내는 함수
    const dispatch = useDispatch()

    const handleClick1 = ()=>{
        dispatch(CounterActions.increment())
    }

    const handleClick2 = ()=>{
        dispatch(CounterActions.decrement())  // 함수 호출하는 () 붙여줘야 함수 실행되는고 잊지마
    }

    const handleClick3 = ()=>{
        dispatch(CounterActions.incrementByAmount({num:2})) // 페이로드 넣어줘
          // 0 또는 {num:0}으로 입력 >> 콘솔창에서 incrementByAmount의 action의 payload:0으로 확인됨
          // 2 입력 >> payload:2 >> 2씩 증가시킬 수 있음!
    }

    console.log(count);
    
  return (
    <div>
        <h1>Redux Toolkit 활용 실습</h1>
        <h1>{count}</h1>
        <button onClick={handleClick1}>증가</button>
        <button onClick={handleClick2}>감소</button>
        <button onClick={handleClick3}>2씩 증가</button>
    </div>
  )
}

export default Counter