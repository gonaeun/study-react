import React from 'react'
import { useRef, useState } from 'react';

const MyFinal = ()=>{

    // 문제
    // 1. start 버튼 클릭했을 때
    //    컴퓨터 주사위와 사용자 주사위를 랜덤하게 다른 주사위로 바꾸기
    // 2. 주사위 눈의 크기를 비교해서
    //    ComScore 또는 UserScore 값을 1 증가시켜주기
    // 3. ComScore 또는 UserScore 값이 먼저 10에 도달하게 되는 순간
    //    결과 출력 (Com WIN 또는 User WIN)

    const imgArray = ['/dice1.png','/dice2.png','/dice3.png',
                      '/dice4.png','/dice5.png','/dice6.png'] // 이미지 배열로 가져오기

    // useRef 변수는 재렌더링에 영향을 받지 않는다!
    const comImgRef = useRef();
    const userImgRef = useRef(); // 각각 이미지 태그 만들어서 return에도 적어서 연결시켜주기

    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [resultText, setResultText] = useState('');

    const startBtn =()=>{
        // 버튼 실행하면 이미지 랜덤으로 바뀌도록
        // pos값을 랜덤으로
        let pos1=parseInt(Math.random()*6);  // 배열에 담아서 0~5까지로 계산해야하니까 +1 하지마
        let pos2=parseInt(Math.random()*6);  // 별도의 랜덤값을 지정해주어야 com, user의 랜덤값이 각각 바뀜
        comImgRef.current.src='./img'+imgArray[pos1];
        userImgRef.current.src='./img'+imgArray[pos2];

        // 배열 지정 안하고, 파일명의 숫자부분을 랜덤으로 바꾸어주는 것도 가능.
        // 대신 1~6까지 랜덤하게 바뀌도록 위쪽의 랜덤함수에 +1 붙여주기
        // comImgRef.current.src='./img/dice'+pos1+'.png'
        // userImgRef.current.src='./img/dice'+pos2+'.png'

        if (pos1 > pos2){   // 랜덤하게 바뀌는 인덱스값에 따라 이미지가 바뀌니까, 그 랜덤숫자 값을 비교하자
            setComScore(comScore +1)
                if(comScore == 9){   // 클로저 함수인 것 고려하여 9라고 입력했음
                    setResultText("COM WIN") // 방법1 - if문 통해서 결과문 출력
                }
        } else if (pos1 < pos2){
            setUserScore(userScore +1);
                if(userScore == 9){
                    setResultText("USER WIN")
                };
        } 
    }

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startBtn}>Start</button>

      <div className="dice">
        <img src={'img/dice1.png'} ref={comImgRef}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={'img/dice1.png'} ref={userImgRef}></img>
        <h1>User Score : {userScore}</h1>
      </div>
      {/* 또다른 출력 방법 - 삼항연산자 2줄 통해서 결과문 출력 */}
      {/* {comScore == 10 ? <h1>결과  COM WIN</h1>:""}  
      {userScore == 10 ? <h1>결과  User WIN</h1>:""} */} 
       <h1>결과 : {resultText}</h1>
    </div>
  )
}



export default MyFinal