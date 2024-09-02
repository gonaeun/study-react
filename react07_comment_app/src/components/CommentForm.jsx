import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/reducers/CommentSlice';
import { v4 as uuidv4 } from 'uuid'

const CommentForm = () => {
    
    const inputRef_1 = useRef(); // 댓글내용
    const inputRef_2 = useRef(); // 작성자

    const dispatch = useDispatch

    const handleSubmit =()=>{
        console.log(inputRef_1.current.value, inputRef_2.current.value);
        dispatch(addComment({
            id:uuidv4(),
             writer:inputRef_2.current.value,
            content:inputRef_1.current.value
        }))
        
    }

  return (
    <Form>
        <Row className='g-2'> 
            <Col lg='8'> {/* lg는 large사이즈 데스크탑기준 */}
                <Form.Control type='text' ref={inputRef_1}  placeholder='댓글 내용 작성'/>
            </Col>
            <Col>
                <Form.Control type='text' ref={inputRef_2} placeholder='작성자 이름'/>
            </Col>
        </Row>
        <Row className='my-2'>
            {/* 버튼 사이에 너비를 주고 싶을 때. 마진은 mx 또는 my */}
            <Col lg='12'>
                <Button className='w-100' variant='dark' onClick={handleSubmit}>등록</Button>
                {/* w-숫자 : 너비값을 %로 지정 (0,25,50,78,100) / w는 width */}
            </Col>
        </Row>
    </Form>
  ) 
}

export default CommentForm