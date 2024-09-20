import React from 'react'

const MyMap01 = () => {
    const menu =['짬뽕', '짜장면', '냉면', '탕수육']
    // const menu2 =[<li>짬뽕</li>, <li>짜장면</li>, <li>냉면</li>,<li>탕수육</li>]   // map함수 이용 안 할 때, 출력방법1
    // 그치만 우리는 일반적으로 이런 태그 형식으로 배열을 저장하지 않음 >> map함수 쓰자!

    // **map , filter 함수 (배열에만 적용되는 함수)
    // map : 배열 안에 있는 요소들에 !규칙을 부여!해서 !새로운 배열!을 만든다
    // filter : 배열에 조건을 줘서 새로운 배열 생성
    // push, pop 은 기존의 배열이 바뀌지만, map, filter은 기존의 배열을 바꾸지 않고 새로운 배열을 만듦

  return (
    <div>
        <ul>
            {/*map함수 이용 안 할 때, 출력방법2
            <li>{menu[0]}</li>
            <li>{menu[1]}</li>
            <li>{menu[2]}</li>
            <li>{menu[3]}</li> */}

            {/* {menu.map((data)=><li>{data}</li>)} */}

            {menu.map((data, index)=><li key={index}> {data} </li>)}
            {/* map함수를 통해서 렌더링 할 때 권장사항 == 인덱스를 통해 key값 지정
                : 화살표 함수를 콜백함수로 사용
                >> 데이터가 넘어갈 때, 인덱스 값도 같이 넘어감
                >> 인덱스는 중복되지 않는 값 >> 인덱스 값에 따라 key값 지정됨
                >> 하나의 태그에만 따로 다른 값을 지정하고 싶을때, 인덱스 통해서 key 값 추가
             - 매개변수 data : 배열의 요소가 순차적으로 들어가서 요소별로 새로운 배열 출력
             - index : 배열의 인덱스 값이 순차적으로 들어옴 */}
            {/* 콜백함수 : 함수 안에서 다른 함수가 호출되어 실행 되어지는 함수 */}

            <hr></hr>
            {/*
             menu 배열 중 탕수육을 제외한 나머지만 출력
              {menu.filter((data)=> data!="탕수육")}
              >> ['짬뽕','짜장면','냉면']              
            */}
            {menu.filter((data)=> data!="탕수육")
            .map((data,index)=><li key={index}>{data}</li>)}
            {/* 데이터를 거르고 로운 배열을 만들어주었기 때문에, 또 map함수를 적용할 수 있는거임! */}
            {/* 
              menu : 4
              menu.map : 4
              menu.filter : 3
              >> map, filter 함수의 차이점 : filter 함수는 조건을 부여해주기 때문에 갯수가 바뀔 수도 있음
            */}


        </ul>
    </div>
  )
}

export default MyMap01