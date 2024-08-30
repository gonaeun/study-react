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
        },
        incrementByAmount : (state, action) =>{  // action : 디스패치로 넘겨받을 때 값을 가져오는거
            // action : type, payload를 묶은 객체형태
            // type : 명령에 대한 구분값
            // payload : 명령에 대한 값을 저장하는 속성 (0이라고하면 0씩, 2라고하면 2씩 증가됨)
            //  ex) incrementByAmount({num:2}) >> {type:'counter/incrementByAmount', payload:{num:2}} 로 값이 넘어옴
            console.log(action);
            console.log(action.payload.num);
            state.count += action.payload.num
            
        }
    }
})

console.log(counterSlice);

// 컴포넌트에서 reducer 내에 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions // increment, decrement함수

// store에서(store.js) counterSlice의 reducer(함수)를 접근할 수 있도록 내보내기
export default counterSlice.reducer