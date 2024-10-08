import React , { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({nick, setNick}) => {
    const navigate = useNavigate();

    const logout = () => {
        // 세션 삭제
        sessionStorage.removeItem("nick");
        setNick(null)
        navigate("/");
    }

    // useEffect(()=>{
    //     setLogin(sessionStorage.getItem('nick'))
    // },[])

  return (
    <div className='header'>
        <div className='header-section'>
            <h2>
                <Link to={"/"}>로고</Link>
            </h2>
        </div>
        <div className='header-section'>
            <a href='https://www.naver.com/'>포트폴리오</a>
            <a href='https://www.naver.com/'>블로그</a>
            <a href='https://www.naver.com/'>Github</a>
        </div>
        <div className='header-section'>
            {nick === null?
                <div>
                    <Link to={"/login"}>로그인</Link>
                    <Link to={"/join"}>회원가입</Link>
                </div>
                :
                <span onClick={logout}>로그아웃</span>
            }
        </div>
    </div>
  )
}

export default Header