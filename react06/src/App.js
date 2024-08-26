import logo from './logo.svg';
import './App.css';

// Routes : 요청 URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면 컴포넌트를 렌더링해주는 컴포넌트

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={}/>
        <Route path='/about' element={}/>
        <Route path='/product' element={}/>
        {/* 각각의 페이지의 컴포넌트 관리 >> 페이지 3개면 Route 3개 */}
      </Routes>
    </div>
  );
}

export default App;
