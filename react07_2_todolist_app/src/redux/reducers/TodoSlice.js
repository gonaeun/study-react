import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name :'todo',
    initialState:{
        todoList:[]
    },
    reducers:{
        addTodo: (state, action)=>{
            state.todoList = state.todoList.concat(action.payload)
            // push와 다름. concat >> react에서 값이 바뀌엇다고 인식!
        },
        checkChangeTodo: (state,action)=>{
            state.todoList = state.todoList.map((item)=>({
                ...item,
                complete: item.id === action.payload.id ? !item.complete : item.complete
                // complete 속성 (true:할 일이 완료 | false:완료되지않음)
            }))
        },
        textChangeTodo: (state,action)=>{
            state.todoList = state.todoList.map((item)=>({
                ...item,  //{...item} 의미!! => {id:ooo, text:ooo. complete:}로 풀어서 해석하겠다는 의미
                text:item.id === action.payload.id ? action.payload.text : item.text
            }))
        },
        deleteTodo: (state,action)=>{
            state.todoList = state.todoList.filter((item)=> item.id !==action.payload.id)
        }
            // 실습. todoList 내 삭제할 id를 비교하여 삭제기능 구현하기(filter())
            // 매개변수 : todoList는 state에서 꺼내오고, id는 action(의 payload)에서 꺼내오면 됨!
            // filter함수 사용법 : new_array = array.filter((element)=>조건) 일때, 조건이 참이면 new_array에 포함되고, 거짓이면 포함되지 않음
    }
})

export const {addTodo, checkChangeTodo, textChangeTodo, deleteTodo} = TodoSlice.actions  // 이제 이 함수들을 어디서든 쓸 수 있어!
export default TodoSlice.reducer  // store에 함수들 넘겨주기