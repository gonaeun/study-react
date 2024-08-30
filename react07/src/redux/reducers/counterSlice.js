import { createSlice } from "@reduxjs/toolkit";



export const conterSlice = createSlice({
    name : '', // conterSlice 여러개일 수 있으니까 이름 설정
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