import React , { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [login,setLogin] = useState(sessionStorage.getItem("nick"))

  return (
    <div className='header'>
        <div className='header-section'>
            <h2>
                <Link to={"/"}>로고</Link>
            </h2>
        </div>
        <div className='header-section'>
            <a href='#'>포트폴리오</a>
            <a href='#'>블로그</a>
            <a href='#'>Github</a>
        </div>
        <div className='header-section'>
            {login === undefined?
                <div>
                    <Link to={"/login"}>로그인</Link>
                    <Link to={"/join"}>회원가입</Link>
                </div>
                :
                <span>로그아웃</span>
            }
        </div>
    </div>
  )
}

export default Header