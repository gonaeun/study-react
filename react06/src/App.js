import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import ProductDetailPage2 from './page/ProductDetailPage2';
import PrivateRouter from './page/PrivateRouter';
import MyPage from './page/MyPage';
import Login from './page/Login';

// Routes : 요청 URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면 컴포넌트를 렌더링해주는 컴포넌트

function App() {

  // 로그인 상태를 보관하는 state 생성 (PrivateRouter페이지 : 마이페이지 접근 여부)
  // 초기값은 로그인이 되어있지 않은 상태 : false
  const [loginState, setLoginState] = useState(false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
        <Route path='/productQuery' element={<ProductDetailPage2/>}/>
        <Route path='/PrivateRouter' element={<PrivateRouter/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
