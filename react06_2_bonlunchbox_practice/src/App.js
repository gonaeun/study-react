import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';

import Main from './page/Main';
import Login from './page/Login';
import GoodList from './page/GoodList';
import GoodDetail from './page/GoodDetail';

import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRouter from './page/PrivateRouter';

/*
실습1. page 폴더 내에 4개의 페이지 생성
  : 메인페이지(Main), 로그인페이지(Login), 상품전체목록(GoodList), 상품상세페이지(GoodDetail)


실습2. component 폴더 내에 4개의 컴포넌트 생성
  : 헤더(Header), 컨텐츠(Content), 푸터(Footer), 상품정보(GoodItem)

실습3. 페이지를 이동할 수 있도록 URL과 페이지 연결
 - index.js : BrowserRouter
 - App.js : Routes, Route
  [ 페이지별 경로 ]
  - 메인 : '/'
  - 로그인 : '/login'
  - 상품전체목록 : '/menulist'
  - 상품상세페이지 : '/menulist/:id'
*/

/*
실습4. auth, setAuth를 헤더 영역에 전달하여 로그인상태에 따라 로그인/로그아웃이 출력되도록 구현
 - 로그인이 아닌 상태에서 "로그인"버튼 클릭 >> 로그인페이지로 이동
 - "로그아웃"버튼 클릭 >> auth값을 false로 변경한 후, 메인페이지로 이동
*/
function App() {

  const [ auth, setAuth ] = useState(false)
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        {/* 로그인 페이지로 이동하기 전에, 로그인 판단할 수 있도록 로그인 함수(setAuth)로 넘겨주기 */}
        <Route path='/menulist' element={<GoodList/>}/>
        <Route path='/menulist/:id' element={<PrivateRouter/>} auth={auth}/>
        {/* 로그인여부 판단해서 페이지 이동하도록 >> 인증하는 함수(setAuth)까지 넘겨줄 필요는 없으므로 인증하는 값(auth)만 넘겨줌 */}
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
