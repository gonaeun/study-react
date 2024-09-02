import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { searchComment } from '../redux/reducers/CommentSlice';

const SearchBox = () => {

  // 입력받은 값 가져오려면 useRef
  const inputRef = useRef()

  // 전달요청 : dispatch 필요해
  const dispatch = useDispatch()

  const handleSearch = ()=>{
    dispatch(searchComment({keyword:inputRef.current.value}))
  }

  return (
    <Form>
      <Row className='g-2'>  
        {/* gap-숫자 의미 */}
        <Col>
          <Form.Control
              type='text'
              placeholder='검색할 키워드를 입력해주세요.'
              ref={inputRef} />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSearch}> 검색</Button>
        </Col>
      </Row>
    </Form>
  )
}


export default SearchBox