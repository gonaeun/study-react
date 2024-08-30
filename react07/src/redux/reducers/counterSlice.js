import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'counter', // conterSlice 여러개일 수 있으니까 이름 설정
    initialState: { // 내가 관리할 state
        count:0     // 초기값 0
    }, 
    reducers: {    // state에 대한 변경사항들 함수(reducer)
        // 컴포넌트가 아니라 슬라이스에 함수를 정의해서 counter.jsx파일에선 useDispatch()로 여기꺼 값 가져다가 쓰면 됨~
        increment : (state)=>{   // 매개변수 자리에 state를 적으면 내부의 값 (count=0)에 접근 가능
            console.log('증가', state.count);
            state.count +=1
        },
        decrement : (state)=>{
            console.log('감소');
            state.count -=1
        }
    }
})

console.log(counterSlice);

// 컴포넌트에서 reducer 내에 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions // increment, decrement함수

// store에서(store.js) counterSlice의 reducer(함수)를 접근할 수 있도록 내보내기
export default counterSlice.reducer