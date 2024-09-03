import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div>
        <h1>To Do List</h1>
        <TodoInput/>

        {/* 해야 할 일 */}
        <TodoList title={"해야할 일"}/>

        {/* 완료된 일 */}
        <TodoList title={"완료된 일"}/>
    </div>
  )
}

export default TodoHome