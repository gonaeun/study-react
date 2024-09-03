import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = ({title}) => {

    const TodoList = useSelector(state=>state.todo) //state는 store의 reducer의미하므로, store의 todo 함수 불러오기

    console.log(TodoList); // 입력한 값이 콘솔창으로 보여짐
    
  return (
    <div className='todo-list'>
        <p className='todo-list-tit'>
            [{title}]
        </p>
        <ul className='todo-llist-ul'>
           <TodoItem/>
        </ul>
    </div>
  )
}

export default TodoList