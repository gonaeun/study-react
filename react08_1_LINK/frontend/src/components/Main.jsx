import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Main = () => {

  // 로그인 상태를 저장하는 state
  const [ userInfo, setUserInfo ] = useState(null)
  console.log("[Main]", JSON.parse(sessionStorage.getItem("userInfo")));

  // 로그아웃 기능 구현
  const logout = () =>{
    alert("다음에 다시 방문해주세요");
    sessionStorage.removeItem("userInfo");
    setUserInfo(null)
  }

  useEffect(()=>{
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")))
  },[]);
  

  return (
    <div>
        <h1>React-Node 연동 실습</h1>

        {userInfo === null ?
        <div>
          <Link to={"/join"}>회원가입</Link>
          <Link to={"/login"}>로그인</Link>
        </div>
        :
        <div>
          <Link to={"/mypage"}>마이페이지</Link>
          <button>로그아웃</button>
        </div>
        }
    </div>
  )
}

export default Main