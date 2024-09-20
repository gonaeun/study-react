import React from 'react'
import { useRef } from 'react';

const MyRef02 = () => {

    // 배열을 사용해서 이미지 데이터 다루기

    const imgArray = ['/image1.png','/image2.png','/image3.png','/image4.png']
    const imgRef = useRef();
    let pos =0;  // 현재 이미지 위치를 일반 변수로 지정!!!!☆★

    const NextImage =()=>{
        // e.target = 버튼태그
        // 이미지를 바꾸고 싶으면, 이벤트를 받아오는게 아니니까 매개변수에 e넣지X
        pos++
        if(pos>imgArray.length-1){
            pos=0
        }
        imgRef.current.src='./img'+imgArray[pos];
    }
    const BeforeImage =()=>{
        pos--
        if(pos<0){
            pos = imgArray.length-1
        }
        imgRef.current.src='./img'+imgArray[pos];
    }

  return (
    <div>
        <img src='img/image1.png' ref={imgRef}></img>
        <br></br>

        <button onClick={BeforeImage}>Before</button>
        <button onClick={NextImage}>Next</button>
    </div>
  )
}

export default MyRef02