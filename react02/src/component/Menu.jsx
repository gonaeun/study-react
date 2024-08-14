
// 컴포넌트의 이름 시작은 반드시 대문자로 작성! (Menu.jsx)
// >>  일반 태그와 구분하기 위함

// 컴포넌트 : 사용자 정의 태그
// 만드는 방법 >> JSX 문법을 사용해서 생성 가능
// 종류 (만드는 방법에 따라) : 클래스 컴포넌트, 함수 컴포넌트 
// rafce :  함수형 컴포넌트 생성 명령어

// 컴포넌트 만들고 >> export >> index.js에서 import, 화면에 적어주었는지 확인

import React from 'react'

const Menu = (props) => {
  console.log(props);
  // index.js의 속성값에 적은 데이터들은 menu.js에 객체 형태로 전달된다 (key:value = menu : "아메리카노")
  
  return (
    <div>
        <p>메뉴명 : {props.menu}</p>
        <p>금액 : {props.price}원</p>
    </div>
  )
}

export default Menu