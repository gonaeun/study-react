import React from 'react'
import { useRef , useState, useEffect  } from 'react';

const MyToDo=()=>{

    const inputRef = useRef();
    const [todo, setToDo] = useState([]); // 초기값 배열

    const getData =()=>{
        // setToDo(inputRef.current.value)
        // input태그에 적은 값을 가져와서 ul태그 안으로 출력!
        //e.target 사용하면 버튼태그값 가져오니까 그거 말고
        // >> input태그 값을 가져오기 위해서 ref 사용
        // 바뀌어진 값으로 출력해주려면 >> useState 필요

        // 기존에 있던 배열에 input태그에서 입력한 내용을 추가!
        // setToDo(todo.push(inputRef.current.value)) 라고 쓰고싶은데
        // push는 기존의 state배열을 바꾸는 기능이기 때문에, push를 사용해서 보여지는 state 배열 바꿀 수 x (pop도 마찬가지)

        // concat : 기존 배열에 데이터를 !추가!한 모습으로 !새로운 배열!을 생성하는 기능
        //       >> 기존의 배열은 바뀌지 않음
        //       >> react에서 push 대신 사용!
        setToDo(todo.concat(inputRef.current.value))

        // 공부하기운동하기저금하기 연달아서 보여짐
        // 문제1. 입력한 내용이 각각 다음줄에 출력되도록 (map함수 사용)
        // 문제2. 삭제버튼 클릭했을 때 해당 항목만 삭제 (filter함수 사용)

        // 문제3. 입력 할 수 있는 최대 갯수 설정 >> 배열의 길이를 통해 갯수 확인
        // if(todo.length == 5){
        //   alert("최대 목표 갯수에 도달했습니다")
        //   // setToDo가 클로저 함수이기 때문에, 6개 등록할 때부터 알림창 뜸 >>useEffect 사용!
        // }
      }

      // componentDidUpdatd(){
      //   if(todo.length==5){
      //     alert("최대 갯수 도달")
      //   }
      // } 
        // 실행 안됨! 클래스 함수에서만 가능 >> 함수형 컴포넌트에서는 useEffect 사용하자

        // state 변수에 의해서 실행되어지는 함수 (useState랑 useEffect는 짝꿍처럼 붙어다님)
        // state 변수에 지정되는 함수를 만들겠다

        // useEffect : 함수형 컴포넌트에서 LifeCycle을 기준으로 실행시키는 함수 (mount단계와 update 단계)
        // useEffect : componenetDidMount + componentDidUpdate
        useEffect(()=>{
          console.log("useEffect");
          
          if(todo.length == 5){
            alert("최대 목표 갯수에 도달했습니다")   // 5개 등록할 때 알림창 뜸
          }
        })
        // setToDo 실행할 때 이 함수부터 실행하겠습니다.



    const deleteToDo =(delIndex)=>{
      // 배열에 있는 요소 중, 사용자가 선택한 요소 삭제
      // 1. 어떻게 삭제할 수 있을까
      // 2. 사용자가 어떤 요소를 선택했는지 어떻게 알 수 있을까
      // >> 2. 고유 값인 index를 key값으로 주기

      console.log(delIndex)
      // >>1. 넘겨받은 인덱스(delIndex)를 제외한 나머지 요소들로 새로운 배열 생성할거야
      setToDo(todo.filter((data, index) => index !==delIndex))
      // setToDo(todo.filter((_, index) => index !==delIndex))
      // data 사용 안하니까 지워주고 싶으면 >> data 자리에 _, 라고 적어주면 됨
      // 첫번째 매개변수로 "배열의 요소"를, 두번째 매개변수로 "배열의 인덱스"를 받기 때문에, 자리를 비워두면 안됨!

    }

  return (
    <div>
        <h1>2024 올해 꼭 할 일</h1>
        <input ref={inputRef}></input>
        <button onClick={getData}>계획 추가</button>
        <hr></hr>
        <h1>To Do List</h1>
        <ul>
          {/* 목록 출력 */}
          {/* <li>{todo}</li> */}

          {/* todo 배열이 가지고 있는 각각의 항목 가져오기 */}
          {/* {todo.map((data)=><li>{data}</li>)} */}

          {/* 삭제버튼 클릭 >> 해당 항목만 삭제 */}
          {todo.map((data, index)=>
          <li>
            {data}
            <button onClick={()=>deleteToDo(index)}>삭제</button>
          </li>)}
          {/* 
            <button onClick={deleteToDo}> 라고만 입력하면, 버튼을 클릭하지 않아도 실행되어버림 (콘솔창으로 확인)
            >> 화살표 함수를 통해, 버튼을 클릭하면 화살표함수로 deleteToDo 함수를 호출하도록 설정
            >> index를 매개변수로 받을거고, 이는 map함수 안에 있는 현재 항목의 인덱스 의미함
            >> 삭제 버튼을 눌렀을 때, 몇번째 항목을 눌렀는지 정보를 가져와서,
              filer 함수로 그 항목을 제외한 나머지 항목들로 새로운 배열을 만들어내기 위함
          */}

        </ul>
    </div>
  )
}

export default MyToDo