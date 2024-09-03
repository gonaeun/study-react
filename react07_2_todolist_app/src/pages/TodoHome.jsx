import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>To Do List</h1>
        <TodoInput/>

        <TodoList title={"해야할 일"}/>

        <TodoList title={"완료된 일"}/>
    </div>
  )
}

export default TodoHome