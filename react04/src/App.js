import logo from './logo.svg';
import './App.css';
import Left01 from './component/Left01'
import Right01 from './component/Right01'
import SubItem01 from './component/SubItem01'
import MyColor from './component/MyColor'
import Result from './component/Result'
import { createContext, useState } from 'react';

// num+1을 사용하면 단방향으로만 데이터를 전달해야해서, Context라는 공유공간 만들어보자!
// 공유공간(contex t) 생성 >> 다른곳에서도 사용할 수 있도록 export
export const AppContext = createContext();

// 공유공간 하나 더 만들어주자
export const TextContext = createContext();

export const ColorContext = createContext();

function App() {
  const [num, setNum] = useState(0)
  // 문제
  // num, setNum을 Left01과 Right01로 전달
  // >> Right01의 버튼을 클릭했을 때 Left01의 숫자를 바꾸자

  // contextAPI 실습 문제
  const [ text , setText ] = useState("");
  
  // contextAPI 실습 문제2
  const [ color , setColor ] = useState('black');


  return (
    // <div id = 'container'> id값에 스타일태그 적용됨(색상문제풀때는 사용하지말기)
    <div>
      <h1>Root</h1>
      {/* <div id='grid'> id값에 스타일태그 적용됨(색상문제풀때는 사용하지말기)*/}
      <div>
        {/*
         Provider : 하위context들의 공유공간 허용
              >> 허용된 컴포넌트의 자식 컴포넌트까지 전부 허용 가능함

          value : 공유공간에서 공유하며 사용할 공유값 지정
              >> (left1,2,3 거칠필요 없이 모두 바로 num 값을 사용할 수 있음)
          value에 Num 뿐만 아니라, setNum 값도 사용하고 싶을 때
              >> 여러개의 값 가져올 땐, 배열과 객체 이용
         */}
        {/* <AppContext.Provider value={num}> */}
        {/* <AppContext.Provider value={{state:num, setState:setNum}}>
          <Left01></Left01>
          <Right01></Right01>
        </AppContext.Provider> */}
          
        {/* <h1> Context API 실습</h1>
        <h1> 다른 화면에서 입력한 내용 <br></br> {text}</h1>
        <TextContext.Provider value={{state:text, setState:setText}}> */}
          {/* TextContext라는 공유공간에 "value:"으로 공유값 지정해주기 */}
        {/* <SubItem01></SubItem01>
        </TextContext.Provider> */}

      <h1> Context API 실습 2 </h1>
      <ColorContext.Provider value={{state:color, setState:setColor}}>
        <MyColor></MyColor>
        <hr></hr>
        <Result></Result>
      </ColorContext.Provider>
      </div>
    </div>
  );
}

export default App;
