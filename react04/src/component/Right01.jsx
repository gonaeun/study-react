import React from 'react'
import Right02 from './Right02'

const Right01 = (props) => {

  const ChNum =()=>{
    // props.data(num+1) 이라고 적어주려면 app.js에서 Num뿐만 아니라, setNum값도 넘겨줘야해
    // >> data를 data2로 하나더 정의해서 setNum값도 받아오자
    // +1을 사용하면 단방향으로만 데이터를 전달해야해서, Context라는 공유공간 만드는 방법으로 해보겠음!
    props.data(props.data2+1)
  }

  return (
    <div>
    <h1>Right01</h1>
    <Right02></Right02>
    {/* <button onClick={chNum}>+1</button> */}
    </div>
  )
}

export default Right01