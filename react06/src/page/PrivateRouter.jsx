import React from 'react'
import MyPage from './MyPage'
// import Login from './Login'
import { Navigate } from 'react-router-dom'
// Navigate 컴포넌트 : 지정된 URL로 이동하는 컴포넌트

// PrivateRouter 역할 : 특정 조건이나 상태에 따라 마이페이지에 접근할 수 있게 하는 컴포넌트
// ex) 로그인 상태 판단 >> true : 마이페이지 접근 / false : 로그인페이지로 전환

const PrivateRouter = ({state}) => {
//   return state?<MyPage/>:<Login/>   // App.js에 로그인페이지가 있으니까, Navigate 훅으로 연결하기
  return state?<MyPage/>:<Navigate to="/login"/>  // state값이 true라면 동작하도록 삼항연산자
}

export default PrivateRouter