import React, {useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { textChagngeTodo } from '../redux/reducers/TodoSlice';

const TodoItem = ({todo}) => {

    // true:수정상태 | false:읽기상태
    const [edit, setEdit] = useState(false)

    // 사용자가 입력한 텍스트를 보관하는 state
    // 초기값 : 기존 등록한 내용 >> todo.text (넘겨받은 todo안의 text 내용이 반영되도록)
    const [newText, setNewText] = useState(todo.text)

    const dispatch = useDispatch()

    const handleEdit = ()=>{
        setEdit(true)  // 버튼 누르면 수정 상태로 바뀌도록
    }

    const handleSubmit = ()=>{
        // store 내의 todoList 아이템 내용을 변경하기 위해서
        // 구분할 수 있는 id와, 변경내용인 text를 객체형태로 전달
        dispatch(textChagngeTodo({id:todo.id, text:newText}))
        setEdit(false)
    }

  return (
    <li className=''todo-item>   {/* TodoList 컴포넌트에서 ul 태그안에 TodoItem을 넣었으니까 여기선 li 여야해 */}
        {/* <FaCheckCircle className='todo-item-checkbox'/> */}
        <FaRegCircle className='todo-item-checkbox' style={{color:'lightgray'}} />

        {edit ?
        <div>
            <input
                type='text'
                className='todo-item-edit-input'
                value={newText}
                onChange={(e)=>setNewText(e.target.value)}
            />  
            {/* 값을 바로 보여주는 기능 : value (radio box 만들때 사용했었음) >> 수정하기 전에 기존의 값을 보여주려고 value 사용함*/}
            {/* 값이 바로 바뀌도록 >> onChange */}
            <button className='todo-item-edit-btn' onClick={handleSubmit}>👍🏻</button>
        </div>
        :
        <div>
            <span className='todo-item-content'>{todo.text}</span>
            <button className='todo-item-edit-btn' onClick={handleEdit}>✍🏻</button>
        </div>
        }
        <button className='todo-item-delete-btn'>✂</button>
    </li>
  )
}

export default TodoItem