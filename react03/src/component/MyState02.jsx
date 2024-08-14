import React from 'react'
import { useState } from 'react';

const MyState02 = () => {
    // 1. 버튼 클릭시, 어떤 버튼을 클릭했는지 숫자 출력
    // 2. 버튼 클릭시, 1~3 랜덤 숫자 생성 >> 랜덤 숫자 출력
    // 3. 두 숫자의 일치여부에 따라, "정답" 또는 "땡" 출력

    // let inputNum = 0;
    // function click1(){
    //     inputNum = 1
    //     console.log(inputNum); // 콘솔로그에는 1이 보이는데, 화면에서는 안보임 >> useState 사용하자
    // }

    const [inputNum, setinputNum] = useState(0);
    const [randomNum, setrandomNum] = useState(0);

    const click1 =()=>{
        setinputNum(1);
        // 1~3 사이의 랜덤수 생성
        setrandomNum(parseInt(Math.random()*3)+1);  // 1,2,3 출력
    }
    const click2 =()=>{
        setinputNum(2);
        setrandomNum(parseInt(Math.random()*3)+1);
    }
    const click3 =()=>{
        setinputNum(3);
        setrandomNum(parseInt(Math.random()*3)+1);
    }

    // 1,2,3 버튼 기능 한번에
    const chNum =(e)=>{
        // e(이벤트 객체) : 이벤트 정보를 가지고 있음
        // 어떤 이벤트가 발생했는지 >> 클릭, 더블클릭, 호버 등.. 여기선 클릭 밖에 쓸거 없어
        // 누가 발생시켰는지 >> e.target으로 확인
        // e.target : 이벤트를 발생시킨 태그
        // document.getElementById().innerText >> 를 통해서 텍스트를 가져왔듯이..
        
        setinputNum(e.target.innerText)
        setrandomNum(parseInt(Math.random()*3)+1)
    }
    
  return (
    <div>
        <div>
            {/* <button onClick={click1}>1</button>
            <button onClick={click2}>2</button>
            <button onClick={click3}>3</button> */}
            <button onClick={chNum}>1</button>
            <button onClick={chNum}>2</button>
            <button onClick={chNum}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {inputNum}
            <br />
            랜덤한 숫자 : {randomNum}
            <br />
            결과 : { inputNum === randomNum ? "정답!" : "땡!" }
            <br />
        </div>  
    </div>
  )
}

export default MyState02