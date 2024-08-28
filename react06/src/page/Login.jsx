import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoginState}) => {    // setLoginState 안에 객체 있으니까 중괄호 적어줘야함

    const navigate = useNavigate();
    const goToHome = () =>{
        // 1. 로그인 상태 >> true
        // App.js에 있는 LoginState로 setLoginState가 전달되도록 App.js의 login라우터에 변수 가져와주기
        // 2. '/'으로 이동
        setLoginState(true)
        navigate('/')
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={goToHome}>로그인</button>
    </div>
  )
}

export default Login