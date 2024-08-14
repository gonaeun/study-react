import logo from './logo.svg';
import './App.css';
import Left01 from './component/Left01'
import Right01 from './component/Right01'
import { createContext, useState } from 'react';

function App() {
  const [num, setNum] = useState(0)
  // 문제
  // num, setNum을 Left01과 Right01로 전달
  // >> Right01의 버튼을 클릭했을 때 Left01의 숫자를 바꾸자
  return (
    <div id = 'container'>
      <h1>Root</h1>
      <div id='grid'>

          <Left01 data={num}></Left01>
          <Right01 data={setNum} data2={num}></Right01>

      </div>
    </div>
  );
}

export default App;
