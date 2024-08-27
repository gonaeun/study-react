import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

    const goToProduct = ()=>{
        navigate('/product/1')
    }
  return (
    <div>
        <h1>HomePage</h1>
        <Link to={"/about"}>About 페이지로 이동</Link>
        <br></br>
        <button onClick={goToProduct}>ProductPage로 이동</button>
        <br></br>
        <Link to={"/mypage"}>MyPage로 이동</Link>

    </div>
  )
}

export default HomePage