import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import ProductDetails from './page/ProductDetails';

/*
  실습1. 각 페이지 컴포넌트를 page 폴더 내에 생성
    - 헤더영역 : Header.jsx (components 폴더. 나머지는 페이지폴더)
    - 로그인 페이지 : LoginPage.jsx
    - 메인 페이지 : MainPage.jsx
    - 상품상세페이지 : ProductDetails.jsx

    실습2. 페이지 컴포넌트를 화면에 출력할 수 있도록 라우터 설정
    - 로그인 : '/login'
    - 메인 : '/'
    - 상품상세페이지 : '/prdDetail'

*/

function App() {

  return (
    <div className="container">
      <Header/>

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/prdDetail' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
