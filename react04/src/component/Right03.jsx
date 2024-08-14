import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Right03 = () => {
    // 공유공간에 접근해서 state 값을 바꾸고 싶어
    const data = useContext(AppContext);

    const chNum=()=>{
        data.setState(data.state+1)
        // 공유되고 있는 state값을 setState 값으로 바꿔줄게
        // Right3에서 chNum 버튼을 누르면 Left3 화면에 바뀐 값이 출력되도록
    }
    return (
        <div>
            <h1>Right03</h1>
            <button onClick={chNum}>+1</button>
        </div>
    )
}

export default Right03