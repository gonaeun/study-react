import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import Menu from './component/Menu';
import Myteam from './component/Myteam';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* 
     props(프롭스) : 컴포넌트로 데이터를 전달하는 방법
                  >> 속성값으로 데이터를 전달
                    (Menu라는 사용자정의태그에 내가 원하는 속성값을(menu, price...) 임의로 만들어줘도 상관없음)
    */}
    {/* <Menu menu="아메리카노" price="3000"></Menu>
    <Menu menu="카페라떼" price="4500"></Menu> */}
    
      <Myteam team="교육운영부" teacher="선영표"></Myteam>
      <Myteam team="전략기획팀" teacher="강예진"></Myteam>
      <Myteam team="홍보팀" teacher="임보미"></Myteam>
      <Myteam team="기획팀" teacher="최영화"></Myteam>
      <Myteam team="기획팀" teacher="최영화"></Myteam>
      {/* 신생부서 >> 값이 없을때도 보여주기 */}
      <Myteam team="연구개발팀"></Myteam>


  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
