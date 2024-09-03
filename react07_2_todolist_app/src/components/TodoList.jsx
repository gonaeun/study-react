import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title}) => {
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