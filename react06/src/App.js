import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import ProductDetailPage2 from './page/ProductDetailPage2';
import Login from './page/Login';
import PrivateRouter from './page/PrivateRouter';

import { useState, useEffect } from 'react';

// Routes : 요청 URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면 컴포넌트를 렌더링해주는 컴포넌트

function App() {

  // 로그인 상태를 보관하는 state 생성 (PrivateRouter페이지 : 마이페이지 접근 여부)
  // 초기값은 로그인이 되어있지 않은 상태 : false
  const [loginState, setLoginState] = useState(false);

  // 로그인 값이 잘 바뀌는지 확인하는 용도 (useEffect)
  useEffect(()=>{
    console.log("현재 로그인 상태:", loginState);   
  }, [loginState])

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
        <Route path='/productQuery' element={<ProductDetailPage2/>}/>


        <Route path='/login' element={<Login setLoginState={setLoginState}/>}/>
        {/* App.js의 setLoginState를 login페이지에서도 사용하도록 변수 가져와주기 */}
        <Route path='/myPage' element={<PrivateRouter state={loginState}/>}/>
      </Routes>
    </div>
  );
}

export default App;
