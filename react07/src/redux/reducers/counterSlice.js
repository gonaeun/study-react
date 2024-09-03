import { createSlice } from "@reduxjs/toolkit";
// counterSlice() :  Redux Toolkit에서 사용되는 함수.
//                  리덕스의 슬라이스를 쉽게 생성할 수 있게 해줌
// 슬라이스 : 상태(state)를 여러 부분으로 나누어 관리하는 것

// [필수요소]
// 1. name : reducer을 구분하기 위한 이름 정의(문자열)
// 2. initialState : 초기화 할 state 정의 (객체형태)
// 3. reducers : state변경요청을 수행하는 action 기능 정의 (객체형태)


const counterSlice = createSlice({
    name : 'counter', // conterSlice 여러개일 수 있으니까 slice의 이름 설정
    initialState: { // 내가 관리할 state (slice의 초기 상태 정의)
        count:0     // 초기상태 0
    }, 
    reducers: {    // state에 대한 변경사항들 함수(reducer)
        // 컴포넌트가 아니라 슬라이스에 함수를 정의해서 counter.jsx파일에선 useDispatch()로 여기꺼 값 가져다가 쓰면 됨~
        increment : (state)=>{   // 매개변수 state >> 내부의 값 (count=0)에 접근 가능  // state는 counterSlice의 현재 상태 의미하기 때문           
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
        },
        incrementByAmount2 : (state, action) =>{
            console.log(action);
            console.log(action.payload.num);
            state.count += action.payload.num
        },
        incrementByAmount3 : (state, action) =>{ 
            console.log(action);
            console.log(action.payload.num);
            state.count -= action.payload.num
        }
    }
})

console.log(counterSlice);

// 컴포넌트에서 reducer 내에 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions // CounterActions.increment, CounterActions.decrement, CounterActions.incrementByAmount 같은 액션 생성자 함수들

// store에서(store.js) counterSlice의 reducer(함수)를 접근할 수 있도록 내보내기
export default counterSlice.reducer  // reducers 객체 안에 정의된 함수들(increment, decrement, incrementByAmount 등)과 같이 실제로 변경하는 함수들