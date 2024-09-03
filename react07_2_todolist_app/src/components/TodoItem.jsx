import React, {useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const TodoItem = ({todo}) => {

    // true:수정상태 | false:읽기상태
    const [edit, setEdit] = useState(false)

    const handleEdit = ()=>{
        setEdit(true)  // 버튼 누르면 수정 상태로 바뀌도록
    }

  return (
    <li className=''todo-item>   {/* TodoList 컴포넌트에서 ul 태그안에 TodoItem을 넣었으니까 여기선 li 여야해 */}
        {/* <FaCheckCircle className='todo-item-checkbox'/> */}
        <FaRegCircle className='todo-item-checkbox' style={{color:'lightgray'}} />

        {edit ?
        <input type='text'/>
        :
        <span className='todo-item-content'>{todo.text}</span>
        }
        <button className='todo-item-edit-btn' onClick={handleEdit}>✍🏻</button>
        <button className='todo-item-delete-btn'>✂</button>
    </li>
  )
}

export default TodoItem