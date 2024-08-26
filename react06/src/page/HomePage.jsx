import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

    const goToProduct = ()=>{
        navigate('/product')
    }
  return (
    <div>
        <h1>HomePage</h1>
        <Link to={"/about"}>About 페이지로 이동</Link>
        <br></br>
        <button onClick={goToProduct}>ProductPage fh dlehd</button>
    </div>
  )
}

export default HomePage