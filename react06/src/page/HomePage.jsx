import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to={"/about"}>About 페이지로 이동</Link>
    </div>
  )
}

export default HomePage