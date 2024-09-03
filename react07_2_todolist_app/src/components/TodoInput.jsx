import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {

    const inputRef = useRef();   // 입력한 값 가져오려면
    const dispatch = useDispatch();  // store에 추가요청 보내려면
    
    const handleAddBtn = ()=>{
        dispatch(addTodo(
            {id:uuidv4(), text:inputRef.current.value, complete:false}
        ))
    }
    

  return (
    <div className='todo-inputbox'>
        <input type='text' className='todo-inputbox-input' placeholder='모 할거야?' ref={inputRef}/>
        <input type='button' onClick={handleAddBtn} className='todo-inputbox-add-btn' value='등록'/>
    </div>
  )
}

export default TodoInput