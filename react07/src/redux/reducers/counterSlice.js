import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'conter', // conterSlice 여러개일 수 있으니까 이름 설정
    initialState: { // 내가 관리할 state
        conut:0     // 초기값 0
    }, 
    reducers: {    // state에 대한 변경사항들 함수(reducer)
        increment : ()=>{
            console.log('증가');
        },
        decrement : ()=>{
            console.log('감소');
        }
    }
})

console.log(counterSlice);

// 컴포넌트에서 reducer 내에 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions // increment, decrement함수

// store에서(store.js) counterSlice의 reducer(함수)를 접근할 수 있도록 내보내기
export default counterSlice.reducer