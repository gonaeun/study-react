import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const TodoItem = ({todo}) => {
  return (
    <li className=''todo-item>   {/* TodoList 컴포넌트에서 ul 태그안에 TodoItem을 넣었으니까 여기선 li 여야해 */}
        <FaCheckCircle className='todo-item-checkbox'/>
        <span className='todo-item-content'>{todo.text}</span>
        <button className='todo-item-edit-btn'>✍🏻</button>
        <button className='todo-item-delete-btn'>✂</button>
    </li>
  )
}

export default TodoItem