+import React from 'react'
import { useContext, useRef} from 'react'
import { useState } from 'react'
import { TextContext } from '../App'

const SubItem03 = () => {
    const dataText = useContext(TextContext);
    // app.js의 <TextContext.Provider value={{state:text, setState:setText}}> value값을 dataText로 받음. provider 덕분.

    const inputRef = useRef();

    // const handleInputChange = (e)=>{ 
    //     //현재 input태그에 적은 값을 임시로 저장하는 기능
    //     // 이 함수가 언제 시행되느냐?  입력 할때마다 onChange될때마다
    //     // 값을 보여줄 수 있게끔 출력하려고 setText값 바꿔줘야함
    //     // chText에서 바꿔주고, chText는 입력버튼 onClick할때마다 실행됨
    //     // data에 setState가 setText라고 명시되어 있으니까 data.setState를 통해 setText를 실행시킬 수 있음
    //     // 인풋밸류 값으로 setState값이 바뀌니까 최종적으로는 그 값을 출력됨
    //     setInputValue(e.target.value)
    // }
    // handleInputChange 쓰거나, useRef 쓰거나!


    // const chText=()=>{
    //   // input태그에 적은 내용으로 textState 값을 바꾸자
    //     dataText.setState(inputValue)
    // }   // handleInputChange 쓸 때 코드

    const chText=()=>{
      // input태그에 적은 내용으로 textState 값을 바꾸자
      dataText.setState(inputRef.current.value)
    }    // inputRef 쓸 때 코드

  return (
    <div>
        <input ref={inputRef}></input>
        {/* <input onChange={handleInputChange}></input> */}
        <button onClick={chText}>출력</button>
    </div>
  )
}

export default SubItem03