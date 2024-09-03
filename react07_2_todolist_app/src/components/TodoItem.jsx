import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const TodoItem = () => {
  return (
    <li className=''todo-item>   {/* TodoList 컴포넌트에서 ul 태그안에 TodoItem을 넣었으니까 여기선 li 여야해 */}
        <FaCheckCircle className='todo-item-checkbox'/>TodoListApp 복습하기
        <button className='todo-item-edit-btn'>✍🏻</button>
        <button className='todo-item-delete-btn'>✂</button>
    </li>
  )
}

export default TodoItem