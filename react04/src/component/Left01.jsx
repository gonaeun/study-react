import React from 'react'
import Left02 from './Left02'

const Left01 = (props) => {
    // props={
    //     data:num   // data가 객체형태로 넘어옴 >> return에서 객체형태로 출력해주자
    // }
  return (
    <div>
        <h1>Left01</h1>
        {/* <h1>{props.data}</h1> */}
        <Left02></Left02>
    </div>
  )
}

export default Left01