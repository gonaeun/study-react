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
            state.todoList.map((item)=>({
                ...item,
                complete: item.id === action.payload.id ? !item.complete : item.complete
            }))
        },
        textChagngeTodo: (state,action)=>{
            state.todoList = state.todoList.map((item)=>({
                ...item,  //{...item} 의미!! => {id:ooo, text:ooo. complete:}로 풀어서 해석하겠다는 의미
                text:item.id === action.payload.id ? action.payload.text : item.text
            }))
        },
        deleteTodo: ()=>{}
    }
})

export const {addTodo, checkChangeTodo, textChagngeTodo, deleteTodo} = TodoSlice.actions  // 이제 이 함수들을 어디서든 쓸 수 있어!
export default TodoSlice.reducer  // store에 함수들 넘겨주기