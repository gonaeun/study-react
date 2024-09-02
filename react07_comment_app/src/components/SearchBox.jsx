import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
  return (
    <Form>
      <Row className='g-2'>  //gap-숫자 의미
        <Col>
          <Form.Control type='text' placeholder='검색할 키워드를 입력해주세요.' />
        </Col>
        <Col>
          <Button variant="dark"> 검색</Button>
        </Col>
      </Row>
    </Form>
  )
}


export default SearchBox