import React, { Component } from 'react'
// import { useState } from 'react';
// 클래스컴포넌트에서 사용했던 기능들을 함수형 컴포넌트에서도 사용하고자 나온게 React Hook
//  >> 당연히 클래스컴포넌트에서 useState 같은 React Hook 안쓰지

export class MyClass extends Component {

    // LifeCycle 함수
    // : 컴포넌트 생명주기에 맞춰서 실행되어지는 함수들

    // 1. componentDidMount :  컴포넌트가 맨처음 랜더링 될 때 실행하겠습니다
    // 화면으로 처음 보여졌을 때
    componentDidMount(){
        console.log("Mount 단계");
    }

    // 2. componentDidUpdate : 컴포넌트가 재랜더링 될 때 실행하겠습니다
    // state 값이 변경되거나, props가 변경 될 때 (사용자에게 보여지는 값이 변경됐을 때)
    componentDidUpdate(){
        console.log("Update 단계");
        // 출력 숫자가 10에 도달하면 >> "목표숫자에 도달했습니다"
        if(this.state.num == 10){
            alert('목표숫자 도달')
        } // 컴포넌트 함수에서와는 다르게, 이제 그 순간에 맞는 lifestyle 로직 실행 가능!!! (클로저함수x)
    }

    // class 컴포넌트에서 state 변수 생성
    // state라는 이름으로 객체 만들면 >> state 변수로 인식
    state ={
        num:0
    }

  render() {
    return (
        <div>
          <h1>{this.state.num}</h1>
          {/* 현재 클래스(this= 지금 클래스 컴포넌트)에 있는 state 함수를 가져와서 그 안의 객체를 보여주기  */}
          {/* class 컴포넌트에서 setState 사용법 */}
          <button onClick={()=>this.setState({num : this.state.num+1})}>+1</button>
          {/* 형식을 그대로 사용하기 위해, 중괄호를 통해 객체형식으로 담아주기 */}
        </div>
    )
  }
}

export default MyClass