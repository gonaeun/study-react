import logo from './logo.svg';
import './App.css';

// JSX : JavaScript와 HTML을 한번에 사용할 수 있는 문법
//      >> 사용자 정의태그 (컴포넌트)를 만드는 방법

// 규칙1. 출력하고자 하는 태그들은 반드시 하나의 부모 요소로 묶여 있어야 함 ex)div요소
// 규칙2. 표현식 사용 가능 (중괄호 >> JavaScript 변수를 html에서 출력 가능)  _(JS로직은 return 위에 만들어주기)
// 규칙3. 모든 태그는 반드시 여는 태그와 닫는 태그가 존재
// 규칙4. 선택자 class >> className 사용!

function App() {
  
  let name = "고나은";
  // html 코드 안에 중괄호를 통해 name 호출 >> html코드 안에서 js코드를 사용하겠다는 의미
  // return 안의 내용은 사용자에게 보여지는 내용이므로, 변수는 return 밖에 적어줘야 함
  return (
    
    <div>
      <h1 classname="test">MyReact02</h1>
      <h1>MyReact02</h1>


      <p>{name}님 환영합니다</p>

      <br></br>
      <input></input>
      <img></img>
      {/* 이런 홑태그들도 jsx에서는 무조건 닫는태그까지 같이 사용해주어야 함 */}

    </div>
  );
}

export default App;
