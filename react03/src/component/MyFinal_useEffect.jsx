import React from 'react'
import { useRef, useState, useEffect } from 'react';

const MyFinal_useEffect = ()=>{

    const imgArray = ['/dice1.png','/dice2.png','/dice3.png',
                      '/dice4.png','/dice5.png','/dice6.png'] // 이미지 배열로 가져오기

    const comImgRef = useRef();
    const userImgRef = useRef(); 

    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [resultText, setResultText] = useState('');

    const [num, setNum] = useState(0);  // 클릭수 확인하기 위함

    const startBtn =()=>{
        // 버튼 실행하면 이미지 랜덤으로 바뀌도록
        // pos값을 랜덤으로
        let pos1=parseInt(Math.random()*6);  // 배열에 담아서 0~5까지로 계산해야하니까 +1 하지마
        let pos2=parseInt(Math.random()*6);  // 별도의 랜덤값을 지정해주어야 com, user의 랜덤값이 각각 바뀜
        comImgRef.current.src='./img'+imgArray[pos1];
        userImgRef.current.src='./img'+imgArray[pos2];

        if (pos1 > pos2){   // 랜덤하게 바뀌는 인덱스값에 따라 이미지가 바뀌니까, 그 랜덤숫자 값을 비교하자
            setComScore(comScore +1)
        } else if (pos1 < pos2){
            setUserScore(userScore +1);
        } 

        setNum(num+1)
        // setNum도 setState라서, setNum이 바뀔 때도 useEffect 실행되는 것 확인함
        //  >> useEffect에 dependency Array 설정해주자
    }
        // 방법1 - 클로저 함수 고려 >> if문 통해서 결과문 출력
        // 방법2 - 클로저 함수 특성이 실행되지 못하도록 >> useEffect 사용
        // useEffect는 실행순서 바꿔주기 위함. useEffect는 setState 값이 바뀔때마다 (맨처음+재렌더링 될때) 실행 됨
        useEffect(()=>{
            if(comScore!=0 || userScore!=0){ 
            // 이 한줄을 적어주면, componentDidUpdate처럼 사용 가능
            // 맨처음에 두 값이 0일때 왜 비교해! 컴퓨터의 연산 부담을 덜어주자!
            // 두 변수가 다 0이 아닐 때! 두 변수에 값이 들어올 때 부터 실행해!
                console.log("useEffect 실행");
                
                if(comScore == 10){   
                    setResultText("COM WIN") 
                } else if(userScore == 10){
                    setResultText("USER WIN")
                }
            } 
            // setComScore, setUserScore 값이 바뀔때마다 비교할 수 있음!
            // setState 값이 먼저 실행되어야 하기 때문에, setState값이 위에 적혀야하고, 이건 startBtn 버튼 바깥쪽에 적어줘야함
            // 이게 useEffect가 아니라면, startBtn 밑에 적혀있어도 startBtn 안에 있는 setState 값이 더 늦게 실행됨 (클로저함수)
        } , [comScore, userScore])
        // [] >> dependency Array (의존 배열)
        // [comScore, userScore] : comScore, userScore라는 두가지 state값이 바뀔 때만 useEffect를 실행시키자

        // [] 빈칸 : 의존하고 있는 state값이 없다 >> 재랜더링 될 때 useEffect 함수가 실행되지 x
        //          >> useEffect는 맨처음, 재렌더링 될때만 실행되므로, 맨 처음에만 실행됨 >> componentDidMount 역할!

        // []을 적지 않으면 : 모든 state값이 변할때마다 useEffect 함수가 실행됨


  return (
    <div>
      <h1>DICE GAME</h1>
      <p>클릭 수 : {num}</p>
      <button onClick={startBtn}>Start</button>

      <div className="dice">
        <img src={'img/dice1.png'} ref={comImgRef}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={'img/dice1.png'} ref={userImgRef}></img>
        <h1>User Score : {userScore}</h1>
      </div>
       <h1>결과 : {resultText}</h1>
    </div>
  )
}


export default MyFinal_useEffect