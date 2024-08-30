import React from 'react'
import GoodDetail from './GoodDetail';
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({auth}) => {
    // App.js에서 인증하는 값 auth 넘겨받음
    console.log('로그인상태:', auth);
    
  return (
    auth?<GoodDetail/>:<Navigate to={'/login'}/>
    // 로그인 인증값에 따라 디테일페이지를 보여줄지, 로그인 화면으로 이동할지
  )
}

export default PrivateRouter