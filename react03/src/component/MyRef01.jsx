import React from 'react'
import { useState, useRef } from 'react'
// useRef : 컴포넌트에서 특정 태그를 선택할 수 있는 기능

const MyRef01 = () => {

    const inputRef = useRef();
    // (useRef사용순서1) 태그를 지정할 수 있는 inputRef라는 변수 생성

    const [inputText, setInputText] = useState('');

    const chInput=(e)=>{
        // e : onChange
        // e.target(이벤트를 발생시킨 주체(태그)) : input태그
        
        // setInputText(e.target.value)  // 문제1에 적용되는 코드

        // input태그에 myText라는 id값을 주고
        // setInputText(document.getElementById('myText').value) 라고 입력하여 input태그에 입력된 값을 가져오면
        // js방식으로는 가능하나, React에선 비효율적인 방법!
        // 왜냐? document는 HTML을 의미 >> 컴포넌트마다 index.html 파일을 들렸다오니까 비효율적
        // >> useRef 등장! : 컴포넌트 내에서 특정 태그 선택

        setInputText(inputRef.current.value)   // 문제2에 적용되는 코드 (useRef사용순서3)
        // inputRef.current : 현재 가리키는 태그 객체  
        //                    태그를 바로 사용할 수 있게끔 객체로 가져오는 작업
        // (inputRef가 컴포넌트 내부의 돔으로 접근해서 객체로 가져옴 >> current까지 적어주어야 태그 주소를 타고 들어가 값을 꺼내옴)
    }
     
  return (
    <div>
        {/*
        문제1. 입력한 값이 그대로 아래 출력되도록 할 때
        <input onChange={chInput}></input>
        <h1>{inputText}</h1>
        */}

        {/* 문제2. 출력 버튼을 누를 때, 입력한 값이 출력되도록 */}
        {/* (useRef사용순서2 : 변수와 태그 연결) ref={inputRef} : 해당 태그와 inputRef 라는 변수를 대응하겠다*/}
        <input ref={inputRef}></input>   
        <button onClick={chInput}>출력</button>
        <h1>{inputText}</h1>
        {/* ref통해서 input태그 지칭하여 함수에 인풋 값 가져오고
          >> 버튼 클릭하면 함수 실행하여
          >> 값 보여주기(setInputText는 값을 바꾸는 함수이고, 바뀐 값은 InputText에 저장됨)  */}
    </div>
  )
}

export default MyRef01